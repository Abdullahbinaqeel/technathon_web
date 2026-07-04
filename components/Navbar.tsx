"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = ["Services", "Work", "Process", "About"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #E5E7EB" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image src="/logo-mark.png" alt="" width={64} height={64} className="h-7 w-7 lg:h-8 lg:w-8" priority />
            <span className="font-semibold text-[15px] tracking-tight" style={{ color: "#0D1F3C" }}>
              Technathon
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium transition-colors hover:text-ink"
                style={{ color: "#6B7280" }}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-full text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#0D1F3C" }}
          >
            Get in Touch
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 transition-colors"
            style={{ color: "#0D1F3C" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 bg-surface" style={{ borderTop: "1px solid #E5E7EB" }}>
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium py-1 transition-colors hover:text-ink"
                style={{ color: "#6B7280" }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 inline-flex items-center justify-center px-5 py-2.5 text-white text-sm font-semibold rounded-full"
              style={{ backgroundColor: "#0D1F3C" }}
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
