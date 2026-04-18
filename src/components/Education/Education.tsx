import { useReveal } from '../../hooks/useReveal'
import styles from './Education.module.css'

export function Education() {
  const headRef = useReveal<HTMLDivElement>()
  const leftRef = useReveal<HTMLDivElement>()
  const rightRef = useReveal<HTMLDivElement>()

  return (
    <section id="education">
      <div className="section-head reveal" ref={headRef}>
        <div className="section-num">Learning</div>
        <h2 className="section-title">
          Academic <span className="ital">Background.</span>
        </h2>
      </div>

      <div className={styles.eduGrid}>
        <div className="reveal" ref={leftRef}>
          <div className={`mono ${styles.subhead}`}>Formal education</div>

          <div className={styles.eduItem}>
            <div className={styles.eduName}>
              Software Development Technician
              <span className={styles.org}>SENA</span>
            </div>
            <div className={styles.eduYear}>2018</div>
          </div>
          <div className={styles.eduItem}>
            <div className={styles.eduName}>
              Data Science Bootcamp
              <span className={styles.org}>BIT</span>
            </div>
            <div className={`${styles.eduYear} ${styles.current}`}>In progress</div>
          </div>

          <div className={`mono ${styles.subheadSpaced}`}>Continuing education</div>

          {[
            { name: "N8N: AI Agents w/ Make & Zapier", org: 'Udemy', year: '2025' },
            { name: 'Backend Development', org: 'Platzi', year: '2022' },
            { name: 'Object-Oriented Programming', org: 'Platzi', year: '2022' },
            { name: 'ECMAScript +6', org: 'Platzi', year: '2019' },
            { name: 'Basic JavaScript', org: 'Platzi', year: '2018' },
          ].map((item, i) => (
            <div key={i} className={styles.eduItem}>
              <div className={styles.eduName}>
                {item.name}
                <span className={styles.org}>{item.org}</span>
              </div>
              <div className={styles.eduYear}>{item.year}</div>
            </div>
          ))}
        </div>

        <div className="reveal" ref={rightRef}>
          <div className={`mono ${styles.subhead}`}>Languages</div>
          <div className={styles.langs}>
            <div className={styles.langRow}>
              <span className={styles.lang}>
                Spanish <span className={styles.langLevel}>— Native</span>
              </span>
              <div className={styles.langBar}>
                {[1,2,3,4,5].map(n => <span key={n} className={n <= 5 ? styles.on : ''} />)}
              </div>
            </div>
            <div className={styles.langRow}>
              <span className={styles.lang}>
                English <span className={styles.langLevel}>— B1 Intermediate</span>
              </span>
              <div className={styles.langBar}>
                {[1,2,3,4,5].map(n => <span key={n} className={n <= 3 ? styles.on : ''} />)}
              </div>
            </div>
          </div>

          <div className={styles.currentlyBox}>
            <div className={`mono ${styles.currentlyLabel}`}>// Currently</div>
            <p className={styles.currentlyText}>
              Deepening Data Science at BIT and pushing further into production-grade AI agent workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
