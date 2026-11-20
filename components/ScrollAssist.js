"use client";

import { useEffect, useState } from "react";

/* Floating scroll assist.
   Points DOWN through the page and flips to UP once the visitor
   reaches the bottom. Hidden at the very top of the hero so it does
   not compete with the primary CTAs, and hidden entirely for anyone
   who prefers reduced motion (smooth scrolling is the whole point). */
export default function ScrollAssist() {
  const [visible, setVisible] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    let frame = null;

    const update = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const doc = document.documentElement.scrollHeight;
      const bottom = y + vh >= doc - 120;
      setAtBottom(bottom);

      // From the registration section onward the page is a dense run of
      // full-width buttons, form fields and FAQ rows. A fixed button
      // centred at the bottom of the screen would sit on top of them and
      // steal taps, so it stands down through that stretch and returns
      // at the very bottom as "back to top".
      const dense = document.querySelector("#register");
      let inDenseZone = false;
      if (dense) {
        inDenseZone = dense.getBoundingClientRect().top < vh - 100;
      }

      setVisible(y > 320 && (!inDenseZone || bottom));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handle = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior = reduced ? "auto" : "smooth";

    if (atBottom) {
      window.scrollTo({ top: 0, behavior });
      return;
    }

    // Advance to the next section boundary rather than a fixed distance,
    // so each press lands on something meaningful.
    const sections = [...document.querySelectorAll("section, footer")];
    const y = window.scrollY;
    const nav = 96; // sticky nav clearance
    const nextTop = sections
      .map((s) => s.getBoundingClientRect().top + y - nav)
      .find((top) => top > y + 40);

    window.scrollTo({
      top: nextTop ?? document.documentElement.scrollHeight,
      behavior,
    });
  };

  return (
    <button
      className={`scroll-assist ${visible ? "is-visible" : ""} ${atBottom ? "is-up" : ""}`}
      onClick={handle}
      aria-label={atBottom ? "Back to top" : "Scroll to next section"}
      title={atBottom ? "Back to top" : "Next section"}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}
