// Dynamic step loader for C practice steps
// Lazy-loads step modules to reduce initial bundle size

const stepModules = {
  1: () => import('./step1.js'),
  2: () => import('./step2.js'),
  3: () => import('./step3.js'),
  4: () => import('./step4.js'),
  5: () => import('./step5.js'),
  6: () => import('./step6.js'),
  7: () => import('./step7.js'),
  8: () => import('./step8.js'),
  9: () => import('./step9.js'),
  10: () => import('./step10.js')
}

export const stepInfo = {
  1: { title: 'Hello World', titleKo: 'Hello World', description: 'Your first C program', descriptionKo: '첫 번째 C 프로그램' },
  2: { title: 'Variables & Data Types', titleKo: '변수와 자료형', description: 'Declaring and using variables', descriptionKo: '변수 선언과 사용' },
  3: { title: 'Operators', titleKo: '연산자', description: 'Arithmetic, comparison, logical operators', descriptionKo: '산술, 비교, 논리 연산자' },
  4: { title: 'Input & Output', titleKo: '입출력', description: 'scanf and printf', descriptionKo: 'scanf와 printf' },
  5: { title: 'Conditionals', titleKo: '조건문', description: 'if, else, switch', descriptionKo: 'if, else, switch' },
  6: { title: 'Loops', titleKo: '반복문', description: 'for, while, do-while', descriptionKo: 'for, while, do-while' },
  7: { title: 'Arrays', titleKo: '배열', description: '1D and 2D arrays', descriptionKo: '1차원과 2차원 배열' },
  8: { title: 'Strings', titleKo: '문자열', description: 'Char arrays and string functions', descriptionKo: '문자 배열과 문자열 함수' },
  9: { title: 'Functions', titleKo: '함수', description: 'Defining and calling functions', descriptionKo: '함수 정의와 호출' },
  10: { title: 'Pointers', titleKo: '포인터', description: 'Addresses, dereferencing, pointer basics', descriptionKo: '주소, 역참조, 포인터 기초' }
}

export const totalSteps = Object.keys(stepModules).length

/**
 * Load a specific step module by step number
 * @param {number} stepNumber - Step number (1-10)
 * @returns {Promise<object>} - The step module with examples
 */
export async function loadStep(stepNumber) {
  if (stepNumber < 1 || stepNumber > totalSteps) {
    throw new Error(`Invalid step number: ${stepNumber}. Must be between 1 and ${totalSteps}.`)
  }

  const loader = stepModules[stepNumber]
  if (!loader) {
    throw new Error(`Step ${stepNumber} not found.`)
  }

  const module = await loader()
  return module.default || module
}

/**
 * Load all steps at once (for preloading or search)
 * @returns {Promise<object[]>} - Array of all step modules
 */
export async function loadAllSteps() {
  const steps = []
  for (let i = 1; i <= totalSteps; i++) {
    const step = await loadStep(i)
    steps.push(step)
  }
  return steps
}

export default {
  stepInfo,
  totalSteps,
  loadStep,
  loadAllSteps
}
