import { useState, useEffect } from 'react'
import _Editor from 'react-simple-code-editor'
import Prism from 'prismjs'

const Editor = (_Editor as any)?.default ?? _Editor

if (typeof globalThis !== 'undefined') (globalThis as any).Prism = Prism
if (typeof window !== 'undefined') (window as any).Prism = Prism

let langsLoaded = false
const loadLangs = import('prismjs/components/prism-c').then(() => { langsLoaded = true })

export default function PracticeEditor({ value, onChange, disabled, fontSize = 15 }) {
  const [ready, setReady] = useState(langsLoaded)

  useEffect(() => {
    if (!langsLoaded) {
      loadLangs.then(() => setReady(true))
    }
  }, [])

  const grammar = Prism.languages.c

  return (
    <div className="code-editor-wrapper">
      <Editor
        value={value}
        onValueChange={onChange}
        highlight={(code) => grammar ? Prism.highlight(code, grammar, 'c') : code}
        padding={16}
        disabled={disabled}
        style={{
          fontFamily: '"JetBrains Mono", "Fira Code", "Consolas", monospace',
          fontSize,
          lineHeight: 1.7,
          minHeight: 120
        }}
        textareaClassName="code-editor-textarea"
        preClassName="code-editor-pre"
      />
    </div>
  )
}
