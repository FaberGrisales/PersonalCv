import { useState } from 'react'
import { iconUrl } from '../../data/ticker'
import { useReveal } from '../../hooks/useReveal'
import { useBogotaClock } from '../../hooks/useBogotaClock'
import styles from './Contact.module.css'

type Field = 'topic' | 'budget' | 'channel'

interface PickState {
  label: string
  value: string
}

const CX_OPTS: Record<Field, { label: string; value: string; icon: string | null }[]> = {
  topic: [
    { label: 'A full-stack build', value: 'fullstack', icon: 'react' },
    { label: 'An AI agent / RAG project', value: 'ai', icon: 'openai' },
    { label: 'An automation with n8n', value: 'automation', icon: 'n8n' },
    { label: 'A frontend rebuild', value: 'frontend', icon: 'react' },
    { label: 'Just say hi', value: 'hi', icon: 'gmail' },
  ],
  budget: [
    { label: '< $3K USD', value: 'lt3k', icon: null },
    { label: '$3K – $10K', value: '3_10k', icon: null },
    { label: '$10K – $30K', value: '10_30k', icon: null },
    { label: '$30K +', value: 'gt30k', icon: null },
    { label: 'To define', value: 'to_define', icon: null },
  ],
  channel: [
    { label: 'via Email', value: 'email', icon: 'gmail' },
    { label: 'via WhatsApp', value: 'whatsapp', icon: 'whatsapp' },
    { label: 'via LinkedIn', value: 'linkedin', icon: 'linkedin' },
  ],
}

const LABEL_MAP: Record<Field, Record<string, string>> = {
  topic: { fullstack: 'full-stack build', ai: 'AI / RAG project', automation: 'n8n automation', frontend: 'frontend rebuild', hi: 'just-say-hi' },
  budget: { lt3k: 'under $3K', '3_10k': '$3–10K', '10_30k': '$10–30K', gt30k: '$30K+', to_define: 'to define' },
  channel: { email: 'via email', whatsapp: 'via WhatsApp', linkedin: 'via LinkedIn' },
}

