const capabilities = [
  { label: "Custom Software Development", dot: "#1B3D6F" },
  { label: "Cloud Architecture & DevOps",  dot: "#0891B2" },
  { label: "AI & Machine Learning",         dot: "#7C3AED" },
  { label: "Mobile Development",            dot: "#059669" },
  { label: "Product Strategy & UX",         dot: "#D97706" },
  { label: "Quality Assurance & Testing",   dot: "#E11D48" },
  { label: "Data Engineering",              dot: "#0F766E" },
  { label: "System Integration",            dot: "#6366F1" },
];

export default function Ticker() {
  return (
    <div className="bg-ink border-y border-white/10 py-3.5 overflow-hidden">
      <div
        className="flex items-center w-max marquee-track"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {[...capabilities, ...capabilities].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 px-7 shrink-0">
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: item.dot }}
            />
            <span className="text-[11px] font-medium text-white/55 tracking-[0.08em] uppercase whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
