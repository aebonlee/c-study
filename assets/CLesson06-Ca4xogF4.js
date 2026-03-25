import{u as r,j as n,L as t}from"./index-DDobmuBI.js";import{C as e}from"./CodeEditor-C_GHahwa.js";function l(){const{t:s,lang:i}=r();return n.jsx("div",{className:"c-lesson-page",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"lesson-header",children:[n.jsx("span",{className:"lesson-week",children:"Step 6"}),n.jsx("h1",{children:i==="en"?"Functions":"함수"}),n.jsx("p",{className:"lesson-subtitle",children:i==="en"?"Learn function definition, parameters, return values, prototypes, and recursion":"함수 정의, 매개변수, 반환값, 프로토타입, 재귀 함수를 배웁니다"})]}),n.jsxs("div",{className:"lesson-content",children:[n.jsxs("section",{className:"lesson-section",children:[n.jsxs("h2",{children:[n.jsx("i",{className:"fa-solid fa-cubes"})," ",i==="en"?"Function Definition & Calling":"함수 정의와 호출"]}),n.jsx("p",{children:i==="en"?"A function is a reusable block of code that performs a specific task. Functions help organize code, reduce repetition, and make programs easier to understand and maintain.":"함수는 특정 작업을 수행하는 재사용 가능한 코드 블록입니다. 함수는 코드를 구조화하고, 반복을 줄이며, 프로그램을 더 이해하기 쉽고 유지보수하기 쉽게 만듭니다."}),n.jsxs("div",{className:"c-lesson-info-box",children:[n.jsxs("h3",{children:[n.jsx("i",{className:"fa-solid fa-code"})," ",i==="en"?"Syntax":"함수 문법 구조"]}),n.jsx("pre",{children:`반환형 함수이름(매개변수들) {
    // 함수 본문
    return 반환값;
}

// 예: int add(int a, int b) { return a + b; }`})]}),n.jsx(e,{initialCode:`#include <stdio.h>

// 1. 반환값/매개변수 없는 함수 (No return, no parameters)
void greet() {
    printf("안녕하세요! C언어 함수를 배우고 있습니다.\\n");
}

// 2. 매개변수가 있는 함수 (With parameters)
void printLine(char ch, int length) {
    for (int i = 0; i < length; i++) {
        printf("%c", ch);
    }
    printf("\\n");
}

// 3. 반환값이 있는 함수 (With return value)
int add(int a, int b) {
    return a + b;
}

// 4. 두 수 중 큰 값 반환 (Return the larger value)
int max(int a, int b) {
    return (a > b) ? a : b;
}

int main() {
    // 함수 호출 (Function calls)
    greet();
    printf("\\n");

    printLine('=', 30);

    int result = add(15, 27);
    printf("15 + 27 = %d\\n", result);

    printf("max(10, 25) = %d\\n", max(10, 25));
    printf("max(99, 42) = %d\\n", max(99, 42));

    printLine('-', 30);

    // 반환값을 직접 사용 (Using return value directly)
    printf("add(3,4) + add(5,6) = %d\\n", add(3, 4) + add(5, 6));

    return 0;
}`,expectedOutput:"15 + 27 = 42",lessonId:"c-lesson-06-basic"})]}),n.jsxs("section",{className:"lesson-section",children:[n.jsxs("h2",{children:[n.jsx("i",{className:"fa-solid fa-arrow-right-arrow-left"})," ",i==="en"?"Parameters & Return Values":"매개변수와 반환값"]}),n.jsx("p",{children:i==="en"?"In C, arguments are passed by value by default. This means the function receives a copy of the argument, not the original variable. Changes to the parameter inside the function do not affect the original.":"C에서 인수는 기본적으로 값에 의한 전달(pass by value)됩니다. 함수는 원래 변수가 아닌 인수의 복사본을 받습니다. 함수 내에서 매개변수를 변경해도 원본에는 영향을 주지 않습니다."}),n.jsx(e,{initialCode:`#include <stdio.h>

// 원의 넓이 계산 (Calculate circle area)
double circleArea(double radius) {
    const double PI = 3.14159265358979;
    return PI * radius * radius;
}

// 거듭제곱 계산 (Power calculation)
long power(int base, int exp) {
    long result = 1;
    for (int i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

// 값에 의한 전달 확인 (Pass by value demonstration)
void tryToModify(int num) {
    printf("  함수 내부 (수정 전): num = %d\\n", num);
    num = 999;
    printf("  함수 내부 (수정 후): num = %d\\n", num);
}

// 평균 계산 (Average of 3 numbers)
double average3(double a, double b, double c) {
    return (a + b + c) / 3.0;
}

int main() {
    // 원의 넓이 (Circle area)
    printf("=== 원의 넓이 ===\\n");
    double r = 5.0;
    printf("반지름 %.1f -> 넓이: %.2f\\n\\n", r, circleArea(r));

    // 거듭제곱 (Power)
    printf("=== 거듭제곱 ===\\n");
    printf("2^10 = %ld\\n", power(2, 10));
    printf("3^5  = %ld\\n", power(3, 5));
    printf("5^3  = %ld\\n\\n", power(5, 3));

    // 값에 의한 전달 (Pass by value)
    printf("=== 값에 의한 전달 ===\\n");
    int original = 42;
    printf("호출 전: original = %d\\n", original);
    tryToModify(original);
    printf("호출 후: original = %d (변경 안 됨!)\\n\\n", original);

    // 평균 (Average)
    printf("=== 평균 계산 ===\\n");
    printf("average(80, 90, 85) = %.1f\\n", average3(80, 90, 85));

    return 0;
}`,expectedOutput:"2^10 = 1024",lessonId:"c-lesson-06-params"}),n.jsxs("div",{className:"c-lesson-tip",children:[n.jsx("i",{className:"fa-solid fa-lightbulb"}),n.jsx("p",{children:i==="en"?"Notice that the original variable was NOT modified even though we changed the parameter inside the function. To modify the original, you need pointers (covered in a later lesson).":"함수 내부에서 매개변수를 변경했지만 원래 변수는 수정되지 않았습니다. 원본을 수정하려면 포인터가 필요합니다 (후속 강의에서 다룹니다)."})]})]}),n.jsxs("section",{className:"lesson-section",children:[n.jsxs("h2",{children:[n.jsx("i",{className:"fa-solid fa-file-signature"})," ",i==="en"?"Function Prototypes":"함수 프로토타입"]}),n.jsx("p",{children:i==="en"?"A function prototype (or forward declaration) tells the compiler about a function before its actual definition. This allows you to define functions after main() while still being able to call them.":"함수 프로토타입(또는 전방 선언)은 실제 정의 전에 컴파일러에게 함수에 대해 알려줍니다. 이를 통해 main() 뒤에 함수를 정의하면서도 호출할 수 있습니다."}),n.jsx(e,{initialCode:`#include <stdio.h>

// 함수 프로토타입 선언 (Function prototypes)
// main() 전에 선언하고, 정의는 아래에서!
int factorial(int n);
int isPrime(int n);
void printStars(int count);

int main() {
    // 프로토타입 덕분에 아래 정의된 함수를 호출 가능
    printf("=== 팩토리얼 ===\\n");
    for (int i = 1; i <= 8; i++) {
        printf("%d! = %d\\n", i, factorial(i));
    }

    printf("\\n=== 소수 판별 (2~20) ===\\n");
    for (int i = 2; i <= 20; i++) {
        if (isPrime(i)) {
            printf("%d ", i);
        }
    }
    printf("\\n");

    printf("\\n=== 막대 그래프 ===\\n");
    int data[] = {3, 7, 5, 9, 2};
    for (int i = 0; i < 5; i++) {
        printf("데이터 %d: ", i + 1);
        printStars(data[i]);
    }

    return 0;
}

// 함수 정의 (Function definitions below main)

int factorial(int n) {
    int result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

int isPrime(int n) {
    if (n < 2) return 0;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}

void printStars(int count) {
    for (int i = 0; i < count; i++) {
        printf("*");
    }
    printf(" (%d)\\n", count);
}`,expectedOutput:"1! = 1\\n2! = 2\\n3! = 6",lessonId:"c-lesson-06-prototype"}),n.jsxs("div",{className:"c-lesson-info-box",children:[n.jsxs("h3",{children:[n.jsx("i",{className:"fa-solid fa-circle-info"})," ",i==="en"?"Why Use Prototypes?":"프로토타입을 왜 사용할까?"]}),n.jsxs("ul",{children:[n.jsx("li",{children:i==="en"?"Allows main() to be at the top of the file for readability":"main()을 파일 상단에 배치하여 가독성 향상"}),n.jsx("li",{children:i==="en"?"Enables functions to call each other regardless of definition order":"정의 순서에 관계없이 함수가 서로 호출 가능"}),n.jsx("li",{children:i==="en"?"Header files (.h) are essentially collections of prototypes":"헤더 파일(.h)은 본질적으로 프로토타입의 모음"}),n.jsx("li",{children:i==="en"?"The compiler can check argument types before seeing the full definition":"컴파일러가 전체 정의를 보기 전에 인수 타입을 검사 가능"})]})]})]}),n.jsxs("section",{className:"lesson-section",children:[n.jsxs("h2",{children:[n.jsx("i",{className:"fa-solid fa-arrows-spin"})," ",i==="en"?"Recursive Functions":"재귀 함수"]}),n.jsx("p",{children:i==="en"?"A recursive function is a function that calls itself. Every recursive function must have a base case (stopping condition) to prevent infinite recursion.":"재귀 함수는 자기 자신을 호출하는 함수입니다. 모든 재귀 함수는 무한 재귀를 방지하기 위한 기저 조건(종료 조건)이 있어야 합니다."}),n.jsxs("div",{className:"c-lesson-warning",children:[n.jsx("i",{className:"fa-solid fa-triangle-exclamation"}),n.jsx("p",{children:i==="en"?"Every recursive function needs: 1) A base case to stop, and 2) A recursive call with a simpler input. Without a base case, you get a stack overflow!":"모든 재귀 함수에는: 1) 멈추기 위한 기저 조건, 2) 더 간단한 입력으로의 재귀 호출이 필요합니다. 기저 조건이 없으면 스택 오버플로우가 발생합니다!"})]}),n.jsx(e,{initialCode:`#include <stdio.h>

// 재귀 팩토리얼 (Recursive factorial)
long factorialRec(int n) {
    if (n <= 1) return 1;           // 기저 조건 (Base case)
    return n * factorialRec(n - 1); // 재귀 호출 (Recursive call)
}

// 피보나치 수열 (Fibonacci sequence)
int fibonacci(int n) {
    if (n <= 0) return 0;   // 기저 조건 1
    if (n == 1) return 1;   // 기저 조건 2
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 거듭제곱 - 재귀 (Power - recursive)
long powerRec(int base, int exp) {
    if (exp == 0) return 1;
    return base * powerRec(base, exp - 1);
}

// 자릿수의 합 (Sum of digits)
int digitSum(int n) {
    if (n < 10) return n;   // 한 자리면 그대로 반환
    return (n % 10) + digitSum(n / 10);
}

int main() {
    // 팩토리얼 (Factorial)
    printf("=== 재귀 팩토리얼 ===\\n");
    for (int i = 0; i <= 10; i++) {
        printf("%2d! = %ld\\n", i, factorialRec(i));
    }

    printf("\\n");

    // 피보나치 (Fibonacci)
    printf("=== 피보나치 수열 (처음 15개) ===\\n");
    for (int i = 0; i < 15; i++) {
        printf("%d ", fibonacci(i));
    }
    printf("\\n\\n");

    // 거듭제곱 (Power)
    printf("=== 재귀 거듭제곱 ===\\n");
    printf("2^8 = %ld\\n", powerRec(2, 8));
    printf("3^4 = %ld\\n\\n", powerRec(3, 4));

    // 자릿수의 합 (Sum of digits)
    printf("=== 자릿수의 합 ===\\n");
    printf("12345 -> %d\\n", digitSum(12345));
    printf("9999  -> %d\\n", digitSum(9999));

    return 0;
}`,expectedOutput:"0 1 1 2 3 5 8 13 21 34 55 89 144 233 377",lessonId:"c-lesson-06-recursion"})]}),n.jsxs("section",{className:"lesson-section",children:[n.jsxs("h2",{children:[n.jsx("i",{className:"fa-solid fa-flask"})," ",i==="en"?"Practical Example: Mini Math Library":"실습 예제: 미니 수학 라이브러리"]}),n.jsx("p",{children:i==="en"?"Let's build a collection of useful math functions to see how functions work together in a real program.":"실제 프로그램에서 함수들이 어떻게 함께 작동하는지 보기 위해 유용한 수학 함수 모음을 만들어 봅시다."}),n.jsx(e,{initialCode:`#include <stdio.h>

// --- 미니 수학 라이브러리 (Mini Math Library) ---

// 절대값 (Absolute value)
int absVal(int n) {
    return (n < 0) ? -n : n;
}

// 최대공약수 - 유클리드 호제법 (GCD)
int gcd(int a, int b) {
    a = absVal(a);
    b = absVal(b);
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 최소공배수 (LCM)
int lcm(int a, int b) {
    return absVal(a * b) / gcd(a, b);
}

// 완전수 판별 (Perfect number check)
int isPerfect(int n) {
    if (n <= 1) return 0;
    int sum = 1;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            sum += i;
            if (i != n / i) sum += n / i;
        }
    }
    return sum == n;
}

// 배열의 합 (Sum of array)
int arraySum(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
}

int main() {
    printf("=============================\\n");
    printf("  미니 수학 라이브러리 테스트\\n");
    printf("  Mini Math Library Test\\n");
    printf("=============================\\n\\n");

    // GCD & LCM
    printf("--- GCD & LCM ---\\n");
    printf("gcd(12, 18) = %d\\n", gcd(12, 18));
    printf("lcm(12, 18) = %d\\n", lcm(12, 18));
    printf("gcd(48, 36) = %d\\n", gcd(48, 36));
    printf("lcm(48, 36) = %d\\n\\n", lcm(48, 36));

    // 완전수 찾기 (Find perfect numbers)
    printf("--- Perfect Numbers (1~1000) ---\\n");
    printf("완전수: ");
    for (int i = 2; i <= 1000; i++) {
        if (isPerfect(i)) {
            printf("%d ", i);
        }
    }
    printf("\\n\\n");

    // 배열 합계와 평균 (Array sum & average)
    printf("--- Array Sum & Average ---\\n");
    int scores[] = {85, 92, 78, 95, 88};
    int n = sizeof(scores) / sizeof(scores[0]);
    int total = arraySum(scores, n);

    printf("점수: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", scores[i]);
    }
    printf("\\n총합: %d, 평균: %.1f\\n", total, (double)total / n);

    return 0;
}`,expectedOutput:"gcd(12, 18) = 6\\nlcm(12, 18) = 36",lessonId:"c-lesson-06-mathlib"})]})]}),n.jsxs("div",{className:"c-lesson-nav-bottom",children:[n.jsxs(t,{to:"/c-learning/05",className:"c-lesson-nav-btn prev",children:[n.jsx("i",{className:"fa-solid fa-arrow-left"})," ",i==="en"?"Prev: Loops":"이전: 반복문"]}),n.jsxs(t,{to:"/c-learning/07",className:"c-lesson-nav-btn next",children:[i==="en"?"Next: Advanced Pointers & Dynamic Memory":"다음: 포인터 심화와 동적 메모리"," ",n.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})})}export{l as default};
