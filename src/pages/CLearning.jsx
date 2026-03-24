import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useProgress } from '../contexts/ProgressContext'
import ProgressBar from '../components/ProgressBar'

const weeks = [
  {
    id: '01',
    titleKo: '1주차: C언어 소개와 개발 환경',
    titleEn: 'Week 1: Introduction to C & Dev Environment',
    descKo: 'C언어의 역사, 특징, 컴파일 과정, IDE 설정, 첫 번째 프로그램 작성',
    descEn: 'History of C, features, compilation process, IDE setup, writing your first program',
    icon: 'fa-solid fa-door-open',
    color: '#4FC3F7',
    topics: ['C언어 역사', '컴파일러와 인터프리터', '개발환경 설정', 'Hello World'],
  },
  {
    id: '02',
    titleKo: '2주차: 변수, 자료형, 연산자',
    titleEn: 'Week 2: Variables, Data Types & Operators',
    descKo: 'int, float, double, char 자료형, sizeof 연산자, 형변환, 산술/비교/논리 연산자',
    descEn: 'int, float, double, char types, sizeof operator, type casting, arithmetic/comparison/logical operators',
    icon: 'fa-solid fa-database',
    color: '#66BB6A',
    topics: ['기본 자료형', 'sizeof', '형변환', '연산자'],
  },
  {
    id: '03',
    titleKo: '3주차: 제어문',
    titleEn: 'Week 3: Control Flow',
    descKo: 'if-else, switch, for, while, do-while 반복문, break/continue',
    descEn: 'if-else, switch, for, while, do-while loops, break/continue',
    icon: 'fa-solid fa-code-branch',
    color: '#FFA726',
    topics: ['조건문', 'switch', '반복문', 'break/continue'],
  },
  {
    id: '04',
    titleKo: '4주차: 함수와 스코프',
    titleEn: 'Week 4: Functions & Scope',
    descKo: '함수 정의와 호출, 매개변수와 반환값, 변수 스코프, 재귀함수 입문',
    descEn: 'Function definition & calls, parameters & return values, variable scope, intro to recursion',
    icon: 'fa-solid fa-cubes',
    color: '#AB47BC',
    topics: ['함수 정의', '매개변수', '스코프', '재귀함수'],
  },
  {
    id: '05',
    titleKo: '5주차: 배열과 문자열',
    titleEn: 'Week 5: Arrays & Strings',
    descKo: '1차원/2차원 배열, 문자 배열, string.h 함수들 (strlen, strcpy, strcat, strcmp)',
    descEn: '1D/2D arrays, char arrays, string.h functions (strlen, strcpy, strcat, strcmp)',
    icon: 'fa-solid fa-table-cells',
    color: '#EF5350',
    topics: ['1차원 배열', '2차원 배열', '문자열', 'string.h'],
  },
  {
    id: '06',
    titleKo: '6주차: 포인터 기초',
    titleEn: 'Week 6: Pointer Basics',
    descKo: '포인터 개념, & 주소 연산자와 * 역참조 연산자, 포인터와 배열의 관계',
    descEn: 'Pointer concept, & address operator and * dereference operator, pointer-array relationship',
    icon: 'fa-solid fa-arrow-pointer',
    color: '#26C6DA',
    topics: ['포인터 선언', '& 연산자', '* 연산자', '포인터와 배열'],
  },
  {
    id: '07',
    titleKo: '7주차: 포인터 심화와 동적 메모리',
    titleEn: 'Week 7: Advanced Pointers & Dynamic Memory',
    descKo: '이중 포인터, malloc/free, 메모리 누수 방지, 동적 배열',
    descEn: 'Double pointers, malloc/free, memory leak prevention, dynamic arrays',
    icon: 'fa-solid fa-memory',
    color: '#FF7043',
    topics: ['이중 포인터', 'malloc', 'free', '메모리 누수'],
  },
  {
    id: '08',
    titleKo: '8주차: 구조체와 공용체',
    titleEn: 'Week 8: Structs & Unions',
    descKo: 'struct 정의와 사용, typedef, union, enum, 비트 필드',
    descEn: 'struct definition & usage, typedef, union, enum, bit fields',
    icon: 'fa-solid fa-layer-group',
    color: '#5C6BC0',
    topics: ['struct', 'typedef', 'union', 'enum'],
  },
  {
    id: '09',
    titleKo: '9주차: 파일 입출력',
    titleEn: 'Week 9: File I/O',
    descKo: 'fopen/fclose, 텍스트/바이너리 파일 처리, fprintf/fscanf, fread/fwrite',
    descEn: 'fopen/fclose, text/binary file handling, fprintf/fscanf, fread/fwrite',
    icon: 'fa-solid fa-file-lines',
    color: '#8D6E63',
    topics: ['fopen/fclose', '텍스트 파일', '바이너리 파일', 'fprintf/fscanf'],
  },
  {
    id: '10',
    titleKo: '10주차: 자료구조 기초',
    titleEn: 'Week 10: Basic Data Structures',
    descKo: '연결 리스트, 스택, 큐 구현 (C언어)',
    descEn: 'Linked list, stack, queue implementation in C',
    icon: 'fa-solid fa-diagram-project',
    color: '#78909C',
    topics: ['연결 리스트', '스택', '큐', '동적 구조'],
  },
  {
    id: '11',
    titleKo: '11주차: 종합 프로젝트',
    titleEn: 'Week 11: Final Project',
    descKo: '학생 성적 관리 시스템 - 종합 프로젝트',
    descEn: 'Student Grade Management System - Comprehensive Project',
    icon: 'fa-solid fa-rocket',
    color: '#EC407A',
    topics: ['프로젝트 설계', '구현', '파일 저장', '종합 활용'],
  },
]

