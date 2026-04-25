import{u as a,j as e,L as s}from"./index-mvafIGLz.js";import{C as t}from"./CodeEditor-BcSsDKUZ.js";function o(){const{lang:n}=a();return e.jsxs("div",{className:"c-lesson-page",children:[e.jsxs("div",{className:"c-lesson-nav-top",children:[e.jsxs(s,{to:"/c-learning",children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",n==="en"?"Back to Curriculum":"커리큘럼으로 돌아가기"]}),e.jsx("span",{className:"c-lesson-week",children:"Step 08"})]}),e.jsxs("h1",{className:"c-lesson-title",children:[e.jsx("i",{className:"fa-solid fa-layer-group"}),n==="en"?"Step 8: Structs & Unions":"8단계: 구조체와 공용체"]}),e.jsxs("div",{className:"c-lesson-warning",style:{padding:"12px 16px",margin:"0 0 20px",background:"var(--warning-bg, #fff3cd)",color:"var(--warning-text, #856404)",borderRadius:"8px",fontSize:"0.9rem",border:"1px solid var(--warning-border, #ffc107)",lineHeight:1.6},children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation",style:{marginRight:"8px"}}),n==="en"?"This lesson uses struct, union, and typedef which are not supported by the browser compiler (JSCPP). Please use a local compiler like GCC to run these examples.":"이 레슨은 struct, union, typedef 등 브라우저 컴파일러(JSCPP)에서 지원하지 않는 기능을 사용합니다. GCC 등 로컬 컴파일러에서 실행해 주세요."]}),e.jsxs("section",{className:"c-lesson-section",children:[e.jsx("h2",{children:n==="en"?"Structure Definition & Usage":"구조체 정의와 사용"}),e.jsx("p",{children:n==="en"?"A struct groups different data types into a single unit. It allows you to create custom data types:":"구조체는 서로 다른 자료형을 하나의 단위로 묶어줍니다. 사용자 정의 자료형을 만들 수 있습니다:"}),e.jsx(t,{initialCode:`#include <stdio.h>
#include <string.h>

struct Student {
    char name[50];
    int age;
    float gpa;
    int studentId;
};

int main() {
    struct Student s1;
    strcpy(s1.name, "Kim Minsu");
    s1.age = 20;
    s1.gpa = 3.85f;
    s1.studentId = 2024001;

    struct Student s2 = {
        .name = "Lee Jiyeon",
        .age = 21,
        .gpa = 3.92f,
        .studentId = 2024002
    };

    printf("=== Student 1 ===\\n");
    printf("Name: %s\\n", s1.name);
    printf("Age: %d\\n", s1.age);
    printf("GPA: %.2f\\n", s1.gpa);
    printf("ID: %d\\n\\n", s1.studentId);

    printf("=== Student 2 ===\\n");
    printf("Name: %s\\n", s2.name);
    printf("Age: %d\\n", s2.age);
    printf("GPA: %.2f\\n", s2.gpa);
    printf("ID: %d\\n", s2.studentId);

    return 0;
}`,expectedOutput:"=== Student 1 ===\\nName: Kim Minsu\\nAge: 20",lessonId:"c-lesson-08-struct"})]}),e.jsxs("section",{className:"c-lesson-section",children:[e.jsx("h2",{children:n==="en"?"typedef for Cleaner Code":"typedef로 깔끔한 코드 작성"}),e.jsx(t,{initialCode:`#include <stdio.h>
#include <math.h>

typedef struct {
    double x;
    double y;
} Point;

typedef struct {
    char title[100];
    char author[50];
    int year;
    int pages;
} Book;

double distance(Point a, Point b) {
    double dx = a.x - b.x;
    double dy = a.y - b.y;
    return sqrt(dx * dx + dy * dy);
}

void printBook(Book b) {
    printf("  \\"%s\\" by %s (%d), %d pages\\n",
           b.title, b.author, b.year, b.pages);
}

int main() {
    Point p1 = {3.0, 4.0};
    Point p2 = {7.0, 1.0};

    printf("Point 1: (%.1f, %.1f)\\n", p1.x, p1.y);
    printf("Point 2: (%.1f, %.1f)\\n", p2.x, p2.y);
    printf("Distance: %.2f\\n\\n", distance(p1, p2));

    Book books[] = {
        {"The C Programming Language", "K&R", 1978, 272},
        {"C Primer Plus", "Stephen Prata", 2013, 1056}
    };

    printf("Books:\\n");
    for (int i = 0; i < 2; i++) {
        printBook(books[i]);
    }

    return 0;
}`,expectedOutput:"Point 1: (3.0, 4.0)\\nDistance: 5.00",lessonId:"c-lesson-08-typedef"})]}),e.jsxs("section",{className:"c-lesson-section",children:[e.jsx("h2",{children:n==="en"?"Struct Pointers & Arrow Operator":"구조체 포인터와 화살표 연산자"}),e.jsx(t,{initialCode:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char name[50];
    int age;
    float salary;
} Employee;

void giveRaise(Employee *emp, float percent) {
    emp->salary *= (1.0f + percent / 100.0f);
}

void printEmployee(const Employee *emp) {
    printf("Name: %s, Age: %d, Salary: $%.2f\\n",
           emp->name, emp->age, emp->salary);
}

int main() {
    Employee e1 = {"Park Jihoon", 30, 50000.0f};
    Employee *ptr = &e1;

    printf("Arrow operator ->:\\n");
    printf("Name: %s\\n", ptr->name);
    printf("Age: %d\\n\\n", ptr->age);

    printf("Before raise: ");
    printEmployee(&e1);
    giveRaise(&e1, 10);
    printf("After raise:  ");
    printEmployee(&e1);

    // Dynamic struct
    Employee *dyn = (Employee*)malloc(sizeof(Employee));
    if (dyn) {
        strcpy(dyn->name, "Lee Soojin");
        dyn->age = 25;
        dyn->salary = 45000.0f;
        printf("\\nDynamic: ");
        printEmployee(dyn);
        free(dyn);
    }

    return 0;
}`,expectedOutput:"Arrow operator ->:\\nName: Park Jihoon",lessonId:"c-lesson-08-pointer"})]}),e.jsxs("section",{className:"c-lesson-section",children:[e.jsx("h2",{children:n==="en"?"Union":"공용체 (union)"}),e.jsx("p",{children:n==="en"?"A union stores different data types in the same memory location. Only one member is valid at a time:":"공용체는 같은 메모리 위치에 서로 다른 자료형을 저장합니다. 한 번에 하나의 멤버만 유효합니다:"}),e.jsx(t,{initialCode:`#include <stdio.h>

typedef union {
    int intVal;
    float floatVal;
    char charVal;
} Data;

typedef struct {
    char type;
    Data data;
} TaggedData;

void printTagged(TaggedData td) {
    switch (td.type) {
        case 'i': printf("int: %d\\n", td.data.intVal); break;
        case 'f': printf("float: %.2f\\n", td.data.floatVal); break;
        case 'c': printf("char: %c\\n", td.data.charVal); break;
    }
}

int main() {
    printf("Size of union Data: %lu bytes\\n", sizeof(Data));
    printf("Size of int: %lu, float: %lu, char: %lu\\n\\n",
           sizeof(int), sizeof(float), sizeof(char));

    Data d;
    d.intVal = 42;
    printf("intVal: %d\\n", d.intVal);
    d.floatVal = 3.14f;
    printf("floatVal: %.2f\\n", d.floatVal);
    printf("intVal now: %d (corrupted!)\\n\\n", d.intVal);

    TaggedData items[] = {
        {'i', {.intVal = 100}},
        {'f', {.floatVal = 2.718f}},
        {'c', {.charVal = 'Z'}}
    };

    printf("Tagged union values:\\n");
    for (int i = 0; i < 3; i++) printTagged(items[i]);

    return 0;
}`,expectedOutput:"Size of union Data: 4 bytes",lessonId:"c-lesson-08-union"})]}),e.jsxs("section",{className:"c-lesson-section",children:[e.jsx("h2",{children:n==="en"?"Enum & Bit Fields":"열거형(enum)과 비트 필드"}),e.jsx(t,{initialCode:`#include <stdio.h>

typedef enum {
    MON = 1, TUE, WED, THU, FRI, SAT, SUN
} Day;

typedef enum { RED, GREEN, BLUE } Color;

// Bit fields: compact flag storage
typedef struct {
    unsigned int isActive  : 1;
    unsigned int role      : 2;
    unsigned int level     : 4;
} UserFlags;

const char* dayName(Day d) {
    const char *names[] = {"", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"};
    return (d >= 1 && d <= 7) ? names[d] : "?";
}

int main() {
    Day today = WED;
    printf("Today: %s (value: %d)\\n", dayName(today), today);
    printf("Colors: RED=%d, GREEN=%d, BLUE=%d\\n\\n", RED, GREEN, BLUE);

    UserFlags user = {0};
    user.isActive = 1;
    user.role = 2;
    user.level = 10;

    printf("Bit fields:\\n");
    printf("  isActive: %u\\n", user.isActive);
    printf("  role: %u\\n", user.role);
    printf("  level: %u\\n", user.level);
    printf("  sizeof(UserFlags): %lu bytes\\n", sizeof(UserFlags));

    return 0;
}`,expectedOutput:"Today: Wed (value: 3)",lessonId:"c-lesson-08-enum"})]}),e.jsxs("div",{className:"c-lesson-nav-bottom",children:[e.jsxs(s,{to:"/c-learning/07",className:"c-lesson-nav-btn prev",children:[e.jsx("i",{className:"fa-solid fa-arrow-left"}),n==="en"?"Prev: Advanced Pointers":"이전: 포인터 심화"]}),e.jsxs(s,{to:"/c-learning/09",className:"c-lesson-nav-btn next",children:[n==="en"?"Next: File I/O":"다음: 파일 입출력",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})}export{o as default};
