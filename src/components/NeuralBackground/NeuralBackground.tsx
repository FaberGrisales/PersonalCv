import { useEffect, useRef } from 'react'
import styles from './NeuralBackground.module.css'

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cvs = canvasRef.current
    const glow = glowRef.current
    const progress = progressRef.current
    if (!cvs || !glow || !progress) return

    const ctx = cvs.getContext('2d')!
    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    let W = 0, H = 0
    let nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = []
    let packets: { x: number; y: number; vx: number; vy: number; life: number }[] = []
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false }
    let rafId: number
    let lastSpawn = 0

    function resize() {
      W = window.innerWidth; H = window.innerHeight
      cvs!.width = W * DPR; cvs!.height = H * DPR
      cvs!.style.width = W + 'px'; cvs!.style.height = H + 'px'
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      build()
    }

    function build() {
      nodes = []
      const count = W < 720 ? 45 : Math.floor((W * H) / 22000)
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
          r: 0.8 + Math.random() * 1.6,
        })
      }
    }

    function getAccent() { return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#8bf' }
    function getFg() { return getComputedStyle(document.documentElement).getPropertyValue('--fg-dim').trim() || '#888' }

    function spawnPacket() {
      if (packets.length > 12) return
      const angle = Math.random() * Math.PI * 2
      const speed = 3 + Math.random() * 2
      packets.push({ x: mouse.x, y: mouse.y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 60 })
    }

    function draw() {
      mouse.x += (mouse.tx - mouse.x) * 0.18
      mouse.y += (mouse.ty - mouse.y) * 0.18

      glow!.style.setProperty('--mx', mouse.x + 'px')
      glow!.style.setProperty('--my', mouse.y + 'px')
      glow!.style.opacity = mouse.active ? '1' : '0'

      const docH = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      progress!.style.width = (Math.min(1, window.scrollY / docH) * 100) + '%'

      ctx.clearRect(0, 0, W, H)
      const accent = getAccent()
      const fg = getFg()
      const RADIUS = 200

      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy
        if (n.x < -20) n.x = W + 20; if (n.x > W + 20) n.x = -20
        if (n.y < -20) n.y = H + 20; if (n.y > H + 20) n.y = -20
        if (mouse.active) {
          const dx = mouse.x - n.x, dy = mouse.y - n.y
          const d2 = dx * dx + dy * dy
          if (d2 < RADIUS * RADIUS) {
            const d = Math.sqrt(d2) || 1
            const force = (1 - d / RADIUS) * 0.9
            n.x += (dx / d) * force; n.y += (dy / d) * force
          }
        }
      }

      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]!
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]!
          const dx = a.x - b.x, dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d > 150) continue
          let tint = 0
          if (mouse.active) {
            const mx = (a.x + b.x) / 2 - mouse.x, my = (a.y + b.y) / 2 - mouse.y
            const md = Math.sqrt(mx * mx + my * my)
            if (md < RADIUS) tint = 1 - md / RADIUS
          }
          const baseAlpha = (1 - d / 150) * 0.16
          const alpha = baseAlpha + tint * 0.4
          ctx.strokeStyle = tint > 0.05
            ? `color-mix(in oklab, ${accent} ${Math.round(alpha * 100)}%, transparent)`
            : `color-mix(in oklab, ${fg} ${Math.round(alpha * 100)}%, transparent)`
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
        }
      }

      for (const n of nodes) {
        let r = n.r
        let c = `color-mix(in oklab, ${fg} 55%, transparent)`
        if (mouse.active) {
          const dx = n.x - mouse.x, dy = n.y - mouse.y
          const d2 = dx * dx + dy * dy
          if (d2 < RADIUS * RADIUS) {
            const k = 1 - Math.sqrt(d2) / RADIUS
            r = n.r + k * 2.5; c = accent
          }
        }
        ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2); ctx.fillStyle = c; ctx.fill()
      }

      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i]!
        p.life -= 1
        if (p.life <= 0) { packets.splice(i, 1); continue }
        p.x += p.vx; p.y += p.vy
        const tailX = p.x - p.vx * 10, tailY = p.y - p.vy * 10
        const grad = ctx.createLinearGradient(tailX, tailY, p.x, p.y)
        grad.addColorStop(0, 'transparent'); grad.addColorStop(1, accent)
        ctx.strokeStyle = grad; ctx.lineWidth = 2
        ctx.beginPath(); ctx.moveTo(tailX, tailY); ctx.lineTo(p.x, p.y); ctx.stroke()
        ctx.beginPath(); ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2); ctx.fillStyle = accent; ctx.fill()
      }

      rafId = requestAnimationFrame(draw)
    }

    function onMouseMove(e: MouseEvent) {
      mouse.tx = e.clientX; mouse.ty = e.clientY; mouse.active = true
      const now = performance.now()
      if (now - lastSpawn > 120 && Math.random() < 0.35) { spawnPacket(); lastSpawn = now }
    }
    function onMouseLeave() { mouse.active = false }
    function onClick(e: MouseEvent) {
      mouse.tx = e.clientX; mouse.ty = e.clientY; mouse.x = e.clientX; mouse.y = e.clientY
      for (let i = 0; i < 8; i++) spawnPacket()
    }
    function onTouch(e: TouchEvent) {
      if (e.touches[0]) { mouse.tx = e.touches[0].clientX; mouse.ty = e.touches[0].clientY; mouse.active = true }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('click', onClick)
    window.addEventListener('touchmove', onTouch, { passive: true })
    window.addEventListener('resize', resize)
    resize()
    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('click', onClick)
      window.removeEventListener('touchmove', onTouch)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className={styles.neuralBg} />
      <div ref={glowRef} className={styles.mouseGlow} />
      <div ref={progressRef} className={styles.scrollProgress} />
    </>
  )
}
