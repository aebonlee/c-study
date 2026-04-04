import { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import CodeEditor from '../../components/CodeEditor'
import { Link } from 'react-router-dom'

export default function CLesson01() {
  const { t, lang } = useLanguage()

  return (
    <div className="c-lesson-page">
      <div className="container">
        {/* Lesson Header */}
        <div className="lesson-header">
          <span className="lesson-week">Step 1</span>
          <h1>{lang === 'en' ? 'Introduction to C & Development Environment' : 'C언어 소개와 개발환경'}</h1>
          <p className="lesson-subtitle">
            {lang === 'en'
              ? 'Learn the history of C, set up your compiler, and write your first program'
              : 'C언어의 역사를 배우고, 컴파일러를 설치하고, 첫 번째 프로그램을 작성합니다'}
          </p>
        </div>

        {/* Lesson Content */}
        <div className="lesson-content">
          {/* Section 1: History of C */}
          <section className="lesson-section">
            <h2><i className="fa-solid fa-clock-rotate-left" /> {lang === 'en' ? 'History and Features of C' : 'C언어의 역사와 특징'}</h2>
            <p>
              {lang === 'en'
                ? 'The C programming language was developed by Dennis Ritchie at Bell Labs in 1972. It was originally designed for system programming and operating system development. The Unix operating system was rewritten in C, and it has since become one of the most influential programming languages in history.'
                : 'C언어는 1972년 벨 연구소(Bell Labs)에서 데니스 리치(Dennis Ritchie)에 의해 개발되었습니다. 원래 시스템 프로그래밍과 운영체제 개발을 위해 설계되었으며, 유닉스(Unix) 운영체제가 C언어로 재작성되었습니다. 이후 C언어는 역사상 가장 영향력 있는 프로그래밍 언어 중 하나가 되었습니다.'}
            </p>
            <div className="c-lesson-info-box">
              <h3><i className="fa-solid fa-timeline" /> {lang === 'en' ? 'Key Milestones' : '주요 이정표'}</h3>
              <ul>
                <li><strong>1972</strong> - {lang === 'en' ? 'C language created by Dennis Ritchie at Bell Labs' : 'Dennis Ritchie에 의해 벨 연구소에서 C언어 탄생'}</li>
                <li><strong>1978</strong> - {lang === 'en' ? '"The C Programming Language" (K&R) published' : '"The C Programming Language" (K&R) 출판'}</li>
                <li><strong>1989</strong> - {lang === 'en' ? 'ANSI C (C89) standard established' : 'ANSI C (C89) 표준 제정'}</li>
                <li><strong>1999</strong> - {lang === 'en' ? 'C99 standard with new features' : 'C99 표준 (새로운 기능 추가)'}</li>
                <li><strong>2011</strong> - {lang === 'en' ? 'C11 standard' : 'C11 표준'}</li>
                <li><strong>2018</strong> - {lang === 'en' ? 'C17 standard (current)' : 'C17 표준 (현재)'}</li>
              </ul>
            </div>
            <div className="c-lesson-info-box">
              <h3><i className="fa-solid fa-star" /> {lang === 'en' ? 'Key Features of C' : 'C언어의 주요 특징'}</h3>
              <ul>
                <li><strong>{lang === 'en' ? 'Fast & Efficient' : '빠르고 효율적'}</strong> - {lang === 'en' ? 'C produces optimized machine code, making it one of the fastest languages.' : 'C는 최적화된 기계어 코드를 생성하여 가장 빠른 언어 중 하나입니다.'}</li>
                <li><strong>{lang === 'en' ? 'Low-Level Access' : '저수준 접근'}</strong> - {lang === 'en' ? 'Direct memory manipulation through pointers.' : '포인터를 통한 직접적인 메모리 조작이 가능합니다.'}</li>
                <li><strong>{lang === 'en' ? 'Portable' : '이식성'}</strong> - {lang === 'en' ? 'C programs can be compiled on various platforms.' : 'C 프로그램은 다양한 플랫폼에서 컴파일할 수 있습니다.'}</li>
                <li><strong>{lang === 'en' ? 'Foundation Language' : '기반 언어'}</strong> - {lang === 'en' ? 'Many modern languages (C++, Java, Python) are influenced by C.' : '많은 현대 언어(C++, Java, Python)가 C의 영향을 받았습니다.'}</li>
              </ul>
            </div>
          </section>

          {/* Section 2: Compiler Installation (GCC) */}
          <section className="lesson-section">
            <h2><i className="fa-solid fa-download" /> {lang === 'en' ? 'Installing the Compiler (GCC)' : '컴파일러 설치 (GCC)'}</h2>
            <p>
              {lang === 'en'
                ? 'To write and run C programs, you need a C compiler. GCC (GNU Compiler Collection) is the most popular open-source compiler. Here\'s how to install it on different operating systems:'
                : 'C 프로그램을 작성하고 실행하려면 C 컴파일러가 필요합니다. GCC(GNU Compiler Collection)는 가장 인기 있는 오픈소스 컴파일러입니다. 각 운영체제별 설치 방법은 다음과 같습니다:'}
            </p>
            <div className="c-lesson-info-box">
              <h3><i className="fa-brands fa-windows" /> Windows</h3>
              <p>{lang === 'en' ? 'Install MinGW-w64 or use WSL (Windows Subsystem for Linux). You can also use Dev-C++ or Visual Studio for a complete IDE experience.' : 'MinGW-w64를 설치하거나 WSL(Windows Subsystem for Linux)을 사용합니다. Dev-C++ 또는 Visual Studio를 사용하면 완전한 IDE 환경을 경험할 수 있습니다.'}</p>
            </div>
            <div className="c-lesson-info-box">
              <h3><i className="fa-brands fa-apple" /> macOS</h3>
              <p>{lang === 'en' ? 'Install Xcode Command Line Tools: ' : 'Xcode Command Line Tools 설치: '}<code>xcode-select --install</code></p>
            </div>
            <div className="c-lesson-info-box">
              <h3><i className="fa-brands fa-linux" /> Linux</h3>
              <p>{lang === 'en' ? 'Install via package manager: ' : '패키지 매니저로 설치: '}<code>sudo apt install gcc</code> (Ubuntu/Debian)</p>
            </div>
            <div className="c-lesson-info-box">
              <h3><i className="fa-solid fa-wrench" /> {lang === 'en' ? 'Recommended Tools' : '추천 도구'}</h3>
              <ul>
                <li><strong>GCC</strong> - {lang === 'en' ? 'GNU Compiler Collection (Linux/Mac/Windows via MinGW)' : 'GNU 컴파일러 컬렉션 (Linux/Mac/Windows MinGW)'}</li>
                <li><strong>Visual Studio Code</strong> - {lang === 'en' ? 'Lightweight editor with C/C++ extension' : 'C/C++ 확장 기능을 갖춘 경량 에디터'}</li>
                <li><strong>Dev-C++</strong> - {lang === 'en' ? 'Simple IDE for Windows beginners' : 'Windows 초보자를 위한 간단한 IDE'}</li>
                <li><strong>CLion</strong> - {lang === 'en' ? 'Professional IDE by JetBrains' : 'JetBrains의 전문 IDE'}</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Hello World Program */}
          <section className="lesson-section">
            <h2><i className="fa-solid fa-code" /> {lang === 'en' ? 'Hello World Program' : 'Hello World 프로그램'}</h2>
            <p>
              {lang === 'en'
                ? 'Let\'s write our very first C program! The classic "Hello, World!" program is traditionally the first program you write when learning a new language.'
                : '첫 번째 C 프로그램을 작성해 봅시다! 고전적인 "Hello, World!" 프로그램은 새로운 언어를 배울 때 전통적으로 가장 먼저 작성하는 프로그램입니다.'}
            </p>
            <CodeEditor
              initialCode={`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`}
              expectedOutput="Hello, World!"
              lessonId="c-lesson-01-hello"
            />
            <div className="c-lesson-info-box">
              <h3><i className="fa-solid fa-magnifying-glass" /> {lang === 'en' ? 'Code Breakdown' : '코드 분석'}</h3>
              <table className="c-lesson-table">
                <thead>
                  <tr>
                    <th>{lang === 'en' ? 'Code' : '코드'}</th>
                    <th>{lang === 'en' ? 'Description' : '설명'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>#include &lt;stdio.h&gt;</code></td>
                    <td>{lang === 'en' ? 'Includes the standard input/output library' : '표준 입출력 라이브러리를 포함합니다'}</td>
                  </tr>
                  <tr>
                    <td><code>int main()</code></td>
                    <td>{lang === 'en' ? 'The main function where program execution begins' : '프로그램 실행이 시작되는 메인 함수입니다'}</td>
                  </tr>
                  <tr>
                    <td><code>printf()</code></td>
                    <td>{lang === 'en' ? 'Function to print text to the console' : '콘솔에 텍스트를 출력하는 함수입니다'}</td>
                  </tr>
                  <tr>
                    <td><code>\\n</code></td>
                    <td>{lang === 'en' ? 'Newline character (moves cursor to next line)' : '줄바꿈 문자 (커서를 다음 줄로 이동)'}</td>
                  </tr>
                  <tr>
                    <td><code>return 0;</code></td>
                    <td>{lang === 'en' ? 'Returns 0 to the operating system (success)' : '운영체제에 0을 반환합니다 (성공)'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Compilation and Execution */}
          <section className="lesson-section">
            <h2><i className="fa-solid fa-gears" /> {lang === 'en' ? 'Compilation and Execution' : '컴파일과 실행 과정'}</h2>
            <p>
              {lang === 'en'
                ? 'C is a compiled language. This means your source code must be translated into machine code before it can be executed. Here is the process:'
                : 'C언어는 컴파일 언어입니다. 소스 코드를 실행하기 전에 기계어로 번역해야 합니다. 그 과정은 다음과 같습니다:'}
            </p>
            <div className="c-lesson-flow">
              <div className="flow-step">
                <span className="flow-label">{lang === 'en' ? 'Source Code' : '소스 코드'}</span>
                <code>.c</code>
              </div>
              <i className="fa-solid fa-arrow-right flow-arrow" />
              <div className="flow-step">
                <span className="flow-label">{lang === 'en' ? 'Preprocessing' : '전처리'}</span>
                <code>#include</code>
              </div>
              <i className="fa-solid fa-arrow-right flow-arrow" />
              <div className="flow-step">
                <span className="flow-label">{lang === 'en' ? 'Compilation' : '컴파일'}</span>
                <code>.s</code>
              </div>
              <i className="fa-solid fa-arrow-right flow-arrow" />
              <div className="flow-step">
                <span className="flow-label">{lang === 'en' ? 'Assembly' : '어셈블'}</span>
                <code>.o</code>
              </div>
              <i className="fa-solid fa-arrow-right flow-arrow" />
              <div className="flow-step">
                <span className="flow-label">{lang === 'en' ? 'Linking' : '링킹'}</span>
                <code>.exe</code>
              </div>
            </div>
            <CodeEditor
              initialCode={`/* 컴파일 명령어 예시 (Compilation Commands)
 *
 * 기본 컴파일 (Basic compilation):
 *   gcc hello.c -o hello
 *
 * 경고 옵션 포함 (With warnings):
 *   gcc -Wall -Wextra hello.c -o hello
 *
 * 디버그 정보 포함 (With debug info):
 *   gcc -g hello.c -o hello
 *
 * 실행 (Run):
 *   ./hello          (Linux/Mac)
 *   hello.exe        (Windows)
 */

#include <stdio.h>

int main() {
    printf("=== C 프로그램 실행 ===\\n");
    printf("컴파일 성공!\\n");
    printf("Program executed successfully!\\n");
    return 0;
}`}
              lessonId="c-lesson-01-compile"
            />
          </section>

          {/* Section 5: printf Formatting Basics */}
          <section className="lesson-section">
            <h2><i className="fa-solid fa-terminal" /> {lang === 'en' ? 'printf Formatting Basics' : 'printf 서식 기초'}</h2>
            <p>
              {lang === 'en'
                ? 'The printf function supports various escape characters and format specifiers. Let\'s explore some basic formatting options to make our output more readable.'
                : 'printf 함수는 다양한 이스케이프 문자와 서식 지정자를 지원합니다. 출력을 더 읽기 쉽게 만들기 위한 기본적인 서식 옵션을 살펴보겠습니다.'}
            </p>
            <CodeEditor
              initialCode={`#include <stdio.h>

int main() {
    // 문자열 출력 (String output)
    printf("안녕하세요, C언어!\\n");

    // 이스케이프 문자 (Escape characters)
    printf("\\n=== 이스케이프 문자 ===\\n");
    printf("탭(Tab):\\tHello\\tWorld\\n");
    printf("줄바꿈 후 출력\\n");
    printf("백슬래시: \\\\\\n");
    printf("큰따옴표: \\"Hello\\"\\n");

    // 여러 줄 출력 (Multiple lines)
    printf("\\n===========================\\n");
    printf("  C Programming Language\\n");
    printf("  Welcome to Step 1!\\n");
    printf("===========================\\n");

    // 서식 지정자 미리보기 (Format specifier preview)
    printf("\\n=== 서식 지정자 미리보기 ===\\n");
    printf("정수: %d\\n", 42);
    printf("실수: %f\\n", 3.14);
    printf("문자: %c\\n", 'A');
    printf("문자열: %s\\n", "Hello");

    return 0;
}`}
              expectedOutput="안녕하세요, C언어!"
              lessonId="c-lesson-01-printf"
            />
            <div className="c-lesson-tip">
              <i className="fa-solid fa-lightbulb" />
              <p>{lang === 'en'
                ? 'Tip: Format specifiers like %d, %f, %c, %s will be covered in detail in the next lesson on Variables & Data Types.'
                : '팁: %d, %f, %c, %s 같은 서식 지정자는 다음 강의인 변수와 자료형에서 자세히 다룹니다.'}</p>
            </div>
          </section>
        </div>

        {/* Lesson Navigation */}
        <div className="c-lesson-nav-bottom">
          <Link to="/c-learning" className="c-lesson-nav-btn prev">
            <i className="fa-solid fa-list" /> {lang === 'en' ? 'Back to List' : '목록으로'}
          </Link>
          <Link to="/c-learning/02" className="c-lesson-nav-btn next">
            {lang === 'en' ? 'Next: Variables & Data Types' : '다음: 변수, 자료형, 연산자'} <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  )
}
