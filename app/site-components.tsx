import { Header } from "./site-client";
import Link from "next/link";
import Image from "next/image";

const logo = "/media/logo.png";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  align?: "left" | "center";
}) {
  return (
    <section className={`page-hero align-${align}`} style={image ? { backgroundImage: `linear-gradient(90deg, rgba(3,22,49,.94), rgba(3,24,52,.45)), url("${image}")` } : undefined}>
      <Header overlay />
      <div className="shell page-hero-inner">
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={`section-heading ${center ? "center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-lede">{text}</p>}
    </div>
  );
}

export function PartnerCta() {
  return (
    <section className="partner-cta">
      <div className="shell partner-grid">
        <div>
          <p className="eyebrow light">Move faster with us</p>
          <h2>Partner with us.</h2>
        </div>
        <div>
          <p>Every minute counts when diagnosing sepsis. Connect with our team to learn more about our technology, clinical timeline, or partnership opportunities.</p>
          <Link className="button button-light" href="/contact-us">Contact us <span>↗</span></Link>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <Link href="/" className="footer-brand"><Image src={logo} alt="Diagnostic Ventures" width={1248} height={367} /></Link>
        <nav aria-label="Footer navigation">
          <Link href="/about-us">About</Link>
          <Link href="/our-team">Team</Link>
          <Link href="/problem">Problem</Link>
          <Link href="/solution">Solution</Link>
          <Link href="/invest">Investors</Link>
          <Link href="/contact-us">Contact</Link>
        </nav>
      </div>
      <div className="shell footer-bottom">
        <p>© 2026 Diagnostic Ventures. All rights reserved.</p>
        <p>Product under development · Not FDA-approved or commercially available</p>
      </div>
    </footer>
  );
}

export function SiteEnd() {
  return <><PartnerCta /><Footer /></>;
}
