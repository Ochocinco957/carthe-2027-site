"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* ============================================================
   SLIDESHOW IMAGES
   ============================================================
   Supplied by the organisers: Get Elevated engagements with the
   City of Brampton, the Ooni of Ife, and the Global Leaders
   Awards. Not past CARTHE events — captions must stay accurate.

   TO REPLACE:
   1. Put your photos in  public/gallery/
   2. Name them 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg
      (or change the src values below)
   3. Update each alt and caption to match the new photo
   4. Landscape 16:9 works best. Keep each file under ~300KB.

   ADD OR REMOVE SLIDES:
   The slideshow adapts automatically — add or delete entries
   in the list below and the dots and navigation follow.

   IMPORTANT — captions must stay accurate. CARTHE 2027 is the
   inaugural edition, so nothing here may be described as a
   previous CARTHE event.
   ============================================================ */
const SLIDES = [
  {
    src: "/gallery/1.jpg",
    alt: "Dr. Kennedy Iden receiving a certificate from Patrick Brown, Mayor of Brampton, at Brampton City Hall",
    caption: "Received at Brampton City Hall by Mayor Patrick Brown",
  },
  {
    src: "/gallery/13.jpg",
    alt: "Dr. Kennedy Iden with Patrick Brown, Mayor of Brampton, holding a copy of AfroCaribe magazine",
    caption: "Dr. Kennedy Iden with the Mayor of Brampton, Patrick Brown",
    position: "center 12%",
  },
  {
    src: "/gallery/20.jpg",
    alt: "The Mayor of Brampton in his chain of office, in front of a City of Brampton backdrop",
    caption: "The Mayor of Brampton in his chain of office",
    fit: "contain",
  },
  {
    src: "/gallery/21.jpg",
    alt: "The Mayor of Brampton speaking to the media in front of a City of Brampton backdrop",
    caption: "The Mayor of Brampton speaking to the media",
    fit: "contain",
  },
  {
    src: "/gallery/2.jpg",
    alt: "His Imperial Majesty the Ooni of Ife signing the Get Elevated Foundation royal patronage document",
    caption: "His Imperial Majesty the Ooni of Ife, signing as Royal Patron",
  },
  {
    src: "/gallery/3.jpg",
    alt: "Mayor Patrick Brown of Brampton receiving a commemorative award",
    caption: "Recognition from the City of Brampton",
  },
  {
    src: "/gallery/4.jpg",
    alt: "Get Elevated delegation presenting the royal patronage nomination at the palace in Ile-Ife",
    caption: "Presenting the royal patronage nomination at Ile-Ife",
  },
  {
    src: "/gallery/5.jpg",
    alt: "Dr. Kennedy Iden with Mayor Patrick Brown of Brampton at a community event in Peel Region",
    caption: "Working with civic leadership in Peel Region",
  },
  {
    src: "/gallery/6.jpg",
    alt: "Unveiling of the Business Magnet Magazine at a Get Elevated awards ceremony",
    caption: "Unveiling the Business Magnet publication",
  },
  {
    src: "/gallery/7.jpg",
    alt: "Honourees and guests holding the Business Magnet Magazine at a Get Elevated awards ceremony",
    caption: "Honourees at the Global Leaders Awards",
  },
  {
    src: "/gallery/8.jpg",
    alt: "Award presentation to an honouree at a Get Elevated awards ceremony",
    caption: "Recognising excellence across sectors",
  },
  {
    src: "/gallery/9.jpg",
    alt: "Award presentation to a female honouree at a Get Elevated awards ceremony",
    caption: "Award presentation at the Pathway to Excellence ceremony",
  },
  {
    src: "/gallery/10.jpg",
    alt: "Dignitaries and guests seated at a Get Elevated awards ceremony in Lagos",
    caption: "The room the organising team convenes",
  },
  {
    src: "/gallery/11.jpg",
    alt: "Speaker addressing guests at a Get Elevated awards ceremony",
    caption: "Addressing delegates and honourees",
  },
  {
    src: "/gallery/12.jpg",
    alt: "Speaker addressing guests from the podium at a Get Elevated awards ceremony",
    caption: "Voices from the platform",
  },
  {
    src: "/gallery/14.jpg",
    alt: "Prof. Wasiu Adeyemo holding the Get Elevated Pathway to Excellence award and speaking into a microphone",
    caption: "Prof. Wasiu Adeyemo with the Get Elevated Pathway to Excellence award",
    fit: "contain",
  },
  {
    src: "/gallery/15.jpg",
    alt: "Prof. Wasiu Adeyemo addressing guests after receiving the Get Elevated Pathway to Excellence award",
    caption: "Addressing guests after receiving the award",
    fit: "contain",
  },
  {
    src: "/gallery/16.jpg",
    alt: "Three guests holding the Get Elevated Pathway to Excellence award plaque during the presentation",
    caption: "The Pathway to Excellence award presentation",
  },
  {
    src: "/gallery/17.jpg",
    alt: "An honouree holding the award plaque shakes hands with a presenter on stage",
    caption: "Congratulations on stage",
  },
  {
    src: "/gallery/18.jpg",
    alt: "The award recipient holding his plaque, standing with three guests at the ceremony",
    caption: "The honouree with guests at the ceremony",
  },
  {
    src: "/gallery/19.jpg",
    alt: "Guests applauding as an honouree stands to acknowledge them at a Get Elevated awards ceremony",
    caption: "Guests applaud at the Pathway to Excellence awards",
  },
];

const AUTOPLAY_MS = 5000;

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const regionRef = useRef(null);

  const count = SLIDES.length;
  const go = useCallback((n) => setIndex(((n % count) + count) % count), [count]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  // Autoplay — pauses on hover, focus, when off-screen, or if the user
  // prefers reduced motion.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, count]);

  // Don't animate while the section is out of view
  useEffect(() => {
    const el = regionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setPaused((p) => (e.isIntersecting ? false : true)),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 45) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <div
      className="slideshow"
      ref={regionRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Photographs from the organisers' previous events"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="slideshow-frame">
        {SLIDES.map((s, i) => (
          <figure
            key={s.src}
            className={`slide ${i === index ? "is-active" : ""} ${s.fit === "contain" ? "is-contain" : ""}`}
            aria-hidden={i !== index}
          >
            {s.fit === "contain" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="slide-bg" src={s.src} alt="" aria-hidden="true" loading="lazy" decoding="async" />
            ) : null}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.src}
              alt={s.alt}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              style={s.position ? { objectPosition: s.position } : undefined}
            />
            <figcaption>{s.caption}</figcaption>
          </figure>
        ))}

        <button className="slide-nav slide-prev" onClick={prev} aria-label="Previous photo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button className="slide-nav slide-next" onClick={next} aria-label="Next photo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <p className="slide-count" aria-hidden="true">
        {index + 1} / {count}
      </p>

      <div className="slide-dots" role="tablist" aria-label="Choose photo">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            role="tab"
            aria-selected={i === index}
            aria-label={`Photo ${i + 1} of ${count}`}
            className={`slide-dot ${i === index ? "is-active" : ""}`}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </div>
  );
}
