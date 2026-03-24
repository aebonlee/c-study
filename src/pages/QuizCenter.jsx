import { useState, useMemo } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useProgress } from '../contexts/ProgressContext'
import { quizzes } from '../data/quizzes'
import QuizComponent from '../components/QuizComponent'
import ProgressBar from '../components/ProgressBar'

export default function QuizCenter() {
  const { t, localizedField } = useLanguage()
  const { getQuizBestScore, getQuizAttempts } = useProgress()
  const [selectedQuiz, setSelectedQuiz] = useState(null)

  const quizList = useMemo(() => {
    return Object.entries(quizzes).map(([id, quiz]) => {
      const bestScore = getQuizBestScore(id)
      const attempts = getQuizAttempts(id)
      return { ...quiz, id, bestScore, attempts }
    })
  }, [getQuizBestScore, getQuizAttempts])

  const stats = useMemo(() => {
    const total = quizList.length
    const attempted = quizList.filter(q => q.bestScore !== undefined).length
    const passed = quizList.filter(q => q.bestScore >= 70).length
    const perfect = quizList.filter(q => q.bestScore === 100).length
    return { total, attempted, passed, perfect }
  }, [quizList])

  const handleSelectQuiz = (quiz) => {
    setSelectedQuiz(quiz)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToList = () => {
    setSelectedQuiz(null)
  }

  const getScoreColor = (score) => {
    if (score === undefined) return 'var(--text-muted)'
    if (score === 100) return '#4FC3F7'
    if (score >= 70) return '#66BB6A'
    if (score >= 40) return '#FFA726'
    return '#EF5350'
  }

  const getScoreLabel = (score) => {
    if (score === undefined) return t('quiz.notAttempted')
    if (score === 100) return t('quiz.perfect')
    if (score >= 70) return t('quiz.passed')
    return t('quiz.failed')
  }

  if (selectedQuiz) {
    return (
      <div className="quiz-center-page">
        <div className="quiz-active-header">
          <button className="quiz-back-btn" onClick={handleBackToList}>
            <i className="fa-solid fa-arrow-left" />
            {t('quiz.backToList')}
          </button>
          <h2>{localizedField(selectedQuiz, 'title')}</h2>
        </div>
        <QuizComponent quiz={selectedQuiz} onBack={handleBackToList} />
      </div>
    )
  }

  return (
    <div className="quiz-center-page">
      {/* Header */}
      <section className="quiz-header">
        <h1>
          <i className="fa-solid fa-clipboard-check" />
          {t('quiz.title')}
        </h1>
        <p className="quiz-subtitle">{t('quiz.subtitle')}</p>

        {/* Stats Overview */}
        <div className="quiz-stats-grid">
          <div className="quiz-stat-card">
            <div className="quiz-stat-icon" style={{ background: '#1B3A5C' }}>
              <i className="fa-solid fa-list-check" />
            </div>
            <div className="quiz-stat-info">
              <span className="quiz-stat-value">{stats.total}</span>
              <span className="quiz-stat-label">{t('quiz.totalQuizzes')}</span>
            </div>
          </div>
          <div className="quiz-stat-card">
            <div className="quiz-stat-icon" style={{ background: '#FFA726' }}>
              <i className="fa-solid fa-pen-to-square" />
            </div>
            <div className="quiz-stat-info">
              <span className="quiz-stat-value">{stats.attempted}</span>
              <span className="quiz-stat-label">{t('quiz.attempted')}</span>
            </div>
          </div>
          <div className="quiz-stat-card">
            <div className="quiz-stat-icon" style={{ background: '#66BB6A' }}>
              <i className="fa-solid fa-circle-check" />
            </div>
            <div className="quiz-stat-info">
              <span className="quiz-stat-value">{stats.passed}</span>
              <span className="quiz-stat-label">{t('quiz.passed')}</span>
            </div>
          </div>
          <div className="quiz-stat-card">
            <div className="quiz-stat-icon" style={{ background: '#4FC3F7' }}>
              <i className="fa-solid fa-star" />
            </div>
            <div className="quiz-stat-info">
              <span className="quiz-stat-value">{stats.perfect}</span>
              <span className="quiz-stat-label">{t('quiz.perfectScore')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz List */}
      <section className="quiz-list-section">
        <div className="quiz-list">
          {quizList.map((quiz) => (
            <div
              key={quiz.id}
              className={`quiz-list-card ${quiz.bestScore >= 70 ? 'passed' : ''} ${quiz.bestScore === 100 ? 'perfect' : ''}`}
              onClick={() => handleSelectQuiz(quiz)}
            >
              <div className="quiz-card-left">
                <div className="quiz-card-icon">
                  <i className={quiz.icon || 'fa-solid fa-question-circle'} />
                </div>
                <div className="quiz-card-info">
                  <h3>{localizedField(quiz, 'title')}</h3>
                  <p>{localizedField(quiz, 'description')}</p>
                  <div className="quiz-card-meta">
                    <span>
                      <i className="fa-solid fa-list" />
                      {quiz.questions?.length || 0} {t('quiz.questions')}
                    </span>
                    {quiz.attempts.length > 0 && (
                      <span>
                        <i className="fa-solid fa-rotate" />
                        {quiz.attempts.length} {t('quiz.attempts')}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="quiz-card-right">
                {quiz.bestScore !== undefined ? (
                  <div className="quiz-score-badge" style={{ borderColor: getScoreColor(quiz.bestScore) }}>
                    <span className="score-value" style={{ color: getScoreColor(quiz.bestScore) }}>
                      {quiz.bestScore}
                    </span>
                    <span className="score-label" style={{ color: getScoreColor(quiz.bestScore) }}>
                      {getScoreLabel(quiz.bestScore)}
                    </span>
                  </div>
                ) : (
                  <div className="quiz-start-badge">
                    <i className="fa-solid fa-play" />
                    <span>{t('quiz.start')}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {Object.keys(quizzes).length === 0 && (
          <div className="no-quizzes">
            <i className="fa-solid fa-clipboard" />
            <h3>{t('quiz.noQuizzes')}</h3>
            <p>{t('quiz.noQuizzesDesc')}</p>
          </div>
        )}
      </section>
    </div>
  )
}
