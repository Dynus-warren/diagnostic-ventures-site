import type { Metadata } from "next";
import { InquiryForm } from "../site-client";
import { PageHero, SiteEnd } from "../site-components";

export const metadata: Metadata = { title: "Investors", description: "Explore opportunities to support Diagnostic Ventures and the future of rapid sepsis diagnostics." };

const hero = "/media/investors-hero.jpg";

export default function InvestPage() {
  return <main>
    <PageHero eyebrow="Investors" title="Invest in the future of diagnostics." description="Our advanced diagnostics technology targets a comprehensive sepsis assessment within 20 minutes." image={hero} />
    <section className="form-section invest-form-section"><div className="shell"><div className="invest-form-intro"><p className="eyebrow">Join the mission</p><h2>Help bring the world’s fastest pathogen identification system to market.</h2><p>Fill out the form below to discuss opportunities to support our work.</p></div><InquiryForm variant="investor" /></div></section>
    <SiteEnd />
  </main>;
}
