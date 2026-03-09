import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionLabel from './SectionLabel'
import { projects } from '../data'

const roleColors: Record<string, string> = {
  accent: 'border-accent/20 bg-accent/5 text-accent',
  accent2: 'border-accent2/20 bg-accent2/5 text-accent2',
  accent3: 'border-accent3/20 bg-accent3/5 text-accent3',
}

function ProjectCard({ index, title, description, tech, role, roleColor, domain, delay = 0 }: {
  index: string; title: string; description: string
  tech: string[]; role: string; roleColor: string; domain: string; delay?: number
}) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className="reveal project-card card-accent-line group bg-card border border-white/5 rounded-3xl p-12 grid md:grid-cols-[1fr_auto] gap-10 items-start relative overflow-hidden transition-all duration-300 hover:border-white/10 hover:-translate-y-0.5"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="font-mono text-[11px] text-muted tracking-[2px]">{index}</div>
          <span className="font-mono text-[10px] px-2.5 py-1 rounded-md border border-accent/30 text-accent/70 bg-accent/5 whitespace-nowrap">{domain}</span>
        </div>
        <h3 className="font-display font-extrabold text-[26px] tracking-[-0.5px] mb-4">{title}</h3>
        <p className="text-muted font-light text-[15px] leading-[1.8] max-w-[600px] mb-7">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map(t => (
            <span
              key={t}
              className="font-mono text-[11px] px-3.5 py-1.5 rounded-full border border-accent/20 text-accent bg-accent/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="md:text-right">
        <span className={`inline-block font-mono text-[11px] px-4 py-2 rounded-lg border whitespace-nowrap ${roleColors[roleColor]}`}>
          {role}
        </span>
      </div>
    </div>
  )
}

export default function Projects() {
  const titleRef = useScrollReveal()
  const [showAll, setShowAll] = useState(false)
  
  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="bg-surface" style={{ padding: '120px 60px' }}>
      <SectionLabel>Projects</SectionLabel>
      <h2
        ref={titleRef}
        className="reveal font-display font-extrabold tracking-[-2px] leading-[1.05] mb-[60px]"
        style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
      >
        Things I've shipped.
      </h2>

      <div className="flex flex-col gap-6">
        {displayedProjects.map((p, i) => (
          <ProjectCard key={p.index} {...p} delay={i * 100} />
        ))}
      </div>

      {!showAll && projects.length > 3 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="font-mono text-[13px] px-6 py-3 rounded-lg border border-accent/30 text-accent bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 font-semibold tracking-[0.5px]"
          >
            See More Projects
          </button>
        </div>
      )}
    </section>
  )
}
