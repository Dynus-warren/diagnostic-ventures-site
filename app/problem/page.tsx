import type { Metadata } from "next";
import { PageHero, SectionHeading, SiteEnd } from "../site-components";

export const metadata: Metadata = { title: "The Problem", description: "Why conventional sepsis diagnostics cannot meet the urgency of acute care." };

const hero = "https://cdn.prod.website-files.com/65ef21f157cafd7bcbb798f1/6a2864e9f22be53946b4973f_pexels-sayan-mondal-1178632643-21826918.jpg";
const testing = "https://cdn.prod.website-files.com/65ef21f157cafd7bcbb798f1/6a282f0f34269358a6893804_pexels-karola-g-4226902-p-2000.jpg";

export default function ProblemPage() {
  return <main>
    <PageHero eyebrow="A global problem" title="The cost of sepsis." description="A time-critical medical emergency still constrained by a diagnostic process that takes too long." image={hero} />
    <section className="section-pad">
      <div className="shell">
        <SectionHeading eyebrow="By the numbers" title="Sepsis demands immediate, definitive intervention." center />
        <div className="impact-grid">
          <article><strong>50M</strong><h3>Infections per year</h3><p>Without rapid pathogen identification and targeted treatment, mortality risk increases with each passing hour.</p></article>
          <article><strong>11M</strong><h3>Deaths per year</h3><p>Sepsis remains a primary driver of mortality and readmissions in hospitals around the world.</p></article>
          <article><strong>1 in 5</strong><h3>Deaths worldwide</h3><p>The condition claims a life every few seconds and remains a critical gap in modern acute care.</p></article>
          <article><strong>$62B</strong><h3>U.S. healthcare costs</h3><p>Its impact continues after discharge, with many survivors facing lasting effects.</p></article>
        </div>
      </div>
    </section>
    <section className="testing-gap">
      <div className="shell testing-grid">
        <div className="testing-image"><img src={testing} alt="Clinical sample processing in a laboratory" /></div>
        <div className="testing-copy">
          <p className="eyebrow light">The testing gap</p><h2>The standard of care can take 12–72 hours.</h2>
          <p>Conventional workflows depend on three slow, sequential stages before clinicians receive actionable data.</p>
          <ol className="timeline"><li><span>01</span><div><h3>Culture incubation</h3><p>Blood culture bottles are monitored for bacterial growth.</p></div></li><li><span>02</span><div><h3>Colony isolation</h3><p>A positive culture is plated and additional growth is required.</p></div></li><li><span>03</span><div><h3>Pathogen identification</h3><p>Technicians harvest colonies and perform species identification.</p></div></li></ol>
        </div>
      </div>
    </section>
    <section className="section-pad concentration">
      <div className="shell">
        <SectionHeading eyebrow="The technical challenge" title="Finding four bacteria among 5.9 billion blood components." text="Bacterial concentrations can be extraordinarily low, which is why conventional systems depend on long incubation times to grow bacteria to measurable densities." />
        <div className="concentration-bar"><div><strong>5.5B</strong><span>Red blood cells</span></div><div><strong>500M</strong><span>Platelets</span></div><div><strong>10M</strong><span>White blood cells</span></div><div className="bacteria"><strong>4</strong><span>Total bacteria</span></div></div>
      </div>
    </section>
    <section className="solution-prompt"><div className="shell"><p className="eyebrow light">Our technology</p><h2>Designed to cut the diagnostic timeline by up to 99%.</h2><p>Centrifugal isolation is designed to enable rapid pathogen identification within 20 minutes.</p><a className="button button-light" href="/solution">See our solution <span>↗</span></a></div></section>
    <SiteEnd />
  </main>;
}
