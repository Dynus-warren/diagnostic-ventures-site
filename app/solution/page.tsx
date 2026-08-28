import type { Metadata } from "next";
import Image from "next/image";
import { InquiryForm } from "../site-client";
import { PageHero, SectionHeading, SiteEnd } from "../site-components";

export const metadata: Metadata = { title: "Clarity ID™ Solution", description: "Meet the rapid pathogen isolation and identification technology behind Clarity ID." };

const hero = "/media/solution-hero.jpg";
const isolation = "/media/isolation.png";
const raman = "/media/raman.png";

export default function SolutionPage() {
  const steps = [
    ["01", "Load", "Load the whole blood sample directly into the single-use disk."],
    ["02", "Spin", "Spin the sample at up to 3,000 RPM for 20 seconds."],
    ["03", "Separate", "Separate target pathogens from background interferents using sedimentation forces."],
    ["04", "Isolate", "Decelerate precisely over four minutes to isolate plasma for downstream analysis."],
  ];
  return <main>
    <PageHero eyebrow="Our solution" title="Clarity ID™" description="A fully integrated platform designed to move from whole blood to pathogen identification within 20 minutes." image={hero} />
    <section className="section-pad technology-section"><div className="shell"><SectionHeading eyebrow="Meet our technology" title="Two breakthrough systems. One seamless workflow." text="Our platform starts with raw whole blood, rapidly isolates pathogens, and prepares the sample for Raman spectroscopy and AI-enabled identification." center /><div className="technology-grid"><article><div className="tech-image"><Image src={isolation} alt="Centrifugal pathogen isolation system" width={800} height={486} sizes="(max-width: 800px) calc(100vw - 84px), 50vw" /></div><p className="eyebrow">01 — Sample preparation</p><h3>Centrifugal pathogen isolation</h3><p>A single-use centrifugal disk is designed to isolate pathogens from whole blood within four minutes.</p></article><article><div className="tech-image"><Image src={raman} alt="Raman spectroscopy analysis visualization" width={800} height={502} sizes="(max-width: 800px) calc(100vw - 84px), 50vw" /></div><p className="eyebrow">02 — Identification</p><h3>Raman spectroscopy & AI</h3><p>Spectroscopy and machine-learning analysis are being developed to enable rapid bacterial identification.</p></article></div></div></section>
    <section className="workflow-section"><div className="shell"><SectionHeading eyebrow="Product workflow" title="Rapid centrifugal isolation." /><div className="workflow-grid">{steps.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section-pad comparison-section"><div className="shell"><SectionHeading eyebrow="Rapid sepsis pathogen ID" title="Designed around the timeframes that matter." center /><div className="comparison-table" role="table" aria-label="Diagnostic platform comparison"><div className="comparison-head" role="row"><div role="columnheader">Platform</div><div role="columnheader">Time to result</div><div role="columnheader">Instrument cost</div><div role="columnheader">Coverage</div></div><div className="comparison-row featured" role="row"><div role="cell" data-label="Platform"><strong>Diagnostic Ventures</strong><span>Clarity ID™</span></div><div role="cell" data-label="Time to result">Within 20 minutes</div><div role="cell" data-label="Instrument cost">Target: $50,000</div><div role="cell" data-label="Coverage">Broad bacterial spectrum</div></div><div className="comparison-row" role="row"><div role="cell" data-label="Platform"><strong>GenMark Diagnostics</strong><span>Roche</span></div><div role="cell" data-label="Time to result">17.5 hours incl. PBC</div><div role="cell" data-label="Instrument cost">$165,000</div><div role="cell" data-label="Coverage">46 bacterial targets</div></div><div className="comparison-row" role="row"><div role="cell" data-label="Platform"><strong>BioMérieux</strong></div><div role="cell" data-label="Time to result">16 hours incl. PBC</div><div role="cell" data-label="Instrument cost">$62,000</div><div role="cell" data-label="Coverage">26 bacterial targets</div></div></div><p className="source-note">Competitive figures reflect the current company comparison and are subject to change as the product develops.</p></div></section>
    <section className="form-section"><div className="shell"><InquiryForm variant="progress" /></div></section>
    <SiteEnd />
  </main>;
}
