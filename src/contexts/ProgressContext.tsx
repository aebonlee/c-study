import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from 'react'
import { lessons } from '../data/lessons'
import { supabase, isSupabaseEnabled, TABLES } from '../config/supabase'
import { useAuth } from './AuthContext'

interface QuizScore {
  attempts: { score: number; date: string }[]
  bestScore: number
}

interface ProgressState {
  completedLessons: Set<string>
  quizScores: Record<string, QuizScore>
  codeRuns: number
  streak: { count: number; lastDate: string | null }
}

interface ProgressContextType {
  completedLessons: Set<string>
  quizScores: Record<string, QuizScore>
  codeRuns: number
  streak: { count: number; lastDate: string | null }
  completeLesson: (lessonId: string) => void
  uncompleteLesson: (lessonId: string) => void
  saveQuizScore: (quizId: string, score: number) => void
  incrementCodeRuns: () => void
  getTotalProgress: () => number
  getLevelProgress: (level: string) => number
  isLevelCompleted: (level: string) => boolean
  getQuizBestScore: (quizId: string) => number | undefined
  getQuizAttempts: (quizId: string) => any[]
}

const ProgressContext = createContext<ProgressContextType | null>(null)

const STORAGE_KEY = 'cmaster-progress'

function migrateQuizScores(quizScores: any) {
  if (!quizScores) return {}
  const migrated: Record<string, QuizScore> = {}
  for (const [quizId, value] of Object.entries(quizScores)) {
    if (typeof value === 'number') {
      migrated[quizId] = { attempts: [], bestScore: value }
    } else if (value && typeof value === 'object' && typeof (value as any).bestScore === 'number') {
      migrated[quizId] = value as QuizScore
    }
  }
  return migrated
}

function loadProgress(): ProgressState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const data = JSON.parse(saved)
      return {
        completedLessons: new Set(data.completedLessons || []),
        quizScores: migrateQuizScores(data.quizScores),
        codeRuns: data.codeRuns || 0,
        streak: data.streak || { count: 0, lastDate: null },
      }
    }
  } catch {}
  return {
    completedLessons: new Set(),
    quizScores: {},
    codeRuns: 0,
    streak: { count: 0, lastDate: null },
  }
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [state, setState] = useState<ProgressState>(loadProgress)
  const quizScoresRef = useRef(state.quizScores)
  quizScoresRef.current = state.quizScores
  const syncTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const initialSyncDone = useRef(false)

  useEffect(() => {
    const data = {
      completedLessons: Array.from(state.completedLessons),
      quizScores: state.quizScores,
      codeRuns: state.codeRuns,
      streak: state.streak,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [state])

  const syncToSupabase = useCallback((currentState: ProgressState) => {
    if (!user || !isSupabaseEnabled()) return
    let earnedBadges
    try {
      earnedBadges = JSON.parse(localStorage.getItem('cmaster-badges') || '[]')
    } catch { earnedBadges = [] }

    supabase.from(TABLES.USER_PROGRESS).upsert({
      user_id: user.id,
      completed_lessons: Array.from(currentState.completedLessons),
      code_runs: currentState.codeRuns,
      streak_count: currentState.streak.count,
      streak_last_date: currentState.streak.lastDate || null,
      earned_badges: earnedBadges,
      quiz_data: currentState.quizScores,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id' }).then(({ error }) => {
      if (error) console.error('진행 데이터 동기화 오류:', error.message)
    })
  }, [user])

  useEffect(() => {
    if (!user || !isSupabaseEnabled() || initialSyncDone.current) return
    initialSyncDone.current = true
    syncToSupabase(state)
  }, [user]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!user || !isSupabaseEnabled() || !initialSyncDone.current) return
    if (syncTimerRef.current) clearTimeout(syncTimerRef.current)
    syncTimerRef.current = setTimeout(() => {
      syncToSupabase(state)
    }, 2000)
    return () => { if (syncTimerRef.current) clearTimeout(syncTimerRef.current) }
  }, [user, state, syncToSupabase])

  const completeLesson = useCallback((lessonId: string) => {
    setState(prev => {
      const newCompleted = new Set(prev.completedLessons)
      newCompleted.add(lessonId)
      const today = new Date().toISOString().split('T')[0]
      let streak = { ...prev.streak }
      if (streak.lastDate !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
        if (streak.lastDate === yesterday) {
          streak = { count: streak.count + 1, lastDate: today }
        } else {
          streak = { count: 1, lastDate: today }
        }
      }
      return { ...prev, completedLessons: newCompleted, streak }
    })
  }, [])

  const uncompleteLesson = useCallback((lessonId: string) => {
    setState(prev => {
      const newCompleted = new Set(prev.completedLessons)
      newCompleted.delete(lessonId)
      return { ...prev, completedLessons: newCompleted }
    })
  }, [])

  const saveQuizScore = useCallback((quizId: string, score: number) => {
    const now = new Date().toISOString()
    setState(prev => {
      const existing = prev.quizScores[quizId] || { attempts: [], bestScore: 0 }
      const newAttempts = [...existing.attempts, { score, date: now }]
      const bestScore = Math.max(existing.bestScore, score)
      return {
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [quizId]: { attempts: newAttempts, bestScore }
        }
      }
    })

    if (user && isSupabaseEnabled()) {
      const existing = quizScoresRef.current[quizId]
      const prevBest = existing?.bestScore || 0
      const bestScore = Math.max(prevBest, score)
      supabase.from(TABLES.QUIZ_SCORES).upsert({
        user_id: user.id,
        quiz_id: quizId,
        score: bestScore,
        max_score: 100,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id,quiz_id' }).then(({ error }) => {
        if (error) console.error('퀴즈 점수 저장 오류:', error.message)
      })
    }
  }, [user])

  const incrementCodeRuns = useCallback(() => {
    setState(prev => ({ ...prev, codeRuns: prev.codeRuns + 1 }))
  }, [])

  const getTotalProgress = useCallback(() => {
    const total = Object.values(lessons).flat().length
    if (total === 0) return 0
    return Math.round((state.completedLessons.size / total) * 100)
  }, [state.completedLessons])

  const getLevelProgress = useCallback((level: string) => {
    const levelLessons = (lessons as Record<string, any[]>)[level] || []
    if (levelLessons.length === 0) return 0
    const completed = levelLessons.filter(l => state.completedLessons.has(l.id)).length
    return Math.round((completed / levelLessons.length) * 100)
  }, [state.completedLessons])

  const isLevelCompleted = useCallback((level: string) => {
    const levelLessons = (lessons as Record<string, any[]>)[level] || []
    return levelLessons.length > 0 && levelLessons.every(l => state.completedLessons.has(l.id))
  }, [state.completedLessons])

  const getQuizBestScore = useCallback((quizId: string) => {
    const data = state.quizScores[quizId]
    return data?.bestScore
  }, [state.quizScores])

  const getQuizAttempts = useCallback((quizId: string) => {
    const data = state.quizScores[quizId]
    return data?.attempts || []
  }, [state.quizScores])

  return (
    <ProgressContext.Provider value={{
      completedLessons: state.completedLessons,
      quizScores: state.quizScores,
      codeRuns: state.codeRuns,
      streak: state.streak,
      completeLesson,
      uncompleteLesson,
      saveQuizScore,
      incrementCodeRuns,
      getTotalProgress,
      getLevelProgress,
      isLevelCompleted,
      getQuizBestScore,
      getQuizAttempts,
    }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (!context) throw new Error('useProgress must be used within ProgressProvider')
  return context
}
