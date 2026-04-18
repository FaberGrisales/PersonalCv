import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const name = nameRef.current
    if (!name) return
    const onScroll = () => {
      const y = window.scrollY
      if (y < 900) {
        name.style.transform = `translateY(${y * 0.15}px)`
        name.style.opacity = String(Math.max(0, 1 - y / 800))
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.hero}>
      <div className={styles.heroMeta}>
        <div>
          <span className={`mono ${styles.label}`}>Location</span>
          <span className={styles.value}>Bogotá D.C · Colombia</span>
        </div>
        <div>
          <span className={`mono ${styles.label}`}>Available</span>
          <span className={styles.value}>
            <span className={styles.statusDot} />
            For new projects
          </span>
        </div>

      </div>

      <h1 className={styles.heroName} ref={nameRef}>
        <span className={styles.block}>Jhon Faber</span>
        <span className={`${styles.block} ${styles.indent}`}>
          Grisales <span className={styles.ital}>Rodriguez</span>
        </span>
      </h1>

      <div className={styles.heroBottom}>
        <div>
          <div className={styles.heroRole}>
            <span className={styles.roleTitle}>Full Stack Developer</span>
            <span className={styles.roleMeta}>— Est. 2018 · 5+ yrs</span>
          </div>
          <div className={styles.heroCtas}>
            <a href="#contact" className="btn btn-primary" onClick={scrollTo('#contact')}>
              Get in touch
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#work" className="btn btn-ghost" onClick={scrollTo('#work')}>
              View Work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </div>
        <p className={styles.heroDesc}>
          I build end-to-end web systems across <strong>frontend, backend and cloud</strong>. Lately,
          I combine that foundation with <strong>AI agents</strong> and automation pipelines — RAG,
          n8n, vector stores — to ship intelligent, reliable enterprise software.
        </p>
      </div>
    </section>
  )
}
