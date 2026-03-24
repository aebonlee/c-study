import { useState, useRef, useCallback } from 'react'
import { useProgress } from '../contexts/ProgressContext'
import { useAuth } from '../contexts/AuthContext'
import { useLanguage } from '../contexts/LanguageContext'
import JSCPPModule from 'JSCPP'

// CJS/ESM interop — works regardless of how the module is bundled
const JSCPP = JSCPPModule.default || JSCPPModule

const UNSUPPORTED_PATTERNS = [
  { pattern: /\bmalloc\s*\(/, label: 'malloc' },
  { pattern: /\bcalloc\s*\(/, label: 'calloc' },
  { pattern: /\brealloc\s*\(/, label: 'realloc' },
  { pattern: /\bfree\s*\(/, label: 'free' },
  { pattern: /\bstruct\s+\w+/, label: 'struct' },
  { pattern: /\btypedef\s+struct/, label: 'typedef struct' },
  { pattern: /\bunion\s+\w+/, label: 'union' },
  { pattern: /\bFILE\s*\*/, label: 'FILE' },
  { pattern: /\bfopen\s*\(/, label: 'fopen' },
  { pattern: /\bfclose\s*\(/, label: 'fclose' },
  { pattern: /\bfprintf\s*\(/, label: 'fprintf' },
  { pattern: /\bfscanf\s*\(/, label: 'fscanf' },
  { pattern: /\bfgets\s*\(.*,\s*\w+\s*\)/, label: 'fgets(file)' },
  { pattern: /\bgoto\s+\w+/, label: 'goto' },
]

function detectUnsupported(code) {
  const found = []
  for (const { pattern, label } of UNSUPPORTED_PATTERNS) {
    if (pattern.test(code)) {
      found.push(label)
    }
  }
  return found
}

function friendlyError(msg, lang) {
  if (!msg) return msg
  if (msg.includes('is not defined') || msg.includes('Unknown type')) {
    const ko = '이 코드는 브라우저 컴파일러(JSCPP)에서 지원하지 않는 기능을 사용합니다. GCC 등 로컬 컴파일러에서 실행해 주세요.'
    const en = 'This code uses features not supported by the browser compiler (JSCPP). Please use a local compiler like GCC.'
    return lang === 'en' ? en : ko
  }
  if (msg.includes('Parsing failed')) {
    const ko = '구문 분석 오류: 코드 문법을 확인해 주세요.'
    const en = 'Parse error: Please check your code syntax.'
    return lang === 'en' ? en : ko
  }
  return msg
}

export default function CodeEditor({ initialCode = '', expectedOutput = '', lessonId = '' }) {
  const [code, setCode] = useState(initialCode)
  const [showHint, setShowHint] = useState(false)
  const [output, setOutput] = useState('')
  const [status, setStatus] = useState('idle')
  const [warning, setWarning] = useState(null)
  const textareaRef = useRef(null)
  const { incrementCodeRuns } = useProgress()
  const { requireAuth } = useAuth()
  const { t, lang } = useLanguage()

  const isRunning = status === 'running'

  const handleRun = useCallback(() => {
    setStatus('running')
    setOutput('')

    // Detect unsupported features
    const unsupported = detectUnsupported(code)
    if (unsupported.length > 0) {
      const featureList = unsupported.join(', ')
      const warnMsg = lang === 'en'
        ? `Warning: This code uses features not fully supported in the browser compiler: ${featureList}. Attempting to run anyway...`
        : `경고: 이 코드는 브라우저 컴파일러에서 완전히 지원하지 않는 기능을 사용합니다: ${featureList}. 실행을 시도합니다...`
      setWarning(warnMsg)
    } else {
      setWarning(null)
    }

    incrementCodeRuns()

    setTimeout(() => {
      try {
        let outputText = ''
        const config = {
          stdio: {
            write: (s) => { outputText += s }
          },
          includes: JSCPP.includes
        }
        JSCPP.run(code, '', config)
        setOutput(outputText || t('editor.noOutput'))
        setStatus('done')
      } catch (err) {
        const msg = err.message || String(err)
        const friendly = friendlyError(msg, lang)
        setOutput(`${t('editor.errorPrefix')}: ${friendly}`)
        setStatus('error')
      }
    }, 50)
  }, [code, incrementCodeRuns, t, lang])

  const handleReset = useCallback(() => {
    setCode(initialCode)
    setOutput('')
    setStatus('idle')
    setWarning(null)
  }, [initialCode])

  const handleClearOutput = useCallback(() => {
    setOutput('')
    setStatus('idle')
    setWarning(null)
  }, [])

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).catch(() => {})
  }, [code])

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const start = e.target.selectionStart
      const end = e.target.selectionEnd
      const newCode = code.substring(0, start) + '    ' + code.substring(end)
      setCode(newCode)
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 4
      }, 0)
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleRun()
    }
  }

  const lineCount = code.split('\n').length
  const hasOutput = output !== ''
  const isError = status === 'error'

  return (
    <div className="code-editor">
      <div className="editor-header">
        <span className="editor-header-title">
          <i className="fa-solid fa-code" /> C Editor
        </span>
        <div className="editor-header-actions">
          <button className="editor-header-btn" onClick={handleCopy} title={t('editor.copy')}>
            <i className="fa-regular fa-copy" /> {t('editor.copy')}
          </button>
          {expectedOutput && (
            <button className={`editor-header-btn${showHint ? ' active' : ''}`} onClick={() => setShowHint(!showHint)}>
              <i className="fa-solid fa-lightbulb" /> {t('editor.hint')}
            </button>
          )}
        </div>
      </div>

      <div className="editor-body">
        <div className="line-numbers">
          {Array.from({ length: lineCount }, (_, i) => (
            <span key={i + 1}>{i + 1}</span>
          ))}
        </div>
        <textarea
          ref={textareaRef}
          className="code-input"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          disabled={isRunning}
          placeholder={t('editor.placeholder')}
        />
      </div>

      <div className="editor-toolbar-bottom">
        <button className="editor-btn run-btn" onClick={() => requireAuth(handleRun)} disabled={isRunning}>
          {isRunning ? (
            <><div className="loading-spinner-small" /> {t('editor.compiling')}</>
          ) : (
            <><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> {t('editor.compile')}</>
          )}
        </button>
        <div className="editor-toolbar-right">
          <button className="editor-btn" onClick={handleReset} disabled={isRunning}>{t('editor.reset')}</button>
          {hasOutput && (
            <button className="editor-btn" onClick={handleClearOutput} disabled={isRunning}>{t('editor.clearOutput')}</button>
          )}
        </div>
      </div>

      {showHint && expectedOutput && (
        <div className="editor-hint">
          <strong>{t('editor.expectedOutput')}</strong> <code>{expectedOutput}</code>
        </div>
      )}

      {warning && (
        <div className="editor-warning" style={{
          padding: '8px 12px',
          margin: '8px 0',
          background: 'var(--warning-bg, #fff3cd)',
          color: 'var(--warning-text, #856404)',
          borderRadius: '6px',
          fontSize: '0.85rem',
          border: '1px solid var(--warning-border, #ffc107)'
        }}>
          <i className="fa-solid fa-triangle-exclamation" /> {warning}
        </div>
      )}

      {hasOutput && (
        <div className="editor-output">
          <div className="editor-output-header">
            {t('editor.result')}
          </div>
          <div className="editor-output-content">
            <pre className={isError ? 'editor-stderr' : 'editor-stdout'}>{output}</pre>
          </div>
        </div>
      )}
    </div>
  )
}
