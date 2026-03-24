import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useAuth } from '../contexts/AuthContext'
import { lessons, levelInfo } from '../data/lessons'
import { supabase, isSupabaseEnabled, TABLES } from '../config/supabase'

export default function TeacherPage() {
  const { lang } = useLanguage()
  const { user, isTeacher, isAdmin, loading } = useAuth()
  const navigate = useNavigate()

  const [students, setStudents] = useState([])
  const [activeTab, setActiveTab] = useState('overview')
  const [loadingData, setLoadingData] = useState(false)

  const hasAccess = isTeacher || isAdmin

  useEffect(() => {
    if (!loading && !hasAccess) {
      navigate('/', { replace: true })
    }
  }, [loading, hasAccess, navigate])

  useEffect(() => {
    if (hasAccess && isSupabaseEnabled()) {
      fetchStudents()
    }
  }, [hasAccess])

  const fetchStudents = async () => {
    if (!isSupabaseEnabled()) return
    setLoadingData(true)
    try {
      const { data, error } = await supabase
        .from(TABLES.USER_PROGRESS)
        .select(`
          user_id,
          completed_lessons,
          code_runs,
          streak_count,
          streak_last_date,
          earned_badges,
          quiz_data,
          updated_at
        `)
        .order('updated_at', { ascending: false })

      if (!error && data) {
        // Enrich with user info
        const userIds = data.map(d => d.user_id)
        const { data: userData } = await supabase
          .from(TABLES.USERS)
          .select('id, name, email, avatar_url')
          .in('id', userIds)

        const userMap = {}
        if (userData) {
          for (const u of userData) {
            userMap[u.id] = u
          }
        }

        const enriched = data.map(d => ({
          ...d,
          user: userMap[d.user_id] || { name: 'Unknown', email: '' },
          completedCount: d.completed_lessons?.length || 0,
          badgeCount: d.earned_badges?.length || 0,
        }))

        setStudents(enriched)
      }
    } catch (err) {
      console.error('Failed to fetch student data:', err)
    }
    setLoadingData(false)
  }

  const totalLessons = Object.values(lessons).flat().length

  if (loading) {
    return (
      <div className="teacher-page">
        <div className="teacher-loading">
          <div className="loading-spinner" />
          <p>{lang === 'en' ? 'Loading...' : '로딩 중...'}</p>
        </div>
      </div>
    )
  }

  if (!hasAccess) return null

  return (
    <div className="teacher-page">
      {/* Header */}
      <section className="teacher-header">
        <h1>
          <i className="fa-solid fa-chalkboard-teacher" />
          {lang === 'en' ? 'Teacher Dashboard' : '교사 대시보드'}
        </h1>
        <p>{lang === 'en' ? 'Monitor student progress and manage learning outcomes.' : '학생 진행 상황을 모니터링하고 학습 성과를 관리합니다.'}</p>
      </section>

      {/* Tab Navigation */}
      <div className="teacher-tabs">
        <button
          className={`teacher-tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <i className="fa-solid fa-chart-pie" />
          {lang === 'en' ? 'Overview' : '개요'}
        </button>
        <button
          className={`teacher-tab ${activeTab === 'students' ? 'active' : ''}`}
          onClick={() => setActiveTab('students')}
        >
          <i className="fa-solid fa-user-graduate" />
          {lang === 'en' ? 'Students' : '학생'}
        </button>
        <button
          className={`teacher-tab ${activeTab === 'curriculum' ? 'active' : ''}`}
          onClick={() => setActiveTab('curriculum')}
        >
          <i className="fa-solid fa-book" />
          {lang === 'en' ? 'Curriculum' : '커리큘럼'}
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section className="teacher-overview">
          <div className="teacher-stats-grid">
            <div className="teacher-stat-card">
              <div className="teacher-stat-icon" style={{ background: '#4FC3F7' }}>
                <i className="fa-solid fa-user-graduate" />
              </div>
              <div className="teacher-stat-info">
                <span className="teacher-stat-value">{students.length}</span>
                <span className="teacher-stat-label">{lang === 'en' ? 'Total Students' : '전체 학생'}</span>
              </div>
            </div>
            <div className="teacher-stat-card">
              <div className="teacher-stat-icon" style={{ background: '#66BB6A' }}>
                <i className="fa-solid fa-user-check" />
              </div>
              <div className="teacher-stat-info">
                <span className="teacher-stat-value">
                  {students.filter(s => {
                    const lastDate = s.streak_last_date || s.updated_at
                    if (!lastDate) return false
                    const today = new Date().toISOString().split('T')[0]
                    return lastDate.startsWith(today)
                  }).length}
                </span>
                <span className="teacher-stat-label">{lang === 'en' ? 'Active Today' : '오늘 활동'}</span>
              </div>
            </div>
            <div className="teacher-stat-card">
              <div className="teacher-stat-icon" style={{ background: '#FFA726' }}>
                <i className="fa-solid fa-chart-line" />
              </div>
              <div className="teacher-stat-info">
                <span className="teacher-stat-value">
                  {students.length > 0
                    ? Math.round(students.reduce((sum, s) => sum + s.completedCount, 0) / students.length)
                    : 0}
                </span>
                <span className="teacher-stat-label">{lang === 'en' ? 'Avg Lessons Done' : '평균 완료 레슨'}</span>
              </div>
            </div>
          </div>

          {!isSupabaseEnabled() && (
            <div className="teacher-notice">
              <i className="fa-solid fa-info-circle" />
              <p>{lang === 'en' ? 'Supabase is not configured. Student data will not be available.' : 'Supabase가 설정되지 않았습니다. 학생 데이터를 사용할 수 없습니다.'}</p>
            </div>
          )}

          {/* Top Students */}
          <div className="teacher-section">
            <h2>{lang === 'en' ? 'Top Students' : '우수 학생'}</h2>
            <div className="top-students-list">
              {students.slice(0, 5).map((student, index) => (
                <div key={student.user_id} className="top-student-card">
                  <span className="student-rank">#{index + 1}</span>
                  <div className="student-avatar-small">
                    {student.user.avatar_url ? (
                      <img src={student.user.avatar_url} alt="" />
                    ) : (
                      <i className="fa-solid fa-user" />
                    )}
                  </div>
                  <div className="student-info">
                    <span className="student-name">{student.user.name || student.user.email}</span>
                    <span className="student-progress">{student.completedCount}/{totalLessons} {lang === 'en' ? 'lessons' : '레슨'}</span>
                  </div>
                  <div className="student-streak">
                    <i className="fa-solid fa-fire" />
                    <span>{student.streak_count || 0}</span>
                  </div>
                </div>
              ))}
              {students.length === 0 && (
                <div className="teacher-empty">
                  <p>{lang === 'en' ? 'No student data yet.' : '학생 데이터가 없습니다.'}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Students Tab */}
      {activeTab === 'students' && (
        <section className="teacher-students">
          <div className="teacher-section-header">
            <h2>{lang === 'en' ? 'Student List' : '학생 목록'}</h2>
            <button className="teacher-refresh-btn" onClick={fetchStudents} disabled={loadingData}>
              <i className={`fa-solid fa-rotate-right ${loadingData ? 'fa-spin' : ''}`} />
              {lang === 'en' ? 'Refresh' : '새로고침'}
            </button>
          </div>

          {students.length > 0 ? (
            <div className="teacher-table-wrapper">
              <table className="teacher-table">
                <thead>
                  <tr>
                    <th>{lang === 'en' ? 'Student' : '학생'}</th>
                    <th>{lang === 'en' ? 'Lessons' : '레슨'}</th>
                    <th>{lang === 'en' ? 'Code Runs' : '코드 실행'}</th>
                    <th>{lang === 'en' ? 'Badges' : '배지'}</th>
                    <th>{lang === 'en' ? 'Streak' : '연속 학습'}</th>
                    <th>{lang === 'en' ? 'Last Active' : '최근 활동'}</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr key={student.user_id}>
                      <td className="student-cell">
                        <div className="student-avatar-small">
                          {student.user.avatar_url ? (
                            <img src={student.user.avatar_url} alt="" />
                          ) : (
                            <i className="fa-solid fa-user" />
                          )}
                        </div>
                        <div>
                          <span className="student-name">{student.user.name || '-'}</span>
                          <span className="student-email">{student.user.email}</span>
                        </div>
                      </td>
                      <td>
                        <span className="progress-indicator">
                          {student.completedCount}/{totalLessons}
                        </span>
                      </td>
                      <td>{student.code_runs || 0}</td>
                      <td>{student.badgeCount}</td>
                      <td>
                        <span className="streak-badge">
                          <i className="fa-solid fa-fire" /> {student.streak_count || 0}
                        </span>
                      </td>
                      <td className="date-cell">
                        {student.updated_at ? new Date(student.updated_at).toLocaleDateString() : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="teacher-empty">
              <i className="fa-solid fa-user-graduate" />
              <p>{lang === 'en' ? 'No student data available.' : '학생 데이터가 없습니다.'}</p>
            </div>
          )}
        </section>
      )}

      {/* Curriculum Tab */}
      {activeTab === 'curriculum' && (
        <section className="teacher-curriculum">
          <h2>{lang === 'en' ? 'Curriculum Overview' : '커리큘럼 개요'}</h2>
          <div className="curriculum-overview-grid">
            {Object.entries(levelInfo).map(([level, info]) => {
              const levelLessons = lessons[level] || []
              return (
                <Link to={`/${level}`} key={level} className="curriculum-overview-card">
                  <div className="curriculum-card-icon" style={{ background: info.color }}>
                    <i className={info.icon} />
                  </div>
                  <div className="curriculum-card-info">
                    <h3>{info.title}</h3>
                    <span>{levelLessons.length} {lang === 'en' ? 'lessons' : '레슨'}</span>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="teacher-section" style={{ marginTop: '2rem' }}>
            <h3>{lang === 'en' ? '11-Week C Learning Curriculum' : '11주 C언어 커리큘럼'}</h3>
            <Link to="/c-learning" className="teacher-link-btn">
              <i className="fa-solid fa-book-open" />
              {lang === 'en' ? 'View Full Curriculum' : '전체 커리큘럼 보기'}
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}
