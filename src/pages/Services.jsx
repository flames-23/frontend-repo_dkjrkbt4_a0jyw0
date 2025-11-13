import Navbar from '../Navbar'
import Section from '../components/Section'
import { Palette, Sparkles, PenTool, Camera } from 'lucide-react'

const services = [
  { icon: Palette, title: 'Brand identity design', desc: 'Marks, typography, color, and systems with clarity and restraint.' },
  { icon: Sparkles, title: 'Social media design', desc: 'Templated and bespoke content that’s lightweight and on-brand.' },
  { icon: PenTool, title: 'Creative direction', desc: 'Concepts, art direction, and visual tone that carry across channels.' },
  { icon: Camera, title: 'Marketing visuals', desc: 'Graphics and launch assets that feel polished and premium.' },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-[#0a0b12] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-fuchsia-900/20 to-cyan-900/30" />
      <Navbar />

      <Section title="Services">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 transition">
              <s.icon className="h-6 w-6 text-white/80" />
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 p-8">
          <h3 className="text-2xl font-semibold">Need something not listed?</h3>
          <p className="mt-2 text-white/70">We tailor scopes to fit teams and timelines. Tell us what you’re building.</p>
          <a href="/contact" className="mt-6 inline-flex items-center rounded-full bg-white text-black px-5 py-2.5 font-semibold shadow-lg shadow-white/20 hover:shadow-white/30 transition">Start a project</a>
        </div>
      </Section>
    </div>
  )
}
