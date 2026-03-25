import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3><span className="brand-c">C</span> <span className="brand-pt">Programming</span></h3>
            <p>{t('footer.description')}</p>
          </div>
          <div className="footer-col">
            <h4>{t('footer.learning')}</h4>
            <ul>
              <li><Link to="/basics">{t('nav.basics')}</Link></li>
              <li><Link to="/intermediate">{t('nav.intermediate')}</Link></li>
              <li><Link to="/advanced">{t('nav.advanced')}</Link></li>
              <li><Link to="/applied">{t('nav.applied')}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t('footer.support')}</h4>
            <ul>
              <li><Link to="/guide">{t('nav.guide')}</Link></li>
              <li><Link to="/community">{t('nav.community')}</Link></li>
              <li><Link to="/quiz">{t('nav.quiz')}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t('footer.legal')}</h4>
            <ul>
              <li><a href="#">이용약관</a></li>
              <li><a href="#">개인정보처리방침</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
