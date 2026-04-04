// Step 10: Pointers - 포인터
// Addresses, dereferencing, pointer basics

const step10 = {
  id: 10,
  title: 'Pointers',
  titleKo: '포인터',
  description: 'Addresses, dereferencing, and pointer basics in C',
  descriptionKo: '주소, 역참조, 포인터 기초',
  examples: [
    {
      id: 's10e1',
      title: '포인터 기초 개념',
      titleEn: 'Pointer Basic Concepts',
      description: '포인터, 주소, 역참조의 기본 개념입니다.',
      descriptionEn: 'Basic concepts of pointers, addresses, and dereferencing.',
      code: `#include <stdio.h>

int main() {
    int num = 42;
    int *ptr = &num; // ptr stores the address of num

    printf("=== Pointer Basics ===\\n");
    printf("num value:     %d\\n", num);
    printf("ptr deref:     %d (*ptr = value at address)\\n", *ptr);

    // Modify through pointer
    *ptr = 100;
    printf("\\nAfter *ptr = 100:\\n");
    printf("num = %d\\n", num); // num is changed!
    printf("*ptr = %d\\n", *ptr);

    // Pointer size (all pointer types have same size)
    printf("\\nsizeof(int):    %d bytes\\n", (int)sizeof(int));
    printf("sizeof(double): %d bytes\\n", (int)sizeof(double));
    printf("sizeof(char):   %d bytes\\n", (int)sizeof(char));

    return 0;
}`,
      expectedOutput: `=== Pointer Basics ===
num value:     42
ptr deref:     42 (*ptr = value at address)

After *ptr = 100:
num = 100
*ptr = 100

sizeof(int):    4 bytes
sizeof(double): 8 bytes
sizeof(char):   1 bytes`,
      explanation: '&는 주소를 구하고, *는 주소에 저장된 값을 읽습니다. 포인터를 통해 원본 변수를 수정할 수 있습니다.',
      explanationEn: '& gets the address, * reads the value at the address. You can modify the original variable through a pointer.'
    },
    {
      id: 's10e2',
      title: 'NULL 포인터',
      titleEn: 'NULL Pointer',
      description: '초기화되지 않은 포인터와 NULL 포인터입니다.',
      descriptionEn: 'Uninitialized pointers and NULL pointers.',
      code: `#include <stdio.h>

int main() {
    // Always initialize pointers
    int *ptr = NULL; // safe: points to nothing

    // Check before dereferencing
    if (ptr == NULL) {
        printf("ptr is NULL - cannot dereference\\n");
    }

    // Assign a valid address
    int value = 42;
    ptr = &value;

    if (ptr != NULL) {
        printf("ptr is valid: *ptr = %d\\n", *ptr);
    }

    // After use, set back to NULL
    ptr = NULL;
    printf("ptr set back to NULL\\n");

    // Common pattern: function that may fail
    // if (ptr) is same as if (ptr != NULL)
    ptr = &value;
    if (ptr) {
        printf("Shorthand check: *ptr = %d\\n", *ptr);
    }

    return 0;
}`,
      expectedOutput: `ptr is NULL - cannot dereference
ptr is valid: *ptr = 42
ptr set back to NULL
Shorthand check: *ptr = 42`,
      explanation: 'NULL 포인터를 역참조하면 프로그램이 크래시합니다. 항상 NULL 확인 후 사용하세요.',
      explanationEn: 'Dereferencing NULL causes a crash. Always check for NULL before use.'
    },
    {
      id: 's10e3',
      title: '포인터로 값 교환 (swap)',
      titleEn: 'Swap Values with Pointers',
      description: '포인터를 사용하여 함수에서 원본 값을 수정합니다.',
      descriptionEn: 'Modify original values in functions using pointers.',
      code: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void getMinMax(const int arr[], int n, int *min, int *max) {
    *min = arr[0];
    *max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] < *min) *min = arr[i];
        if (arr[i] > *max) *max = arr[i];
    }
}

