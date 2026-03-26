import{u as i,j as t,L as s}from"./index-CGPyez-7.js";import{C as n}from"./CodeEditor-U5umASnJ.js";function a(){const{lang:e}=i();return t.jsxs("div",{className:"c-lesson-page",children:[t.jsxs("div",{className:"c-lesson-nav-top",children:[t.jsxs(s,{to:"/c-learning",children:[t.jsx("i",{className:"fa-solid fa-arrow-left"})," ",e==="en"?"Back to Curriculum":"커리큘럼으로 돌아가기"]}),t.jsx("span",{className:"c-lesson-week",children:"Step 11"})]}),t.jsxs("h1",{className:"c-lesson-title",children:[t.jsx("i",{className:"fa-solid fa-rocket"}),e==="en"?"Step 11: Final Project - Student Grade Management System":"11단계: 종합 프로젝트 - 학생 성적 관리 시스템"]}),t.jsxs("div",{className:"c-lesson-warning",style:{padding:"12px 16px",margin:"0 0 20px",background:"var(--warning-bg, #fff3cd)",color:"var(--warning-text, #856404)",borderRadius:"8px",fontSize:"0.9rem",border:"1px solid var(--warning-border, #ffc107)",lineHeight:1.6},children:[t.jsx("i",{className:"fa-solid fa-triangle-exclamation",style:{marginRight:"8px"}}),e==="en"?"This project uses struct, malloc, FILE, and other advanced features not supported by the browser compiler (JSCPP). Please use a local compiler like GCC to run these examples.":"이 프로젝트는 struct, malloc, FILE 등 브라우저 컴파일러(JSCPP)에서 지원하지 않는 고급 기능을 사용합니다. GCC 등 로컬 컴파일러에서 실행해 주세요."]}),t.jsxs("section",{className:"c-lesson-section",children:[t.jsx("h2",{children:e==="en"?"Project Overview":"프로젝트 개요"}),t.jsx("p",{children:e==="en"?"In this final project, we combine everything learned throughout the course to build a Student Grade Management System. This project uses structs, arrays, pointers, functions, file I/O, and dynamic memory allocation.":"이 종합 프로젝트에서는 과정 전체에서 배운 모든 내용을 결합하여 학생 성적 관리 시스템을 구현합니다. 구조체, 배열, 포인터, 함수, 파일 입출력, 동적 메모리 할당을 사용합니다."}),t.jsxs("div",{className:"c-lesson-info-box",children:[t.jsxs("h3",{children:[t.jsx("i",{className:"fa-solid fa-list-check"})," ",e==="en"?"Features to Implement":"구현할 기능"]}),t.jsxs("ul",{children:[t.jsx("li",{children:e==="en"?"Add new students with name, ID, and grades":"이름, 학번, 성적으로 학생 추가"}),t.jsx("li",{children:e==="en"?"Display all students and their grades":"전체 학생 및 성적 표시"}),t.jsx("li",{children:e==="en"?"Search students by name or ID":"이름 또는 학번으로 학생 검색"}),t.jsx("li",{children:e==="en"?"Calculate average, min, max grades":"평균, 최소, 최대 성적 계산"}),t.jsx("li",{children:e==="en"?"Sort students by grade":"성적순 정렬"}),t.jsx("li",{children:e==="en"?"Save/Load data from file":"파일에 데이터 저장/불러오기"}),t.jsx("li",{children:e==="en"?"Delete student records":"학생 기록 삭제"})]})]})]}),t.jsxs("section",{className:"c-lesson-section",children:[t.jsx("h2",{children:e==="en"?"Part 1: Data Structure Design":"파트 1: 자료구조 설계"}),t.jsx("p",{children:e==="en"?"First, we define the data structures and constants for our system:":"먼저, 시스템에 필요한 자료구조와 상수를 정의합니다:"}),t.jsx(n,{initialCode:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_NAME 50
#define MAX_SUBJECTS 5
#define FILENAME "students.dat"

const char *subjectNames[] = {
    "Korean", "English", "Math", "Science", "History"
};

typedef struct {
    int id;
    char name[MAX_NAME];
    int scores[MAX_SUBJECTS];
    float average;
    char grade;
} Student;

typedef struct {
    Student *students;
    int count;
    int capacity;
} StudentDB;

void initDB(StudentDB *db, int initialCapacity) {
    db->students = (Student*)malloc(initialCapacity * sizeof(Student));
    db->count = 0;
    db->capacity = initialCapacity;
    if (!db->students) {
        printf("Memory allocation failed!\\n");
        exit(1);
    }
}

void freeDB(StudentDB *db) {
    free(db->students);
    db->students = NULL;
    db->count = 0;
    db->capacity = 0;
}

int main() {
    StudentDB db;
    initDB(&db, 10);
    printf("Student DB initialized (capacity: %d)\\n", db.capacity);
    printf("Student struct size: %lu bytes\\n", sizeof(Student));
    printf("Subjects: ");
    for (int i = 0; i < MAX_SUBJECTS; i++) {
        printf("%s ", subjectNames[i]);
    }
    printf("\\n");
    freeDB(&db);
    return 0;
}`,expectedOutput:"Student DB initialized (capacity: 10)",lessonId:"c-lesson-11-struct"})]}),t.jsxs("section",{className:"c-lesson-section",children:[t.jsx("h2",{children:e==="en"?"Part 2: Core Functions (Add & Display)":"파트 2: 핵심 함수 (추가 및 표시)"}),t.jsx(n,{initialCode:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_NAME 50
#define MAX_SUBJECTS 5

const char *subjectNames[] = {"Korean","English","Math","Science","History"};

typedef struct {
    int id;
    char name[MAX_NAME];
    int scores[MAX_SUBJECTS];
    float average;
    char grade;
} Student;

typedef struct {
    Student *students;
    int count;
    int capacity;
} StudentDB;

void initDB(StudentDB *db, int cap) {
    db->students = (Student*)malloc(cap * sizeof(Student));
    db->count = 0;
    db->capacity = cap;
}

void calcGrade(Student *s) {
    int sum = 0;
    for (int i = 0; i < MAX_SUBJECTS; i++) sum += s->scores[i];
    s->average = (float)sum / MAX_SUBJECTS;
    if (s->average >= 90) s->grade = 'A';
    else if (s->average >= 80) s->grade = 'B';
    else if (s->average >= 70) s->grade = 'C';
    else if (s->average >= 60) s->grade = 'D';
    else s->grade = 'F';
}

void ensureCapacity(StudentDB *db) {
    if (db->count >= db->capacity) {
        db->capacity *= 2;
        db->students = (Student*)realloc(
            db->students, db->capacity * sizeof(Student));
        if (!db->students) { printf("Memory error!\\n"); exit(1); }
    }
}

void addStudent(StudentDB *db, const char *name, int id, int scores[]) {
    ensureCapacity(db);
    Student *s = &db->students[db->count];
    s->id = id;
    strncpy(s->name, name, MAX_NAME - 1);
    s->name[MAX_NAME - 1] = '\\0';
    memcpy(s->scores, scores, MAX_SUBJECTS * sizeof(int));
    calcGrade(s);
    db->count++;
}

void displayAll(StudentDB *db) {
    printf("\\n%-6s %-15s", "ID", "Name");
    for (int j = 0; j < MAX_SUBJECTS; j++)
        printf(" %7s", subjectNames[j]);
    printf("   Avg  Grade\\n");
    printf("------------------------------------------------------");
    printf("---------------------\\n");

    for (int i = 0; i < db->count; i++) {
        Student *s = &db->students[i];
        printf("%-6d %-15s", s->id, s->name);
        for (int j = 0; j < MAX_SUBJECTS; j++)
            printf(" %7d", s->scores[j]);
        printf(" %6.1f    %c\\n", s->average, s->grade);
    }
}

int main() {
    StudentDB db;
    initDB(&db, 5);

    int s1[] = {95, 88, 92, 85, 90};
    int s2[] = {78, 82, 65, 70, 75};
    int s3[] = {100, 95, 98, 92, 97};
    int s4[] = {60, 55, 48, 62, 58};

    addStudent(&db, "Kim Minsu", 2024001, s1);
    addStudent(&db, "Lee Jiyeon", 2024002, s2);
    addStudent(&db, "Park Sunho", 2024003, s3);
    addStudent(&db, "Choi Yuna", 2024004, s4);

    displayAll(&db);

    free(db.students);
    return 0;
}`,expectedOutput:"ID     Name           Korean English ...",lessonId:"c-lesson-11-core"})]}),t.jsxs("section",{className:"c-lesson-section",children:[t.jsx("h2",{children:e==="en"?"Part 3: Search & Statistics":"파트 3: 검색 및 통계"}),t.jsx(n,{initialCode:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_NAME 50
#define MAX_SUBJECTS 5

typedef struct {
    int id; char name[MAX_NAME];
    int scores[MAX_SUBJECTS]; float average; char grade;
} Student;

typedef struct {
    Student *students; int count; int capacity;
} StudentDB;

int searchByName(StudentDB *db, const char *name) {
    for (int i = 0; i < db->count; i++) {
        if (strstr(db->students[i].name, name) != NULL)
            return i;
    }
    return -1;
}

int searchById(StudentDB *db, int id) {
    for (int i = 0; i < db->count; i++) {
        if (db->students[i].id == id) return i;
    }
    return -1;
}

void printStats(StudentDB *db) {
    if (db->count == 0) { printf("No students.\\n"); return; }

    float totalAvg = 0;
    float highest = 0, lowest = 100;
    int topIdx = 0, bottomIdx = 0;

    for (int i = 0; i < db->count; i++) {
        totalAvg += db->students[i].average;
        if (db->students[i].average > highest) {
            highest = db->students[i].average;
            topIdx = i;
        }
        if (db->students[i].average < lowest) {
            lowest = db->students[i].average;
            bottomIdx = i;
        }
    }
    totalAvg /= db->count;

    printf("\\n=== Statistics ===\\n");
    printf("Total students: %d\\n", db->count);
    printf("Overall average: %.1f\\n", totalAvg);
    printf("Highest: %s (%.1f)\\n",
           db->students[topIdx].name, db->students[topIdx].average);
    printf("Lowest:  %s (%.1f)\\n",
           db->students[bottomIdx].name, db->students[bottomIdx].average);

    int grades[5] = {0};
    for (int i = 0; i < db->count; i++) {
        switch (db->students[i].grade) {
            case 'A': grades[0]++; break;
            case 'B': grades[1]++; break;
            case 'C': grades[2]++; break;
            case 'D': grades[3]++; break;
            case 'F': grades[4]++; break;
        }
    }
    printf("\\nGrade Distribution:\\n");
    const char *labels[] = {"A", "B", "C", "D", "F"};
    for (int i = 0; i < 5; i++) {
        printf("  %s: %d ", labels[i], grades[i]);
        for (int j = 0; j < grades[i]; j++) printf("*");
        printf("\\n");
    }
}

void sortByAverage(StudentDB *db) {
    for (int i = 0; i < db->count - 1; i++) {
        for (int j = 0; j < db->count - 1 - i; j++) {
            if (db->students[j].average < db->students[j+1].average) {
                Student temp = db->students[j];
                db->students[j] = db->students[j+1];
                db->students[j+1] = temp;
            }
        }
    }
}

int main() {
    StudentDB db;
    db.capacity = 10; db.count = 0;
    db.students = (Student*)malloc(db.capacity * sizeof(Student));

    Student samples[] = {
        {1001, "Kim",  {95,88,92,85,90}, 90.0, 'A'},
        {1002, "Lee",  {78,82,65,70,75}, 74.0, 'C'},
        {1003, "Park", {100,95,98,92,97}, 96.4, 'A'},
        {1004, "Choi", {60,55,48,62,58}, 56.6, 'F'},
        {1005, "Jung", {85,90,88,82,87}, 86.4, 'B'}
    };
    for (int i = 0; i < 5; i++) {
        db.students[i] = samples[i];
        db.count++;
    }

    int idx = searchByName(&db, "Park");
    if (idx >= 0)
        printf("Found: %s (avg: %.1f, grade: %c)\\n",
               db.students[idx].name,
               db.students[idx].average,
               db.students[idx].grade);

    idx = searchById(&db, 1004);
    if (idx >= 0)
        printf("ID 1004: %s (avg: %.1f)\\n",
               db.students[idx].name, db.students[idx].average);

    printStats(&db);

    printf("\\nRanking (sorted by average):\\n");
    sortByAverage(&db);
    for (int i = 0; i < db.count; i++)
        printf("  %d. %s - %.1f (%c)\\n", i+1,
               db.students[i].name,
               db.students[i].average,
               db.students[i].grade);

    free(db.students);
    return 0;
}`,expectedOutput:"Found: Park (avg: 96.4, grade: A)",lessonId:"c-lesson-11-search"})]}),t.jsxs("section",{className:"c-lesson-section",children:[t.jsx("h2",{children:e==="en"?"Part 4: File Save & Load":"파트 4: 파일 저장 및 불러오기"}),t.jsx(n,{initialCode:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_NAME 50
#define MAX_SUBJECTS 5
#define FILENAME "students.dat"

typedef struct {
    int id; char name[MAX_NAME];
    int scores[MAX_SUBJECTS]; float average; char grade;
} Student;

typedef struct {
    Student *students; int count; int capacity;
} StudentDB;

int saveToFile(StudentDB *db, const char *filename) {
    FILE *fp = fopen(filename, "wb");
    if (!fp) { printf("Cannot open file\\n"); return 0; }
    fwrite(&db->count, sizeof(int), 1, fp);
    fwrite(db->students, sizeof(Student), db->count, fp);
    fclose(fp);
    printf("Saved %d students to %s\\n", db->count, filename);
    return 1;
}

int loadFromFile(StudentDB *db, const char *filename) {
    FILE *fp = fopen(filename, "rb");
    if (!fp) { printf("No saved data found\\n"); return 0; }
    int count;
    fread(&count, sizeof(int), 1, fp);
    if (count > db->capacity) {
        db->students = (Student*)realloc(
            db->students, count * sizeof(Student));
        db->capacity = count;
    }
    fread(db->students, sizeof(Student), count, fp);
    db->count = count;
    fclose(fp);
    printf("Loaded %d students from %s\\n", db->count, filename);
    return 1;
}

int saveReport(StudentDB *db, const char *filename) {
    FILE *fp = fopen(filename, "w");
    if (!fp) return 0;
    fprintf(fp, "Student Grade Report\\n");
    fprintf(fp, "====================\\n\\n");
    for (int i = 0; i < db->count; i++) {
        Student *s = &db->students[i];
        fprintf(fp, "ID: %d | Name: %s\\n", s->id, s->name);
        fprintf(fp, "Scores: ");
        for (int j = 0; j < MAX_SUBJECTS; j++)
            fprintf(fp, "%d ", s->scores[j]);
        fprintf(fp, "\\nAverage: %.1f | Grade: %c\\n\\n",
                s->average, s->grade);
    }
    fclose(fp);
    printf("Report saved to %s\\n", filename);
    return 1;
}

int main() {
    StudentDB db;
    db.capacity = 10; db.count = 0;
    db.students = (Student*)malloc(db.capacity * sizeof(Student));

    Student s1 = {1001, "Kim", {95,88,92,85,90}, 90.0, 'A'};
    Student s2 = {1002, "Lee", {78,82,65,70,75}, 74.0, 'C'};
    Student s3 = {1003, "Park", {100,95,98,92,97}, 96.4, 'A'};
    db.students[0] = s1; db.students[1] = s2; db.students[2] = s3;
    db.count = 3;

    saveToFile(&db, FILENAME);
    saveReport(&db, "report.txt");

    db.count = 0;
    printf("\\nCleared (count: %d)\\n", db.count);
    loadFromFile(&db, FILENAME);

    printf("\\nReloaded:\\n");
    for (int i = 0; i < db.count; i++)
        printf("  %s (ID:%d, Avg:%.1f, Grade:%c)\\n",
               db.students[i].name, db.students[i].id,
               db.students[i].average, db.students[i].grade);

    free(db.students);
    return 0;
}`,expectedOutput:"Saved 3 students to students.dat\\nReport saved to report.txt",lessonId:"c-lesson-11-file"})]}),t.jsxs("section",{className:"c-lesson-section",children:[t.jsx("h2",{children:e==="en"?"Part 5: Complete Menu System":"파트 5: 완성된 메뉴 시스템"}),t.jsx(n,{initialCode:`#include <stdio.h>
#include <stdlib.h>

void printMenu() {
    printf("\\n===================================\\n");
    printf("  Student Grade Management System  \\n");
    printf("===================================\\n");
    printf("  1. Add Student\\n");
    printf("  2. Display All Students\\n");
    printf("  3. Search Student\\n");
    printf("  4. Statistics\\n");
    printf("  5. Sort by Average\\n");
    printf("  6. Delete Student\\n");
    printf("  7. Save to File\\n");
    printf("  8. Load from File\\n");
    printf("  9. Export Text Report\\n");
    printf("  0. Exit\\n");
    printf("===================================\\n");
    printf("  Choice: ");
}

int main() {
    printf("Student Grade Management System\\n");
    printf("================================\\n\\n");

    printf("This project combines ALL C concepts:\\n\\n");
    printf("  [Step 2]  Variables & Data Types\\n");
    printf("  [Step 3]  Control Flow\\n");
    printf("  [Step 4]  Functions & Scope\\n");
    printf("  [Step 5]  Arrays & Strings\\n");
    printf("  [Step 6]  Pointer Basics\\n");
    printf("  [Step 7]  Dynamic Memory\\n");
    printf("  [Step 8]  Structs & Unions\\n");
    printf("  [Step 9]  File I/O\\n");
    printf("  [Step 10] Data Structures\\n\\n");

    printMenu();
    printf("\\n");

    printf("=== Congratulations! ===\\n");
    printf("You completed the 11-step\\n");
    printf("C Programming curriculum!\\n");

    return 0;
}`,lessonId:"c-lesson-11-menu"}),t.jsxs("div",{className:"c-lesson-tip",children:[t.jsx("i",{className:"fa-solid fa-lightbulb"}),t.jsx("p",{children:e==="en"?"Challenge: Combine all parts into a single program with a working do-while menu loop. Add input validation and error handling for production quality.":"도전 과제: 모든 파트를 do-while 메뉴 루프가 동작하는 하나의 프로그램으로 결합해 보세요. 프로덕션 품질을 위해 입력 검증과 오류 처리를 추가하세요."})]})]}),t.jsxs("section",{className:"c-lesson-section",children:[t.jsx("h2",{children:e==="en"?"Course Summary":"과정 요약"}),t.jsxs("div",{className:"c-lesson-info-box",children:[t.jsxs("h3",{children:[t.jsx("i",{className:"fa-solid fa-graduation-cap"})," ",e==="en"?"11 Steps of C Mastery":"11단계 C 마스터 과정"]}),t.jsxs("table",{className:"c-lesson-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:e==="en"?"Step":"단계"}),t.jsx("th",{children:e==="en"?"Topic":"주제"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"1"}),t.jsx("td",{children:e==="en"?"Introduction, IDE Setup, Hello World":"C언어 소개, 개발환경, Hello World"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"2"}),t.jsx("td",{children:e==="en"?"Variables, Data Types, Operators":"변수, 자료형, 연산자"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"3"}),t.jsx("td",{children:e==="en"?"Control Flow (if, switch, loops)":"제어문 (if, switch, 반복문)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"4"}),t.jsx("td",{children:e==="en"?"Functions & Scope":"함수와 스코프"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"5"}),t.jsx("td",{children:e==="en"?"Arrays & Strings":"배열과 문자열"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"6"}),t.jsx("td",{children:e==="en"?"Pointer Basics":"포인터 기초"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"7"}),t.jsx("td",{children:e==="en"?"Advanced Pointers & Dynamic Memory":"포인터 심화와 동적 메모리"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"8"}),t.jsx("td",{children:e==="en"?"Structs & Unions":"구조체와 공용체"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"9"}),t.jsx("td",{children:e==="en"?"File I/O":"파일 입출력"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"10"}),t.jsx("td",{children:e==="en"?"Data Structures (List, Stack, Queue)":"자료구조 (리스트, 스택, 큐)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"11"}),t.jsx("td",{children:e==="en"?"Final Project":"종합 프로젝트"})]})]})]})]})]}),t.jsxs("div",{className:"c-lesson-nav-bottom",children:[t.jsxs(s,{to:"/c-learning/10",className:"c-lesson-nav-btn prev",children:[t.jsx("i",{className:"fa-solid fa-arrow-left"}),e==="en"?"Prev: Data Structures":"이전: 자료구조 기초"]}),t.jsxs(s,{to:"/c-learning",className:"c-lesson-nav-btn next",children:[e==="en"?"Back to Curriculum":"커리큘럼으로 돌아가기",t.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})}export{a as default};
