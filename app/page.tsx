import { Header } from "./site-client";
import { Footer, PartnerCta, ReferencesBar, SectionHeading } from "./site-components";
import Image from "next/image";

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
            Diagnostic Ventures is building the most comprehensive sepsis diagnostics platform, targeting pathogen identification within 20 minutes.
          </p>
          <p className="hero-evidence">
            350,000 U.S. adults die from sepsis annually, and 80% of sepsis deaths could be prevented with rapid diagnosis and appropriate treatment.<sup>1</sup>
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
            <h2>About us</h2>
          </div>
          <div>
            <p>
              Born out of a $5.2M NIH research grant at Brigham Young University, Diagnostic Ventures is a proud Utah-native startup on a mission to transform sepsis care. We are engineering a diagnostic solution that replaces traditional blood cultures, eliminating critical wait times and empowering providers to save lives.
            </p>
            <p className="fine-print">
              This product is currently under development and is not yet FDA-approved
              or available for commercial sale.
            </p>
            <a className="text-link light" href="/about-us">Our story <span>→</span></a>
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
          <Image src="/media/machine.png" alt="Clarity ID diagnostic instrument in a laboratory" width={1186} height={757} sizes="(max-width: 800px) calc(100vw - 68px), 50vw" />
        </div>
      </section>

      <section className="stat-band">
        <div className="shell">
          <SectionHeading eyebrow="The human cost of sepsis" title="A global emergency measured in lives." />
          <div className="stats-grid">
            <div><strong>50M</strong><span>sepsis infections each year<sup>2</sup></span></div>
            <div><strong>11M</strong><span>sepsis deaths each year<sup>2</sup></span></div>
            <div><strong>1 in 5</strong><span>deaths worldwide caused by sepsis<sup>3</sup></span></div>
          </div>
          <ReferencesBar dark items={[
            "Zanotti-Cavazzoni S. Duration of hypotension before initiation of effective antimicrobial therapy is the critical determinant of survival in human septic shock. Yearbook of Critical Care Medicine. 2007;187–188.",
            "Global Sepsis Alliance, 2024.",
            "Rudd et al. Global, regional, and national sepsis incidence and mortality, 1990–2017: analysis for the Global Burden of Disease Study, 2020.",
          ]} />
          <a className="text-link light" href="/problem">Understand the problem <span>→</span></a>
        </div>
      </section>

      <PartnerCta />
      <Footer />
    </main>
  );
}
