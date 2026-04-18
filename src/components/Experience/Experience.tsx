import { useState } from 'react'
import { EXPERIENCE } from '../../data/experience'
import { iconUrl } from '../../data/ticker'
import { useReveal } from '../../hooks/useReveal'
import styles from './Experience.module.css'

export function Experience() {
  const [openIdx, setOpenIdx] = useState(0)
  const headRef = useReveal<HTMLDivElement>()

  const toggle = (i: number) => setOpenIdx(prev => (prev === i ? -1 : i))

  return (
    <section id="work">
      <div className="section-head reveal" ref={headRef}>
        <div className="section-num">Selected Work</div>
        <h2 className="section-title">
          Professional <span className="ital">Experience</span>.
        </h2>
      </div>

      <div className={styles.expList}>
        {EXPERIENCE.map((exp, i) => (
          <ExpCard key={i} exp={exp} open={openIdx === i} onToggle={() => toggle(i)} />
        ))}
      </div>
    </section>
  )
}

interface ExpCardProps {
  exp: (typeof EXPERIENCE)[number]
  open: boolean
  onToggle: () => void
}

function ExpCard({ exp, open, onToggle }: ExpCardProps) {
  const ref = useReveal<HTMLElement>()

  return (
    <article
      className={`${styles.exp} reveal ${open ? styles.open : ''}`}
      onClick={onToggle}
      ref={ref}
    >
      <div className={styles.expYear}>{exp.year}</div>
      <div className={styles.expMain}>
        <h3 className={styles.expRole}>
          {exp.role} <span className={styles.expRoleCompany}>/ {exp.company}</span>
        </h3>
        <div className={styles.expCompany}>
          {exp.tags.map((tag, j) => (
            <span key={j} className={styles.tagItem}>
              <img className="ti" src={iconUrl(tag.icon)} alt="" />
              {tag.label}
              {j < exp.tags.length - 1 && <span className={styles.sep}>/</span>}
            </span>
          ))}
        </div>
        <div className={styles.expDetails}>
          <div className={styles.expDetailsInner}>
            <ul className={styles.expBullets}>
              {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
            <div className={styles.expAchievement}>
              <span className={styles.badge}>Achievement</span>
              <p>{exp.achievement}</p>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.expToggle} aria-label="Expand" onClick={e => { e.stopPropagation(); onToggle() }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
    </article>
  )
}
