"use client";

import { useEffect, useState } from "react";

const logo = "/media/logo.png";

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-header ${overlay ? "is-overlay" : ""}`}>
      <div className="shell nav-row">
        <a className="brand" href="/" aria-label="Diagnostic Ventures home">
          <img src={logo} alt="Diagnostic Ventures" />
        </a>
        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">
          <div className="nav-about">
            <a href="/about-us">About</a>
            <div className="nav-flyout">
              <a href="/about-us">Our story</a>
              <a href="/our-team">Our team</a>
            </div>
          </div>
          <a href="/problem">Problem</a>
          <a href="/solution">Solution</a>
          <a href="/invest">Investors</a>
          <a className="button button-nav" href="/contact-us">Contact us</a>
        </nav>
        <button
          className={`menu-toggle ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  );
}

export function InquiryForm({ variant = "contact" }: { variant?: "contact" | "investor" | "progress" }) {
  const [sent, setSent] = useState(false);
  const labels = variant === "investor"
    ? { title: "Join the mission", subtitle: "Tell us about your interest in supporting our work.", subject: "Investor inquiry" }
    : variant === "progress"
      ? { title: "Track our progress", subtitle: "Connect with our team for product and clinical timeline updates.", subject: "Clarity ID progress inquiry" }
      : { title: "Send us a message", subtitle: "We’ll direct your note to the right member of our team.", subject: "Website inquiry" };
  const recipient = "brian@diagnosticventures.net";

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      data.get("phone") ? `Phone: ${data.get("phone")}` : "",
      data.get("company") ? `Company: ${data.get("company")}` : "",
      "",
      String(data.get("message") || ""),
    ].filter(Boolean).join("\n");
    setSent(true);
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(labels.subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="inquiry-card">
      <div className="form-heading"><p className="eyebrow">Start a conversation</p><h2>{labels.title}</h2><p>{labels.subtitle}</p></div>
      <form className="inquiry-form" onSubmit={submit}>
        <label><span>Full name</span><input name="name" autoComplete="name" required placeholder="Your name" /></label>
        <label><span>Work email</span><input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
        {variant !== "contact" && <label><span>Company</span><input name="company" autoComplete="organization" placeholder="Company or organization" /></label>}
        {variant === "investor" && <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" placeholder="Optional" /></label>}
        <label className="form-wide"><span>How can we help?</span><textarea name="message" required rows={5} placeholder="Share a little context…" /></label>
        <div className="form-action form-wide">
          <button className="button button-primary" type="submit">Compose message <span>↗</span></button>
          <p>{sent ? "Your email app should now be open with your message ready to send." : "Submitting opens a pre-addressed email in your default mail app."}</p>
        </div>
      </form>
    </div>
  );
}
