// Level metadata
export const levelInfo = {
  basics: {
    title: '기초',
    titleEn: 'Basics',
    description: 'C언어의 핵심 문법과 기본 개념을 탄탄하게 다집니다',
    descriptionEn: 'Build a solid foundation in C syntax and core concepts',
    icon: 'fa-solid fa-seedling',
    color: '#4FC3F7'
  },
  intermediate: {
    title: '중급',
    titleEn: 'Intermediate',
    description: '포인터, 메모리 관리, 구조체 등 실무 역량을 키웁니다',
    descriptionEn: 'Develop practical skills: pointers, memory management, structs',
    icon: 'fa-solid fa-rocket',
    color: '#1B3A5C'
  },
  advanced: {
    title: '고급',
    titleEn: 'Advanced',
    description: '자료구조, 알고리즘, 비트 연산 등 고급 기법을 익힙니다',
    descriptionEn: 'Master data structures, algorithms, and bitwise operations',
    icon: 'fa-solid fa-bolt',
    color: '#0A1628'
  },
  applied: {
    title: '응용',
    titleEn: 'Applied',
    description: '시스템 프로그래밍, 디버깅, 프로젝트 실습으로 실전 경험을 쌓습니다',
    descriptionEn: 'System programming, debugging, and hands-on projects',
    icon: 'fa-solid fa-microchip',
    color: '#26C6DA'
  }
}

