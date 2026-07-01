const differentiators = [
  {
    number: "01",
    title: "Senior engineers, not juniors.",
    description:
      "Every team we assemble is senior-weighted. The people who architect your system are the same people building it. No hand-offs between consultants and coders.",
  },
  {
    number: "02",
    title: "Outcomes over output.",
    description:
      "We measure success by business results — conversion rates, uptime, revenue impact — not lines of code or tickets closed. Your KPIs are our KPIs.",
  },
  {
    number: "03",
    title: "Full ownership, zero ambiguity.",
    description:
      "One point of accountability from kickoff to production. We own the architecture, the delivery, and the quality — no diffusion of responsibility across vendors.",
  },
  {
    number: "04",
    title: "Transparent by default.",
    description:
      "You get full access to our project management tools, code repositories, and weekly written updates. No surprises, no black boxes.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-ground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#1B3D6F" }}>
            Why Technathon
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-bold leading-tight tracking-tight" style={{ color: "#0D1F3C" }}>
              Built different
              <br className="hidden sm:block" />
              by design.
            </h2>
            <p className="text-sm leading-relaxed max-w-xs sm:text-right" style={{ color: "#6B7280" }}>
              A small, deliberate engineering firm that takes on work we believe in and delivers without compromise.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {differentiators.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl p-7 relative overflow-hidden bg-surface group hover:bg-accent-tint transition-colors duration-200 cursor-default"
              style={{ border: "1px solid #E5E7EB" }}
            >
              {/* Ghost number */}
              <span
                className="absolute -bottom-4 -right-2 text-[7.5rem] font-black leading-none pointer-events-none select-none tabular-nums"
                style={{ color: "#0D1F3C", opacity: 0.04 }}
              >
                {item.number}
              </span>

              {/* Step label */}
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-4 relative z-10"
                style={{ color: "#9CA3AF" }}
              >
                Reason {item.number}
              </p>

              <h3 className="text-base font-bold mb-3 leading-snug relative z-10" style={{ color: "#0D1F3C" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed relative z-10" style={{ color: "#6B7280" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
