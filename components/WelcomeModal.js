"use client";

import { useEffect, useRef, useState } from "react";

/* ============================================================
   POPUP SETTINGS — edit these
   ============================================================
   enabled       : set to false to switch the popup off entirely
   image         : file in /public  (drop yours in and rename here)
   delayMs       : how long after load before it appears
   showOncePer   : "session" = once per browser session
                   "day"     = once every 24 hours
                   "always"  = every single page load (not recommended)
   ctaLabel/href : the button inside the popup
   ============================================================ */
const CONFIG = {
  enabled: true,
  image: "/popup.jpg",
  alt: "CARTHE 2027 — Canada-Africa Real Estate, Tourism & Hospitality Exchange, Real Estate Expo. Brampton City Hall, 2 Wellington St W, Brampton, Ontario. 3–10 June 2027. Organizers Dr. Kennedy Iden, Nadine Lajoie, Engr. Dr. Olusegun David Oludayo, Dr. Niyi Adeleye and Cheryl Rankin.",
  delayMs: 1200,
  showOncePer: "session",
  ctaLabel: "Reserve Your Place",
  ctaHref: "#register",
};

const STORAGE_KEY = "carthe-popup-seen";

function alreadySeen() {
  try {
    if (CONFIG.showOncePer === "always") return false;
    if (CONFIG.showOncePer === "session") {
      return sessionStorage.getItem(STORAGE_KEY) === "1";
    }
    const ts = localStorage.getItem(STORAGE_KEY);
    if (!ts) return false;
    return Date.now() - Number(ts) < 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    if (CONFIG.showOncePer === "session") {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } else if (CONFIG.showOncePer === "day") {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    }
  } catch {
    /* storage blocked — popup will simply show again */
  }
}

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!CONFIG.enabled || alreadySeen()) return;
    const t = setTimeout(() => setOpen(true), CONFIG.delayMs);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    markSeen();
  };

  // Lock scroll + close on Escape while open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!CONFIG.enabled) return null;

  return (
    <div
      className={`popup-overlay ${open ? "is-open" : ""}`}
      onClick={close}
      aria-hidden={!open}
    >
      <div
        className="popup popup-poster glass"
        role="dialog"
        aria-modal="true"
        aria-label="CARTHE 2027 invitation"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="popup-close" onClick={close} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </svg>
        </button>

        <div className="popup-media">
          <a
            href={CONFIG.image}
            className="popup-media-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Open the invitation at full size"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={CONFIG.image} alt={CONFIG.alt} />
          </a>
        </div>

        <div className="popup-body">
          <a href={CONFIG.ctaHref} className="btn btn-primary btn-block" onClick={close}>
            {CONFIG.ctaLabel} <span className="arrow">→</span>
          </a>
          <button className="popup-dismiss" onClick={close}>
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