export default function CLearning() {
  const { t, lang } = useLanguage()

  return (
    <div className="c-learning-page">
      {/* Header */}
      <section className="c-learning-header">
        <div className="c-learning-header-content">
          <div className="c-learning-badge">
            <i className="fa-solid fa-calendar-days" />
            <span>11 {lang === 'en' ? 'Weeks' : '주차'}</span>
          </div>
          <h1>
            <i className="fa-solid fa-book-open" />
            {t('cLearning.title')}
          </h1>
          <p className="c-learning-subtitle">{t('cLearning.subtitle')}</p>
        </div>

        <div className="c-learning-info-cards">
          <div className="info-card">
            <i className="fa-solid fa-clock" />
            <span>{lang === 'en' ? '11 Weeks Curriculum' : '11주 완성 커리큘럼'}</span>
          </div>
          <div className="info-card">
            <i className="fa-solid fa-laptop-code" />
            <span>{lang === 'en' ? 'Hands-on Practice' : '실습 중심 학습'}</span>
          </div>
          <div className="info-card">
            <i className="fa-solid fa-stairs" />
            <span>{lang === 'en' ? 'Step by Step' : '단계별 학습'}</span>
          </div>
        </div>
      </section>

      {/* Weekly Curriculum */}
      <section className="c-learning-curriculum">
        <div className="curriculum-timeline">
          {weeks.map((week, index) => (
            <Link
              to={`/c-learning/${week.id}`}
              key={week.id}
              className="curriculum-card"
              style={{ '--week-color': week.color }}
            >
              <div className="curriculum-timeline-dot" style={{ background: week.color }}>
                <span>{index + 1}</span>
              </div>

              <div className="curriculum-card-content">
                <div className="curriculum-card-header">
                  <div className="curriculum-icon" style={{ background: `${week.color}15`, color: week.color }}>
                    <i className={week.icon} />
                  </div>
                  <h3>{lang === 'en' ? week.titleEn : week.titleKo}</h3>
                </div>
                <p className="curriculum-desc">{lang === 'en' ? week.descEn : week.descKo}</p>
                <div className="curriculum-topics">
                  {week.topics.map((topic, i) => (
                    <span key={i} className="curriculum-topic-tag" style={{ background: `${week.color}15`, color: week.color }}>
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="curriculum-card-footer">
                  <span className="curriculum-link" style={{ color: week.color }}>
                    {lang === 'en' ? 'Start Learning' : '학습 시작'} <i className="fa-solid fa-arrow-right" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="c-learning-cta">
        <div className="c-learning-cta-content">
          <h2>{lang === 'en' ? 'Ready to master C?' : 'C언어 마스터가 될 준비가 되셨나요?'}</h2>
          <p>{lang === 'en' ? 'Start from Week 1 and build your skills step by step.' : '1주차부터 시작하여 단계별로 실력을 쌓아보세요.'}</p>
          <Link to="/c-learning/01" className="cta-start-btn">
            <i className="fa-solid fa-play" />
            {lang === 'en' ? 'Start Week 1' : '1주차 시작하기'}
          </Link>
        </div>
      </section>
    </div>
  )
}
