import Navbar from '../Navbar'
import Section from '../components/Section'
import { motion } from 'framer-motion'

const projects = Array.from({ length: 8 }).map((_, i) => ({
  title: `Project ${i + 1}`,
  desc: 'Brand identity, web, and content system',
  image: '',
}))

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0b12] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-fuchsia-900/20 to-cyan-900/30" />
      <Navbar />

      <Section title="Selected Work">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
            >
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <span className="text-xs text-white/60">Case study</span>
                </div>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-3 h-px bg-gradient-to-r from-white/10 via-white/40 to-white/10" />
                <p className="mt-3 text-xs text-white/60">Goals: clarity, consistency, and presence. Results: cohesive system with measurable uplift.</p>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>
    </div>
  )
}
