# CMaster 개발일지

## 프로젝트 개요
- **프로젝트명**: CMaster - C언어 전문 학습 플랫폼
- **기반 프로젝트**: PyMaster (D:\python-study) 아키텍처 참조
- **생성일**: 2026-03-25
- **기술 스택**: React 19 + Vite 7 + Supabase + PrismJS
- **배포 URL**: https://c-study.dreamitbiz.com
- **저장소**: https://github.com/aebonlee/c-study

---

## 2026-03-25 (Day 1) - 프로젝트 초기 구축

### 1단계: 프로젝트 분석 및 설계
- PyMaster (D:\python-study) 프로젝트 전체 분석 완료
  - React 19 + Vite 7 + Supabase 기반 Python 학습 플랫폼
  - Context 기반 상태 관리 (Auth, Progress, Badge, Theme, Language)
  - Lazy Loading + Code Splitting 라우팅 패턴
  - Supabase 인증 (Google/Kakao OAuth) + RLS 정책
- C언어 학습 사이트로 아키텍처 변환 설계
  - Python → C 언어 전환 (코드 에디터, 문법 하이라이팅, 실습 내용)
  - Pyodide 제거 → C 코드 시뮬레이션 방식 전환
  - 테이블 접두사: `pymaster_` → `cmaster_`
  - localStorage 키: `pymaster-*` → `cmaster-*`

### 2단계: 프로젝트 초기화 (Infrastructure)
- **package.json**: React 19.2.0, Vite 7.3.1, React Router DOM 7.13.0, Supabase, PrismJS, gh-pages
- **vite.config.js**: SPA 라우팅, 빌드 최적화 설정
- **index.html**: OG 메타 태그 (Kakao 공유 지원), Google Fonts, Font Awesome
- **.env**: Supabase URL + Anon Key + Service Role Key
- **favicon.svg**: 다크 블루 C 로고
- **404.html**: GitHub Pages SPA 리다이렉트 핸들러

### 3단계: 핵심 시스템 구축

#### Supabase 설정 (`src/config/supabase.js`)
- `cmaster_` 접두사 테이블 매핑 (8개 테이블)
- Supabase 클라이언트 초기화 (persistSession, autoRefreshToken)

#### Context 시스템 (5개)
| Context | 파일 | 기능 |
|---------|------|------|
| ThemeContext | `src/contexts/ThemeContext.jsx` | 라이트/다크 모드 토글, `cmaster-theme` 키 |
| LanguageContext | `src/contexts/LanguageContext.jsx` | 한국어/영어 전환, 중첩 키 지원, `cmaster-lang` 키 |
| AuthContext | `src/contexts/AuthContext.jsx` | Google/Kakao OAuth, 30분 세션 타이머, 로그인 모달, 사용자 upsert |
| ProgressContext | `src/contexts/ProgressContext.jsx` | 레슨 완료 추적, 퀴즈 점수, 스트릭, Supabase 동기화 (2초 debounce) |
| BadgeContext | `src/contexts/BadgeContext.jsx` | 40개 배지 자동 평가, 획득 알림 팝업, 4단계 티어 |

#### 라우팅 (`src/App.jsx`)
- Lazy Loading으로 26개 페이지 로드
- AdminRoute / TeacherRoute 역할 기반 접근 제어
- ErrorBoundary + Suspense 래핑
- 404 NotFound 페이지

### 4단계: UI 컴포넌트 구축 (10개)

| 컴포넌트 | 기능 |
|----------|------|
| Navbar | 네비게이션, 사용자 메뉴, 테마/언어 토글 |
| Footer | 사이트맵, 법적 고지, 브랜딩 |
| CodeEditor | C 코드 편집기 (PrismJS prism-c 하이라이팅) |
| PracticeEditor | 실습용 코드 편집기 (react-simple-code-editor) |
| QuizComponent | 퀴즈 UI (셔플 옵션, 타이머, 결과 표시) |
| LessonCard | 레슨 카드 (완료 상태, 난이도 표시) |
| BadgeCard | 배지 카드 (티어 색상, 잠금/해제 상태) |
| ProgressBar | 진도율 시각화 바 |
| Certificate | 과정 수료증 컴포넌트 |
| ErrorBoundary | 에러 경계 (충돌 시 복구 UI) |

### 5단계: 스타일시트 (19개 CSS 파일)

