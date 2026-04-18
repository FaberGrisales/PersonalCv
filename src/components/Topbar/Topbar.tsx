import styles from './Topbar.module.css'

const scrollTo = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault()
  const el = document.querySelector(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 70
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export function Topbar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.brand}>
        <div className={styles.brandMark} />
        <span className={styles.brandName}>JFG<span className={styles.brandSep}>/</span>2026</span>
      </div>
      <nav className={styles.topnav}>
        <div className={styles.navLinks}>
          <a href="#work" onClick={scrollTo('#work')}>Work</a>
          <a href="#ai" onClick={scrollTo('#ai')}>AI</a>
          <a href="#skills" onClick={scrollTo('#skills')}>Skills</a>
          <a href="#education" onClick={scrollTo('#education')}>Education</a>
          <a href="#contact" onClick={scrollTo('#contact')}>Contact</a>
        </div>
      </nav>
    </header>
  )
}
