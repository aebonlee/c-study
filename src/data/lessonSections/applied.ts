const applied = {
  'memory-management': {
    sections: [
      {
        heading: '메모리 레이아웃',
        headingEn: 'Memory Layout',
        text: [
          'C 프로그램이 실행되면 운영체제는 프로세스에 메모리를 할당합니다. 이 메모리는 크게 네 가지 영역으로 나뉩니다: 코드(텍스트) 세그먼트, 데이터 세그먼트, 힙(heap), 그리고 스택(stack)입니다. 코드 세그먼트에는 컴파일된 기계어 명령이 저장되고, 데이터 세그먼트에는 전역 변수와 정적 변수가 위치합니다.',
          '힙 영역은 malloc(), calloc(), realloc() 등을 통해 프로그래머가 직접 관리하는 동적 메모리 공간입니다. 힙은 낮은 주소에서 높은 주소 방향으로 성장합니다. 반면 스택은 함수 호출 시 지역 변수와 매개변수를 저장하며, 높은 주소에서 낮은 주소 방향으로 성장합니다. 이 두 영역이 서로 반대 방향으로 성장하여 메모리를 효율적으로 사용합니다.',
          '아래 예제에서는 전역 변수, 지역 변수, 동적 할당 변수의 주소를 출력하여 각각이 어떤 메모리 영역에 위치하는지 확인할 수 있습니다. 주소값의 차이를 통해 메모리 레이아웃의 구조를 직접 확인해 보세요.'
        ],
        textEn: [
          'When a C program runs, the operating system allocates memory to the process. This memory is divided into four main regions: the code (text) segment, data segment, heap, and stack. The code segment stores compiled machine instructions, while the data segment holds global and static variables.',
          'The heap is a dynamic memory area managed directly by the programmer through malloc(), calloc(), and realloc(). The heap grows from low to high addresses. In contrast, the stack stores local variables and parameters during function calls, growing from high to low addresses. These two regions grow in opposite directions, making efficient use of memory.',
          'The example below prints the addresses of global variables, local variables, and dynamically allocated variables to observe which memory region each resides in. Examine the differences in address values to see the memory layout structure firsthand.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n\nint global_var = 100;\nstatic int static_var = 200;\n\nint main() {\n    int local_var = 300;\n    int *heap_var = (int *)malloc(sizeof(int));\n    *heap_var = 400;\n\n    printf("=== Memory Layout ==\\n");\n    printf("Code  segment (main func) : %p\\n", (void *)main);\n    printf("Data  segment (global_var): %p\\n", (void *)&global_var);\n    printf("Data  segment (static_var): %p\\n", (void *)&static_var);\n    printf("Heap  segment (heap_var)  : %p\\n", (void *)heap_var);\n    printf("Stack segment (local_var) : %p\\n", (void *)&local_var);\n\n    free(heap_var);\n    heap_var = NULL;\n    return 0;\n}',
        expectedOutput: '=== Memory Layout ==\nCode  segment (main func) : 0x401136\nData  segment (global_var): 0x404030\nData  segment (static_var): 0x404034\nHeap  segment (heap_var)  : 0x1a0d2a0\nStack segment (local_var) : 0x7ffd3b2c1e4c',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '메모리 누수 탐지',
        headingEn: 'Memory Leak Detection',
        text: [
          '메모리 누수(memory leak)는 동적으로 할당한 메모리를 해제하지 않아 프로그램이 사용하지 않는 메모리를 계속 점유하는 현상입니다. 단순한 프로그램에서는 큰 문제가 되지 않을 수 있지만, 장시간 실행되는 서버 프로그램이나 반복적으로 메모리를 할당하는 코드에서는 시스템의 가용 메모리가 점점 줄어들어 심각한 성능 저하나 프로그램 충돌을 야기할 수 있습니다.',
          '메모리 누수를 찾기 위해 Linux에서는 Valgrind라는 도구를 사용할 수 있습니다. Valgrind의 memcheck 도구는 할당된 메모리 중 해제되지 않은 블록을 추적하여 정확한 위치를 알려줍니다. 아래 첫 번째 코드는 메모리 누수가 있는 예제이고, 주석으로 수정 방법을 안내합니다.',
          '메모리 누수를 방지하려면 모든 malloc/calloc/realloc 호출에 대응하는 free() 호출이 있는지 항상 확인해야 합니다. 특히 함수 내에서 동적 할당 후 에러로 조기 반환(early return)하는 경우에 메모리 누수가 발생하기 쉬우므로 주의가 필요합니다.'
        ],
        textEn: [
          'A memory leak occurs when dynamically allocated memory is not freed, causing the program to hold onto unused memory. While it may not matter in simple programs, in long-running server applications or code that repeatedly allocates memory, available system memory gradually decreases, leading to severe performance degradation or crashes.',
          'On Linux, you can use a tool called Valgrind to find memory leaks. Valgrind\'s memcheck tool tracks allocated memory blocks that were not freed and reports their exact locations. The first code example below demonstrates a memory leak, with comments showing how to fix it.',
          'To prevent memory leaks, always verify that every malloc/calloc/realloc call has a corresponding free() call. Pay special attention to early returns caused by errors inside functions after dynamic allocation, as these are common sources of leaks.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nchar *create_message(const char *name) {\n    char *msg = (char *)malloc(256);\n    if (msg == NULL) return NULL;\n    sprintf(msg, "Hello, %s!", name);\n    return msg;\n}\n\nvoid leaky_function() {\n    int *data = (int *)malloc(10 * sizeof(int));\n    for (int i = 0; i < 10; i++) {\n        data[i] = i * i;\n    }\n    printf("Sum: %d\\n", data[0] + data[9]);\n    /* BUG: free(data) is missing here! */\n}\n\nint main() {\n    /* Example 1: Correct usage - no leak */\n    char *greeting = create_message("Alice");\n    if (greeting) {\n        printf("%s\\n", greeting);\n        free(greeting);  /* properly freed */\n        greeting = NULL;\n    }\n\n    /* Example 2: Memory leak! */\n    leaky_function();\n\n    /* Fix: leaky_function should call free(data) before returning */\n    printf("Program finished.\\n");\n    return 0;\n}',
        expectedOutput: 'Hello, Alice!\nSum: 81\nProgram finished.',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '댕글링 포인터와 버퍼 오버플로',
        headingEn: 'Dangling Pointers & Buffer Overflow',
        text: [
          '댕글링 포인터(dangling pointer)란 이미 해제된 메모리를 가리키는 포인터를 말합니다. free() 호출 후에도 포인터 변수에는 이전 메모리 주소가 남아 있어, 이를 다시 사용하면 정의되지 않은 동작(undefined behavior)이 발생합니다. 프로그램이 충돌하거나 잘못된 데이터를 읽을 수 있으며, 보안 취약점으로 이어질 수 있습니다.',
          '버퍼 오버플로(buffer overflow)는 배열이나 버퍼의 경계를 넘어 데이터를 쓰는 오류입니다. 스택 버퍼 오버플로는 함수의 반환 주소를 덮어써서 프로그램 흐름을 변경할 수 있어 보안 공격에 자주 이용됩니다. C 언어는 배열 경계 검사를 하지 않으므로, 프로그래머가 직접 경계를 확인해야 합니다.',
          '아래 예제는 댕글링 포인터와 버퍼 오버플로의 위험성을 보여주고, 각각의 방지 방법을 제시합니다. free() 후 포인터를 NULL로 설정하고, 문자열 함수에서는 strncpy() 같은 안전한 함수를 사용하는 것이 좋습니다.'
        ],
        textEn: [
          'A dangling pointer is a pointer that references memory that has already been freed. After calling free(), the pointer variable still holds the old memory address. Using it again causes undefined behavior: the program may crash, read corrupted data, or create security vulnerabilities.',
          'A buffer overflow occurs when data is written beyond the boundary of an array or buffer. Stack buffer overflows can overwrite a function\'s return address, altering program flow, which is frequently exploited in security attacks. Since C does not perform bounds checking on arrays, the programmer must manually verify boundaries.',
          'The example below demonstrates the dangers of dangling pointers and buffer overflows, along with prevention techniques. Always set pointers to NULL after free(), and use safe string functions like strncpy() instead of strcpy().'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid dangling_pointer_demo() {\n    printf("=== Dangling Pointer Demo ===\\n");\n    int *ptr = (int *)malloc(sizeof(int));\n    *ptr = 42;\n    printf("Before free: %d\\n", *ptr);\n\n    free(ptr);\n    /* ptr is now a dangling pointer! */\n    /* printf("%d", *ptr);  <-- DANGEROUS: undefined behavior */\n\n    ptr = NULL;  /* SAFE: prevent dangling pointer */\n    if (ptr == NULL) {\n        printf("Pointer safely set to NULL\\n");\n    }\n}\n\nvoid buffer_overflow_demo() {\n    printf("\\n=== Buffer Overflow Prevention ===\\n");\n    char buffer[16];\n\n    /* DANGEROUS: strcpy does not check bounds */\n    /* strcpy(buffer, "This string is way too long for the buffer!"); */\n\n    /* SAFE: strncpy limits the copy length */\n    strncpy(buffer, "This string is way too long!", sizeof(buffer) - 1);\n    buffer[sizeof(buffer) - 1] = \'\\0\';\n    printf("Safe copy: %s\\n", buffer);\n\n    /* SAFE: snprintf limits output length */\n    char msg[32];\n    snprintf(msg, sizeof(msg), "Value: %d, Name: %s", 12345, "Alice");\n    printf("snprintf: %s\\n", msg);\n}\n\nint main() {\n    dangling_pointer_demo();\n    buffer_overflow_demo();\n    return 0;\n}',
        expectedOutput: '=== Dangling Pointer Demo ===\nBefore free: 42\nPointer safely set to NULL\n\n=== Buffer Overflow Prevention ===\nSafe copy: This string is\nsnprintf: Value: 12345, Name: Alice',
        tip: '항상 free() 후에 포인터를 NULL로 설정하세요.',
        tipEn: 'Always set pointers to NULL after free().',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      }
    ]
  },

  'function-pointers': {
    sections: [
      {
        heading: '함수 포인터 선언',
        headingEn: 'Declaring Function Pointers',
        text: [
          '함수 포인터는 함수의 메모리 주소를 저장하는 변수입니다. C에서 함수 이름은 그 자체가 함수의 시작 주소를 나타내므로, 이 주소를 포인터 변수에 저장하고 나중에 해당 포인터를 통해 함수를 호출할 수 있습니다. 함수 포인터의 선언 구문은 처음에는 복잡해 보이지만, 반환형 (*포인터이름)(매개변수목록) 형태를 기억하면 됩니다.',
          '함수 포인터를 사용하면 실행 시간에 어떤 함수를 호출할지 결정할 수 있습니다. 이는 콜백 함수, 이벤트 핸들러, 플러그인 시스템 등을 구현하는 데 핵심적인 기법입니다. typedef를 사용하면 함수 포인터 타입에 별칭을 부여하여 코드의 가독성을 크게 높일 수 있습니다.',
          '아래 예제는 기본적인 함수 포인터의 선언, 초기화, 호출 방법과 typedef를 활용한 간결한 코드 작성 방법을 보여줍니다.'
        ],
        textEn: [
          'A function pointer is a variable that stores the memory address of a function. In C, a function name itself represents the starting address of the function, so you can store this address in a pointer variable and later call the function through that pointer. The declaration syntax looks complex at first, but just remember the form: return_type (*pointer_name)(parameter_list).',
          'Function pointers allow you to decide which function to call at runtime. This is a key technique for implementing callbacks, event handlers, and plugin systems. Using typedef to create an alias for a function pointer type greatly improves code readability.',
          'The example below demonstrates the basics of declaring, initializing, and calling function pointers, as well as using typedef to write cleaner code.'
        ],
        code: '#include <stdio.h>\n\nint add(int a, int b) { return a + b; }\nint subtract(int a, int b) { return a - b; }\nint multiply(int a, int b) { return a * b; }\n\n/* Using typedef for cleaner syntax */\ntypedef int (*MathFunc)(int, int);\n\nvoid demonstrate_basic() {\n    /* Method 1: Direct declaration */\n    int (*func_ptr)(int, int) = add;\n    printf("add(3, 4) = %d\\n", func_ptr(3, 4));\n\n    /* Method 2: Using typedef */\n    MathFunc op = subtract;\n    printf("subtract(10, 3) = %d\\n", op(10, 3));\n\n    /* Reassigning to another function */\n    op = multiply;\n    printf("multiply(5, 6) = %d\\n", op(5, 6));\n}\n\nint main() {\n    printf("=== Function Pointer Basics ===\\n");\n    demonstrate_basic();\n\n    /* Function address comparison */\n    printf("\\nAddress of add:      %p\\n", (void *)add);\n    printf("Address of subtract: %p\\n", (void *)subtract);\n    printf("Address of multiply: %p\\n", (void *)multiply);\n\n    return 0;\n}',
        expectedOutput: '=== Function Pointer Basics ===\nadd(3, 4) = 7\nsubtract(10, 3) = 7\nmultiply(5, 6) = 30\n\nAddress of add:      0x401136\nAddress of subtract: 0x401150\nAddress of multiply: 0x40116a',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '콜백 함수',
        headingEn: 'Callback Functions',
        text: [
          '콜백 함수(callback function)란 다른 함수에 인자로 전달되어, 특정 시점에 호출되는 함수를 말합니다. 함수 포인터를 매개변수로 받는 함수를 작성하면, 호출자가 원하는 동작을 자유롭게 지정할 수 있습니다. 이 패턴은 정렬 알고리즘, 이벤트 처리, 비동기 작업 등에서 광범위하게 사용됩니다.',
          'C 표준 라이브러리의 qsort() 함수는 콜백 함수의 대표적인 예입니다. qsort()는 비교 함수를 함수 포인터로 받아, 어떤 기준으로 정렬할지를 호출자가 결정하도록 합니다. 이렇게 하면 하나의 정렬 함수로 다양한 데이터 타입과 정렬 기준을 처리할 수 있습니다.',
          '아래 예제는 배열에 콜백 함수를 적용하는 apply_to_array 함수와, qsort()를 사용한 정수 배열의 오름차순/내림차순 정렬을 보여줍니다.'
        ],
        textEn: [
          'A callback function is a function passed as an argument to another function, to be called at a specific point. By writing a function that accepts a function pointer as a parameter, the caller can freely specify the desired behavior. This pattern is widely used in sorting algorithms, event handling, and asynchronous operations.',
          'The C standard library\'s qsort() function is a classic example of callbacks. qsort() receives a comparison function as a function pointer, letting the caller decide the sorting criteria. This allows a single sort function to handle various data types and orderings.',
          'The example below shows an apply_to_array function that applies a callback to each element, and demonstrates ascending/descending sorting of an integer array using qsort().'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n\n/* Callback: transform each element */\nvoid apply_to_array(int *arr, int size, int (*transform)(int)) {\n    for (int i = 0; i < size; i++) {\n        arr[i] = transform(arr[i]);\n    }\n}\n\nint double_it(int x) { return x * 2; }\nint square_it(int x) { return x * x; }\n\n/* Comparators for qsort */\nint compare_asc(const void *a, const void *b) {\n    return (*(int *)a - *(int *)b);\n}\n\nint compare_desc(const void *a, const void *b) {\n    return (*(int *)b - *(int *)a);\n}\n\nvoid print_array(const char *label, int *arr, int size) {\n    printf("%s: ", label);\n    for (int i = 0; i < size; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n}\n\nint main() {\n    int data1[] = {1, 2, 3, 4, 5};\n    int n = 5;\n\n    print_array("Original", data1, n);\n\n    apply_to_array(data1, n, double_it);\n    print_array("Doubled ", data1, n);\n\n    int data2[] = {1, 2, 3, 4, 5};\n    apply_to_array(data2, n, square_it);\n    print_array("Squared ", data2, n);\n\n    /* qsort with callback comparator */\n    printf("\\n=== qsort Example ===\\n");\n    int nums[] = {38, 27, 43, 3, 9, 82, 10};\n    int len = sizeof(nums) / sizeof(nums[0]);\n\n    qsort(nums, len, sizeof(int), compare_asc);\n    print_array("Ascending ", nums, len);\n\n    qsort(nums, len, sizeof(int), compare_desc);\n    print_array("Descending", nums, len);\n\n    return 0;\n}',
        expectedOutput: 'Original: 1 2 3 4 5 \nDoubled : 2 4 6 8 10 \nSquared : 1 4 9 16 25 \n\n=== qsort Example ===\nAscending : 3 9 10 27 38 43 82 \nDescending: 82 43 38 27 10 9 3 ',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '함수 포인터 배열',
        headingEn: 'Function Pointer Arrays',
        text: [
          '함수 포인터 배열은 여러 함수의 주소를 하나의 배열에 저장하여, 인덱스를 통해 원하는 함수를 선택적으로 호출할 수 있게 하는 기법입니다. 이는 디스패치 테이블(dispatch table)이라고도 불리며, 복잡한 if-else나 switch-case 문을 깔끔한 배열 인덱싱으로 대체할 수 있습니다.',
          '디스패치 테이블 패턴은 계산기, 메뉴 시스템, 명령어 처리기 등에서 매우 유용합니다. 새로운 연산이나 명령을 추가할 때 기존 코드를 수정하지 않고 배열에 함수 포인터를 추가하기만 하면 되므로, 유지보수가 쉽고 확장성이 뛰어납니다.',
          '아래 예제는 함수 포인터 배열을 사용한 간단한 계산기를 구현합니다. 사용자가 선택한 연산 번호를 배열 인덱스로 사용하여 해당 연산 함수를 호출합니다.'
        ],
        textEn: [
          'A function pointer array stores the addresses of multiple functions in a single array, allowing you to selectively call any function by index. This is also called a dispatch table and can replace complex if-else or switch-case statements with clean array indexing.',
          'The dispatch table pattern is very useful in calculators, menu systems, and command processors. When adding new operations or commands, you simply add a function pointer to the array without modifying existing code, making maintenance easy and extensibility excellent.',
          'The example below implements a simple calculator using a function pointer array. The user\'s selected operation number is used as an array index to call the corresponding operation function.'
        ],
        code: '#include <stdio.h>\n\ndouble add(double a, double b) { return a + b; }\ndouble sub(double a, double b) { return a - b; }\ndouble mul(double a, double b) { return a * b; }\ndouble divide(double a, double b) {\n    if (b == 0.0) {\n        printf("Error: Division by zero!\\n");\n        return 0.0;\n    }\n    return a / b;\n}\n\ntypedef double (*Operation)(double, double);\n\nint main() {\n    /* Dispatch table: function pointer array */\n    Operation ops[] = {add, sub, mul, divide};\n    const char *op_names[] = {"Add", "Subtract", "Multiply", "Divide"};\n    const char *op_symbols[] = {"+", "-", "*", "/"};\n    int num_ops = sizeof(ops) / sizeof(ops[0]);\n\n    double a = 20.0, b = 6.0;\n\n    printf("=== Calculator Dispatch Table ===\\n");\n    printf("a = %.1f, b = %.1f\\n\\n", a, b);\n\n    for (int i = 0; i < num_ops; i++) {\n        double result = ops[i](a, b);\n        printf("[%d] %-10s: %.1f %s %.1f = %.2f\\n",\n               i, op_names[i], a, op_symbols[i], b, result);\n    }\n\n    /* Direct dispatch by index */\n    printf("\\n--- Direct dispatch ---\\n");\n    int choice = 2;  /* multiply */\n    printf("Choice %d: %.1f %s %.1f = %.2f\\n",\n           choice, a, op_symbols[choice], b, ops[choice](a, b));\n\n    return 0;\n}',
        expectedOutput: '=== Calculator Dispatch Table ===\na = 20.0, b = 6.0\n\n[0] Add       : 20.0 + 6.0 = 26.00\n[1] Subtract  : 20.0 - 6.0 = 14.00\n[2] Multiply  : 20.0 * 6.0 = 120.00\n[3] Divide    : 20.0 / 6.0 = 3.33\n\n--- Direct dispatch ---\nChoice 2: 20.0 * 6.0 = 120.00',
        tip: '함수 포인터로 전략 패턴을 구현할 수 있습니다.',
        tipEn: 'Function pointers can implement the strategy pattern.',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      }
    ]
  },

  'multi-file': {
    sections: [
      {
        heading: '헤더 파일 작성',
        headingEn: 'Writing Header Files',
        text: [
          '프로그램이 커지면 하나의 파일에 모든 코드를 작성하는 것은 비효율적이고 유지보수가 어려워집니다. C에서는 코드를 여러 파일로 분할하고, 헤더 파일(.h)을 통해 파일 간의 인터페이스를 정의합니다. 헤더 파일에는 함수 프로토타입, 구조체 정의, 매크로 상수, typedef 등 선언만 포함하고 실제 구현은 .c 파일에 작성합니다.',
          '헤더 파일에서 가장 중요한 것은 인클루드 가드(include guard)입니다. 동일한 헤더가 여러 번 포함되면 중복 정의 오류가 발생하는데, #ifndef / #define / #endif 매크로 또는 #pragma once를 사용하여 이를 방지합니다. 인클루드 가드의 매크로 이름은 보통 파일 이름을 대문자로 변환하여 사용합니다.',
          '아래 예제는 수학 유틸리티 모듈의 헤더 파일과 구현 파일, 그리고 이를 사용하는 메인 파일을 보여줍니다. 세 파일이 하나의 프로그램을 구성하는 구조를 확인하세요.'
        ],
        textEn: [
          'As programs grow, writing all code in a single file becomes inefficient and hard to maintain. In C, code is split across multiple files, and header files (.h) define the interface between them. Header files contain only declarations such as function prototypes, struct definitions, macro constants, and typedefs, while actual implementations go in .c files.',
          'The most important aspect of header files is the include guard. If the same header is included multiple times, duplicate definition errors occur. Use #ifndef / #define / #endif macros or #pragma once to prevent this. The guard macro name is typically the file name converted to uppercase.',
          'The example below shows a math utility module with its header file, implementation file, and a main file that uses it. Observe how three files compose a single program.'
        ],
        code: '/* === mathutil.h === */\n#ifndef MATHUTIL_H\n#define MATHUTIL_H\n\n/* Structure definition */\ntypedef struct {\n    double x;\n    double y;\n} Point;\n\n/* Function prototypes */\ndouble distance(Point a, Point b);\ndouble circle_area(double radius);\nint factorial(int n);\n\n/* Macro constant */\n#define PI 3.14159265358979\n\n#endif /* MATHUTIL_H */\n\n/* === mathutil.c === */\n#include "mathutil.h"\n#include <math.h>\n\ndouble distance(Point a, Point b) {\n    double dx = a.x - b.x;\n    double dy = a.y - b.y;\n    return sqrt(dx * dx + dy * dy);\n}\n\ndouble circle_area(double radius) {\n    return PI * radius * radius;\n}\n\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\n/* === main.c === */\n#include <stdio.h>\n#include "mathutil.h"\n\nint main() {\n    Point p1 = {0.0, 0.0};\n    Point p2 = {3.0, 4.0};\n\n    printf("Distance: %.2f\\n", distance(p1, p2));\n    printf("Circle area (r=5): %.2f\\n", circle_area(5.0));\n    printf("7! = %d\\n", factorial(7));\n\n    return 0;\n}\n\n/* Compile: gcc -o main main.c mathutil.c -lm */',
        expectedOutput: 'Distance: 5.00\nCircle area (r=5): 78.54\n7! = 5040',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: 'extern과 분할 컴파일',
        headingEn: 'extern & Separate Compilation',
        text: [
          'extern 키워드는 변수나 함수가 다른 파일에 정의되어 있음을 컴파일러에 알려주는 선언입니다. 전역 변수를 여러 파일에서 공유할 때 필수적입니다. 변수는 정확히 하나의 .c 파일에서만 정의(definition)하고, 다른 파일에서는 extern 선언을 통해 참조합니다.',
          '분할 컴파일은 각 .c 파일을 독립적으로 오브젝트 파일(.o)로 컴파일한 뒤, 링커가 이들을 하나의 실행 파일로 결합하는 과정입니다. 이 방식의 장점은 하나의 파일을 수정했을 때 해당 파일만 다시 컴파일하면 되므로 빌드 시간이 크게 단축된다는 것입니다.',
          '아래 예제는 설정값을 전역 변수로 공유하는 다중 파일 프로그램의 구조를 보여줍니다. config.c에서 변수를 정의하고, 다른 파일에서 extern으로 참조합니다.'
        ],
        textEn: [
          'The extern keyword tells the compiler that a variable or function is defined in another file. It is essential when sharing global variables across multiple files. A variable must be defined (allocated) in exactly one .c file, while other files reference it through extern declarations.',
          'Separate compilation compiles each .c file independently into an object file (.o), then the linker combines them into a single executable. The advantage is that when one file is modified, only that file needs recompilation, greatly reducing build time.',
          'The example below shows the structure of a multi-file program that shares configuration values through global variables. config.c defines the variables, and other files reference them with extern.'
        ],
        code: '/* === config.h === */\n#ifndef CONFIG_H\n#define CONFIG_H\n\n/* extern declarations - these are just declarations, not definitions */\nextern int max_users;\nextern const char *app_name;\nextern int debug_mode;\n\nvoid print_config(void);\n\n#endif\n\n/* === config.c === */\n#include "config.h"\n#include <stdio.h>\n\n/* Actual definitions - memory is allocated here */\nint max_users = 100;\nconst char *app_name = "MyApp";\nint debug_mode = 0;\n\nvoid print_config(void) {\n    printf("App: %s\\n", app_name);\n    printf("Max users: %d\\n", max_users);\n    printf("Debug: %s\\n", debug_mode ? "ON" : "OFF");\n}\n\n/* === main.c === */\n#include <stdio.h>\n#include "config.h"\n\nint main() {\n    printf("=== Initial Config ===\\n");\n    print_config();\n\n    /* Modify shared global variables */\n    max_users = 200;\n    debug_mode = 1;\n\n    printf("\\n=== Modified Config ===\\n");\n    print_config();\n\n    return 0;\n}\n\n/* Compile steps:\n *   gcc -c config.c -o config.o\n *   gcc -c main.c -o main.o\n *   gcc config.o main.o -o myapp\n */',
        expectedOutput: '=== Initial Config ===\nApp: MyApp\nMax users: 100\nDebug: OFF\n\n=== Modified Config ===\nApp: MyApp\nMax users: 200\nDebug: ON',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '링킹 과정',
        headingEn: 'Linking Process',
        text: [
          '링킹(linking)은 여러 오브젝트 파일과 라이브러리를 결합하여 하나의 실행 가능한 프로그램을 만드는 과정입니다. 컴파일러는 각 .c 파일을 독립적으로 오브젝트 파일(.o)로 변환하며, 이때 다른 파일의 함수 호출은 미해결 심볼(unresolved symbol)로 남겨둡니다. 링커가 이 심볼들을 실제 정의와 연결합니다.',
          '링킹 오류는 함수를 선언했지만 정의하지 않았거나, 필요한 라이브러리를 링크하지 않았을 때 발생합니다. "undefined reference" 오류 메시지는 링커가 심볼의 정의를 찾지 못했다는 의미입니다. 정적 라이브러리(.a)는 링크 시 코드가 실행 파일에 복사되고, 동적 라이브러리(.so)는 실행 시 로드됩니다.',
          '아래 예제는 문자열 유틸리티 모듈을 분할 컴파일하고 링크하는 완전한 과정을 보여줍니다. 컴파일 명령어의 각 단계를 주석으로 설명합니다.'
        ],
        textEn: [
          'Linking is the process of combining multiple object files and libraries into a single executable program. The compiler converts each .c file independently into an object file (.o), leaving function calls to other files as unresolved symbols. The linker connects these symbols to their actual definitions.',
          'Linking errors occur when a function is declared but not defined, or when a required library is not linked. The "undefined reference" error message means the linker could not find the symbol\'s definition. Static libraries (.a) have their code copied into the executable at link time, while dynamic libraries (.so) are loaded at runtime.',
          'The example below demonstrates the complete process of separately compiling and linking a string utility module. Each step of the compilation commands is explained in comments.'
        ],
        code: '/* === strutil.h === */\n#ifndef STRUTIL_H\n#define STRUTIL_H\n\nint str_length(const char *s);\nvoid str_reverse(char *s);\nint str_count_char(const char *s, char c);\n\n#endif\n\n/* === strutil.c === */\n#include "strutil.h"\n\nint str_length(const char *s) {\n    int len = 0;\n    while (s[len] != \'\\0\') len++;\n    return len;\n}\n\nvoid str_reverse(char *s) {\n    int len = str_length(s);\n    for (int i = 0; i < len / 2; i++) {\n        char temp = s[i];\n        s[i] = s[len - 1 - i];\n        s[len - 1 - i] = temp;\n    }\n}\n\nint str_count_char(const char *s, char c) {\n    int count = 0;\n    while (*s) {\n        if (*s == c) count++;\n        s++;\n    }\n    return count;\n}\n\n/* === main.c === */\n#include <stdio.h>\n#include "strutil.h"\n\nint main() {\n    char word[] = "Hello, World!";\n\n    printf("String: \\"%s\\"\\n", word);\n    printf("Length: %d\\n", str_length(word));\n    printf("Count of \'l\': %d\\n", str_count_char(word, \'l\'));\n\n    str_reverse(word);\n    printf("Reversed: \\"%s\\"\\n", word);\n\n    return 0;\n}\n\n/* Build process:\n *\n * Step 1: Preprocess & Compile to object files\n *   gcc -c strutil.c -o strutil.o\n *   gcc -c main.c -o main.o\n *\n * Step 2: Link object files into executable\n *   gcc strutil.o main.o -o program\n *\n * Step 3: Run\n *   ./program\n *\n * Or all at once:\n *   gcc -o program main.c strutil.c\n */',
        expectedOutput: 'String: "Hello, World!"\nLength: 13\nCount of \'l\': 3\nReversed: "!dlroW ,olleH"',
        tip: '헤더 파일에는 선언만, 구현은 .c 파일에 넣으세요.',
        tipEn: 'Put declarations in .h, implementations in .c.',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      }
    ]
  },

  'makefile': {
    sections: [
      {
        heading: 'Makefile 기본 구조',
        headingEn: 'Basic Makefile Structure',
        text: [
          'Makefile은 프로그램의 빌드 과정을 자동화하는 설정 파일입니다. make 유틸리티가 이 파일을 읽어 소스 파일 간의 의존 관계를 파악하고, 변경된 파일만 다시 컴파일합니다. 대규모 프로젝트에서는 수십, 수백 개의 소스 파일이 있으므로 Makefile 없이 수동으로 빌드하는 것은 사실상 불가능합니다.',
          'Makefile의 기본 단위는 규칙(rule)이며, 타겟(target): 의존성(dependencies) 형태로 작성합니다. 그 아래에 탭(Tab) 문자로 들여쓰기한 레시피(recipe)가 실행할 명령을 정의합니다. make는 타겟 파일이 의존성 파일보다 오래되었을 때만 레시피를 실행하여 불필요한 재컴파일을 방지합니다.',
          '아래 예제는 두 개의 소스 파일로 구성된 프로젝트의 기본 Makefile을 보여줍니다. 주의: Makefile에서 레시피 앞의 들여쓰기는 반드시 탭(Tab)이어야 하며, 공백(Space)을 사용하면 오류가 발생합니다.'
        ],
        textEn: [
          'A Makefile is a configuration file that automates the build process. The make utility reads this file to understand dependencies between source files and recompiles only the changed ones. In large projects with dozens or hundreds of source files, building manually without a Makefile is practically impossible.',
          'The basic unit of a Makefile is a rule, written as target: dependencies. Below it, recipes (commands to execute) are indented with a Tab character. make only executes recipes when the target file is older than its dependencies, avoiding unnecessary recompilation.',
          'The example below shows a basic Makefile for a project with two source files. Note: indentation before recipes in Makefiles must use Tab characters, not spaces, or errors will occur.'
        ],
        code: '# === Makefile ===\n# Basic Makefile structure\n\n# Final target: build the executable\nprogram: main.o utils.o\n\tgcc -o program main.o utils.o\n\n# Compile main.c to main.o\nmain.o: main.c utils.h\n\tgcc -c main.c\n\n# Compile utils.c to utils.o\nutils.o: utils.c utils.h\n\tgcc -c utils.c\n\n# Phony target: clean build artifacts\nclean:\n\trm -f program main.o utils.o\n\n# Usage:\n#   make          - build the program\n#   make clean    - remove build files\n#   make program  - explicitly build program target',
        expectedOutput: 'gcc -c main.c\ngcc -c utils.c\ngcc -o program main.o utils.o',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '변수와 패턴 규칙',
        headingEn: 'Variables & Pattern Rules',
        text: [
          'Makefile에서 변수를 사용하면 컴파일러, 플래그, 파일 목록 등을 한 곳에서 관리할 수 있어 유지보수가 쉬워집니다. CC는 C 컴파일러, CFLAGS는 컴파일 플래그, LDFLAGS는 링커 플래그를 저장하는 관례적 변수명입니다. 변수는 $(변수명) 형태로 참조합니다.',
          '패턴 규칙(pattern rule)은 %를 와일드카드로 사용하여 동일한 패턴의 여러 규칙을 하나로 통합합니다. 예를 들어 %.o: %.c는 모든 .c 파일을 .o 파일로 컴파일하는 규칙을 한 번에 정의합니다. 자동 변수 $@는 타겟, $<는 첫 번째 의존성, $^는 모든 의존성을 나타냅니다.',
          '아래 예제는 변수와 패턴 규칙을 활용하여 더 유연하고 확장 가능한 Makefile을 작성하는 방법을 보여줍니다.'
        ],
        textEn: [
          'Using variables in Makefiles lets you manage the compiler, flags, and file lists from one place, simplifying maintenance. CC for the C compiler, CFLAGS for compilation flags, and LDFLAGS for linker flags are conventional variable names. Variables are referenced as $(variable_name).',
          'Pattern rules use % as a wildcard to consolidate multiple rules with the same pattern into one. For example, %.o: %.c defines a rule to compile all .c files to .o files at once. Automatic variables $@ represent the target, $< the first dependency, and $^ all dependencies.',
          'The example below demonstrates writing a more flexible and extensible Makefile using variables and pattern rules.'
        ],
        code: '# === Makefile with Variables & Pattern Rules ===\n\n# Variables\nCC = gcc\nCFLAGS = -Wall -Wextra -g\nLDFLAGS = -lm\nTARGET = calculator\n\n# Source files and derived object files\nSRCS = main.c math_ops.c display.c\nOBJS = $(SRCS:.c=.o)\n\n# Default target\nall: $(TARGET)\n\n# Link object files into executable\n# $@ = target name, $^ = all dependencies\n$(TARGET): $(OBJS)\n\t$(CC) $(CFLAGS) -o $@ $^ $(LDFLAGS)\n\n# Pattern rule: compile any .c to .o\n# $< = first dependency (the .c file)\n%.o: %.c\n\t$(CC) $(CFLAGS) -c $< -o $@\n\n# Header dependencies\nmain.o: main.c math_ops.h display.h\nmath_ops.o: math_ops.c math_ops.h\ndisplay.o: display.c display.h math_ops.h\n\n# Phony targets (not actual files)\n.PHONY: all clean rebuild\n\nclean:\n\trm -f $(OBJS) $(TARGET)\n\nrebuild: clean all\n\n# Usage:\n#   make          - build all\n#   make clean    - remove build files\n#   make rebuild  - clean and rebuild',
        expectedOutput: 'gcc -Wall -Wextra -g -c main.c -o main.o\ngcc -Wall -Wextra -g -c math_ops.c -o math_ops.o\ngcc -Wall -Wextra -g -c display.c -o display.o\ngcc -Wall -Wextra -g -o calculator main.o math_ops.o display.o -lm',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '실전 Makefile',
        headingEn: 'Practical Makefile',
        text: [
          '실전 프로젝트의 Makefile은 소스 디렉토리 구조, 자동 의존성 생성, 디버그/릴리스 빌드 구분 등 더 많은 기능을 포함합니다. 소스 파일이 추가될 때마다 Makefile을 수정하지 않도록 wildcard 함수로 파일을 자동 탐색하고, 빌드 결과물을 별도 디렉토리에 저장하는 것이 좋습니다.',
          'GCC의 -MMD 플래그는 컴파일 시 헤더 파일 의존성 정보를 자동으로 생성합니다. 이를 Makefile에 포함시키면 헤더 파일이 변경되었을 때도 관련 소스가 자동으로 재컴파일됩니다. 또한 install, uninstall 타겟을 추가하여 프로그램 설치 과정도 자동화할 수 있습니다.',
          '아래는 실전에서 사용할 수 있는 완성도 높은 Makefile 예제입니다. 빌드 디렉토리 분리, 자동 의존성 추적, 디버그/릴리스 모드 지원 등의 기능을 포함합니다.'
        ],
        textEn: [
          'Makefiles for real projects include features like directory structure support, automatic dependency generation, and debug/release build configurations. Use the wildcard function to auto-discover files so you don\'t have to modify the Makefile each time a source file is added, and store build outputs in a separate directory.',
          'GCC\'s -MMD flag automatically generates header file dependency information during compilation. Including these in the Makefile ensures that when header files change, related source files are automatically recompiled. You can also add install and uninstall targets to automate program installation.',
          'Below is a production-quality Makefile example with build directory separation, automatic dependency tracking, and debug/release mode support.'
        ],
        code: '# === Production Makefile ===\n\n# Project settings\nPROJECT = student_mgr\nVERSION = 1.0.0\n\n# Directories\nSRCDIR = src\nINCDIR = include\nBUILDDIR = build\nBINDIR = bin\n\n# Compiler settings\nCC = gcc\nCFLAGS = -Wall -Wextra -Werror -I$(INCDIR)\nLDFLAGS = -lm\n\n# Debug/Release mode (default: debug)\nifdef RELEASE\n  CFLAGS += -O2 -DNDEBUG\n  BUILD_TYPE = release\nelse\n  CFLAGS += -g -O0 -DDEBUG\n  BUILD_TYPE = debug\nendif\n\n# Auto-discover source files\nSRCS = $(wildcard $(SRCDIR)/*.c)\nOBJS = $(patsubst $(SRCDIR)/%.c,$(BUILDDIR)/%.o,$(SRCS))\nDEPS = $(OBJS:.o=.d)\n\n# Target executable\nTARGET = $(BINDIR)/$(PROJECT)\n\n# Default target\nall: dirs $(TARGET)\n\t@echo "Build complete: $(TARGET) [$(BUILD_TYPE)]"\n\n# Create directories\ndirs:\n\t@mkdir -p $(BUILDDIR) $(BINDIR)\n\n# Link\n$(TARGET): $(OBJS)\n\t$(CC) $(CFLAGS) -o $@ $^ $(LDFLAGS)\n\n# Compile with auto-dependency generation\n$(BUILDDIR)/%.o: $(SRCDIR)/%.c\n\t$(CC) $(CFLAGS) -MMD -MP -c $< -o $@\n\n# Include auto-generated dependencies\n-include $(DEPS)\n\n# Phony targets\n.PHONY: all dirs clean rebuild release info\n\nclean:\n\trm -rf $(BUILDDIR) $(BINDIR)\n\t@echo "Cleaned."\n\nrebuild: clean all\n\nrelease:\n\t$(MAKE) RELEASE=1\n\ninfo:\n\t@echo "Project: $(PROJECT) v$(VERSION)"\n\t@echo "Sources: $(SRCS)"\n\t@echo "Objects: $(OBJS)"\n\t@echo "Build type: $(BUILD_TYPE)"\n\n# Usage:\n#   make            - debug build\n#   make release    - optimized release build\n#   make clean      - remove all build files\n#   make rebuild    - clean then build\n#   make info       - show project info',
        expectedOutput: 'mkdir -p build bin\ngcc -Wall -Wextra -Werror -Iinclude -g -O0 -DDEBUG -MMD -MP -c src/main.c -o build/main.o\ngcc -Wall -Wextra -Werror -Iinclude -g -O0 -DDEBUG -MMD -MP -c src/student.c -o build/student.o\ngcc -Wall -Wextra -Werror -Iinclude -g -O0 -DDEBUG -o bin/student_mgr build/main.o build/student.o -lm\nBuild complete: bin/student_mgr [debug]',
        tip: 'make clean으로 빌드 파일을 정리하세요.',
        tipEn: 'Use make clean to remove build artifacts.',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      }
    ]
  },

  'debugging': {
    sections: [
      {
        heading: 'GDB 기본 사용법',
        headingEn: 'GDB Basics',
        text: [
          'GDB(GNU Debugger)는 C 프로그램의 실행을 단계별로 추적하고, 변수 값을 검사하며, 버그의 원인을 찾아내는 강력한 디버거입니다. GDB를 사용하려면 컴파일 시 -g 플래그를 사용하여 디버그 정보를 포함해야 합니다. 최적화 플래그(-O2 등)를 사용하면 코드가 재배치되어 디버깅이 어려워지므로, 디버그 빌드에서는 -O0을 사용하는 것이 좋습니다.',
          'GDB의 핵심 명령어는 다음과 같습니다: break(브레이크포인트 설정), run(프로그램 실행), next(다음 줄로 이동, 함수 안으로 들어가지 않음), step(다음 줄로 이동, 함수 안으로 들어감), print(변수 값 출력), backtrace(호출 스택 표시), continue(다음 브레이크포인트까지 실행)입니다.',
          '아래 예제는 버그가 있는 프로그램과 GDB를 사용하여 디버깅하는 과정을 보여줍니다. 배열 합계를 구하는 함수에 의도적인 버그를 넣었습니다.'
        ],
        textEn: [
          'GDB (GNU Debugger) is a powerful debugger that lets you trace C program execution step by step, inspect variable values, and find the root cause of bugs. To use GDB, compile with the -g flag to include debug information. Optimization flags (-O2, etc.) can rearrange code and make debugging difficult, so use -O0 for debug builds.',
          'Key GDB commands include: break (set breakpoint), run (start execution), next (step over - move to next line without entering functions), step (step into - move to next line, entering functions), print (show variable value), backtrace (show call stack), and continue (run to next breakpoint).',
          'The example below shows a buggy program and the GDB debugging process. An intentional bug is placed in a function that computes the sum of an array.'
        ],
        code: '#include <stdio.h>\n\n/* Buggy function: off-by-one error */\nint sum_array(int arr[], int size) {\n    int sum = 0;\n    /* BUG: should be i < size, not i <= size */\n    for (int i = 0; i <= size; i++) {\n        sum += arr[i];\n    }\n    return sum;\n}\n\nint find_max(int arr[], int size) {\n    int max = arr[0];\n    for (int i = 1; i < size; i++) {\n        if (arr[i] > max) {\n            max = arr[i];\n        }\n    }\n    return max;\n}\n\nint main() {\n    int data[] = {10, 25, 8, 42, 17};\n    int n = 5;\n\n    printf("Array: ");\n    for (int i = 0; i < n; i++) {\n        printf("%d ", data[i]);\n    }\n    printf("\\n");\n\n    int total = sum_array(data, n);\n    int maximum = find_max(data, n);\n\n    printf("Sum: %d (expected: 102)\\n", total);\n    printf("Max: %d\\n", maximum);\n\n    return 0;\n}\n\n/* Debugging with GDB:\n *\n *   $ gcc -g -O0 -o debug_demo debug_demo.c\n *   $ gdb ./debug_demo\n *\n *   (gdb) break sum_array        # set breakpoint\n *   (gdb) run                    # start program\n *   (gdb) print size             # inspect variable\n *   (gdb) next                   # step over\n *   (gdb) print i                # check loop variable\n *   (gdb) print sum              # check running sum\n *   (gdb) backtrace              # show call stack\n *   (gdb) continue               # resume execution\n *   (gdb) quit                   # exit GDB\n */',
        expectedOutput: 'Array: 10 25 8 42 17 \nSum: 102 (expected: 102)\nMax: 42',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: 'Valgrind 메모리 검사',
        headingEn: 'Valgrind Memory Check',
        text: [
          'Valgrind는 메모리 관련 버그를 탐지하는 도구 모음입니다. 가장 많이 사용되는 memcheck 도구는 메모리 누수, 초기화되지 않은 메모리 사용, 해제된 메모리 접근, 버퍼 오버플로 등 다양한 메모리 오류를 실행 시간에 감지합니다. Valgrind는 Linux에서 사용할 수 있으며, 프로그램을 특별히 수정하지 않아도 됩니다.',
          'Valgrind를 사용하려면 valgrind --leak-check=full ./프로그램명 형태로 실행합니다. 출력 결과에서 "definitely lost"는 확실한 메모리 누수, "indirectly lost"는 간접 누수, "possibly lost"는 의심되는 누수를 나타냅니다. "still reachable"은 프로그램 종료 시점에 아직 참조 가능한 메모리로, 보통 문제가 되지 않습니다.',
          '아래 예제는 여러 가지 메모리 오류를 포함한 프로그램입니다. Valgrind로 실행하면 각 오류의 위치와 종류를 정확하게 보고합니다.'
        ],
        textEn: [
          'Valgrind is a suite of tools for detecting memory-related bugs. Its most popular tool, memcheck, detects memory leaks, use of uninitialized memory, access to freed memory, and buffer overflows at runtime. Valgrind works on Linux and requires no special modifications to your program.',
          'To use Valgrind, run: valgrind --leak-check=full ./program. In the output, "definitely lost" means a confirmed memory leak, "indirectly lost" is an indirect leak, and "possibly lost" is a suspected leak. "still reachable" refers to memory still referenced at program exit, which is usually not a problem.',
          'The example below is a program with several memory errors. Running it through Valgrind will precisely report each error\'s location and type.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid memory_leak() {\n    /* Leak: allocated but never freed */\n    int *leaked = (int *)malloc(100 * sizeof(int));\n    leaked[0] = 42;\n    printf("Leaked value: %d\\n", leaked[0]);\n    /* Missing: free(leaked); */\n}\n\nvoid uninitialized_read() {\n    int *arr = (int *)malloc(5 * sizeof(int));\n    /* Bug: reading uninitialized memory */\n    /* arr[2] was never assigned a value */\n    int sum = arr[0] + arr[2];\n    printf("Uninitialized sum: %d\\n", sum);\n    free(arr);\n}\n\nvoid proper_usage() {\n    /* Correct: initialize, use, then free */\n    int *data = (int *)calloc(5, sizeof(int));\n    if (data == NULL) {\n        printf("Allocation failed\\n");\n        return;\n    }\n    for (int i = 0; i < 5; i++) {\n        data[i] = i * 10;\n    }\n    printf("Proper: %d %d %d %d %d\\n",\n           data[0], data[1], data[2], data[3], data[4]);\n    free(data);\n    data = NULL;\n}\n\nint main() {\n    printf("=== Valgrind Demo ===\\n\\n");\n\n    memory_leak();\n    uninitialized_read();\n    proper_usage();\n\n    printf("\\nDone.\\n");\n    return 0;\n}\n\n/* Run with Valgrind:\n *   $ gcc -g -O0 -o valgdemo valgdemo.c\n *   $ valgrind --leak-check=full --show-leak-kinds=all ./valgdemo\n *\n * Expected Valgrind output:\n *   ==12345== 400 bytes in 1 blocks are definitely lost\n *   ==12345==    at 0x4C2...: malloc (vg_replace_malloc.c:...)\n *   ==12345==    by 0x40...: memory_leak (valgdemo.c:6)\n */',
        expectedOutput: '=== Valgrind Demo ===\n\nLeaked value: 42\nUninitialized sum: 0\nProper: 0 10 20 30 40\n\nDone.',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '방어적 프로그래밍',
        headingEn: 'Defensive Programming',
        text: [
          '방어적 프로그래밍(defensive programming)은 프로그램이 예상치 못한 입력이나 상황에서도 안전하게 동작하도록 코드를 작성하는 기법입니다. "발생하지 않을 것"이라는 가정 대신, 모든 가능한 오류 상황을 명시적으로 처리합니다. 이는 버그를 조기에 발견하고, 프로그램의 안정성을 크게 향상시킵니다.',
          'C에서 방어적 프로그래밍의 주요 기법으로는 assert() 매크로를 통한 전제조건 검증, NULL 포인터 검사, 반환값 확인, 입력 범위 검증 등이 있습니다. assert()는 개발 중 논리적 오류를 빠르게 찾아내는 데 유용하며, 릴리스 빌드에서는 NDEBUG 매크로를 정의하여 비활성화할 수 있습니다.',
          '아래 예제는 다양한 방어적 프로그래밍 기법을 적용한 안전한 배열 처리 라이브러리를 보여줍니다. 모든 함수에서 매개변수를 검증하고, 오류 상황에 적절히 대응합니다.'
        ],
        textEn: [
          'Defensive programming is a technique for writing code that behaves safely even with unexpected inputs or situations. Instead of assuming "this won\'t happen," it explicitly handles all possible error scenarios. This helps catch bugs early and greatly improves program stability.',
          'Key defensive programming techniques in C include: precondition verification with the assert() macro, NULL pointer checks, return value verification, and input range validation. assert() is useful for quickly finding logic errors during development and can be disabled in release builds by defining the NDEBUG macro.',
          'The example below demonstrates a safe array handling library applying various defensive programming techniques. Every function validates its parameters and responds appropriately to error conditions.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n#include <assert.h>\n#include <string.h>\n\n/* Safe array structure */\ntypedef struct {\n    int *data;\n    int size;\n    int capacity;\n} SafeArray;\n\n/* Create with validation */\nSafeArray *array_create(int capacity) {\n    assert(capacity > 0 && "Capacity must be positive");\n\n    SafeArray *arr = (SafeArray *)malloc(sizeof(SafeArray));\n    if (arr == NULL) {\n        fprintf(stderr, "Error: Failed to allocate SafeArray\\n");\n        return NULL;\n    }\n\n    arr->data = (int *)calloc(capacity, sizeof(int));\n    if (arr->data == NULL) {\n        fprintf(stderr, "Error: Failed to allocate data\\n");\n        free(arr);\n        return NULL;\n    }\n\n    arr->size = 0;\n    arr->capacity = capacity;\n    return arr;\n}\n\n/* Safe add with bounds checking */\nint array_add(SafeArray *arr, int value) {\n    if (arr == NULL) {\n        fprintf(stderr, "Error: NULL array\\n");\n        return -1;\n    }\n    if (arr->size >= arr->capacity) {\n        fprintf(stderr, "Error: Array full (%d/%d)\\n",\n                arr->size, arr->capacity);\n        return -1;\n    }\n    arr->data[arr->size++] = value;\n    return 0;\n}\n\n/* Safe get with bounds checking */\nint array_get(SafeArray *arr, int index, int *out_value) {\n    if (arr == NULL || out_value == NULL) return -1;\n    if (index < 0 || index >= arr->size) {\n        fprintf(stderr, "Error: Index %d out of bounds [0, %d)\\n",\n                index, arr->size);\n        return -1;\n    }\n    *out_value = arr->data[index];\n    return 0;\n}\n\n/* Safe destroy */\nvoid array_destroy(SafeArray **arr_ptr) {\n    if (arr_ptr == NULL || *arr_ptr == NULL) return;\n    free((*arr_ptr)->data);\n    (*arr_ptr)->data = NULL;\n    free(*arr_ptr);\n    *arr_ptr = NULL;  /* prevent dangling pointer */\n}\n\nint main() {\n    SafeArray *arr = array_create(5);\n    if (arr == NULL) return 1;\n\n    /* Normal operations */\n    for (int i = 0; i < 5; i++) {\n        array_add(arr, (i + 1) * 10);\n    }\n\n    /* Overflow attempt */\n    array_add(arr, 999);\n\n    /* Safe access */\n    int value;\n    for (int i = 0; i < 5; i++) {\n        if (array_get(arr, i, &value) == 0) {\n            printf("[%d] = %d\\n", i, value);\n        }\n    }\n\n    /* Out of bounds attempt */\n    array_get(arr, 10, &value);\n\n    /* Clean up */\n    array_destroy(&arr);\n    assert(arr == NULL);  /* verified NULL after destroy */\n    printf("\\nArray safely destroyed.\\n");\n\n    return 0;\n}',
        expectedOutput: 'Error: Array full (5/5)\n[0] = 10\n[1] = 20\n[2] = 30\n[3] = 40\n[4] = 50\nError: Index 10 out of bounds [0, 5)\n\nArray safely destroyed.',
        tip: '컴파일 시 -g 플래그로 디버그 정보를 포함하세요.',
        tipEn: 'Use the -g flag to include debug info when compiling.',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      }
    ]
  },

  'system-calls': {
    sections: [
      {
        heading: '프로세스 생성',
        headingEn: 'Process Creation',
        text: [
          'Unix/Linux 시스템에서 새로운 프로세스를 생성하는 핵심 시스템 콜은 fork()입니다. fork()를 호출하면 현재 프로세스(부모)의 복사본이 만들어져 새로운 프로세스(자식)가 됩니다. 부모와 자식은 fork() 이후의 코드를 각각 독립적으로 실행하며, 각자 고유한 프로세스 ID(PID)를 가집니다.',
          'fork()의 반환값으로 부모와 자식을 구분합니다. 부모 프로세스에서는 자식의 PID(양수)가 반환되고, 자식 프로세스에서는 0이 반환됩니다. fork()가 실패하면 -1이 반환됩니다. 이 반환값을 이용하여 부모와 자식이 서로 다른 작업을 수행하도록 프로그래밍합니다.',
          '아래 예제는 fork()를 사용하여 자식 프로세스를 생성하고, 부모와 자식이 각각 다른 메시지를 출력하는 프로그램입니다. getpid()와 getppid()로 각 프로세스의 ID와 부모 ID를 확인합니다.'
        ],
        textEn: [
          'The key system call for creating a new process in Unix/Linux is fork(). When fork() is called, a copy of the current process (parent) is created as a new process (child). Parent and child independently execute the code after fork(), each with their own unique Process ID (PID).',
          'The return value of fork() distinguishes parent from child. The parent receives the child\'s PID (a positive number), while the child receives 0. If fork() fails, -1 is returned. This return value is used to program parent and child to perform different tasks.',
          'The example below uses fork() to create a child process, with parent and child printing different messages. getpid() and getppid() show each process\'s ID and parent ID.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n#include <unistd.h>\n#include <sys/types.h>\n#include <sys/wait.h>\n\nint main() {\n    printf("Before fork: PID = %d\\n", getpid());\n\n    pid_t pid = fork();\n\n    if (pid < 0) {\n        /* fork failed */\n        perror("fork failed");\n        exit(1);\n    } else if (pid == 0) {\n        /* Child process */\n        printf("\\n[Child] PID = %d, Parent PID = %d\\n",\n               getpid(), getppid());\n        printf("[Child] Doing child work...\\n");\n\n        for (int i = 1; i <= 3; i++) {\n            printf("[Child] Step %d\\n", i);\n            sleep(1);\n        }\n\n        printf("[Child] Finished!\\n");\n        exit(0);\n    } else {\n        /* Parent process */\n        printf("\\n[Parent] PID = %d, Child PID = %d\\n",\n               getpid(), pid);\n        printf("[Parent] Waiting for child to finish...\\n");\n\n        int status;\n        waitpid(pid, &status, 0);\n\n        if (WIFEXITED(status)) {\n            printf("[Parent] Child exited with status %d\\n",\n                   WEXITSTATUS(status));\n        }\n\n        printf("[Parent] Done.\\n");\n    }\n\n    return 0;\n}',
        expectedOutput: 'Before fork: PID = 12345\n\n[Parent] PID = 12345, Child PID = 12346\n[Parent] Waiting for child to finish...\n\n[Child] PID = 12346, Parent PID = 12345\n[Child] Doing child work...\n[Child] Step 1\n[Child] Step 2\n[Child] Step 3\n[Child] Finished!\n[Parent] Child exited with status 0\n[Parent] Done.',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '프로그램 실행',
        headingEn: 'Program Execution',
        text: [
          'exec() 계열 함수는 현재 프로세스의 이미지를 새로운 프로그램으로 완전히 교체합니다. fork()로 자식 프로세스를 만든 후 exec()를 호출하면, 자식 프로세스가 완전히 다른 프로그램을 실행하게 됩니다. 이것이 Unix/Linux에서 새 프로그램을 실행하는 표준 방법(fork-exec 패턴)입니다.',
          'exec() 계열에는 execl(), execv(), execlp(), execvp() 등 여러 변형이 있습니다. \'l\'은 인자를 리스트로, \'v\'는 배열로 전달하며, \'p\'가 붙으면 PATH 환경변수를 검색합니다. exec()가 성공하면 이전 프로그램의 코드는 더 이상 실행되지 않으므로, exec() 이후의 코드는 exec() 실패 시에만 실행됩니다.',
          '부모 프로세스는 wait() 또는 waitpid()를 사용하여 자식 프로세스가 종료될 때까지 기다릴 수 있습니다. 이를 통해 자식의 종료 상태를 확인하고, 좀비 프로세스(zombie process)를 방지합니다.'
        ],
        textEn: [
          'The exec() family of functions completely replaces the current process image with a new program. After creating a child process with fork(), calling exec() makes the child run an entirely different program. This is the standard way to execute new programs in Unix/Linux (the fork-exec pattern).',
          'The exec() family includes several variants: execl(), execv(), execlp(), execvp(), etc. \'l\' passes arguments as a list, \'v\' as an array, and \'p\' searches the PATH environment variable. If exec() succeeds, the previous program\'s code no longer runs, so code after exec() only executes if exec() fails.',
          'The parent process can use wait() or waitpid() to wait for the child process to terminate. This allows checking the child\'s exit status and prevents zombie processes.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n#include <unistd.h>\n#include <sys/types.h>\n#include <sys/wait.h>\n\nvoid run_command(const char *cmd, char *const args[]) {\n    pid_t pid = fork();\n\n    if (pid < 0) {\n        perror("fork");\n        exit(1);\n    } else if (pid == 0) {\n        /* Child: replace with new program */\n        execvp(cmd, args);\n        /* If we get here, exec failed */\n        perror("exec failed");\n        exit(127);\n    } else {\n        /* Parent: wait for child */\n        int status;\n        waitpid(pid, &status, 0);\n\n        if (WIFEXITED(status)) {\n            int code = WEXITSTATUS(status);\n            printf("[run_command] \'%s\' exited with code %d\\n\\n",\n                   cmd, code);\n        } else if (WIFSIGNALED(status)) {\n            printf("[run_command] \'%s\' killed by signal %d\\n\\n",\n                   cmd, WTERMSIG(status));\n        }\n    }\n}\n\nint main() {\n    printf("=== Executing External Programs ===\\n\\n");\n\n    /* Run \'echo\' command */\n    char *echo_args[] = {"echo", "Hello from exec!", NULL};\n    run_command("echo", echo_args);\n\n    /* Run \'ls\' command */\n    char *ls_args[] = {"ls", "-l", "/tmp", NULL};\n    run_command("ls", ls_args);\n\n    /* Run \'date\' command */\n    char *date_args[] = {"date", NULL};\n    run_command("date", date_args);\n\n    printf("All commands finished.\\n");\n    return 0;\n}',
        expectedOutput: '=== Executing External Programs ===\n\nHello from exec!\n[run_command] \'echo\' exited with code 0\n\ntotal 24\ndrwx------ 2 user user 4096 Mar 25 10:00 temp_files\n[run_command] \'ls\' exited with code 0\n\nTue Mar 25 10:30:00 UTC 2026\n[run_command] \'date\' exited with code 0\n\nAll commands finished.',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '프로세스 간 통신',
        headingEn: 'Inter-Process Communication',
        text: [
          '프로세스 간 통신(IPC, Inter-Process Communication)은 독립적인 프로세스들이 데이터를 주고받는 메커니즘입니다. Unix/Linux에서 가장 기본적인 IPC 방법은 파이프(pipe)입니다. pipe() 시스템 콜은 두 개의 파일 디스크립터를 생성합니다: fd[0]은 읽기 끝, fd[1]은 쓰기 끝입니다.',
          '파이프는 단방향 통신 채널입니다. 한쪽에서 쓰고 다른 쪽에서 읽습니다. 양방향 통신이 필요하면 두 개의 파이프를 사용합니다. 파이프는 주로 부모-자식 프로세스 간 통신에 사용되며, fork() 이전에 pipe()를 호출하면 부모와 자식이 같은 파이프를 공유합니다.',
          '아래 예제는 파이프를 사용하여 부모 프로세스가 자식 프로세스에게 메시지를 보내는 프로그램입니다. 부모는 파이프의 쓰기 끝에 데이터를 쓰고, 자식은 읽기 끝에서 데이터를 읽습니다.'
        ],
        textEn: [
          'Inter-Process Communication (IPC) is a mechanism for independent processes to exchange data. The most basic IPC method in Unix/Linux is the pipe. The pipe() system call creates two file descriptors: fd[0] for the read end and fd[1] for the write end.',
          'A pipe is a unidirectional communication channel: one side writes, the other reads. For bidirectional communication, use two pipes. Pipes are mainly used for parent-child process communication. Calling pipe() before fork() lets parent and child share the same pipe.',
          'The example below uses a pipe for the parent process to send messages to the child process. The parent writes data to the write end of the pipe, and the child reads from the read end.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <unistd.h>\n#include <sys/wait.h>\n\nint main() {\n    int pipefd[2];  /* pipefd[0]=read, pipefd[1]=write */\n\n    if (pipe(pipefd) == -1) {\n        perror("pipe");\n        exit(1);\n    }\n\n    pid_t pid = fork();\n\n    if (pid < 0) {\n        perror("fork");\n        exit(1);\n    } else if (pid == 0) {\n        /* Child: reads from pipe */\n        close(pipefd[1]);  /* close unused write end */\n\n        char buffer[256];\n        int bytes_read;\n\n        printf("[Child] Waiting for messages...\\n");\n\n        while ((bytes_read = read(pipefd[0], buffer, sizeof(buffer) - 1)) > 0) {\n            buffer[bytes_read] = \'\\0\';\n            printf("[Child] Received: %s\\n", buffer);\n        }\n\n        printf("[Child] Pipe closed. Exiting.\\n");\n        close(pipefd[0]);\n        exit(0);\n    } else {\n        /* Parent: writes to pipe */\n        close(pipefd[0]);  /* close unused read end */\n\n        const char *messages[] = {\n            "Hello, child process!",\n            "Here is some data.",\n            "Goodbye!"\n        };\n        int num_msgs = 3;\n\n        for (int i = 0; i < num_msgs; i++) {\n            printf("[Parent] Sending: %s\\n", messages[i]);\n            write(pipefd[1], messages[i], strlen(messages[i]));\n            sleep(1);  /* pause between messages */\n        }\n\n        close(pipefd[1]);  /* close write end signals EOF to child */\n        printf("[Parent] Pipe closed. Waiting for child...\\n");\n\n        int status;\n        waitpid(pid, &status, 0);\n        printf("[Parent] Child finished. Done.\\n");\n    }\n\n    return 0;\n}',
        expectedOutput: '[Parent] Sending: Hello, child process!\n[Child] Waiting for messages...\n[Child] Received: Hello, child process!\n[Parent] Sending: Here is some data.\n[Child] Received: Here is some data.\n[Parent] Sending: Goodbye!\n[Child] Received: Goodbye!\n[Parent] Pipe closed. Waiting for child...\n[Child] Pipe closed. Exiting.\n[Parent] Child finished. Done.',
        tip: 'fork()는 반환값으로 부모/자식을 구분합니다.',
        tipEn: 'fork() uses its return value to distinguish parent from child.',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      }
    ]
  },

  'mini-project': {
    sections: [
      {
        heading: '프로젝트 설계',
        headingEn: 'Project Design',
        text: [
          '미니 프로젝트로 학생 관리 시스템을 구현합니다. 이 프로젝트는 지금까지 배운 구조체, 포인터, 동적 메모리 할당, 파일 입출력 등을 종합적으로 활용합니다. 먼저 요구사항을 정리하고 데이터 구조를 설계하는 것이 중요합니다. 좋은 설계는 구현을 쉽게 만들고 나중에 기능을 추가할 때도 유연하게 대응할 수 있게 합니다.',
          '핵심 데이터 구조는 Student 구조체입니다. 학번(id), 이름(name), 성적(grade) 필드를 포함하며, 학생 목록은 동적 배열로 관리합니다. MAX_STUDENTS 상수로 최대 수용 인원을 정의하고, StudentDB 구조체로 학생 배열과 현재 학생 수를 함께 관리하면 데이터를 체계적으로 다룰 수 있습니다.',
          '아래 예제는 프로젝트의 기본 데이터 구조 정의와 초기화 코드를 보여줍니다. 구조체 정의, 상수 선언, 초기화 함수 등 프로젝트의 뼈대를 구성합니다.'
        ],
        textEn: [
          'For the mini project, we will implement a Student Management System. This project comprehensively applies structs, pointers, dynamic memory allocation, and file I/O learned so far. It is important to first organize requirements and design data structures. Good design makes implementation easier and allows flexible addition of features later.',
          'The core data structure is the Student struct, containing fields for student ID (id), name (name), and grade (grade). The student list is managed as a dynamic array. Define MAX_STUDENTS for the maximum capacity, and use a StudentDB struct to bundle the student array with the current count for organized data management.',
          'The example below shows the basic data structure definitions and initialization code for the project. It establishes the project skeleton with struct definitions, constant declarations, and initialization functions.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#define MAX_NAME 50\n#define MAX_STUDENTS 100\n#define DATA_FILE "students.dat"\n\n/* Student structure */\ntypedef struct {\n    int id;\n    char name[MAX_NAME];\n    float grade;\n} Student;\n\n/* Database structure */\ntypedef struct {\n    Student students[MAX_STUDENTS];\n    int count;\n} StudentDB;\n\n/* Initialize the database */\nvoid db_init(StudentDB *db) {\n    db->count = 0;\n    memset(db->students, 0, sizeof(db->students));\n}\n\n/* Display menu */\nvoid show_menu() {\n    printf("\\n==========================\\n");\n    printf("  Student Management System\\n");\n    printf("==========================\\n");\n    printf("1. Add Student\\n");\n    printf("2. Display All Students\\n");\n    printf("3. Search Student\\n");\n    printf("4. Delete Student\\n");\n    printf("5. Save to File\\n");\n    printf("6. Load from File\\n");\n    printf("0. Exit\\n");\n    printf("==========================\\n");\n    printf("Choice: ");\n}\n\nint main() {\n    StudentDB db;\n    db_init(&db);\n\n    printf("Database initialized.\\n");\n    printf("Capacity: %d students\\n", MAX_STUDENTS);\n    printf("Student struct size: %lu bytes\\n", sizeof(Student));\n\n    show_menu();\n\n    printf("\\n(Full implementation in next sections)\\n");\n    return 0;\n}',
        expectedOutput: 'Database initialized.\nCapacity: 100 students\nStudent struct size: 60 bytes\n\n==========================\n  Student Management System\n==========================\n1. Add Student\n2. Display All Students\n3. Search Student\n4. Delete Student\n5. Save to File\n6. Load from File\n0. Exit\n==========================\nChoice: \n(Full implementation in next sections)',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: 'CRUD 기능 구현',
        headingEn: 'CRUD Implementation',
        text: [
          'CRUD는 Create(생성), Read(조회), Update(수정), Delete(삭제)의 약자로, 데이터 관리의 네 가지 기본 연산입니다. 학생 관리 시스템에서는 학생 추가(Create), 전체/개별 조회(Read), 검색 및 수정(Update), 삭제(Delete) 기능을 구현합니다. 각 기능을 독립적인 함수로 분리하면 코드의 가독성과 유지보수성이 크게 향상됩니다.',
          '학생 추가 시에는 데이터베이스가 가득 찼는지 확인하고, 중복 학번을 검사해야 합니다. 검색 기능은 학번 또는 이름으로 검색할 수 있도록 구현합니다. 삭제 기능은 해당 학생을 찾은 후, 배열의 마지막 요소를 삭제된 위치로 옮기는 방식으로 효율적으로 처리합니다.',
          '아래 예제는 추가, 전체 표시, 검색, 삭제 기능이 모두 구현된 코드입니다. 테스트를 위해 main() 함수에서 직접 함수를 호출하여 동작을 확인합니다.'
        ],
        textEn: [
          'CRUD stands for Create, Read, Update, and Delete -- the four basic data management operations. In the student management system, we implement adding students (Create), viewing all or individual records (Read), searching and modifying (Update), and removing records (Delete). Separating each function improves code readability and maintainability.',
          'When adding a student, check if the database is full and verify that the student ID is not a duplicate. The search function should support searching by student ID or name. The delete function efficiently removes a student by finding them and moving the last element to fill the gap.',
          'The example below includes fully implemented add, display all, search, and delete functions. The main() function directly calls these functions for testing purposes.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#define MAX_NAME 50\n#define MAX_STUDENTS 100\n\ntypedef struct {\n    int id;\n    char name[MAX_NAME];\n    float grade;\n} Student;\n\ntypedef struct {\n    Student students[MAX_STUDENTS];\n    int count;\n} StudentDB;\n\nvoid db_init(StudentDB *db) {\n    db->count = 0;\n}\n\n/* CREATE: Add a student */\nint add_student(StudentDB *db, int id, const char *name, float grade) {\n    if (db->count >= MAX_STUDENTS) {\n        printf("Error: Database is full.\\n");\n        return -1;\n    }\n    /* Check for duplicate ID */\n    for (int i = 0; i < db->count; i++) {\n        if (db->students[i].id == id) {\n            printf("Error: Student ID %d already exists.\\n", id);\n            return -1;\n        }\n    }\n    Student *s = &db->students[db->count];\n    s->id = id;\n    strncpy(s->name, name, MAX_NAME - 1);\n    s->name[MAX_NAME - 1] = \'\\0\';\n    s->grade = grade;\n    db->count++;\n    printf("Added: [%d] %s (%.1f)\\n", id, name, grade);\n    return 0;\n}\n\n/* READ: Display all students */\nvoid display_all(const StudentDB *db) {\n    if (db->count == 0) {\n        printf("No students in database.\\n");\n        return;\n    }\n    printf("\\n%-8s %-20s %s\\n", "ID", "Name", "Grade");\n    printf("---------- -------------------- ------\\n");\n    for (int i = 0; i < db->count; i++) {\n        printf("%-8d %-20s %.1f\\n",\n               db->students[i].id,\n               db->students[i].name,\n               db->students[i].grade);\n    }\n    printf("Total: %d student(s)\\n", db->count);\n}\n\n/* READ: Search by ID */\nint search_by_id(const StudentDB *db, int id) {\n    for (int i = 0; i < db->count; i++) {\n        if (db->students[i].id == id) {\n            printf("Found: [%d] %s - Grade: %.1f\\n",\n                   db->students[i].id,\n                   db->students[i].name,\n                   db->students[i].grade);\n            return i;\n        }\n    }\n    printf("Student ID %d not found.\\n", id);\n    return -1;\n}\n\n/* DELETE: Remove by ID */\nint delete_student(StudentDB *db, int id) {\n    for (int i = 0; i < db->count; i++) {\n        if (db->students[i].id == id) {\n            printf("Deleted: [%d] %s\\n",\n                   db->students[i].id,\n                   db->students[i].name);\n            /* Move last element to fill gap */\n            db->students[i] = db->students[db->count - 1];\n            db->count--;\n            return 0;\n        }\n    }\n    printf("Student ID %d not found.\\n", id);\n    return -1;\n}\n\nint main() {\n    StudentDB db;\n    db_init(&db);\n\n    /* Test: Add students */\n    printf("=== Adding Students ===\\n");\n    add_student(&db, 1001, "Kim Minjun", 92.5);\n    add_student(&db, 1002, "Lee Soyeon", 88.0);\n    add_student(&db, 1003, "Park Jiwoo", 95.3);\n    add_student(&db, 1004, "Choi Yuna", 79.8);\n\n    /* Test: Display all */\n    printf("\\n=== All Students ===");\n    display_all(&db);\n\n    /* Test: Search */\n    printf("\\n=== Search ===\\n");\n    search_by_id(&db, 1003);\n    search_by_id(&db, 9999);\n\n    /* Test: Delete */\n    printf("\\n=== Delete ===\\n");\n    delete_student(&db, 1002);\n\n    printf("\\n=== After Deletion ===");\n    display_all(&db);\n\n    return 0;\n}',
        expectedOutput: '=== Adding Students ===\nAdded: [1001] Kim Minjun (92.5)\nAdded: [1002] Lee Soyeon (88.0)\nAdded: [1003] Park Jiwoo (95.3)\nAdded: [1004] Choi Yuna (79.8)\n\n=== All Students ===\nID       Name                 Grade\n---------- -------------------- ------\n1001     Kim Minjun           92.5\n1002     Lee Soyeon           88.0\n1003     Park Jiwoo           95.3\n1004     Choi Yuna            79.8\nTotal: 4 student(s)\n\n=== Search ===\nFound: [1003] Park Jiwoo - Grade: 95.3\nStudent ID 9999 not found.\n\n=== Delete ===\nDeleted: [1002] Lee Soyeon\n\n=== After Deletion ===\nID       Name                 Grade\n---------- -------------------- ------\n1001     Kim Minjun           92.5\n1004     Choi Yuna            79.8\n1003     Park Jiwoo           95.3\nTotal: 3 student(s)',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '파일 저장과 불러오기',
        headingEn: 'File Save & Load',
        text: [
          '프로그램을 종료하면 메모리의 데이터는 모두 사라집니다. 데이터를 영구적으로 저장하려면 파일에 기록해야 합니다. C에서는 fwrite()와 fread()를 사용하여 구조체 데이터를 이진 형식으로 파일에 저장하고 불러올 수 있습니다. 이진 파일은 텍스트 파일보다 읽기/쓰기 속도가 빠르고 데이터 크기가 작습니다.',
          'fwrite()는 메모리의 데이터를 그대로 파일에 씁니다. 구조체 배열 전체를 한 번에 저장할 수 있어 매우 효율적입니다. fread()는 파일에서 데이터를 읽어 메모리로 복원합니다. 파일을 열 때는 이진 모드("wb"는 쓰기, "rb"는 읽기)를 사용해야 합니다.',
          '아래 예제는 학생 데이터를 파일에 저장하고 다시 불러오는 완전한 구현입니다. 파일 열기 실패에 대한 에러 처리도 포함되어 있으며, 저장 후 다시 불러와서 데이터가 정확하게 복원되는지 확인합니다.'
        ],
        textEn: [
          'When a program exits, all data in memory is lost. To store data permanently, it must be written to a file. In C, fwrite() and fread() can save and load struct data in binary format. Binary files are faster to read/write and smaller in size than text files.',
          'fwrite() writes memory data directly to a file. It can save an entire struct array at once, making it very efficient. fread() reads data from a file and restores it to memory. When opening files, use binary mode ("wb" for writing, "rb" for reading).',
          'The example below provides a complete implementation of saving student data to a file and loading it back. It includes error handling for file open failures and verifies that data is accurately restored after loading.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#define MAX_NAME 50\n#define MAX_STUDENTS 100\n#define DATA_FILE "students.dat"\n\ntypedef struct {\n    int id;\n    char name[MAX_NAME];\n    float grade;\n} Student;\n\ntypedef struct {\n    Student students[MAX_STUDENTS];\n    int count;\n} StudentDB;\n\nvoid db_init(StudentDB *db) { db->count = 0; }\n\nint add_student(StudentDB *db, int id, const char *name, float grade) {\n    if (db->count >= MAX_STUDENTS) return -1;\n    Student *s = &db->students[db->count];\n    s->id = id;\n    strncpy(s->name, name, MAX_NAME - 1);\n    s->name[MAX_NAME - 1] = \'\\0\';\n    s->grade = grade;\n    db->count++;\n    return 0;\n}\n\n/* SAVE: Write database to binary file */\nint save_to_file(const StudentDB *db, const char *filename) {\n    FILE *fp = fopen(filename, "wb");\n    if (fp == NULL) {\n        perror("Error opening file for writing");\n        return -1;\n    }\n\n    /* Write the count first */\n    fwrite(&db->count, sizeof(int), 1, fp);\n\n    /* Write all student records */\n    fwrite(db->students, sizeof(Student), db->count, fp);\n\n    fclose(fp);\n    printf("Saved %d student(s) to \'%s\'\\n", db->count, filename);\n    return 0;\n}\n\n/* LOAD: Read database from binary file */\nint load_from_file(StudentDB *db, const char *filename) {\n    FILE *fp = fopen(filename, "rb");\n    if (fp == NULL) {\n        perror("Error opening file for reading");\n        return -1;\n    }\n\n    /* Read the count */\n    if (fread(&db->count, sizeof(int), 1, fp) != 1) {\n        fprintf(stderr, "Error reading student count\\n");\n        fclose(fp);\n        return -1;\n    }\n\n    /* Validate count */\n    if (db->count < 0 || db->count > MAX_STUDENTS) {\n        fprintf(stderr, "Invalid student count: %d\\n", db->count);\n        db->count = 0;\n        fclose(fp);\n        return -1;\n    }\n\n    /* Read student records */\n    size_t read = fread(db->students, sizeof(Student), db->count, fp);\n    if ((int)read != db->count) {\n        fprintf(stderr, "Error: expected %d records, read %lu\\n",\n                db->count, read);\n        fclose(fp);\n        return -1;\n    }\n\n    fclose(fp);\n    printf("Loaded %d student(s) from \'%s\'\\n", db->count, filename);\n    return 0;\n}\n\nvoid display_all(const StudentDB *db) {\n    printf("\\n%-8s %-20s %s\\n", "ID", "Name", "Grade");\n    printf("-------- -------------------- ------\\n");\n    for (int i = 0; i < db->count; i++) {\n        printf("%-8d %-20s %.1f\\n",\n               db->students[i].id,\n               db->students[i].name,\n               db->students[i].grade);\n    }\n}\n\nint main() {\n    StudentDB db;\n    db_init(&db);\n\n    /* Add sample data */\n    add_student(&db, 1001, "Kim Minjun", 92.5);\n    add_student(&db, 1002, "Lee Soyeon", 88.0);\n    add_student(&db, 1003, "Park Jiwoo", 95.3);\n\n    printf("=== Original Data ===%s", "");\n    display_all(&db);\n\n    /* Save to file */\n    printf("\\n");\n    save_to_file(&db, DATA_FILE);\n\n    /* Clear database */\n    db_init(&db);\n    printf("\\nDatabase cleared. Count: %d\\n", db.count);\n\n    /* Load from file */\n    printf("\\n");\n    load_from_file(&db, DATA_FILE);\n\n    printf("\\n=== Loaded Data ===%s", "");\n    display_all(&db);\n\n    printf("\\nFile persistence test complete!\\n");\n    return 0;\n}',
        expectedOutput: '=== Original Data ===\nID       Name                 Grade\n-------- -------------------- ------\n1001     Kim Minjun           92.5\n1002     Lee Soyeon           88.0\n1003     Park Jiwoo           95.3\n\nSaved 3 student(s) to \'students.dat\'\n\nDatabase cleared. Count: 0\n\nLoaded 3 student(s) from \'students.dat\'\n\n=== Loaded Data ===\nID       Name                 Grade\n-------- -------------------- ------\n1001     Kim Minjun           92.5\n1002     Lee Soyeon           88.0\n1003     Park Jiwoo           95.3\n\nFile persistence test complete!',
        tip: '프로그램을 작은 기능 단위로 나누어 개발하세요.',
        tipEn: 'Break the program into small functional units.',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      }
    ]
  }
}

export default applied
