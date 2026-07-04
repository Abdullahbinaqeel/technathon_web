export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-ground" style={{ borderTop: "1px solid #E5E7EB" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#1B3D6F" }}>
            Get in Touch
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-bold leading-tight tracking-tight mb-4" style={{ color: "#0D1F3C" }}>
            Ready to build something exceptional?
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#6B7280" }}>
            Tell us about your project and we will get back to you within 24 hours.
            No sales call required, just a direct conversation with an engineer.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#0D1F3C" }}
            >
              Start a Conversation
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href="mailto:technathon.support@gmail.com"
              className="inline-flex items-center gap-1.5 text-sm font-medium group transition-opacity hover:opacity-70"
              style={{ color: "#6B7280" }}
            >
              technathon.support@gmail.com
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
