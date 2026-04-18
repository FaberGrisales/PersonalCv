import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className="mono" style={{ color: 'var(--fg-muted)' }}>
          © 2026 Jhon F. Grisales R. — Crafted in Bogotá
        </span>
        <span className="mono" style={{ color: 'var(--fg-muted)' }}>
          v2026.04 / <span style={{ color: 'var(--accent)' }}>● Available</span>
        </span>
      </div>
    </footer>
  )
}
