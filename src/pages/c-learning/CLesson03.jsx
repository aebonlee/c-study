import { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import CodeEditor from '../../components/CodeEditor'
import { Link } from 'react-router-dom'

export default function CLesson03() {
  const { t, lang } = useLanguage()

  return (
    <div className="c-lesson-page">
      <div className="container">
        {/* Lesson Header */}
        <div className="lesson-header">
          <span className="lesson-week">Step 3</span>
          <h1>{lang === 'en' ? 'Operators & Expressions' : '연산자와 표현식'}</h1>
          <p className="lesson-subtitle">
            {lang === 'en'
              ? 'Master arithmetic, relational, logical, assignment operators and type casting in C'
              : '산술, 관계, 논리, 대입 연산자와 형변환을 마스터합니다'}
          </p>
        </div>

        {/* Lesson Content */}
        <div className="lesson-content">
          {/* Section 1: Arithmetic Operators */}
          <section className="lesson-section">
            <h2><i className="fa-solid fa-calculator" /> {lang === 'en' ? 'Arithmetic Operators' : '산술 연산자'}</h2>
            <p>
              {lang === 'en'
                ? 'Arithmetic operators perform mathematical operations. C supports addition, subtraction, multiplication, division, modulus, and increment/decrement operations.'
                : '산술 연산자는 수학적 연산을 수행합니다. C언어는 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지, 증감 연산을 지원합니다.'}
            </p>
            <table className="c-lesson-table">
              <thead>
                <tr>
                  <th>{lang === 'en' ? 'Operator' : '연산자'}</th>
                  <th>{lang === 'en' ? 'Name' : '이름'}</th>
                  <th>{lang === 'en' ? 'Example' : '예시'}</th>
                  <th>{lang === 'en' ? 'Result' : '결과'}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code>+</code></td><td>{lang === 'en' ? 'Addition' : '덧셈'}</td><td>10 + 3</td><td>13</td></tr>
                <tr><td><code>-</code></td><td>{lang === 'en' ? 'Subtraction' : '뺄셈'}</td><td>10 - 3</td><td>7</td></tr>
                <tr><td><code>*</code></td><td>{lang === 'en' ? 'Multiplication' : '곱셈'}</td><td>10 * 3</td><td>30</td></tr>
                <tr><td><code>/</code></td><td>{lang === 'en' ? 'Division' : '나눗셈'}</td><td>10 / 3</td><td>3</td></tr>
                <tr><td><code>%</code></td><td>{lang === 'en' ? 'Modulus' : '나머지'}</td><td>10 % 3</td><td>1</td></tr>
                <tr><td><code>++</code></td><td>{lang === 'en' ? 'Increment' : '증가'}</td><td>a++</td><td>a + 1</td></tr>
                <tr><td><code>--</code></td><td>{lang === 'en' ? 'Decrement' : '감소'}</td><td>a--</td><td>a - 1</td></tr>
              </tbody>
            </table>
            <CodeEditor
              initialCode={`#include <stdio.h>

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
}`}
              expectedOutput="a + b = 22"
              lessonId="c-lesson-03-arithmetic"
            />
            <div className="c-lesson-warning">
              <i className="fa-solid fa-triangle-exclamation" />
              <p>{lang === 'en'
                ? 'Important: When both operands are integers, division truncates the decimal part. To get a floating-point result, at least one operand must be a float or double.'
                : '주의: 두 피연산자가 모두 정수일 때 나눗셈은 소수점 이하를 버립니다. 실수 결과를 얻으려면 피연산자 중 하나 이상이 float이나 double이어야 합니다.'}</p>
            </div>
          </section>

          {/* Section 2: Relational and Logical Operators */}
          <section className="lesson-section">
            <h2><i className="fa-solid fa-scale-balanced" /> {lang === 'en' ? 'Relational & Logical Operators' : '관계/논리 연산자'}</h2>
            <p>
              {lang === 'en'
                ? 'Relational operators compare two values and return 1 (true) or 0 (false). Logical operators combine or invert boolean conditions.'
                : '관계 연산자는 두 값을 비교하여 1(참) 또는 0(거짓)을 반환합니다. 논리 연산자는 불리언 조건을 결합하거나 반전시킵니다.'}
            </p>
            <table className="c-lesson-table">
              <thead>
                <tr>
                  <th>{lang === 'en' ? 'Operator' : '연산자'}</th>
                  <th>{lang === 'en' ? 'Meaning' : '의미'}</th>
                  <th>{lang === 'en' ? 'Example' : '예시'}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code>==</code></td><td>{lang === 'en' ? 'Equal to' : '같음'}</td><td>a == b</td></tr>
                <tr><td><code>!=</code></td><td>{lang === 'en' ? 'Not equal to' : '같지 않음'}</td><td>a != b</td></tr>
                <tr><td><code>&gt;</code></td><td>{lang === 'en' ? 'Greater than' : '보다 큼'}</td><td>a &gt; b</td></tr>
                <tr><td><code>&lt;</code></td><td>{lang === 'en' ? 'Less than' : '보다 작음'}</td><td>a &lt; b</td></tr>
                <tr><td><code>&amp;&amp;</code></td><td>{lang === 'en' ? 'Logical AND' : '논리 AND'}</td><td>a &amp;&amp; b</td></tr>
                <tr><td><code>||</code></td><td>{lang === 'en' ? 'Logical OR' : '논리 OR'}</td><td>a || b</td></tr>
                <tr><td><code>!</code></td><td>{lang === 'en' ? 'Logical NOT' : '논리 NOT'}</td><td>!a</td></tr>
              </tbody>
            </table>
            <CodeEditor
              initialCode={`#include <stdio.h>

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
}`}
              expectedOutput="a == b : 0 (거짓)"
              lessonId="c-lesson-03-relational"
            />
          </section>

          {/* Section 3: Assignment Operators */}
          <section className="lesson-section">
            <h2><i className="fa-solid fa-equals" /> {lang === 'en' ? 'Assignment Operators' : '대입 연산자'}</h2>
            <p>
              {lang === 'en'
                ? 'Assignment operators combine an arithmetic operation with assignment. They provide a shorthand way to update a variable\'s value.'
                : '대입 연산자는 산술 연산과 대입을 결합합니다. 변수의 값을 간결하게 업데이트하는 방법을 제공합니다.'}
            </p>
            <table className="c-lesson-table">
              <thead>
                <tr>
                  <th>{lang === 'en' ? 'Operator' : '연산자'}</th>
                  <th>{lang === 'en' ? 'Example' : '예시'}</th>
                  <th>{lang === 'en' ? 'Equivalent' : '동등한 표현'}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code>=</code></td><td>a = 10</td><td>a = 10</td></tr>
                <tr><td><code>+=</code></td><td>a += 5</td><td>a = a + 5</td></tr>
                <tr><td><code>-=</code></td><td>a -= 3</td><td>a = a - 3</td></tr>
                <tr><td><code>*=</code></td><td>a *= 2</td><td>a = a * 2</td></tr>
                <tr><td><code>/=</code></td><td>a /= 4</td><td>a = a / 4</td></tr>
                <tr><td><code>%=</code></td><td>a %= 3</td><td>a = a % 3</td></tr>
              </tbody>
            </table>
            <CodeEditor
              initialCode={`#include <stdio.h>

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
}`}
              expectedOutput="초기값: a = 100"
              lessonId="c-lesson-03-assignment"
            />
          </section>

          {/* Section 4: Type Casting */}
          <section className="lesson-section">
            <h2><i className="fa-solid fa-right-left" /> {lang === 'en' ? 'Type Casting' : '형변환'}</h2>
            <p>
              {lang === 'en'
                ? 'Type casting converts a value from one data type to another. C supports both implicit (automatic) and explicit (manual) type casting.'
                : '형변환은 값을 한 자료형에서 다른 자료형으로 변환합니다. C에서는 암시적(자동) 형변환과 명시적(수동) 형변환을 모두 지원합니다.'}
            </p>
            <CodeEditor
              initialCode={`#include <stdio.h>

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
}`}
              expectedOutput="int 10 -> float 10.0 -> double 10.0"
              lessonId="c-lesson-03-casting"
            />
            <div className="c-lesson-warning">
              <i className="fa-solid fa-triangle-exclamation" />
              <p>{lang === 'en'
                ? 'Warning: When converting from a larger type to a smaller type (e.g., double to int), you may lose data. The decimal part is truncated, not rounded.'
                : '주의: 큰 자료형에서 작은 자료형으로 변환할 때 (예: double에서 int) 데이터가 손실될 수 있습니다. 소수점 이하는 반올림이 아닌 버림으로 처리됩니다.'}</p>
            </div>
          </section>

          {/* Section 5: Operator Precedence */}
          <section className="lesson-section">
            <h2><i className="fa-solid fa-sort-numeric-up" /> {lang === 'en' ? 'Operator Precedence' : '연산자 우선순위'}</h2>
            <p>
              {lang === 'en'
                ? 'When an expression contains multiple operators, C follows a specific order of precedence. It\'s always a good practice to use parentheses to make your intentions clear.'
                : '표현식에 여러 연산자가 포함되어 있을 때, C는 특정 우선순위를 따릅니다. 의도를 명확히 하기 위해 항상 괄호를 사용하는 것이 좋은 습관입니다.'}
            </p>
            <div className="c-lesson-info-box">
              <h3>{lang === 'en' ? 'Precedence (high to low)' : '우선순위 (높은 것부터 낮은 것)'}</h3>
              <ol>
                <li><code>( )</code> - {lang === 'en' ? 'Parentheses' : '괄호'}</li>
                <li><code>++ -- ! (type)</code> - {lang === 'en' ? 'Unary operators, type cast' : '단항 연산자, 형변환'}</li>
                <li><code>* / %</code> - {lang === 'en' ? 'Multiplication, Division, Modulus' : '곱셈, 나눗셈, 나머지'}</li>
                <li><code>+ -</code> - {lang === 'en' ? 'Addition, Subtraction' : '덧셈, 뺄셈'}</li>
                <li><code>&lt; &gt; &lt;= &gt;=</code> - {lang === 'en' ? 'Relational' : '관계 연산자'}</li>
                <li><code>== !=</code> - {lang === 'en' ? 'Equality' : '등호 연산자'}</li>
                <li><code>&amp;&amp;</code> - {lang === 'en' ? 'Logical AND' : '논리 AND'}</li>
                <li><code>||</code> - {lang === 'en' ? 'Logical OR' : '논리 OR'}</li>
                <li><code>= += -= *= /= %=</code> - {lang === 'en' ? 'Assignment' : '대입 연산자'}</li>
              </ol>
            </div>
            <div className="c-lesson-tip">
              <i className="fa-solid fa-lightbulb" />
              <p>{lang === 'en'
                ? 'Tip: When in doubt, use parentheses! It makes your code clearer and prevents unexpected behavior.'
                : '팁: 확실하지 않을 때는 괄호를 사용하세요! 코드를 더 명확하게 만들고 예상치 못한 동작을 방지합니다.'}</p>
            </div>
          </section>
        </div>

        {/* Lesson Navigation */}
        <div className="c-lesson-nav-bottom">
          <Link to="/c-learning/02" className="c-lesson-nav-btn prev">
            <i className="fa-solid fa-arrow-left" /> {lang === 'en' ? 'Prev: Variables & Data Types' : '이전: 변수와 자료형'}
          </Link>
          <Link to="/c-learning/04" className="c-lesson-nav-btn next">
            {lang === 'en' ? 'Next: Control Flow - Conditionals' : '다음: 제어문 - 조건문'} <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  )
}
