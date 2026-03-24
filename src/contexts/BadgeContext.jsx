import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { badges } from '../data/badges'
import { useProgress } from './ProgressContext'
import { useLanguage } from './LanguageContext'
import { lessons } from '../data/lessons'

const BadgeContext = createContext()

const STORAGE_KEY = 'cmaster-badges'

export function BadgeProvider({ children }) {
  const [earnedBadges, setEarnedBadges] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch { return [] }
  })
  const [newBadge, setNewBadge] = useState(null)

  const { completedLessons, quizScores, codeRuns, streak, isLevelCompleted, getQuizBestScore } = useProgress()
  const { lang, localizedField } = useLanguage()

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(earnedBadges))
  }, [earnedBadges])

  useEffect(() => {
    const newlyEarned = []

    for (const badge of badges) {
      if (earnedBadges.includes(badge.id)) continue

      const { condition } = badge
      let earned = false

      switch (condition.type) {
        case 'lesson_complete':
          earned = completedLessons.has(condition.lessonId)
          break
        case 'lessons_complete':
          earned = condition.lessonIds.every(id => completedLessons.has(id))
          break
        case 'level_complete':
          earned = isLevelCompleted(condition.level)
          break
        case 'all_levels_complete':
          earned = Object.keys(lessons).every(level => isLevelCompleted(level))
          break
        case 'quiz_complete_count':
          earned = Object.keys(quizScores).length >= condition.count
          break
        case 'quiz_perfect_score':
          earned = Object.values(quizScores).some(s => s?.bestScore === 100)
          break
        case 'practice_complete_count':
          earned = codeRuns >= condition.count
          break
        case 'code_runs':
          earned = codeRuns >= condition.count
          break
        case 'streak':
          earned = streak.count >= condition.days
          break
        default:
          break
      }

      if (earned) newlyEarned.push(badge.id)
    }

    if (newlyEarned.length > 0) {
      setEarnedBadges(prev => [...prev, ...newlyEarned])
      const badgeData = badges.find(b => b.id === newlyEarned[0])
      if (badgeData) setNewBadge(badgeData)
    }
  }, [completedLessons, quizScores, codeRuns, streak, earnedBadges, isLevelCompleted, getQuizBestScore])

  const dismissBadgeNotification = useCallback(() => {
    setNewBadge(null)
  }, [])

  return (
    <BadgeContext.Provider value={{ earnedBadges, newBadge, dismissBadgeNotification }}>
      {children}
      {newBadge && (
        <div className="badge-notification" onClick={dismissBadgeNotification}>
          <div className="badge-notification-content">
            <div className="badge-notification-icon"><i className={newBadge.icon} /></div>
            <div className="badge-notification-text">
              <span className="badge-notification-label">{lang === 'en' ? 'New Badge Earned!' : '새 배지 획득!'}</span>
              <span className="badge-notification-title">{localizedField(newBadge, 'title')}</span>
              <span className="badge-notification-desc">{localizedField(newBadge, 'description')}</span>
            </div>
          </div>
        </div>
      )}
    </BadgeContext.Provider>
  )
}

export function useBadge() {
  const context = useContext(BadgeContext)
  if (!context) throw new Error('useBadge must be used within BadgeProvider')
  return context
}
