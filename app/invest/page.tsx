import type { Metadata } from "next";
import { InquiryForm } from "../site-client";
import { PageHero, SectionHeading, SiteEnd } from "../site-components";

export const metadata: Metadata = { title: "Investors", description: "Explore opportunities to support Diagnostic Ventures and the future of rapid sepsis diagnostics." };

const hero = "https://cdn.prod.website-files.com/65ef21f157cafd7bcbb798f1/6a282f0fd113d2b62b58b0d5_pexels-edward-jenner-4031440.jpg";

export default function InvestPage() {
  return <main>
    <PageHero eyebrow="Investors" title="Invest in the future of diagnostics." description="Help bring a rapid, comprehensive pathogen identification system from the laboratory to the patients who need it." image={hero} />
    <section className="section-pad"><div className="shell"><SectionHeading eyebrow="The opportunity" title="A platform built for a high-urgency clinical need." text="Diagnostic Ventures combines protected intellectual property, foundational NIH-backed research, and an experienced team focused on one of acute care’s largest unresolved problems." center /><div className="thesis-grid"><article><span>01</span><h3>Critical unmet need</h3><p>Sepsis is a leading driver of hospital mortality and cost, while actionable pathogen identification can still take days.</p></article><article><span>02</span><h3>Differentiated technology</h3><p>Proprietary centrifugal sample preparation is being integrated with spectroscopy and machine learning.</p></article><article><span>03</span><h3>Global platform potential</h3><p>A rapid approach to pathogen isolation and identification may support multiple time-critical diagnostic applications.</p></article></div></div></section>
    <section className="invest-band"><div className="shell invest-grid"><div><p className="eyebrow light">Why now</p><h2>The timeline for sepsis care has not kept pace with the urgency of treatment.</h2></div><div className="invest-points"><div><strong>$5.2M</strong><p>in NIH-funded foundational research</p></div><div><strong>20 min</strong><p>target for pathogen identification</p></div><div><strong>Worldwide</strong><p>exclusive patent rights supporting the platform</p></div></div></div></section>
    <section className="section-pad milestone-section"><div className="shell"><SectionHeading eyebrow="Development path" title="Advancing from validated science to a clinical platform." /><div className="milestone-list"><div><span>Completed</span><h3>Foundational research</h3><p>NIH-backed work established the centrifugal isolation approach and core intellectual property.</p></div><div><span>In progress</span><h3>Integrated platform development</h3><p>Combining sample preparation, downstream isolation, Raman spectroscopy, and machine learning.</p></div><div><span>Next</span><h3>Clinical validation and commercialization</h3><p>Preparing the technology and evidence needed to advance toward regulatory and market milestones.</p></div></div></div></section>
    <section className="form-section"><div className="shell"><InquiryForm variant="investor" /></div></section>
    <SiteEnd />
  </main>;
}
