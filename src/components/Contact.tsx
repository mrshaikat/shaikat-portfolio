import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionLabel from './SectionLabel'
import { contactLinks } from '../data'

export default function Contact() {
  const titleRef = useScrollReveal()
  const descRef = useScrollReveal()
  const emailRef = useScrollReveal()

  return (
    <section id="contact" className="bg-surface text-center" style={{ padding: '120px 60px' }}>
      <div className="max-w-[640px] mx-auto">
        <SectionLabel center>Let's connect</SectionLabel>

        <h2
          ref={titleRef}
          className="reveal font-display font-extrabold tracking-[-2px] leading-[1.05] mb-[60px]"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Got an opportunity?<br />Let's build together.
        </h2>

        <p ref={descRef} className="reveal text-muted font-light text-[18px] leading-[1.8] mb-14">
          I'm open to senior engineering roles, remote collaborations, and interesting full-stack
          challenges. Feel free to reach out — I reply promptly.
        </p>

        {/* Social Links */}
        <div className="flex justify-center flex-wrap gap-4 mb-[60px]">
          {contactLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-card border border-white/5 rounded-full px-7 py-3.5 no-underline text-white text-sm font-medium transition-all duration-250 hover:border-accent hover:text-accent hover:-translate-y-0.5"
            >
              <span dangerouslySetInnerHTML={{ __html: icon }} />
              {label}
            </a>
          ))}
        </div>

        {/* Email */}
        <a
          ref={emailRef}
          href="mailto:ashikujjaman.shaikat.cse@gmail.com"
          className="reveal font-display font-extrabold text-[26px] tracking-[-0.5px] text-white no-underline border-b-2 border-accent/30 pb-1 transition-all duration-250 hover:border-accent hover:text-accent"
        >
          ashikujjaman.shaikat.cse@gmail.com
        </a>
      </div>
    </section>
  )
}
