import { Header } from "./site-client";
import { Footer, PartnerCta, SectionHeading } from "./site-components";

const videoMp4 = "/media/hero.mp4";

export default function Home() {
  return (
    <main>
      <section className="hero hero-home">
        <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true">
          <source src={videoMp4} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <Header overlay />
        <div className="shell hero-content">
          <p className="eyebrow light">Diagnostic Ventures</p>
          <h1>Rapid testing saves lives.</h1>
          <p className="hero-lede">
            Building a comprehensive sepsis diagnostics platform targeting
            pathogen identification within 20 minutes.
          </p>
          <p className="hero-proof">
            Helping physicians make faster, better-informed treatment decisions.
          </p>
          <a className="button button-light" href="/contact-us">
            Get involved <span aria-hidden="true">↗</span>
          </a>
        </div>
        <a className="scroll-cue" href="#about" aria-label="Scroll to learn more">
          <span>Scroll to explore</span><i aria-hidden="true" />
        </a>
      </section>

      <section id="about" className="intro-band">
        <div className="shell intro-card">
          <div>
            <p className="eyebrow light">Building a better tomorrow</p>
            <h2>Born from research. Built for the bedside.</h2>
          </div>
          <div>
            <p>
              Born out of a $5.2M NIH research grant at Brigham Young University,
              Diagnostic Ventures is a Utah-native startup engineering a diagnostic
              solution that replaces traditional blood cultures and eliminates
              critical wait times.
            </p>
            <p className="fine-print">
              This product is currently under development and is not yet FDA-approved
              or available for commercial sale.
            </p>
            <a className="text-link light" href="/about-us">Our story <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Why it matters" title="Healthcare technology for time-critical conditions." text="Sepsis treatment cannot wait for the conventional diagnostic timeline. Our platform is designed around the clinical decisions that need to happen now." center />
          <div className="card-grid three">
            {[
              ["01", "Direct from whole blood", "Isolate target pathogens without waiting for traditional culture processes."],
              ["02", "Rapid identification", "Combine Raman spectroscopy with machine learning to identify bacteria quickly."],
              ["03", "Integrated workflow", "Unify sample preparation and identification in a focused diagnostic platform."],
            ].map(([n, title, text]) => <article className="feature-card" key={n}><span className="card-number">{n}</span><h3>{title}</h3><p>{text}</p><a className="text-link" href="/solution">Explore the solution <span>→</span></a></article>)}
          </div>
        </div>
      </section>

      <section className="split-section shell">
        <div className="split-copy">
          <p className="eyebrow">Our solution</p>
          <h2>Direct bacterial identification from whole blood.</h2>
          <p>Clarity ID™ is designed to isolate pathogens directly from whole blood, bypassing traditional culture processes. It brings together microfluidics, Raman spectroscopy, and machine learning to rapidly identify bacteria.</p>
          <a className="button button-primary" href="/solution">Meet Clarity ID™ <span>↗</span></a>
        </div>
        <div className="split-media machine-media">
          <img src="/media/machine.png" alt="Clarity ID diagnostic instrument in a laboratory" />
        </div>
      </section>

      <section className="stat-band">
        <div className="shell">
          <SectionHeading eyebrow="The human cost of sepsis" title="A global emergency measured in lives." />
          <div className="stats-grid">
            <div><strong>50M</strong><span>sepsis infections each year</span></div>
            <div><strong>11M</strong><span>sepsis deaths each year</span></div>
            <div><strong>1 in 5</strong><span>deaths worldwide caused by sepsis</span></div>
          </div>
          <a className="text-link light" href="/problem">Understand the problem <span>→</span></a>
        </div>
      </section>

      <PartnerCta />
      <Footer />
    </main>
  );
}
