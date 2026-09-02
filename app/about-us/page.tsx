import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SectionHeading, SiteEnd } from "../site-components";

export const metadata: Metadata = { title: "About Us", description: "The story, mission, and scientific foundation behind Diagnostic Ventures." };

const hero = "/media/about-lab.jpg";
const teamImage = "/media/about-team.jpg";

export default function AboutPage() {
  return <main>
    <PageHero eyebrow="About Diagnostic Ventures" title="Unified by a mission—solving healthcare’s deadliest challenge." image={hero} />
    <section className="section-pad">
      <div className="shell story-grid">
        <SectionHeading eyebrow="Our story" title="Eliminating the wait for effective treatment." />
        <div className="long-copy">
          <p>Nearly one in three hospital deaths is linked to sepsis—a fast-moving condition where every hour without targeted treatment decreases survival by 8%. Within 12 hours, patients can face septic shock with a mortality rate of up to 50%. Yet traditional pathogen identification diagnostics take 12 to 48 hours.</p>
          <p>Diagnostic Ventures was born in 2017 from research led by Dr. William Pitt at Brigham Young University and supported by a $5.2M NIH grant. The team tackled bioengineering’s needle-in-a-haystack problem: isolating just 5–10 bacterial cells from billions of host cells.</p>
          <p>The team engineered a proprietary centrifuge platform that isolates plasma in under four minutes. Working with BYU and Dr. Richard Robison’s BSL-3 research facilities, Diagnostic Ventures is combining centrifugal isolation, downstream bacterial processing, Raman spectroscopy, and machine learning, targeting 98–99% pathogen identification accuracy.</p>
          <p>Diagnostic Ventures holds exclusive worldwide patent rights supporting the platform and its development.</p>
        </div>
      </div>
    </section>
    <section className="mission-panel">
      <div className="shell mission-grid">
        <div><p className="eyebrow light">Our mission</p><h2>Eliminate the wait for effective patient treatment.</h2></div>
        <p>Solving healthcare’s deadliest diagnostic challenges by pioneering advanced, rapid testing systems that eliminate the wait for effective patient treatment.</p>
      </div>
    </section>
    <section className="split-section shell about-team">
      <div className="split-media"><Image src={teamImage} alt="Scientists collaborating in a laboratory" width={3425} height={3316} sizes="(max-width: 800px) calc(100vw - 32px), 50vw" /></div>
      <div className="split-copy"><p className="eyebrow">Our team</p><h2>World-class scientists. Proven clinical leaders.</h2><p>Built on a foundation of rigorous academic discovery and proven clinical execution, our team brings centuries of collective expertise to the frontline of medicine. We have turned our focus toward pioneering the advanced rapid diagnostics necessary to eradicate sepsis and redefine acute patient care.</p><a className="button button-primary" href="/our-team">Meet the team <span>↗</span></a></div>
    </section>
    <SiteEnd />
  </main>;
}
