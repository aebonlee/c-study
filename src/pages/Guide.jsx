import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const faqData = [
  {
    questionKo: 'C-PT는 무엇인가요?',
    questionEn: 'What is C-PT?',
    answerKo: 'C-PT(C Programming Tutorial)는 C언어를 체계적으로 학습할 수 있는 온라인 학습 플랫폼입니다. 초보자부터 고급 사용자까지 단계별로 학습할 수 있으며, 코드 에디터, 퀴즈, 배지 시스템 등 다양한 기능을 제공합니다.',
    answerEn: 'C-PT (C Programming Tutorial) is an online learning platform for systematically learning the C language. It supports learners from beginner to advanced levels with features like a code editor, quizzes, and a badge system.',
  },
  {
    questionKo: '어떻게 시작하나요?',
    questionEn: 'How do I get started?',
    answerKo: '홈페이지에서 "학습 시작하기" 버튼을 클릭하거나, 상단 메뉴에서 원하는 레벨을 선택하세요. 초보자라면 Beginner 레벨부터 시작하는 것을 추천합니다.',
    answerEn: 'Click the "Start Learning" button on the homepage or select your desired level from the top menu. If you are a beginner, we recommend starting with the Beginner level.',
  },
  {
    questionKo: '학습 진행 상황은 어떻게 저장되나요?',
    questionEn: 'How is my progress saved?',
    answerKo: '학습 진행 상황은 브라우저의 로컬 스토리지에 자동으로 저장됩니다. 로그인하면 서버에도 동기화되어 다른 기기에서도 진행 상황을 확인할 수 있습니다.',
    answerEn: 'Your progress is automatically saved in your browser\'s local storage. When logged in, it syncs to the server so you can access your progress from other devices.',
  },
  {
    questionKo: '코드를 직접 실행할 수 있나요?',
    questionEn: 'Can I run code directly?',
    answerKo: 'C언어는 브라우저에서 직접 실행할 수 없습니다. 코드 에디터에서 작성한 코드는 로컬 환경(GCC, Clang 등)에서 컴파일하여 실행해야 합니다. 에디터의 "실행" 버튼을 누르면 시뮬레이션 메시지가 표시됩니다.',
    answerEn: 'C code cannot be executed directly in the browser. Code written in the editor should be compiled and run in a local environment (GCC, Clang, etc.). Clicking the "Run" button shows a simulation message.',
  },
  {
    questionKo: '배지는 어떻게 얻나요?',
    questionEn: 'How do I earn badges?',
    answerKo: '레슨 완료, 퀴즈 통과, 코드 실행 횟수, 연속 학습 일수 등 다양한 조건을 충족하면 자동으로 배지가 부여됩니다. 배지 컬렉션 페이지에서 전체 배지와 획득 조건을 확인할 수 있습니다.',
    answerEn: 'Badges are automatically awarded when you meet various conditions such as completing lessons, passing quizzes, running code, and maintaining learning streaks. Check the Badge Collection page for all badges and their requirements.',
  },
  {
    questionKo: '11단계 커리큘럼은 무엇인가요?',
    questionEn: 'What is the 11-step curriculum?',
    answerKo: 'C언어를 11단계에 걸쳐 체계적으로 학습하는 커리큘럼입니다. 기초부터 자료구조까지 단계별로 진행하며, 마지막 단계에서는 종합 프로젝트를 수행합니다.',
    answerEn: 'It is a systematic 11-step curriculum for learning C. It progresses from basics to data structures, with a comprehensive final project in the last step.',
  },
]

