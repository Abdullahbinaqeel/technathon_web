"use client";
import { useRef } from "react";

const caseStudies = [
  {
    tag: "Fintech",
    title: "Core Banking Platform Rebuild",
    description:
      "Rebuilt a legacy payment processing system for a regional bank, migrating 15 years of transaction history with zero downtime.",
    metric: "65%",
    metricLabel: "faster transaction processing",
    tags: ["Next.js", "Go", "PostgreSQL", "AWS"],
    accent: "#1B3D6F",
    accentLight: "#EBF0F8",
  },
  {
    tag: "Healthcare",
    title: "Integrated Patient Management",
    description:
      "Designed and built an end-to-end patient management platform for a multi-site hospital network, replacing five disconnected tools.",
    metric: "40%",
    metricLabel: "reduction in administrative overhead",
    tags: ["React", "Node.js", "MongoDB", "Azure"],
    accent: "#0D7B4F",
    accentLight: "#ECFDF5",
  },
  {
    tag: "SaaS",
    title: "Real-Time Analytics Dashboard",
    description:
      "Engineered a high-throughput analytics platform handling 50M+ events per day with sub-second query response times.",
    metric: "28%",
    metricLabel: "increase in user retention",
    tags: ["React", "Python", "Kafka", "ClickHouse"],
    accent: "#6D28D9",
    accentLight: "#F5F3FF",
  },
  {
    tag: "Logistics",
    title: "Supply Chain Visibility Platform",
    description:
      "Built a real-time tracking system for a global logistics firm, consolidating data from 20+ carrier APIs into a unified dashboard.",
    metric: "3×",
    metricLabel: "improvement in on-time delivery",
    tags: ["React", "Go", "PostgreSQL", "GCP"],
    accent: "#B45309",
    accentLight: "#FFFBEB",
  },
];

export default function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) =>
    scrollRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });

  return (
    <section id="work" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#1B3D6F" }}>
              Selected Work
            </p>
            <h2 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-bold leading-tight tracking-tight" style={{ color: "#0D1F3C" }}>
              Results that speak
              <br className="hidden lg:block" />
              for themselves.
            </h2>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <a href="#contact" className="hidden sm:inline-flex text-sm font-medium mr-4 transition-opacity hover:opacity-70" style={{ color: "#6B7280" }}>
              See all →
            </a>
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-ground"
              style={{ border: "1px solid #E5E7EB", color: "#6B7280" }}
              aria-label="Scroll left"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-ground"
              style={{ border: "1px solid #E5E7EB", color: "#6B7280" }}
              aria-label="Scroll right"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2"
        >
          {caseStudies.map((cs) => (
            <article
              key={cs.title}
              className="shrink-0 w-[300px] sm:w-[360px] lg:w-[380px] snap-start rounded-2xl overflow-hidden bg-surface group transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{ border: "1px solid #E5E7EB", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
            >
              {/* Metric header */}
              <div className="px-6 pt-6 pb-5" style={{ backgroundColor: cs.accentLight, borderBottom: "1px solid #E5E7EB" }}>
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em] mb-3 block"
                  style={{ color: cs.accent }}
                >
                  {cs.tag}
                </span>
                <p className="text-5xl font-bold tabular-nums leading-none mb-1" style={{ color: cs.accent }}>
                  {cs.metric}
                </p>
                <p className="text-xs" style={{ color: cs.accent, opacity: 0.7 }}>{cs.metricLabel}</p>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-sm font-semibold mb-2.5 leading-snug" style={{ color: "#0D1F3C" }}>
                  {cs.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  {cs.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: "#F5F5F3", color: "#6B7280", border: "1px solid #E5E7EB" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
