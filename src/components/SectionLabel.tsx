interface SectionLabelProps {
  children: React.ReactNode
  center?: boolean
}

export default function SectionLabel({ children, center = false }: SectionLabelProps) {
  return (
    <div
      className={`font-mono text-[12px] text-accent tracking-[3px] uppercase mb-4 flex items-center gap-3 ${
        center ? 'justify-center' : ''
      }`}
    >
      {!center && <span className="block w-8 h-px bg-accent" />}
      {children}
    </div>
  )
}
