function CTA() {
  return (
    <section id="book" className="relative py-16 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(500px_circle_at_90%_10%,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600 to-blue-500 p-8 sm:p-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Book your appointment in minutes</h3>
              <p className="mt-2 text-blue-50/90">Secure scheduling, instant confirmations, and reminders straight to your phone.</p>
            </div>
            <form className="bg-white/10 backdrop-blur rounded-xl p-4 grid gap-3">
              <input className="h-11 rounded-lg bg-white/10 border border-white/20 px-3 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Full name" />
              <input className="h-11 rounded-lg bg-white/10 border border-white/20 px-3 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Email" type="email" />
              <input className="h-11 rounded-lg bg-white/10 border border-white/20 px-3 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Preferred date" type="date" />
              <button type="button" className="h-11 rounded-lg bg-white text-slate-900 font-semibold hover:bg-blue-50 transition-colors">Request Booking</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;