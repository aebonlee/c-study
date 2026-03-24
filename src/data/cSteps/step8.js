// Step 8: Strings - 문자열
// Char arrays and string functions

const step8 = {
  id: 8,
  title: 'Strings',
  titleKo: '문자열',
  description: 'Char arrays and string functions in C',
  descriptionKo: '문자 배열과 문자열 함수',
  examples: [
    {
      id: 's8e1',
      title: '문자열 선언과 초기화',
      titleEn: 'String Declaration & Initialization',
      description: 'char 배열로 문자열을 선언합니다.',
      descriptionEn: 'Declare strings using char arrays.',
      code: `#include <stdio.h>
#include <string.h>

int main() {
    // Method 1: char array with initializer
    char greeting[] = "Hello";

    // Method 2: char array with size
    char name[20] = "World";

    // Method 3: character by character
    char manual[6];
    manual[0] = 'H';
    manual[1] = 'e';
    manual[2] = 'l';
    manual[3] = 'l';
    manual[4] = 'o';
    manual[5] = '\\0'; // null terminator required!

    printf("greeting: %s (length: %lu)\\n", greeting, strlen(greeting));
    printf("name: %s (length: %lu)\\n", name, strlen(name));
    printf("manual: %s (length: %lu)\\n", manual, strlen(manual));

    // sizeof vs strlen
    printf("\\nsizeof(greeting): %lu\\n", sizeof(greeting)); // includes \\0
    printf("strlen(greeting): %lu\\n", strlen(greeting));    // excludes \\0

    return 0;
}`,
      expectedOutput: `greeting: Hello (length: 5)
name: World (length: 5)
manual: Hello (length: 5)

sizeof(greeting): 6
strlen(greeting): 5`,
      explanation: 'C 문자열은 널 문자(\\0)로 끝나는 char 배열입니다. sizeof는 \\0을 포함하지만 strlen은 제외합니다.',
      explanationEn: 'C strings are char arrays ending with \\0. sizeof includes \\0, strlen excludes it.'
    },
    {
      id: 's8e2',
      title: 'strlen - 문자열 길이',
      titleEn: 'strlen - String Length',
      description: '문자열의 길이를 구하고 직접 구현합니다.',
      descriptionEn: 'Get string length and implement it manually.',
      code: `#include <stdio.h>
#include <string.h>

// Custom strlen implementation
int my_strlen(const char *str) {
    int len = 0;
    while (str[len] != '\\0') {
        len++;
    }
    return len;
}

int main() {
    char words[][20] = {"Hello", "C Language", "", "Hi!"};
    int count = 4;

    for (int i = 0; i < count; i++) {
        printf("\\"%s\\": strlen=%lu, my_strlen=%d\\n",
               words[i], strlen(words[i]), my_strlen(words[i]));
    }

    // Practical: check empty string
    char input[] = "";
    if (strlen(input) == 0) {
        printf("\\nInput is empty.\\n");
    }

    return 0;
}`,
      expectedOutput: `"Hello": strlen=5, my_strlen=5
"C Language": strlen=10, my_strlen=10
"": strlen=0, my_strlen=0
"Hi!": strlen=3, my_strlen=3

Input is empty.`,
      explanation: 'strlen은 널 문자까지의 문자 수를 셉니다. 빈 문자열("")의 길이는 0입니다.',
      explanationEn: 'strlen counts characters until null terminator. Empty string ("") has length 0.'
    },
    {
      id: 's8e3',
      title: 'strcpy와 strncpy',
      titleEn: 'strcpy and strncpy',
      description: '문자열을 복사하는 함수입니다.',
      descriptionEn: 'Functions to copy strings.',
      code: `#include <stdio.h>
#include <string.h>

int main() {
    // strcpy: copy entire string
    char src[] = "Hello, C!";
    char dest[20];

    strcpy(dest, src);
    printf("strcpy: %s\\n", dest);

    // strncpy: copy with limit (safer)
    char buffer[6];
    strncpy(buffer, "Hello World", 5);
    buffer[5] = '\\0'; // must null-terminate manually!
    printf("strncpy: %s\\n", buffer);

    // Common pattern: safe copy
    char safe[10];
    strncpy(safe, "Long string that won't fit", sizeof(safe) - 1);
    safe[sizeof(safe) - 1] = '\\0';
    printf("safe copy: %s\\n", safe);

    // String assignment (wrong vs right)
    // char s[20]; s = "Hello"; // ERROR! Cannot assign
    char s[20];
    strcpy(s, "Hello"); // Correct way
    printf("assigned: %s\\n", s);

    return 0;
}`,
      expectedOutput: `strcpy: Hello, C!
strncpy: Hello
safe copy: Long stri
assigned: Hello`,
      explanation: 'strcpy는 전체 복사, strncpy는 최대 n글자만 복사합니다. 배열에 = 로 문자열을 대입할 수 없습니다.',
      explanationEn: 'strcpy copies all, strncpy copies max n chars. Cannot assign strings with = to arrays.'
    },
    {
      id: 's8e4',
      title: 'strcmp - 문자열 비교',
      titleEn: 'strcmp - String Comparison',
      description: '두 문자열을 비교하는 함수입니다.',
      descriptionEn: 'Function to compare two strings.',
      code: `#include <stdio.h>
#include <string.h>

int main() {
    char s1[] = "apple";
    char s2[] = "banana";
    char s3[] = "apple";

    // strcmp returns: 0 if equal, <0 if s1<s2, >0 if s1>s2
    printf("strcmp(\\"%s\\", \\"%s\\"): %d\\n", s1, s2, strcmp(s1, s2));
    printf("strcmp(\\"%s\\", \\"%s\\"): %d\\n", s1, s3, strcmp(s1, s3));
    printf("strcmp(\\"%s\\", \\"%s\\"): %d\\n", s2, s1, strcmp(s2, s1));

    // Equality check
    if (strcmp(s1, s3) == 0) {
        printf("\\n\\"%s\\\" and \\"%s\\\" are equal\\n", s1, s3);
    }

    // WRONG: using == for strings
    // if (s1 == s3) // compares addresses, NOT content!

    // Case-insensitive compare (non-standard but common)
    char a[] = "Hello";
    char b[] = "hello";
    printf("\\nstrcmp(\\"%s\\", \\"%s\\"): %d (case-sensitive)\\n",
           a, b, strcmp(a, b));

    // strncmp: compare first n characters
    printf("strncmp(\\"%s\\", \\"%s\\", 3): %d\\n",
           "apple", "application", strncmp("apple", "application", 3));

    return 0;
}`,
      expectedOutput: `strcmp("apple", "banana"): -1
strcmp("apple", "apple"): 0
strcmp("banana", "apple"): 1

"apple" and "apple" are equal

strcmp("Hello", "hello"): -32 (case-sensitive)
strncmp("apple", "application", 3): 0`,
      explanation: 'strcmp는 사전순 비교입니다. 0이면 같고, 음수면 첫째가 앞, 양수면 뒤입니다. ==로 비교하면 안 됩니다.',
      explanationEn: 'strcmp does lexicographic comparison. 0=equal, negative=first is less, positive=first is greater. Never use ==.'
    },
    {
      id: 's8e5',
      title: 'strcat - 문자열 연결',
      titleEn: 'strcat - String Concatenation',
      description: '두 문자열을 이어붙입니다.',
      descriptionEn: 'Concatenate two strings.',
      code: `#include <stdio.h>
#include <string.h>

int main() {
    // strcat: append src to dest
    char dest[50] = "Hello";
    char src[] = " World!";

    strcat(dest, src);
    printf("strcat: %s\\n", dest);

    // Building a sentence
    char sentence[100] = "";
    strcat(sentence, "I ");
    strcat(sentence, "love ");
    strcat(sentence, "C ");
    strcat(sentence, "programming!");
    printf("Built: %s\\n", sentence);

    // strncat: safer with limit
    char buffer[15] = "Hello";
    strncat(buffer, " World and more", sizeof(buffer) - strlen(buffer) - 1);
    printf("strncat: %s\\n", buffer);

    // Concatenate numbers to string
    char result[50] = "Score: ";
    char numStr[10];
    sprintf(numStr, "%d", 95);
    strcat(result, numStr);
    printf("%s\\n", result);

    return 0;
}`,
      expectedOutput: `strcat: Hello World!
Built: I love C programming!
strncat: Hello World
Score: 95`,
      explanation: 'strcat은 dest 끝에 src를 추가합니다. dest에 충분한 공간이 있어야 합니다. strncat은 최대 n글자만 추가합니다.',
      explanationEn: 'strcat appends src to end of dest. dest must have enough space. strncat appends max n chars.'
    },
    {
      id: 's8e6',
      title: '문자 처리 함수',
      titleEn: 'Character Functions',
      description: 'ctype.h의 문자 분류/변환 함수입니다.',
      descriptionEn: 'Character classification/conversion from ctype.h.',
      code: `#include <stdio.h>
#include <ctype.h>
#include <string.h>

int main() {
    char str[] = "Hello World 123!";

    // Count character types
    int upper = 0, lower = 0, digit = 0, space = 0, other = 0;
    for (int i = 0; str[i]; i++) {
        if (isupper(str[i])) upper++;
        else if (islower(str[i])) lower++;
        else if (isdigit(str[i])) digit++;
        else if (isspace(str[i])) space++;
        else other++;
    }
    printf("\\"%s\\"\\n", str);
    printf("Upper: %d, Lower: %d, Digit: %d, Space: %d, Other: %d\\n",
           upper, lower, digit, space, other);

    // Convert to uppercase
    char upper_str[20];
    strcpy(upper_str, str);
    for (int i = 0; upper_str[i]; i++) {
        upper_str[i] = toupper(upper_str[i]);
    }
    printf("Upper: %s\\n", upper_str);

    // Convert to lowercase
    char lower_str[20];
    strcpy(lower_str, str);
    for (int i = 0; lower_str[i]; i++) {
        lower_str[i] = tolower(lower_str[i]);
    }
    printf("Lower: %s\\n", lower_str);

    return 0;
}`,
      expectedOutput: `"Hello World 123!"
Upper: 2, Lower: 8, Digit: 3, Space: 2, Other: 1
Upper: HELLO WORLD 123!
Lower: hello world 123!`,
      explanation: 'ctype.h는 문자 분류(isupper, islower, isdigit)와 변환(toupper, tolower) 함수를 제공합니다.',
      explanationEn: 'ctype.h provides character classification (isupper, islower, isdigit) and conversion (toupper, tolower).'
    },
    {
      id: 's8e7',
      title: '문자열 검색',
      titleEn: 'String Search',
      description: '문자열에서 문자나 부분 문자열을 찾습니다.',
      descriptionEn: 'Find characters or substrings in strings.',
      code: `#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello, World! Hello, C!";

    // strchr: find first occurrence of character
    char *p = strchr(str, 'W');
    if (p) printf("strchr 'W': found at index %ld\\n", p - str);

    // strrchr: find last occurrence
    p = strrchr(str, 'l');
    if (p) printf("strrchr 'l': found at index %ld\\n", p - str);

    // strstr: find substring
    p = strstr(str, "World");
    if (p) printf("strstr \\"World\\": found at index %ld\\n", p - str);

    p = strstr(str, "Hello");
    if (p) printf("strstr \\"Hello\\": first at index %ld\\n", p - str);

    // Not found
    p = strstr(str, "Python");
    if (p == NULL) printf("strstr \\"Python\\": not found\\n");

    // Count occurrences
    int count = 0;
    const char *search = "Hello";
    p = str;
    while ((p = strstr(p, search)) != NULL) {
        count++;
        p += strlen(search);
    }
    printf("\\n\\"Hello\\" appears %d times\\n", count);

    return 0;
}`,
      expectedOutput: `strchr 'W': found at index 7
strrchr 'l': found at index 19
strstr "World": found at index 7
strstr "Hello": first at index 0
strstr "Python": not found

"Hello" appears 2 times`,
      explanation: 'strchr는 문자를, strstr는 부분 문자열을 찾습니다. 포인터 빼기로 인덱스를 구합니다.',
      explanationEn: 'strchr finds a char, strstr finds a substring. Pointer subtraction gives the index.'
    },
    {
      id: 's8e8',
      title: 'strtok - 문자열 분리',
      titleEn: 'strtok - String Tokenization',
      description: '구분자로 문자열을 토큰으로 분리합니다.',
      descriptionEn: 'Split a string into tokens by delimiter.',
      code: `#include <stdio.h>
#include <string.h>

int main() {
    // strtok modifies the original string!
    char csv[] = "Alice,25,Seoul,Engineer";
    printf("Original: %s\\n\\n", csv);

    printf("Tokens:\\n");
    char *token = strtok(csv, ",");
    int field = 0;
    const char *fields[] = {"Name", "Age", "City", "Job"};

    while (token != NULL) {
        printf("  %s: %s\\n", fields[field++], token);
        token = strtok(NULL, ","); // NULL continues from last position
    }

    // Split words by spaces
    printf("\\nWords:\\n");
    char sentence[] = "The quick brown fox";
    token = strtok(sentence, " ");
    int wordNum = 1;
    while (token != NULL) {
        printf("  Word %d: %s\\n", wordNum++, token);
        token = strtok(NULL, " ");
    }

    return 0;
}`,
      expectedOutput: `Original: Alice,25,Seoul,Engineer

Tokens:
  Name: Alice
  Age: 25
  City: Seoul
  Job: Engineer

Words:
  Word 1: The
  Word 2: quick
  Word 3: brown
  Word 4: fox`,
      explanation: 'strtok은 원본 문자열을 수정합니다! 첫 호출에 문자열을, 이후에는 NULL을 전달합니다.',
      explanationEn: 'strtok modifies the original string! Pass the string first, then NULL for subsequent calls.'
    },
    {
      id: 's8e9',
      title: '문자열 뒤집기',
      titleEn: 'String Reversal',
      description: '문자열을 뒤집는 함수를 구현합니다.',
      descriptionEn: 'Implement a function to reverse a string.',
      code: `#include <stdio.h>
#include <string.h>

void reverseString(char *str) {
    int left = 0;
    int right = strlen(str) - 1;

    while (left < right) {
        char temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }
}

int isPalindrome(const char *str) {
    int left = 0;
    int right = strlen(str) - 1;

    while (left < right) {
        if (str[left] != str[right]) return 0;
        left++;
        right--;
    }
    return 1;
}

int main() {
    char str1[] = "Hello";
    printf("Original: %s\\n", str1);
    reverseString(str1);
    printf("Reversed: %s\\n", str1);

    // Palindrome check
    const char *words[] = {"racecar", "hello", "level", "world", "madam"};
    printf("\\nPalindrome check:\\n");
    for (int i = 0; i < 5; i++) {
        printf("  \\"%s\\": %s\\n", words[i],
               isPalindrome(words[i]) ? "Yes" : "No");
    }

    return 0;
}`,
      expectedOutput: `Original: Hello
Reversed: olleH

Palindrome check:
  "racecar": Yes
  "hello": No
  "level": Yes
  "world": No
  "madam": Yes`,
      explanation: '문자열 뒤집기는 양 끝에서 중앙으로 문자를 교환합니다. 회문(palindrome) 검사에도 같은 기법을 사용합니다.',
      explanationEn: 'String reversal swaps characters from ends toward center. Same technique for palindrome checking.'
    },
    {
      id: 's8e10',
      title: '문자열 배열',
      titleEn: 'String Arrays',
      description: '여러 문자열을 배열로 관리합니다.',
      descriptionEn: 'Manage multiple strings in an array.',
      code: `#include <stdio.h>
#include <string.h>

int main() {
    // Array of strings (2D char array)
    char fruits[][15] = {"Banana", "Apple", "Cherry", "Date", "Elderberry"};
    int n = 5;

    printf("Fruits:\\n");
    for (int i = 0; i < n; i++) {
        printf("  [%d] %s (len: %lu)\\n", i, fruits[i], strlen(fruits[i]));
    }

    // Sort strings (bubble sort)
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (strcmp(fruits[j], fruits[j + 1]) > 0) {
                char temp[15];
                strcpy(temp, fruits[j]);
                strcpy(fruits[j], fruits[j + 1]);
                strcpy(fruits[j + 1], temp);
            }
        }
    }

    printf("\\nSorted:\\n");
    for (int i = 0; i < n; i++) {
        printf("  [%d] %s\\n", i, fruits[i]);
    }

    // Find a fruit
    char target[] = "Cherry";
    int found = -1;
    for (int i = 0; i < n; i++) {
        if (strcmp(fruits[i], target) == 0) { found = i; break; }
    }
    printf("\\n\\"%s\\" found at index: %d\\n", target, found);

    return 0;
}`,
      expectedOutput: `Fruits:
  [0] Banana (len: 6)
  [1] Apple (len: 5)
  [2] Cherry (len: 6)
  [3] Date (len: 4)
  [4] Elderberry (len: 10)

Sorted:
  [0] Apple
  [1] Banana
  [2] Cherry
  [3] Date
  [4] Elderberry

"Cherry" found at index: 2`,
      explanation: '문자열 배열은 2차원 char 배열입니다. 문자열 정렬에는 strcmp로 비교하고 strcpy로 교환합니다.',
      explanationEn: 'String arrays are 2D char arrays. Sort by comparing with strcmp and swapping with strcpy.'
    }
  ]
}

export default step8
