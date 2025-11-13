import Navbar from '../Navbar'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { motion } from 'framer-motion'
import { Sparkles, Palette, PenTool, Camera } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0b12] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-fuchsia-900/20 to-cyan-900/30" />
      <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-20 -right-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <Navbar />
      <Hero />

      <Section eyebrow="What we do" title="Design that’s clean, modern, and quietly confident">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Palette, title: 'Brand Identity', desc: 'Logos, systems, and guidelines that feel timeless and intentional.' },
            { icon: Sparkles, title: 'Social Media', desc: 'Content design that is scroll-stopping but never loud or messy.' },
            { icon: PenTool, title: 'Creative Direction', desc: 'Concepts, art direction, and visual storytelling across touchpoints.' },
            { icon: Camera, title: 'Marketing Visuals', desc: 'Campaign assets, launch graphics, and product visuals with polish.' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <item.icon className="h-6 w-6 text-white/80" />
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Approach" title="Balanced craft, thoughtful process">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Listen & Learn', desc: 'We start by understanding goals, audience, and the feeling your brand should evoke.' },
            { title: 'Design & Refine', desc: 'Explorations turn into systems. We keep it clean, elegant, and purposeful.' },
            { title: 'Deliver & Support', desc: 'Assets, guidelines, and motion-ready visuals that scale with your brand.' },
          ].map((step, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/60">0{i + 1}</div>
              <h4 className="mt-2 text-xl font-semibold text-white">{step.title}</h4>
              <p className="mt-2 text-white/70">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 p-8">
          <div>
            <h3 className="text-2xl font-semibold text-white">Have a project in mind?</h3>
            <p className="mt-2 text-white/70">Let’s make something beautiful and effective together.</p>
          </div>
          <a href="/contact" className="inline-flex items-center rounded-full bg-white text-black px-5 py-2.5 font-semibold shadow-lg shadow-white/20 hover:shadow-white/30 transition whitespace-nowrap">Start a project</a>
        </div>
      </Section>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60">
          <p>© {new Date().getFullYear()} Virgo Studios. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/services" className="hover:text-white">Services</a>
            <a href="/portfolio" className="hover:text-white">Portfolio</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
