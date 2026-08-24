export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 font-serif">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-zinc-200">
        <div className="text-2xl font-bold tracking-tight">The English Academy.</div>
        <div className="hidden md:flex gap-8 text-sm font-medium font-sans uppercase tracking-widest text-zinc-500">
          <a href="#" className="hover:text-zinc-900 transition-colors">Courses</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Teachers</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Testimonials</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Blog</a>
        </div>
        <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-6 py-2.5 rounded font-sans font-semibold transition-all">
          Book a Free Test
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-24 pb-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-medium leading-[1.1] text-zinc-900">
            Expert Instruction for<br />
            <span className="italic text-zinc-500">Global Achievers.</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto font-sans font-light leading-relaxed">
            A rigorous, proven methodology to help you master the English language. Achieve your target IELTS score with highly accredited instructors.
          </p>
          <div className="flex gap-4 justify-center pt-4 font-sans">
            <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded font-semibold transition-colors text-lg">
              Register for Consultation
            </button>
            <button className="px-8 py-4 rounded font-semibold text-zinc-600 hover:text-zinc-900 transition-colors border border-zinc-300 hover:border-zinc-400">
              Explore Our Methodology
            </button>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            { stat: "98%", label: "Exam Pass Rate", icon: "📈" },
            { stat: "15,000+", label: "Graduated Students", icon: "🎓" },
            { stat: "25+", label: "Years of Excellence", icon: "🏛️" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-zinc-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
              <div className="text-4xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">{item.stat}</div>
              <div className="text-sm font-sans font-medium text-zinc-500 uppercase tracking-wide">{item.label}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
