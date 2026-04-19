import{u as t,j as e,L as r}from"./index-CPIg0ztY.js";import{C as n}from"./CodeEditor-APdGvzi4.js";function s(){const{lang:i}=t();return e.jsxs("div",{className:"c-lesson-page",children:[e.jsxs("div",{className:"c-lesson-nav-top",children:[e.jsxs(r,{to:"/c-learning",children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",i==="en"?"Back to Curriculum":"커리큘럼으로 돌아가기"]}),e.jsx("span",{className:"c-lesson-week",children:"Step 07"})]}),e.jsxs("h1",{className:"c-lesson-title",children:[e.jsx("i",{className:"fa-solid fa-memory"}),i==="en"?"Step 7: Advanced Pointers & Dynamic Memory":"7단계: 포인터 심화와 동적 메모리"]}),e.jsxs("div",{className:"c-lesson-warning",style:{padding:"12px 16px",margin:"0 0 20px",background:"var(--warning-bg, #fff3cd)",color:"var(--warning-text, #856404)",borderRadius:"8px",fontSize:"0.9rem",border:"1px solid var(--warning-border, #ffc107)",lineHeight:1.6},children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation",style:{marginRight:"8px"}}),i==="en"?"This lesson uses malloc, free, and other dynamic memory features not supported by the browser compiler (JSCPP). Please use a local compiler like GCC to run these examples.":"이 레슨은 malloc, free 등 브라우저 컴파일러(JSCPP)에서 지원하지 않는 동적 메모리 기능을 사용합니다. GCC 등 로컬 컴파일러에서 실행해 주세요."]}),e.jsxs("section",{className:"c-lesson-section",children:[e.jsx("h2",{children:i==="en"?"Double Pointers (Pointer to Pointer)":"이중 포인터 (포인터의 포인터)"}),e.jsx("p",{children:i==="en"?"A double pointer stores the address of another pointer. This is useful for modifying pointer values inside functions and for 2D dynamic arrays:":"이중 포인터는 다른 포인터의 주소를 저장합니다. 함수 내에서 포인터 값을 수정하거나 2차원 동적 배열에 유용합니다:"}),e.jsx(n,{initialCode:`#include <stdio.h>

void modifyPointer(int **pp, int *newTarget) {
    *pp = newTarget;  // Change what the pointer points to
}

int main() {
    int a = 10, b = 20;
    int *ptr = &a;
    int **dptr = &ptr;  // Double pointer

    printf("a = %d\\n", a);
    printf("*ptr = %d\\n", *ptr);
    printf("**dptr = %d\\n", **dptr);

    // Modify through double pointer
    **dptr = 99;
    printf("\\nAfter **dptr = 99: a = %d\\n", a);

    // Change what ptr points to using function
    printf("\\nBefore: *ptr = %d\\n", *ptr);
    modifyPointer(&ptr, &b);
    printf("After modifyPointer: *ptr = %d\\n", *ptr);

    return 0;
}`,expectedOutput:"a = 10\\n*ptr = 10\\n**dptr = 10",lessonId:"c-lesson-07-doubleptr"})]}),e.jsxs("section",{className:"c-lesson-section",children:[e.jsx("h2",{children:i==="en"?"Dynamic Memory Allocation: malloc & free":"동적 메모리 할당: malloc과 free"}),e.jsx("p",{children:i==="en"?"malloc() allocates memory on the heap at runtime. Unlike stack variables, heap memory persists until explicitly freed:":"malloc()은 실행 시간에 힙에 메모리를 할당합니다. 스택 변수와 달리, 힙 메모리는 명시적으로 해제할 때까지 유지됩니다:"}),e.jsx(n,{initialCode:`#include <stdio.h>
#include <stdlib.h>

int main() {
    // Allocate single integer
    int *numPtr = (int*)malloc(sizeof(int));
    if (numPtr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }
    *numPtr = 42;
    printf("Dynamic int: %d\\n", *numPtr);
    free(numPtr);
    numPtr = NULL;  // Good practice: set to NULL after free

    // Allocate array dynamically
    int n = 5;
    int *arr = (int*)malloc(n * sizeof(int));
    if (arr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }

    // Initialize and use
    for (int i = 0; i < n; i++) {
        arr[i] = (i + 1) * 10;
    }

    printf("\\nDynamic array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    free(arr);
    arr = NULL;

    return 0;
}`,expectedOutput:"Dynamic int: 42\\n\\nDynamic array: 10 20 30 40 50",lessonId:"c-lesson-07-malloc"})]}),e.jsxs("section",{className:"c-lesson-section",children:[e.jsx("h2",{children:i==="en"?"calloc & realloc":"calloc과 realloc"}),e.jsx(n,{initialCode:`#include <stdio.h>
#include <stdlib.h>

int main() {
    // calloc: allocates AND initializes to 0
    int n = 5;
    int *arr = (int*)calloc(n, sizeof(int));
    if (!arr) { printf("Allocation failed\\n"); return 1; }

    printf("calloc initialized to zero:\\n");
    for (int i = 0; i < n; i++) {
        printf("arr[%d] = %d\\n", i, arr[i]);
    }

    for (int i = 0; i < n; i++) {
        arr[i] = i + 1;
    }

    // realloc: resize existing allocation
    int newSize = 8;
    int *newArr = (int*)realloc(arr, newSize * sizeof(int));
    if (!newArr) {
        free(arr);
        printf("Reallocation failed\\n");
        return 1;
    }
    arr = newArr;

    for (int i = n; i < newSize; i++) {
        arr[i] = (i + 1) * 10;
    }

    printf("\\nAfter realloc (size %d -> %d):\\n", n, newSize);
    for (int i = 0; i < newSize; i++) {
        printf("arr[%d] = %d\\n", i, arr[i]);
    }

    free(arr);
    return 0;
}`,expectedOutput:"calloc initialized to zero:\\narr[0] = 0\\narr[1] = 0",lessonId:"c-lesson-07-calloc"})]}),e.jsxs("section",{className:"c-lesson-section",children:[e.jsx("h2",{children:i==="en"?"Memory Leaks & Best Practices":"메모리 누수와 모범 사례"}),e.jsx(n,{initialCode:`#include <stdio.h>
#include <stdlib.h>

// GOOD: Proper memory management
void properMemory() {
    int *arr = (int*)malloc(5 * sizeof(int));
    if (arr == NULL) return;

    for (int i = 0; i < 5; i++) {
        arr[i] = i * 10;
    }
    printf("Array: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    free(arr);
    arr = NULL;
}

int main() {
    printf("Memory management best practices:\\n");
    printf("1. Always free() allocated memory\\n");
    printf("2. Set pointer to NULL after free\\n");
    printf("3. Check malloc return for NULL\\n");
    printf("4. Don't lose pointer references\\n");
    printf("5. Free in reverse order of allocation\\n\\n");

    properMemory();
    printf("Proper memory management done!\\n");

    return 0;
}`,lessonId:"c-lesson-07-leaks"}),e.jsxs("div",{className:"c-lesson-warning",children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation"}),e.jsx("p",{children:i==="en"?"Common mistakes: forgetting free(), losing pointer references, double free, and using freed memory (dangling pointer). Use tools like Valgrind to detect memory leaks.":"흔한 실수: free() 누락, 포인터 참조 손실, 이중 해제, 해제된 메모리 사용(댕글링 포인터). Valgrind 같은 도구로 메모리 누수를 감지하세요."})]})]}),e.jsxs("section",{className:"c-lesson-section",children:[e.jsx("h2",{children:i==="en"?"Dynamic 2D Array":"동적 2차원 배열"}),e.jsx(n,{initialCode:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int rows = 3, cols = 4;

    // Allocate array of row pointers
    int **matrix = (int**)malloc(rows * sizeof(int*));
    if (!matrix) return 1;

    // Allocate each row
    for (int i = 0; i < rows; i++) {
        matrix[i] = (int*)malloc(cols * sizeof(int));
        if (!matrix[i]) {
            for (int j = 0; j < i; j++) free(matrix[j]);
            free(matrix);
            return 1;
        }
    }

    // Fill with values
    int count = 1;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            matrix[i][j] = count++;
        }
    }

    // Print matrix
    printf("Dynamic 2D Array (%dx%d):\\n", rows, cols);
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("%3d ", matrix[i][j]);
        }
        printf("\\n");
    }

    // Free: rows first, then row pointer array
    for (int i = 0; i < rows; i++) {
        free(matrix[i]);
    }
    free(matrix);

    printf("\\nMemory freed successfully!\\n");
    return 0;
}`,expectedOutput:"Dynamic 2D Array (3x4):\\n  1   2   3   4\\n  5   6   7   8\\n  9  10  11  12",lessonId:"c-lesson-07-2darray"})]}),e.jsxs("div",{className:"c-lesson-nav-bottom",children:[e.jsxs(r,{to:"/c-learning/06",className:"c-lesson-nav-btn prev",children:[e.jsx("i",{className:"fa-solid fa-arrow-left"}),i==="en"?"Prev: Pointer Basics":"이전: 포인터 기초"]}),e.jsxs(r,{to:"/c-learning/08",className:"c-lesson-nav-btn next",children:[i==="en"?"Next: Structs & Unions":"다음: 구조체와 공용체",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})}export{s as default};
