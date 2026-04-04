import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useProgress } from '../contexts/ProgressContext'
import { lessons, levelInfo } from '../data/lessons'
import LessonCard from '../components/LessonCard'
import ProgressBar from '../components/ProgressBar'

export default function LevelPage() {
  const { level } = useParams()
  const { t, localizedField } = useLanguage()
  const { getLevelProgress, isLevelCompleted } = useProgress()

  const info = levelInfo[level]
  const levelLessons = lessons[level] || []
  const progress = getLevelProgress(level)
  const completed = isLevelCompleted(level)
  const levels = Object.keys(levelInfo)
  const currentIndex = levels.indexOf(level)
  const prevLevel = currentIndex > 0 ? levels[currentIndex - 1] : null
  const nextLevel = currentIndex < levels.length - 1 ? levels[currentIndex + 1] : null

  if (!info) {
    return (
      <div className="level-page">
        <div className="level-not-found">
          <i className="fa-solid fa-exclamation-triangle" />
          <h2>{t('level.notFound')}</h2>
          <Link to="/" className="back-home-btn">{t('level.backHome')}</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="level-page">
      {/* Level Header */}
      <section className="level-header" style={{ borderColor: info.color }}>
        <div className="level-header-content">
          <div className="level-breadcrumb">
            <Link to="/">{t('nav.home')}</Link>
            <i className="fa-solid fa-chevron-right" />
            <span style={{ color: info.color }}>{localizedField(info, 'title') || info.title}</span>
          </div>

          <div className="level-title-row">
            <div className="level-icon-badge" style={{ background: info.color }}>
              <i className={info.icon} />
            </div>
            <div>
              <h1 className="level-title" style={{ color: info.color }}>
                {localizedField(info, 'title') || info.title}
              </h1>
              <p className="level-description">
                {localizedField(info, 'description') || info.description}
              </p>
            </div>
          </div>

          <div className="level-progress-bar">
            <ProgressBar
              value={progress}
              color={info.color}
              label={`${t('level.progress')} - ${levelLessons.length} ${t('level.lessonsTotal')}`}
            />
          </div>

          {completed && (
            <div className="level-completed-banner" style={{ background: `${info.color}15`, borderColor: info.color }}>
              <i className="fa-solid fa-trophy" style={{ color: info.color }} />
              <span>{t('level.completedBanner')}</span>
            </div>
          )}
        </div>
      </section>

      {/* Lessons Grid */}
      <section className="level-lessons">
        <div className="lessons-grid">
          {levelLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} level={level} />
          ))}
        </div>

        {levelLessons.length === 0 && (
          <div className="no-lessons">
            <i className="fa-solid fa-folder-open" />
            <p>{t('level.noLessons')}</p>
          </div>
        )}
      </section>

      {/* Level Navigation */}
      <section className="level-nav">
        {prevLevel ? (
          <Link to={`/${prevLevel}`} className="level-nav-btn prev">
            <i className="fa-solid fa-arrow-left" />
            <div>
              <span className="level-nav-label">{t('level.prevLevel')}</span>
              <span className="level-nav-name" style={{ color: levelInfo[prevLevel].color }}>
                {localizedField(levelInfo[prevLevel], 'title') || levelInfo[prevLevel].title}
              </span>
            </div>
          </Link>
        ) : <div />}

        {nextLevel ? (
          <Link to={`/${nextLevel}`} className="level-nav-btn next">
            <div>
              <span className="level-nav-label">{t('level.nextLevel')}</span>
              <span className="level-nav-name" style={{ color: levelInfo[nextLevel].color }}>
                {localizedField(levelInfo[nextLevel], 'title') || levelInfo[nextLevel].title}
              </span>
            </div>
            <i className="fa-solid fa-arrow-right" />
          </Link>
        ) : <div />}
      </section>
    </div>
  )
}
