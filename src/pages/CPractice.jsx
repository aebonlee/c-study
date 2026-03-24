import { useState, useMemo } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useProgress } from '../contexts/ProgressContext'
import PracticeEditor from '../components/PracticeEditor'
import CodeEditor from '../components/CodeEditor'

const practiceSteps = [
  {
    step: 1,
    titleKo: '기초 출력',
    titleEn: 'Basic Output',
    descKo: 'printf를 사용하여 다양한 출력을 연습합니다.',
    descEn: 'Practice various outputs using printf.',
    examples: [
      {
        titleKo: 'Hello World 출력',
        titleEn: 'Print Hello World',
        code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
        expected: 'Hello, World!',
      },
      {
        titleKo: '여러 줄 출력',
        titleEn: 'Multi-line Output',
        code: '#include <stdio.h>\n\nint main() {\n    printf("Line 1\\n");\n    printf("Line 2\\n");\n    printf("Line 3\\n");\n    return 0;\n}',
        expected: 'Line 1\nLine 2\nLine 3',
      },
    ],
  },
  {
    step: 2,
    titleKo: '변수와 입력',
    titleEn: 'Variables & Input',
    descKo: '변수를 선언하고 scanf로 입력받습니다.',
    descEn: 'Declare variables and receive input with scanf.',
    examples: [
      {
        titleKo: '정수 변수 선언',
        titleEn: 'Integer Variables',
        code: '#include <stdio.h>\n\nint main() {\n    int a = 10;\n    int b = 20;\n    int sum = a + b;\n    printf("Sum: %d\\n", sum);\n    return 0;\n}',
        expected: 'Sum: 30',
      },
      {
        titleKo: '다양한 자료형',
        titleEn: 'Various Data Types',
        code: '#include <stdio.h>\n\nint main() {\n    int age = 25;\n    float height = 175.5f;\n    char grade = \'A\';\n    printf("Age: %d\\n", age);\n    printf("Height: %.1f\\n", height);\n    printf("Grade: %c\\n", grade);\n    return 0;\n}',
        expected: 'Age: 25\nHeight: 175.5\nGrade: A',
      },
    ],
  },
  {
    step: 3,
    titleKo: '조건문',
    titleEn: 'Conditionals',
    descKo: 'if-else와 switch문을 연습합니다.',
    descEn: 'Practice if-else and switch statements.',
    examples: [
      {
        titleKo: '짝수/홀수 판별',
        titleEn: 'Even/Odd Check',
        code: '#include <stdio.h>\n\nint main() {\n    int num = 7;\n    if (num % 2 == 0) {\n        printf("%d is even\\n", num);\n    } else {\n        printf("%d is odd\\n", num);\n    }\n    return 0;\n}',
        expected: '7 is odd',
      },
      {
        titleKo: '학점 계산',
        titleEn: 'Grade Calculator',
        code: '#include <stdio.h>\n\nint main() {\n    int score = 85;\n    char grade;\n    if (score >= 90) grade = \'A\';\n    else if (score >= 80) grade = \'B\';\n    else if (score >= 70) grade = \'C\';\n    else grade = \'F\';\n    printf("Score: %d, Grade: %c\\n", score, grade);\n    return 0;\n}',
        expected: 'Score: 85, Grade: B',
      },
    ],
  },
  {
    step: 4,
    titleKo: '반복문',
    titleEn: 'Loops',
    descKo: 'for, while, do-while 반복문을 연습합니다.',
    descEn: 'Practice for, while, and do-while loops.',
    examples: [
      {
        titleKo: '1부터 10까지 합',
        titleEn: 'Sum 1 to 10',
        code: '#include <stdio.h>\n\nint main() {\n    int sum = 0;\n    for (int i = 1; i <= 10; i++) {\n        sum += i;\n    }\n    printf("Sum: %d\\n", sum);\n    return 0;\n}',
        expected: 'Sum: 55',
      },
      {
        titleKo: '구구단 출력',
        titleEn: 'Multiplication Table',
        code: '#include <stdio.h>\n\nint main() {\n    int n = 5;\n    for (int i = 1; i <= 9; i++) {\n        printf("%d x %d = %d\\n", n, i, n * i);\n    }\n    return 0;\n}',
        expected: '5 x 1 = 5\n...\n5 x 9 = 45',
      },
    ],
  },
  {
    step: 5,
    titleKo: '함수',
    titleEn: 'Functions',
    descKo: '함수를 정의하고 호출하는 연습을 합니다.',
    descEn: 'Practice defining and calling functions.',
    examples: [
      {
        titleKo: '최대값 함수',
        titleEn: 'Max Function',
        code: '#include <stdio.h>\n\nint max(int a, int b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    int result = max(10, 25);\n    printf("Max: %d\\n", result);\n    return 0;\n}',
        expected: 'Max: 25',
      },
      {
        titleKo: '팩토리얼 함수',
        titleEn: 'Factorial Function',
        code: '#include <stdio.h>\n\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nint main() {\n    printf("5! = %d\\n", factorial(5));\n    return 0;\n}',
        expected: '5! = 120',
      },
    ],
  },
  {
    step: 6,
    titleKo: '배열',
    titleEn: 'Arrays',
    descKo: '배열의 선언, 초기화, 순회를 연습합니다.',
    descEn: 'Practice array declaration, initialization, and traversal.',
    examples: [
      {
        titleKo: '배열 평균 계산',
        titleEn: 'Array Average',
        code: '#include <stdio.h>\n\nint main() {\n    int scores[] = {90, 85, 78, 92, 88};\n    int n = sizeof(scores) / sizeof(scores[0]);\n    int sum = 0;\n    for (int i = 0; i < n; i++) {\n        sum += scores[i];\n    }\n    printf("Average: %.1f\\n", (float)sum / n);\n    return 0;\n}',
        expected: 'Average: 86.6',
      },
      {
        titleKo: '배열 최대/최소',
        titleEn: 'Array Min/Max',
        code: '#include <stdio.h>\n\nint main() {\n    int arr[] = {3, 7, 1, 9, 4, 6};\n    int n = 6;\n    int max = arr[0], min = arr[0];\n    for (int i = 1; i < n; i++) {\n        if (arr[i] > max) max = arr[i];\n        if (arr[i] < min) min = arr[i];\n    }\n    printf("Max: %d, Min: %d\\n", max, min);\n    return 0;\n}',
        expected: 'Max: 9, Min: 1',
      },
    ],
  },
  {
    step: 7,
    titleKo: '포인터',
    titleEn: 'Pointers',
    descKo: '포인터 선언, 역참조, 배열 포인터를 연습합니다.',
    descEn: 'Practice pointer declaration, dereferencing, and array pointers.',
    examples: [
      {
        titleKo: '포인터 기본',
        titleEn: 'Basic Pointers',
        code: '#include <stdio.h>\n\nint main() {\n    int x = 42;\n    int *ptr = &x;\n    printf("Value: %d\\n", *ptr);\n    printf("Address: %p\\n", (void*)ptr);\n    *ptr = 100;\n    printf("New value: %d\\n", x);\n    return 0;\n}',
        expected: 'Value: 42\nAddress: ...\nNew value: 100',
      },
      {
        titleKo: 'swap 함수',
        titleEn: 'Swap Function',
        code: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main() {\n    int x = 10, y = 20;\n    printf("Before: x=%d, y=%d\\n", x, y);\n    swap(&x, &y);\n    printf("After: x=%d, y=%d\\n", x, y);\n    return 0;\n}',
        expected: 'Before: x=10, y=20\nAfter: x=20, y=10',
      },
    ],
  },
  {
    step: 8,
    titleKo: '문자열 처리',
    titleEn: 'String Handling',
    descKo: '문자열 함수와 문자열 조작을 연습합니다.',
    descEn: 'Practice string functions and manipulation.',
    examples: [
      {
        titleKo: '문자열 길이와 복사',
        titleEn: 'String Length & Copy',
        code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char src[] = "Hello, C!";\n    char dest[20];\n    strcpy(dest, src);\n    printf("String: %s\\n", dest);\n    printf("Length: %lu\\n", strlen(dest));\n    return 0;\n}',
        expected: 'String: Hello, C!\nLength: 9',
      },
      {
        titleKo: '문자열 비교와 결합',
        titleEn: 'String Compare & Concat',
        code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str1[30] = "Hello";\n    char str2[] = " World";\n    strcat(str1, str2);\n    printf("%s\\n", str1);\n    printf("Compare: %d\\n", strcmp("abc", "abc"));\n    return 0;\n}',
        expected: 'Hello World\nCompare: 0',
      },
    ],
  },
  {
    step: 9,
    titleKo: '구조체',
    titleEn: 'Structs',
    descKo: '구조체 정의, 초기화, 포인터 활용을 연습합니다.',
    descEn: 'Practice struct definition, initialization, and pointer usage.',
    examples: [
      {
        titleKo: '학생 구조체',
        titleEn: 'Student Struct',
        code: '#include <stdio.h>\n\ntypedef struct {\n    char name[20];\n    int age;\n    float gpa;\n} Student;\n\nint main() {\n    Student s = {"Kim", 20, 3.8};\n    printf("Name: %s\\n", s.name);\n    printf("Age: %d\\n", s.age);\n    printf("GPA: %.1f\\n", s.gpa);\n    return 0;\n}',
        expected: 'Name: Kim\nAge: 20\nGPA: 3.8',
      },
      {
        titleKo: '구조체 배열',
        titleEn: 'Struct Array',
        code: '#include <stdio.h>\n\ntypedef struct {\n    char title[30];\n    int pages;\n} Book;\n\nint main() {\n    Book books[] = {\n        {"C Programming", 400},\n        {"Data Structures", 350}\n    };\n    for (int i = 0; i < 2; i++) {\n        printf("%s (%d pages)\\n",\n               books[i].title, books[i].pages);\n    }\n    return 0;\n}',
        expected: 'C Programming (400 pages)\nData Structures (350 pages)',
      },
    ],
  },
  {
    step: 10,
    titleKo: '동적 메모리와 파일',
    titleEn: 'Dynamic Memory & Files',
    descKo: 'malloc/free와 파일 입출력을 종합 연습합니다.',
    descEn: 'Comprehensive practice with malloc/free and file I/O.',
    examples: [
      {
        titleKo: '동적 배열',
        titleEn: 'Dynamic Array',
        code: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 5;\n    int *arr = (int*)malloc(n * sizeof(int));\n    if (arr == NULL) {\n        printf("Memory allocation failed\\n");\n        return 1;\n    }\n    for (int i = 0; i < n; i++) {\n        arr[i] = (i + 1) * 10;\n    }\n    for (int i = 0; i < n; i++) {\n        printf("arr[%d] = %d\\n", i, arr[i]);\n    }\n    free(arr);\n    return 0;\n}',
        expected: 'arr[0] = 10\narr[1] = 20\n...',
      },
      {
        titleKo: '파일 쓰기와 읽기',
        titleEn: 'File Write & Read',
        code: '#include <stdio.h>\n\nint main() {\n    // Write to file\n    FILE *fp = fopen("test.txt", "w");\n    if (fp != NULL) {\n        fprintf(fp, "Hello, File!\\n");\n        fprintf(fp, "Line 2\\n");\n        fclose(fp);\n    }\n\n    // Read from file\n    fp = fopen("test.txt", "r");\n    if (fp != NULL) {\n        char line[100];\n        while (fgets(line, sizeof(line), fp)) {\n            printf("%s", line);\n        }\n        fclose(fp);\n    }\n    return 0;\n}',
        expected: 'Hello, File!\nLine 2',
      },
    ],
  },
]

