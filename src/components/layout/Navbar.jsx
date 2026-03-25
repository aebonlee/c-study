import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { useProgress } from '../../contexts/ProgressContext'
import { useAuth } from '../../contexts/AuthContext'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const { theme, toggleTheme } = useTheme()
  const { getTotalProgress } = useProgress()
  const { user, isAuthenticated, isAdmin, isTeacher, signOut } = useAuth()
  const { t, toggleLang, lang } = useLanguage()
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const userMenuRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
    setUserMenuOpen(false)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) setUserMenuOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const totalProgress = getTotalProgress()

  const navItems = [
    { to: '/c-learning', label: t('nav.cLearning') },
    { to: '/basics', label: t('nav.basics') },
    { to: '/intermediate', label: t('nav.intermediate') },
    { to: '/advanced', label: t('nav.advanced') },
    { to: '/applied', label: t('nav.applied') },
    { to: '/c-practice', label: t('nav.cPractice') },
    { to: '/quiz', label: t('nav.quiz') },
    { to: '/badges', label: t('nav.badges') },
    { to: '/guide', label: t('nav.guide') },
    { to: '/community', label: t('nav.community') },
  ]

  const userAvatar = user?.user_metadata?.avatar_url || user?.user_metadata?.picture
  const userName = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split('@')[0]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-wrapper">
        <Link to="/" className="logo">
          <h1>
            <span className="brand-c">C</span><span className="brand-pt">-PT</span>
          </h1>
          <span className="brand-subtitle">C Programming Tutorial</span>
        </Link>

        <ul className={`nav-menu${mobileOpen ? ' active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={({isActive}) => `nav-link${isActive ? ' active' : ''}`}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <div className="nav-progress-badge" title={`${t('nav.totalProgress')}: ${totalProgress}%`}>
            <svg width="28" height="28" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--border-light)" strokeWidth="3" />
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--accent-blue)" strokeWidth="3"
                strokeDasharray={`${totalProgress * 0.9738} 97.38`} strokeLinecap="round"
                transform="rotate(-90 18 18)" style={{ transition: 'stroke-dasharray 0.5s ease' }} />
            </svg>
            <span className="progress-text">{totalProgress}%</span>
          </div>

          <button className="theme-toggle" onClick={toggleLang} aria-label={t('nav.langToggle')}
            title={lang === 'ko' ? 'English' : '한국어'} style={{ fontWeight: 700, fontSize: '13px', minWidth: '32px' }}>
            {t('nav.langToggle')}
          </button>

          <button className="theme-toggle" onClick={toggleTheme} aria-label={t('nav.themeToggle')} data-mode={theme}>
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            )}
          </button>

          {isAuthenticated ? (
            <div className="nav-user-menu" ref={userMenuRef}>
              <button className="nav-user-trigger" onClick={() => setUserMenuOpen(!userMenuOpen)} aria-label={t('nav.userMenu')}>
                {userAvatar ? (
                  <img src={userAvatar} alt={userName} className="nav-user-avatar" />
                ) : (
                  <div className="nav-user-avatar nav-user-avatar-placeholder">{userName?.charAt(0)?.toUpperCase()}</div>
                )}
              </button>
              <div className={`nav-user-balloon${userMenuOpen ? ' active' : ''}`}>
                <div className="nav-balloon-arrow" />
                <div className="nav-user-info">
                  <div className="nav-user-name">{userName}</div>
                  <div className="nav-user-email">{user?.email}</div>
                </div>
                <div className="nav-balloon-links">
                  <Link to="/my" className="nav-balloon-link" onClick={() => setUserMenuOpen(false)}>
                    <i className="fa-solid fa-user-circle" /> {t('nav.mypage')}
                  </Link>
                  {isAdmin && (
                    <Link to="/admin" className="nav-balloon-link" onClick={() => setUserMenuOpen(false)}>
                      <i className="fa-solid fa-shield-halved" /> {t('nav.admin')}
                    </Link>
                  )}
                  {isTeacher && (
                    <Link to="/teacher" className="nav-balloon-link" onClick={() => setUserMenuOpen(false)}>
                      <i className="fa-solid fa-chalkboard-user" /> {t('nav.teacher')}
                    </Link>
                  )}
                </div>
                <button className="nav-balloon-logout" onClick={() => { signOut(); setUserMenuOpen(false); navigate('/login') }}>
                  <i className="fa-solid fa-right-from-bracket" /> {t('nav.logout')}
                </button>
              </div>
            </div>
          ) : (
            <button className="nav-login-btn" onClick={() => navigate('/login')}>
              <i className="fa-solid fa-user" /> {t('nav.login')}
            </button>
          )}

          <button className={`mobile-toggle${mobileOpen ? ' active' : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label={t('nav.menu')}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
