const services = [
  {
    number: "01",
    title: "Custom Software Development",
    description:
      "From web platforms to enterprise systems, we build software tailored to your exact requirements, using the right architecture for your scale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Cloud Architecture & DevOps",
    description:
      "Design, migrate, and optimize cloud infrastructure. We build automated CI/CD pipelines and manage deployments that ship on time, every time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    description:
      "Integrate intelligent systems that learn from your data. From predictive analytics to LLM-powered features, we build AI that delivers measurable outcomes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Mobile Development",
    description:
      "Native iOS, Android, and cross-platform mobile applications built for performance, usability, and long-term maintainability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Product Strategy & UX Design",
    description:
      "Shape your product vision from the ground up. We bring together strategic thinking and user-centered design to build products people actually use.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Quality Assurance & Testing",
    description:
      "Comprehensive QA strategies, both automated and manual, that ensure your software is reliable, performant, and production-ready.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-ground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#1B3D6F" }}>
            What We Do
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-bold leading-tight tracking-tight" style={{ color: "#0D1F3C" }}>
              End-to-end engineering
              <br className="hidden sm:block" />
              for ambitious products.
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium shrink-0 transition-opacity hover:opacity-70"
              style={{ color: "#6B7280" }}
            >
              View all services
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-surface p-7 group transition-colors hover:bg-accent-tint cursor-default relative overflow-hidden"
            >
              {/* Ghost number watermark */}
              <span
                className="absolute top-2 right-4 text-[5.5rem] font-black leading-none pointer-events-none select-none tabular-nums"
                style={{ color: "#0D1F3C", opacity: 0.04 }}
              >
                {service.number}
              </span>

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 relative z-10"
                style={{ backgroundColor: "#EBF0F8", color: "#1B3D6F" }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-sm font-semibold mb-2.5 leading-snug relative z-10" style={{ color: "#0D1F3C" }}>
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed relative z-10" style={{ color: "#6B7280" }}>
                {service.description}
              </p>
              <div className="mt-5 pt-4 relative z-10" style={{ borderTop: "1px solid #E5E7EB" }}>
                <a
                  href="#contact"
                  className="text-xs font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200"
                  style={{ color: "#1B3D6F" }}
                >
                  Learn more
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3 h-3">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
