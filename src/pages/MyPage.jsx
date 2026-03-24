import { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useProgress } from '../contexts/ProgressContext'
import { useAuth } from '../contexts/AuthContext'
import { useBadge } from '../contexts/BadgeContext'
import { lessons, levelInfo } from '../data/lessons'
import { badges } from '../data/badges'
import ProgressBar from '../components/ProgressBar'

export default function MyPage() {
  const { t, lang, localizedField } = useLanguage()
  const { completedLessons, codeRuns, streak, getTotalProgress, getLevelProgress, quizScores } = useProgress()
  const { user, signOut, isAuthenticated, isAdmin, isTeacher } = useAuth()
  const { earnedBadges } = useBadge()
  const navigate = useNavigate()

  const totalProgress = getTotalProgress()
  const totalLessons = useMemo(() => Object.values(lessons).flat().length, [])

  const recentBadges = useMemo(() => {
    return badges.filter(b => earnedBadges.includes(b.id)).slice(-4)
  }, [earnedBadges])

  const quizStats = useMemo(() => {
    const entries = Object.entries(quizScores)
    const totalAttempts = entries.reduce((sum, [, data]) => sum + (data?.attempts?.length || 0), 0)
    const avgScore = entries.length > 0
      ? Math.round(entries.reduce((sum, [, data]) => sum + (data?.bestScore || 0), 0) / entries.length)
      : 0
    return { quizCount: entries.length, totalAttempts, avgScore }
  }, [quizScores])

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  if (!isAuthenticated) {
    return (
      <div className="mypage">
        <div className="mypage-login-prompt">
          <i className="fa-solid fa-user-lock" />
          <h2>{lang === 'en' ? 'Login Required' : '로그인이 필요합니다'}</h2>
          <p>{lang === 'en' ? 'Please log in to view your profile and progress.' : '프로필과 진행 상황을 확인하려면 로그인해 주세요.'}</p>
          <Link to="/login" className="mypage-login-btn">
            <i className="fa-solid fa-right-to-bracket" />
            {lang === 'en' ? 'Go to Login' : '로그인하러 가기'}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mypage">
      {/* Profile Header */}
      <section className="mypage-profile">
        <div className="profile-card">
          <div className="profile-avatar">
            {user?.user_metadata?.avatar_url ? (
              <img src={user.user_metadata.avatar_url} alt="avatar" />
            ) : (
              <i className="fa-solid fa-user" />
            )}
          </div>
          <div className="profile-info">
            <h1>{user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email}</h1>
            <p className="profile-email">{user?.email}</p>
            <div className="profile-tags">
              {isAdmin && <span className="profile-tag admin-tag"><i className="fa-solid fa-shield" /> Admin</span>}
              {isTeacher && <span className="profile-tag teacher-tag"><i className="fa-solid fa-chalkboard-teacher" /> Teacher</span>}
              <span className="profile-tag">
                <i className="fa-solid fa-fire" /> {streak.count} {lang === 'en' ? 'day streak' : '일 연속'}
              </span>
            </div>
          </div>
          <button className="signout-btn" onClick={handleSignOut}>
            <i className="fa-solid fa-right-from-bracket" />
            {lang === 'en' ? 'Sign Out' : '로그아웃'}
          </button>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="mypage-stats">
        <h2>
          <i className="fa-solid fa-chart-bar" />
          {lang === 'en' ? 'My Statistics' : '나의 통계'}
        </h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon-circle" style={{ background: '#4FC3F720', color: '#4FC3F7' }}>
              <i className="fa-solid fa-chart-line" />
            </div>
            <div className="stat-detail">
              <span className="stat-value">{totalProgress}%</span>
              <span className="stat-label">{lang === 'en' ? 'Total Progress' : '전체 진행률'}</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-circle" style={{ background: '#66BB6A20', color: '#66BB6A' }}>
              <i className="fa-solid fa-check-double" />
            </div>
            <div className="stat-detail">
              <span className="stat-value">{completedLessons.size}/{totalLessons}</span>
              <span className="stat-label">{lang === 'en' ? 'Lessons Completed' : '완료한 레슨'}</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-circle" style={{ background: '#FFA72620', color: '#FFA726' }}>
              <i className="fa-solid fa-play-circle" />
            </div>
            <div className="stat-detail">
              <span className="stat-value">{codeRuns}</span>
              <span className="stat-label">{lang === 'en' ? 'Code Runs' : '코드 실행'}</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-circle" style={{ background: '#AB47BC20', color: '#AB47BC' }}>
              <i className="fa-solid fa-award" />
            </div>
            <div className="stat-detail">
              <span className="stat-value">{earnedBadges.length}/{badges.length}</span>
              <span className="stat-label">{lang === 'en' ? 'Badges Earned' : '획득 배지'}</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-circle" style={{ background: '#EF535020', color: '#EF5350' }}>
              <i className="fa-solid fa-clipboard-check" />
            </div>
            <div className="stat-detail">
              <span className="stat-value">{quizStats.avgScore}</span>
              <span className="stat-label">{lang === 'en' ? 'Avg Quiz Score' : '평균 퀴즈 점수'}</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-circle" style={{ background: '#26C6DA20', color: '#26C6DA' }}>
              <i className="fa-solid fa-fire" />
            </div>
            <div className="stat-detail">
              <span className="stat-value">{streak.count}</span>
              <span className="stat-label">{lang === 'en' ? 'Day Streak' : '연속 학습일'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Level Progress */}
      <section className="mypage-levels">
        <h2>
          <i className="fa-solid fa-layer-group" />
          {lang === 'en' ? 'Level Progress' : '레벨별 진행률'}
        </h2>
        <div className="level-progress-list">
          {Object.entries(levelInfo).map(([level, info]) => {
            const progress = getLevelProgress(level)
            const levelLessonCount = (lessons[level] || []).length
            const completedCount = (lessons[level] || []).filter(l => completedLessons.has(l.id)).length
            return (
              <Link to={`/${level}`} key={level} className="level-progress-item">
                <div className="level-progress-header">
                  <div className="level-progress-icon" style={{ color: info.color }}>
                    <i className={info.icon} />
                  </div>
                  <div className="level-progress-info">
                    <h3>{localizedField(info, 'title') || info.title}</h3>
                    <span className="level-lesson-count">{completedCount}/{levelLessonCount} {lang === 'en' ? 'lessons' : '레슨'}</span>
                  </div>
                  <span className="level-progress-percent" style={{ color: info.color }}>{progress}%</span>
                </div>
                <ProgressBar value={progress} color={info.color} size="sm" showPercent={false} />
              </Link>
            )
          })}
        </div>
      </section>

      {/* Recent Badges */}
      <section className="mypage-badges">
        <div className="section-header-row">
          <h2>
            <i className="fa-solid fa-trophy" />
            {lang === 'en' ? 'Recent Badges' : '최근 배지'}
          </h2>
          <Link to="/badges" className="view-all-link">
            {lang === 'en' ? 'View All' : '전체 보기'} <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
        {recentBadges.length > 0 ? (
          <div className="recent-badges-grid">
            {recentBadges.map(badge => (
              <div key={badge.id} className={`recent-badge-card tier-${badge.tier}`}>
                <div className="recent-badge-icon">
                  <i className={badge.icon} />
                </div>
                <span className="recent-badge-title">{localizedField(badge, 'title')}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-badges-msg">
            <i className="fa-solid fa-medal" />
            <p>{lang === 'en' ? 'Complete lessons and quizzes to earn your first badge!' : '레슨과 퀴즈를 완료하여 첫 번째 배지를 획득하세요!'}</p>
          </div>
        )}
      </section>

      {/* Quick Actions */}
      <section className="mypage-actions">
        <h2>
          <i className="fa-solid fa-bolt" />
          {lang === 'en' ? 'Quick Actions' : '빠른 실행'}
        </h2>
        <div className="actions-grid">
          <Link to="/beginner" className="action-card">
            <i className="fa-solid fa-book" />
            <span>{lang === 'en' ? 'Continue Learning' : '학습 계속하기'}</span>
          </Link>
          <Link to="/quiz" className="action-card">
            <i className="fa-solid fa-clipboard-check" />
            <span>{lang === 'en' ? 'Take a Quiz' : '퀴즈 풀기'}</span>
          </Link>
          <Link to="/practice" className="action-card">
            <i className="fa-solid fa-dumbbell" />
            <span>{lang === 'en' ? 'Practice Code' : '코드 연습'}</span>
          </Link>
          <Link to="/community" className="action-card">
            <i className="fa-solid fa-comments" />
            <span>{lang === 'en' ? 'Community' : '커뮤니티'}</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
