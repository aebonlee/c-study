-- ========================================
-- CMaster Supabase Setup Script
-- 테이블 접두사: cmaster_
-- ========================================

-- 1. 사용자 테이블
CREATE TABLE IF NOT EXISTS cmaster_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  name TEXT,
  avatar_url TEXT,
  provider TEXT,
  role TEXT DEFAULT 'student' CHECK (role IN ('student', 'teacher', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. 학습 진행 데이터
CREATE TABLE IF NOT EXISTS cmaster_user_progress (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  completed_lessons JSONB DEFAULT '[]'::JSONB,
  code_runs INTEGER DEFAULT 0,
  streak_count INTEGER DEFAULT 0,
  streak_last_date DATE,
  earned_badges JSONB DEFAULT '[]'::JSONB,
  quiz_data JSONB DEFAULT '{}'::JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. 퀴즈 점수
CREATE TABLE IF NOT EXISTS cmaster_quiz_scores (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  quiz_id TEXT NOT NULL,
  score INTEGER DEFAULT 0,
  max_score INTEGER DEFAULT 100,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, quiz_id)
);

-- 4. 커뮤니티 게시글
CREATE TABLE IF NOT EXISTS cmaster_community_posts (
  id BIGSERIAL PRIMARY KEY,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT,
  author_avatar TEXT,
  category TEXT DEFAULT 'free' CHECK (category IN ('qa', 'free', 'code', 'review')),
  title TEXT NOT NULL,
  content TEXT,
  tags JSONB DEFAULT '[]'::JSONB,
  view_count INTEGER DEFAULT 0,
  like_count INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  is_solved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. 커뮤니티 댓글
CREATE TABLE IF NOT EXISTS cmaster_community_comments (
  id BIGSERIAL PRIMARY KEY,
  post_id BIGINT REFERENCES cmaster_community_posts(id) ON DELETE CASCADE,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT,
  author_avatar TEXT,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. 커뮤니티 좋아요
CREATE TABLE IF NOT EXISTS cmaster_community_likes (
  id BIGSERIAL PRIMARY KEY,
  post_id BIGINT REFERENCES cmaster_community_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(post_id, user_id)
);

-- 7. 반 (교사용)
CREATE TABLE IF NOT EXISTS cmaster_classes (
  id BIGSERIAL PRIMARY KEY,
  teacher_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  code TEXT UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. 반 멤버
CREATE TABLE IF NOT EXISTS cmaster_class_members (
  id BIGSERIAL PRIMARY KEY,
  class_id BIGINT REFERENCES cmaster_classes(id) ON DELETE CASCADE,
  student_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(class_id, student_id)
);

-- ========================================
-- RPC 함수
-- ========================================

-- 조회수 증가 함수
CREATE OR REPLACE FUNCTION cmaster_increment_view_count(p_post_id BIGINT)
RETURNS VOID AS $$
BEGIN
  UPDATE cmaster_community_posts
  SET view_count = view_count + 1
  WHERE id = p_post_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ========================================
-- RLS (Row Level Security) 정책
-- ========================================

-- Users 테이블
ALTER TABLE cmaster_users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view all users" ON cmaster_users FOR SELECT USING (true);
CREATE POLICY "Users can update own record" ON cmaster_users FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own record" ON cmaster_users FOR INSERT WITH CHECK (auth.uid() = id);

-- User Progress 테이블
ALTER TABLE cmaster_user_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own progress" ON cmaster_user_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own progress" ON cmaster_user_progress FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own progress" ON cmaster_user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Quiz Scores 테이블
ALTER TABLE cmaster_quiz_scores ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own scores" ON cmaster_quiz_scores FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own scores" ON cmaster_quiz_scores FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own scores" ON cmaster_quiz_scores FOR UPDATE USING (auth.uid() = user_id);

-- Community Posts 테이블
ALTER TABLE cmaster_community_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view posts" ON cmaster_community_posts FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create posts" ON cmaster_community_posts FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Authors can update own posts" ON cmaster_community_posts FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "Authors can delete own posts" ON cmaster_community_posts FOR DELETE USING (auth.uid() = author_id);

-- Community Comments 테이블
ALTER TABLE cmaster_community_comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view comments" ON cmaster_community_comments FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create comments" ON cmaster_community_comments FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Authors can delete own comments" ON cmaster_community_comments FOR DELETE USING (auth.uid() = author_id);

-- Community Likes 테이블
ALTER TABLE cmaster_community_likes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view likes" ON cmaster_community_likes FOR SELECT USING (true);
CREATE POLICY "Authenticated users can toggle likes" ON cmaster_community_likes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can remove own likes" ON cmaster_community_likes FOR DELETE USING (auth.uid() = user_id);

-- Classes 테이블
ALTER TABLE cmaster_classes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view classes" ON cmaster_classes FOR SELECT USING (true);
CREATE POLICY "Teachers can create classes" ON cmaster_classes FOR INSERT WITH CHECK (auth.uid() = teacher_id);
CREATE POLICY "Teachers can update own classes" ON cmaster_classes FOR UPDATE USING (auth.uid() = teacher_id);

-- Class Members 테이블
ALTER TABLE cmaster_class_members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view members" ON cmaster_class_members FOR SELECT USING (true);
CREATE POLICY "Users can join classes" ON cmaster_class_members FOR INSERT WITH CHECK (auth.uid() = student_id);

-- ========================================
-- 인덱스
-- ========================================
CREATE INDEX IF NOT EXISTS idx_cmaster_posts_category ON cmaster_community_posts(category);
CREATE INDEX IF NOT EXISTS idx_cmaster_posts_created ON cmaster_community_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_cmaster_comments_post ON cmaster_community_comments(post_id);
CREATE INDEX IF NOT EXISTS idx_cmaster_likes_post ON cmaster_community_likes(post_id);
CREATE INDEX IF NOT EXISTS idx_cmaster_progress_user ON cmaster_user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_cmaster_quiz_user ON cmaster_quiz_scores(user_id);
