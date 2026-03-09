import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-15 py-6 z-50 transition-all duration-400 ${
        scrolled ? 'bg-bg/85 backdrop-blur-xl border-b border-white/5' : ''
      }`}
      style={{ padding: '24px 60px' }}
    >
      <a
        href="#hero"
        className="font-display font-extrabold text-xl text-white no-underline tracking-tight"
        style={{
          background: 'linear-gradient(90deg, #fff 0%, #fff 100%)',
          backgroundSize: '0% 100%',
          backgroundPosition: '0% 0%',
          backgroundRepeat: 'no-repeat',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'slideInText 2s ease-in-out forwards',
        }}
      >
        SHAIKAT
        <style>{`
          @keyframes slideInText {
            0% {
              backgroundSize: 0% 100%;
              backgroundPosition: 0% 0%;
            }
            100% {
              backgroundSize: 100% 100%;
              backgroundPosition: 0% 0%;
            }
          }
        `}</style>
      </a>

      <ul className="hidden md:flex gap-9 list-none">
        {navLinks.map(({ href, label }) => {
          const sectionId = href.substring(1)
          const isActive = activeSection === sectionId
          return (
            <li key={href}>
              <a
                href={href}
                className={`font-mono text-[13px] no-underline relative transition-colors duration-250 group ${
                  isActive ? 'text-accent' : 'text-muted hover:text-accent'
                }`}
              >
                {label}
                <span className={`absolute bottom-[-2px] left-0 h-px bg-accent transition-[width] duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