```
src/styles/
├── base.css          # CSS 변수, 리셋, 유틸리티
├── animations.css    # 키프레임 애니메이션
├── navbar.css        # 네비게이션
├── hero.css          # 히어로, 통계, 특징, 학습 경로
├── course.css        # 레벨 페이지, 레슨 그리드
├── badge.css         # 배지 카드, 티어 구분
├── quiz.css          # 퀴즈 UI
├── editor.css        # 코드 에디터
├── auth.css          # 로그인 페이지
├── mypage.css        # 마이페이지 대시보드
├── admin.css         # 관리자 패널
├── teacher.css       # 교사 대시보드
├── practice.css      # 실습 모드
├── c-learning.css    # 주차별 강의 페이지
├── community.css     # 커뮤니티 게시판
├── guide.css         # 이용 가이드
├── footer.css        # 푸터
├── dark-mode.css     # 다크 모드 오버라이드
└── responsive.css    # 반응형 (모바일/태블릿)
```

#### 컬러 스킴 (다크 블루 테마)
| 용도 | 색상 코드 | 사용처 |
|------|----------|--------|
| Primary Dark | #0A1628 | 배경, 네비게이션 |
| Primary | #1B3A5C | 카드, 섹션 배경 |
| Accent Blue | #4FC3F7 | 주요 강조, 버튼, 링크 |
| Accent Teal | #26C6DA | 보조 강조, 그라데이션 |
| Accent Gold | #FFD54F | 배지, 성과, 경고 |

### 6단계: 데이터 파일 구축

#### 레슨 데이터 (`src/data/lessons.js`)
- 4개 레벨 정보 (basics, intermediate, advanced, applied)
- 32개 레슨 메타데이터 (제목, 설명, 난이도, 아이콘)
- 한국어/영어 이중 지원

#### 배지 데이터 (`src/data/badges.js`)
- 40개 배지 정의
- 4단계 티어: 브론즈(10), 실버(9), 골드(11), 플래티넘(10)
- 조건 타입: lesson_count, quiz_score, streak, code_runs, level_complete 등

#### 퀴즈 데이터 (`src/data/quizzes.js`)
- 4개 레벨별 퀴즈 (각 10문항 = 총 40문항)
- 주제: printf, 자료형, 포인터, malloc, 구조체, 파일 I/O, 연결 리스트, 정렬 등
- 한국어/영어 이중 지원

#### 레슨 콘텐츠 (`src/data/lessonContents.js`)
- 32개 레슨 상세 설명 (요약 + 핵심 개념 5가지)
- 한국어/영어 이중 지원

#### C 실습 단계 (`src/data/cSteps/`)
- 10단계 실습 파일 (step1.js ~ step10.js)
- 각 단계 8~10개 코드 예제
- 난이도 점진적 상승 (Hello World → 연결 리스트)

| Step | 주제 | 난이도 |
|------|------|--------|
| 1 | Hello World & printf | ★☆☆☆☆ |
| 2 | 변수와 자료형 | ★☆☆☆☆ |
| 3 | 연산자 | ★★☆☆☆ |
| 4 | 함수와 재귀 | ★★☆☆☆ |
| 5 | 포인터 기초 | ★★★☆☆ |
| 6 | 배열과 포인터 | ★★★☆☆ |
| 7 | 문자열 처리 | ★★★☆☆ |
| 8 | 구조체 | ★★★★☆ |
| 9 | 동적 메모리 | ★★★★☆ |
| 10 | 연결 리스트 | ★★★★★ |

### 7단계: 페이지 컴포넌트 구축 (26개)

#### 메인 페이지 (12개)
| 페이지 | 경로 | 기능 |
|--------|------|------|
| Home | `/` | 히어로, 통계, 특징, 학습 경로, 진도 미리보기, CTA |
| LevelPage | `/:level` | 레벨별 레슨 그리드, 진도율, 필터링 |
| LessonPage | `/:level/:lessonId` | 레슨 상세 (콘텐츠, 코드 에디터, 완료 토글) |
| BadgeCollection | `/badges` | 배지 쇼케이스 (티어별 그룹, 진도 바) |
| QuizCenter | `/quiz` | 퀴즈 대시보드 (점수 배지, QuizComponent 연동) |
| CLearning | `/c-learning` | 11주 커리큘럼 타임라인 |
| CPractice | `/c-practice` | 10단계 실습 (단계 선택 + 코드 에디터) |
| Guide | `/guide` | 이용 가이드 (시작하기, FAQ, 빠른 링크) |
| Login | `/login` | OAuth 로그인 (Google + Kakao) |
| MyPage | `/my` | 사용자 대시보드 (프로필, 통계, 진도, 배지) |
| AdminPage | `/admin` | 관리자 패널 (대시보드/사용자/콘텐츠 탭) |
| TeacherPage | `/teacher` | 교사 대시보드 (개요/학생/커리큘럼 탭) |

