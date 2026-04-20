import{u as a,j as e,L as i}from"./index-CZhLH7Gs.js";import{C as n}from"./CodeEditor-BkyxvMEK.js";function c(){const{t,lang:s}=a();return e.jsx("div",{className:"c-lesson-page",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-week",children:"Step 4"}),e.jsx("h1",{children:s==="en"?"Control Flow - Conditionals":"제어문 - 조건문"}),e.jsx("p",{className:"lesson-subtitle",children:s==="en"?"Learn to control program flow with if-else, switch-case, and the ternary operator":"if-else, switch-case, 삼항 연산자로 프로그램 흐름을 제어하는 법을 배웁니다"})]}),e.jsxs("div",{className:"lesson-content",children:[e.jsxs("section",{className:"lesson-section",children:[e.jsxs("h2",{children:[e.jsx("i",{className:"fa-solid fa-code-branch"})," ",s==="en"?"if, else if, else":"if, else if, else 조건문"]}),e.jsx("p",{children:s==="en"?"The if statement is the most fundamental way to make decisions in C. It allows your program to execute different blocks of code based on whether a condition is true or false.":"if문은 C에서 가장 기본적인 의사결정 방법입니다. 조건이 참인지 거짓인지에 따라 프로그램이 다른 코드 블록을 실행할 수 있게 합니다."}),e.jsxs("div",{className:"c-lesson-info-box",children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-code"})," ",s==="en"?"Syntax":"문법 구조"]}),e.jsx("pre",{children:`if (조건1) {
    // 조건1이 참일 때 실행
} else if (조건2) {
    // 조건2가 참일 때 실행
} else {
    // 모든 조건이 거짓일 때 실행
}`})]}),e.jsx(n,{initialCode:`#include <stdio.h>

int main() {
    int score = 85;
    printf("점수: %d\\n\\n", score);

    // if-else if-else로 학점 판정
    // (Grade determination using if-else if-else)
    if (score >= 90) {
        printf("학점: A (우수)\\n");
    } else if (score >= 80) {
        printf("학점: B (양호)\\n");
    } else if (score >= 70) {
        printf("학점: C (보통)\\n");
    } else if (score >= 60) {
        printf("학점: D (미흡)\\n");
    } else {
        printf("학점: F (불합격)\\n");
    }

    printf("\\n");

    // 중첩 if문 (Nested if)
    int age = 20;
    int hasID = 1;
    printf("나이: %d, 신분증: %s\\n", age, hasID ? "있음" : "없음");

    if (age >= 18) {
        if (hasID) {
            printf("입장 가능합니다.\\n");
        } else {
            printf("신분증을 지참해 주세요.\\n");
        }
    } else {
        printf("미성년자는 입장할 수 없습니다.\\n");
    }

    return 0;
}`,expectedOutput:"학점: B (양호)",lessonId:"c-lesson-04-ifelse"})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsxs("h2",{children:[e.jsx("i",{className:"fa-solid fa-list-check"})," ",s==="en"?"switch-case Statement":"switch-case문"]}),e.jsx("p",{children:s==="en"?"The switch statement is useful when you need to compare a variable against several constant values. It can be more readable than a long chain of if-else if statements.":"switch문은 변수를 여러 상수 값과 비교해야 할 때 유용합니다. 긴 if-else if 체인보다 더 읽기 쉬울 수 있습니다."}),e.jsxs("div",{className:"c-lesson-warning",children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation"}),e.jsx("p",{children:s==="en"?`Important: Don't forget the break statement in each case! Without break, execution will "fall through" to the next case.`:'중요: 각 case에서 break문을 잊지 마세요! break가 없으면 다음 case로 "폴스루(fall through)"됩니다.'})]}),e.jsx(n,{initialCode:`#include <stdio.h>

int main() {
    // switch문으로 요일 출력 (Print day using switch)
    int day = 3;
    printf("=== 요일 출력 ===\\n");
    switch (day) {
        case 1:
            printf("월요일 (Monday)\\n");
            break;
        case 2:
            printf("화요일 (Tuesday)\\n");
            break;
        case 3:
            printf("수요일 (Wednesday)\\n");
            break;
        case 4:
            printf("목요일 (Thursday)\\n");
            break;
        case 5:
            printf("금요일 (Friday)\\n");
            break;
        case 6:
        case 7:
            printf("주말! (Weekend!)\\n");
            break;
        default:
            printf("잘못된 입력입니다.\\n");
            break;
    }

    printf("\\n");

    // 간단한 계산기 (Simple calculator)
    printf("=== 간단한 계산기 ===\\n");
    int num1 = 20, num2 = 5;
    char op = '*';

    printf("%d %c %d = ", num1, op, num2);

    switch (op) {
        case '+':
            printf("%d\\n", num1 + num2);
            break;
        case '-':
            printf("%d\\n", num1 - num2);
            break;
        case '*':
            printf("%d\\n", num1 * num2);
            break;
        case '/':
            if (num2 != 0)
                printf("%d\\n", num1 / num2);
            else
                printf("0으로 나눌 수 없습니다!\\n");
            break;
        default:
            printf("지원하지 않는 연산자입니다.\\n");
            break;
    }

    return 0;
}`,expectedOutput:"수요일 (Wednesday)",lessonId:"c-lesson-04-switch"})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsxs("h2",{children:[e.jsx("i",{className:"fa-solid fa-question"})," ",s==="en"?"Ternary Operator":"삼항 연산자"]}),e.jsx("p",{children:s==="en"?"The ternary operator (? :) provides a concise way to write simple if-else expressions. It's particularly useful for simple conditional assignments and inline decisions.":"삼항 연산자(? :)는 간단한 if-else 표현식을 간결하게 작성하는 방법을 제공합니다. 특히 간단한 조건부 대입과 인라인 결정에 유용합니다."}),e.jsxs("div",{className:"c-lesson-info-box",children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-code"})," ",s==="en"?"Syntax":"문법"]}),e.jsx("pre",{children:`조건 ? 참일_때_값 : 거짓일_때_값
condition ? value_if_true : value_if_false`})]}),e.jsx(n,{initialCode:`#include <stdio.h>

int main() {
    // 기본 삼항 연산자 (Basic ternary operator)
    int age = 20;
    const char* status = (age >= 18) ? "성인(Adult)" : "미성년자(Minor)";
    printf("나이 %d: %s\\n\\n", age, status);

    // 최대값 구하기 (Finding maximum)
    int a = 15, b = 23;
    int max = (a > b) ? a : b;
    printf("%d와 %d 중 큰 값: %d\\n\\n", a, b, max);

    // 짝수/홀수 판별 (Even/Odd check)
    printf("=== 짝수/홀수 판별 ===\\n");
    for (int i = 1; i <= 10; i++) {
        printf("%2d: %s\\n", i,
               (i % 2 == 0) ? "짝수(Even)" : "홀수(Odd)");
    }

    printf("\\n");

    // 절대값 구하기 (Absolute value)
    int num = -7;
    int abs_val = (num >= 0) ? num : -num;
    printf("%d의 절대값: %d\\n", num, abs_val);

    return 0;
}`,expectedOutput:"나이 20: 성인(Adult)",lessonId:"c-lesson-04-ternary"})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsxs("h2",{children:[e.jsx("i",{className:"fa-solid fa-flask"})," ",s==="en"?"Practical Example: BMI Calculator":"실습 예제: BMI 계산기"]}),e.jsx("p",{children:s==="en"?"Let's combine what we've learned to create a BMI (Body Mass Index) calculator that classifies the result using if-else conditions.":"배운 내용을 종합하여 if-else 조건을 사용해 결과를 분류하는 BMI(체질량지수) 계산기를 만들어 봅시다."}),e.jsx(n,{initialCode:`#include <stdio.h>

int main() {
    // BMI 계산기 (BMI Calculator)
    float weight = 70.0;  // kg
    float height = 1.75;  // m (미터)

    // BMI = 체중(kg) / 신장(m)^2
    float bmi = weight / (height * height);

    printf("=== BMI 계산기 ===\\n\\n");
    printf("체중(Weight): %.1f kg\\n", weight);
    printf("신장(Height): %.2f m\\n", height);
    printf("BMI: %.1f\\n\\n", bmi);

    // BMI 분류 (BMI Classification)
    printf("판정: ");
    if (bmi < 18.5) {
        printf("저체중 (Underweight)\\n");
    } else if (bmi < 23.0) {
        printf("정상 (Normal)\\n");
    } else if (bmi < 25.0) {
        printf("과체중 (Overweight)\\n");
    } else if (bmi < 30.0) {
        printf("비만 (Obese)\\n");
    } else {
        printf("고도비만 (Severely Obese)\\n");
    }

    // 삼항 연산자로 상태 표시
    const char* emoji =
        (bmi >= 18.5 && bmi < 23.0) ? "[Good]" : "[Check]";
    printf("상태: %s\\n", emoji);

    return 0;
}`,expectedOutput:"BMI: 22.9",lessonId:"c-lesson-04-bmi"})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsxs("h2",{children:[e.jsx("i",{className:"fa-solid fa-graduation-cap"})," ",s==="en"?"Practice: Calculator with Functions":"실습: 함수를 활용한 계산기"]}),e.jsx("p",{children:s==="en"?"Let's build a simple calculator that uses switch-case for operation selection and if-else for validation.":"switch-case를 사용한 연산 선택과 if-else를 활용한 검증을 결합한 간단한 계산기를 만들어 봅시다."}),e.jsx(n,{initialCode:`#include <stdio.h>

int main() {
    // 간단한 성적 처리 시스템
    // (Simple grade processing system)
    int scores[] = {95, 82, 76, 88, 61, 55, 93, 70};
    int count = sizeof(scores) / sizeof(scores[0]);

    int gradeA = 0, gradeB = 0, gradeC = 0;
    int gradeD = 0, gradeF = 0;
    int sum = 0;

    printf("=== 성적 처리 시스템 ===\\n\\n");

    for (int i = 0; i < count; i++) {
        int s = scores[i];
        sum += s;
        char grade;

        if (s >= 90) { grade = 'A'; gradeA++; }
        else if (s >= 80) { grade = 'B'; gradeB++; }
        else if (s >= 70) { grade = 'C'; gradeC++; }
        else if (s >= 60) { grade = 'D'; gradeD++; }
        else { grade = 'F'; gradeF++; }

        printf("학생 %d: %3d점 -> %c등급\\n", i + 1, s, grade);
    }

    printf("\\n=== 통계 ===\\n");
    printf("평균: %.1f점\\n", (float)sum / count);
    printf("A: %d명, B: %d명, C: %d명, D: %d명, F: %d명\\n",
           gradeA, gradeB, gradeC, gradeD, gradeF);
    printf("합격률: %.1f%%\\n",
           (float)(count - gradeF) / count * 100);

    return 0;
}`,lessonId:"c-lesson-04-practice"})]})]}),e.jsxs("div",{className:"c-lesson-nav-bottom",children:[e.jsxs(i,{to:"/c-learning/03",className:"c-lesson-nav-btn prev",children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",s==="en"?"Prev: Operators & Expressions":"이전: 연산자와 표현식"]}),e.jsxs(i,{to:"/c-learning/05",className:"c-lesson-nav-btn next",children:[s==="en"?"Next: Control Flow - Loops":"다음: 제어문 - 반복문"," ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})})}export{c as default};
