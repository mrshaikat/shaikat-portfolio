import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionLabel from './SectionLabel'
import { skillCategories } from '../data'

function SkillCard({ icon, title, color, tags, delay = 0 }: {
  icon: string; title: string; color: string; tags: string[]; delay?: number
}) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className="reveal skill-card group bg-card border border-white/5 rounded-[20px] p-8 relative overflow-hidden transition-all duration-300 hover:border-accent/25 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-center gap-3.5 mb-6">
        <div
          className="w-12 h-12 rounded-[14px] flex items-center justify-center text-[22px]"
          style={{ background: color }}
        >
          {icon}
        </div>
        <div className="font-display font-bold text-[16px]">{title}</div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span
            key={tag}
            className="font-mono text-[11px] px-3 py-1.5 rounded-md border border-white/5 text-muted bg-white/[0.02] transition-all duration-200 group-hover:border-accent/15 group-hover:text-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const titleRef = useScrollReveal()

  return (
    <section id="skills" className="bg-bg" style={{ padding: '120px 60px' }}>
      <SectionLabel>Technical skills</SectionLabel>
      <h2
        ref={titleRef}
        className="reveal font-display font-extrabold tracking-[-2px] leading-[1.05] mb-[60px]"
        style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
      >
        What I work with.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <SkillCard key={cat.title} {...cat} delay={(i % 3) * 100} />
        ))}
      </div>
    </section>
  )
}