export const lessons = {
  basics: [
    { id: 'hello-c', title: 'Hello C!', titleEn: 'Hello C!', description: 'C언어 첫 프로그램과 printf 함수', descriptionEn: 'Your first C program and printf()', icon: 'fa-solid fa-hand', estimatedTime: 15, difficulty: 1, topics: ['printf()', '주석', '#include', 'main()'] },
    { id: 'variables', title: '변수와 자료형', titleEn: 'Variables & Data Types', description: '정수, 실수, 문자형 변수와 sizeof 연산자', descriptionEn: 'Integer, float, char variables and sizeof', icon: 'fa-solid fa-box', estimatedTime: 20, difficulty: 1, topics: ['int', 'float', 'double', 'char', 'sizeof'] },
    { id: 'operators', title: '연산자', titleEn: 'Operators', description: '산술, 비교, 논리, 비트 연산자 완벽 정리', descriptionEn: 'Arithmetic, comparison, logical, and bitwise operators', icon: 'fa-solid fa-hashtag', estimatedTime: 20, difficulty: 1, topics: ['산술 연산자', '비교 연산자', '논리 연산자', '비트 연산자'] },
    { id: 'input-output', title: '입출력', titleEn: 'Input & Output', description: 'scanf와 printf를 이용한 서식 지정 입출력', descriptionEn: 'Formatted I/O with scanf and printf', icon: 'fa-solid fa-right-left', estimatedTime: 20, difficulty: 1, topics: ['scanf()', 'printf()', '서식 지정자', '이스케이프 문자'] },
    { id: 'conditionals', title: '조건문', titleEn: 'Conditionals', description: 'if, else if, else, switch-case 분기 처리', descriptionEn: 'Branching with if, else, switch-case', icon: 'fa-solid fa-code-branch', estimatedTime: 20, difficulty: 1, topics: ['if', 'else if', 'else', 'switch', 'case', '삼항 연산자'] },
    { id: 'loops', title: '반복문', titleEn: 'Loops', description: 'for, while, do-while 반복문과 제어', descriptionEn: 'for, while, do-while loops with break/continue', icon: 'fa-solid fa-rotate', estimatedTime: 25, difficulty: 1, topics: ['for', 'while', 'do-while', 'break', 'continue'] },
    { id: 'arrays', title: '배열', titleEn: 'Arrays', description: '1차원·다차원 배열의 선언, 초기화, 활용', descriptionEn: '1D and multi-dimensional array declaration and usage', icon: 'fa-solid fa-table-cells', estimatedTime: 25, difficulty: 1, topics: ['1차원 배열', '2차원 배열', '배열 초기화', '배열과 반복문'] },
    { id: 'strings-basic', title: '문자열 기초', titleEn: 'String Basics', description: 'char 배열과 문자열 함수 활용', descriptionEn: 'Char arrays and string functions', icon: 'fa-solid fa-pen-to-square', estimatedTime: 25, difficulty: 2, topics: ['char 배열', 'strlen', 'strcpy', 'strcmp', 'strcat'] },
    { id: 'functions-basic', title: '함수 기초', titleEn: 'Function Basics', description: '함수 정의, 매개변수, 반환값, 프로토타입', descriptionEn: 'Function definition, parameters, return values, prototypes', icon: 'fa-solid fa-gear', estimatedTime: 25, difficulty: 2, topics: ['함수 정의', '매개변수', 'return', '함수 프로토타입'] }
  ],
  intermediate: [
    { id: 'pointers-basic', title: '포인터 기초', titleEn: 'Pointer Basics', description: '주소 연산자, 역참조, 포인터 변수 이해', descriptionEn: 'Address operator, dereferencing, pointer variables', icon: 'fa-solid fa-location-dot', estimatedTime: 30, difficulty: 2, topics: ['& 연산자', '* 연산자', '포인터 변수', 'NULL 포인터'] },
    { id: 'pointers-advanced', title: '포인터 심화', titleEn: 'Advanced Pointers', description: '포인터 배열, 배열 포인터, 이중 포인터', descriptionEn: 'Pointer arrays, array pointers, double pointers', icon: 'fa-solid fa-arrows-split-up-and-left', estimatedTime: 35, difficulty: 3, topics: ['포인터 배열', '배열 포인터', '이중 포인터', '포인터 연산'] },
    { id: 'dynamic-memory', title: '동적 메모리', titleEn: 'Dynamic Memory', description: 'malloc, calloc, realloc, free로 메모리 관리', descriptionEn: 'Memory management with malloc, calloc, realloc, free', icon: 'fa-solid fa-memory', estimatedTime: 30, difficulty: 3, topics: ['malloc()', 'calloc()', 'realloc()', 'free()', '메모리 누수'] },
    { id: 'strings-advanced', title: '문자열 심화', titleEn: 'Advanced Strings', description: '문자열 포인터, strtok, sprintf, 동적 문자열', descriptionEn: 'String pointers, strtok, sprintf, dynamic strings', icon: 'fa-solid fa-text-width', estimatedTime: 25, difficulty: 2, topics: ['문자열 포인터', 'strtok', 'sprintf', 'sscanf'] },
    { id: 'structures', title: '구조체', titleEn: 'Structures', description: 'struct, typedef, 구조체 배열, 중첩 구조체', descriptionEn: 'struct, typedef, struct arrays, nested structs', icon: 'fa-solid fa-cubes', estimatedTime: 30, difficulty: 2, topics: ['struct', 'typedef', '구조체 배열', '중첩 구조체', '구조체 포인터'] },
    { id: 'unions-enums', title: '공용체와 열거형', titleEn: 'Unions & Enums', description: 'union, enum, 비트 필드 활용', descriptionEn: 'union, enum, and bit fields', icon: 'fa-solid fa-layer-group', estimatedTime: 20, difficulty: 2, topics: ['union', 'enum', '비트 필드', 'typedef'] },
    { id: 'file-io', title: '파일 입출력', titleEn: 'File I/O', description: 'fopen, fclose, fprintf, fscanf, fread, fwrite', descriptionEn: 'File operations: open, close, read, write', icon: 'fa-solid fa-folder', estimatedTime: 25, difficulty: 2, topics: ['fopen()', 'fclose()', 'fprintf()', 'fscanf()', 'fread()', 'fwrite()'] },
    { id: 'preprocessor', title: '전처리기', titleEn: 'Preprocessor', description: '#define, #include, #ifdef, 매크로 함수', descriptionEn: '#define, #include, #ifdef, macro functions', icon: 'fa-solid fa-wand-magic-sparkles', estimatedTime: 20, difficulty: 2, topics: ['#define', '#include', '#ifdef', '매크로 함수', '조건부 컴파일'] },
    { id: 'scope-storage', title: '스코프와 저장 클래스', titleEn: 'Scope & Storage Classes', description: 'auto, static, extern, register 저장 클래스', descriptionEn: 'auto, static, extern, register storage classes', icon: 'fa-solid fa-warehouse', estimatedTime: 20, difficulty: 2, topics: ['auto', 'static', 'extern', 'register', '스코프 규칙'] }
  ],
  advanced: [
    { id: 'linked-list', title: '연결 리스트', titleEn: 'Linked Lists', description: '단일/이중 연결 리스트 구현과 활용', descriptionEn: 'Singly/doubly linked list implementation', icon: 'fa-solid fa-link', estimatedTime: 40, difficulty: 3, topics: ['단일 연결 리스트', '이중 연결 리스트', '삽입', '삭제', '탐색'] },
    { id: 'stack-queue', title: '스택과 큐', titleEn: 'Stack & Queue', description: '배열/연결 리스트 기반 스택, 큐 구현', descriptionEn: 'Array/linked list based stack and queue', icon: 'fa-solid fa-layer-group', estimatedTime: 35, difficulty: 3, topics: ['스택', '큐', 'push', 'pop', 'enqueue', 'dequeue'] },
    { id: 'tree-basics', title: '트리 기초', titleEn: 'Tree Basics', description: '이진 트리, BST, 순회 알고리즘', descriptionEn: 'Binary tree, BST, traversal algorithms', icon: 'fa-solid fa-sitemap', estimatedTime: 40, difficulty: 3, topics: ['이진 트리', 'BST', '전위 순회', '중위 순회', '후위 순회'] },
    { id: 'sorting', title: '정렬 알고리즘', titleEn: 'Sorting Algorithms', description: '버블, 선택, 삽입, 퀵, 병합 정렬', descriptionEn: 'Bubble, selection, insertion, quick, merge sort', icon: 'fa-solid fa-arrow-up-wide-short', estimatedTime: 40, difficulty: 3, topics: ['버블 정렬', '선택 정렬', '삽입 정렬', '퀵 정렬', '병합 정렬'] },
    { id: 'searching', title: '탐색 알고리즘', titleEn: 'Search Algorithms', description: '순차 탐색, 이진 탐색, 해시 테이블', descriptionEn: 'Linear search, binary search, hash table', icon: 'fa-solid fa-magnifying-glass', estimatedTime: 35, difficulty: 3, topics: ['순차 탐색', '이진 탐색', '해시 테이블', '해시 충돌'] },
    { id: 'recursion', title: '재귀', titleEn: 'Recursion', description: '재귀 함수, 분할 정복, 꼬리 재귀', descriptionEn: 'Recursive functions, divide and conquer, tail recursion', icon: 'fa-solid fa-repeat', estimatedTime: 30, difficulty: 3, topics: ['재귀 함수', '팩토리얼', '피보나치', '분할 정복', '꼬리 재귀'] },
    { id: 'bitwise', title: '비트 연산 활용', titleEn: 'Bitwise Operations', description: '비트 마스킹, 비트 필드, 비트 연산 응용', descriptionEn: 'Bit masking, bit fields, bitwise applications', icon: 'fa-solid fa-microchip', estimatedTime: 25, difficulty: 3, topics: ['비트 마스킹', '비트 시프트', '비트 필드', '플래그 관리'] }
  ],
  applied: [
    { id: 'memory-management', title: '메모리 관리 심화', titleEn: 'Advanced Memory Management', description: '메모리 레이아웃, 스택/힙, 메모리 누수 방지', descriptionEn: 'Memory layout, stack/heap, leak prevention', icon: 'fa-solid fa-brain', estimatedTime: 35, difficulty: 3, topics: ['메모리 레이아웃', '스택', '힙', '메모리 누수', 'Valgrind'] },
    { id: 'function-pointers', title: '함수 포인터', titleEn: 'Function Pointers', description: '콜백 함수, 함수 포인터 배열, qsort 활용', descriptionEn: 'Callbacks, function pointer arrays, qsort', icon: 'fa-solid fa-arrow-pointer', estimatedTime: 30, difficulty: 3, topics: ['함수 포인터', '콜백', 'qsort()', '함수 포인터 배열'] },
    { id: 'multi-file', title: '다중 파일 프로그래밍', titleEn: 'Multi-file Programming', description: '헤더 파일, extern, 컴파일 과정 이해', descriptionEn: 'Header files, extern, compilation process', icon: 'fa-solid fa-folder-tree', estimatedTime: 25, difficulty: 2, topics: ['헤더 파일', 'extern', '#include guard', '컴파일 과정'] },
    { id: 'makefile', title: 'Makefile 작성', titleEn: 'Makefile', description: 'make 도구와 의존성 관리, 빌드 자동화', descriptionEn: 'make tool, dependency management, build automation', icon: 'fa-solid fa-hammer', estimatedTime: 25, difficulty: 2, topics: ['Makefile', 'make', '타겟', '의존성', '변수'] },
    { id: 'debugging', title: '디버깅 기법', titleEn: 'Debugging Techniques', description: 'GDB, Valgrind, 디버깅 전략과 도구', descriptionEn: 'GDB, Valgrind, debugging strategies and tools', icon: 'fa-solid fa-bug', estimatedTime: 30, difficulty: 2, topics: ['GDB', 'Valgrind', '브레이크포인트', '메모리 검사', 'assert'] },
    { id: 'system-calls', title: '시스템 호출 기초', titleEn: 'System Calls Basics', description: '프로세스, fork, exec, 시그널 처리', descriptionEn: 'Processes, fork, exec, signal handling', icon: 'fa-solid fa-terminal', estimatedTime: 35, difficulty: 3, topics: ['fork()', 'exec()', 'wait()', '시그널', 'pipe()'] },
    { id: 'mini-project', title: '미니 프로젝트', titleEn: 'Mini Project', description: '학생 관리 시스템 - 종합 실습 프로젝트', descriptionEn: 'Student management system - comprehensive project', icon: 'fa-solid fa-graduation-cap', estimatedTime: 60, difficulty: 3, topics: ['설계', '구현', '파일 저장', '메뉴 시스템', '테스트'] }
  ]
}
