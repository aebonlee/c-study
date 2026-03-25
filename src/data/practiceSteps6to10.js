const steps6to10 = [
  {
    step: 6,
    titleKo: '배열',
    titleEn: 'Arrays',
    descKo: '배열의 선언, 초기화, 순회를 연습합니다.',
    descEn: 'Practice array declaration, initialization, and traversal.',
    examples: [
      // === Existing 5 examples ===
      {
        titleKo: '배열 평균 계산',
        titleEn: 'Array Average',
        code: '#include <stdio.h>\n\nint main() {\n    int scores[] = {90, 85, 78, 92, 88};\n    int n = 5;\n    int sum = 0;\n    for (int i = 0; i < n; i++) {\n        sum += scores[i];\n    }\n    printf("Scores: ");\n    for (int i = 0; i < n; i++) {\n        printf("%d ", scores[i]);\n    }\n    printf("\\nSum: %d\\n", sum);\n    printf("Average: %.1f\\n", (float)sum / n);\n    return 0;\n}',
        expected: 'Scores: 90 85 78 92 88 \nSum: 433\nAverage: 86.6',
      },
      {
        titleKo: '배열 최대/최소',
        titleEn: 'Array Min/Max',
        code: '#include <stdio.h>\n\nint main() {\n    int arr[] = {3, 7, 1, 9, 4, 6};\n    int n = 6;\n    int max = arr[0], min = arr[0];\n    for (int i = 1; i < n; i++) {\n        if (arr[i] > max) max = arr[i];\n        if (arr[i] < min) min = arr[i];\n    }\n    printf("Max: %d, Min: %d\\n", max, min);\n    return 0;\n}',
        expected: 'Max: 9, Min: 1',
      },
      {
        titleKo: '버블 정렬',
        titleEn: 'Bubble Sort',
        code: '#include <stdio.h>\n\nint main() {\n    int arr[] = {64, 25, 12, 22, 11};\n    int n = 5;\n    printf("Before: ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n\n    for (int i = 0; i < n - 1; i++) {\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n\n    printf("After:  ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}',
        expected: 'Before: 64 25 12 22 11 \nAfter:  11 12 22 25 64 ',
      },
      {
        titleKo: '2차원 배열',
        titleEn: '2D Array',
        code: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    printf("Matrix:\\n");\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            printf("%d ", matrix[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
        expected: 'Matrix:\n1 2 3 \n4 5 6 \n7 8 9 ',
      },
      {
        titleKo: '배열 뒤집기',
        titleEn: 'Reverse Array',
        code: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = 5;\n    printf("Original: ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n\n    for (int i = 0; i < n / 2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[n - 1 - i];\n        arr[n - 1 - i] = temp;\n    }\n\n    printf("Reversed: ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}',
        expected: 'Original: 1 2 3 4 5 \nReversed: 5 4 3 2 1 ',
      },
      // === 5 New examples ===
      {
        titleKo: '빈도 계산',
        titleEn: 'Frequency Count',
        code: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 3, 2, 1, 4, 2, 3, 1, 2, 4};\n    int n = 10;\n    int freq[5] = {0}; // count for values 0-4\n\n    for (int i = 0; i < n; i++) {\n        freq[arr[i]]++;\n    }\n\n    printf("Element frequencies:\\n");\n    for (int i = 1; i <= 4; i++) {\n        printf("%d appears %d time(s)\\n", i, freq[i]);\n    }\n    return 0;\n}',
        expected: 'Element frequencies:\n1 appears 3 time(s)\n2 appears 3 time(s)\n3 appears 2 time(s)\n4 appears 2 time(s)',
      },
      {
        titleKo: '선형 탐색',
        titleEn: 'Linear Search',
        code: '#include <stdio.h>\n\nint linearSearch(int arr[], int n, int target) {\n    for (int i = 0; i < n; i++) {\n        if (arr[i] == target) return i;\n    }\n    return -1;\n}\n\nint main() {\n    int arr[] = {15, 23, 8, 42, 16, 4, 37};\n    int n = 7;\n    int targets[] = {42, 100, 8};\n\n    for (int i = 0; i < 3; i++) {\n        int idx = linearSearch(arr, n, targets[i]);\n        if (idx >= 0)\n            printf("Found %d at index %d\\n", targets[i], idx);\n        else\n            printf("%d not found\\n", targets[i]);\n    }\n    return 0;\n}',
        expected: 'Found 42 at index 3\n100 not found\nFound 8 at index 2',
      },
      {
        titleKo: '배열 회전',
        titleEn: 'Array Rotation',
        code: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int n = 5;\n\n    printf("Before: ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n\n    // Rotate left by 1\n    int first = arr[0];\n    for (int i = 0; i < n - 1; i++) {\n        arr[i] = arr[i + 1];\n    }\n    arr[n - 1] = first;\n\n    printf("After:  ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}',
        expected: 'Before: 10 20 30 40 50 \nAfter:  20 30 40 50 10 ',
      },
      {
        titleKo: '중복 제거',
        titleEn: 'Remove Duplicates',
        code: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 1, 2, 3, 3, 3, 4, 5, 5};\n    int n = 9;\n\n    printf("Original: ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n\n    // Remove duplicates from sorted array\n    int unique[9];\n    int newLen = 0;\n    for (int i = 0; i < n; i++) {\n        if (i == 0 || arr[i] != arr[i - 1]) {\n            unique[newLen] = arr[i];\n            newLen++;\n        }\n    }\n\n    printf("Unique:   ");\n    for (int i = 0; i < newLen; i++) printf("%d ", unique[i]);\n    printf("\\n");\n    printf("Count: %d -> %d\\n", n, newLen);\n    return 0;\n}',
        expected: 'Original: 1 1 2 3 3 3 4 5 5 \nUnique:   1 2 3 4 5 \nCount: 9 -> 5',
      },
      {
        titleKo: '배열 병합',
        titleEn: 'Merge Arrays',
        code: '#include <stdio.h>\n\nint main() {\n    int a[] = {1, 3, 5, 7};\n    int b[] = {2, 4, 6, 8};\n    int na = 4, nb = 4;\n    int merged[8];\n    int i = 0, j = 0, k = 0;\n\n    while (i < na && j < nb) {\n        if (a[i] <= b[j]) {\n            merged[k++] = a[i++];\n        } else {\n            merged[k++] = b[j++];\n        }\n    }\n    while (i < na) merged[k++] = a[i++];\n    while (j < nb) merged[k++] = b[j++];\n\n    printf("Array A: ");\n    for (int x = 0; x < na; x++) printf("%d ", a[x]);\n    printf("\\n");\n    printf("Array B: ");\n    for (int x = 0; x < nb; x++) printf("%d ", b[x]);\n    printf("\\n");\n    printf("Merged:  ");\n    for (int x = 0; x < k; x++) printf("%d ", merged[x]);\n    printf("\\n");\n    return 0;\n}',
        expected: 'Array A: 1 3 5 7 \nArray B: 2 4 6 8 \nMerged:  1 2 3 4 5 6 7 8 ',
      },
    ],
  },
  {
    step: 7,
    titleKo: '포인터',
    titleEn: 'Pointers',
    descKo: '포인터의 개념과 활용을 연습합니다.',
    descEn: 'Practice pointer concepts and usage.',
    examples: [
      // === Existing 5 examples ===
      {
        titleKo: '포인터 기본',
        titleEn: 'Basic Pointers',
        code: '#include <stdio.h>\n\nint main() {\n    int x = 42;\n    int *ptr = &x;\n    printf("Value of x: %d\\n", x);\n    printf("Value via pointer: %d\\n", *ptr);\n    *ptr = 100;\n    printf("After *ptr = 100: x = %d\\n", x);\n    return 0;\n}',
        expected: 'Value of x: 42\nValue via pointer: 42\nAfter *ptr = 100: x = 100',
      },
      {
        titleKo: 'swap 함수',
        titleEn: 'Swap Function',
        code: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main() {\n    int x = 10, y = 20;\n    printf("Before: x=%d, y=%d\\n", x, y);\n    swap(&x, &y);\n    printf("After: x=%d, y=%d\\n", x, y);\n    return 0;\n}',
        expected: 'Before: x=10, y=20\nAfter: x=20, y=10',
      },
      {
        titleKo: '배열과 포인터',
        titleEn: 'Array & Pointer',
        code: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *ptr = arr;\n    printf("Array via pointer:\\n");\n    for (int i = 0; i < 5; i++) {\n        printf("*(ptr+%d) = %d\\n", i, *(ptr + i));\n    }\n    printf("\\narr[2] = %d\\n", arr[2]);\n    printf("*(arr+2) = %d\\n", *(arr + 2));\n    return 0;\n}',
        expected: 'Array via pointer:\n*(ptr+0) = 10\n*(ptr+1) = 20\n*(ptr+2) = 30\n*(ptr+3) = 40\n*(ptr+4) = 50\n\narr[2] = 30\n*(arr+2) = 30',
      },
      {
        titleKo: '포인터로 최대/최소 반환',
        titleEn: 'Return Min/Max via Pointer',
        code: '#include <stdio.h>\n\nvoid findMinMax(int arr[], int n, int *min, int *max) {\n    *min = arr[0];\n    *max = arr[0];\n    for (int i = 1; i < n; i++) {\n        if (arr[i] < *min) *min = arr[i];\n        if (arr[i] > *max) *max = arr[i];\n    }\n}\n\nint main() {\n    int arr[] = {34, 12, 67, 5, 89, 23};\n    int min, max;\n    findMinMax(arr, 6, &min, &max);\n    printf("Min: %d\\n", min);\n    printf("Max: %d\\n", max);\n    return 0;\n}',
        expected: 'Min: 5\nMax: 89',
      },
      {
        titleKo: 'const 포인터',
        titleEn: 'Const Pointer',
        code: '#include <stdio.h>\n\nvoid printArray(const int *arr, int n) {\n    for (int i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n}\n\nint main() {\n    int x = 10, y = 20;\n    const int *p1 = &x;\n    printf("*p1 = %d\\n", *p1);\n    p1 = &y;\n    printf("*p1 = %d (changed target)\\n", *p1);\n\n    int arr[] = {1, 2, 3, 4, 5};\n    printf("Array: ");\n    printArray(arr, 5);\n    return 0;\n}',
        expected: '*p1 = 10\n*p1 = 20 (changed target)\nArray: 1 2 3 4 5 ',
      },
      // === 5 New examples ===
      {
        titleKo: '포인터로 문자열',
        titleEn: 'String via Pointer',
        code: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello";\n    char *ptr = str;\n\n    printf("String: ");\n    while (*ptr != \'\\0\') {\n        printf("%c", *ptr);\n        ptr++;\n    }\n    printf("\\n");\n\n    // Count characters using pointer\n    ptr = str;\n    int count = 0;\n    while (*ptr != \'\\0\') {\n        count++;\n        ptr++;\n    }\n    printf("Length: %d\\n", count);\n    return 0;\n}',
        expected: 'String: Hello\nLength: 5',
      },
      {
        titleKo: '포인터 연산',
        titleEn: 'Pointer Arithmetic',
        code: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *start = arr;\n    int *end = arr + 4;\n\n    printf("First element: %d\\n", *start);\n    printf("Last element: %d\\n", *end);\n\n    // Move pointer forward\n    int *p = arr;\n    printf("Moving forward: ");\n    for (int i = 0; i < 5; i++) {\n        printf("%d ", *p);\n        p++;\n    }\n    printf("\\n");\n\n    // Distance between pointers\n    int dist = end - start;\n    printf("Distance: %d elements\\n", dist);\n    return 0;\n}',
        expected: 'First element: 10\nLast element: 50\nMoving forward: 10 20 30 40 50 \nDistance: 4 elements',
      },
      {
        titleKo: '포인터로 배열 뒤집기',
        titleEn: 'Array Reverse via Pointer',
        code: '#include <stdio.h>\n\nvoid reverseArray(int *start, int *end) {\n    while (start < end) {\n        int temp = *start;\n        *start = *end;\n        *end = temp;\n        start++;\n        end--;\n    }\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5, 6};\n    int n = 6;\n\n    printf("Before: ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n\n    reverseArray(arr, arr + n - 1);\n\n    printf("After:  ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}',
        expected: 'Before: 1 2 3 4 5 6 \nAfter:  6 5 4 3 2 1 ',
      },
      {
        titleKo: '다중 반환',
        titleEn: 'Multiple Return Values',
        code: '#include <stdio.h>\n\nvoid computeStats(int arr[], int n, int *sum, int *min, int *max) {\n    *sum = 0;\n    *min = arr[0];\n    *max = arr[0];\n    for (int i = 0; i < n; i++) {\n        *sum += arr[i];\n        if (arr[i] < *min) *min = arr[i];\n        if (arr[i] > *max) *max = arr[i];\n    }\n}\n\nint main() {\n    int data[] = {25, 10, 45, 30, 5, 40};\n    int sum, min, max;\n\n    computeStats(data, 6, &sum, &min, &max);\n\n    printf("Sum: %d\\n", sum);\n    printf("Min: %d\\n", min);\n    printf("Max: %d\\n", max);\n    printf("Range: %d\\n", max - min);\n    return 0;\n}',
        expected: 'Sum: 155\nMin: 5\nMax: 45\nRange: 40',
      },
      {
        titleKo: '포인터 비교',
        titleEn: 'Pointer Comparison',
        code: '#include <stdio.h>\n\nint main() {\n    int arr[] = {50, 30, 80, 10, 60};\n    int n = 5;\n    int *minPtr = arr;\n    int *maxPtr = arr;\n\n    for (int i = 1; i < n; i++) {\n        if (arr[i] < *minPtr) minPtr = &arr[i];\n        if (arr[i] > *maxPtr) maxPtr = &arr[i];\n    }\n\n    printf("Min value: %d at index %d\\n", *minPtr, (int)(minPtr - arr));\n    printf("Max value: %d at index %d\\n", *maxPtr, (int)(maxPtr - arr));\n\n    if (minPtr < maxPtr)\n        printf("Min comes before Max in memory\\n");\n    else\n        printf("Max comes before Min in memory\\n");\n    return 0;\n}',
        expected: 'Min value: 10 at index 3\nMax value: 80 at index 2\nMax comes before Min in memory',
      },
    ],
  },
  {
    step: 8,
    titleKo: '문자열 처리',
    titleEn: 'String Handling',
    descKo: '문자열 함수와 문자 처리를 연습합니다.',
    descEn: 'Practice string functions and character handling.',
    examples: [
      // === Existing 5 examples ===
      {
        titleKo: '문자열 길이와 복사',
        titleEn: 'String Length & Copy',
        code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char src[] = "Hello, C!";\n    char dest[20];\n    strcpy(dest, src);\n    printf("String: %s\\n", dest);\n    printf("Length: %d\\n", (int)strlen(dest));\n    return 0;\n}',
        expected: 'String: Hello, C!\nLength: 9',
      },
      {
        titleKo: '문자열 비교와 결합',
        titleEn: 'String Compare & Concat',
        code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str1[30] = "Hello";\n    char str2[] = " World";\n    strcat(str1, str2);\n    printf("%s\\n", str1);\n    printf("Compare: %d\\n", strcmp("abc", "abc"));\n    return 0;\n}',
        expected: 'Hello World\nCompare: 0',
      },
      {
        titleKo: '문자 처리 함수',
        titleEn: 'Character Functions',
        code: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello 123";\n    int upper = 0, lower = 0, digit = 0;\n    for (int i = 0; str[i]; i++) {\n        if (isupper(str[i])) upper++;\n        else if (islower(str[i])) lower++;\n        else if (isdigit(str[i])) digit++;\n    }\n    printf("String: %s\\n", str);\n    printf("Upper: %d, Lower: %d, Digit: %d\\n", upper, lower, digit);\n    return 0;\n}',
        expected: 'String: Hello 123\nUpper: 1, Lower: 4, Digit: 3',
      },
      {
        titleKo: '문자열 뒤집기',
        titleEn: 'String Reversal',
        code: '#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char *str) {\n    int left = 0;\n    int right = (int)strlen(str) - 1;\n    while (left < right) {\n        char temp = str[left];\n        str[left] = str[right];\n        str[right] = temp;\n        left++;\n        right--;\n    }\n}\n\nint main() {\n    char str[] = "Hello";\n    printf("Original: %s\\n", str);\n    reverseString(str);\n    printf("Reversed: %s\\n", str);\n    return 0;\n}',
        expected: 'Original: Hello\nReversed: olleH',
      },
      {
        titleKo: '단어 세기',
        titleEn: 'Word Counter',
        code: '#include <stdio.h>\n\nint countWords(const char *str) {\n    int count = 0;\n    int inWord = 0;\n    for (int i = 0; str[i]; i++) {\n        if (str[i] != \' \' && !inWord) {\n            inWord = 1;\n            count++;\n        } else if (str[i] == \' \') {\n            inWord = 0;\n        }\n    }\n    return count;\n}\n\nint main() {\n    char s1[] = "Hello World";\n    char s2[] = "The quick brown fox";\n    printf("\\"%s\\": %d words\\n", s1, countWords(s1));\n    printf("\\"%s\\": %d words\\n", s2, countWords(s2));\n    return 0;\n}',
        expected: '"Hello World": 2 words\n"The quick brown fox": 4 words',
      },
      // === 5 New examples ===
      {
        titleKo: '회문 판별',
        titleEn: 'Palindrome Check',
        code: '#include <stdio.h>\n#include <string.h>\n\nint isPalindrome(char *str) {\n    int left = 0;\n    int right = (int)strlen(str) - 1;\n    while (left < right) {\n        if (str[left] != str[right]) return 0;\n        left++;\n        right--;\n    }\n    return 1;\n}\n\nint main() {\n    char words[][20] = {"level", "hello", "racecar", "world", "madam"};\n    int n = 5;\n    for (int i = 0; i < n; i++) {\n        if (isPalindrome(words[i]))\n            printf("%s -> palindrome\\n", words[i]);\n        else\n            printf("%s -> not palindrome\\n", words[i]);\n    }\n    return 0;\n}',
        expected: 'level -> palindrome\nhello -> not palindrome\nracecar -> palindrome\nworld -> not palindrome\nmadam -> palindrome',
      },
      {
        titleKo: '문자 빈도',
        titleEn: 'Character Frequency',
        code: '#include <stdio.h>\n\nint main() {\n    char str[] = "banana";\n    int freq[26] = {0};\n\n    for (int i = 0; str[i]; i++) {\n        if (str[i] >= \'a\' && str[i] <= \'z\') {\n            freq[str[i] - \'a\']++;\n        }\n    }\n\n    printf("Character frequency in \\"%s\\\":\\n", str);\n    for (int i = 0; i < 26; i++) {\n        if (freq[i] > 0) {\n            printf("\'%c\': %d\\n", \'a\' + i, freq[i]);\n        }\n    }\n    return 0;\n}',
        expected: 'Character frequency in "banana":\n\'a\': 3\n\'b\': 1\n\'n\': 2',
      },
      {
        titleKo: '모음 카운터',
        titleEn: 'Vowel Counter',
        code: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World";\n    int vowels = 0, consonants = 0;\n\n    for (int i = 0; str[i]; i++) {\n        char c = str[i];\n        if (c >= \'A\' && c <= \'Z\') c = c + 32;\n        if (c >= \'a\' && c <= \'z\') {\n            if (c == \'a\' || c == \'e\' || c == \'i\' || c == \'o\' || c == \'u\')\n                vowels++;\n            else\n                consonants++;\n        }\n    }\n\n    printf("String: %s\\n", str);\n    printf("Vowels: %d\\n", vowels);\n    printf("Consonants: %d\\n", consonants);\n    return 0;\n}',
        expected: 'String: Hello World\nVowels: 3\nConsonants: 7',
      },
      {
        titleKo: '대소문자 변환',
        titleEn: 'Case Conversion',
        code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello World 123";\n    char upper[20], lower[20];\n    int len = (int)strlen(str);\n\n    for (int i = 0; i <= len; i++) {\n        if (str[i] >= \'a\' && str[i] <= \'z\')\n            upper[i] = str[i] - 32;\n        else\n            upper[i] = str[i];\n\n        if (str[i] >= \'A\' && str[i] <= \'Z\')\n            lower[i] = str[i] + 32;\n        else\n            lower[i] = str[i];\n    }\n\n    printf("Original:  %s\\n", str);\n    printf("Uppercase: %s\\n", upper);\n    printf("Lowercase: %s\\n", lower);\n    return 0;\n}',
        expected: 'Original:  Hello World 123\nUppercase: HELLO WORLD 123\nLowercase: hello world 123',
      },
      {
        titleKo: '공백 제거',
        titleEn: 'Remove Spaces',
        code: '#include <stdio.h>\n\nint main() {\n    char str[] = "H e l l o W o r l d";\n    char result[30];\n    int j = 0;\n\n    for (int i = 0; str[i]; i++) {\n        if (str[i] != \' \') {\n            result[j] = str[i];\n            j++;\n        }\n    }\n    result[j] = \'\\0\';\n\n    printf("Original: \\"%s\\"\\n", str);\n    printf("Removed:  \\"%s\\"\\n", result);\n    printf("Length: %d -> %d\\n", 19, j);\n    return 0;\n}',
        expected: 'Original: "H e l l o W o r l d"\nRemoved:  "HelloWorld"\nLength: 19 -> 10',
      },
    ],
  },
  {
    step: 9,
    titleKo: '종합 실습',
    titleEn: 'Comprehensive Practice',
    descKo: '배열, 포인터, 문자열을 종합적으로 활용합니다.',
    descEn: 'Combine arrays, pointers, and strings in comprehensive exercises.',
    examples: [
      // === Existing 5 examples ===
      {
        titleKo: '간단한 계산기',
        titleEn: 'Simple Calculator',
        code: '#include <stdio.h>\n\ndouble calculate(double a, double b, char op) {\n    switch (op) {\n        case \'+\': return a + b;\n        case \'-\': return a - b;\n        case \'*\': return a * b;\n        case \'/\': return (b != 0) ? a / b : 0;\n        default: return 0;\n    }\n}\n\nint main() {\n    double a = 10.0, b = 3.0;\n    char ops[] = {\'+\', \'-\', \'*\', \'/\'};\n    for (int i = 0; i < 4; i++) {\n        printf("%.1f %c %.1f = %.2f\\n", a, ops[i], b, calculate(a, b, ops[i]));\n    }\n    return 0;\n}',
        expected: '10.0 + 3.0 = 13.00\n10.0 - 3.0 = 7.00\n10.0 * 3.0 = 30.00\n10.0 / 3.0 = 3.33',
      },
      {
        titleKo: '성적 관리 (배열)',
        titleEn: 'Grade Manager (Arrays)',
        code: '#include <stdio.h>\n\nint main() {\n    int scores[] = {92, 85, 78, 96, 88, 73, 91};\n    int n = 7;\n    int sum = 0, max = scores[0], min = scores[0];\n\n    for (int i = 0; i < n; i++) {\n        sum += scores[i];\n        if (scores[i] > max) max = scores[i];\n        if (scores[i] < min) min = scores[i];\n    }\n\n    printf("Students: %d\\n", n);\n    printf("Average: %.1f\\n", (double)sum / n);\n    printf("Highest: %d\\n", max);\n    printf("Lowest: %d\\n", min);\n\n    int grades[4] = {0};\n    for (int i = 0; i < n; i++) {\n        if (scores[i] >= 90) grades[0]++;\n        else if (scores[i] >= 80) grades[1]++;\n        else if (scores[i] >= 70) grades[2]++;\n        else grades[3]++;\n    }\n    printf("A: %d, B: %d, C: %d, F: %d\\n", grades[0], grades[1], grades[2], grades[3]);\n    return 0;\n}',
        expected: 'Students: 7\nAverage: 86.1\nHighest: 96\nLowest: 73\nA: 3, B: 2, C: 2, F: 0',
      },
      {
        titleKo: '배열 통계',
        titleEn: 'Array Statistics',
        code: '#include <stdio.h>\n\nint main() {\n    int data[] = {23, 45, 12, 67, 34, 89, 56, 78, 90, 11};\n    int n = 10;\n    int sum = 0;\n\n    for (int i = 0; i < n; i++) sum += data[i];\n    double avg = (double)sum / n;\n\n    double variance = 0;\n    for (int i = 0; i < n; i++) {\n        double diff = data[i] - avg;\n        variance += diff * diff;\n    }\n    variance /= n;\n\n    printf("Count: %d\\n", n);\n    printf("Sum: %d\\n", sum);\n    printf("Average: %.1f\\n", avg);\n    printf("Variance: %.1f\\n", variance);\n    return 0;\n}',
        expected: 'Count: 10\nSum: 505\nAverage: 50.5\nVariance: 697.2',
      },
      {
        titleKo: '문자열 암호화 (시저 암호)',
        titleEn: 'Caesar Cipher',
        code: '#include <stdio.h>\n#include <string.h>\n\nvoid encrypt(char *str, int shift) {\n    for (int i = 0; str[i]; i++) {\n        if (str[i] >= \'A\' && str[i] <= \'Z\') {\n            str[i] = (str[i] - \'A\' + shift) % 26 + \'A\';\n        } else if (str[i] >= \'a\' && str[i] <= \'z\') {\n            str[i] = (str[i] - \'a\' + shift) % 26 + \'a\';\n        }\n    }\n}\n\nint main() {\n    char msg[] = "Hello World";\n    printf("Original:  %s\\n", msg);\n    encrypt(msg, 3);\n    printf("Encrypted: %s\\n", msg);\n    encrypt(msg, 23);\n    printf("Decrypted: %s\\n", msg);\n    return 0;\n}',
        expected: 'Original:  Hello World\nEncrypted: Khoor Zruog\nDecrypted: Hello World',
      },
      {
        titleKo: '소수 구하기',
        titleEn: 'Find Primes',
        code: '#include <stdio.h>\n\nint isPrime(int n) {\n    if (n < 2) return 0;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return 0;\n    }\n    return 1;\n}\n\nint main() {\n    printf("Primes up to 30:\\n");\n    int count = 0;\n    for (int i = 2; i <= 30; i++) {\n        if (isPrime(i)) {\n            printf("%d ", i);\n            count++;\n        }\n    }\n    printf("\\nTotal: %d primes\\n", count);\n    return 0;\n}',
        expected: 'Primes up to 30:\n2 3 5 7 11 13 17 19 23 29 \nTotal: 10 primes',
      },
      // === 5 New examples ===
      {
        titleKo: '이진수 변환',
        titleEn: 'Number to Binary',
        code: '#include <stdio.h>\n\nvoid toBinary(int n, char *result) {\n    int bits[32];\n    int count = 0;\n\n    if (n == 0) {\n        result[0] = \'0\';\n        result[1] = \'\\0\';\n        return;\n    }\n\n    int temp = n;\n    while (temp > 0) {\n        bits[count] = temp % 2;\n        temp = temp / 2;\n        count++;\n    }\n\n    for (int i = 0; i < count; i++) {\n        result[i] = \'0\' + bits[count - 1 - i];\n    }\n    result[count] = \'\\0\';\n}\n\nint main() {\n    int nums[] = {0, 5, 10, 42, 255};\n    int n = 5;\n    char binary[33];\n\n    for (int i = 0; i < n; i++) {\n        toBinary(nums[i], binary);\n        printf("%3d -> %s\\n", nums[i], binary);\n    }\n    return 0;\n}',
        expected: '  0 -> 0\n  5 -> 101\n 10 -> 1010\n 42 -> 101010\n255 -> 11111111',
      },
      {
        titleKo: '행렬 전치',
        titleEn: 'Matrix Transpose',
        code: '#include <stdio.h>\n\nint main() {\n    int matrix[2][3] = {\n        {1, 2, 3},\n        {4, 5, 6}\n    };\n    int transposed[3][2];\n\n    for (int i = 0; i < 2; i++)\n        for (int j = 0; j < 3; j++)\n            transposed[j][i] = matrix[i][j];\n\n    printf("Original (2x3):\\n");\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 3; j++)\n            printf("%d ", matrix[i][j]);\n        printf("\\n");\n    }\n\n    printf("Transposed (3x2):\\n");\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 2; j++)\n            printf("%d ", transposed[i][j]);\n        printf("\\n");\n    }\n    return 0;\n}',
        expected: 'Original (2x3):\n1 2 3 \n4 5 6 \nTransposed (3x2):\n1 4 \n2 5 \n3 6 ',
      },
      {
        titleKo: '파스칼의 삼각형',
        titleEn: "Pascal's Triangle",
        code: '#include <stdio.h>\n\nint main() {\n    int rows = 6;\n    int tri[6][6] = {0};\n\n    printf("Pascal\'s Triangle:\\n");\n    for (int i = 0; i < rows; i++) {\n        tri[i][0] = 1;\n        for (int j = 1; j <= i; j++) {\n            tri[i][j] = tri[i - 1][j - 1] + tri[i - 1][j];\n        }\n\n        // Print leading spaces for alignment\n        for (int s = 0; s < rows - i - 1; s++) printf("  ");\n\n        for (int j = 0; j <= i; j++) {\n            printf("%3d ", tri[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
        expected: "Pascal's Triangle:\n            1 \n          1   1 \n        1   2   1 \n      1   3   3   1 \n    1   4   6   4   1 \n  1   5  10  10   5   1 ",
      },
      {
        titleKo: '숫자 맞추기',
        titleEn: 'Number Guessing Game',
        code: '#include <stdio.h>\n\nint main() {\n    int secret = 42;\n    int guesses[] = {25, 50, 38, 45, 42};\n    int n = 5;\n\n    printf("Secret number is between 1-100\\n");\n    for (int i = 0; i < n; i++) {\n        printf("Guess %d: %d -> ", i + 1, guesses[i]);\n        if (guesses[i] < secret)\n            printf("Too low!\\n");\n        else if (guesses[i] > secret)\n            printf("Too high!\\n");\n        else {\n            printf("Correct!\\n");\n            printf("Found in %d guesses!\\n", i + 1);\n            break;\n        }\n    }\n    return 0;\n}',
        expected: 'Secret number is between 1-100\nGuess 1: 25 -> Too low!\nGuess 2: 50 -> Too high!\nGuess 3: 38 -> Too low!\nGuess 4: 45 -> Too high!\nGuess 5: 42 -> Correct!\nFound in 5 guesses!',
      },
      {
        titleKo: '학생 순위',
        titleEn: 'Student Ranking',
        code: '#include <stdio.h>\n\nint main() {\n    int scores[] = {78, 92, 85, 96, 88};\n    int ids[] = {1, 2, 3, 4, 5};\n    int n = 5;\n\n    // Sort by score descending (bubble sort)\n    for (int i = 0; i < n - 1; i++) {\n        for (int j = 0; j < n - i - 1; j++) {\n            if (scores[j] < scores[j + 1]) {\n                int temp = scores[j];\n                scores[j] = scores[j + 1];\n                scores[j + 1] = temp;\n                temp = ids[j];\n                ids[j] = ids[j + 1];\n                ids[j + 1] = temp;\n            }\n        }\n    }\n\n    printf("=== Student Rankings ===\\n");\n    for (int i = 0; i < n; i++) {\n        printf("Rank %d: Student %d (Score: %d)\\n", i + 1, ids[i], scores[i]);\n    }\n    return 0;\n}',
        expected: '=== Student Rankings ===\nRank 1: Student 4 (Score: 96)\nRank 2: Student 2 (Score: 92)\nRank 3: Student 5 (Score: 88)\nRank 4: Student 3 (Score: 85)\nRank 5: Student 1 (Score: 78)',
      },
    ],
  },
  {
    step: 10,
    titleKo: '고급 실습',
    titleEn: 'Advanced Practice',
    descKo: '정렬, 탐색, 재귀 등 고급 알고리즘을 연습합니다.',
    descEn: 'Practice advanced algorithms including sorting, searching, and recursion.',
    examples: [
      // === Existing 5 examples ===
      {
        titleKo: '선택 정렬',
        titleEn: 'Selection Sort',
        code: '#include <stdio.h>\n\nvoid selectionSort(int arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        int minIdx = i;\n        for (int j = i + 1; j < n; j++) {\n            if (arr[j] < arr[minIdx]) minIdx = j;\n        }\n        int temp = arr[i];\n        arr[i] = arr[minIdx];\n        arr[minIdx] = temp;\n    }\n}\n\nint main() {\n    int arr[] = {64, 25, 12, 22, 11};\n    int n = 5;\n    printf("Before: ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    selectionSort(arr, n);\n    printf("After:  ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}',
        expected: 'Before: 64 25 12 22 11 \nAfter:  11 12 22 25 64 ',
      },
      {
        titleKo: '이진 탐색',
        titleEn: 'Binary Search',
        code: '#include <stdio.h>\n\nint binarySearch(int arr[], int n, int target) {\n    int left = 0, right = n - 1;\n    while (left <= right) {\n        int mid = (left + right) / 2;\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}\n\nint main() {\n    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};\n    int n = 10;\n    int targets[] = {23, 72, 15};\n    for (int i = 0; i < 3; i++) {\n        int idx = binarySearch(arr, n, targets[i]);\n        if (idx >= 0)\n            printf("Found %d at index %d\\n", targets[i], idx);\n        else\n            printf("%d not found\\n", targets[i]);\n    }\n    return 0;\n}',
        expected: 'Found 23 at index 5\nFound 72 at index 8\n15 not found',
      },
      {
        titleKo: '행렬 곱셈',
        titleEn: 'Matrix Multiplication',
        code: '#include <stdio.h>\n\nint main() {\n    int A[2][2] = {{1, 2}, {3, 4}};\n    int B[2][2] = {{5, 6}, {7, 8}};\n    int C[2][2] = {{0}};\n\n    for (int i = 0; i < 2; i++)\n        for (int j = 0; j < 2; j++)\n            for (int k = 0; k < 2; k++)\n                C[i][j] += A[i][k] * B[k][j];\n\n    printf("Result:\\n");\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 2; j++) {\n            printf("%3d ", C[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
        expected: 'Result:\n 19  22 \n 43  50 ',
      },
      {
        titleKo: '재귀 패턴 출력',
        titleEn: 'Recursive Pattern',
        code: '#include <stdio.h>\n\nvoid printStars(int n) {\n    if (n <= 0) return;\n    printStars(n - 1);\n    for (int i = 0; i < n; i++) printf("*");\n    printf("\\n");\n}\n\nint sumRecursive(int n) {\n    if (n <= 0) return 0;\n    return n + sumRecursive(n - 1);\n}\n\nint main() {\n    printStars(5);\n    printf("\\n");\n    printf("Sum(1..10) = %d\\n", sumRecursive(10));\n    printf("Sum(1..100) = %d\\n", sumRecursive(100));\n    return 0;\n}',
        expected: '*\n**\n***\n****\n*****\n\nSum(1..10) = 55\nSum(1..100) = 5050',
      },
      {
        titleKo: '종합: 성적 분석',
        titleEn: 'Grade Analysis',
        code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    int scores[] = {95, 82, 67, 91, 78, 55, 88, 73, 99, 61};\n    char grades[] = "          ";\n    int n = 10;\n    int counts[5] = {0};\n\n    for (int i = 0; i < n; i++) {\n        if (scores[i] >= 90) { grades[i] = \'A\'; counts[0]++; }\n        else if (scores[i] >= 80) { grades[i] = \'B\'; counts[1]++; }\n        else if (scores[i] >= 70) { grades[i] = \'C\'; counts[2]++; }\n        else if (scores[i] >= 60) { grades[i] = \'D\'; counts[3]++; }\n        else { grades[i] = \'F\'; counts[4]++; }\n    }\n\n    int sum = 0;\n    for (int i = 0; i < n; i++) sum += scores[i];\n\n    printf("=== Grade Report ===\\n");\n    for (int i = 0; i < n; i++) {\n        printf("Student %2d: %d (%c)\\n", i + 1, scores[i], grades[i]);\n    }\n    printf("\\nAverage: %.1f\\n", (double)sum / n);\n    printf("A:%d B:%d C:%d D:%d F:%d\\n", counts[0], counts[1], counts[2], counts[3], counts[4]);\n    return 0;\n}',
        expected: '=== Grade Report ===\nStudent  1: 95 (A)\nStudent  2: 82 (B)\nStudent  3: 67 (D)\nStudent  4: 91 (A)\nStudent  5: 78 (C)\nStudent  6: 55 (F)\nStudent  7: 88 (B)\nStudent  8: 73 (C)\nStudent  9: 99 (A)\nStudent 10: 61 (D)\n\nAverage: 78.9\nA:3 B:2 C:2 D:2 F:1',
      },
      // === 5 New examples ===
      {
        titleKo: '삽입 정렬',
        titleEn: 'Insertion Sort',
        code: '#include <stdio.h>\n\nvoid insertionSort(int arr[], int n) {\n    for (int i = 1; i < n; i++) {\n        int key = arr[i];\n        int j = i - 1;\n        while (j >= 0 && arr[j] > key) {\n            arr[j + 1] = arr[j];\n            j--;\n        }\n        arr[j + 1] = key;\n        // Print state after each insertion\n        printf("Step %d: ", i);\n        for (int k = 0; k < n; k++) printf("%d ", arr[k]);\n        printf("\\n");\n    }\n}\n\nint main() {\n    int arr[] = {5, 3, 4, 1, 2};\n    int n = 5;\n    printf("Before: ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    insertionSort(arr, n);\n    printf("After:  ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}',
        expected: 'Before: 5 3 4 1 2 \nStep 1: 3 5 4 1 2 \nStep 2: 3 4 5 1 2 \nStep 3: 1 3 4 5 2 \nStep 4: 1 2 3 4 5 \nAfter:  1 2 3 4 5 ',
      },
      {
        titleKo: '스택 시뮬레이션',
        titleEn: 'Stack Simulation',
        code: '#include <stdio.h>\n\nint stack[100];\nint top = -1;\n\nvoid push(int val) {\n    top++;\n    stack[top] = val;\n    printf("Push %d -> [", val);\n    for (int i = 0; i <= top; i++) {\n        if (i > 0) printf(", ");\n        printf("%d", stack[i]);\n    }\n    printf("]\\n");\n}\n\nint pop() {\n    int val = stack[top];\n    top--;\n    printf("Pop %d  -> [", val);\n    for (int i = 0; i <= top; i++) {\n        if (i > 0) printf(", ");\n        printf("%d", stack[i]);\n    }\n    printf("]\\n");\n    return val;\n}\n\nint main() {\n    printf("=== Stack Operations ===\\n");\n    push(10);\n    push(20);\n    push(30);\n    pop();\n    push(40);\n    pop();\n    pop();\n    printf("Stack size: %d\\n", top + 1);\n    return 0;\n}',
        expected: '=== Stack Operations ===\nPush 10 -> [10]\nPush 20 -> [10, 20]\nPush 30 -> [10, 20, 30]\nPop 30  -> [10, 20]\nPush 40 -> [10, 20, 40]\nPop 40  -> [10, 20]\nPop 20  -> [10]\nStack size: 1',
      },
      {
        titleKo: '큐 시뮬레이션',
        titleEn: 'Queue Simulation',
        code: '#include <stdio.h>\n\nint queue[100];\nint front = 0, rear = 0, count = 0;\n\nvoid enqueue(int val) {\n    queue[rear] = val;\n    rear = (rear + 1) % 100;\n    count++;\n    printf("Enqueue %d (size=%d)\\n", val, count);\n}\n\nint dequeue() {\n    int val = queue[front];\n    front = (front + 1) % 100;\n    count--;\n    printf("Dequeue %d (size=%d)\\n", val, count);\n    return val;\n}\n\nint main() {\n    printf("=== Queue Operations ===\\n");\n    enqueue(10);\n    enqueue(20);\n    enqueue(30);\n    dequeue();\n    dequeue();\n    enqueue(40);\n    enqueue(50);\n    dequeue();\n    printf("Remaining: %d items\\n", count);\n    return 0;\n}',
        expected: '=== Queue Operations ===\nEnqueue 10 (size=1)\nEnqueue 20 (size=2)\nEnqueue 30 (size=3)\nDequeue 10 (size=2)\nDequeue 20 (size=1)\nEnqueue 40 (size=2)\nEnqueue 50 (size=3)\nDequeue 30 (size=2)\nRemaining: 2 items',
      },
      {
        titleKo: '하노이의 탑',
        titleEn: 'Tower of Hanoi',
        code: '#include <stdio.h>\n\nint moveCount = 0;\n\nvoid hanoi(int n, char from, char to, char aux) {\n    if (n == 1) {\n        moveCount++;\n        printf("Move disk 1: %c -> %c\\n", from, to);\n        return;\n    }\n    hanoi(n - 1, from, aux, to);\n    moveCount++;\n    printf("Move disk %d: %c -> %c\\n", n, from, to);\n    hanoi(n - 1, aux, to, from);\n}\n\nint main() {\n    int n = 3;\n    printf("Tower of Hanoi (n=%d):\\n", n);\n    hanoi(n, \'A\', \'C\', \'B\');\n    printf("Total moves: %d\\n", moveCount);\n    return 0;\n}',
        expected: 'Tower of Hanoi (n=3):\nMove disk 1: A -> C\nMove disk 2: A -> B\nMove disk 1: C -> B\nMove disk 3: A -> C\nMove disk 1: B -> A\nMove disk 2: B -> C\nMove disk 1: A -> C\nTotal moves: 7',
      },
      {
        titleKo: '병합 정렬',
        titleEn: 'Merge Sort',
        code: '#include <stdio.h>\n\nvoid merge(int arr[], int left, int mid, int right) {\n    int temp[20];\n    int i = left, j = mid + 1, k = 0;\n\n    while (i <= mid && j <= right) {\n        if (arr[i] <= arr[j])\n            temp[k++] = arr[i++];\n        else\n            temp[k++] = arr[j++];\n    }\n    while (i <= mid) temp[k++] = arr[i++];\n    while (j <= right) temp[k++] = arr[j++];\n\n    for (int i = 0; i < k; i++)\n        arr[left + i] = temp[i];\n}\n\nvoid mergeSort(int arr[], int left, int right) {\n    if (left < right) {\n        int mid = (left + right) / 2;\n        mergeSort(arr, left, mid);\n        mergeSort(arr, mid + 1, right);\n        merge(arr, left, mid, right);\n    }\n}\n\nint main() {\n    int arr[] = {38, 27, 43, 3, 9, 82, 10};\n    int n = 7;\n\n    printf("Before: ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n\n    mergeSort(arr, 0, n - 1);\n\n    printf("After:  ");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}',
        expected: 'Before: 38 27 43 3 9 82 10 \nAfter:  3 9 10 27 38 43 82 ',
      },
    ],
  },
];

export default steps6to10;
