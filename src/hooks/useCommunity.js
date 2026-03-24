import { useState, useCallback } from 'react'
import { supabase, isSupabaseEnabled, TABLES } from '../config/supabase'

const POSTS_PER_PAGE = 12

export default function useCommunity() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchPosts = useCallback(async ({ category, search, tag, page = 1, sortBy = 'latest' } = {}) => {
    if (!isSupabaseEnabled()) return
    setLoading(true)
    setError(null)
    try {
      let query = supabase
        .from(TABLES.COMMUNITY_POSTS)
        .select('*', { count: 'exact' })

      if (category && category !== 'all') query = query.eq('category', category)
      if (search) query = query.or(`title.ilike.%${search}%,content.ilike.%${search}%`)
      if (tag) query = query.contains('tags', [tag])

      if (sortBy === 'popular') query = query.order('like_count', { ascending: false })
      else if (sortBy === 'views') query = query.order('view_count', { ascending: false })
      else query = query.order('created_at', { ascending: false })

      const from = (page - 1) * POSTS_PER_PAGE
      const to = from + POSTS_PER_PAGE - 1
      query = query.range(from, to)

      const { data, error: fetchError, count } = await query
      if (fetchError) throw fetchError
      setPosts(data || [])
      setTotalCount(count || 0)
    } catch (err) {
      setError(err.message)
      setPosts([])
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchPost = useCallback(async (postId) => {
    if (!isSupabaseEnabled()) return
    setLoading(true)
    setError(null)
    try {
      const { data, error: fetchError } = await supabase
        .from(TABLES.COMMUNITY_POSTS)
        .select('*')
        .eq('id', postId)
        .single()

      if (fetchError) throw fetchError
      setPost(data)
      supabase.rpc('cmaster_increment_view_count', { p_post_id: postId }).catch(() => {})
    } catch (err) {
      setError(err.message)
      setPost(null)
    } finally {
      setLoading(false)
    }
  }, [])

  const createPost = useCallback(async ({ category, title, content, tags }) => {
    if (!isSupabaseEnabled()) return null
    setError(null)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('로그인이 필요합니다')

      const authorName = user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0]
      const authorAvatar = user.user_metadata?.avatar_url || user.user_metadata?.picture || ''

      const { data, error: insertError } = await supabase
        .from(TABLES.COMMUNITY_POSTS)
        .insert({ author_id: user.id, author_name: authorName, author_avatar: authorAvatar, category, title, content, tags: tags || [] })
        .select()
        .single()

      if (insertError) throw insertError
      return data
    } catch (err) {
      setError(err.message)
      return null
    }
  }, [])

  const updatePost = useCallback(async (postId, updates) => {
    if (!isSupabaseEnabled()) return null
    setError(null)
    try {
      const { data, error: updateError } = await supabase.from(TABLES.COMMUNITY_POSTS).update(updates).eq('id', postId).select().single()
      if (updateError) throw updateError
      return data
    } catch (err) { setError(err.message); return null }
  }, [])

  const deletePost = useCallback(async (postId) => {
    if (!isSupabaseEnabled()) return false
    setError(null)
    try {
      const { error: deleteError } = await supabase.from(TABLES.COMMUNITY_POSTS).delete().eq('id', postId)
      if (deleteError) throw deleteError
      return true
    } catch (err) { setError(err.message); return false }
  }, [])

  const toggleSolved = useCallback(async (postId, isSolved) => {
    if (!isSupabaseEnabled()) return false
    setError(null)
    try {
      const { error: updateError } = await supabase.from(TABLES.COMMUNITY_POSTS).update({ is_solved: isSolved }).eq('id', postId)
      if (updateError) throw updateError
      setPost(prev => prev ? { ...prev, is_solved: isSolved } : prev)
      return true
    } catch (err) { setError(err.message); return false }
  }, [])

  const fetchComments = useCallback(async (postId) => {
    if (!isSupabaseEnabled()) return
    try {
      const { data, error: fetchError } = await supabase.from(TABLES.COMMUNITY_COMMENTS).select('*').eq('post_id', postId).order('created_at', { ascending: true })
      if (fetchError) throw fetchError
      setComments(data || [])
    } catch (err) { setError(err.message); setComments([]) }
  }, [])

  const createComment = useCallback(async (postId, content) => {
    if (!isSupabaseEnabled()) return null
    setError(null)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('로그인이 필요합니다')

      const authorName = user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0]
      const authorAvatar = user.user_metadata?.avatar_url || user.user_metadata?.picture || ''

      const { data, error: insertError } = await supabase.from(TABLES.COMMUNITY_COMMENTS)
        .insert({ post_id: postId, author_id: user.id, author_name: authorName, author_avatar: authorAvatar, content })
        .select().single()

      if (insertError) throw insertError
      setComments(prev => [...prev, data])
      setPost(prev => prev ? { ...prev, comment_count: (prev.comment_count || 0) + 1 } : prev)
      return data
    } catch (err) { setError(err.message); return null }
  }, [])

  const deleteComment = useCallback(async (commentId) => {
    if (!isSupabaseEnabled()) return false
    setError(null)
    try {
      const { error: deleteError } = await supabase.from(TABLES.COMMUNITY_COMMENTS).delete().eq('id', commentId)
      if (deleteError) throw deleteError
      setComments(prev => prev.filter(c => c.id !== commentId))
      setPost(prev => prev ? { ...prev, comment_count: Math.max((prev.comment_count || 1) - 1, 0) } : prev)
      return true
    } catch (err) { setError(err.message); return false }
  }, [])

  const toggleLike = useCallback(async (postId) => {
    if (!isSupabaseEnabled()) return null
    setError(null)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('로그인이 필요합니다')

      const { data: existing } = await supabase.from(TABLES.COMMUNITY_LIKES).select('id').eq('post_id', postId).eq('user_id', user.id).maybeSingle()

      if (existing) {
        await supabase.from(TABLES.COMMUNITY_LIKES).delete().eq('id', existing.id)
        setPost(prev => prev ? { ...prev, like_count: Math.max((prev.like_count || 1) - 1, 0) } : prev)
        return false
      } else {
        await supabase.from(TABLES.COMMUNITY_LIKES).insert({ post_id: postId, user_id: user.id })
        setPost(prev => prev ? { ...prev, like_count: (prev.like_count || 0) + 1 } : prev)
        return true
      }
    } catch (err) { setError(err.message); return null }
  }, [])

  const checkLiked = useCallback(async (postId) => {
    if (!isSupabaseEnabled()) return false
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return false
      const { data } = await supabase.from(TABLES.COMMUNITY_LIKES).select('id').eq('post_id', postId).eq('user_id', user.id).maybeSingle()
      return !!data
    } catch { return false }
  }, [])

  return {
    posts, post, comments, totalCount, loading, error,
    fetchPosts, fetchPost, createPost, updatePost, deletePost,
    toggleSolved, fetchComments, createComment, deleteComment,
    toggleLike, checkLiked,
  }
}
