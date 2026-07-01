const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by deeply understanding your business, users, constraints, and goals. No assumptions — just rigorous listening and structured problem framing.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architecture, UX flows, data models, and interfaces are designed before a single line of production code is written. Clarity up front saves months downstream.",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "Senior engineers write clean, tested, maintainable code. We work in iterative two-week sprints with continuous delivery and full visibility into progress.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "We don't disappear at launch. We optimize for growth — performance tuning, infrastructure scaling, and ongoing product evolution as your business demands.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#1B3D6F" }}>
            How It Works
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-bold leading-tight tracking-tight" style={{ color: "#0D1F3C" }}>
            How we deliver results.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl p-7 relative overflow-hidden bg-surface group hover:bg-ground transition-colors duration-200 cursor-default"
              style={{ border: "1px solid #E5E7EB" }}
            >
              {/* Ghost number */}
              <span
                className="absolute -bottom-4 -right-2 text-[7.5rem] font-black leading-none pointer-events-none select-none tabular-nums"
                style={{ color: "#0D1F3C", opacity: 0.04 }}
              >
                {step.number}
              </span>

              {/* Step badge */}
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center mb-6 relative z-10"
                style={{ backgroundColor: "#EBF0F8" }}
              >
                <span className="text-xs font-bold tabular-nums" style={{ color: "#1B3D6F" }}>
                  {step.number}
                </span>
              </div>

              <h3 className="text-sm font-semibold mb-3 relative z-10" style={{ color: "#0D1F3C" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed relative z-10" style={{ color: "#6B7280" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
