// Step 9: Functions - 함수
// Defining and calling functions

const step9 = {
  id: 9,
  title: 'Functions',
  titleKo: '함수',
  description: 'Defining and calling functions in C',
  descriptionKo: '함수 정의와 호출',
  examples: [
    {
      id: 's9e1',
      title: '기본 함수 정의',
      titleEn: 'Basic Function Definition',
      description: '함수를 정의하고 호출합니다.',
      descriptionEn: 'Define and call functions.',
      code: `#include <stdio.h>

// Function with no parameters, no return
void greet() {
    printf("Hello from a function!\\n");
}

// Function with parameter and return value
int square(int n) {
    return n * n;
}

// Function with multiple parameters
double average(double a, double b) {
    return (a + b) / 2.0;
}

int main() {
    greet();

    int result = square(7);
    printf("square(7) = %d\\n", result);
    printf("square(12) = %d\\n", square(12));

    double avg = average(85.5, 92.3);
    printf("average(85.5, 92.3) = %.1f\\n", avg);

    return 0;
}`,
      expectedOutput: `Hello from a function!
square(7) = 49
square(12) = 144
average(85.5, 92.3) = 88.9`,
      explanation: '함수는 반환형 이름(매개변수) { 본문 } 형태로 정의합니다. void는 반환값이 없음을 의미합니다.',
      explanationEn: 'Functions are defined as returnType name(params) { body }. void means no return value.'
    },
    {
      id: 's9e2',
      title: '함수 프로토타입',
      titleEn: 'Function Prototypes',
      description: 'main 앞에 함수 프로토타입을 선언합니다.',
      descriptionEn: 'Declare function prototypes before main.',
      code: `#include <stdio.h>

// Function prototypes (declarations)
int add(int a, int b);
int multiply(int a, int b);
void printResult(const char *operation, int result);

int main() {
    int x = 15, y = 8;

    printResult("Add", add(x, y));
    printResult("Multiply", multiply(x, y));

    // Functions can be called in expressions
    int combined = add(multiply(3, 4), multiply(5, 6));
    printResult("(3*4) + (5*6)", combined);

    return 0;
}

// Function definitions (implementations)
int add(int a, int b) {
    return a + b;
}

int multiply(int a, int b) {
    return a * b;
}

void printResult(const char *operation, int result) {
    printf("%s = %d\\n", operation, result);
}`,
      expectedOutput: `Add = 23
Multiply = 120
(3*4) + (5*6) = 42`,
      explanation: '프로토타입은 함수가 main 아래에 정의되어도 컴파일러가 알 수 있게 합니다.',
      explanationEn: 'Prototypes let the compiler know about functions defined after main.'
    },
    {
      id: 's9e3',
      title: '값에 의한 호출',
      titleEn: 'Call by Value',
      description: 'C 함수는 기본적으로 값을 복사하여 전달합니다.',
      descriptionEn: 'C functions pass arguments by copying values.',
      code: `#include <stdio.h>

void tryToModify(int x) {
    x = 999; // only modifies local copy
    printf("Inside function: x = %d\\n", x);
}

void badSwap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    printf("Inside badSwap: a=%d, b=%d\\n", a, b);
}

int main() {
    int num = 42;
    printf("Before: num = %d\\n", num);
    tryToModify(num);
    printf("After: num = %d (unchanged!)\\n", num);

    printf("\\n--- Bad Swap ---\\n");
    int x = 10, y = 20;
    printf("Before: x=%d, y=%d\\n", x, y);
    badSwap(x, y);
    printf("After: x=%d, y=%d (unchanged!)\\n", x, y);

    // To modify, use pointers (covered in Step 10)
    printf("\\n(Pointers are needed to modify original values)\\n");

    return 0;
}`,
      expectedOutput: `Before: num = 42
Inside function: x = 999
After: num = 42 (unchanged!)

--- Bad Swap ---
Before: x=10, y=20
Inside badSwap: a=20, b=10
After: x=10, y=20 (unchanged!)

(Pointers are needed to modify original values)`,
      explanation: 'C는 값에 의한 호출(call by value)입니다. 함수 안에서 매개변수를 바꿔도 원본은 변하지 않습니다.',
      explanationEn: 'C uses call by value. Modifying parameters inside a function does not change the originals.'
    },
    {
      id: 's9e4',
      title: '배열 매개변수',
      titleEn: 'Array Parameters',
      description: '함수에 배열을 전달하는 방법입니다.',
      descriptionEn: 'How to pass arrays to functions.',
      code: `#include <stdio.h>

void printArray(const int arr[], int n) {
    printf("[");
    for (int i = 0; i < n; i++) {
        printf("%d%s", arr[i], i < n - 1 ? ", " : "");
    }
    printf("]\\n");
}

int sum(const int arr[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += arr[i];
    return total;
}

int max(const int arr[], int n) {
    int m = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > m) m = arr[i];
    }
    return m;
}

void fillSequence(int arr[], int n, int start) {
    for (int i = 0; i < n; i++) {
        arr[i] = start + i;
    }
}

int main() {
    int data[] = {45, 23, 67, 12, 89};
    int n = 5;

    printf("Array: ");
    printArray(data, n);
    printf("Sum: %d\\n", sum(data, n));
    printf("Max: %d\\n", max(data, n));

    int seq[10];
    fillSequence(seq, 10, 1);
    printf("\\nSequence: ");
    printArray(seq, 10);

    return 0;
}`,
      expectedOutput: `Array: [45, 23, 67, 12, 89]
Sum: 236
Max: 89

Sequence: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`,
      explanation: '배열은 포인터로 전달되므로 함수에서 원본을 수정할 수 있습니다. const로 읽기 전용으로 만들 수 있습니다.',
      explanationEn: 'Arrays are passed as pointers, allowing modification. Use const for read-only access.'
    },
    {
      id: 's9e5',
      title: '재귀 함수',
      titleEn: 'Recursive Functions',
      description: '자기 자신을 호출하는 재귀 함수입니다.',
      descriptionEn: 'Functions that call themselves.',
      code: `#include <stdio.h>

// Factorial: n! = n * (n-1)!
long long factorial(int n) {
    if (n <= 1) return 1;      // base case
    return n * factorial(n - 1); // recursive case
}

// Fibonacci
int fibonacci(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Power: base^exp
double power(double base, int exp) {
    if (exp == 0) return 1.0;
    if (exp < 0) return 1.0 / power(base, -exp);
    return base * power(base, exp - 1);
}

int main() {
    // Factorial
    for (int i = 0; i <= 10; i++) {
        printf("%2d! = %lld\\n", i, factorial(i));
    }

    // Fibonacci
    printf("\\nFibonacci: ");
    for (int i = 0; i < 10; i++) {
        printf("%d ", fibonacci(i));
    }
    printf("\\n");

    // Power
    printf("\\n2^10 = %.0f\\n", power(2, 10));
    printf("3^-2 = %.4f\\n", power(3, -2));

    return 0;
}`,
      expectedOutput: ` 0! = 1
 1! = 1
 2! = 2
 3! = 6
 4! = 24
 5! = 120
 6! = 720
 7! = 5040
 8! = 40320
 9! = 362880
10! = 3628800

Fibonacci: 0 1 1 2 3 5 8 13 21 34

2^10 = 1024
3^-2 = 0.1111`,
      explanation: '재귀 함수에는 반드시 기저 조건(base case)이 필요합니다. 없으면 무한 재귀가 발생합니다.',
      explanationEn: 'Recursive functions must have a base case. Without one, infinite recursion occurs.'
    },
    {
      id: 's9e6',
      title: '유틸리티 함수 라이브러리',
      titleEn: 'Utility Function Library',
      description: '실용적인 유틸리티 함수 모음입니다.',
      descriptionEn: 'Collection of practical utility functions.',
      code: `#include <stdio.h>

int absVal(int n) {
    return (n >= 0) ? n : -n;
}

int clamp(int value, int min, int max) {
    if (value < min) return min;
    if (value > max) return max;
    return value;
}

int isPrime(int n) {
    if (n < 2) return 0;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}

int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    printf("abs(-15) = %d\\n", absVal(-15));
    printf("abs(7) = %d\\n", absVal(7));

    printf("\\nclamp(150, 0, 100) = %d\\n", clamp(150, 0, 100));
    printf("clamp(-5, 0, 100) = %d\\n", clamp(-5, 0, 100));
    printf("clamp(50, 0, 100) = %d\\n", clamp(50, 0, 100));

    printf("\\nPrimes up to 30: ");
    for (int i = 2; i <= 30; i++) {
        if (isPrime(i)) printf("%d ", i);
    }
    printf("\\n");

    printf("\\ngcd(48, 18) = %d\\n", gcd(48, 18));
    printf("gcd(100, 75) = %d\\n", gcd(100, 75));

    return 0;
}`,
      expectedOutput: `abs(-15) = 15
abs(7) = 7

clamp(150, 0, 100) = 100
clamp(-5, 0, 100) = 0
clamp(50, 0, 100) = 50

Primes up to 30: 2 3 5 7 11 13 17 19 23 29

gcd(48, 18) = 6
gcd(100, 75) = 25`,
      explanation: '자주 사용되는 로직을 함수로 만들면 재사용성이 높아집니다. gcd는 유클리드 호제법입니다.',
      explanationEn: 'Creating functions for common logic improves reusability. gcd uses the Euclidean algorithm.'
    },
    {
      id: 's9e7',
      title: 'static 지역 변수',
      titleEn: 'Static Local Variables',
      description: '함수 호출 간에 값을 유지하는 static 변수입니다.',
      descriptionEn: 'Static variables that persist between function calls.',
      code: `#include <stdio.h>

int counter() {
    static int count = 0; // initialized only once
    count++;
    return count;
}

int runningSum(int value) {
    static int sum = 0;
    sum += value;
    return sum;
}

void printCallInfo() {
    static int callNum = 0;
    callNum++;
    printf("Call #%d\\n", callNum);
}

int main() {
    // Counter persists between calls
    printf("Counter: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", counter());
    }
    printf("\\n");

    // Running sum
    int values[] = {10, 20, 30, 40, 50};
    printf("\\nRunning sum:\\n");
    for (int i = 0; i < 5; i++) {
        printf("  Add %d -> sum = %d\\n", values[i], runningSum(values[i]));
    }

    // Call tracking
    printf("\\n");
    printCallInfo();
    printCallInfo();
    printCallInfo();

    return 0;
}`,
      expectedOutput: `Counter: 1 2 3 4 5

Running sum:
  Add 10 -> sum = 10
  Add 20 -> sum = 30
  Add 30 -> sum = 60
  Add 40 -> sum = 100
  Add 50 -> sum = 150

Call #1
Call #2
Call #3`,
      explanation: 'static 지역 변수는 함수가 끝나도 값이 유지됩니다. 초기화는 한 번만 실행됩니다.',
      explanationEn: 'Static local variables retain their value after function returns. Initialization runs only once.'
    },
    {
      id: 's9e8',
      title: '함수로 구조화된 프로그램',
      titleEn: 'Program Structured with Functions',
      description: '함수로 프로그램을 깔끔하게 구조화합니다.',
      descriptionEn: 'Structure a program cleanly with functions.',
      code: `#include <stdio.h>

// --- Function declarations ---
void printHeader(const char *title);
void printScores(const int scores[], int n);
double calcAverage(const int scores[], int n);
int findMax(const int scores[], int n);
int findMin(const int scores[], int n);
char getGrade(double avg);

int main() {
    int scores[] = {85, 92, 78, 95, 88, 73, 96};
    int n = sizeof(scores) / sizeof(scores[0]);

    printHeader("Student Score Report");
    printScores(scores, n);

    double avg = calcAverage(scores, n);
    printf("\\nAverage: %.1f\\n", avg);
    printf("Highest: %d\\n", findMax(scores, n));
    printf("Lowest:  %d\\n", findMin(scores, n));
    printf("Grade:   %c\\n", getGrade(avg));

    return 0;
}

void printHeader(const char *title) {
    printf("=== %s ===\\n", title);
}

void printScores(const int scores[], int n) {
    printf("Scores: ");
    for (int i = 0; i < n; i++) printf("%d ", scores[i]);
    printf("\\n");
}

double calcAverage(const int scores[], int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) sum += scores[i];
    return (double)sum / n;
}

int findMax(const int scores[], int n) {
    int m = scores[0];
    for (int i = 1; i < n; i++) if (scores[i] > m) m = scores[i];
    return m;
}

int findMin(const int scores[], int n) {
    int m = scores[0];
    for (int i = 1; i < n; i++) if (scores[i] < m) m = scores[i];
    return m;
}

char getGrade(double avg) {
    if (avg >= 90) return 'A';
    if (avg >= 80) return 'B';
    if (avg >= 70) return 'C';
    if (avg >= 60) return 'D';
    return 'F';
}`,
      expectedOutput: `=== Student Score Report ===
Scores: 85 92 78 95 88 73 96

Average: 86.7
Highest: 96
Lowest:  73
Grade:   B`,
      explanation: '함수로 프로그램을 분리하면 코드가 읽기 쉽고 재사용/테스트하기 좋습니다.',
      explanationEn: 'Separating code into functions improves readability, reusability, and testability.'
    }
  ]
}

export default step9
