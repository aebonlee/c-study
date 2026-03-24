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
      {
        titleKo: '이스케이프 문자 출력',
        titleEn: 'Escape Characters',
        code: '#include <stdio.h>\n\nint main() {\n    printf("Tab:\\tHello\\n");\n    printf("Quote: \\"Hi\\"\\n");\n    printf("Backslash: \\\\\\n");\n    printf("Percent: 100%%\\n");\n    return 0;\n}',
        expected: 'Tab:\tHello\nQuote: "Hi"\nBackslash: \\\nPercent: 100%',
      },
      {
        titleKo: '숫자와 문자 출력',
        titleEn: 'Numbers & Characters',
        code: '#include <stdio.h>\n\nint main() {\n    printf("Integer: %d\\n", 42);\n    printf("Float: %.2f\\n", 3.14);\n    printf("Char: %c\\n", \'A\');\n    printf("String: %s\\n", "Hello");\n    return 0;\n}',
        expected: 'Integer: 42\nFloat: 3.14\nChar: A\nString: Hello',
      },
      {
        titleKo: '서식 지정 출력',
        titleEn: 'Formatted Output',
        code: '#include <stdio.h>\n\nint main() {\n    printf("[%10d]\\n", 42);\n    printf("[%-10d]\\n", 42);\n    printf("[%05d]\\n", 42);\n    printf("[%.3f]\\n", 3.14159);\n    return 0;\n}',
        expected: '[        42]\n[42        ]\n[00042]\n[3.142]',
      },
    ],
  },
  {
    step: 2,
    titleKo: '변수와 자료형',
    titleEn: 'Variables & Data Types',
    descKo: '변수를 선언하고 다양한 자료형을 사용합니다.',
    descEn: 'Declare variables and use various data types.',
    examples: [
      {
        titleKo: '정수 변수 선언',
        titleEn: 'Integer Variables',
        code: '#include <stdio.h>\n\nint main() {\n    int a = 10;\n    int b = 20;\n    int sum = a + b;\n    printf("a = %d, b = %d\\n", a, b);\n    printf("Sum: %d\\n", sum);\n    return 0;\n}',
        expected: 'a = 10, b = 20\nSum: 30',
      },
      {
        titleKo: '다양한 자료형',
        titleEn: 'Various Data Types',
        code: '#include <stdio.h>\n\nint main() {\n    int age = 25;\n    float height = 175.5f;\n    char grade = \'A\';\n    double pi = 3.14159265;\n    printf("Age: %d\\n", age);\n    printf("Height: %.1f\\n", height);\n    printf("Grade: %c\\n", grade);\n    printf("Pi: %.8f\\n", pi);\n    return 0;\n}',
        expected: 'Age: 25\nHeight: 175.5\nGrade: A\nPi: 3.14159265',
      },
      {
        titleKo: '변수 연산',
        titleEn: 'Variable Operations',
        code: '#include <stdio.h>\n\nint main() {\n    int x = 17, y = 5;\n    printf("%d + %d = %d\\n", x, y, x + y);\n    printf("%d - %d = %d\\n", x, y, x - y);\n    printf("%d * %d = %d\\n", x, y, x * y);\n    printf("%d / %d = %d\\n", x, y, x / y);\n    printf("%d %% %d = %d\\n", x, y, x % y);\n    return 0;\n}',
        expected: '17 + 5 = 22\n17 - 5 = 12\n17 * 5 = 85\n17 / 5 = 3\n17 % 5 = 2',
      },
      {
        titleKo: '형변환',
        titleEn: 'Type Casting',
        code: '#include <stdio.h>\n\nint main() {\n    int a = 7, b = 2;\n    printf("Int division: %d / %d = %d\\n", a, b, a / b);\n    printf("Float division: %.1f\\n", (double)a / b);\n    double x = 9.7;\n    int y = (int)x;\n    printf("double %.1f -> int %d\\n", x, y);\n    return 0;\n}',
        expected: 'Int division: 7 / 2 = 3\nFloat division: 3.5\ndouble 9.7 -> int 9',
      },
      {
        titleKo: '상수와 define',
        titleEn: 'Constants & Define',
        code: '#include <stdio.h>\n\n#define MAX_SIZE 100\n\nint main() {\n    const double PI = 3.14159;\n    const int DAYS = 7;\n    printf("PI = %.5f\\n", PI);\n    printf("Days: %d\\n", DAYS);\n    printf("MAX_SIZE: %d\\n", MAX_SIZE);\n    double area = PI * 5.0 * 5.0;\n    printf("Circle area: %.2f\\n", area);\n    return 0;\n}',
        expected: 'PI = 3.14159\nDays: 7\nMAX_SIZE: 100\nCircle area: 78.54',
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
      {
        titleKo: 'switch문',
        titleEn: 'Switch Statement',
        code: '#include <stdio.h>\n\nint main() {\n    int day = 3;\n    switch (day) {\n        case 1: printf("Monday\\n"); break;\n        case 2: printf("Tuesday\\n"); break;\n        case 3: printf("Wednesday\\n"); break;\n        case 4: printf("Thursday\\n"); break;\n        case 5: printf("Friday\\n"); break;\n        default: printf("Weekend\\n"); break;\n    }\n    return 0;\n}',
        expected: 'Wednesday',
      },
      {
        titleKo: '중첩 조건문',
        titleEn: 'Nested Conditionals',
        code: '#include <stdio.h>\n\nint main() {\n    int age = 25;\n    int hasLicense = 1;\n    if (age >= 18) {\n        if (hasLicense) {\n            printf("Can drive\\n");\n        } else {\n            printf("Need a license\\n");\n        }\n    } else {\n        printf("Too young to drive\\n");\n    }\n    return 0;\n}',
        expected: 'Can drive',
      },
      {
        titleKo: '삼항 연산자',
        titleEn: 'Ternary Operator',
        code: '#include <stdio.h>\n\nint main() {\n    int a = 15, b = 23;\n    int max = (a > b) ? a : b;\n    int min = (a < b) ? a : b;\n    printf("a=%d, b=%d\\n", a, b);\n    printf("Max: %d\\n", max);\n    printf("Min: %d\\n", min);\n    for (int i = 1; i <= 5; i++) {\n        printf("%d is %s\\n", i, (i % 2 == 0) ? "even" : "odd");\n    }\n    return 0;\n}',
        expected: 'a=15, b=23\nMax: 23\nMin: 15\n1 is odd\n2 is even\n3 is odd\n4 is even\n5 is odd',
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
        expected: '5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45',
      },
      {
        titleKo: 'while 반복문',
        titleEn: 'While Loop',
        code: '#include <stdio.h>\n\nint main() {\n    int num = 1;\n    while (num <= 100) {\n        num *= 2;\n    }\n    printf("First power of 2 > 100: %d\\n", num);\n\n    int n = 12345;\n    int digits = 0;\n    int temp = n;\n    while (temp > 0) {\n        digits++;\n        temp /= 10;\n    }\n    printf("%d has %d digits\\n", n, digits);\n    return 0;\n}',
        expected: 'First power of 2 > 100: 128\n12345 has 5 digits',
      },
      {
        titleKo: '별 패턴',
        titleEn: 'Star Pattern',
        code: '#include <stdio.h>\n\nint main() {\n    int rows = 5;\n    for (int i = 1; i <= rows; i++) {\n        for (int j = 0; j < i; j++) {\n            printf("*");\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
        expected: '*\n**\n***\n****\n*****',
      },
      {
        titleKo: 'break와 continue',
        titleEn: 'Break & Continue',
        code: '#include <stdio.h>\n\nint main() {\n    printf("Skip even numbers:\\n");\n    for (int i = 1; i <= 10; i++) {\n        if (i % 2 == 0) continue;\n        printf("%d ", i);\n    }\n    printf("\\n\\nFind first multiple of 7:\\n");\n    for (int i = 1; i <= 100; i++) {\n        if (i % 7 == 0) {\n            printf("Found: %d\\n", i);\n            break;\n        }\n    }\n    return 0;\n}',
        expected: 'Skip even numbers:\n1 3 5 7 9 \n\nFind first multiple of 7:\nFound: 7',
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
        code: '#include <stdio.h>\n\nint max(int a, int b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    printf("max(10, 25) = %d\\n", max(10, 25));\n    printf("max(99, 7) = %d\\n", max(99, 7));\n    printf("max(-3, -8) = %d\\n", max(-3, -8));\n    return 0;\n}',
        expected: 'max(10, 25) = 25\nmax(99, 7) = 99\nmax(-3, -8) = -3',
      },
      {
        titleKo: '팩토리얼 함수',
        titleEn: 'Factorial Function',
        code: '#include <stdio.h>\n\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nint main() {\n    for (int i = 0; i <= 7; i++) {\n        printf("%d! = %d\\n", i, factorial(i));\n    }\n    return 0;\n}',
        expected: '0! = 1\n1! = 1\n2! = 2\n3! = 6\n4! = 24\n5! = 120\n6! = 720\n7! = 5040',
      },
      {
        titleKo: '피보나치 수열',
        titleEn: 'Fibonacci Sequence',
        code: '#include <stdio.h>\n\nint fibonacci(int n) {\n    if (n <= 0) return 0;\n    if (n == 1) return 1;\n    int a = 0, b = 1;\n    for (int i = 2; i <= n; i++) {\n        int temp = a + b;\n        a = b;\n        b = temp;\n    }\n    return b;\n}\n\nint main() {\n    printf("Fibonacci sequence:\\n");\n    for (int i = 0; i <= 10; i++) {\n        printf("F(%d) = %d\\n", i, fibonacci(i));\n    }\n    return 0;\n}',
        expected: 'Fibonacci sequence:\nF(0) = 0\nF(1) = 1\nF(2) = 1\nF(3) = 2\nF(4) = 3\nF(5) = 5\nF(6) = 8\nF(7) = 13\nF(8) = 21\nF(9) = 34\nF(10) = 55',
      },
      {
        titleKo: '배열 합계 함수',
        titleEn: 'Array Sum Function',
        code: '#include <stdio.h>\n\nint arraySum(int arr[], int size) {\n    int sum = 0;\n    for (int i = 0; i < size; i++) {\n        sum += arr[i];\n    }\n    return sum;\n}\n\ndouble arrayAvg(int arr[], int size) {\n    return (double)arraySum(arr, size) / size;\n}\n\nint main() {\n    int scores[] = {90, 85, 78, 92, 88};\n    int n = 5;\n    printf("Sum: %d\\n", arraySum(scores, n));\n    printf("Average: %.1f\\n", arrayAvg(scores, n));\n    return 0;\n}',
        expected: 'Sum: 433\nAverage: 86.6',
      },
      {
        titleKo: '거듭제곱 함수',
        titleEn: 'Power Function',
        code: '#include <stdio.h>\n\nint power(int base, int exp) {\n    int result = 1;\n    for (int i = 0; i < exp; i++) {\n        result *= base;\n    }\n    return result;\n}\n\nint main() {\n    printf("2^0 = %d\\n", power(2, 0));\n    printf("2^8 = %d\\n", power(2, 8));\n    printf("3^4 = %d\\n", power(3, 4));\n    printf("5^3 = %d\\n", power(5, 3));\n    return 0;\n}',
        expected: '2^0 = 1\n2^8 = 256\n3^4 = 81\n5^3 = 125',
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
        code: '#include <stdio.h>\n\nint main() {\n    int scores[] = {90, 85, 78, 92, 88};\n    int n = 5;\n    int sum = 0;\n    for (int i = 0; i < n; i++) {\n        sum += scores[i];\n    }\n    printf("Scores: ");\n    for (int i = 0; i < n; i++) {\n        printf("%d ", scores[i]);\n    }\n    printf("\\nSum: %d\\n", sum);\n    printf("Average: %.1f\\n", (float)sum / n);\n    return 0;\n}',
        expected: 'Scores: 90 85 78 92 88 \nSum: 433\nAverage: 86.6',
      },
      {
        titleKo: '배열 최대/최소',
        titleEn: 'Array Min/Max',
        code: '#include <stdio.h>\n\nint main() {\n    int arr[] = {3, 7, 1, 9, 4, 6};\n    int n = 6;\n    int max = arr[0], min = arr[0];\n    for (int i = 1; i < n; i++) {\n        if (arr[i] > max) max = arr[i];\n        if (arr[i] < min) min = arr[i];\n    }\n    printf("Max: %d, Min: %d\\n", max, min);\n    return 0;\n}',
        expected: 'Max: 9, Min: 1',
      },
      {
        titleKo: '버블 정렬',
        titleEn: 'Bubble Sort',
        code: '#include <stdio.h>\n\nint main() {\n    int arr[] = {64, 25, 12, 22, 11};\n    int n = 5;\n    printf("Before: ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n\n    for (int i = 0; i < n - 1; i++) {\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n\n    printf("After:  ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}',
        expected: 'Before: 64 25 12 22 11 \nAfter:  11 12 22 25 64 ',
      },
      {
        titleKo: '2차원 배열',
        titleEn: '2D Array',
        code: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    printf("Matrix:\\n");\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            printf("%d ", matrix[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
        expected: 'Matrix:\n1 2 3 \n4 5 6 \n7 8 9 ',
      },
      {
        titleKo: '배열 뒤집기',
        titleEn: 'Reverse Array',
        code: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = 5;\n    printf("Original: ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n\n    for (int i = 0; i < n / 2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[n - 1 - i];\n        arr[n - 1 - i] = temp;\n    }\n\n    printf("Reversed: ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}',
        expected: 'Original: 1 2 3 4 5 \nReversed: 5 4 3 2 1 ',
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
        code: '#include <stdio.h>\n\nint main() {\n    int x = 42;\n    int *ptr = &x;\n    printf("Value of x: %d\\n", x);\n    printf("Value via pointer: %d\\n", *ptr);\n    *ptr = 100;\n    printf("After *ptr = 100: x = %d\\n", x);\n    return 0;\n}',
        expected: 'Value of x: 42\nValue via pointer: 42\nAfter *ptr = 100: x = 100',
      },
      {
        titleKo: 'swap 함수',
        titleEn: 'Swap Function',
        code: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main() {\n    int x = 10, y = 20;\n    printf("Before: x=%d, y=%d\\n", x, y);\n    swap(&x, &y);\n    printf("After: x=%d, y=%d\\n", x, y);\n    return 0;\n}',
        expected: 'Before: x=10, y=20\nAfter: x=20, y=10',
      },
      {
        titleKo: '배열과 포인터',
        titleEn: 'Array & Pointer',
        code: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *ptr = arr;\n    printf("Array via pointer:\\n");\n    for (int i = 0; i < 5; i++) {\n        printf("*(ptr+%d) = %d\\n", i, *(ptr + i));\n    }\n    printf("\\narr[2] = %d\\n", arr[2]);\n    printf("*(arr+2) = %d\\n", *(arr + 2));\n    return 0;\n}',
        expected: 'Array via pointer:\n*(ptr+0) = 10\n*(ptr+1) = 20\n*(ptr+2) = 30\n*(ptr+3) = 40\n*(ptr+4) = 50\n\narr[2] = 30\n*(arr+2) = 30',
      },
      {
        titleKo: '포인터로 최대/최소 반환',
        titleEn: 'Return Min/Max via Pointer',
        code: '#include <stdio.h>\n\nvoid findMinMax(int arr[], int n, int *min, int *max) {\n    *min = arr[0];\n    *max = arr[0];\n    for (int i = 1; i < n; i++) {\n        if (arr[i] < *min) *min = arr[i];\n        if (arr[i] > *max) *max = arr[i];\n    }\n}\n\nint main() {\n    int arr[] = {34, 12, 67, 5, 89, 23};\n    int min, max;\n    findMinMax(arr, 6, &min, &max);\n    printf("Min: %d\\n", min);\n    printf("Max: %d\\n", max);\n    return 0;\n}',
        expected: 'Min: 5\nMax: 89',
      },
      {
        titleKo: 'const 포인터',
        titleEn: 'Const Pointer',
        code: '#include <stdio.h>\n\nvoid printArray(const int *arr, int n) {\n    for (int i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n}\n\nint main() {\n    int x = 10, y = 20;\n    const int *p1 = &x;\n    printf("*p1 = %d\\n", *p1);\n    p1 = &y;\n    printf("*p1 = %d (changed target)\\n", *p1);\n\n    int arr[] = {1, 2, 3, 4, 5};\n    printf("Array: ");\n    printArray(arr, 5);\n    return 0;\n}',
        expected: '*p1 = 10\n*p1 = 20 (changed target)\nArray: 1 2 3 4 5 ',
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
        code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char src[] = "Hello, C!";\n    char dest[20];\n    strcpy(dest, src);\n    printf("String: %s\\n", dest);\n    printf("Length: %d\\n", (int)strlen(dest));\n    return 0;\n}',
        expected: 'String: Hello, C!\nLength: 9',
      },
      {
        titleKo: '문자열 비교와 결합',
        titleEn: 'String Compare & Concat',
        code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str1[30] = "Hello";\n    char str2[] = " World";\n    strcat(str1, str2);\n    printf("%s\\n", str1);\n    printf("Compare: %d\\n", strcmp("abc", "abc"));\n    return 0;\n}',
        expected: 'Hello World\nCompare: 0',
      },
      {
        titleKo: '문자 처리 함수',
        titleEn: 'Character Functions',
        code: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello 123";\n    int upper = 0, lower = 0, digit = 0;\n    for (int i = 0; str[i]; i++) {\n        if (isupper(str[i])) upper++;\n        else if (islower(str[i])) lower++;\n        else if (isdigit(str[i])) digit++;\n    }\n    printf("String: %s\\n", str);\n    printf("Upper: %d, Lower: %d, Digit: %d\\n", upper, lower, digit);\n    return 0;\n}',
        expected: 'String: Hello 123\nUpper: 1, Lower: 4, Digit: 3',
      },
      {
        titleKo: '문자열 뒤집기',
        titleEn: 'String Reversal',
        code: '#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char *str) {\n    int left = 0;\n    int right = (int)strlen(str) - 1;\n    while (left < right) {\n        char temp = str[left];\n        str[left] = str[right];\n        str[right] = temp;\n        left++;\n        right--;\n    }\n}\n\nint main() {\n    char str[] = "Hello";\n    printf("Original: %s\\n", str);\n    reverseString(str);\n    printf("Reversed: %s\\n", str);\n    return 0;\n}',
        expected: 'Original: Hello\nReversed: olleH',
      },
      {
        titleKo: '단어 세기',
        titleEn: 'Word Counter',
        code: '#include <stdio.h>\n\nint countWords(const char *str) {\n    int count = 0;\n    int inWord = 0;\n    for (int i = 0; str[i]; i++) {\n        if (str[i] != \' \' && !inWord) {\n            inWord = 1;\n            count++;\n        } else if (str[i] == \' \') {\n            inWord = 0;\n        }\n    }\n    return count;\n}\n\nint main() {\n    char s1[] = "Hello World";\n    char s2[] = "The quick brown fox";\n    printf("\\"%s\\": %d words\\n", s1, countWords(s1));\n    printf("\\"%s\\": %d words\\n", s2, countWords(s2));\n    return 0;\n}',
        expected: '"Hello World": 2 words\n"The quick brown fox": 4 words',
      },
    ],
  },
  {
    step: 9,
    titleKo: '종합 실습',
    titleEn: 'Comprehensive Practice',
    descKo: '지금까지 배운 내용을 종합하여 실전 프로그램을 작성합니다.',
    descEn: 'Combine everything learned to write practical programs.',
    examples: [
      {
        titleKo: '간단한 계산기',
        titleEn: 'Simple Calculator',
        code: '#include <stdio.h>\n\ndouble calculate(double a, double b, char op) {\n    switch (op) {\n        case \'+\': return a + b;\n        case \'-\': return a - b;\n        case \'*\': return a * b;\n        case \'/\': return (b != 0) ? a / b : 0;\n        default: return 0;\n    }\n}\n\nint main() {\n    double a = 10.0, b = 3.0;\n    char ops[] = {\'+ \', \'-\', \'*\', \'/\'};\n    for (int i = 0; i < 4; i++) {\n        printf("%.1f %c %.1f = %.2f\\n", a, ops[i], b, calculate(a, b, ops[i]));\n    }\n    return 0;\n}',
        expected: '10.0 + 3.0 = 13.00\n10.0 - 3.0 = 7.00\n10.0 * 3.0 = 30.00\n10.0 / 3.0 = 3.33',
      },
      {
        titleKo: '성적 관리 (배열)',
        titleEn: 'Grade Manager (Arrays)',
        code: '#include <stdio.h>\n\nint main() {\n    int scores[] = {92, 85, 78, 96, 88, 73, 91};\n    int n = 7;\n    int sum = 0, max = scores[0], min = scores[0];\n\n    for (int i = 0; i < n; i++) {\n        sum += scores[i];\n        if (scores[i] > max) max = scores[i];\n        if (scores[i] < min) min = scores[i];\n    }\n\n    printf("Students: %d\\n", n);\n    printf("Average: %.1f\\n", (double)sum / n);\n    printf("Highest: %d\\n", max);\n    printf("Lowest: %d\\n", min);\n\n    int grades[4] = {0};\n    for (int i = 0; i < n; i++) {\n        if (scores[i] >= 90) grades[0]++;\n        else if (scores[i] >= 80) grades[1]++;\n        else if (scores[i] >= 70) grades[2]++;\n        else grades[3]++;\n    }\n    printf("A: %d, B: %d, C: %d, F: %d\\n", grades[0], grades[1], grades[2], grades[3]);\n    return 0;\n}',
        expected: 'Students: 7\nAverage: 86.1\nHighest: 96\nLowest: 73\nA: 3, B: 2, C: 2, F: 0',
      },
      {
        titleKo: '배열 통계',
        titleEn: 'Array Statistics',
        code: '#include <stdio.h>\n\nint main() {\n    int data[] = {23, 45, 12, 67, 34, 89, 56, 78, 90, 11};\n    int n = 10;\n    int sum = 0;\n\n    for (int i = 0; i < n; i++) sum += data[i];\n    double avg = (double)sum / n;\n\n    double variance = 0;\n    for (int i = 0; i < n; i++) {\n        double diff = data[i] - avg;\n        variance += diff * diff;\n    }\n    variance /= n;\n\n    printf("Count: %d\\n", n);\n    printf("Sum: %d\\n", sum);\n    printf("Average: %.1f\\n", avg);\n    printf("Variance: %.1f\\n", variance);\n    return 0;\n}',
        expected: 'Count: 10\nSum: 505\nAverage: 50.5\nVariance: 697.2',
      },
      {
        titleKo: '문자열 암호화 (시저 암호)',
        titleEn: 'Caesar Cipher',
        code: '#include <stdio.h>\n#include <string.h>\n\nvoid encrypt(char *str, int shift) {\n    for (int i = 0; str[i]; i++) {\n        if (str[i] >= \'A\' && str[i] <= \'Z\') {\n            str[i] = (str[i] - \'A\' + shift) % 26 + \'A\';\n        } else if (str[i] >= \'a\' && str[i] <= \'z\') {\n            str[i] = (str[i] - \'a\' + shift) % 26 + \'a\';\n        }\n    }\n}\n\nint main() {\n    char msg[] = "Hello World";\n    printf("Original:  %s\\n", msg);\n    encrypt(msg, 3);\n    printf("Encrypted: %s\\n", msg);\n    encrypt(msg, 23);\n    printf("Decrypted: %s\\n", msg);\n    return 0;\n}',
        expected: 'Original:  Hello World\nEncrypted: Khoor Zruog\nDecrypted: Hello World',
      },
      {
        titleKo: '소수 구하기',
        titleEn: 'Find Primes',
        code: '#include <stdio.h>\n\nint isPrime(int n) {\n    if (n < 2) return 0;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return 0;\n    }\n    return 1;\n}\n\nint main() {\n    printf("Primes up to 30:\\n");\n    int count = 0;\n    for (int i = 2; i <= 30; i++) {\n        if (isPrime(i)) {\n            printf("%d ", i);\n            count++;\n        }\n    }\n    printf("\\nTotal: %d primes\\n", count);\n    return 0;\n}',
        expected: 'Primes up to 30:\n2 3 5 7 11 13 17 19 23 29 \nTotal: 10 primes',
      },
    ],
  },
  {
    step: 10,
    titleKo: '고급 실습',
    titleEn: 'Advanced Practice',
    descKo: '정렬, 검색, 재귀 등 알고리즘 중심의 고급 연습입니다.',
    descEn: 'Advanced practice focusing on sorting, searching, and recursion.',
    examples: [
      {
        titleKo: '선택 정렬',
        titleEn: 'Selection Sort',
        code: '#include <stdio.h>\n\nvoid selectionSort(int arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        int minIdx = i;\n        for (int j = i + 1; j < n; j++) {\n            if (arr[j] < arr[minIdx]) minIdx = j;\n        }\n        int temp = arr[i];\n        arr[i] = arr[minIdx];\n        arr[minIdx] = temp;\n    }\n}\n\nint main() {\n    int arr[] = {64, 25, 12, 22, 11};\n    int n = 5;\n    printf("Before: ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    selectionSort(arr, n);\n    printf("After:  ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}',
        expected: 'Before: 64 25 12 22 11 \nAfter:  11 12 22 25 64 ',
      },
      {
        titleKo: '이진 탐색',
        titleEn: 'Binary Search',
        code: '#include <stdio.h>\n\nint binarySearch(int arr[], int n, int target) {\n    int left = 0, right = n - 1;\n    while (left <= right) {\n        int mid = (left + right) / 2;\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}\n\nint main() {\n    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};\n    int n = 10;\n    int targets[] = {23, 72, 15};\n    for (int i = 0; i < 3; i++) {\n        int idx = binarySearch(arr, n, targets[i]);\n        if (idx >= 0)\n            printf("Found %d at index %d\\n", targets[i], idx);\n        else\n            printf("%d not found\\n", targets[i]);\n    }\n    return 0;\n}',
        expected: 'Found 23 at index 5\nFound 72 at index 8\n15 not found',
      },
      {
        titleKo: '행렬 곱셈',
        titleEn: 'Matrix Multiplication',
        code: '#include <stdio.h>\n\nint main() {\n    int A[2][2] = {{1, 2}, {3, 4}};\n    int B[2][2] = {{5, 6}, {7, 8}};\n    int C[2][2] = {{0}};\n\n    for (int i = 0; i < 2; i++)\n        for (int j = 0; j < 2; j++)\n            for (int k = 0; k < 2; k++)\n                C[i][j] += A[i][k] * B[k][j];\n\n    printf("Result:\\n");\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 2; j++) {\n            printf("%3d ", C[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
        expected: 'Result:\n 19  22 \n 43  50 ',
      },
      {
        titleKo: '재귀 패턴 출력',
        titleEn: 'Recursive Pattern',
        code: '#include <stdio.h>\n\nvoid printStars(int n) {\n    if (n <= 0) return;\n    printStars(n - 1);\n    for (int i = 0; i < n; i++) printf("*");\n    printf("\\n");\n}\n\nint sumRecursive(int n) {\n    if (n <= 0) return 0;\n    return n + sumRecursive(n - 1);\n}\n\nint main() {\n    printStars(5);\n    printf("\\n");\n    printf("Sum(1..10) = %d\\n", sumRecursive(10));\n    printf("Sum(1..100) = %d\\n", sumRecursive(100));\n    return 0;\n}',
        expected: '*\n**\n***\n****\n*****\n\nSum(1..10) = 55\nSum(1..100) = 5050',
      },
      {
        titleKo: '종합: 성적 분석',
        titleEn: 'Grade Analysis',
        code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    int scores[] = {95, 82, 67, 91, 78, 55, 88, 73, 99, 61};\n    char grades[] = "          ";\n    int n = 10;\n    int counts[5] = {0};\n\n    for (int i = 0; i < n; i++) {\n        if (scores[i] >= 90) { grades[i] = \'A\'; counts[0]++; }\n        else if (scores[i] >= 80) { grades[i] = \'B\'; counts[1]++; }\n        else if (scores[i] >= 70) { grades[i] = \'C\'; counts[2]++; }\n        else if (scores[i] >= 60) { grades[i] = \'D\'; counts[3]++; }\n        else { grades[i] = \'F\'; counts[4]++; }\n    }\n\n    int sum = 0;\n    for (int i = 0; i < n; i++) sum += scores[i];\n\n    printf("=== Grade Report ===\\n");\n    for (int i = 0; i < n; i++) {\n        printf("Student %2d: %d (%c)\\n", i + 1, scores[i], grades[i]);\n    }\n    printf("\\nAverage: %.1f\\n", (double)sum / n);\n    printf("A:%d B:%d C:%d D:%d F:%d\\n", counts[0], counts[1], counts[2], counts[3], counts[4]);\n    return 0;\n}',
        expected: '=== Grade Report ===\nStudent  1: 95 (A)\nStudent  2: 82 (B)\nStudent  3: 67 (D)\nStudent  4: 91 (A)\nStudent  5: 78 (C)\nStudent  6: 55 (F)\nStudent  7: 88 (B)\nStudent  8: 73 (C)\nStudent  9: 99 (A)\nStudent 10: 61 (D)\n\nAverage: 78.9\nA:3 B:2 C:2 D:2 F:1',
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
