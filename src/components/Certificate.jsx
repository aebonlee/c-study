import { useAuth } from '../contexts/AuthContext'

export default function Certificate({ level, completedDate }) {
  const { user } = useAuth()
  const userName = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split('@')[0] || 'Student'

  return (
    <div className="certificate">
      <div className="certificate-border">
        <h2>Certificate of Completion</h2>
        <p className="certificate-name">{userName}</p>
        <p>has successfully completed the</p>
        <h3>{level} Course</h3>
        <p className="certificate-date">{completedDate || new Date().toLocaleDateString()}</p>
        <p className="certificate-brand">C Programming Tutorial</p>
      </div>
    </div>
  )
}
