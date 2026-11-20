"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#why-attend", label: "About" },
  { href: "#packages", label: "Packages" },
  { href: "#organizers", label: "Organizers" },
  { href: "#programme", label: "Programme" },
  { href: "#faqs", label: "FAQs" },
  { href: "#venue", label: "Venue" },
];

export default function Nav() {
  const [condensed, setCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav className={`nav glass ${condensed ? "condensed" : ""}`}>
        <a href="#overview" className="nav-logo">
          CARTHE 2027
        </a>

        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <ThemeToggle />

          {/* Desktop CTA — hidden on mobile, where the hero CTA serves instead */}
          <a href="#register" className="btn btn-primary nav-cta">
            Reserve Your Place
          </a>

          {/* Mobile menu trigger */}
          <button
            className="nav-burger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} role="dialog" aria-modal="true">
        <div className="mobile-menu-head">
          <span className="nav-logo">CARTHE 2027</span>
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>
        </div>

        <div className="mobile-menu-links">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: `${60 + i * 40}ms` }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#register"
          className="btn btn-primary btn-block"
          onClick={() => setMenuOpen(false)}
        >
          Reserve Your Place <span className="arrow">→</span>
        </a>
      </div>
    </>
  );
}
