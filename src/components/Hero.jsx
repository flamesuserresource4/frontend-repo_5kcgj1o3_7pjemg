import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-blue-300/80 uppercase tracking-widest">
              Futuristic Care • AI-Assisted • 24/7
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Next‑Gen Healthcare, Centered on You
            </h1>
            <p className="mt-4 text-lg text-blue-200/90 max-w-xl">
              Experience precision medicine powered by advanced imaging and real-time monitoring. Book appointments, consult specialists, and access your records securely.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#book" className="inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 font-medium transition-colors">
                Book Appointment
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-blue-400/30 text-blue-100 hover:border-blue-300/60 hover:text-white px-6 py-3 font-medium transition-colors">
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
        <div className="lg:col-span-6" />
      </div>
    </section>
  );
}

export default Hero;