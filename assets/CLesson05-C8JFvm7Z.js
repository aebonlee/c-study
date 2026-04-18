import{u as t,j as n,L as s}from"./index-B4NSJIsf.js";import{C as e}from"./CodeEditor-pRpj4ZSU.js";function a(){const{t:o,lang:i}=t();return n.jsx("div",{className:"c-lesson-page",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"lesson-header",children:[n.jsx("span",{className:"lesson-week",children:"Step 5"}),n.jsx("h1",{children:i==="en"?"Control Flow - Loops":"제어문 - 반복문"}),n.jsx("p",{className:"lesson-subtitle",children:i==="en"?"Learn for, while, do-while loops, break, continue, and nested loops":"for, while, do-while 반복문, break, continue, 중첩 반복문을 배웁니다"})]}),n.jsxs("div",{className:"lesson-content",children:[n.jsxs("section",{className:"lesson-section",children:[n.jsxs("h2",{children:[n.jsx("i",{className:"fa-solid fa-repeat"})," ",i==="en"?"for Loop":"for 반복문"]}),n.jsx("p",{children:i==="en"?"The for loop is the most commonly used loop in C. It is ideal when you know exactly how many times you want to repeat a block of code.":"for 반복문은 C에서 가장 많이 사용되는 반복문입니다. 코드 블록을 몇 번 반복할지 정확히 알고 있을 때 이상적입니다."}),n.jsxs("div",{className:"c-lesson-info-box",children:[n.jsxs("h3",{children:[n.jsx("i",{className:"fa-solid fa-code"})," ",i==="en"?"Syntax":"문법 구조"]}),n.jsx("pre",{children:`for (초기화; 조건; 증감) {
    // 반복할 코드
}

// 예: for (int i = 0; i < 10; i++) { ... }`})]}),n.jsx(e,{initialCode:`#include <stdio.h>

int main() {
    // 기본 for 반복문 (Basic for loop)
    printf("=== 1부터 10까지 출력 ===\\n");
    for (int i = 1; i <= 10; i++) {
        printf("%d ", i);
    }
    printf("\\n\\n");

    // 합계 구하기 (Sum calculation)
    int sum = 0;
    for (int i = 1; i <= 100; i++) {
        sum += i;
    }
    printf("1부터 100까지의 합: %d\\n\\n", sum);

    // 역순 출력 (Countdown)
    printf("=== 카운트다운 ===\\n");
    for (int i = 10; i >= 1; i--) {
        printf("%d... ", i);
    }
    printf("발사! (Launch!)\\n\\n");

    // 2씩 증가 (Step by 2)
    printf("=== 짝수 출력 (2~20) ===\\n");
    for (int i = 2; i <= 20; i += 2) {
        printf("%d ", i);
    }
    printf("\\n");

    return 0;
}`,expectedOutput:"1부터 100까지의 합: 5050",lessonId:"c-lesson-05-for"})]}),n.jsxs("section",{className:"lesson-section",children:[n.jsxs("h2",{children:[n.jsx("i",{className:"fa-solid fa-rotate"})," ",i==="en"?"while & do-while Loops":"while, do-while 반복문"]}),n.jsx("p",{children:i==="en"?"The while loop repeats as long as a condition is true. The do-while loop is similar, but guarantees the body executes at least once because the condition is checked after the loop body.":"while 반복문은 조건이 참인 동안 반복합니다. do-while 반복문도 비슷하지만, 조건을 반복문 본문 뒤에서 검사하므로 본문이 최소 한 번은 실행됨을 보장합니다."}),n.jsx(e,{initialCode:`#include <stdio.h>

int main() {
    // while 반복문 (while loop)
    printf("=== while 반복문 ===\\n");
    int count = 1;
    while (count <= 5) {
        printf("반복 횟수: %d\\n", count);
        count++;
    }
    printf("\\n");

    // 자릿수 세기 (Counting digits using while)
    printf("=== 자릿수 세기 ===\\n");
    int number = 12345;
    int digits = 0;
    int temp = number;
    while (temp > 0) {
        digits++;
        temp /= 10;
    }
    printf("%d의 자릿수: %d\\n\\n", number, digits);

    // do-while 반복문 (do-while loop)
    printf("=== do-while: 5단 구구단 ===\\n");
    int n = 1;
    do {
        printf("%d x %d = %2d\\n", 5, n, 5 * n);
        n++;
    } while (n <= 9);
    printf("\\n");

    // while vs do-while 차이 (Key difference)
    printf("=== while vs do-while 차이 ===\\n");
    int x = 100;

    // while: 조건이 거짓이면 한 번도 실행 안 함
    printf("while (x < 10): ");
    while (x < 10) {
        printf("실행됨! ");
        x++;
    }
    printf("(실행 안 됨)\\n");

    // do-while: 최소 1번은 실행
    x = 100;
    printf("do-while (x < 10): ");
    do {
        printf("최소 1번 실행!");
        x++;
    } while (x < 10);
    printf("\\n");

    return 0;
}`,expectedOutput:"반복 횟수: 1",lessonId:"c-lesson-05-while"}),n.jsxs("div",{className:"c-lesson-info-box",children:[n.jsxs("h3",{children:[n.jsx("i",{className:"fa-solid fa-lightbulb"})," ",i==="en"?"When to use which?":"언제 어떤 것을 사용할까?"]}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"for"})," - ",i==="en"?"When the number of iterations is known":"반복 횟수를 알고 있을 때"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"while"})," - ",i==="en"?"When the number of iterations is unknown (condition-based)":"반복 횟수를 모를 때 (조건 기반)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"do-while"})," - ",i==="en"?"When the body must execute at least once (e.g., menu)":"본문이 최소 한 번은 실행되어야 할 때 (예: 메뉴)"]})]})]})]}),n.jsxs("section",{className:"lesson-section",children:[n.jsxs("h2",{children:[n.jsx("i",{className:"fa-solid fa-right-from-bracket"})," ",i==="en"?"break & continue":"break와 continue"]}),n.jsx("p",{children:i==="en"?"break exits the loop entirely, while continue skips the rest of the current iteration and moves to the next one. Both are powerful tools for controlling loop execution.":"break는 반복문을 완전히 종료하고, continue는 현재 반복의 나머지를 건너뛰고 다음 반복으로 이동합니다. 둘 다 반복문 실행을 제어하는 강력한 도구입니다."}),n.jsx(e,{initialCode:`#include <stdio.h>

int main() {
    // break 예제: 제곱이 50을 초과하면 멈추기
    printf("=== break: 특정 조건에서 멈추기 ===\\n");
    for (int i = 1; i <= 100; i++) {
        if (i * i > 50) {
            printf("\\n%d^2 = %d > 50 -> 중단!\\n", i, i * i);
            break;
        }
        printf("%d^2=%d  ", i, i * i);
    }
    printf("\\n");

    // continue 예제: 3의 배수 건너뛰기
    printf("=== continue: 3의 배수 건너뛰기 ===\\n");
    for (int i = 1; i <= 20; i++) {
        if (i % 3 == 0) {
            continue;  // 3의 배수는 건너뛰기
        }
        printf("%d ", i);
    }
    printf("\\n\\n");

    // 소수 판별 (Prime number check using break)
    printf("=== 소수 판별 (2~30) ===\\n");
    printf("소수: ");
    for (int num = 2; num <= 30; num++) {
        int isPrime = 1;
        for (int i = 2; i * i <= num; i++) {
            if (num % i == 0) {
                isPrime = 0;
                break;  // 나누어지면 소수가 아님
            }
        }
        if (isPrime) {
            printf("%d ", num);
        }
    }
    printf("\\n");

    return 0;
}`,expectedOutput:"소수: 2 3 5 7 11 13 17 19 23 29",lessonId:"c-lesson-05-break"})]}),n.jsxs("section",{className:"lesson-section",children:[n.jsxs("h2",{children:[n.jsx("i",{className:"fa-solid fa-layer-group"})," ",i==="en"?"Nested Loops":"중첩 반복문"]}),n.jsx("p",{children:i==="en"?"Nested loops are loops inside loops. They are commonly used for working with 2D patterns, tables, and multi-dimensional data processing.":"중첩 반복문은 반복문 안에 반복문이 있는 구조입니다. 2D 패턴, 표, 다차원 데이터 처리에 주로 사용됩니다."}),n.jsx(e,{initialCode:`#include <stdio.h>

int main() {
    // 구구단 출력 (Multiplication table)
    printf("=== 구구단 (2단 ~ 5단) ===\\n\\n");
    for (int i = 2; i <= 5; i++) {
        printf("[%d단]\\n", i);
        for (int j = 1; j <= 9; j++) {
            printf("  %d x %d = %2d\\n", i, j, i * j);
        }
        printf("\\n");
    }

    // 별 피라미드 (Star pyramid)
    printf("=== 별 피라미드 ===\\n");
    int rows = 5;
    for (int i = 1; i <= rows; i++) {
        // 공백 출력 (Print spaces)
        for (int j = 1; j <= rows - i; j++) {
            printf(" ");
        }
        // 별 출력 (Print stars)
        for (int j = 1; j <= 2 * i - 1; j++) {
            printf("*");
        }
        printf("\\n");
    }
    printf("\\n");

    // 역 피라미드 (Inverted pyramid)
    printf("=== 역 피라미드 ===\\n");
    for (int i = rows; i >= 1; i--) {
        for (int j = 1; j <= rows - i; j++) {
            printf(" ");
        }
        for (int j = 1; j <= 2 * i - 1; j++) {
            printf("*");
        }
        printf("\\n");
    }

    return 0;
}`,expectedOutput:"    *\\n   ***\\n  *****\\n *******\\n*********",lessonId:"c-lesson-05-nested"}),n.jsxs("div",{className:"c-lesson-warning",children:[n.jsx("i",{className:"fa-solid fa-triangle-exclamation"}),n.jsx("p",{children:i==="en"?"Performance Note: Nested loops multiply the iteration count. A loop of N inside a loop of M gives N*M total iterations. Be careful with deeply nested loops.":"성능 참고: 중첩 반복문은 반복 횟수를 곱합니다. M번 안에 N번이면 총 M*N번 반복합니다. 깊은 중첩에 주의하세요."})]})]}),n.jsxs("section",{className:"lesson-section",children:[n.jsxs("h2",{children:[n.jsx("i",{className:"fa-solid fa-flask"})," ",i==="en"?"Practical Example: Number Guessing Game":"실습 예제: 숫자 맞추기 게임"]}),n.jsx("p",{children:i==="en"?"Let's combine loops, conditionals, and break to create a simple number guessing game logic. This demonstrates how loops and control flow work together.":"반복문, 조건문, break를 결합하여 간단한 숫자 맞추기 게임 로직을 만들어 봅시다. 반복문과 제어 흐름이 어떻게 함께 작동하는지 보여줍니다."}),n.jsx(e,{initialCode:`#include <stdio.h>

int main() {
    // 숫자 맞추기 게임 시뮬레이션
    // (Number guessing game simulation)
    int secret = 42;
    int guesses[] = {25, 60, 35, 50, 42};
    int numGuesses = 5;

    printf("=============================\\n");
    printf("  숫자 맞추기 게임\\n");
    printf("  Number Guessing Game\\n");
    printf("=============================\\n\\n");
    printf("1~100 사이의 숫자를 맞춰보세요!\\n\\n");

    int found = 0;
    for (int i = 0; i < numGuesses; i++) {
        int guess = guesses[i];
        printf("[시도 %d] %d -> ", i + 1, guess);

        if (guess == secret) {
            printf("정답입니다! (Correct!)\\n");
            printf("\\n%d번 만에 맞추었습니다!\\n", i + 1);
            found = 1;
            break;
        } else if (guess < secret) {
            printf("더 큰 수입니다. (UP)\\n");
        } else {
            printf("더 작은 수입니다. (DOWN)\\n");
        }
    }

    if (!found) {
        printf("\\n모든 기회를 사용했습니다. 정답: %d\\n", secret);
    }

    return 0;
}`,expectedOutput:"[시도 1] 25 -> 더 큰 수입니다. (UP)",lessonId:"c-lesson-05-game"})]})]}),n.jsxs("div",{className:"c-lesson-nav-bottom",children:[n.jsxs(s,{to:"/c-learning/04",className:"c-lesson-nav-btn prev",children:[n.jsx("i",{className:"fa-solid fa-arrow-left"})," ",i==="en"?"Prev: Conditionals":"이전: 조건문"]}),n.jsxs(s,{to:"/c-learning/06",className:"c-lesson-nav-btn next",children:[i==="en"?"Next: Functions":"다음: 함수"," ",n.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})})}export{a as default};
