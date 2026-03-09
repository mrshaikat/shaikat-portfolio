import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionLabel from './SectionLabel'
import { responsibilities } from '../data'

export default function Experience() {
  const titleRef = useScrollReveal()
  const cardRef = useScrollReveal()

  return (
    <section id="experience" className="bg-bg" style={{ padding: '120px 60px' }}>
      <SectionLabel>Experience</SectionLabel>
      <h2
        ref={titleRef}
        className="reveal font-display font-extrabold tracking-[-2px] leading-[1.05] mb-[60px]"
        style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
      >
        Where I've worked.
      </h2>

      <div
        ref={cardRef}
        className="reveal bg-card border border-white/5 rounded-3xl relative overflow-hidden"
        style={{ padding: '56px' }}
      >
        {/* Glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: -80, right: -80, width: 300, height: 300,
            background: 'radial-gradient(circle, rgba(79,255,176,0.05), transparent 70%)',
          }}
        />

        {/* Header */}
        <div className="flex justify-between items-start flex-wrap gap-5 mb-10">
          <div>
            <div className="font-display font-extrabold text-[32px] tracking-[-1px]">BJIT Limited</div>
            <div className="font-mono text-[15px] text-accent mt-1.5">Senior Software Engineer</div>
          </div>
          <div className="font-mono text-[13px] text-muted bg-subtle px-5 py-2 rounded-full border border-white/5">
            April 2022 — Present
          </div>
        </div>

        {/* Responsibilities */}
        <ul className="list-none space-y-0">
          {responsibilities.map(({ bold, text }) => (
            <li
              key={bold}
              className="flex gap-4 text-muted font-light text-[15px] leading-[1.75] py-3.5 border-b border-white/5 last:border-b-0"
            >
              <span className="font-mono text-[13px] text-accent flex-shrink-0 mt-0.5">→</span>
              <span>
                <strong className="text-white font-medium">{bold}</strong> — {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
