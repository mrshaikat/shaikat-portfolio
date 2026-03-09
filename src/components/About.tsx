import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionLabel from './SectionLabel'

const infoCards = [
  { icon: '📍', bg: 'rgba(79,255,176,0.08)', label: 'Location', value: 'Dhaka, Bangladesh' },
  { icon: '🏢', bg: 'rgba(0,207,255,0.08)', label: 'Current Role', value: 'Senior Software Engineer · BJIT Limited' },
  { icon: '🎓', bg: 'rgba(181,123,255,0.08)', label: 'Education', value: 'B.Sc. CSE — Daffodil International University' },
  { icon: '📜', bg: 'rgba(255,200,79,0.08)', label: 'Certification', value: 'Scrum Team Member Accredited™' },
  { icon: '🌐', bg: 'rgba(79,255,176,0.08)', label: 'Collaboration', value: 'Japanese & Philippine Teams · 3 years' },
]

export default function About() {
  const titleRef = useScrollReveal()
  const textRef = useScrollReveal()
  const cardsRef = useScrollReveal()

  return (
    <section id="about" className="bg-surface" style={{ padding: '120px 60px' }}>
      <SectionLabel>About me</SectionLabel>
      <h2
        ref={titleRef}
        className="reveal font-display font-extrabold tracking-[-2px] leading-[1.05] mb-[60px]"
        style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
      >
        Crafting experiences,<br />not just code.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div ref={textRef} className="reveal space-y-5">
          {[
            <>I'm a <strong className="text-white font-medium">Senior Software Engineer</strong> at BJIT Limited, where I architect and deliver enterprise-grade web applications in close collaboration with international teams across Japan and the Philippines.</>,
            <>My work spans the full stack — from building <strong className="text-white font-medium">scalable React frontends</strong> with atomic design systems to engineering <strong className="text-white font-medium">secure Node.js backends</strong> with event-driven processing, payment integrations, and cloud deployments on AWS.</>,
            <>I care deeply about <strong className="text-white font-medium">code quality, developer experience, and accessible UIs</strong> — believing that great software is as much about how it's built as what it does.</>,
          ].map((content, i) => (
            <p key={i} className="text-muted font-light text-[17px] leading-[1.85]">{content}</p>
          ))}
        </div>

        <div ref={cardsRef} className="reveal space-y-4 info-card">
          {infoCards.map(({ icon, bg, label, value }) => (
            <div
              key={label}
              className="info-card bg-card border border-white/5 rounded-2xl p-6 px-7 flex items-center gap-5 transition-all duration-300 hover:border-white/10 hover:translate-x-1"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: bg }}
              >
                {icon}
              </div>
              <div>
                <div className="font-mono text-[11px] text-muted tracking-[1px] uppercase">{label}</div>
                <div className="text-white font-medium mt-0.5">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
