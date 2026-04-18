import { useRef } from 'react'
import { useReveal } from '../../hooks/useReveal'
import styles from './AIBlock.module.css'

export function AISection() {
  const headRef = useReveal<HTMLDivElement>()
  const blockRef = useRef<HTMLDivElement>(null)
  const revealRef = useReveal<HTMLDivElement>()

  const setRefs = (el: HTMLDivElement | null) => {
    ;(blockRef as React.MutableRefObject<HTMLDivElement | null>).current = el
    ;(revealRef as React.MutableRefObject<HTMLDivElement | null>).current = el
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = blockRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%')
    el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%')
  }

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.querySelector('#contact')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' })
  }

  return (
    <section id="ai">
      <div className="section-head reveal" ref={headRef}>
        <div className="section-num">Specialization</div>
        <h2 className="section-title">
          Areas of <span className="ital">Expertise.</span>
        </h2>
      </div>

      <div className={`${styles.aiBlock} reveal`} ref={setRefs} onMouseMove={onMouseMove}>
        <div className={styles.aiLeft}>
          <div className={`mono ${styles.eyebrow}`}>// AI · Agents · Automation</div>
          <h3 className={styles.aiTitle}>
            RAG agents, <span className={styles.ital}>n8n</span> workflows and vector search in PostgreSQL.
          </h3>
          <p className={styles.aiDesc}>
            At Transborder I built a RAG-based agent ecosystem on OpenAI + Ollama with PostgreSQL as the vector store,
            automating legal and technical document extraction. I also customize Node.js nodes in n8n to orchestrate
            business logic across microservices and REST APIs.
          </p>
          <div className={styles.aiCtas}>
            <a href="#contact" className="btn btn-ghost" onClick={scrollToContact}>
              Discuss a project
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.aiGrid}>
          <div className={`${styles.aiTile} ${styles.highlight}`}>
            <span className={styles.tLabel}>Doc-processing time</span>
            <div className={styles.tValueLarge}>−40%</div>
          </div>
          <div className={styles.aiTile}>
            <span className={styles.tLabel}>Stack</span>
            <div className={styles.tValue}>OpenAI · Ollama · Google AI</div>
          </div>
          <div className={styles.aiTile}>
            <span className={styles.tLabel}>Orchestration</span>
            <div className={styles.tValue}>n8n workflows</div>
          </div>
          <div className={styles.aiTile}>
            <span className={styles.tLabel}>Vector Store</span>
            <div className={styles.tValue}>PostgreSQL + pgvector</div>
          </div>
        </div>
      </div>
    </section>
  )
}
