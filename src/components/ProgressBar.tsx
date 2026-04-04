export default function ProgressBar({ value = 0, max = 100, label = '', color = 'var(--primary)', showPercent = true, size = 'md' }) {
  const percent = max > 0 ? Math.round((value / max) * 100) : 0

  return (
    <div className={`progress-bar-wrapper progress-${size}`}>
      {label && <div className="progress-label">{label}</div>}
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percent}%`, background: color }}
        />
      </div>
      {showPercent && <span className="progress-percent">{percent}%</span>}
    </div>
  )
}
