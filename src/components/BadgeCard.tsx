import { useBadge } from '../contexts/BadgeContext'
import { useLanguage } from '../contexts/LanguageContext'

export default function BadgeCard({ badge }) {
  const { earnedBadges } = useBadge()
  const { localizedField } = useLanguage()
  const isEarned = earnedBadges.includes(badge.id)

  const tierColors = {
    bronze: { glow: 'rgba(205, 127, 50, 0.3)' },
    silver: { glow: 'rgba(192, 192, 192, 0.3)' },
    gold: { glow: 'rgba(255, 215, 0, 0.3)' },
    platinum: { glow: 'rgba(79, 195, 247, 0.3)' }
  }

  const tier = tierColors[badge.tier] || tierColors.bronze

  return (
    <div className={`badge-card ${isEarned ? 'earned' : 'locked'} tier-${badge.tier}`}>
      <div className="badge-icon-wrapper" style={isEarned ? { boxShadow: `0 0 20px ${tier.glow}` } : {}}>
        <span className="badge-icon"><i className={badge.icon} /></span>
        {isEarned && (
          <div className="badge-check">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
        )}
      </div>
      <div className="badge-info">
        <h3 className="badge-title">{localizedField(badge, 'title')}</h3>
        <p className="badge-description">{localizedField(badge, 'description')}</p>
        <span className={`badge-tier tier-${badge.tier}`}>
          {badge.tier === 'bronze' && <><i className="fa-solid fa-award" style={{color: 'var(--tier-bronze)'}} /> 브론즈</>}
          {badge.tier === 'silver' && <><i className="fa-solid fa-award" style={{color: 'var(--tier-silver)'}} /> 실버</>}
          {badge.tier === 'gold' && <><i className="fa-solid fa-award" style={{color: 'var(--tier-gold)'}} /> 골드</>}
          {badge.tier === 'platinum' && <><i className="fa-solid fa-gem" style={{color: 'var(--accent-blue)'}} /> 플래티넘</>}
        </span>
      </div>
    </div>
  )
}