export default function Guide() {
  const { t, lang } = useLanguage()
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="guide-page">
      {/* Header */}
      <section className="guide-header">
        <h1>
          <i className="fa-solid fa-book" />
          {t('guide.title')}
        </h1>
        <p className="guide-subtitle">{t('guide.subtitle')}</p>
      </section>

      {/* Getting Started */}
      <section className="guide-section">
        <h2>
          <i className="fa-solid fa-rocket" />
          {lang === 'en' ? 'Getting Started' : '시작하기'}
        </h2>
        <div className="guide-steps">
          <div className="guide-step">
            <div className="guide-step-number">1</div>
            <div className="guide-step-content">
              <h3>{lang === 'en' ? 'Choose Your Level' : '레벨 선택'}</h3>
              <p>{lang === 'en' ? 'Select a difficulty level that matches your experience. Beginners should start from the Beginner level.' : '본인의 경험에 맞는 난이도를 선택하세요. 초보자는 Beginner 레벨부터 시작하는 것을 추천합니다.'}</p>
            </div>
          </div>
          <div className="guide-step">
            <div className="guide-step-number">2</div>
            <div className="guide-step-content">
              <h3>{lang === 'en' ? 'Study Lessons' : '레슨 학습'}</h3>
              <p>{lang === 'en' ? 'Read through each lesson and try the code examples in the built-in editor.' : '각 레슨을 읽고 내장 에디터에서 코드 예제를 실습해보세요.'}</p>
            </div>
          </div>
          <div className="guide-step">
            <div className="guide-step-number">3</div>
            <div className="guide-step-content">
              <h3>{lang === 'en' ? 'Take Quizzes' : '퀴즈 풀기'}</h3>
              <p>{lang === 'en' ? 'Test your knowledge with quizzes after completing lessons.' : '레슨 완료 후 퀴즈로 지식을 테스트하세요.'}</p>
            </div>
          </div>
          <div className="guide-step">
            <div className="guide-step-number">4</div>
            <div className="guide-step-content">
              <h3>{lang === 'en' ? 'Earn Badges' : '배지 획득'}</h3>
              <p>{lang === 'en' ? 'Complete challenges and earn badges to track your achievements.' : '도전을 완료하고 배지를 획득하여 성취를 추적하세요.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="guide-section">
        <h2>
          <i className="fa-solid fa-star" />
          {lang === 'en' ? 'Platform Features' : '플랫폼 기능'}
        </h2>
        <div className="guide-features-grid">
          <div className="guide-feature">
            <i className="fa-solid fa-code" />
            <h3>{lang === 'en' ? 'Code Editor' : '코드 에디터'}</h3>
            <p>{lang === 'en' ? 'Write and experiment with C code directly in the browser. Copy code and run it in your local compiler.' : '브라우저에서 직접 C 코드를 작성하고 실험하세요. 코드를 복사하여 로컬 컴파일러에서 실행하세요.'}</p>
          </div>
          <div className="guide-feature">
            <i className="fa-solid fa-layer-group" />
            <h3>{lang === 'en' ? 'Level System' : '레벨 시스템'}</h3>
            <p>{lang === 'en' ? 'Progress through Beginner, Intermediate, Advanced, and Expert levels at your own pace.' : 'Beginner, Intermediate, Advanced, Expert 레벨을 자기 속도에 맞춰 진행하세요.'}</p>
          </div>
          <div className="guide-feature">
            <i className="fa-solid fa-clipboard-check" />
            <h3>{lang === 'en' ? 'Quizzes' : '퀴즈'}</h3>
            <p>{lang === 'en' ? 'Test your understanding with multiple-choice quizzes for each level.' : '각 레벨별 객관식 퀴즈로 이해도를 테스트하세요.'}</p>
          </div>
          <div className="guide-feature">
            <i className="fa-solid fa-trophy" />
            <h3>{lang === 'en' ? 'Badges' : '배지'}</h3>
            <p>{lang === 'en' ? 'Earn bronze, silver, gold, and platinum badges as you progress.' : '학습 진행에 따라 브론즈, 실버, 골드, 플래티넘 배지를 획득하세요.'}</p>
          </div>
          <div className="guide-feature">
            <i className="fa-solid fa-calendar-days" />
            <h3>{lang === 'en' ? '11-Step Curriculum' : '11단계 커리큘럼'}</h3>
            <p>{lang === 'en' ? 'Follow a structured 11-step C language course from basics to advanced projects.' : '기초부터 고급 프로젝트까지 체계적인 11단계 C언어 과정을 따라하세요.'}</p>
          </div>
          <div className="guide-feature">
            <i className="fa-solid fa-users" />
            <h3>{lang === 'en' ? 'Community' : '커뮤니티'}</h3>
            <p>{lang === 'en' ? 'Ask questions and share knowledge with other learners.' : '다른 학습자들과 질문하고 지식을 공유하세요.'}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="guide-section">
        <h2>
          <i className="fa-solid fa-circle-question" />
          {lang === 'en' ? 'Frequently Asked Questions' : '자주 묻는 질문'}
        </h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{lang === 'en' ? faq.questionEn : faq.questionKo}</span>
                <i className={`fa-solid fa-chevron-${openFaq === index ? 'up' : 'down'}`} />
              </button>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>{lang === 'en' ? faq.answerEn : faq.answerKo}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="guide-section">
        <h2>
          <i className="fa-solid fa-link" />
          {lang === 'en' ? 'Quick Links' : '빠른 링크'}
        </h2>
        <div className="quick-links-grid">
          <Link to="/beginner" className="quick-link-card">
            <i className="fa-solid fa-seedling" />
            <span>{lang === 'en' ? 'Beginner Lessons' : '초급 레슨'}</span>
          </Link>
          <Link to="/c-learning" className="quick-link-card">
            <i className="fa-solid fa-book-open" />
            <span>{lang === 'en' ? '11-Step Curriculum' : '11단계 커리큘럼'}</span>
          </Link>
          <Link to="/practice" className="quick-link-card">
            <i className="fa-solid fa-dumbbell" />
            <span>{lang === 'en' ? 'Practice' : '실습'}</span>
          </Link>
          <Link to="/quiz" className="quick-link-card">
            <i className="fa-solid fa-clipboard-check" />
            <span>{lang === 'en' ? 'Quiz Center' : '퀴즈 센터'}</span>
          </Link>
          <Link to="/badges" className="quick-link-card">
            <i className="fa-solid fa-trophy" />
            <span>{lang === 'en' ? 'Badge Collection' : '배지 컬렉션'}</span>
          </Link>
          <Link to="/community" className="quick-link-card">
            <i className="fa-solid fa-comments" />
            <span>{lang === 'en' ? 'Community' : '커뮤니티'}</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
