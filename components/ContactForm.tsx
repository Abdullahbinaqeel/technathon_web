"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1200);
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-surface" style={{ borderTop: "1px solid #E5E7EB" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: copy */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#1B3D6F" }}>
              Contact Us
            </p>
            <h2 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-bold leading-tight tracking-tight mb-5" style={{ color: "#0D1F3C" }}>
              Let&apos;s start a
              <br />
              conversation.
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#6B7280" }}>
              Tell us about your project. We respond within 24 hours — no sales
              call required, just a direct conversation with an engineer.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: "✉", label: "Email", value: "abdulbinaqeel@gmail.com" },
                { icon: "📍", label: "Location", value: "Remote-first · Worldwide" },
                { icon: "⏱", label: "Response time", value: "Within 24 hours" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-base"
                    style={{ backgroundColor: "#EBF0F8" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] mb-0.5" style={{ color: "#9CA3AF" }}>{item.label}</p>
                    <p className="text-sm font-medium" style={{ color: "#0D1F3C" }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            {status === "sent" ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center py-16 rounded-2xl"
                style={{ border: "1px solid #E5E7EB", backgroundColor: "#F9FAFB" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#EBF0F8" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1B3D6F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0D1F3C" }}>Message sent!</h3>
                <p className="text-sm" style={{ color: "#6B7280" }}>We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-[0.12em]" style={{ color: "#6B7280" }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        border: "1px solid #E5E7EB",
                        color: "#0D1F3C",
                        backgroundColor: "#FAFAFA",
                      }}
                      onFocus={e => { e.currentTarget.style.border = "1px solid #1B3D6F"; e.currentTarget.style.backgroundColor = "#FFFFFF"; }}
                      onBlur={e => { e.currentTarget.style.border = "1px solid #E5E7EB"; e.currentTarget.style.backgroundColor = "#FAFAFA"; }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-[0.12em]" style={{ color: "#6B7280" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        border: "1px solid #E5E7EB",
                        color: "#0D1F3C",
                        backgroundColor: "#FAFAFA",
                      }}
                      onFocus={e => { e.currentTarget.style.border = "1px solid #1B3D6F"; e.currentTarget.style.backgroundColor = "#FFFFFF"; }}
                      onBlur={e => { e.currentTarget.style.border = "1px solid #E5E7EB"; e.currentTarget.style.backgroundColor = "#FAFAFA"; }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2 uppercase tracking-[0.12em]" style={{ color: "#6B7280" }}>
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      border: "1px solid #E5E7EB",
                      color: "#0D1F3C",
                      backgroundColor: "#FAFAFA",
                    }}
                    onFocus={e => { e.currentTarget.style.border = "1px solid #1B3D6F"; e.currentTarget.style.backgroundColor = "#FFFFFF"; }}
                    onBlur={e => { e.currentTarget.style.border = "1px solid #E5E7EB"; e.currentTarget.style.backgroundColor = "#FAFAFA"; }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2 uppercase tracking-[0.12em]" style={{ color: "#6B7280" }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                    style={{
                      border: "1px solid #E5E7EB",
                      color: "#0D1F3C",
                      backgroundColor: "#FAFAFA",
                    }}
                    onFocus={e => { e.currentTarget.style.border = "1px solid #1B3D6F"; e.currentTarget.style.backgroundColor = "#FFFFFF"; }}
                    onBlur={e => { e.currentTarget.style.border = "1px solid #E5E7EB"; e.currentTarget.style.backgroundColor = "#FAFAFA"; }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: "#0D1F3C" }}
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