int main() {
    // Swap
    int x = 10, y = 20;
    printf("Before swap: x=%d, y=%d\\n", x, y);
    swap(&x, &y);
    printf("After swap:  x=%d, y=%d\\n", x, y);

    // Multiple return values via pointers
    int arr[] = {34, 12, 67, 5, 89, 23};
    int n = 6;
    int min, max;

    getMinMax(arr, n, &min, &max);
    printf("\\nArray min: %d, max: %d\\n", min, max);

    return 0;
}`,
      expectedOutput: `Before swap: x=10, y=20
After swap:  x=20, y=10

Array min: 5, max: 89`,
      explanation: '포인터로 변수의 주소를 전달하면 함수에서 원본 값을 수정할 수 있습니다. C에서 여러 값을 반환하는 방법입니다.',
      explanationEn: 'Passing variable addresses via pointers allows functions to modify originals. This is how C returns multiple values.'
    },
    {
      id: 's10e4',
      title: '포인터와 배열',
      titleEn: 'Pointers and Arrays',
      description: '배열 이름은 첫 번째 요소의 포인터입니다.',
      descriptionEn: 'Array name is a pointer to the first element.',
      code: `#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr; // array name = address of first element

    // Access via array indexing
    printf("Array indexing: ");
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);
    printf("\\n");

    // Access via pointer arithmetic
    printf("Pointer arith:  ");
    for (int i = 0; i < 5; i++) printf("%d ", *(ptr + i));
    printf("\\n");

    // Access via pointer increment
    printf("Pointer incr:   ");
    int *p = arr;
    for (int i = 0; i < 5; i++) {
        printf("%d ", *p);
        p++;
    }
    printf("\\n");

    // arr[i] is equivalent to *(arr + i)
    printf("\\narr[2] = %d\\n", arr[2]);
    printf("*(arr + 2) = %d\\n", *(arr + 2));

    return 0;
}`,
      expectedOutput: `Array indexing: 10 20 30 40 50
Pointer arith:  10 20 30 40 50
Pointer incr:   10 20 30 40 50

arr[2] = 30
*(arr + 2) = 30`,
      explanation: '배열 이름은 첫 번째 요소의 주소입니다. arr[i]는 *(arr+i)와 동일합니다.',
      explanationEn: 'Array name is the address of the first element. arr[i] is equivalent to *(arr+i).'
    },
    {
      id: 's10e5',
      title: '포인터 연산',
      titleEn: 'Pointer Arithmetic',
      description: '포인터에 정수를 더하거나 빼는 연산입니다.',
      descriptionEn: 'Adding and subtracting integers from pointers.',
      code: `#include <stdio.h>

int main() {
    int arr[] = {100, 200, 300, 400, 500};
    int *ptr = arr;

    printf("Pointer arithmetic:\\n");
    printf("ptr     -> %d\\n", *ptr);
    printf("ptr + 1 -> %d\\n", *(ptr + 1));
    printf("ptr + 2 -> %d\\n", *(ptr + 2));

    // Pointer difference
    int *start = &arr[0];
    int *end = &arr[4];
    printf("\\nDistance: %d elements\\n", (int)(end - start));

    // Different types have different step sizes
    printf("\\nStep sizes:\\n");
    printf("sizeof(int) = %d bytes\\n", (int)sizeof(int));
    printf("sizeof(char) = %d byte\\n", (int)sizeof(char));
    printf("sizeof(double) = %d bytes\\n", (int)sizeof(double));

    return 0;
}`,
      expectedOutput: `Pointer arithmetic:
ptr     -> 100
ptr + 1 -> 200
ptr + 2 -> 300

Distance: 4 elements

Step sizes:
sizeof(int) = 4 bytes
sizeof(char) = 1 byte
sizeof(double) = 8 bytes`,
      explanation: '포인터 +1은 자료형 크기만큼 주소가 증가합니다. int*는 4바이트, double*는 8바이트씩 이동합니다.',
      explanationEn: 'Pointer +1 advances by the data type size. int* moves 4 bytes, double* moves 8 bytes.'
    },
    {
      id: 's10e6',
      title: '포인터와 문자열',
      titleEn: 'Pointers and Strings',
      description: '문자열을 포인터로 다루는 방법입니다.',
      descriptionEn: 'Working with strings using pointers.',
      code: `#include <stdio.h>
#include <string.h>

// Custom strlen using pointer
int my_strlen(const char *str) {
    const char *p = str;
    while (*p != '\\0') p++;
    return (int)(p - str);
}

