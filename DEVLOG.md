# C Programming Tutorial 개발일지

## 프로젝트 개요
- **프로젝트명**: C Programming Tutorial - C언어 전문 학습 플랫폼
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
<meta property="og:title" content="C Programming Tutorial - C언어 전문 학습 플랫폼" />
<meta property="og:description" content="C언어 기초부터 고급 시스템 프로그래밍까지..." />
<meta property="og:image" content="https://c-study.dreamitbiz.com/og-image.png" />
<meta property="og:site_name" content="C Programming Tutorial" />
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
| 2026-03-25 | `2bfc7ea` | JSCPP esbuild 사전 번들링 + 32개 레슨 sections 추가 |
| 2026-03-25 | `576f76b` | 리브랜딩: CMaster → C-PT |
| 2026-03-25 | `e547bf4` | C 실습 예제 확장 (50개 → 100개) |
| 2026-03-25 | `aa0623c` | 리브랜딩: C-PT → C Programming / C Programming Tutorial |
| 2026-03-25 | `67dcad4` | 히어로 섹션 2단 레이아웃 + 터미널 위젯 |
| 2026-03-25 | `ff72056` | 실습 예제 탭 클릭 시 코드 미갱신 버그 수정 |
| 2026-03-25 | `3eb2132` | 히어로 터미널 소스코드 뷰 + OG 이미지 재생성 |
| 2026-03-25 | `a9e90ba` | OG 이미지 URL 캐시 무효화 파라미터 추가 |
| 2026-03-25 | `8be8f38` | 에디터/출력 영역 콘텐츠 크기 자동 확장 + JSCPP 2D 배열 초기화 수정 |
| 2026-03-25 | `91ee4a9` | 푸터 리디자인: db-study 동일 레이아웃 적용 |

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

---

## 2026-03-25 (Day 1) - JSCPP esbuild 사전 번들링 + 32개 레슨 상세 콘텐츠 추가

### JSCPP instanceof 오류 근본 해결

#### 문제
이전 수정(commonjsOptions)으로도 프로덕션 빌드에서 `Right-hand side of 'instanceof' is not an object` 오류가 지속됨.

#### 근본 원인
Rollup의 CJS→ESM 변환이 JSCPP 내부의 `instanceof` 체크에 필요한 생성자 참조를 분리된 모듈로 만들어 깨뜨림. Vite의 `commonjsOptions` 조정만으로는 해결 불가.

#### 해결: esbuild 사전 번들링
1. **`src/lib/jscpp-bundle.js`** (985KB) - esbuild로 JSCPP를 ESM 형식 단일 번들로 사전 빌드
   - 명령: `npx esbuild node_modules/JSCPP/lib/launcher.js --bundle --format=esm --outfile=src/lib/jscpp-bundle.js --platform=browser --define:global=globalThis --alias:util=./src/lib/util-shim.js --alias:stream=./src/lib/stream-shim.js`
   - 모든 생성자가 동일 모듈 스코프 내에 존재하여 `instanceof` 정상 동작
2. **`src/lib/util-shim.js`** - 최소 util 폴리필 (inspect만 제공)
3. **`src/lib/stream-shim.js`** - 최소 stream 폴리필 (Stream 클래스만 제공)
4. **`src/components/CodeEditor.jsx`** 수정 - `import JSCPPModule from '../lib/jscpp-bundle.js'`

### 32개 레슨 상세 sections 콘텐츠 추가

#### 문제
`lessonContents.js`의 32개 레슨에 `title`, `summary`, `keyConcepts`만 있고 `sections` 배열이 없어 LessonPage.jsx에서 상세 학습 콘텐츠를 렌더링할 수 없었음.

