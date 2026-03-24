// C Language Learning Badges
// Tiers: bronze (beginner), silver (intermediate), gold (advanced), platinum (master)

export const badges = [
  // === BRONZE TIER (Beginner achievements) ===
  {
    id: 'first-compile',
    name: '첫 컴파일',
    nameEn: 'First Compile',
    description: '첫 번째 C 프로그램을 성공적으로 컴파일하세요',
    descriptionEn: 'Successfully compile your first C program',
    icon: 'fa-solid fa-play',
    tier: 'bronze',
    condition: { type: 'lesson_complete', lessonId: 'hello-c' },
    points: 10
  },
  {
    id: 'hello-world',
    name: 'Hello, World!',
    nameEn: 'Hello, World!',
    description: 'Hello C! 레슨을 완료하세요',
    descriptionEn: 'Complete the Hello C! lesson',
    icon: 'fa-solid fa-hand-wave',
    tier: 'bronze',
    condition: { type: 'lesson_complete', lessonId: 'hello-c' },
    points: 10
  },
  {
    id: 'variable-explorer',
    name: '변수 탐험가',
    nameEn: 'Variable Explorer',
    description: '변수와 자료형 레슨을 완료하세요',
    descriptionEn: 'Complete the Variables & Data Types lesson',
    icon: 'fa-solid fa-box-open',
    tier: 'bronze',
    condition: { type: 'lesson_complete', lessonId: 'variables' },
    points: 10
  },
  {
    id: 'calculator',
    name: '계산기',
    nameEn: 'Calculator',
    description: '연산자 레슨을 완료하세요',
    descriptionEn: 'Complete the Operators lesson',
    icon: 'fa-solid fa-calculator',
    tier: 'bronze',
    condition: { type: 'lesson_complete', lessonId: 'operators' },
    points: 10
  },
  {
    id: 'io-master',
    name: '입출력 마스터',
    nameEn: 'I/O Master',
    description: '입출력 레슨을 완료하세요',
    descriptionEn: 'Complete the Input & Output lesson',
    icon: 'fa-solid fa-right-left',
    tier: 'bronze',
    condition: { type: 'lesson_complete', lessonId: 'input-output' },
    points: 10
  },
  {
    id: 'decision-maker',
    name: '결정자',
    nameEn: 'Decision Maker',
    description: '조건문 레슨을 완료하세요',
    descriptionEn: 'Complete the Conditionals lesson',
    icon: 'fa-solid fa-code-branch',
    tier: 'bronze',
    condition: { type: 'lesson_complete', lessonId: 'conditionals' },
    points: 10
  },
  {
    id: 'loop-rider',
    name: '루프 라이더',
    nameEn: 'Loop Rider',
    description: '반복문 레슨을 완료하세요',
    descriptionEn: 'Complete the Loops lesson',
    icon: 'fa-solid fa-rotate',
    tier: 'bronze',
    condition: { type: 'lesson_complete', lessonId: 'loops' },
    points: 10
  },
  {
    id: 'array-apprentice',
    name: '배열 견습생',
    nameEn: 'Array Apprentice',
    description: '배열 레슨을 완료하세요',
    descriptionEn: 'Complete the Arrays lesson',
    icon: 'fa-solid fa-table-cells',
    tier: 'bronze',
    condition: { type: 'lesson_complete', lessonId: 'arrays' },
    points: 10
  },
  {
    id: 'quiz-starter',
    name: '퀴즈 입문자',
    nameEn: 'Quiz Starter',
    description: '첫 번째 퀴즈를 완료하세요',
    descriptionEn: 'Complete your first quiz',
    icon: 'fa-solid fa-circle-question',
    tier: 'bronze',
    condition: { type: 'quiz_complete_count', count: 1 },
    points: 10
  },
  {
    id: 'practice-beginner',
    name: '연습 시작',
    nameEn: 'Practice Beginner',
    description: '연습 문제 5개를 완료하세요',
    descriptionEn: 'Complete 5 practice problems',
    icon: 'fa-solid fa-dumbbell',
    tier: 'bronze',
    condition: { type: 'practice_complete_count', count: 5 },
    points: 10
  },

  // === SILVER TIER (Intermediate achievements) ===
  {
    id: 'basics-complete',
    name: '기초 마스터',
    nameEn: 'Basics Master',
    description: '기초 레벨의 모든 레슨을 완료하세요',
    descriptionEn: 'Complete all lessons in the Basics level',
    icon: 'fa-solid fa-seedling',
    tier: 'silver',
    condition: { type: 'level_complete', level: 'basics' },
    points: 30
  },
  {
    id: 'pointer-pioneer',
    name: '포인터 개척자',
    nameEn: 'Pointer Pioneer',
    description: '포인터 기초 레슨을 완료하세요',
    descriptionEn: 'Complete the Pointer Basics lesson',
    icon: 'fa-solid fa-location-dot',
    tier: 'silver',
    condition: { type: 'lesson_complete', lessonId: 'pointers-basic' },
    points: 20
  },
  {
    id: 'memory-allocator',
    name: '메모리 할당자',
    nameEn: 'Memory Allocator',
    description: '동적 메모리 레슨을 완료하세요',
    descriptionEn: 'Complete the Dynamic Memory lesson',
    icon: 'fa-solid fa-memory',
    tier: 'silver',
    condition: { type: 'lesson_complete', lessonId: 'dynamic-memory' },
    points: 20
  },
  {
    id: 'struct-builder',
    name: '구조체 빌더',
    nameEn: 'Struct Builder',
    description: '구조체 레슨을 완료하세요',
    descriptionEn: 'Complete the Structures lesson',
    icon: 'fa-solid fa-cubes',
    tier: 'silver',
    condition: { type: 'lesson_complete', lessonId: 'structures' },
    points: 20
  },
  {
    id: 'file-handler',
    name: '파일 핸들러',
    nameEn: 'File Handler',
    description: '파일 입출력 레슨을 완료하세요',
    descriptionEn: 'Complete the File I/O lesson',
    icon: 'fa-solid fa-folder-open',
    tier: 'silver',
    condition: { type: 'lesson_complete', lessonId: 'file-io' },
    points: 20
  },
  {
    id: 'preprocessor-wizard',
    name: '전처리기 마법사',
    nameEn: 'Preprocessor Wizard',
    description: '전처리기 레슨을 완료하세요',
    descriptionEn: 'Complete the Preprocessor lesson',
    icon: 'fa-solid fa-wand-magic-sparkles',
    tier: 'silver',
    condition: { type: 'lesson_complete', lessonId: 'preprocessor' },
    points: 20
  },
  {
    id: 'string-weaver',
    name: '문자열 직조사',
    nameEn: 'String Weaver',
    description: '문자열 기초와 심화 레슨을 모두 완료하세요',
    descriptionEn: 'Complete both String Basics and Advanced Strings lessons',
    icon: 'fa-solid fa-text-width',
    tier: 'silver',
    condition: { type: 'lessons_complete', lessonIds: ['strings-basic', 'strings-advanced'] },
    points: 25
  },
  {
    id: 'quiz-enthusiast',
    name: '퀴즈 애호가',
    nameEn: 'Quiz Enthusiast',
    description: '퀴즈를 5개 완료하세요',
    descriptionEn: 'Complete 5 quizzes',
    icon: 'fa-solid fa-star-half-stroke',
    tier: 'silver',
    condition: { type: 'quiz_complete_count', count: 5 },
    points: 25
  },
  {
    id: 'practice-regular',
    name: '꾸준한 연습가',
    nameEn: 'Regular Practitioner',
    description: '연습 문제 20개를 완료하세요',
    descriptionEn: 'Complete 20 practice problems',
    icon: 'fa-solid fa-fire',
    tier: 'silver',
    condition: { type: 'practice_complete_count', count: 20 },
    points: 25
  },

  // === GOLD TIER (Advanced achievements) ===
  {
    id: 'intermediate-complete',
    name: '중급 정복자',
    nameEn: 'Intermediate Conqueror',
    description: '중급 레벨의 모든 레슨을 완료하세요',
    descriptionEn: 'Complete all lessons in the Intermediate level',
    icon: 'fa-solid fa-rocket',
    tier: 'gold',
    condition: { type: 'level_complete', level: 'intermediate' },
    points: 50
  },
  {
    id: 'double-pointer-master',
    name: '이중 포인터 달인',
    nameEn: 'Double Pointer Master',
    description: '포인터 심화 레슨을 완료하세요',
    descriptionEn: 'Complete the Advanced Pointers lesson',
    icon: 'fa-solid fa-arrows-split-up-and-left',
    tier: 'gold',
    condition: { type: 'lesson_complete', lessonId: 'pointers-advanced' },
    points: 30
  },
  {
    id: 'linked-list-builder',
    name: '연결 리스트 빌더',
    nameEn: 'Linked List Builder',
    description: '연결 리스트 레슨을 완료하세요',
    descriptionEn: 'Complete the Linked Lists lesson',
    icon: 'fa-solid fa-link',
    tier: 'gold',
    condition: { type: 'lesson_complete', lessonId: 'linked-list' },
    points: 30
  },
  {
    id: 'sort-specialist',
    name: '정렬 전문가',
    nameEn: 'Sort Specialist',
    description: '정렬 알고리즘 레슨을 완료하세요',
    descriptionEn: 'Complete the Sorting Algorithms lesson',
    icon: 'fa-solid fa-arrow-up-wide-short',
    tier: 'gold',
    condition: { type: 'lesson_complete', lessonId: 'sorting' },
    points: 30
  },
  {
    id: 'tree-climber',
    name: '트리 등반가',
    nameEn: 'Tree Climber',
    description: '트리 기초 레슨을 완료하세요',
    descriptionEn: 'Complete the Tree Basics lesson',
    icon: 'fa-solid fa-sitemap',
    tier: 'gold',
    condition: { type: 'lesson_complete', lessonId: 'tree-basics' },
    points: 30
  },
  {
    id: 'recursion-guru',
    name: '재귀 도사',
    nameEn: 'Recursion Guru',
    description: '재귀 레슨을 완료하세요',
    descriptionEn: 'Complete the Recursion lesson',
    icon: 'fa-solid fa-repeat',
    tier: 'gold',
    condition: { type: 'lesson_complete', lessonId: 'recursion' },
    points: 30
  },
  {
    id: 'bit-manipulator',
    name: '비트 조종사',
    nameEn: 'Bit Manipulator',
    description: '비트 연산 활용 레슨을 완료하세요',
    descriptionEn: 'Complete the Bitwise Operations lesson',
    icon: 'fa-solid fa-microchip',
    tier: 'gold',
    condition: { type: 'lesson_complete', lessonId: 'bitwise' },
    points: 30
  },
  {
    id: 'quiz-champion',
    name: '퀴즈 챔피언',
    nameEn: 'Quiz Champion',
    description: '모든 레벨의 퀴즈를 완료하세요',
    descriptionEn: 'Complete quizzes for all levels',
    icon: 'fa-solid fa-trophy',
    tier: 'gold',
    condition: { type: 'quiz_complete_count', count: 10 },
    points: 40
  },
  {
    id: 'practice-warrior',
    name: '연습 전사',
    nameEn: 'Practice Warrior',
    description: '연습 문제 50개를 완료하세요',
    descriptionEn: 'Complete 50 practice problems',
    icon: 'fa-solid fa-shield',
    tier: 'gold',
    condition: { type: 'practice_complete_count', count: 50 },
    points: 40
  },

  // === PLATINUM TIER (Master achievements) ===
  {
    id: 'advanced-complete',
    name: '고급 정복자',
    nameEn: 'Advanced Conqueror',
    description: '고급 레벨의 모든 레슨을 완료하세요',
    descriptionEn: 'Complete all lessons in the Advanced level',
    icon: 'fa-solid fa-bolt',
    tier: 'platinum',
    condition: { type: 'level_complete', level: 'advanced' },
    points: 80
  },
  {
    id: 'applied-complete',
    name: '응용 정복자',
    nameEn: 'Applied Conqueror',
    description: '응용 레벨의 모든 레슨을 완료하세요',
    descriptionEn: 'Complete all lessons in the Applied level',
    icon: 'fa-solid fa-microchip',
    tier: 'platinum',
    condition: { type: 'level_complete', level: 'applied' },
    points: 80
  },
  {
    id: 'c-master',
    name: 'C 마스터',
    nameEn: 'C Master',
    description: '모든 레슨을 완료하세요',
    descriptionEn: 'Complete all lessons across every level',
    icon: 'fa-solid fa-crown',
    tier: 'platinum',
    condition: { type: 'all_levels_complete' },
    points: 100
  },
  {
    id: 'memory-sage',
    name: '메모리 현자',
    nameEn: 'Memory Sage',
    description: '메모리 관련 레슨을 모두 완료하세요 (동적 메모리 + 메모리 관리 심화)',
    descriptionEn: 'Complete all memory-related lessons (Dynamic Memory + Advanced Memory Management)',
    icon: 'fa-solid fa-brain',
    tier: 'platinum',
    condition: { type: 'lessons_complete', lessonIds: ['dynamic-memory', 'memory-management'] },
    points: 60
  },
  {
    id: 'pointer-sage',
    name: '포인터 현자',
    nameEn: 'Pointer Sage',
    description: '포인터 관련 레슨을 모두 완료하세요 (기초 + 심화 + 함수 포인터)',
    descriptionEn: 'Complete all pointer lessons (Basic + Advanced + Function Pointers)',
    icon: 'fa-solid fa-wand-sparkles',
    tier: 'platinum',
    condition: { type: 'lessons_complete', lessonIds: ['pointers-basic', 'pointers-advanced', 'function-pointers'] },
    points: 60
  },
  {
    id: 'data-structure-hero',
    name: '자료구조 영웅',
    nameEn: 'Data Structure Hero',
    description: '모든 자료구조 레슨을 완료하세요 (연결 리스트 + 스택/큐 + 트리)',
    descriptionEn: 'Complete all data structure lessons (Linked List + Stack/Queue + Tree)',
    icon: 'fa-solid fa-database',
    tier: 'platinum',
    condition: { type: 'lessons_complete', lessonIds: ['linked-list', 'stack-queue', 'tree-basics'] },
    points: 60
  },
  {
    id: 'algorithm-master',
    name: '알고리즘 마스터',
    nameEn: 'Algorithm Master',
    description: '정렬, 탐색, 재귀 레슨을 모두 완료하세요',
    descriptionEn: 'Complete Sorting, Searching, and Recursion lessons',
    icon: 'fa-solid fa-chart-line',
    tier: 'platinum',
    condition: { type: 'lessons_complete', lessonIds: ['sorting', 'searching', 'recursion'] },
    points: 60
  },
  {
    id: 'project-hero',
    name: '프로젝트 영웅',
    nameEn: 'Project Hero',
    description: '미니 프로젝트를 완료하세요',
    descriptionEn: 'Complete the Mini Project',
    icon: 'fa-solid fa-graduation-cap',
    tier: 'platinum',
    condition: { type: 'lesson_complete', lessonId: 'mini-project' },
    points: 50
  },
  {
    id: 'perfect-quiz',
    name: '만점왕',
    nameEn: 'Perfect Score',
    description: '퀴즈에서 만점을 받으세요',
    descriptionEn: 'Get a perfect score on any quiz',
    icon: 'fa-solid fa-star',
    tier: 'platinum',
    condition: { type: 'quiz_perfect_score' },
    points: 50
  },
  {
    id: 'practice-legend',
    name: '연습의 전설',
    nameEn: 'Practice Legend',
    description: '연습 문제 100개를 완료하세요',
    descriptionEn: 'Complete 100 practice problems',
    icon: 'fa-solid fa-gem',
    tier: 'platinum',
    condition: { type: 'practice_complete_count', count: 100 },
    points: 80
  },
  {
    id: 'debugging-detective',
    name: '디버깅 탐정',
    nameEn: 'Debugging Detective',
    description: '디버깅 기법 레슨을 완료하세요',
    descriptionEn: 'Complete the Debugging Techniques lesson',
    icon: 'fa-solid fa-bug',
    tier: 'gold',
    condition: { type: 'lesson_complete', lessonId: 'debugging' },
    points: 30
  },
  {
    id: 'system-programmer',
    name: '시스템 프로그래머',
    nameEn: 'System Programmer',
    description: '시스템 호출 기초 레슨을 완료하세요',
    descriptionEn: 'Complete the System Calls Basics lesson',
    icon: 'fa-solid fa-terminal',
    tier: 'gold',
    condition: { type: 'lesson_complete', lessonId: 'system-calls' },
    points: 30
  }
]

// Tier display configuration
export const tierConfig = {
  bronze: {
    name: '브론즈',
    nameEn: 'Bronze',
    color: '#CD7F32',
    bgColor: 'rgba(205, 127, 50, 0.1)',
    borderColor: 'rgba(205, 127, 50, 0.3)',
    icon: 'fa-solid fa-medal'
  },
  silver: {
    name: '실버',
    nameEn: 'Silver',
    color: '#C0C0C0',
    bgColor: 'rgba(192, 192, 192, 0.1)',
    borderColor: 'rgba(192, 192, 192, 0.3)',
    icon: 'fa-solid fa-award'
  },
  gold: {
    name: '골드',
    nameEn: 'Gold',
    color: '#FFD700',
    bgColor: 'rgba(255, 215, 0, 0.1)',
    borderColor: 'rgba(255, 215, 0, 0.3)',
    icon: 'fa-solid fa-trophy'
  },
  platinum: {
    name: '플래티넘',
    nameEn: 'Platinum',
    color: '#E5E4E2',
    bgColor: 'rgba(229, 228, 226, 0.1)',
    borderColor: 'rgba(229, 228, 226, 0.3)',
    icon: 'fa-solid fa-crown'
  }
}
