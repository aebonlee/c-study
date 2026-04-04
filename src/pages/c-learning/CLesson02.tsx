import { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import CodeEditor from '../../components/CodeEditor'
import { Link } from 'react-router-dom'

export default function CLesson02() {
  const { t, lang } = useLanguage()

  return (
    <div className="c-lesson-page">
      <div className="container">
        {/* Lesson Header */}
        <div className="lesson-header">
          <span className="lesson-week">Step 2</span>
          <h1>{lang === 'en' ? 'Variables & Data Types' : '변수와 자료형'}</h1>
          <p className="lesson-subtitle">
            {lang === 'en'
              ? 'Learn about basic data types, variable declaration, constants, and the sizeof operator'
              : '기본 자료형, 변수 선언, 상수, sizeof 연산자에 대해 배웁니다'}
          </p>
        </div>

        {/* Lesson Content */}
        <div className="lesson-content">
          {/* Section 1: Basic Data Types */}
          <section className="lesson-section">
            <h2><i className="fa-solid fa-database" /> {lang === 'en' ? 'Basic Data Types' : '기본 자료형 (int, float, double, char)'}</h2>
            <p>
              {lang === 'en'
                ? 'C provides several fundamental data types for storing different kinds of values. Understanding these types is essential for writing efficient programs.'
                : 'C언어는 다양한 종류의 값을 저장하기 위한 여러 기본 자료형을 제공합니다. 이러한 자료형을 이해하는 것은 효율적인 프로그램을 작성하는 데 필수적입니다.'}
            </p>
            <table className="c-lesson-table">
              <thead>
                <tr>
                  <th>{lang === 'en' ? 'Type' : '자료형'}</th>
                  <th>{lang === 'en' ? 'Size (bytes)' : '크기 (바이트)'}</th>
                  <th>{lang === 'en' ? 'Range' : '범위'}</th>
                  <th>{lang === 'en' ? 'Format Specifier' : '형식 지정자'}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code>char</code></td><td>1</td><td>-128 ~ 127</td><td><code>%c</code></td></tr>
                <tr><td><code>int</code></td><td>4</td><td>-2,147,483,648 ~ 2,147,483,647</td><td><code>%d</code></td></tr>
                <tr><td><code>float</code></td><td>4</td><td>3.4E-38 ~ 3.4E+38</td><td><code>%f</code></td></tr>
                <tr><td><code>double</code></td><td>8</td><td>1.7E-308 ~ 1.7E+308</td><td><code>%lf</code></td></tr>
                <tr><td><code>short</code></td><td>2</td><td>-32,768 ~ 32,767</td><td><code>%hd</code></td></tr>
                <tr><td><code>long</code></td><td>4/8</td><td>{lang === 'en' ? 'Platform dependent' : '플랫폼에 따라 다름'}</td><td><code>%ld</code></td></tr>
              </tbody>
            </table>
          </section>

          {/* Section 2: Variable Declaration and Initialization */}
          <section className="lesson-section">
            <h2><i className="fa-solid fa-pen" /> {lang === 'en' ? 'Variable Declaration & Initialization' : '변수 선언과 초기화'}</h2>
            <p>
              {lang === 'en'
                ? 'A variable is a named storage location in memory. You must declare a variable before using it in C. You can also initialize it at the time of declaration.'
                : '변수는 메모리에서 이름이 붙은 저장 공간입니다. C에서는 변수를 사용하기 전에 반드시 선언해야 합니다. 선언과 동시에 초기화할 수도 있습니다.'}
            </p>
            <CodeEditor
              initialCode={`#include <stdio.h>

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
}`}
              expectedOutput="나이(Age): 20세"
              lessonId="c-lesson-02-variables"
            />
            <div className="c-lesson-info-box">
              <h3><i className="fa-solid fa-lightbulb" /> {lang === 'en' ? 'Format Specifiers' : '서식 지정자 정리'}</h3>
              <ul>
                <li><code>%d</code> - {lang === 'en' ? 'Integer (int)' : '정수 (int)'}</li>
                <li><code>%f</code> - {lang === 'en' ? 'Float (default 6 decimal places)' : '실수 (기본 소수점 6자리)'}</li>
                <li><code>%lf</code> - {lang === 'en' ? 'Double (for scanf)' : 'double (scanf에서 사용)'}</li>
                <li><code>%c</code> - {lang === 'en' ? 'Character (char)' : '문자 (char)'}</li>
                <li><code>%s</code> - {lang === 'en' ? 'String' : '문자열'}</li>
                <li><code>%.nf</code> - {lang === 'en' ? 'Float with n decimal places' : '소수점 n자리까지 표시'}</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Constants and Literals */}
          <section className="lesson-section">
            <h2><i className="fa-solid fa-lock" /> {lang === 'en' ? 'Constants & Literals' : '상수와 리터럴'}</h2>
            <p>
              {lang === 'en'
                ? 'Constants are values that cannot be changed after they are defined. C provides two ways to define constants: using the const keyword and the #define preprocessor directive.'
                : '상수는 정의된 후 변경할 수 없는 값입니다. C에서는 상수를 정의하는 두 가지 방법이 있습니다: const 키워드와 #define 전처리 지시문입니다.'}
            </p>
            <CodeEditor
              initialCode={`#include <stdio.h>

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
}`}
              lessonId="c-lesson-02-constants"
            />
            <div className="c-lesson-warning">
              <i className="fa-solid fa-triangle-exclamation" />
              <p>{lang === 'en'
                ? 'Note: #define constants are replaced by the preprocessor before compilation (text substitution), while const variables are actual memory locations. Both prevent value changes.'
                : '참고: #define 상수는 컴파일 전에 전처리기가 텍스트를 치환하고, const 변수는 실제 메모리 공간을 가집니다. 둘 다 값 변경을 방지합니다.'}</p>
            </div>
          </section>

          {/* Section 4: sizeof Operator */}
          <section className="lesson-section">
            <h2><i className="fa-solid fa-ruler" /> {lang === 'en' ? 'sizeof Operator' : 'sizeof 연산자'}</h2>
            <p>
              {lang === 'en'
                ? 'The sizeof operator returns the size (in bytes) of a data type or variable. This is very useful for understanding memory usage and for writing portable code.'
                : 'sizeof 연산자는 자료형이나 변수의 크기(바이트 단위)를 반환합니다. 메모리 사용량을 이해하고 이식 가능한 코드를 작성하는 데 매우 유용합니다.'}
            </p>
            <CodeEditor
              initialCode={`#include <stdio.h>

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
}`}
              expectedOutput="char:      1 바이트 (bytes)"
              lessonId="c-lesson-02-sizeof"
            />
            <div className="c-lesson-tip">
              <i className="fa-solid fa-lightbulb" />
              <p>{lang === 'en'
                ? 'Tip: The actual size of data types may vary depending on the platform and compiler. The sizeof operator always gives the correct size for the current system.'
                : '팁: 자료형의 실제 크기는 플랫폼과 컴파일러에 따라 다를 수 있습니다. sizeof 연산자는 현재 시스템에 맞는 정확한 크기를 항상 알려줍니다.'}</p>
            </div>
          </section>

          {/* Section 5: Input with scanf */}
          <section className="lesson-section">
            <h2><i className="fa-solid fa-keyboard" /> {lang === 'en' ? 'Input with scanf' : 'scanf로 입력받기'}</h2>
            <p>
              {lang === 'en'
                ? 'The scanf function reads formatted input from the user. Note that you must use the & (address-of) operator to pass the variable\'s memory address.'
                : 'scanf 함수는 사용자로부터 형식화된 입력을 읽습니다. 변수의 메모리 주소를 전달하기 위해 & (주소) 연산자를 사용해야 합니다.'}
            </p>
            <CodeEditor
              initialCode={`#include <stdio.h>

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
}`}
              lessonId="c-lesson-02-scanf"
            />
            <div className="c-lesson-tip">
              <i className="fa-solid fa-lightbulb" />
              <p>{lang === 'en'
                ? 'Tip: Always use the & (address-of) operator with scanf to pass the variable\'s memory address. Note the space before %c to consume any leftover newline character.'
                : '팁: scanf에서 변수의 메모리 주소를 전달하기 위해 항상 & (주소) 연산자를 사용하세요. %c 앞의 공백은 남아있는 줄바꿈 문자를 소비합니다.'}</p>
            </div>
          </section>
        </div>

        {/* Lesson Navigation */}
        <div className="c-lesson-nav-bottom">
          <Link to="/c-learning/01" className="c-lesson-nav-btn prev">
            <i className="fa-solid fa-arrow-left" /> {lang === 'en' ? 'Prev: Introduction to C' : '이전: C언어 소개'}
          </Link>
          <Link to="/c-learning/03" className="c-lesson-nav-btn next">
            {lang === 'en' ? 'Next: Operators & Expressions' : '다음: 연산자와 표현식'} <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  )
}
