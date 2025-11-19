import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CTA />
        <footer id="contact" className="border-t border-white/10 bg-slate-950/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} PulseCare — All rights reserved.</p>
            <div className="text-blue-200/70 text-sm">Privacy • Terms • Accessibility</div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;