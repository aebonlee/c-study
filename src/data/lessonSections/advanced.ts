const advanced = {
  'linked-list': {
    sections: [
      {
        heading: '노드 구조체',
        headingEn: 'Node Structure',
        text: [
          '연결 리스트(Linked List)는 각 요소가 데이터와 다음 요소를 가리키는 포인터로 구성된 자료구조입니다. 배열과 달리 메모리에 연속적으로 저장될 필요가 없어, 삽입과 삭제가 효율적입니다.',
          '연결 리스트의 기본 단위는 노드(Node)입니다. 각 노드는 데이터를 저장하는 필드와 다음 노드를 가리키는 포인터(next)로 구성됩니다. 마지막 노드의 next는 NULL을 가리켜 리스트의 끝을 나타냅니다.',
          'malloc() 함수를 사용하여 동적으로 노드를 생성하며, 구조체 포인터의 멤버 접근에는 화살표 연산자(->)를 사용합니다.'
        ],
        textEn: [
          'A Linked List is a data structure where each element consists of data and a pointer to the next element. Unlike arrays, elements don\'t need to be stored contiguously in memory, making insertions and deletions efficient.',
          'The basic unit of a linked list is a node. Each node has a data field and a pointer (next) that points to the next node. The last node\'s next points to NULL, indicating the end of the list.',
          'We use malloc() to dynamically create nodes, and the arrow operator (->) to access members through structure pointers.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int data;\n    struct Node* next;\n} Node;\n\nNode* createNode(int data) {\n    Node* newNode = (Node*)malloc(sizeof(Node));\n    if (newNode == NULL) {\n        printf(\"Memory allocation failed!\\n\");\n        exit(1);\n    }\n    newNode->data = data;\n    newNode->next = NULL;\n    return newNode;\n}\n\nint main(void) {\n    Node* first = createNode(10);\n    Node* second = createNode(20);\n    Node* third = createNode(30);\n\n    first->next = second;\n    second->next = third;\n\n    printf(\"First node: %d\\n\", first->data);\n    printf(\"Second node: %d\\n\", first->next->data);\n    printf(\"Third node: %d\\n\", first->next->next->data);\n\n    free(first);\n    free(second);\n    free(third);\n\n    return 0;\n}',
        expectedOutput: 'First node: 10\nSecond node: 20\nThird node: 30',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '삽입 연산',
        headingEn: 'Insertion',
        text: [
          '연결 리스트에 새 노드를 삽입하는 두 가지 기본 연산을 알아봅니다: 리스트 앞에 삽입(insertAtFront)과 리스트 끝에 삽입(insertAtEnd)입니다.',
          '앞에 삽입하는 경우, 새 노드의 next를 현재 head로 설정한 뒤 head를 새 노드로 갱신합니다. 시간 복잡도는 O(1)입니다.',
          '끝에 삽입하는 경우, 리스트의 마지막 노드까지 순회한 뒤 마지막 노드의 next를 새 노드로 설정합니다. 시간 복잡도는 O(n)입니다.'
        ],
        textEn: [
          'Let\'s explore two fundamental insertion operations for linked lists: inserting at the front (insertAtFront) and inserting at the end (insertAtEnd).',
          'For front insertion, set the new node\'s next to the current head, then update head to the new node. The time complexity is O(1).',
          'For end insertion, traverse to the last node, then set its next to the new node. The time complexity is O(n).'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int data;\n    struct Node* next;\n} Node;\n\nNode* createNode(int data) {\n    Node* newNode = (Node*)malloc(sizeof(Node));\n    newNode->data = data;\n    newNode->next = NULL;\n    return newNode;\n}\n\nNode* insertAtFront(Node* head, int data) {\n    Node* newNode = createNode(data);\n    newNode->next = head;\n    return newNode;\n}\n\nNode* insertAtEnd(Node* head, int data) {\n    Node* newNode = createNode(data);\n    if (head == NULL) {\n        return newNode;\n    }\n    Node* current = head;\n    while (current->next != NULL) {\n        current = current->next;\n    }\n    current->next = newNode;\n    return head;\n}\n\nvoid printList(Node* head) {\n    Node* current = head;\n    while (current != NULL) {\n        printf(\"%d -> \", current->data);\n        current = current->next;\n    }\n    printf(\"NULL\\n\");\n}\n\nint main(void) {\n    Node* head = NULL;\n\n    head = insertAtEnd(head, 10);\n    head = insertAtEnd(head, 20);\n    head = insertAtEnd(head, 30);\n    printf(\"After inserting 10, 20, 30 at end:\\n\");\n    printList(head);\n\n    head = insertAtFront(head, 5);\n    printf(\"After inserting 5 at front:\\n\");\n    printList(head);\n\n    Node* current = head;\n    while (current != NULL) {\n        Node* temp = current;\n        current = current->next;\n        free(temp);\n    }\n\n    return 0;\n}',
        expectedOutput: 'After inserting 10, 20, 30 at end:\n10 -> 20 -> 30 -> NULL\nAfter inserting 5 at front:\n5 -> 10 -> 20 -> 30 -> NULL',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '삭제와 탐색',
        headingEn: 'Deletion & Search',
        text: [
          '연결 리스트에서 특정 값을 가진 노드를 삭제하려면, 해당 노드의 이전 노드가 삭제할 노드의 다음 노드를 가리키도록 포인터를 변경한 뒤, 삭제할 노드의 메모리를 해제합니다.',
          '탐색 연산은 head부터 시작하여 각 노드의 데이터를 비교하며 순회합니다. 값을 찾으면 해당 노드의 포인터를 반환하고, 리스트 끝까지 찾지 못하면 NULL을 반환합니다.',
          '삭제 시 head 노드를 삭제하는 경우와 중간/끝 노드를 삭제하는 경우를 구분하여 처리해야 합니다.'
        ],
        textEn: [
          'To delete a node with a specific value, change the previous node\'s pointer to skip the target node, then free the target node\'s memory.',
          'The search operation traverses from head, comparing each node\'s data. It returns the node pointer if found, or NULL if the value isn\'t in the list.',
          'When deleting, you must handle two cases separately: deleting the head node and deleting a middle/end node.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int data;\n    struct Node* next;\n} Node;\n\nNode* createNode(int data) {\n    Node* newNode = (Node*)malloc(sizeof(Node));\n    newNode->data = data;\n    newNode->next = NULL;\n    return newNode;\n}\n\nNode* insertAtEnd(Node* head, int data) {\n    Node* newNode = createNode(data);\n    if (head == NULL) return newNode;\n    Node* current = head;\n    while (current->next != NULL)\n        current = current->next;\n    current->next = newNode;\n    return head;\n}\n\nNode* deleteNode(Node* head, int data) {\n    if (head == NULL) return NULL;\n    if (head->data == data) {\n        Node* temp = head->next;\n        free(head);\n        return temp;\n    }\n    Node* current = head;\n    while (current->next != NULL && current->next->data != data) {\n        current = current->next;\n    }\n    if (current->next != NULL) {\n        Node* temp = current->next;\n        current->next = temp->next;\n        free(temp);\n    }\n    return head;\n}\n\nNode* search(Node* head, int data) {\n    Node* current = head;\n    while (current != NULL) {\n        if (current->data == data)\n            return current;\n        current = current->next;\n    }\n    return NULL;\n}\n\nvoid printList(Node* head) {\n    Node* current = head;\n    while (current != NULL) {\n        printf(\"%d -> \", current->data);\n        current = current->next;\n    }\n    printf(\"NULL\\n\");\n}\n\nint main(void) {\n    Node* head = NULL;\n    head = insertAtEnd(head, 10);\n    head = insertAtEnd(head, 20);\n    head = insertAtEnd(head, 30);\n    head = insertAtEnd(head, 40);\n\n    printf(\"Original list: \");\n    printList(head);\n\n    Node* found = search(head, 30);\n    if (found) printf(\"Found: %d\\n\", found->data);\n    else printf(\"Not found\\n\");\n\n    found = search(head, 50);\n    if (found) printf(\"Found: %d\\n\", found->data);\n    else printf(\"50 not found\\n\");\n\n    head = deleteNode(head, 20);\n    printf(\"After deleting 20: \");\n    printList(head);\n\n    head = deleteNode(head, 10);\n    printf(\"After deleting 10: \");\n    printList(head);\n\n    Node* current = head;\n    while (current != NULL) {\n        Node* temp = current;\n        current = current->next;\n        free(temp);\n    }\n\n    return 0;\n}',
        expectedOutput: 'Original list: 10 -> 20 -> 30 -> 40 -> NULL\nFound: 30\n50 not found\nAfter deleting 20: 10 -> 30 -> 40 -> NULL\nAfter deleting 10: 30 -> 40 -> NULL',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '전체 리스트 출력',
        headingEn: 'Printing List',
        text: [
          '연결 리스트의 모든 요소를 출력하려면 head부터 시작하여 NULL을 만날 때까지 순회합니다. 이를 리스트 순회(traversal)라고 합니다.',
          '프로그램이 끝나기 전에 반드시 모든 노드의 메모리를 해제해야 합니다. 노드를 해제할 때는 다음 노드의 주소를 미리 저장한 뒤 현재 노드를 free해야 합니다. 그렇지 않으면 다음 노드에 접근할 수 없게 됩니다.',
          '이 예제에서는 리스트의 길이를 구하는 함수와 역순으로 출력하는 재귀 함수도 함께 구현합니다.'
        ],
        textEn: [
          'To print all elements, traverse from head until NULL is reached. This is called list traversal.',
          'Before the program ends, you must free all node memory. When freeing nodes, save the next node\'s address before freeing the current node, otherwise you lose access to the rest of the list.',
          'This example also implements a function to get the list length and a recursive function to print the list in reverse.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int data;\n    struct Node* next;\n} Node;\n\nNode* createNode(int data) {\n    Node* newNode = (Node*)malloc(sizeof(Node));\n    newNode->data = data;\n    newNode->next = NULL;\n    return newNode;\n}\n\nNode* insertAtEnd(Node* head, int data) {\n    Node* newNode = createNode(data);\n    if (head == NULL) return newNode;\n    Node* current = head;\n    while (current->next != NULL)\n        current = current->next;\n    current->next = newNode;\n    return head;\n}\n\nvoid printList(Node* head) {\n    Node* current = head;\n    while (current != NULL) {\n        printf(\"%d -> \", current->data);\n        current = current->next;\n    }\n    printf(\"NULL\\n\");\n}\n\nvoid printReverse(Node* head) {\n    if (head == NULL) return;\n    printReverse(head->next);\n    printf(\"%d \", head->data);\n}\n\nint getLength(Node* head) {\n    int count = 0;\n    Node* current = head;\n    while (current != NULL) {\n        count++;\n        current = current->next;\n    }\n    return count;\n}\n\nvoid freeList(Node* head) {\n    Node* current = head;\n    while (current != NULL) {\n        Node* temp = current;\n        current = current->next;\n        free(temp);\n    }\n}\n\nint main(void) {\n    Node* head = NULL;\n    head = insertAtEnd(head, 10);\n    head = insertAtEnd(head, 20);\n    head = insertAtEnd(head, 30);\n    head = insertAtEnd(head, 40);\n    head = insertAtEnd(head, 50);\n\n    printf(\"List: \");\n    printList(head);\n    printf(\"Length: %d\\n\", getLength(head));\n    printf(\"Reverse: \");\n    printReverse(head);\n    printf(\"\\n\");\n\n    freeList(head);\n    printf(\"All nodes freed.\\n\");\n\n    return 0;\n}',
        expectedOutput: 'List: 10 -> 20 -> 30 -> 40 -> 50 -> NULL\nLength: 5\nReverse: 50 40 30 20 10\nAll nodes freed.',
        tip: '메모리 누수를 방지하려면 항상 malloc()으로 할당한 메모리를 free()로 해제하세요. valgrind 같은 도구로 메모리 누수를 검사할 수 있습니다.',
        tipEn: 'To prevent memory leaks, always free memory allocated with malloc(). You can use tools like valgrind to check for memory leaks.',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      }
    ]
  },

  'stack-queue': {
    sections: [
      {
        heading: '스택 구현',
        headingEn: 'Stack Implementation',
        text: [
          '스택(Stack)은 후입선출(LIFO: Last In, First Out) 원칙을 따르는 자료구조입니다. 마지막에 넣은 데이터가 가장 먼저 나옵니다. 접시를 쌓는 것과 같은 원리입니다.',
          '스택의 핵심 연산은 push(삽입)와 pop(삭제)입니다. push는 스택의 꼭대기에 데이터를 추가하고, pop은 꼭대기의 데이터를 제거하고 반환합니다.',
          '배열을 사용하여 스택을 구현할 수 있습니다. top 변수로 현재 꼭대기의 인덱스를 추적합니다.'
        ],
        textEn: [
          'A Stack is a data structure that follows the LIFO (Last In, First Out) principle. The last element added is the first to be removed, like stacking plates.',
          'The core operations are push (insert) and pop (remove). Push adds data to the top, and pop removes and returns data from the top.',
          'We can implement a stack using an array, tracking the current top index with a top variable.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n\n#define MAX_SIZE 100\n\ntypedef struct {\n    int data[MAX_SIZE];\n    int top;\n} Stack;\n\nvoid initStack(Stack* s) {\n    s->top = -1;\n}\n\nint isEmpty(Stack* s) {\n    return s->top == -1;\n}\n\nint isFull(Stack* s) {\n    return s->top == MAX_SIZE - 1;\n}\n\nvoid push(Stack* s, int value) {\n    if (isFull(s)) {\n        printf(\"Stack overflow!\\n\");\n        return;\n    }\n    s->data[++(s->top)] = value;\n}\n\nint pop(Stack* s) {\n    if (isEmpty(s)) {\n        printf(\"Stack underflow!\\n\");\n        return -1;\n    }\n    return s->data[(s->top)--];\n}\n\nint peek(Stack* s) {\n    if (isEmpty(s)) {\n        printf(\"Stack is empty!\\n\");\n        return -1;\n    }\n    return s->data[s->top];\n}\n\nint main(void) {\n    Stack stack;\n    initStack(&stack);\n\n    push(&stack, 10);\n    push(&stack, 20);\n    push(&stack, 30);\n\n    printf(\"Top element: %d\\n\", peek(&stack));\n    printf(\"Popped: %d\\n\", pop(&stack));\n    printf(\"Popped: %d\\n\", pop(&stack));\n    printf(\"Top element: %d\\n\", peek(&stack));\n    printf(\"Is empty: %d\\n\", isEmpty(&stack));\n    printf(\"Popped: %d\\n\", pop(&stack));\n    printf(\"Is empty: %d\\n\", isEmpty(&stack));\n\n    return 0;\n}',
        expectedOutput: 'Top element: 30\nPopped: 30\nPopped: 20\nTop element: 10\nIs empty: 0\nPopped: 10\nIs empty: 1',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '스택 활용: 괄호 검사',
        headingEn: 'Stack Application: Parenthesis Matching',
        text: [
          '스택의 대표적인 활용 예제는 괄호 짝 맞추기입니다. 여는 괄호를 만나면 스택에 push하고, 닫는 괄호를 만나면 스택에서 pop하여 짝이 맞는지 확인합니다.',
          '문자열을 모두 검사한 후 스택이 비어 있으면 모든 괄호의 짝이 맞는 것이고, 비어 있지 않으면 짝이 맞지 않는 것입니다.',
          '이 알고리즘은 소괄호 (), 중괄호 {}, 대괄호 [] 세 종류의 괄호를 모두 처리할 수 있습니다.'
        ],
        textEn: [
          'A classic stack application is parenthesis matching. Push opening brackets onto the stack, and when encountering a closing bracket, pop and check if they match.',
          'After processing the entire string, if the stack is empty, all brackets are matched; otherwise, they\'re not.',
          'This algorithm can handle all three types of brackets: parentheses (), curly braces {}, and square brackets [].'
        ],
        code: '#include <stdio.h>\n#include <string.h>\n\n#define MAX_SIZE 100\n\ntypedef struct {\n    char data[MAX_SIZE];\n    int top;\n} CharStack;\n\nvoid initStack(CharStack* s) { s->top = -1; }\nint isEmpty(CharStack* s) { return s->top == -1; }\nvoid push(CharStack* s, char c) { s->data[++(s->top)] = c; }\nchar pop(CharStack* s) { return s->data[(s->top)--]; }\n\nint isMatchingPair(char open, char close) {\n    return (open == \'(\' && close == \')\') ||\n           (open == \'{\' && close == \'}\') ||\n           (open == \'[\' && close == \']\');\n}\n\nint checkParentheses(const char* expr) {\n    CharStack stack;\n    initStack(&stack);\n\n    for (int i = 0; i < (int)strlen(expr); i++) {\n        char ch = expr[i];\n        if (ch == \'(\' || ch == \'{\' || ch == \'[\') {\n            push(&stack, ch);\n        } else if (ch == \')\' || ch == \'}\' || ch == \']\') {\n            if (isEmpty(&stack)) return 0;\n            char top = pop(&stack);\n            if (!isMatchingPair(top, ch)) return 0;\n        }\n    }\n    return isEmpty(&stack);\n}\n\nint main(void) {\n    const char* tests[] = {\n        \"{[()()]}\",\n        \"((()))\",\n        \"{[(])}\",\n        \"(((\",\n        \"hello(world)\"\n    };\n    int n = 5;\n\n    for (int i = 0; i < n; i++) {\n        printf(\"\\\"%s\\\" -> %s\\n\", tests[i],\n               checkParentheses(tests[i]) ? \"Balanced\" : \"Not balanced\");\n    }\n\n    return 0;\n}',
        expectedOutput: '"{[()()]}" -> Balanced\n"((()))" -> Balanced\n"{[(])}" -> Not balanced\n"(((" -> Not balanced\n"hello(world)" -> Balanced',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '큐 구현',
        headingEn: 'Queue Implementation',
        text: [
          '큐(Queue)는 선입선출(FIFO: First In, First Out) 원칙을 따르는 자료구조입니다. 먼저 넣은 데이터가 먼저 나옵니다. 줄을 서는 것과 같은 원리입니다.',
          '큐의 핵심 연산은 enqueue(삽입)와 dequeue(삭제)입니다. enqueue는 큐의 뒤(rear)에 데이터를 추가하고, dequeue는 큐의 앞(front)에서 데이터를 제거합니다.',
          '원형 큐(Circular Queue)를 사용하면 배열의 공간을 효율적으로 활용할 수 있습니다. front와 rear가 배열의 끝에 도달하면 다시 처음으로 돌아갑니다.'
        ],
        textEn: [
          'A Queue is a data structure following FIFO (First In, First Out). The first element added is the first removed, like standing in line.',
          'Core operations are enqueue (insert at rear) and dequeue (remove from front).',
          'A Circular Queue efficiently uses array space by wrapping front and rear indices back to the beginning when they reach the end.'
        ],
        code: '#include <stdio.h>\n\n#define MAX_SIZE 5\n\ntypedef struct {\n    int data[MAX_SIZE];\n    int front;\n    int rear;\n    int count;\n} Queue;\n\nvoid initQueue(Queue* q) {\n    q->front = 0;\n    q->rear = -1;\n    q->count = 0;\n}\n\nint isEmpty(Queue* q) { return q->count == 0; }\nint isFull(Queue* q) { return q->count == MAX_SIZE; }\n\nvoid enqueue(Queue* q, int value) {\n    if (isFull(q)) {\n        printf(\"Queue is full!\\n\");\n        return;\n    }\n    q->rear = (q->rear + 1) % MAX_SIZE;\n    q->data[q->rear] = value;\n    q->count++;\n}\n\nint dequeue(Queue* q) {\n    if (isEmpty(q)) {\n        printf(\"Queue is empty!\\n\");\n        return -1;\n    }\n    int value = q->data[q->front];\n    q->front = (q->front + 1) % MAX_SIZE;\n    q->count--;\n    return value;\n}\n\nint main(void) {\n    Queue queue;\n    initQueue(&queue);\n\n    enqueue(&queue, 10);\n    enqueue(&queue, 20);\n    enqueue(&queue, 30);\n    printf(\"Dequeued: %d\\n\", dequeue(&queue));\n    printf(\"Dequeued: %d\\n\", dequeue(&queue));\n\n    enqueue(&queue, 40);\n    enqueue(&queue, 50);\n    enqueue(&queue, 60);\n    enqueue(&queue, 70);\n\n    printf(\"Remaining elements:\\n\");\n    while (!isEmpty(&queue)) {\n        printf(\"  %d\\n\", dequeue(&queue));\n    }\n\n    return 0;\n}',
        expectedOutput: 'Dequeued: 10\nDequeued: 20\nRemaining elements:\n  30\n  40\n  50\n  60\n  70',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '큐 활용: BFS 스타일 처리',
        headingEn: 'Queue Application: BFS-style Processing',
        text: [
          '큐는 너비 우선 탐색(BFS: Breadth-First Search) 알고리즘의 핵심 자료구조입니다. BFS는 가까운 노드부터 탐색하는 방식으로, 최단 경로 문제 등에 활용됩니다.',
          '이 예제에서는 간단한 작업 처리 시뮬레이션을 구현합니다. 작업들이 큐에 순서대로 들어가고, 선입선출 방식으로 처리됩니다.',
          '큐를 활용하면 프린터 대기열, 프로세스 스케줄링, 이벤트 처리 등 다양한 실생활 문제를 모델링할 수 있습니다.'
        ],
        textEn: [
          'Queues are essential for BFS (Breadth-First Search) algorithms, which explore nearest nodes first and are used for shortest path problems.',
          'This example implements a simple task processing simulation where tasks enter the queue in order and are processed FIFO.',
          'Queues can model real-world scenarios like printer queues, process scheduling, and event handling.'
        ],
        code: '#include <stdio.h>\n#include <string.h>\n\n#define MAX_SIZE 10\n#define NAME_LEN 30\n\ntypedef struct {\n    char name[NAME_LEN];\n    int priority;\n} Task;\n\ntypedef struct {\n    Task data[MAX_SIZE];\n    int front;\n    int rear;\n    int count;\n} TaskQueue;\n\nvoid initQueue(TaskQueue* q) {\n    q->front = 0;\n    q->rear = -1;\n    q->count = 0;\n}\n\nint isEmpty(TaskQueue* q) { return q->count == 0; }\n\nvoid enqueue(TaskQueue* q, const char* name, int priority) {\n    if (q->count == MAX_SIZE) {\n        printf(\"Queue full!\\n\");\n        return;\n    }\n    q->rear = (q->rear + 1) % MAX_SIZE;\n    strcpy(q->data[q->rear].name, name);\n    q->data[q->rear].priority = priority;\n    q->count++;\n}\n\nTask dequeue(TaskQueue* q) {\n    Task t = q->data[q->front];\n    q->front = (q->front + 1) % MAX_SIZE;\n    q->count--;\n    return t;\n}\n\nint main(void) {\n    TaskQueue queue;\n    initQueue(&queue);\n\n    enqueue(&queue, \"Print report\", 1);\n    enqueue(&queue, \"Send email\", 2);\n    enqueue(&queue, \"Backup data\", 3);\n    enqueue(&queue, \"Update log\", 1);\n    enqueue(&queue, \"Compile code\", 2);\n\n    printf(\"Processing tasks in order:\\n\");\n    int step = 1;\n    while (!isEmpty(&queue)) {\n        Task t = dequeue(&queue);\n        printf(\"  Step %d: [Priority %d] %s\\n\", step++, t.priority, t.name);\n    }\n    printf(\"All tasks completed.\\n\");\n\n    return 0;\n}',
        expectedOutput: 'Processing tasks in order:\n  Step 1: [Priority 1] Print report\n  Step 2: [Priority 2] Send email\n  Step 3: [Priority 3] Backup data\n  Step 4: [Priority 1] Update log\n  Step 5: [Priority 2] Compile code\nAll tasks completed.',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      }
    ]
  },

  'tree-basics': {
    sections: [
      {
        heading: '이진 트리 구조',
        headingEn: 'Binary Tree Structure',
        text: [
          '트리(Tree)는 계층적 구조를 표현하는 비선형 자료구조입니다. 최상위 노드를 루트(root)라 하고, 각 노드는 자식 노드를 가질 수 있습니다.',
          '이진 트리(Binary Tree)는 각 노드가 최대 2개의 자식(왼쪽, 오른쪽)을 가지는 트리입니다. 이진 탐색 트리(BST)는 왼쪽 자식의 값이 부모보다 작고, 오른쪽 자식의 값이 부모보다 큰 이진 트리입니다.',
          '트리 노드는 구조체로 정의하며, 데이터와 왼쪽/오른쪽 자식을 가리키는 두 개의 포인터를 포함합니다.'
        ],
        textEn: [
          'A Tree is a non-linear data structure representing hierarchical relationships. The topmost node is called the root, and each node can have child nodes.',
          'A Binary Tree allows each node to have at most 2 children (left and right). A Binary Search Tree (BST) ensures left children have smaller values and right children have larger values than the parent.',
          'Tree nodes are defined as structs containing data and two pointers for left and right children.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n} TreeNode;\n\nTreeNode* createNode(int data) {\n    TreeNode* node = (TreeNode*)malloc(sizeof(TreeNode));\n    node->data = data;\n    node->left = NULL;\n    node->right = NULL;\n    return node;\n}\n\nint main(void) {\n    TreeNode* root = createNode(1);\n    root->left = createNode(2);\n    root->right = createNode(3);\n    root->left->left = createNode(4);\n    root->left->right = createNode(5);\n\n    printf(\"Root: %d\\n\", root->data);\n    printf(\"Root->left: %d\\n\", root->left->data);\n    printf(\"Root->right: %d\\n\", root->right->data);\n    printf(\"Root->left->left: %d\\n\", root->left->left->data);\n    printf(\"Root->left->right: %d\\n\", root->left->right->data);\n\n    free(root->left->left);\n    free(root->left->right);\n    free(root->left);\n    free(root->right);\n    free(root);\n\n    return 0;\n}',
        expectedOutput: 'Root: 1\nRoot->left: 2\nRoot->right: 3\nRoot->left->left: 4\nRoot->left->right: 5',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: 'BST 삽입과 탐색',
        headingEn: 'BST Insert & Search',
        text: [
          '이진 탐색 트리에 새 값을 삽입할 때는 루트부터 시작하여 값을 비교하며 올바른 위치를 찾습니다. 삽입할 값이 현재 노드보다 작으면 왼쪽으로, 크면 오른쪽으로 이동합니다.',
          '탐색도 같은 원리입니다. 찾는 값이 현재 노드와 같으면 찾은 것이고, 작으면 왼쪽, 크면 오른쪽으로 이동합니다. NULL을 만나면 값이 트리에 없는 것입니다.',
          '재귀적 구현이 직관적이며, BST의 평균 시간 복잡도는 O(log n)입니다. 하지만 편향 트리의 경우 O(n)까지 늘어날 수 있습니다.'
        ],
        textEn: [
          'When inserting into a BST, start at the root and compare values to find the correct position. Go left if the value is smaller, right if larger.',
          'Searching works the same way: if the value matches the current node, it\'s found; if smaller, go left; if larger, go right. Reaching NULL means the value isn\'t in the tree.',
          'Recursive implementation is intuitive. BST average time complexity is O(log n), but can degrade to O(n) for skewed trees.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n} TreeNode;\n\nTreeNode* createNode(int data) {\n    TreeNode* node = (TreeNode*)malloc(sizeof(TreeNode));\n    node->data = data;\n    node->left = NULL;\n    node->right = NULL;\n    return node;\n}\n\nTreeNode* insert(TreeNode* root, int data) {\n    if (root == NULL) {\n        return createNode(data);\n    }\n    if (data < root->data) {\n        root->left = insert(root->left, data);\n    } else if (data > root->data) {\n        root->right = insert(root->right, data);\n    }\n    return root;\n}\n\nTreeNode* search(TreeNode* root, int data) {\n    if (root == NULL || root->data == data) {\n        return root;\n    }\n    if (data < root->data) {\n        return search(root->left, data);\n    }\n    return search(root->right, data);\n}\n\nvoid inorder(TreeNode* root) {\n    if (root == NULL) return;\n    inorder(root->left);\n    printf(\"%d \", root->data);\n    inorder(root->right);\n}\n\nvoid freeTree(TreeNode* root) {\n    if (root == NULL) return;\n    freeTree(root->left);\n    freeTree(root->right);\n    free(root);\n}\n\nint main(void) {\n    TreeNode* root = NULL;\n    root = insert(root, 50);\n    insert(root, 30);\n    insert(root, 70);\n    insert(root, 20);\n    insert(root, 40);\n    insert(root, 60);\n    insert(root, 80);\n\n    printf(\"Inorder traversal: \");\n    inorder(root);\n    printf(\"\\n\");\n\n    int key = 40;\n    TreeNode* result = search(root, key);\n    if (result) printf(\"Found %d in the BST\\n\", key);\n    else printf(\"%d not found\\n\", key);\n\n    key = 45;\n    result = search(root, key);\n    if (result) printf(\"Found %d in the BST\\n\", key);\n    else printf(\"%d not found in the BST\\n\", key);\n\n    freeTree(root);\n\n    return 0;\n}',
        expectedOutput: 'Inorder traversal: 20 30 40 50 60 70 80\nFound 40 in the BST\n45 not found in the BST',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      },
      {
        heading: '트리 순회',
        headingEn: 'Tree Traversal',
        text: [
          '트리 순회(Tree Traversal)는 트리의 모든 노드를 체계적으로 방문하는 방법입니다. 이진 트리의 세 가지 주요 순회 방법을 알아봅니다.',
          '전위 순회(Preorder): 루트 -> 왼쪽 -> 오른쪽 순서로 방문합니다. 트리를 복사할 때 유용합니다. 중위 순회(Inorder): 왼쪽 -> 루트 -> 오른쪽 순서로 방문합니다. BST에서 오름차순 정렬 결과를 얻을 수 있습니다.',
          '후위 순회(Postorder): 왼쪽 -> 오른쪽 -> 루트 순서로 방문합니다. 트리를 삭제할 때 유용합니다. 자식 노드를 먼저 처리한 후 부모 노드를 처리하기 때문입니다.'
        ],
        textEn: [
          'Tree Traversal is a systematic way to visit all nodes. Let\'s explore the three main traversal methods for binary trees.',
          'Preorder: Visit root, then left, then right. Useful for copying trees. Inorder: Visit left, then root, then right. Produces sorted output for BSTs.',
          'Postorder: Visit left, then right, then root. Useful for deleting trees since children are processed before parents.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n} TreeNode;\n\nTreeNode* createNode(int data) {\n    TreeNode* node = (TreeNode*)malloc(sizeof(TreeNode));\n    node->data = data;\n    node->left = NULL;\n    node->right = NULL;\n    return node;\n}\n\nTreeNode* insert(TreeNode* root, int data) {\n    if (root == NULL) return createNode(data);\n    if (data < root->data)\n        root->left = insert(root->left, data);\n    else if (data > root->data)\n        root->right = insert(root->right, data);\n    return root;\n}\n\nvoid preorder(TreeNode* root) {\n    if (root == NULL) return;\n    printf(\"%d \", root->data);\n    preorder(root->left);\n    preorder(root->right);\n}\n\nvoid inorder(TreeNode* root) {\n    if (root == NULL) return;\n    inorder(root->left);\n    printf(\"%d \", root->data);\n    inorder(root->right);\n}\n\nvoid postorder(TreeNode* root) {\n    if (root == NULL) return;\n    postorder(root->left);\n    postorder(root->right);\n    printf(\"%d \", root->data);\n}\n\nvoid freeTree(TreeNode* root) {\n    if (root == NULL) return;\n    freeTree(root->left);\n    freeTree(root->right);\n    free(root);\n}\n\nint main(void) {\n    TreeNode* root = NULL;\n    root = insert(root, 50);\n    insert(root, 30);\n    insert(root, 70);\n    insert(root, 20);\n    insert(root, 40);\n    insert(root, 60);\n    insert(root, 80);\n\n    printf(\"Preorder:  \");\n    preorder(root);\n    printf(\"\\n\");\n\n    printf(\"Inorder:   \");\n    inorder(root);\n    printf(\"\\n\");\n\n    printf(\"Postorder: \");\n    postorder(root);\n    printf(\"\\n\");\n\n    freeTree(root);\n\n    return 0;\n}',
        expectedOutput: 'Preorder:  50 30 20 40 70 60 80\nInorder:   20 30 40 50 60 70 80\nPostorder: 20 40 30 60 80 70 50',
        tip: '중위 순회(Inorder)는 BST에서 값을 오름차순으로 정렬하는 가장 간단한 방법입니다.',
        tipEn: 'Inorder traversal is the simplest way to get sorted values from a BST.',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      }
    ]
  },

  'sorting': {
    sections: [
      {
        heading: '버블 정렬',
        headingEn: 'Bubble Sort',
        text: [
          '버블 정렬(Bubble Sort)은 인접한 두 요소를 비교하여 순서가 잘못되어 있으면 교환하는 정렬 알고리즘입니다. 가장 큰 값이 거품처럼 배열의 끝으로 이동하기 때문에 버블 정렬이라 합니다.',
          '외부 루프는 전체 패스 횟수를, 내부 루프는 각 패스에서의 비교를 담당합니다. 시간 복잡도는 O(n^2)으로, 큰 데이터에는 비효율적이지만 구현이 간단합니다.',
          '최적화로, 한 패스에서 교환이 한 번도 일어나지 않으면 이미 정렬된 것이므로 조기에 종료할 수 있습니다.'
        ],
        textEn: [
          'Bubble Sort compares adjacent elements and swaps them if they\'re in the wrong order. The largest values "bubble up" to the end of the array.',
          'The outer loop controls the number of passes, and the inner loop handles comparisons. Time complexity is O(n^2) -- inefficient for large data but simple to implement.',
          'An optimization: if no swaps occur during a pass, the array is already sorted and we can terminate early.'
        ],
        code: '#include <stdio.h>\n\nvoid bubbleSort(int arr[], int n) {\n    int i, j, temp, swapped;\n    for (i = 0; i < n - 1; i++) {\n        swapped = 0;\n        for (j = 0; j < n - 1 - i; j++) {\n            if (arr[j] > arr[j + 1]) {\n                temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n                swapped = 1;\n            }\n        }\n        if (!swapped) break;\n    }\n}\n\nvoid printArray(int arr[], int n) {\n    int i;\n    for (i = 0; i < n; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    printf(\"\\n\");\n}\n\nint main(void) {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = 7;\n\n    printf(\"Before sorting: \");\n    printArray(arr, n);\n\n    bubbleSort(arr, n);\n\n    printf(\"After sorting:  \");\n    printArray(arr, n);\n\n    return 0;\n}',
        expectedOutput: 'Before sorting: 64 34 25 12 22 11 90\nAfter sorting:  11 12 22 25 34 64 90'
      },
      {
        heading: '선택 정렬',
        headingEn: 'Selection Sort',
        text: [
          '선택 정렬(Selection Sort)은 배열에서 가장 작은 요소를 찾아 맨 앞의 요소와 교환하는 과정을 반복하는 알고리즘입니다.',
          '각 패스마다 정렬되지 않은 부분에서 최솟값을 찾아 정렬된 부분의 끝에 배치합니다. 시간 복잡도는 항상 O(n^2)이지만, 교환 횟수가 적어 교환 비용이 큰 경우에 유리합니다.',
          '버블 정렬과 달리 교환은 각 패스당 최대 1번만 발생합니다.'
        ],
        textEn: [
          'Selection Sort repeatedly finds the minimum element from the unsorted portion and places it at the beginning.',
          'Each pass finds the minimum in the unsorted section and places it at the end of the sorted section. Time complexity is always O(n^2), but fewer swaps make it advantageous when swap cost is high.',
          'Unlike Bubble Sort, at most one swap occurs per pass.'
        ],
        code: '#include <stdio.h>\n\nvoid selectionSort(int arr[], int n) {\n    int i, j, minIdx, temp;\n    for (i = 0; i < n - 1; i++) {\n        minIdx = i;\n        for (j = i + 1; j < n; j++) {\n            if (arr[j] < arr[minIdx]) {\n                minIdx = j;\n            }\n        }\n        if (minIdx != i) {\n            temp = arr[i];\n            arr[i] = arr[minIdx];\n            arr[minIdx] = temp;\n        }\n    }\n}\n\nvoid printArray(int arr[], int n) {\n    int i;\n    for (i = 0; i < n; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    printf(\"\\n\");\n}\n\nint main(void) {\n    int arr[] = {29, 10, 14, 37, 13};\n    int n = 5;\n\n    printf(\"Before sorting: \");\n    printArray(arr, n);\n\n    selectionSort(arr, n);\n\n    printf(\"After sorting:  \");\n    printArray(arr, n);\n\n    return 0;\n}',
        expectedOutput: 'Before sorting: 29 10 14 37 13\nAfter sorting:  10 13 14 29 37'
      },
      {
        heading: '삽입 정렬',
        headingEn: 'Insertion Sort',
        text: [
          '삽입 정렬(Insertion Sort)은 각 요소를 이미 정렬된 부분의 올바른 위치에 삽입하는 알고리즘입니다. 카드 게임에서 손에 든 카드를 정렬하는 것과 같은 원리입니다.',
          '현재 요소를 key로 저장하고, 정렬된 부분에서 key보다 큰 요소들을 한 칸씩 오른쪽으로 이동시킨 후, 빈 자리에 key를 삽입합니다.',
          '시간 복잡도는 최악의 경우 O(n^2)이지만, 거의 정렬된 데이터에 대해서는 O(n)에 가까운 성능을 보여 실용적인 알고리즘입니다.'
        ],
        textEn: [
          'Insertion Sort inserts each element into its correct position within the already sorted portion, like sorting cards in your hand.',
          'Store the current element as key, shift all larger elements in the sorted portion one position right, then insert key into the empty spot.',
          'Worst-case time complexity is O(n^2), but for nearly sorted data it approaches O(n), making it practical for many real-world scenarios.'
        ],
        code: '#include <stdio.h>\n\nvoid insertionSort(int arr[], int n) {\n    int i, j, key;\n    for (i = 1; i < n; i++) {\n        key = arr[i];\n        j = i - 1;\n        while (j >= 0 && arr[j] > key) {\n            arr[j + 1] = arr[j];\n            j--;\n        }\n        arr[j + 1] = key;\n    }\n}\n\nvoid printArray(int arr[], int n) {\n    int i;\n    for (i = 0; i < n; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    printf(\"\\n\");\n}\n\nint main(void) {\n    int arr[] = {12, 11, 13, 5, 6};\n    int n = 5;\n\n    printf(\"Before sorting: \");\n    printArray(arr, n);\n\n    insertionSort(arr, n);\n\n    printf(\"After sorting:  \");\n    printArray(arr, n);\n\n    return 0;\n}',
        expectedOutput: 'Before sorting: 12 11 13 5 6\nAfter sorting:  5 6 11 12 13'
      },
      {
        heading: '퀵 정렬',
        headingEn: 'Quick Sort',
        text: [
          '퀵 정렬(Quick Sort)은 분할 정복(Divide and Conquer) 전략을 사용하는 효율적인 정렬 알고리즘입니다. 피벗(pivot) 요소를 기준으로 배열을 두 부분으로 분할합니다.',
          '파티션(partition) 과정에서 피벗보다 작은 요소는 왼쪽으로, 큰 요소는 오른쪽으로 이동합니다. 그 후 각 부분에 대해 재귀적으로 퀵 정렬을 수행합니다.',
          '평균 시간 복잡도는 O(n log n)으로 매우 효율적이며, 실무에서 가장 많이 사용되는 정렬 알고리즘 중 하나입니다. 최악의 경우(이미 정렬된 배열) O(n^2)이 될 수 있습니다.'
        ],
        textEn: [
          'Quick Sort uses the Divide and Conquer strategy. It selects a pivot element and partitions the array into two halves.',
          'During partition, elements smaller than the pivot move left, and larger elements move right. Then Quick Sort is applied recursively to each half.',
          'Average time complexity is O(n log n), making it one of the most widely used sorting algorithms in practice. Worst case (already sorted array) can be O(n^2).'
        ],
        code: '#include <stdio.h>\n\nvoid swap(int* a, int* b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint partition(int arr[], int low, int high) {\n    int pivot = arr[high];\n    int i = low - 1;\n    int j;\n    for (j = low; j < high; j++) {\n        if (arr[j] <= pivot) {\n            i++;\n            swap(&arr[i], &arr[j]);\n        }\n    }\n    swap(&arr[i + 1], &arr[high]);\n    return i + 1;\n}\n\nvoid quickSort(int arr[], int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}\n\nvoid printArray(int arr[], int n) {\n    int i;\n    for (i = 0; i < n; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    printf(\"\\n\");\n}\n\nint main(void) {\n    int arr[] = {10, 7, 8, 9, 1, 5};\n    int n = 6;\n\n    printf(\"Before sorting: \");\n    printArray(arr, n);\n\n    quickSort(arr, 0, n - 1);\n\n    printf(\"After sorting:  \");\n    printArray(arr, n);\n\n    return 0;\n}',
        expectedOutput: 'Before sorting: 10 7 8 9 1 5\nAfter sorting:  1 5 7 8 9 10',
        tip: '퀵 정렬의 성능은 피벗 선택에 크게 좌우됩니다. 중앙값을 피벗으로 선택하면 최악의 경우를 피할 수 있습니다.',
        tipEn: 'Quick Sort performance heavily depends on pivot selection. Choosing the median as pivot avoids worst-case scenarios.'
      }
    ]
  },

  'searching': {
    sections: [
      {
        heading: '순차 탐색',
        headingEn: 'Linear Search',
        text: [
          '순차 탐색(Linear Search)은 배열의 처음부터 끝까지 하나씩 비교하며 원하는 값을 찾는 가장 기본적인 탐색 알고리즘입니다.',
          '배열이 정렬되어 있지 않아도 사용할 수 있다는 장점이 있습니다. 하지만 시간 복잡도가 O(n)이므로, 데이터가 많을수록 느려집니다.',
          '값을 찾으면 해당 인덱스를 반환하고, 끝까지 찾지 못하면 -1을 반환하는 것이 일반적인 패턴입니다.'
        ],
        textEn: [
          'Linear Search is the most basic search algorithm that checks each element from the beginning to the end of the array.',
          'It works on unsorted arrays, which is an advantage. However, its O(n) time complexity means it slows down with more data.',
          'The common pattern is to return the index when found, or -1 if the value isn\'t in the array.'
        ],
        code: '#include <stdio.h>\n\nint linearSearch(int arr[], int n, int target) {\n    int i;\n    for (i = 0; i < n; i++) {\n        if (arr[i] == target) {\n            return i;\n        }\n    }\n    return -1;\n}\n\nint main(void) {\n    int arr[] = {23, 45, 12, 67, 34, 89, 56};\n    int n = 7;\n    int target;\n    int result;\n\n    target = 67;\n    result = linearSearch(arr, n, target);\n    if (result != -1)\n        printf(\"%d found at index %d\\n\", target, result);\n    else\n        printf(\"%d not found\\n\", target);\n\n    target = 50;\n    result = linearSearch(arr, n, target);\n    if (result != -1)\n        printf(\"%d found at index %d\\n\", target, result);\n    else\n        printf(\"%d not found\\n\", target);\n\n    target = 23;\n    result = linearSearch(arr, n, target);\n    if (result != -1)\n        printf(\"%d found at index %d\\n\", target, result);\n    else\n        printf(\"%d not found\\n\", target);\n\n    return 0;\n}',
        expectedOutput: '67 found at index 3\n50 not found\n23 found at index 0'
      },
      {
        heading: '이진 탐색',
        headingEn: 'Binary Search',
        text: [
          '이진 탐색(Binary Search)은 정렬된 배열에서 탐색 범위를 절반씩 줄여가며 값을 찾는 효율적인 알고리즘입니다. 시간 복잡도는 O(log n)입니다.',
          '배열의 중간 요소와 찾는 값을 비교합니다. 찾는 값이 중간 값보다 작으면 왼쪽 절반을, 크면 오른쪽 절반을 탐색합니다. 이 과정을 값을 찾거나 탐색 범위가 없어질 때까지 반복합니다.',
          '이진 탐색을 사용하려면 반드시 배열이 정렬되어 있어야 합니다. 100만 개의 요소가 있어도 최대 약 20번의 비교로 값을 찾을 수 있습니다.'
        ],
        textEn: [
          'Binary Search efficiently finds values in sorted arrays by halving the search range each step. Time complexity is O(log n).',
          'Compare the target with the middle element. If the target is smaller, search the left half; if larger, search the right half. Repeat until found or the range is empty.',
          'The array MUST be sorted for binary search. Even with 1 million elements, at most about 20 comparisons are needed.'
        ],
        code: '#include <stdio.h>\n\nint binarySearch(int arr[], int n, int target) {\n    int low = 0;\n    int high = n - 1;\n\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n\n        if (arr[mid] == target) {\n            return mid;\n        } else if (arr[mid] < target) {\n            low = mid + 1;\n        } else {\n            high = mid - 1;\n        }\n    }\n    return -1;\n}\n\nint main(void) {\n    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};\n    int n = 10;\n    int target;\n    int result;\n\n    target = 23;\n    result = binarySearch(arr, n, target);\n    if (result != -1)\n        printf(\"%d found at index %d\\n\", target, result);\n    else\n        printf(\"%d not found\\n\", target);\n\n    target = 100;\n    result = binarySearch(arr, n, target);\n    if (result != -1)\n        printf(\"%d found at index %d\\n\", target, result);\n    else\n        printf(\"%d not found\\n\", target);\n\n    target = 2;\n    result = binarySearch(arr, n, target);\n    if (result != -1)\n        printf(\"%d found at index %d\\n\", target, result);\n    else\n        printf(\"%d not found\\n\", target);\n\n    return 0;\n}',
        expectedOutput: '23 found at index 5\n100 not found\n2 found at index 0',
        tip: 'mid = (low + high) / 2 대신 mid = low + (high - low) / 2를 사용하면 정수 오버플로를 방지할 수 있습니다.',
        tipEn: 'Using mid = low + (high - low) / 2 instead of mid = (low + high) / 2 prevents integer overflow.'
      },
      {
        heading: '해시 테이블',
        headingEn: 'Hash Table',
        text: [
          '해시 테이블(Hash Table)은 키를 해시 함수에 넣어 인덱스를 계산하고, 해당 위치에 데이터를 저장하는 자료구조입니다. 평균 O(1) 시간에 삽입, 삭제, 탐색이 가능합니다.',
          '해시 충돌(collision)은 서로 다른 키가 같은 인덱스로 매핑되는 경우입니다. 체이닝(chaining) 방식은 같은 인덱스에 연결 리스트로 데이터를 연결하여 충돌을 해결합니다.',
          '좋은 해시 함수는 데이터를 균등하게 분포시켜 충돌을 최소화합니다. 이 예제에서는 간단한 나머지 연산(%)을 해시 함수로 사용합니다.'
        ],
        textEn: [
          'A Hash Table computes an index using a hash function on the key, then stores data at that index. Average O(1) time for insert, delete, and search.',
          'Hash collisions occur when different keys map to the same index. Chaining resolves collisions by linking data at the same index using a linked list.',
          'A good hash function distributes data evenly to minimize collisions. This example uses a simple modulo (%) operation as the hash function.'
        ],
        code: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#define TABLE_SIZE 10\n\ntypedef struct Entry {\n    int key;\n    int value;\n    struct Entry* next;\n} Entry;\n\ntypedef struct {\n    Entry* buckets[TABLE_SIZE];\n} HashTable;\n\nint hash(int key) {\n    return key % TABLE_SIZE;\n}\n\nHashTable* createTable(void) {\n    HashTable* table = (HashTable*)malloc(sizeof(HashTable));\n    int i;\n    for (i = 0; i < TABLE_SIZE; i++) {\n        table->buckets[i] = NULL;\n    }\n    return table;\n}\n\nvoid insert(HashTable* table, int key, int value) {\n    int idx = hash(key);\n    Entry* entry = (Entry*)malloc(sizeof(Entry));\n    entry->key = key;\n    entry->value = value;\n    entry->next = table->buckets[idx];\n    table->buckets[idx] = entry;\n}\n\nint search(HashTable* table, int key, int* found) {\n    int idx = hash(key);\n    Entry* entry = table->buckets[idx];\n    while (entry != NULL) {\n        if (entry->key == key) {\n            *found = 1;\n            return entry->value;\n        }\n        entry = entry->next;\n    }\n    *found = 0;\n    return -1;\n}\n\nvoid freeTable(HashTable* table) {\n    int i;\n    for (i = 0; i < TABLE_SIZE; i++) {\n        Entry* entry = table->buckets[i];\n        while (entry != NULL) {\n            Entry* temp = entry;\n            entry = entry->next;\n            free(temp);\n        }\n    }\n    free(table);\n}\n\nint main(void) {\n    HashTable* table = createTable();\n\n    insert(table, 1, 100);\n    insert(table, 11, 200);\n    insert(table, 21, 300);\n    insert(table, 5, 500);\n\n    int found;\n    int val;\n\n    val = search(table, 1, &found);\n    if (found) printf(\"Key 1: value = %d\\n\", val);\n\n    val = search(table, 11, &found);\n    if (found) printf(\"Key 11: value = %d\\n\", val);\n\n    val = search(table, 21, &found);\n    if (found) printf(\"Key 21: value = %d\\n\", val);\n\n    val = search(table, 7, &found);\n    if (found) printf(\"Key 7: value = %d\\n\", val);\n    else printf(\"Key 7: not found\\n\");\n\n    printf(\"Keys 1, 11, 21 all hash to index %d (chaining)\\n\", hash(1));\n\n    freeTable(table);\n\n    return 0;\n}',
        expectedOutput: 'Key 1: value = 100\nKey 11: value = 200\nKey 21: value = 300\nKey 7: not found\nKeys 1, 11, 21 all hash to index 1 (chaining)',
        warning: '이 코드는 브라우저 컴파일러에서 실행할 수 없습니다. GCC 등 로컬 컴파일러를 사용해 주세요.',
        warningEn: 'This code cannot run in the browser compiler. Please use a local compiler like GCC.'
      }
    ]
  },

  'recursion': {
    sections: [
      {
        heading: '재귀의 기본',
        headingEn: 'Recursion Basics',
        text: [
          '재귀(Recursion)란 함수가 자기 자신을 호출하는 프로그래밍 기법입니다. 큰 문제를 같은 구조의 작은 문제로 나누어 해결할 때 유용합니다.',
          '모든 재귀 함수에는 반드시 종료 조건(base case)이 있어야 합니다. 종료 조건이 없으면 함수가 무한히 호출되어 스택 오버플로가 발생합니다.',
          '팩토리얼 계산은 재귀의 대표적인 예입니다. n! = n * (n-1)! 이며, 종료 조건은 0! = 1입니다.'
        ],
        textEn: [
          'Recursion is a programming technique where a function calls itself. It\'s useful for breaking down large problems into smaller subproblems of the same structure.',
          'Every recursive function must have a base case (termination condition). Without it, the function calls itself infinitely, causing a stack overflow.',
          'Factorial calculation is a classic recursion example. n! = n * (n-1)!, with the base case 0! = 1.'
        ],
        code: '#include <stdio.h>\n\nint factorial(int n) {\n    if (n <= 1) {\n        return 1;\n    }\n    return n * factorial(n - 1);\n}\n\nint sum(int n) {\n    if (n <= 0) {\n        return 0;\n    }\n    return n + sum(n - 1);\n}\n\nint main(void) {\n    printf(\"5! = %d\\n\", factorial(5));\n    printf(\"4! = %d\\n\", factorial(4));\n    printf(\"0! = %d\\n\", factorial(0));\n    printf(\"1! = %d\\n\", factorial(1));\n\n    printf(\"Sum 1 to 10 = %d\\n\", sum(10));\n    printf(\"Sum 1 to 5 = %d\\n\", sum(5));\n\n    return 0;\n}',
        expectedOutput: '5! = 120\n4! = 24\n0! = 1\n1! = 1\nSum 1 to 10 = 55\nSum 1 to 5 = 15',
        tip: '재귀 함수를 작성할 때는 항상 종료 조건(base case)을 먼저 작성하세요. 이렇게 하면 무한 재귀를 방지할 수 있습니다.',
        tipEn: 'When writing recursive functions, always write the base case first. This helps prevent infinite recursion.'
      },
      {
        heading: '피보나치 수열',
        headingEn: 'Fibonacci Sequence',
        text: [
          '피보나치 수열은 각 항이 앞의 두 항의 합인 수열입니다: 0, 1, 1, 2, 3, 5, 8, 13, 21, ... 자연에서 나선 패턴, 꽃잎 수 등에서 나타납니다.',
          '재귀적 정의는 간단합니다: fib(0) = 0, fib(1) = 1, fib(n) = fib(n-1) + fib(n-2). 하지만 단순 재귀는 같은 값을 여러 번 계산하여 비효율적입니다.',
          '반복문을 사용한 구현은 O(n) 시간에 계산할 수 있어 훨씬 효율적입니다. 메모이제이션(memoization)을 적용하면 재귀에서도 효율성을 개선할 수 있습니다.'
        ],
        textEn: [
          'The Fibonacci sequence is where each term is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, 13, 21... It appears in nature in spiral patterns and petal counts.',
          'The recursive definition is simple: fib(0) = 0, fib(1) = 1, fib(n) = fib(n-1) + fib(n-2). However, naive recursion recalculates the same values, making it inefficient.',
          'An iterative implementation runs in O(n) time and is much more efficient. Memoization can also improve recursive efficiency.'
        ],
        code: '#include <stdio.h>\n\nint fibRecursive(int n) {\n    if (n <= 0) return 0;\n    if (n == 1) return 1;\n    return fibRecursive(n - 1) + fibRecursive(n - 2);\n}\n\nint fibIterative(int n) {\n    int i;\n    if (n <= 0) return 0;\n    if (n == 1) return 1;\n\n    int prev2 = 0;\n    int prev1 = 1;\n    int current = 0;\n    for (i = 2; i <= n; i++) {\n        current = prev1 + prev2;\n        prev2 = prev1;\n        prev1 = current;\n    }\n    return current;\n}\n\nint main(void) {\n    int i;\n    printf(\"Fibonacci (recursive):\\n\");\n    for (i = 0; i <= 10; i++) {\n        printf(\"fib(%d) = %d\\n\", i, fibRecursive(i));\n    }\n\n    printf(\"\\nFibonacci (iterative):\\n\");\n    for (i = 0; i <= 10; i++) {\n        printf(\"fib(%d) = %d\\n\", i, fibIterative(i));\n    }\n\n    return 0;\n}',
        expectedOutput: 'Fibonacci (recursive):\nfib(0) = 0\nfib(1) = 1\nfib(2) = 1\nfib(3) = 2\nfib(4) = 3\nfib(5) = 5\nfib(6) = 8\nfib(7) = 13\nfib(8) = 21\nfib(9) = 34\nfib(10) = 55\n\nFibonacci (iterative):\nfib(0) = 0\nfib(1) = 1\nfib(2) = 1\nfib(3) = 2\nfib(4) = 3\nfib(5) = 5\nfib(6) = 8\nfib(7) = 13\nfib(8) = 21\nfib(9) = 34\nfib(10) = 55'
      },
      {
        heading: '하노이의 탑',
        headingEn: 'Tower of Hanoi',
        text: [
          '하노이의 탑은 재귀의 아름다움을 보여주는 고전적인 문제입니다. 세 개의 기둥과 n개의 원판이 있으며, 한 기둥에서 다른 기둥으로 모든 원판을 옮겨야 합니다.',
          '규칙은 간단합니다: 한 번에 하나의 원판만 옮길 수 있고, 큰 원판 위에 작은 원판만 놓을 수 있습니다.',
          '재귀적 해법: n-1개의 원판을 보조 기둥으로 옮기고, 가장 큰 원판을 목표 기둥으로 옮긴 다음, n-1개의 원판을 목표 기둥으로 옮깁니다. 이동 횟수는 2^n - 1 입니다.'
        ],
        textEn: [
          'The Tower of Hanoi is a classic problem showcasing the beauty of recursion. Given three pegs and n disks, move all disks from one peg to another.',
          'Rules are simple: move only one disk at a time, and a larger disk cannot be placed on a smaller one.',
          'Recursive solution: move n-1 disks to auxiliary peg, move the largest disk to target peg, then move n-1 disks to target peg. Total moves: 2^n - 1.'
        ],
        code: '#include <stdio.h>\n\nvoid hanoi(int n, char from, char to, char aux) {\n    if (n == 1) {\n        printf(\"Move disk 1 from %c to %c\\n\", from, to);\n        return;\n    }\n    hanoi(n - 1, from, aux, to);\n    printf(\"Move disk %d from %c to %c\\n\", n, from, to);\n    hanoi(n - 1, aux, to, from);\n}\n\nint main(void) {\n    int n = 3;\n    printf(\"Tower of Hanoi with %d disks:\\n\", n);\n    hanoi(n, \'A\', \'C\', \'B\');\n\n    return 0;\n}',
        expectedOutput: 'Tower of Hanoi with 3 disks:\nMove disk 1 from A to C\nMove disk 2 from A to B\nMove disk 1 from C to B\nMove disk 3 from A to C\nMove disk 1 from B to A\nMove disk 2 from B to C\nMove disk 1 from A to C'
      },
      {
        heading: '분할 정복: 거듭제곱',
        headingEn: 'Divide and Conquer: Power Function',
        text: [
          '분할 정복(Divide and Conquer)은 문제를 작은 부분 문제로 나누고, 각각을 해결한 뒤 합치는 전략입니다. 재귀와 함께 사용되는 핵심 알고리즘 설계 기법입니다.',
          '거듭제곱 계산을 예로 들어봅시다. 단순히 x를 n번 곱하면 O(n)이지만, 분할 정복을 적용하면 O(log n)에 계산할 수 있습니다.',
          'x^n = x^(n/2) * x^(n/2) (n이 짝수일 때), x^n = x * x^(n/2) * x^(n/2) (n이 홀수일 때). 이 원리로 큰 거듭제곱도 빠르게 계산할 수 있습니다.'
        ],
        textEn: [
          'Divide and Conquer splits problems into smaller subproblems, solves each, and combines results. It\'s a key algorithm design technique used with recursion.',
          'Consider power calculation. Simply multiplying x by itself n times is O(n), but divide and conquer achieves O(log n).',
          'x^n = x^(n/2) * x^(n/2) (when n is even), x^n = x * x^(n/2) * x^(n/2) (when n is odd). This principle enables fast computation of large powers.'
        ],
        code: '#include <stdio.h>\n\nlong long powerSlow(int base, int exp) {\n    long long result = 1;\n    int i;\n    for (i = 0; i < exp; i++) {\n        result = result * base;\n    }\n    return result;\n}\n\nlong long powerFast(int base, int exp) {\n    if (exp == 0) return 1;\n    if (exp == 1) return base;\n\n    long long half = powerFast(base, exp / 2);\n\n    if (exp % 2 == 0) {\n        return half * half;\n    } else {\n        return base * half * half;\n    }\n}\n\nint main(void) {\n    printf(\"2^10 = %lld\\n\", powerFast(2, 10));\n    printf(\"3^5  = %lld\\n\", powerFast(3, 5));\n    printf(\"5^3  = %lld\\n\", powerFast(5, 3));\n    printf(\"2^20 = %lld\\n\", powerFast(2, 20));\n    printf(\"7^0  = %lld\\n\", powerFast(7, 0));\n\n    printf(\"\\nVerification with slow method:\\n\");\n    printf(\"2^10 = %lld\\n\", powerSlow(2, 10));\n    printf(\"3^5  = %lld\\n\", powerSlow(3, 5));\n\n    return 0;\n}',
        expectedOutput: '2^10 = 1024\n3^5  = 243\n5^3  = 125\n2^20 = 1048576\n7^0  = 1\n\nVerification with slow method:\n2^10 = 1024\n3^5  = 243',
        tip: '분할 정복은 병합 정렬, 퀵 정렬, 이진 탐색 등 많은 효율적인 알고리즘의 기반입니다.',
        tipEn: 'Divide and conquer is the foundation for many efficient algorithms including merge sort, quick sort, and binary search.'
      }
    ]
  },

  'bitwise': {
    sections: [
      {
        heading: '비트 연산자',
        headingEn: 'Bitwise Operators',
        text: [
          '비트 연산자는 정수의 개별 비트를 직접 조작하는 연산자입니다. C언어는 6가지 비트 연산자를 제공합니다: AND(&), OR(|), XOR(^), NOT(~), 왼쪽 시프트(<<), 오른쪽 시프트(>>).',
          'AND(&)는 두 비트가 모두 1일 때 1, OR(|)는 둘 중 하나라도 1이면 1, XOR(^)는 두 비트가 다를 때 1을 반환합니다. NOT(~)은 모든 비트를 반전시킵니다.',
          '시프트 연산자는 비트를 왼쪽 또는 오른쪽으로 이동시킵니다. 왼쪽 시프트(<<)는 2를 곱하는 효과가 있고, 오른쪽 시프트(>>)는 2로 나누는 효과가 있습니다.'
        ],
        textEn: [
          'Bitwise operators manipulate individual bits of integers. C provides 6 bitwise operators: AND(&), OR(|), XOR(^), NOT(~), left shift(<<), and right shift(>>).',
          'AND(&) returns 1 when both bits are 1, OR(|) returns 1 when either bit is 1, XOR(^) returns 1 when bits differ. NOT(~) inverts all bits.',
          'Shift operators move bits left or right. Left shift(<<) effectively multiplies by 2, and right shift(>>) divides by 2.'
        ],
        code: '#include <stdio.h>\n\nint main(void) {\n    int a = 12;\n    int b = 10;\n\n    printf(\"a = %d (binary: 1100)\\n\", a);\n    printf(\"b = %d (binary: 1010)\\n\", b);\n    printf(\"\\n\");\n\n    printf(\"a & b  = %d  (AND)\\n\", a & b);\n    printf(\"a | b  = %d  (OR)\\n\", a | b);\n    printf(\"a ^ b  = %d   (XOR)\\n\", a ^ b);\n    printf(\"~a     = %d (NOT)\\n\", ~a);\n    printf(\"\\n\");\n\n    printf(\"a << 1 = %d  (left shift by 1, x2)\\n\", a << 1);\n    printf(\"a << 2 = %d  (left shift by 2, x4)\\n\", a << 2);\n    printf(\"a >> 1 = %d   (right shift by 1, /2)\\n\", a >> 1);\n    printf(\"a >> 2 = %d   (right shift by 2, /4)\\n\", a >> 2);\n\n    return 0;\n}',
        expectedOutput: 'a = 12 (binary: 1100)\nb = 10 (binary: 1010)\n\na & b  = 8  (AND)\na | b  = 14  (OR)\na ^ b  = 6   (XOR)\n~a     = -13 (NOT)\n\na << 1 = 24  (left shift by 1, x2)\na << 2 = 48  (left shift by 2, x4)\na >> 1 = 6   (right shift by 1, /2)\na >> 2 = 3   (right shift by 2, /4)'
      },
      {
        heading: '비트 마스킹',
        headingEn: 'Bit Masking',
        text: [
          '비트 마스킹은 특정 비트를 설정(set), 해제(clear), 토글(toggle), 확인(check)하는 기법입니다. 플래그 관리, 권한 시스템, 상태 관리 등에 활용됩니다.',
          '특정 비트 설정: value | (1 << n), 특정 비트 해제: value & ~(1 << n), 특정 비트 토글: value ^ (1 << n), 특정 비트 확인: value & (1 << n)',
          '비트 마스킹을 사용하면 하나의 정수로 여러 개의 불리언(boolean) 값을 효율적으로 관리할 수 있습니다.'
        ],
        textEn: [
          'Bit masking is a technique to set, clear, toggle, and check specific bits. It\'s used in flag management, permission systems, and state management.',
          'Set a bit: value | (1 << n), Clear a bit: value & ~(1 << n), Toggle a bit: value ^ (1 << n), Check a bit: value & (1 << n)',
          'Bit masking lets you efficiently manage multiple boolean values using a single integer.'
        ],
        code: '#include <stdio.h>\n\nvoid printBinary(int num, int bits) {\n    int i;\n    for (i = bits - 1; i >= 0; i--) {\n        printf(\"%d\", (num >> i) & 1);\n    }\n}\n\nint main(void) {\n    int flags = 0;\n\n    printf(\"Initial: \");\n    printBinary(flags, 8);\n    printf(\" (%d)\\n\", flags);\n\n    flags = flags | (1 << 0);\n    flags = flags | (1 << 2);\n    flags = flags | (1 << 4);\n    printf(\"Set bits 0,2,4: \");\n    printBinary(flags, 8);\n    printf(\" (%d)\\n\", flags);\n\n    flags = flags & ~(1 << 2);\n    printf(\"Clear bit 2:    \");\n    printBinary(flags, 8);\n    printf(\" (%d)\\n\", flags);\n\n    flags = flags ^ (1 << 0);\n    printf(\"Toggle bit 0:   \");\n    printBinary(flags, 8);\n    printf(\" (%d)\\n\", flags);\n\n    flags = flags ^ (1 << 0);\n    printf(\"Toggle bit 0:   \");\n    printBinary(flags, 8);\n    printf(\" (%d)\\n\", flags);\n\n    printf(\"\\nChecking bits:\\n\");\n    printf(\"Bit 0 is %s\\n\", (flags & (1 << 0)) ? \"SET\" : \"NOT SET\");\n    printf(\"Bit 2 is %s\\n\", (flags & (1 << 2)) ? \"SET\" : \"NOT SET\");\n    printf(\"Bit 4 is %s\\n\", (flags & (1 << 4)) ? \"SET\" : \"NOT SET\");\n\n    return 0;\n}',
        expectedOutput: 'Initial: 00000000 (0)\nSet bits 0,2,4: 00010101 (21)\nClear bit 2:    00010001 (17)\nToggle bit 0:   00010000 (16)\nToggle bit 0:   00010001 (17)\n\nChecking bits:\nBit 0 is SET\nBit 2 is NOT SET\nBit 4 is SET'
      },
      {
        heading: '비트 연산 활용',
        headingEn: 'Practical Bitwise',
        text: [
          '비트 연산은 다양한 실용적인 문제를 효율적으로 해결할 수 있습니다. 대표적인 활용 예제를 살펴봅니다.',
          '짝수/홀수 판별: 마지막 비트가 0이면 짝수, 1이면 홀수입니다 (n & 1). 임시 변수 없이 두 값 교환: XOR 연산을 세 번 사용합니다 (a ^= b; b ^= a; a ^= b).',
          '설정된 비트 수 세기(popcount): 비트를 하나씩 확인하거나, n & (n-1) 연산으로 효율적으로 셀 수 있습니다. 이 연산은 가장 낮은 설정 비트를 제거합니다.'
        ],
        textEn: [
          'Bitwise operations can solve various practical problems efficiently. Let\'s look at some common use cases.',
          'Even/odd check: if the last bit is 0, the number is even; if 1, it\'s odd (n & 1). Swap without temp variable: use XOR three times (a ^= b; b ^= a; a ^= b).',
          'Count set bits (popcount): check bits one by one, or efficiently use n & (n-1) which removes the lowest set bit each time.'
        ],
        code: '#include <stdio.h>\n\nint isEven(int n) {\n    return !(n & 1);\n}\n\nvoid swapXOR(int *a, int *b) {\n    if (*a != *b) {\n        *a = *a ^ *b;\n        *b = *a ^ *b;\n        *a = *a ^ *b;\n    }\n}\n\nint countSetBits(int n) {\n    int count = 0;\n    while (n > 0) {\n        n = n & (n - 1);\n        count++;\n    }\n    return count;\n}\n\nint isPowerOfTwo(int n) {\n    return n > 0 && (n & (n - 1)) == 0;\n}\n\nint main(void) {\n    int i;\n    printf(\"=== Even/Odd Check ===\\n\");\n    for (i = 1; i <= 6; i++) {\n        printf(\"%d is %s\\n\", i, isEven(i) ? \"even\" : \"odd\");\n    }\n\n    printf(\"\\n=== XOR Swap ===\\n\");\n    int a = 15;\n    int b = 27;\n    printf(\"Before: a = %d, b = %d\\n\", a, b);\n    swapXOR(&a, &b);\n    printf(\"After:  a = %d, b = %d\\n\", a, b);\n\n    printf(\"\\n=== Count Set Bits ===\\n\");\n    int nums[] = {7, 10, 15, 16, 255};\n    int n = 5;\n    for (i = 0; i < n; i++) {\n        printf(\"%d has %d set bits\\n\", nums[i], countSetBits(nums[i]));\n    }\n\n    printf(\"\\n=== Power of Two Check ===\\n\");\n    int tests[] = {1, 2, 3, 4, 8, 10, 16, 32};\n    int t = 8;\n    for (i = 0; i < t; i++) {\n        printf(\"%d: %s\\n\", tests[i],\n               isPowerOfTwo(tests[i]) ? \"power of 2\" : \"not power of 2\");\n    }\n\n    return 0;\n}',
        expectedOutput: '=== Even/Odd Check ===\n1 is odd\n2 is even\n3 is odd\n4 is even\n5 is odd\n6 is even\n\n=== XOR Swap ===\nBefore: a = 15, b = 27\nAfter:  a = 27, b = 15\n\n=== Count Set Bits ===\n7 has 3 set bits\n10 has 2 set bits\n15 has 4 set bits\n16 has 1 set bits\n255 has 8 set bits\n\n=== Power of Two Check ===\n1: power of 2\n2: power of 2\n3: not power of 2\n4: power of 2\n8: power of 2\n10: not power of 2\n16: power of 2\n32: power of 2',
        tip: 'n & (n-1)은 가장 낮은 설정 비트를 제거하는 유명한 비트 연산 트릭입니다. 2의 거듭제곱 판별과 비트 수 세기에 활용됩니다.',
        tipEn: 'n & (n-1) is a famous bit manipulation trick that removes the lowest set bit. It\'s used for power-of-two checks and counting set bits.'
      }
    ]
  }
}

export default advanced
