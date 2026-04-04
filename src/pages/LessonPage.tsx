import { useParams, Link, useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useProgress } from '../contexts/ProgressContext'
import { useAuth } from '../contexts/AuthContext'
import { lessons, levelInfo } from '../data/lessons'
import { lessonContents } from '../data/lessonContents'
import CodeEditor from '../components/CodeEditor'

export default function LessonPage() {
  const { level, lessonId } = useParams()
  const navigate = useNavigate()
  const { t, localizedField } = useLanguage()
  const { completedLessons, completeLesson, uncompleteLesson } = useProgress()
  const { requireAuth } = useAuth()

  const levelLessons = lessons[level] || []
  const lesson = levelLessons.find(l => l.id === lessonId)
  const content = lessonContents[lessonId]
  const info = levelInfo[level]
  const isCompleted = completedLessons.has(lessonId)

  const { prevLesson, nextLesson } = useMemo(() => {
    const index = levelLessons.findIndex(l => l.id === lessonId)
    return {
      prevLesson: index > 0 ? levelLessons[index - 1] : null,
      nextLesson: index < levelLessons.length - 1 ? levelLessons[index + 1] : null,
    }
  }, [levelLessons, lessonId])

  const handleToggleComplete = () => {
    if (isCompleted) {
      uncompleteLesson(lessonId)
    } else {
      requireAuth(() => completeLesson(lessonId))
    }
  }

  if (!lesson || !info) {
    return (
      <div className="lesson-page">
        <div className="lesson-not-found">
          <i className="fa-solid fa-exclamation-triangle" />
          <h2>{t('lesson.notFound')}</h2>
          <Link to="/" className="back-home-btn">{t('lesson.backHome')}</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="lesson-page">
      {/* Lesson Header */}
      <section className="lesson-header">
        <div className="lesson-breadcrumb">
          <Link to="/">{t('nav.home')}</Link>
          <i className="fa-solid fa-chevron-right" />
          <Link to={`/${level}`} style={{ color: info.color }}>
            {localizedField(info, 'title') || info.title}
          </Link>
          <i className="fa-solid fa-chevron-right" />
          <span>{localizedField(lesson, 'title')}</span>
        </div>

        <div className="lesson-title-section">
          <div className="lesson-icon-wrapper" style={{ background: `${info.color}15`, color: info.color }}>
            <i className={lesson.icon} />
          </div>
          <div className="lesson-title-info">
            <h1 className="lesson-title">{localizedField(lesson, 'title')}</h1>
            <p className="lesson-desc">{localizedField(lesson, 'description')}</p>
            <div className="lesson-meta">
              <span className="lesson-time">
                <i className="fa-regular fa-clock" />
                {lesson.estimatedTime}{t('lesson.minutes')}
              </span>
              <span className="lesson-difficulty">
                {Array.from({ length: 3 }, (_, i) => (
                  <i key={i} className={i < lesson.difficulty ? 'fa-solid fa-star' : 'fa-regular fa-star'} />
                ))}
              </span>
              {lesson.topics && (
                <span className="lesson-topic-count">
                  <i className="fa-solid fa-tags" />
                  {lesson.topics.length} {t('lesson.topicCount')}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Content */}
      <section className="lesson-content">
        {content ? (
          <div className="lesson-content-body">
            {content.sections?.map((section, idx) => (
              <div key={idx} className="content-section">
                {section.heading && <h2 className="content-heading">{localizedField(section, 'heading')}</h2>}
                {section.text && (
                  <div className="content-text">
                    {(typeof section.text === 'string' ? [section.text] : section.text).map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {section.code && (
                  <CodeEditor
                    initialCode={section.code}
                    expectedOutput={section.expectedOutput || ''}
                    lessonId={lessonId}
                  />
                )}
                {section.tip && (
                  <div className="content-tip">
                    <i className="fa-solid fa-lightbulb" />
                    <span>{localizedField(section, 'tip')}</span>
                  </div>
                )}
                {section.warning && (
                  <div className="content-warning">
                    <i className="fa-solid fa-triangle-exclamation" />
                    <span>{localizedField(section, 'warning')}</span>
                  </div>
                )}
              </div>
            ))}

            {/* Topics List */}
            {lesson.topics && lesson.topics.length > 0 && (
              <div className="lesson-topics-section">
                <h3>{t('lesson.topicsCovered')}</h3>
                <ul className="topics-list">
                  {lesson.topics.map((topic, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-check" style={{ color: info.color }} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="lesson-content-placeholder">
            <div className="placeholder-icon">
              <i className="fa-solid fa-file-code" />
            </div>
            <h3>{t('lesson.contentComingSoon')}</h3>
            <p>{t('lesson.contentComingSoonDesc')}</p>

            {lesson.topics && (
              <div className="lesson-topics-section">
                <h3>{t('lesson.topicsCovered')}</h3>
                <ul className="topics-list">
                  {lesson.topics.map((topic, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-check" style={{ color: info.color }} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Complete Button */}
      <section className="lesson-actions">
        <button
          className={`complete-btn ${isCompleted ? 'completed' : ''}`}
          onClick={handleToggleComplete}
          style={isCompleted ? { background: info.color } : { borderColor: info.color, color: info.color }}
        >
          {isCompleted ? (
            <>
              <i className="fa-solid fa-check-circle" />
              {t('lesson.markIncomplete')}
            </>
          ) : (
            <>
              <i className="fa-regular fa-circle-check" />
              {t('lesson.markComplete')}
            </>
          )}
        </button>
      </section>

      {/* Prev / Next Navigation */}
      <section className="lesson-nav">
        {prevLesson ? (
          <Link to={`/${level}/${prevLesson.id}`} className="lesson-nav-btn prev">
            <i className="fa-solid fa-arrow-left" />
            <div>
              <span className="lesson-nav-label">{t('lesson.prevLesson')}</span>
              <span className="lesson-nav-title">{localizedField(prevLesson, 'title')}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextLesson ? (
          <Link to={`/${level}/${nextLesson.id}`} className="lesson-nav-btn next">
            <div>
              <span className="lesson-nav-label">{t('lesson.nextLesson')}</span>
              <span className="lesson-nav-title">{localizedField(nextLesson, 'title')}</span>
            </div>
            <i className="fa-solid fa-arrow-right" />
          </Link>
        ) : (
          <Link to={`/${level}`} className="lesson-nav-btn next">
            <div>
              <span className="lesson-nav-label">{t('lesson.backToLevel')}</span>
              <span className="lesson-nav-title" style={{ color: info.color }}>
                {localizedField(info, 'title') || info.title}
              </span>
            </div>
            <i className="fa-solid fa-arrow-right" />
          </Link>
        )}
      </section>
    </div>
  )
}
