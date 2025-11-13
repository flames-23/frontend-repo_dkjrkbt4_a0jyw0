export default function Section({ title, eyebrow, children, className = '' }) {
  return (
    <section className={`relative py-20 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && <p className="text-sm uppercase tracking-widest text-white/60 mb-3">{eyebrow}</p>}
        {title && <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{title}</h2>}
        <div className="text-white/80">
          {children}
        </div>
      </div>
    </section>
  )
}
