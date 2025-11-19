import { HeartPulse, BrainCircuit, Syringe, ShieldHeartbeat } from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "Cardiology",
    desc: "Advanced cardiac imaging, stress tests, and preventive care.",
  },
  {
    icon: BrainCircuit,
    title: "Neurology",
    desc: "AI-assisted diagnostics and personalized treatment plans.",
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    desc: "Full immunization coverage and travel vaccines.",
  },
  {
    icon: ShieldHeartbeat,
    title: "Emergency Care",
    desc: "24/7 triage with rapid response teams and telemedicine.",
  },
];

function Services() {
  return (
    <section id="services" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">World‑Class Services</h2>
          <p className="mt-3 text-blue-200/80 max-w-2xl mx-auto">
            Integrated care across specialties using the latest medical technology.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:border-blue-400/40 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-400/30 text-blue-300 flex items-center justify-center">
                <Icon />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;