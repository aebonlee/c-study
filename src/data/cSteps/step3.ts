// Step 3: Operators - 연산자
// Arithmetic, comparison, logical, and bitwise operators

const step3 = {
  id: 3,
  title: 'Operators',
  titleKo: '연산자',
  description: 'Arithmetic, comparison, logical operators in C',
  descriptionKo: 'C의 산술, 비교, 논리 연산자',
  examples: [
    {
      id: 's3e1',
      title: '산술 연산자',
      titleEn: 'Arithmetic Operators',
      description: '더하기, 빼기, 곱하기, 나누기, 나머지 연산입니다.',
      descriptionEn: 'Addition, subtraction, multiplication, division, modulo.',
      code: `#include <stdio.h>

int main() {
    int a = 17, b = 5;

    printf("%d + %d = %d\\n", a, b, a + b);
    printf("%d - %d = %d\\n", a, b, a - b);
    printf("%d * %d = %d\\n", a, b, a * b);
    printf("%d / %d = %d\\n", a, b, a / b);   // integer division
    printf("%d %% %d = %d\\n", a, b, a % b);  // modulo (remainder)

    return 0;
}`,
      expectedOutput: `17 + 5 = 22
17 - 5 = 12
17 * 5 = 85
17 / 5 = 3
17 % 5 = 2`,
      explanation: '정수끼리 나눗셈은 소수점을 버립니다. %는 나머지를 구합니다. printf에서 %를 출력하려면 %%를 씁니다.',
      explanationEn: 'Integer division truncates. % gives remainder. Use %% to print a literal % in printf.'
    },
    {
      id: 's3e2',
      title: '증감 연산자',
      titleEn: 'Increment & Decrement',
      description: '++와 --의 전위/후위 차이를 이해합니다.',
      descriptionEn: 'Understand prefix/postfix difference of ++ and --.',
      code: `#include <stdio.h>

int main() {
    int x = 5;

    printf("x = %d\\n", x);
    printf("x++ = %d\\n", x++);  // use then increment
    printf("x now = %d\\n", x);
    printf("++x = %d\\n", ++x);  // increment then use
    printf("x now = %d\\n", x);

    printf("\\n");
    int y = 10;
    printf("y-- = %d\\n", y--);  // use then decrement
    printf("y now = %d\\n", y);
    printf("--y = %d\\n", --y);  // decrement then use
    printf("y now = %d\\n", y);

    return 0;
}`,
      expectedOutput: `x = 5
x++ = 5
x now = 6
++x = 7
x now = 7

y-- = 10
y now = 9
--y = 8
y now = 8`,
      explanation: '후위(x++)는 현재 값을 먼저 사용한 후 증가하고, 전위(++x)는 먼저 증가한 후 사용합니다.',
      explanationEn: 'Postfix (x++) uses current value then increments; prefix (++x) increments then uses.'
    },
    {
      id: 's3e3',
      title: '비교 연산자',
      titleEn: 'Comparison Operators',
      description: '두 값을 비교하여 참(1) 또는 거짓(0)을 반환합니다.',
      descriptionEn: 'Compare two values, returning true(1) or false(0).',
      code: `#include <stdio.h>

int main() {
    int a = 10, b = 20;

    printf("%d == %d : %d\\n", a, b, a == b);
    printf("%d != %d : %d\\n", a, b, a != b);
    printf("%d > %d  : %d\\n", a, b, a > b);
    printf("%d < %d  : %d\\n", a, b, a < b);
    printf("%d >= %d : %d\\n", a, b, a >= b);
    printf("%d <= %d : %d\\n", a, b, a <= b);

    // Common mistake: = vs ==
    // if (a = b)  -> assignment, not comparison!
    // if (a == b) -> correct comparison

    return 0;
}`,
      expectedOutput: `10 == 20 : 0
10 != 20 : 1
10 > 20  : 0
10 < 20  : 1
10 >= 20 : 0
10 <= 20 : 1`,
      explanation: '비교 결과는 참이면 1, 거짓이면 0입니다. == (비교)와 = (대입)을 혼동하지 마세요.',
      explanationEn: 'Comparison returns 1 for true, 0 for false. Do not confuse == (compare) with = (assign).'
    },
    {
      id: 's3e4',
      title: '논리 연산자',
      titleEn: 'Logical Operators',
      description: 'AND(&&), OR(||), NOT(!) 논리 연산입니다.',
      descriptionEn: 'AND(&&), OR(||), NOT(!) logical operations.',
      code: `#include <stdio.h>

int main() {
    int age = 25;
    int hasLicense = 1; // true

    // AND: both must be true
    printf("Can drive? %d\\n", age >= 18 && hasLicense);

    // OR: at least one must be true
    int isStudent = 0;
    int isSenior = 1;
    printf("Gets discount? %d\\n", isStudent || isSenior);

    // NOT: inverts the value
    int isRaining = 0;
    printf("Go outside? %d\\n", !isRaining);

    // Combining
    int score = 85;
    int passed = (score >= 60) && (score <= 100);
    printf("Score %d - Valid & Passed? %d\\n", score, passed);

    return 0;
}`,
      expectedOutput: `Can drive? 1
Gets discount? 1
Go outside? 1
Score 85 - Valid & Passed? 1`,
      explanation: '&&는 둘 다 참이어야 참, ||는 하나라도 참이면 참, !는 참/거짓을 반전합니다.',
      explanationEn: '&& requires both true, || requires at least one true, ! inverts the boolean value.'
    },
    {
      id: 's3e5',
      title: '대입 연산자',
      titleEn: 'Assignment Operators',
      description: '복합 대입 연산자로 코드를 간결하게 작성합니다.',
      descriptionEn: 'Write concise code with compound assignment operators.',
      code: `#include <stdio.h>

int main() {
    int x = 100;
    printf("Initial: x = %d\\n", x);

    x += 10;  // x = x + 10
    printf("x += 10 -> %d\\n", x);

    x -= 30;  // x = x - 30
    printf("x -= 30 -> %d\\n", x);

    x *= 2;   // x = x * 2
    printf("x *= 2  -> %d\\n", x);

    x /= 4;   // x = x / 4
    printf("x /= 4  -> %d\\n", x);

    x %= 3;   // x = x % 3
    printf("x %%= 3  -> %d\\n", x);

    return 0;
}`,
      expectedOutput: `Initial: x = 100
x += 10 -> 110
x -= 30 -> 80
x *= 2  -> 160
x /= 4  -> 40
x %= 3  -> 1`,
      explanation: 'a += b는 a = a + b와 같습니다. 다른 복합 대입 연산자도 같은 패턴입니다.',
      explanationEn: 'a += b is equivalent to a = a + b. Other compound assignments follow the same pattern.'
    },
    {
      id: 's3e6',
      title: '비트 연산자',
      titleEn: 'Bitwise Operators',
      description: '비트 단위의 AND, OR, XOR, NOT, 시프트 연산입니다.',
      descriptionEn: 'Bit-level AND, OR, XOR, NOT, and shift operations.',
      code: `#include <stdio.h>

int main() {
    unsigned char a = 202; // 0xCA = 11001010
    unsigned char b = 181; // 0xB5 = 10110101

    printf("a      = %3d (0x%02X)\\n", a, a);
    printf("b      = %3d (0x%02X)\\n", b, b);
    printf("a & b  = %3d (AND)\\n", a & b);
    printf("a | b  = %3d (OR)\\n", a | b);
    printf("a ^ b  = %3d (XOR)\\n", a ^ b);
    printf("~a     = %3d (NOT, as uchar)\\n", (unsigned char)~a);

    printf("\\n");
    int x = 5;  // 0101 in binary
    printf("x      = %d\\n", x);
    printf("x << 1 = %d (left shift)\\n", x << 1);
    printf("x << 2 = %d\\n", x << 2);
    printf("x >> 1 = %d (right shift)\\n", x >> 1);

    return 0;
}`,
      expectedOutput: `a      = 202 (0xCA)
b      = 181 (0xB5)
a & b  = 128 (AND)
a | b  = 255 (OR)
a ^ b  = 127 (XOR)
~a     =  53 (NOT, as uchar)

x      = 5
x << 1 = 10 (left shift)
x << 2 = 20
x >> 1 = 2 (right shift)`,
      explanation: '비트 연산은 각 비트에 대해 수행됩니다. << 1은 2배, >> 1은 반으로 나누는 효과입니다.',
      explanationEn: 'Bitwise operations work on each bit. << 1 doubles the value, >> 1 halves it.'
    },
    {
      id: 's3e7',
      title: '삼항 연산자',
      titleEn: 'Ternary Operator',
      description: '조건 ? 참값 : 거짓값 형태의 간결한 조건식입니다.',
      descriptionEn: 'Concise conditional expression: condition ? trueVal : falseVal.',
      code: `#include <stdio.h>

int main() {
    int age = 20;
    const char* status = (age >= 18) ? "Adult" : "Minor";
    printf("Age %d: %s\\n", age, status);

    int a = 15, b = 23;
    int max = (a > b) ? a : b;
    int min = (a < b) ? a : b;
    printf("Max of %d and %d: %d\\n", a, b, max);
    printf("Min of %d and %d: %d\\n", a, b, min);

    // Absolute value
    int num = -7;
    int absVal = (num >= 0) ? num : -num;
    printf("Absolute value of %d: %d\\n", num, absVal);

    // Even or odd
    for (int i = 1; i <= 5; i++) {
        printf("%d is %s\\n", i, (i % 2 == 0) ? "even" : "odd");
    }

    return 0;
}`,
      expectedOutput: `Age 20: Adult
Max of 15 and 23: 23
Min of 15 and 23: 15
Absolute value of -7: 7
1 is odd
2 is even
3 is odd
4 is even
5 is odd`,
      explanation: '삼항 연산자는 간단한 if-else를 한 줄로 표현합니다. 복잡한 조건에는 if-else가 더 읽기 쉽습니다.',
      explanationEn: 'Ternary operator expresses simple if-else in one line. For complex conditions, if-else is more readable.'
    },
    {
      id: 's3e8',
      title: '연산자 우선순위',
      titleEn: 'Operator Precedence',
      description: '연산자의 실행 순서를 이해합니다.',
      descriptionEn: 'Understand the order of operator execution.',
      code: `#include <stdio.h>

int main() {
    // Multiplication before addition
    int result1 = 2 + 3 * 4;
    printf("2 + 3 * 4 = %d\\n", result1);

    // Parentheses change order
    int result2 = (2 + 3) * 4;
    printf("(2 + 3) * 4 = %d\\n", result2);

    // Comparison before logical
    int a = 5, b = 10, c = 15;
    int result3 = a < b && b < c;
    printf("%d < %d && %d < %d = %d\\n", a, b, b, c, result3);

    // Assignment has lowest precedence
    int x = 3 + 4 * 2;  // 3 + 8 = 11, then assign
    printf("x = 3 + 4 * 2 -> x = %d\\n", x);

    // Use parentheses for clarity!
    int y = ((3 + 4) * 2);
    printf("y = (3 + 4) * 2 -> y = %d\\n", y);

    return 0;
}`,
      expectedOutput: `2 + 3 * 4 = 14
(2 + 3) * 4 = 20
5 < 10 && 10 < 15 = 1
x = 3 + 4 * 2 -> x = 11
y = (3 + 4) * 2 -> y = 14`,
      explanation: '우선순위: 괄호 > 단항 > 산술(*,/,%) > 산술(+,-) > 비교 > 논리 > 대입. 의심스러우면 괄호를 사용하세요.',
      explanationEn: 'Precedence: () > unary > *,/,% > +,- > comparison > logical > assignment. When in doubt, use parentheses.'
    },
    {
      id: 's3e9',
      title: '콤마 연산자와 sizeof',
      titleEn: 'Comma Operator & sizeof',
      description: '콤마 연산자와 sizeof의 특수한 사용법입니다.',
      descriptionEn: 'Special usage of comma operator and sizeof.',
      code: `#include <stdio.h>

int main() {
    // Comma operator: evaluates left to right, returns last
    int x = (1, 2, 3, 4, 5);
    printf("Comma result: %d\\n", x);

    // Practical use in for loop
    int a, b;
    for (a = 0, b = 10; a < b; a++, b--) {
        // a goes up, b goes down
    }
    printf("After loop: a=%d, b=%d\\n", a, b);

    // sizeof with expressions
    printf("sizeof(int): %d\\n", (int)sizeof(int));
    printf("sizeof(x): %d\\n", (int)sizeof(x));
    printf("sizeof(3.14): %d\\n", (int)sizeof(3.14));
    printf("sizeof(char): %d\\n", (int)sizeof(char));

    int arr[10];
    printf("sizeof(arr): %d\\n", (int)sizeof(arr));
    printf("Array elements: %d\\n", (int)sizeof(arr) / (int)sizeof(arr[0]));

    return 0;
}`,
      expectedOutput: `Comma result: 5
After loop: a=5, b=5
sizeof(int): 4
sizeof(x): 4
sizeof(3.14): 8
sizeof(char): 1
sizeof(arr): 40
Array elements: 10`,
      explanation: '콤마 연산자는 왼쪽부터 평가하고 마지막 값을 반환합니다. sizeof는 컴파일 시 크기를 결정합니다.',
      explanationEn: 'Comma operator evaluates left to right, returns last value. sizeof determines size at compile time.'
    }
  ]
}

export default step3
