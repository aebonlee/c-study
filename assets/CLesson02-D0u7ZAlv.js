import{u as t,j as e,L as i}from"./index-1JnIhsU7.js";import{C as n}from"./CodeEditor-DGAM68dL.js";function c(){const{t:a,lang:s}=t();return e.jsx("div",{className:"c-lesson-page",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-week",children:"Week 2"}),e.jsx("h1",{children:s==="en"?"Variables & Data Types":"변수와 자료형"}),e.jsx("p",{className:"lesson-subtitle",children:s==="en"?"Learn about basic data types, variable declaration, constants, and the sizeof operator":"기본 자료형, 변수 선언, 상수, sizeof 연산자에 대해 배웁니다"})]}),e.jsxs("div",{className:"lesson-content",children:[e.jsxs("section",{className:"lesson-section",children:[e.jsxs("h2",{children:[e.jsx("i",{className:"fa-solid fa-database"})," ",s==="en"?"Basic Data Types":"기본 자료형 (int, float, double, char)"]}),e.jsx("p",{children:s==="en"?"C provides several fundamental data types for storing different kinds of values. Understanding these types is essential for writing efficient programs.":"C언어는 다양한 종류의 값을 저장하기 위한 여러 기본 자료형을 제공합니다. 이러한 자료형을 이해하는 것은 효율적인 프로그램을 작성하는 데 필수적입니다."}),e.jsxs("table",{className:"c-lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s==="en"?"Type":"자료형"}),e.jsx("th",{children:s==="en"?"Size (bytes)":"크기 (바이트)"}),e.jsx("th",{children:s==="en"?"Range":"범위"}),e.jsx("th",{children:s==="en"?"Format Specifier":"형식 지정자"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"char"})}),e.jsx("td",{children:"1"}),e.jsx("td",{children:"-128 ~ 127"}),e.jsx("td",{children:e.jsx("code",{children:"%c"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"int"})}),e.jsx("td",{children:"4"}),e.jsx("td",{children:"-2,147,483,648 ~ 2,147,483,647"}),e.jsx("td",{children:e.jsx("code",{children:"%d"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"float"})}),e.jsx("td",{children:"4"}),e.jsx("td",{children:"3.4E-38 ~ 3.4E+38"}),e.jsx("td",{children:e.jsx("code",{children:"%f"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"double"})}),e.jsx("td",{children:"8"}),e.jsx("td",{children:"1.7E-308 ~ 1.7E+308"}),e.jsx("td",{children:e.jsx("code",{children:"%lf"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"short"})}),e.jsx("td",{children:"2"}),e.jsx("td",{children:"-32,768 ~ 32,767"}),e.jsx("td",{children:e.jsx("code",{children:"%hd"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"long"})}),e.jsx("td",{children:"4/8"}),e.jsx("td",{children:s==="en"?"Platform dependent":"플랫폼에 따라 다름"}),e.jsx("td",{children:e.jsx("code",{children:"%ld"})})]})]})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsxs("h2",{children:[e.jsx("i",{className:"fa-solid fa-pen"})," ",s==="en"?"Variable Declaration & Initialization":"변수 선언과 초기화"]}),e.jsx("p",{children:s==="en"?"A variable is a named storage location in memory. You must declare a variable before using it in C. You can also initialize it at the time of declaration.":"변수는 메모리에서 이름이 붙은 저장 공간입니다. C에서는 변수를 사용하기 전에 반드시 선언해야 합니다. 선언과 동시에 초기화할 수도 있습니다."}),e.jsx(n,{initialCode:`#include <stdio.h>

int main() {
    // 변수 선언 (Variable declaration)
    int age;
    float height;
    char grade;
    double pi;

    // 변수 초기화 (Variable initialization)
    age = 20;
    height = 175.5f;
    grade = 'A';
    pi = 3.14159265358979;

    // 선언과 동시에 초기화 (Declaration with initialization)
    int score = 95;
    char initial = 'K';

    // 출력 (Output with format specifiers)
    printf("나이(Age): %d세\\n", age);
    printf("키(Height): %.1f cm\\n", height);
    printf("학점(Grade): %c\\n", grade);
    printf("원주율(Pi): %.15f\\n", pi);
    printf("점수(Score): %d점\\n", score);
    printf("이니셜(Initial): %c\\n", initial);

    return 0;
}`,expectedOutput:"나이(Age): 20세",lessonId:"c-lesson-02-variables"}),e.jsxs("div",{className:"c-lesson-info-box",children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-lightbulb"})," ",s==="en"?"Format Specifiers":"서식 지정자 정리"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"%d"})," - ",s==="en"?"Integer (int)":"정수 (int)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"%f"})," - ",s==="en"?"Float (default 6 decimal places)":"실수 (기본 소수점 6자리)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"%lf"})," - ",s==="en"?"Double (for scanf)":"double (scanf에서 사용)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"%c"})," - ",s==="en"?"Character (char)":"문자 (char)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"%s"})," - ",s==="en"?"String":"문자열"]}),e.jsxs("li",{children:[e.jsx("code",{children:"%.nf"})," - ",s==="en"?"Float with n decimal places":"소수점 n자리까지 표시"]})]})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsxs("h2",{children:[e.jsx("i",{className:"fa-solid fa-lock"})," ",s==="en"?"Constants & Literals":"상수와 리터럴"]}),e.jsx("p",{children:s==="en"?"Constants are values that cannot be changed after they are defined. C provides two ways to define constants: using the const keyword and the #define preprocessor directive.":"상수는 정의된 후 변경할 수 없는 값입니다. C에서는 상수를 정의하는 두 가지 방법이 있습니다: const 키워드와 #define 전처리 지시문입니다."}),e.jsx(n,{initialCode:`#include <stdio.h>

