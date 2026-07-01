const industries = [
  {
    name: "Financial Services & Fintech",
    description:
      "Payment systems, trading platforms, risk engines, and core banking modernization.",
  },
  {
    name: "Healthcare & Life Sciences",
    description:
      "Patient management, EHR systems, telemedicine platforms, and clinical data tools.",
  },
  {
    name: "E-commerce & Retail",
    description:
      "Commerce platforms, inventory systems, recommendation engines, and POS integrations.",
  },
  {
    name: "SaaS & Cloud Products",
    description:
      "Multi-tenant architectures, billing infrastructure, API platforms, and growth tooling.",
  },
  {
    name: "Logistics & Supply Chain",
    description:
      "Fleet management, route optimization, warehouse systems, and real-time tracking.",
  },
  {
    name: "Education Technology",
    description:
      "LMS platforms, adaptive learning tools, assessment engines, and student analytics.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-24">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Industries
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink leading-tight tracking-tight mb-6">
              Deep expertise across key sectors.
            </h2>
            <p className="text-muted text-base leading-relaxed">
              We have built production systems in complex, regulated industries
              where reliability and performance are non-negotiable.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-border">
            {industries.map((industry, i) => (
              <div
                key={industry.name}
                className={`py-7 pr-8 border-b border-border ${
                  i % 2 === 0 ? "sm:border-r sm:border-border" : ""
                }`}
              >
                <h3 className="text-sm font-semibold text-ink mb-2">
                  {industry.name}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
