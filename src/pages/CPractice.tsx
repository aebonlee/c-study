import { useState, useMemo } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useProgress } from '../contexts/ProgressContext'
import PracticeEditor from '../components/PracticeEditor'
import CodeEditor from '../components/CodeEditor'
import steps1to5 from '../data/practiceSteps1to5.js'
import steps6to10 from '../data/practiceSteps6to10.js'

const practiceSteps = [...steps1to5, ...steps6to10]

export default function CPractice() {
  const { t, lang } = useLanguage()
  const [selectedStep, setSelectedStep] = useState(1)
  const [selectedExample, setSelectedExample] = useState(0)

  const currentStepData = useMemo(() => {
    return practiceSteps.find(s => s.step === selectedStep) || practiceSteps[0]
  }, [selectedStep])

  const currentExample = currentStepData.examples[selectedExample]

  const handleStepChange = (step) => {
    setSelectedStep(step)
    setSelectedExample(0)
  }

  return (
    <div className="c-practice-page">
      {/* Header */}
      <section className="practice-header">
        <h1>
          <i className="fa-solid fa-dumbbell" />
          {t('practice.title')}
        </h1>
        <p className="practice-subtitle">{t('practice.subtitle')}</p>
      </section>

      {/* Step Selector */}
      <section className="practice-steps">
        <div className="steps-scroll">
          {practiceSteps.map((step) => (
            <button
              key={step.step}
              className={`step-btn ${selectedStep === step.step ? 'active' : ''}`}
              onClick={() => handleStepChange(step.step)}
            >
              <span className="step-number">{step.step}</span>
              <span className="step-title">{lang === 'en' ? step.titleEn : step.titleKo}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Practice Content */}
      <section className="practice-content">
        <div className="practice-content-header">
          <h2>
            <span className="step-badge">{t('practice.step')} {currentStepData.step}</span>
            {lang === 'en' ? currentStepData.titleEn : currentStepData.titleKo}
          </h2>
          <p>{lang === 'en' ? currentStepData.descEn : currentStepData.descKo}</p>
        </div>

        {/* Example Tabs */}
        <div className="example-tabs">
          {currentStepData.examples.map((ex, i) => (
            <button
              key={i}
              className={`example-tab ${selectedExample === i ? 'active' : ''}`}
              onClick={() => setSelectedExample(i)}
            >
              <i className="fa-solid fa-code" />
              {lang === 'en' ? ex.titleEn : ex.titleKo}
            </button>
          ))}
        </div>

        {/* Code Editor */}
        {currentExample && (
          <div className="practice-editor-section">
            <CodeEditor
              key={`practice-${selectedStep}-${selectedExample}`}
              initialCode={currentExample.code}
              expectedOutput={currentExample.expected}
              lessonId={`practice-${selectedStep}-${selectedExample}`}
            />
          </div>
        )}
      </section>

      {/* Navigation */}
      <section className="practice-nav">
        <button
          className="practice-nav-btn"
          disabled={selectedStep <= 1}
          onClick={() => handleStepChange(selectedStep - 1)}
        >
          <i className="fa-solid fa-arrow-left" />
          {t('practice.prevStep')}
        </button>

        <span className="practice-nav-info">
          {selectedStep} / {practiceSteps.length}
        </span>

        <button
          className="practice-nav-btn"
          disabled={selectedStep >= practiceSteps.length}
          onClick={() => handleStepChange(selectedStep + 1)}
        >
          {t('practice.nextStep')}
          <i className="fa-solid fa-arrow-right" />
        </button>
      </section>
    </div>
  )
}
