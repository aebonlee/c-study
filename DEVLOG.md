# CMaster 개발일지

## 프로젝트 개요
- **프로젝트명**: CMaster - C언어 전문 학습 플랫폼
- **기반 프로젝트**: PyMaster (D:\python-study) 아키텍처 참조
- **생성일**: 2026-03-25
- **기술 스택**: React 19 + Vite 7 + Supabase + PrismJS

---

## 기술 아키텍처

### Frontend
- **프레임워크**: React 19.2.0 + Vite 7.3.1
- **라우팅**: React Router DOM 7.13.0 (SPA + Lazy Loading)
- **코드 에디터**: react-simple-code-editor + PrismJS (C 문법 하이라이팅)
- **스타일링**: CSS Custom Properties + Dark Mode 지원
- **다국어**: 한국어/영어 지원 (LanguageContext)

### Backend
- **인증**: Supabase Auth (Google OAuth + Kakao OAuth)
- **데이터베이스**: Supabase PostgreSQL
- **테이블 접두사**: `cmaster_` (공유 DB에서 격리)
- **RLS**: Row Level Security 정책 적용

### 컬러 스킴
| 용도 | 색상 코드 |
|------|----------|
| Primary Dark | #0A1628 |
| Primary | #1B3A5C |
| Accent Blue | #4FC3F7 |
| Accent Teal | #26C6DA |
| Accent Gold | #FFD54F |

---

## 커리큘럼 구성

### 학습 단계 (4단계, 32개 레슨)
1. **기초 (Basics)** - 9개 레슨: C 소개, 변수, 연산자, 조건문, 반복문, 함수, 배열, 문자열, 포인터 입문
2. **중급 (Intermediate)** - 9개 레슨: 포인터 심화, 동적 메모리, 구조체, 파일 입출력, 전처리기, 비트 연산, 열거형, 다중 파일 프로젝트, 디버깅
3. **고급 (Advanced)** - 7개 레슨: 연결 리스트, 스택/큐, 트리, 정렬, 검색, 해시 테이블, 그래프 기초
4. **응용 (Applied)** - 7개 레슨: 시스템 프로그래밍, 프로세스, 소켓, 임베디드, 최적화, 보안, 종합 프로젝트

### 11주 체계적 학습 과정 (C-Learning)
- Week 1: C언어 소개와 개발환경
- Week 2: 변수와 자료형
- Week 3: 연산자와 표현식
- Week 4: 제어문 - 조건문
- Week 5: 제어문 - 반복문
- Week 6: 함수
- Week 7: 고급 포인터와 동적 메모리
- Week 8: 구조체와 공용체
- Week 9: 파일 입출력
- Week 10: 기초 자료구조
- Week 11: 종합 프로젝트

### C 실습 (10단계)
- Step 1-3: 기초 (Hello World, 변수, 조건문)
- Step 4-7: 중급 (함수/재귀, 포인터, 배열, 문자열)
- Step 8-10: 고급 (구조체, 동적 메모리, 연결 리스트)

---

## 주요 기능

### 1. 학습 시스템
- 단계별 레슨 페이지 (32개)
- 11주 체계적 커리큘럼
- 코드 에디터 (C 문법 하이라이팅)
- 레슨 완료 추적 및 진도율 표시

### 2. 퀴즈 시스템
- 단계별 퀴즈 (기초/중급/고급/응용)
- 타이머 기반 문제 풀이
- 점수 기록 및 통계

### 3. 배지 시스템
- 30+ 배지 (브론즈/실버/골드/플래티넘 4단계)
- 학습 진도, 퀴즈 성적, 스트릭 등 기반 자동 평가
- 배지 획득 알림 팝업

### 4. 커뮤니티
- 게시판 (질문답변/자유/코드공유/코드리뷰)
- 댓글, 좋아요, 조회수
- 태그 기반 검색

### 5. 인증 & 권한
- Google / Kakao OAuth 로그인
- 30분 세션 타이머 (5분 전 경고)
- 역할 기반 접근 (학생/교사/관리자)

### 6. OG 메타 태그
- Kakao 공유 미리보기 지원
- Sharp 기반 OG 이미지 자동 생성 (1200x630)

---

## 파일 구조

```
D:\c-study\
├── index.html              # OG 메타 태그 포함
├── package.json
├── vite.config.js
├── .env                    # Supabase 자격증명
├── .gitignore
├── scripts/
│   ├── generate-og.js      # OG 이미지 생성
│   └── setup-supabase.sql  # DB 스키마 + RLS
├── public/
│   ├── favicon.svg
│   └── og-image.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── config/
    │   └── supabase.js
    ├── contexts/
    │   ├── ThemeContext.jsx
    │   ├── LanguageContext.jsx
    │   ├── AuthContext.jsx
    │   ├── ProgressContext.jsx
    │   └── BadgeContext.jsx
    ├── hooks/
    │   └── useCommunity.js
    ├── components/
    │   ├── layout/ (Navbar, Footer)
    │   ├── ErrorBoundary.jsx
    │   ├── ProgressBar.jsx
    │   ├── LessonCard.jsx
    │   ├── BadgeCard.jsx
    │   ├── CodeEditor.jsx
    │   ├── PracticeEditor.jsx
    │   ├── QuizComponent.jsx
    │   └── Certificate.jsx
    ├── data/
    │   ├── lessons.js
    │   ├── badges.js
    │   ├── quizzes.js
    │   ├── lessonContents.js
    │   └── cSteps/ (step1-10 + index)
    ├── locales/
    │   ├── ko.js
    │   └── en.js
    ├── styles/ (19 CSS 파일)
    └── pages/
        ├── Home, LevelPage, LessonPage ...
        ├── c-learning/ (CLesson01-11)
        └── community/ (Community, Post, Write)
```

---

## Supabase 테이블

| 테이블명 | 용도 |
|---------|------|
| cmaster_users | 사용자 프로필 |
| cmaster_user_progress | 학습 진행 데이터 |
| cmaster_quiz_scores | 퀴즈 점수 |
| cmaster_community_posts | 커뮤니티 게시글 |
| cmaster_community_comments | 댓글 |
| cmaster_community_likes | 좋아요 |
| cmaster_classes | 반 (교사용) |
| cmaster_class_members | 반 멤버 |

---

## PyMaster → CMaster 변경사항

| 항목 | PyMaster | CMaster |
|------|---------|---------|
| 언어 | Python | C |
| 테이블 접두사 | pymaster_ | cmaster_ |
| localStorage 키 | pymaster-* | cmaster-* |
| 코드 실행 | Pyodide (브라우저) | 시뮬레이션 메시지 |
| 문법 하이라이팅 | prism-python | prism-c |
| 퀴즈 수 | 8개 | 5개 |
| 컬러 | 블루/그린 | 다크 블루 |
| 레슨 수 | 32 | 32 |
| 실습 단계 | Python 기반 | C 기반 |

---

## 빌드 & 배포

- **빌드 명령어**: `npm run build`
- **배포 방식**: GitHub Pages (`gh-pages` 브랜치)
- **배포 명령어**: `npm run deploy`
- **도메인**: c-study.dreamitbiz.com
