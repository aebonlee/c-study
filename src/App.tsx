import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import { ProgressProvider } from './contexts/ProgressContext'
import { BadgeProvider } from './contexts/BadgeContext'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const Home = lazy(() => import('./pages/Home'))
const LevelPage = lazy(() => import('./pages/LevelPage'))
const LessonPage = lazy(() => import('./pages/LessonPage'))
const BadgeCollection = lazy(() => import('./pages/BadgeCollection'))
const QuizCenter = lazy(() => import('./pages/QuizCenter'))
const Login = lazy(() => import('./pages/Login'))
const MyPage = lazy(() => import('./pages/MyPage'))
const AdminPage = lazy(() => import('./pages/AdminPage'))
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const TeacherPage = lazy(() => import('./pages/TeacherPage'))
const CLearning = lazy(() => import('./pages/CLearning'))
const CPractice = lazy(() => import('./pages/CPractice'))
const Guide = lazy(() => import('./pages/Guide'))
const Community = lazy(() => import('./pages/community/Community'))
const CommunityPost = lazy(() => import('./pages/community/CommunityPost'))
const CommunityWrite = lazy(() => import('./pages/community/CommunityWrite'))
const CLesson01 = lazy(() => import('./pages/c-learning/CLesson01'))
const CLesson02 = lazy(() => import('./pages/c-learning/CLesson02'))
const CLesson03 = lazy(() => import('./pages/c-learning/CLesson03'))
const CLesson04 = lazy(() => import('./pages/c-learning/CLesson04'))
const CLesson05 = lazy(() => import('./pages/c-learning/CLesson05'))
const CLesson06 = lazy(() => import('./pages/c-learning/CLesson06'))
const CLesson07 = lazy(() => import('./pages/c-learning/CLesson07'))
const CLesson08 = lazy(() => import('./pages/c-learning/CLesson08'))
const CLesson09 = lazy(() => import('./pages/c-learning/CLesson09'))
const CLesson10 = lazy(() => import('./pages/c-learning/CLesson10'))
const CLesson11 = lazy(() => import('./pages/c-learning/CLesson11'))

function PageLoader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh' }}>
      <div className="loading-spinner-small" style={{ width: 32, height: 32, borderWidth: 3, borderColor: 'rgba(27,58,92,0.2)', borderTopColor: '#4FC3F7' }} />
    </div>
  )
}

function LazyRoute({ element }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        {element}
      </Suspense>
    </ErrorBoundary>
  )
}

function AdminRoute({ children }) {
  const { isAuthenticated, isAdmin, loading } = useAuth()
  if (loading) return <PageLoader />
  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (!isAdmin) return <Navigate to="/" replace />
  return children
}

function TeacherRoute({ children }) {
  const { isAuthenticated, isTeacher, loading } = useAuth()
  if (loading) return <PageLoader />
  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (!isTeacher) return <Navigate to="/" replace />
  return children
}

function NotFoundPage() {
  const { t } = useLanguage()
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-code">{t('notFound.code')}</div>
        <h2 className="not-found-title">{t('notFound.title')}</h2>
        <p className="not-found-desc">{t('notFound.desc')}</p>
        <a href="/" className="btn btn-primary">{t('notFound.home')}</a>
      </div>
    </div>
  )
}

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/login" element={<LazyRoute element={<Login />} />} />
          <Route path="/" element={<LazyRoute element={<Home />} />} />
          <Route path="/my" element={<LazyRoute element={<MyPage />} />} />
          <Route path="/admin" element={<AdminRoute><LazyRoute element={<AdminPage />} /></AdminRoute>} />
          <Route path="/admin/dashboard/*" element={<AdminRoute><LazyRoute element={<AdminDashboard />} /></AdminRoute>} />
          <Route path="/teacher" element={<TeacherRoute><LazyRoute element={<TeacherPage />} /></TeacherRoute>} />
          <Route path="/c-learning" element={<LazyRoute element={<CLearning />} />} />
          <Route path="/c-learning/01" element={<LazyRoute element={<CLesson01 />} />} />
          <Route path="/c-learning/02" element={<LazyRoute element={<CLesson02 />} />} />
          <Route path="/c-learning/03" element={<LazyRoute element={<CLesson03 />} />} />
          <Route path="/c-learning/04" element={<LazyRoute element={<CLesson04 />} />} />
          <Route path="/c-learning/05" element={<LazyRoute element={<CLesson05 />} />} />
          <Route path="/c-learning/06" element={<LazyRoute element={<CLesson06 />} />} />
          <Route path="/c-learning/07" element={<LazyRoute element={<CLesson07 />} />} />
          <Route path="/c-learning/08" element={<LazyRoute element={<CLesson08 />} />} />
          <Route path="/c-learning/09" element={<LazyRoute element={<CLesson09 />} />} />
          <Route path="/c-learning/10" element={<LazyRoute element={<CLesson10 />} />} />
          <Route path="/c-learning/11" element={<LazyRoute element={<CLesson11 />} />} />
          <Route path="/c-practice" element={<LazyRoute element={<CPractice />} />} />
          <Route path="/guide" element={<LazyRoute element={<Guide />} />} />
          <Route path="/community" element={<LazyRoute element={<Community />} />} />
          <Route path="/community/write" element={<LazyRoute element={<CommunityWrite />} />} />
          <Route path="/community/:postId" element={<LazyRoute element={<CommunityPost />} />} />
          <Route path="/:level" element={<LazyRoute element={<LevelPage />} />} />
          <Route path="/:level/:lessonId" element={<LazyRoute element={<LessonPage />} />} />
          <Route path="/badges" element={<LazyRoute element={<BadgeCollection />} />} />
          <Route path="/quiz" element={<LazyRoute element={<QuizCenter />} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
        <AuthProvider>
          <ProgressProvider>
            <BadgeProvider>
              <ErrorBoundary>
                <AppLayout />
              </ErrorBoundary>
            </BadgeProvider>
          </ProgressProvider>
        </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
