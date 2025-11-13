import Navbar from '../Navbar'
import Section from '../components/Section'

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0b12] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-fuchsia-900/20 to-cyan-900/30" />
      <Navbar />

      <Section title="We design with intention">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-white/80">
            <p>
              Virgo Studios is a small, focused creative team. We believe the best design is clean, honest, and rooted in a clear point of view. We make work that feels modern and minimal—but never cold.
            </p>
            <p>
              Our process is simple: listen, learn, and build with care. We keep our communication human and our craft precise.
            </p>
            <p>
              From brand systems to social content, we guide visuals with a balance of professionalism and personality.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/30 to-cyan-500/30" />
            <p className="mt-4 text-sm text-white/60">Studio, detail, and the people behind it.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Values" title="Quiet confidence. Thoughtful craft.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: 'Clarity', d: 'We simplify the complex and design for meaning.' },
            { t: 'Calm', d: 'We value space, pacing, and visual balance.' },
            { t: 'Care', d: 'We sweat the details and design for longevity.' },
          ].map((v, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-xl font-semibold">{v.t}</h4>
              <p className="mt-2 text-white/70">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
