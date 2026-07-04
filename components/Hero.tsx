"use client";

import Link from "next/link";

function CornerBrackets() {
  const size = 18;
  const stroke = 2;
  const color = "#0D1F3C";
  const opacity = 0.35;
  return (
    <>
      {/* Top-left */}
      <svg className="absolute top-0 left-0" width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <path d={`M${size} ${stroke / 2} H${stroke / 2} V${size}`} stroke={color} strokeWidth={stroke} strokeOpacity={opacity} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {/* Top-right */}
      <svg className="absolute top-0 right-0" width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <path d={`M0 ${stroke / 2} H${size - stroke / 2} V${size}`} stroke={color} strokeWidth={stroke} strokeOpacity={opacity} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {/* Bottom-left */}
      <svg className="absolute bottom-0 left-0" width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <path d={`M${size} ${size - stroke / 2} H${stroke / 2} V0`} stroke={color} strokeWidth={stroke} strokeOpacity={opacity} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {/* Bottom-right */}
      <svg className="absolute bottom-0 right-0" width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <path d={`M0 ${size - stroke / 2} H${size - stroke / 2} V0`} stroke={color} strokeWidth={stroke} strokeOpacity={opacity} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
}

const bars = [
  { x: 278, h: 36, delay: "1.5s", op: 0.3 },
  { x: 293, h: 24, delay: "1.6s", op: 0.45 },
  { x: 308, h: 32, delay: "1.7s", op: 0.38 },
  { x: 323, h: 44, delay: "1.8s", op: 0.65 },
  { x: 338, h: 38, delay: "1.9s", op: 0.52 },
  { x: 353, h: 51, delay: "2.0s", op: 0.9 },
];

function DashboardIllustration() {
  return (
    <svg viewBox="0 0 460 480" fill="none" className="w-full max-h-[420px]">
      <defs>
        <linearGradient id="chartLine" x1="50" y1="0" x2="390" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1B3D6F" />
          <stop offset="55%" stopColor="#3B6FBF" />
          <stop offset="100%" stopColor="#22B8CF" />
        </linearGradient>
        <linearGradient id="chartFill" x1="0" y1="103" x2="0" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B6FBF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3B6FBF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="tooltipGrad" x1="296" y1="76" x2="368" y2="104" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1B3D6F" />
          <stop offset="100%" stopColor="#0D1F3C" />
        </linearGradient>
        <linearGradient id="barGrad" x1="0" y1="274" x2="0" y2="354" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22B8CF" />
          <stop offset="100%" stopColor="#1B3D6F" />
        </linearGradient>
      </defs>
      {/* Main card */}
      <rect x="20" y="28" width="370" height="228" rx="14"
        fill="white" stroke="#E5E7EB" strokeWidth="1.5"
        style={{ animation: "fadeSlideUp 0.7s ease forwards 0.4s", opacity: 0 }} />
      <circle cx="44" cy="50" r="5" fill="#E5E7EB" />
      <circle cx="60" cy="50" r="5" fill="#E5E7EB" />
      <circle cx="76" cy="50" r="5" fill="#E5E7EB" />
      <line x1="20" y1="68" x2="390" y2="68" stroke="#E5E7EB" strokeWidth="1" />
      {/* Chart area fill */}
      <path
        d="M50,220 L88,184 L126,199 L162,153 L200,169 L238,128 L278,147 L318,103 L358,119 L390,106 L390,220 Z"
        fill="url(#chartFill)" />
      {/* Chart line */}
      <path
        d="M50,220 L88,184 L126,199 L162,153 L200,169 L238,128 L278,147 L318,103 L358,119 L390,106"
        stroke="url(#chartLine)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray="720"
        style={{ strokeDashoffset: 720, animation: "drawLine 2.4s cubic-bezier(.4,0,.2,1) forwards 0.7s" }} />
      <circle cx="162" cy="153" r="4" fill="#3B6FBF"
        style={{ animation: "fadeSlideUp 0.3s ease forwards 2.0s", opacity: 0 }} />
      <circle cx="238" cy="128" r="4" fill="#3B6FBF"
        style={{ animation: "fadeSlideUp 0.3s ease forwards 2.2s", opacity: 0 }} />
      {/* Highlight point */}
      <circle cx="318" cy="103" r="10" fill="none" stroke="#22B8CF" strokeOpacity="0.3" strokeWidth="1.5"
        style={{ transformBox: "fill-box", transformOrigin: "center", animation: "ringPulse 2s ease-out infinite 2.8s", opacity: 0 }} />
      <circle cx="318" cy="103" r="5" fill="#22B8CF"
        style={{ animation: "fadeSlideUp 0.3s ease forwards 2.4s", opacity: 0 }} />
      {/* Tooltip */}
      <rect x="296" y="76" width="72" height="28" rx="6"
        fill="url(#tooltipGrad)" strokeWidth="0"
        style={{ animation: "fadeSlideUp 0.4s ease forwards 2.6s", opacity: 0 }} />
      <text x="332" y="95" textAnchor="middle" fill="white" fontSize="9" fontWeight="600"
        style={{ animation: "fadeSlideUp 0.4s ease forwards 2.6s", opacity: 0 }}>+24.3%</text>
      {/* Bottom cards row */}
      <rect x="20" y="274" width="108" height="80" rx="12"
        fill="white" stroke="#E5E7EB" strokeWidth="1.5"
        style={{ animation: "fadeSlideUp 0.6s ease forwards 0.9s, floatUpDown 5.5s ease-in-out infinite 1.8s", opacity: 0 }} />
      <line x1="36" y1="298" x2="96" y2="298" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="36" y1="316" x2="76" y2="316" stroke="#0D1F3C" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="36" y1="334" x2="88" y2="334" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="142" y="274" width="108" height="80" rx="12"
        fill="white" stroke="#E5E7EB" strokeWidth="1.5"
        style={{ animation: "fadeSlideUp 0.6s ease forwards 1.1s, floatUpDown 6.5s ease-in-out infinite 0.8s", opacity: 0 }} />
      <line x1="158" y1="298" x2="218" y2="298" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="158" y1="316" x2="198" y2="316" stroke="#0D1F3C" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="158" y1="334" x2="208" y2="334" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" />
      {/* Bar chart card */}
      <rect x="264" y="274" width="126" height="80" rx="12"
        fill="white" stroke="#E5E7EB" strokeWidth="1.5"
        style={{ animation: "fadeSlideUp 0.6s ease forwards 1.3s, floatUpDown 7s ease-in-out infinite 3.0s", opacity: 0 }} />
      {bars.map(({ x, h, delay, op }) => (
        <rect key={x}
          x={x} y={334 - h} width="10" height={h} rx="2"
          fill="url(#barGrad)" fillOpacity={op}
          style={{
            transformBox: "fill-box" as const,
            transformOrigin: "bottom center",
            animation: `barGrow 0.45s cubic-bezier(.4,0,.2,1) forwards ${delay}`,
            transform: "scaleY(0)",
          }} />
      ))}
      {/* Bottom two cards */}
      <rect x="20" y="372" width="173" height="90" rx="12"
        fill="white" stroke="#E5E7EB" strokeWidth="1.5"
        style={{ animation: "fadeSlideUp 0.6s ease forwards 1.2s", opacity: 0 }} />
      <line x1="36" y1="395" x2="168" y2="395" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="36" y1="413" x2="140" y2="413" stroke="#E5E7EB" strokeWidth="1" strokeLinecap="round" />
      <circle cx="44" cy="445" r="10" fill="#EBF0F8" />
      <circle cx="66" cy="445" r="10" fill="#EBF0F8" />
      <circle cx="88" cy="445" r="10" fill="#EBF0F8" />
      <rect x="207" y="372" width="183" height="90" rx="12"
        fill="white" stroke="#E5E7EB" strokeWidth="1.5"
        style={{ animation: "fadeSlideUp 0.6s ease forwards 1.4s", opacity: 0 }} />
      <line x1="223" y1="395" x2="358" y2="395" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="223" y1="413" x2="320" y2="413" stroke="#E5E7EB" strokeWidth="1" strokeLinecap="round" />
      <rect x="223" y="435" width="150" height="5" rx="2.5" fill="#E5E7EB" />
      <rect x="223" y="435" width="94" height="5" rx="2.5" fill="#1B3D6F" fillOpacity="0.5" />
      {/* Floating badge top-right */}
      <rect x="316" y="16" width="124" height="46" rx="10"
        fill="white" stroke="#E5E7EB" strokeWidth="1.5"
        style={{ animation: "fadeSlideUp 0.5s ease forwards 0.5s, floatUpDown 4.2s ease-in-out infinite 2.5s", opacity: 0 }} />
      <circle cx="332" cy="39" r="8" fill="#EBF0F8" />
      <line x1="348" y1="33" x2="424" y2="33" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="348" y1="47" x2="403" y2="47" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col lg:flex-row overflow-hidden relative bg-surface"
      style={{ paddingTop: "68px" }}
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #E5E7EB 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.45,
        }}
      />

      {/* ── Left: text panel ── */}
      <div className="flex-1 relative z-10 flex items-center">
        <div className="w-full px-8 lg:pl-16 xl:pl-24 lg:pr-8 py-16 lg:py-0 lg:min-h-[calc(100vh-68px)] flex items-center">
          <div className="max-w-xl w-full">

            {/* Headline */}
            <h1
              className="font-bold leading-[1.06] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)", color: "#0D1F3C" }}
            >
              <span className="block" style={{ animation: "fadeSlideUp 0.65s ease forwards 0.2s", opacity: 0 }}>
                We build the
              </span>
              <span className="block" style={{ animation: "fadeSlideUp 0.65s ease forwards 0.35s", opacity: 0 }}>
                software your
              </span>
              <span
                className="block"
                style={{
                  animation: "fadeSlideUp 0.65s ease forwards 0.5s",
                  opacity: 0,
                  background: "linear-gradient(90deg, #0D1F3C 0%, #1B3D6F 60%, #3B6FBF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                business runs on.
              </span>
            </h1>

            {/* Body */}
            <p
              className="text-base leading-relaxed max-w-md mb-10"
              style={{ color: "#6B7280", animation: "fadeSlideUp 0.6s ease forwards 0.65s", opacity: 0 }}
            >
              Technathon is a full-service engineering firm helping companies
              design, build, and scale digital products with precision and
              purpose.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap items-center gap-4"
              style={{ animation: "fadeSlideUp 0.6s ease forwards 0.8s", opacity: 0 }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#0D1F3C" }}
              >
                Start a Project
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center gap-1.5 text-sm font-medium group transition-colors"
                style={{ color: "#6B7280" }}
              >
                <span className="group-hover:text-ink transition-colors">View our work</span>
                <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
              </Link>
            </div>

            {/* Trust badges */}
            <div
              className="mt-14 pt-8 flex flex-wrap items-center gap-6"
              style={{
                borderTop: "1px solid #E5E7EB",
                animation: "fadeSlideUp 0.6s ease forwards 0.95s",
                opacity: 0,
              }}
            >
              {["Microsoft Partner", "AWS Certified", "ISO 27001", "SOC 2 Type II"].map((b) => (
                <span key={b} className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#9CA3AF" }}>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: illustration panel ── */}
      <div className="hidden lg:flex lg:w-[48%] xl:w-[46%] relative overflow-hidden items-center justify-center">
        {/* Ambient gradient blobs */}
        <div
          className="absolute -top-16 -right-10 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(59,111,191,0.28) 0%, rgba(59,111,191,0) 70%)",
            filter: "blur(10px)",
            animation: "blobDrift1 16s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[-8%] left-[-6%] w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(34,184,207,0.24) 0%, rgba(34,184,207,0) 70%)",
            filter: "blur(10px)",
            animation: "blobDrift2 20s ease-in-out infinite",
          }}
        />

        {/* Subtle vertical divider */}
        <div className="absolute left-0 top-[10%] bottom-[10%] w-px" style={{ backgroundColor: "#E5E7EB" }} />

        {/* Corner-bracketed illustration frame */}
        <div
          className="relative mx-10 xl:mx-14 w-full"
          style={{
            animation: "fadeSlideUp 0.8s ease forwards 0.3s",
            opacity: 0,
          }}
        >
          <div className="relative p-6">
            <CornerBrackets />
            <DashboardIllustration />
          </div>

          {/* Industry badge overlay */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface"
            style={{ border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(13,31,60,0.08)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#1B3D6F" }} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "#0D1F3C" }}>
              Real-time Analytics
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
