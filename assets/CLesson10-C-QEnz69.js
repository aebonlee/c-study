import{u as r,j as e,L as i}from"./index-CfpVJagY.js";import{C as n}from"./CodeEditor-BLqh-YIy.js";function d(){const{lang:t}=r();return e.jsxs("div",{className:"c-lesson-page",children:[e.jsxs("div",{className:"c-lesson-nav-top",children:[e.jsxs(i,{to:"/c-learning",children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",t==="en"?"Back to Curriculum":"커리큘럼으로 돌아가기"]}),e.jsx("span",{className:"c-lesson-week",children:"Step 10"})]}),e.jsxs("h1",{className:"c-lesson-title",children:[e.jsx("i",{className:"fa-solid fa-diagram-project"}),t==="en"?"Step 10: Basic Data Structures":"10단계: 자료구조 기초"]}),e.jsxs("div",{className:"c-lesson-warning",style:{padding:"12px 16px",margin:"0 0 20px",background:"var(--warning-bg, #fff3cd)",color:"var(--warning-text, #856404)",borderRadius:"8px",fontSize:"0.9rem",border:"1px solid var(--warning-border, #ffc107)",lineHeight:1.6},children:[e.jsx("i",{className:"fa-solid fa-triangle-exclamation",style:{marginRight:"8px"}}),t==="en"?"This lesson uses struct, malloc, free, and other features not supported by the browser compiler (JSCPP). Please use a local compiler like GCC to run these examples.":"이 레슨은 struct, malloc, free 등 브라우저 컴파일러(JSCPP)에서 지원하지 않는 기능을 사용합니다. GCC 등 로컬 컴파일러에서 실행해 주세요."]}),e.jsxs("section",{className:"c-lesson-section",children:[e.jsx("h2",{children:t==="en"?"Linked List":"연결 리스트"}),e.jsx("p",{children:t==="en"?"A linked list is a dynamic data structure where each element (node) contains data and a pointer to the next node. Unlike arrays, linked lists can grow and shrink at runtime.":"연결 리스트는 각 요소(노드)가 데이터와 다음 노드에 대한 포인터를 포함하는 동적 자료구조입니다. 배열과 달리, 연결 리스트는 실행 중에 크기가 변할 수 있습니다."}),e.jsxs("div",{className:"c-lesson-info-box",children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-arrows-left-right"})," ",t==="en"?"Array vs Linked List":"배열 vs 연결 리스트"]}),e.jsxs("table",{className:"c-lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t==="en"?"Feature":"특성"}),e.jsx("th",{children:t==="en"?"Array":"배열"}),e.jsx("th",{children:t==="en"?"Linked List":"연결 리스트"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:t==="en"?"Size":"크기"}),e.jsx("td",{children:t==="en"?"Fixed":"고정"}),e.jsx("td",{children:t==="en"?"Dynamic":"가변"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:t==="en"?"Access":"접근"}),e.jsx("td",{children:"O(1)"}),e.jsx("td",{children:"O(n)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:t==="en"?"Insert/Delete":"삽입/삭제"}),e.jsx("td",{children:"O(n)"}),e.jsx("td",{children:"O(1)*"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:t==="en"?"Memory":"메모리"}),e.jsx("td",{children:t==="en"?"Contiguous":"연속"}),e.jsx("td",{children:t==="en"?"Scattered":"분산"})]})]})]})]}),e.jsx(n,{initialCode:`#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

// Create a new node
Node* createNode(int data) {
    Node *newNode = (Node*)malloc(sizeof(Node));
    if (!newNode) {
        printf("Memory allocation failed\\n");
        exit(1);
    }
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// Insert at the beginning
void insertFront(Node **head, int data) {
    Node *newNode = createNode(data);
    newNode->next = *head;
    *head = newNode;
}

// Insert at the end
void insertEnd(Node **head, int data) {
    Node *newNode = createNode(data);
    if (*head == NULL) {
        *head = newNode;
        return;
    }
    Node *current = *head;
    while (current->next != NULL) {
        current = current->next;
    }
    current->next = newNode;
}

// Delete a node with given data
void deleteNode(Node **head, int data) {
    if (*head == NULL) return;
    if ((*head)->data == data) {
        Node *temp = *head;
        *head = (*head)->next;
        free(temp);
        return;
    }
    Node *current = *head;
    while (current->next && current->next->data != data) {
        current = current->next;
    }
    if (current->next) {
        Node *temp = current->next;
        current->next = temp->next;
        free(temp);
    }
}

// Print the list
void printList(Node *head) {
    Node *current = head;
    while (current != NULL) {
        printf("[%d] -> ", current->data);
        current = current->next;
    }
    printf("NULL\\n");
}

// Free entire list
void freeList(Node **head) {
    Node *current = *head;
    while (current) {
        Node *temp = current;
        current = current->next;
        free(temp);
    }
    *head = NULL;
}

int main() {
    Node *head = NULL;

    insertEnd(&head, 10);
    insertEnd(&head, 20);
    insertEnd(&head, 30);
    printf("After insertEnd(10,20,30): ");
    printList(head);

    insertFront(&head, 5);
    printf("After insertFront(5):     ");
    printList(head);

    deleteNode(&head, 20);
    printf("After deleteNode(20):     ");
    printList(head);

    freeList(&head);
    printf("After freeList:           ");
    printList(head);

    return 0;
}`,expectedOutput:"After insertEnd(10,20,30): [10] -> [20] -> [30] -> NULL",lessonId:"c-lesson-10-linkedlist"})]}),e.jsxs("section",{className:"c-lesson-section",children:[e.jsx("h2",{children:t==="en"?"Stack (LIFO)":"스택 (LIFO)"}),e.jsx("p",{children:t==="en"?"A stack follows the Last In, First Out (LIFO) principle. Think of it like a stack of plates -- you can only add or remove from the top.":"스택은 후입선출(LIFO) 원칙을 따릅니다. 접시 더미를 생각하면 됩니다 -- 맨 위에서만 추가하거나 제거할 수 있습니다."}),e.jsx(n,{initialCode:`#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

typedef struct {
    int data[MAX_SIZE];
    int top;
} Stack;

void initStack(Stack *s) {
    s->top = -1;
}

int isEmpty(Stack *s) {
    return s->top == -1;
}

int isFull(Stack *s) {
    return s->top == MAX_SIZE - 1;
}

void push(Stack *s, int value) {
    if (isFull(s)) {
        printf("Stack overflow!\\n");
        return;
    }
    s->data[++s->top] = value;
}

int pop(Stack *s) {
    if (isEmpty(s)) {
        printf("Stack underflow!\\n");
        return -1;
    }
    return s->data[s->top--];
}

int peek(Stack *s) {
    if (isEmpty(s)) {
        printf("Stack is empty!\\n");
        return -1;
    }
    return s->data[s->top];
}

void printStack(Stack *s) {
    printf("Stack (top -> bottom): ");
    for (int i = s->top; i >= 0; i--) {
        printf("%d ", s->data[i]);
    }
    printf("\\n");
}

int main() {
    Stack s;
    initStack(&s);

    push(&s, 10);
    push(&s, 20);
    push(&s, 30);
    push(&s, 40);
    printStack(&s);

    printf("Peek: %d\\n", peek(&s));
    printf("Pop:  %d\\n", pop(&s));
    printf("Pop:  %d\\n", pop(&s));
    printStack(&s);

    // Practical: Check balanced parentheses
    printf("\\n--- Parenthesis Checker ---\\n");
    const char *expr = "((a+b)*(c-d))";
    Stack paren;
    initStack(&paren);
    int balanced = 1;

    for (int i = 0; expr[i]; i++) {
        if (expr[i] == '(') push(&paren, '(');
        else if (expr[i] == ')') {
            if (isEmpty(&paren)) { balanced = 0; break; }
            pop(&paren);
        }
    }
    if (!isEmpty(&paren)) balanced = 0;

    printf("Expression: %s\\n", expr);
    printf("Balanced: %s\\n", balanced ? "Yes" : "No");

    return 0;
}`,expectedOutput:"Stack (top -> bottom): 40 30 20 10\\nPeek: 40",lessonId:"c-lesson-10-stack"})]}),e.jsxs("section",{className:"c-lesson-section",children:[e.jsx("h2",{children:t==="en"?"Queue (FIFO)":"큐 (FIFO)"}),e.jsx("p",{children:t==="en"?"A queue follows the First In, First Out (FIFO) principle. Think of a line at a store -- the first person in line gets served first.":"큐는 선입선출(FIFO) 원칙을 따릅니다. 매장의 줄을 생각하면 됩니다 -- 먼저 줄을 선 사람이 먼저 서비스를 받습니다."}),e.jsx(n,{initialCode:`#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

typedef struct {
    int data[MAX_SIZE];
    int front;
    int rear;
    int count;
} Queue;

void initQueue(Queue *q) {
    q->front = 0;
    q->rear = -1;
    q->count = 0;
}

int isQEmpty(Queue *q) { return q->count == 0; }
int isQFull(Queue *q) { return q->count == MAX_SIZE; }

void enqueue(Queue *q, int value) {
    if (isQFull(q)) {
        printf("Queue is full!\\n");
        return;
    }
    q->rear = (q->rear + 1) % MAX_SIZE;  // Circular
    q->data[q->rear] = value;
    q->count++;
}

int dequeue(Queue *q) {
    if (isQEmpty(q)) {
        printf("Queue is empty!\\n");
        return -1;
    }
    int value = q->data[q->front];
    q->front = (q->front + 1) % MAX_SIZE;
    q->count--;
    return value;
}

int front(Queue *q) {
    if (isQEmpty(q)) return -1;
    return q->data[q->front];
}

void printQueue(Queue *q) {
    printf("Queue (front -> rear): ");
    int idx = q->front;
    for (int i = 0; i < q->count; i++) {
        printf("%d ", q->data[idx]);
        idx = (idx + 1) % MAX_SIZE;
    }
    printf("  (size: %d)\\n", q->count);
}

int main() {
    Queue q;
    initQueue(&q);

    enqueue(&q, 10);
    enqueue(&q, 20);
    enqueue(&q, 30);
    enqueue(&q, 40);
    printf("After enqueue 10,20,30,40:\\n");
    printQueue(&q);

    printf("\\nFront: %d\\n", front(&q));
    printf("Dequeue: %d\\n", dequeue(&q));
    printf("Dequeue: %d\\n", dequeue(&q));
    printf("\\nAfter two dequeues:\\n");
    printQueue(&q);

    enqueue(&q, 50);
    printf("\\nAfter enqueue 50:\\n");
    printQueue(&q);

    return 0;
}`,expectedOutput:"After enqueue 10,20,30,40:\\nQueue (front -> rear): 10 20 30 40",lessonId:"c-lesson-10-queue"})]}),e.jsxs("section",{className:"c-lesson-section",children:[e.jsx("h2",{children:t==="en"?"Linked List-Based Stack":"연결 리스트 기반 스택"}),e.jsx("p",{children:t==="en"?"We can also implement a stack using a linked list for dynamic sizing:":"동적 크기 조절을 위해 연결 리스트로 스택을 구현할 수도 있습니다:"}),e.jsx(n,{initialCode:`#include <stdio.h>
#include <stdlib.h>

typedef struct StackNode {
    int data;
    struct StackNode *next;
} StackNode;

typedef struct {
    StackNode *top;
    int size;
} LinkedStack;

void initLinkedStack(LinkedStack *s) {
    s->top = NULL;
    s->size = 0;
}

void lsPush(LinkedStack *s, int value) {
    StackNode *node = (StackNode*)malloc(sizeof(StackNode));
    if (!node) { printf("Memory error\\n"); return; }
    node->data = value;
    node->next = s->top;
    s->top = node;
    s->size++;
}

int lsPop(LinkedStack *s) {
    if (!s->top) { printf("Empty!\\n"); return -1; }
    StackNode *temp = s->top;
    int value = temp->data;
    s->top = temp->next;
    free(temp);
    s->size--;
    return value;
}

void lsPrint(LinkedStack *s) {
    printf("LinkedStack [size=%d]: ", s->size);
    StackNode *curr = s->top;
    while (curr) {
        printf("%d ", curr->data);
        curr = curr->next;
    }
    printf("\\n");
}

void lsFree(LinkedStack *s) {
    while (s->top) lsPop(s);
}

int main() {
    LinkedStack s;
    initLinkedStack(&s);

    for (int i = 1; i <= 5; i++) {
        lsPush(&s, i * 10);
    }
    lsPrint(&s);

    printf("Pop: %d\\n", lsPop(&s));
    printf("Pop: %d\\n", lsPop(&s));
    lsPrint(&s);

    lsFree(&s);
    printf("After free: size = %d\\n", s.size);

    return 0;
}`,expectedOutput:"LinkedStack [size=5]: 50 40 30 20 10\\nPop: 50",lessonId:"c-lesson-10-linkedstack"})]}),e.jsxs("div",{className:"c-lesson-nav-bottom",children:[e.jsxs(i,{to:"/c-learning/09",className:"c-lesson-nav-btn prev",children:[e.jsx("i",{className:"fa-solid fa-arrow-left"}),t==="en"?"Prev: File I/O":"이전: 파일 입출력"]}),e.jsxs(i,{to:"/c-learning/11",className:"c-lesson-nav-btn next",children:[t==="en"?"Next: Final Project":"다음: 종합 프로젝트",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})}export{d as default};