export default function CPractice() {
  const { t, lang } = useLanguage()
  const [selectedStep, setSelectedStep] = useState(1)
  const [selectedExample, setSelectedExample] = useState(0)

  const currentStepData = useMemo(() => {
    return practiceSteps.find(s => s.step === selectedStep) || practiceSteps[0]
  }, [selectedStep])

  const currentExample = currentStepData.examples[selectedExample]

  const handleStepChange = (step) => {
    setSelectedStep(step)
    setSelectedExample(0)
  }

  return (
    <div className="c-practice-page">
      {/* Header */}
      <section className="practice-header">
        <h1>
          <i className="fa-solid fa-dumbbell" />
          {t('practice.title')}
        </h1>
        <p className="practice-subtitle">{t('practice.subtitle')}</p>
      </section>

      {/* Step Selector */}
      <section className="practice-steps">
        <div className="steps-scroll">
          {practiceSteps.map((step) => (
            <button
              key={step.step}
              className={`step-btn ${selectedStep === step.step ? 'active' : ''}`}
              onClick={() => handleStepChange(step.step)}
            >
              <span className="step-number">{step.step}</span>
              <span className="step-title">{lang === 'en' ? step.titleEn : step.titleKo}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Practice Content */}
      <section className="practice-content">
        <div className="practice-content-header">
          <h2>
            <span className="step-badge">{t('practice.step')} {currentStepData.step}</span>
            {lang === 'en' ? currentStepData.titleEn : currentStepData.titleKo}
          </h2>
          <p>{lang === 'en' ? currentStepData.descEn : currentStepData.descKo}</p>
        </div>

        {/* Example Tabs */}
        <div className="example-tabs">
          {currentStepData.examples.map((ex, i) => (
            <button
              key={i}
              className={`example-tab ${selectedExample === i ? 'active' : ''}`}
              onClick={() => setSelectedExample(i)}
            >
              <i className="fa-solid fa-code" />
              {lang === 'en' ? ex.titleEn : ex.titleKo}
            </button>
          ))}
        </div>

        {/* Code Editor */}
        {currentExample && (
          <div className="practice-editor-section">
            <CodeEditor
              initialCode={currentExample.code}
              expectedOutput={currentExample.expected}
              lessonId={`practice-${selectedStep}-${selectedExample}`}
            />
          </div>
        )}
      </section>

      {/* Navigation */}
      <section className="practice-nav">
        <button
          className="practice-nav-btn"
          disabled={selectedStep <= 1}
          onClick={() => handleStepChange(selectedStep - 1)}
        >
          <i className="fa-solid fa-arrow-left" />
          {t('practice.prevStep')}
        </button>

        <span className="practice-nav-info">
          {selectedStep} / {practiceSteps.length}
        </span>

        <button
          className="practice-nav-btn"
          disabled={selectedStep >= practiceSteps.length}
          onClick={() => handleStepChange(selectedStep + 1)}
        >
          {t('practice.nextStep')}
          <i className="fa-solid fa-arrow-right" />
        </button>
      </section>
    </div>
  )
}
