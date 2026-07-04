const row1 = [
  { text: "React",        cat: "frontend" as const },
  { text: "Next.js",      cat: "frontend" as const },
  { text: "TypeScript",   cat: "frontend" as const },
  { text: "Vue.js",       cat: "frontend" as const },
  { text: "React Native", cat: "frontend" as const },
  { text: "Flutter",      cat: "frontend" as const },
  { text: "Node.js",      cat: "backend"  as const },
  { text: "Python",       cat: "backend"  as const },
  { text: "Go",           cat: "backend"  as const },
  { text: "Java",         cat: "backend"  as const },
  { text: ".NET",         cat: "backend"  as const },
  { text: "GraphQL",      cat: "backend"  as const },
];

const row2 = [
  { text: "AWS",           cat: "cloud" as const },
  { text: "Google Cloud",  cat: "cloud" as const },
  { text: "Azure",         cat: "cloud" as const },
  { text: "Docker",        cat: "cloud" as const },
  { text: "Kubernetes",    cat: "cloud" as const },
  { text: "Terraform",     cat: "cloud" as const },
  { text: "PostgreSQL",    cat: "data"  as const },
  { text: "MongoDB",       cat: "data"  as const },
  { text: "Redis",         cat: "data"  as const },
  { text: "Elasticsearch", cat: "data"  as const },
  { text: "Kafka",         cat: "data"  as const },
  { text: "ClickHouse",    cat: "data"  as const },
];

const catStyle = {
  frontend: { bg: "rgba(14,165,233,0.14)",  text: "#7DD3FC" },
  backend:  { bg: "rgba(167,139,250,0.14)", text: "#C4B5FD" },
  cloud:    { bg: "rgba(34,211,238,0.14)",  text: "#67E8F9" },
  data:     { bg: "rgba(52,211,153,0.14)",  text: "#6EE7B7" },
};

function MarqueeRow({
  items,
  duration,
  reverse = false,
}: {
  items: { text: string; cat: keyof typeof catStyle }[];
  duration: number;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className="flex items-center gap-3 w-max marquee-track py-1.5"
        style={{
          animation: `${reverse ? "marqueeReverse" : "marquee"} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="shrink-0 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              backgroundColor: catStyle[item.cat].bg,
              color: catStyle[item.cat].text,
            }}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="tech" className="py-20 lg:py-28 bg-ink border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-14">
        <p className="text-accent-tint/60 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
          Technology
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
            Our stack of choice.
          </h2>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#7DD3FC" }} />
              <span className="text-white/40">Frontend</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C4B5FD" }} />
              <span className="text-white/40">Backend</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#67E8F9" }} />
              <span className="text-white/40">Cloud</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#6EE7B7" }} />
              <span className="text-white/40">Data</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <MarqueeRow items={row1} duration={42} />
        <MarqueeRow items={row2} duration={54} reverse />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-10">
        <p className="text-xs text-white/25">
          Not listed? We adapt to your existing stack rather than replacing it.
        </p>
      </div>
    </section>
  );
}
