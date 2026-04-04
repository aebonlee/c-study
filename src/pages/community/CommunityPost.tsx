import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { useAuth } from '../../contexts/AuthContext'
import useCommunity from '../../hooks/useCommunity'

const CATEGORY_CONFIG = {
  question: { icon: 'fa-solid fa-circle-question', labelKo: '질문', labelEn: 'Question', color: '#4FC3F7' },
  discussion: { icon: 'fa-solid fa-comments', labelKo: '토론', labelEn: 'Discussion', color: '#66BB6A' },
  showcase: { icon: 'fa-solid fa-star', labelKo: '작품', labelEn: 'Showcase', color: '#FFA726' },
  tip: { icon: 'fa-solid fa-lightbulb', labelKo: '팁', labelEn: 'Tip', color: '#AB47BC' },
}

export default function CommunityPost() {
  const { postId } = useParams()
  const { lang } = useLanguage()
  const { user, requireAuth } = useAuth()
  const navigate = useNavigate()
  const { fetchPost, fetchComments, createComment, toggleLike, deletePost } = useCommunity()

  const [post, setPost] = useState<any>(null)
  const [comments, setComments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [commentText, setCommentText] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    loadPost()
  }, [postId]) // eslint-disable-line react-hooks/exhaustive-deps

  const loadPost = async () => {
    setLoading(true)
    try {
      await fetchPost(postId)
      await fetchComments(postId)
    } catch (err) {
      console.error('Failed to load post:', err)
    }
    setLoading(false)
  }

  const handleLike = () => {
    requireAuth(async () => {
      try {
        await toggleLike(postId)
        setLiked(true)
        setPost(prev => prev ? { ...prev, likes: (prev.likes || 0) + 1 } : prev)
      } catch (err) {
        console.error('Failed to like post:', err)
      }
    })
  }

  const handleSubmitComment = (e) => {
    e.preventDefault()
    if (!commentText.trim()) return

    requireAuth(async () => {
      setSubmitting(true)
      try {
        const newComment = await createComment(postId, commentText.trim())
        if (newComment) {
          setComments(prev => [...prev, newComment])
          setCommentText('')
        }
      } catch (err) {
        console.error('Failed to add comment:', err)
      }
      setSubmitting(false)
    })
  }

  const handleDelete = () => {
    if (!window.confirm(lang === 'en' ? 'Are you sure you want to delete this post?' : '이 게시글을 삭제하시겠습니까?')) return
    requireAuth(async () => {
      try {
        await deletePost(postId)
        navigate('/community')
      } catch (err) {
        console.error('Failed to delete post:', err)
      }
    })
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return ''
    return new Date(dateStr).toLocaleString()
  }

  const isAuthor = user && post && (user.id === post.user_id || user.email === post.author_email)

  if (loading) {
    return (
      <div className="community-post-page">
        <div className="community-loading">
          <div className="loading-spinner" />
          <p>{lang === 'en' ? 'Loading post...' : '게시글 불러오는 중...'}</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="community-post-page">
        <div className="post-not-found">
          <i className="fa-solid fa-exclamation-triangle" />
          <h2>{lang === 'en' ? 'Post not found' : '게시글을 찾을 수 없습니다'}</h2>
          <Link to="/community" className="back-btn">
            <i className="fa-solid fa-arrow-left" />
            {lang === 'en' ? 'Back to Community' : '커뮤니티로 돌아가기'}
          </Link>
        </div>
      </div>
    )
  }

  const catConfig = CATEGORY_CONFIG[post.category] || CATEGORY_CONFIG.discussion

  return (
    <div className="community-post-page">
      {/* Back Navigation */}
      <div className="post-back-nav">
        <Link to="/community">
          <i className="fa-solid fa-arrow-left" />
          {lang === 'en' ? 'Back to Community' : '커뮤니티로 돌아가기'}
        </Link>
      </div>

      {/* Post Content */}
      <article className="post-article">
        <div className="post-article-header">
          <span className="post-category-badge" style={{ background: `${catConfig.color}15`, color: catConfig.color }}>
            <i className={catConfig.icon} />
            {lang === 'en' ? catConfig.labelEn : catConfig.labelKo}
          </span>
          <h1>{post.title}</h1>
          <div className="post-article-meta">
            <div className="post-author-info">
              <div className="post-author-avatar">
                {post.author_avatar ? (
                  <img src={post.author_avatar} alt="" />
                ) : (
                  <i className="fa-solid fa-user" />
                )}
              </div>
              <div>
                <span className="post-author-name">{post.author_name || post.author_email || 'Anonymous'}</span>
                <span className="post-date">{formatDate(post.created_at)}</span>
              </div>
            </div>
            <div className="post-article-stats">
              <span><i className="fa-regular fa-eye" /> {post.views || 0}</span>
              <span><i className="fa-regular fa-heart" /> {post.likes || 0}</span>
              <span><i className="fa-regular fa-comment" /> {comments.length}</span>
            </div>
          </div>
        </div>

        <div className="post-article-body">
          {post.content?.split('\n').map((line, i) => (
            <p key={i}>{line || '\u00A0'}</p>
          ))}
          {post.code && (
            <pre className="post-code-block">
              <code>{post.code}</code>
            </pre>
          )}
        </div>

        <div className="post-article-actions">
          <button className={`post-like-btn ${liked ? 'liked' : ''}`} onClick={handleLike} disabled={liked}>
            <i className={liked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'} />
            {post.likes || 0}
          </button>
          {isAuthor && (
            <button className="post-delete-btn" onClick={handleDelete}>
              <i className="fa-solid fa-trash" />
              {lang === 'en' ? 'Delete' : '삭제'}
            </button>
          )}
        </div>
      </article>

      {/* Comments Section */}
      <section className="post-comments-section">
        <h2>
          <i className="fa-solid fa-comments" />
          {lang === 'en' ? 'Comments' : '댓글'} ({comments.length})
        </h2>

        {/* Comment Form */}
        <form className="comment-form" onSubmit={handleSubmitComment}>
          <textarea
            className="comment-input"
            placeholder={lang === 'en' ? 'Write a comment...' : '댓글을 작성하세요...'}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            rows={3}
          />
          <button className="comment-submit-btn" type="submit" disabled={submitting || !commentText.trim()}>
            {submitting ? (
              <><div className="loading-spinner-small" /> {lang === 'en' ? 'Posting...' : '등록 중...'}</>
            ) : (
              <><i className="fa-solid fa-paper-plane" /> {lang === 'en' ? 'Post Comment' : '댓글 등록'}</>
            )}
          </button>
        </form>

        {/* Comments List */}
        <div className="comments-list">
          {comments.map((comment, index) => (
            <div key={comment.id || index} className="comment-card">
              <div className="comment-avatar">
                {comment.author_avatar ? (
                  <img src={comment.author_avatar} alt="" />
                ) : (
                  <i className="fa-solid fa-user" />
                )}
              </div>
              <div className="comment-content">
                <div className="comment-header">
                  <span className="comment-author">{comment.author_name || 'Anonymous'}</span>
                  <span className="comment-date">{formatDate(comment.created_at)}</span>
                </div>
                <p className="comment-text">{comment.content}</p>
              </div>
            </div>
          ))}

          {comments.length === 0 && (
            <div className="no-comments">
              <i className="fa-regular fa-comment" />
              <p>{lang === 'en' ? 'No comments yet. Be the first!' : '아직 댓글이 없습니다. 첫 번째로 댓글을 달아보세요!'}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