#### 해결: 4개 레벨별 섹션 파일 생성
| 파일 | 레슨 수 | 섹션 수 | 설명 |
|------|---------|---------|------|
| `src/data/lessonSections/basics.js` | 9 | 35 | hello-c ~ functions-basic |
| `src/data/lessonSections/intermediate.js` | 10 | 32 | pointers-basic ~ scope-storage |
| `src/data/lessonSections/advanced.js` | 7 | 25 | linked-list ~ bitwise |
| `src/data/lessonSections/applied.js` | 7 | 20 | memory-management ~ mini-project |
| **합계** | **33** | **112** | |

#### 각 섹션 구조
```js
{
  heading / headingEn,     // 소제목 (한/영)
  text / textEn,           // 설명 텍스트 배열 (한/영)
  code,                    // C 코드 예제
  expectedOutput,          // 예상 출력
  tip / tipEn,             // 팁 (선택)
  warning / warningEn      // 경고 (선택, JSCPP 미지원 코드)
}
```

#### JSCPP 호환성 분류
- **기초 9개 레슨**: 모두 JSCPP 호환 (브라우저 실행 가능)
- **중급 10개 레슨**: pointers-basic/pointers-advanced 일부 호환, 나머지 경고 표시
- **고급 7개 레슨**: sorting/recursion/bitwise JSCPP 호환, 나머지 경고 표시
- **응용 7개 레슨**: 모두 경고 표시 (시스템 호출, 파일 I/O 등)

#### 통합 방식
- `src/data/lessonSections/index.js`: 4개 파일을 통합 export
- `src/data/lessonContents.js`: `allSections`를 import하여 각 레슨에 sections 병합

### 빌드 & 배포 결과
- `npm run build` 성공 (143 modules)
- `LessonPage` 청크: 266.84KB (32개 레슨 sections 포함)
- `CodeEditor` 청크: 386.66KB (JSCPP 사전 번들 포함)
- 커밋: `2bfc7ea`
- GitHub Pages 배포 완료

---

## 2026-03-25 (Day 1) - 리브랜딩: CMaster → C Programming / C Programming Tutorial

### 변경 과정
1. **1차 변경** (CMaster → C-PT): 약칭 "C-PT" + 부제 "C Programming Tutorial" 적용 → 커밋 `576f76b`
2. **2차 변경** (C-PT → C Programming): 사용자 피드백 반영, "C-PT"가 부자연스러워 최종 결정:
   - **로고** (Navbar/Footer): **"C Programming"** (`C` 파란색 + `Programming` 기본색)
   - **히어로/본문/메타태그**: **"C Programming Tutorial"** (풀네임)

### 최종 변경 파일 및 내용

| 파일 | 변경 내용 |
|------|-----------|
| `index.html` | title, og:title, og:site_name, twitter:title → "C Programming Tutorial" |
| `Navbar.jsx` | 로고: `<span>C</span> <span>Programming</span>` (subtitle 제거) |
| `Footer.jsx` | 브랜드: `C Programming` (subtitle 제거) |
| `navbar.css` | `.brand-master` → `.brand-pt`, 미사용 `.brand-subtitle` 제거 |
| `footer.css` | `.brand-master` → `.brand-pt`, 미사용 `.brand-subtitle` 제거 |
| `ko.js` | heroTitle2, whyCMaster, featuresTitle, guide/login subtitle, copyright → "C Programming Tutorial" |
| `en.js` | 동일 키 영문 |
| `Home.jsx` | hero-highlight → "C Programming Tutorial", 터미널 → "Hello, C Programming!" |
| `Login.jsx` | 브랜드 "C Programming", 설명 "C Programming Tutorial", 코드 스니펫 변경 |
| `Guide.jsx` | FAQ "C Programming Tutorial은 무엇인가요?" |
| `Certificate.jsx` | certificate-brand → "C Programming Tutorial" |

- 1차 커밋: `576f76b`, 2차 커밋: `aa0623c`
- GitHub Pages 배포 완료

---

## 2026-03-25 (Day 1) - C 실습 예제 대폭 확장 (50개 → 100개)

### 변경 사유
10단계 × 5예제 = 50개로는 실습량이 부족. 각 단계를 10개 예제로 확장하여 더 효과적인 학습 지원.

