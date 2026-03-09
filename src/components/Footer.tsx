export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg border-t border-white/5">
      <div
        className="flex justify-between items-center flex-wrap gap-6 mb-6"
        style={{ padding: '48px 60px 24px' }}
      >
        {/* Left - Copyright & Experience */}
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[13px] text-muted">
            © {currentYear} <span className="text-accent">Md Ashikujjaman Shaikat</span>
          </p>
          <p className="font-mono text-[12px] text-muted/70">
            Full-Stack Developer · 4+ Years Experience · Global Team Collaboration
          </p>
          <p className="font-mono text-[11px] text-muted/60">
            Crafted with <span className="text-accent">♥</span> in Bangladesh
          </p>
        </div>

        {/* Right - Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-muted hover:text-accent transition-colors duration-250"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-muted hover:text-accent transition-colors duration-250"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.428-.659 1.19-1.598 2.894-1.598 2.113 0 3.695 1.38 3.695 4.342v5.609zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.952.771-1.71 1.915-1.71 1.144 0 1.915.759 1.915 1.71 0 .951-.77 1.71-1.915 1.71zm1.6 11.597H3.738V9.579h3.199v10.873zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
          <a
            href="mailto:ashikujjaman.shaikat.cse@gmail.com"
            title="Email"
            className="text-muted hover:text-accent transition-colors duration-250"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="flex justify-center border-t border-white/5" style={{ padding: '12px 60px' }}>
        <p className="font-mono text-[11px] text-muted/50">Made with passion for clean code</p>
      </div>
    </footer>
  )
}