#### 커뮤니티 페이지 (3개)
| 페이지 | 경로 | 기능 |
|--------|------|------|
| Community | `/community` | 게시판 목록 (카테고리 필터, 검색, 정렬) |
| CommunityPost | `/community/:postId` | 게시글 상세 (본문, 좋아요, 댓글) |
| CommunityWrite | `/community/write` | 글쓰기 (카테고리, 제목, 내용, 태그) |

#### 11주 커리큘럼 강의 (11개)
| 파일 | 주차 | 주제 | 코드 예제 |
|------|------|------|----------|
| CLesson01 | Week 1 | C언어 소개와 개발환경 | Hello World, printf |
| CLesson02 | Week 2 | 변수와 자료형 | int/float/char, sizeof |
| CLesson03 | Week 3 | 연산자와 표현식 | 산술/논리/형변환 |
| CLesson04 | Week 4 | 제어문 - 조건문 | if-else, switch, BMI 계산기 |
| CLesson05 | Week 5 | 제어문 - 반복문 | for/while, 구구단, 별찍기 |
| CLesson06 | Week 6 | 함수 | 정의/호출, 재귀, 수학 라이브러리 |
| CLesson07 | Week 7 | 고급 포인터와 동적 메모리 | 이중 포인터, malloc/free |
| CLesson08 | Week 8 | 구조체와 공용체 | typedef, 화살표 연산자, 열거형 |
| CLesson09 | Week 9 | 파일 입출력 | fopen/fprintf/fscanf, 바이너리 I/O |
| CLesson10 | Week 10 | 기초 자료구조 | 연결 리스트, 스택, 큐 |
| CLesson11 | Week 11 | 종합 프로젝트 | 학생 성적 관리 시스템 |

### 8단계: 다국어 지원
- **한국어** (`src/locales/ko.js`): 전체 UI 텍스트 한국어 번역
- **영어** (`src/locales/en.js`): 전체 UI 텍스트 영어 번역
- 네비게이션, 페이지 제목, 버튼, 안내 메시지, 에러 메시지 등 전체 커버

### 9단계: Supabase 데이터베이스

#### SQL 스키마 (`scripts/setup-supabase.sql`)
- 8개 테이블 (`cmaster_` 접두사)
- RLS 정책 (Row Level Security)
- 인덱스 6개 (성능 최적화)
- RPC 함수 (조회수 증가)

| 테이블 | 용도 | RLS |
|--------|------|-----|
| cmaster_users | 사용자 프로필 | SELECT: 전체, UPDATE/INSERT: 본인만 |
| cmaster_user_progress | 학습 진행 | 본인만 CRUD |
| cmaster_quiz_scores | 퀴즈 점수 | 본인만 CRUD |
| cmaster_community_posts | 게시글 | SELECT: 전체, INSERT: 인증, UPDATE/DELETE: 작성자 |
| cmaster_community_comments | 댓글 | SELECT: 전체, INSERT: 인증, DELETE: 작성자 |
| cmaster_community_likes | 좋아요 | SELECT: 전체, INSERT/DELETE: 본인 |
| cmaster_classes | 반 | SELECT: 전체, INSERT/UPDATE: 교사 |
| cmaster_class_members | 반 멤버 | SELECT: 전체, INSERT: 본인 |

### 10단계: OG 이미지 & 메타 태그

#### OG 메타 태그 (index.html)
```html
<meta property="og:url" content="https://c-study.dreamitbiz.com/" />
<meta property="og:type" content="website" />
<meta property="og:title" content="CMaster - C언어 전문 학습 플랫폼" />
<meta property="og:description" content="C언어 기초부터 고급 시스템 프로그래밍까지..." />
<meta property="og:image" content="https://c-study.dreamitbiz.com/og-image.png" />
<meta property="og:site_name" content="CMaster" />
<meta property="og:locale" content="ko_KR" />
```

