const steps1to5 = [
  {
    step: 1,
    titleKo: '기초 출력',
    titleEn: 'Basic Output',
    descKo: 'printf를 사용하여 다양한 출력을 연습합니다.',
    descEn: 'Practice various outputs using printf.',
    examples: [
      // === Existing 5 examples ===
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
      // === New 5 examples ===
      {
        titleKo: '아스키 아트',
        titleEn: 'ASCII Art',
        code: '#include <stdio.h>\n\nint main() {\n    printf("  /\\\\\\n");\n    printf(" /  \\\\\\n");\n    printf("/____\\\\\\n");\n    printf("|    |\\n");\n    printf("|____|\\n");\n    return 0;\n}',
        expected: '  /\\\n /  \\\n/____\\\n|    |\n|____|',
      },
      {
        titleKo: '명함 출력',
        titleEn: 'Name Card',
        code: '#include <stdio.h>\n\nint main() {\n    printf("+------------------+\\n");\n    printf("|  Kim Cheolsu     |\\n");\n    printf("|  Developer       |\\n");\n    printf("|  TEL: 010-1234   |\\n");\n    printf("+------------------+\\n");\n    return 0;\n}',
        expected: '+------------------+\n|  Kim Cheolsu     |\n|  Developer       |\n|  TEL: 010-1234   |\n+------------------+',
      },
      {
        titleKo: '숫자 패턴',
        titleEn: 'Number Pattern',
        code: '#include <stdio.h>\n\nint main() {\n    printf("1\\n");\n    printf("12\\n");\n    printf("123\\n");\n    printf("1234\\n");\n    printf("12345\\n");\n    return 0;\n}',
        expected: '1\n12\n123\n1234\n12345',
      },
      {
        titleKo: 'printf 플래그',
        titleEn: 'Printf Flags',
        code: '#include <stdio.h>\n\nint main() {\n    printf("Right align: [%8d]\\n", 123);\n    printf("Left align:  [%-8d]\\n", 123);\n    printf("Zero pad:    [%08d]\\n", 123);\n    printf("Plus sign:   [%+d]\\n", 123);\n    printf("Plus sign:   [%+d]\\n", -123);\n    printf("Space flag:  [% d]\\n", 123);\n    printf("Hex: 0x%x\\n", 255);\n    printf("Octal: 0%o\\n", 255);\n    return 0;\n}',
        expected: 'Right align: [     123]\nLeft align:  [123     ]\nZero pad:    [00000123]\nPlus sign:   [+123]\nPlus sign:   [-123]\nSpace flag:  [ 123]\nHex: 0xff\nOctal: 0377',
      },
      {
        titleKo: '문자 코드표',
        titleEn: 'Character Code Table',
        code: '#include <stdio.h>\n\nint main() {\n    printf("=== ASCII Table ===\\n");\n    printf("Char | Code\\n");\n    printf("-----------\\n");\n    char c;\n    for (c = \'A\'; c <= \'E\'; c++) {\n        printf("  %c  |  %d\\n", c, c);\n    }\n    printf("-----------\\n");\n    for (c = \'a\'; c <= \'e\'; c++) {\n        printf("  %c  |  %d\\n", c, c);\n    }\n    return 0;\n}',
        expected: '=== ASCII Table ===\nChar | Code\n-----------\n  A  |  65\n  B  |  66\n  C  |  67\n  D  |  68\n  E  |  69\n-----------\n  a  |  97\n  b  |  98\n  c  |  99\n  d  |  100\n  e  |  101',
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
      // === Existing 5 examples ===
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
      // === New 5 examples ===
      {
        titleKo: 'sizeof 연산자',
        titleEn: 'sizeof Operator',
        code: '#include <stdio.h>\n\nint main() {\n    printf("Size of char:   %d byte\\n", (int)sizeof(char));\n    printf("Size of int:    %d bytes\\n", (int)sizeof(int));\n    printf("Size of float:  %d bytes\\n", (int)sizeof(float));\n    printf("Size of double: %d bytes\\n", (int)sizeof(double));\n    int arr[10];\n    printf("Size of int[10]: %d bytes\\n", (int)sizeof(arr));\n    printf("Array elements:  %d\\n", (int)(sizeof(arr) / sizeof(arr[0])));\n    return 0;\n}',
        expected: 'Size of char:   1 byte\nSize of int:    4 bytes\nSize of float:  4 bytes\nSize of double: 8 bytes\nSize of int[10]: 40 bytes\nArray elements:  10',
      },
      {
        titleKo: '온도 변환',
        titleEn: 'Temperature Converter',
        code: '#include <stdio.h>\n\nint main() {\n    double celsius = 100.0;\n    double fahrenheit = celsius * 9.0 / 5.0 + 32.0;\n    printf("%.1f C = %.1f F\\n", celsius, fahrenheit);\n\n    celsius = 0.0;\n    fahrenheit = celsius * 9.0 / 5.0 + 32.0;\n    printf("%.1f C = %.1f F\\n", celsius, fahrenheit);\n\n    celsius = 37.0;\n    fahrenheit = celsius * 9.0 / 5.0 + 32.0;\n    printf("%.1f C = %.1f F\\n", celsius, fahrenheit);\n    return 0;\n}',
        expected: '100.0 C = 212.0 F\n0.0 C = 32.0 F\n37.0 C = 98.6 F',
      },
      {
        titleKo: 'BMI 계산기',
        titleEn: 'BMI Calculator',
        code: '#include <stdio.h>\n\nint main() {\n    double weight = 70.0;\n    double height = 1.75;\n    double bmi = weight / (height * height);\n    printf("Weight: %.1f kg\\n", weight);\n    printf("Height: %.2f m\\n", height);\n    printf("BMI: %.1f\\n", bmi);\n    if (bmi < 18.5)\n        printf("Category: Underweight\\n");\n    else if (bmi < 25.0)\n        printf("Category: Normal\\n");\n    else if (bmi < 30.0)\n        printf("Category: Overweight\\n");\n    else\n        printf("Category: Obese\\n");\n    return 0;\n}',
        expected: 'Weight: 70.0 kg\nHeight: 1.75 m\nBMI: 22.9\nCategory: Normal',
      },
      {
        titleKo: '변수 교환',
        titleEn: 'Swap Variables',
        code: '#include <stdio.h>\n\nint main() {\n    int a = 30, b = 50;\n    printf("Before: a=%d, b=%d\\n", a, b);\n\n    // Swap using arithmetic (no temp variable)\n    a = a + b;  // a=80\n    b = a - b;  // b=30\n    a = a - b;  // a=50\n    printf("After:  a=%d, b=%d\\n", a, b);\n\n    // Swap using XOR\n    int x = 10, y = 20;\n    printf("\\nBefore: x=%d, y=%d\\n", x, y);\n    x = x ^ y;\n    y = x ^ y;\n    x = x ^ y;\n    printf("After:  x=%d, y=%d\\n", x, y);\n    return 0;\n}',
        expected: 'Before: a=30, b=50\nAfter:  a=50, b=30\n\nBefore: x=10, y=20\nAfter:  x=20, y=10',
      },
      {
        titleKo: '원 계산',
        titleEn: 'Circle Calculator',
        code: '#include <stdio.h>\n\n#define PI 3.14159265\n\nint main() {\n    double radius = 5.0;\n    double circumference = 2.0 * PI * radius;\n    double area = PI * radius * radius;\n    printf("Radius: %.1f\\n", radius);\n    printf("Circumference: %.2f\\n", circumference);\n    printf("Area: %.2f\\n", area);\n\n    radius = 10.0;\n    circumference = 2.0 * PI * radius;\n    area = PI * radius * radius;\n    printf("\\nRadius: %.1f\\n", radius);\n    printf("Circumference: %.2f\\n", circumference);\n    printf("Area: %.2f\\n", area);\n    return 0;\n}',
        expected: 'Radius: 5.0\nCircumference: 31.42\nArea: 78.54\n\nRadius: 10.0\nCircumference: 62.83\nArea: 314.16',
      },
    ],
  },
  {
    step: 3,
    titleKo: '조건문',
    titleEn: 'Conditionals',
    descKo: 'if, else, switch를 사용하여 조건에 따른 처리를 합니다.',
    descEn: 'Use if, else, switch for conditional processing.',
    examples: [
      // === Existing 5 examples ===
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
      // === New 5 examples ===
      {
        titleKo: '윤년 판별',
        titleEn: 'Leap Year',
        code: '#include <stdio.h>\n\nint main() {\n    int years[] = {2000, 1900, 2024, 2023, 2100};\n    int n = 5;\n    for (int i = 0; i < n; i++) {\n        int y = years[i];\n        int leap = 0;\n        if (y % 4 == 0) {\n            if (y % 100 == 0) {\n                if (y % 400 == 0)\n                    leap = 1;\n                else\n                    leap = 0;\n            } else {\n                leap = 1;\n            }\n        }\n        if (leap)\n            printf("%d: Leap year\\n", y);\n        else\n            printf("%d: Not a leap year\\n", y);\n    }\n    return 0;\n}',
        expected: '2000: Leap year\n1900: Not a leap year\n2024: Leap year\n2023: Not a leap year\n2100: Not a leap year',
      },
      {
        titleKo: '삼각형 판별',
        titleEn: 'Triangle Type',
        code: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 5, c = 5;\n    printf("Sides: %d, %d, %d\\n", a, b, c);\n    if (a == b && b == c)\n        printf("Equilateral triangle\\n");\n    else if (a == b || b == c || a == c)\n        printf("Isosceles triangle\\n");\n    else\n        printf("Scalene triangle\\n");\n\n    a = 3; b = 4; c = 5;\n    printf("\\nSides: %d, %d, %d\\n", a, b, c);\n    if (a == b && b == c)\n        printf("Equilateral triangle\\n");\n    else if (a == b || b == c || a == c)\n        printf("Isosceles triangle\\n");\n    else\n        printf("Scalene triangle\\n");\n\n    // Check right angle\n    if (a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a)\n        printf("Also a right triangle!\\n");\n    return 0;\n}',
        expected: 'Sides: 5, 5, 5\nEquilateral triangle\n\nSides: 3, 4, 5\nScalene triangle\nAlso a right triangle!',
      },
      {
        titleKo: '세 수 중 최대값',
        titleEn: 'Max of Three',
        code: '#include <stdio.h>\n\nint main() {\n    int a = 15, b = 42, c = 28;\n    printf("a=%d, b=%d, c=%d\\n", a, b, c);\n\n    int max = a;\n    if (b > max) max = b;\n    if (c > max) max = c;\n    printf("Max: %d\\n", max);\n\n    int min = a;\n    if (b < min) min = b;\n    if (c < min) min = c;\n    printf("Min: %d\\n", min);\n    printf("Mid: %d\\n", a + b + c - max - min);\n    return 0;\n}',
        expected: 'a=15, b=42, c=28\nMax: 42\nMin: 15\nMid: 28',
      },
      {
        titleKo: '월별 일수',
        titleEn: 'Month Days',
        code: '#include <stdio.h>\n\nint main() {\n    int months[] = {1, 2, 4, 7, 11};\n    int n = 5;\n    for (int i = 0; i < n; i++) {\n        int month = months[i];\n        int days;\n        switch (month) {\n            case 2: days = 28; break;\n            case 4: case 6: case 9: case 11:\n                days = 30; break;\n            default:\n                days = 31; break;\n        }\n        printf("Month %2d: %d days\\n", month, days);\n    }\n    return 0;\n}',
        expected: 'Month  1: 31 days\nMonth  2: 28 days\nMonth  4: 30 days\nMonth  7: 31 days\nMonth 11: 30 days',
      },
      {
        titleKo: '간단 메뉴',
        titleEn: 'Simple Menu',
        code: '#include <stdio.h>\n\nint main() {\n    printf("=== Restaurant Menu ===\\n");\n    printf("1. Burger   - $5\\n");\n    printf("2. Pizza    - $8\\n");\n    printf("3. Salad    - $4\\n");\n    printf("4. Pasta    - $7\\n");\n    printf("=======================\\n\\n");\n\n    int choice = 2;\n    int qty = 3;\n    int price;\n\n    switch (choice) {\n        case 1: price = 5; printf("Ordered: Burger\\n"); break;\n        case 2: price = 8; printf("Ordered: Pizza\\n"); break;\n        case 3: price = 4; printf("Ordered: Salad\\n"); break;\n        case 4: price = 7; printf("Ordered: Pasta\\n"); break;\n        default: price = 0; printf("Invalid choice\\n"); break;\n    }\n    printf("Quantity: %d\\n", qty);\n    printf("Total: $%d\\n", price * qty);\n    return 0;\n}',
        expected: '=== Restaurant Menu ===\n1. Burger   - $5\n2. Pizza    - $8\n3. Salad    - $4\n4. Pasta    - $7\n=======================\n\nOrdered: Pizza\nQuantity: 3\nTotal: $24',
      },
    ],
  },
  {
    step: 4,
    titleKo: '반복문',
    titleEn: 'Loops',
    descKo: 'for, while 반복문을 사용하여 반복 처리를 합니다.',
    descEn: 'Use for and while loops for iteration.',
    examples: [
      // === Existing 5 examples ===
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
      // === New 5 examples ===
      {
        titleKo: '숫자 피라미드',
        titleEn: 'Number Pyramid',
        code: '#include <stdio.h>\n\nint main() {\n    int rows = 5;\n    for (int i = 1; i <= rows; i++) {\n        // Print leading spaces\n        for (int j = 0; j < rows - i; j++) {\n            printf(" ");\n        }\n        // Print numbers\n        for (int j = 1; j <= i; j++) {\n            printf("%d", j);\n        }\n        for (int j = i - 1; j >= 1; j--) {\n            printf("%d", j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
        expected: '    1\n   121\n  12321\n 1234321\n123454321',
      },
      {
        titleKo: '숫자 뒤집기',
        titleEn: 'Reverse Number',
        code: '#include <stdio.h>\n\nint main() {\n    int nums[] = {12345, 9070, 100};\n    int n = 3;\n    for (int i = 0; i < n; i++) {\n        int num = nums[i];\n        int reversed = 0;\n        int original = num;\n        while (num > 0) {\n            reversed = reversed * 10 + num % 10;\n            num /= 10;\n        }\n        printf("%d -> %d\\n", original, reversed);\n    }\n    return 0;\n}',
        expected: '12345 -> 54321\n9070 -> 709\n100 -> 1',
      },
      {
        titleKo: '최대공약수',
        titleEn: 'GCD Calculation',
        code: '#include <stdio.h>\n\nint main() {\n    int a = 48, b = 18;\n    int origA = a, origB = b;\n\n    // Euclidean algorithm\n    while (b != 0) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    printf("GCD(%d, %d) = %d\\n", origA, origB, a);\n\n    a = 56; b = 42;\n    origA = a; origB = b;\n    while (b != 0) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    printf("GCD(%d, %d) = %d\\n", origA, origB, a);\n\n    a = 17; b = 13;\n    origA = a; origB = b;\n    while (b != 0) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    printf("GCD(%d, %d) = %d\\n", origA, origB, a);\n    return 0;\n}',
        expected: 'GCD(48, 18) = 6\nGCD(56, 42) = 14\nGCD(17, 13) = 1',
      },
      {
        titleKo: '다이아몬드 패턴',
        titleEn: 'Diamond Pattern',
        code: '#include <stdio.h>\n\nint main() {\n    int n = 3; // half-size\n    // Upper half including middle\n    for (int i = 1; i <= n; i++) {\n        for (int j = 0; j < n - i; j++) printf(" ");\n        for (int j = 0; j < 2 * i - 1; j++) printf("*");\n        printf("\\n");\n    }\n    // Lower half\n    for (int i = n - 1; i >= 1; i--) {\n        for (int j = 0; j < n - i; j++) printf(" ");\n        for (int j = 0; j < 2 * i - 1; j++) printf("*");\n        printf("\\n");\n    }\n    return 0;\n}',
        expected: '  *\n ***\n*****\n ***\n  *',
      },
      {
        titleKo: '자릿수 합',
        titleEn: 'Sum of Digits',
        code: '#include <stdio.h>\n\nint main() {\n    int nums[] = {1234, 9999, 305, 7};\n    int n = 4;\n    for (int i = 0; i < n; i++) {\n        int num = nums[i];\n        int sum = 0;\n        int temp = num;\n        while (temp > 0) {\n            sum += temp % 10;\n            temp /= 10;\n        }\n        printf("Sum of digits of %d = %d\\n", num, sum);\n    }\n    return 0;\n}',
        expected: 'Sum of digits of 1234 = 10\nSum of digits of 9999 = 36\nSum of digits of 305 = 8\nSum of digits of 7 = 7',
      },
    ],
  },
  {
    step: 5,
    titleKo: '함수',
    titleEn: 'Functions',
    descKo: '함수를 정의하고 호출하여 코드를 구조화합니다.',
    descEn: 'Define and call functions to structure code.',
    examples: [
      // === Existing 5 examples ===
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
      // === New 5 examples ===
      {
        titleKo: '최대공약수/최소공배수',
        titleEn: 'GCD/LCM Function',
        code: '#include <stdio.h>\n\nint gcd(int a, int b) {\n    while (b != 0) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    return a;\n}\n\nint lcm(int a, int b) {\n    return a / gcd(a, b) * b;\n}\n\nint main() {\n    printf("GCD(12, 8) = %d\\n", gcd(12, 8));\n    printf("LCM(12, 8) = %d\\n", lcm(12, 8));\n    printf("GCD(15, 25) = %d\\n", gcd(15, 25));\n    printf("LCM(15, 25) = %d\\n", lcm(15, 25));\n    printf("GCD(7, 3) = %d\\n", gcd(7, 3));\n    printf("LCM(7, 3) = %d\\n", lcm(7, 3));\n    return 0;\n}',
        expected: 'GCD(12, 8) = 4\nLCM(12, 8) = 24\nGCD(15, 25) = 5\nLCM(15, 25) = 75\nGCD(7, 3) = 1\nLCM(7, 3) = 21',
      },
      {
        titleKo: '소수 판별 함수',
        titleEn: 'isPrime Function',
        code: '#include <stdio.h>\n\nint isPrime(int n) {\n    if (n < 2) return 0;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return 0;\n    }\n    return 1;\n}\n\nint main() {\n    printf("Prime numbers 1-30:\\n");\n    for (int i = 1; i <= 30; i++) {\n        if (isPrime(i)) {\n            printf("%d ", i);\n        }\n    }\n    printf("\\n\\nPrime check:\\n");\n    int tests[] = {1, 2, 17, 20, 97};\n    int n = 5;\n    for (int i = 0; i < n; i++) {\n        printf("%d is %s\\n", tests[i], isPrime(tests[i]) ? "prime" : "not prime");\n    }\n    return 0;\n}',
        expected: 'Prime numbers 1-30:\n2 3 5 7 11 13 17 19 23 29 \n\nPrime check:\n1 is not prime\n2 is prime\n17 is prime\n20 is not prime\n97 is prime',
      },
      {
        titleKo: '온도 변환 함수',
        titleEn: 'Temperature Functions',
        code: '#include <stdio.h>\n\ndouble celsiusToFahr(double c) {\n    return c * 9.0 / 5.0 + 32.0;\n}\n\ndouble fahrToCelsius(double f) {\n    return (f - 32.0) * 5.0 / 9.0;\n}\n\nint main() {\n    printf("Celsius -> Fahrenheit:\\n");\n    double temps[] = {0.0, 37.0, 100.0};\n    for (int i = 0; i < 3; i++) {\n        printf("  %.1f C = %.1f F\\n", temps[i], celsiusToFahr(temps[i]));\n    }\n    printf("\\nFahrenheit -> Celsius:\\n");\n    double ftemps[] = {32.0, 98.6, 212.0};\n    for (int i = 0; i < 3; i++) {\n        printf("  %.1f F = %.1f C\\n", ftemps[i], fahrToCelsius(ftemps[i]));\n    }\n    return 0;\n}',
        expected: 'Celsius -> Fahrenheit:\n  0.0 C = 32.0 F\n  37.0 C = 98.6 F\n  100.0 C = 212.0 F\n\nFahrenheit -> Celsius:\n  32.0 F = 0.0 C\n  98.6 F = 37.0 C\n  212.0 F = 100.0 C',
      },
      {
        titleKo: '문자열 길이 함수',
        titleEn: 'String Length Function',
        code: '#include <stdio.h>\n\nint myStrlen(char str[]) {\n    int len = 0;\n    while (str[len] != \'\\0\') {\n        len++;\n    }\n    return len;\n}\n\nint countChar(char str[], char target) {\n    int count = 0;\n    for (int i = 0; str[i] != \'\\0\'; i++) {\n        if (str[i] == target) count++;\n    }\n    return count;\n}\n\nint main() {\n    char s1[] = "Hello";\n    char s2[] = "Programming";\n    char s3[] = "";\n    printf("\\"%s\\": length = %d\\n", s1, myStrlen(s1));\n    printf("\\"%s\\": length = %d\\n", s2, myStrlen(s2));\n    printf("\\"%s\\": length = %d\\n", s3, myStrlen(s3));\n    printf("\\nCount \'g\' in \\"%s\\\": %d\\n", s2, countChar(s2, \'g\'));\n    printf("Count \'l\' in \\"%s\\\": %d\\n", s1, countChar(s1, \'l\'));\n    return 0;\n}',
        expected: '"Hello": length = 5\n"Programming": length = 11\n"": length = 0\n\nCount \'g\' in "Programming": 2\nCount \'l\' in "Hello": 2',
      },
      {
        titleKo: '배열 최소/최대 함수',
        titleEn: 'Array Min/Max Function',
        code: '#include <stdio.h>\n\nint findMin(int arr[], int size) {\n    int min = arr[0];\n    for (int i = 1; i < size; i++) {\n        if (arr[i] < min) min = arr[i];\n    }\n    return min;\n}\n\nint findMax(int arr[], int size) {\n    int max = arr[0];\n    for (int i = 1; i < size; i++) {\n        if (arr[i] > max) max = arr[i];\n    }\n    return max;\n}\n\nint findSum(int arr[], int size) {\n    int sum = 0;\n    for (int i = 0; i < size; i++) sum += arr[i];\n    return sum;\n}\n\nint main() {\n    int data[] = {34, 7, 23, 56, 12, 89, 45};\n    int n = 7;\n    printf("Array: ");\n    for (int i = 0; i < n; i++) {\n        printf("%d ", data[i]);\n    }\n    printf("\\n");\n    printf("Min: %d\\n", findMin(data, n));\n    printf("Max: %d\\n", findMax(data, n));\n    printf("Sum: %d\\n", findSum(data, n));\n    printf("Range: %d\\n", findMax(data, n) - findMin(data, n));\n    return 0;\n}',
        expected: 'Array: 34 7 23 56 12 89 45 \nMin: 7\nMax: 89\nSum: 266\nRange: 82',
      },
    ],
  },
];

export default steps1to5;