// #define을 사용한 상수 (Constants using #define)
#define PI 3.14159265358979
#define MAX_SIZE 100
#define GREETING "Hello, C!"

int main() {
    // const를 사용한 상수 (Constants using const)
    const int DAYS_IN_WEEK = 7;
    const float GRAVITY = 9.81f;

    // 리터럴 종류 (Types of literals)
    int decimal = 42;        // 10진수 (Decimal)
    int octal = 052;         // 8진수 (Octal) = 42
    int hex = 0x2A;          // 16진수 (Hexadecimal) = 42

    // 출력
    printf("=== #define 상수 ===\\n");
    printf("PI = %f\\n", PI);
    printf("MAX_SIZE = %d\\n", MAX_SIZE);
    printf("GREETING = %s\\n", GREETING);

    printf("\\n=== const 상수 ===\\n");
    printf("일주일 = %d일\\n", DAYS_IN_WEEK);
    printf("중력가속도 = %.2f m/s^2\\n", GRAVITY);

    printf("\\n=== 리터럴 (같은 값, 다른 표기) ===\\n");
    printf("10진수: %d\\n", decimal);
    printf("8진수(052): %d\\n", octal);
    printf("16진수(0x2A): %d\\n", hex);

    return 0;
}`,lessonId:"c-lesson-02-constants"}),e.jsxs("div",{className:"c-lesson-warning",children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation"}),e.jsx("p",{children:s==="en"?"Note: #define constants are replaced by the preprocessor before compilation (text substitution), while const variables are actual memory locations. Both prevent value changes.":"참고: #define 상수는 컴파일 전에 전처리기가 텍스트를 치환하고, const 변수는 실제 메모리 공간을 가집니다. 둘 다 값 변경을 방지합니다."})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsxs("h2",{children:[e.jsx("i",{className:"fa-solid fa-ruler"})," ",s==="en"?"sizeof Operator":"sizeof 연산자"]}),e.jsx("p",{children:s==="en"?"The sizeof operator returns the size (in bytes) of a data type or variable. This is very useful for understanding memory usage and for writing portable code.":"sizeof 연산자는 자료형이나 변수의 크기(바이트 단위)를 반환합니다. 메모리 사용량을 이해하고 이식 가능한 코드를 작성하는 데 매우 유용합니다."}),e.jsx(n,{initialCode:`#include <stdio.h>