#### OG 이미지 생성 (`scripts/generate-og.js`)
- Sharp 라이브러리 사용
- SVG → PNG 변환 (1200 x 630px)
- 다크 블루 그라데이션 배경
- C 코드 장식 텍스트 (#include, printf, malloc 등)
- CMaster 로고 + 설명 + 기능 태그

### 11단계: 빌드 & 배포

#### 빌드 결과
- **137 모듈** 트랜스폼 완료
- **33개 청크** 생성 (코드 스플리팅)
- 메인 번들: 485KB (gzip: 145KB)
- CSS: 55.5KB (gzip: 9.6KB)
- 빌드 시간: ~5초

#### 배포
- GitHub Pages (`gh-pages` 브랜치)
- CNAME: `c-study.dreamitbiz.com`
- SPA 라우팅: 404.html 리다이렉트 핸들러

---

## 전체 파일 통계

| 카테고리 | 파일 수 | 설명 |
|----------|---------|------|
| 설정 파일 | 5 | package.json, vite.config.js, .env, .gitignore, index.html |
| 퍼블릭 | 3 | favicon.svg, og-image.png, 404.html |
| 스크립트 | 2 | generate-og.js, setup-supabase.sql |
| 컨텍스트 | 5 | Auth, Progress, Badge, Theme, Language |
| 컴포넌트 | 10 | Navbar, Footer, CodeEditor, Quiz 등 |
| 스타일 | 20 | index.css + 19개 모듈별 CSS |
| 데이터 | 15 | lessons, badges, quizzes, contents, steps |
| 페이지 | 26 | Home, Level, Lesson, Quiz, Community 등 |
| 다국어 | 2 | ko.js, en.js |
| 훅 | 1 | useCommunity.js |
| 설정 | 1 | supabase.js |
| 문서 | 2 | DEVLOG.md, README.md |
| **합계** | **93+** | |

---

## PyMaster → CMaster 변환 상세

| 항목 | PyMaster | CMaster |
|------|---------|---------|
| 학습 언어 | Python | C |
| 테이블 접두사 | pymaster_ | cmaster_ |
| localStorage 키 | pymaster-* | cmaster-* |
| 코드 실행 방식 | Pyodide (브라우저 내 실행) | 시뮬레이션 메시지 (컴파일 안내) |
| 문법 하이라이팅 | prism-python | prism-c |
| 퀴즈 레벨 수 | 8개 | 4개 (기초/중급/고급/응용) |
| 컬러 테마 | 블루/그린 | 다크 블루 (#0A1628, #1B3A5C) |
| 레슨 수 | 32개 | 32개 |
| 배지 수 | 30+ | 40개 |
| 실습 단계 | Python 기반 | C 기반 (10단계) |
| 커리큘럼 | 없음 | 11주 체계적 학습 과정 |
| 대상 | Python 입문자 | C언어 입문자, 시스템 프로그래밍 지망생 |

---

## 커밋 이력

| 날짜 | 커밋 | 내용 |
|------|------|------|
| 2026-03-25 | `2307aef` | Initial commit: CMaster - C언어 전문 학습 플랫폼 (93 files) |
| 2026-03-25 | `afebbad` | Merge: CNAME + README.md 통합 |
| 2026-03-25 | `600abde` | 개발일지 상세화 및 최종 배포 |
| 2026-03-25 | `4e565df` | 코드 감사 - 4개 크리티컬 버그 수정 |
| 2026-03-25 | `2a538e9` | CNAME을 public/에 추가 |
| 2026-03-25 | `b2ee26c` | CSS 클래스명 전면 수정 |

---

## 2026-03-25 (Day 1) - 버그 수정 패치

### 코드 감사 (Audit) 실시
전체 프로젝트를 대상으로 import/export 매칭, 데이터 구조 일관성, Context-데이터 연동, locale 키 누락 등을 점검하여 **4개 크리티컬 이슈** 발견 및 수정.

### 수정 내역

#### Fix 1: QuizCenter 런타임 크래시 (`src/pages/QuizCenter.jsx`)
- **문제**: `quizzes`가 객체(Object)인데 `.map()` 배열 메서드로 호출 → 크래시
- **원인**: `quizzes.js`는 `{ basics: {...}, intermediate: {...}, ... }` 객체 export, QuizCenter는 배열 기대
- **수정**: `Object.entries(quizzes).map(([id, quiz]) => ...)` 패턴으로 변환
- **추가**: `quizzes.length` → `Object.keys(quizzes).length`

#### Fix 2: 퀴즈 채점 실패 (`src/data/quizzes.js`)
- **문제**: 퀴즈 데이터의 정답 프로퍼티명 `answer` vs QuizComponent가 기대하는 `correct` 불일치
- **영향**: 모든 퀴즈 채점이 실패 (undefined 비교)
- **수정**: 전체 40문항의 `answer:` → `correct:` 일괄 변경
- **추가**: 각 퀴즈에 `icon`, `timeLimit: 600`, `passingScore: 70` 속성 추가

#### Fix 3: 배지 시스템 전면 미작동 (`src/contexts/BadgeContext.jsx`)
- **문제**: BadgeContext의 switch 조건 타입명과 badges.js의 조건 타입명 완전 불일치
- **불일치 목록**:
  - `lessons_completed` → `lesson_complete` (단일 레슨 완료)
  - `level_completed` → `level_complete` (레벨 완료)
  - `all_completed` → `all_levels_complete` (전체 완료)
  - `specific_lessons` → `lessons_complete` (특정 레슨 그룹)
  - 누락: `quiz_complete_count`, `practice_complete_count`, `quiz_perfect_score`
- **수정**: switch문 전체 재작성, badges.js의 모든 조건 타입과 1:1 매칭

#### Fix 4: locale 키 누락 (`src/locales/ko.js`, `en.js`)
- **문제**: `lesson.notFound`, `lesson.backHome` 키가 없어 리터럴 문자열 표시
- **수정**: 양쪽 locale 파일에 키 추가
  - ko: `'레슨을 찾을 수 없습니다'`, `'홈으로 돌아가기'`
  - en: `'Lesson not found'`, `'Back to Home'`

---

## 2026-03-25 (Day 1) - CSS 클래스명 전면 수정

### 문제 발견
배포 사이트에서 디자인이 전면 깨짐 확인. 원인: JSX 컴포넌트의 className과 CSS 파일의 선택자명이 대규모 불일치.

### 수정 범위 (13개 CSS 파일, +3,456줄)

| CSS 파일 | 대응 컴포넌트 | 변경량 |
|---------|-------------|--------|
| hero.css | Home.jsx | +397줄 (히어로, 터미널, 통계, 특징, 학습경로, CTA) |
| base.css | App.jsx | +10줄 (container, 유틸리티) |
| course.css | LevelPage, LessonPage | +481줄 (레벨 페이지, 레슨 상세) |
| community.css | Community, Post, Write | +714줄 (게시판, 글쓰기, 댓글) |
| teacher.css | TeacherPage | +415줄 (교사 대시보드) |
| mypage.css | MyPage | +372줄 (사용자 대시보드) |
| c-learning.css | CLearning, CLesson | +301줄 (커리큘럼, 강의) |
| admin.css | AdminPage | +288줄 (관리자 패널) |
| quiz.css | QuizCenter | +271줄 (퀴즈 센터) |
| guide.css | Guide | +218줄 (이용 가이드) |
| practice.css | CPractice | +188줄 (실습) |
| auth.css | Login | +190줄 (로그인) |
| badge.css | BadgeCollection | +149줄 (배지 컬렉션) |

### 주요 패턴 수정 예시
- `.hero` → `.hero-section`
- `.hero-description` → `.hero-subtitle`
- `.hero-buttons` → `.hero-actions`
- `.path-section` → `.learning-path-section`
- `.overview-section` → `.progress-overview-section`
- 터미널 UI, 배지 그리드, 퀴즈 카드 등 누락 CSS 전량 추가

---

## 2026-03-25 (Day 1) - 대규모 기능 개선 패치

### 1. 로케일 키 전면 보수 (52개 누락 + 8개 불일치 수정)
JSX 컴포넌트가 참조하는 로케일 키와 실제 locale 파일의 키 간 대규모 불일치 발견 및 수정.

**영향 범위:**
- Home.jsx: 21개 누락 키 (`heroBadge`, `heroTitle`, `heroSubtitle`, `curriculum`, `statsLessons/Hours/Projects/Levels`, `featuresTitle/Subtitle`, `pathTitle`, `progressTitle`, `streakDays`, `codeRuns`, `badgesEarned`, `ctaSubtitle/SignUp/Continue/Guide`)
- LevelPage.jsx: 8개 누락 키 (`notFound`, `backHome`, `progress`, `lessonsTotal`, `completedBanner`, `noLessons`, `prevLevel`, `nextLevel`)
- LessonPage.jsx: 7개 누락 키 (`topicsCovered`, `contentComingSoon/Desc`, `markComplete/Incomplete`, `prevLesson`, `nextLesson`)
- QuizCenter.jsx: 10개 누락 키 (`notAttempted`, `perfect`, `passed`, `failed`, `backToList`, `totalQuizzes`, `attempted`, `perfectScore`, `noQuizzes/Desc`)
- BadgeCollection.jsx: 3개 누락 키 (`collected`, `noBadges/Desc`)
- CPractice.jsx: 3개 누락 키 (`step`, `prevStep`, `nextStep`)
- `nav.home` 키 추가

**수정**: `ko.js`, `en.js` 양쪽 파일 전면 재작성

### 2. C 코드 브라우저 실행 기능 추가 (JSCPP 통합)
- **문제**: 코드 에디터에서 "C 코드는 브라우저에서 직접 실행할 수 없습니다" 메시지만 표시
- **해결**: JSCPP (JavaScript C++ Interpreter) 라이브러리 통합
  - `npm install JSCPP` (v2.0.9)
  - CodeEditor.jsx에 JSCPP.run() 연동
  - printf, scanf, 변수, 제어문, 함수, 배열, 포인터, 문자열, 구조체 등 기본 C 문법 지원
  - 실행 오류 시 에러 메시지 한글/영어 표시
- **번들 크기**: CodeEditor chunk 384KB (gzip 75KB)

### 3. "주차" → "단계" 전면 전환
사용자 요청에 따라 커리큘럼 단위를 "주차(Week)"에서 "단계(Step)"로 전환.

**변경 파일:**
- `CLearning.jsx`: 전체 11개 항목 `N주차` → `N단계`, `Week N` → `Step N`
- `CLesson01~11.jsx`: 각 레슨 헤더 및 코드 예제
- `Guide.jsx`: FAQ 및 퀵링크 텍스트
- `TeacherPage.jsx`: 교사 페이지 커리큘럼 제목
- `ko.js`, `en.js`: `cLearning.subtitle` 업데이트 ("11단계 커리큘럼")

### 4. 더블 스크롤 수정
- **문제**: 코드 에디터 영역에서 textarea와 부모 컨테이너 모두 스크롤바 표시
- **수정**: `.code-input`에 `overflow: hidden` 추가, 부모 `.editor-body`만 스크롤 담당

---

## 2026-03-25 (Day 1) - C 학습 데이터 정확성 강화 + 코드 실행 결과 정확화

### 문제 분석
배포 사이트에서 각 주제별 학습 데이터가 부정확/부족하고, 실행 버튼 결과가 정확하지 않다는 피드백.
JSCPP(브라우저 C 인터프리터)가 지원하지 않는 기능(`malloc`, `struct`, `FILE`, `fopen`, `%p` 주소, `%lu` 등)을 사용하는 코드 예제가 다수 존재하여 실행 시 오류 발생.

### 수정 내역

#### 1. CPractice.jsx 전면 재작성 (50개 예제)
- **기존**: 10개 step × 2개 예제 = 20개 (매우 부족)
- **변경**: 10개 step × 5개 예제 = 50개 (점진적 난이도)
- **Step 9**: "구조체" → **"종합 실습"** 주제 변경 (JSCPP struct 미지원)
  - 계산기, 성적관리(배열), 배열통계, 시저암호, 소수구하기
- **Step 10**: "동적메모리/파일" → **"고급 실습"** 주제 변경 (JSCPP malloc/fopen 미지원)
  - 선택정렬, 이진탐색, 행렬곱셈, 재귀패턴, 성적분석
- 모든 `expected` 값을 JSCPP 실제 출력과 일치하도록 검증
- 구구단 등 `...` 생략 표기 → 전체 출력으로 수정

#### 2. cSteps 5개 파일 JSCPP 호환성 수정

| 파일 | 수정 내용 |
|------|-----------|
| `step2.js` | `%lu` → `%d` + `(int)sizeof()` 캐스트, `stdbool.h` 의존 제거 (정수 0/1 사용), `limits.h` 의존 제거 |
| `step3.js` | `0b11001010` 바이너리 리터럴 → `202` 10진수, `sizeof('A')` 행 제거, `%lu` → `%d` + `(int)` 캐스트 |
| `step4.js` | `%p`+`(void*)0` 포인터 출력 제거, `%ld` → `%d` 변환 |
| `step8.js` | `%lu`+`strlen()` → `%d`+`(int)strlen()` 전체 수정, `%ld`+포인터연산 → `%d`+`(int)` 캐스트 |
| `step10.js` | `%p` 주소 출력 3개 예제 제거, `malloc`/`struct` 사용 예제(s10e7,e9,e10) JSCPP 호환 대체 (이중포인터→배열, 연결리스트→함수포인터, void*→종합예제) |

#### 3. CodeEditor.jsx 미지원 기능 자동 감지
- 실행 전 코드 스캔: `malloc`, `struct`, `FILE`, `fopen`, `union`, `goto` 등 14개 패턴 감지
- 감지 시 경고 메시지 표시 (한/영) 후 실행 시도
- 에러 메시지 개선: JSCPP 오류를 사용자 친화적 메시지로 번역
  - "is not defined" → "브라우저 컴파일러에서 지원하지 않는 기능"
  - "Parsing failed" → "구문 분석 오류: 코드 문법을 확인해 주세요"

#### 4. CLesson07~11.jsx 경고 박스 추가 (5개 파일)
각 레슨 페이지 상단에 JSCPP 미지원 경고 박스 삽입:

| 파일 | 경고 내용 |
|------|-----------|
| CLesson07 | malloc, free 등 동적 메모리 기능 미지원 안내 |
| CLesson08 | struct, union, typedef 미지원 안내 |
| CLesson09 | FILE, fopen, fclose 등 파일 입출력 미지원 안내 |
| CLesson10 | struct, malloc, free 등 자료구조 기능 미지원 안내 |
| CLesson11 | struct, malloc, FILE 등 종합 프로젝트 기능 미지원 안내 |

#### 5. 로케일 키 추가
- `ko.js`: `editor.unsupportedWarning`, `editor.localCompilerNote` 추가
- `en.js`: 동일 키 영문 번역 추가

### 빌드 검증
- `npm run build` 성공 (171 modules, 33 chunks, 4.34s)
- 에러/경고 없음 (JSCPP eval 경고는 라이브러리 내부 → 무시)

---

## 2026-03-25 (Day 1) - JSCPP 런타임 오류 수정

### 문제
배포 사이트에서 코드 에디터 "실행" 버튼 클릭 시 `Right-hand side of 'instanceof' is not an object` 오류 발생.

### 원인 분석
- JSCPP는 순수 CommonJS 패키지(`module.exports`)
- 프로젝트는 ES 모듈(`"type": "module"`) 사용
- Vite 프로덕션 빌드 시 Rollup의 `@rollup/plugin-commonjs`가 CJS→ESM 변환 과정에서 `instanceof` 체크에 필요한 생성자 참조를 망가뜨림

### 수정 내역

#### 1. vite.config.js — CommonJS 호환성 설정 추가
- `build.commonjsOptions.requireReturnsDefault: 'auto'`: CJS 모듈의 default export를 올바르게 처리
- `build.commonjsOptions.transformMixedEsModules: true`: import/require 혼합 사용하는 JSCPP 의존성 처리
- `optimizeDeps.include: ['JSCPP']`: Vite가 JSCPP를 명시적으로 사전 번들링

#### 2. CodeEditor.jsx — JSCPP 호출 방식 개선
- `import JSCPP from 'JSCPP'` → `import JSCPPModule from 'JSCPP'` + `const JSCPP = JSCPPModule.default || JSCPPModule`
- CJS/ESM 어떤 방식으로 번들되든 동작하는 인터옵 패턴 적용
- `JSCPP.run()` config에 `includes: JSCPP.includes` 명시적 전달 (this 컨텍스트 의존 제거)

### 빌드 검증
- `npm run build` 성공 (171 modules, 33 chunks, 3.94s)
- 에러 없음
