import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import CodeEditor from '../../components/CodeEditor'

export default function CLesson09() {
  const { lang } = useLanguage()

  return (
    <div className="c-lesson-page">
      <div className="c-lesson-nav-top">
        <Link to="/c-learning"><i className="fa-solid fa-arrow-left" /> {lang === 'en' ? 'Back to Curriculum' : '커리큘럼으로 돌아가기'}</Link>
        <span className="c-lesson-week">Step 09</span>
      </div>

      <h1 className="c-lesson-title">
        <i className="fa-solid fa-file-lines" />
        {lang === 'en' ? 'Step 9: File I/O' : '9단계: 파일 입출력'}
      </h1>

      <div className="c-lesson-warning" style={{ padding: '12px 16px', margin: '0 0 20px', background: 'var(--warning-bg, #fff3cd)', color: 'var(--warning-text, #856404)', borderRadius: '8px', fontSize: '0.9rem', border: '1px solid var(--warning-border, #ffc107)', lineHeight: 1.6 }}>
        <i className="fa-solid fa-triangle-exclamation" style={{ marginRight: '8px' }} />
        {lang === 'en'
          ? 'This lesson uses FILE, fopen, fclose, and other file I/O features not supported by the browser compiler (JSCPP). Please use a local compiler like GCC to run these examples.'
          : '이 레슨은 FILE, fopen, fclose 등 브라우저 컴파일러(JSCPP)에서 지원하지 않는 파일 입출력 기능을 사용합니다. GCC 등 로컬 컴파일러에서 실행해 주세요.'}
      </div>

      <section className="c-lesson-section">
        <h2>{lang === 'en' ? 'Opening & Closing Files' : '파일 열기와 닫기'}</h2>
        <p>{lang === 'en'
          ? 'In C, file operations use the FILE pointer type. Always close files after use to prevent resource leaks:'
          : 'C에서 파일 작업은 FILE 포인터 타입을 사용합니다. 리소스 누수를 방지하기 위해 사용 후 항상 파일을 닫아야 합니다:'}</p>
        <div className="c-lesson-info-box">
          <h3><i className="fa-solid fa-table" /> {lang === 'en' ? 'File Open Modes' : '파일 열기 모드'}</h3>
          <table className="c-lesson-table">
            <thead>
              <tr>
                <th>{lang === 'en' ? 'Mode' : '모드'}</th>
                <th>{lang === 'en' ? 'Description' : '설명'}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>"r"</code></td><td>{lang === 'en' ? 'Read (file must exist)' : '읽기 (파일 존재해야 함)'}</td></tr>
              <tr><td><code>"w"</code></td><td>{lang === 'en' ? 'Write (creates/truncates file)' : '쓰기 (파일 생성/덮어쓰기)'}</td></tr>
              <tr><td><code>"a"</code></td><td>{lang === 'en' ? 'Append (creates/adds to end)' : '추가 (파일 생성/끝에 추가)'}</td></tr>
              <tr><td><code>"r+"</code></td><td>{lang === 'en' ? 'Read and write (file must exist)' : '읽기/쓰기 (파일 존재해야 함)'}</td></tr>
              <tr><td><code>"w+"</code></td><td>{lang === 'en' ? 'Read and write (creates/truncates)' : '읽기/쓰기 (생성/덮어쓰기)'}</td></tr>
              <tr><td><code>"rb"</code></td><td>{lang === 'en' ? 'Read binary mode' : '바이너리 읽기 모드'}</td></tr>
              <tr><td><code>"wb"</code></td><td>{lang === 'en' ? 'Write binary mode' : '바이너리 쓰기 모드'}</td></tr>
            </tbody>
          </table>
        </div>
        <CodeEditor
          initialCode={`#include <stdio.h>

int main() {
    // Open file for writing
    FILE *fp = fopen("test.txt", "w");
    if (fp == NULL) {
        printf("Error: Could not open file for writing\\n");
        return 1;
    }

    printf("File opened successfully for writing.\\n");
    fprintf(fp, "Hello, File I/O!\\n");
    fprintf(fp, "This is line 2.\\n");
    fprintf(fp, "Learning C is fun!\\n");
    fclose(fp);
    printf("Data written and file closed.\\n");

    // Open file for reading
    fp = fopen("test.txt", "r");
    if (fp == NULL) {
        printf("Error: Could not open file for reading\\n");
        return 1;
    }

    printf("\\nFile contents:\\n");
    char line[256];
    while (fgets(line, sizeof(line), fp) != NULL) {
        printf("  %s", line);
    }
    fclose(fp);

    return 0;
}`}
          expectedOutput="File opened successfully for writing.\nData written and file closed."
          lessonId="c-lesson-09-openclose"
        />
      </section>

      <section className="c-lesson-section">
        <h2>{lang === 'en' ? 'fprintf and fscanf' : 'fprintf와 fscanf'}</h2>
        <CodeEditor
          initialCode={`#include <stdio.h>

typedef struct {
    char name[50];
    int age;
    float score;
} Student;

int main() {
    Student students[] = {
        {"Kim", 20, 92.5f},
        {"Lee", 21, 88.0f},
        {"Park", 19, 95.3f}
    };
    int count = 3;

    // Write formatted data with fprintf
    FILE *fp = fopen("students.txt", "w");
    if (!fp) { printf("Error opening file\\n"); return 1; }

    fprintf(fp, "%d\\n", count);  // Write count first
    for (int i = 0; i < count; i++) {
        fprintf(fp, "%s %d %.1f\\n",
                students[i].name,
                students[i].age,
                students[i].score);
    }
    fclose(fp);
    printf("Student data written to file.\\n\\n");

    // Read formatted data with fscanf
    fp = fopen("students.txt", "r");
    if (!fp) { printf("Error opening file\\n"); return 1; }

    int readCount;
    fscanf(fp, "%d", &readCount);

    Student loaded[10];
    for (int i = 0; i < readCount; i++) {
        fscanf(fp, "%s %d %f",
               loaded[i].name,
               &loaded[i].age,
               &loaded[i].score);
    }
    fclose(fp);

    printf("Read %d students from file:\\n", readCount);
    for (int i = 0; i < readCount; i++) {
        printf("  %s (age %d): %.1f\\n",
               loaded[i].name,
               loaded[i].age,
               loaded[i].score);
    }

    return 0;
}`}
          expectedOutput="Student data written to file.\n\nRead 3 students from file:"
          lessonId="c-lesson-09-fprintf"
        />
      </section>

      <section className="c-lesson-section">
        <h2>{lang === 'en' ? 'Character-by-Character I/O' : '문자 단위 입출력'}</h2>
        <CodeEditor
          initialCode={`#include <stdio.h>

int main() {
    // fputc: write characters one by one
    FILE *fp = fopen("chars.txt", "w");
    if (!fp) return 1;

    const char *message = "Hello C File I/O";
    for (int i = 0; message[i] != '\\0'; i++) {
        fputc(message[i], fp);
    }
    fputc('\\n', fp);
    fclose(fp);

    // fgetc: read characters one by one
    fp = fopen("chars.txt", "r");
    if (!fp) return 1;

    printf("Reading character by character:\\n");
    int ch;
    int charCount = 0;
    int letterCount = 0;
    int spaceCount = 0;

    while ((ch = fgetc(fp)) != EOF) {
        putchar(ch);  // Print to stdout
        charCount++;
        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
            letterCount++;
        if (ch == ' ')
            spaceCount++;
    }
    fclose(fp);

    printf("\\nStatistics:\\n");
    printf("  Total characters: %d\\n", charCount);
    printf("  Letters: %d\\n", letterCount);
    printf("  Spaces: %d\\n", spaceCount);

    return 0;
}`}
          expectedOutput="Reading character by character:\nHello C File I/O"
          lessonId="c-lesson-09-char"
        />
      </section>

      <section className="c-lesson-section">
        <h2>{lang === 'en' ? 'Binary File I/O (fread & fwrite)' : '바이너리 파일 입출력 (fread & fwrite)'}</h2>
        <p>{lang === 'en'
          ? 'Binary files store data in raw memory format, which is more efficient for structured data:'
          : '바이너리 파일은 원시 메모리 형식으로 데이터를 저장하며, 구조화된 데이터에 더 효율적입니다:'}</p>
        <CodeEditor
          initialCode={`#include <stdio.h>

typedef struct {
    int id;
    char name[30];
    double score;
} Record;

int main() {
    Record records[] = {
        {1, "Alice", 95.5},
        {2, "Bob",   88.0},
        {3, "Carol", 92.3}
    };
    int count = 3;

    // Write binary data
    FILE *fp = fopen("records.bin", "wb");
    if (!fp) { printf("Error\\n"); return 1; }

    fwrite(&count, sizeof(int), 1, fp);
    fwrite(records, sizeof(Record), count, fp);
    fclose(fp);
    printf("Binary data written (%lu bytes per record)\\n",
           sizeof(Record));

    // Read binary data
    fp = fopen("records.bin", "rb");
    if (!fp) { printf("Error\\n"); return 1; }

    int readCount;
    fread(&readCount, sizeof(int), 1, fp);

    Record loaded[10];
    fread(loaded, sizeof(Record), readCount, fp);
    fclose(fp);

    printf("\\nRead %d records from binary file:\\n", readCount);
    for (int i = 0; i < readCount; i++) {
        printf("  ID: %d, Name: %s, Score: %.1f\\n",
               loaded[i].id, loaded[i].name, loaded[i].score);
    }

    return 0;
}`}
          expectedOutput="Binary data written (... bytes per record)\n\nRead 3 records:"
          lessonId="c-lesson-09-binary"
        />
        <div className="c-lesson-tip">
          <i className="fa-solid fa-lightbulb" />
          <p>{lang === 'en'
            ? 'Tip: Binary files are smaller and faster to read/write than text files, but they are not human-readable and may not be portable across different systems.'
            : '팁: 바이너리 파일은 텍스트 파일보다 작고 읽기/쓰기가 빠르지만, 사람이 읽을 수 없고 다른 시스템 간에 이식성이 떨어질 수 있습니다.'}</p>
        </div>
      </section>

      <section className="c-lesson-section">
        <h2>{lang === 'en' ? 'File Position (fseek, ftell, rewind)' : '파일 위치 (fseek, ftell, rewind)'}</h2>
        <CodeEditor
          initialCode={`#include <stdio.h>

int main() {
    // Create a test file
    FILE *fp = fopen("position.txt", "w");
    if (!fp) return 1;
    fprintf(fp, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    fclose(fp);

    // Read with position control
    fp = fopen("position.txt", "r");
    if (!fp) return 1;

    // ftell: get current position
    printf("Initial position: %ld\\n", ftell(fp));

    // Read first 5 characters
    char buf[10];
    fread(buf, 1, 5, fp);
    buf[5] = '\\0';
    printf("Read: %s (position now: %ld)\\n", buf, ftell(fp));

    // fseek: move to position 10
    fseek(fp, 10, SEEK_SET);  // From start
    printf("After fseek(10, SEEK_SET): position %ld\\n", ftell(fp));
    fread(buf, 1, 3, fp);
    buf[3] = '\\0';
    printf("Read: %s\\n", buf);

    // Seek from current position
    fseek(fp, -5, SEEK_CUR);
    printf("After fseek(-5, SEEK_CUR): position %ld\\n", ftell(fp));

    // Seek from end
    fseek(fp, -3, SEEK_END);
    fread(buf, 1, 3, fp);
    buf[3] = '\\0';
    printf("Last 3 chars: %s\\n", buf);

    // rewind: go back to beginning
    rewind(fp);
    printf("After rewind: position %ld\\n", ftell(fp));

    fclose(fp);
    return 0;
}`}
          expectedOutput="Initial position: 0\nRead: ABCDE (position now: 5)"
          lessonId="c-lesson-09-position"
        />
      </section>

      <section className="c-lesson-section">
        <h2>{lang === 'en' ? 'Practice: Simple Log Writer' : '실습: 간단한 로그 기록기'}</h2>
        <CodeEditor
          initialCode={`#include <stdio.h>
#include <time.h>
#include <string.h>

void writeLog(const char *filename, const char *message) {
    FILE *fp = fopen(filename, "a");  // Append mode
    if (!fp) {
        printf("Cannot open log file\\n");
        return;
    }

    time_t now = time(NULL);
    struct tm *t = localtime(&now);
    fprintf(fp, "[%04d-%02d-%02d %02d:%02d:%02d] %s\\n",
            t->tm_year + 1900, t->tm_mon + 1, t->tm_mday,
            t->tm_hour, t->tm_min, t->tm_sec, message);
    fclose(fp);
}

void displayLog(const char *filename) {
    FILE *fp = fopen(filename, "r");
    if (!fp) {
        printf("No log file found.\\n");
        return;
    }

    printf("=== Log Contents ===\\n");
    char line[256];
    int lineNum = 1;
    while (fgets(line, sizeof(line), fp)) {
        printf("%3d: %s", lineNum++, line);
    }
    fclose(fp);
}

int main() {
    const char *logFile = "app.log";

    writeLog(logFile, "Application started");
    writeLog(logFile, "User login: admin");
    writeLog(logFile, "Data processed: 100 records");
    writeLog(logFile, "Application shutdown");

    printf("Log entries written!\\n\\n");
    displayLog(logFile);

    return 0;
}`}
          expectedOutput="Log entries written!\n\n=== Log Contents ==="
          lessonId="c-lesson-09-practice"
        />
      </section>

      <div className="c-lesson-nav-bottom">
        <Link to="/c-learning/08" className="c-lesson-nav-btn prev">
          <i className="fa-solid fa-arrow-left" />
          {lang === 'en' ? 'Prev: Structs & Unions' : '이전: 구조체와 공용체'}
        </Link>
        <Link to="/c-learning/10" className="c-lesson-nav-btn next">
          {lang === 'en' ? 'Next: Data Structures' : '다음: 자료구조 기초'}
          <i className="fa-solid fa-arrow-right" />
        </Link>
      </div>
    </div>
  )
}
