import { useState, useEffect, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { useAuth } from '../../contexts/AuthContext'
import useCommunity from '../../hooks/useCommunity'

const CATEGORIES = ['all', 'question', 'discussion', 'showcase', 'tip']

const CATEGORY_CONFIG = {
  all: { icon: 'fa-solid fa-list', labelKo: '전체', labelEn: 'All' },
  question: { icon: 'fa-solid fa-circle-question', labelKo: '질문', labelEn: 'Question', color: '#4FC3F7' },
  discussion: { icon: 'fa-solid fa-comments', labelKo: '토론', labelEn: 'Discussion', color: '#66BB6A' },
  showcase: { icon: 'fa-solid fa-star', labelKo: '작품', labelEn: 'Showcase', color: '#FFA726' },
  tip: { icon: 'fa-solid fa-lightbulb', labelKo: '팁', labelEn: 'Tip', color: '#AB47BC' },
}

export default function Community() {
  const { lang } = useLanguage()
  const { user, requireAuth } = useAuth()
  const navigate = useNavigate()
  const { posts, loading, fetchPosts } = useCommunity()

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('latest')

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const filteredPosts = useMemo(() => {
    let filtered = posts || []

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(p =>
        p.title?.toLowerCase().includes(query) ||
        p.content?.toLowerCase().includes(query)
      )
    }

    if (sortBy === 'latest') {
      filtered = [...filtered].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    } else if (sortBy === 'popular') {
      filtered = [...filtered].sort((a, b) => (b.likes || 0) - (a.likes || 0))
    } else if (sortBy === 'comments') {
      filtered = [...filtered].sort((a, b) => (b.comment_count || 0) - (a.comment_count || 0))
    }

    return filtered
  }, [posts, selectedCategory, searchQuery, sortBy])

  const handleWrite = () => {
    requireAuth(() => navigate('/community/write'))
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return lang === 'en' ? 'just now' : '방금 전'
    if (minutes < 60) return `${minutes}${lang === 'en' ? 'm ago' : '분 전'}`
    if (hours < 24) return `${hours}${lang === 'en' ? 'h ago' : '시간 전'}`
    if (days < 7) return `${days}${lang === 'en' ? 'd ago' : '일 전'}`
    return date.toLocaleDateString()
  }

  return (
    <div className="community-page">
      {/* Header */}
      <section className="community-header">
        <div className="community-header-content">
          <h1>
            <i className="fa-solid fa-users" />
            {lang === 'en' ? 'Community' : '커뮤니티'}
          </h1>
          <p>{lang === 'en' ? 'Ask questions, share knowledge, and connect with other learners.' : '질문하고, 지식을 공유하고, 다른 학습자들과 소통하세요.'}</p>
        </div>
        <button className="community-write-btn" onClick={handleWrite}>
          <i className="fa-solid fa-pen-to-square" />
          {lang === 'en' ? 'New Post' : '글쓰기'}
        </button>
      </section>

      {/* Filters */}
      <section className="community-filters">
        <div className="category-tabs">
          {CATEGORIES.map(cat => {
            const config = CATEGORY_CONFIG[cat]
            return (
              <button
                key={cat}
                className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
                style={selectedCategory === cat && config.color ? { borderColor: config.color, color: config.color } : {}}
              >
                <i className={config.icon} />
                {lang === 'en' ? config.labelEn : config.labelKo}
              </button>
            )
          })}
        </div>

        <div className="community-controls">
          <div className="community-search">
            <i className="fa-solid fa-search" />
            <input
              type="text"
              placeholder={lang === 'en' ? 'Search posts...' : '글 검색...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select className="community-sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="latest">{lang === 'en' ? 'Latest' : '최신순'}</option>
            <option value="popular">{lang === 'en' ? 'Popular' : '인기순'}</option>
            <option value="comments">{lang === 'en' ? 'Most Comments' : '댓글순'}</option>
          </select>
        </div>
      </section>

      {/* Posts List */}
      <section className="community-posts">
        {loading ? (
          <div className="community-loading">
            <div className="loading-spinner" />
            <p>{lang === 'en' ? 'Loading posts...' : '게시글 불러오는 중...'}</p>
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="posts-list">
            {filteredPosts.map(post => {
              const catConfig = CATEGORY_CONFIG[post.category] || CATEGORY_CONFIG.discussion
              return (
                <Link to={`/community/${post.id}`} key={post.id} className="post-card">
                  <div className="post-card-left">
                    <span className="post-category-badge" style={{ background: `${catConfig.color}15`, color: catConfig.color }}>
                      <i className={catConfig.icon} />
                      {lang === 'en' ? catConfig.labelEn : catConfig.labelKo}
                    </span>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.content?.substring(0, 120)}...</p>
                    <div className="post-meta">
                      <span className="post-author">
                        <i className="fa-solid fa-user" />
                        {post.author_name || post.author_email || 'Anonymous'}
                      </span>
                      <span className="post-date">
                        <i className="fa-regular fa-clock" />
                        {formatDate(post.created_at)}
                      </span>
                    </div>
                  </div>
                  <div className="post-card-right">
                    <div className="post-stat">
                      <i className="fa-regular fa-heart" />
                      <span>{post.likes || 0}</span>
                    </div>
                    <div className="post-stat">
                      <i className="fa-regular fa-comment" />
                      <span>{post.comment_count || 0}</span>
                    </div>
                    <div className="post-stat">
                      <i className="fa-regular fa-eye" />
                      <span>{post.views || 0}</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="community-empty">
            <i className="fa-solid fa-message" />
            <h3>{lang === 'en' ? 'No posts yet' : '아직 게시글이 없습니다'}</h3>
            <p>{lang === 'en' ? 'Be the first to start a discussion!' : '첫 번째 토론을 시작해보세요!'}</p>
            <button className="community-write-btn" onClick={handleWrite}>
              <i className="fa-solid fa-pen-to-square" />
              {lang === 'en' ? 'Write a Post' : '글쓰기'}
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