### 구조 변경
- 기존: 인라인 데이터 (CPractice.jsx 내 398줄)
- 변경: 별도 데이터 파일 분리
  - `src/data/practiceSteps1to5.js` (360줄, 5 steps × 10 examples)
  - `src/data/practiceSteps6to10.js` (360줄, 5 steps × 10 examples)
  - `CPractice.jsx`에서 import하여 결합

### 추가된 새 예제 (단계별)

| 단계 | 추가 예제 |
|------|-----------|
| 1. 기초 출력 | ASCII 아트, 명함, 숫자 패턴, printf 플래그, 문자 코드표 |
| 2. 변수/자료형 | sizeof, 온도 변환, BMI, 변수 교환, 원 계산 |
| 3. 조건문 | 윤년, 삼각형 판별, 세 수 최대, 월별 일수, 메뉴 |
| 4. 반복문 | 숫자 피라미드, 숫자 뒤집기, 최대공약수, 다이아몬드, 자릿수 합 |
| 5. 함수 | GCD/LCM, 소수 판별, 온도 함수, strlen, 배열 min/max |
| 6. 배열 | 빈도 계산, 선형 탐색, 배열 회전, 중복 제거, 배열 병합 |
| 7. 포인터 | 문자열 포인터, 포인터 연산, 포인터 뒤집기, 다중 반환, 비교 |
| 8. 문자열 | 회문, 문자 빈도, 모음, 대소문자 변환, 공백 제거 |
| 9. 종합 | 이진수 변환, 행렬 전치, 파스칼 삼각형, 추측 게임, 순위 |
| 10. 고급 | 삽입 정렬, 스택, 큐, 하노이, 병합 정렬 |

### 빌드 결과
- `npm run build` 성공 (145 modules)
- `CPractice` 청크: 55.93KB → **90.59KB** (+62% 증가)
- 커밋: `e547bf4`
- GitHub Pages 배포 완료

---

## 2026-03-25 (Day 1) - 히어로 섹션 2단 레이아웃 개선

### 변경 사유
히어로 영역의 콘텐츠가 좁게 중앙 정렬되어 공간 활용이 부족하고, 가독성 개선 요청.

### 수정 내역

#### Home.jsx — 히어로 구조 변경
- **기존**: 단일 컬럼 중앙 정렬 (max-width: 700px)
- **변경**: 2단 레이아웃 (텍스트 왼쪽 + 터미널 오른쪽)
- 타이틀 줄바꿈 개선:
  - 1행: `C언어의 모든 것,` / `Master C Language`
  - 2행: `C Programming Tutorial` (강조 파란색)
  - 3행: `로 시작하세요` / `is your guide`

#### hero.css — 레이아웃 CSS 추가
| 클래스 | 역할 |
|--------|------|
| `.hero-two-col` | 2단 flexbox 컨테이너 (gap: 48px) |
| `.hero-text-col` | 텍스트 영역 (flex: 1) |
| `.hero-terminal-col` | 터미널 영역 (width: 420px) |
| `.hero-title-sub` | 타이틀 3행 스타일 (32px, 700weight) |

#### 반응형 대응
| 브레이크포인트 | 동작 |
|----------------|------|
| 960px | 2단 → 1단 세로 배치, 터미널 max-width: 480px |
| 768px | 타이틀 30px, 부제 24px |
| 480px | 타이틀 26px, 부제 20px, 버튼 세로 배치 |

- 커밋: `67dcad4`
- GitHub Pages 배포 완료

---

## 2026-03-25 (Day 1) - 실습 예제 탭 클릭 시 코드 미갱신 버그 수정

### 문제
CPractice 페이지에서 예제 탭(Hello World 출력, 여러 줄 출력 등)을 클릭해도 코드 에디터의 내용이 바뀌지 않음. 첫 번째 예제 코드만 계속 표시됨.

