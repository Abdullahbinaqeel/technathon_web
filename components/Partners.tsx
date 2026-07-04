const partners = [
  {
    name: "Microsoft",
    logo: (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 21 21" width="20" height="20" aria-hidden="true">
          <rect x="0"    y="0"    width="9.8" height="9.8" fill="#F25022" />
          <rect x="11.2" y="0"    width="9.8" height="9.8" fill="#7FBA00" />
          <rect x="0"    y="11.2" width="9.8" height="9.8" fill="#00A4EF" />
          <rect x="11.2" y="11.2" width="9.8" height="9.8" fill="#FFB900" />
        </svg>
        <span className="text-sm font-semibold tracking-tight text-[#3C3C3C]">
          Microsoft
        </span>
      </div>
    ),
  },
  {
    name: "Google",
    logo: (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
        <span className="text-sm font-semibold tracking-tight text-[#3C3C3C]">
          Google
        </span>
      </div>
    ),
  },
  {
    name: "Amazon Web Services",
    logo: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 70 40" width="60" height="34" aria-hidden="true">
          <text x="2" y="24" fontFamily="'Arial', sans-serif" fontSize="22" fontWeight="bold" fill="#252F3E" letterSpacing="-0.5">
            aws
          </text>
          <path d="M3 30 Q34 42 65 27" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M59 23.5 L66 26.5 L58.5 31 Z" fill="#FF9900" />
        </svg>
      </div>
    ),
  },
  {
    name: "Oracle",
    logo: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 80 24" width="72" height="22" aria-hidden="true">
          <text x="0" y="18" fontFamily="'Arial', sans-serif" fontSize="18" fontWeight="bold" fill="#C74634" letterSpacing="-0.5">ORACLE</text>
        </svg>
      </div>
    ),
  },
  {
    name: "Salesforce",
    logo: (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 28 20" width="28" height="20" aria-hidden="true">
          <path
            d="M11.6 3.6a5.5 5.5 0 0 1 3.9-1.6 5.5 5.5 0 0 1 4.9 3 4 4 0 0 1 1.6-.3 4 4 0 0 1 4 4 4 4 0 0 1-4 4H6.4a3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 2.8-3.3 4.9 4.9 0 0 1-.2-1.3A4.9 4.9 0 0 1 11.6 3.6z"
            fill="#00A1E0"
          />
        </svg>
        <span className="text-sm font-semibold tracking-tight text-[#00A1E0]">
          Salesforce
        </span>
      </div>
    ),
  },
  {
    name: "GitHub",
    logo: (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"
            fill="#24292F"
          />
        </svg>
        <span className="text-sm font-semibold tracking-tight text-[#24292F]">
          GitHub
        </span>
      </div>
    ),
  },
  {
    name: "IBM",
    logo: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 54 22" width="50" height="20" aria-hidden="true">
          <text x="0" y="17" fontFamily="'Arial', sans-serif" fontSize="20" fontWeight="bold" fill="#006699" letterSpacing="1">IBM</text>
        </svg>
      </div>
    ),
  },
  {
    name: "Azure",
    logo: (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M12 3 L5.5 20 H11.5 L15 9 Z" fill="#0078D4" />
          <path d="M15 9 L11.5 20 H19 Z" fill="#50B4FF" />
        </svg>
        <span className="text-sm font-semibold tracking-tight text-[#0078D4]">
          Azure
        </span>
      </div>
    ),
  },
];

export default function Partners() {
  return (
    <section className="bg-surface border-b border-border py-10 overflow-hidden">
      <p className="text-xs font-medium text-muted uppercase tracking-[0.2em] mb-8 text-center">
        We build on the world&apos;s leading platforms
      </p>
      <div className="overflow-hidden">
        <div
          className="flex items-center w-max marquee-track"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0 opacity-55 hover:opacity-100 transition-opacity duration-200"
              style={{ minWidth: 160, padding: "0 28px" }}
              title={p.name}
            >
              {p.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
