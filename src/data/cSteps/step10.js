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
    printf("num address:   %p\\n", (void*)&num);
    printf("ptr value:     %p (stores address)\\n", (void*)ptr);
    printf("ptr deref:     %d (*ptr = value at address)\\n", *ptr);

    // Modify through pointer
    *ptr = 100;
    printf("\\nAfter *ptr = 100:\\n");
    printf("num = %d\\n", num); // num is changed!
    printf("*ptr = %d\\n", *ptr);

    // Pointer size
    printf("\\nPointer sizes:\\n");
    printf("sizeof(int*):    %lu bytes\\n", sizeof(int*));
    printf("sizeof(double*): %lu bytes\\n", sizeof(double*));
    printf("sizeof(char*):   %lu bytes\\n", sizeof(char*));

    return 0;
}`,
      expectedOutput: `=== Pointer Basics ===
num value:     42
num address:   0x7ffee1234568
ptr value:     0x7ffee1234568 (stores address)
ptr deref:     42 (*ptr = value at address)

After *ptr = 100:
num = 100
*ptr = 100

Pointer sizes:
sizeof(int*):    8 bytes
sizeof(double*): 8 bytes
sizeof(char*):   8 bytes`,
      explanation: '&는 주소를 구하고, *는 주소에 저장된 값을 읽습니다. 포인터 크기는 시스템의 주소 크기와 같습니다.',
      explanationEn: '& gets the address, * reads the value at the address. Pointer size equals the system address size.'
    },
    {
      id: 's10e2',
      title: 'NULL 포인터',
      titleEn: 'NULL Pointer',
      description: '초기화되지 않은 포인터와 NULL 포인터입니다.',
      descriptionEn: 'Uninitialized pointers and NULL pointers.',
      code: `#include <stdio.h>
#include <stdlib.h>

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

    // NULL is typically defined as ((void*)0) or 0
    printf("\\nNULL value: %p\\n", (void*)NULL);

    return 0;
}`,
      expectedOutput: `ptr is NULL - cannot dereference
ptr is valid: *ptr = 42
ptr set back to NULL
Shorthand check: *ptr = 42

NULL value: (nil)`,
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
    int n = sizeof(arr) / sizeof(arr[0]);
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

    printf("=== Array-Pointer Relationship ===\\n");
    printf("arr = %p\\n", (void*)arr);
    printf("&arr[0] = %p\\n", (void*)&arr[0]);
    printf("ptr = %p\\n\\n", (void*)ptr);

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
      expectedOutput: `=== Array-Pointer Relationship ===
arr = 0x7ffee1234560
&arr[0] = 0x7ffee1234560
ptr = 0x7ffee1234560

Array indexing: 10 20 30 40 50
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
    printf("ptr     -> %d (at %p)\\n", *ptr, (void*)ptr);
    printf("ptr + 1 -> %d (at %p)\\n", *(ptr + 1), (void*)(ptr + 1));
    printf("ptr + 2 -> %d (at %p)\\n", *(ptr + 2), (void*)(ptr + 2));

    // Pointer difference
    int *start = &arr[0];
    int *end = &arr[4];
    printf("\\nDistance: %ld elements\\n", end - start);

    // Different types have different step sizes
    printf("\\nStep sizes:\\n");
    printf("sizeof(int) = %lu -> int* moves %lu bytes\\n",
           sizeof(int), sizeof(int));

    char str[] = "Hello";
    char *cp = str;
    printf("sizeof(char) = %lu -> char* moves %lu byte\\n",
           sizeof(char), sizeof(char));

    double darr[] = {1.0, 2.0, 3.0};
    double *dp = darr;
    printf("sizeof(double) = %lu -> double* moves %lu bytes\\n",
           sizeof(double), sizeof(double));

    return 0;
}`,
      expectedOutput: `Pointer arithmetic:
ptr     -> 100 (at 0x7ffee1234560)
ptr + 1 -> 200 (at 0x7ffee1234564)
ptr + 2 -> 300 (at 0x7ffee1234568)

Distance: 4 elements

