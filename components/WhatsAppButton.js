"use client";

import { useEffect, useState } from "react";
import { WHATSAPP, whatsappChatLink } from "./whatsappConfig";

/* The floating button is hidden until the visitor scrolls past the hero.
   On mobile the hero CTAs are full-width and sit exactly where a fixed
   bottom-right button would land, so showing it immediately would cover
   "See the Programme". It also keeps the first screen uncluttered. */
const SHOW_AFTER_PX = 600;

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!WHATSAPP.showFloatingButton) return;

    const update = () => {
      const past = window.scrollY > SHOW_AFTER_PX;

      // Hide it from the registration section onward. Below that point the
      // page is full of full-width buttons, FAQ rows and the form itself —
      // a fixed corner button would sit on top of them and steal taps.
      // The form already offers the WhatsApp group directly, so nothing is lost.
      const register = document.querySelector("#register");
      let reachedForm = false;
      if (register) {
        reachedForm = register.getBoundingClientRect().top < window.innerHeight * 0.9;
      }

      setVisible(past && !reachedForm);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!WHATSAPP.showFloatingButton) return null;

  return (
    <a
      href={whatsappChatLink()}
      className={`wa-float ${visible ? "is-visible" : ""}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.65.14-.19.29-.74.93-.91 1.12-.17.19-.34.22-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.6-2-.17-.29-.02-.44.13-.59.13-.13.29-.34.43-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.65-1.56-.89-2.14-.23-.56-.47-.48-.65-.49h-.55c-.19 0-.5.07-.76.36s-1 .98-1 2.38 1.02 2.76 1.17 2.95c.15.19 2.01 3.07 4.87 4.3.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.02h-.01c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.2.84.85-3.12-.2-.32a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.32-8.24 8.32z" />
      </svg>
    </a>
  );
}
