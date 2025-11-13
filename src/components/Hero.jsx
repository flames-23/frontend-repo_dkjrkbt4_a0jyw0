import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />
      </div>

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <motion.h1
              className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Transforming ideas into immersive visual experiences
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              Virgo Studios is a creative design agency crafting clean visuals and thoughtful stories for brands that want to feel modern, minimal, and unmistakably human.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <a href="/portfolio" className="inline-flex items-center rounded-full bg-white text-black px-5 py-2.5 font-semibold shadow-lg shadow-white/20 hover:shadow-white/30 transition">Explore Work</a>
              <a href="/contact" className="inline-flex items-center rounded-full border border-white/30 text-white px-5 py-2.5 font-semibold hover:border-white/50 transition">Start a Project</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
