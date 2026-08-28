import { Header } from "./site-client";

const logo =
  "https://cdn.prod.website-files.com/65ef21f157cafd7bcbb798f1/6a7d311b5c459ff87f8c3b67_Diagnostic%20Ventures%20New%20Logo.png";

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
          <a className="button button-light" href="/contact-us">Contact us <span>↗</span></a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <a href="/" className="footer-brand"><img src={logo} alt="Diagnostic Ventures" /></a>
        <nav aria-label="Footer navigation">
          <a href="/about-us">About</a>
          <a href="/our-team">Team</a>
          <a href="/problem">Problem</a>
          <a href="/solution">Solution</a>
          <a href="/invest">Investors</a>
          <a href="/contact-us">Contact</a>
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
