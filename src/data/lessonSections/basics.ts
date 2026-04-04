const basics = {
  'hello-c': {
    sections: [
      {
        heading: '프로그램의 기본 구조',
        headingEn: 'Basic Structure of a C Program',
        text: [
          'C 프로그램은 몇 가지 핵심 요소로 구성됩니다. 가장 먼저, #include <stdio.h>는 표준 입출력 라이브러리를 포함시키는 전처리기 지시문입니다. 이를 통해 printf()와 같은 함수를 사용할 수 있습니다.',
          'int main() 함수는 프로그램의 진입점(entry point)으로, 모든 C 프로그램은 반드시 main 함수를 가져야 합니다. int는 함수의 반환 타입이며, return 0;은 프로그램이 정상적으로 종료되었음을 운영체제에 알립니다.',
          '중괄호 { }는 함수의 본문(body)을 감싸며, 그 안에 실행할 명령문(statement)들을 작성합니다. 각 명령문은 반드시 세미콜론(;)으로 끝나야 합니다.'
        ],
        textEn: [
          'A C program consists of several key elements. First, #include <stdio.h> is a preprocessor directive that includes the standard input/output library. This allows us to use functions like printf().',
          'The int main() function is the entry point of the program. Every C program must have a main function. int is the return type, and return 0; tells the operating system that the program terminated successfully.',
          'Curly braces { } enclose the body of the function, where you write the statements to execute. Each statement must end with a semicolon (;).'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    printf("Program started\\n");\n    printf("Program finished\\n");\n    return 0;\n}',
        expectedOutput: 'Program started\nProgram finished',
        tip: '모든 C 프로그램은 main() 함수에서 시작합니다. return 0;을 잊지 마세요!',
        tipEn: 'Every C program starts from the main() function. Don\'t forget return 0;!'
      },
      {
        heading: '첫 번째 프로그램: Hello, World!',
        headingEn: 'First Program: Hello, World!',
        text: [
          '"Hello, World!" 프로그램은 프로그래밍 학습의 전통적인 첫 번째 프로그램입니다. 이 프로그램은 화면에 텍스트를 출력하는 가장 간단한 예제입니다.',
          'printf() 함수는 큰따옴표(" ") 안의 문자열을 화면에 출력합니다. \\n은 줄바꿈(개행) 문자로, 출력 후 커서를 다음 줄로 이동시킵니다.'
        ],
        textEn: [
          'The "Hello, World!" program is the traditional first program in learning programming. It is the simplest example of outputting text to the screen.',
          'The printf() function prints the string inside double quotes (" ") to the screen. \\n is the newline character, which moves the cursor to the next line after printing.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
        expectedOutput: 'Hello, World!'
      },
      {
        heading: 'printf 기초',
        headingEn: 'printf Basics',
        text: [
          'printf() 함수는 C에서 가장 많이 사용되는 출력 함수입니다. 여러 번 호출하여 여러 줄을 출력할 수 있으며, \\n 없이 사용하면 같은 줄에 연속으로 출력됩니다.',
          '하나의 printf() 안에서 \\n을 사용하면 출력 중간에 줄을 바꿀 수도 있습니다. 다양한 방식으로 텍스트를 조합하여 원하는 형태의 출력을 만들 수 있습니다.'
        ],
        textEn: [
          'The printf() function is the most commonly used output function in C. You can call it multiple times to print multiple lines. Without \\n, the output continues on the same line.',
          'You can use \\n within a single printf() to break lines in the middle of output. Combine text in various ways to create the desired output format.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    printf("Line 1\\n");\n    printf("Line 2\\n");\n    printf("Same ");\n    printf("line\\n");\n    printf("A\\nB\\nC\\n");\n    return 0;\n}',
        expectedOutput: 'Line 1\nLine 2\nSame line\nA\nB\nC'
      },
      {
        heading: '주석 작성법',
        headingEn: 'Writing Comments',
        text: [
          '주석(comment)은 코드에 설명을 추가하기 위해 사용되며, 컴파일러에 의해 무시됩니다. 코드의 가독성을 높이고, 다른 개발자나 미래의 자신이 코드를 이해하는 데 도움을 줍니다.',
          '한 줄 주석은 //로 시작하며, 해당 줄의 끝까지 주석으로 처리됩니다. 여러 줄 주석은 /*로 시작하고 */로 끝납니다. 좋은 주석은 "왜(why)" 그렇게 했는지를 설명합니다.'
        ],
        textEn: [
          'Comments are used to add explanations to your code and are ignored by the compiler. They improve code readability and help other developers (or your future self) understand the code.',
          'Single-line comments start with //. Multi-line comments start with /* and end with */. Good comments explain "why" something is done, not just "what" is done.'
        ],
        code: '#include <stdio.h>\n\n/* This is a multi-line comment.\n   It can span multiple lines. */\n\nint main() {\n    // This is a single-line comment\n    printf("Comments are ignored by the compiler\\n");\n\n    // printf("This line will NOT be printed\\n");\n\n    printf("But this line will\\n");\n    return 0;\n}',
        expectedOutput: 'Comments are ignored by the compiler\nBut this line will',
        tip: '좋은 주석은 코드가 "무엇을" 하는지가 아니라, "왜" 그렇게 하는지를 설명합니다.',
        tipEn: 'Good comments explain "why" something is done, not "what" the code does.'
      }
    ]
  },

  'variables': {
    sections: [
      {
        heading: '기본 자료형',
        headingEn: 'Basic Data Types',
        text: [
          'C 언어에는 네 가지 기본 자료형이 있습니다: int(정수), float(단정밀도 실수), double(배정밀도 실수), char(문자). 각 자료형은 저장할 수 있는 데이터의 종류와 크기가 다릅니다.',
          'int는 정수(예: 42, -7)를 저장하며, float와 double은 소수점이 있는 실수(예: 3.14)를 저장합니다. double은 float보다 더 높은 정밀도를 가집니다. char는 하나의 문자(예: \'A\')를 저장하며, 작은따옴표로 감쌉니다.'
        ],
        textEn: [
          'C has four basic data types: int (integer), float (single-precision floating-point), double (double-precision floating-point), and char (character). Each type differs in the kind and size of data it can store.',
          'int stores whole numbers (e.g., 42, -7). float and double store decimal numbers (e.g., 3.14), with double having higher precision. char stores a single character (e.g., \'A\') and uses single quotes.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int age = 25;\n    float height = 175.5f;\n    double pi = 3.14159265358979;\n    char grade = \'A\';\n\n    printf("Age: %d\\n", age);\n    printf("Height: %.1f\\n", height);\n    printf("Pi: %.14f\\n", pi);\n    printf("Grade: %c\\n", grade);\n    return 0;\n}',
        expectedOutput: 'Age: 25\nHeight: 175.5\nPi: 3.14159265358979\nGrade: A'
      },
      {
        heading: '변수 선언과 초기화',
        headingEn: 'Variable Declaration & Initialization',
        text: [
          '변수를 사용하려면 먼저 선언(declaration)해야 합니다. 선언은 자료형과 변수 이름을 지정합니다. 초기화(initialization)는 선언과 동시에 값을 할당하는 것입니다.',
          '변수 이름은 문자, 숫자, 밑줄(_)을 사용할 수 있지만, 반드시 문자 또는 밑줄로 시작해야 합니다. 대소문자를 구분하므로 age와 Age는 서로 다른 변수입니다. int, float 같은 예약어는 변수 이름으로 사용할 수 없습니다.'
        ],
        textEn: [
          'To use a variable, you must first declare it by specifying its data type and name. Initialization means assigning a value at the time of declaration.',
          'Variable names can contain letters, digits, and underscores (_), but must start with a letter or underscore. Names are case-sensitive, so age and Age are different variables. Reserved words like int and float cannot be used as variable names.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int x;\n    int y = 10;\n    x = 5;\n\n    int sum = x + y;\n\n    float temperature = 36.6f;\n    char initial = \'K\';\n\n    printf("x = %d, y = %d\\n", x, y);\n    printf("sum = %d\\n", sum);\n    printf("temperature = %.1f\\n", temperature);\n    printf("initial = %c\\n", initial);\n    return 0;\n}',
        expectedOutput: 'x = 5, y = 10\nsum = 15\ntemperature = 36.6\ninitial = K'
      },
      {
        heading: 'sizeof 연산자',
        headingEn: 'The sizeof Operator',
        text: [
          'sizeof 연산자는 자료형이나 변수가 메모리에서 차지하는 바이트 수를 반환합니다. 각 자료형의 크기는 시스템마다 다를 수 있지만, 일반적으로 char는 1바이트, int는 4바이트, float는 4바이트, double은 8바이트입니다.',
          'sizeof의 결과 타입은 size_t이지만, 이 브라우저 컴파일러에서는 (int)로 캐스팅하여 %d로 출력합니다. 메모리 크기를 이해하면 효율적인 프로그래밍에 도움이 됩니다.'
        ],
        textEn: [
          'The sizeof operator returns the number of bytes a data type or variable occupies in memory. Sizes may vary by system, but typically char is 1 byte, int is 4 bytes, float is 4 bytes, and double is 8 bytes.',
          'The result type of sizeof is size_t, but in this browser compiler we cast it to (int) and print with %d. Understanding memory sizes helps write efficient programs.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    printf("Size of char:   %d byte\\n", (int)sizeof(char));\n    printf("Size of int:    %d bytes\\n", (int)sizeof(int));\n    printf("Size of float:  %d bytes\\n", (int)sizeof(float));\n    printf("Size of double: %d bytes\\n", (int)sizeof(double));\n    return 0;\n}',
        expectedOutput: 'Size of char:   1 byte\nSize of int:    4 bytes\nSize of float:  4 bytes\nSize of double: 8 bytes',
        tip: 'sizeof는 컴파일 시에 결정되므로 매우 빠릅니다. 배열의 크기를 구할 때도 유용하게 사용됩니다.',
        tipEn: 'sizeof is determined at compile time, so it is very fast. It is also useful for calculating the size of arrays.'
      },
      {
        heading: '상수와 형변환',
        headingEn: 'Constants & Type Casting',
        text: [
          '상수(constant)는 값이 변경되지 않는 변수입니다. const 키워드를 사용하거나 #define 전처리기 지시문으로 정의할 수 있습니다. const로 선언된 변수는 초기화 후 값을 변경할 수 없습니다.',
          '형변환(type casting)은 하나의 자료형을 다른 자료형으로 변환하는 것입니다. 명시적 캐스팅은 (자료형) 형태로 작성합니다. 예를 들어, 정수 나눗셈에서 소수점 결과를 얻으려면 피연산자를 float로 캐스팅해야 합니다.'
        ],
        textEn: [
          'A constant is a variable whose value cannot be changed. You can use the const keyword or the #define preprocessor directive. A const variable cannot be modified after initialization.',
          'Type casting converts one data type to another. Explicit casting is written as (type). For example, to get a decimal result from integer division, you must cast an operand to float.'
        ],
        code: '#include <stdio.h>\n#define PI 3.14159\n\nint main() {\n    const int MAX = 100;\n    printf("MAX = %d\\n", MAX);\n    printf("PI = %.5f\\n", PI);\n\n    int a = 7;\n    int b = 2;\n    printf("Integer division: %d / %d = %d\\n", a, b, a / b);\n    printf("Float division:   %d / %d = %.2f\\n", a, b, (float)a / b);\n\n    double big = 9.99;\n    int truncated = (int)big;\n    printf("%.2f -> %d (truncated)\\n", big, truncated);\n    return 0;\n}',
        expectedOutput: 'MAX = 100\nPI = 3.14159\nInteger division: 7 / 2 = 3\nFloat division:   7 / 2 = 3.50\n9.99 -> 9 (truncated)',
        warning: '정수 나눗셈은 소수점 이하를 버립니다! 소수점 결과가 필요하면 반드시 형변환을 사용하세요.',
        warningEn: 'Integer division truncates the decimal part! Always use type casting if you need a decimal result.'
      }
    ]
  },

  'operators': {
    sections: [
      {
        heading: '산술 연산자',
        headingEn: 'Arithmetic Operators',
        text: [
          'C의 산술 연산자는 수학의 기본 연산을 수행합니다: 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%). 이 연산자들은 정수와 실수 모두에 사용할 수 있습니다.',
          '주의할 점은 정수끼리의 나눗셈은 결과도 정수입니다(소수점 이하 버림). 나머지 연산자(%)는 정수에만 사용할 수 있으며, 나눗셈의 나머지를 반환합니다. 짝수/홀수 판별 등에 유용합니다.'
        ],
        textEn: [
          'Arithmetic operators in C perform basic math operations: addition (+), subtraction (-), multiplication (*), division (/), and modulus (%). They work with both integers and floating-point numbers.',
          'Note that division between two integers results in an integer (decimal part is truncated). The modulus operator (%) works only with integers and returns the remainder. It is useful for checking even/odd numbers, etc.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int a = 17;\n    int b = 5;\n\n    printf("%d + %d = %d\\n", a, b, a + b);\n    printf("%d - %d = %d\\n", a, b, a - b);\n    printf("%d * %d = %d\\n", a, b, a * b);\n    printf("%d / %d = %d\\n", a, b, a / b);\n    printf("%d %% %d = %d\\n", a, b, a % b);\n    return 0;\n}',
        expectedOutput: '17 + 5 = 22\n17 - 5 = 12\n17 * 5 = 85\n17 / 5 = 3\n17 % 5 = 2'
      },
      {
        heading: '비교와 논리 연산자',
        headingEn: 'Comparison & Logical Operators',
        text: [
          '비교 연산자는 두 값을 비교하여 참(1) 또는 거짓(0)을 반환합니다: 같음(==), 다름(!=), 작음(<), 큼(>), 작거나 같음(<=), 크거나 같음(>=).',
          '논리 연산자는 조건을 결합합니다: AND(&&)는 두 조건이 모두 참일 때, OR(||)는 하나라도 참일 때 참을 반환합니다. NOT(!)은 참과 거짓을 반전시킵니다. C에서 0은 거짓, 0이 아닌 모든 값은 참입니다.'
        ],
        textEn: [
          'Comparison operators compare two values and return true (1) or false (0): equal (==), not equal (!=), less than (<), greater than (>), less than or equal (<=), greater than or equal (>=).',
          'Logical operators combine conditions: AND (&&) returns true when both conditions are true, OR (||) when at least one is true. NOT (!) inverts true and false. In C, 0 is false, and any non-zero value is true.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int x = 10;\n    int y = 20;\n\n    printf("x == y: %d\\n", x == y);\n    printf("x != y: %d\\n", x != y);\n    printf("x < y:  %d\\n", x < y);\n    printf("x > y:  %d\\n", x > y);\n\n    int a = 1;\n    int b = 0;\n    printf("a && b: %d\\n", a && b);\n    printf("a || b: %d\\n", a || b);\n    printf("!a:     %d\\n", !a);\n    return 0;\n}',
        expectedOutput: 'x == y: 0\nx != y: 1\nx < y:  1\nx > y:  0\na && b: 0\na || b: 1\n!a:     0'
      },
      {
        heading: '대입 연산자',
        headingEn: 'Assignment Operators',
        text: [
          '대입 연산자(=)는 오른쪽 값을 왼쪽 변수에 저장합니다. 복합 대입 연산자는 연산과 대입을 동시에 수행합니다: +=, -=, *=, /=, %=.',
          '예를 들어, x += 5는 x = x + 5와 동일합니다. 복합 대입 연산자를 사용하면 코드를 더 간결하게 작성할 수 있습니다. 증감 연산자 ++와 --도 자주 사용되며, 변수의 값을 1만큼 증가 또는 감소시킵니다.'
        ],
        textEn: [
          'The assignment operator (=) stores the right-hand value into the left-hand variable. Compound assignment operators perform an operation and assignment together: +=, -=, *=, /=, %=.',
          'For example, x += 5 is equivalent to x = x + 5. Compound assignment operators make code more concise. The increment (++) and decrement (--) operators are also commonly used to increase or decrease a variable by 1.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int x = 10;\n    printf("x = %d\\n", x);\n\n    x += 5;\n    printf("x += 5 -> %d\\n", x);\n\n    x -= 3;\n    printf("x -= 3 -> %d\\n", x);\n\n    x *= 2;\n    printf("x *= 2 -> %d\\n", x);\n\n    x /= 4;\n    printf("x /= 4 -> %d\\n", x);\n\n    x %= 3;\n    printf("x %%= 3 -> %d\\n", x);\n\n    x++;\n    printf("x++ -> %d\\n", x);\n\n    x--;\n    printf("x-- -> %d\\n", x);\n    return 0;\n}',
        expectedOutput: 'x = 10\nx += 5 -> 15\nx -= 3 -> 12\nx *= 2 -> 24\nx /= 4 -> 6\nx %= 3 -> 0\nx++ -> 1\nx-- -> 0'
      },
      {
        heading: '연산자 우선순위',
        headingEn: 'Operator Precedence',
        text: [
          '연산자 우선순위는 여러 연산자가 있는 식에서 어떤 연산이 먼저 수행되는지를 결정합니다. 수학과 마찬가지로, 곱셈(*)과 나눗셈(/)이 덧셈(+)과 뺄셈(-)보다 먼저 수행됩니다.',
          '괄호 ()를 사용하면 우선순위를 명시적으로 지정할 수 있습니다. 복잡한 수식에서는 괄호를 적극적으로 사용하여 의도를 명확히 하는 것이 좋습니다. 비교 연산자는 산술 연산자보다 우선순위가 낮고, 논리 연산자는 비교 연산자보다 낮습니다.'
        ],
        textEn: [
          'Operator precedence determines the order of operations in expressions with multiple operators. Just like in math, multiplication (*) and division (/) are performed before addition (+) and subtraction (-).',
          'Parentheses () can explicitly specify precedence. Use parentheses actively in complex expressions to make your intent clear. Comparison operators have lower precedence than arithmetic, and logical operators have lower precedence than comparison.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int result1 = 2 + 3 * 4;\n    int result2 = (2 + 3) * 4;\n    printf("2 + 3 * 4 = %d\\n", result1);\n    printf("(2 + 3) * 4 = %d\\n", result2);\n\n    int result3 = 10 - 2 * 3 + 1;\n    int result4 = (10 - 2) * (3 + 1);\n    printf("10 - 2 * 3 + 1 = %d\\n", result3);\n    printf("(10 - 2) * (3 + 1) = %d\\n", result4);\n\n    int result5 = 20 / 4 + 3 % 2;\n    printf("20 / 4 + 3 %% 2 = %d\\n", result5);\n    return 0;\n}',
        expectedOutput: '2 + 3 * 4 = 14\n(2 + 3) * 4 = 20\n10 - 2 * 3 + 1 = 5\n(10 - 2) * (3 + 1) = 32\n20 / 4 + 3 % 2 = 6',
        tip: '헷갈릴 때는 항상 괄호를 사용하세요! 코드 가독성도 좋아지고 버그도 예방할 수 있습니다.',
        tipEn: 'When in doubt, always use parentheses! It improves code readability and prevents bugs.'
      }
    ]
  },

  'input-output': {
    sections: [
      {
        heading: 'printf 서식 지정',
        headingEn: 'printf Formatting',
        text: [
          'printf()는 서식 지정자(format specifier)를 사용하여 변수의 값을 형식에 맞게 출력합니다. 주요 서식 지정자: %d(정수), %f(실수), %c(문자), %s(문자열).',
          '숫자 앞에 폭(width)을 지정하면 최소 출력 너비를 설정할 수 있고, 실수는 .뒤에 자릿수를 지정하여 소수점 이하 자릿수를 제어합니다. 예: %8d는 최소 8자리로 오른쪽 정렬, %.2f는 소수점 둘째 자리까지 출력합니다.'
        ],
        textEn: [
          'printf() uses format specifiers to print variable values in a specific format. Key specifiers: %d (integer), %f (float), %c (character), %s (string).',
          'Specifying a width before the specifier sets the minimum output width. For floats, the precision after the dot controls decimal places. For example: %8d right-aligns in 8 characters, %.2f prints 2 decimal places.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int num = 42;\n    float pi = 3.14159f;\n    char ch = \'X\';\n\n    printf("Integer: %d\\n", num);\n    printf("Float:   %f\\n", pi);\n    printf("2 decimals: %.2f\\n", pi);\n    printf("Char: %c\\n", ch);\n    printf("String: %s\\n", "Hello");\n\n    printf("Width 8: [%8d]\\n", num);\n    printf("Left:    [%-8d]\\n", num);\n    printf("Padded:  [%05d]\\n", num);\n    return 0;\n}',
        expectedOutput: 'Integer: 42\nFloat:   3.141590\n2 decimals: 3.14\nChar: X\nString: Hello\nWidth 8: [      42]\nLeft:    [42      ]\nPadded:  [00042]'
      },
      {
        heading: '이스케이프 문자',
        headingEn: 'Escape Characters',
        text: [
          '이스케이프 문자(escape character)는 백슬래시(\\)로 시작하는 특수 문자입니다. 화면에 직접 입력할 수 없는 문자를 표현하는 데 사용됩니다.',
          '자주 사용되는 이스케이프 문자: \\n(줄바꿈), \\t(탭), \\\\(백슬래시 자체), \\"(큰따옴표), \\\'(작은따옴표). 이들은 문자열 안에서 특별한 의미를 가집니다.'
        ],
        textEn: [
          'Escape characters begin with a backslash (\\) and represent special characters that cannot be typed directly. They are used to insert non-printable characters into strings.',
          'Common escape characters: \\n (newline), \\t (tab), \\\\ (backslash itself), \\" (double quote), \\\' (single quote). These have special meanings within strings.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    printf("Line1\\nLine2\\nLine3\\n");\n    printf("\\n");\n    printf("Col1\\tCol2\\tCol3\\n");\n    printf("10\\t20\\t30\\n");\n    printf("\\n");\n    printf("She said \\\"Hello!\\\"\\n");\n    printf("Path: C:\\\\Users\\\\file.txt\\n");\n    return 0;\n}',
        expectedOutput: 'Line1\nLine2\nLine3\n\nCol1\tCol2\tCol3\n10\t20\t30\n\nShe said "Hello!"\nPath: C:\\Users\\file.txt'
      },
      {
        heading: '서식 지정자 활용',
        headingEn: 'Format Specifiers Practice',
        text: [
          '서식 지정자를 활용하면 깔끔하게 정렬된 출력을 만들 수 있습니다. 표(table) 형태의 출력에서 특히 유용합니다.',
          '%-Ns는 문자열을 N자리에서 왼쪽 정렬하고, %Nd는 숫자를 N자리에서 오른쪽 정렬합니다. 이를 조합하면 보기 좋은 표를 만들 수 있습니다.'
        ],
        textEn: [
          'Using format specifiers, you can create neatly aligned output. This is especially useful for table-like displays.',
          '%-Ns left-aligns a string in N characters, and %Nd right-aligns a number in N characters. Combining these creates clean, readable tables.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    printf("%-12s %5s %8s\\n", "Item", "Qty", "Price");\n    printf("%-12s %5s %8s\\n", "----", "---", "-----");\n    printf("%-12s %5d %8.2f\\n", "Apple", 3, 1.50);\n    printf("%-12s %5d %8.2f\\n", "Banana", 12, 0.75);\n    printf("%-12s %5d %8.2f\\n", "Cherry", 50, 3.20);\n    return 0;\n}',
        expectedOutput: 'Item           Qty    Price\n----           ---    -----\nApple            3     1.50\nBanana          12     0.75\nCherry          50     3.20',
        tip: 'scanf()는 브라우저 컴파일러에서 지원되지 않습니다. 이 튜토리얼에서는 printf()를 중심으로 학습합니다.',
        tipEn: 'scanf() is not supported in the browser compiler. This tutorial focuses on printf() for learning.'
      }
    ]
  },

  'conditionals': {
    sections: [
      {
        heading: 'if / else if / else',
        headingEn: 'if / else if / else',
        text: [
          '조건문은 특정 조건에 따라 다른 코드를 실행할 수 있게 합니다. if 문은 조건이 참(0이 아닌 값)이면 해당 블록을 실행합니다.',
          'else if는 이전 조건이 거짓일 때 새로운 조건을 검사합니다. else는 모든 조건이 거짓일 때 실행됩니다. 조건은 위에서 아래로 순서대로 검사되며, 참인 조건을 만나면 나머지는 건너뜁니다.'
        ],
        textEn: [
          'Conditional statements allow you to execute different code based on certain conditions. An if statement executes its block when the condition is true (non-zero value).',
          'else if checks a new condition when the previous ones are false. else executes when all conditions are false. Conditions are checked top to bottom, and once a true condition is found, the rest are skipped.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int score = 85;\n\n    if (score >= 90) {\n        printf("Grade: A\\n");\n    } else if (score >= 80) {\n        printf("Grade: B\\n");\n    } else if (score >= 70) {\n        printf("Grade: C\\n");\n    } else if (score >= 60) {\n        printf("Grade: D\\n");\n    } else {\n        printf("Grade: F\\n");\n    }\n\n    int num = -3;\n    if (num > 0) {\n        printf("%d is positive\\n", num);\n    } else if (num < 0) {\n        printf("%d is negative\\n", num);\n    } else {\n        printf("%d is zero\\n", num);\n    }\n    return 0;\n}',
        expectedOutput: 'Grade: B\n-3 is negative'
      },
      {
        heading: 'switch-case 문',
        headingEn: 'switch-case Statement',
        text: [
          'switch 문은 하나의 변수 값에 따라 여러 경우(case) 중 하나를 실행합니다. if-else if 체인이 길어질 때 더 깔끔한 대안이 됩니다.',
          '각 case 끝에 break;를 넣어야 합니다. break가 없으면 다음 case로 떨어져(fall-through) 계속 실행됩니다. default는 어떤 case에도 해당하지 않을 때 실행됩니다.'
        ],
        textEn: [
          'The switch statement selects one of many code blocks based on the value of a variable. It is a cleaner alternative when you have a long chain of if-else if statements.',
          'Each case must end with break;. Without break, execution falls through to the next case. The default case runs when no other case matches.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int day = 3;\n\n    switch (day) {\n        case 1:\n            printf("Monday\\n");\n            break;\n        case 2:\n            printf("Tuesday\\n");\n            break;\n        case 3:\n            printf("Wednesday\\n");\n            break;\n        case 4:\n            printf("Thursday\\n");\n            break;\n        case 5:\n            printf("Friday\\n");\n            break;\n        default:\n            printf("Weekend\\n");\n            break;\n    }\n    return 0;\n}',
        expectedOutput: 'Wednesday'
      },
      {
        heading: '삼항 연산자',
        headingEn: 'Ternary Operator',
        text: [
          '삼항 연산자(? :)는 간단한 if-else를 한 줄로 작성할 수 있는 연산자입니다. 형식: 조건 ? 참일 때 값 : 거짓일 때 값.',
          '삼항 연산자는 변수에 조건부 값을 할당하거나, 간단한 출력을 할 때 유용합니다. 하지만 복잡한 조건에서는 가독성이 떨어질 수 있으므로 일반 if-else를 사용하는 것이 좋습니다.'
        ],
        textEn: [
          'The ternary operator (? :) lets you write a simple if-else in a single line. Format: condition ? value_if_true : value_if_false.',
          'The ternary operator is useful for assigning conditional values or simple output. However, for complex conditions, regular if-else statements are more readable.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int age = 20;\n    int num = -7;\n\n    printf("%s\\n", (age >= 18) ? "Adult" : "Minor");\n\n    int abs_val = (num < 0) ? -num : num;\n    printf("Absolute value of %d is %d\\n", num, abs_val);\n\n    int a = 15;\n    int b = 23;\n    int max = (a > b) ? a : b;\n    printf("Max of %d and %d is %d\\n", a, b, max);\n    return 0;\n}',
        expectedOutput: 'Adult\nAbsolute value of -7 is 7\nMax of 15 and 23 is 23'
      },
      {
        heading: '조건문 실습: 성적 계산기',
        headingEn: 'Practice: Grade Calculator',
        text: [
          '지금까지 배운 조건문을 활용하여 좀 더 복잡한 프로그램을 만들어 봅시다. 점수에 따라 등급을 계산하고, 합격/불합격 여부도 판단하는 프로그램입니다.',
          'if-else 문과 논리 연산자(&&)를 함께 사용하면 더 정교한 조건 검사를 할 수 있습니다.'
        ],
        textEn: [
          'Let\'s use the conditional statements we have learned to create a more complex program. This program calculates a grade from a score and determines pass/fail status.',
          'Combining if-else with logical operators (&&) allows more sophisticated condition checking.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int korean = 85;\n    int math = 92;\n    int english = 78;\n    int total = korean + math + english;\n    int average = total / 3;\n\n    printf("Korean:  %d\\n", korean);\n    printf("Math:    %d\\n", math);\n    printf("English: %d\\n", english);\n    printf("Total:   %d\\n", total);\n    printf("Average: %d\\n", average);\n\n    char grade;\n    if (average >= 90) {\n        grade = \'A\';\n    } else if (average >= 80) {\n        grade = \'B\';\n    } else if (average >= 70) {\n        grade = \'C\';\n    } else {\n        grade = \'F\';\n    }\n    printf("Grade:   %c\\n", grade);\n    printf("Result:  %s\\n", (average >= 60) ? "PASS" : "FAIL");\n    return 0;\n}',
        expectedOutput: 'Korean:  85\nMath:    92\nEnglish: 78\nTotal:   255\nAverage: 85\nGrade:   B\nResult:  PASS'
      }
    ]
  },

  'loops': {
    sections: [
      {
        heading: 'for 루프',
        headingEn: 'for Loop',
        text: [
          'for 루프는 반복 횟수가 정해져 있을 때 가장 많이 사용됩니다. 형식: for(초기식; 조건식; 증감식) { 반복할 코드 }. 초기식은 한 번만 실행되고, 조건식이 참인 동안 코드를 반복하며, 매 반복 후 증감식이 실행됩니다.',
          'for 루프의 세 부분(초기식, 조건식, 증감식)을 한눈에 볼 수 있어 반복의 흐름을 이해하기 쉽습니다. 카운팅, 합계 계산 등에 주로 사용됩니다.'
        ],
        textEn: [
          'The for loop is most commonly used when the number of iterations is known. Format: for(init; condition; update) { code }. The init runs once, the code repeats while condition is true, and update runs after each iteration.',
          'All three parts (init, condition, update) are visible at once, making the loop flow easy to understand. It is commonly used for counting and calculating sums.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int i;\n    for (i = 1; i <= 5; i++) {\n        printf("%d ", i);\n    }\n    printf("\\n");\n\n    int sum = 0;\n    for (i = 1; i <= 10; i++) {\n        sum += i;\n    }\n    printf("Sum of 1 to 10 = %d\\n", sum);\n\n    for (i = 2; i <= 10; i += 2) {\n        printf("%d ", i);\n    }\n    printf("\\n");\n    return 0;\n}',
        expectedOutput: '1 2 3 4 5 \nSum of 1 to 10 = 55\n2 4 6 8 10 '
      },
      {
        heading: 'while과 do-while',
        headingEn: 'while and do-while',
        text: [
          'while 루프는 조건이 참인 동안 코드를 반복합니다. for 루프와 달리 반복 횟수가 명확하지 않을 때 유용합니다. 조건을 먼저 검사하므로, 처음부터 조건이 거짓이면 한 번도 실행되지 않습니다.',
          'do-while 루프는 코드를 먼저 실행한 후 조건을 검사합니다. 따라서 최소 한 번은 반드시 실행됩니다. do { 코드 } while(조건); 형태이며, while 뒤에 세미콜론(;)을 반드시 붙여야 합니다.'
        ],
        textEn: [
          'The while loop repeats code as long as the condition is true. Unlike for, it is useful when the number of iterations is unclear. Since the condition is checked first, the code may never execute if the condition is initially false.',
          'The do-while loop executes the code first, then checks the condition. It always executes at least once. Format: do { code } while(condition); Note the required semicolon after while.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int num = 12345;\n    int digits = 0;\n\n    int temp = num;\n    while (temp > 0) {\n        digits++;\n        temp /= 10;\n    }\n    printf("%d has %d digits\\n", num, digits);\n\n    int count = 1;\n    do {\n        printf("count = %d\\n", count);\n        count++;\n    } while (count <= 3);\n    return 0;\n}',
        expectedOutput: '12345 has 5 digits\ncount = 1\ncount = 2\ncount = 3'
      },
      {
        heading: 'break와 continue',
        headingEn: 'break and continue',
        text: [
          'break 문은 루프를 즉시 종료합니다. 특정 조건을 만족하면 더 이상 반복할 필요가 없을 때 사용합니다. break는 가장 가까운 루프 하나만 종료합니다.',
          'continue 문은 현재 반복의 나머지 코드를 건너뛰고 다음 반복으로 넘어갑니다. 특정 조건에서 일부 처리를 건너뛸 때 유용합니다.'
        ],
        textEn: [
          'The break statement exits a loop immediately. Use it when you no longer need to continue looping after meeting a certain condition. break only exits the innermost loop.',
          'The continue statement skips the rest of the current iteration and moves to the next one. It is useful for skipping processing under certain conditions.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int i;\n    printf("Break example:\\n");\n    for (i = 1; i <= 10; i++) {\n        if (i == 6) {\n            break;\n        }\n        printf("%d ", i);\n    }\n    printf("\\n");\n\n    printf("Continue example:\\n");\n    for (i = 1; i <= 10; i++) {\n        if (i % 3 == 0) {\n            continue;\n        }\n        printf("%d ", i);\n    }\n    printf("\\n");\n    return 0;\n}',
        expectedOutput: 'Break example:\n1 2 3 4 5 \nContinue example:\n1 2 4 5 7 8 10 '
      },
      {
        heading: '중첩 반복문',
        headingEn: 'Nested Loops',
        text: [
          '중첩 반복문(nested loop)은 루프 안에 또 다른 루프를 넣는 것입니다. 바깥 루프가 한 번 반복될 때마다 안쪽 루프가 전체를 실행합니다.',
          '2차원 패턴을 만들거나, 구구단처럼 행과 열이 있는 데이터를 처리할 때 유용합니다. 중첩 루프의 총 반복 횟수는 바깥 루프 횟수 x 안쪽 루프 횟수입니다.'
        ],
        textEn: [
          'A nested loop places a loop inside another loop. Each time the outer loop iterates once, the inner loop runs completely.',
          'Useful for creating 2D patterns or processing row-and-column data like multiplication tables. Total iterations = outer count x inner count.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int i;\n    int j;\n    for (i = 1; i <= 4; i++) {\n        for (j = 1; j <= i; j++) {\n            printf("* ");\n        }\n        printf("\\n");\n    }\n\n    printf("\\n");\n\n    for (i = 2; i <= 5; i++) {\n        printf("%d x table: ", i);\n        for (j = 1; j <= 3; j++) {\n            printf("%d*%d=%d ", i, j, i * j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
        expectedOutput: '* \n* * \n* * * \n* * * * \n\n2 x table: 2*1=2 2*2=4 2*3=6 \n3 x table: 3*1=3 3*2=6 3*3=9 \n4 x table: 4*1=4 4*2=8 4*3=12 \n5 x table: 5*1=5 5*2=10 5*3=15 '
      }
    ]
  },

  'arrays': {
    sections: [
      {
        heading: '1차원 배열',
        headingEn: '1D Arrays',
        text: [
          '배열(array)은 같은 자료형의 여러 값을 하나의 변수로 관리할 수 있는 자료구조입니다. 선언할 때 크기를 지정하며, 인덱스는 0부터 시작합니다.',
          '배열 초기화는 중괄호 {}를 사용합니다. 개별 원소에는 배열이름[인덱스]로 접근합니다. 배열의 크기를 넘어서 접근하면 예측할 수 없는 결과가 발생하므로 주의해야 합니다.'
        ],
        textEn: [
          'An array is a data structure that stores multiple values of the same type under a single variable name. You specify the size when declaring, and indices start from 0.',
          'Arrays are initialized using curly braces {}. Individual elements are accessed with arrayName[index]. Accessing beyond the array bounds leads to unpredictable behavior, so be careful.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int numbers[5] = {10, 20, 30, 40, 50};\n    int i;\n\n    printf("Element at index 0: %d\\n", numbers[0]);\n    printf("Element at index 3: %d\\n", numbers[3]);\n\n    numbers[2] = 99;\n    printf("After modification:\\n");\n    for (i = 0; i < 5; i++) {\n        printf("numbers[%d] = %d\\n", i, numbers[i]);\n    }\n    return 0;\n}',
        expectedOutput: 'Element at index 0: 10\nElement at index 3: 40\nAfter modification:\nnumbers[0] = 10\nnumbers[1] = 20\nnumbers[2] = 99\nnumbers[3] = 40\nnumbers[4] = 50'
      },
      {
        heading: '배열 순회와 연산',
        headingEn: 'Array Traversal & Operations',
        text: [
          '배열의 모든 요소를 방문하는 것을 순회(traversal)라고 합니다. for 루프를 사용하여 배열의 합계, 평균, 최솟값, 최댓값 등을 계산할 수 있습니다.',
          '배열의 크기를 sizeof(배열) / sizeof(배열[0])으로 계산하면 요소의 개수를 구할 수 있습니다. 이를 통해 배열 크기가 변경되더라도 코드를 수정할 필요가 없습니다.'
        ],
        textEn: [
          'Visiting every element of an array is called traversal. Using a for loop, you can calculate the sum, average, minimum, and maximum of an array.',
          'You can find the number of elements with sizeof(array) / sizeof(array[0]). This way, your code adapts automatically if the array size changes.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int data[6] = {45, 12, 78, 34, 91, 23};\n    int size = (int)sizeof(data) / (int)sizeof(data[0]);\n    int i;\n\n    int sum = 0;\n    int min = data[0];\n    int max = data[0];\n\n    for (i = 0; i < size; i++) {\n        sum += data[i];\n        if (data[i] < min) min = data[i];\n        if (data[i] > max) max = data[i];\n    }\n\n    printf("Array: ");\n    for (i = 0; i < size; i++) {\n        printf("%d ", data[i]);\n    }\n    printf("\\n");\n    printf("Sum: %d\\n", sum);\n    printf("Avg: %d\\n", sum / size);\n    printf("Min: %d\\n", min);\n    printf("Max: %d\\n", max);\n    return 0;\n}',
        expectedOutput: 'Array: 45 12 78 34 91 23 \nSum: 283\nAvg: 47\nMin: 12\nMax: 91'
      },
      {
        heading: '2차원 배열',
        headingEn: '2D Arrays',
        text: [
          '2차원 배열은 행(row)과 열(column)로 구성된 표(table) 형태의 데이터를 저장합니다. 선언: 자료형 이름[행][열]. 접근: 이름[행인덱스][열인덱스].',
          '2차원 배열을 순회하려면 중첩 for 루프를 사용합니다. 바깥 루프는 행을, 안쪽 루프는 열을 순회합니다. 행렬(matrix) 연산이나 게임 보드 등에 활용됩니다.'
        ],
        textEn: [
          '2D arrays store data in a table format with rows and columns. Declaration: type name[rows][cols]. Access: name[rowIndex][colIndex].',
          'To traverse a 2D array, use nested for loops. The outer loop iterates over rows and the inner loop over columns. Used for matrix operations, game boards, etc.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    int i;\n    int j;\n\n    printf("Matrix:\\n");\n    for (i = 0; i < 3; i++) {\n        for (j = 0; j < 3; j++) {\n            printf("%d ", matrix[i][j]);\n        }\n        printf("\\n");\n    }\n\n    int sum = 0;\n    for (i = 0; i < 3; i++) {\n        sum += matrix[i][i];\n    }\n    printf("Diagonal sum: %d\\n", sum);\n    return 0;\n}',
        expectedOutput: 'Matrix:\n1 2 3 \n4 5 6 \n7 8 9 \nDiagonal sum: 15'
      },
      {
        heading: '배열 정렬: 버블 정렬',
        headingEn: 'Array Sorting: Bubble Sort',
        text: [
          '버블 정렬(Bubble Sort)은 가장 간단한 정렬 알고리즘입니다. 인접한 두 요소를 비교하여 순서가 잘못되어 있으면 교환합니다. 이 과정을 배열이 정렬될 때까지 반복합니다.',
          '각 반복(pass)에서 가장 큰 값이 끝으로 "떠오르기(bubble up)" 때문에 버블 정렬이라 부릅니다. 시간 복잡도는 O(n^2)으로 효율적이지는 않지만, 알고리즘의 기초를 이해하는 데 좋습니다.'
        ],
        textEn: [
          'Bubble Sort is the simplest sorting algorithm. It compares adjacent elements and swaps them if they are in the wrong order. This process repeats until the array is sorted.',
          'In each pass, the largest value "bubbles up" to the end, hence the name. Its time complexity is O(n^2), which is not efficient, but it is great for understanding algorithm basics.'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    int arr[5] = {64, 25, 12, 22, 11};\n    int n = 5;\n    int i;\n    int j;\n    int temp;\n\n    printf("Before: ");\n    for (i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n\n    for (i = 0; i < n - 1; i++) {\n        for (j = 0; j < n - 1 - i; j++) {\n            if (arr[j] > arr[j + 1]) {\n                temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n\n    printf("After:  ");\n    for (i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
        expectedOutput: 'Before: 64 25 12 22 11 \nAfter:  11 12 22 25 64 ',
        tip: '버블 정렬은 학습용으로 좋지만, 실무에서는 더 효율적인 정렬 알고리즘(퀵 정렬, 병합 정렬 등)을 사용합니다.',
        tipEn: 'Bubble Sort is great for learning, but in practice, more efficient algorithms (Quick Sort, Merge Sort, etc.) are used.'
      }
    ]
  },

  'strings-basic': {
    sections: [
      {
        heading: '문자열이란?',
        headingEn: 'What is a String?',
        text: [
          'C에서 문자열(string)은 문자(char) 배열로, 끝에 널 문자(\\0)가 자동으로 추가됩니다. 예를 들어, "Hello"는 \'H\', \'e\', \'l\', \'l\', \'o\', \'\\0\' 으로 총 6바이트를 차지합니다.',
          '문자열을 선언하는 방법은 두 가지입니다: char str[] = "Hello"; 또는 char str[6] = "Hello";. 배열 크기를 지정할 때는 널 문자를 위한 공간(+1)을 반드시 확보해야 합니다.'
        ],
        textEn: [
          'In C, a string is an array of characters (char) with a null terminator (\\0) automatically appended at the end. For example, "Hello" consists of \'H\', \'e\', \'l\', \'l\', \'o\', \'\\0\', occupying 6 bytes total.',
          'There are two ways to declare strings: char str[] = "Hello"; or char str[6] = "Hello";. When specifying the array size, always reserve space for the null terminator (+1).'
        ],
        code: '#include <stdio.h>\n\nint main() {\n    char greeting[] = "Hello";\n    printf("String: %s\\n", greeting);\n    printf("Length (manual count):\\n");\n\n    int i = 0;\n    while (greeting[i] != \'\\0\') {\n        printf("  greeting[%d] = \'%c\'\\n", i, greeting[i]);\n        i++;\n    }\n    printf("Total characters: %d\\n", i);\n    printf("Array size: %d bytes\\n", (int)sizeof(greeting));\n    return 0;\n}',
        expectedOutput: 'String: Hello\nLength (manual count):\n  greeting[0] = \'H\'\n  greeting[1] = \'e\'\n  greeting[2] = \'l\'\n  greeting[3] = \'l\'\n  greeting[4] = \'o\'\nTotal characters: 5\nArray size: 6 bytes'
      },
      {
        heading: 'string.h 함수',
        headingEn: 'string.h Functions',
        text: [
          'string.h 헤더 파일에는 문자열을 다루는 유용한 함수들이 있습니다. strlen()은 문자열의 길이(널 문자 제외)를 반환하고, strcpy()는 문자열을 복사합니다.',
          'strcmp()는 두 문자열을 비교하여, 같으면 0, 첫 번째가 크면 양수, 작으면 음수를 반환합니다. strcat()은 문자열을 이어 붙입니다(concatenation). 대상 배열에 충분한 공간이 있어야 합니다.'
        ],
        textEn: [
          'The string.h header provides useful string functions. strlen() returns the length (excluding null terminator), and strcpy() copies a string.',
          'strcmp() compares two strings: returns 0 if equal, positive if the first is greater, negative if smaller. strcat() concatenates strings. The destination array must have enough space.'
        ],
        code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str1[20] = "Hello";\n    char str2[20] = "World";\n    char str3[20];\n\n    printf("str1: %s (length: %d)\\n", str1, (int)strlen(str1));\n    printf("str2: %s (length: %d)\\n", str2, (int)strlen(str2));\n\n    strcpy(str3, str1);\n    printf("After strcpy: str3 = %s\\n", str3);\n\n    int cmp = strcmp(str1, str2);\n    if (cmp < 0) {\n        printf("strcmp: \\\"%s\\\" comes before \\\"%s\\\"\\n", str1, str2);\n    } else if (cmp > 0) {\n        printf("strcmp: \\\"%s\\\" comes after \\\"%s\\\"\\n", str1, str2);\n    } else {\n        printf("strcmp: strings are equal\\n");\n    }\n\n    strcat(str1, " ");\n    strcat(str1, str2);\n    printf("After strcat: str1 = %s\\n", str1);\n    return 0;\n}',
        expectedOutput: 'str1: Hello (length: 5)\nstr2: World (length: 5)\nAfter strcpy: str3 = Hello\nstrcmp: "Hello" comes before "World"\nAfter strcat: str1 = Hello World'
      },
      {
        heading: '문자 함수 (ctype.h)',
        headingEn: 'Character Functions (ctype.h)',
        text: [
          'ctype.h 헤더에는 개별 문자를 검사하거나 변환하는 함수가 있습니다. toupper()는 소문자를 대문자로, tolower()는 대문자를 소문자로 변환합니다.',
          'isdigit()은 문자가 숫자(\'0\'~\'9\')인지, isalpha()는 알파벳인지 검사합니다. 이 함수들은 문자 하나에 대해 작동하며, 문자열 전체를 처리하려면 루프와 함께 사용합니다.'
        ],
        textEn: [
          'The ctype.h header provides functions for testing and converting individual characters. toupper() converts lowercase to uppercase, tolower() converts uppercase to lowercase.',
          'isdigit() checks if a character is a digit (\'0\'-\'9\'), isalpha() checks if it is a letter. These functions work on single characters; use a loop to process entire strings.'
        ],
        code: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char text[] = "Hello World 123";\n    int i;\n    int letters = 0;\n    int digits = 0;\n    int spaces = 0;\n\n    printf("Original: %s\\n", text);\n\n    printf("Uppercase: ");\n    for (i = 0; text[i] != \'\\0\'; i++) {\n        printf("%c", toupper(text[i]));\n        if (isalpha(text[i])) letters++;\n        if (isdigit(text[i])) digits++;\n        if (text[i] == \' \') spaces++;\n    }\n    printf("\\n");\n\n    printf("Letters: %d\\n", letters);\n    printf("Digits: %d\\n", digits);\n    printf("Spaces: %d\\n", spaces);\n    return 0;\n}',
        expectedOutput: 'Original: Hello World 123\nUppercase: HELLO WORLD 123\nLetters: 10\nDigits: 3\nSpaces: 2'
      },
      {
        heading: '문자열 실습: 문자열 뒤집기',
        headingEn: 'String Practice: Reverse a String',
        text: [
          '문자열 뒤집기는 프로그래밍에서 자주 등장하는 연습 문제입니다. 배열의 양 끝에서 시작하여 중앙으로 이동하면서 문자를 교환하는 방식으로 구현할 수 있습니다.',
          '이 알고리즘은 문자열 길이의 절반만 반복하면 되므로 효율적입니다. 임시 변수(temp)를 사용하여 두 문자의 값을 교환합니다.'
        ],
        textEn: [
          'Reversing a string is a common programming exercise. It can be implemented by starting from both ends of the array and swapping characters while moving toward the center.',
          'This algorithm only needs to iterate through half the string length, making it efficient. A temporary variable (temp) is used to swap two character values.'
        ],
        code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Programming";\n    int len = (int)strlen(str);\n    int i;\n    char temp;\n\n    printf("Original: %s\\n", str);\n\n    for (i = 0; i < len / 2; i++) {\n        temp = str[i];\n        str[i] = str[len - 1 - i];\n        str[len - 1 - i] = temp;\n    }\n\n    printf("Reversed: %s\\n", str);\n    return 0;\n}',
        expectedOutput: 'Original: Programming\nReversed: gnimmargorP',
        tip: '문자열은 배열이므로 개별 문자를 인덱스로 접근하여 수정할 수 있습니다. 단, 문자열 리터럴(예: char *s = "hello")은 수정할 수 없습니다.',
        tipEn: 'Since strings are arrays, you can access and modify individual characters by index. However, string literals (e.g., char *s = "hello") cannot be modified.'
      }
    ]
  },

  'functions-basic': {
    sections: [
      {
        heading: '함수 정의와 호출',
        headingEn: 'Function Definition & Calling',
        text: [
          '함수(function)는 특정 작업을 수행하는 코드 블록입니다. 코드를 재사용하고, 프로그램을 논리적 단위로 나누어 가독성을 높입니다. 함수는 반환 타입, 이름, 매개변수 목록, 본문으로 구성됩니다.',
          'void 반환 타입은 함수가 값을 반환하지 않음을 의미합니다. 함수를 호출하려면 함수 이름과 괄호를 사용하며, 필요한 인자(argument)를 전달합니다.'
        ],
        textEn: [
          'A function is a block of code that performs a specific task. Functions enable code reuse and divide programs into logical units for better readability. A function consists of a return type, name, parameter list, and body.',
          'A void return type means the function does not return a value. To call a function, use its name with parentheses and pass any required arguments.'
        ],
        code: '#include <stdio.h>\n\nvoid printLine() {\n    printf("--------------------\\n");\n}\n\nvoid greet(char name[]) {\n    printf("Hello, %s!\\n", name);\n}\n\nvoid printRepeat(char ch, int count) {\n    int i;\n    for (i = 0; i < count; i++) {\n        printf("%c", ch);\n    }\n    printf("\\n");\n}\n\nint main() {\n    printLine();\n    greet("Alice");\n    greet("Bob");\n    printLine();\n    printRepeat(\'*\', 10);\n    return 0;\n}',
        expectedOutput: '--------------------\nHello, Alice!\nHello, Bob!\n--------------------\n**********'
      },
      {
        heading: '매개변수와 반환값',
        headingEn: 'Parameters & Return Values',
        text: [
          '함수는 매개변수(parameter)를 통해 데이터를 전달받고, return 문을 통해 결과를 반환할 수 있습니다. C에서 함수 인자는 기본적으로 "값에 의한 전달(pass by value)"로, 원본 변수의 복사본이 전달됩니다.',
          '따라서 함수 안에서 매개변수를 변경해도 호출한 곳의 원래 변수는 변하지 않습니다. 반환값은 하나만 가능하며, return 문은 함수를 즉시 종료시킵니다.'
        ],
        textEn: [
          'Functions receive data through parameters and return results with the return statement. In C, arguments are passed by value by default, meaning a copy of the original variable is passed.',
          'Therefore, changing a parameter inside a function does not affect the original variable. Only one value can be returned, and return immediately exits the function.'
        ],
        code: '#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint max(int a, int b) {\n    if (a > b) {\n        return a;\n    }\n    return b;\n}\n\nfloat circleArea(float radius) {\n    return 3.14159f * radius * radius;\n}\n\nint isEven(int n) {\n    return n % 2 == 0;\n}\n\nint main() {\n    printf("add(3, 5) = %d\\n", add(3, 5));\n    printf("max(10, 7) = %d\\n", max(10, 7));\n    printf("circleArea(5.0) = %.2f\\n", circleArea(5.0f));\n    printf("isEven(4) = %d\\n", isEven(4));\n    printf("isEven(7) = %d\\n", isEven(7));\n    return 0;\n}',
        expectedOutput: 'add(3, 5) = 8\nmax(10, 7) = 10\ncircleArea(5.0) = 78.54\nisEven(4) = 1\nisEven(7) = 0'
      },
      {
        heading: '함수 프로토타입',
        headingEn: 'Function Prototypes',
        text: [
          '함수 프로토타입(prototype)은 함수의 선언부만 미리 작성하는 것입니다. 이를 통해 main() 함수 뒤에 함수 정의를 배치할 수 있어 코드 구조를 유연하게 관리할 수 있습니다.',
          '프로토타입은 반환 타입, 함수 이름, 매개변수 타입을 포함하며 세미콜론으로 끝납니다. 컴파일러는 프로토타입을 보고 함수 호출의 올바름을 미리 검사할 수 있습니다.'
        ],
        textEn: [
          'A function prototype is a forward declaration of a function. It allows you to place function definitions after main(), giving flexibility in code organization.',
          'A prototype includes the return type, function name, and parameter types, ending with a semicolon. The compiler uses prototypes to verify function calls before seeing the full definition.'
        ],
        code: '#include <stdio.h>\n\nint square(int n);\nint cube(int n);\nvoid printResult(int n);\n\nint main() {\n    printResult(3);\n    printResult(5);\n    return 0;\n}\n\nvoid printResult(int n) {\n    printf("Number: %d\\n", n);\n    printf("Square: %d\\n", square(n));\n    printf("Cube:   %d\\n", cube(n));\n    printf("\\n");\n}\n\nint square(int n) {\n    return n * n;\n}\n\nint cube(int n) {\n    return n * n * n;\n}',
        expectedOutput: 'Number: 3\nSquare: 9\nCube:   27\n\nNumber: 5\nSquare: 25\nCube:   125\n',
        tip: '큰 프로젝트에서는 헤더 파일(.h)에 프로토타입을 모아두고, 소스 파일(.c)에 구현을 작성하는 것이 일반적입니다.',
        tipEn: 'In large projects, it is common to put prototypes in header files (.h) and implementations in source files (.c).'
      },
      {
        heading: '재귀 함수 입문',
        headingEn: 'Introduction to Recursion',
        text: [
          '재귀 함수(recursive function)는 자기 자신을 호출하는 함수입니다. 큰 문제를 같은 구조의 작은 문제로 나누어 해결할 때 사용합니다. 가장 대표적인 예가 팩토리얼(n!) 계산입니다.',
          '재귀 함수에는 반드시 기저 조건(base case)이 있어야 합니다. 기저 조건 없이 자기 자신을 계속 호출하면 무한 재귀에 빠져 스택 오버플로가 발생합니다. 기저 조건에 도달하면 재귀 호출이 멈추고 결과가 역순으로 반환됩니다.'
        ],
        textEn: [
          'A recursive function is a function that calls itself. It is used when a large problem can be broken down into smaller problems of the same structure. The classic example is computing factorial (n!).',
          'A recursive function must have a base case. Without it, the function calls itself infinitely, causing a stack overflow. When the base case is reached, recursion stops and results are returned in reverse order.'
        ],
        code: '#include <stdio.h>\n\nint factorial(int n) {\n    if (n <= 1) {\n        return 1;\n    }\n    return n * factorial(n - 1);\n}\n\nint fibonacci(int n) {\n    if (n <= 0) {\n        return 0;\n    }\n    if (n == 1) {\n        return 1;\n    }\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\nint main() {\n    int i;\n    printf("Factorials:\\n");\n    for (i = 1; i <= 6; i++) {\n        printf("  %d! = %d\\n", i, factorial(i));\n    }\n\n    printf("Fibonacci sequence:\\n  ");\n    for (i = 0; i < 10; i++) {\n        printf("%d ", fibonacci(i));\n    }\n    printf("\\n");\n    return 0;\n}',
        expectedOutput: 'Factorials:\n  1! = 1\n  2! = 2\n  3! = 6\n  4! = 24\n  5! = 120\n  6! = 720\nFibonacci sequence:\n  0 1 1 2 3 5 8 13 21 34 ',
        warning: '재귀는 반복문으로도 구현할 수 있으며, 깊은 재귀는 성능 문제를 일으킬 수 있습니다. 피보나치의 경우 반복문이 훨씬 효율적입니다.',
        warningEn: 'Recursion can also be implemented with loops. Deep recursion may cause performance issues. For Fibonacci, iteration is much more efficient.'
      }
    ]
  }
};

export default basics;