Step sizes:
sizeof(int) = 4 -> int* moves 4 bytes
sizeof(char) = 1 -> char* moves 1 byte
sizeof(double) = 8 -> double* moves 8 bytes`,
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

// Custom strlen using pointer
int my_strlen(const char *str) {
    const char *p = str;
    while (*p != '\\0') p++;
    return p - str;
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
    printf("\\nmy_strlen(\\\"Hello\\\"): %d\\n", my_strlen("Hello"));
    printf("my_strlen(\\\"\\\"): %d\\n", my_strlen(""));

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
#include <stdlib.h>

void allocateArray(int **ptr, int n) {
    *ptr = (int *)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        (*ptr)[i] = (i + 1) * 10;
    }
}

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

    // Practical: function that allocates memory
    int *arr = NULL;
    int n = 5;
    allocateArray(&arr, n);

    printf("\\nDynamically allocated: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");

    free(arr);

    return 0;
}`,
      expectedOutput: `=== Double Pointer ===
value = 42
*ptr = 42
**dptr = 42

After **dptr = 99: value = 99

Dynamically allocated: 10 20 30 40 50 `,
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
      title: '포인터로 연결 리스트 맛보기',
      titleEn: 'Linked List Preview with Pointers',
      description: '포인터로 간단한 연결 리스트를 만들어봅니다.',
      descriptionEn: 'Build a simple linked list with pointers.',
      code: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node* createNode(int data) {
    Node *node = (Node *)malloc(sizeof(Node));
    node->data = data;
    node->next = NULL;
    return node;
}

void printList(Node *head) {
    Node *curr = head;
    while (curr != NULL) {
        printf("%d", curr->data);
        if (curr->next) printf(" -> ");
        curr = curr->next;
    }
    printf(" -> NULL\\n");
}

void freeList(Node *head) {
    while (head) {
        Node *temp = head;
        head = head->next;
        free(temp);
    }
}

int main() {
    // Create nodes
    Node *head = createNode(10);
    head->next = createNode(20);
    head->next->next = createNode(30);
    head->next->next->next = createNode(40);

    printf("Linked List: ");
    printList(head);

    // Count nodes
    int count = 0;
    for (Node *p = head; p != NULL; p = p->next) count++;
    printf("Node count: %d\\n", count);

    // Sum values
    int sum = 0;
    for (Node *p = head; p != NULL; p = p->next) sum += p->data;
    printf("Sum: %d\\n", sum);

    freeList(head);
    printf("Memory freed.\\n");

    return 0;
}`,
      expectedOutput: `Linked List: 10 -> 20 -> 30 -> 40 -> NULL
Node count: 4
Sum: 100
Memory freed.`,
      explanation: '연결 리스트는 포인터의 대표적인 활용 사례입니다. 각 노드가 다음 노드의 주소를 가리킵니다.',
      explanationEn: 'Linked lists are a classic pointer application. Each node points to the next node address.'
    },
    {
      id: 's10e10',
      title: 'void 포인터와 동적 메모리',
      titleEn: 'Void Pointers & Dynamic Memory',
      description: '범용 포인터 void*와 malloc/free 기초입니다.',
      descriptionEn: 'Generic void* pointers and malloc/free basics.',
      code: `#include <stdio.h>
#include <stdlib.h>

void printValue(void *ptr, char type) {
    switch (type) {
        case 'i': printf("%d", *(int*)ptr); break;
        case 'd': printf("%.2f", *(double*)ptr); break;
        case 'c': printf("%c", *(char*)ptr); break;
    }
}

int main() {
    // void* can point to any type
    int i = 42;
    double d = 3.14;
    char c = 'X';

    void *vp;
    vp = &i; printf("int: ");    printValue(vp, 'i'); printf("\\n");
    vp = &d; printf("double: "); printValue(vp, 'd'); printf("\\n");
    vp = &c; printf("char: ");   printValue(vp, 'c'); printf("\\n");

    // Dynamic memory allocation
    printf("\\n=== Dynamic Memory ===\\n");
    int n = 5;
    int *arr = (int *)malloc(n * sizeof(int));

    if (arr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }

    for (int j = 0; j < n; j++) arr[j] = (j + 1) * (j + 1);

    printf("Dynamic array: ");
    for (int j = 0; j < n; j++) printf("%d ", arr[j]);
    printf("\\n");

    free(arr);
    arr = NULL; // prevent dangling pointer
    printf("Memory freed and pointer set to NULL.\\n");

    return 0;
}`,
      expectedOutput: `int: 42
double: 3.14
char: X

=== Dynamic Memory ===
Dynamic array: 1 4 9 16 25
Memory freed and pointer set to NULL.`,
      explanation: 'void*는 어떤 자료형이든 가리킬 수 있지만, 역참조 시 캐스팅이 필요합니다. malloc으로 할당한 메모리는 반드시 free해야 합니다.',
      explanationEn: 'void* can point to any type but needs casting for dereferencing. Always free() memory allocated with malloc().'
    }
  ]
}

export default step10
