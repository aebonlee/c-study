import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useProgress } from '../contexts/ProgressContext'
import { useAuth } from '../contexts/AuthContext'
import { useBadge } from '../contexts/BadgeContext'
import { lessons, levelInfo } from '../data/lessons'
import ProgressBar from '../components/ProgressBar'

const floatingCodes = [
  '#include <stdio.h>',
  'int main() {',
  'printf("Hello");',
  'int *ptr = &x;',
  'malloc(sizeof(int))',
  'return 0;',
]

function FloatingCode({ text, style }) {
  return (
    <div className="floating-code" style={style}>
      <code>{text}</code>
    </div>
  )
}

export default function Home() {
  const { t } = useLanguage()
  const { getTotalProgress, getLevelProgress, completedLessons, codeRuns, streak } = useProgress()
  const { isAuthenticated } = useAuth()
  const { earnedBadges } = useBadge()
  const [animatedStats, setAnimatedStats] = useState({ lessons: 0, hours: 0, projects: 0 })

  const totalProgress = getTotalProgress()
  const totalLessons = useMemo(() => Object.values(lessons).flat().length, [])

  useEffect(() => {
    const targets = { lessons: totalLessons, hours: 50, projects: 11 }
    const duration = 1500
    const steps = 30
    const interval = duration / steps
    let step = 0

    const timer = setInterval(() => {
      step++
      const progress = step / steps
      setAnimatedStats({
        lessons: Math.round(targets.lessons * progress),
        hours: Math.round(targets.hours * progress),
        projects: Math.round(targets.projects * progress),
      })
      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [totalLessons])

  const levels = Object.keys(levelInfo)

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-particles">
          {floatingCodes.map((code, i) => (
            <FloatingCode
              key={i}
              text={code}
              style={{
                top: `${10 + i * 14}%`,
                left: `${5 + (i % 3) * 30}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${6 + i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="hero-content hero-two-col">
          <div className="hero-text-col">
            <div className="hero-badge">
              <i className="fa-solid fa-terminal" />
              <span>{t('home.heroBadge')}</span>
            </div>

            <h1 className="hero-title">
              {t('home.heroTitle1')}<br />
              <span className="hero-highlight">C Programming Tutorial</span><br />
              <span className="hero-title-sub">{t('home.heroTitle3')}</span>
            </h1>

            <p className="hero-subtitle">{t('home.heroSubtitle')}</p>

            <div className="hero-actions">
              <Link to="/basics" className="hero-btn primary-btn">
                <i className="fa-solid fa-rocket" />
                {t('home.startLearning')}
              </Link>
              <Link to="/c-learning" className="hero-btn secondary-btn">
                <i className="fa-solid fa-book-open" />
                {t('home.curriculum')}
              </Link>
            </div>
          </div>

          <div className="hero-terminal-col">
            {/* Source Code */}
            <div className="hero-terminal">
              <div className="terminal-header">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span className="terminal-title">hello.c</span>
              </div>
              <div className="terminal-body">
                <pre className="terminal-code"><code><span className="code-preprocessor">#include</span> <span className="code-string">&lt;stdio.h&gt;</span>{'\n'}{'\n'}<span className="code-type">int</span> <span className="code-fn">main</span>() {'{'}{'\n'}{'    '}<span className="code-fn">printf</span>(<span className="code-string">"Hello, C Programming!\n"</span>);{'\n'}{'    '}<span className="code-keyword">return</span> <span className="code-number">0</span>;{'\n'}{'}'}</code></pre>
              </div>
            </div>

            {/* Terminal Output */}
            <div className="hero-terminal hero-terminal-run">
              <div className="terminal-header">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span className="terminal-title">terminal</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="terminal-prompt">$ </span>
                  <span className="terminal-command">gcc -o hello hello.c</span>
                </div>
                <div className="terminal-line">
                  <span className="terminal-prompt">$ </span>
                  <span className="terminal-command">./hello</span>
                </div>
                <div className="terminal-line terminal-output">
                  Hello, C Programming!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fa-solid fa-book" />
            </div>
            <div className="stat-number">{animatedStats.lessons}+</div>
            <div className="stat-label">{t('home.statsLessons')}</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fa-solid fa-clock" />
            </div>
            <div className="stat-number">{animatedStats.hours}+</div>
            <div className="stat-label">{t('home.statsHours')}</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fa-solid fa-code" />
            </div>
            <div className="stat-number">{animatedStats.projects}+</div>
            <div className="stat-label">{t('home.statsProjects')}</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fa-solid fa-trophy" />
            </div>
            <div className="stat-number">5</div>
            <div className="stat-label">{t('home.statsLevels')}</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">{t('home.featuresTitle')}</h2>
        <p className="section-subtitle">{t('home.featuresSubtitle')}</p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #4FC3F7, #1B3A5C)' }}>
              <i className="fa-solid fa-graduation-cap" />
            </div>
            <h3>{t('home.feature1Title')}</h3>
            <p>{t('home.feature1Desc')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #66BB6A, #2E7D32)' }}>
              <i className="fa-solid fa-laptop-code" />
            </div>
            <h3>{t('home.feature2Title')}</h3>
            <p>{t('home.feature2Desc')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #FFA726, #E65100)' }}>
              <i className="fa-solid fa-medal" />
            </div>
            <h3>{t('home.feature3Title')}</h3>
            <p>{t('home.feature3Desc')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #AB47BC, #6A1B9A)' }}>
              <i className="fa-solid fa-brain" />
            </div>
            <h3>{t('home.feature4Title')}</h3>
            <p>{t('home.feature4Desc')}</p>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="learning-path-section">
        <h2 className="section-title">{t('home.pathTitle')}</h2>
        <p className="section-subtitle">{t('home.pathSubtitle')}</p>

        <div className="path-timeline">
          {levels.map((level, index) => {
            const info = levelInfo[level]
            const progress = getLevelProgress(level)
            return (
              <Link to={`/${level}`} key={level} className="path-node">
                <div className="path-connector" style={{ background: info.color }}>
                  <span className="path-step">{index + 1}</span>
                </div>
                <div className="path-content">
                  <h3 style={{ color: info.color }}>
                    <i className={info.icon} /> {info.title}
                  </h3>
                  <p>{info.description}</p>
                  <ProgressBar value={progress} size="sm" color={info.color} />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Progress Overview (for logged-in users) */}
      {isAuthenticated && (
        <section className="progress-overview-section">
          <h2 className="section-title">{t('home.progressTitle')}</h2>
          <div className="progress-overview-grid">
            <div className="overview-card">
              <div className="overview-icon">
                <i className="fa-solid fa-chart-line" />
              </div>
              <div className="overview-info">
                <span className="overview-value">{totalProgress}%</span>
                <span className="overview-label">{t('home.totalProgress')}</span>
              </div>
              <ProgressBar value={totalProgress} color="#4FC3F7" />
            </div>
            <div className="overview-card">
              <div className="overview-icon">
                <i className="fa-solid fa-check-circle" />
              </div>
              <div className="overview-info">
                <span className="overview-value">{completedLessons.size}/{totalLessons}</span>
                <span className="overview-label">{t('home.completedLessons')}</span>
              </div>
            </div>
            <div className="overview-card">
              <div className="overview-icon">
                <i className="fa-solid fa-fire" />
              </div>
              <div className="overview-info">
                <span className="overview-value">{streak.count}</span>
                <span className="overview-label">{t('home.streakDays')}</span>
              </div>
            </div>
            <div className="overview-card">
              <div className="overview-icon">
                <i className="fa-solid fa-play" />
              </div>
              <div className="overview-info">
                <span className="overview-value">{codeRuns}</span>
                <span className="overview-label">{t('home.codeRuns')}</span>
              </div>
            </div>
            <div className="overview-card">
              <div className="overview-icon">
                <i className="fa-solid fa-award" />
              </div>
              <div className="overview-info">
                <span className="overview-value">{earnedBadges.length}</span>
                <span className="overview-label">{t('home.badgesEarned')}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>{t('home.ctaTitle')}</h2>
          <p>{t('home.ctaSubtitle')}</p>
          <div className="cta-actions">
            {!isAuthenticated ? (
              <Link to="/login" className="cta-btn primary-btn">
                <i className="fa-solid fa-user-plus" />
                {t('home.ctaSignUp')}
              </Link>
            ) : (
              <Link to="/beginner" className="cta-btn primary-btn">
                <i className="fa-solid fa-arrow-right" />
                {t('home.ctaContinue')}
              </Link>
            )}
            <Link to="/guide" className="cta-btn secondary-btn">
              <i className="fa-solid fa-question-circle" />
              {t('home.ctaGuide')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
