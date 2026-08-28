import type { Metadata } from "next";
import { Header, InquiryForm } from "../site-client";
import { Footer } from "../site-components";

export const metadata: Metadata = { title: "Contact Us", description: "Contact Diagnostic Ventures about the product, clinical timeline, investment, or partnership opportunities." };

export default function ContactPage() {
  return <main className="contact-page">
    <Header />
    <section className="contact-intro"><div className="shell contact-grid"><div><p className="eyebrow">Have questions?</p><h1>We’re here to help.</h1><p className="contact-lede">Whether you need product details, timeline updates, or want to schedule a meeting, reach out to our Utah team.</p><div className="contact-details"><div><span>Location</span><strong>Saratoga Springs, Utah, USA</strong></div><div><span>Phone</span><a href="tel:+18019437789">+1 (801) 943-7789</a></div><div><span>Email</span><a href="mailto:brian@diagnosticventures.net">brian@diagnosticventures.net</a></div><div><span>Business hours</span><strong>8:00am–5:00pm MDT, Monday–Friday</strong></div></div></div><InquiryForm /></div></section>
    <section className="contact-note"><div className="shell"><p>For time-sensitive clinical care, contact your healthcare provider or emergency services. Diagnostic Ventures products are under development and are not available for clinical use.</p></div></section>
    <Footer />
  </main>;
}
