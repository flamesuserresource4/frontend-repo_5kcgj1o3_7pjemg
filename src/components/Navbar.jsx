import { Menu, Stethoscope, Phone, MapPin } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-blue-300">
            <Stethoscope size={20} />
          </div>
          <div>
            <p className="text-white font-semibold leading-none">PulseCare</p>
            <p className="text-xs text-blue-300/70 -mt-0.5">Advanced Healthcare</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-blue-100/80">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#doctors" className="hover:text-white transition-colors">Doctors</a>
          <a href="#technology" className="hover:text-white transition-colors">Technology</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+18001234567" className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
            <Phone size={18} />
            <span className="text-sm">1-800-123-4567</span>
          </a>
          <a href="#map" className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
            <MapPin size={18} />
            <span className="text-sm">Find us</span>
          </a>
          <a href="#book" className="ml-2 inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 text-sm font-medium transition-colors">Book Appointment</a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 text-blue-100">
          <Menu />
        </button>
      </div>
    </header>
  );
}

export default Navbar;