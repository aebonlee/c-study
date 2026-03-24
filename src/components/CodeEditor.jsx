import { useState, useRef, useCallback } from 'react'
import { useProgress } from '../contexts/ProgressContext'
import { useAuth } from '../contexts/AuthContext'
import { useLanguage } from '../contexts/LanguageContext'
import JSCPP from 'JSCPP'

export default function CodeEditor({ initialCode = '', expectedOutput = '', lessonId = '' }) {
  const [code, setCode] = useState(initialCode)
  const [showHint, setShowHint] = useState(false)
  const [output, setOutput] = useState('')
  const [status, setStatus] = useState('idle')
  const textareaRef = useRef(null)
  const { incrementCodeRuns } = useProgress()
  const { requireAuth } = useAuth()
  const { t } = useLanguage()

  const isRunning = status === 'running'

  const handleRun = useCallback(() => {
    setStatus('running')
    setOutput('')
    incrementCodeRuns()

    setTimeout(() => {
      try {
        let outputText = ''
        const config = {
          stdio: {
            write: (s) => { outputText += s }
          }
        }
        JSCPP.run(code, '', config)
        setOutput(outputText || t('editor.noOutput'))
        setStatus('done')
      } catch (err) {
        const msg = err.message || String(err)
        setOutput(`${t('editor.errorPrefix')}: ${msg}`)
        setStatus('error')
      }
    }, 50)
  }, [code, incrementCodeRuns, t])

  const handleReset = useCallback(() => {
    setCode(initialCode)
    setOutput('')
    setStatus('idle')
  }, [initialCode])

  const handleClearOutput = useCallback(() => {
    setOutput('')
    setStatus('idle')
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