// Custom strcpy using pointer
void my_strcpy(char *dest, const char *src) {
    while (*src) {
        *dest = *src;
        dest++;
        src++;
    }
    *dest = '\\0';
}

int main() {
    // String pointer vs array
    char arr[] = "Hello";        // mutable copy
    const char *ptr = "World";   // pointer to literal (read-only)

    printf("arr: %s\\n", arr);
    printf("ptr: %s\\n", ptr);

    // Can modify arr
    arr[0] = 'J';
    printf("Modified arr: %s\\n", arr);

    // Custom functions
    printf("\\nmy_strlen(\\"Hello\\"): %d\\n", my_strlen("Hello"));
    printf("my_strlen(\\"\\"): %d\\n", my_strlen(""));

    char buffer[20];
    my_strcpy(buffer, "Copied!");
    printf("my_strcpy result: %s\\n", buffer);

    // Iterate string with pointer
    printf("\\nChars: ");
    for (const char *p = "ABC"; *p; p++) {
        printf("'%c' ", *p);
    }
    printf("\\n");

    return 0;
}`,
      expectedOutput: `arr: Hello
ptr: World
Modified arr: Jello

my_strlen("Hello"): 5
my_strlen(""): 0
my_strcpy result: Copied!

Chars: 'A' 'B' 'C' `,
      explanation: '문자열 리터럴은 읽기 전용입니다. char 배열은 수정 가능합니다. *p로 현재 문자에 접근합니다.',
      explanationEn: 'String literals are read-only. Char arrays are modifiable. *p accesses the current character.'
    },
    {
      id: 's10e7',
      title: '이중 포인터',
      titleEn: 'Double Pointers',
      description: '포인터의 포인터(이중 포인터)입니다.',
      descriptionEn: 'Pointer to pointer (double pointer).',
      code: `#include <stdio.h>

int main() {
    int value = 42;
    int *ptr = &value;
    int **dptr = &ptr;

    printf("=== Double Pointer ===\\n");
    printf("value = %d\\n", value);
    printf("*ptr = %d\\n", *ptr);
    printf("**dptr = %d\\n", **dptr);

    // Modify through double pointer
    **dptr = 99;
    printf("\\nAfter **dptr = 99: value = %d\\n", value);

    // Practical: 2D array simulation with pointer array
    int row1[] = {1, 2, 3};
    int row2[] = {4, 5, 6};
    int row3[] = {7, 8, 9};
    int *matrix[] = {row1, row2, row3};

    printf("\\nMatrix via pointer array:\\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }

    return 0;
}`,
      expectedOutput: `=== Double Pointer ===
value = 42
*ptr = 42
**dptr = 42

After **dptr = 99: value = 99

Matrix via pointer array:
1 2 3
4 5 6
7 8 9 `,
      explanation: '이중 포인터(**ptr)는 포인터의 주소를 저장합니다. 함수에서 포인터 자체를 변경할 때 필요합니다.',
      explanationEn: 'Double pointer (**ptr) stores a pointer address. Needed when a function modifies the pointer itself.'
    },
    {
      id: 's10e8',
      title: 'const와 포인터',
      titleEn: 'const and Pointers',
      description: 'const 포인터의 다양한 조합입니다.',
      descriptionEn: 'Various combinations of const with pointers.',
      code: `#include <stdio.h>

int main() {
    int x = 10, y = 20;

    // 1. Pointer to const int (data is read-only)
    const int *p1 = &x;
    // *p1 = 30; // ERROR: cannot modify data
    p1 = &y;      // OK: can change pointer
    printf("const int *p1: data=%d\\n", *p1);

    // 2. Const pointer to int (pointer is fixed)
    int *const p2 = &x;
    *p2 = 30;     // OK: can modify data
    // p2 = &y;   // ERROR: cannot change pointer
    printf("int *const p2: data=%d\\n", *p2);

    // 3. Const pointer to const int (both fixed)
    const int *const p3 = &y;
    // *p3 = 40;  // ERROR
    // p3 = &x;   // ERROR
    printf("const int *const p3: data=%d\\n", *p3);

    // Practical: function parameters
    printf("\\nPractical usage:\\n");
    // const int* = "I won't modify your data"
    // int* const = "I won't point elsewhere"
    printf("  const int* -> read-only data\\n");
    printf("  int* const -> fixed pointer\\n");
    printf("  const int* const -> both fixed\\n");

    return 0;
}`,
      expectedOutput: `const int *p1: data=20
int *const p2: data=30
const int *const p3: data=20

Practical usage:
  const int* -> read-only data
  int* const -> fixed pointer
  const int* const -> both fixed`,
      explanation: 'const int *p는 데이터 변경 불가, int *const p는 포인터 변경 불가, const int *const p는 둘 다 불가입니다.',
      explanationEn: 'const int *p: data is read-only. int *const p: pointer is fixed. const int *const p: both fixed.'
    },
    {
      id: 's10e9',
      title: '함수 포인터 기초',
      titleEn: 'Function Pointer Basics',
      description: '함수를 가리키는 포인터의 기초입니다.',
      descriptionEn: 'Basics of pointers that point to functions.',
      code: `#include <stdio.h>

int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }
int multiply(int a, int b) { return a * b; }

