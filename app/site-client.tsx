"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const logo = "/media/logo.png";

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isCurrent = (href: string) => pathname === href;
  const aboutIsCurrent = pathname === "/about-us" || pathname === "/our-team";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 800) setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, []);

  return (
    <header className={`site-header ${overlay ? "is-overlay" : ""} ${scrolled ? "is-scrolled" : ""} ${open ? "is-menu-open" : ""}`}>
      <div className="shell nav-row">
        <Link className="brand" href="/" aria-label="Diagnostic Ventures home" onClick={() => setOpen(false)}>
          <Image src={logo} alt="Diagnostic Ventures" width={1248} height={367} priority />
        </Link>
        <nav id="site-navigation" className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">
          <div className={`nav-about ${aboutIsCurrent ? "is-current" : ""}`}>
            <Link href="/about-us" aria-current={aboutIsCurrent ? "page" : undefined} onClick={() => setOpen(false)}>About</Link>
            <div className="nav-flyout">
              <Link className={isCurrent("/about-us") ? "is-current" : ""} href="/about-us" aria-current={isCurrent("/about-us") ? "page" : undefined} onClick={() => setOpen(false)}>Our story</Link>
              <Link className={isCurrent("/our-team") ? "is-current" : ""} href="/our-team" aria-current={isCurrent("/our-team") ? "page" : undefined} onClick={() => setOpen(false)}>Our team</Link>
            </div>
          </div>
          <Link className={isCurrent("/problem") ? "is-current" : ""} href="/problem" aria-current={isCurrent("/problem") ? "page" : undefined} onClick={() => setOpen(false)}>Problem</Link>
          <Link className={isCurrent("/solution") ? "is-current" : ""} href="/solution" aria-current={isCurrent("/solution") ? "page" : undefined} onClick={() => setOpen(false)}>Solution</Link>
          <Link className={isCurrent("/invest") ? "is-current" : ""} href="/invest" aria-current={isCurrent("/invest") ? "page" : undefined} onClick={() => setOpen(false)}>Investors</Link>
          <Link className={`button button-nav ${isCurrent("/contact-us") ? "is-current" : ""}`} href="/contact-us" aria-current={isCurrent("/contact-us") ? "page" : undefined} onClick={() => setOpen(false)}>Contact us</Link>
        </nav>
        <button
          className={`menu-toggle ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-navigation"
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
          <button className="button button-primary" type="submit">Compose email <span>↗</span></button>
          <p aria-live="polite">{sent ? "Your email app should now be open with your message addressed to Brian." : "Submitting opens a pre-addressed email to brian@diagnosticventures.net."}</p>
        </div>
      </form>
    </div>
  );
}
