import{u as t,j as e,L as i}from"./index-g4r355D9.js";import{C as s}from"./CodeEditor-o9Hj8UTm.js";function l(){const{t:d,lang:n}=t();return e.jsx("div",{className:"c-lesson-page",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-week",children:"Step 3"}),e.jsx("h1",{children:n==="en"?"Operators & Expressions":"연산자와 표현식"}),e.jsx("p",{className:"lesson-subtitle",children:n==="en"?"Master arithmetic, relational, logical, assignment operators and type casting in C":"산술, 관계, 논리, 대입 연산자와 형변환을 마스터합니다"})]}),e.jsxs("div",{className:"lesson-content",children:[e.jsxs("section",{className:"lesson-section",children:[e.jsxs("h2",{children:[e.jsx("i",{className:"fa-solid fa-calculator"})," ",n==="en"?"Arithmetic Operators":"산술 연산자"]}),e.jsx("p",{children:n==="en"?"Arithmetic operators perform mathematical operations. C supports addition, subtraction, multiplication, division, modulus, and increment/decrement operations.":"산술 연산자는 수학적 연산을 수행합니다. C언어는 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지, 증감 연산을 지원합니다."}),e.jsxs("table",{className:"c-lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:n==="en"?"Operator":"연산자"}),e.jsx("th",{children:n==="en"?"Name":"이름"}),e.jsx("th",{children:n==="en"?"Example":"예시"}),e.jsx("th",{children:n==="en"?"Result":"결과"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"+"})}),e.jsx("td",{children:n==="en"?"Addition":"덧셈"}),e.jsx("td",{children:"10 + 3"}),e.jsx("td",{children:"13"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"-"})}),e.jsx("td",{children:n==="en"?"Subtraction":"뺄셈"}),e.jsx("td",{children:"10 - 3"}),e.jsx("td",{children:"7"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"*"})}),e.jsx("td",{children:n==="en"?"Multiplication":"곱셈"}),e.jsx("td",{children:"10 * 3"}),e.jsx("td",{children:"30"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"/"})}),e.jsx("td",{children:n==="en"?"Division":"나눗셈"}),e.jsx("td",{children:"10 / 3"}),e.jsx("td",{children:"3"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"%"})}),e.jsx("td",{children:n==="en"?"Modulus":"나머지"}),e.jsx("td",{children:"10 % 3"}),e.jsx("td",{children:"1"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"++"})}),e.jsx("td",{children:n==="en"?"Increment":"증가"}),e.jsx("td",{children:"a++"}),e.jsx("td",{children:"a + 1"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--"})}),e.jsx("td",{children:n==="en"?"Decrement":"감소"}),e.jsx("td",{children:"a--"}),e.jsx("td",{children:"a - 1"})]})]})]}),e.jsx(s,{initialCode:`#include <stdio.h>

int main() {
    int a = 17, b = 5;
    printf("a = %d, b = %d\\n\\n", a, b);

    // 기본 산술 연산 (Basic arithmetic)
    printf("=== 기본 산술 연산 ===\\n");
    printf("a + b = %d\\n", a + b);   // 덧셈: 22
    printf("a - b = %d\\n", a - b);   // 뺄셈: 12
    printf("a * b = %d\\n", a * b);   // 곱셈: 85
    printf("a / b = %d\\n", a / b);   // 정수 나눗셈: 3
    printf("a %% b = %d\\n", a % b);  // 나머지: 2

    printf("\\n");

    // 정수 나눗셈 vs 실수 나눗셈
    printf("=== 정수 vs 실수 나눗셈 ===\\n");
    printf("정수: 17 / 5 = %d\\n", 17 / 5);
    printf("실수: 17.0 / 5 = %.2f\\n", 17.0 / 5);

    printf("\\n");

    // 증감 연산자 (Increment/Decrement)
    printf("=== 증감 연산자 ===\\n");
    int x = 10;
    printf("x = %d\\n", x);
    printf("x++ = %d (후위: 사용 후 증가)\\n", x++);
    printf("x = %d\\n", x);
    printf("++x = %d (전위: 증가 후 사용)\\n", ++x);
    printf("x = %d\\n", x);

    return 0;
}`,expectedOutput:"a + b = 22",lessonId:"c-lesson-03-arithmetic"}),e.jsxs("div",{className:"c-lesson-warning",children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation"}),e.jsx("p",{children:n==="en"?"Important: When both operands are integers, division truncates the decimal part. To get a floating-point result, at least one operand must be a float or double.":"주의: 두 피연산자가 모두 정수일 때 나눗셈은 소수점 이하를 버립니다. 실수 결과를 얻으려면 피연산자 중 하나 이상이 float이나 double이어야 합니다."})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsxs("h2",{children:[e.jsx("i",{className:"fa-solid fa-scale-balanced"})," ",n==="en"?"Relational & Logical Operators":"관계/논리 연산자"]}),e.jsx("p",{children:n==="en"?"Relational operators compare two values and return 1 (true) or 0 (false). Logical operators combine or invert boolean conditions.":"관계 연산자는 두 값을 비교하여 1(참) 또는 0(거짓)을 반환합니다. 논리 연산자는 불리언 조건을 결합하거나 반전시킵니다."}),e.jsxs("table",{className:"c-lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:n==="en"?"Operator":"연산자"}),e.jsx("th",{children:n==="en"?"Meaning":"의미"}),e.jsx("th",{children:n==="en"?"Example":"예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"=="})}),e.jsx("td",{children:n==="en"?"Equal to":"같음"}),e.jsx("td",{children:"a == b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"!="})}),e.jsx("td",{children:n==="en"?"Not equal to":"같지 않음"}),e.jsx("td",{children:"a != b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:">"})}),e.jsx("td",{children:n==="en"?"Greater than":"보다 큼"}),e.jsx("td",{children:"a > b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<"})}),e.jsx("td",{children:n==="en"?"Less than":"보다 작음"}),e.jsx("td",{children:"a < b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"&&"})}),e.jsx("td",{children:n==="en"?"Logical AND":"논리 AND"}),e.jsx("td",{children:"a && b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"||"})}),e.jsx("td",{children:n==="en"?"Logical OR":"논리 OR"}),e.jsx("td",{children:"a || b"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"!"})}),e.jsx("td",{children:n==="en"?"Logical NOT":"논리 NOT"}),e.jsx("td",{children:"!a"})]})]})]}),e.jsx(s,{initialCode:`#include <stdio.h>

int main() {
    int a = 10, b = 20;
    printf("a = %d, b = %d\\n\\n", a, b);

    // 관계 연산자 (Relational operators)
    printf("=== 관계 연산자 ===\\n");
    printf("a == b : %d (거짓)\\n", a == b);
    printf("a != b : %d (참)\\n", a != b);
    printf("a > b  : %d (거짓)\\n", a > b);
    printf("a < b  : %d (참)\\n", a < b);
    printf("a >= 10: %d (참)\\n", a >= 10);
    printf("a <= 5 : %d (거짓)\\n", a <= 5);

    printf("\\n");

    // 논리 연산자 (Logical operators)
    printf("=== 논리 연산자 ===\\n");
    int x = 1, y = 0;  // 1=참(true), 0=거짓(false)
    printf("%d AND %d = %d\\n", x, y, x && y);
    printf("%d OR  %d = %d\\n", x, y, x || y);
    printf("NOT %d   = %d\\n", x, !x);
    printf("NOT %d   = %d\\n", y, !y);

    printf("\\n");

    // 복합 조건 (Combined conditions)
    int age = 25;
    int hasLicense = 1;
    printf("나이: %d, 면허: %s\\n", age, hasLicense ? "있음" : "없음");
    printf("운전 가능: %s\\n",
           (age >= 18 && hasLicense) ? "예" : "아니오");

    return 0;
}`,expectedOutput:"a == b : 0 (거짓)",lessonId:"c-lesson-03-relational"})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsxs("h2",{children:[e.jsx("i",{className:"fa-solid fa-equals"})," ",n==="en"?"Assignment Operators":"대입 연산자"]}),e.jsx("p",{children:n==="en"?"Assignment operators combine an arithmetic operation with assignment. They provide a shorthand way to update a variable's value.":"대입 연산자는 산술 연산과 대입을 결합합니다. 변수의 값을 간결하게 업데이트하는 방법을 제공합니다."}),e.jsxs("table",{className:"c-lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:n==="en"?"Operator":"연산자"}),e.jsx("th",{children:n==="en"?"Example":"예시"}),e.jsx("th",{children:n==="en"?"Equivalent":"동등한 표현"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"="})}),e.jsx("td",{children:"a = 10"}),e.jsx("td",{children:"a = 10"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"+="})}),e.jsx("td",{children:"a += 5"}),e.jsx("td",{children:"a = a + 5"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"-="})}),e.jsx("td",{children:"a -= 3"}),e.jsx("td",{children:"a = a - 3"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"*="})}),e.jsx("td",{children:"a *= 2"}),e.jsx("td",{children:"a = a * 2"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"/="})}),e.jsx("td",{children:"a /= 4"}),e.jsx("td",{children:"a = a / 4"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"%="})}),e.jsx("td",{children:"a %= 3"}),e.jsx("td",{children:"a = a % 3"})]})]})]}),e.jsx(s,{initialCode:`#include <stdio.h>

int main() {
    int a = 100;
    printf("초기값: a = %d\\n\\n", a);

    a += 50;   // a = a + 50
    printf("a += 50  ->  a = %d\\n", a);   // 150

    a -= 30;   // a = a - 30
    printf("a -= 30  ->  a = %d\\n", a);   // 120

    a *= 2;    // a = a * 2
    printf("a *= 2   ->  a = %d\\n", a);   // 240

    a /= 4;    // a = a / 4
    printf("a /= 4   ->  a = %d\\n", a);   // 60

    a %= 7;    // a = a % 7
    printf("a %%= 7   ->  a = %d\\n", a);  // 4

    return 0;
}`,expectedOutput:"초기값: a = 100",lessonId:"c-lesson-03-assignment"})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsxs("h2",{children:[e.jsx("i",{className:"fa-solid fa-right-left"})," ",n==="en"?"Type Casting":"형변환"]}),e.jsx("p",{children:n==="en"?"Type casting converts a value from one data type to another. C supports both implicit (automatic) and explicit (manual) type casting.":"형변환은 값을 한 자료형에서 다른 자료형으로 변환합니다. C에서는 암시적(자동) 형변환과 명시적(수동) 형변환을 모두 지원합니다."}),e.jsx(s,{initialCode:`#include <stdio.h>

int main() {
    // 암시적 형변환 (Implicit type casting)
    printf("=== 암시적 형변환 ===\\n");
    int i = 10;
    float f = i;           // int -> float (자동 변환)
    double d = f;          // float -> double (자동 변환)
    printf("int %d -> float %.1f -> double %.1f\\n\\n", i, f, d);

    // 정수 나눗셈 문제 (Integer division problem)
    int a = 7, b = 2;
    printf("7 / 2 = %d (정수 나눗셈 - 소수 버림)\\n", a / b);
    printf("7 / 2 = %.1f (한쪽이 실수면 자동 변환)\\n\\n", 7.0 / 2);

    // 명시적 형변환 (Explicit type casting)
    printf("=== 명시적 형변환 ===\\n");
    int x = 7, y = 2;
    float result = (float)x / y;  // (float) 캐스팅
    printf("(float)%d / %d = %.2f\\n", x, y, result);

    // double -> int (소수점 이하 버림, 반올림 아님!)
    double pi = 3.14159;
    int truncated = (int)pi;
    printf("(int)%.5f = %d (잘림!)\\n", pi, truncated);

    // char -> int (ASCII 값)
    char ch = 'A';
    int ascii = (int)ch;
    printf("(int)'%c' = %d (ASCII)\\n", ch, ascii);

    // int -> char
    int num = 66;
    char letter = (char)num;
    printf("(char)%d = '%c'\\n", num, letter);

    return 0;
}`,expectedOutput:"int 10 -> float 10.0 -> double 10.0",lessonId:"c-lesson-03-casting"}),e.jsxs("div",{className:"c-lesson-warning",children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation"}),e.jsx("p",{children:n==="en"?"Warning: When converting from a larger type to a smaller type (e.g., double to int), you may lose data. The decimal part is truncated, not rounded.":"주의: 큰 자료형에서 작은 자료형으로 변환할 때 (예: double에서 int) 데이터가 손실될 수 있습니다. 소수점 이하는 반올림이 아닌 버림으로 처리됩니다."})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsxs("h2",{children:[e.jsx("i",{className:"fa-solid fa-sort-numeric-up"})," ",n==="en"?"Operator Precedence":"연산자 우선순위"]}),e.jsx("p",{children:n==="en"?"When an expression contains multiple operators, C follows a specific order of precedence. It's always a good practice to use parentheses to make your intentions clear.":"표현식에 여러 연산자가 포함되어 있을 때, C는 특정 우선순위를 따릅니다. 의도를 명확히 하기 위해 항상 괄호를 사용하는 것이 좋은 습관입니다."}),e.jsxs("div",{className:"c-lesson-info-box",children:[e.jsx("h3",{children:n==="en"?"Precedence (high to low)":"우선순위 (높은 것부터 낮은 것)"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"( )"})," - ",n==="en"?"Parentheses":"괄호"]}),e.jsxs("li",{children:[e.jsx("code",{children:"++ -- ! (type)"})," - ",n==="en"?"Unary operators, type cast":"단항 연산자, 형변환"]}),e.jsxs("li",{children:[e.jsx("code",{children:"* / %"})," - ",n==="en"?"Multiplication, Division, Modulus":"곱셈, 나눗셈, 나머지"]}),e.jsxs("li",{children:[e.jsx("code",{children:"+ -"})," - ",n==="en"?"Addition, Subtraction":"덧셈, 뺄셈"]}),e.jsxs("li",{children:[e.jsx("code",{children:"< > <= >="})," - ",n==="en"?"Relational":"관계 연산자"]}),e.jsxs("li",{children:[e.jsx("code",{children:"== !="})," - ",n==="en"?"Equality":"등호 연산자"]}),e.jsxs("li",{children:[e.jsx("code",{children:"&&"})," - ",n==="en"?"Logical AND":"논리 AND"]}),e.jsxs("li",{children:[e.jsx("code",{children:"||"})," - ",n==="en"?"Logical OR":"논리 OR"]}),e.jsxs("li",{children:[e.jsx("code",{children:"= += -= *= /= %="})," - ",n==="en"?"Assignment":"대입 연산자"]})]})]}),e.jsxs("div",{className:"c-lesson-tip",children:[e.jsx("i",{className:"fa-solid fa-lightbulb"}),e.jsx("p",{children:n==="en"?"Tip: When in doubt, use parentheses! It makes your code clearer and prevents unexpected behavior.":"팁: 확실하지 않을 때는 괄호를 사용하세요! 코드를 더 명확하게 만들고 예상치 못한 동작을 방지합니다."})]})]})]}),e.jsxs("div",{className:"c-lesson-nav-bottom",children:[e.jsxs(i,{to:"/c-learning/02",className:"c-lesson-nav-btn prev",children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",n==="en"?"Prev: Variables & Data Types":"이전: 변수와 자료형"]}),e.jsxs(i,{to:"/c-learning/04",className:"c-lesson-nav-btn next",children:[n==="en"?"Next: Control Flow - Conditionals":"다음: 제어문 - 조건문"," ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})})}export{l as default};
