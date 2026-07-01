"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();
    const duration = 2000;
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(tick);
      else setVal(target);
    };
    requestAnimationFrame(tick);
  }, [active, target]);
  return val;
}

const statsData = [
  { target: 200, suffix: "+",    label: "Projects Delivered" },
  { target: 85,  suffix: "+",    label: "Active Clients" },
  { target: 12,  suffix: "+",    label: "Countries Served" },
  { target: 8,   suffix: " Yrs", label: "Industry Experience" },
];

function StatItem({ stat, active, index }: { stat: typeof statsData[0]; active: boolean; index: number }) {
  const count = useCountUp(stat.target, active);
  const isLast = index === statsData.length - 1;
  return (
    <div
      className={[
        "py-10 px-8 lg:px-12",
        !isLast ? "border-r border-border" : "",
      ].join(" ")}
    >
      <dd
        className="text-4xl lg:text-5xl font-bold tabular-nums leading-none mb-2"
        style={{ color: "#0D1F3C" }}
      >
        {count}{stat.suffix}
      </dd>
      <dt className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
        {stat.label}
      </dt>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-surface" style={{ borderBottom: "1px solid #E5E7EB" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ borderTop: "1px solid #E5E7EB" }}>
          {statsData.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={active} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
