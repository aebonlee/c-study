import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const { t, lang } = useLanguage()
  const { signInWithGoogle, signInWithKakao, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/mypage', { replace: true })
    }
  }, [isAuthenticated, navigate])

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left - Branding */}
        <div className="login-branding">
          <div className="login-branding-content">
            <div className="login-logo">
              <i className="fa-solid fa-terminal" />
              <span>C-PT</span>
            </div>
            <h2>{lang === 'en' ? 'C Programming Tutorial' : 'C Programming Tutorial'}</h2>
            <p>{lang === 'en' ? 'Join C-PT and start your journey to becoming a C programming expert.' : 'C-PT에 가입하고 C 프로그래밍 전문가가 되는 여정을 시작하세요.'}</p>

            <div className="login-features">
              <div className="login-feature-item">
                <i className="fa-solid fa-check-circle" />
                <span>{lang === 'en' ? 'Track your learning progress' : '학습 진행 상황 추적'}</span>
              </div>
              <div className="login-feature-item">
                <i className="fa-solid fa-check-circle" />
                <span>{lang === 'en' ? 'Earn achievement badges' : '성취 배지 획득'}</span>
              </div>
              <div className="login-feature-item">
                <i className="fa-solid fa-check-circle" />
                <span>{lang === 'en' ? 'Sync across devices' : '기기 간 동기화'}</span>
              </div>
              <div className="login-feature-item">
                <i className="fa-solid fa-check-circle" />
                <span>{lang === 'en' ? 'Join the community' : '커뮤니티 참여'}</span>
              </div>
            </div>

            <div className="login-code-snippet">
              <pre>{`#include <stdio.h>

int main() {
    printf("Welcome to C-PT!\\n");
    return 0;
}`}</pre>
            </div>
          </div>
        </div>

        {/* Right - Login Form */}
        <div className="login-form-section">
          <div className="login-form-content">
            <div className="login-header">
              <h1>{t('login.title')}</h1>
              <p>{t('login.subtitle')}</p>
            </div>

            <div className="login-buttons">
              <button className="login-btn google-btn" onClick={signInWithGoogle}>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                {lang === 'en' ? 'Continue with Google' : 'Google로 계속하기'}
              </button>

              <button className="login-btn kakao-btn" onClick={signInWithKakao}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#3C1E1E">
                  <path d="M12 3C6.48 3 2 6.36 2 10.44c0 2.62 1.75 4.93 4.38 6.24l-1.12 4.16c-.1.35.3.64.6.44l4.97-3.27c.38.03.77.05 1.17.05 5.52 0 10-3.36 10-7.5S17.52 3 12 3z"/>
                </svg>
                {lang === 'en' ? 'Continue with Kakao' : 'Kakao로 계속하기'}
              </button>
            </div>

            <div className="login-divider">
              <span>{lang === 'en' ? 'or' : '또는'}</span>
            </div>

            <div className="login-guest-info">
              <i className="fa-solid fa-info-circle" />
              <p>
                {lang === 'en'
                  ? 'You can use C-PT without logging in. Logging in enables progress sync across devices and community features.'
                  : '로그인 없이도 C-PT를 사용할 수 있습니다. 로그인하면 기기 간 진행 상황 동기화와 커뮤니티 기능을 이용할 수 있습니다.'}
              </p>
            </div>

            <div className="login-terms">
              <p>
                {lang === 'en'
                  ? 'By logging in, you agree to our Terms of Service and Privacy Policy.'
                  : '로그인하면 서비스 이용약관과 개인정보 처리방침에 동의하는 것으로 간주됩니다.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
