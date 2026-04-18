import { useTheme } from '../../context/ThemeContext'
import styles from './TweaksPanel.module.css'

type AccentKey = 'lime' | 'coral' | 'blue' | 'magenta'

const ACCENT_SWATCHES: { key: AccentKey; color: string }[] = [
  { key: 'lime', color: 'oklch(0.88 0.19 122)' },
  { key: 'coral', color: 'oklch(0.75 0.16 35)' },
  { key: 'blue', color: 'oklch(0.58 0.18 250)' },
  { key: 'magenta', color: 'oklch(0.70 0.22 340)' },
]

export function TweaksPanel() {
  const { theme, accent, setAccent, toggleTheme } = useTheme()

  return (
    <div className={styles.panel}>
      <h5 className="mono">Tweaks</h5>
      <div className={styles.tweakRow}>
        <span>Theme</span>
        <div className={styles.swatches}>
          <button
            className={`${styles.swatch} ${theme === 'dark' ? styles.active : ''}`}
            style={{ background: '#0E0E0C' }}
            onClick={() => theme !== 'dark' && toggleTheme()}
          />
          <button
            className={`${styles.swatch} ${theme === 'light' ? styles.active : ''}`}
            style={{ background: '#F2EFE8' }}
            onClick={() => theme !== 'light' && toggleTheme()}
          />
        </div>
      </div>
      <div className={styles.tweakRow}>
        <span>Accent</span>
        <div className={styles.swatches}>
          {ACCENT_SWATCHES.map(s => (
            <button
              key={s.key}
              className={`${styles.swatch} ${accent === s.key ? styles.active : ''}`}
              style={{ background: s.color }}
              onClick={() => setAccent(s.key)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
