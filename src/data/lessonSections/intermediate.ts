const intermediate = {
  'pointers-basic': {
    sections: [
      {
        heading: '메모리 주소와 포인터',
        headingEn: 'Memory Addresses & Pointers',
        text: [
          '컴퓨터 메모리의 모든 변수는 고유한 주소를 가지고 있습니다. 포인터는 이 메모리 주소를 저장하는 특별한 변수입니다.',
          '& 연산자(주소 연산자)를 사용하면 변수의 메모리 주소를 얻을 수 있습니다. 포인터를 선언할 때는 자료형 뒤에 *를 붙입니다.',
          '예를 들어 int *ptr은 정수형 변수의 주소를 저장할 수 있는 포인터입니다.'
        ],
        textEn: [
          'Every variable in computer memory has a unique address. A pointer is a special variable that stores this memory address.',
          'The & operator (address-of operator) lets you obtain a variable\'s memory address. To declare a pointer, place * after the data type.',
          'For example, int *ptr is a pointer that can store the address of an integer variable.'
        ],
        code: '#include <stdio.h>\nint main() {\n    int x = 42;\n    int *ptr = &x;\n    printf("x = %d\\n", x);\n    printf("size of pointer: %d bytes\\n", (int)sizeof(ptr));\n    return 0;\n}',
        expectedOutput: 'x = 42\nsize of pointer: 4 bytes',
        tip: '포인터의 크기는 자료형에 관계없이 시스템에 따라 일정합니다 (32비트: 4바이트, 64비트: 8바이트).',
        tipEn: 'The size of a pointer is constant regardless of data type, depending on the system (32-bit: 4 bytes, 64-bit: 8 bytes).'
      },
      {
        heading: '역참조',
        headingEn: 'Dereferencing',
        text: [
          '역참조(dereference)란 포인터가 가리키는 주소에 저장된 값을 읽거나 수정하는 것을 말합니다.',
          '* 연산자(역참조 연산자)를 포인터 앞에 붙이면 해당 주소의 값에 접근할 수 있습니다. 이를 통해 원본 변수의 값을 간접적으로 변경할 수 있습니다.'
        ],
        textEn: [
          'Dereferencing means reading or modifying the value stored at the address a pointer points to.',
          'Placing the * operator (dereference operator) before a pointer accesses the value at that address. This allows you to indirectly change the original variable\'s value.'
        ],
        code: '#include <stdio.h>\nint main() {\n    int a = 10;\n    int *p = &a;\n    printf("Before: a = %d\\n", a);\n    *p = 25;\n    printf("After: a = %d\\n", a);\n    printf("Via pointer: %d\\n", *p);\n    return 0;\n}',
        expectedOutput: 'Before: a = 10\nAfter: a = 25\nVia pointer: 25',
        tip: '선언할 때의 *는 "포인터 변수"를 의미하고, 사용할 때의 *는 "역참조"를 의미합니다. 같은 기호지만 다른 뜻이니 주의하세요.',
        tipEn: 'The * in a declaration means "pointer variable," while * in usage means "dereference." Same symbol, different meanings — be careful.'
      },
      {
        heading: '포인터와 함수',
        headingEn: 'Pointers & Functions',
        text: [
          'C에서는 함수에 인자를 전달할 때 기본적으로 값이 복사됩니다(call by value). 함수 안에서 매개변수를 변경해도 원본에는 영향이 없습니다.',
          '포인터를 함수의 매개변수로 사용하면 변수의 주소를 전달하여 원본 값을 직접 수정할 수 있습니다. 이를 참조에 의한 전달(pass by reference)이라 합니다.',
          'swap 함수는 포인터를 이용한 대표적인 예제입니다.'
        ],
        textEn: [
          'In C, arguments are copied by default when passed to functions (call by value). Changing parameters inside the function does not affect the originals.',
          'Using pointers as function parameters passes the variable\'s address, allowing direct modification of the original value. This is called pass by reference.',
          'The swap function is a classic example using pointers.'
        ],
        code: '#include <stdio.h>\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\nint main() {\n    int x = 3, y = 7;\n    printf("Before: x=%d, y=%d\\n", x, y);\n    swap(&x, &y);\n    printf("After: x=%d, y=%d\\n", x, y);\n    return 0;\n}',
        expectedOutput: 'Before: x=3, y=7\nAfter: x=7, y=3'
      },
      {
        heading: 'NULL 포인터',
        headingEn: 'NULL Pointer',
        text: [
          'NULL 포인터는 아무것도 가리키지 않는 포인터입니다. 포인터를 초기화할 때 아직 가리킬 대상이 없다면 NULL로 설정하는 것이 좋습니다.',
          'NULL 포인터를 역참조하면 프로그램이 충돌하므로, 포인터를 사용하기 전에 반드시 NULL인지 확인해야 합니다.',
          '안전한 포인터 사용은 C 프로그래밍에서 가장 중요한 습관 중 하나입니다.'
        ],
        textEn: [
          'A NULL pointer is a pointer that points to nothing. When initializing a pointer with no target yet, it is good practice to set it to NULL.',
          'Dereferencing a NULL pointer causes a program crash, so you must always check if a pointer is NULL before using it.',
          'Safe pointer usage is one of the most important habits in C programming.'
        ],
        code: '#include <stdio.h>\nvoid printValue(int *ptr) {\n    if (ptr != 0) {\n        printf("Value: %d\\n", *ptr);\n    } else {\n        printf("Pointer is NULL!\\n");\n    }\n}\nint main() {\n    int a = 100;\n    int *p1 = &a;\n    int *p2 = 0;\n    printValue(p1);\n    printValue(p2);\n    return 0;\n}',
        expectedOutput: 'Value: 100\nPointer is NULL!',
        tip: 'JSCPP 환경에서는 NULL 대신 0을 사용합니다. 로컬 컴파일러에서는 NULL을 사용하세요.',
        tipEn: 'In the JSCPP environment, use 0 instead of NULL. Use NULL with a local compiler.'
      }
    ]
  },

  'pointers-advanced': {
    sections: [
      {
        heading: '포인터와 배열',
        headingEn: 'Pointers & Arrays',
        text: [
          '배열의 이름은 배열의 첫 번째 요소를 가리키는 포인터처럼 동작합니다. 즉, arr와 &arr[0]은 같은 주소를 나타냅니다.',
          '포인터를 사용하면 배열의 요소에 접근할 수 있으며, *(ptr + i)는 ptr[i]와 동일합니다.',
          '이러한 포인터와 배열의 관계를 이해하는 것은 C 프로그래밍의 핵심입니다.'
        ],
        textEn: [
          'An array name acts like a pointer to the first element of the array. That is, arr and &arr[0] represent the same address.',
          'You can access array elements using a pointer — *(ptr + i) is equivalent to ptr[i].',
          'Understanding the relationship between pointers and arrays is fundamental to C programming.'
        ],
        code: '#include <stdio.h>\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *ptr = arr;\n    int i;\n    printf("Using pointer arithmetic:\\n");\n    for (i = 0; i < 5; i++) {\n        printf("*(ptr+%d) = %d\\n", i, *(ptr + i));\n    }\n    return 0;\n}',
        expectedOutput: 'Using pointer arithmetic:\n*(ptr+0) = 10\n*(ptr+1) = 20\n*(ptr+2) = 30\n*(ptr+3) = 40\n*(ptr+4) = 50'
      },
      {
        heading: '포인터 연산',
        headingEn: 'Pointer Arithmetic',
        text: [
          '포인터에 정수를 더하거나 빼면 해당 자료형의 크기만큼 주소가 이동합니다. 예를 들어 int 포인터에 1을 더하면 4바이트(int 크기) 이동합니다.',
          '포인터 증가(++), 감소(--), 덧셈(ptr + n), 뺄셈(ptr - n) 등의 연산을 활용하면 배열을 효율적으로 순회할 수 있습니다.',
          '두 포인터 사이의 차이를 구하면 그 사이에 있는 요소의 개수를 알 수 있습니다.'
        ],
        textEn: [
          'Adding or subtracting an integer from a pointer moves the address by the size of the data type. For example, adding 1 to an int pointer moves 4 bytes (the size of int).',
          'Pointer increment (++), decrement (--), addition (ptr + n), and subtraction (ptr - n) allow efficient array traversal.',
          'The difference between two pointers gives the number of elements between them.'
        ],
        code: '#include <stdio.h>\nint main() {\n    int arr[] = {100, 200, 300, 400, 500};\n    int *start = arr;\n    int *end = arr + 4;\n    printf("First element: %d\\n", *start);\n    start++;\n    printf("After ++: %d\\n", *start);\n    start = start + 2;\n    printf("After +2: %d\\n", *start);\n    printf("Distance: %d elements\\n", (int)(end - arr));\n    return 0;\n}',
        expectedOutput: 'First element: 100\nAfter ++: 200\nAfter +2: 400\nDistance: 4 elements'
      },
      {
        heading: '이중 포인터',
        headingEn: 'Double Pointers',
        text: [
          '이중 포인터(pointer to pointer)는 포인터의 주소를 저장하는 포인터입니다. int **pp처럼 *를 두 번 사용하여 선언합니다.',
          '이중 포인터를 사용하면 함수 안에서 포인터 자체를 변경할 수 있으며, 2차원 배열을 동적으로 생성할 때도 활용됩니다.',
          '*pp는 p의 값(a의 주소)에 접근하고, **pp는 a의 값에 접근합니다.'
        ],
        textEn: [
          'A double pointer (pointer to pointer) stores the address of another pointer. It is declared using ** like int **pp.',
          'Double pointers allow you to change a pointer itself inside a function, and are also used to dynamically create 2D arrays.',
          '*pp accesses the value of p (the address of a), and **pp accesses the value of a.'
        ],
        code: '#include <stdio.h>\nint main() {\n    int a = 5;\n    int *p = &a;\n    int **pp = &p;\n    printf("a = %d\\n", a);\n    printf("*p = %d\\n", *p);\n    printf("**pp = %d\\n", **pp);\n    **pp = 99;\n    printf("After **pp = 99:\\n");\n    printf("a = %d\\n", a);\n    return 0;\n}',
        expectedOutput: 'a = 5\n*p = 5\n**pp = 5\nAfter **pp = 99:\na = 99'
      },
      {
        heading: '포인터 배열',
        headingEn: 'Pointer Arrays',
        text: [
          '포인터 배열은 포인터를 요소로 가지는 배열입니다. 특히 문자열 포인터 배열은 여러 문자열을 다룰 때 유용합니다.',
          '배열의 각 요소가 서로 다른 길이의 문자열을 가리킬 수 있어 메모리를 효율적으로 사용할 수 있습니다.',
          '포인터 배열은 명령줄 인자(argv) 등 실제 프로그래밍에서 자주 사용되는 패턴입니다.'
        ],
        textEn: [
          'A pointer array is an array whose elements are pointers. String pointer arrays are especially useful for handling multiple strings.',
          'Each element can point to strings of different lengths, enabling efficient memory usage.',
          'Pointer arrays are a frequently used pattern in real programming, such as command-line arguments (argv).'
        ],
        code: '#include <stdio.h>\nint main() {\n    char *fruits[] = {"Apple", "Banana", "Cherry", "Date"};\n    int count = 4;\n    int i;\n    printf("Fruit list:\\n");\n    for (i = 0; i < count; i++) {\n        printf("[%d] %s\\n", i, fruits[i]);\n    }\n    printf("First char of fruits[1]: %c\\n", fruits[1][0]);\n    return 0;\n}',
        expectedOutput: 'Fruit list:\n[0] Apple\n[1] Banana\n[2] Cherry\n[3] Date\nFirst char of fruits[1]: B',
        tip: '포인터 배열의 각 요소는 독립적인 문자열을 가리키므로, 문자열 길이가 제각각이어도 됩니다.',
        tipEn: 'Each element of a pointer array points to an independent string, so strings can have different lengths.'
      }
    ]
  },

  'dynamic-memory': {
    sections: [
      {
        heading: 'malloc과 free',
        headingEn: 'malloc & free',
        text: [
          '동적 메모리 할당은 프로그램 실행 중에 필요한 만큼의 메모리를 요청하고 사용하는 기술입니다.',
          'malloc() 함수는 지정한 바이트 수만큼 메모리를 할당하고, 그 시작 주소를 반환합니다. 할당에 실패하면 NULL을 반환합니다.',
          'free() 함수는 할당된 메모리를 운영체제에 반환합니다. 사용이 끝난 메모리는 반드시 free()로 해제해야 합니다.'
        ],
        textEn: [
          'Dynamic memory allocation is a technique that requests and uses the amount of memory needed during program execution.',
          'The malloc() function allocates the specified number of bytes and returns the starting address. It returns NULL if allocation fails.',
          'The free() function returns allocated memory to the operating system. Memory that is no longer needed must be released with free().'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int n = 5;\n    int *arr = (int *)malloc(n * sizeof(int));\n    int i;\n    if (arr == NULL) {\n        printf("Memory allocation failed!\\n");\n        return 1;\n    }\n    for (i = 0; i < n; i++) {\n        arr[i] = (i + 1) * 10;\n    }\n    printf("Dynamic array: ");\n    for (i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n    free(arr);\n    printf("Memory freed.\\n");\n    return 0;\n}',
        expectedOutput: 'Dynamic array: 10 20 30 40 50 \nMemory freed.',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: 'calloc과 realloc',
        headingEn: 'calloc & realloc',
        text: [
          'calloc()은 malloc()과 비슷하지만, 할당된 메모리를 0으로 초기화한다는 차이가 있습니다. calloc(개수, 크기) 형태로 사용합니다.',
          'realloc()은 이미 할당된 메모리의 크기를 변경합니다. 기존 데이터는 보존되며, 필요하면 새로운 위치로 복사됩니다.',
          'realloc()이 NULL을 반환할 수 있으므로, 원본 포인터를 잃지 않도록 임시 변수에 결과를 받는 것이 좋습니다.'
        ],
        textEn: [
          'calloc() is similar to malloc() but initializes the allocated memory to zero. It is used as calloc(count, size).',
          'realloc() changes the size of already allocated memory. Existing data is preserved and copied to a new location if needed.',
          'Since realloc() can return NULL, it is best to store the result in a temporary variable to avoid losing the original pointer.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int i;\n    int *arr = (int *)calloc(3, sizeof(int));\n    if (arr == NULL) return 1;\n    printf("calloc initialized: %d %d %d\\n", arr[0], arr[1], arr[2]);\n    arr[0] = 1;\n    arr[1] = 2;\n    arr[2] = 3;\n    int *temp = (int *)realloc(arr, 5 * sizeof(int));\n    if (temp == NULL) {\n        free(arr);\n        return 1;\n    }\n    arr = temp;\n    arr[3] = 4;\n    arr[4] = 5;\n    printf("After realloc: ");\n    for (i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n    free(arr);\n    return 0;\n}',
        expectedOutput: 'calloc initialized: 0 0 0\nAfter realloc: 1 2 3 4 5 ',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '메모리 누수 방지',
        headingEn: 'Preventing Leaks',
        text: [
          '메모리 누수(memory leak)는 할당한 메모리를 free()하지 않아 발생합니다. 프로그램이 오래 실행되면 사용 가능한 메모리가 점점 줄어듭니다.',
          '메모리 누수를 방지하려면: 1) malloc/calloc마다 반드시 대응하는 free()를 작성하고, 2) 함수가 종료되기 전에 할당한 메모리를 해제하며, 3) 포인터를 재할당하기 전에 기존 메모리를 해제합니다.',
          'Valgrind 같은 도구를 사용하면 메모리 누수를 쉽게 감지할 수 있습니다.'
        ],
        textEn: [
          'A memory leak occurs when allocated memory is never freed. If the program runs for a long time, available memory gradually decreases.',
          'To prevent memory leaks: 1) Always write a matching free() for every malloc/calloc, 2) Release memory before a function returns, 3) Free existing memory before reassigning a pointer.',
          'Tools like Valgrind make it easy to detect memory leaks.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\nchar *createGreeting(const char *name) {\n    char *msg = (char *)malloc(50 * sizeof(char));\n    if (msg == NULL) return NULL;\n    sprintf(msg, "Hello, %s!", name);\n    return msg;\n}\nint main() {\n    char *greeting = createGreeting("World");\n    if (greeting != NULL) {\n        printf("%s\\n", greeting);\n        free(greeting);\n        greeting = NULL;\n    }\n    printf("No memory leak!\\n");\n    return 0;\n}',
        expectedOutput: 'Hello, World!\nNo memory leak!',
        tip: 'free() 후에 포인터를 NULL로 설정하면 이중 해제(double free)를 방지할 수 있습니다.',
        tipEn: 'Setting a pointer to NULL after free() helps prevent double free errors.',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      }
    ]
  },

  'strings-advanced': {
    sections: [
      {
        heading: '문자열 포인터',
        headingEn: 'String Pointers',
        text: [
          'C에서 문자열을 다루는 방법에는 문자 배열(char[])과 문자열 포인터(char *)가 있습니다.',
          'char str[] = "Hello"는 배열에 문자열을 복사하므로 수정이 가능하고, char *str = "Hello"는 문자열 리터럴을 가리키는 포인터입니다.',
          '배열은 크기가 고정되지만 내용을 변경할 수 있고, 포인터는 다른 문자열을 가리키도록 재할당할 수 있습니다.'
        ],
        textEn: [
          'There are two ways to handle strings in C: character arrays (char[]) and string pointers (char *).',
          'char str[] = "Hello" copies the string into an array, so it can be modified. char *str = "Hello" is a pointer to a string literal.',
          'Arrays have a fixed size but modifiable content, while pointers can be reassigned to point to different strings.'
        ],
        code: '#include <stdio.h>\nint main() {\n    char arr[] = "Hello";\n    char *ptr = "World";\n    printf("Array: %s\\n", arr);\n    printf("Pointer: %s\\n", ptr);\n    arr[0] = \'h\';\n    printf("Modified array: %s\\n", arr);\n    ptr = "C Language";\n    printf("Reassigned pointer: %s\\n", ptr);\n    printf("Array size: %d\\n", (int)sizeof(arr));\n    return 0;\n}',
        expectedOutput: 'Array: Hello\nPointer: World\nModified array: hello\nReassigned pointer: C Language\nArray size: 6',
        tip: '문자열 "Hello"는 5글자이지만 null 종료 문자(\\0) 때문에 sizeof는 6을 반환합니다.',
        tipEn: 'The string "Hello" has 5 characters, but sizeof returns 6 because of the null terminator (\\0).'
      },
      {
        heading: '문자열 검색과 분리',
        headingEn: 'Search & Tokenize',
        text: [
          'strstr() 함수는 문자열 안에서 부분 문자열을 검색합니다. 찾으면 해당 위치의 포인터를, 못 찾으면 NULL을 반환합니다.',
          'strtok() 함수는 문자열을 지정한 구분자(delimiter)를 기준으로 토큰(조각)으로 분리합니다. 첫 호출에는 문자열을, 이후 호출에는 NULL을 전달합니다.',
          '주의: strtok()은 원본 문자열을 수정하므로, 원본을 보존해야 한다면 복사본을 사용해야 합니다.'
        ],
        textEn: [
          'The strstr() function searches for a substring within a string. It returns a pointer to the found location, or NULL if not found.',
          'The strtok() function splits a string into tokens based on a specified delimiter. The first call takes the string, and subsequent calls take NULL.',
          'Note: strtok() modifies the original string, so use a copy if you need to preserve the original.'
        ],
        code: '#include <stdio.h>\n#include <string.h>\nint main() {\n    char text[] = "C programming is fun";\n    char *found = strstr(text, "program");\n    if (found != NULL) {\n        printf("Found: %s\\n", found);\n    }\n    char data[] = "apple,banana,cherry";\n    char *token = strtok(data, ",");\n    printf("Tokens:\\n");\n    while (token != NULL) {\n        printf("  %s\\n", token);\n        token = strtok(NULL, ",");\n    }\n    return 0;\n}',
        expectedOutput: 'Found: programming is fun\nTokens:\n  apple\n  banana\n  cherry',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: 'sprintf와 sscanf',
        headingEn: 'sprintf & sscanf',
        text: [
          'sprintf()는 printf()와 같은 형식으로 문자열을 생성하여 문자 배열에 저장합니다. 숫자를 문자열로 변환하거나 여러 값을 하나의 문자열로 조합할 때 유용합니다.',
          'sscanf()는 scanf()와 같은 형식으로 문자열에서 값을 추출합니다. 문자열을 파싱하여 숫자나 단어를 분리할 때 사용합니다.',
          '이 두 함수는 문자열 기반의 데이터 변환에서 매우 강력한 도구입니다.'
        ],
        textEn: [
          'sprintf() creates a formatted string (like printf()) and stores it in a character array. It is useful for converting numbers to strings or combining values into one string.',
          'sscanf() extracts values from a string in the same format as scanf(). It is used to parse strings and separate numbers or words.',
          'These two functions are powerful tools for string-based data conversion.'
        ],
        code: '#include <stdio.h>\nint main() {\n    char buffer[100];\n    int age = 25;\n    float score = 95.5;\n    sprintf(buffer, "Age: %d, Score: %.1f", age, score);\n    printf("sprintf result: %s\\n", buffer);\n    char data[] = "Kim 30 85.5";\n    char name[20];\n    int a;\n    float s;\n    sscanf(data, "%s %d %f", name, &a, &s);\n    printf("sscanf result:\\n");\n    printf("  Name: %s\\n", name);\n    printf("  Age: %d\\n", a);\n    printf("  Score: %.1f\\n", s);\n    return 0;\n}',
        expectedOutput: 'sprintf result: Age: 25, Score: 95.5\nsscanf result:\n  Name: Kim\n  Age: 30\n  Score: 85.5',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      }
    ]
  },

  'structures': {
    sections: [
      {
        heading: 'struct 정의와 사용',
        headingEn: 'Defining Structs',
        text: [
          '구조체(struct)는 서로 다른 자료형의 변수들을 하나로 묶어 새로운 자료형을 만드는 방법입니다.',
          'struct 키워드를 사용하여 정의하며, 멤버 변수에는 점(.) 연산자로 접근합니다.',
          '구조체를 사용하면 관련 있는 데이터를 논리적으로 그룹화하여 코드를 더 읽기 쉽고 관리하기 쉽게 만들 수 있습니다.'
        ],
        textEn: [
          'A struct groups variables of different types into one unit, creating a new data type.',
          'It is defined using the struct keyword, and member variables are accessed with the dot (.) operator.',
          'Structs let you logically group related data, making code more readable and maintainable.'
        ],
        code: '#include <stdio.h>\nstruct Student {\n    char name[30];\n    int age;\n    float gpa;\n};\nint main() {\n    struct Student s1;\n    strcpy(s1.name, "Kim");\n    s1.age = 20;\n    s1.gpa = 3.8;\n    printf("Name: %s\\n", s1.name);\n    printf("Age: %d\\n", s1.age);\n    printf("GPA: %.1f\\n", s1.gpa);\n    struct Student s2 = {"Lee", 22, 3.5};\n    printf("Name: %s, Age: %d, GPA: %.1f\\n",\n           s2.name, s2.age, s2.gpa);\n    return 0;\n}',
        expectedOutput: 'Name: Kim\nAge: 20\nGPA: 3.8\nName: Lee, Age: 22, GPA: 3.5',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: 'typedef와 구조체 배열',
        headingEn: 'typedef & Struct Arrays',
        text: [
          'typedef를 사용하면 구조체에 별명을 붙여서 매번 struct 키워드를 쓰지 않아도 됩니다.',
          '구조체 배열을 사용하면 같은 형태의 데이터를 여러 개 효율적으로 관리할 수 있습니다.',
          '이는 학생 명단, 상품 목록 등 동일한 구조의 데이터를 처리할 때 매우 유용합니다.'
        ],
        textEn: [
          'Using typedef gives a struct an alias, so you don\'t need to write the struct keyword each time.',
          'Struct arrays let you efficiently manage multiple data items of the same structure.',
          'This is very useful for processing data with identical structure, like student lists or product catalogs.'
        ],
        code: '#include <stdio.h>\ntypedef struct {\n    char name[20];\n    int price;\n} Product;\nint main() {\n    Product items[3] = {\n        {"Apple", 1500},\n        {"Banana", 800},\n        {"Cherry", 3000}\n    };\n    int i;\n    int total = 0;\n    printf("Product List:\\n");\n    for (i = 0; i < 3; i++) {\n        printf("  %s: %d won\\n", items[i].name, items[i].price);\n        total += items[i].price;\n    }\n    printf("Total: %d won\\n", total);\n    return 0;\n}',
        expectedOutput: 'Product List:\n  Apple: 1500 won\n  Banana: 800 won\n  Cherry: 3000 won\nTotal: 5300 won',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '구조체 포인터',
        headingEn: 'Struct Pointers',
        text: [
          '구조체 포인터를 사용하면 구조체를 함수에 효율적으로 전달할 수 있습니다. 구조체 전체를 복사하는 대신 주소만 전달하기 때문입니다.',
          '구조체 포인터로 멤버에 접근할 때는 화살표 연산자(->)를 사용합니다. ptr->member는 (*ptr).member와 동일합니다.',
          '대규모 구조체를 다룰 때 포인터를 사용하면 메모리와 성능 면에서 유리합니다.'
        ],
        textEn: [
          'Struct pointers allow you to pass structs to functions efficiently, since only the address is passed instead of copying the entire struct.',
          'Use the arrow operator (->) to access members through a struct pointer. ptr->member is equivalent to (*ptr).member.',
          'Using pointers for large structs is advantageous in terms of memory and performance.'
        ],
        code: '#include <stdio.h>\ntypedef struct {\n    char name[20];\n    int hp;\n    int attack;\n} Character;\nvoid levelUp(Character *c) {\n    c->hp += 50;\n    c->attack += 10;\n    printf("%s leveled up!\\n", c->name);\n}\nvoid printStatus(Character *c) {\n    printf("Name: %s, HP: %d, ATK: %d\\n",\n           c->name, c->hp, c->attack);\n}\nint main() {\n    Character hero = {"Warrior", 100, 25};\n    printf("Before:\\n");\n    printStatus(&hero);\n    levelUp(&hero);\n    printf("After:\\n");\n    printStatus(&hero);\n    return 0;\n}',
        expectedOutput: 'Before:\nName: Warrior, HP: 100, ATK: 25\nWarrior leveled up!\nAfter:\nName: Warrior, HP: 150, ATK: 35',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      }
    ]
  },

  'unions-enums': {
    sections: [
      {
        heading: '공용체',
        headingEn: 'Unions',
        text: [
          '공용체(union)는 구조체와 비슷하지만, 모든 멤버가 같은 메모리 공간을 공유합니다. 한 번에 하나의 멤버만 유효한 값을 가질 수 있습니다.',
          '공용체의 크기는 가장 큰 멤버의 크기와 같습니다. 이는 여러 타입 중 하나만 저장하면 될 때 메모리를 절약하는 데 유용합니다.',
          '한 멤버에 값을 쓰면 다른 멤버의 값은 의미를 잃게 됩니다.'
        ],
        textEn: [
          'A union is similar to a struct, but all members share the same memory space. Only one member can hold a valid value at a time.',
          'The size of a union equals the size of its largest member. This is useful for saving memory when only one of several types needs to be stored.',
          'Writing to one member invalidates the values of other members.'
        ],
        code: '#include <stdio.h>\nunion Data {\n    int i;\n    float f;\n    char c;\n};\nint main() {\n    union Data d;\n    printf("Size of union: %lu bytes\\n", sizeof(d));\n    d.i = 42;\n    printf("d.i = %d\\n", d.i);\n    d.f = 3.14;\n    printf("d.f = %.2f\\n", d.f);\n    printf("d.i after setting f = %d (corrupted!)\\n", d.i);\n    d.c = \'A\';\n    printf("d.c = %c\\n", d.c);\n    return 0;\n}',
        expectedOutput: 'Size of union: 4 bytes\nd.i = 42\nd.f = 3.14\nd.i after setting f = 1078523331 (corrupted!)\nd.c = A',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '열거형',
        headingEn: 'Enums',
        text: [
          '열거형(enum)은 관련 있는 정수 상수들에 이름을 붙여 가독성을 높이는 방법입니다.',
          '기본적으로 첫 번째 값은 0부터 시작하며, 이후 값은 1씩 증가합니다. 원하는 값을 직접 지정할 수도 있습니다.',
          '열거형을 사용하면 매직 넘버(의미를 알 수 없는 숫자) 대신 의미 있는 이름으로 코드를 작성할 수 있습니다.'
        ],
        textEn: [
          'An enum (enumeration) gives names to related integer constants, improving code readability.',
          'By default, the first value starts at 0 and subsequent values increment by 1. You can also assign specific values.',
          'Enums let you write code with meaningful names instead of magic numbers (numbers with unclear meaning).'
        ],
        code: '#include <stdio.h>\nenum Season { SPRING, SUMMER, AUTUMN, WINTER };\nenum HttpStatus {\n    OK = 200,\n    NOT_FOUND = 404,\n    SERVER_ERROR = 500\n};\nint main() {\n    enum Season now = AUTUMN;\n    printf("Season values:\\n");\n    printf("  SPRING=%d, SUMMER=%d\\n", SPRING, SUMMER);\n    printf("  AUTUMN=%d, WINTER=%d\\n", AUTUMN, WINTER);\n    switch (now) {\n        case SPRING: printf("It is spring\\n"); break;\n        case SUMMER: printf("It is summer\\n"); break;\n        case AUTUMN: printf("It is autumn\\n"); break;\n        case WINTER: printf("It is winter\\n"); break;\n    }\n    printf("HTTP 404 = %d\\n", NOT_FOUND);\n    return 0;\n}',
        expectedOutput: 'Season values:\n  SPRING=0, SUMMER=1\n  AUTUMN=2, WINTER=3\nIt is autumn\nHTTP 404 = 404',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '비트 필드',
        headingEn: 'Bit Fields',
        text: [
          '비트 필드(bit field)는 구조체의 멤버가 사용하는 비트 수를 지정하여 메모리를 절약하는 기술입니다.',
          '멤버 이름 뒤에 콜론(:)과 비트 수를 지정합니다. 예를 들어 unsigned int flag : 1은 1비트만 사용합니다.',
          '임베디드 시스템이나 하드웨어 레지스터를 다룰 때, 또는 메모리가 제한된 환경에서 특히 유용합니다.'
        ],
        textEn: [
          'Bit fields specify the number of bits used by each struct member, saving memory.',
          'Place a colon (:) and bit count after the member name. For example, unsigned int flag : 1 uses only 1 bit.',
          'This is especially useful in embedded systems, hardware register manipulation, or memory-constrained environments.'
        ],
        code: '#include <stdio.h>\nstruct Flags {\n    unsigned int bold      : 1;\n    unsigned int italic    : 1;\n    unsigned int underline : 1;\n    unsigned int fontSize  : 5;\n};\nint main() {\n    struct Flags style = {0};\n    style.bold = 1;\n    style.italic = 0;\n    style.underline = 1;\n    style.fontSize = 16;\n    printf("Bold: %d\\n", style.bold);\n    printf("Italic: %d\\n", style.italic);\n    printf("Underline: %d\\n", style.underline);\n    printf("Font size: %d\\n", style.fontSize);\n    printf("Size of struct: %lu bytes\\n", sizeof(style));\n    return 0;\n}',
        expectedOutput: 'Bold: 1\nItalic: 0\nUnderline: 1\nFont size: 16\nSize of struct: 4 bytes',
        tip: '비트 필드의 최대값은 2^n - 1입니다. 5비트 필드는 0~31까지 저장할 수 있습니다.',
        tipEn: 'The maximum value of a bit field is 2^n - 1. A 5-bit field can store values from 0 to 31.',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      }
    ]
  },

  'file-io': {
    sections: [
      {
        heading: '파일 열기와 닫기',
        headingEn: 'Open & Close',
        text: [
          'C에서 파일을 다루려면 먼저 fopen() 함수로 파일을 열어야 합니다. fopen()은 파일 이름과 모드를 인자로 받습니다.',
          '주요 모드: "r"(읽기), "w"(쓰기, 파일 생성/덮어쓰기), "a"(추가), "rb"/"wb"(바이너리). fopen()이 실패하면 NULL을 반환합니다.',
          '파일 작업이 끝나면 반드시 fclose()로 파일을 닫아야 합니다. 닫지 않으면 데이터가 손실될 수 있습니다.'
        ],
        textEn: [
          'To work with files in C, you must first open them with fopen(). It takes a filename and mode as arguments.',
          'Key modes: "r" (read), "w" (write, creates/overwrites), "a" (append), "rb"/"wb" (binary). fopen() returns NULL on failure.',
          'You must always close files with fclose() when done. Not closing may cause data loss.'
        ],
        code: '#include <stdio.h>\nint main() {\n    FILE *fp = fopen("test.txt", "w");\n    if (fp == NULL) {\n        printf("Failed to open file!\\n");\n        return 1;\n    }\n    printf("File opened successfully.\\n");\n    fprintf(fp, "Hello, File!\\n");\n    fprintf(fp, "This is line 2.\\n");\n    fclose(fp);\n    printf("File written and closed.\\n");\n    fp = fopen("test.txt", "r");\n    if (fp != NULL) {\n        char line[100];\n        printf("File contents:\\n");\n        while (fgets(line, sizeof(line), fp) != NULL) {\n            printf("  %s", line);\n        }\n        fclose(fp);\n    }\n    return 0;\n}',
        expectedOutput: 'File opened successfully.\nFile written and closed.\nFile contents:\n  Hello, File!\n  This is line 2.',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '텍스트 파일 읽기/쓰기',
        headingEn: 'Text File R/W',
        text: [
          'fprintf()는 printf()처럼 형식화된 출력을 파일에 씁니다. fscanf()는 scanf()처럼 파일에서 형식화된 입력을 읽습니다.',
          'fgets()는 파일에서 한 줄씩 읽어오는 안전한 함수입니다. 버퍼 크기를 지정하여 버퍼 오버플로를 방지합니다.',
          'fputs()는 문자열을 파일에 쓰며, feof()는 파일의 끝에 도달했는지 확인합니다.'
        ],
        textEn: [
          'fprintf() writes formatted output to a file like printf(). fscanf() reads formatted input from a file like scanf().',
          'fgets() safely reads one line at a time from a file. You specify a buffer size to prevent buffer overflow.',
          'fputs() writes a string to a file, and feof() checks if the end of file has been reached.'
        ],
        code: '#include <stdio.h>\nint main() {\n    FILE *fp = fopen("scores.txt", "w");\n    if (fp == NULL) return 1;\n    fprintf(fp, "Kim 95\\n");\n    fprintf(fp, "Lee 87\\n");\n    fprintf(fp, "Park 92\\n");\n    fclose(fp);\n    fp = fopen("scores.txt", "r");\n    if (fp == NULL) return 1;\n    char name[20];\n    int score;\n    int total = 0, count = 0;\n    printf("Score Report:\\n");\n    while (fscanf(fp, "%s %d", name, &score) == 2) {\n        printf("  %s: %d\\n", name, score);\n        total += score;\n        count++;\n    }\n    printf("Average: %.1f\\n", (float)total / count);\n    fclose(fp);\n    return 0;\n}',
        expectedOutput: 'Score Report:\n  Kim: 95\n  Lee: 87\n  Park: 92\nAverage: 91.3',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '바이너리 파일',
        headingEn: 'Binary Files',
        text: [
          '바이너리 파일은 데이터를 텍스트가 아닌 이진 형태 그대로 저장합니다. 텍스트보다 저장 공간이 적고 읽기/쓰기 속도가 빠릅니다.',
          'fwrite()는 메모리의 데이터를 그대로 파일에 쓰고, fread()는 파일의 데이터를 그대로 메모리로 읽습니다.',
          '바이너리 모드로 파일을 열 때는 "wb"(쓰기)와 "rb"(읽기) 모드를 사용합니다.'
        ],
        textEn: [
          'Binary files store data in raw binary form, not as text. They use less storage space and are faster to read/write than text files.',
          'fwrite() writes memory data directly to a file, and fread() reads file data directly into memory.',
          'Use "wb" (write) and "rb" (read) modes to open files in binary mode.'
        ],
        code: '#include <stdio.h>\ntypedef struct {\n    char name[20];\n    int score;\n} Record;\nint main() {\n    Record students[3] = {\n        {"Kim", 95}, {"Lee", 87}, {"Park", 92}\n    };\n    FILE *fp = fopen("data.bin", "wb");\n    if (fp == NULL) return 1;\n    fwrite(students, sizeof(Record), 3, fp);\n    fclose(fp);\n    printf("Binary data written.\\n");\n    Record loaded[3];\n    fp = fopen("data.bin", "rb");\n    if (fp == NULL) return 1;\n    fread(loaded, sizeof(Record), 3, fp);\n    fclose(fp);\n    int i;\n    printf("Loaded from binary:\\n");\n    for (i = 0; i < 3; i++) {\n        printf("  %s: %d\\n", loaded[i].name, loaded[i].score);\n    }\n    return 0;\n}',
        expectedOutput: 'Binary data written.\nLoaded from binary:\n  Kim: 95\n  Lee: 87\n  Park: 92',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      }
    ]
  },

  'preprocessor': {
    sections: [
      {
        heading: '매크로 상수',
        headingEn: 'Macro Constants',
        text: [
          '#define 지시자를 사용하면 컴파일 전에 특정 이름을 값으로 치환하는 매크로 상수를 정의할 수 있습니다.',
          '매크로 상수는 컴파일 시 텍스트 치환으로 처리되므로 메모리를 사용하지 않습니다. 관례적으로 대문자로 작성합니다.',
          '배열 크기, 수학 상수, 설정 값 등을 정의할 때 유용하며, 값을 한 곳에서 관리할 수 있어 유지보수가 쉽습니다.'
        ],
        textEn: [
          'The #define directive defines macro constants that replace a name with a value before compilation.',
          'Macro constants are handled by text substitution at compile time and use no memory. By convention, they are written in uppercase.',
          'Useful for defining array sizes, mathematical constants, and configuration values. Managing values in one place eases maintenance.'
        ],
        code: '#include <stdio.h>\n#define PI 3.14159\n#define MAX_SIZE 5\n#define GREETING "Hello, C!"\nint main() {\n    float radius = 3.0;\n    float area = PI * radius * radius;\n    printf("%s\\n", GREETING);\n    printf("PI = %.5f\\n", PI);\n    printf("Circle area (r=%.1f): %.2f\\n", radius, area);\n    int arr[MAX_SIZE];\n    int i;\n    for (i = 0; i < MAX_SIZE; i++) {\n        arr[i] = i * i;\n    }\n    printf("Squares: ");\n    for (i = 0; i < MAX_SIZE; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
        expectedOutput: 'Hello, C!\nPI = 3.14159\nCircle area (r=3.0): 28.27\nSquares: 0 1 4 9 16 '
      },
      {
        heading: '매크로 함수',
        headingEn: 'Macro Functions',
        text: [
          '매크로 함수는 #define으로 매개변수를 받는 매크로를 정의하는 것입니다. 함수 호출의 오버헤드 없이 코드를 인라인으로 삽입합니다.',
          '매크로 함수를 정의할 때는 각 매개변수와 전체 표현식을 괄호로 감싸야 합니다. 그렇지 않으면 연산자 우선순위 문제가 발생할 수 있습니다.',
          '간단한 계산에는 유용하지만, 복잡한 로직에는 일반 함수를 사용하는 것이 안전합니다.'
        ],
        textEn: [
          'Macro functions define parameterized macros using #define. They inline code without the overhead of a function call.',
          'When defining macro functions, wrap each parameter and the entire expression in parentheses. Otherwise, operator precedence issues may occur.',
          'Useful for simple calculations, but regular functions are safer for complex logic.'
        ],
        code: '#include <stdio.h>\n#define SQUARE(x) ((x) * (x))\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\n#define MIN(a, b) ((a) < (b) ? (a) : (b))\n#define ABS(x) ((x) < 0 ? -(x) : (x))\nint main() {\n    int a = 7, b = 3;\n    printf("SQUARE(%d) = %d\\n", a, SQUARE(a));\n    printf("MAX(%d, %d) = %d\\n", a, b, MAX(a, b));\n    printf("MIN(%d, %d) = %d\\n", a, b, MIN(a, b));\n    printf("ABS(%d) = %d\\n", -15, ABS(-15));\n    printf("SQUARE(%d+1) = %d\\n", b, SQUARE(b + 1));\n    return 0;\n}',
        expectedOutput: 'SQUARE(7) = 49\nMAX(7, 3) = 7\nMIN(7, 3) = 3\nABS(-15) = 15\nSQUARE(3+1) = 16',
        tip: '괄호가 없으면 SQUARE(3+1)이 3+1*3+1=7이 됩니다. 괄호를 써서 (3+1)*(3+1)=16이 되도록 합니다.',
        tipEn: 'Without parentheses, SQUARE(3+1) becomes 3+1*3+1=7. With parentheses, it correctly evaluates as (3+1)*(3+1)=16.'
      },
      {
        heading: '조건부 컴파일',
        headingEn: 'Conditional Compilation',
        text: [
          '조건부 컴파일은 특정 조건에 따라 코드의 일부를 컴파일하거나 무시하는 기능입니다.',
          '#ifdef는 매크로가 정의되어 있으면 코드를 포함하고, #ifndef는 정의되어 있지 않으면 코드를 포함합니다. #endif로 블록을 닫습니다.',
          '디버그 모드 전환, 플랫폼별 코드 분기, 헤더 파일 중복 포함 방지(include guard) 등에 널리 사용됩니다.'
        ],
        textEn: [
          'Conditional compilation includes or excludes parts of code based on specific conditions.',
          '#ifdef includes code if a macro is defined; #ifndef includes code if it is not defined. #endif closes the block.',
          'It is widely used for debug mode toggling, platform-specific code branches, and preventing duplicate header inclusion (include guards).'
        ],
        code: '#include <stdio.h>\n#define DEBUG\n#define VERSION 2\nint main() {\n#ifdef DEBUG\n    printf("[DEBUG] Debug mode is ON\\n");\n#endif\n#ifndef RELEASE\n    printf("[INFO] This is not a release build\\n");\n#endif\n#if VERSION >= 2\n    printf("Version 2+ features enabled\\n");\n#else\n    printf("Basic version\\n");\n#endif\n    printf("Program running.\\n");\n    return 0;\n}',
        expectedOutput: '[DEBUG] Debug mode is ON\n[INFO] This is not a release build\nVersion 2+ features enabled\nProgram running.',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      }
    ]
  },

  'scope-storage': {
    sections: [
      {
        heading: '지역 변수와 전역 변수',
        headingEn: 'Local & Global',
        text: [
          '지역 변수(local variable)는 함수나 블록 안에서 선언되며, 해당 블록이 끝나면 사라집니다. 같은 이름이라도 다른 함수에서는 별개의 변수입니다.',
          '전역 변수(global variable)는 함수 바깥에서 선언되며, 프로그램의 모든 함수에서 접근할 수 있습니다. 프로그램이 종료될 때까지 존재합니다.',
          '전역 변수는 편리하지만, 남용하면 코드의 의존성이 복잡해지고 버그를 찾기 어려워집니다. 필요한 경우에만 사용하세요.'
        ],
        textEn: [
          'Local variables are declared inside a function or block and disappear when the block ends. Variables with the same name in different functions are separate.',
          'Global variables are declared outside functions and can be accessed by all functions in the program. They exist until the program terminates.',
          'Global variables are convenient but overusing them complicates dependencies and makes bugs harder to find. Use them only when necessary.'
        ],
        code: '#include <stdio.h>\nint globalCount = 0;\nvoid increment() {\n    int localVar = 10;\n    globalCount++;\n    printf("  localVar = %d, globalCount = %d\\n",\n           localVar, globalCount);\n}\nint main() {\n    int localVar = 99;\n    printf("main: localVar = %d\\n", localVar);\n    printf("Calling increment 3 times:\\n");\n    increment();\n    increment();\n    increment();\n    printf("main: globalCount = %d\\n", globalCount);\n    return 0;\n}',
        expectedOutput: 'main: localVar = 99\nCalling increment 3 times:\n  localVar = 10, globalCount = 1\n  localVar = 10, globalCount = 2\n  localVar = 10, globalCount = 3\nmain: globalCount = 3',
        tip: '지역 변수는 매번 새로 초기화되지만, 전역 변수는 값이 유지됩니다.',
        tipEn: 'Local variables are freshly initialized each time, but global variables retain their values.'
      },
      {
        heading: 'static 변수',
        headingEn: 'Static Variables',
        text: [
          'static 지역 변수는 함수가 끝나도 값이 사라지지 않고 유지됩니다. 다음 호출 때 이전 값을 기억합니다.',
          'static 변수는 프로그램 시작 시 한 번만 초기화되며, 이후에는 초기화 구문이 무시됩니다.',
          '호출 횟수 카운팅, 이전 상태 기억 등에 유용하지만, 전역 변수처럼 과도한 사용은 피하는 것이 좋습니다.'
        ],
        textEn: [
          'A static local variable retains its value even after the function returns. It remembers the previous value on the next call.',
          'Static variables are initialized only once at program start; subsequent initialization statements are ignored.',
          'Useful for counting calls or remembering previous states, but like globals, avoid overusing them.'
        ],
        code: '#include <stdio.h>\nvoid counter() {\n    static int count = 0;\n    count++;\n    printf("Called %d time(s)\\n", count);\n}\nint generateId() {\n    static int id = 1000;\n    id++;\n    return id;\n}\nint main() {\n    counter();\n    counter();\n    counter();\n    printf("ID: %d\\n", generateId());\n    printf("ID: %d\\n", generateId());\n    printf("ID: %d\\n", generateId());\n    return 0;\n}',
        expectedOutput: 'Called 1 time(s)\nCalled 2 time(s)\nCalled 3 time(s)\nID: 1001\nID: 1002\nID: 1003'
      },
      {
        heading: 'extern과 register',
        headingEn: 'extern & register',
        text: [
          'extern 키워드는 다른 파일에 정의된 전역 변수를 현재 파일에서 사용할 수 있게 선언합니다. 대규모 프로젝트에서 파일 간 데이터를 공유할 때 사용합니다.',
          'register 키워드는 변수를 CPU 레지스터에 저장하도록 컴파일러에 힌트를 줍니다. 자주 접근하는 변수의 성능을 높이려 할 때 사용했지만, 현대 컴파일러는 자동으로 최적화합니다.',
          '이 키워드들은 다중 파일 프로젝트와 성능 최적화에서 역할을 하지만, 일반적인 코드에서는 자주 사용되지 않습니다.'
        ],
        textEn: [
          'The extern keyword declares that a global variable defined in another file can be used in the current file. It is used to share data between files in large projects.',
          'The register keyword hints to the compiler to store a variable in a CPU register. It was used to improve performance for frequently accessed variables, but modern compilers optimize automatically.',
          'These keywords play roles in multi-file projects and performance optimization but are not commonly used in everyday code.'
        ],
        code: '/* --- config.c --- */\n#include <stdio.h>\nint sharedValue = 42;\n\n/* --- main.c --- */\n#include <stdio.h>\nextern int sharedValue;\nint main() {\n    printf("Shared value: %d\\n", sharedValue);\n    register int i;\n    int sum = 0;\n    for (i = 0; i < 100; i++) {\n        sum += i;\n    }\n    printf("Sum 0-99: %d\\n", sum);\n    printf("Shared + Sum: %d\\n", sharedValue + sum);\n    return 0;\n}',
        expectedOutput: 'Shared value: 42\nSum 0-99: 4950\nShared + Sum: 4992',
        tip: '이 예제는 두 개의 파일로 구성됩니다. 컴파일 시 gcc config.c main.c -o program 으로 함께 컴파일합니다.',
        tipEn: 'This example consists of two files. Compile them together with: gcc config.c main.c -o program',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      }
    ]
  }
}

export default intermediate