int main() {
    // 기본 자료형의 크기 (Size of basic data types)
    printf("=== 자료형 크기 (Data Type Sizes) ===\\n\\n");
    printf("char:      %lu 바이트 (bytes)\\n", sizeof(char));
    printf("short:     %lu 바이트 (bytes)\\n", sizeof(short));
    printf("int:       %lu 바이트 (bytes)\\n", sizeof(int));
    printf("long:      %lu 바이트 (bytes)\\n", sizeof(long));
    printf("long long: %lu 바이트 (bytes)\\n", sizeof(long long));
    printf("float:     %lu 바이트 (bytes)\\n", sizeof(float));
    printf("double:    %lu 바이트 (bytes)\\n", sizeof(double));

    printf("\\n");

    // 변수의 크기 (Size of variables)
    int number = 42;
    double pi = 3.14;
    char letter = 'A';

    printf("=== 변수 크기 (Variable Sizes) ===\\n\\n");
    printf("number (int):    %lu 바이트\\n", sizeof(number));
    printf("pi (double):     %lu 바이트\\n", sizeof(pi));
    printf("letter (char):   %lu 바이트\\n", sizeof(letter));

    // unsigned 자료형 (Unsigned types)
    printf("\\n=== unsigned 자료형 ===\\n\\n");
    printf("unsigned char:  %lu 바이트 (0 ~ 255)\\n", sizeof(unsigned char));
    printf("unsigned int:   %lu 바이트 (0 ~ 4,294,967,295)\\n", sizeof(unsigned int));

    return 0;
}`,expectedOutput:"char:      1 바이트 (bytes)",lessonId:"c-lesson-02-sizeof"}),e.jsxs("div",{className:"c-lesson-tip",children:[e.jsx("i",{className:"fa-solid fa-lightbulb"}),e.jsx("p",{children:s==="en"?"Tip: The actual size of data types may vary depending on the platform and compiler. The sizeof operator always gives the correct size for the current system.":"팁: 자료형의 실제 크기는 플랫폼과 컴파일러에 따라 다를 수 있습니다. sizeof 연산자는 현재 시스템에 맞는 정확한 크기를 항상 알려줍니다."})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsxs("h2",{children:[e.jsx("i",{className:"fa-solid fa-keyboard"})," ",s==="en"?"Input with scanf":"scanf로 입력받기"]}),e.jsx("p",{children:s==="en"?"The scanf function reads formatted input from the user. Note that you must use the & (address-of) operator to pass the variable's memory address.":"scanf 함수는 사용자로부터 형식화된 입력을 읽습니다. 변수의 메모리 주소를 전달하기 위해 & (주소) 연산자를 사용해야 합니다."}),e.jsx(n,{initialCode:`#include <stdio.h>

int main() {
    int age;
    float height;
    char initial;

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("Enter your height (cm): ");
    scanf("%f", &height);

    printf("Enter your initial: ");
    scanf(" %c", &initial);  // %c 앞 공백: 남은 줄바꿈 제거

    printf("\\n=== 입력 결과 ===\\n");
    printf("나이: %d세\\n", age);
    printf("키: %.1f cm\\n", height);
    printf("이니셜: %c\\n", initial);

    return 0;
}`,lessonId:"c-lesson-02-scanf"}),e.jsxs("div",{className:"c-lesson-tip",children:[e.jsx("i",{className:"fa-solid fa-lightbulb"}),e.jsx("p",{children:s==="en"?"Tip: Always use the & (address-of) operator with scanf to pass the variable's memory address. Note the space before %c to consume any leftover newline character.":"팁: scanf에서 변수의 메모리 주소를 전달하기 위해 항상 & (주소) 연산자를 사용하세요. %c 앞의 공백은 남아있는 줄바꿈 문자를 소비합니다."})]})]})]}),e.jsxs("div",{className:"c-lesson-nav-bottom",children:[e.jsxs(i,{to:"/c-learning/01",className:"c-lesson-nav-btn prev",children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",s==="en"?"Prev: Introduction to C":"이전: C언어 소개"]}),e.jsxs(i,{to:"/c-learning/03",className:"c-lesson-nav-btn next",children:[s==="en"?"Next: Operators & Expressions":"다음: 연산자와 표현식"," ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})})}export{c as default};