int operate(int a, int b, int (*func)(int, int)) {
    return func(a, b);
}

int main() {
    // Function pointer declaration
    int (*op)(int, int);

    op = add;
    printf("add(10, 3) = %d\\n", op(10, 3));

    op = subtract;
    printf("subtract(10, 3) = %d\\n", op(10, 3));

    op = multiply;
    printf("multiply(10, 3) = %d\\n", op(10, 3));

    // Using operate function with function pointer
    printf("\\nUsing operate():\\n");
    printf("operate(5, 3, add) = %d\\n", operate(5, 3, add));
    printf("operate(5, 3, subtract) = %d\\n", operate(5, 3, subtract));
    printf("operate(5, 3, multiply) = %d\\n", operate(5, 3, multiply));

    return 0;
}`,
      expectedOutput: `add(10, 3) = 13
subtract(10, 3) = 7
multiply(10, 3) = 30

Using operate():
operate(5, 3, add) = 8
operate(5, 3, subtract) = 2
operate(5, 3, multiply) = 15`,
      explanation: '함수 포인터는 함수의 주소를 저장합니다. 콜백 패턴이나 전략 패턴에 유용합니다.',
      explanationEn: 'Function pointers store the address of a function. Useful for callback and strategy patterns.'
    },
    {
      id: 's10e10',
      title: '포인터 종합 예제',
      titleEn: 'Comprehensive Pointer Example',
      description: '포인터의 다양한 활용을 종합합니다.',
      descriptionEn: 'Comprehensive use of various pointer techniques.',
      code: `#include <stdio.h>
#include <string.h>

void reverseArray(int *arr, int n) {
    int *left = arr;
    int *right = arr + n - 1;
    while (left < right) {
        int temp = *left;
        *left = *right;
        *right = temp;
        left++;
        right--;
    }
}

int sumArray(const int *arr, int n) {
    int sum = 0;
    for (const int *p = arr; p < arr + n; p++) {
        sum += *p;
    }
    return sum;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;

    printf("Original: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");

    printf("Sum: %d\\n", sumArray(arr, n));

    reverseArray(arr, n);
    printf("Reversed: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");

    printf("Sum after reverse: %d\\n", sumArray(arr, n));

    // String manipulation with pointers
    char str[] = "Hello, Pointers!";
    char *p = str;
    int vowels = 0;
    while (*p) {
        if (*p == 'a' || *p == 'e' || *p == 'i' || *p == 'o' || *p == 'u' ||
            *p == 'A' || *p == 'E' || *p == 'I' || *p == 'O' || *p == 'U') {
            vowels++;
        }
        p++;
    }
    printf("\\n\\"%s\\" has %d vowels\\n", str, vowels);

    return 0;
}`,
      expectedOutput: `Original: 1 2 3 4 5
Sum: 15
Reversed: 5 4 3 2 1
Sum after reverse: 15

"Hello, Pointers!" has 5 vowels`,
      explanation: '포인터를 사용한 배열 뒤집기, 합계 구하기, 문자열 순회 등 실전에서 자주 사용하는 패턴입니다.',
      explanationEn: 'Practical patterns: array reversal, sum calculation, and string traversal using pointers.'
    }
  ]
}

export default step10
