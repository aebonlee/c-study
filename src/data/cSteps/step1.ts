// Step 1: Hello World - 첫 번째 C 프로그램
// Your first C program

const step1 = {
  id: 1,
  title: 'Hello World',
  titleKo: 'Hello World',
  description: 'Your first C program with printf',
  descriptionKo: 'printf를 사용한 첫 번째 C 프로그램',
  examples: [
    {
      id: 's1e1',
      title: '기본 Hello World',
      titleEn: 'Basic Hello World',
      description: '가장 기본적인 C 프로그램입니다.',
      descriptionEn: 'The most basic C program.',
      code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
      expectedOutput: 'Hello, World!',
      explanation: '#include <stdio.h>는 표준 입출력 헤더를 포함합니다. printf()는 화면에 텍스트를 출력하고, \\n은 줄바꿈입니다.',
      explanationEn: '#include <stdio.h> includes the standard I/O header. printf() prints text to screen, and \\n is a newline.'
    },
    {
      id: 's1e2',
      title: '여러 줄 출력',
      titleEn: 'Multiple Lines',
      description: '여러 개의 printf로 여러 줄을 출력합니다.',
      descriptionEn: 'Print multiple lines using multiple printf calls.',
      code: `#include <stdio.h>

int main() {
    printf("Hello, C!\\n");
    printf("Welcome to C programming.\\n");
    printf("Let's learn together!\\n");
    return 0;
}`,
      expectedOutput: `Hello, C!
Welcome to C programming.
Let's learn together!`,
      explanation: '각 printf() 호출마다 \\n으로 줄을 바꿉니다. printf()는 자동으로 줄바꿈하지 않습니다.',
      explanationEn: 'Each printf() uses \\n for a new line. printf() does not automatically add a newline.'
    },
    {
      id: 's1e3',
      title: '한 줄 주석',
      titleEn: 'Single-line Comments',
      description: '// 를 사용한 한 줄 주석입니다.',
      descriptionEn: 'Single-line comments using //.',
      code: `#include <stdio.h>

// This is a single-line comment
int main() {
    // Print a greeting message
    printf("Hello!\\n"); // inline comment
    return 0; // return success
}`,
      expectedOutput: 'Hello!',
      explanation: '// 뒤의 텍스트는 컴파일러가 무시합니다. 코드 설명에 사용됩니다.',
      explanationEn: 'Text after // is ignored by the compiler. Used for code documentation.'
    },
    {
      id: 's1e4',
      title: '여러 줄 주석',
      titleEn: 'Multi-line Comments',
      description: '/* */ 를 사용한 여러 줄 주석입니다.',
      descriptionEn: 'Multi-line comments using /* */.',
      code: `#include <stdio.h>

/*
 * This is a multi-line comment.
 * It can span multiple lines.
 * Useful for detailed explanations.
 */
int main() {
    printf("Comments are useful!\\n");
    return 0;
}`,
      expectedOutput: 'Comments are useful!',
      explanation: '/* 로 시작하고 */ 로 끝나는 블록 주석입니다. 여러 줄의 설명에 적합합니다.',
      explanationEn: 'Block comments start with /* and end with */. Suitable for multi-line explanations.'
    },
    {
      id: 's1e5',
      title: '이스케이프 문자',
      titleEn: 'Escape Characters',
      description: '특수 문자를 출력하는 이스케이프 시퀀스입니다.',
      descriptionEn: 'Escape sequences for printing special characters.',
      code: `#include <stdio.h>

int main() {
    printf("Tab:\\there\\n");
    printf("Quote: \\"Hello\\"\\n");
    printf("Backslash: \\\\\\n");
    printf("New\\nLine\\n");
    return 0;
}`,
      expectedOutput: `Tab:\there
Quote: "Hello"
Backslash: \\
New
Line`,
      explanation: '\\t은 탭, \\"은 큰따옴표, \\\\은 역슬래시, \\n은 줄바꿈을 나타냅니다.',
      explanationEn: '\\t is tab, \\" is double quote, \\\\ is backslash, \\n is newline.'
    },
    {
      id: 's1e6',
      title: 'return 0의 의미',
      titleEn: 'Meaning of return 0',
      description: 'main 함수의 반환값과 프로그램 종료 상태입니다.',
      descriptionEn: 'Return value of main and program exit status.',
      code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    printf("Program starting...\\n");
    printf("Doing some work...\\n");
    printf("Program ending successfully.\\n");

    // return 0 means success
    // return non-zero means error
    return EXIT_SUCCESS; // same as return 0
}`,
      expectedOutput: `Program starting...
Doing some work...
Program ending successfully.`,
      explanation: 'return 0은 프로그램이 성공적으로 종료되었음을 운영체제에 알립니다. EXIT_SUCCESS는 0과 동일합니다.',
      explanationEn: 'return 0 tells the OS the program ended successfully. EXIT_SUCCESS equals 0.'
    },
    {
      id: 's1e7',
      title: '서식 지정 출력 미리보기',
      titleEn: 'Formatted Output Preview',
      description: 'printf에서 서식 지정자를 사용하는 기본 예제입니다.',
      descriptionEn: 'Basic example of using format specifiers in printf.',
      code: `#include <stdio.h>

int main() {
    printf("Name: %s\\n", "Alice");
    printf("Age: %d\\n", 25);
    printf("Height: %.1f cm\\n", 165.5);
    printf("Grade: %c\\n", 'A');
    return 0;
}`,
      expectedOutput: `Name: Alice
Age: 25
Height: 165.5 cm
Grade: A`,
      explanation: '%s는 문자열, %d는 정수, %f는 실수, %c는 문자를 출력하는 서식 지정자입니다.',
      explanationEn: '%s for strings, %d for integers, %f for floats, %c for characters.'
    },
    {
      id: 's1e8',
      title: '여러 헤더 파일 포함',
      titleEn: 'Including Multiple Headers',
      description: '여러 헤더 파일을 포함하여 다양한 기능을 사용합니다.',
      descriptionEn: 'Include multiple header files to use various functions.',
      code: `#include <stdio.h>
#include <string.h>
#include <math.h>

int main() {
    // stdio.h: printf
    printf("=== C Header Files ===\\n");

    // string.h: strlen
    char name[] = "C Language";
    printf("Length of \\"%s\\": %lu\\n", name, strlen(name));

    // math.h: sqrt
    printf("Square root of 16: %.0f\\n", sqrt(16));

    return 0;
}`,
      expectedOutput: `=== C Header Files ===
Length of "C Language": 10
Square root of 16: 4`,
      explanation: 'stdio.h는 입출력, string.h는 문자열, math.h는 수학 함수를 제공합니다. 필요한 헤더만 포함합니다.',
      explanationEn: 'stdio.h for I/O, string.h for strings, math.h for math. Only include headers you need.'
    }
  ]
}

export default step1
