import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const Item = ({ to, label }) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 via-fuchsia-400 to-cyan-400 shadow-inner shadow-white/20" />
            <span className="text-white font-semibold tracking-wide">Virgo Studios</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Item to="/" label="Home" />
            <Item to="/about" label="About" />
            <Item to="/services" label="Services" />
            <Item to="/portfolio" label="Portfolio" />
            <Item to="/contact" label="Contact" />
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white focus:outline-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-4 mt-2 rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl px-3 py-2">
          <div className="flex flex-col">
            <Item to="/" label="Home" />
            <Item to="/about" label="About" />
            <Item to="/services" label="Services" />
            <Item to="/portfolio" label="Portfolio" />
            <Item to="/contact" label="Contact" />
          </div>
        </div>
      )}
    </header>
  )
}
