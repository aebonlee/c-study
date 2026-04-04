// Step 7: Arrays - 배열
// 1D and 2D arrays

const step7 = {
  id: 7,
  title: 'Arrays',
  titleKo: '배열',
  description: '1D and 2D arrays in C',
  descriptionKo: '1차원과 2차원 배열',
  examples: [
    {
      id: 's7e1',
      title: '배열 선언과 초기화',
      titleEn: 'Array Declaration & Initialization',
      description: '배열을 선언하고 초기화하는 방법입니다.',
      descriptionEn: 'How to declare and initialize arrays.',
      code: `#include <stdio.h>

int main() {
    // Declaration with size
    int numbers[5];
    numbers[0] = 10;
    numbers[1] = 20;
    numbers[2] = 30;
    numbers[3] = 40;
    numbers[4] = 50;

    // Declaration with initialization
    int scores[] = {95, 87, 73, 100, 68};

    // Partial initialization (rest are 0)
    int data[10] = {1, 2, 3};

    printf("numbers: ");
    for (int i = 0; i < 5; i++) printf("%d ", numbers[i]);
    printf("\\n");

    printf("scores: ");
    for (int i = 0; i < 5; i++) printf("%d ", scores[i]);
    printf("\\n");

    printf("data: ");
    for (int i = 0; i < 10; i++) printf("%d ", data[i]);
    printf("\\n");

    // Array size calculation
    int len = sizeof(scores) / sizeof(scores[0]);
    printf("scores length: %d\\n", len);

    return 0;
}`,
      expectedOutput: `numbers: 10 20 30 40 50
scores: 95 87 73 100 68
data: 1 2 3 0 0 0 0 0 0 0
scores length: 5`,
      explanation: '배열은 같은 자료형의 연속된 메모리입니다. 부분 초기화 시 나머지는 0으로 채워집니다.',
      explanationEn: 'Arrays are contiguous memory of the same type. Partial initialization fills rest with 0.'
    },
    {
      id: 's7e2',
      title: '배열 순회와 합계',
      titleEn: 'Array Traversal & Sum',
      description: '반복문으로 배열 요소를 순회합니다.',
      descriptionEn: 'Traverse array elements with loops.',
      code: `#include <stdio.h>

int main() {
    int scores[] = {85, 92, 78, 95, 88, 70, 96, 83};
    int n = sizeof(scores) / sizeof(scores[0]);

    // Sum and average
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += scores[i];
    }
    double avg = (double)sum / n;
    printf("Sum: %d, Average: %.1f\\n", sum, avg);

    // Find max and min
    int max = scores[0], min = scores[0];
    int maxIdx = 0, minIdx = 0;
    for (int i = 1; i < n; i++) {
        if (scores[i] > max) { max = scores[i]; maxIdx = i; }
        if (scores[i] < min) { min = scores[i]; minIdx = i; }
    }
    printf("Max: %d (index %d)\\n", max, maxIdx);
    printf("Min: %d (index %d)\\n", min, minIdx);

    // Count above average
    int above = 0;
    for (int i = 0; i < n; i++) {
        if (scores[i] >= avg) above++;
    }
    printf("Above average: %d students\\n", above);

    return 0;
}`,
      expectedOutput: `Sum: 687, Average: 85.9
Max: 96 (index 6)
Min: 70 (index 5)
Above average: 5 students`,
      explanation: '배열 순회로 합계, 평균, 최대값, 최소값을 구할 수 있습니다.',
      explanationEn: 'Array traversal finds sum, average, max, min.'
    },
    {
      id: 's7e3',
      title: '배열 역순과 복사',
      titleEn: 'Reverse & Copy Arrays',
      description: '배열을 역순으로 출력하고 복사합니다.',
      descriptionEn: 'Print array in reverse and copy arrays.',
      code: `#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;

    printf("Original: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");

    printf("Reversed: ");
    for (int i = n - 1; i >= 0; i--) printf("%d ", arr[i]);
    printf("\\n");

    // Reverse in-place
    for (int i = 0; i < n / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }
    printf("In-place: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");

    // Copy array
    int src[] = {10, 20, 30, 40, 50};
    int dst[5];
    for (int i = 0; i < 5; i++) dst[i] = src[i];
    printf("Copied:   ");
    for (int i = 0; i < 5; i++) printf("%d ", dst[i]);
    printf("\\n");

    return 0;
}`,
      expectedOutput: `Original: 1 2 3 4 5
Reversed: 5 4 3 2 1
In-place: 5 4 3 2 1
Copied:   10 20 30 40 50`,
      explanation: '배열 역순은 양 끝을 교환합니다. C에서 배열은 = 로 복사할 수 없고 루프를 사용합니다.',
      explanationEn: 'Reverse by swapping ends. C arrays cannot use = for copy, use a loop.'
    },
    {
      id: 's7e4',
      title: '버블 정렬',
      titleEn: 'Bubble Sort',
      description: '배열을 버블 정렬로 정렬합니다.',
      descriptionEn: 'Sort an array using bubble sort.',
      code: `#include <stdio.h>

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Before: ");
    printArray(arr, n);

    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    printf("After:  ");
    printArray(arr, n);

    return 0;
}`,
      expectedOutput: `Before: 64 34 25 12 22 11 90
After:  11 12 22 25 34 64 90`,
      explanation: '버블 정렬은 인접한 두 요소를 비교하고 교환합니다. O(n^2) 시간 복잡도입니다.',
      explanationEn: 'Bubble sort compares and swaps adjacent elements. O(n^2) time complexity.'
    },
    {
      id: 's7e5',
      title: '선형 탐색',
      titleEn: 'Linear Search',
      description: '배열에서 값을 순차적으로 찾습니다.',
      descriptionEn: 'Find a value sequentially in an array.',
      code: `#include <stdio.h>

int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}

int main() {
    int numbers[] = {45, 23, 67, 12, 89, 34, 56};
    int n = sizeof(numbers) / sizeof(numbers[0]);

    int targets[] = {67, 100, 45, 56};
    for (int t = 0; t < 4; t++) {
        int result = linearSearch(numbers, n, targets[t]);
        if (result != -1)
            printf("Found %d at index %d\\n", targets[t], result);
        else
            printf("%d not found\\n", targets[t]);
    }

    return 0;
}`,
      expectedOutput: `Found 67 at index 2
100 not found
Found 45 at index 0
Found 56 at index 6`,
      explanation: '선형 탐색은 처음부터 끝까지 순서대로 비교합니다. 못 찾으면 -1을 반환합니다.',
      explanationEn: 'Linear search compares sequentially. Returns -1 if not found.'
    },
    {
      id: 's7e6',
      title: '2차원 배열',
      titleEn: '2D Arrays',
      description: '행과 열로 이루어진 2차원 배열입니다.',
      descriptionEn: 'Two-dimensional arrays with rows and columns.',
      code: `#include <stdio.h>

int main() {
    int matrix[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    };

    printf("=== Matrix ===\\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            printf("%3d ", matrix[i][j]);
        }
        printf("\\n");
    }

    int total = 0;
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 4; j++)
            total += matrix[i][j];
    printf("Total sum: %d\\n", total);

    printf("\\nRow sums: ");
    for (int i = 0; i < 3; i++) {
        int rowSum = 0;
        for (int j = 0; j < 4; j++) rowSum += matrix[i][j];
        printf("%d ", rowSum);
    }
    printf("\\n");

    return 0;
}`,
      expectedOutput: `=== Matrix ===
  1   2   3   4
  5   6   7   8
  9  10  11  12
Total sum: 78

Row sums: 10 26 42 `,
      explanation: '2차원 배열은 matrix[행][열]로 접근합니다. 중첩 루프로 순회합니다.',
      explanationEn: '2D arrays are accessed as matrix[row][col]. Traversed with nested loops.'
    },
    {
      id: 's7e7',
      title: '행렬 전치',
      titleEn: 'Matrix Transpose',
      description: '행렬의 행과 열을 바꿉니다.',
      descriptionEn: 'Swap rows and columns of a matrix.',
      code: `#include <stdio.h>

int main() {
    int rows = 2, cols = 3;
    int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int transposed[3][2];

    for (int i = 0; i < rows; i++)
        for (int j = 0; j < cols; j++)
            transposed[j][i] = matrix[i][j];

    printf("Original (2x3):\\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) printf("%d ", matrix[i][j]);
        printf("\\n");
    }

    printf("\\nTransposed (3x2):\\n");
    for (int i = 0; i < cols; i++) {
        for (int j = 0; j < rows; j++) printf("%d ", transposed[i][j]);
        printf("\\n");
    }

    return 0;
}`,
      expectedOutput: `Original (2x3):
1 2 3
4 5 6

Transposed (3x2):
1 4
2 5
3 6`,
      explanation: '전치 행렬은 행과 열을 바꿉니다. transposed[j][i] = matrix[i][j].',
      explanationEn: 'Transpose swaps rows and columns. transposed[j][i] = matrix[i][j].'
    },
    {
      id: 's7e8',
      title: '배열을 함수에 전달',
      titleEn: 'Passing Arrays to Functions',
      description: '함수에 배열을 매개변수로 전달합니다.',
      descriptionEn: 'Pass arrays as function parameters.',
      code: `#include <stdio.h>

void doubleElements(int arr[], int n) {
    for (int i = 0; i < n; i++) arr[i] *= 2;
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
}

int findSum(const int arr[], int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) sum += arr[i];
    return sum;
}

int main() {
    int nums[] = {1, 2, 3, 4, 5};
    int n = 5;

    printf("Before: ");
    printArray(nums, n);

    doubleElements(nums, n);
    printf("After doubleElements: ");
    printArray(nums, n);

    printf("Sum: %d\\n", findSum(nums, n));
    printf("sizeof in main: %lu\\n", sizeof(nums));

    return 0;
}`,
      expectedOutput: `Before: 1 2 3 4 5
After doubleElements: 2 4 6 8 10
Sum: 30
sizeof in main: 20`,
      explanation: '배열은 함수에 포인터로 전달되므로 원본이 수정됩니다. const로 수정을 방지할 수 있습니다.',
      explanationEn: 'Arrays are passed as pointers, so the original is modified. Use const to prevent modification.'
    },
    {
      id: 's7e9',
      title: '빈도수 계산',
      titleEn: 'Frequency Counting',
      description: '배열의 요소 빈도수를 계산합니다.',
      descriptionEn: 'Count element frequencies in an array.',
      code: `#include <stdio.h>

int main() {
    int data[] = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
    int n = sizeof(data) / sizeof(data[0]);

    int freq[10] = {0};
    for (int i = 0; i < n; i++) freq[data[i]]++;

    printf("Data: ");
    for (int i = 0; i < n; i++) printf("%d ", data[i]);
    printf("\\n\\nFrequency:\\n");

    for (int i = 0; i < 10; i++) {
        if (freq[i] > 0)
            printf("  %d appears %d time%s\\n", i, freq[i],
                   freq[i] > 1 ? "s" : "");
    }

    int mode = 0, maxFreq = 0;
    for (int i = 0; i < 10; i++) {
        if (freq[i] > maxFreq) { maxFreq = freq[i]; mode = i; }
    }
    printf("\\nMode: %d (appears %d times)\\n", mode, maxFreq);

    return 0;
}`,
      expectedOutput: `Data: 3 1 4 1 5 9 2 6 5 3 5

Frequency:
  1 appears 2 times
  2 appears 1 time
  3 appears 2 times
  4 appears 1 time
  5 appears 3 times
  6 appears 1 time
  9 appears 1 time

Mode: 5 (appears 3 times)`,
      explanation: '빈도수 배열을 사용하면 각 값의 출현 횟수를 O(n)에 계산할 수 있습니다.',
      explanationEn: 'A frequency array counts occurrences in O(n) time.'
    }
  ]
}

export default step7
