import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { useAuth } from '../../contexts/AuthContext'
import useCommunity from '../../hooks/useCommunity'

const CATEGORIES = [
  { value: 'qa', icon: 'fa-solid fa-circle-question', labelKo: '질문답변', labelEn: 'Q&A', color: '#4FC3F7' },
  { value: 'free', icon: 'fa-solid fa-comments', labelKo: '자유게시판', labelEn: 'Free Board', color: '#66BB6A' },
  { value: 'code', icon: 'fa-solid fa-code', labelKo: '코드공유', labelEn: 'Code Share', color: '#FFA726' },
  { value: 'review', icon: 'fa-solid fa-magnifying-glass-chart', labelKo: '코드리뷰', labelEn: 'Code Review', color: '#AB47BC' },
]

export default function CommunityWrite() {
  const navigate = useNavigate()
  const { lang } = useLanguage()
  const { user } = useAuth()
  const { createPost } = useCommunity()

  const [form, setForm] = useState({
    category: 'free',
    title: '',
    content: '',
    tags: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (!user) {
    return (
      <div className="community-write-page">
        <div className="container">
          <div className="auth-required">
            <i className="fa-solid fa-lock" />
            <h2>{lang === 'en' ? 'Login Required' : '로그인이 필요합니다'}</h2>
            <p>{lang === 'en' ? 'Please log in to write a post.' : '게시글을 작성하려면 먼저 로그인해주세요.'}</p>
            <button className="btn-back" onClick={() => navigate('/community')}>
              <i className="fa-solid fa-arrow-left" />
              {lang === 'en' ? 'Back to Community' : '커뮤니티로 돌아가기'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleCategorySelect = (category) => {
    setForm(prev => ({ ...prev, category }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!form.title.trim()) {
      setError(lang === 'en' ? 'Please enter a title.' : '제목을 입력해주세요.')
      return
    }
    if (!form.content.trim()) {
      setError(lang === 'en' ? 'Please enter content.' : '내용을 입력해주세요.')
      return
    }

    setLoading(true)
    try {
      const tags = form.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(Boolean)

      const result = await createPost({
        category: form.category,
        title: form.title.trim(),
        content: form.content.trim(),
        tags
      })

      if (result) {
        navigate('/community')
      } else {
        setError(lang === 'en' ? 'Failed to create post. Please try again.' : '게시글 작성에 실패했습니다. 다시 시도해주세요.')
      }
    } catch (err) {
      console.error(err)
      setError(lang === 'en' ? 'An error occurred. Please try again.' : '오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="community-write-page">
      {/* Header */}
      <section className="community-write-header">
        <div className="community-write-header-content">
          <h1>
            <i className="fa-solid fa-pen-to-square" />
            {lang === 'en' ? 'New Post' : '새 글 작성'}
          </h1>
          <p>{lang === 'en' ? 'Share your questions, thoughts, or code with the community.' : '질문, 생각, 코드를 커뮤니티와 공유하세요.'}</p>
        </div>
      </section>

      {/* Form */}
      <section className="community-write-form-section">
        <form className="community-write-form" onSubmit={handleSubmit}>
          {/* Category Selector */}
          <div className="form-group">
            <label className="form-label">
              <i className="fa-solid fa-folder" />
              {lang === 'en' ? 'Category' : '카테고리'}
            </label>
            <div className="category-selector">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.value}
                  type="button"
                  className={`category-option ${form.category === cat.value ? 'active' : ''}`}
                  style={form.category === cat.value ? { borderColor: cat.color, color: cat.color, background: `${cat.color}15` } : {}}
                  onClick={() => handleCategorySelect(cat.value)}
                >
                  <i className={cat.icon} />
                  {lang === 'en' ? cat.labelEn : cat.labelKo}
                </button>
              ))}
            </div>
          </div>

          {/* Title Input */}
          <div className="form-group">
            <label className="form-label" htmlFor="write-title">
              <i className="fa-solid fa-heading" />
              {lang === 'en' ? 'Title' : '제목'}
            </label>
            <input
              id="write-title"
              type="text"
              name="title"
              className="form-input"
              placeholder={lang === 'en' ? 'Enter a descriptive title...' : '제목을 입력하세요...'}
              value={form.title}
              onChange={handleChange}
              maxLength={200}
              autoFocus
            />
          </div>

          {/* Content Textarea */}
          <div className="form-group">
            <label className="form-label" htmlFor="write-content">
              <i className="fa-solid fa-align-left" />
              {lang === 'en' ? 'Content' : '내용'}
            </label>
            <textarea
              id="write-content"
              name="content"
              className="form-textarea"
              placeholder={lang === 'en'
                ? 'Write your post here...\n\nTip: You can use Markdown syntax for formatting.'
                : '내용을 입력하세요...\n\n팁: 마크다운 문법을 사용할 수 있습니다.'}
              value={form.content}
              onChange={handleChange}
              rows={14}
            />
          </div>

          {/* Tags Input */}
          <div className="form-group">
            <label className="form-label" htmlFor="write-tags">
              <i className="fa-solid fa-tags" />
              {lang === 'en' ? 'Tags' : '태그'}
            </label>
            <input
              id="write-tags"
              type="text"
              name="tags"
              className="form-input"
              placeholder={lang === 'en' ? 'e.g. pointer, array, struct (comma separated)' : '예: 포인터, 배열, 구조체 (쉼표로 구분)'}
              value={form.tags}
              onChange={handleChange}
            />
            <span className="form-hint">
              {lang === 'en' ? 'Separate tags with commas' : '쉼표(,)로 태그를 구분해주세요'}
            </span>
          </div>

          {/* Error Message */}
          {error && (
            <div className="form-error">
              <i className="fa-solid fa-circle-exclamation" />
              {error}
            </div>
          )}

          {/* Action Buttons */}
          <div className="form-actions">
            <button
              type="button"
              className="btn-cancel"
              onClick={() => navigate('/community')}
              disabled={loading}
            >
              <i className="fa-solid fa-xmark" />
              {lang === 'en' ? 'Cancel' : '취소'}
            </button>
            <button
              type="submit"
              className="btn-submit"
              disabled={loading || !form.title.trim() || !form.content.trim()}
            >
              {loading ? (
                <>
                  <div className="loading-spinner-small" />
                  {lang === 'en' ? 'Posting...' : '등록 중...'}
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane" />
                  {lang === 'en' ? 'Post' : '등록'}
                </>
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
