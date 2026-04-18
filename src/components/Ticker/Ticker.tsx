import { TICKER_ITEMS, iconUrl } from '../../data/ticker'
import styles from './Ticker.module.css'

export function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div className={styles.ticker}>
      <div className={styles.tickerTrack}>
        {items.map((item, i) => (
          <span key={i} className={styles.tk}>
            <img src={iconUrl(item.slug)} alt="" className="ti" />
            {item.label}
            <span className={styles.dot} />
          </span>
        ))}
      </div>
    </div>
  )
}
