import { useState, useEffect } from 'react'
import styles from './SectionNav.module.css'

const SECTIONS = [
  { id: 'work', label: 'Work', num: '01' },
  { id: 'ai', label: 'AI', num: '02' },
  { id: 'skills', label: 'Skills', num: '03' },
  { id: 'education', label: 'Education', num: '04' },
  { id: 'contact', label: 'Contact', num: '05' },
]

export function SectionNav() {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav className={styles.nav}>
      {SECTIONS.map(s => (
        <button
          key={s.id}
          className={`${styles.btn} ${active === s.id ? styles.active : ''}`}
          onClick={() => scrollTo(s.id)}
        >
          <span className={styles.label}>{s.label}</span>
          <span className={styles.indicator} />
        </button>
      ))}
    </nav>
  )
}
