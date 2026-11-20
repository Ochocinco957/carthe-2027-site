"use client";

import { useState } from "react";
import { WHATSAPP, communityLinkIsSet } from "./whatsappConfig";

const ATTENDANCE_OPTIONS = ["In-person Access", "Virtual Access", "VIP Investor Access"];
const INTERESTS = [
  "Residential Ownership",
  "Investment Properties",
  "Financing & Mortgages",
  "Rental & Portfolio Strategy",
  "Legal & Transaction Guidance",
];

const initialState = {
  fullName: "",
  email: "",
  whatsapp: "",
  country: "",
  attendance: "",
  interests: [],
};

export default function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | success | waitlist

  const totalSteps = 3;

  function update(field, value) {
    setData((d) => ({ ...d, [field]: value }));
  }

  function toggleInterest(value) {
    setData((d) => {
      const has = d.interests.includes(value);
      return {
        ...d,
        interests: has ? d.interests.filter((i) => i !== value) : [...d.interests, value],
      };
    });
  }

  function validateStep1() {
    const e = {};
    if (!data.fullName.trim()) e.fullName = "Enter your full name as you would like it to appear on your registration.";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = "Enter a valid email address so we can send your confirmation.";
    if (!data.whatsapp.trim()) e.whatsapp = "Enter a valid phone number, including your country code.";
    if (!data.country.trim()) e.country = "Choose an option to continue.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateStep2() {
    const e = {};
    if (!data.attendance) e.attendance = "Choose an option to continue.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setStep((s) => Math.min(s + 1, totalSteps));
  }

  function back() {
    setErrors({});
    setStep((s) => Math.max(s - 1, 1));
  }

  function submit() {
    // Simulated capacity check — wire this up to real capacity data before launch.
    const atCapacity = data.attendance === "In-person Access" && false;
    setStatus(atCapacity ? "waitlist" : "success");
  }

  if (status === "success") {
    return (
      <div className="success-box">
        <h3>Your Registration Has Been Received.</h3>
        <p>
          Thank you for registering for CARTHE 2027. A confirmation has been sent to{" "}
          <strong>{data.email || "your email address"}</strong>. Attendance remains subject to the
          ticket or confirmation requirements stated in your message.
        </p>
        <div className="wa-join">
          <h4>Join the CARTHE WhatsApp community</h4>
          <p className="small-copy">
            Programme updates, delegate information and announcements are posted here
            first — and you can speak to the team one-to-one.
          </p>
          {communityLinkIsSet() ? (
            <a
              href={WHATSAPP.communityInvite}
              className="btn btn-whatsapp btn-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.02h-.01c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.2.84.85-3.12-.2-.32a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.32-8.24 8.32z" />
              </svg>
              Join the Community
            </a>
          ) : (
            <p className="field-error" style={{ marginTop: 8 }}>
              WhatsApp community link not set yet — add it in
              components/whatsappConfig.js
            </p>
          )}
        </div>

        <div className="hero-ctas" style={{ marginTop: 16, justifyContent: "center" }}>
          <button className="btn btn-secondary btn-block">Add Event to Calendar</button>
        </div>
        <p className="small-copy" style={{ marginTop: 18 }}>
          Watch your inbox. Confirmed delegates receive the detailed programme first.
        </p>
      </div>
    );
  }

  if (status === "waitlist") {
    return (
      <div className="waitlist-box">
        <h3>In-person Registration Is Currently at Capacity.</h3>
        <p>
          Join the waiting list and we will contact you if a place becomes available. You may also
          select virtual access where available.
        </p>
        <div className="hero-ctas" style={{ marginTop: 20, justifyContent: "center" }}>
          <button className="btn btn-primary">Join the Waiting List</button>
          <button className="btn btn-secondary">View Virtual Access</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="step-indicator">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div key={i} className={`step-dot ${i < step ? "active" : ""}`} />
        ))}
      </div>

      {step === 1 && (
        <>
          <p className="small-copy" style={{ marginBottom: 20 }}>
            Step 1 of 3 — Your Details. Tell us where to send your confirmation.
          </p>
          <div className="field">
            <label htmlFor="fullName">Full name</label>
            <input id="fullName" value={data.fullName} onChange={(e) => update("fullName", e.target.value)} />
            {errors.fullName && <div className="field-error">{errors.fullName}</div>}
          </div>
          <div className="field">
            <label htmlFor="email">Email address</label>
            <input id="email" type="email" value={data.email} onChange={(e) => update("email", e.target.value)} />
            {errors.email && <div className="field-error">{errors.email}</div>}
          </div>
          <div className="field">
            <label htmlFor="whatsapp">WhatsApp number</label>
            <input id="whatsapp" value={data.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} />
            <div className="small-copy" style={{ marginTop: 6 }}>
              Include your country code so the event team can reach you with essential updates.
            </div>
            {errors.whatsapp && <div className="field-error">{errors.whatsapp}</div>}
          </div>
          <div className="field">
            <label htmlFor="country">Country of residence</label>
            <input id="country" value={data.country} onChange={(e) => update("country", e.target.value)} />
            {errors.country && <div className="field-error">{errors.country}</div>}
          </div>
          <div className="form-nav">
            <button className="btn btn-primary btn-block" onClick={next}>
              Continue <span className="arrow">→</span>
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <p className="small-copy" style={{ marginBottom: 20 }}>
            Step 2 of 3 — Your Attendance. Choose the experience that best matches how you want to
            participate.
          </p>
          {ATTENDANCE_OPTIONS.map((opt) => (
            <label key={opt} className="field" style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
              <input
                type="radio"
                name="attendance"
                checked={data.attendance === opt}
                onChange={() => update("attendance", opt)}
                style={{ width: "auto" }}
              />
              <span style={{ fontSize: 15 }}>{opt}</span>
            </label>
          ))}
          <div className="small-copy" style={{ marginTop: -8, marginBottom: 16 }}>
            You may update your preference later, subject to availability.
          </div>
          {errors.attendance && <div className="field-error">{errors.attendance}</div>}
          <div className="form-nav">
            <button className="btn btn-secondary" onClick={back}>
              Back
            </button>
            <button className="btn btn-primary" style={{ flexGrow: 1 }} onClick={next}>
              Continue to Interests <span className="arrow">→</span>
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <p className="small-copy" style={{ marginBottom: 20 }}>
            Step 3 of 3 — Your Interests. Help us tailor relevant event communication and
            opportunities.
          </p>
          {INTERESTS.map((opt) => (
            <label key={opt} className="field" style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={data.interests.includes(opt)}
                onChange={() => toggleInterest(opt)}
                style={{ width: "auto" }}
              />
              <span style={{ fontSize: 15 }}>{opt}</span>
            </label>
          ))}
          <div className="small-copy" style={{ marginTop: -8, marginBottom: 16 }}>
            Select all that apply. This does not commit you to a purchase or investment.
          </div>
          <div className="form-nav">
            <button className="btn btn-secondary" onClick={back}>
              Back
            </button>
            <button className="btn btn-primary" style={{ flexGrow: 1 }} onClick={submit}>
              Complete Registration
            </button>
          </div>
        </>
      )}

      <p className="privacy-line">
        Your information is secure and will only be used for event registration and relevant
        updates.
      </p>
    </div>
  );
}
