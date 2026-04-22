import{e as E,f as C,u as N,a as T,b as L,l as S,r as A,j as n,L as c,d as I}from"./index-CYOQNERo.js";import{C as D}from"./CodeEditor-BwgA9WF7.js";const O={"hello-c":{sections:[{heading:"프로그램의 기본 구조",headingEn:"Basic Structure of a C Program",text:["C 프로그램은 몇 가지 핵심 요소로 구성됩니다. 가장 먼저, #include <stdio.h>는 표준 입출력 라이브러리를 포함시키는 전처리기 지시문입니다. 이를 통해 printf()와 같은 함수를 사용할 수 있습니다.","int main() 함수는 프로그램의 진입점(entry point)으로, 모든 C 프로그램은 반드시 main 함수를 가져야 합니다. int는 함수의 반환 타입이며, return 0;은 프로그램이 정상적으로 종료되었음을 운영체제에 알립니다.","중괄호 { }는 함수의 본문(body)을 감싸며, 그 안에 실행할 명령문(statement)들을 작성합니다. 각 명령문은 반드시 세미콜론(;)으로 끝나야 합니다."],textEn:["A C program consists of several key elements. First, #include <stdio.h> is a preprocessor directive that includes the standard input/output library. This allows us to use functions like printf().","The int main() function is the entry point of the program. Every C program must have a main function. int is the return type, and return 0; tells the operating system that the program terminated successfully.","Curly braces { } enclose the body of the function, where you write the statements to execute. Each statement must end with a semicolon (;)."],code:`#include <stdio.h>

int main() {
    printf("Program started\\n");
    printf("Program finished\\n");
    return 0;
}`,expectedOutput:`Program started
Program finished`,tip:"모든 C 프로그램은 main() 함수에서 시작합니다. return 0;을 잊지 마세요!",tipEn:"Every C program starts from the main() function. Don't forget return 0;!"},{heading:"첫 번째 프로그램: Hello, World!",headingEn:"First Program: Hello, World!",text:['"Hello, World!" 프로그램은 프로그래밍 학습의 전통적인 첫 번째 프로그램입니다. 이 프로그램은 화면에 텍스트를 출력하는 가장 간단한 예제입니다.','printf() 함수는 큰따옴표(" ") 안의 문자열을 화면에 출력합니다. \\n은 줄바꿈(개행) 문자로, 출력 후 커서를 다음 줄로 이동시킵니다.'],textEn:['The "Hello, World!" program is the traditional first program in learning programming. It is the simplest example of outputting text to the screen.','The printf() function prints the string inside double quotes (" ") to the screen. \\n is the newline character, which moves the cursor to the next line after printing.'],code:`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,expectedOutput:"Hello, World!"},{heading:"printf 기초",headingEn:"printf Basics",text:["printf() 함수는 C에서 가장 많이 사용되는 출력 함수입니다. 여러 번 호출하여 여러 줄을 출력할 수 있으며, \\n 없이 사용하면 같은 줄에 연속으로 출력됩니다.","하나의 printf() 안에서 \\n을 사용하면 출력 중간에 줄을 바꿀 수도 있습니다. 다양한 방식으로 텍스트를 조합하여 원하는 형태의 출력을 만들 수 있습니다."],textEn:["The printf() function is the most commonly used output function in C. You can call it multiple times to print multiple lines. Without \\n, the output continues on the same line.","You can use \\n within a single printf() to break lines in the middle of output. Combine text in various ways to create the desired output format."],code:`#include <stdio.h>

int main() {
    printf("Line 1\\n");
    printf("Line 2\\n");
    printf("Same ");
    printf("line\\n");
    printf("A\\nB\\nC\\n");
    return 0;
}`,expectedOutput:`Line 1
Line 2
Same line
A
B
C`},{heading:"주석 작성법",headingEn:"Writing Comments",text:["주석(comment)은 코드에 설명을 추가하기 위해 사용되며, 컴파일러에 의해 무시됩니다. 코드의 가독성을 높이고, 다른 개발자나 미래의 자신이 코드를 이해하는 데 도움을 줍니다.",'한 줄 주석은 //로 시작하며, 해당 줄의 끝까지 주석으로 처리됩니다. 여러 줄 주석은 /*로 시작하고 */로 끝납니다. 좋은 주석은 "왜(why)" 그렇게 했는지를 설명합니다.'],textEn:["Comments are used to add explanations to your code and are ignored by the compiler. They improve code readability and help other developers (or your future self) understand the code.",'Single-line comments start with //. Multi-line comments start with /* and end with */. Good comments explain "why" something is done, not just "what" is done.'],code:`#include <stdio.h>

/* This is a multi-line comment.
   It can span multiple lines. */

int main() {
    // This is a single-line comment
    printf("Comments are ignored by the compiler\\n");

    // printf("This line will NOT be printed\\n");

    printf("But this line will\\n");
    return 0;
}`,expectedOutput:`Comments are ignored by the compiler
But this line will`,tip:'좋은 주석은 코드가 "무엇을" 하는지가 아니라, "왜" 그렇게 하는지를 설명합니다.',tipEn:'Good comments explain "why" something is done, not "what" the code does.'}]},variables:{sections:[{heading:"기본 자료형",headingEn:"Basic Data Types",text:["C 언어에는 네 가지 기본 자료형이 있습니다: int(정수), float(단정밀도 실수), double(배정밀도 실수), char(문자). 각 자료형은 저장할 수 있는 데이터의 종류와 크기가 다릅니다.","int는 정수(예: 42, -7)를 저장하며, float와 double은 소수점이 있는 실수(예: 3.14)를 저장합니다. double은 float보다 더 높은 정밀도를 가집니다. char는 하나의 문자(예: 'A')를 저장하며, 작은따옴표로 감쌉니다."],textEn:["C has four basic data types: int (integer), float (single-precision floating-point), double (double-precision floating-point), and char (character). Each type differs in the kind and size of data it can store.","int stores whole numbers (e.g., 42, -7). float and double store decimal numbers (e.g., 3.14), with double having higher precision. char stores a single character (e.g., 'A') and uses single quotes."],code:`#include <stdio.h>

int main() {
    int age = 25;
    float height = 175.5f;
    double pi = 3.14159265358979;
    char grade = 'A';

    printf("Age: %d\\n", age);
    printf("Height: %.1f\\n", height);
    printf("Pi: %.14f\\n", pi);
    printf("Grade: %c\\n", grade);
    return 0;
}`,expectedOutput:`Age: 25
Height: 175.5
Pi: 3.14159265358979
Grade: A`},{heading:"변수 선언과 초기화",headingEn:"Variable Declaration & Initialization",text:["변수를 사용하려면 먼저 선언(declaration)해야 합니다. 선언은 자료형과 변수 이름을 지정합니다. 초기화(initialization)는 선언과 동시에 값을 할당하는 것입니다.","변수 이름은 문자, 숫자, 밑줄(_)을 사용할 수 있지만, 반드시 문자 또는 밑줄로 시작해야 합니다. 대소문자를 구분하므로 age와 Age는 서로 다른 변수입니다. int, float 같은 예약어는 변수 이름으로 사용할 수 없습니다."],textEn:["To use a variable, you must first declare it by specifying its data type and name. Initialization means assigning a value at the time of declaration.","Variable names can contain letters, digits, and underscores (_), but must start with a letter or underscore. Names are case-sensitive, so age and Age are different variables. Reserved words like int and float cannot be used as variable names."],code:`#include <stdio.h>

int main() {
    int x;
    int y = 10;
    x = 5;

    int sum = x + y;

    float temperature = 36.6f;
    char initial = 'K';

    printf("x = %d, y = %d\\n", x, y);
    printf("sum = %d\\n", sum);
    printf("temperature = %.1f\\n", temperature);
    printf("initial = %c\\n", initial);
    return 0;
}`,expectedOutput:`x = 5, y = 10
sum = 15
temperature = 36.6
initial = K`},{heading:"sizeof 연산자",headingEn:"The sizeof Operator",text:["sizeof 연산자는 자료형이나 변수가 메모리에서 차지하는 바이트 수를 반환합니다. 각 자료형의 크기는 시스템마다 다를 수 있지만, 일반적으로 char는 1바이트, int는 4바이트, float는 4바이트, double은 8바이트입니다.","sizeof의 결과 타입은 size_t이지만, 이 브라우저 컴파일러에서는 (int)로 캐스팅하여 %d로 출력합니다. 메모리 크기를 이해하면 효율적인 프로그래밍에 도움이 됩니다."],textEn:["The sizeof operator returns the number of bytes a data type or variable occupies in memory. Sizes may vary by system, but typically char is 1 byte, int is 4 bytes, float is 4 bytes, and double is 8 bytes.","The result type of sizeof is size_t, but in this browser compiler we cast it to (int) and print with %d. Understanding memory sizes helps write efficient programs."],code:`#include <stdio.h>

int main() {
    printf("Size of char:   %d byte\\n", (int)sizeof(char));
    printf("Size of int:    %d bytes\\n", (int)sizeof(int));
    printf("Size of float:  %d bytes\\n", (int)sizeof(float));
    printf("Size of double: %d bytes\\n", (int)sizeof(double));
    return 0;
}`,expectedOutput:`Size of char:   1 byte
Size of int:    4 bytes
Size of float:  4 bytes
Size of double: 8 bytes`,tip:"sizeof는 컴파일 시에 결정되므로 매우 빠릅니다. 배열의 크기를 구할 때도 유용하게 사용됩니다.",tipEn:"sizeof is determined at compile time, so it is very fast. It is also useful for calculating the size of arrays."},{heading:"상수와 형변환",headingEn:"Constants & Type Casting",text:["상수(constant)는 값이 변경되지 않는 변수입니다. const 키워드를 사용하거나 #define 전처리기 지시문으로 정의할 수 있습니다. const로 선언된 변수는 초기화 후 값을 변경할 수 없습니다.","형변환(type casting)은 하나의 자료형을 다른 자료형으로 변환하는 것입니다. 명시적 캐스팅은 (자료형) 형태로 작성합니다. 예를 들어, 정수 나눗셈에서 소수점 결과를 얻으려면 피연산자를 float로 캐스팅해야 합니다."],textEn:["A constant is a variable whose value cannot be changed. You can use the const keyword or the #define preprocessor directive. A const variable cannot be modified after initialization.","Type casting converts one data type to another. Explicit casting is written as (type). For example, to get a decimal result from integer division, you must cast an operand to float."],code:`#include <stdio.h>
#define PI 3.14159

int main() {
    const int MAX = 100;
    printf("MAX = %d\\n", MAX);
    printf("PI = %.5f\\n", PI);

    int a = 7;
    int b = 2;
    printf("Integer division: %d / %d = %d\\n", a, b, a / b);
    printf("Float division:   %d / %d = %.2f\\n", a, b, (float)a / b);

    double big = 9.99;
    int truncated = (int)big;
    printf("%.2f -> %d (truncated)\\n", big, truncated);
    return 0;
}`,expectedOutput:`MAX = 100
PI = 3.14159
Integer division: 7 / 2 = 3
Float division:   7 / 2 = 3.50
9.99 -> 9 (truncated)`,warning:"정수 나눗셈은 소수점 이하를 버립니다! 소수점 결과가 필요하면 반드시 형변환을 사용하세요.",warningEn:"Integer division truncates the decimal part! Always use type casting if you need a decimal result."}]},operators:{sections:[{heading:"산술 연산자",headingEn:"Arithmetic Operators",text:["C의 산술 연산자는 수학의 기본 연산을 수행합니다: 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%). 이 연산자들은 정수와 실수 모두에 사용할 수 있습니다.","주의할 점은 정수끼리의 나눗셈은 결과도 정수입니다(소수점 이하 버림). 나머지 연산자(%)는 정수에만 사용할 수 있으며, 나눗셈의 나머지를 반환합니다. 짝수/홀수 판별 등에 유용합니다."],textEn:["Arithmetic operators in C perform basic math operations: addition (+), subtraction (-), multiplication (*), division (/), and modulus (%). They work with both integers and floating-point numbers.","Note that division between two integers results in an integer (decimal part is truncated). The modulus operator (%) works only with integers and returns the remainder. It is useful for checking even/odd numbers, etc."],code:`#include <stdio.h>

int main() {
    int a = 17;
    int b = 5;

    printf("%d + %d = %d\\n", a, b, a + b);
    printf("%d - %d = %d\\n", a, b, a - b);
    printf("%d * %d = %d\\n", a, b, a * b);
    printf("%d / %d = %d\\n", a, b, a / b);
    printf("%d %% %d = %d\\n", a, b, a % b);
    return 0;
}`,expectedOutput:`17 + 5 = 22
17 - 5 = 12
17 * 5 = 85
17 / 5 = 3
17 % 5 = 2`},{heading:"비교와 논리 연산자",headingEn:"Comparison & Logical Operators",text:["비교 연산자는 두 값을 비교하여 참(1) 또는 거짓(0)을 반환합니다: 같음(==), 다름(!=), 작음(<), 큼(>), 작거나 같음(<=), 크거나 같음(>=).","논리 연산자는 조건을 결합합니다: AND(&&)는 두 조건이 모두 참일 때, OR(||)는 하나라도 참일 때 참을 반환합니다. NOT(!)은 참과 거짓을 반전시킵니다. C에서 0은 거짓, 0이 아닌 모든 값은 참입니다."],textEn:["Comparison operators compare two values and return true (1) or false (0): equal (==), not equal (!=), less than (<), greater than (>), less than or equal (<=), greater than or equal (>=).","Logical operators combine conditions: AND (&&) returns true when both conditions are true, OR (||) when at least one is true. NOT (!) inverts true and false. In C, 0 is false, and any non-zero value is true."],code:`#include <stdio.h>

int main() {
    int x = 10;
    int y = 20;

    printf("x == y: %d\\n", x == y);
    printf("x != y: %d\\n", x != y);
    printf("x < y:  %d\\n", x < y);
    printf("x > y:  %d\\n", x > y);

    int a = 1;
    int b = 0;
    printf("a && b: %d\\n", a && b);
    printf("a || b: %d\\n", a || b);
    printf("!a:     %d\\n", !a);
    return 0;
}`,expectedOutput:`x == y: 0
x != y: 1
x < y:  1
x > y:  0
a && b: 0
a || b: 1
!a:     0`},{heading:"대입 연산자",headingEn:"Assignment Operators",text:["대입 연산자(=)는 오른쪽 값을 왼쪽 변수에 저장합니다. 복합 대입 연산자는 연산과 대입을 동시에 수행합니다: +=, -=, *=, /=, %=.","예를 들어, x += 5는 x = x + 5와 동일합니다. 복합 대입 연산자를 사용하면 코드를 더 간결하게 작성할 수 있습니다. 증감 연산자 ++와 --도 자주 사용되며, 변수의 값을 1만큼 증가 또는 감소시킵니다."],textEn:["The assignment operator (=) stores the right-hand value into the left-hand variable. Compound assignment operators perform an operation and assignment together: +=, -=, *=, /=, %=.","For example, x += 5 is equivalent to x = x + 5. Compound assignment operators make code more concise. The increment (++) and decrement (--) operators are also commonly used to increase or decrease a variable by 1."],code:`#include <stdio.h>

int main() {
    int x = 10;
    printf("x = %d\\n", x);

    x += 5;
    printf("x += 5 -> %d\\n", x);

    x -= 3;
    printf("x -= 3 -> %d\\n", x);

    x *= 2;
    printf("x *= 2 -> %d\\n", x);

    x /= 4;
    printf("x /= 4 -> %d\\n", x);

    x %= 3;
    printf("x %%= 3 -> %d\\n", x);

    x++;
    printf("x++ -> %d\\n", x);

    x--;
    printf("x-- -> %d\\n", x);
    return 0;
}`,expectedOutput:`x = 10
x += 5 -> 15
x -= 3 -> 12
x *= 2 -> 24
x /= 4 -> 6
x %= 3 -> 0
x++ -> 1
x-- -> 0`},{heading:"연산자 우선순위",headingEn:"Operator Precedence",text:["연산자 우선순위는 여러 연산자가 있는 식에서 어떤 연산이 먼저 수행되는지를 결정합니다. 수학과 마찬가지로, 곱셈(*)과 나눗셈(/)이 덧셈(+)과 뺄셈(-)보다 먼저 수행됩니다.","괄호 ()를 사용하면 우선순위를 명시적으로 지정할 수 있습니다. 복잡한 수식에서는 괄호를 적극적으로 사용하여 의도를 명확히 하는 것이 좋습니다. 비교 연산자는 산술 연산자보다 우선순위가 낮고, 논리 연산자는 비교 연산자보다 낮습니다."],textEn:["Operator precedence determines the order of operations in expressions with multiple operators. Just like in math, multiplication (*) and division (/) are performed before addition (+) and subtraction (-).","Parentheses () can explicitly specify precedence. Use parentheses actively in complex expressions to make your intent clear. Comparison operators have lower precedence than arithmetic, and logical operators have lower precedence than comparison."],code:`#include <stdio.h>

int main() {
    int result1 = 2 + 3 * 4;
    int result2 = (2 + 3) * 4;
    printf("2 + 3 * 4 = %d\\n", result1);
    printf("(2 + 3) * 4 = %d\\n", result2);

    int result3 = 10 - 2 * 3 + 1;
    int result4 = (10 - 2) * (3 + 1);
    printf("10 - 2 * 3 + 1 = %d\\n", result3);
    printf("(10 - 2) * (3 + 1) = %d\\n", result4);

    int result5 = 20 / 4 + 3 % 2;
    printf("20 / 4 + 3 %% 2 = %d\\n", result5);
    return 0;
}`,expectedOutput:`2 + 3 * 4 = 14
(2 + 3) * 4 = 20
10 - 2 * 3 + 1 = 5
(10 - 2) * (3 + 1) = 32
20 / 4 + 3 % 2 = 6`,tip:"헷갈릴 때는 항상 괄호를 사용하세요! 코드 가독성도 좋아지고 버그도 예방할 수 있습니다.",tipEn:"When in doubt, always use parentheses! It improves code readability and prevents bugs."}]},"input-output":{sections:[{heading:"printf 서식 지정",headingEn:"printf Formatting",text:["printf()는 서식 지정자(format specifier)를 사용하여 변수의 값을 형식에 맞게 출력합니다. 주요 서식 지정자: %d(정수), %f(실수), %c(문자), %s(문자열).","숫자 앞에 폭(width)을 지정하면 최소 출력 너비를 설정할 수 있고, 실수는 .뒤에 자릿수를 지정하여 소수점 이하 자릿수를 제어합니다. 예: %8d는 최소 8자리로 오른쪽 정렬, %.2f는 소수점 둘째 자리까지 출력합니다."],textEn:["printf() uses format specifiers to print variable values in a specific format. Key specifiers: %d (integer), %f (float), %c (character), %s (string).","Specifying a width before the specifier sets the minimum output width. For floats, the precision after the dot controls decimal places. For example: %8d right-aligns in 8 characters, %.2f prints 2 decimal places."],code:`#include <stdio.h>

int main() {
    int num = 42;
    float pi = 3.14159f;
    char ch = 'X';

    printf("Integer: %d\\n", num);
    printf("Float:   %f\\n", pi);
    printf("2 decimals: %.2f\\n", pi);
    printf("Char: %c\\n", ch);
    printf("String: %s\\n", "Hello");

    printf("Width 8: [%8d]\\n", num);
    printf("Left:    [%-8d]\\n", num);
    printf("Padded:  [%05d]\\n", num);
    return 0;
}`,expectedOutput:`Integer: 42
Float:   3.141590
2 decimals: 3.14
Char: X
String: Hello
Width 8: [      42]
Left:    [42      ]
Padded:  [00042]`},{heading:"이스케이프 문자",headingEn:"Escape Characters",text:["이스케이프 문자(escape character)는 백슬래시(\\)로 시작하는 특수 문자입니다. 화면에 직접 입력할 수 없는 문자를 표현하는 데 사용됩니다.",`자주 사용되는 이스케이프 문자: \\n(줄바꿈), \\t(탭), \\\\(백슬래시 자체), \\"(큰따옴표), \\'(작은따옴표). 이들은 문자열 안에서 특별한 의미를 가집니다.`],textEn:["Escape characters begin with a backslash (\\) and represent special characters that cannot be typed directly. They are used to insert non-printable characters into strings.",`Common escape characters: \\n (newline), \\t (tab), \\\\ (backslash itself), \\" (double quote), \\' (single quote). These have special meanings within strings.`],code:`#include <stdio.h>

int main() {
    printf("Line1\\nLine2\\nLine3\\n");
    printf("\\n");
    printf("Col1\\tCol2\\tCol3\\n");
    printf("10\\t20\\t30\\n");
    printf("\\n");
    printf("She said \\"Hello!\\"\\n");
    printf("Path: C:\\\\Users\\\\file.txt\\n");
    return 0;
}`,expectedOutput:`Line1
Line2
Line3

Col1	Col2	Col3
10	20	30

She said "Hello!"
Path: C:\\Users\\file.txt`},{heading:"서식 지정자 활용",headingEn:"Format Specifiers Practice",text:["서식 지정자를 활용하면 깔끔하게 정렬된 출력을 만들 수 있습니다. 표(table) 형태의 출력에서 특히 유용합니다.","%-Ns는 문자열을 N자리에서 왼쪽 정렬하고, %Nd는 숫자를 N자리에서 오른쪽 정렬합니다. 이를 조합하면 보기 좋은 표를 만들 수 있습니다."],textEn:["Using format specifiers, you can create neatly aligned output. This is especially useful for table-like displays.","%-Ns left-aligns a string in N characters, and %Nd right-aligns a number in N characters. Combining these creates clean, readable tables."],code:`#include <stdio.h>

int main() {
    printf("%-12s %5s %8s\\n", "Item", "Qty", "Price");
    printf("%-12s %5s %8s\\n", "----", "---", "-----");
    printf("%-12s %5d %8.2f\\n", "Apple", 3, 1.50);
    printf("%-12s %5d %8.2f\\n", "Banana", 12, 0.75);
    printf("%-12s %5d %8.2f\\n", "Cherry", 50, 3.20);
    return 0;
}`,expectedOutput:`Item           Qty    Price
----           ---    -----
Apple            3     1.50
Banana          12     0.75
Cherry          50     3.20`,tip:"scanf()는 브라우저 컴파일러에서 지원되지 않습니다. 이 튜토리얼에서는 printf()를 중심으로 학습합니다.",tipEn:"scanf() is not supported in the browser compiler. This tutorial focuses on printf() for learning."}]},conditionals:{sections:[{heading:"if / else if / else",headingEn:"if / else if / else",text:["조건문은 특정 조건에 따라 다른 코드를 실행할 수 있게 합니다. if 문은 조건이 참(0이 아닌 값)이면 해당 블록을 실행합니다.","else if는 이전 조건이 거짓일 때 새로운 조건을 검사합니다. else는 모든 조건이 거짓일 때 실행됩니다. 조건은 위에서 아래로 순서대로 검사되며, 참인 조건을 만나면 나머지는 건너뜁니다."],textEn:["Conditional statements allow you to execute different code based on certain conditions. An if statement executes its block when the condition is true (non-zero value).","else if checks a new condition when the previous ones are false. else executes when all conditions are false. Conditions are checked top to bottom, and once a true condition is found, the rest are skipped."],code:`#include <stdio.h>

int main() {
    int score = 85;

    if (score >= 90) {
        printf("Grade: A\\n");
    } else if (score >= 80) {
        printf("Grade: B\\n");
    } else if (score >= 70) {
        printf("Grade: C\\n");
    } else if (score >= 60) {
        printf("Grade: D\\n");
    } else {
        printf("Grade: F\\n");
    }

    int num = -3;
    if (num > 0) {
        printf("%d is positive\\n", num);
    } else if (num < 0) {
        printf("%d is negative\\n", num);
    } else {
        printf("%d is zero\\n", num);
    }
    return 0;
}`,expectedOutput:`Grade: B
-3 is negative`},{heading:"switch-case 문",headingEn:"switch-case Statement",text:["switch 문은 하나의 변수 값에 따라 여러 경우(case) 중 하나를 실행합니다. if-else if 체인이 길어질 때 더 깔끔한 대안이 됩니다.","각 case 끝에 break;를 넣어야 합니다. break가 없으면 다음 case로 떨어져(fall-through) 계속 실행됩니다. default는 어떤 case에도 해당하지 않을 때 실행됩니다."],textEn:["The switch statement selects one of many code blocks based on the value of a variable. It is a cleaner alternative when you have a long chain of if-else if statements.","Each case must end with break;. Without break, execution falls through to the next case. The default case runs when no other case matches."],code:`#include <stdio.h>

int main() {
    int day = 3;

    switch (day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        case 3:
            printf("Wednesday\\n");
            break;
        case 4:
            printf("Thursday\\n");
            break;
        case 5:
            printf("Friday\\n");
            break;
        default:
            printf("Weekend\\n");
            break;
    }
    return 0;
}`,expectedOutput:"Wednesday"},{heading:"삼항 연산자",headingEn:"Ternary Operator",text:["삼항 연산자(? :)는 간단한 if-else를 한 줄로 작성할 수 있는 연산자입니다. 형식: 조건 ? 참일 때 값 : 거짓일 때 값.","삼항 연산자는 변수에 조건부 값을 할당하거나, 간단한 출력을 할 때 유용합니다. 하지만 복잡한 조건에서는 가독성이 떨어질 수 있으므로 일반 if-else를 사용하는 것이 좋습니다."],textEn:["The ternary operator (? :) lets you write a simple if-else in a single line. Format: condition ? value_if_true : value_if_false.","The ternary operator is useful for assigning conditional values or simple output. However, for complex conditions, regular if-else statements are more readable."],code:`#include <stdio.h>

int main() {
    int age = 20;
    int num = -7;

    printf("%s\\n", (age >= 18) ? "Adult" : "Minor");

    int abs_val = (num < 0) ? -num : num;
    printf("Absolute value of %d is %d\\n", num, abs_val);

    int a = 15;
    int b = 23;
    int max = (a > b) ? a : b;
    printf("Max of %d and %d is %d\\n", a, b, max);
    return 0;
}`,expectedOutput:`Adult
Absolute value of -7 is 7
Max of 15 and 23 is 23`},{heading:"조건문 실습: 성적 계산기",headingEn:"Practice: Grade Calculator",text:["지금까지 배운 조건문을 활용하여 좀 더 복잡한 프로그램을 만들어 봅시다. 점수에 따라 등급을 계산하고, 합격/불합격 여부도 판단하는 프로그램입니다.","if-else 문과 논리 연산자(&&)를 함께 사용하면 더 정교한 조건 검사를 할 수 있습니다."],textEn:["Let's use the conditional statements we have learned to create a more complex program. This program calculates a grade from a score and determines pass/fail status.","Combining if-else with logical operators (&&) allows more sophisticated condition checking."],code:`#include <stdio.h>

int main() {
    int korean = 85;
    int math = 92;
    int english = 78;
    int total = korean + math + english;
    int average = total / 3;

    printf("Korean:  %d\\n", korean);
    printf("Math:    %d\\n", math);
    printf("English: %d\\n", english);
    printf("Total:   %d\\n", total);
    printf("Average: %d\\n", average);

    char grade;
    if (average >= 90) {
        grade = 'A';
    } else if (average >= 80) {
        grade = 'B';
    } else if (average >= 70) {
        grade = 'C';
    } else {
        grade = 'F';
    }
    printf("Grade:   %c\\n", grade);
    printf("Result:  %s\\n", (average >= 60) ? "PASS" : "FAIL");
    return 0;
}`,expectedOutput:`Korean:  85
Math:    92
English: 78
Total:   255
Average: 85
Grade:   B
Result:  PASS`}]},loops:{sections:[{heading:"for 루프",headingEn:"for Loop",text:["for 루프는 반복 횟수가 정해져 있을 때 가장 많이 사용됩니다. 형식: for(초기식; 조건식; 증감식) { 반복할 코드 }. 초기식은 한 번만 실행되고, 조건식이 참인 동안 코드를 반복하며, 매 반복 후 증감식이 실행됩니다.","for 루프의 세 부분(초기식, 조건식, 증감식)을 한눈에 볼 수 있어 반복의 흐름을 이해하기 쉽습니다. 카운팅, 합계 계산 등에 주로 사용됩니다."],textEn:["The for loop is most commonly used when the number of iterations is known. Format: for(init; condition; update) { code }. The init runs once, the code repeats while condition is true, and update runs after each iteration.","All three parts (init, condition, update) are visible at once, making the loop flow easy to understand. It is commonly used for counting and calculating sums."],code:`#include <stdio.h>

int main() {
    int i;
    for (i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    printf("\\n");

    int sum = 0;
    for (i = 1; i <= 10; i++) {
        sum += i;
    }
    printf("Sum of 1 to 10 = %d\\n", sum);

    for (i = 2; i <= 10; i += 2) {
        printf("%d ", i);
    }
    printf("\\n");
    return 0;
}`,expectedOutput:`1 2 3 4 5 
Sum of 1 to 10 = 55
2 4 6 8 10 `},{heading:"while과 do-while",headingEn:"while and do-while",text:["while 루프는 조건이 참인 동안 코드를 반복합니다. for 루프와 달리 반복 횟수가 명확하지 않을 때 유용합니다. 조건을 먼저 검사하므로, 처음부터 조건이 거짓이면 한 번도 실행되지 않습니다.","do-while 루프는 코드를 먼저 실행한 후 조건을 검사합니다. 따라서 최소 한 번은 반드시 실행됩니다. do { 코드 } while(조건); 형태이며, while 뒤에 세미콜론(;)을 반드시 붙여야 합니다."],textEn:["The while loop repeats code as long as the condition is true. Unlike for, it is useful when the number of iterations is unclear. Since the condition is checked first, the code may never execute if the condition is initially false.","The do-while loop executes the code first, then checks the condition. It always executes at least once. Format: do { code } while(condition); Note the required semicolon after while."],code:`#include <stdio.h>

int main() {
    int num = 12345;
    int digits = 0;

    int temp = num;
    while (temp > 0) {
        digits++;
        temp /= 10;
    }
    printf("%d has %d digits\\n", num, digits);

    int count = 1;
    do {
        printf("count = %d\\n", count);
        count++;
    } while (count <= 3);
    return 0;
}`,expectedOutput:`12345 has 5 digits
count = 1
count = 2
count = 3`},{heading:"break와 continue",headingEn:"break and continue",text:["break 문은 루프를 즉시 종료합니다. 특정 조건을 만족하면 더 이상 반복할 필요가 없을 때 사용합니다. break는 가장 가까운 루프 하나만 종료합니다.","continue 문은 현재 반복의 나머지 코드를 건너뛰고 다음 반복으로 넘어갑니다. 특정 조건에서 일부 처리를 건너뛸 때 유용합니다."],textEn:["The break statement exits a loop immediately. Use it when you no longer need to continue looping after meeting a certain condition. break only exits the innermost loop.","The continue statement skips the rest of the current iteration and moves to the next one. It is useful for skipping processing under certain conditions."],code:`#include <stdio.h>

int main() {
    int i;
    printf("Break example:\\n");
    for (i = 1; i <= 10; i++) {
        if (i == 6) {
            break;
        }
        printf("%d ", i);
    }
    printf("\\n");

    printf("Continue example:\\n");
    for (i = 1; i <= 10; i++) {
        if (i % 3 == 0) {
            continue;
        }
        printf("%d ", i);
    }
    printf("\\n");
    return 0;
}`,expectedOutput:`Break example:
1 2 3 4 5 
Continue example:
1 2 4 5 7 8 10 `},{heading:"중첩 반복문",headingEn:"Nested Loops",text:["중첩 반복문(nested loop)은 루프 안에 또 다른 루프를 넣는 것입니다. 바깥 루프가 한 번 반복될 때마다 안쪽 루프가 전체를 실행합니다.","2차원 패턴을 만들거나, 구구단처럼 행과 열이 있는 데이터를 처리할 때 유용합니다. 중첩 루프의 총 반복 횟수는 바깥 루프 횟수 x 안쪽 루프 횟수입니다."],textEn:["A nested loop places a loop inside another loop. Each time the outer loop iterates once, the inner loop runs completely.","Useful for creating 2D patterns or processing row-and-column data like multiplication tables. Total iterations = outer count x inner count."],code:`#include <stdio.h>

int main() {
    int i;
    int j;
    for (i = 1; i <= 4; i++) {
        for (j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\\n");
    }

    printf("\\n");

    for (i = 2; i <= 5; i++) {
        printf("%d x table: ", i);
        for (j = 1; j <= 3; j++) {
            printf("%d*%d=%d ", i, j, i * j);
        }
        printf("\\n");
    }
    return 0;
}`,expectedOutput:`* 
* * 
* * * 
* * * * 

2 x table: 2*1=2 2*2=4 2*3=6 
3 x table: 3*1=3 3*2=6 3*3=9 
4 x table: 4*1=4 4*2=8 4*3=12 
5 x table: 5*1=5 5*2=10 5*3=15 `}]},arrays:{sections:[{heading:"1차원 배열",headingEn:"1D Arrays",text:["배열(array)은 같은 자료형의 여러 값을 하나의 변수로 관리할 수 있는 자료구조입니다. 선언할 때 크기를 지정하며, 인덱스는 0부터 시작합니다.","배열 초기화는 중괄호 {}를 사용합니다. 개별 원소에는 배열이름[인덱스]로 접근합니다. 배열의 크기를 넘어서 접근하면 예측할 수 없는 결과가 발생하므로 주의해야 합니다."],textEn:["An array is a data structure that stores multiple values of the same type under a single variable name. You specify the size when declaring, and indices start from 0.","Arrays are initialized using curly braces {}. Individual elements are accessed with arrayName[index]. Accessing beyond the array bounds leads to unpredictable behavior, so be careful."],code:`#include <stdio.h>

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    int i;

    printf("Element at index 0: %d\\n", numbers[0]);
    printf("Element at index 3: %d\\n", numbers[3]);

    numbers[2] = 99;
    printf("After modification:\\n");
    for (i = 0; i < 5; i++) {
        printf("numbers[%d] = %d\\n", i, numbers[i]);
    }
    return 0;
}`,expectedOutput:`Element at index 0: 10
Element at index 3: 40
After modification:
numbers[0] = 10
numbers[1] = 20
numbers[2] = 99
numbers[3] = 40
numbers[4] = 50`},{heading:"배열 순회와 연산",headingEn:"Array Traversal & Operations",text:["배열의 모든 요소를 방문하는 것을 순회(traversal)라고 합니다. for 루프를 사용하여 배열의 합계, 평균, 최솟값, 최댓값 등을 계산할 수 있습니다.","배열의 크기를 sizeof(배열) / sizeof(배열[0])으로 계산하면 요소의 개수를 구할 수 있습니다. 이를 통해 배열 크기가 변경되더라도 코드를 수정할 필요가 없습니다."],textEn:["Visiting every element of an array is called traversal. Using a for loop, you can calculate the sum, average, minimum, and maximum of an array.","You can find the number of elements with sizeof(array) / sizeof(array[0]). This way, your code adapts automatically if the array size changes."],code:`#include <stdio.h>

int main() {
    int data[6] = {45, 12, 78, 34, 91, 23};
    int size = (int)sizeof(data) / (int)sizeof(data[0]);
    int i;

    int sum = 0;
    int min = data[0];
    int max = data[0];

    for (i = 0; i < size; i++) {
        sum += data[i];
        if (data[i] < min) min = data[i];
        if (data[i] > max) max = data[i];
    }

    printf("Array: ");
    for (i = 0; i < size; i++) {
        printf("%d ", data[i]);
    }
    printf("\\n");
    printf("Sum: %d\\n", sum);
    printf("Avg: %d\\n", sum / size);
    printf("Min: %d\\n", min);
    printf("Max: %d\\n", max);
    return 0;
}`,expectedOutput:`Array: 45 12 78 34 91 23 
Sum: 283
Avg: 47
Min: 12
Max: 91`},{heading:"2차원 배열",headingEn:"2D Arrays",text:["2차원 배열은 행(row)과 열(column)로 구성된 표(table) 형태의 데이터를 저장합니다. 선언: 자료형 이름[행][열]. 접근: 이름[행인덱스][열인덱스].","2차원 배열을 순회하려면 중첩 for 루프를 사용합니다. 바깥 루프는 행을, 안쪽 루프는 열을 순회합니다. 행렬(matrix) 연산이나 게임 보드 등에 활용됩니다."],textEn:["2D arrays store data in a table format with rows and columns. Declaration: type name[rows][cols]. Access: name[rowIndex][colIndex].","To traverse a 2D array, use nested for loops. The outer loop iterates over rows and the inner loop over columns. Used for matrix operations, game boards, etc."],code:`#include <stdio.h>

int main() {
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    int i;
    int j;

    printf("Matrix:\\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }

    int sum = 0;
    for (i = 0; i < 3; i++) {
        sum += matrix[i][i];
    }
    printf("Diagonal sum: %d\\n", sum);
    return 0;
}`,expectedOutput:`Matrix:
1 2 3 
4 5 6 
7 8 9 
Diagonal sum: 15`},{heading:"배열 정렬: 버블 정렬",headingEn:"Array Sorting: Bubble Sort",text:["버블 정렬(Bubble Sort)은 가장 간단한 정렬 알고리즘입니다. 인접한 두 요소를 비교하여 순서가 잘못되어 있으면 교환합니다. 이 과정을 배열이 정렬될 때까지 반복합니다.",'각 반복(pass)에서 가장 큰 값이 끝으로 "떠오르기(bubble up)" 때문에 버블 정렬이라 부릅니다. 시간 복잡도는 O(n^2)으로 효율적이지는 않지만, 알고리즘의 기초를 이해하는 데 좋습니다.'],textEn:["Bubble Sort is the simplest sorting algorithm. It compares adjacent elements and swaps them if they are in the wrong order. This process repeats until the array is sorted.",'In each pass, the largest value "bubbles up" to the end, hence the name. Its time complexity is O(n^2), which is not efficient, but it is great for understanding algorithm basics.'],code:`#include <stdio.h>

int main() {
    int arr[5] = {64, 25, 12, 22, 11};
    int n = 5;
    int i;
    int j;
    int temp;

    printf("Before: ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    printf("After:  ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    return 0;
}`,expectedOutput:`Before: 64 25 12 22 11 
After:  11 12 22 25 64 `,tip:"버블 정렬은 학습용으로 좋지만, 실무에서는 더 효율적인 정렬 알고리즘(퀵 정렬, 병합 정렬 등)을 사용합니다.",tipEn:"Bubble Sort is great for learning, but in practice, more efficient algorithms (Quick Sort, Merge Sort, etc.) are used."}]},"strings-basic":{sections:[{heading:"문자열이란?",headingEn:"What is a String?",text:[`C에서 문자열(string)은 문자(char) 배열로, 끝에 널 문자(\\0)가 자동으로 추가됩니다. 예를 들어, "Hello"는 'H', 'e', 'l', 'l', 'o', '\\0' 으로 총 6바이트를 차지합니다.`,'문자열을 선언하는 방법은 두 가지입니다: char str[] = "Hello"; 또는 char str[6] = "Hello";. 배열 크기를 지정할 때는 널 문자를 위한 공간(+1)을 반드시 확보해야 합니다.'],textEn:[`In C, a string is an array of characters (char) with a null terminator (\\0) automatically appended at the end. For example, "Hello" consists of 'H', 'e', 'l', 'l', 'o', '\\0', occupying 6 bytes total.`,'There are two ways to declare strings: char str[] = "Hello"; or char str[6] = "Hello";. When specifying the array size, always reserve space for the null terminator (+1).'],code:`#include <stdio.h>

int main() {
    char greeting[] = "Hello";
    printf("String: %s\\n", greeting);
    printf("Length (manual count):\\n");

    int i = 0;
    while (greeting[i] != '\\0') {
        printf("  greeting[%d] = '%c'\\n", i, greeting[i]);
        i++;
    }
    printf("Total characters: %d\\n", i);
    printf("Array size: %d bytes\\n", (int)sizeof(greeting));
    return 0;
}`,expectedOutput:`String: Hello
Length (manual count):
  greeting[0] = 'H'
  greeting[1] = 'e'
  greeting[2] = 'l'
  greeting[3] = 'l'
  greeting[4] = 'o'
Total characters: 5
Array size: 6 bytes`},{heading:"string.h 함수",headingEn:"string.h Functions",text:["string.h 헤더 파일에는 문자열을 다루는 유용한 함수들이 있습니다. strlen()은 문자열의 길이(널 문자 제외)를 반환하고, strcpy()는 문자열을 복사합니다.","strcmp()는 두 문자열을 비교하여, 같으면 0, 첫 번째가 크면 양수, 작으면 음수를 반환합니다. strcat()은 문자열을 이어 붙입니다(concatenation). 대상 배열에 충분한 공간이 있어야 합니다."],textEn:["The string.h header provides useful string functions. strlen() returns the length (excluding null terminator), and strcpy() copies a string.","strcmp() compares two strings: returns 0 if equal, positive if the first is greater, negative if smaller. strcat() concatenates strings. The destination array must have enough space."],code:`#include <stdio.h>
#include <string.h>

int main() {
    char str1[20] = "Hello";
    char str2[20] = "World";
    char str3[20];

    printf("str1: %s (length: %d)\\n", str1, (int)strlen(str1));
    printf("str2: %s (length: %d)\\n", str2, (int)strlen(str2));

    strcpy(str3, str1);
    printf("After strcpy: str3 = %s\\n", str3);

    int cmp = strcmp(str1, str2);
    if (cmp < 0) {
        printf("strcmp: \\"%s\\" comes before \\"%s\\"\\n", str1, str2);
    } else if (cmp > 0) {
        printf("strcmp: \\"%s\\" comes after \\"%s\\"\\n", str1, str2);
    } else {
        printf("strcmp: strings are equal\\n");
    }

    strcat(str1, " ");
    strcat(str1, str2);
    printf("After strcat: str1 = %s\\n", str1);
    return 0;
}`,expectedOutput:`str1: Hello (length: 5)
str2: World (length: 5)
After strcpy: str3 = Hello
strcmp: "Hello" comes before "World"
After strcat: str1 = Hello World`},{heading:"문자 함수 (ctype.h)",headingEn:"Character Functions (ctype.h)",text:["ctype.h 헤더에는 개별 문자를 검사하거나 변환하는 함수가 있습니다. toupper()는 소문자를 대문자로, tolower()는 대문자를 소문자로 변환합니다.","isdigit()은 문자가 숫자('0'~'9')인지, isalpha()는 알파벳인지 검사합니다. 이 함수들은 문자 하나에 대해 작동하며, 문자열 전체를 처리하려면 루프와 함께 사용합니다."],textEn:["The ctype.h header provides functions for testing and converting individual characters. toupper() converts lowercase to uppercase, tolower() converts uppercase to lowercase.","isdigit() checks if a character is a digit ('0'-'9'), isalpha() checks if it is a letter. These functions work on single characters; use a loop to process entire strings."],code:`#include <stdio.h>
#include <ctype.h>

int main() {
    char text[] = "Hello World 123";
    int i;
    int letters = 0;
    int digits = 0;
    int spaces = 0;

    printf("Original: %s\\n", text);

    printf("Uppercase: ");
    for (i = 0; text[i] != '\\0'; i++) {
        printf("%c", toupper(text[i]));
        if (isalpha(text[i])) letters++;
        if (isdigit(text[i])) digits++;
        if (text[i] == ' ') spaces++;
    }
    printf("\\n");

    printf("Letters: %d\\n", letters);
    printf("Digits: %d\\n", digits);
    printf("Spaces: %d\\n", spaces);
    return 0;
}`,expectedOutput:`Original: Hello World 123
Uppercase: HELLO WORLD 123
Letters: 10
Digits: 3
Spaces: 2`},{heading:"문자열 실습: 문자열 뒤집기",headingEn:"String Practice: Reverse a String",text:["문자열 뒤집기는 프로그래밍에서 자주 등장하는 연습 문제입니다. 배열의 양 끝에서 시작하여 중앙으로 이동하면서 문자를 교환하는 방식으로 구현할 수 있습니다.","이 알고리즘은 문자열 길이의 절반만 반복하면 되므로 효율적입니다. 임시 변수(temp)를 사용하여 두 문자의 값을 교환합니다."],textEn:["Reversing a string is a common programming exercise. It can be implemented by starting from both ends of the array and swapping characters while moving toward the center.","This algorithm only needs to iterate through half the string length, making it efficient. A temporary variable (temp) is used to swap two character values."],code:`#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Programming";
    int len = (int)strlen(str);
    int i;
    char temp;

    printf("Original: %s\\n", str);

    for (i = 0; i < len / 2; i++) {
        temp = str[i];
        str[i] = str[len - 1 - i];
        str[len - 1 - i] = temp;
    }

    printf("Reversed: %s\\n", str);
    return 0;
}`,expectedOutput:`Original: Programming
Reversed: gnimmargorP`,tip:'문자열은 배열이므로 개별 문자를 인덱스로 접근하여 수정할 수 있습니다. 단, 문자열 리터럴(예: char *s = "hello")은 수정할 수 없습니다.',tipEn:'Since strings are arrays, you can access and modify individual characters by index. However, string literals (e.g., char *s = "hello") cannot be modified.'}]},"functions-basic":{sections:[{heading:"함수 정의와 호출",headingEn:"Function Definition & Calling",text:["함수(function)는 특정 작업을 수행하는 코드 블록입니다. 코드를 재사용하고, 프로그램을 논리적 단위로 나누어 가독성을 높입니다. 함수는 반환 타입, 이름, 매개변수 목록, 본문으로 구성됩니다.","void 반환 타입은 함수가 값을 반환하지 않음을 의미합니다. 함수를 호출하려면 함수 이름과 괄호를 사용하며, 필요한 인자(argument)를 전달합니다."],textEn:["A function is a block of code that performs a specific task. Functions enable code reuse and divide programs into logical units for better readability. A function consists of a return type, name, parameter list, and body.","A void return type means the function does not return a value. To call a function, use its name with parentheses and pass any required arguments."],code:`#include <stdio.h>

void printLine() {
    printf("--------------------\\n");
}

void greet(char name[]) {
    printf("Hello, %s!\\n", name);
}

void printRepeat(char ch, int count) {
    int i;
    for (i = 0; i < count; i++) {
        printf("%c", ch);
    }
    printf("\\n");
}

int main() {
    printLine();
    greet("Alice");
    greet("Bob");
    printLine();
    printRepeat('*', 10);
    return 0;
}`,expectedOutput:`--------------------
Hello, Alice!
Hello, Bob!
--------------------
**********`},{heading:"매개변수와 반환값",headingEn:"Parameters & Return Values",text:['함수는 매개변수(parameter)를 통해 데이터를 전달받고, return 문을 통해 결과를 반환할 수 있습니다. C에서 함수 인자는 기본적으로 "값에 의한 전달(pass by value)"로, 원본 변수의 복사본이 전달됩니다.',"따라서 함수 안에서 매개변수를 변경해도 호출한 곳의 원래 변수는 변하지 않습니다. 반환값은 하나만 가능하며, return 문은 함수를 즉시 종료시킵니다."],textEn:["Functions receive data through parameters and return results with the return statement. In C, arguments are passed by value by default, meaning a copy of the original variable is passed.","Therefore, changing a parameter inside a function does not affect the original variable. Only one value can be returned, and return immediately exits the function."],code:`#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int max(int a, int b) {
    if (a > b) {
        return a;
    }
    return b;
}

float circleArea(float radius) {
    return 3.14159f * radius * radius;
}

int isEven(int n) {
    return n % 2 == 0;
}

int main() {
    printf("add(3, 5) = %d\\n", add(3, 5));
    printf("max(10, 7) = %d\\n", max(10, 7));
    printf("circleArea(5.0) = %.2f\\n", circleArea(5.0f));
    printf("isEven(4) = %d\\n", isEven(4));
    printf("isEven(7) = %d\\n", isEven(7));
    return 0;
}`,expectedOutput:`add(3, 5) = 8
max(10, 7) = 10
circleArea(5.0) = 78.54
isEven(4) = 1
isEven(7) = 0`},{heading:"함수 프로토타입",headingEn:"Function Prototypes",text:["함수 프로토타입(prototype)은 함수의 선언부만 미리 작성하는 것입니다. 이를 통해 main() 함수 뒤에 함수 정의를 배치할 수 있어 코드 구조를 유연하게 관리할 수 있습니다.","프로토타입은 반환 타입, 함수 이름, 매개변수 타입을 포함하며 세미콜론으로 끝납니다. 컴파일러는 프로토타입을 보고 함수 호출의 올바름을 미리 검사할 수 있습니다."],textEn:["A function prototype is a forward declaration of a function. It allows you to place function definitions after main(), giving flexibility in code organization.","A prototype includes the return type, function name, and parameter types, ending with a semicolon. The compiler uses prototypes to verify function calls before seeing the full definition."],code:`#include <stdio.h>

int square(int n);
int cube(int n);
void printResult(int n);

int main() {
    printResult(3);
    printResult(5);
    return 0;
}

void printResult(int n) {
    printf("Number: %d\\n", n);
    printf("Square: %d\\n", square(n));
    printf("Cube:   %d\\n", cube(n));
    printf("\\n");
}

int square(int n) {
    return n * n;
}

int cube(int n) {
    return n * n * n;
}`,expectedOutput:`Number: 3
Square: 9
Cube:   27

Number: 5
Square: 25
Cube:   125
`,tip:"큰 프로젝트에서는 헤더 파일(.h)에 프로토타입을 모아두고, 소스 파일(.c)에 구현을 작성하는 것이 일반적입니다.",tipEn:"In large projects, it is common to put prototypes in header files (.h) and implementations in source files (.c)."},{heading:"재귀 함수 입문",headingEn:"Introduction to Recursion",text:["재귀 함수(recursive function)는 자기 자신을 호출하는 함수입니다. 큰 문제를 같은 구조의 작은 문제로 나누어 해결할 때 사용합니다. 가장 대표적인 예가 팩토리얼(n!) 계산입니다.","재귀 함수에는 반드시 기저 조건(base case)이 있어야 합니다. 기저 조건 없이 자기 자신을 계속 호출하면 무한 재귀에 빠져 스택 오버플로가 발생합니다. 기저 조건에 도달하면 재귀 호출이 멈추고 결과가 역순으로 반환됩니다."],textEn:["A recursive function is a function that calls itself. It is used when a large problem can be broken down into smaller problems of the same structure. The classic example is computing factorial (n!).","A recursive function must have a base case. Without it, the function calls itself infinitely, causing a stack overflow. When the base case is reached, recursion stops and results are returned in reverse order."],code:`#include <stdio.h>

int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

int fibonacci(int n) {
    if (n <= 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int i;
    printf("Factorials:\\n");
    for (i = 1; i <= 6; i++) {
        printf("  %d! = %d\\n", i, factorial(i));
    }

    printf("Fibonacci sequence:\\n  ");
    for (i = 0; i < 10; i++) {
        printf("%d ", fibonacci(i));
    }
    printf("\\n");
    return 0;
}`,expectedOutput:`Factorials:
  1! = 1
  2! = 2
  3! = 6
  4! = 24
  5! = 120
  6! = 720
Fibonacci sequence:
  0 1 1 2 3 5 8 13 21 34 `,warning:"재귀는 반복문으로도 구현할 수 있으며, 깊은 재귀는 성능 문제를 일으킬 수 있습니다. 피보나치의 경우 반복문이 훨씬 효율적입니다.",warningEn:"Recursion can also be implemented with loops. Deep recursion may cause performance issues. For Fibonacci, iteration is much more efficient."}]}},P={"pointers-basic":{sections:[{heading:"메모리 주소와 포인터",headingEn:"Memory Addresses & Pointers",text:["컴퓨터 메모리의 모든 변수는 고유한 주소를 가지고 있습니다. 포인터는 이 메모리 주소를 저장하는 특별한 변수입니다.","& 연산자(주소 연산자)를 사용하면 변수의 메모리 주소를 얻을 수 있습니다. 포인터를 선언할 때는 자료형 뒤에 *를 붙입니다.","예를 들어 int *ptr은 정수형 변수의 주소를 저장할 수 있는 포인터입니다."],textEn:["Every variable in computer memory has a unique address. A pointer is a special variable that stores this memory address.","The & operator (address-of operator) lets you obtain a variable's memory address. To declare a pointer, place * after the data type.","For example, int *ptr is a pointer that can store the address of an integer variable."],code:`#include <stdio.h>
int main() {
    int x = 42;
    int *ptr = &x;
    printf("x = %d\\n", x);
    printf("size of pointer: %d bytes\\n", (int)sizeof(ptr));
    return 0;
}`,expectedOutput:`x = 42
size of pointer: 4 bytes`,tip:"포인터의 크기는 자료형에 관계없이 시스템에 따라 일정합니다 (32비트: 4바이트, 64비트: 8바이트).",tipEn:"The size of a pointer is constant regardless of data type, depending on the system (32-bit: 4 bytes, 64-bit: 8 bytes)."},{heading:"역참조",headingEn:"Dereferencing",text:["역참조(dereference)란 포인터가 가리키는 주소에 저장된 값을 읽거나 수정하는 것을 말합니다.","* 연산자(역참조 연산자)를 포인터 앞에 붙이면 해당 주소의 값에 접근할 수 있습니다. 이를 통해 원본 변수의 값을 간접적으로 변경할 수 있습니다."],textEn:["Dereferencing means reading or modifying the value stored at the address a pointer points to.","Placing the * operator (dereference operator) before a pointer accesses the value at that address. This allows you to indirectly change the original variable's value."],code:`#include <stdio.h>
int main() {
    int a = 10;
    int *p = &a;
    printf("Before: a = %d\\n", a);
    *p = 25;
    printf("After: a = %d\\n", a);
    printf("Via pointer: %d\\n", *p);
    return 0;
}`,expectedOutput:`Before: a = 10
After: a = 25
Via pointer: 25`,tip:'선언할 때의 *는 "포인터 변수"를 의미하고, 사용할 때의 *는 "역참조"를 의미합니다. 같은 기호지만 다른 뜻이니 주의하세요.',tipEn:'The * in a declaration means "pointer variable," while * in usage means "dereference." Same symbol, different meanings — be careful.'},{heading:"포인터와 함수",headingEn:"Pointers & Functions",text:["C에서는 함수에 인자를 전달할 때 기본적으로 값이 복사됩니다(call by value). 함수 안에서 매개변수를 변경해도 원본에는 영향이 없습니다.","포인터를 함수의 매개변수로 사용하면 변수의 주소를 전달하여 원본 값을 직접 수정할 수 있습니다. 이를 참조에 의한 전달(pass by reference)이라 합니다.","swap 함수는 포인터를 이용한 대표적인 예제입니다."],textEn:["In C, arguments are copied by default when passed to functions (call by value). Changing parameters inside the function does not affect the originals.","Using pointers as function parameters passes the variable's address, allowing direct modification of the original value. This is called pass by reference.","The swap function is a classic example using pointers."],code:`#include <stdio.h>
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
int main() {
    int x = 3, y = 7;
    printf("Before: x=%d, y=%d\\n", x, y);
    swap(&x, &y);
    printf("After: x=%d, y=%d\\n", x, y);
    return 0;
}`,expectedOutput:`Before: x=3, y=7
After: x=7, y=3`},{heading:"NULL 포인터",headingEn:"NULL Pointer",text:["NULL 포인터는 아무것도 가리키지 않는 포인터입니다. 포인터를 초기화할 때 아직 가리킬 대상이 없다면 NULL로 설정하는 것이 좋습니다.","NULL 포인터를 역참조하면 프로그램이 충돌하므로, 포인터를 사용하기 전에 반드시 NULL인지 확인해야 합니다.","안전한 포인터 사용은 C 프로그래밍에서 가장 중요한 습관 중 하나입니다."],textEn:["A NULL pointer is a pointer that points to nothing. When initializing a pointer with no target yet, it is good practice to set it to NULL.","Dereferencing a NULL pointer causes a program crash, so you must always check if a pointer is NULL before using it.","Safe pointer usage is one of the most important habits in C programming."],code:`#include <stdio.h>
void printValue(int *ptr) {
    if (ptr != 0) {
        printf("Value: %d\\n", *ptr);
    } else {
        printf("Pointer is NULL!\\n");
    }
}
int main() {
    int a = 100;
    int *p1 = &a;
    int *p2 = 0;
    printValue(p1);
    printValue(p2);
    return 0;
}`,expectedOutput:`Value: 100
Pointer is NULL!`,tip:"JSCPP 환경에서는 NULL 대신 0을 사용합니다. 로컬 컴파일러에서는 NULL을 사용하세요.",tipEn:"In the JSCPP environment, use 0 instead of NULL. Use NULL with a local compiler."}]},"pointers-advanced":{sections:[{heading:"포인터와 배열",headingEn:"Pointers & Arrays",text:["배열의 이름은 배열의 첫 번째 요소를 가리키는 포인터처럼 동작합니다. 즉, arr와 &arr[0]은 같은 주소를 나타냅니다.","포인터를 사용하면 배열의 요소에 접근할 수 있으며, *(ptr + i)는 ptr[i]와 동일합니다.","이러한 포인터와 배열의 관계를 이해하는 것은 C 프로그래밍의 핵심입니다."],textEn:["An array name acts like a pointer to the first element of the array. That is, arr and &arr[0] represent the same address.","You can access array elements using a pointer — *(ptr + i) is equivalent to ptr[i].","Understanding the relationship between pointers and arrays is fundamental to C programming."],code:`#include <stdio.h>
int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr;
    int i;
    printf("Using pointer arithmetic:\\n");
    for (i = 0; i < 5; i++) {
        printf("*(ptr+%d) = %d\\n", i, *(ptr + i));
    }
    return 0;
}`,expectedOutput:`Using pointer arithmetic:
*(ptr+0) = 10
*(ptr+1) = 20
*(ptr+2) = 30
*(ptr+3) = 40
*(ptr+4) = 50`},{heading:"포인터 연산",headingEn:"Pointer Arithmetic",text:["포인터에 정수를 더하거나 빼면 해당 자료형의 크기만큼 주소가 이동합니다. 예를 들어 int 포인터에 1을 더하면 4바이트(int 크기) 이동합니다.","포인터 증가(++), 감소(--), 덧셈(ptr + n), 뺄셈(ptr - n) 등의 연산을 활용하면 배열을 효율적으로 순회할 수 있습니다.","두 포인터 사이의 차이를 구하면 그 사이에 있는 요소의 개수를 알 수 있습니다."],textEn:["Adding or subtracting an integer from a pointer moves the address by the size of the data type. For example, adding 1 to an int pointer moves 4 bytes (the size of int).","Pointer increment (++), decrement (--), addition (ptr + n), and subtraction (ptr - n) allow efficient array traversal.","The difference between two pointers gives the number of elements between them."],code:`#include <stdio.h>
int main() {
    int arr[] = {100, 200, 300, 400, 500};
    int *start = arr;
    int *end = arr + 4;
    printf("First element: %d\\n", *start);
    start++;
    printf("After ++: %d\\n", *start);
    start = start + 2;
    printf("After +2: %d\\n", *start);
    printf("Distance: %d elements\\n", (int)(end - arr));
    return 0;
}`,expectedOutput:`First element: 100
After ++: 200
After +2: 400
Distance: 4 elements`},{heading:"이중 포인터",headingEn:"Double Pointers",text:["이중 포인터(pointer to pointer)는 포인터의 주소를 저장하는 포인터입니다. int **pp처럼 *를 두 번 사용하여 선언합니다.","이중 포인터를 사용하면 함수 안에서 포인터 자체를 변경할 수 있으며, 2차원 배열을 동적으로 생성할 때도 활용됩니다.","*pp는 p의 값(a의 주소)에 접근하고, **pp는 a의 값에 접근합니다."],textEn:["A double pointer (pointer to pointer) stores the address of another pointer. It is declared using ** like int **pp.","Double pointers allow you to change a pointer itself inside a function, and are also used to dynamically create 2D arrays.","*pp accesses the value of p (the address of a), and **pp accesses the value of a."],code:`#include <stdio.h>
int main() {
    int a = 5;
    int *p = &a;
    int **pp = &p;
    printf("a = %d\\n", a);
    printf("*p = %d\\n", *p);
    printf("**pp = %d\\n", **pp);
    **pp = 99;
    printf("After **pp = 99:\\n");
    printf("a = %d\\n", a);
    return 0;
}`,expectedOutput:`a = 5
*p = 5
**pp = 5
After **pp = 99:
a = 99`},{heading:"포인터 배열",headingEn:"Pointer Arrays",text:["포인터 배열은 포인터를 요소로 가지는 배열입니다. 특히 문자열 포인터 배열은 여러 문자열을 다룰 때 유용합니다.","배열의 각 요소가 서로 다른 길이의 문자열을 가리킬 수 있어 메모리를 효율적으로 사용할 수 있습니다.","포인터 배열은 명령줄 인자(argv) 등 실제 프로그래밍에서 자주 사용되는 패턴입니다."],textEn:["A pointer array is an array whose elements are pointers. String pointer arrays are especially useful for handling multiple strings.","Each element can point to strings of different lengths, enabling efficient memory usage.","Pointer arrays are a frequently used pattern in real programming, such as command-line arguments (argv)."],code:`#include <stdio.h>
int main() {
    char *fruits[] = {"Apple", "Banana", "Cherry", "Date"};
    int count = 4;
    int i;
    printf("Fruit list:\\n");
    for (i = 0; i < count; i++) {
        printf("[%d] %s\\n", i, fruits[i]);
    }
    printf("First char of fruits[1]: %c\\n", fruits[1][0]);
    return 0;
}`,expectedOutput:`Fruit list:
[0] Apple
[1] Banana
[2] Cherry
[3] Date
First char of fruits[1]: B`,tip:"포인터 배열의 각 요소는 독립적인 문자열을 가리키므로, 문자열 길이가 제각각이어도 됩니다.",tipEn:"Each element of a pointer array points to an independent string, so strings can have different lengths."}]},"dynamic-memory":{sections:[{heading:"malloc과 free",headingEn:"malloc & free",text:["동적 메모리 할당은 프로그램 실행 중에 필요한 만큼의 메모리를 요청하고 사용하는 기술입니다.","malloc() 함수는 지정한 바이트 수만큼 메모리를 할당하고, 그 시작 주소를 반환합니다. 할당에 실패하면 NULL을 반환합니다.","free() 함수는 할당된 메모리를 운영체제에 반환합니다. 사용이 끝난 메모리는 반드시 free()로 해제해야 합니다."],textEn:["Dynamic memory allocation is a technique that requests and uses the amount of memory needed during program execution.","The malloc() function allocates the specified number of bytes and returns the starting address. It returns NULL if allocation fails.","The free() function returns allocated memory to the operating system. Memory that is no longer needed must be released with free()."],code:`#include <stdio.h>
#include <stdlib.h>
int main() {
    int n = 5;
    int *arr = (int *)malloc(n * sizeof(int));
    int i;
    if (arr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }
    for (i = 0; i < n; i++) {
        arr[i] = (i + 1) * 10;
    }
    printf("Dynamic array: ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    free(arr);
    printf("Memory freed.\\n");
    return 0;
}`,expectedOutput:`Dynamic array: 10 20 30 40 50 
Memory freed.`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"calloc과 realloc",headingEn:"calloc & realloc",text:["calloc()은 malloc()과 비슷하지만, 할당된 메모리를 0으로 초기화한다는 차이가 있습니다. calloc(개수, 크기) 형태로 사용합니다.","realloc()은 이미 할당된 메모리의 크기를 변경합니다. 기존 데이터는 보존되며, 필요하면 새로운 위치로 복사됩니다.","realloc()이 NULL을 반환할 수 있으므로, 원본 포인터를 잃지 않도록 임시 변수에 결과를 받는 것이 좋습니다."],textEn:["calloc() is similar to malloc() but initializes the allocated memory to zero. It is used as calloc(count, size).","realloc() changes the size of already allocated memory. Existing data is preserved and copied to a new location if needed.","Since realloc() can return NULL, it is best to store the result in a temporary variable to avoid losing the original pointer."],code:`#include <stdio.h>
#include <stdlib.h>
int main() {
    int i;
    int *arr = (int *)calloc(3, sizeof(int));
    if (arr == NULL) return 1;
    printf("calloc initialized: %d %d %d\\n", arr[0], arr[1], arr[2]);
    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 3;
    int *temp = (int *)realloc(arr, 5 * sizeof(int));
    if (temp == NULL) {
        free(arr);
        return 1;
    }
    arr = temp;
    arr[3] = 4;
    arr[4] = 5;
    printf("After realloc: ");
    for (i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    free(arr);
    return 0;
}`,expectedOutput:`calloc initialized: 0 0 0
After realloc: 1 2 3 4 5 `,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"메모리 누수 방지",headingEn:"Preventing Leaks",text:["메모리 누수(memory leak)는 할당한 메모리를 free()하지 않아 발생합니다. 프로그램이 오래 실행되면 사용 가능한 메모리가 점점 줄어듭니다.","메모리 누수를 방지하려면: 1) malloc/calloc마다 반드시 대응하는 free()를 작성하고, 2) 함수가 종료되기 전에 할당한 메모리를 해제하며, 3) 포인터를 재할당하기 전에 기존 메모리를 해제합니다.","Valgrind 같은 도구를 사용하면 메모리 누수를 쉽게 감지할 수 있습니다."],textEn:["A memory leak occurs when allocated memory is never freed. If the program runs for a long time, available memory gradually decreases.","To prevent memory leaks: 1) Always write a matching free() for every malloc/calloc, 2) Release memory before a function returns, 3) Free existing memory before reassigning a pointer.","Tools like Valgrind make it easy to detect memory leaks."],code:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>
char *createGreeting(const char *name) {
    char *msg = (char *)malloc(50 * sizeof(char));
    if (msg == NULL) return NULL;
    sprintf(msg, "Hello, %s!", name);
    return msg;
}
int main() {
    char *greeting = createGreeting("World");
    if (greeting != NULL) {
        printf("%s\\n", greeting);
        free(greeting);
        greeting = NULL;
    }
    printf("No memory leak!\\n");
    return 0;
}`,expectedOutput:`Hello, World!
No memory leak!`,tip:"free() 후에 포인터를 NULL로 설정하면 이중 해제(double free)를 방지할 수 있습니다.",tipEn:"Setting a pointer to NULL after free() helps prevent double free errors.",warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."}]},"strings-advanced":{sections:[{heading:"문자열 포인터",headingEn:"String Pointers",text:["C에서 문자열을 다루는 방법에는 문자 배열(char[])과 문자열 포인터(char *)가 있습니다.",'char str[] = "Hello"는 배열에 문자열을 복사하므로 수정이 가능하고, char *str = "Hello"는 문자열 리터럴을 가리키는 포인터입니다.',"배열은 크기가 고정되지만 내용을 변경할 수 있고, 포인터는 다른 문자열을 가리키도록 재할당할 수 있습니다."],textEn:["There are two ways to handle strings in C: character arrays (char[]) and string pointers (char *).",'char str[] = "Hello" copies the string into an array, so it can be modified. char *str = "Hello" is a pointer to a string literal.',"Arrays have a fixed size but modifiable content, while pointers can be reassigned to point to different strings."],code:`#include <stdio.h>
int main() {
    char arr[] = "Hello";
    char *ptr = "World";
    printf("Array: %s\\n", arr);
    printf("Pointer: %s\\n", ptr);
    arr[0] = 'h';
    printf("Modified array: %s\\n", arr);
    ptr = "C Language";
    printf("Reassigned pointer: %s\\n", ptr);
    printf("Array size: %d\\n", (int)sizeof(arr));
    return 0;
}`,expectedOutput:`Array: Hello
Pointer: World
Modified array: hello
Reassigned pointer: C Language
Array size: 6`,tip:'문자열 "Hello"는 5글자이지만 null 종료 문자(\\0) 때문에 sizeof는 6을 반환합니다.',tipEn:'The string "Hello" has 5 characters, but sizeof returns 6 because of the null terminator (\\0).'},{heading:"문자열 검색과 분리",headingEn:"Search & Tokenize",text:["strstr() 함수는 문자열 안에서 부분 문자열을 검색합니다. 찾으면 해당 위치의 포인터를, 못 찾으면 NULL을 반환합니다.","strtok() 함수는 문자열을 지정한 구분자(delimiter)를 기준으로 토큰(조각)으로 분리합니다. 첫 호출에는 문자열을, 이후 호출에는 NULL을 전달합니다.","주의: strtok()은 원본 문자열을 수정하므로, 원본을 보존해야 한다면 복사본을 사용해야 합니다."],textEn:["The strstr() function searches for a substring within a string. It returns a pointer to the found location, or NULL if not found.","The strtok() function splits a string into tokens based on a specified delimiter. The first call takes the string, and subsequent calls take NULL.","Note: strtok() modifies the original string, so use a copy if you need to preserve the original."],code:`#include <stdio.h>
#include <string.h>
int main() {
    char text[] = "C programming is fun";
    char *found = strstr(text, "program");
    if (found != NULL) {
        printf("Found: %s\\n", found);
    }
    char data[] = "apple,banana,cherry";
    char *token = strtok(data, ",");
    printf("Tokens:\\n");
    while (token != NULL) {
        printf("  %s\\n", token);
        token = strtok(NULL, ",");
    }
    return 0;
}`,expectedOutput:`Found: programming is fun
Tokens:
  apple
  banana
  cherry`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"sprintf와 sscanf",headingEn:"sprintf & sscanf",text:["sprintf()는 printf()와 같은 형식으로 문자열을 생성하여 문자 배열에 저장합니다. 숫자를 문자열로 변환하거나 여러 값을 하나의 문자열로 조합할 때 유용합니다.","sscanf()는 scanf()와 같은 형식으로 문자열에서 값을 추출합니다. 문자열을 파싱하여 숫자나 단어를 분리할 때 사용합니다.","이 두 함수는 문자열 기반의 데이터 변환에서 매우 강력한 도구입니다."],textEn:["sprintf() creates a formatted string (like printf()) and stores it in a character array. It is useful for converting numbers to strings or combining values into one string.","sscanf() extracts values from a string in the same format as scanf(). It is used to parse strings and separate numbers or words.","These two functions are powerful tools for string-based data conversion."],code:`#include <stdio.h>
int main() {
    char buffer[100];
    int age = 25;
    float score = 95.5;
    sprintf(buffer, "Age: %d, Score: %.1f", age, score);
    printf("sprintf result: %s\\n", buffer);
    char data[] = "Kim 30 85.5";
    char name[20];
    int a;
    float s;
    sscanf(data, "%s %d %f", name, &a, &s);
    printf("sscanf result:\\n");
    printf("  Name: %s\\n", name);
    printf("  Age: %d\\n", a);
    printf("  Score: %.1f\\n", s);
    return 0;
}`,expectedOutput:`sprintf result: Age: 25, Score: 95.5
sscanf result:
  Name: Kim
  Age: 30
  Score: 85.5`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."}]},structures:{sections:[{heading:"struct 정의와 사용",headingEn:"Defining Structs",text:["구조체(struct)는 서로 다른 자료형의 변수들을 하나로 묶어 새로운 자료형을 만드는 방법입니다.","struct 키워드를 사용하여 정의하며, 멤버 변수에는 점(.) 연산자로 접근합니다.","구조체를 사용하면 관련 있는 데이터를 논리적으로 그룹화하여 코드를 더 읽기 쉽고 관리하기 쉽게 만들 수 있습니다."],textEn:["A struct groups variables of different types into one unit, creating a new data type.","It is defined using the struct keyword, and member variables are accessed with the dot (.) operator.","Structs let you logically group related data, making code more readable and maintainable."],code:`#include <stdio.h>
struct Student {
    char name[30];
    int age;
    float gpa;
};
int main() {
    struct Student s1;
    strcpy(s1.name, "Kim");
    s1.age = 20;
    s1.gpa = 3.8;
    printf("Name: %s\\n", s1.name);
    printf("Age: %d\\n", s1.age);
    printf("GPA: %.1f\\n", s1.gpa);
    struct Student s2 = {"Lee", 22, 3.5};
    printf("Name: %s, Age: %d, GPA: %.1f\\n",
           s2.name, s2.age, s2.gpa);
    return 0;
}`,expectedOutput:`Name: Kim
Age: 20
GPA: 3.8
Name: Lee, Age: 22, GPA: 3.5`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"typedef와 구조체 배열",headingEn:"typedef & Struct Arrays",text:["typedef를 사용하면 구조체에 별명을 붙여서 매번 struct 키워드를 쓰지 않아도 됩니다.","구조체 배열을 사용하면 같은 형태의 데이터를 여러 개 효율적으로 관리할 수 있습니다.","이는 학생 명단, 상품 목록 등 동일한 구조의 데이터를 처리할 때 매우 유용합니다."],textEn:["Using typedef gives a struct an alias, so you don't need to write the struct keyword each time.","Struct arrays let you efficiently manage multiple data items of the same structure.","This is very useful for processing data with identical structure, like student lists or product catalogs."],code:`#include <stdio.h>
typedef struct {
    char name[20];
    int price;
} Product;
int main() {
    Product items[3] = {
        {"Apple", 1500},
        {"Banana", 800},
        {"Cherry", 3000}
    };
    int i;
    int total = 0;
    printf("Product List:\\n");
    for (i = 0; i < 3; i++) {
        printf("  %s: %d won\\n", items[i].name, items[i].price);
        total += items[i].price;
    }
    printf("Total: %d won\\n", total);
    return 0;
}`,expectedOutput:`Product List:
  Apple: 1500 won
  Banana: 800 won
  Cherry: 3000 won
Total: 5300 won`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"구조체 포인터",headingEn:"Struct Pointers",text:["구조체 포인터를 사용하면 구조체를 함수에 효율적으로 전달할 수 있습니다. 구조체 전체를 복사하는 대신 주소만 전달하기 때문입니다.","구조체 포인터로 멤버에 접근할 때는 화살표 연산자(->)를 사용합니다. ptr->member는 (*ptr).member와 동일합니다.","대규모 구조체를 다룰 때 포인터를 사용하면 메모리와 성능 면에서 유리합니다."],textEn:["Struct pointers allow you to pass structs to functions efficiently, since only the address is passed instead of copying the entire struct.","Use the arrow operator (->) to access members through a struct pointer. ptr->member is equivalent to (*ptr).member.","Using pointers for large structs is advantageous in terms of memory and performance."],code:`#include <stdio.h>
typedef struct {
    char name[20];
    int hp;
    int attack;
} Character;
void levelUp(Character *c) {
    c->hp += 50;
    c->attack += 10;
    printf("%s leveled up!\\n", c->name);
}
void printStatus(Character *c) {
    printf("Name: %s, HP: %d, ATK: %d\\n",
           c->name, c->hp, c->attack);
}
int main() {
    Character hero = {"Warrior", 100, 25};
    printf("Before:\\n");
    printStatus(&hero);
    levelUp(&hero);
    printf("After:\\n");
    printStatus(&hero);
    return 0;
}`,expectedOutput:`Before:
Name: Warrior, HP: 100, ATK: 25
Warrior leveled up!
After:
Name: Warrior, HP: 150, ATK: 35`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."}]},"unions-enums":{sections:[{heading:"공용체",headingEn:"Unions",text:["공용체(union)는 구조체와 비슷하지만, 모든 멤버가 같은 메모리 공간을 공유합니다. 한 번에 하나의 멤버만 유효한 값을 가질 수 있습니다.","공용체의 크기는 가장 큰 멤버의 크기와 같습니다. 이는 여러 타입 중 하나만 저장하면 될 때 메모리를 절약하는 데 유용합니다.","한 멤버에 값을 쓰면 다른 멤버의 값은 의미를 잃게 됩니다."],textEn:["A union is similar to a struct, but all members share the same memory space. Only one member can hold a valid value at a time.","The size of a union equals the size of its largest member. This is useful for saving memory when only one of several types needs to be stored.","Writing to one member invalidates the values of other members."],code:`#include <stdio.h>
union Data {
    int i;
    float f;
    char c;
};
int main() {
    union Data d;
    printf("Size of union: %lu bytes\\n", sizeof(d));
    d.i = 42;
    printf("d.i = %d\\n", d.i);
    d.f = 3.14;
    printf("d.f = %.2f\\n", d.f);
    printf("d.i after setting f = %d (corrupted!)\\n", d.i);
    d.c = 'A';
    printf("d.c = %c\\n", d.c);
    return 0;
}`,expectedOutput:`Size of union: 4 bytes
d.i = 42
d.f = 3.14
d.i after setting f = 1078523331 (corrupted!)
d.c = A`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"열거형",headingEn:"Enums",text:["열거형(enum)은 관련 있는 정수 상수들에 이름을 붙여 가독성을 높이는 방법입니다.","기본적으로 첫 번째 값은 0부터 시작하며, 이후 값은 1씩 증가합니다. 원하는 값을 직접 지정할 수도 있습니다.","열거형을 사용하면 매직 넘버(의미를 알 수 없는 숫자) 대신 의미 있는 이름으로 코드를 작성할 수 있습니다."],textEn:["An enum (enumeration) gives names to related integer constants, improving code readability.","By default, the first value starts at 0 and subsequent values increment by 1. You can also assign specific values.","Enums let you write code with meaningful names instead of magic numbers (numbers with unclear meaning)."],code:`#include <stdio.h>
enum Season { SPRING, SUMMER, AUTUMN, WINTER };
enum HttpStatus {
    OK = 200,
    NOT_FOUND = 404,
    SERVER_ERROR = 500
};
int main() {
    enum Season now = AUTUMN;
    printf("Season values:\\n");
    printf("  SPRING=%d, SUMMER=%d\\n", SPRING, SUMMER);
    printf("  AUTUMN=%d, WINTER=%d\\n", AUTUMN, WINTER);
    switch (now) {
        case SPRING: printf("It is spring\\n"); break;
        case SUMMER: printf("It is summer\\n"); break;
        case AUTUMN: printf("It is autumn\\n"); break;
        case WINTER: printf("It is winter\\n"); break;
    }
    printf("HTTP 404 = %d\\n", NOT_FOUND);
    return 0;
}`,expectedOutput:`Season values:
  SPRING=0, SUMMER=1
  AUTUMN=2, WINTER=3
It is autumn
HTTP 404 = 404`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"비트 필드",headingEn:"Bit Fields",text:["비트 필드(bit field)는 구조체의 멤버가 사용하는 비트 수를 지정하여 메모리를 절약하는 기술입니다.","멤버 이름 뒤에 콜론(:)과 비트 수를 지정합니다. 예를 들어 unsigned int flag : 1은 1비트만 사용합니다.","임베디드 시스템이나 하드웨어 레지스터를 다룰 때, 또는 메모리가 제한된 환경에서 특히 유용합니다."],textEn:["Bit fields specify the number of bits used by each struct member, saving memory.","Place a colon (:) and bit count after the member name. For example, unsigned int flag : 1 uses only 1 bit.","This is especially useful in embedded systems, hardware register manipulation, or memory-constrained environments."],code:`#include <stdio.h>
struct Flags {
    unsigned int bold      : 1;
    unsigned int italic    : 1;
    unsigned int underline : 1;
    unsigned int fontSize  : 5;
};
int main() {
    struct Flags style = {0};
    style.bold = 1;
    style.italic = 0;
    style.underline = 1;
    style.fontSize = 16;
    printf("Bold: %d\\n", style.bold);
    printf("Italic: %d\\n", style.italic);
    printf("Underline: %d\\n", style.underline);
    printf("Font size: %d\\n", style.fontSize);
    printf("Size of struct: %lu bytes\\n", sizeof(style));
    return 0;
}`,expectedOutput:`Bold: 1
Italic: 0
Underline: 1
Font size: 16
Size of struct: 4 bytes`,tip:"비트 필드의 최대값은 2^n - 1입니다. 5비트 필드는 0~31까지 저장할 수 있습니다.",tipEn:"The maximum value of a bit field is 2^n - 1. A 5-bit field can store values from 0 to 31.",warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."}]},"file-io":{sections:[{heading:"파일 열기와 닫기",headingEn:"Open & Close",text:["C에서 파일을 다루려면 먼저 fopen() 함수로 파일을 열어야 합니다. fopen()은 파일 이름과 모드를 인자로 받습니다.",'주요 모드: "r"(읽기), "w"(쓰기, 파일 생성/덮어쓰기), "a"(추가), "rb"/"wb"(바이너리). fopen()이 실패하면 NULL을 반환합니다.',"파일 작업이 끝나면 반드시 fclose()로 파일을 닫아야 합니다. 닫지 않으면 데이터가 손실될 수 있습니다."],textEn:["To work with files in C, you must first open them with fopen(). It takes a filename and mode as arguments.",'Key modes: "r" (read), "w" (write, creates/overwrites), "a" (append), "rb"/"wb" (binary). fopen() returns NULL on failure.',"You must always close files with fclose() when done. Not closing may cause data loss."],code:`#include <stdio.h>
int main() {
    FILE *fp = fopen("test.txt", "w");
    if (fp == NULL) {
        printf("Failed to open file!\\n");
        return 1;
    }
    printf("File opened successfully.\\n");
    fprintf(fp, "Hello, File!\\n");
    fprintf(fp, "This is line 2.\\n");
    fclose(fp);
    printf("File written and closed.\\n");
    fp = fopen("test.txt", "r");
    if (fp != NULL) {
        char line[100];
        printf("File contents:\\n");
        while (fgets(line, sizeof(line), fp) != NULL) {
            printf("  %s", line);
        }
        fclose(fp);
    }
    return 0;
}`,expectedOutput:`File opened successfully.
File written and closed.
File contents:
  Hello, File!
  This is line 2.`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"텍스트 파일 읽기/쓰기",headingEn:"Text File R/W",text:["fprintf()는 printf()처럼 형식화된 출력을 파일에 씁니다. fscanf()는 scanf()처럼 파일에서 형식화된 입력을 읽습니다.","fgets()는 파일에서 한 줄씩 읽어오는 안전한 함수입니다. 버퍼 크기를 지정하여 버퍼 오버플로를 방지합니다.","fputs()는 문자열을 파일에 쓰며, feof()는 파일의 끝에 도달했는지 확인합니다."],textEn:["fprintf() writes formatted output to a file like printf(). fscanf() reads formatted input from a file like scanf().","fgets() safely reads one line at a time from a file. You specify a buffer size to prevent buffer overflow.","fputs() writes a string to a file, and feof() checks if the end of file has been reached."],code:`#include <stdio.h>
int main() {
    FILE *fp = fopen("scores.txt", "w");
    if (fp == NULL) return 1;
    fprintf(fp, "Kim 95\\n");
    fprintf(fp, "Lee 87\\n");
    fprintf(fp, "Park 92\\n");
    fclose(fp);
    fp = fopen("scores.txt", "r");
    if (fp == NULL) return 1;
    char name[20];
    int score;
    int total = 0, count = 0;
    printf("Score Report:\\n");
    while (fscanf(fp, "%s %d", name, &score) == 2) {
        printf("  %s: %d\\n", name, score);
        total += score;
        count++;
    }
    printf("Average: %.1f\\n", (float)total / count);
    fclose(fp);
    return 0;
}`,expectedOutput:`Score Report:
  Kim: 95
  Lee: 87
  Park: 92
Average: 91.3`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"바이너리 파일",headingEn:"Binary Files",text:["바이너리 파일은 데이터를 텍스트가 아닌 이진 형태 그대로 저장합니다. 텍스트보다 저장 공간이 적고 읽기/쓰기 속도가 빠릅니다.","fwrite()는 메모리의 데이터를 그대로 파일에 쓰고, fread()는 파일의 데이터를 그대로 메모리로 읽습니다.",'바이너리 모드로 파일을 열 때는 "wb"(쓰기)와 "rb"(읽기) 모드를 사용합니다.'],textEn:["Binary files store data in raw binary form, not as text. They use less storage space and are faster to read/write than text files.","fwrite() writes memory data directly to a file, and fread() reads file data directly into memory.",'Use "wb" (write) and "rb" (read) modes to open files in binary mode.'],code:`#include <stdio.h>
typedef struct {
    char name[20];
    int score;
} Record;
int main() {
    Record students[3] = {
        {"Kim", 95}, {"Lee", 87}, {"Park", 92}
    };
    FILE *fp = fopen("data.bin", "wb");
    if (fp == NULL) return 1;
    fwrite(students, sizeof(Record), 3, fp);
    fclose(fp);
    printf("Binary data written.\\n");
    Record loaded[3];
    fp = fopen("data.bin", "rb");
    if (fp == NULL) return 1;
    fread(loaded, sizeof(Record), 3, fp);
    fclose(fp);
    int i;
    printf("Loaded from binary:\\n");
    for (i = 0; i < 3; i++) {
        printf("  %s: %d\\n", loaded[i].name, loaded[i].score);
    }
    return 0;
}`,expectedOutput:`Binary data written.
Loaded from binary:
  Kim: 95
  Lee: 87
  Park: 92`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."}]},preprocessor:{sections:[{heading:"매크로 상수",headingEn:"Macro Constants",text:["#define 지시자를 사용하면 컴파일 전에 특정 이름을 값으로 치환하는 매크로 상수를 정의할 수 있습니다.","매크로 상수는 컴파일 시 텍스트 치환으로 처리되므로 메모리를 사용하지 않습니다. 관례적으로 대문자로 작성합니다.","배열 크기, 수학 상수, 설정 값 등을 정의할 때 유용하며, 값을 한 곳에서 관리할 수 있어 유지보수가 쉽습니다."],textEn:["The #define directive defines macro constants that replace a name with a value before compilation.","Macro constants are handled by text substitution at compile time and use no memory. By convention, they are written in uppercase.","Useful for defining array sizes, mathematical constants, and configuration values. Managing values in one place eases maintenance."],code:`#include <stdio.h>
#define PI 3.14159
#define MAX_SIZE 5
#define GREETING "Hello, C!"
int main() {
    float radius = 3.0;
    float area = PI * radius * radius;
    printf("%s\\n", GREETING);
    printf("PI = %.5f\\n", PI);
    printf("Circle area (r=%.1f): %.2f\\n", radius, area);
    int arr[MAX_SIZE];
    int i;
    for (i = 0; i < MAX_SIZE; i++) {
        arr[i] = i * i;
    }
    printf("Squares: ");
    for (i = 0; i < MAX_SIZE; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    return 0;
}`,expectedOutput:`Hello, C!
PI = 3.14159
Circle area (r=3.0): 28.27
Squares: 0 1 4 9 16 `},{heading:"매크로 함수",headingEn:"Macro Functions",text:["매크로 함수는 #define으로 매개변수를 받는 매크로를 정의하는 것입니다. 함수 호출의 오버헤드 없이 코드를 인라인으로 삽입합니다.","매크로 함수를 정의할 때는 각 매개변수와 전체 표현식을 괄호로 감싸야 합니다. 그렇지 않으면 연산자 우선순위 문제가 발생할 수 있습니다.","간단한 계산에는 유용하지만, 복잡한 로직에는 일반 함수를 사용하는 것이 안전합니다."],textEn:["Macro functions define parameterized macros using #define. They inline code without the overhead of a function call.","When defining macro functions, wrap each parameter and the entire expression in parentheses. Otherwise, operator precedence issues may occur.","Useful for simple calculations, but regular functions are safer for complex logic."],code:`#include <stdio.h>
#define SQUARE(x) ((x) * (x))
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define MIN(a, b) ((a) < (b) ? (a) : (b))
#define ABS(x) ((x) < 0 ? -(x) : (x))
int main() {
    int a = 7, b = 3;
    printf("SQUARE(%d) = %d\\n", a, SQUARE(a));
    printf("MAX(%d, %d) = %d\\n", a, b, MAX(a, b));
    printf("MIN(%d, %d) = %d\\n", a, b, MIN(a, b));
    printf("ABS(%d) = %d\\n", -15, ABS(-15));
    printf("SQUARE(%d+1) = %d\\n", b, SQUARE(b + 1));
    return 0;
}`,expectedOutput:`SQUARE(7) = 49
MAX(7, 3) = 7
MIN(7, 3) = 3
ABS(-15) = 15
SQUARE(3+1) = 16`,tip:"괄호가 없으면 SQUARE(3+1)이 3+1*3+1=7이 됩니다. 괄호를 써서 (3+1)*(3+1)=16이 되도록 합니다.",tipEn:"Without parentheses, SQUARE(3+1) becomes 3+1*3+1=7. With parentheses, it correctly evaluates as (3+1)*(3+1)=16."},{heading:"조건부 컴파일",headingEn:"Conditional Compilation",text:["조건부 컴파일은 특정 조건에 따라 코드의 일부를 컴파일하거나 무시하는 기능입니다.","#ifdef는 매크로가 정의되어 있으면 코드를 포함하고, #ifndef는 정의되어 있지 않으면 코드를 포함합니다. #endif로 블록을 닫습니다.","디버그 모드 전환, 플랫폼별 코드 분기, 헤더 파일 중복 포함 방지(include guard) 등에 널리 사용됩니다."],textEn:["Conditional compilation includes or excludes parts of code based on specific conditions.","#ifdef includes code if a macro is defined; #ifndef includes code if it is not defined. #endif closes the block.","It is widely used for debug mode toggling, platform-specific code branches, and preventing duplicate header inclusion (include guards)."],code:`#include <stdio.h>
#define DEBUG
#define VERSION 2
int main() {
#ifdef DEBUG
    printf("[DEBUG] Debug mode is ON\\n");
#endif
#ifndef RELEASE
    printf("[INFO] This is not a release build\\n");
#endif
#if VERSION >= 2
    printf("Version 2+ features enabled\\n");
#else
    printf("Basic version\\n");
#endif
    printf("Program running.\\n");
    return 0;
}`,expectedOutput:`[DEBUG] Debug mode is ON
[INFO] This is not a release build
Version 2+ features enabled
Program running.`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."}]},"scope-storage":{sections:[{heading:"지역 변수와 전역 변수",headingEn:"Local & Global",text:["지역 변수(local variable)는 함수나 블록 안에서 선언되며, 해당 블록이 끝나면 사라집니다. 같은 이름이라도 다른 함수에서는 별개의 변수입니다.","전역 변수(global variable)는 함수 바깥에서 선언되며, 프로그램의 모든 함수에서 접근할 수 있습니다. 프로그램이 종료될 때까지 존재합니다.","전역 변수는 편리하지만, 남용하면 코드의 의존성이 복잡해지고 버그를 찾기 어려워집니다. 필요한 경우에만 사용하세요."],textEn:["Local variables are declared inside a function or block and disappear when the block ends. Variables with the same name in different functions are separate.","Global variables are declared outside functions and can be accessed by all functions in the program. They exist until the program terminates.","Global variables are convenient but overusing them complicates dependencies and makes bugs harder to find. Use them only when necessary."],code:`#include <stdio.h>
int globalCount = 0;
void increment() {
    int localVar = 10;
    globalCount++;
    printf("  localVar = %d, globalCount = %d\\n",
           localVar, globalCount);
}
int main() {
    int localVar = 99;
    printf("main: localVar = %d\\n", localVar);
    printf("Calling increment 3 times:\\n");
    increment();
    increment();
    increment();
    printf("main: globalCount = %d\\n", globalCount);
    return 0;
}`,expectedOutput:`main: localVar = 99
Calling increment 3 times:
  localVar = 10, globalCount = 1
  localVar = 10, globalCount = 2
  localVar = 10, globalCount = 3
main: globalCount = 3`,tip:"지역 변수는 매번 새로 초기화되지만, 전역 변수는 값이 유지됩니다.",tipEn:"Local variables are freshly initialized each time, but global variables retain their values."},{heading:"static 변수",headingEn:"Static Variables",text:["static 지역 변수는 함수가 끝나도 값이 사라지지 않고 유지됩니다. 다음 호출 때 이전 값을 기억합니다.","static 변수는 프로그램 시작 시 한 번만 초기화되며, 이후에는 초기화 구문이 무시됩니다.","호출 횟수 카운팅, 이전 상태 기억 등에 유용하지만, 전역 변수처럼 과도한 사용은 피하는 것이 좋습니다."],textEn:["A static local variable retains its value even after the function returns. It remembers the previous value on the next call.","Static variables are initialized only once at program start; subsequent initialization statements are ignored.","Useful for counting calls or remembering previous states, but like globals, avoid overusing them."],code:`#include <stdio.h>
void counter() {
    static int count = 0;
    count++;
    printf("Called %d time(s)\\n", count);
}
int generateId() {
    static int id = 1000;
    id++;
    return id;
}
int main() {
    counter();
    counter();
    counter();
    printf("ID: %d\\n", generateId());
    printf("ID: %d\\n", generateId());
    printf("ID: %d\\n", generateId());
    return 0;
}`,expectedOutput:`Called 1 time(s)
Called 2 time(s)
Called 3 time(s)
ID: 1001
ID: 1002
ID: 1003`},{heading:"extern과 register",headingEn:"extern & register",text:["extern 키워드는 다른 파일에 정의된 전역 변수를 현재 파일에서 사용할 수 있게 선언합니다. 대규모 프로젝트에서 파일 간 데이터를 공유할 때 사용합니다.","register 키워드는 변수를 CPU 레지스터에 저장하도록 컴파일러에 힌트를 줍니다. 자주 접근하는 변수의 성능을 높이려 할 때 사용했지만, 현대 컴파일러는 자동으로 최적화합니다.","이 키워드들은 다중 파일 프로젝트와 성능 최적화에서 역할을 하지만, 일반적인 코드에서는 자주 사용되지 않습니다."],textEn:["The extern keyword declares that a global variable defined in another file can be used in the current file. It is used to share data between files in large projects.","The register keyword hints to the compiler to store a variable in a CPU register. It was used to improve performance for frequently accessed variables, but modern compilers optimize automatically.","These keywords play roles in multi-file projects and performance optimization but are not commonly used in everyday code."],code:`/* --- config.c --- */
#include <stdio.h>
int sharedValue = 42;

/* --- main.c --- */
#include <stdio.h>
extern int sharedValue;
int main() {
    printf("Shared value: %d\\n", sharedValue);
    register int i;
    int sum = 0;
    for (i = 0; i < 100; i++) {
        sum += i;
    }
    printf("Sum 0-99: %d\\n", sum);
    printf("Shared + Sum: %d\\n", sharedValue + sum);
    return 0;
}`,expectedOutput:`Shared value: 42
Sum 0-99: 4950
Shared + Sum: 4992`,tip:"이 예제는 두 개의 파일로 구성됩니다. 컴파일 시 gcc config.c main.c -o program 으로 함께 컴파일합니다.",tipEn:"This example consists of two files. Compile them together with: gcc config.c main.c -o program",warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."}]}},U={"linked-list":{sections:[{heading:"노드 구조체",headingEn:"Node Structure",text:["연결 리스트(Linked List)는 각 요소가 데이터와 다음 요소를 가리키는 포인터로 구성된 자료구조입니다. 배열과 달리 메모리에 연속적으로 저장될 필요가 없어, 삽입과 삭제가 효율적입니다.","연결 리스트의 기본 단위는 노드(Node)입니다. 각 노드는 데이터를 저장하는 필드와 다음 노드를 가리키는 포인터(next)로 구성됩니다. 마지막 노드의 next는 NULL을 가리켜 리스트의 끝을 나타냅니다.","malloc() 함수를 사용하여 동적으로 노드를 생성하며, 구조체 포인터의 멤버 접근에는 화살표 연산자(->)를 사용합니다."],textEn:["A Linked List is a data structure where each element consists of data and a pointer to the next element. Unlike arrays, elements don't need to be stored contiguously in memory, making insertions and deletions efficient.","The basic unit of a linked list is a node. Each node has a data field and a pointer (next) that points to the next node. The last node's next points to NULL, indicating the end of the list.","We use malloc() to dynamically create nodes, and the arrow operator (->) to access members through structure pointers."],code:`#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    if (newNode == NULL) {
        printf("Memory allocation failed!\\n");
        exit(1);
    }
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

int main(void) {
    Node* first = createNode(10);
    Node* second = createNode(20);
    Node* third = createNode(30);

    first->next = second;
    second->next = third;

    printf("First node: %d\\n", first->data);
    printf("Second node: %d\\n", first->next->data);
    printf("Third node: %d\\n", first->next->next->data);

    free(first);
    free(second);
    free(third);

    return 0;
}`,expectedOutput:`First node: 10
Second node: 20
Third node: 30`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"삽입 연산",headingEn:"Insertion",text:["연결 리스트에 새 노드를 삽입하는 두 가지 기본 연산을 알아봅니다: 리스트 앞에 삽입(insertAtFront)과 리스트 끝에 삽입(insertAtEnd)입니다.","앞에 삽입하는 경우, 새 노드의 next를 현재 head로 설정한 뒤 head를 새 노드로 갱신합니다. 시간 복잡도는 O(1)입니다.","끝에 삽입하는 경우, 리스트의 마지막 노드까지 순회한 뒤 마지막 노드의 next를 새 노드로 설정합니다. 시간 복잡도는 O(n)입니다."],textEn:["Let's explore two fundamental insertion operations for linked lists: inserting at the front (insertAtFront) and inserting at the end (insertAtEnd).","For front insertion, set the new node's next to the current head, then update head to the new node. The time complexity is O(1).","For end insertion, traverse to the last node, then set its next to the new node. The time complexity is O(n)."],code:`#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

Node* insertAtFront(Node* head, int data) {
    Node* newNode = createNode(data);
    newNode->next = head;
    return newNode;
}

Node* insertAtEnd(Node* head, int data) {
    Node* newNode = createNode(data);
    if (head == NULL) {
        return newNode;
    }
    Node* current = head;
    while (current->next != NULL) {
        current = current->next;
    }
    current->next = newNode;
    return head;
}

void printList(Node* head) {
    Node* current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\\n");
}

int main(void) {
    Node* head = NULL;

    head = insertAtEnd(head, 10);
    head = insertAtEnd(head, 20);
    head = insertAtEnd(head, 30);
    printf("After inserting 10, 20, 30 at end:\\n");
    printList(head);

    head = insertAtFront(head, 5);
    printf("After inserting 5 at front:\\n");
    printList(head);

    Node* current = head;
    while (current != NULL) {
        Node* temp = current;
        current = current->next;
        free(temp);
    }

    return 0;
}`,expectedOutput:`After inserting 10, 20, 30 at end:
10 -> 20 -> 30 -> NULL
After inserting 5 at front:
5 -> 10 -> 20 -> 30 -> NULL`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"삭제와 탐색",headingEn:"Deletion & Search",text:["연결 리스트에서 특정 값을 가진 노드를 삭제하려면, 해당 노드의 이전 노드가 삭제할 노드의 다음 노드를 가리키도록 포인터를 변경한 뒤, 삭제할 노드의 메모리를 해제합니다.","탐색 연산은 head부터 시작하여 각 노드의 데이터를 비교하며 순회합니다. 값을 찾으면 해당 노드의 포인터를 반환하고, 리스트 끝까지 찾지 못하면 NULL을 반환합니다.","삭제 시 head 노드를 삭제하는 경우와 중간/끝 노드를 삭제하는 경우를 구분하여 처리해야 합니다."],textEn:["To delete a node with a specific value, change the previous node's pointer to skip the target node, then free the target node's memory.","The search operation traverses from head, comparing each node's data. It returns the node pointer if found, or NULL if the value isn't in the list.","When deleting, you must handle two cases separately: deleting the head node and deleting a middle/end node."],code:`#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

Node* insertAtEnd(Node* head, int data) {
    Node* newNode = createNode(data);
    if (head == NULL) return newNode;
    Node* current = head;
    while (current->next != NULL)
        current = current->next;
    current->next = newNode;
    return head;
}

Node* deleteNode(Node* head, int data) {
    if (head == NULL) return NULL;
    if (head->data == data) {
        Node* temp = head->next;
        free(head);
        return temp;
    }
    Node* current = head;
    while (current->next != NULL && current->next->data != data) {
        current = current->next;
    }
    if (current->next != NULL) {
        Node* temp = current->next;
        current->next = temp->next;
        free(temp);
    }
    return head;
}

Node* search(Node* head, int data) {
    Node* current = head;
    while (current != NULL) {
        if (current->data == data)
            return current;
        current = current->next;
    }
    return NULL;
}

void printList(Node* head) {
    Node* current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\\n");
}

int main(void) {
    Node* head = NULL;
    head = insertAtEnd(head, 10);
    head = insertAtEnd(head, 20);
    head = insertAtEnd(head, 30);
    head = insertAtEnd(head, 40);

    printf("Original list: ");
    printList(head);

    Node* found = search(head, 30);
    if (found) printf("Found: %d\\n", found->data);
    else printf("Not found\\n");

    found = search(head, 50);
    if (found) printf("Found: %d\\n", found->data);
    else printf("50 not found\\n");

    head = deleteNode(head, 20);
    printf("After deleting 20: ");
    printList(head);

    head = deleteNode(head, 10);
    printf("After deleting 10: ");
    printList(head);

    Node* current = head;
    while (current != NULL) {
        Node* temp = current;
        current = current->next;
        free(temp);
    }

    return 0;
}`,expectedOutput:`Original list: 10 -> 20 -> 30 -> 40 -> NULL
Found: 30
50 not found
After deleting 20: 10 -> 30 -> 40 -> NULL
After deleting 10: 30 -> 40 -> NULL`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"전체 리스트 출력",headingEn:"Printing List",text:["연결 리스트의 모든 요소를 출력하려면 head부터 시작하여 NULL을 만날 때까지 순회합니다. 이를 리스트 순회(traversal)라고 합니다.","프로그램이 끝나기 전에 반드시 모든 노드의 메모리를 해제해야 합니다. 노드를 해제할 때는 다음 노드의 주소를 미리 저장한 뒤 현재 노드를 free해야 합니다. 그렇지 않으면 다음 노드에 접근할 수 없게 됩니다.","이 예제에서는 리스트의 길이를 구하는 함수와 역순으로 출력하는 재귀 함수도 함께 구현합니다."],textEn:["To print all elements, traverse from head until NULL is reached. This is called list traversal.","Before the program ends, you must free all node memory. When freeing nodes, save the next node's address before freeing the current node, otherwise you lose access to the rest of the list.","This example also implements a function to get the list length and a recursive function to print the list in reverse."],code:`#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

Node* insertAtEnd(Node* head, int data) {
    Node* newNode = createNode(data);
    if (head == NULL) return newNode;
    Node* current = head;
    while (current->next != NULL)
        current = current->next;
    current->next = newNode;
    return head;
}

void printList(Node* head) {
    Node* current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\\n");
}

void printReverse(Node* head) {
    if (head == NULL) return;
    printReverse(head->next);
    printf("%d ", head->data);
}

int getLength(Node* head) {
    int count = 0;
    Node* current = head;
    while (current != NULL) {
        count++;
        current = current->next;
    }
    return count;
}

void freeList(Node* head) {
    Node* current = head;
    while (current != NULL) {
        Node* temp = current;
        current = current->next;
        free(temp);
    }
}

int main(void) {
    Node* head = NULL;
    head = insertAtEnd(head, 10);
    head = insertAtEnd(head, 20);
    head = insertAtEnd(head, 30);
    head = insertAtEnd(head, 40);
    head = insertAtEnd(head, 50);

    printf("List: ");
    printList(head);
    printf("Length: %d\\n", getLength(head));
    printf("Reverse: ");
    printReverse(head);
    printf("\\n");

    freeList(head);
    printf("All nodes freed.\\n");

    return 0;
}`,expectedOutput:`List: 10 -> 20 -> 30 -> 40 -> 50 -> NULL
Length: 5
Reverse: 50 40 30 20 10
All nodes freed.`,tip:"메모리 누수를 방지하려면 항상 malloc()으로 할당한 메모리를 free()로 해제하세요. valgrind 같은 도구로 메모리 누수를 검사할 수 있습니다.",tipEn:"To prevent memory leaks, always free memory allocated with malloc(). You can use tools like valgrind to check for memory leaks.",warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."}]},"stack-queue":{sections:[{heading:"스택 구현",headingEn:"Stack Implementation",text:["스택(Stack)은 후입선출(LIFO: Last In, First Out) 원칙을 따르는 자료구조입니다. 마지막에 넣은 데이터가 가장 먼저 나옵니다. 접시를 쌓는 것과 같은 원리입니다.","스택의 핵심 연산은 push(삽입)와 pop(삭제)입니다. push는 스택의 꼭대기에 데이터를 추가하고, pop은 꼭대기의 데이터를 제거하고 반환합니다.","배열을 사용하여 스택을 구현할 수 있습니다. top 변수로 현재 꼭대기의 인덱스를 추적합니다."],textEn:["A Stack is a data structure that follows the LIFO (Last In, First Out) principle. The last element added is the first to be removed, like stacking plates.","The core operations are push (insert) and pop (remove). Push adds data to the top, and pop removes and returns data from the top.","We can implement a stack using an array, tracking the current top index with a top variable."],code:`#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

typedef struct {
    int data[MAX_SIZE];
    int top;
} Stack;

void initStack(Stack* s) {
    s->top = -1;
}

int isEmpty(Stack* s) {
    return s->top == -1;
}

int isFull(Stack* s) {
    return s->top == MAX_SIZE - 1;
}

void push(Stack* s, int value) {
    if (isFull(s)) {
        printf("Stack overflow!\\n");
        return;
    }
    s->data[++(s->top)] = value;
}

int pop(Stack* s) {
    if (isEmpty(s)) {
        printf("Stack underflow!\\n");
        return -1;
    }
    return s->data[(s->top)--];
}

int peek(Stack* s) {
    if (isEmpty(s)) {
        printf("Stack is empty!\\n");
        return -1;
    }
    return s->data[s->top];
}

int main(void) {
    Stack stack;
    initStack(&stack);

    push(&stack, 10);
    push(&stack, 20);
    push(&stack, 30);

    printf("Top element: %d\\n", peek(&stack));
    printf("Popped: %d\\n", pop(&stack));
    printf("Popped: %d\\n", pop(&stack));
    printf("Top element: %d\\n", peek(&stack));
    printf("Is empty: %d\\n", isEmpty(&stack));
    printf("Popped: %d\\n", pop(&stack));
    printf("Is empty: %d\\n", isEmpty(&stack));

    return 0;
}`,expectedOutput:`Top element: 30
Popped: 30
Popped: 20
Top element: 10
Is empty: 0
Popped: 10
Is empty: 1`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"스택 활용: 괄호 검사",headingEn:"Stack Application: Parenthesis Matching",text:["스택의 대표적인 활용 예제는 괄호 짝 맞추기입니다. 여는 괄호를 만나면 스택에 push하고, 닫는 괄호를 만나면 스택에서 pop하여 짝이 맞는지 확인합니다.","문자열을 모두 검사한 후 스택이 비어 있으면 모든 괄호의 짝이 맞는 것이고, 비어 있지 않으면 짝이 맞지 않는 것입니다.","이 알고리즘은 소괄호 (), 중괄호 {}, 대괄호 [] 세 종류의 괄호를 모두 처리할 수 있습니다."],textEn:["A classic stack application is parenthesis matching. Push opening brackets onto the stack, and when encountering a closing bracket, pop and check if they match.","After processing the entire string, if the stack is empty, all brackets are matched; otherwise, they're not.","This algorithm can handle all three types of brackets: parentheses (), curly braces {}, and square brackets []."],code:`#include <stdio.h>
#include <string.h>

#define MAX_SIZE 100

typedef struct {
    char data[MAX_SIZE];
    int top;
} CharStack;

void initStack(CharStack* s) { s->top = -1; }
int isEmpty(CharStack* s) { return s->top == -1; }
void push(CharStack* s, char c) { s->data[++(s->top)] = c; }
char pop(CharStack* s) { return s->data[(s->top)--]; }

int isMatchingPair(char open, char close) {
    return (open == '(' && close == ')') ||
           (open == '{' && close == '}') ||
           (open == '[' && close == ']');
}

int checkParentheses(const char* expr) {
    CharStack stack;
    initStack(&stack);

    for (int i = 0; i < (int)strlen(expr); i++) {
        char ch = expr[i];
        if (ch == '(' || ch == '{' || ch == '[') {
            push(&stack, ch);
        } else if (ch == ')' || ch == '}' || ch == ']') {
            if (isEmpty(&stack)) return 0;
            char top = pop(&stack);
            if (!isMatchingPair(top, ch)) return 0;
        }
    }
    return isEmpty(&stack);
}

int main(void) {
    const char* tests[] = {
        "{[()()]}",
        "((()))",
        "{[(])}",
        "(((",
        "hello(world)"
    };
    int n = 5;

    for (int i = 0; i < n; i++) {
        printf("\\"%s\\" -> %s\\n", tests[i],
               checkParentheses(tests[i]) ? "Balanced" : "Not balanced");
    }

    return 0;
}`,expectedOutput:`"{[()()]}" -> Balanced
"((()))" -> Balanced
"{[(])}" -> Not balanced
"(((" -> Not balanced
"hello(world)" -> Balanced`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"큐 구현",headingEn:"Queue Implementation",text:["큐(Queue)는 선입선출(FIFO: First In, First Out) 원칙을 따르는 자료구조입니다. 먼저 넣은 데이터가 먼저 나옵니다. 줄을 서는 것과 같은 원리입니다.","큐의 핵심 연산은 enqueue(삽입)와 dequeue(삭제)입니다. enqueue는 큐의 뒤(rear)에 데이터를 추가하고, dequeue는 큐의 앞(front)에서 데이터를 제거합니다.","원형 큐(Circular Queue)를 사용하면 배열의 공간을 효율적으로 활용할 수 있습니다. front와 rear가 배열의 끝에 도달하면 다시 처음으로 돌아갑니다."],textEn:["A Queue is a data structure following FIFO (First In, First Out). The first element added is the first removed, like standing in line.","Core operations are enqueue (insert at rear) and dequeue (remove from front).","A Circular Queue efficiently uses array space by wrapping front and rear indices back to the beginning when they reach the end."],code:`#include <stdio.h>

#define MAX_SIZE 5

typedef struct {
    int data[MAX_SIZE];
    int front;
    int rear;
    int count;
} Queue;

void initQueue(Queue* q) {
    q->front = 0;
    q->rear = -1;
    q->count = 0;
}

int isEmpty(Queue* q) { return q->count == 0; }
int isFull(Queue* q) { return q->count == MAX_SIZE; }

void enqueue(Queue* q, int value) {
    if (isFull(q)) {
        printf("Queue is full!\\n");
        return;
    }
    q->rear = (q->rear + 1) % MAX_SIZE;
    q->data[q->rear] = value;
    q->count++;
}

int dequeue(Queue* q) {
    if (isEmpty(q)) {
        printf("Queue is empty!\\n");
        return -1;
    }
    int value = q->data[q->front];
    q->front = (q->front + 1) % MAX_SIZE;
    q->count--;
    return value;
}

int main(void) {
    Queue queue;
    initQueue(&queue);

    enqueue(&queue, 10);
    enqueue(&queue, 20);
    enqueue(&queue, 30);
    printf("Dequeued: %d\\n", dequeue(&queue));
    printf("Dequeued: %d\\n", dequeue(&queue));

    enqueue(&queue, 40);
    enqueue(&queue, 50);
    enqueue(&queue, 60);
    enqueue(&queue, 70);

    printf("Remaining elements:\\n");
    while (!isEmpty(&queue)) {
        printf("  %d\\n", dequeue(&queue));
    }

    return 0;
}`,expectedOutput:`Dequeued: 10
Dequeued: 20
Remaining elements:
  30
  40
  50
  60
  70`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"큐 활용: BFS 스타일 처리",headingEn:"Queue Application: BFS-style Processing",text:["큐는 너비 우선 탐색(BFS: Breadth-First Search) 알고리즘의 핵심 자료구조입니다. BFS는 가까운 노드부터 탐색하는 방식으로, 최단 경로 문제 등에 활용됩니다.","이 예제에서는 간단한 작업 처리 시뮬레이션을 구현합니다. 작업들이 큐에 순서대로 들어가고, 선입선출 방식으로 처리됩니다.","큐를 활용하면 프린터 대기열, 프로세스 스케줄링, 이벤트 처리 등 다양한 실생활 문제를 모델링할 수 있습니다."],textEn:["Queues are essential for BFS (Breadth-First Search) algorithms, which explore nearest nodes first and are used for shortest path problems.","This example implements a simple task processing simulation where tasks enter the queue in order and are processed FIFO.","Queues can model real-world scenarios like printer queues, process scheduling, and event handling."],code:`#include <stdio.h>
#include <string.h>

#define MAX_SIZE 10
#define NAME_LEN 30

typedef struct {
    char name[NAME_LEN];
    int priority;
} Task;

typedef struct {
    Task data[MAX_SIZE];
    int front;
    int rear;
    int count;
} TaskQueue;

void initQueue(TaskQueue* q) {
    q->front = 0;
    q->rear = -1;
    q->count = 0;
}

int isEmpty(TaskQueue* q) { return q->count == 0; }

void enqueue(TaskQueue* q, const char* name, int priority) {
    if (q->count == MAX_SIZE) {
        printf("Queue full!\\n");
        return;
    }
    q->rear = (q->rear + 1) % MAX_SIZE;
    strcpy(q->data[q->rear].name, name);
    q->data[q->rear].priority = priority;
    q->count++;
}

Task dequeue(TaskQueue* q) {
    Task t = q->data[q->front];
    q->front = (q->front + 1) % MAX_SIZE;
    q->count--;
    return t;
}

int main(void) {
    TaskQueue queue;
    initQueue(&queue);

    enqueue(&queue, "Print report", 1);
    enqueue(&queue, "Send email", 2);
    enqueue(&queue, "Backup data", 3);
    enqueue(&queue, "Update log", 1);
    enqueue(&queue, "Compile code", 2);

    printf("Processing tasks in order:\\n");
    int step = 1;
    while (!isEmpty(&queue)) {
        Task t = dequeue(&queue);
        printf("  Step %d: [Priority %d] %s\\n", step++, t.priority, t.name);
    }
    printf("All tasks completed.\\n");

    return 0;
}`,expectedOutput:`Processing tasks in order:
  Step 1: [Priority 1] Print report
  Step 2: [Priority 2] Send email
  Step 3: [Priority 3] Backup data
  Step 4: [Priority 1] Update log
  Step 5: [Priority 2] Compile code
All tasks completed.`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."}]},"tree-basics":{sections:[{heading:"이진 트리 구조",headingEn:"Binary Tree Structure",text:["트리(Tree)는 계층적 구조를 표현하는 비선형 자료구조입니다. 최상위 노드를 루트(root)라 하고, 각 노드는 자식 노드를 가질 수 있습니다.","이진 트리(Binary Tree)는 각 노드가 최대 2개의 자식(왼쪽, 오른쪽)을 가지는 트리입니다. 이진 탐색 트리(BST)는 왼쪽 자식의 값이 부모보다 작고, 오른쪽 자식의 값이 부모보다 큰 이진 트리입니다.","트리 노드는 구조체로 정의하며, 데이터와 왼쪽/오른쪽 자식을 가리키는 두 개의 포인터를 포함합니다."],textEn:["A Tree is a non-linear data structure representing hierarchical relationships. The topmost node is called the root, and each node can have child nodes.","A Binary Tree allows each node to have at most 2 children (left and right). A Binary Search Tree (BST) ensures left children have smaller values and right children have larger values than the parent.","Tree nodes are defined as structs containing data and two pointers for left and right children."],code:`#include <stdio.h>
#include <stdlib.h>

typedef struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
} TreeNode;

TreeNode* createNode(int data) {
    TreeNode* node = (TreeNode*)malloc(sizeof(TreeNode));
    node->data = data;
    node->left = NULL;
    node->right = NULL;
    return node;
}

int main(void) {
    TreeNode* root = createNode(1);
    root->left = createNode(2);
    root->right = createNode(3);
    root->left->left = createNode(4);
    root->left->right = createNode(5);

    printf("Root: %d\\n", root->data);
    printf("Root->left: %d\\n", root->left->data);
    printf("Root->right: %d\\n", root->right->data);
    printf("Root->left->left: %d\\n", root->left->left->data);
    printf("Root->left->right: %d\\n", root->left->right->data);

    free(root->left->left);
    free(root->left->right);
    free(root->left);
    free(root->right);
    free(root);

    return 0;
}`,expectedOutput:`Root: 1
Root->left: 2
Root->right: 3
Root->left->left: 4
Root->left->right: 5`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"BST 삽입과 탐색",headingEn:"BST Insert & Search",text:["이진 탐색 트리에 새 값을 삽입할 때는 루트부터 시작하여 값을 비교하며 올바른 위치를 찾습니다. 삽입할 값이 현재 노드보다 작으면 왼쪽으로, 크면 오른쪽으로 이동합니다.","탐색도 같은 원리입니다. 찾는 값이 현재 노드와 같으면 찾은 것이고, 작으면 왼쪽, 크면 오른쪽으로 이동합니다. NULL을 만나면 값이 트리에 없는 것입니다.","재귀적 구현이 직관적이며, BST의 평균 시간 복잡도는 O(log n)입니다. 하지만 편향 트리의 경우 O(n)까지 늘어날 수 있습니다."],textEn:["When inserting into a BST, start at the root and compare values to find the correct position. Go left if the value is smaller, right if larger.","Searching works the same way: if the value matches the current node, it's found; if smaller, go left; if larger, go right. Reaching NULL means the value isn't in the tree.","Recursive implementation is intuitive. BST average time complexity is O(log n), but can degrade to O(n) for skewed trees."],code:`#include <stdio.h>
#include <stdlib.h>

typedef struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
} TreeNode;

TreeNode* createNode(int data) {
    TreeNode* node = (TreeNode*)malloc(sizeof(TreeNode));
    node->data = data;
    node->left = NULL;
    node->right = NULL;
    return node;
}

TreeNode* insert(TreeNode* root, int data) {
    if (root == NULL) {
        return createNode(data);
    }
    if (data < root->data) {
        root->left = insert(root->left, data);
    } else if (data > root->data) {
        root->right = insert(root->right, data);
    }
    return root;
}

TreeNode* search(TreeNode* root, int data) {
    if (root == NULL || root->data == data) {
        return root;
    }
    if (data < root->data) {
        return search(root->left, data);
    }
    return search(root->right, data);
}

void inorder(TreeNode* root) {
    if (root == NULL) return;
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}

void freeTree(TreeNode* root) {
    if (root == NULL) return;
    freeTree(root->left);
    freeTree(root->right);
    free(root);
}

int main(void) {
    TreeNode* root = NULL;
    root = insert(root, 50);
    insert(root, 30);
    insert(root, 70);
    insert(root, 20);
    insert(root, 40);
    insert(root, 60);
    insert(root, 80);

    printf("Inorder traversal: ");
    inorder(root);
    printf("\\n");

    int key = 40;
    TreeNode* result = search(root, key);
    if (result) printf("Found %d in the BST\\n", key);
    else printf("%d not found\\n", key);

    key = 45;
    result = search(root, key);
    if (result) printf("Found %d in the BST\\n", key);
    else printf("%d not found in the BST\\n", key);

    freeTree(root);

    return 0;
}`,expectedOutput:`Inorder traversal: 20 30 40 50 60 70 80
Found 40 in the BST
45 not found in the BST`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"트리 순회",headingEn:"Tree Traversal",text:["트리 순회(Tree Traversal)는 트리의 모든 노드를 체계적으로 방문하는 방법입니다. 이진 트리의 세 가지 주요 순회 방법을 알아봅니다.","전위 순회(Preorder): 루트 -> 왼쪽 -> 오른쪽 순서로 방문합니다. 트리를 복사할 때 유용합니다. 중위 순회(Inorder): 왼쪽 -> 루트 -> 오른쪽 순서로 방문합니다. BST에서 오름차순 정렬 결과를 얻을 수 있습니다.","후위 순회(Postorder): 왼쪽 -> 오른쪽 -> 루트 순서로 방문합니다. 트리를 삭제할 때 유용합니다. 자식 노드를 먼저 처리한 후 부모 노드를 처리하기 때문입니다."],textEn:["Tree Traversal is a systematic way to visit all nodes. Let's explore the three main traversal methods for binary trees.","Preorder: Visit root, then left, then right. Useful for copying trees. Inorder: Visit left, then root, then right. Produces sorted output for BSTs.","Postorder: Visit left, then right, then root. Useful for deleting trees since children are processed before parents."],code:`#include <stdio.h>
#include <stdlib.h>

typedef struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
} TreeNode;

TreeNode* createNode(int data) {
    TreeNode* node = (TreeNode*)malloc(sizeof(TreeNode));
    node->data = data;
    node->left = NULL;
    node->right = NULL;
    return node;
}

TreeNode* insert(TreeNode* root, int data) {
    if (root == NULL) return createNode(data);
    if (data < root->data)
        root->left = insert(root->left, data);
    else if (data > root->data)
        root->right = insert(root->right, data);
    return root;
}

void preorder(TreeNode* root) {
    if (root == NULL) return;
    printf("%d ", root->data);
    preorder(root->left);
    preorder(root->right);
}

void inorder(TreeNode* root) {
    if (root == NULL) return;
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}

void postorder(TreeNode* root) {
    if (root == NULL) return;
    postorder(root->left);
    postorder(root->right);
    printf("%d ", root->data);
}

void freeTree(TreeNode* root) {
    if (root == NULL) return;
    freeTree(root->left);
    freeTree(root->right);
    free(root);
}

int main(void) {
    TreeNode* root = NULL;
    root = insert(root, 50);
    insert(root, 30);
    insert(root, 70);
    insert(root, 20);
    insert(root, 40);
    insert(root, 60);
    insert(root, 80);

    printf("Preorder:  ");
    preorder(root);
    printf("\\n");

    printf("Inorder:   ");
    inorder(root);
    printf("\\n");

    printf("Postorder: ");
    postorder(root);
    printf("\\n");

    freeTree(root);

    return 0;
}`,expectedOutput:`Preorder:  50 30 20 40 70 60 80
Inorder:   20 30 40 50 60 70 80
Postorder: 20 40 30 60 80 70 50`,tip:"중위 순회(Inorder)는 BST에서 값을 오름차순으로 정렬하는 가장 간단한 방법입니다.",tipEn:"Inorder traversal is the simplest way to get sorted values from a BST.",warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."}]},sorting:{sections:[{heading:"버블 정렬",headingEn:"Bubble Sort",text:["버블 정렬(Bubble Sort)은 인접한 두 요소를 비교하여 순서가 잘못되어 있으면 교환하는 정렬 알고리즘입니다. 가장 큰 값이 거품처럼 배열의 끝으로 이동하기 때문에 버블 정렬이라 합니다.","외부 루프는 전체 패스 횟수를, 내부 루프는 각 패스에서의 비교를 담당합니다. 시간 복잡도는 O(n^2)으로, 큰 데이터에는 비효율적이지만 구현이 간단합니다.","최적화로, 한 패스에서 교환이 한 번도 일어나지 않으면 이미 정렬된 것이므로 조기에 종료할 수 있습니다."],textEn:[`Bubble Sort compares adjacent elements and swaps them if they're in the wrong order. The largest values "bubble up" to the end of the array.`,"The outer loop controls the number of passes, and the inner loop handles comparisons. Time complexity is O(n^2) -- inefficient for large data but simple to implement.","An optimization: if no swaps occur during a pass, the array is already sorted and we can terminate early."],code:`#include <stdio.h>

void bubbleSort(int arr[], int n) {
    int i, j, temp, swapped;
    for (i = 0; i < n - 1; i++) {
        swapped = 0;
        for (j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1;
            }
        }
        if (!swapped) break;
    }
}

void printArray(int arr[], int n) {
    int i;
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main(void) {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = 7;

    printf("Before sorting: ");
    printArray(arr, n);

    bubbleSort(arr, n);

    printf("After sorting:  ");
    printArray(arr, n);

    return 0;
}`,expectedOutput:`Before sorting: 64 34 25 12 22 11 90
After sorting:  11 12 22 25 34 64 90`},{heading:"선택 정렬",headingEn:"Selection Sort",text:["선택 정렬(Selection Sort)은 배열에서 가장 작은 요소를 찾아 맨 앞의 요소와 교환하는 과정을 반복하는 알고리즘입니다.","각 패스마다 정렬되지 않은 부분에서 최솟값을 찾아 정렬된 부분의 끝에 배치합니다. 시간 복잡도는 항상 O(n^2)이지만, 교환 횟수가 적어 교환 비용이 큰 경우에 유리합니다.","버블 정렬과 달리 교환은 각 패스당 최대 1번만 발생합니다."],textEn:["Selection Sort repeatedly finds the minimum element from the unsorted portion and places it at the beginning.","Each pass finds the minimum in the unsorted section and places it at the end of the sorted section. Time complexity is always O(n^2), but fewer swaps make it advantageous when swap cost is high.","Unlike Bubble Sort, at most one swap occurs per pass."],code:`#include <stdio.h>

void selectionSort(int arr[], int n) {
    int i, j, minIdx, temp;
    for (i = 0; i < n - 1; i++) {
        minIdx = i;
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx != i) {
            temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
}

void printArray(int arr[], int n) {
    int i;
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main(void) {
    int arr[] = {29, 10, 14, 37, 13};
    int n = 5;

    printf("Before sorting: ");
    printArray(arr, n);

    selectionSort(arr, n);

    printf("After sorting:  ");
    printArray(arr, n);

    return 0;
}`,expectedOutput:`Before sorting: 29 10 14 37 13
After sorting:  10 13 14 29 37`},{heading:"삽입 정렬",headingEn:"Insertion Sort",text:["삽입 정렬(Insertion Sort)은 각 요소를 이미 정렬된 부분의 올바른 위치에 삽입하는 알고리즘입니다. 카드 게임에서 손에 든 카드를 정렬하는 것과 같은 원리입니다.","현재 요소를 key로 저장하고, 정렬된 부분에서 key보다 큰 요소들을 한 칸씩 오른쪽으로 이동시킨 후, 빈 자리에 key를 삽입합니다.","시간 복잡도는 최악의 경우 O(n^2)이지만, 거의 정렬된 데이터에 대해서는 O(n)에 가까운 성능을 보여 실용적인 알고리즘입니다."],textEn:["Insertion Sort inserts each element into its correct position within the already sorted portion, like sorting cards in your hand.","Store the current element as key, shift all larger elements in the sorted portion one position right, then insert key into the empty spot.","Worst-case time complexity is O(n^2), but for nearly sorted data it approaches O(n), making it practical for many real-world scenarios."],code:`#include <stdio.h>

void insertionSort(int arr[], int n) {
    int i, j, key;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

void printArray(int arr[], int n) {
    int i;
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main(void) {
    int arr[] = {12, 11, 13, 5, 6};
    int n = 5;

    printf("Before sorting: ");
    printArray(arr, n);

    insertionSort(arr, n);

    printf("After sorting:  ");
    printArray(arr, n);

    return 0;
}`,expectedOutput:`Before sorting: 12 11 13 5 6
After sorting:  5 6 11 12 13`},{heading:"퀵 정렬",headingEn:"Quick Sort",text:["퀵 정렬(Quick Sort)은 분할 정복(Divide and Conquer) 전략을 사용하는 효율적인 정렬 알고리즘입니다. 피벗(pivot) 요소를 기준으로 배열을 두 부분으로 분할합니다.","파티션(partition) 과정에서 피벗보다 작은 요소는 왼쪽으로, 큰 요소는 오른쪽으로 이동합니다. 그 후 각 부분에 대해 재귀적으로 퀵 정렬을 수행합니다.","평균 시간 복잡도는 O(n log n)으로 매우 효율적이며, 실무에서 가장 많이 사용되는 정렬 알고리즘 중 하나입니다. 최악의 경우(이미 정렬된 배열) O(n^2)이 될 수 있습니다."],textEn:["Quick Sort uses the Divide and Conquer strategy. It selects a pivot element and partitions the array into two halves.","During partition, elements smaller than the pivot move left, and larger elements move right. Then Quick Sort is applied recursively to each half.","Average time complexity is O(n log n), making it one of the most widely used sorting algorithms in practice. Worst case (already sorted array) can be O(n^2)."],code:`#include <stdio.h>

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    int j;
    for (j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

void printArray(int arr[], int n) {
    int i;
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main(void) {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = 6;

    printf("Before sorting: ");
    printArray(arr, n);

    quickSort(arr, 0, n - 1);

    printf("After sorting:  ");
    printArray(arr, n);

    return 0;
}`,expectedOutput:`Before sorting: 10 7 8 9 1 5
After sorting:  1 5 7 8 9 10`,tip:"퀵 정렬의 성능은 피벗 선택에 크게 좌우됩니다. 중앙값을 피벗으로 선택하면 최악의 경우를 피할 수 있습니다.",tipEn:"Quick Sort performance heavily depends on pivot selection. Choosing the median as pivot avoids worst-case scenarios."}]},searching:{sections:[{heading:"순차 탐색",headingEn:"Linear Search",text:["순차 탐색(Linear Search)은 배열의 처음부터 끝까지 하나씩 비교하며 원하는 값을 찾는 가장 기본적인 탐색 알고리즘입니다.","배열이 정렬되어 있지 않아도 사용할 수 있다는 장점이 있습니다. 하지만 시간 복잡도가 O(n)이므로, 데이터가 많을수록 느려집니다.","값을 찾으면 해당 인덱스를 반환하고, 끝까지 찾지 못하면 -1을 반환하는 것이 일반적인 패턴입니다."],textEn:["Linear Search is the most basic search algorithm that checks each element from the beginning to the end of the array.","It works on unsorted arrays, which is an advantage. However, its O(n) time complexity means it slows down with more data.","The common pattern is to return the index when found, or -1 if the value isn't in the array."],code:`#include <stdio.h>

int linearSearch(int arr[], int n, int target) {
    int i;
    for (i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

int main(void) {
    int arr[] = {23, 45, 12, 67, 34, 89, 56};
    int n = 7;
    int target;
    int result;

    target = 67;
    result = linearSearch(arr, n, target);
    if (result != -1)
        printf("%d found at index %d\\n", target, result);
    else
        printf("%d not found\\n", target);

    target = 50;
    result = linearSearch(arr, n, target);
    if (result != -1)
        printf("%d found at index %d\\n", target, result);
    else
        printf("%d not found\\n", target);

    target = 23;
    result = linearSearch(arr, n, target);
    if (result != -1)
        printf("%d found at index %d\\n", target, result);
    else
        printf("%d not found\\n", target);

    return 0;
}`,expectedOutput:`67 found at index 3
50 not found
23 found at index 0`},{heading:"이진 탐색",headingEn:"Binary Search",text:["이진 탐색(Binary Search)은 정렬된 배열에서 탐색 범위를 절반씩 줄여가며 값을 찾는 효율적인 알고리즘입니다. 시간 복잡도는 O(log n)입니다.","배열의 중간 요소와 찾는 값을 비교합니다. 찾는 값이 중간 값보다 작으면 왼쪽 절반을, 크면 오른쪽 절반을 탐색합니다. 이 과정을 값을 찾거나 탐색 범위가 없어질 때까지 반복합니다.","이진 탐색을 사용하려면 반드시 배열이 정렬되어 있어야 합니다. 100만 개의 요소가 있어도 최대 약 20번의 비교로 값을 찾을 수 있습니다."],textEn:["Binary Search efficiently finds values in sorted arrays by halving the search range each step. Time complexity is O(log n).","Compare the target with the middle element. If the target is smaller, search the left half; if larger, search the right half. Repeat until found or the range is empty.","The array MUST be sorted for binary search. Even with 1 million elements, at most about 20 comparisons are needed."],code:`#include <stdio.h>

int binarySearch(int arr[], int n, int target) {
    int low = 0;
    int high = n - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

int main(void) {
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int n = 10;
    int target;
    int result;

    target = 23;
    result = binarySearch(arr, n, target);
    if (result != -1)
        printf("%d found at index %d\\n", target, result);
    else
        printf("%d not found\\n", target);

    target = 100;
    result = binarySearch(arr, n, target);
    if (result != -1)
        printf("%d found at index %d\\n", target, result);
    else
        printf("%d not found\\n", target);

    target = 2;
    result = binarySearch(arr, n, target);
    if (result != -1)
        printf("%d found at index %d\\n", target, result);
    else
        printf("%d not found\\n", target);

    return 0;
}`,expectedOutput:`23 found at index 5
100 not found
2 found at index 0`,tip:"mid = (low + high) / 2 대신 mid = low + (high - low) / 2를 사용하면 정수 오버플로를 방지할 수 있습니다.",tipEn:"Using mid = low + (high - low) / 2 instead of mid = (low + high) / 2 prevents integer overflow."},{heading:"해시 테이블",headingEn:"Hash Table",text:["해시 테이블(Hash Table)은 키를 해시 함수에 넣어 인덱스를 계산하고, 해당 위치에 데이터를 저장하는 자료구조입니다. 평균 O(1) 시간에 삽입, 삭제, 탐색이 가능합니다.","해시 충돌(collision)은 서로 다른 키가 같은 인덱스로 매핑되는 경우입니다. 체이닝(chaining) 방식은 같은 인덱스에 연결 리스트로 데이터를 연결하여 충돌을 해결합니다.","좋은 해시 함수는 데이터를 균등하게 분포시켜 충돌을 최소화합니다. 이 예제에서는 간단한 나머지 연산(%)을 해시 함수로 사용합니다."],textEn:["A Hash Table computes an index using a hash function on the key, then stores data at that index. Average O(1) time for insert, delete, and search.","Hash collisions occur when different keys map to the same index. Chaining resolves collisions by linking data at the same index using a linked list.","A good hash function distributes data evenly to minimize collisions. This example uses a simple modulo (%) operation as the hash function."],code:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TABLE_SIZE 10

typedef struct Entry {
    int key;
    int value;
    struct Entry* next;
} Entry;

typedef struct {
    Entry* buckets[TABLE_SIZE];
} HashTable;

int hash(int key) {
    return key % TABLE_SIZE;
}

HashTable* createTable(void) {
    HashTable* table = (HashTable*)malloc(sizeof(HashTable));
    int i;
    for (i = 0; i < TABLE_SIZE; i++) {
        table->buckets[i] = NULL;
    }
    return table;
}

void insert(HashTable* table, int key, int value) {
    int idx = hash(key);
    Entry* entry = (Entry*)malloc(sizeof(Entry));
    entry->key = key;
    entry->value = value;
    entry->next = table->buckets[idx];
    table->buckets[idx] = entry;
}

int search(HashTable* table, int key, int* found) {
    int idx = hash(key);
    Entry* entry = table->buckets[idx];
    while (entry != NULL) {
        if (entry->key == key) {
            *found = 1;
            return entry->value;
        }
        entry = entry->next;
    }
    *found = 0;
    return -1;
}

void freeTable(HashTable* table) {
    int i;
    for (i = 0; i < TABLE_SIZE; i++) {
        Entry* entry = table->buckets[i];
        while (entry != NULL) {
            Entry* temp = entry;
            entry = entry->next;
            free(temp);
        }
    }
    free(table);
}

int main(void) {
    HashTable* table = createTable();

    insert(table, 1, 100);
    insert(table, 11, 200);
    insert(table, 21, 300);
    insert(table, 5, 500);

    int found;
    int val;

    val = search(table, 1, &found);
    if (found) printf("Key 1: value = %d\\n", val);

    val = search(table, 11, &found);
    if (found) printf("Key 11: value = %d\\n", val);

    val = search(table, 21, &found);
    if (found) printf("Key 21: value = %d\\n", val);

    val = search(table, 7, &found);
    if (found) printf("Key 7: value = %d\\n", val);
    else printf("Key 7: not found\\n");

    printf("Keys 1, 11, 21 all hash to index %d (chaining)\\n", hash(1));

    freeTable(table);

    return 0;
}`,expectedOutput:`Key 1: value = 100
Key 11: value = 200
Key 21: value = 300
Key 7: not found
Keys 1, 11, 21 all hash to index 1 (chaining)`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."}]},recursion:{sections:[{heading:"재귀의 기본",headingEn:"Recursion Basics",text:["재귀(Recursion)란 함수가 자기 자신을 호출하는 프로그래밍 기법입니다. 큰 문제를 같은 구조의 작은 문제로 나누어 해결할 때 유용합니다.","모든 재귀 함수에는 반드시 종료 조건(base case)이 있어야 합니다. 종료 조건이 없으면 함수가 무한히 호출되어 스택 오버플로가 발생합니다.","팩토리얼 계산은 재귀의 대표적인 예입니다. n! = n * (n-1)! 이며, 종료 조건은 0! = 1입니다."],textEn:["Recursion is a programming technique where a function calls itself. It's useful for breaking down large problems into smaller subproblems of the same structure.","Every recursive function must have a base case (termination condition). Without it, the function calls itself infinitely, causing a stack overflow.","Factorial calculation is a classic recursion example. n! = n * (n-1)!, with the base case 0! = 1."],code:`#include <stdio.h>

int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

int sum(int n) {
    if (n <= 0) {
        return 0;
    }
    return n + sum(n - 1);
}

int main(void) {
    printf("5! = %d\\n", factorial(5));
    printf("4! = %d\\n", factorial(4));
    printf("0! = %d\\n", factorial(0));
    printf("1! = %d\\n", factorial(1));

    printf("Sum 1 to 10 = %d\\n", sum(10));
    printf("Sum 1 to 5 = %d\\n", sum(5));

    return 0;
}`,expectedOutput:`5! = 120
4! = 24
0! = 1
1! = 1
Sum 1 to 10 = 55
Sum 1 to 5 = 15`,tip:"재귀 함수를 작성할 때는 항상 종료 조건(base case)을 먼저 작성하세요. 이렇게 하면 무한 재귀를 방지할 수 있습니다.",tipEn:"When writing recursive functions, always write the base case first. This helps prevent infinite recursion."},{heading:"피보나치 수열",headingEn:"Fibonacci Sequence",text:["피보나치 수열은 각 항이 앞의 두 항의 합인 수열입니다: 0, 1, 1, 2, 3, 5, 8, 13, 21, ... 자연에서 나선 패턴, 꽃잎 수 등에서 나타납니다.","재귀적 정의는 간단합니다: fib(0) = 0, fib(1) = 1, fib(n) = fib(n-1) + fib(n-2). 하지만 단순 재귀는 같은 값을 여러 번 계산하여 비효율적입니다.","반복문을 사용한 구현은 O(n) 시간에 계산할 수 있어 훨씬 효율적입니다. 메모이제이션(memoization)을 적용하면 재귀에서도 효율성을 개선할 수 있습니다."],textEn:["The Fibonacci sequence is where each term is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, 13, 21... It appears in nature in spiral patterns and petal counts.","The recursive definition is simple: fib(0) = 0, fib(1) = 1, fib(n) = fib(n-1) + fib(n-2). However, naive recursion recalculates the same values, making it inefficient.","An iterative implementation runs in O(n) time and is much more efficient. Memoization can also improve recursive efficiency."],code:`#include <stdio.h>

int fibRecursive(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

int fibIterative(int n) {
    int i;
    if (n <= 0) return 0;
    if (n == 1) return 1;

    int prev2 = 0;
    int prev1 = 1;
    int current = 0;
    for (i = 2; i <= n; i++) {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return current;
}

int main(void) {
    int i;
    printf("Fibonacci (recursive):\\n");
    for (i = 0; i <= 10; i++) {
        printf("fib(%d) = %d\\n", i, fibRecursive(i));
    }

    printf("\\nFibonacci (iterative):\\n");
    for (i = 0; i <= 10; i++) {
        printf("fib(%d) = %d\\n", i, fibIterative(i));
    }

    return 0;
}`,expectedOutput:`Fibonacci (recursive):
fib(0) = 0
fib(1) = 1
fib(2) = 1
fib(3) = 2
fib(4) = 3
fib(5) = 5
fib(6) = 8
fib(7) = 13
fib(8) = 21
fib(9) = 34
fib(10) = 55

Fibonacci (iterative):
fib(0) = 0
fib(1) = 1
fib(2) = 1
fib(3) = 2
fib(4) = 3
fib(5) = 5
fib(6) = 8
fib(7) = 13
fib(8) = 21
fib(9) = 34
fib(10) = 55`},{heading:"하노이의 탑",headingEn:"Tower of Hanoi",text:["하노이의 탑은 재귀의 아름다움을 보여주는 고전적인 문제입니다. 세 개의 기둥과 n개의 원판이 있으며, 한 기둥에서 다른 기둥으로 모든 원판을 옮겨야 합니다.","규칙은 간단합니다: 한 번에 하나의 원판만 옮길 수 있고, 큰 원판 위에 작은 원판만 놓을 수 있습니다.","재귀적 해법: n-1개의 원판을 보조 기둥으로 옮기고, 가장 큰 원판을 목표 기둥으로 옮긴 다음, n-1개의 원판을 목표 기둥으로 옮깁니다. 이동 횟수는 2^n - 1 입니다."],textEn:["The Tower of Hanoi is a classic problem showcasing the beauty of recursion. Given three pegs and n disks, move all disks from one peg to another.","Rules are simple: move only one disk at a time, and a larger disk cannot be placed on a smaller one.","Recursive solution: move n-1 disks to auxiliary peg, move the largest disk to target peg, then move n-1 disks to target peg. Total moves: 2^n - 1."],code:`#include <stdio.h>

void hanoi(int n, char from, char to, char aux) {
    if (n == 1) {
        printf("Move disk 1 from %c to %c\\n", from, to);
        return;
    }
    hanoi(n - 1, from, aux, to);
    printf("Move disk %d from %c to %c\\n", n, from, to);
    hanoi(n - 1, aux, to, from);
}

int main(void) {
    int n = 3;
    printf("Tower of Hanoi with %d disks:\\n", n);
    hanoi(n, 'A', 'C', 'B');

    return 0;
}`,expectedOutput:`Tower of Hanoi with 3 disks:
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C`},{heading:"분할 정복: 거듭제곱",headingEn:"Divide and Conquer: Power Function",text:["분할 정복(Divide and Conquer)은 문제를 작은 부분 문제로 나누고, 각각을 해결한 뒤 합치는 전략입니다. 재귀와 함께 사용되는 핵심 알고리즘 설계 기법입니다.","거듭제곱 계산을 예로 들어봅시다. 단순히 x를 n번 곱하면 O(n)이지만, 분할 정복을 적용하면 O(log n)에 계산할 수 있습니다.","x^n = x^(n/2) * x^(n/2) (n이 짝수일 때), x^n = x * x^(n/2) * x^(n/2) (n이 홀수일 때). 이 원리로 큰 거듭제곱도 빠르게 계산할 수 있습니다."],textEn:["Divide and Conquer splits problems into smaller subproblems, solves each, and combines results. It's a key algorithm design technique used with recursion.","Consider power calculation. Simply multiplying x by itself n times is O(n), but divide and conquer achieves O(log n).","x^n = x^(n/2) * x^(n/2) (when n is even), x^n = x * x^(n/2) * x^(n/2) (when n is odd). This principle enables fast computation of large powers."],code:`#include <stdio.h>

long long powerSlow(int base, int exp) {
    long long result = 1;
    int i;
    for (i = 0; i < exp; i++) {
        result = result * base;
    }
    return result;
}

long long powerFast(int base, int exp) {
    if (exp == 0) return 1;
    if (exp == 1) return base;

    long long half = powerFast(base, exp / 2);

    if (exp % 2 == 0) {
        return half * half;
    } else {
        return base * half * half;
    }
}

int main(void) {
    printf("2^10 = %lld\\n", powerFast(2, 10));
    printf("3^5  = %lld\\n", powerFast(3, 5));
    printf("5^3  = %lld\\n", powerFast(5, 3));
    printf("2^20 = %lld\\n", powerFast(2, 20));
    printf("7^0  = %lld\\n", powerFast(7, 0));

    printf("\\nVerification with slow method:\\n");
    printf("2^10 = %lld\\n", powerSlow(2, 10));
    printf("3^5  = %lld\\n", powerSlow(3, 5));

    return 0;
}`,expectedOutput:`2^10 = 1024
3^5  = 243
5^3  = 125
2^20 = 1048576
7^0  = 1

Verification with slow method:
2^10 = 1024
3^5  = 243`,tip:"분할 정복은 병합 정렬, 퀵 정렬, 이진 탐색 등 많은 효율적인 알고리즘의 기반입니다.",tipEn:"Divide and conquer is the foundation for many efficient algorithms including merge sort, quick sort, and binary search."}]},bitwise:{sections:[{heading:"비트 연산자",headingEn:"Bitwise Operators",text:["비트 연산자는 정수의 개별 비트를 직접 조작하는 연산자입니다. C언어는 6가지 비트 연산자를 제공합니다: AND(&), OR(|), XOR(^), NOT(~), 왼쪽 시프트(<<), 오른쪽 시프트(>>).","AND(&)는 두 비트가 모두 1일 때 1, OR(|)는 둘 중 하나라도 1이면 1, XOR(^)는 두 비트가 다를 때 1을 반환합니다. NOT(~)은 모든 비트를 반전시킵니다.","시프트 연산자는 비트를 왼쪽 또는 오른쪽으로 이동시킵니다. 왼쪽 시프트(<<)는 2를 곱하는 효과가 있고, 오른쪽 시프트(>>)는 2로 나누는 효과가 있습니다."],textEn:["Bitwise operators manipulate individual bits of integers. C provides 6 bitwise operators: AND(&), OR(|), XOR(^), NOT(~), left shift(<<), and right shift(>>).","AND(&) returns 1 when both bits are 1, OR(|) returns 1 when either bit is 1, XOR(^) returns 1 when bits differ. NOT(~) inverts all bits.","Shift operators move bits left or right. Left shift(<<) effectively multiplies by 2, and right shift(>>) divides by 2."],code:`#include <stdio.h>

int main(void) {
    int a = 12;
    int b = 10;

    printf("a = %d (binary: 1100)\\n", a);
    printf("b = %d (binary: 1010)\\n", b);
    printf("\\n");

    printf("a & b  = %d  (AND)\\n", a & b);
    printf("a | b  = %d  (OR)\\n", a | b);
    printf("a ^ b  = %d   (XOR)\\n", a ^ b);
    printf("~a     = %d (NOT)\\n", ~a);
    printf("\\n");

    printf("a << 1 = %d  (left shift by 1, x2)\\n", a << 1);
    printf("a << 2 = %d  (left shift by 2, x4)\\n", a << 2);
    printf("a >> 1 = %d   (right shift by 1, /2)\\n", a >> 1);
    printf("a >> 2 = %d   (right shift by 2, /4)\\n", a >> 2);

    return 0;
}`,expectedOutput:`a = 12 (binary: 1100)
b = 10 (binary: 1010)

a & b  = 8  (AND)
a | b  = 14  (OR)
a ^ b  = 6   (XOR)
~a     = -13 (NOT)

a << 1 = 24  (left shift by 1, x2)
a << 2 = 48  (left shift by 2, x4)
a >> 1 = 6   (right shift by 1, /2)
a >> 2 = 3   (right shift by 2, /4)`},{heading:"비트 마스킹",headingEn:"Bit Masking",text:["비트 마스킹은 특정 비트를 설정(set), 해제(clear), 토글(toggle), 확인(check)하는 기법입니다. 플래그 관리, 권한 시스템, 상태 관리 등에 활용됩니다.","특정 비트 설정: value | (1 << n), 특정 비트 해제: value & ~(1 << n), 특정 비트 토글: value ^ (1 << n), 특정 비트 확인: value & (1 << n)","비트 마스킹을 사용하면 하나의 정수로 여러 개의 불리언(boolean) 값을 효율적으로 관리할 수 있습니다."],textEn:["Bit masking is a technique to set, clear, toggle, and check specific bits. It's used in flag management, permission systems, and state management.","Set a bit: value | (1 << n), Clear a bit: value & ~(1 << n), Toggle a bit: value ^ (1 << n), Check a bit: value & (1 << n)","Bit masking lets you efficiently manage multiple boolean values using a single integer."],code:`#include <stdio.h>

void printBinary(int num, int bits) {
    int i;
    for (i = bits - 1; i >= 0; i--) {
        printf("%d", (num >> i) & 1);
    }
}

int main(void) {
    int flags = 0;

    printf("Initial: ");
    printBinary(flags, 8);
    printf(" (%d)\\n", flags);

    flags = flags | (1 << 0);
    flags = flags | (1 << 2);
    flags = flags | (1 << 4);
    printf("Set bits 0,2,4: ");
    printBinary(flags, 8);
    printf(" (%d)\\n", flags);

    flags = flags & ~(1 << 2);
    printf("Clear bit 2:    ");
    printBinary(flags, 8);
    printf(" (%d)\\n", flags);

    flags = flags ^ (1 << 0);
    printf("Toggle bit 0:   ");
    printBinary(flags, 8);
    printf(" (%d)\\n", flags);

    flags = flags ^ (1 << 0);
    printf("Toggle bit 0:   ");
    printBinary(flags, 8);
    printf(" (%d)\\n", flags);

    printf("\\nChecking bits:\\n");
    printf("Bit 0 is %s\\n", (flags & (1 << 0)) ? "SET" : "NOT SET");
    printf("Bit 2 is %s\\n", (flags & (1 << 2)) ? "SET" : "NOT SET");
    printf("Bit 4 is %s\\n", (flags & (1 << 4)) ? "SET" : "NOT SET");

    return 0;
}`,expectedOutput:`Initial: 00000000 (0)
Set bits 0,2,4: 00010101 (21)
Clear bit 2:    00010001 (17)
Toggle bit 0:   00010000 (16)
Toggle bit 0:   00010001 (17)

Checking bits:
Bit 0 is SET
Bit 2 is NOT SET
Bit 4 is SET`},{heading:"비트 연산 활용",headingEn:"Practical Bitwise",text:["비트 연산은 다양한 실용적인 문제를 효율적으로 해결할 수 있습니다. 대표적인 활용 예제를 살펴봅니다.","짝수/홀수 판별: 마지막 비트가 0이면 짝수, 1이면 홀수입니다 (n & 1). 임시 변수 없이 두 값 교환: XOR 연산을 세 번 사용합니다 (a ^= b; b ^= a; a ^= b).","설정된 비트 수 세기(popcount): 비트를 하나씩 확인하거나, n & (n-1) 연산으로 효율적으로 셀 수 있습니다. 이 연산은 가장 낮은 설정 비트를 제거합니다."],textEn:["Bitwise operations can solve various practical problems efficiently. Let's look at some common use cases.","Even/odd check: if the last bit is 0, the number is even; if 1, it's odd (n & 1). Swap without temp variable: use XOR three times (a ^= b; b ^= a; a ^= b).","Count set bits (popcount): check bits one by one, or efficiently use n & (n-1) which removes the lowest set bit each time."],code:`#include <stdio.h>

int isEven(int n) {
    return !(n & 1);
}

void swapXOR(int *a, int *b) {
    if (*a != *b) {
        *a = *a ^ *b;
        *b = *a ^ *b;
        *a = *a ^ *b;
    }
}

int countSetBits(int n) {
    int count = 0;
    while (n > 0) {
        n = n & (n - 1);
        count++;
    }
    return count;
}

int isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}

int main(void) {
    int i;
    printf("=== Even/Odd Check ===\\n");
    for (i = 1; i <= 6; i++) {
        printf("%d is %s\\n", i, isEven(i) ? "even" : "odd");
    }

    printf("\\n=== XOR Swap ===\\n");
    int a = 15;
    int b = 27;
    printf("Before: a = %d, b = %d\\n", a, b);
    swapXOR(&a, &b);
    printf("After:  a = %d, b = %d\\n", a, b);

    printf("\\n=== Count Set Bits ===\\n");
    int nums[] = {7, 10, 15, 16, 255};
    int n = 5;
    for (i = 0; i < n; i++) {
        printf("%d has %d set bits\\n", nums[i], countSetBits(nums[i]));
    }

    printf("\\n=== Power of Two Check ===\\n");
    int tests[] = {1, 2, 3, 4, 8, 10, 16, 32};
    int t = 8;
    for (i = 0; i < t; i++) {
        printf("%d: %s\\n", tests[i],
               isPowerOfTwo(tests[i]) ? "power of 2" : "not power of 2");
    }

    return 0;
}`,expectedOutput:`=== Even/Odd Check ===
1 is odd
2 is even
3 is odd
4 is even
5 is odd
6 is even

=== XOR Swap ===
Before: a = 15, b = 27
After:  a = 27, b = 15

=== Count Set Bits ===
7 has 3 set bits
10 has 2 set bits
15 has 4 set bits
16 has 1 set bits
255 has 8 set bits

=== Power of Two Check ===
1: power of 2
2: power of 2
3: not power of 2
4: power of 2
8: power of 2
10: not power of 2
16: power of 2
32: power of 2`,tip:"n & (n-1)은 가장 낮은 설정 비트를 제거하는 유명한 비트 연산 트릭입니다. 2의 거듭제곱 판별과 비트 수 세기에 활용됩니다.",tipEn:"n & (n-1) is a famous bit manipulation trick that removes the lowest set bit. It's used for power-of-two checks and counting set bits."}]}},_={"memory-management":{sections:[{heading:"메모리 레이아웃",headingEn:"Memory Layout",text:["C 프로그램이 실행되면 운영체제는 프로세스에 메모리를 할당합니다. 이 메모리는 크게 네 가지 영역으로 나뉩니다: 코드(텍스트) 세그먼트, 데이터 세그먼트, 힙(heap), 그리고 스택(stack)입니다. 코드 세그먼트에는 컴파일된 기계어 명령이 저장되고, 데이터 세그먼트에는 전역 변수와 정적 변수가 위치합니다.","힙 영역은 malloc(), calloc(), realloc() 등을 통해 프로그래머가 직접 관리하는 동적 메모리 공간입니다. 힙은 낮은 주소에서 높은 주소 방향으로 성장합니다. 반면 스택은 함수 호출 시 지역 변수와 매개변수를 저장하며, 높은 주소에서 낮은 주소 방향으로 성장합니다. 이 두 영역이 서로 반대 방향으로 성장하여 메모리를 효율적으로 사용합니다.","아래 예제에서는 전역 변수, 지역 변수, 동적 할당 변수의 주소를 출력하여 각각이 어떤 메모리 영역에 위치하는지 확인할 수 있습니다. 주소값의 차이를 통해 메모리 레이아웃의 구조를 직접 확인해 보세요."],textEn:["When a C program runs, the operating system allocates memory to the process. This memory is divided into four main regions: the code (text) segment, data segment, heap, and stack. The code segment stores compiled machine instructions, while the data segment holds global and static variables.","The heap is a dynamic memory area managed directly by the programmer through malloc(), calloc(), and realloc(). The heap grows from low to high addresses. In contrast, the stack stores local variables and parameters during function calls, growing from high to low addresses. These two regions grow in opposite directions, making efficient use of memory.","The example below prints the addresses of global variables, local variables, and dynamically allocated variables to observe which memory region each resides in. Examine the differences in address values to see the memory layout structure firsthand."],code:`#include <stdio.h>
#include <stdlib.h>

int global_var = 100;
static int static_var = 200;

int main() {
    int local_var = 300;
    int *heap_var = (int *)malloc(sizeof(int));
    *heap_var = 400;

    printf("=== Memory Layout ==\\n");
    printf("Code  segment (main func) : %p\\n", (void *)main);
    printf("Data  segment (global_var): %p\\n", (void *)&global_var);
    printf("Data  segment (static_var): %p\\n", (void *)&static_var);
    printf("Heap  segment (heap_var)  : %p\\n", (void *)heap_var);
    printf("Stack segment (local_var) : %p\\n", (void *)&local_var);

    free(heap_var);
    heap_var = NULL;
    return 0;
}`,expectedOutput:`=== Memory Layout ==
Code  segment (main func) : 0x401136
Data  segment (global_var): 0x404030
Data  segment (static_var): 0x404034
Heap  segment (heap_var)  : 0x1a0d2a0
Stack segment (local_var) : 0x7ffd3b2c1e4c`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"메모리 누수 탐지",headingEn:"Memory Leak Detection",text:["메모리 누수(memory leak)는 동적으로 할당한 메모리를 해제하지 않아 프로그램이 사용하지 않는 메모리를 계속 점유하는 현상입니다. 단순한 프로그램에서는 큰 문제가 되지 않을 수 있지만, 장시간 실행되는 서버 프로그램이나 반복적으로 메모리를 할당하는 코드에서는 시스템의 가용 메모리가 점점 줄어들어 심각한 성능 저하나 프로그램 충돌을 야기할 수 있습니다.","메모리 누수를 찾기 위해 Linux에서는 Valgrind라는 도구를 사용할 수 있습니다. Valgrind의 memcheck 도구는 할당된 메모리 중 해제되지 않은 블록을 추적하여 정확한 위치를 알려줍니다. 아래 첫 번째 코드는 메모리 누수가 있는 예제이고, 주석으로 수정 방법을 안내합니다.","메모리 누수를 방지하려면 모든 malloc/calloc/realloc 호출에 대응하는 free() 호출이 있는지 항상 확인해야 합니다. 특히 함수 내에서 동적 할당 후 에러로 조기 반환(early return)하는 경우에 메모리 누수가 발생하기 쉬우므로 주의가 필요합니다."],textEn:["A memory leak occurs when dynamically allocated memory is not freed, causing the program to hold onto unused memory. While it may not matter in simple programs, in long-running server applications or code that repeatedly allocates memory, available system memory gradually decreases, leading to severe performance degradation or crashes.","On Linux, you can use a tool called Valgrind to find memory leaks. Valgrind's memcheck tool tracks allocated memory blocks that were not freed and reports their exact locations. The first code example below demonstrates a memory leak, with comments showing how to fix it.","To prevent memory leaks, always verify that every malloc/calloc/realloc call has a corresponding free() call. Pay special attention to early returns caused by errors inside functions after dynamic allocation, as these are common sources of leaks."],code:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *create_message(const char *name) {
    char *msg = (char *)malloc(256);
    if (msg == NULL) return NULL;
    sprintf(msg, "Hello, %s!", name);
    return msg;
}

void leaky_function() {
    int *data = (int *)malloc(10 * sizeof(int));
    for (int i = 0; i < 10; i++) {
        data[i] = i * i;
    }
    printf("Sum: %d\\n", data[0] + data[9]);
    /* BUG: free(data) is missing here! */
}

int main() {
    /* Example 1: Correct usage - no leak */
    char *greeting = create_message("Alice");
    if (greeting) {
        printf("%s\\n", greeting);
        free(greeting);  /* properly freed */
        greeting = NULL;
    }

    /* Example 2: Memory leak! */
    leaky_function();

    /* Fix: leaky_function should call free(data) before returning */
    printf("Program finished.\\n");
    return 0;
}`,expectedOutput:`Hello, Alice!
Sum: 81
Program finished.`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"댕글링 포인터와 버퍼 오버플로",headingEn:"Dangling Pointers & Buffer Overflow",text:["댕글링 포인터(dangling pointer)란 이미 해제된 메모리를 가리키는 포인터를 말합니다. free() 호출 후에도 포인터 변수에는 이전 메모리 주소가 남아 있어, 이를 다시 사용하면 정의되지 않은 동작(undefined behavior)이 발생합니다. 프로그램이 충돌하거나 잘못된 데이터를 읽을 수 있으며, 보안 취약점으로 이어질 수 있습니다.","버퍼 오버플로(buffer overflow)는 배열이나 버퍼의 경계를 넘어 데이터를 쓰는 오류입니다. 스택 버퍼 오버플로는 함수의 반환 주소를 덮어써서 프로그램 흐름을 변경할 수 있어 보안 공격에 자주 이용됩니다. C 언어는 배열 경계 검사를 하지 않으므로, 프로그래머가 직접 경계를 확인해야 합니다.","아래 예제는 댕글링 포인터와 버퍼 오버플로의 위험성을 보여주고, 각각의 방지 방법을 제시합니다. free() 후 포인터를 NULL로 설정하고, 문자열 함수에서는 strncpy() 같은 안전한 함수를 사용하는 것이 좋습니다."],textEn:["A dangling pointer is a pointer that references memory that has already been freed. After calling free(), the pointer variable still holds the old memory address. Using it again causes undefined behavior: the program may crash, read corrupted data, or create security vulnerabilities.","A buffer overflow occurs when data is written beyond the boundary of an array or buffer. Stack buffer overflows can overwrite a function's return address, altering program flow, which is frequently exploited in security attacks. Since C does not perform bounds checking on arrays, the programmer must manually verify boundaries.","The example below demonstrates the dangers of dangling pointers and buffer overflows, along with prevention techniques. Always set pointers to NULL after free(), and use safe string functions like strncpy() instead of strcpy()."],code:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void dangling_pointer_demo() {
    printf("=== Dangling Pointer Demo ===\\n");
    int *ptr = (int *)malloc(sizeof(int));
    *ptr = 42;
    printf("Before free: %d\\n", *ptr);

    free(ptr);
    /* ptr is now a dangling pointer! */
    /* printf("%d", *ptr);  <-- DANGEROUS: undefined behavior */

    ptr = NULL;  /* SAFE: prevent dangling pointer */
    if (ptr == NULL) {
        printf("Pointer safely set to NULL\\n");
    }
}

void buffer_overflow_demo() {
    printf("\\n=== Buffer Overflow Prevention ===\\n");
    char buffer[16];

    /* DANGEROUS: strcpy does not check bounds */
    /* strcpy(buffer, "This string is way too long for the buffer!"); */

    /* SAFE: strncpy limits the copy length */
    strncpy(buffer, "This string is way too long!", sizeof(buffer) - 1);
    buffer[sizeof(buffer) - 1] = '\\0';
    printf("Safe copy: %s\\n", buffer);

    /* SAFE: snprintf limits output length */
    char msg[32];
    snprintf(msg, sizeof(msg), "Value: %d, Name: %s", 12345, "Alice");
    printf("snprintf: %s\\n", msg);
}

int main() {
    dangling_pointer_demo();
    buffer_overflow_demo();
    return 0;
}`,expectedOutput:`=== Dangling Pointer Demo ===
Before free: 42
Pointer safely set to NULL

=== Buffer Overflow Prevention ===
Safe copy: This string is
snprintf: Value: 12345, Name: Alice`,tip:"항상 free() 후에 포인터를 NULL로 설정하세요.",tipEn:"Always set pointers to NULL after free().",warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."}]},"function-pointers":{sections:[{heading:"함수 포인터 선언",headingEn:"Declaring Function Pointers",text:["함수 포인터는 함수의 메모리 주소를 저장하는 변수입니다. C에서 함수 이름은 그 자체가 함수의 시작 주소를 나타내므로, 이 주소를 포인터 변수에 저장하고 나중에 해당 포인터를 통해 함수를 호출할 수 있습니다. 함수 포인터의 선언 구문은 처음에는 복잡해 보이지만, 반환형 (*포인터이름)(매개변수목록) 형태를 기억하면 됩니다.","함수 포인터를 사용하면 실행 시간에 어떤 함수를 호출할지 결정할 수 있습니다. 이는 콜백 함수, 이벤트 핸들러, 플러그인 시스템 등을 구현하는 데 핵심적인 기법입니다. typedef를 사용하면 함수 포인터 타입에 별칭을 부여하여 코드의 가독성을 크게 높일 수 있습니다.","아래 예제는 기본적인 함수 포인터의 선언, 초기화, 호출 방법과 typedef를 활용한 간결한 코드 작성 방법을 보여줍니다."],textEn:["A function pointer is a variable that stores the memory address of a function. In C, a function name itself represents the starting address of the function, so you can store this address in a pointer variable and later call the function through that pointer. The declaration syntax looks complex at first, but just remember the form: return_type (*pointer_name)(parameter_list).","Function pointers allow you to decide which function to call at runtime. This is a key technique for implementing callbacks, event handlers, and plugin systems. Using typedef to create an alias for a function pointer type greatly improves code readability.","The example below demonstrates the basics of declaring, initializing, and calling function pointers, as well as using typedef to write cleaner code."],code:`#include <stdio.h>

int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }
int multiply(int a, int b) { return a * b; }

/* Using typedef for cleaner syntax */
typedef int (*MathFunc)(int, int);

void demonstrate_basic() {
    /* Method 1: Direct declaration */
    int (*func_ptr)(int, int) = add;
    printf("add(3, 4) = %d\\n", func_ptr(3, 4));

    /* Method 2: Using typedef */
    MathFunc op = subtract;
    printf("subtract(10, 3) = %d\\n", op(10, 3));

    /* Reassigning to another function */
    op = multiply;
    printf("multiply(5, 6) = %d\\n", op(5, 6));
}

int main() {
    printf("=== Function Pointer Basics ===\\n");
    demonstrate_basic();

    /* Function address comparison */
    printf("\\nAddress of add:      %p\\n", (void *)add);
    printf("Address of subtract: %p\\n", (void *)subtract);
    printf("Address of multiply: %p\\n", (void *)multiply);

    return 0;
}`,expectedOutput:`=== Function Pointer Basics ===
add(3, 4) = 7
subtract(10, 3) = 7
multiply(5, 6) = 30

Address of add:      0x401136
Address of subtract: 0x401150
Address of multiply: 0x40116a`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"콜백 함수",headingEn:"Callback Functions",text:["콜백 함수(callback function)란 다른 함수에 인자로 전달되어, 특정 시점에 호출되는 함수를 말합니다. 함수 포인터를 매개변수로 받는 함수를 작성하면, 호출자가 원하는 동작을 자유롭게 지정할 수 있습니다. 이 패턴은 정렬 알고리즘, 이벤트 처리, 비동기 작업 등에서 광범위하게 사용됩니다.","C 표준 라이브러리의 qsort() 함수는 콜백 함수의 대표적인 예입니다. qsort()는 비교 함수를 함수 포인터로 받아, 어떤 기준으로 정렬할지를 호출자가 결정하도록 합니다. 이렇게 하면 하나의 정렬 함수로 다양한 데이터 타입과 정렬 기준을 처리할 수 있습니다.","아래 예제는 배열에 콜백 함수를 적용하는 apply_to_array 함수와, qsort()를 사용한 정수 배열의 오름차순/내림차순 정렬을 보여줍니다."],textEn:["A callback function is a function passed as an argument to another function, to be called at a specific point. By writing a function that accepts a function pointer as a parameter, the caller can freely specify the desired behavior. This pattern is widely used in sorting algorithms, event handling, and asynchronous operations.","The C standard library's qsort() function is a classic example of callbacks. qsort() receives a comparison function as a function pointer, letting the caller decide the sorting criteria. This allows a single sort function to handle various data types and orderings.","The example below shows an apply_to_array function that applies a callback to each element, and demonstrates ascending/descending sorting of an integer array using qsort()."],code:`#include <stdio.h>
#include <stdlib.h>

/* Callback: transform each element */
void apply_to_array(int *arr, int size, int (*transform)(int)) {
    for (int i = 0; i < size; i++) {
        arr[i] = transform(arr[i]);
    }
}

int double_it(int x) { return x * 2; }
int square_it(int x) { return x * x; }

/* Comparators for qsort */
int compare_asc(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}

int compare_desc(const void *a, const void *b) {
    return (*(int *)b - *(int *)a);
}

void print_array(const char *label, int *arr, int size) {
    printf("%s: ", label);
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int data1[] = {1, 2, 3, 4, 5};
    int n = 5;

    print_array("Original", data1, n);

    apply_to_array(data1, n, double_it);
    print_array("Doubled ", data1, n);

    int data2[] = {1, 2, 3, 4, 5};
    apply_to_array(data2, n, square_it);
    print_array("Squared ", data2, n);

    /* qsort with callback comparator */
    printf("\\n=== qsort Example ===\\n");
    int nums[] = {38, 27, 43, 3, 9, 82, 10};
    int len = sizeof(nums) / sizeof(nums[0]);

    qsort(nums, len, sizeof(int), compare_asc);
    print_array("Ascending ", nums, len);

    qsort(nums, len, sizeof(int), compare_desc);
    print_array("Descending", nums, len);

    return 0;
}`,expectedOutput:`Original: 1 2 3 4 5 
Doubled : 2 4 6 8 10 
Squared : 1 4 9 16 25 

=== qsort Example ===
Ascending : 3 9 10 27 38 43 82 
Descending: 82 43 38 27 10 9 3 `,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"함수 포인터 배열",headingEn:"Function Pointer Arrays",text:["함수 포인터 배열은 여러 함수의 주소를 하나의 배열에 저장하여, 인덱스를 통해 원하는 함수를 선택적으로 호출할 수 있게 하는 기법입니다. 이는 디스패치 테이블(dispatch table)이라고도 불리며, 복잡한 if-else나 switch-case 문을 깔끔한 배열 인덱싱으로 대체할 수 있습니다.","디스패치 테이블 패턴은 계산기, 메뉴 시스템, 명령어 처리기 등에서 매우 유용합니다. 새로운 연산이나 명령을 추가할 때 기존 코드를 수정하지 않고 배열에 함수 포인터를 추가하기만 하면 되므로, 유지보수가 쉽고 확장성이 뛰어납니다.","아래 예제는 함수 포인터 배열을 사용한 간단한 계산기를 구현합니다. 사용자가 선택한 연산 번호를 배열 인덱스로 사용하여 해당 연산 함수를 호출합니다."],textEn:["A function pointer array stores the addresses of multiple functions in a single array, allowing you to selectively call any function by index. This is also called a dispatch table and can replace complex if-else or switch-case statements with clean array indexing.","The dispatch table pattern is very useful in calculators, menu systems, and command processors. When adding new operations or commands, you simply add a function pointer to the array without modifying existing code, making maintenance easy and extensibility excellent.","The example below implements a simple calculator using a function pointer array. The user's selected operation number is used as an array index to call the corresponding operation function."],code:`#include <stdio.h>

double add(double a, double b) { return a + b; }
double sub(double a, double b) { return a - b; }
double mul(double a, double b) { return a * b; }
double divide(double a, double b) {
    if (b == 0.0) {
        printf("Error: Division by zero!\\n");
        return 0.0;
    }
    return a / b;
}

typedef double (*Operation)(double, double);

int main() {
    /* Dispatch table: function pointer array */
    Operation ops[] = {add, sub, mul, divide};
    const char *op_names[] = {"Add", "Subtract", "Multiply", "Divide"};
    const char *op_symbols[] = {"+", "-", "*", "/"};
    int num_ops = sizeof(ops) / sizeof(ops[0]);

    double a = 20.0, b = 6.0;

    printf("=== Calculator Dispatch Table ===\\n");
    printf("a = %.1f, b = %.1f\\n\\n", a, b);

    for (int i = 0; i < num_ops; i++) {
        double result = ops[i](a, b);
        printf("[%d] %-10s: %.1f %s %.1f = %.2f\\n",
               i, op_names[i], a, op_symbols[i], b, result);
    }

    /* Direct dispatch by index */
    printf("\\n--- Direct dispatch ---\\n");
    int choice = 2;  /* multiply */
    printf("Choice %d: %.1f %s %.1f = %.2f\\n",
           choice, a, op_symbols[choice], b, ops[choice](a, b));

    return 0;
}`,expectedOutput:`=== Calculator Dispatch Table ===
a = 20.0, b = 6.0

[0] Add       : 20.0 + 6.0 = 26.00
[1] Subtract  : 20.0 - 6.0 = 14.00
[2] Multiply  : 20.0 * 6.0 = 120.00
[3] Divide    : 20.0 / 6.0 = 3.33

--- Direct dispatch ---
Choice 2: 20.0 * 6.0 = 120.00`,tip:"함수 포인터로 전략 패턴을 구현할 수 있습니다.",tipEn:"Function pointers can implement the strategy pattern.",warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."}]},"multi-file":{sections:[{heading:"헤더 파일 작성",headingEn:"Writing Header Files",text:["프로그램이 커지면 하나의 파일에 모든 코드를 작성하는 것은 비효율적이고 유지보수가 어려워집니다. C에서는 코드를 여러 파일로 분할하고, 헤더 파일(.h)을 통해 파일 간의 인터페이스를 정의합니다. 헤더 파일에는 함수 프로토타입, 구조체 정의, 매크로 상수, typedef 등 선언만 포함하고 실제 구현은 .c 파일에 작성합니다.","헤더 파일에서 가장 중요한 것은 인클루드 가드(include guard)입니다. 동일한 헤더가 여러 번 포함되면 중복 정의 오류가 발생하는데, #ifndef / #define / #endif 매크로 또는 #pragma once를 사용하여 이를 방지합니다. 인클루드 가드의 매크로 이름은 보통 파일 이름을 대문자로 변환하여 사용합니다.","아래 예제는 수학 유틸리티 모듈의 헤더 파일과 구현 파일, 그리고 이를 사용하는 메인 파일을 보여줍니다. 세 파일이 하나의 프로그램을 구성하는 구조를 확인하세요."],textEn:["As programs grow, writing all code in a single file becomes inefficient and hard to maintain. In C, code is split across multiple files, and header files (.h) define the interface between them. Header files contain only declarations such as function prototypes, struct definitions, macro constants, and typedefs, while actual implementations go in .c files.","The most important aspect of header files is the include guard. If the same header is included multiple times, duplicate definition errors occur. Use #ifndef / #define / #endif macros or #pragma once to prevent this. The guard macro name is typically the file name converted to uppercase.","The example below shows a math utility module with its header file, implementation file, and a main file that uses it. Observe how three files compose a single program."],code:`/* === mathutil.h === */
#ifndef MATHUTIL_H
#define MATHUTIL_H

/* Structure definition */
typedef struct {
    double x;
    double y;
} Point;

/* Function prototypes */
double distance(Point a, Point b);
double circle_area(double radius);
int factorial(int n);

/* Macro constant */
#define PI 3.14159265358979

#endif /* MATHUTIL_H */

/* === mathutil.c === */
#include "mathutil.h"
#include <math.h>

double distance(Point a, Point b) {
    double dx = a.x - b.x;
    double dy = a.y - b.y;
    return sqrt(dx * dx + dy * dy);
}

double circle_area(double radius) {
    return PI * radius * radius;
}

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

/* === main.c === */
#include <stdio.h>
#include "mathutil.h"

int main() {
    Point p1 = {0.0, 0.0};
    Point p2 = {3.0, 4.0};

    printf("Distance: %.2f\\n", distance(p1, p2));
    printf("Circle area (r=5): %.2f\\n", circle_area(5.0));
    printf("7! = %d\\n", factorial(7));

    return 0;
}

/* Compile: gcc -o main main.c mathutil.c -lm */`,expectedOutput:`Distance: 5.00
Circle area (r=5): 78.54
7! = 5040`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"extern과 분할 컴파일",headingEn:"extern & Separate Compilation",text:["extern 키워드는 변수나 함수가 다른 파일에 정의되어 있음을 컴파일러에 알려주는 선언입니다. 전역 변수를 여러 파일에서 공유할 때 필수적입니다. 변수는 정확히 하나의 .c 파일에서만 정의(definition)하고, 다른 파일에서는 extern 선언을 통해 참조합니다.","분할 컴파일은 각 .c 파일을 독립적으로 오브젝트 파일(.o)로 컴파일한 뒤, 링커가 이들을 하나의 실행 파일로 결합하는 과정입니다. 이 방식의 장점은 하나의 파일을 수정했을 때 해당 파일만 다시 컴파일하면 되므로 빌드 시간이 크게 단축된다는 것입니다.","아래 예제는 설정값을 전역 변수로 공유하는 다중 파일 프로그램의 구조를 보여줍니다. config.c에서 변수를 정의하고, 다른 파일에서 extern으로 참조합니다."],textEn:["The extern keyword tells the compiler that a variable or function is defined in another file. It is essential when sharing global variables across multiple files. A variable must be defined (allocated) in exactly one .c file, while other files reference it through extern declarations.","Separate compilation compiles each .c file independently into an object file (.o), then the linker combines them into a single executable. The advantage is that when one file is modified, only that file needs recompilation, greatly reducing build time.","The example below shows the structure of a multi-file program that shares configuration values through global variables. config.c defines the variables, and other files reference them with extern."],code:`/* === config.h === */
#ifndef CONFIG_H
#define CONFIG_H

/* extern declarations - these are just declarations, not definitions */
extern int max_users;
extern const char *app_name;
extern int debug_mode;

void print_config(void);

#endif

/* === config.c === */
#include "config.h"
#include <stdio.h>

/* Actual definitions - memory is allocated here */
int max_users = 100;
const char *app_name = "MyApp";
int debug_mode = 0;

void print_config(void) {
    printf("App: %s\\n", app_name);
    printf("Max users: %d\\n", max_users);
    printf("Debug: %s\\n", debug_mode ? "ON" : "OFF");
}

/* === main.c === */
#include <stdio.h>
#include "config.h"

int main() {
    printf("=== Initial Config ===\\n");
    print_config();

    /* Modify shared global variables */
    max_users = 200;
    debug_mode = 1;

    printf("\\n=== Modified Config ===\\n");
    print_config();

    return 0;
}

/* Compile steps:
 *   gcc -c config.c -o config.o
 *   gcc -c main.c -o main.o
 *   gcc config.o main.o -o myapp
 */`,expectedOutput:`=== Initial Config ===
App: MyApp
Max users: 100
Debug: OFF

=== Modified Config ===
App: MyApp
Max users: 200
Debug: ON`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"링킹 과정",headingEn:"Linking Process",text:["링킹(linking)은 여러 오브젝트 파일과 라이브러리를 결합하여 하나의 실행 가능한 프로그램을 만드는 과정입니다. 컴파일러는 각 .c 파일을 독립적으로 오브젝트 파일(.o)로 변환하며, 이때 다른 파일의 함수 호출은 미해결 심볼(unresolved symbol)로 남겨둡니다. 링커가 이 심볼들을 실제 정의와 연결합니다.",'링킹 오류는 함수를 선언했지만 정의하지 않았거나, 필요한 라이브러리를 링크하지 않았을 때 발생합니다. "undefined reference" 오류 메시지는 링커가 심볼의 정의를 찾지 못했다는 의미입니다. 정적 라이브러리(.a)는 링크 시 코드가 실행 파일에 복사되고, 동적 라이브러리(.so)는 실행 시 로드됩니다.',"아래 예제는 문자열 유틸리티 모듈을 분할 컴파일하고 링크하는 완전한 과정을 보여줍니다. 컴파일 명령어의 각 단계를 주석으로 설명합니다."],textEn:["Linking is the process of combining multiple object files and libraries into a single executable program. The compiler converts each .c file independently into an object file (.o), leaving function calls to other files as unresolved symbols. The linker connects these symbols to their actual definitions.",`Linking errors occur when a function is declared but not defined, or when a required library is not linked. The "undefined reference" error message means the linker could not find the symbol's definition. Static libraries (.a) have their code copied into the executable at link time, while dynamic libraries (.so) are loaded at runtime.`,"The example below demonstrates the complete process of separately compiling and linking a string utility module. Each step of the compilation commands is explained in comments."],code:`/* === strutil.h === */
#ifndef STRUTIL_H
#define STRUTIL_H

int str_length(const char *s);
void str_reverse(char *s);
int str_count_char(const char *s, char c);

#endif

/* === strutil.c === */
#include "strutil.h"

int str_length(const char *s) {
    int len = 0;
    while (s[len] != '\\0') len++;
    return len;
}

void str_reverse(char *s) {
    int len = str_length(s);
    for (int i = 0; i < len / 2; i++) {
        char temp = s[i];
        s[i] = s[len - 1 - i];
        s[len - 1 - i] = temp;
    }
}

int str_count_char(const char *s, char c) {
    int count = 0;
    while (*s) {
        if (*s == c) count++;
        s++;
    }
    return count;
}

/* === main.c === */
#include <stdio.h>
#include "strutil.h"

int main() {
    char word[] = "Hello, World!";

    printf("String: \\"%s\\"\\n", word);
    printf("Length: %d\\n", str_length(word));
    printf("Count of 'l': %d\\n", str_count_char(word, 'l'));

    str_reverse(word);
    printf("Reversed: \\"%s\\"\\n", word);

    return 0;
}

/* Build process:
 *
 * Step 1: Preprocess & Compile to object files
 *   gcc -c strutil.c -o strutil.o
 *   gcc -c main.c -o main.o
 *
 * Step 2: Link object files into executable
 *   gcc strutil.o main.o -o program
 *
 * Step 3: Run
 *   ./program
 *
 * Or all at once:
 *   gcc -o program main.c strutil.c
 */`,expectedOutput:`String: "Hello, World!"
Length: 13
Count of 'l': 3
Reversed: "!dlroW ,olleH"`,tip:"헤더 파일에는 선언만, 구현은 .c 파일에 넣으세요.",tipEn:"Put declarations in .h, implementations in .c.",warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."}]},makefile:{sections:[{heading:"Makefile 기본 구조",headingEn:"Basic Makefile Structure",text:["Makefile은 프로그램의 빌드 과정을 자동화하는 설정 파일입니다. make 유틸리티가 이 파일을 읽어 소스 파일 간의 의존 관계를 파악하고, 변경된 파일만 다시 컴파일합니다. 대규모 프로젝트에서는 수십, 수백 개의 소스 파일이 있으므로 Makefile 없이 수동으로 빌드하는 것은 사실상 불가능합니다.","Makefile의 기본 단위는 규칙(rule)이며, 타겟(target): 의존성(dependencies) 형태로 작성합니다. 그 아래에 탭(Tab) 문자로 들여쓰기한 레시피(recipe)가 실행할 명령을 정의합니다. make는 타겟 파일이 의존성 파일보다 오래되었을 때만 레시피를 실행하여 불필요한 재컴파일을 방지합니다.","아래 예제는 두 개의 소스 파일로 구성된 프로젝트의 기본 Makefile을 보여줍니다. 주의: Makefile에서 레시피 앞의 들여쓰기는 반드시 탭(Tab)이어야 하며, 공백(Space)을 사용하면 오류가 발생합니다."],textEn:["A Makefile is a configuration file that automates the build process. The make utility reads this file to understand dependencies between source files and recompiles only the changed ones. In large projects with dozens or hundreds of source files, building manually without a Makefile is practically impossible.","The basic unit of a Makefile is a rule, written as target: dependencies. Below it, recipes (commands to execute) are indented with a Tab character. make only executes recipes when the target file is older than its dependencies, avoiding unnecessary recompilation.","The example below shows a basic Makefile for a project with two source files. Note: indentation before recipes in Makefiles must use Tab characters, not spaces, or errors will occur."],code:`# === Makefile ===
# Basic Makefile structure

# Final target: build the executable
program: main.o utils.o
	gcc -o program main.o utils.o

# Compile main.c to main.o
main.o: main.c utils.h
	gcc -c main.c

# Compile utils.c to utils.o
utils.o: utils.c utils.h
	gcc -c utils.c

# Phony target: clean build artifacts
clean:
	rm -f program main.o utils.o

# Usage:
#   make          - build the program
#   make clean    - remove build files
#   make program  - explicitly build program target`,expectedOutput:`gcc -c main.c
gcc -c utils.c
gcc -o program main.o utils.o`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"변수와 패턴 규칙",headingEn:"Variables & Pattern Rules",text:["Makefile에서 변수를 사용하면 컴파일러, 플래그, 파일 목록 등을 한 곳에서 관리할 수 있어 유지보수가 쉬워집니다. CC는 C 컴파일러, CFLAGS는 컴파일 플래그, LDFLAGS는 링커 플래그를 저장하는 관례적 변수명입니다. 변수는 $(변수명) 형태로 참조합니다.","패턴 규칙(pattern rule)은 %를 와일드카드로 사용하여 동일한 패턴의 여러 규칙을 하나로 통합합니다. 예를 들어 %.o: %.c는 모든 .c 파일을 .o 파일로 컴파일하는 규칙을 한 번에 정의합니다. 자동 변수 $@는 타겟, $<는 첫 번째 의존성, $^는 모든 의존성을 나타냅니다.","아래 예제는 변수와 패턴 규칙을 활용하여 더 유연하고 확장 가능한 Makefile을 작성하는 방법을 보여줍니다."],textEn:["Using variables in Makefiles lets you manage the compiler, flags, and file lists from one place, simplifying maintenance. CC for the C compiler, CFLAGS for compilation flags, and LDFLAGS for linker flags are conventional variable names. Variables are referenced as $(variable_name).","Pattern rules use % as a wildcard to consolidate multiple rules with the same pattern into one. For example, %.o: %.c defines a rule to compile all .c files to .o files at once. Automatic variables $@ represent the target, $< the first dependency, and $^ all dependencies.","The example below demonstrates writing a more flexible and extensible Makefile using variables and pattern rules."],code:`# === Makefile with Variables & Pattern Rules ===

# Variables
CC = gcc
CFLAGS = -Wall -Wextra -g
LDFLAGS = -lm
TARGET = calculator

# Source files and derived object files
SRCS = main.c math_ops.c display.c
OBJS = $(SRCS:.c=.o)

# Default target
all: $(TARGET)

# Link object files into executable
# $@ = target name, $^ = all dependencies
$(TARGET): $(OBJS)
	$(CC) $(CFLAGS) -o $@ $^ $(LDFLAGS)

# Pattern rule: compile any .c to .o
# $< = first dependency (the .c file)
%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

# Header dependencies
main.o: main.c math_ops.h display.h
math_ops.o: math_ops.c math_ops.h
display.o: display.c display.h math_ops.h

# Phony targets (not actual files)
.PHONY: all clean rebuild

clean:
	rm -f $(OBJS) $(TARGET)

rebuild: clean all

# Usage:
#   make          - build all
#   make clean    - remove build files
#   make rebuild  - clean and rebuild`,expectedOutput:`gcc -Wall -Wextra -g -c main.c -o main.o
gcc -Wall -Wextra -g -c math_ops.c -o math_ops.o
gcc -Wall -Wextra -g -c display.c -o display.o
gcc -Wall -Wextra -g -o calculator main.o math_ops.o display.o -lm`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"실전 Makefile",headingEn:"Practical Makefile",text:["실전 프로젝트의 Makefile은 소스 디렉토리 구조, 자동 의존성 생성, 디버그/릴리스 빌드 구분 등 더 많은 기능을 포함합니다. 소스 파일이 추가될 때마다 Makefile을 수정하지 않도록 wildcard 함수로 파일을 자동 탐색하고, 빌드 결과물을 별도 디렉토리에 저장하는 것이 좋습니다.","GCC의 -MMD 플래그는 컴파일 시 헤더 파일 의존성 정보를 자동으로 생성합니다. 이를 Makefile에 포함시키면 헤더 파일이 변경되었을 때도 관련 소스가 자동으로 재컴파일됩니다. 또한 install, uninstall 타겟을 추가하여 프로그램 설치 과정도 자동화할 수 있습니다.","아래는 실전에서 사용할 수 있는 완성도 높은 Makefile 예제입니다. 빌드 디렉토리 분리, 자동 의존성 추적, 디버그/릴리스 모드 지원 등의 기능을 포함합니다."],textEn:["Makefiles for real projects include features like directory structure support, automatic dependency generation, and debug/release build configurations. Use the wildcard function to auto-discover files so you don't have to modify the Makefile each time a source file is added, and store build outputs in a separate directory.","GCC's -MMD flag automatically generates header file dependency information during compilation. Including these in the Makefile ensures that when header files change, related source files are automatically recompiled. You can also add install and uninstall targets to automate program installation.","Below is a production-quality Makefile example with build directory separation, automatic dependency tracking, and debug/release mode support."],code:`# === Production Makefile ===

# Project settings
PROJECT = student_mgr
VERSION = 1.0.0

# Directories
SRCDIR = src
INCDIR = include
BUILDDIR = build
BINDIR = bin

# Compiler settings
CC = gcc
CFLAGS = -Wall -Wextra -Werror -I$(INCDIR)
LDFLAGS = -lm

# Debug/Release mode (default: debug)
ifdef RELEASE
  CFLAGS += -O2 -DNDEBUG
  BUILD_TYPE = release
else
  CFLAGS += -g -O0 -DDEBUG
  BUILD_TYPE = debug
endif

# Auto-discover source files
SRCS = $(wildcard $(SRCDIR)/*.c)
OBJS = $(patsubst $(SRCDIR)/%.c,$(BUILDDIR)/%.o,$(SRCS))
DEPS = $(OBJS:.o=.d)

# Target executable
TARGET = $(BINDIR)/$(PROJECT)

# Default target
all: dirs $(TARGET)
	@echo "Build complete: $(TARGET) [$(BUILD_TYPE)]"

# Create directories
dirs:
	@mkdir -p $(BUILDDIR) $(BINDIR)

# Link
$(TARGET): $(OBJS)
	$(CC) $(CFLAGS) -o $@ $^ $(LDFLAGS)

# Compile with auto-dependency generation
$(BUILDDIR)/%.o: $(SRCDIR)/%.c
	$(CC) $(CFLAGS) -MMD -MP -c $< -o $@

# Include auto-generated dependencies
-include $(DEPS)

# Phony targets
.PHONY: all dirs clean rebuild release info

clean:
	rm -rf $(BUILDDIR) $(BINDIR)
	@echo "Cleaned."

rebuild: clean all

release:
	$(MAKE) RELEASE=1

info:
	@echo "Project: $(PROJECT) v$(VERSION)"
	@echo "Sources: $(SRCS)"
	@echo "Objects: $(OBJS)"
	@echo "Build type: $(BUILD_TYPE)"

# Usage:
#   make            - debug build
#   make release    - optimized release build
#   make clean      - remove all build files
#   make rebuild    - clean then build
#   make info       - show project info`,expectedOutput:`mkdir -p build bin
gcc -Wall -Wextra -Werror -Iinclude -g -O0 -DDEBUG -MMD -MP -c src/main.c -o build/main.o
gcc -Wall -Wextra -Werror -Iinclude -g -O0 -DDEBUG -MMD -MP -c src/student.c -o build/student.o
gcc -Wall -Wextra -Werror -Iinclude -g -O0 -DDEBUG -o bin/student_mgr build/main.o build/student.o -lm
Build complete: bin/student_mgr [debug]`,tip:"make clean으로 빌드 파일을 정리하세요.",tipEn:"Use make clean to remove build artifacts.",warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."}]},debugging:{sections:[{heading:"GDB 기본 사용법",headingEn:"GDB Basics",text:["GDB(GNU Debugger)는 C 프로그램의 실행을 단계별로 추적하고, 변수 값을 검사하며, 버그의 원인을 찾아내는 강력한 디버거입니다. GDB를 사용하려면 컴파일 시 -g 플래그를 사용하여 디버그 정보를 포함해야 합니다. 최적화 플래그(-O2 등)를 사용하면 코드가 재배치되어 디버깅이 어려워지므로, 디버그 빌드에서는 -O0을 사용하는 것이 좋습니다.","GDB의 핵심 명령어는 다음과 같습니다: break(브레이크포인트 설정), run(프로그램 실행), next(다음 줄로 이동, 함수 안으로 들어가지 않음), step(다음 줄로 이동, 함수 안으로 들어감), print(변수 값 출력), backtrace(호출 스택 표시), continue(다음 브레이크포인트까지 실행)입니다.","아래 예제는 버그가 있는 프로그램과 GDB를 사용하여 디버깅하는 과정을 보여줍니다. 배열 합계를 구하는 함수에 의도적인 버그를 넣었습니다."],textEn:["GDB (GNU Debugger) is a powerful debugger that lets you trace C program execution step by step, inspect variable values, and find the root cause of bugs. To use GDB, compile with the -g flag to include debug information. Optimization flags (-O2, etc.) can rearrange code and make debugging difficult, so use -O0 for debug builds.","Key GDB commands include: break (set breakpoint), run (start execution), next (step over - move to next line without entering functions), step (step into - move to next line, entering functions), print (show variable value), backtrace (show call stack), and continue (run to next breakpoint).","The example below shows a buggy program and the GDB debugging process. An intentional bug is placed in a function that computes the sum of an array."],code:`#include <stdio.h>

/* Buggy function: off-by-one error */
int sum_array(int arr[], int size) {
    int sum = 0;
    /* BUG: should be i < size, not i <= size */
    for (int i = 0; i <= size; i++) {
        sum += arr[i];
    }
    return sum;
}

int find_max(int arr[], int size) {
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

int main() {
    int data[] = {10, 25, 8, 42, 17};
    int n = 5;

    printf("Array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", data[i]);
    }
    printf("\\n");

    int total = sum_array(data, n);
    int maximum = find_max(data, n);

    printf("Sum: %d (expected: 102)\\n", total);
    printf("Max: %d\\n", maximum);

    return 0;
}

/* Debugging with GDB:
 *
 *   $ gcc -g -O0 -o debug_demo debug_demo.c
 *   $ gdb ./debug_demo
 *
 *   (gdb) break sum_array        # set breakpoint
 *   (gdb) run                    # start program
 *   (gdb) print size             # inspect variable
 *   (gdb) next                   # step over
 *   (gdb) print i                # check loop variable
 *   (gdb) print sum              # check running sum
 *   (gdb) backtrace              # show call stack
 *   (gdb) continue               # resume execution
 *   (gdb) quit                   # exit GDB
 */`,expectedOutput:`Array: 10 25 8 42 17 
Sum: 102 (expected: 102)
Max: 42`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"Valgrind 메모리 검사",headingEn:"Valgrind Memory Check",text:["Valgrind는 메모리 관련 버그를 탐지하는 도구 모음입니다. 가장 많이 사용되는 memcheck 도구는 메모리 누수, 초기화되지 않은 메모리 사용, 해제된 메모리 접근, 버퍼 오버플로 등 다양한 메모리 오류를 실행 시간에 감지합니다. Valgrind는 Linux에서 사용할 수 있으며, 프로그램을 특별히 수정하지 않아도 됩니다.",'Valgrind를 사용하려면 valgrind --leak-check=full ./프로그램명 형태로 실행합니다. 출력 결과에서 "definitely lost"는 확실한 메모리 누수, "indirectly lost"는 간접 누수, "possibly lost"는 의심되는 누수를 나타냅니다. "still reachable"은 프로그램 종료 시점에 아직 참조 가능한 메모리로, 보통 문제가 되지 않습니다.',"아래 예제는 여러 가지 메모리 오류를 포함한 프로그램입니다. Valgrind로 실행하면 각 오류의 위치와 종류를 정확하게 보고합니다."],textEn:["Valgrind is a suite of tools for detecting memory-related bugs. Its most popular tool, memcheck, detects memory leaks, use of uninitialized memory, access to freed memory, and buffer overflows at runtime. Valgrind works on Linux and requires no special modifications to your program.",'To use Valgrind, run: valgrind --leak-check=full ./program. In the output, "definitely lost" means a confirmed memory leak, "indirectly lost" is an indirect leak, and "possibly lost" is a suspected leak. "still reachable" refers to memory still referenced at program exit, which is usually not a problem.',"The example below is a program with several memory errors. Running it through Valgrind will precisely report each error's location and type."],code:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void memory_leak() {
    /* Leak: allocated but never freed */
    int *leaked = (int *)malloc(100 * sizeof(int));
    leaked[0] = 42;
    printf("Leaked value: %d\\n", leaked[0]);
    /* Missing: free(leaked); */
}

void uninitialized_read() {
    int *arr = (int *)malloc(5 * sizeof(int));
    /* Bug: reading uninitialized memory */
    /* arr[2] was never assigned a value */
    int sum = arr[0] + arr[2];
    printf("Uninitialized sum: %d\\n", sum);
    free(arr);
}

void proper_usage() {
    /* Correct: initialize, use, then free */
    int *data = (int *)calloc(5, sizeof(int));
    if (data == NULL) {
        printf("Allocation failed\\n");
        return;
    }
    for (int i = 0; i < 5; i++) {
        data[i] = i * 10;
    }
    printf("Proper: %d %d %d %d %d\\n",
           data[0], data[1], data[2], data[3], data[4]);
    free(data);
    data = NULL;
}

int main() {
    printf("=== Valgrind Demo ===\\n\\n");

    memory_leak();
    uninitialized_read();
    proper_usage();

    printf("\\nDone.\\n");
    return 0;
}

/* Run with Valgrind:
 *   $ gcc -g -O0 -o valgdemo valgdemo.c
 *   $ valgrind --leak-check=full --show-leak-kinds=all ./valgdemo
 *
 * Expected Valgrind output:
 *   ==12345== 400 bytes in 1 blocks are definitely lost
 *   ==12345==    at 0x4C2...: malloc (vg_replace_malloc.c:...)
 *   ==12345==    by 0x40...: memory_leak (valgdemo.c:6)
 */`,expectedOutput:`=== Valgrind Demo ===

Leaked value: 42
Uninitialized sum: 0
Proper: 0 10 20 30 40

Done.`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"방어적 프로그래밍",headingEn:"Defensive Programming",text:['방어적 프로그래밍(defensive programming)은 프로그램이 예상치 못한 입력이나 상황에서도 안전하게 동작하도록 코드를 작성하는 기법입니다. "발생하지 않을 것"이라는 가정 대신, 모든 가능한 오류 상황을 명시적으로 처리합니다. 이는 버그를 조기에 발견하고, 프로그램의 안정성을 크게 향상시킵니다.',"C에서 방어적 프로그래밍의 주요 기법으로는 assert() 매크로를 통한 전제조건 검증, NULL 포인터 검사, 반환값 확인, 입력 범위 검증 등이 있습니다. assert()는 개발 중 논리적 오류를 빠르게 찾아내는 데 유용하며, 릴리스 빌드에서는 NDEBUG 매크로를 정의하여 비활성화할 수 있습니다.","아래 예제는 다양한 방어적 프로그래밍 기법을 적용한 안전한 배열 처리 라이브러리를 보여줍니다. 모든 함수에서 매개변수를 검증하고, 오류 상황에 적절히 대응합니다."],textEn:[`Defensive programming is a technique for writing code that behaves safely even with unexpected inputs or situations. Instead of assuming "this won't happen," it explicitly handles all possible error scenarios. This helps catch bugs early and greatly improves program stability.`,"Key defensive programming techniques in C include: precondition verification with the assert() macro, NULL pointer checks, return value verification, and input range validation. assert() is useful for quickly finding logic errors during development and can be disabled in release builds by defining the NDEBUG macro.","The example below demonstrates a safe array handling library applying various defensive programming techniques. Every function validates its parameters and responds appropriately to error conditions."],code:`#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include <string.h>

/* Safe array structure */
typedef struct {
    int *data;
    int size;
    int capacity;
} SafeArray;

/* Create with validation */
SafeArray *array_create(int capacity) {
    assert(capacity > 0 && "Capacity must be positive");

    SafeArray *arr = (SafeArray *)malloc(sizeof(SafeArray));
    if (arr == NULL) {
        fprintf(stderr, "Error: Failed to allocate SafeArray\\n");
        return NULL;
    }

    arr->data = (int *)calloc(capacity, sizeof(int));
    if (arr->data == NULL) {
        fprintf(stderr, "Error: Failed to allocate data\\n");
        free(arr);
        return NULL;
    }

    arr->size = 0;
    arr->capacity = capacity;
    return arr;
}

/* Safe add with bounds checking */
int array_add(SafeArray *arr, int value) {
    if (arr == NULL) {
        fprintf(stderr, "Error: NULL array\\n");
        return -1;
    }
    if (arr->size >= arr->capacity) {
        fprintf(stderr, "Error: Array full (%d/%d)\\n",
                arr->size, arr->capacity);
        return -1;
    }
    arr->data[arr->size++] = value;
    return 0;
}

/* Safe get with bounds checking */
int array_get(SafeArray *arr, int index, int *out_value) {
    if (arr == NULL || out_value == NULL) return -1;
    if (index < 0 || index >= arr->size) {
        fprintf(stderr, "Error: Index %d out of bounds [0, %d)\\n",
                index, arr->size);
        return -1;
    }
    *out_value = arr->data[index];
    return 0;
}

/* Safe destroy */
void array_destroy(SafeArray **arr_ptr) {
    if (arr_ptr == NULL || *arr_ptr == NULL) return;
    free((*arr_ptr)->data);
    (*arr_ptr)->data = NULL;
    free(*arr_ptr);
    *arr_ptr = NULL;  /* prevent dangling pointer */
}

int main() {
    SafeArray *arr = array_create(5);
    if (arr == NULL) return 1;

    /* Normal operations */
    for (int i = 0; i < 5; i++) {
        array_add(arr, (i + 1) * 10);
    }

    /* Overflow attempt */
    array_add(arr, 999);

    /* Safe access */
    int value;
    for (int i = 0; i < 5; i++) {
        if (array_get(arr, i, &value) == 0) {
            printf("[%d] = %d\\n", i, value);
        }
    }

    /* Out of bounds attempt */
    array_get(arr, 10, &value);

    /* Clean up */
    array_destroy(&arr);
    assert(arr == NULL);  /* verified NULL after destroy */
    printf("\\nArray safely destroyed.\\n");

    return 0;
}`,expectedOutput:`Error: Array full (5/5)
[0] = 10
[1] = 20
[2] = 30
[3] = 40
[4] = 50
Error: Index 10 out of bounds [0, 5)

Array safely destroyed.`,tip:"컴파일 시 -g 플래그로 디버그 정보를 포함하세요.",tipEn:"Use the -g flag to include debug info when compiling.",warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."}]},"system-calls":{sections:[{heading:"프로세스 생성",headingEn:"Process Creation",text:["Unix/Linux 시스템에서 새로운 프로세스를 생성하는 핵심 시스템 콜은 fork()입니다. fork()를 호출하면 현재 프로세스(부모)의 복사본이 만들어져 새로운 프로세스(자식)가 됩니다. 부모와 자식은 fork() 이후의 코드를 각각 독립적으로 실행하며, 각자 고유한 프로세스 ID(PID)를 가집니다.","fork()의 반환값으로 부모와 자식을 구분합니다. 부모 프로세스에서는 자식의 PID(양수)가 반환되고, 자식 프로세스에서는 0이 반환됩니다. fork()가 실패하면 -1이 반환됩니다. 이 반환값을 이용하여 부모와 자식이 서로 다른 작업을 수행하도록 프로그래밍합니다.","아래 예제는 fork()를 사용하여 자식 프로세스를 생성하고, 부모와 자식이 각각 다른 메시지를 출력하는 프로그램입니다. getpid()와 getppid()로 각 프로세스의 ID와 부모 ID를 확인합니다."],textEn:["The key system call for creating a new process in Unix/Linux is fork(). When fork() is called, a copy of the current process (parent) is created as a new process (child). Parent and child independently execute the code after fork(), each with their own unique Process ID (PID).","The return value of fork() distinguishes parent from child. The parent receives the child's PID (a positive number), while the child receives 0. If fork() fails, -1 is returned. This return value is used to program parent and child to perform different tasks.","The example below uses fork() to create a child process, with parent and child printing different messages. getpid() and getppid() show each process's ID and parent ID."],code:`#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>

int main() {
    printf("Before fork: PID = %d\\n", getpid());

    pid_t pid = fork();

    if (pid < 0) {
        /* fork failed */
        perror("fork failed");
        exit(1);
    } else if (pid == 0) {
        /* Child process */
        printf("\\n[Child] PID = %d, Parent PID = %d\\n",
               getpid(), getppid());
        printf("[Child] Doing child work...\\n");

        for (int i = 1; i <= 3; i++) {
            printf("[Child] Step %d\\n", i);
            sleep(1);
        }

        printf("[Child] Finished!\\n");
        exit(0);
    } else {
        /* Parent process */
        printf("\\n[Parent] PID = %d, Child PID = %d\\n",
               getpid(), pid);
        printf("[Parent] Waiting for child to finish...\\n");

        int status;
        waitpid(pid, &status, 0);

        if (WIFEXITED(status)) {
            printf("[Parent] Child exited with status %d\\n",
                   WEXITSTATUS(status));
        }

        printf("[Parent] Done.\\n");
    }

    return 0;
}`,expectedOutput:`Before fork: PID = 12345

[Parent] PID = 12345, Child PID = 12346
[Parent] Waiting for child to finish...

[Child] PID = 12346, Parent PID = 12345
[Child] Doing child work...
[Child] Step 1
[Child] Step 2
[Child] Step 3
[Child] Finished!
[Parent] Child exited with status 0
[Parent] Done.`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"프로그램 실행",headingEn:"Program Execution",text:["exec() 계열 함수는 현재 프로세스의 이미지를 새로운 프로그램으로 완전히 교체합니다. fork()로 자식 프로세스를 만든 후 exec()를 호출하면, 자식 프로세스가 완전히 다른 프로그램을 실행하게 됩니다. 이것이 Unix/Linux에서 새 프로그램을 실행하는 표준 방법(fork-exec 패턴)입니다.","exec() 계열에는 execl(), execv(), execlp(), execvp() 등 여러 변형이 있습니다. 'l'은 인자를 리스트로, 'v'는 배열로 전달하며, 'p'가 붙으면 PATH 환경변수를 검색합니다. exec()가 성공하면 이전 프로그램의 코드는 더 이상 실행되지 않으므로, exec() 이후의 코드는 exec() 실패 시에만 실행됩니다.","부모 프로세스는 wait() 또는 waitpid()를 사용하여 자식 프로세스가 종료될 때까지 기다릴 수 있습니다. 이를 통해 자식의 종료 상태를 확인하고, 좀비 프로세스(zombie process)를 방지합니다."],textEn:["The exec() family of functions completely replaces the current process image with a new program. After creating a child process with fork(), calling exec() makes the child run an entirely different program. This is the standard way to execute new programs in Unix/Linux (the fork-exec pattern).","The exec() family includes several variants: execl(), execv(), execlp(), execvp(), etc. 'l' passes arguments as a list, 'v' as an array, and 'p' searches the PATH environment variable. If exec() succeeds, the previous program's code no longer runs, so code after exec() only executes if exec() fails.","The parent process can use wait() or waitpid() to wait for the child process to terminate. This allows checking the child's exit status and prevents zombie processes."],code:`#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>

void run_command(const char *cmd, char *const args[]) {
    pid_t pid = fork();

    if (pid < 0) {
        perror("fork");
        exit(1);
    } else if (pid == 0) {
        /* Child: replace with new program */
        execvp(cmd, args);
        /* If we get here, exec failed */
        perror("exec failed");
        exit(127);
    } else {
        /* Parent: wait for child */
        int status;
        waitpid(pid, &status, 0);

        if (WIFEXITED(status)) {
            int code = WEXITSTATUS(status);
            printf("[run_command] '%s' exited with code %d\\n\\n",
                   cmd, code);
        } else if (WIFSIGNALED(status)) {
            printf("[run_command] '%s' killed by signal %d\\n\\n",
                   cmd, WTERMSIG(status));
        }
    }
}

int main() {
    printf("=== Executing External Programs ===\\n\\n");

    /* Run 'echo' command */
    char *echo_args[] = {"echo", "Hello from exec!", NULL};
    run_command("echo", echo_args);

    /* Run 'ls' command */
    char *ls_args[] = {"ls", "-l", "/tmp", NULL};
    run_command("ls", ls_args);

    /* Run 'date' command */
    char *date_args[] = {"date", NULL};
    run_command("date", date_args);

    printf("All commands finished.\\n");
    return 0;
}`,expectedOutput:`=== Executing External Programs ===

Hello from exec!
[run_command] 'echo' exited with code 0

total 24
drwx------ 2 user user 4096 Mar 25 10:00 temp_files
[run_command] 'ls' exited with code 0

Tue Mar 25 10:30:00 UTC 2026
[run_command] 'date' exited with code 0

All commands finished.`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"프로세스 간 통신",headingEn:"Inter-Process Communication",text:["프로세스 간 통신(IPC, Inter-Process Communication)은 독립적인 프로세스들이 데이터를 주고받는 메커니즘입니다. Unix/Linux에서 가장 기본적인 IPC 방법은 파이프(pipe)입니다. pipe() 시스템 콜은 두 개의 파일 디스크립터를 생성합니다: fd[0]은 읽기 끝, fd[1]은 쓰기 끝입니다.","파이프는 단방향 통신 채널입니다. 한쪽에서 쓰고 다른 쪽에서 읽습니다. 양방향 통신이 필요하면 두 개의 파이프를 사용합니다. 파이프는 주로 부모-자식 프로세스 간 통신에 사용되며, fork() 이전에 pipe()를 호출하면 부모와 자식이 같은 파이프를 공유합니다.","아래 예제는 파이프를 사용하여 부모 프로세스가 자식 프로세스에게 메시지를 보내는 프로그램입니다. 부모는 파이프의 쓰기 끝에 데이터를 쓰고, 자식은 읽기 끝에서 데이터를 읽습니다."],textEn:["Inter-Process Communication (IPC) is a mechanism for independent processes to exchange data. The most basic IPC method in Unix/Linux is the pipe. The pipe() system call creates two file descriptors: fd[0] for the read end and fd[1] for the write end.","A pipe is a unidirectional communication channel: one side writes, the other reads. For bidirectional communication, use two pipes. Pipes are mainly used for parent-child process communication. Calling pipe() before fork() lets parent and child share the same pipe.","The example below uses a pipe for the parent process to send messages to the child process. The parent writes data to the write end of the pipe, and the child reads from the read end."],code:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    int pipefd[2];  /* pipefd[0]=read, pipefd[1]=write */

    if (pipe(pipefd) == -1) {
        perror("pipe");
        exit(1);
    }

    pid_t pid = fork();

    if (pid < 0) {
        perror("fork");
        exit(1);
    } else if (pid == 0) {
        /* Child: reads from pipe */
        close(pipefd[1]);  /* close unused write end */

        char buffer[256];
        int bytes_read;

        printf("[Child] Waiting for messages...\\n");

        while ((bytes_read = read(pipefd[0], buffer, sizeof(buffer) - 1)) > 0) {
            buffer[bytes_read] = '\\0';
            printf("[Child] Received: %s\\n", buffer);
        }

        printf("[Child] Pipe closed. Exiting.\\n");
        close(pipefd[0]);
        exit(0);
    } else {
        /* Parent: writes to pipe */
        close(pipefd[0]);  /* close unused read end */

        const char *messages[] = {
            "Hello, child process!",
            "Here is some data.",
            "Goodbye!"
        };
        int num_msgs = 3;

        for (int i = 0; i < num_msgs; i++) {
            printf("[Parent] Sending: %s\\n", messages[i]);
            write(pipefd[1], messages[i], strlen(messages[i]));
            sleep(1);  /* pause between messages */
        }

        close(pipefd[1]);  /* close write end signals EOF to child */
        printf("[Parent] Pipe closed. Waiting for child...\\n");

        int status;
        waitpid(pid, &status, 0);
        printf("[Parent] Child finished. Done.\\n");
    }

    return 0;
}`,expectedOutput:`[Parent] Sending: Hello, child process!
[Child] Waiting for messages...
[Child] Received: Hello, child process!
[Parent] Sending: Here is some data.
[Child] Received: Here is some data.
[Parent] Sending: Goodbye!
[Child] Received: Goodbye!
[Parent] Pipe closed. Waiting for child...
[Child] Pipe closed. Exiting.
[Parent] Child finished. Done.`,tip:"fork()는 반환값으로 부모/자식을 구분합니다.",tipEn:"fork() uses its return value to distinguish parent from child.",warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."}]},"mini-project":{sections:[{heading:"프로젝트 설계",headingEn:"Project Design",text:["미니 프로젝트로 학생 관리 시스템을 구현합니다. 이 프로젝트는 지금까지 배운 구조체, 포인터, 동적 메모리 할당, 파일 입출력 등을 종합적으로 활용합니다. 먼저 요구사항을 정리하고 데이터 구조를 설계하는 것이 중요합니다. 좋은 설계는 구현을 쉽게 만들고 나중에 기능을 추가할 때도 유연하게 대응할 수 있게 합니다.","핵심 데이터 구조는 Student 구조체입니다. 학번(id), 이름(name), 성적(grade) 필드를 포함하며, 학생 목록은 동적 배열로 관리합니다. MAX_STUDENTS 상수로 최대 수용 인원을 정의하고, StudentDB 구조체로 학생 배열과 현재 학생 수를 함께 관리하면 데이터를 체계적으로 다룰 수 있습니다.","아래 예제는 프로젝트의 기본 데이터 구조 정의와 초기화 코드를 보여줍니다. 구조체 정의, 상수 선언, 초기화 함수 등 프로젝트의 뼈대를 구성합니다."],textEn:["For the mini project, we will implement a Student Management System. This project comprehensively applies structs, pointers, dynamic memory allocation, and file I/O learned so far. It is important to first organize requirements and design data structures. Good design makes implementation easier and allows flexible addition of features later.","The core data structure is the Student struct, containing fields for student ID (id), name (name), and grade (grade). The student list is managed as a dynamic array. Define MAX_STUDENTS for the maximum capacity, and use a StudentDB struct to bundle the student array with the current count for organized data management.","The example below shows the basic data structure definitions and initialization code for the project. It establishes the project skeleton with struct definitions, constant declarations, and initialization functions."],code:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_NAME 50
#define MAX_STUDENTS 100
#define DATA_FILE "students.dat"

/* Student structure */
typedef struct {
    int id;
    char name[MAX_NAME];
    float grade;
} Student;

/* Database structure */
typedef struct {
    Student students[MAX_STUDENTS];
    int count;
} StudentDB;

/* Initialize the database */
void db_init(StudentDB *db) {
    db->count = 0;
    memset(db->students, 0, sizeof(db->students));
}

/* Display menu */
void show_menu() {
    printf("\\n==========================\\n");
    printf("  Student Management System\\n");
    printf("==========================\\n");
    printf("1. Add Student\\n");
    printf("2. Display All Students\\n");
    printf("3. Search Student\\n");
    printf("4. Delete Student\\n");
    printf("5. Save to File\\n");
    printf("6. Load from File\\n");
    printf("0. Exit\\n");
    printf("==========================\\n");
    printf("Choice: ");
}

int main() {
    StudentDB db;
    db_init(&db);

    printf("Database initialized.\\n");
    printf("Capacity: %d students\\n", MAX_STUDENTS);
    printf("Student struct size: %lu bytes\\n", sizeof(Student));

    show_menu();

    printf("\\n(Full implementation in next sections)\\n");
    return 0;
}`,expectedOutput:`Database initialized.
Capacity: 100 students
Student struct size: 60 bytes

==========================
  Student Management System
==========================
1. Add Student
2. Display All Students
3. Search Student
4. Delete Student
5. Save to File
6. Load from File
0. Exit
==========================
Choice: 
(Full implementation in next sections)`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"CRUD 기능 구현",headingEn:"CRUD Implementation",text:["CRUD는 Create(생성), Read(조회), Update(수정), Delete(삭제)의 약자로, 데이터 관리의 네 가지 기본 연산입니다. 학생 관리 시스템에서는 학생 추가(Create), 전체/개별 조회(Read), 검색 및 수정(Update), 삭제(Delete) 기능을 구현합니다. 각 기능을 독립적인 함수로 분리하면 코드의 가독성과 유지보수성이 크게 향상됩니다.","학생 추가 시에는 데이터베이스가 가득 찼는지 확인하고, 중복 학번을 검사해야 합니다. 검색 기능은 학번 또는 이름으로 검색할 수 있도록 구현합니다. 삭제 기능은 해당 학생을 찾은 후, 배열의 마지막 요소를 삭제된 위치로 옮기는 방식으로 효율적으로 처리합니다.","아래 예제는 추가, 전체 표시, 검색, 삭제 기능이 모두 구현된 코드입니다. 테스트를 위해 main() 함수에서 직접 함수를 호출하여 동작을 확인합니다."],textEn:["CRUD stands for Create, Read, Update, and Delete -- the four basic data management operations. In the student management system, we implement adding students (Create), viewing all or individual records (Read), searching and modifying (Update), and removing records (Delete). Separating each function improves code readability and maintainability.","When adding a student, check if the database is full and verify that the student ID is not a duplicate. The search function should support searching by student ID or name. The delete function efficiently removes a student by finding them and moving the last element to fill the gap.","The example below includes fully implemented add, display all, search, and delete functions. The main() function directly calls these functions for testing purposes."],code:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_NAME 50
#define MAX_STUDENTS 100

typedef struct {
    int id;
    char name[MAX_NAME];
    float grade;
} Student;

typedef struct {
    Student students[MAX_STUDENTS];
    int count;
} StudentDB;

void db_init(StudentDB *db) {
    db->count = 0;
}

/* CREATE: Add a student */
int add_student(StudentDB *db, int id, const char *name, float grade) {
    if (db->count >= MAX_STUDENTS) {
        printf("Error: Database is full.\\n");
        return -1;
    }
    /* Check for duplicate ID */
    for (int i = 0; i < db->count; i++) {
        if (db->students[i].id == id) {
            printf("Error: Student ID %d already exists.\\n", id);
            return -1;
        }
    }
    Student *s = &db->students[db->count];
    s->id = id;
    strncpy(s->name, name, MAX_NAME - 1);
    s->name[MAX_NAME - 1] = '\\0';
    s->grade = grade;
    db->count++;
    printf("Added: [%d] %s (%.1f)\\n", id, name, grade);
    return 0;
}

/* READ: Display all students */
void display_all(const StudentDB *db) {
    if (db->count == 0) {
        printf("No students in database.\\n");
        return;
    }
    printf("\\n%-8s %-20s %s\\n", "ID", "Name", "Grade");
    printf("---------- -------------------- ------\\n");
    for (int i = 0; i < db->count; i++) {
        printf("%-8d %-20s %.1f\\n",
               db->students[i].id,
               db->students[i].name,
               db->students[i].grade);
    }
    printf("Total: %d student(s)\\n", db->count);
}

/* READ: Search by ID */
int search_by_id(const StudentDB *db, int id) {
    for (int i = 0; i < db->count; i++) {
        if (db->students[i].id == id) {
            printf("Found: [%d] %s - Grade: %.1f\\n",
                   db->students[i].id,
                   db->students[i].name,
                   db->students[i].grade);
            return i;
        }
    }
    printf("Student ID %d not found.\\n", id);
    return -1;
}

/* DELETE: Remove by ID */
int delete_student(StudentDB *db, int id) {
    for (int i = 0; i < db->count; i++) {
        if (db->students[i].id == id) {
            printf("Deleted: [%d] %s\\n",
                   db->students[i].id,
                   db->students[i].name);
            /* Move last element to fill gap */
            db->students[i] = db->students[db->count - 1];
            db->count--;
            return 0;
        }
    }
    printf("Student ID %d not found.\\n", id);
    return -1;
}

int main() {
    StudentDB db;
    db_init(&db);

    /* Test: Add students */
    printf("=== Adding Students ===\\n");
    add_student(&db, 1001, "Kim Minjun", 92.5);
    add_student(&db, 1002, "Lee Soyeon", 88.0);
    add_student(&db, 1003, "Park Jiwoo", 95.3);
    add_student(&db, 1004, "Choi Yuna", 79.8);

    /* Test: Display all */
    printf("\\n=== All Students ===");
    display_all(&db);

    /* Test: Search */
    printf("\\n=== Search ===\\n");
    search_by_id(&db, 1003);
    search_by_id(&db, 9999);

    /* Test: Delete */
    printf("\\n=== Delete ===\\n");
    delete_student(&db, 1002);

    printf("\\n=== After Deletion ===");
    display_all(&db);

    return 0;
}`,expectedOutput:`=== Adding Students ===
Added: [1001] Kim Minjun (92.5)
Added: [1002] Lee Soyeon (88.0)
Added: [1003] Park Jiwoo (95.3)
Added: [1004] Choi Yuna (79.8)

=== All Students ===
ID       Name                 Grade
---------- -------------------- ------
1001     Kim Minjun           92.5
1002     Lee Soyeon           88.0
1003     Park Jiwoo           95.3
1004     Choi Yuna            79.8
Total: 4 student(s)

=== Search ===
Found: [1003] Park Jiwoo - Grade: 95.3
Student ID 9999 not found.

=== Delete ===
Deleted: [1002] Lee Soyeon

=== After Deletion ===
ID       Name                 Grade
---------- -------------------- ------
1001     Kim Minjun           92.5
1004     Choi Yuna            79.8
1003     Park Jiwoo           95.3
Total: 3 student(s)`,warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."},{heading:"파일 저장과 불러오기",headingEn:"File Save & Load",text:["프로그램을 종료하면 메모리의 데이터는 모두 사라집니다. 데이터를 영구적으로 저장하려면 파일에 기록해야 합니다. C에서는 fwrite()와 fread()를 사용하여 구조체 데이터를 이진 형식으로 파일에 저장하고 불러올 수 있습니다. 이진 파일은 텍스트 파일보다 읽기/쓰기 속도가 빠르고 데이터 크기가 작습니다.",'fwrite()는 메모리의 데이터를 그대로 파일에 씁니다. 구조체 배열 전체를 한 번에 저장할 수 있어 매우 효율적입니다. fread()는 파일에서 데이터를 읽어 메모리로 복원합니다. 파일을 열 때는 이진 모드("wb"는 쓰기, "rb"는 읽기)를 사용해야 합니다.',"아래 예제는 학생 데이터를 파일에 저장하고 다시 불러오는 완전한 구현입니다. 파일 열기 실패에 대한 에러 처리도 포함되어 있으며, 저장 후 다시 불러와서 데이터가 정확하게 복원되는지 확인합니다."],textEn:["When a program exits, all data in memory is lost. To store data permanently, it must be written to a file. In C, fwrite() and fread() can save and load struct data in binary format. Binary files are faster to read/write and smaller in size than text files.",'fwrite() writes memory data directly to a file. It can save an entire struct array at once, making it very efficient. fread() reads data from a file and restores it to memory. When opening files, use binary mode ("wb" for writing, "rb" for reading).',"The example below provides a complete implementation of saving student data to a file and loading it back. It includes error handling for file open failures and verifies that data is accurately restored after loading."],code:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_NAME 50
#define MAX_STUDENTS 100
#define DATA_FILE "students.dat"

typedef struct {
    int id;
    char name[MAX_NAME];
    float grade;
} Student;

typedef struct {
    Student students[MAX_STUDENTS];
    int count;
} StudentDB;

void db_init(StudentDB *db) { db->count = 0; }

int add_student(StudentDB *db, int id, const char *name, float grade) {
    if (db->count >= MAX_STUDENTS) return -1;
    Student *s = &db->students[db->count];
    s->id = id;
    strncpy(s->name, name, MAX_NAME - 1);
    s->name[MAX_NAME - 1] = '\\0';
    s->grade = grade;
    db->count++;
    return 0;
}

/* SAVE: Write database to binary file */
int save_to_file(const StudentDB *db, const char *filename) {
    FILE *fp = fopen(filename, "wb");
    if (fp == NULL) {
        perror("Error opening file for writing");
        return -1;
    }

    /* Write the count first */
    fwrite(&db->count, sizeof(int), 1, fp);

    /* Write all student records */
    fwrite(db->students, sizeof(Student), db->count, fp);

    fclose(fp);
    printf("Saved %d student(s) to '%s'\\n", db->count, filename);
    return 0;
}

/* LOAD: Read database from binary file */
int load_from_file(StudentDB *db, const char *filename) {
    FILE *fp = fopen(filename, "rb");
    if (fp == NULL) {
        perror("Error opening file for reading");
        return -1;
    }

    /* Read the count */
    if (fread(&db->count, sizeof(int), 1, fp) != 1) {
        fprintf(stderr, "Error reading student count\\n");
        fclose(fp);
        return -1;
    }

    /* Validate count */
    if (db->count < 0 || db->count > MAX_STUDENTS) {
        fprintf(stderr, "Invalid student count: %d\\n", db->count);
        db->count = 0;
        fclose(fp);
        return -1;
    }

    /* Read student records */
    size_t read = fread(db->students, sizeof(Student), db->count, fp);
    if ((int)read != db->count) {
        fprintf(stderr, "Error: expected %d records, read %lu\\n",
                db->count, read);
        fclose(fp);
        return -1;
    }

    fclose(fp);
    printf("Loaded %d student(s) from '%s'\\n", db->count, filename);
    return 0;
}

void display_all(const StudentDB *db) {
    printf("\\n%-8s %-20s %s\\n", "ID", "Name", "Grade");
    printf("-------- -------------------- ------\\n");
    for (int i = 0; i < db->count; i++) {
        printf("%-8d %-20s %.1f\\n",
               db->students[i].id,
               db->students[i].name,
               db->students[i].grade);
    }
}

int main() {
    StudentDB db;
    db_init(&db);

    /* Add sample data */
    add_student(&db, 1001, "Kim Minjun", 92.5);
    add_student(&db, 1002, "Lee Soyeon", 88.0);
    add_student(&db, 1003, "Park Jiwoo", 95.3);

    printf("=== Original Data ===%s", "");
    display_all(&db);

    /* Save to file */
    printf("\\n");
    save_to_file(&db, DATA_FILE);

    /* Clear database */
    db_init(&db);
    printf("\\nDatabase cleared. Count: %d\\n", db.count);

    /* Load from file */
    printf("\\n");
    load_from_file(&db, DATA_FILE);

    printf("\\n=== Loaded Data ===%s", "");
    display_all(&db);

    printf("\\nFile persistence test complete!\\n");
    return 0;
}`,expectedOutput:`=== Original Data ===
ID       Name                 Grade
-------- -------------------- ------
1001     Kim Minjun           92.5
1002     Lee Soyeon           88.0
1003     Park Jiwoo           95.3

Saved 3 student(s) to 'students.dat'

Database cleared. Count: 0

Loaded 3 student(s) from 'students.dat'

=== Loaded Data ===
ID       Name                 Grade
-------- -------------------- ------
1001     Kim Minjun           92.5
1002     Lee Soyeon           88.0
1003     Park Jiwoo           95.3

File persistence test complete!`,tip:"프로그램을 작은 기능 단위로 나누어 개발하세요.",tipEn:"Break the program into small functional units.",warning:"이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.",warningEn:"This code cannot run in the browser compiler. Please use a local compiler like GCC."}]}},m={...O,...P,...U,..._},B={"hello-c":{title:"Hello C!",titleEn:"Hello C!",summary:"C언어의 세계에 첫 발을 내딛습니다. #include로 헤더 파일을 포함하고, main() 함수 안에서 printf()로 화면에 메시지를 출력하는 방법을 배웁니다. 주석 작성법과 기본 프로그램 구조도 함께 익힙니다.",summaryEn:"Take your first step into the world of C. Learn to include header files with #include, output messages using printf() inside main(), and write comments. Understand the basic structure of a C program.",keyConcepts:["#include <stdio.h>","main() 함수","printf() 출력","한 줄/여러 줄 주석","컴파일과 실행"],keyConceptsEn:["#include <stdio.h>","main() function","printf() output","Single/multi-line comments","Compile and run"]},variables:{title:"변수와 자료형",titleEn:"Variables & Data Types",summary:"데이터를 저장하는 변수의 개념과 C언어의 기본 자료형(int, float, double, char)을 학습합니다. sizeof 연산자로 각 자료형의 크기를 확인하고, 변수 선언과 초기화 규칙을 이해합니다.",summaryEn:"Learn about variables for storing data and C data types (int, float, double, char). Use sizeof to check type sizes and understand variable declaration and initialization rules.",keyConcepts:["int, float, double, char","sizeof 연산자","변수 선언과 초기화","상수(const)","자료형 변환"],keyConceptsEn:["int, float, double, char","sizeof operator","Variable declaration & initialization","Constants (const)","Type casting"]},operators:{title:"연산자",titleEn:"Operators",summary:"C언어의 다양한 연산자를 체계적으로 학습합니다. 산술(+, -, *, /, %), 비교(==, !=, <, >), 논리(&&, ||, !), 대입(=, +=, -=) 연산자와 연산자 우선순위를 익힙니다.",summaryEn:"Systematically learn C operators: arithmetic (+, -, *, /, %), comparison (==, !=, <, >), logical (&&, ||, !), assignment (=, +=, -=), and operator precedence.",keyConcepts:["산술 연산자","비교 연산자","논리 연산자","대입 연산자","연산자 우선순위"],keyConceptsEn:["Arithmetic operators","Comparison operators","Logical operators","Assignment operators","Operator precedence"]},"input-output":{title:"입출력",titleEn:"Input & Output",summary:"printf()와 scanf()를 사용한 서식 지정 입출력을 마스터합니다. %d, %f, %c, %s 등 서식 지정자의 활용법과 이스케이프 문자(\\n, \\t)를 배웁니다.",summaryEn:"Master formatted I/O with printf() and scanf(). Learn format specifiers (%d, %f, %c, %s) and escape characters (\\n, \\t).",keyConcepts:["printf() 서식 출력","scanf() 입력","서식 지정자 (%d, %f, %c, %s)","이스케이프 문자","& 연산자와 scanf"],keyConceptsEn:["printf() formatted output","scanf() input","Format specifiers (%d, %f, %c, %s)","Escape characters","& operator with scanf"]},conditionals:{title:"조건문",titleEn:"Conditionals",summary:"프로그램의 흐름을 제어하는 조건문을 학습합니다. if, else if, else 문으로 분기 처리를 하고, switch-case 문으로 다중 조건을 효율적으로 처리합니다. 삼항 연산자도 소개합니다.",summaryEn:"Learn conditional statements for flow control. Use if/else if/else for branching and switch-case for multiple conditions. The ternary operator is also introduced.",keyConcepts:["if / else if / else","switch-case","삼항 연산자 (?:)","중첩 조건문","논리 조건 결합"],keyConceptsEn:["if / else if / else","switch-case","Ternary operator (?:)","Nested conditionals","Combining logical conditions"]},loops:{title:"반복문",titleEn:"Loops",summary:"반복 작업을 자동화하는 루프 구조를 배웁니다. for, while, do-while 루프의 차이를 이해하고, break와 continue로 루프 흐름을 제어합니다. 중첩 반복문도 다룹니다.",summaryEn:"Learn loop structures for automating repetitive tasks. Understand for, while, and do-while differences, control flow with break/continue, and nested loops.",keyConcepts:["for 루프","while 루프","do-while 루프","break / continue","중첩 반복문"],keyConceptsEn:["for loop","while loop","do-while loop","break / continue","Nested loops"]},arrays:{title:"배열",titleEn:"Arrays",summary:"같은 자료형의 데이터를 연속적으로 저장하는 배열을 학습합니다. 1차원, 2차원 배열의 선언과 초기화, 반복문을 이용한 배열 순회, 배열의 크기 계산 방법을 익힙니다.",summaryEn:"Learn arrays for storing consecutive data of the same type. Cover 1D/2D array declaration, initialization, traversal with loops, and size calculation.",keyConcepts:["1차원 배열","2차원 배열","배열 초기화","배열 순회","배열 크기 계산"],keyConceptsEn:["1D arrays","2D arrays","Array initialization","Array traversal","Array size calculation"]},"strings-basic":{title:"문자열 기초",titleEn:"String Basics",summary:"C언어에서 문자열은 char 배열로 표현됩니다. 문자열 선언, 초기화, string.h의 주요 함수(strlen, strcpy, strcmp, strcat)를 활용하는 방법을 배웁니다.",summaryEn:"In C, strings are char arrays. Learn string declaration, initialization, and key string.h functions (strlen, strcpy, strcmp, strcat).",keyConcepts:["char 배열로서의 문자열","strlen()","strcpy()","strcmp()","strcat()"],keyConceptsEn:["Strings as char arrays","strlen()","strcpy()","strcmp()","strcat()"]},"functions-basic":{title:"함수 기초",titleEn:"Function Basics",summary:"코드를 재사용 가능한 단위로 나누는 함수를 학습합니다. 함수 정의, 매개변수 전달(값에 의한 호출), 반환값, 함수 프로토타입의 개념을 이해합니다.",summaryEn:"Learn functions for organizing code into reusable units. Understand function definition, parameter passing (call by value), return values, and function prototypes.",keyConcepts:["함수 정의와 호출","매개변수와 인자","return 문","함수 프로토타입","값에 의한 호출"],keyConceptsEn:["Function definition & calling","Parameters & arguments","return statement","Function prototypes","Call by value"]},"pointers-basic":{title:"포인터 기초",titleEn:"Pointer Basics",summary:"C언어의 핵심인 포인터를 시작합니다. 메모리 주소의 개념, & (주소) 연산자, * (역참조) 연산자, 포인터 변수 선언을 배우고, NULL 포인터의 중요성을 이해합니다.",summaryEn:"Begin with C pointers. Learn memory addresses, the & (address) operator, * (dereference) operator, pointer declaration, and the importance of NULL pointers.",keyConcepts:["메모리 주소","& 연산자","* 연산자","포인터 선언","NULL 포인터"],keyConceptsEn:["Memory addresses","& operator","* operator","Pointer declaration","NULL pointer"]},"pointers-advanced":{title:"포인터 심화",titleEn:"Advanced Pointers",summary:"포인터의 고급 활용법을 다룹니다. 포인터 배열, 배열 포인터, 이중 포인터(포인터의 포인터)의 차이를 명확히 이해하고, 포인터 연산(덧셈, 뺄셈)을 학습합니다.",summaryEn:"Cover advanced pointer usage: pointer arrays, array pointers, double pointers (pointer to pointer), and pointer arithmetic (addition, subtraction).",keyConcepts:["포인터 배열","배열 포인터","이중 포인터","포인터 연산","배열과 포인터 관계"],keyConceptsEn:["Pointer arrays","Array pointers","Double pointers","Pointer arithmetic","Array-pointer relationship"]},"dynamic-memory":{title:"동적 메모리",titleEn:"Dynamic Memory",summary:"실행 중에 메모리를 할당하고 해제하는 동적 메모리 관리를 배웁니다. malloc(), calloc(), realloc(), free() 함수의 사용법과 메모리 누수 방지 기법을 익힙니다.",summaryEn:"Learn dynamic memory management: allocating and freeing memory at runtime with malloc(), calloc(), realloc(), free(), and leak prevention techniques.",keyConcepts:["malloc()","calloc()","realloc()","free()","메모리 누수 방지"],keyConceptsEn:["malloc()","calloc()","realloc()","free()","Memory leak prevention"]},"strings-advanced":{title:"문자열 심화",titleEn:"Advanced Strings",summary:"문자열 포인터와 char 배열의 차이, strtok으로 문자열 분리, sprintf/sscanf로 문자열 변환, 동적 메모리를 활용한 문자열 처리를 학습합니다.",summaryEn:"Learn the difference between string pointers and char arrays, string tokenization with strtok, string conversion with sprintf/sscanf, and dynamic string handling.",keyConcepts:["문자열 포인터 vs char 배열","strtok()","sprintf() / sscanf()","동적 문자열","문자열 배열"],keyConceptsEn:["String pointer vs char array","strtok()","sprintf() / sscanf()","Dynamic strings","String arrays"]},structures:{title:"구조체",titleEn:"Structures",summary:"서로 다른 자료형을 하나로 묶는 구조체를 학습합니다. struct 선언, typedef를 이용한 별칭, 구조체 배열, 중첩 구조체, 구조체 포인터를 다룹니다.",summaryEn:"Learn structs for grouping different data types. Cover struct declaration, typedef aliases, struct arrays, nested structs, and struct pointers.",keyConcepts:["struct 선언","typedef","구조체 배열","중첩 구조체","구조체 포인터와 ->"],keyConceptsEn:["struct declaration","typedef","Struct arrays","Nested structs","Struct pointers and ->"]},"unions-enums":{title:"공용체와 열거형",titleEn:"Unions & Enums",summary:"메모리를 공유하는 공용체(union)와 명명된 상수 집합인 열거형(enum)을 배웁니다. 비트 필드를 활용한 메모리 절약 기법도 소개합니다.",summaryEn:"Learn unions for shared memory, enums for named constant sets, and bit fields for memory-efficient storage.",keyConcepts:["union 선언과 활용","enum 선언","비트 필드","union vs struct","typedef와 함께 사용"],keyConceptsEn:["union declaration & usage","enum declaration","Bit fields","union vs struct","Using with typedef"]},"file-io":{title:"파일 입출력",titleEn:"File I/O",summary:"파일을 열고, 읽고, 쓰고, 닫는 파일 입출력을 학습합니다. fopen, fclose, fprintf, fscanf로 텍스트 파일을, fread, fwrite로 바이너리 파일을 처리합니다.",summaryEn:"Learn file I/O: open, read, write, close. Handle text files with fopen/fclose/fprintf/fscanf and binary files with fread/fwrite.",keyConcepts:["fopen() / fclose()","fprintf() / fscanf()","fread() / fwrite()",'파일 모드 ("r", "w", "a")',"fseek() / ftell()"],keyConceptsEn:["fopen() / fclose()","fprintf() / fscanf()","fread() / fwrite()",'File modes ("r", "w", "a")',"fseek() / ftell()"]},preprocessor:{title:"전처리기",titleEn:"Preprocessor",summary:"컴파일 전에 실행되는 전처리기 지시문을 학습합니다. #define 매크로, #include, 조건부 컴파일(#ifdef, #ifndef), 매크로 함수의 활용법을 익힙니다.",summaryEn:"Learn preprocessor directives that run before compilation: #define macros, #include, conditional compilation (#ifdef, #ifndef), and macro functions.",keyConcepts:["#define 매크로","#include","#ifdef / #ifndef","매크로 함수","조건부 컴파일"],keyConceptsEn:["#define macros","#include","#ifdef / #ifndef","Macro functions","Conditional compilation"]},"scope-storage":{title:"스코프와 저장 클래스",titleEn:"Scope & Storage Classes",summary:"변수의 유효 범위(스코프)와 수명을 결정하는 저장 클래스를 배웁니다. auto, static, extern, register 키워드의 차이와 활용을 이해합니다.",summaryEn:"Learn scope (visibility) and storage classes that determine variable lifetime. Understand auto, static, extern, and register keywords.",keyConcepts:["지역/전역 스코프","auto","static","extern","register"],keyConceptsEn:["Local/global scope","auto","static","extern","register"]},"linked-list":{title:"연결 리스트",titleEn:"Linked Lists",summary:"동적으로 크기가 변하는 연결 리스트를 구현합니다. 단일 연결 리스트와 이중 연결 리스트의 노드 삽입, 삭제, 탐색 알고리즘을 직접 코딩합니다.",summaryEn:"Implement dynamically sized linked lists. Code node insertion, deletion, and search for singly and doubly linked lists.",keyConcepts:["노드 구조체","단일 연결 리스트","이중 연결 리스트","삽입/삭제 알고리즘","메모리 관리"],keyConceptsEn:["Node struct","Singly linked list","Doubly linked list","Insert/delete algorithms","Memory management"]},"stack-queue":{title:"스택과 큐",titleEn:"Stack & Queue",summary:"LIFO 스택과 FIFO 큐를 배열과 연결 리스트 기반으로 각각 구현합니다. push, pop, enqueue, dequeue 연산과 실제 활용 사례를 학습합니다.",summaryEn:"Implement LIFO stacks and FIFO queues using both arrays and linked lists. Learn push, pop, enqueue, dequeue operations and real-world use cases.",keyConcepts:["스택 (LIFO)","큐 (FIFO)","배열 기반 구현","연결 리스트 기반 구현","오버플로/언더플로 처리"],keyConceptsEn:["Stack (LIFO)","Queue (FIFO)","Array-based implementation","Linked list-based implementation","Overflow/underflow handling"]},"tree-basics":{title:"트리 기초",titleEn:"Tree Basics",summary:"계층적 자료구조인 트리를 학습합니다. 이진 트리의 구조, 이진 탐색 트리(BST)의 삽입/삭제/탐색, 전위/중위/후위 순회 알고리즘을 구현합니다.",summaryEn:"Learn the hierarchical tree data structure. Implement binary tree structure, BST insert/delete/search, and pre-order/in-order/post-order traversals.",keyConcepts:["이진 트리 구조","BST 삽입/삭제/탐색","전위 순회","중위 순회","후위 순회"],keyConceptsEn:["Binary tree structure","BST insert/delete/search","Pre-order traversal","In-order traversal","Post-order traversal"]},sorting:{title:"정렬 알고리즘",titleEn:"Sorting Algorithms",summary:"대표적인 정렬 알고리즘을 구현하고 비교합니다. 버블, 선택, 삽입 정렬의 기본 원리와 퀵, 병합 정렬의 분할 정복 전략을 이해합니다.",summaryEn:"Implement and compare classic sorting algorithms. Understand basic bubble/selection/insertion sorts and divide-and-conquer quick/merge sorts.",keyConcepts:["버블 정렬","선택 정렬","삽입 정렬","퀵 정렬","병합 정렬"],keyConceptsEn:["Bubble sort","Selection sort","Insertion sort","Quick sort","Merge sort"]},searching:{title:"탐색 알고리즘",titleEn:"Search Algorithms",summary:"데이터를 효율적으로 찾는 탐색 알고리즘을 학습합니다. 순차 탐색, 이진 탐색의 구현과 해시 테이블의 개념 및 충돌 해결 방법을 다룹니다.",summaryEn:"Learn efficient data search algorithms. Implement linear search, binary search, and understand hash tables with collision resolution.",keyConcepts:["순차 탐색","이진 탐색","해시 함수","해시 테이블","충돌 해결 (체이닝, 선형 탐사)"],keyConceptsEn:["Linear search","Binary search","Hash functions","Hash tables","Collision resolution (chaining, linear probing)"]},recursion:{title:"재귀",titleEn:"Recursion",summary:"자기 자신을 호출하는 재귀 함수를 마스터합니다. 팩토리얼, 피보나치, 하노이 탑 등 고전 문제를 재귀로 풀고, 분할 정복과 꼬리 재귀 최적화를 배웁니다.",summaryEn:"Master recursive functions. Solve classic problems (factorial, Fibonacci, Tower of Hanoi) recursively, and learn divide and conquer with tail recursion optimization.",keyConcepts:["재귀 함수 기본","기저 조건","팩토리얼/피보나치","분할 정복","꼬리 재귀"],keyConceptsEn:["Recursive function basics","Base case","Factorial/Fibonacci","Divide and conquer","Tail recursion"]},bitwise:{title:"비트 연산 활용",titleEn:"Bitwise Operations",summary:"비트 단위로 데이터를 조작하는 비트 연산을 활용합니다. AND, OR, XOR, NOT, 시프트 연산과 비트 마스킹, 플래그 관리 기법을 실습합니다.",summaryEn:"Use bitwise operations for data manipulation at the bit level. Practice AND, OR, XOR, NOT, shift operations, bit masking, and flag management.",keyConcepts:["비트 AND/OR/XOR/NOT","왼쪽/오른쪽 시프트","비트 마스킹","플래그 설정/해제/토글","비트 필드"],keyConceptsEn:["Bitwise AND/OR/XOR/NOT","Left/right shift","Bit masking","Flag set/clear/toggle","Bit fields"]},"memory-management":{title:"메모리 관리 심화",titleEn:"Advanced Memory Management",summary:"프로그램의 메모리 레이아웃(코드, 데이터, 힙, 스택 영역)을 이해하고, 메모리 누수/댕글링 포인터/버퍼 오버플로 등 흔한 문제를 진단하고 방지하는 방법을 배웁니다.",summaryEn:"Understand program memory layout (code, data, heap, stack) and learn to diagnose and prevent common issues: memory leaks, dangling pointers, buffer overflows.",keyConcepts:["메모리 레이아웃","스택 vs 힙","메모리 누수 탐지","댕글링 포인터","Valgrind 사용법"],keyConceptsEn:["Memory layout","Stack vs heap","Memory leak detection","Dangling pointers","Using Valgrind"]},"function-pointers":{title:"함수 포인터",titleEn:"Function Pointers",summary:"함수를 가리키는 포인터를 선언하고 활용합니다. 콜백 함수 패턴, 함수 포인터 배열로 디스패치 테이블 구현, qsort()와 함께 사용하는 방법을 배웁니다.",summaryEn:"Declare and use function pointers. Learn callback patterns, dispatch tables with function pointer arrays, and usage with qsort().",keyConcepts:["함수 포인터 선언","콜백 함수","함수 포인터 배열","qsort() 활용","디스패치 테이블"],keyConceptsEn:["Function pointer declaration","Callback functions","Function pointer arrays","Using qsort()","Dispatch tables"]},"multi-file":{title:"다중 파일 프로그래밍",titleEn:"Multi-file Programming",summary:"규모 있는 프로그램을 여러 파일로 나누어 관리합니다. 헤더 파일(.h) 작성, include guard, extern 선언, 컴파일-링크 과정을 이해합니다.",summaryEn:"Manage larger programs across multiple files. Learn header file (.h) creation, include guards, extern declarations, and the compile-link process.",keyConcepts:["헤더 파일 작성","#include guard","extern 선언","분할 컴파일","링킹"],keyConceptsEn:["Writing header files","#include guard","extern declaration","Separate compilation","Linking"]},makefile:{title:"Makefile 작성",titleEn:"Makefile",summary:"make 빌드 도구를 사용하여 컴파일 과정을 자동화합니다. Makefile의 타겟, 의존성, 규칙 작성법과 변수, 패턴 규칙 등 실전 기법을 배웁니다.",summaryEn:"Automate compilation with the make build tool. Learn Makefile targets, dependencies, rules, variables, and pattern rules.",keyConcepts:["Makefile 기본 구조","타겟과 의존성","변수 (CC, CFLAGS)","패턴 규칙","clean 타겟"],keyConceptsEn:["Makefile basic structure","Targets and dependencies","Variables (CC, CFLAGS)","Pattern rules","clean target"]},debugging:{title:"디버깅 기법",titleEn:"Debugging Techniques",summary:"효과적인 디버깅 전략과 도구를 학습합니다. GDB로 프로그램을 단계별 실행하고, Valgrind로 메모리 오류를 검사하며, assert와 방어적 프로그래밍 기법을 익힙니다.",summaryEn:"Learn effective debugging strategies and tools. Step through code with GDB, check memory errors with Valgrind, and use assert and defensive programming.",keyConcepts:["GDB 기본 명령","Valgrind memcheck","브레이크포인트","assert() 매크로","방어적 프로그래밍"],keyConceptsEn:["GDB basic commands","Valgrind memcheck","Breakpoints","assert() macro","Defensive programming"]},"system-calls":{title:"시스템 호출 기초",titleEn:"System Calls Basics",summary:"운영체제와 상호작용하는 시스템 호출을 학습합니다. fork()로 프로세스 생성, exec()로 프로그램 실행, pipe()로 프로세스 간 통신, 시그널 처리를 다룹니다.",summaryEn:"Learn system calls for OS interaction. Create processes with fork(), execute programs with exec(), communicate via pipe(), and handle signals.",keyConcepts:["fork()","exec()","wait()","pipe()","시그널 처리"],keyConceptsEn:["fork()","exec()","wait()","pipe()","Signal handling"]},"mini-project":{title:"미니 프로젝트",titleEn:"Mini Project",summary:"학생 관리 시스템을 처음부터 끝까지 설계하고 구현합니다. 구조체, 파일 입출력, 동적 메모리, 함수 분할 등 배운 내용을 종합적으로 활용하는 실전 프로젝트입니다.",summaryEn:"Design and implement a student management system from scratch. A comprehensive project combining structs, file I/O, dynamic memory, and modular functions.",keyConcepts:["프로그램 설계","메뉴 시스템 구현","데이터 CRUD","파일 저장/불러오기","테스트와 디버깅"],keyConceptsEn:["Program design","Menu system implementation","Data CRUD","File save/load","Testing and debugging"]}},M=Object.fromEntries(Object.entries(B).map(([o,a])=>[o,m[o]?{...a,...m[o]}:a]));function R(){const{level:o,lessonId:a}=E();C();const{t,localizedField:s}=N(),{completedLessons:g,completeLesson:b,uncompleteLesson:y}=T(),{requireAuth:x}=L(),l=S[o]||[],i=l.find(e=>e.id===a),h=M[a],r=I[o],u=g.has(a),{prevLesson:p,nextLesson:f}=A.useMemo(()=>{const e=l.findIndex(d=>d.id===a);return{prevLesson:e>0?l[e-1]:null,nextLesson:e<l.length-1?l[e+1]:null}},[l,a]),w=()=>{u?y(a):x(()=>b(a))};return!i||!r?n.jsx("div",{className:"lesson-page",children:n.jsxs("div",{className:"lesson-not-found",children:[n.jsx("i",{className:"fa-solid fa-exclamation-triangle"}),n.jsx("h2",{children:t("lesson.notFound")}),n.jsx(c,{to:"/",className:"back-home-btn",children:t("lesson.backHome")})]})}):n.jsxs("div",{className:"lesson-page",children:[n.jsxs("section",{className:"lesson-header",children:[n.jsxs("div",{className:"lesson-breadcrumb",children:[n.jsx(c,{to:"/",children:t("nav.home")}),n.jsx("i",{className:"fa-solid fa-chevron-right"}),n.jsx(c,{to:`/${o}`,style:{color:r.color},children:s(r,"title")||r.title}),n.jsx("i",{className:"fa-solid fa-chevron-right"}),n.jsx("span",{children:s(i,"title")})]}),n.jsxs("div",{className:"lesson-title-section",children:[n.jsx("div",{className:"lesson-icon-wrapper",style:{background:`${r.color}15`,color:r.color},children:n.jsx("i",{className:i.icon})}),n.jsxs("div",{className:"lesson-title-info",children:[n.jsx("h1",{className:"lesson-title",children:s(i,"title")}),n.jsx("p",{className:"lesson-desc",children:s(i,"description")}),n.jsxs("div",{className:"lesson-meta",children:[n.jsxs("span",{className:"lesson-time",children:[n.jsx("i",{className:"fa-regular fa-clock"}),i.estimatedTime,t("lesson.minutes")]}),n.jsx("span",{className:"lesson-difficulty",children:Array.from({length:3},(e,d)=>n.jsx("i",{className:d<i.difficulty?"fa-solid fa-star":"fa-regular fa-star"},d))}),i.topics&&n.jsxs("span",{className:"lesson-topic-count",children:[n.jsx("i",{className:"fa-solid fa-tags"}),i.topics.length," ",t("lesson.topicCount")]})]})]})]})]}),n.jsx("section",{className:"lesson-content",children:h?n.jsxs("div",{className:"lesson-content-body",children:[h.sections?.map((e,d)=>n.jsxs("div",{className:"content-section",children:[e.heading&&n.jsx("h2",{className:"content-heading",children:s(e,"heading")}),e.text&&n.jsx("div",{className:"content-text",children:(typeof e.text=="string"?[e.text]:e.text).map((v,k)=>n.jsx("p",{children:v},k))}),e.code&&n.jsx(D,{initialCode:e.code,expectedOutput:e.expectedOutput||"",lessonId:a}),e.tip&&n.jsxs("div",{className:"content-tip",children:[n.jsx("i",{className:"fa-solid fa-lightbulb"}),n.jsx("span",{children:s(e,"tip")})]}),e.warning&&n.jsxs("div",{className:"content-warning",children:[n.jsx("i",{className:"fa-solid fa-triangle-exclamation"}),n.jsx("span",{children:s(e,"warning")})]})]},d)),i.topics&&i.topics.length>0&&n.jsxs("div",{className:"lesson-topics-section",children:[n.jsx("h3",{children:t("lesson.topicsCovered")}),n.jsx("ul",{className:"topics-list",children:i.topics.map((e,d)=>n.jsxs("li",{children:[n.jsx("i",{className:"fa-solid fa-check",style:{color:r.color}}),n.jsx("span",{children:e})]},d))})]})]}):n.jsxs("div",{className:"lesson-content-placeholder",children:[n.jsx("div",{className:"placeholder-icon",children:n.jsx("i",{className:"fa-solid fa-file-code"})}),n.jsx("h3",{children:t("lesson.contentComingSoon")}),n.jsx("p",{children:t("lesson.contentComingSoonDesc")}),i.topics&&n.jsxs("div",{className:"lesson-topics-section",children:[n.jsx("h3",{children:t("lesson.topicsCovered")}),n.jsx("ul",{className:"topics-list",children:i.topics.map((e,d)=>n.jsxs("li",{children:[n.jsx("i",{className:"fa-solid fa-check",style:{color:r.color}}),n.jsx("span",{children:e})]},d))})]})]})}),n.jsx("section",{className:"lesson-actions",children:n.jsx("button",{className:`complete-btn ${u?"completed":""}`,onClick:w,style:u?{background:r.color}:{borderColor:r.color,color:r.color},children:u?n.jsxs(n.Fragment,{children:[n.jsx("i",{className:"fa-solid fa-check-circle"}),t("lesson.markIncomplete")]}):n.jsxs(n.Fragment,{children:[n.jsx("i",{className:"fa-regular fa-circle-check"}),t("lesson.markComplete")]})})}),n.jsxs("section",{className:"lesson-nav",children:[p?n.jsxs(c,{to:`/${o}/${p.id}`,className:"lesson-nav-btn prev",children:[n.jsx("i",{className:"fa-solid fa-arrow-left"}),n.jsxs("div",{children:[n.jsx("span",{className:"lesson-nav-label",children:t("lesson.prevLesson")}),n.jsx("span",{className:"lesson-nav-title",children:s(p,"title")})]})]}):n.jsx("div",{}),f?n.jsxs(c,{to:`/${o}/${f.id}`,className:"lesson-nav-btn next",children:[n.jsxs("div",{children:[n.jsx("span",{className:"lesson-nav-label",children:t("lesson.nextLesson")}),n.jsx("span",{className:"lesson-nav-title",children:s(f,"title")})]}),n.jsx("i",{className:"fa-solid fa-arrow-right"})]}):n.jsxs(c,{to:`/${o}`,className:"lesson-nav-btn next",children:[n.jsxs("div",{children:[n.jsx("span",{className:"lesson-nav-label",children:t("lesson.backToLevel")}),n.jsx("span",{className:"lesson-nav-title",style:{color:r.color},children:s(r,"title")||r.title})]}),n.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})}export{R as default};
