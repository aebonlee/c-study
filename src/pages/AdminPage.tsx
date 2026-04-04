import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useAuth } from '../contexts/AuthContext'
import { supabase, isSupabaseEnabled, TABLES } from '../config/supabase'

export default function AdminPage() {
  const { lang } = useLanguage()
  const { user, isAdmin, loading } = useAuth()
  const navigate = useNavigate()

  const [users, setUsers] = useState([])
  const [stats, setStats] = useState({ totalUsers: 0, activeToday: 0, totalPosts: 0 })
  const [activeTab, setActiveTab] = useState('dashboard')
  const [loadingData, setLoadingData] = useState(false)
  const [roleUpdate, setRoleUpdate] = useState({})

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate('/', { replace: true })
    }
  }, [loading, isAdmin, navigate])

  useEffect(() => {
    if (isAdmin && isSupabaseEnabled()) {
      fetchUsers()
      fetchStats()
    }
  }, [isAdmin])

  const fetchUsers = async () => {
    if (!isSupabaseEnabled()) return
    setLoadingData(true)
    try {
      const { data, error } = await supabase
        .from(TABLES.USERS)
        .select('*')
        .order('updated_at', { ascending: false })
      if (!error && data) setUsers(data)
    } catch (err) {
      console.error('Failed to fetch users:', err)
    }
    setLoadingData(false)
  }

  const fetchStats = async () => {
    if (!isSupabaseEnabled()) return
    try {
      const { count: userCount } = await supabase.from(TABLES.USERS).select('*', { count: 'exact', head: true })
      const today = new Date().toISOString().split('T')[0]
      const { count: activeCount } = await supabase
        .from(TABLES.USERS)
        .select('*', { count: 'exact', head: true })
        .gte('updated_at', today)
      const { count: postCount } = await supabase.from(TABLES.COMMUNITY_POSTS).select('*', { count: 'exact', head: true })
      setStats({
        totalUsers: userCount || 0,
        activeToday: activeCount || 0,
        totalPosts: postCount || 0,
      })
    } catch (err) {
      console.error('Failed to fetch stats:', err)
    }
  }

  const handleRoleChange = async (userId, newRole) => {
    if (!isSupabaseEnabled()) return
    try {
      const { error } = await supabase
        .from(TABLES.USERS)
        .update({ role: newRole })
        .eq('id', userId)
      if (!error) {
        setUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole } : u))
        setRoleUpdate(prev => ({ ...prev, [userId]: true }))
        setTimeout(() => setRoleUpdate(prev => ({ ...prev, [userId]: false })), 2000)
      }
    } catch (err) {
      console.error('Failed to update role:', err)
    }
  }

  if (loading) {
    return (
      <div className="admin-page">
        <div className="admin-loading">
          <div className="loading-spinner" />
          <p>{lang === 'en' ? 'Loading...' : '로딩 중...'}</p>
        </div>
      </div>
    )
  }

  if (!isAdmin) return null

  return (
    <div className="admin-page">
      {/* Header */}
      <section className="admin-header">
        <h1>
          <i className="fa-solid fa-shield-halved" />
          {lang === 'en' ? 'Admin Dashboard' : '관리자 대시보드'}
        </h1>
        <p>{lang === 'en' ? 'Manage users, content, and platform settings.' : '사용자, 콘텐츠, 플랫폼 설정을 관리합니다.'}</p>
      </section>

      {/* Tab Navigation */}
      <div className="admin-tabs">
        <button
          className={`admin-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <i className="fa-solid fa-chart-pie" />
          {lang === 'en' ? 'Dashboard' : '대시보드'}
        </button>
        <button
          className={`admin-tab ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          <i className="fa-solid fa-users" />
          {lang === 'en' ? 'Users' : '사용자'}
        </button>
        <button
          className={`admin-tab ${activeTab === 'content' ? 'active' : ''}`}
          onClick={() => setActiveTab('content')}
        >
          <i className="fa-solid fa-file-lines" />
          {lang === 'en' ? 'Content' : '콘텐츠'}
        </button>
      </div>

      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && (
        <section className="admin-dashboard">
          <div className="admin-stats-grid">
            <div className="admin-stat-card">
              <div className="admin-stat-icon" style={{ background: '#4FC3F7' }}>
                <i className="fa-solid fa-users" />
              </div>
              <div className="admin-stat-info">
                <span className="admin-stat-value">{stats.totalUsers}</span>
                <span className="admin-stat-label">{lang === 'en' ? 'Total Users' : '전체 사용자'}</span>
              </div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-icon" style={{ background: '#66BB6A' }}>
                <i className="fa-solid fa-user-clock" />
              </div>
              <div className="admin-stat-info">
                <span className="admin-stat-value">{stats.activeToday}</span>
                <span className="admin-stat-label">{lang === 'en' ? 'Active Today' : '오늘 활동'}</span>
              </div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-icon" style={{ background: '#FFA726' }}>
                <i className="fa-solid fa-message" />
              </div>
              <div className="admin-stat-info">
                <span className="admin-stat-value">{stats.totalPosts}</span>
                <span className="admin-stat-label">{lang === 'en' ? 'Community Posts' : '커뮤니티 글'}</span>
              </div>
            </div>
          </div>

          {!isSupabaseEnabled() && (
            <div className="admin-notice">
              <i className="fa-solid fa-info-circle" />
              <p>{lang === 'en' ? 'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to enable server features.' : 'Supabase가 설정되지 않았습니다. 서버 기능을 활성화하려면 VITE_SUPABASE_URL과 VITE_SUPABASE_ANON_KEY를 설정하세요.'}</p>
            </div>
          )}
        </section>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <section className="admin-users">
          <div className="admin-section-header">
            <h2>{lang === 'en' ? 'User Management' : '사용자 관리'}</h2>
            <button className="admin-refresh-btn" onClick={fetchUsers} disabled={loadingData}>
              <i className={`fa-solid fa-rotate-right ${loadingData ? 'fa-spin' : ''}`} />
              {lang === 'en' ? 'Refresh' : '새로고침'}
            </button>
          </div>

          {users.length > 0 ? (
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>{lang === 'en' ? 'User' : '사용자'}</th>
                    <th>{lang === 'en' ? 'Email' : '이메일'}</th>
                    <th>{lang === 'en' ? 'Provider' : '제공자'}</th>
                    <th>{lang === 'en' ? 'Role' : '역할'}</th>
                    <th>{lang === 'en' ? 'Last Active' : '최근 활동'}</th>
                    <th>{lang === 'en' ? 'Actions' : '관리'}</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(u => (
                    <tr key={u.id}>
                      <td className="user-cell">
                        <div className="user-avatar-small">
                          {u.avatar_url ? <img src={u.avatar_url} alt="" /> : <i className="fa-solid fa-user" />}
                        </div>
                        <span>{u.name || '-'}</span>
                      </td>
                      <td>{u.email}</td>
                      <td><span className="provider-badge">{u.provider || '-'}</span></td>
                      <td>
                        <select
                          value={u.role || 'student'}
                          onChange={(e) => handleRoleChange(u.id, e.target.value)}
                          className="role-select"
                        >
                          <option value="student">Student</option>
                          <option value="teacher">Teacher</option>
                          <option value="admin">Admin</option>
                        </select>
                        {roleUpdate[u.id] && <i className="fa-solid fa-check role-updated" />}
                      </td>
                      <td className="date-cell">{u.updated_at ? new Date(u.updated_at).toLocaleDateString() : '-'}</td>
                      <td>
                        <button className="admin-action-btn" title="View details">
                          <i className="fa-solid fa-eye" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="admin-empty">
              <i className="fa-solid fa-users-slash" />
              <p>{lang === 'en' ? 'No users found.' : '사용자를 찾을 수 없습니다.'}</p>
            </div>
          )}
        </section>
      )}

      {/* Content Tab */}
      {activeTab === 'content' && (
        <section className="admin-content">
          <div className="admin-section-header">
            <h2>{lang === 'en' ? 'Content Management' : '콘텐츠 관리'}</h2>
          </div>
          <div className="admin-content-cards">
            <div className="admin-content-card">
              <i className="fa-solid fa-book" />
              <h3>{lang === 'en' ? 'Lessons' : '레슨'}</h3>
              <p>{lang === 'en' ? 'Manage lesson content and structure.' : '레슨 내용과 구조를 관리합니다.'}</p>
            </div>
            <div className="admin-content-card">
              <i className="fa-solid fa-clipboard-check" />
              <h3>{lang === 'en' ? 'Quizzes' : '퀴즈'}</h3>
              <p>{lang === 'en' ? 'Create and edit quiz questions.' : '퀴즈 문제를 생성하고 편집합니다.'}</p>
            </div>
            <div className="admin-content-card">
              <i className="fa-solid fa-trophy" />
              <h3>{lang === 'en' ? 'Badges' : '배지'}</h3>
              <p>{lang === 'en' ? 'Configure badge requirements.' : '배지 획득 조건을 설정합니다.'}</p>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
