import { SKILLS } from '../../data/skills'
import { iconUrl } from '../../data/ticker'
import { useReveal } from '../../hooks/useReveal'
import styles from './Skills.module.css'

export function Skills() {
  const headRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLDivElement>()

  return (
    <section id="skills">
      <div className="section-head reveal" ref={headRef}>
        <div className="section-num">Toolkit</div>
        <h2 className="section-title">
          Technical <span className="ital">Proficiency.</span>
        </h2>
      </div>

      <div className={`${styles.skillsGrid} reveal`} ref={gridRef}>
        {SKILLS.map(cat => (
          <div key={cat.id} className={styles.skillCol}>
            <h4>
              <span className={styles.count}>{cat.count}</span>
              {cat.title}
            </h4>
            <div className={styles.skillList}>
              {cat.items.map((item, i) => (
                <span key={i} className={`${styles.chip} ${item.primary ? styles.primary : ''}`}>
                  <img src={iconUrl(item.icon)} alt="" className="ti" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
