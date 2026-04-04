import { useMemo } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useBadge } from '../contexts/BadgeContext'
import { badges } from '../data/badges'
import BadgeCard from '../components/BadgeCard'
import ProgressBar from '../components/ProgressBar'

const TIER_ORDER = ['bronze', 'silver', 'gold', 'platinum']

const TIER_CONFIG = {
  bronze: { icon: 'fa-solid fa-award', color: '#CD7F32', labelKo: '브론즈', labelEn: 'Bronze' },
  silver: { icon: 'fa-solid fa-award', color: '#C0C0C0', labelKo: '실버', labelEn: 'Silver' },
  gold: { icon: 'fa-solid fa-award', color: '#FFD700', labelKo: '골드', labelEn: 'Gold' },
  platinum: { icon: 'fa-solid fa-gem', color: '#4FC3F7', labelKo: '플래티넘', labelEn: 'Platinum' },
}

export default function BadgeCollection() {
  const { t, lang } = useLanguage()
  const { earnedBadges } = useBadge()

  const groupedBadges = useMemo(() => {
    const groups = {}
    for (const tier of TIER_ORDER) {
      groups[tier] = badges.filter(b => b.tier === tier)
    }
    return groups
  }, [])

  const totalBadges = badges.length
  const earnedCount = earnedBadges.length
  const progressPercent = totalBadges > 0 ? Math.round((earnedCount / totalBadges) * 100) : 0

  const tierStats = useMemo(() => {
    const stats = {}
    for (const tier of TIER_ORDER) {
      const tierBadges = groupedBadges[tier]
      const earned = tierBadges.filter(b => earnedBadges.includes(b.id)).length
      stats[tier] = { total: tierBadges.length, earned }
    }
    return stats
  }, [groupedBadges, earnedBadges])

  return (
    <div className="badge-collection-page">
      {/* Header */}
      <section className="badge-header">
        <div className="badge-header-content">
          <h1>
            <i className="fa-solid fa-trophy" />
            {t('badge.title')}
          </h1>
          <p className="badge-subtitle">{t('badge.subtitle')}</p>
        </div>

        <div className="badge-overall-progress">
          <div className="badge-progress-stats">
            <span className="badge-earned-count">{earnedCount}</span>
            <span className="badge-total-count">/ {totalBadges}</span>
            <span className="badge-label">{t('badge.collected')}</span>
          </div>
          <ProgressBar value={progressPercent} color="#4FC3F7" />
        </div>

        {/* Tier Summary */}
        <div className="tier-summary">
          {TIER_ORDER.map(tier => {
            const config = TIER_CONFIG[tier]
            const stats = tierStats[tier]
            return (
              <div key={tier} className={`tier-summary-card tier-${tier}`}>
                <i className={config.icon} style={{ color: config.color }} />
                <span className="tier-name">{lang === 'en' ? config.labelEn : config.labelKo}</span>
                <span className="tier-count" style={{ color: config.color }}>
                  {stats.earned}/{stats.total}
                </span>
              </div>
            )
          })}
        </div>
      </section>

      {/* Badge Groups by Tier */}
      {TIER_ORDER.map(tier => {
        const tierBadges = groupedBadges[tier]
        if (tierBadges.length === 0) return null

        const config = TIER_CONFIG[tier]

        return (
          <section key={tier} className="badge-tier-section">
            <div className="tier-header">
              <div className="tier-title-row">
                <i className={config.icon} style={{ color: config.color }} />
                <h2 style={{ color: config.color }}>
                  {lang === 'en' ? config.labelEn : config.labelKo}
                </h2>
                <span className="tier-badge-count">
                  {tierStats[tier].earned}/{tierStats[tier].total}
                </span>
              </div>
              <ProgressBar
                value={tierStats[tier].earned}
                max={tierStats[tier].total}
                color={config.color}
                size="sm"
              />
            </div>

            <div className="badges-grid">
              {tierBadges.map(badge => (
                <BadgeCard key={badge.id} badge={badge} />
              ))}
            </div>
          </section>
        )
      })}

      {/* Empty State */}
      {badges.length === 0 && (
        <div className="no-badges">
          <i className="fa-solid fa-medal" />
          <h3>{t('badge.noBadges')}</h3>
          <p>{t('badge.noBadgesDesc')}</p>
        </div>
      )}
    </div>
  )
}
