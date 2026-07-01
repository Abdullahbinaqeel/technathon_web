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
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 60 36" width="48" height="29" aria-hidden="true">
          <path
            d="M17.2 13.5c0 .5.1.9.2 1.2.2.3.4.6.7.9.1.1.1.2.1.3 0 .1-.1.2-.2.3l-.7.5c-.1.1-.2.1-.3.1-.1 0-.2-.1-.4-.2-.2-.2-.3-.4-.5-.6-.5.6-1.1.9-2 .9-.6 0-1-.2-1.4-.5-.3-.3-.5-.8-.5-1.4 0-.6.2-1 .6-1.4.4-.3.9-.5 1.6-.5.2 0 .5 0 .7.1.2 0 .5.1.8.2v-.5c0-.5-.1-.9-.3-1.1-.2-.2-.6-.3-1.1-.3-.2 0-.5 0-.8.1-.3.1-.5.2-.8.3-.1.1-.2.1-.3.1-.1 0-.1-.1-.1-.2v-.4c0-.1 0-.2.1-.3.1-.1.2-.1.4-.2.2-.1.5-.2.8-.2.3-.1.7-.1 1-.1.7 0 1.3.2 1.6.6.3.4.5.9.5 1.5v2zm-2.6.9c.2 0 .5 0 .7-.1.2-.1.4-.3.5-.5.1-.1.1-.3.1-.5v-.2c-.2 0-.5-.1-.7-.1-.3 0-.5 0-.7.1-.2.1-.3.2-.4.3-.1.1-.1.3-.1.5 0 .3.1.4.2.5.2 0 .3.1.4 0zm5.5.8c-.1 0-.2 0-.3-.1-.1-.1-.1-.2-.2-.4l-1.8-6c0-.1-.1-.2-.1-.3 0-.1.1-.2.2-.2h.8c.1 0 .2 0 .3.1.1.1.1.2.2.4l1.3 5.1 1.2-5.1c0-.2.1-.3.2-.4.1-.1.2-.1.3-.1h.6c.1 0 .2 0 .3.1.1.1.1.2.2.4l1.2 5.1 1.3-5.1c0-.2.1-.3.2-.4.1-.1.2-.1.3-.1h.7c.1 0 .2.1.2.2 0 0 0 .1-.1.3l-1.9 6c0 .2-.1.3-.2.4-.1.1-.2.1-.3.1h-.7c-.1 0-.2 0-.3-.1-.1-.1-.1-.2-.2-.4l-1.2-4.9-1.2 4.9c0 .2-.1.3-.2.4-.1.1-.2.1-.3.1h-.7zm10.4.2c-.4 0-.8-.1-1.2-.2-.4-.1-.6-.2-.8-.4-.1-.1-.1-.1-.1-.2v-.4c0-.2.1-.2.2-.2.1 0 .1 0 .2.1.2.1.4.2.6.3.2.1.5.1.7.1.4 0 .7-.1.9-.2.2-.1.3-.3.3-.6 0-.2-.1-.3-.2-.4-.1-.1-.4-.2-.7-.3l-.9-.3c-.5-.2-.9-.4-1.1-.7-.2-.3-.4-.6-.4-1 0-.3.1-.6.2-.8.1-.2.3-.4.5-.6.2-.2.5-.3.7-.4.3-.1.6-.1.9-.1.2 0 .3 0 .5.1.2 0 .3.1.5.1.1.1.3.1.4.2.1.1.2.1.2.2.1.1.1.1.1.2v.4c0 .2-.1.2-.2.2-.1 0-.2 0-.3-.1-.5-.2-.9-.3-1.4-.3-.4 0-.6.1-.8.2-.2.1-.3.3-.3.5 0 .2.1.3.2.4.1.1.4.2.8.4l.9.3c.5.2.8.4 1.1.7.2.3.3.6.3 1 0 .3-.1.6-.2.8-.1.3-.3.5-.5.6-.2.2-.5.3-.8.4-.3.1-.6.1-.9.1z"
            fill="#252F3E"
          />
          <path
            d="M30 24.6c-5.2 3.8-12.7 5.9-19.2 5.9-9.1 0-17.2-3.4-23.4-8.9-.5-.4 0-1 .5-.7C-5.7 24.8 2.6 27.5 11.3 27.5c5.8 0 12.3-1.2 18.2-3.7.9-.4 1.6.6.5 1.8z"
            fill="#FF9900"
          />
          <path
            d="M32.1 22.2c-.7-.9-4.5-.4-6.2-.2-.5.1-.6-.4-.1-.7 3-2.1 8-1.5 8.6-.8.6.7-.2 5.7-3 8.1-.4.4-.9.2-.7-.3.7-1.6 2.1-5.2 1.4-6.1z"
            fill="#FF9900"
          />
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
          <path
            d="M13.05 4.24L7.68 17.02l4.65-.8 5.01-8.86-4.29-3.12zM13.36 18.4l6.34-1.09L12 2 8.59 11.8l4.77 6.6z"
            fill="#0078D4"
          />
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
