import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, ReferencesBar, SectionHeading, SiteEnd } from "../site-components";

export const metadata: Metadata = { title: "The Problem", description: "Why conventional sepsis diagnostics cannot meet the urgency of acute care." };

const hero = "/media/problem-hero.jpg";
const testing = "/media/problem-lab.jpg";

export default function ProblemPage() {
  return <main>
    <PageHero eyebrow="A global problem" title="The cost of sepsis." description="A time-critical medical emergency still constrained by a diagnostic process that takes too long." image={hero} />
    <section className="section-pad">
      <div className="shell">
        <SectionHeading eyebrow="By the numbers" title="Sepsis demands immediate, definitive intervention." center />
        <div className="impact-grid">
          <article><strong>50M</strong><h3>Infections per year</h3><p>Sepsis is a rapidly escalating, preventable medical emergency. Without immediate pathogen identification and targeted treatment, mortality risk increases every passing hour.<sup>1</sup></p></article>
          <article><strong>11M</strong><h3>Deaths per year</h3><p>Sepsis is a primary driver of mortality and readmissions in U.S. hospitals. Mortality risk increases 7.6% every hour sepsis is left untreated.<sup>1, 2</sup></p></article>
          <article><strong>1 in 5</strong><h3>Deaths worldwide</h3><p>Sepsis claims an individual life every 2.8 seconds and remains a critical, unaddressed gap in modern acute care.<sup>3</sup></p></article>
          <article><strong>$62B</strong><h3>U.S. healthcare costs</h3><p>As the most expensive condition treated in the U.S., its impact lingers after discharge—leaving up to 50% of survivors with long-term effects.<sup>4</sup></p></article>
        </div>
        <ReferencesBar items={[
          "Zanotti-Cavazzoni S. Duration of hypotension before initiation of effective antimicrobial therapy is the critical determinant of survival in human septic shock. Yearbook of Critical Care Medicine. 2007;187–188.",
          "Mayr FB, et al. Proportion and Cost of Unplanned 30-Day Readmissions After Sepsis Compared With Other Medical Conditions, 2017.",
          "Global Sepsis Alliance, 2024.",
          "Buchman TG, et al. Critical Care Medicine. 2020;48(3):302–318.",
        ]} />
      </div>
    </section>
    <section className="testing-gap">
      <div className="shell testing-grid">
        <div className="testing-image"><Image src={testing} alt="Clinical sample processing in a laboratory" width={2000} height={1333} sizes="(max-width: 800px) calc(100vw - 32px), 45vw" /></div>
        <div className="testing-copy">
          <p className="eyebrow light">The testing gap</p><h2>The standard of care can take 12–72 hours.</h2>
          <p>The current standard of care frequently requires 12 to 72 hours to produce actionable data. Every passing hour compounds a patient’s risk, yet conventional workflows still depend on three slow, sequential stages.</p>
          <ol className="timeline"><li><span>01</span><div><h3>Culture incubation</h3><p>Blood culture bottles are monitored for bacterial growth.</p></div></li><li><span>02</span><div><h3>Colony isolation</h3><p>A positive culture is plated and additional growth is required.</p></div></li><li><span>03</span><div><h3>Pathogen identification</h3><p>Technicians harvest colonies and perform species identification.</p></div></li></ol>
        </div>
      </div>
    </section>
    <section className="section-pad concentration">
      <div className="shell">
        <SectionHeading eyebrow="The difficulty of rapid testing" title="Finding four bacteria among 5.9 billion blood components." text="Bacterial concentrations can be as low as 4 CFU out of 5.9 billion components, requiring extensive incubation time to grow bacteria to meaningful densities." />
        <p className="concentration-unit">All figures shown are per mL of blood.</p>
        <div className="concentration-bar"><div><strong>5.91B</strong><span>Red blood cells</span></div><div><strong>400M</strong><span>Platelets</span></div><div><strong>10M</strong><span>White blood cells</span></div><div className="bacteria"><strong>4</strong><span>Total bacteria</span></div></div>
      </div>
    </section>
    <section className="solution-prompt"><div className="shell"><p className="eyebrow light">Our technology</p><h2>Designed to cut the diagnostic timeline by up to 99%.</h2><p>Centrifugal isolation is designed to enable rapid pathogen identification within 20 minutes.</p><a className="button button-light" href="/solution">See our solution <span>↗</span></a></div></section>
    <SiteEnd />
  </main>;
}
