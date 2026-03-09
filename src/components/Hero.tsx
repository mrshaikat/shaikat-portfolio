import { useEffect, useRef } from 'react'

const stats = [
  { value: 4, suffix: '+', label: 'Years at BJIT' },
  { value: 11, suffix: '', label: 'Industry Domains' },
  { value: 10, suffix: '+', label: 'Technologies' },
  { value: 3.68, suffix: '', label: 'CGPA' },
]

function animateCount(el: HTMLSpanElement, target: number, suffix: string, duration = 1500) {
  const isFloat = !Number.isInteger(target)
  const start = performance.now()
  const step = (now: number) => {
    const p = Math.min((now - start) / duration, 1)
    const ease = 1 - Math.pow(1 - p, 3)
    const val = target * ease
    el.textContent = (isFloat ? val.toFixed(2) : Math.round(val)) + suffix
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null)
  const numRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          numRefs.current.forEach((span, i) => {
            if (span) animateCount(span, stats[i].value, stats[i].suffix)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ padding: '120px 60px 80px' }}
    >
      {/* Grid */}
      <div className="absolute inset-0 hero-grid-bg" />

      {/* Glows */}
      <div
        className="absolute pointer-events-none animate-[glow-drift_8s_ease-in-out_infinite_alternate]"
        style={{
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(79,255,176,0.08) 0%, transparent 70%)',
          top: -100, right: -200,
        }}
      />
      <div
        className="absolute pointer-events-none animate-[glow-drift_10s_ease-in-out_infinite_alternate-reverse]"
        style={{
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(0,207,255,0.06) 0%, transparent 70%)',
          bottom: -100, left: -100,
        }}
      />

      <div className="relative z-10 max-w-4xl">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-[18px] py-2 font-mono text-[12px] text-accent mb-10"
          style={{ animation: 'fade-up 0.8s both' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-[pulse-dot_2s_ease-in-out_infinite]" />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1
          className="font-display font-extrabold leading-[0.95] tracking-[-3px] mb-7"
          style={{
            fontSize: 'clamp(52px, 8vw, 100px)',
            animation: 'fade-up 0.8s 0.1s both',
          }}
        >
          <div>Md Ashikujjaman</div>
          <div className="text-accent">Shaikat</div>
          <div className="text-stroke">Sr. Software Engineer</div>
        </h1>

        {/* Description */}
        <p
          className="text-[18px] text-muted font-light leading-[1.75] max-w-[540px] mb-12"
          style={{ animation: 'fade-up 0.8s 0.2s both' }}
        >
          <strong className="text-white font-light">Working</strong> with 4 years
          building scalable full-stack products for Japanese &amp; Philippine teams — from pixel-perfect
          UIs to distributed backend systems.
        </p>

        {/* CTA */}
        <div className="flex gap-4 flex-wrap" style={{ animation: 'fade-up 0.8s 0.3s both' }}>
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 bg-accent text-bg font-display font-bold text-[15px] px-8 py-3.5 rounded-full no-underline transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(79,255,176,0.3)]"
          >
            View Projects ↓
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 border border-white/10 text-white font-display font-semibold text-[15px] px-8 py-3.5 rounded-full no-underline transition-all duration-250 hover:border-accent hover:text-accent"
          >
            Let's Talk →
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex gap-10 flex-wrap mt-[72px] pt-10 border-t border-white/5"
          style={{ animation: 'fade-up 0.8s 0.4s both' }}
        >
          {stats.map((s, i) => (
            <div key={s.label}>
              <div className="font-display font-extrabold text-[36px] text-accent tracking-[-1px]">
                <span ref={el => { numRefs.current[i] = el }}>0{s.suffix}</span>
              </div>
              <div className="text-[13px] text-muted font-light mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