export function Contact() {
  const headRef = useReveal<HTMLDivElement>()
  const stageRef = useReveal<HTMLDivElement>()
  const clock = useBogotaClock()
  const [name, setName] = useState('')
  const [activeField, setActiveField] = useState<Field>('topic')
  const [status, setStatus] = useState<'ready' | 'sent'>('ready')
  const [picks, setPicks] = useState<Record<Field, PickState>>({
    topic: { label: 'project', value: 'project' },
    budget: { label: 'to define', value: 'to_define' },
    channel: { label: 'via email', value: 'email' },
  })

  const selectOpt = (field: Field, value: string, rawLabel: string) => {
    const label = LABEL_MAP[field][value] ?? rawLabel
    setPicks(p => ({ ...p, [field]: { label, value } }))
  }

  const send = () => {
    const sender = name.trim() || 'Someone'
    const subject = encodeURIComponent(`New opportunity · ${picks.topic.label}`)
    const body = encodeURIComponent(
      `Hi Jhon,\n\nI'm ${sender} and I'd like to talk about a ${picks.topic.label} with a budget ${picks.budget.label} — preferred channel: ${picks.channel.label}.\n\nBest,\n${sender}`
    )
    const href = picks.channel.value === 'whatsapp'
      ? `https://wa.me/573166829112?text=${body}`
      : picks.channel.value === 'linkedin'
      ? 'https://www.linkedin.com/in/jhon-faber-grisales-rodriguez'
      : `mailto:jhongrisrod@gmail.com?subject=${subject}&body=${body}`
    window.open(href, '_blank')
    setStatus('sent')
    setTimeout(() => setStatus('ready'), 3000)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="section-head reveal" ref={headRef}>
        <div className="section-num">Let's talk</div>
      </div>

      <div className={`${styles.contactStage} reveal`} ref={stageRef}>
        <div className={styles.cxLeft}>
          <div className={`mono ${styles.buildLabel}`}>// Build your intro</div>
          <div className={styles.cxSentence}>
            <span>Hi Jhon, I'm</span>
            <input
              type="text"
              className={styles.cxInput}
              placeholder="your name"
              spellCheck={false}
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <span>and I'd like to talk about a</span>
            <button className={`${styles.cxPick} ${activeField === 'topic' ? styles.cxPickActive : ''}`} onClick={() => setActiveField('topic')}>
              <span>{picks.topic.label}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <span>with a budget</span>
            <button className={`${styles.cxPick} ${activeField === 'budget' ? styles.cxPickActive : ''}`} onClick={() => setActiveField('budget')}>
              <span>{picks.budget.label}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <span>—</span>
            <button className={`${styles.cxPick} ${activeField === 'channel' ? styles.cxPickActive : ''}`} onClick={() => setActiveField('channel')}>
              <span>{picks.channel.label}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <span>.</span>
          </div>

          <div className={styles.cxOptions}>
            {CX_OPTS[activeField].map(opt => (
              <button
                key={opt.value}
                className={`${styles.cxOpt} ${picks[activeField].value === opt.value ? styles.cxOptActive : ''}`}
                onClick={() => selectOpt(activeField, opt.value, opt.label)}
              >
                {opt.icon && <img src={iconUrl(opt.icon)} alt="" className="ti" />}
                {opt.label}
              </button>
            ))}
          </div>

          <div className={styles.cxActions}>
            <button className="btn btn-primary" onClick={send}>
              Send message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
            <span className={`mono ${styles.cxStatus} ${status === 'sent' ? styles.sent : ''}`}>
              ● {status === 'sent' ? 'Message drafted' : 'Ready'}
            </span>
          </div>
        </div>

        <div className={styles.cxRight}>
          <div className={styles.cxCard}>
            <div className={styles.cxCardHead}>
              <div className={styles.cxAvatar}>
                <span className="mono">JFG</span>
                <span className={styles.cxPulse} />
              </div>
              <div>
                <div className={`mono ${styles.cxStatus}`}>Status</div>
                <div className={styles.cxCardTitle}>
                  <span className={styles.onlineDot}>●</span> Online · Bogotá
                </div>
              </div>
            </div>
            <div className={`mono ${styles.cxClock}`}>{clock} <span className={styles.clockTz}>BOG</span></div>
            <div className={styles.cxLinks}>
              <a href="mailto:jhongrisrod@gmail.com" className={styles.cxLink}>
                <img src={iconUrl('gmail')} alt="" className="ti" />
                <div><span className={`mono ${styles.cxLbl}`}>Email</span><span className={styles.cxVal}>jhongrisrod@gmail.com</span></div>
                <svg className={styles.cxArr} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </a>
              <a href="tel:+573166829112" className={styles.cxLink}>
                <img src={iconUrl('whatsapp')} alt="" className="ti" />
                <div><span className={`mono ${styles.cxLbl}`}>Phone · WhatsApp</span><span className={styles.cxVal}>+57 316 682 9112</span></div>
                <svg className={styles.cxArr} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/jhon-faber-grisales-rodriguez" target="_blank" rel="noopener" className={styles.cxLink}>
                <img src={iconUrl('linkedin')} alt="" className="ti" />
                <div><span className={`mono ${styles.cxLbl}`}>LinkedIn</span><span className={styles.cxVal}>/in/jhon-faber-grisales</span></div>
                <svg className={styles.cxArr} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </a>
              <a href="https://github.com/FaberGrisales" target="_blank" rel="noopener" className={styles.cxLink}>
                <img src={iconUrl('github')} alt="" className="ti" />
                <div><span className={`mono ${styles.cxLbl}`}>GitHub</span><span className={styles.cxVal}>@FaberGrisales</span></div>
                <svg className={styles.cxArr} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </a>
            </div>
            <div className={`mono ${styles.cxFoot}`}>
              <span>Response · &lt; 24h</span>
              <span>TZ · GMT-5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
