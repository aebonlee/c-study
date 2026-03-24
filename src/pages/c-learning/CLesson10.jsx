import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import CodeEditor from '../../components/CodeEditor'

export default function CLesson10() {
  const { lang } = useLanguage()

  return (
    <div className="c-lesson-page">
      <div className="c-lesson-nav-top">
        <Link to="/c-learning"><i className="fa-solid fa-arrow-left" /> {lang === 'en' ? 'Back to Curriculum' : '커리큘럼으로 돌아가기'}</Link>
        <span className="c-lesson-week">Step 10</span>
      </div>

      <h1 className="c-lesson-title">
        <i className="fa-solid fa-diagram-project" />
        {lang === 'en' ? 'Step 10: Basic Data Structures' : '10단계: 자료구조 기초'}
      </h1>

      <section className="c-lesson-section">
        <h2>{lang === 'en' ? 'Linked List' : '연결 리스트'}</h2>
        <p>{lang === 'en'
          ? 'A linked list is a dynamic data structure where each element (node) contains data and a pointer to the next node. Unlike arrays, linked lists can grow and shrink at runtime.'
          : '연결 리스트는 각 요소(노드)가 데이터와 다음 노드에 대한 포인터를 포함하는 동적 자료구조입니다. 배열과 달리, 연결 리스트는 실행 중에 크기가 변할 수 있습니다.'}</p>
        <div className="c-lesson-info-box">
          <h3><i className="fa-solid fa-arrows-left-right" /> {lang === 'en' ? 'Array vs Linked List' : '배열 vs 연결 리스트'}</h3>
          <table className="c-lesson-table">
            <thead>
              <tr>
                <th>{lang === 'en' ? 'Feature' : '특성'}</th>
                <th>{lang === 'en' ? 'Array' : '배열'}</th>
                <th>{lang === 'en' ? 'Linked List' : '연결 리스트'}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>{lang === 'en' ? 'Size' : '크기'}</td><td>{lang === 'en' ? 'Fixed' : '고정'}</td><td>{lang === 'en' ? 'Dynamic' : '가변'}</td></tr>
              <tr><td>{lang === 'en' ? 'Access' : '접근'}</td><td>O(1)</td><td>O(n)</td></tr>
              <tr><td>{lang === 'en' ? 'Insert/Delete' : '삽입/삭제'}</td><td>O(n)</td><td>O(1)*</td></tr>
              <tr><td>{lang === 'en' ? 'Memory' : '메모리'}</td><td>{lang === 'en' ? 'Contiguous' : '연속'}</td><td>{lang === 'en' ? 'Scattered' : '분산'}</td></tr>
            </tbody>
          </table>
        </div>
        <CodeEditor
          initialCode={`#include <stdio.h>
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
}`}
          expectedOutput="After insertEnd(10,20,30): [10] -> [20] -> [30] -> NULL"
          lessonId="c-lesson-10-linkedlist"
        />
      </section>

      <section className="c-lesson-section">
        <h2>{lang === 'en' ? 'Stack (LIFO)' : '스택 (LIFO)'}</h2>
        <p>{lang === 'en'
          ? 'A stack follows the Last In, First Out (LIFO) principle. Think of it like a stack of plates -- you can only add or remove from the top.'
          : '스택은 후입선출(LIFO) 원칙을 따릅니다. 접시 더미를 생각하면 됩니다 -- 맨 위에서만 추가하거나 제거할 수 있습니다.'}</p>
        <CodeEditor
          initialCode={`#include <stdio.h>
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
}`}
          expectedOutput="Stack (top -> bottom): 40 30 20 10\nPeek: 40"
          lessonId="c-lesson-10-stack"
        />
      </section>

      <section className="c-lesson-section">
        <h2>{lang === 'en' ? 'Queue (FIFO)' : '큐 (FIFO)'}</h2>
        <p>{lang === 'en'
          ? 'A queue follows the First In, First Out (FIFO) principle. Think of a line at a store -- the first person in line gets served first.'
          : '큐는 선입선출(FIFO) 원칙을 따릅니다. 매장의 줄을 생각하면 됩니다 -- 먼저 줄을 선 사람이 먼저 서비스를 받습니다.'}</p>
        <CodeEditor
          initialCode={`#include <stdio.h>
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
}`}
          expectedOutput="After enqueue 10,20,30,40:\nQueue (front -> rear): 10 20 30 40"
          lessonId="c-lesson-10-queue"
        />
      </section>

      <section className="c-lesson-section">
        <h2>{lang === 'en' ? 'Linked List-Based Stack' : '연결 리스트 기반 스택'}</h2>
        <p>{lang === 'en'
          ? 'We can also implement a stack using a linked list for dynamic sizing:'
          : '동적 크기 조절을 위해 연결 리스트로 스택을 구현할 수도 있습니다:'}</p>
        <CodeEditor
          initialCode={`#include <stdio.h>
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
}`}
          expectedOutput="LinkedStack [size=5]: 50 40 30 20 10\nPop: 50"
          lessonId="c-lesson-10-linkedstack"
        />
      </section>

      <div className="c-lesson-nav-bottom">
        <Link to="/c-learning/09" className="c-lesson-nav-btn prev">
          <i className="fa-solid fa-arrow-left" />
          {lang === 'en' ? 'Prev: File I/O' : '이전: 파일 입출력'}
        </Link>
        <Link to="/c-learning/11" className="c-lesson-nav-btn next">
          {lang === 'en' ? 'Next: Final Project' : '다음: 종합 프로젝트'}
          <i className="fa-solid fa-arrow-right" />
        </Link>
      </div>
    </div>
  )
}
