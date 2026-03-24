// Step 6: Loops - 반복문
// for, while, do-while loops with break/continue

const step6 = {
  id: 6,
  title: 'Loops',
  titleKo: '반복문',
  description: 'for, while, do-while loops',
  descriptionKo: 'for, while, do-while 반복문',
  examples: [
    {
      id: 's6e1',
      title: 'for 루프 기본',
      titleEn: 'Basic for Loop',
      description: '가장 많이 사용되는 for 반복문입니다.',
      descriptionEn: 'The most commonly used for loop.',
      code: `#include <stdio.h>

int main() {
    printf("Count 1 to 5: ");
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    printf("\\n");

    printf("Countdown: ");
    for (int i = 5; i >= 1; i--) {
        printf("%d ", i);
    }
    printf("\\n");

    printf("Even numbers: ");
    for (int i = 2; i <= 10; i += 2) {
        printf("%d ", i);
    }
    printf("\\n");

    int sum = 0;
    for (int i = 1; i <= 100; i++) {
        sum += i;
    }
    printf("Sum of 1 to 100: %d\\n", sum);

    return 0;
}`,
      expectedOutput: `Count 1 to 5: 1 2 3 4 5
Countdown: 5 4 3 2 1
Even numbers: 2 4 6 8 10
Sum of 1 to 100: 5050`,
      explanation: 'for(초기화; 조건; 증감)으로 반복합니다. i++는 1씩, i+=2는 2씩 증가합니다.',
      explanationEn: 'for(init; condition; update) loops. i++ increments by 1, i+=2 by 2.'
    },
    {
      id: 's6e2',
      title: 'while 루프',
      titleEn: 'while Loop',
      description: '조건이 참인 동안 반복합니다.',
      descriptionEn: 'Repeat while the condition is true.',
      code: `#include <stdio.h>

int main() {
    int count = 1;
    printf("While loop: ");
    while (count <= 5) {
        printf("%d ", count);
        count++;
    }
    printf("\\n");

    // Find number of digits
    int num = 12345;
    int digits = 0;
    int temp = num;
    while (temp > 0) {
        digits++;
        temp /= 10;
    }
    printf("%d has %d digits\\n", num, digits);

    // Collatz conjecture
    int n = 10;
    printf("Collatz(%d): %d", n, n);
    while (n != 1) {
        n = (n % 2 == 0) ? n / 2 : 3 * n + 1;
        printf(" -> %d", n);
    }
    printf("\\n");

    return 0;
}`,
      expectedOutput: `While loop: 1 2 3 4 5
12345 has 5 digits
Collatz(10): 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1`,
      explanation: 'while은 조건을 먼저 확인하고 반복합니다. 무한 루프를 방지하려면 조건이 변해야 합니다.',
      explanationEn: 'while checks condition first. Ensure the condition changes to prevent infinite loops.'
    },
    {
      id: 's6e3',
      title: 'do-while 루프',
      titleEn: 'do-while Loop',
      description: '최소 1번은 실행하는 do-while 반복문입니다.',
      descriptionEn: 'do-while loop that executes at least once.',
      code: `#include <stdio.h>

int main() {
    int i = 1;
    printf("do-while: ");
    do {
        printf("%d ", i);
        i++;
    } while (i <= 5);
    printf("\\n");

    // Difference when condition is initially false
    int x = 10;
    printf("\\nwhile (x < 5): ");
    while (x < 5) {
        printf("%d ", x);
        x++;
    }
    printf("(nothing)\\n");

    x = 10;
    printf("do-while (x < 5): ");
    do {
        printf("%d ", x);
        x++;
    } while (x < 5);
    printf("\\n");

    // Input validation pattern
    int choice = 3;
    do {
        printf("\\nMenu: 1)Start 2)Options 3)Quit\\n");
        printf("Choice: %d\\n", choice);
    } while (choice < 1 || choice > 3);
    printf("Valid choice: %d\\n", choice);

    return 0;
}`,
      expectedOutput: `do-while: 1 2 3 4 5

while (x < 5): (nothing)
do-while (x < 5): 10

Menu: 1)Start 2)Options 3)Quit
Choice: 3
Valid choice: 3`,
      explanation: 'do-while은 먼저 실행하고 조건을 확인합니다. 입력 검증에 유용합니다.',
      explanationEn: 'do-while executes first, then checks. Useful for input validation.'
    },
    {
      id: 's6e4',
      title: 'break와 continue',
      titleEn: 'break and continue',
      description: 'break로 루프를 탈출하고, continue로 건너뜁니다.',
      descriptionEn: 'Exit loop with break, skip to next iteration with continue.',
      code: `#include <stdio.h>

int main() {
    printf("Break example: ");
    for (int i = 1; i <= 10; i++) {
        if (i == 6) break;
        printf("%d ", i);
    }
    printf("\\n");

    printf("Continue example: ");
    for (int i = 1; i <= 10; i++) {
        if (i % 3 == 0) continue;
        printf("%d ", i);
    }
    printf("\\n");

    // Find first prime after 20
    int n = 21;
    while (1) {
        int isPrime = 1;
        for (int j = 2; j * j <= n; j++) {
            if (n % j == 0) { isPrime = 0; break; }
        }
        if (isPrime) {
            printf("First prime after 20: %d\\n", n);
            break;
        }
        n++;
    }

    return 0;
}`,
      expectedOutput: `Break example: 1 2 3 4 5
Continue example: 1 2 4 5 7 8 10
First prime after 20: 23`,
      explanation: 'break는 가장 안쪽 루프를 탈출하고, continue는 나머지를 건너뛰고 다음 반복으로 갑니다.',
      explanationEn: 'break exits the innermost loop, continue skips remaining code and goes to next iteration.'
    },
    {
      id: 's6e5',
      title: '중첩 반복문',
      titleEn: 'Nested Loops',
      description: '반복문 안에 반복문을 중첩합니다.',
      descriptionEn: 'Nest loops inside other loops.',
      code: `#include <stdio.h>

int main() {
    // Multiplication table (2-4)
    printf("=== Multiplication Table ===\\n");
    for (int i = 2; i <= 4; i++) {
        for (int j = 1; j <= 9; j++) {
            printf("%d x %d = %2d  ", i, j, i * j);
        }
        printf("\\n");
    }

    // Right triangle
    printf("\\n=== Triangle ===\\n");
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\\n");
    }

    return 0;
}`,
      expectedOutput: `=== Multiplication Table ===
2 x 1 =  2  2 x 2 =  4  2 x 3 =  6  2 x 4 =  8  2 x 5 = 10  2 x 6 = 12  2 x 7 = 14  2 x 8 = 16  2 x 9 = 18
3 x 1 =  3  3 x 2 =  6  3 x 3 =  9  3 x 4 = 12  3 x 5 = 15  3 x 6 = 18  3 x 7 = 21  3 x 8 = 24  3 x 9 = 27
4 x 1 =  4  4 x 2 =  8  4 x 3 = 12  4 x 4 = 16  4 x 5 = 20  4 x 6 = 24  4 x 7 = 28  4 x 8 = 32  4 x 9 = 36

=== Triangle ===
*
* *
* * *
* * * *
* * * * * `,
      explanation: '바깥 루프가 한 번 실행될 때마다 안쪽 루프가 전부 실행됩니다.',
      explanationEn: 'The inner loop runs completely for each outer loop iteration.'
    },
    {
      id: 's6e6',
      title: '소수 찾기',
      titleEn: 'Finding Prime Numbers',
      description: '반복문으로 소수를 찾는 알고리즘입니다.',
      descriptionEn: 'Algorithm to find prime numbers using loops.',
      code: `#include <stdio.h>

int main() {
    printf("Prime numbers from 2 to 50:\\n");
    int count = 0;

    for (int num = 2; num <= 50; num++) {
        int isPrime = 1;
        for (int i = 2; i * i <= num; i++) {
            if (num % i == 0) {
                isPrime = 0;
                break;
            }
        }
        if (isPrime) {
            printf("%3d", num);
            count++;
            if (count % 10 == 0) printf("\\n");
        }
    }
    printf("\\nTotal: %d primes\\n", count);

    return 0;
}`,
      expectedOutput: `Prime numbers from 2 to 50:
  2  3  5  7 11 13 17 19 23 29
 31 37 41 43 47
Total: 15 primes`,
      explanation: '소수는 1과 자신만으로 나누어지는 수입니다. i*i <= num까지만 확인하면 효율적입니다.',
      explanationEn: 'A prime is divisible only by 1 and itself. Checking up to i*i <= num is efficient.'
    },
    {
      id: 's6e7',
      title: '피보나치 수열',
      titleEn: 'Fibonacci Sequence',
      description: '반복문으로 피보나치 수열을 생성합니다.',
      descriptionEn: 'Generate Fibonacci sequence with loops.',
      code: `#include <stdio.h>

int main() {
    int n = 15;
    long long a = 0, b = 1, temp;

    printf("First %d Fibonacci numbers:\\n", n);
    printf("%lld", a);

    for (int i = 1; i < n; i++) {
        printf(", %lld", b);
        temp = a + b;
        a = b;
        b = temp;
    }
    printf("\\n");

    // Fibonacci under 100
    printf("\\nFibonacci under 100: ");
    a = 0; b = 1;
    while (a < 100) {
        printf("%lld ", a);
        temp = a + b;
        a = b;
        b = temp;
    }
    printf("\\n");

    return 0;
}`,
      expectedOutput: `First 15 Fibonacci numbers:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377

Fibonacci under 100: 0 1 1 2 3 5 8 13 21 34 55 89 `,
      explanation: '피보나치 수열은 앞의 두 수를 더하여 다음 수를 만듭니다.',
      explanationEn: 'Fibonacci adds previous two numbers to get the next.'
    },
    {
      id: 's6e8',
      title: '별 패턴 그리기',
      titleEn: 'Star Pattern Drawing',
      description: '중첩 반복문으로 다양한 패턴을 그립니다.',
      descriptionEn: 'Draw various patterns with nested loops.',
      code: `#include <stdio.h>

int main() {
    int n = 5;

    // Diamond
    printf("=== Diamond ===\\n");
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < n - i; j++) printf(" ");
        for (int j = 0; j < 2 * i - 1; j++) printf("*");
        printf("\\n");
    }
    for (int i = n - 1; i >= 1; i--) {
        for (int j = 0; j < n - i; j++) printf(" ");
        for (int j = 0; j < 2 * i - 1; j++) printf("*");
        printf("\\n");
    }

    // Number pyramid
    printf("\\n=== Number Pyramid ===\\n");
    for (int i = 1; i <= 5; i++) {
        for (int j = 0; j < 5 - i; j++) printf(" ");
        for (int j = 1; j <= i; j++) printf("%d ", j);
        printf("\\n");
    }

    return 0;
}`,
      expectedOutput: `=== Diamond ===
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

=== Number Pyramid ===
    1
   1 2
  1 2 3
 1 2 3 4
1 2 3 4 5 `,
      explanation: '패턴 그리기는 중첩 루프의 좋은 연습입니다. 공백과 별의 관계를 파악하는 것이 핵심입니다.',
      explanationEn: 'Pattern drawing is great nested loop practice. Key is the relationship between spaces and stars.'
    },
    {
      id: 's6e9',
      title: '무한 루프와 탈출',
      titleEn: 'Infinite Loop with Break',
      description: '의도적 무한 루프와 조건부 탈출입니다.',
      descriptionEn: 'Intentional infinite loops with conditional breaks.',
      code: `#include <stdio.h>

int main() {
    int attempts = 0;
    int password = 1234;
    int input;

    while (1) {
        attempts++;
        input = (attempts == 3) ? 1234 : 0000;
        printf("Attempt %d: %04d ", attempts, input);

        if (input == password) {
            printf("- Correct!\\n");
            break;
        }
        printf("- Wrong!\\n");

        if (attempts >= 5) {
            printf("Too many attempts!\\n");
            break;
        }
    }

    // for(;;) also works
    printf("\\nCounting: ");
    int count = 0;
    for (;;) {
        printf("%d ", count);
        count++;
        if (count >= 5) break;
    }
    printf("\\n");

    return 0;
}`,
      expectedOutput: `Attempt 1: 0000 - Wrong!
Attempt 2: 0000 - Wrong!
Attempt 3: 1234 - Correct!

Counting: 0 1 2 3 4 `,
      explanation: 'while(1)과 for(;;)는 무한 루프입니다. break로 탈출 조건을 반드시 만들어야 합니다.',
      explanationEn: 'while(1) and for(;;) are infinite loops. Always include a break condition.'
    }
  ]
}

export default step6
