// Step 2: Variables & Data Types - 변수와 자료형
// Declaring and using variables in C

const step2 = {
  id: 2,
  title: 'Variables & Data Types',
  titleKo: '변수와 자료형',
  description: 'Declaring and using variables in C',
  descriptionKo: 'C에서 변수 선언과 사용',
  examples: [
    {
      id: 's2e1',
      title: '정수형 변수',
      titleEn: 'Integer Variables',
      description: 'int 자료형으로 정수를 저장합니다.',
      descriptionEn: 'Store integers using the int data type.',
      code: `#include <stdio.h>

int main() {
    int age = 25;
    int year = 2025;
    int negative = -10;

    printf("Age: %d\\n", age);
    printf("Year: %d\\n", year);
    printf("Negative: %d\\n", negative);

    return 0;
}`,
      expectedOutput: `Age: 25
Year: 2025
Negative: -10`,
      explanation: 'int는 정수를 저장하며, 보통 4바이트(32비트)입니다. %d로 출력합니다.',
      explanationEn: 'int stores integers, typically 4 bytes (32 bits). Use %d to print.'
    },
    {
      id: 's2e2',
      title: '실수형 변수',
      titleEn: 'Floating-point Variables',
      description: 'float와 double로 소수점 숫자를 저장합니다.',
      descriptionEn: 'Store decimal numbers using float and double.',
      code: `#include <stdio.h>

int main() {
    float pi_f = 3.14f;
    double pi_d = 3.141592653589793;

    printf("float pi:  %.2f\\n", pi_f);
    printf("double pi: %.15f\\n", pi_d);
    printf("float size:  %d bytes\\n", (int)sizeof(float));
    printf("double size: %d bytes\\n", (int)sizeof(double));

    return 0;
}`,
      expectedOutput: `float pi:  3.14
double pi: 3.141592653589793
float size:  4 bytes
double size: 8 bytes`,
      explanation: 'float는 4바이트(약 7자리 정밀도), double은 8바이트(약 15자리 정밀도)입니다.',
      explanationEn: 'float is 4 bytes (~7 digit precision), double is 8 bytes (~15 digit precision).'
    },
    {
      id: 's2e3',
      title: '문자형 변수',
      titleEn: 'Character Variables',
      description: 'char로 단일 문자와 ASCII 값을 다룹니다.',
      descriptionEn: 'Handle single characters and ASCII values with char.',
      code: `#include <stdio.h>

int main() {
    char letter = 'A';
    char digit = '7';

    printf("Letter: %c\\n", letter);
    printf("ASCII of '%c': %d\\n", letter, letter);
    printf("Digit char: %c, ASCII: %d\\n", digit, digit);
    printf("Next letter: %c\\n", letter + 1);

    return 0;
}`,
      expectedOutput: `Letter: A
ASCII of 'A': 65
Digit char: 7, ASCII: 55
Next letter: B`,
      explanation: "char는 1바이트로 문자 하나를 저장합니다. 내부적으로 ASCII 코드(숫자)로 저장되어 연산이 가능합니다.",
      explanationEn: "char is 1 byte storing a single character. Internally stored as ASCII code (number), allowing arithmetic."
    },
    {
      id: 's2e4',
      title: 'sizeof 연산자',
      titleEn: 'sizeof Operator',
      description: '각 자료형의 크기를 sizeof로 확인합니다.',
      descriptionEn: 'Check the size of each data type with sizeof.',
      code: `#include <stdio.h>

int main() {
    printf("=== Data Type Sizes ===\\n");
    printf("char:      %d byte\\n", (int)sizeof(char));
    printf("short:     %d bytes\\n", (int)sizeof(short));
    printf("int:       %d bytes\\n", (int)sizeof(int));
    printf("float:     %d bytes\\n", (int)sizeof(float));
    printf("double:    %d bytes\\n", (int)sizeof(double));

    return 0;
}`,
      expectedOutput: `=== Data Type Sizes ===
char:      1 byte
short:     2 bytes
int:       4 bytes
float:     4 bytes
double:    8 bytes`,
      explanation: 'sizeof는 자료형이나 변수의 바이트 크기를 반환합니다. 크기는 시스템에 따라 다를 수 있습니다.',
      explanationEn: 'sizeof returns the byte size of a type or variable. Sizes may vary by system.'
    },
    {
      id: 's2e5',
      title: '상수 (const)',
      titleEn: 'Constants (const)',
      description: 'const로 변경할 수 없는 상수를 선언합니다.',
      descriptionEn: 'Declare unchangeable constants with const.',
      code: `#include <stdio.h>

#define MAX_SIZE 100

int main() {
    const double PI = 3.14159265358979;
    const int DAYS_IN_WEEK = 7;

    printf("PI = %.10f\\n", PI);
    printf("Days in a week: %d\\n", DAYS_IN_WEEK);
    printf("MAX_SIZE: %d\\n", MAX_SIZE);

    // PI = 3.14; // Error! Cannot modify const
    // DAYS_IN_WEEK = 8; // Error!

    double radius = 5.0;
    double area = PI * radius * radius;
    printf("Circle area (r=%.1f): %.2f\\n", radius, area);

    return 0;
}`,
      expectedOutput: `PI = 3.1415926536
Days in a week: 7
MAX_SIZE: 100
Circle area (r=5.0): 78.54`,
      explanation: 'const는 변수를 읽기 전용으로 만들고, #define은 전처리기 상수를 정의합니다.',
      explanationEn: 'const makes a variable read-only, #define defines a preprocessor constant.'
    },
    {
      id: 's2e6',
      title: '자료형 변환 (캐스팅)',
      titleEn: 'Type Casting',
      description: '암시적/명시적 자료형 변환을 배웁니다.',
      descriptionEn: 'Learn implicit and explicit type conversions.',
      code: `#include <stdio.h>

int main() {
    // Implicit conversion (automatic)
    int a = 10;
    double b = a; // int -> double
    printf("Implicit: int %d -> double %.1f\\n", a, b);

    // Explicit conversion (casting)
    double x = 9.7;
    int y = (int)x; // double -> int (truncates)
    printf("Explicit: double %.1f -> int %d\\n", x, y);

    // Integer division vs float division
    int num = 7, den = 2;
    printf("Int division: %d / %d = %d\\n", num, den, num / den);
    printf("Float division: %d / %d = %.1f\\n", num, den, (double)num / den);

    return 0;
}`,
      expectedOutput: `Implicit: int 10 -> double 10.0
Explicit: double 9.7 -> int 9
Int division: 7 / 2 = 3
Float division: 7 / 2 = 3.5`,
      explanation: '암시적 변환은 자동으로, 명시적 변환은 (타입) 캐스팅으로 수행합니다. 정수 나눗셈은 소수점을 버립니다.',
      explanationEn: 'Implicit conversion is automatic; explicit uses (type) casting. Integer division truncates decimals.'
    },
    {
      id: 's2e7',
      title: 'unsigned 자료형',
      titleEn: 'Unsigned Types',
      description: '부호 없는 자료형으로 양수만 저장합니다.',
      descriptionEn: 'Store only positive numbers with unsigned types.',
      code: `#include <stdio.h>

int main() {
    unsigned int positive = 42;
    int signed_val = -42;

    printf("unsigned int: %u\\n", positive);
    printf("signed int: %d\\n", signed_val);

    printf("\\nint size: %d bytes\\n", (int)sizeof(int));
    printf("char size: %d byte\\n", (int)sizeof(char));

    // Unsigned allows larger positive values
    unsigned int big = 3000000000u;
    printf("\\nunsigned big: %u\\n", big);

    return 0;
}`,
      expectedOutput: `unsigned int: 42
signed int: -42

int size: 4 bytes
char size: 1 byte

unsigned big: 3000000000`,
      explanation: 'unsigned는 음수를 저장할 수 없지만, 양수의 최대값이 2배가 됩니다.',
      explanationEn: 'unsigned cannot store negatives but doubles the positive max.'
    },
    {
      id: 's2e8',
      title: '변수 선언과 초기화 규칙',
      titleEn: 'Declaration & Initialization Rules',
      description: '변수 선언, 초기화, 다중 선언의 규칙을 익힙니다.',
      descriptionEn: 'Learn rules for variable declaration, initialization, and multiple declarations.',
      code: `#include <stdio.h>

int main() {
    // Declaration then assignment
    int x;
    x = 10;

    // Declaration with initialization
    int y = 20;

    // Multiple declarations
    int a, b, c;
    a = 1;
    b = 2;
    c = 3;

    // Multiple declarations with initialization
    int p = 100, q = 200, r = 300;

    printf("x = %d, y = %d\\n", x, y);
    printf("a = %d, b = %d, c = %d\\n", a, b, c);
    printf("p = %d, q = %d, r = %d\\n", p, q, r);

    // Swap two variables
    int temp = p;
    p = q;
    q = temp;
    printf("After swap: p = %d, q = %d\\n", p, q);

    return 0;
}`,
      expectedOutput: `x = 10, y = 20
a = 1, b = 2, c = 3
p = 100, q = 200, r = 300
After swap: p = 200, q = 100`,
      explanation: '변수는 사용 전에 반드시 선언해야 합니다. 초기화하지 않은 지역 변수는 쓰레기값을 가집니다.',
      explanationEn: 'Variables must be declared before use. Uninitialized local variables contain garbage values.'
    },
    {
      id: 's2e9',
      title: 'Boolean 표현',
      titleEn: 'Boolean Representation',
      description: 'C에서 참/거짓 값을 표현하는 방법입니다.',
      descriptionEn: 'How to represent true/false values in C.',
      code: `#include <stdio.h>

int main() {
    // In C, 0 is false, non-zero is true
    int isReady = 1; // true
    int isDone = 0;  // false

    printf("isReady: %d\\n", isReady);
    printf("isDone: %d\\n", isDone);

    int flag = 1;
    if (flag) {
        printf("flag is true (non-zero)\\n");
    }

    int zero = 0;
    if (!zero) {
        printf("zero is false\\n");
    }

    printf("true = %d, false = %d\\n", 1, 0);

    return 0;
}`,
      expectedOutput: `isReady: 1
isDone: 0
flag is true (non-zero)
zero is false
true = 1, false = 0`,
      explanation: 'C에서 0은 거짓, 0이 아닌 값은 참입니다. C99부터 stdbool.h로 bool, true, false를 사용할 수도 있습니다.',
      explanationEn: 'In C, 0 is false, non-zero is true. Since C99, stdbool.h provides bool, true, false.'
    }
  ]
}

export default step2
