import Navbar from '../Navbar'
import Section from '../components/Section'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // Fake delay to simulate submit
    await new Promise((r) => setTimeout(r, 600))
    setStatus('Thanks — we’ll get back to you soon!')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-[#0a0b12] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-fuchsia-900/20 to-cyan-900/30" />
      <Navbar />

      <Section title="Let’s build something together">
        <form onSubmit={submit} className="max-w-2xl space-y-4">
          <div>
            <label className="block text-sm text-white/70">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-white/70">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="you@company.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-white/70">Message</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Tell us a bit about your project..."
              required
            />
          </div>
          <button type="submit" className="inline-flex items-center rounded-full bg-white text-black px-5 py-2.5 font-semibold shadow-lg shadow-white/20 hover:shadow-white/30 transition">Send</button>
          {status && <p className="text-sm text-white/70">{status}</p>}
        </form>
      </Section>
    </div>
  )
}
