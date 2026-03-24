import { useState, useEffect, useCallback } from 'react'
import { useProgress } from '../contexts/ProgressContext'
import { useAuth } from '../contexts/AuthContext'
import { useLanguage } from '../contexts/LanguageContext'

function shuffleOptions(options, correctIdx, optionsEn) {
  const indices = options.map((_, i) => i)
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }
  return {
    options: indices.map(i => options[i]),
    optionsEn: optionsEn ? indices.map(i => optionsEn[i]) : null,
    correct: indices.indexOf(correctIdx)
  }
}

function createShuffledQuestions(questions) {
  return questions.map(q => {
    const shuffled = shuffleOptions(q.options, q.correct, q.optionsEn)
    return { ...q, options: shuffled.options, optionsEn: shuffled.optionsEn, correct: shuffled.correct }
  })
}

export default function QuizComponent({ quiz, quizId, onComplete }) {
  const [shuffledQuestions, setShuffledQuestions] = useState(() => createShuffledQuestions(quiz.questions))
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [answers, setAnswers] = useState([])
  const [timeLeft, setTimeLeft] = useState(quiz.timeLimit)
  const [finished, setFinished] = useState(false)
  const { saveQuizScore } = useProgress()
  const { requireAuth } = useAuth()
  const { t, lang } = useLanguage()

  const questions = shuffledQuestions

  const finishQuiz = useCallback((finalAnswers) => {
    const correct = finalAnswers.filter((a, i) => a === questions[i].correct).length
    const score = Math.round((correct / questions.length) * 100)
    saveQuizScore(quizId, score)
    setFinished(true)
    if (onComplete) onComplete(score)
  }, [questions, quizId, saveQuizScore, onComplete])

  useEffect(() => {
    if (finished || showResult) return
    if (timeLeft <= 0) {
      const finalAnswers = [...answers]
      while (finalAnswers.length < questions.length) finalAnswers.push(-1)
      finishQuiz(finalAnswers)
      return
    }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000)
    return () => clearInterval(timer)
  }, [timeLeft, finished, showResult, answers, questions.length, finishQuiz])

  const handleSelect = (optionIdx) => { if (!showResult) setSelected(optionIdx) }
  const handleSubmit = () => { if (selected !== null) setShowResult(true) }

  const handleNext = () => {
    const newAnswers = [...answers, selected]
    setAnswers(newAnswers)
    if (currentQ + 1 >= questions.length) {
      finishQuiz(newAnswers)
    } else {
      setCurrentQ(currentQ + 1)
      setSelected(null)
      setShowResult(false)
    }
  }

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  if (finished) {
    const correct = answers.filter((a, i) => a === questions[i]?.correct).length
    const score = Math.round((correct / questions.length) * 100)
    const passed = score >= quiz.passingScore

    return (
      <div className="quiz-result">
        <div className={`quiz-score-circle ${passed ? 'passed' : 'failed'}`}>
          <span className="score-number">{score}</span>
          <span className="score-label">{lang === 'en' ? 'pts' : '점'}</span>
        </div>
        <h2 className="quiz-result-title">{passed ? t('quiz.congratsPass') : t('quiz.tryAgainMsg')}</h2>
        <p className="quiz-result-detail">
          {lang === 'en'
            ? `${correct} of ${questions.length} correct (passing: ${quiz.passingScore}pts)`
            : `${questions.length}문제 중 ${correct}문제 정답 (합격 기준: ${quiz.passingScore}점)`}
        </p>
        <div className="quiz-answers-review">
          {questions.map((q, i) => (
            <div key={i} className={`review-item ${answers[i] === q.correct ? 'correct' : 'wrong'}`}>
              <span className="review-num">Q{i + 1}</span>
              <span className="review-status">
                {answers[i] === q.correct ? <i className="fa-solid fa-check" /> : <i className="fa-solid fa-xmark" />}
              </span>
            </div>
          ))}
        </div>
        <button className="btn btn-primary" onClick={() => {
          setShuffledQuestions(createShuffledQuestions(quiz.questions))
          setCurrentQ(0); setSelected(null); setShowResult(false)
          setAnswers([]); setTimeLeft(quiz.timeLimit); setFinished(false)
        }}>{t('quiz.retryButton')}</button>
      </div>
    )
  }

  const q = questions[currentQ]

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-progress">
          <span>{currentQ + 1} / {questions.length}</span>
          <div className="quiz-progress-bar">
            <div className="quiz-progress-fill" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
          </div>
        </div>
        <div className={`quiz-timer ${timeLeft < 60 ? 'warning' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          {formatTime(timeLeft)}
        </div>
      </div>
      <div className="quiz-question">
        <h3 className="question-text">{lang === 'en' && q.questionEn ? q.questionEn : q.question}</h3>
        {q.code && <pre className="question-code"><code>{q.code}</code></pre>}
      </div>
      <div className="quiz-options">
        {(lang === 'en' && q.optionsEn ? q.optionsEn : q.options).map((opt, i) => (
          <button key={i} className={`quiz-option${selected === i ? ' selected' : ''}${showResult && i === q.correct ? ' correct' : ''}${showResult && selected === i && i !== q.correct ? ' wrong' : ''}`}
            onClick={() => handleSelect(i)} disabled={showResult}>
            <span className="option-letter">{String.fromCharCode(65 + i)}</span>
            <span className="option-text">{opt}</span>
            {showResult && i === q.correct && (
              <svg className="option-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
            )}
            {showResult && selected === i && i !== q.correct && (
              <svg className="option-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--error)" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            )}
          </button>
        ))}
      </div>
      {showResult && q.explanation && (
        <div className="quiz-explanation">
          <strong>{t('quiz.explanationLabel')}</strong> {lang === 'en' && q.explanationEn ? q.explanationEn : q.explanation}
        </div>
      )}
      <div className="quiz-actions">
        {!showResult ? (
          <button className="btn btn-primary" onClick={() => requireAuth(handleSubmit)} disabled={selected === null}>{t('quiz.submit')}</button>
        ) : (
          <button className="btn btn-primary" onClick={handleNext}>
            {currentQ + 1 >= questions.length ? t('quiz.viewResult') : t('quiz.nextQuestion')}
          </button>
        )}
      </div>
    </div>
  )
}
