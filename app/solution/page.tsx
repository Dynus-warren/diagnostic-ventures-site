import type { Metadata } from "next";
import { InquiryForm } from "../site-client";
import { PageHero, SectionHeading, SiteEnd } from "../site-components";

export const metadata: Metadata = { title: "Clarity ID™ Solution", description: "Meet the rapid pathogen isolation and identification technology behind Clarity ID." };

const hero = "https://cdn.prod.website-files.com/65ef21f157cafd7bcbb798f1/6a282f0fb533ee9bba91188c_pexels-ivan-s-9629682.jpg";
const isolation = "https://cdn.prod.website-files.com/65ef21f157cafd7bcbb798f1/6a285102a34198fe1d64c3ea_image_5eab7df0-p-800.png";
const raman = "https://cdn.prod.website-files.com/65ef21f157cafd7bcbb798f1/6a2854ed8d6fa658ea1362bc_image_98bc82f3-p-800.png";

export default function SolutionPage() {
  const steps = [
    ["01", "Load", "Load the whole blood sample directly into the single-use disk."],
    ["02", "Spin", "Spin the sample at up to 3,000 RPM for 20 seconds."],
    ["03", "Separate", "Separate target pathogens from background interferents using sedimentation forces."],
    ["04", "Isolate", "Decelerate precisely over four minutes to isolate plasma for downstream analysis."],
  ];
  return <main>
    <PageHero eyebrow="Our solution" title="Clarity ID™" description="A fully integrated platform designed to move from whole blood to pathogen identification within 20 minutes." image={hero} />
    <section className="section-pad"><div className="shell"><SectionHeading eyebrow="Meet our technology" title="Three breakthrough systems. One seamless workflow." text="Our platform starts with raw whole blood, rapidly isolates pathogens, and prepares the sample for Raman spectroscopy and AI-enabled identification." center /><div className="technology-grid"><article><div className="tech-image"><img src={isolation} alt="Centrifugal pathogen isolation system" /></div><p className="eyebrow">01 — Sample preparation</p><h3>Centrifugal pathogen isolation</h3><p>A single-use centrifugal disk is designed to isolate pathogens from whole blood within four minutes.</p></article><article><div className="tech-image"><img src={raman} alt="Raman spectroscopy analysis visualization" /></div><p className="eyebrow">02 — Identification</p><h3>Raman spectroscopy & AI</h3><p>Spectroscopy and machine-learning analysis are being developed to enable rapid bacterial identification.</p></article></div></div></section>
    <section className="workflow-section"><div className="shell"><SectionHeading eyebrow="Product workflow" title="Rapid centrifugal isolation." /><div className="workflow-grid">{steps.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section-pad comparison-section"><div className="shell"><SectionHeading eyebrow="Rapid sepsis pathogen ID" title="Designed around the timeframes that matter." center /><div className="comparison-table" role="table" aria-label="Diagnostic platform comparison"><div className="comparison-head" role="row"><div role="columnheader">Platform</div><div role="columnheader">Time to result</div><div role="columnheader">Instrument cost</div><div role="columnheader">Coverage</div></div><div className="comparison-row featured" role="row"><div role="cell"><strong>Diagnostic Ventures</strong><span>Clarity ID™</span></div><div role="cell">Within 20 minutes</div><div role="cell">Target: $50,000</div><div role="cell">Broad bacterial spectrum</div></div><div className="comparison-row" role="row"><div role="cell"><strong>GenMark Diagnostics</strong><span>Roche</span></div><div role="cell">17.5 hours incl. PBC</div><div role="cell">$165,000</div><div role="cell">46 bacterial targets</div></div><div className="comparison-row" role="row"><div role="cell"><strong>BioMérieux</strong></div><div role="cell">16 hours incl. PBC</div><div role="cell">$62,000</div><div role="cell">26 bacterial targets</div></div></div><p className="source-note">Competitive figures reflect the current company comparison and are subject to change as the product develops.</p></div></section>
    <section className="form-section"><div className="shell"><InquiryForm variant="progress" /></div></section>
    <SiteEnd />
  </main>;
}