### 원인
`CodeEditor` 컴포넌트 내부에서 `useState(initialCode)`로 코드 state를 초기화하는데, React의 `useState`는 **최초 마운트 시에만** 초기값을 적용. 부모에서 `initialCode` prop이 바뀌어도 내부 `code` state가 갱신되지 않는 React 라이프사이클 이슈.

### 수정
`CPractice.jsx`의 `CodeEditor`에 React `key` prop 추가:
```jsx
<CodeEditor
  key={`practice-${selectedStep}-${selectedExample}`}
  initialCode={currentExample.code}
  ...
/>
```
`key`가 바뀌면 React가 컴포넌트를 완전히 언마운트/재마운트하여 모든 내부 state(code, output, status)가 초기화됨.

- 커밋: `ff72056`
- GitHub Pages 배포 완료

---

## 2026-03-25 (Day 1) - 히어로 터미널 소스코드 뷰 + OG 이미지 재생성

### 1. 히어로 터미널 개선

#### 변경 사유
히어로 섹션의 터미널이 컴파일/실행 명령어만 표시하여 소스 코드 내용이 없었음. 실제 C 소스 코드를 보여주는 코드 뷰어 + 터미널 실행 결과를 2단 구성으로 개선.

#### Home.jsx 변경
- **기존**: 터미널 1개 (compile + run + output)
- **변경**: 코드 뷰어 + 터미널 2개 패널
  - **hello.c 패널**: 소스 코드 구문 강조 표시
    - `#include` (보라색), `<stdio.h>` (초록색), `int` (노란색)
    - `main`/`printf` (파란색), `0` (주황색), `return` (보라색)
  - **terminal 패널**: `$ gcc -o hello hello.c` → `$ ./hello` → `Hello, C Programming!`

