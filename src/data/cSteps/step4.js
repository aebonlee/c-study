// Step 4: Input & Output - 입출력
// scanf and printf formatted I/O

const step4 = {
  id: 4,
  title: 'Input & Output',
  titleKo: '입출력',
  description: 'Formatted I/O with scanf and printf',
  descriptionKo: 'scanf와 printf를 이용한 서식 지정 입출력',
  examples: [
    {
      id: 's4e1',
      title: 'printf 서식 지정자',
      titleEn: 'printf Format Specifiers',
      description: '다양한 서식 지정자로 데이터를 출력합니다.',
      descriptionEn: 'Print data with various format specifiers.',
      code: `#include <stdio.h>

int main() {
    printf("=== Format Specifiers ===\\n");
    printf("Integer:   %d\\n", 42);
    printf("Unsigned:  %u\\n", 42u);
    printf("Float:     %f\\n", 3.14);
    printf("Char:      %c\\n", 'A');
    printf("String:    %s\\n", "Hello");
    printf("Hex:       %x\\n", 255);
    printf("Octal:     %o\\n", 255);
    printf("Long:      %d\\n", 1234567890);
    printf("Percent:   %%\\n");

    return 0;
}`,
      expectedOutput: `=== Format Specifiers ===
Integer:   42
Unsigned:  42
Float:     3.140000
Char:      A
String:    Hello
Hex:       ff
Octal:     377
Long:      1234567890
Percent:   %`,
      explanation: '%d 정수, %f 실수, %c 문자, %s 문자열, %x 16진수, %o 8진수, %% 퍼센트 기호.',
      explanationEn: '%d integer, %f float, %c char, %s string, %x hex, %o octal, %% percent sign.'
    },
    {
      id: 's4e2',
      title: '출력 너비와 정밀도',
      titleEn: 'Width and Precision',
      description: '출력 너비와 소수점 자릿수를 지정합니다.',
      descriptionEn: 'Specify output width and decimal places.',
      code: `#include <stdio.h>

int main() {
    // Width: minimum characters to print
    printf("[%10d]\\n", 42);      // right-aligned
    printf("[%-10d]\\n", 42);     // left-aligned
    printf("[%010d]\\n", 42);     // zero-padded

    printf("\\n");

    // Precision: decimal places for float
    double pi = 3.141592653589793;
    printf("Default:  %f\\n", pi);
    printf("2 places: %.2f\\n", pi);
    printf("5 places: %.5f\\n", pi);
    printf("0 places: %.0f\\n", pi);

    printf("\\n");

    // String precision: max characters
    printf("[%.5s]\\n", "Hello World");  // first 5 chars
    printf("[%15.5s]\\n", "Hello World"); // width + precision

    return 0;
}`,
      expectedOutput: `[        42]
[42        ]
[0000000042]

Default:  3.141593
2 places: 3.14
5 places: 3.14159
0 places: 3

[Hello]
[          Hello]`,
      explanation: '%10d는 최소 10칸, %-10d는 왼쪽 정렬, %010d는 0으로 채움. %.2f는 소수점 2자리.',
      explanationEn: '%10d is min 10 chars, %-10d left-aligns, %010d zero-pads. %.2f is 2 decimal places.'
    },
    {
      id: 's4e3',
      title: 'scanf 기본 사용법',
      titleEn: 'Basic scanf Usage',
      description: '키보드에서 값을 입력받는 scanf 함수입니다.',
      descriptionEn: 'Read values from keyboard using scanf.',
      code: `#include <stdio.h>

int main() {
    int age = 25;       // simulated input
    double height = 175.5;
    char grade = 'A';

    // In real program: scanf("%d", &age);
    // Note: & is required for scanf (address operator)

    printf("Enter your age: ");
    // scanf("%d", &age);
    printf("%d\\n", age);

    printf("Enter height: ");
    // scanf("%lf", &height);
    printf("%.1f\\n", height);

    printf("Enter grade: ");
    // scanf(" %c", &grade); // space before %c skips whitespace
    printf("%c\\n", grade);

    printf("\\n--- Results ---\\n");
    printf("Age: %d, Height: %.1f, Grade: %c\\n", age, height, grade);

    return 0;
}`,
      expectedOutput: `Enter your age: 25
Enter height: 175.5
Enter grade: A

--- Results ---
Age: 25, Height: 175.5, Grade: A`,
      explanation: 'scanf에서 변수 앞에 &를 붙여야 합니다(주소 전달). %lf는 double 입력, %c 앞 공백은 줄바꿈을 건너뜁니다.',
      explanationEn: 'scanf needs & before variables (pass address). %lf for double input, space before %c skips whitespace.'
    },
    {
      id: 's4e4',
      title: '문자열 입력',
      titleEn: 'String Input',
      description: 'scanf와 fgets로 문자열을 입력받습니다.',
      descriptionEn: 'Read strings with scanf and fgets.',
      code: `#include <stdio.h>
#include <string.h>

int main() {
    char name[] = "Alice";
    char city[] = "Seoul Korea";

    // scanf reads until whitespace
    // scanf("%s", name); // no & needed for arrays
    printf("Name (scanf): %s\\n", name);

    // fgets reads entire line (safer)
    // fgets(city, sizeof(city), stdin);
    printf("City (fgets): %s\\n", city);

    printf("\\n--- String Safety ---\\n");
    char buffer[10];
    // UNSAFE: scanf("%s", buffer); // can overflow!
    // SAFE: scanf("%9s", buffer);  // limit to 9 chars
    // SAFER: fgets(buffer, sizeof(buffer), stdin);

    snprintf(buffer, sizeof(buffer), "%s", "SafeInput");
    printf("Safe buffer: %s\\n", buffer);

    return 0;
}`,
      expectedOutput: `Name (scanf): Alice
City (fgets): Seoul Korea

--- String Safety ---
Safe buffer: SafeInpu`,
      explanation: 'scanf("%s")는 공백에서 멈추고 오버플로 위험이 있습니다. fgets()가 더 안전합니다.',
      explanationEn: 'scanf("%s") stops at whitespace and risks overflow. fgets() is safer.'
    },
    {
      id: 's4e5',
      title: '여러 값 입력받기',
      titleEn: 'Multiple Input Values',
      description: '한 번에 여러 값을 입력받는 방법입니다.',
      descriptionEn: 'Read multiple values at once.',
      code: `#include <stdio.h>

int main() {
    int day = 15, month = 3, year = 2025;
    int x = 10, y = 20;

    // scanf("%d/%d/%d", &month, &day, &year);
    printf("Date input (M/D/Y): %d/%d/%d\\n", month, day, year);

    // scanf("%d %d", &x, &y);
    printf("Coordinates: (%d, %d)\\n", x, y);

    // Practical: calculate with input
    double celsius = 100.0;
    // scanf("%lf", &celsius);
    double fahrenheit = (celsius * 9.0 / 5.0) + 32.0;
    printf("%.1f C = %.1f F\\n", celsius, fahrenheit);

    return 0;
}`,
      expectedOutput: `Date input (M/D/Y): 3/15/2025
Coordinates: (10, 20)
100.0 C = 212.0 F`,
      explanation: 'scanf의 서식 문자열에 구분자를 넣을 수 있습니다. scanf의 반환값으로 입력 성공 여부를 확인합니다.',
      explanationEn: 'scanf format string can include separators. Check scanf return value for input success.'
    },
    {
      id: 's4e6',
      title: '이스케이프 문자 총정리',
      titleEn: 'Complete Escape Characters',
      description: '모든 이스케이프 문자를 정리합니다.',
      descriptionEn: 'Summary of all escape characters.',
      code: `#include <stdio.h>

int main() {
    printf("=== Escape Characters ===\\n\\n");

    printf("\\\\n  - Newline\\n");
    printf("\\\\t  - Tab:\\tHere\\n");
    printf("\\\\\\\\  - Backslash: \\\\\\n");
    printf("\\\\\\\" - Double quote: \\"Hi\\"\\n");
    printf("\\\\'  - Single quote: \\'A\\'\\n");
    printf("\\\\0  - Null character (string terminator)\\n");

    printf("\\n=== Practical Examples ===\\n");
    printf("Path: C:\\\\Users\\\\Documents\\n");
    printf("Quote: She said \\"hello\\"\\n");
    printf("Col1\\tCol2\\tCol3\\n");
    printf("100\\t200\\t300\\n");

    return 0;
}`,
      expectedOutput: `=== Escape Characters ===

\\n  - Newline
\\t  - Tab:\tHere
\\\\  - Backslash: \\
\\" - Double quote: "Hi"
\\'  - Single quote: 'A'
\\0  - Null character (string terminator)

=== Practical Examples ===
Path: C:\\Users\\Documents
Quote: She said "hello"
Col1\tCol2\tCol3
100\t200\t300`,
      explanation: '이스케이프 문자는 \\ 뒤에 특수 문자를 붙여 특별한 의미를 나타냅니다.',
      explanationEn: 'Escape characters use \\ followed by a special character to represent special meanings.'
    },
    {
      id: 's4e7',
      title: 'putchar와 getchar',
      titleEn: 'putchar and getchar',
      description: '문자 단위 입출력 함수입니다.',
      descriptionEn: 'Character-level I/O functions.',
      code: `#include <stdio.h>

int main() {
    // putchar: output one character
    putchar('H');
    putchar('e');
    putchar('l');
    putchar('l');
    putchar('o');
    putchar('\\n');

    // Character output with loop
    char msg[] = "C Language!";
    int i = 0;
    while (msg[i] != '\\0') {
        putchar(msg[i]);
        i++;
    }
    putchar('\\n');

    // Print uppercase alphabet
    printf("Alphabet: ");
    for (char c = 'A'; c <= 'Z'; c++) {
        putchar(c);
    }
    putchar('\\n');

    return 0;
}`,
      expectedOutput: `Hello
C Language!
Alphabet: ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
      explanation: 'putchar()은 한 문자를 출력하고, getchar()는 한 문자를 입력받습니다. int형을 사용합니다.',
      explanationEn: 'putchar() outputs one character, getchar() reads one. They use int type.'
    },
    {
      id: 's4e8',
      title: 'sprintf와 sscanf',
      titleEn: 'sprintf and sscanf',
      description: '문자열로 서식 지정 입출력을 수행합니다.',
      descriptionEn: 'Formatted I/O with strings.',
      code: `#include <stdio.h>

int main() {
    // sprintf: write formatted string to buffer
    char buffer[100];
    int score = 95;
    double avg = 87.5;

    sprintf(buffer, "Score: %d, Average: %.1f", score, avg);
    printf("sprintf result: %s\\n", buffer);

    // snprintf: safer with size limit
    char small[20];
    snprintf(small, sizeof(small), "Value: %d", 123456789);
    printf("snprintf result: %s\\n", small);

    // sscanf: read from string
    char data[] = "Alice 25 3.85";
    char name[20];
    int age;
    double gpa;

    sscanf(data, "%s %d %lf", name, &age, &gpa);
    printf("\\nParsed from string:\\n");
    printf("Name: %s\\n", name);
    printf("Age: %d\\n", age);
    printf("GPA: %.2f\\n", gpa);

    return 0;
}`,
      expectedOutput: `sprintf result: Score: 95, Average: 87.5
snprintf result: Value: 123456789

Parsed from string:
Name: Alice
Age: 25
GPA: 3.85`,
      explanation: 'sprintf는 문자열에 출력하고, sscanf는 문자열에서 읽어옵니다. snprintf는 버퍼 오버플로를 방지합니다.',
      explanationEn: 'sprintf writes to string, sscanf reads from string. snprintf prevents buffer overflow.'
    },
    {
      id: 's4e9',
      title: '표 형태 출력',
      titleEn: 'Table Formatting',
      description: '정렬된 표 형태로 데이터를 출력합니다.',
      descriptionEn: 'Output data in an aligned table format.',
      code: `#include <stdio.h>

int main() {
    printf("%-15s %5s %10s\\n", "Name", "Age", "Score");
    printf("%-15s %5s %10s\\n", "---------------", "-----", "----------");
    printf("%-15s %5d %10.1f\\n", "Kim Minsoo", 22, 95.5);
    printf("%-15s %5d %10.1f\\n", "Lee Jiyoung", 21, 88.0);
    printf("%-15s %5d %10.1f\\n", "Park Jihoon", 23, 92.3);
    printf("%-15s %5d %10.1f\\n", "Choi Yuna", 22, 97.8);

    printf("\\n=== Multiplication Table ===\\n");
    printf("    ");
    for (int i = 1; i <= 5; i++) {
        printf("%4d", i);
    }
    printf("\\n");

    for (int i = 1; i <= 5; i++) {
        printf("%2d |", i);
        for (int j = 1; j <= 5; j++) {
            printf("%4d", i * j);
        }
        printf("\\n");
    }

    return 0;
}`,
      expectedOutput: `Name              Age      Score
--------------- -----  ----------
Kim Minsoo         22       95.5
Lee Jiyoung        21       88.0
Park Jihoon        23       92.3
Choi Yuna          22       97.8

=== Multiplication Table ===
       1   2   3   4   5
 1 |   1   2   3   4   5
 2 |   2   4   6   8  10
 3 |   3   6   9  12  15
 4 |   4   8  12  16  20
 5 |   5  10  15  20  25`,
      explanation: '%-15s는 왼쪽 정렬 15자리, %5d는 오른쪽 정렬 5자리입니다. 표 출력에 유용합니다.',
      explanationEn: '%-15s is left-aligned 15 chars, %5d is right-aligned 5 chars. Useful for table output.'
    }
  ]
}

export default step4
