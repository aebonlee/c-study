// Step 5: Conditionals - 조건문
// if, else, switch-case branching

const step5 = {
  id: 5,
  title: 'Conditionals',
  titleKo: '조건문',
  description: 'Branching with if, else, switch-case',
  descriptionKo: 'if, else, switch-case 분기 처리',
  examples: [
    {
      id: 's5e1',
      title: '기본 if-else',
      titleEn: 'Basic if-else',
      description: '조건에 따라 다른 코드를 실행합니다.',
      descriptionEn: 'Execute different code based on conditions.',
      code: `#include <stdio.h>

int main() {
    int age = 20;

    if (age >= 18) {
        printf("You are an adult.\\n");
    } else {
        printf("You are a minor.\\n");
    }

    int score = 75;
    if (score >= 90) {
        printf("Grade: A\\n");
    } else if (score >= 80) {
        printf("Grade: B\\n");
    } else if (score >= 70) {
        printf("Grade: C\\n");
    } else if (score >= 60) {
        printf("Grade: D\\n");
    } else {
        printf("Grade: F\\n");
    }

    return 0;
}`,
      expectedOutput: `You are an adult.
Grade: C`,
      explanation: 'if 조건이 참이면 블록을 실행하고, else if로 추가 조건을, else로 나머지를 처리합니다.',
      explanationEn: 'if block runs when condition is true; else if for additional conditions; else for the rest.'
    },
    {
      id: 's5e2',
      title: '중첩 조건문',
      titleEn: 'Nested Conditionals',
      description: '조건문 안에 조건문을 중첩합니다.',
      descriptionEn: 'Nest conditionals inside other conditionals.',
      code: `#include <stdio.h>

int main() {
    int age = 25;
    int hasID = 1;

    if (age >= 18) {
        if (hasID) {
            printf("Entry allowed.\\n");
        } else {
            printf("Please bring your ID.\\n");
        }
    } else {
        printf("Must be 18 or older.\\n");
    }

    // Better: combine with &&
    if (age >= 18 && hasID) {
        printf("(Combined check) Entry allowed.\\n");
    }

    // Multiple conditions
    int temp = 25;
    int isRaining = 0;
    if (temp > 20 && temp < 30 && !isRaining) {
        printf("Perfect weather for a walk!\\n");
    }

    return 0;
}`,
      expectedOutput: `Entry allowed.
(Combined check) Entry allowed.
Perfect weather for a walk!`,
      explanation: '중첩 조건문보다 논리 연산자(&&, ||)로 조건을 결합하는 것이 더 깔끔할 수 있습니다.',
      explanationEn: 'Combining conditions with logical operators (&&, ||) can be cleaner than nesting.'
    },
    {
      id: 's5e3',
      title: 'switch-case 기본',
      titleEn: 'Basic switch-case',
      description: '여러 값에 대한 분기를 switch로 처리합니다.',
      descriptionEn: 'Handle multiple value branches with switch.',
      code: `#include <stdio.h>

int main() {
    int day = 3;

    switch (day) {
        case 1: printf("Monday\\n"); break;
        case 2: printf("Tuesday\\n"); break;
        case 3: printf("Wednesday\\n"); break;
        case 4: printf("Thursday\\n"); break;
        case 5: printf("Friday\\n"); break;
        case 6: printf("Saturday\\n"); break;
        case 7: printf("Sunday\\n"); break;
        default: printf("Invalid day\\n"); break;
    }

    return 0;
}`,
      expectedOutput: `Wednesday`,
      explanation: 'switch는 값이 일치하는 case로 점프합니다. break가 없으면 다음 case로 넘어갑니다(fall-through).',
      explanationEn: 'switch jumps to the matching case. Without break, execution falls through to the next case.'
    },
    {
      id: 's5e4',
      title: 'switch fall-through 활용',
      titleEn: 'switch Fall-through',
      description: 'break를 생략하여 여러 case를 한꺼번에 처리합니다.',
      descriptionEn: 'Handle multiple cases together by omitting break.',
      code: `#include <stdio.h>

int main() {
    char grade = 'B';

    switch (grade) {
        case 'A':
        case 'B':
            printf("Excellent!\\n");
            break;
        case 'C':
            printf("Good.\\n");
            break;
        case 'D':
            printf("Needs improvement.\\n");
            break;
        case 'F':
            printf("Failed.\\n");
            break;
        default:
            printf("Invalid grade.\\n");
    }

    // Count days in month
    int month = 2, year = 2024, days;
    switch (month) {
        case 2:
            days = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) ? 29 : 28;
            break;
        case 4: case 6: case 9: case 11:
            days = 30;
            break;
        default:
            days = 31;
    }
    printf("Month %d, Year %d: %d days\\n", month, year, days);

    return 0;
}`,
      expectedOutput: `Excellent!
Month 2, Year 2024: 29 days`,
      explanation: 'case A와 B를 함께 처리하려면 A 뒤에 break를 넣지 않습니다.',
      explanationEn: 'Omit break after case A to handle A and B together.'
    },
    {
      id: 's5e5',
      title: '삼항 연산자 활용',
      titleEn: 'Ternary Operator Usage',
      description: '간단한 조건을 한 줄로 표현합니다.',
      descriptionEn: 'Express simple conditions in one line.',
      code: `#include <stdio.h>

int main() {
    int num = -5;
    int absVal = (num >= 0) ? num : -num;
    printf("Absolute value of %d: %d\\n", num, absVal);

    int a = 15, b = 23;
    printf("Max: %d\\n", (a > b) ? a : b);
    printf("Min: %d\\n", (a < b) ? a : b);

    // Nested ternary (use sparingly!)
    int score = 85;
    char g = (score >= 90) ? 'A' :
             (score >= 80) ? 'B' :
             (score >= 70) ? 'C' :
             (score >= 60) ? 'D' : 'F';
    printf("Score %d -> Grade %c\\n", score, g);

    // Conditional message
    int count = 1;
    printf("You have %d item%s.\\n", count, (count == 1) ? "" : "s");
    count = 5;
    printf("You have %d item%s.\\n", count, (count == 1) ? "" : "s");

    return 0;
}`,
      expectedOutput: `Absolute value of -5: 5
Max: 23
Min: 15
Score 85 -> Grade B
You have 1 item.
You have 5 items.`,
      explanation: '삼항 연산자는 간단한 if-else를 대체합니다. 중첩은 가독성이 떨어지므로 주의하세요.',
      explanationEn: 'Ternary replaces simple if-else. Avoid excessive nesting for readability.'
    },
    {
      id: 's5e6',
      title: 'FizzBuzz',
      titleEn: 'FizzBuzz',
      description: '조건문의 고전적인 연습 문제입니다.',
      descriptionEn: 'A classic conditionals exercise.',
      code: `#include <stdio.h>

int main() {
    printf("=== FizzBuzz (1-20) ===\\n");
    for (int i = 1; i <= 20; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            printf("FizzBuzz ");
        } else if (i % 3 == 0) {
            printf("Fizz ");
        } else if (i % 5 == 0) {
            printf("Buzz ");
        } else {
            printf("%d ", i);
        }
    }
    printf("\\n");

    return 0;
}`,
      expectedOutput: `=== FizzBuzz (1-20) ===
1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz `,
      explanation: '3의 배수는 Fizz, 5의 배수는 Buzz, 둘 다의 배수는 FizzBuzz. 조건 순서가 중요합니다.',
      explanationEn: 'Multiples of 3: Fizz, 5: Buzz, both: FizzBuzz. Condition order matters.'
    },
    {
      id: 's5e7',
      title: '범위 검사',
      titleEn: 'Range Checking',
      description: '값이 특정 범위에 있는지 검사합니다.',
      descriptionEn: 'Check if a value falls within a specific range.',
      code: `#include <stdio.h>

int main() {
    // Character classification
    char ch = 'g';
    if (ch >= 'A' && ch <= 'Z') {
        printf("'%c' is uppercase\\n", ch);
    } else if (ch >= 'a' && ch <= 'z') {
        printf("'%c' is lowercase\\n", ch);
    } else if (ch >= '0' && ch <= '9') {
        printf("'%c' is a digit\\n", ch);
    } else {
        printf("'%c' is a special character\\n", ch);
    }

    // Leap year check
    int year = 2024;
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        printf("%d is a leap year\\n", year);
    } else {
        printf("%d is not a leap year\\n", year);
    }

    // BMI calculator
    double weight = 70.0, height = 1.75;
    double bmi = weight / (height * height);
    printf("\\nBMI: %.1f - ", bmi);
    if (bmi < 18.5) printf("Underweight\\n");
    else if (bmi < 25.0) printf("Normal\\n");
    else if (bmi < 30.0) printf("Overweight\\n");
    else printf("Obese\\n");

    return 0;
}`,
      expectedOutput: `'g' is lowercase
2024 is a leap year

BMI: 22.9 - Normal`,
      explanation: '범위 검사에 && 연산자를, 여러 조건 중 하나라도 참이면 ||를 사용합니다.',
      explanationEn: 'Use && for range checks, || when any condition being true suffices.'
    },
    {
      id: 's5e8',
      title: '간단한 메뉴 시스템',
      titleEn: 'Simple Menu System',
      description: 'switch로 메뉴 선택을 구현합니다.',
      descriptionEn: 'Implement menu selection with switch.',
      code: `#include <stdio.h>

int main() {
    int choice = 1;
    double a = 10.0, b = 3.0;

    printf("=== Calculator Menu ===\\n");
    printf("1. Add\\n2. Subtract\\n3. Multiply\\n4. Divide\\n");
    printf("Choice: %d\\n", choice);

    switch (choice) {
        case 1:
            printf("%.1f + %.1f = %.1f\\n", a, b, a + b);
            break;
        case 2:
            printf("%.1f - %.1f = %.1f\\n", a, b, a - b);
            break;
        case 3:
            printf("%.1f * %.1f = %.1f\\n", a, b, a * b);
            break;
        case 4:
            if (b != 0)
                printf("%.1f / %.1f = %.4f\\n", a, b, a / b);
            else
                printf("Error: Division by zero!\\n");
            break;
        default:
            printf("Invalid choice!\\n");
    }

    return 0;
}`,
      expectedOutput: `=== Calculator Menu ===
1. Add
2. Subtract
3. Multiply
4. Divide
Choice: 1
10.0 + 3.0 = 13.0`,
      explanation: 'switch는 메뉴 시스템 구현에 적합합니다. 나눗셈 시 0으로 나누기를 반드시 검사합니다.',
      explanationEn: 'switch is ideal for menu systems. Always check for division by zero.'
    },
    {
      id: 's5e9',
      title: '논리 연산 단축 평가',
      titleEn: 'Short-circuit Evaluation',
      description: '논리 연산의 단축 평가를 이해합니다.',
      descriptionEn: 'Understand short-circuit evaluation in logical operations.',
      code: `#include <stdio.h>

int checkPositive(int n) {
    printf("  Checking %d > 0\\n", n);
    return n > 0;
}

int checkEven(int n) {
    printf("  Checking %d is even\\n", n);
    return n % 2 == 0;
}

int main() {
    printf("=== AND Short-circuit ===\\n");
    int x = -5;
    printf("Testing: %d > 0 && %d is even\\n", x, x);
    if (checkPositive(x) && checkEven(x)) {
        printf("Result: true\\n");
    } else {
        printf("Result: false (second check skipped!)\\n");
    }

    printf("\\n=== OR Short-circuit ===\\n");
    int y = 3;
    printf("Testing: %d > 0 || %d is even\\n", y, y);
    if (checkPositive(y) || checkEven(y)) {
        printf("Result: true (second check skipped!)\\n");
    }

    printf("\\n=== Safe pointer check ===\\n");
    int *ptr = NULL;
    if (ptr != NULL && *ptr > 0) {
        printf("Value: %d\\n", *ptr);
    } else {
        printf("Pointer is NULL (safe!)\\n");
    }

    return 0;
}`,
      expectedOutput: `=== AND Short-circuit ===
Testing: -5 > 0 && -5 is even
  Checking -5 > 0
Result: false (second check skipped!)

=== OR Short-circuit ===
Testing: 3 > 0 || 3 is even
  Checking 3 > 0
Result: true (second check skipped!)

=== Safe pointer check ===
Pointer is NULL (safe!)`,
      explanation: '&&에서 왼쪽이 거짓이면 오른쪽을 평가하지 않습니다. ||에서 왼쪽이 참이면 오른쪽을 건너뜁니다.',
      explanationEn: 'With &&, if left is false, right is skipped. With ||, if left is true, right is skipped.'
    }
  ]
}

export default step5