#### hero.css 추가 클래스
| 클래스 | 용도 |
|--------|------|
| `.hero-terminal-run` | 터미널 패널 상단 간격 (margin-top: 8px) |
| `.terminal-code` | pre 태그 코드 표시 (monospace, 13px) |
| `.code-preprocessor` | `#include`, `return` 등 (보라색 #C792EA) |
| `.code-string` | 문자열 리터럴 (초록색 #C3E88D) |
| `.code-type` | `int` 등 자료형 (노란색 #FFCB6B) |
| `.code-keyword` | `return` 등 키워드 (보라색 #C792EA) |
| `.code-fn` | `main`, `printf` 등 함수명 (파란색 #82AAFF) |
| `.code-number` | 숫자 리터럴 (주황색 #F78C6C) |

### 2. OG 이미지 재생성

#### 변경 사유
OG 이미지가 이전 "CMaster" 브랜딩으로 되어 있어 카카오톡/SNS 공유 시 잘못된 정보 표시.

#### generate-og.js 수정
- **타이틀**: `CMaster` → `C Programming` (C 파란색 + Programming 흰색)
- **부제**: `C언어 전문 학습 플랫폼` → `Tutorial` (파란색 강조)
- **설명**: `체계적인 커리큘럼과 브라우저 실습으로 학습하세요`
- **태그**: `기초 문법/포인터/메모리 관리/자료구조` → `32+ 레슨/100+ 실습/브라우저 실행/한/영 지원`

#### 결과
- `public/og-image.png` 재생성 (1200×630px)
- 카카오 디버거에서 캐시 초기화 필요: https://developers.kakao.com/tool/debugger/sharing

- 커밋: `3eb2132`
- GitHub Pages 배포 완료

---

## 2026-03-25 (Day 1) - OG 이미지 캐시 무효화

### 문제
OG 이미지를 "C Programming Tutorial" 브랜딩으로 재생성하여 배포했으나, 카카오톡 등 SNS에서 이전 캐시된 이미지가 계속 표시됨.

### 원인
카카오/페이스북/트위터 등 SNS 플랫폼은 OG 이미지를 서버 측에서 캐싱. 동일 URL의 이미지가 변경되어도 캐시 만료 전까지 이전 이미지를 표시.

### 수정
`index.html`의 OG/Twitter 이미지 URL에 버전 쿼리 파라미터 추가:
- `og-image.png` → `og-image.png?v=2`
- SNS 크롤러가 새 URL로 인식하여 이미지를 다시 가져옴

### 확인 방법
- 카카오 디버거: https://developers.kakao.com/tool/debugger/sharing → URL 입력 → **캐시 초기화** 클릭

- 커밋: `a9e90ba`
- GitHub Pages 배포 완료

---

## 2026-03-25 (Day 1) - 에디터/출력 영역 자동 확장 + JSCPP 2D 배열 초기화 수정

### 1. 에디터/출력 영역 콘텐츠 크기 자동 확장

#### 문제
코드 에디터(textarea)와 실행 결과(output) 영역에 고정 `max-height`가 설정되어 있어 콘텐츠가 조금만 길어져도 세로 스크롤바가 나타남.

#### 수정

**editor.css:**
| 변경 | 기존 | 수정 |
|------|------|------|
| `.editor-body` | `max-height: 400px; overflow: auto` | `overflow: visible` (max-height 제거) |
| `.editor-output-content` | `max-height: 300px; overflow: auto` | `overflow: visible` (max-height 제거) |

**CodeEditor.jsx:**
- `useEffect` 추가: `code` state가 변경될 때마다 textarea의 `style.height`를 `scrollHeight`로 자동 조정
- textarea가 콘텐츠에 맞게 확장되어 스크롤 없이 전체 코드를 볼 수 있음

### 2. JSCPP 2D 배열 초기화 오류 수정

#### 문제
고급 실습 10단계 "행렬 곱셈" 예제 실행 시 `Cannot use 'in' operator to search for 'type' in undefined` 오류 발생.

#### 원인
JSCPP가 2D 배열 부분 초기화(`int C[2][2] = {{0}}`)를 지원하지 않음. 내부적으로 중첩 배열의 타입 추론에 실패.

#### 수정
- **행렬 곱셈**: `int C[2][2] = {{0}}` → `int C[2][2] = {{0, 0}, {0, 0}}` (명시적 초기화)
- **파스칼의 삼각형**: `int tri[6][6] = {0}` → 선언 후 이중 for 루프로 0 초기화

- 커밋: `8be8f38`
- GitHub Pages 배포 완료

---

## 2026-03-25 (Day 1) - 푸터 리디자인 (db-study 동일 레이아웃)

### 변경 사유
db-study 프로젝트와 동일한 푸터 디자인으로 통일하여 패밀리 사이트 간 일관된 브랜드 경험 제공.

### 변경 내역

#### Footer.jsx — 전면 재작성
| 기존 | 변경 |
|------|------|
| 4열 그리드 (브랜드/학습/지원/법적고지) | 3열 그리드 (브랜드+패밀리사이트/바로가기/연락처) |
| 단순 텍스트 링크 | SVG 아이콘 연락처 (이메일, 전화, 카카오톡, 영업시간) |
| 저작권 한 줄 | 대표이사, 사업자번호, 통신판매신고, 출판사 신고 정보 |
| Family Site 없음 | Family Site 드롭다운 (DreamIT Biz, KoreaTech, DB Study) |

#### footer.css — 전면 재작성
- 배경: `var(--primary-dark)` → `linear-gradient(180deg, #111827, #0A0F1A)` 그라데이션
- 바로가기: 2열 그리드 레이아웃
- 연락처: SVG 아이콘 + 텍스트 행
- 하단바: 사업자 정보 메타, 모바일 반응형 줄바꿈
- Family Site: select 드롭다운 (다크 테마)

#### 로케일 키 추가 (ko.js, en.js)
- `footer.quickLinks`, `footer.contact`, `footer.kakao`, `footer.hours`
- `footer.company`, `footer.ceo`, `footer.bizNo`, `footer.salesNo`, `footer.publishNo`

- 커밋: `91ee4a9`
- GitHub Pages 배포 완료
