import type { Metadata } from "next";
import { PageHero, SectionHeading, SiteEnd } from "../site-components";

export const metadata: Metadata = { title: "Our Team", description: "Meet the clinical, scientific, and commercial leaders behind Diagnostic Ventures." };

const people = [
  { name: "Brian Bentley", role: "Co-Founder & CEO", group: "Leadership", image: "https://cdn.prod.website-files.com/65ef21f157cafd7bcbb798f1/698a8e67306c358a2453756c_Brian%20new%20headshot.jpeg", bio: "Brian brings over 30 years of leadership and innovation to modern healthcare, spanning senior sales and business development roles, healthcare SaaS, angel investing, and multiple diagnostic patent applications." },
  { name: "Devin Connor", role: "Co-Founder & COO", group: "Leadership", image: "https://cdn.prod.website-files.com/65ef21f157cafd7bcbb798f1/65f0b4ebae954ca4208913ae_Devin%20Connor.jpg", bio: "Devin brings over 18 years of commercial and operational leadership, including large-scale go-to-market strategy, healthcare SaaS entrepreneurship, and senior advisory experience." },
  { name: "Anthony Shimkin", role: "President", group: "Leadership", image: "https://cdn.prod.website-files.com/65ef21f157cafd7bcbb798f1/69d169961ad7aa6fc3dcf84e_Anthony%20Shimkin%20-%20better%20format.jpg", bio: "Anthony is a MedTech executive and global market strategist whose career spans major revenue expansion, two IPOs, eight strategic acquisitions, and leadership roles at Qualcomm, Quidel, and Cardinal Health." },
  { name: "Christina Ansted, CCMEP", role: "Advisor — Commercialization", group: "Advisors", image: "https://cdn.prod.website-files.com/65ef21f157cafd7bcbb798f1/698a6dbae5510d08d9a18892_Christina%20Ansted%20headshot.jpg", bio: "Christina is a biotechnology executive with over 25 years of experience advancing commercialization, launch readiness, and market access for clinical-stage companies." },
  { name: "Leesa Gentry", role: "Advisor — Clinical Strategy", group: "Advisors", image: "https://cdn.prod.website-files.com/65ef21f157cafd7bcbb798f1/6a70b2cc3603cbb8d5d70080_Screenshot%202026-08-03%20at%209.24.09%E2%80%AFAM.png", bio: "Leesa brings decades of clinical leadership across global trials and business strategy, with experience at RenovoRx, Evotec, Otsuka, IQVIA, PPD, and Omnicare." },
  { name: "Mark & Norma November", role: "Advisors — Investors & Capital", group: "Advisors", image: "https://cdn.prod.website-files.com/65ef21f157cafd7bcbb798f1/698a7a83e147c14190ea99ef_Mark%20and%20norma.jpeg", bio: "Mark and Norma are mission-driven entrepreneurs and investors. As founders of Venture Starters, they have mentored and hosted more than 4,500 founder pitches focused on global challenges." },
  { name: "Russell Kerbel, MD", role: "Advisor — Clinical", group: "Advisors", image: "https://cdn.prod.website-files.com/65ef21f157cafd7bcbb798f1/6a91fa244411435f59f10e73_Russell%20Kerbel.png.avif", bio: "Dr. Kerbel brings deep experience in hospital medicine, sepsis care, and clinical informatics as a UCLA Health medical director, physician informaticist, hospitalist, and clinical professor." },
  { name: "William Pitt, PhD", role: "Advisor — Chemical Engineering", group: "Advisors", image: "https://cdn.prod.website-files.com/65ef21f157cafd7bcbb798f1/65f0b4ebb8687bada4bf5471_William%20Pitt.jpg", bio: "Dr. Pitt is a BYU Professor of Chemical Engineering and microfluidics expert with more than 235 publications and eight patents. His NIH-funded work underpins the company’s centrifugal micro-disc technology." },
  { name: "Jonathon Hill, PhD", role: "Advisor — Genetics", group: "Advisors", image: "https://cdn.prod.website-files.com/65ef21f157cafd7bcbb798f1/65f0bd3a207df7295d3a2237_Jonathan%20Hill%202.jpg", bio: "Dr. Hill is a BYU Associate Professor specializing in molecular genetics, high-throughput sequencing, bioinformatics, liquid biopsy, and cell-free DNA analysis." },
];

function PersonCard({ person }: { person: typeof people[number] }) {
  return <article className="person-card"><div className="person-image"><img src={person.image} alt={person.name} /></div><div className="person-copy"><h3>{person.name}</h3><p className="person-role">{person.role}</p><p>{person.bio}</p></div></article>;
}

export default function TeamPage() {
  const hero = "https://cdn.prod.website-files.com/65ef21f157cafd7bcbb798f1/6a24ee86f6d40c97f0808f6a_pexels-tima-miroshnichenko-9574477.jpg";
  return <main>
    <PageHero eyebrow="Meet our team" title="Over 225 years of clinical, scientific, and commercial experience." image={hero} />
    <section className="section-pad"><div className="shell"><SectionHeading eyebrow="Diagnostic Ventures" title="Leadership" center /><div className="people-grid leadership">{people.filter(p => p.group === "Leadership").map(p => <PersonCard key={p.name} person={p} />)}</div></div></section>
    <section className="section-pad advisor-section"><div className="shell"><SectionHeading title="Advisors" center /><div className="people-grid">{people.filter(p => p.group === "Advisors").map(p => <PersonCard key={p.name} person={p} />)}</div></div></section>
    <SiteEnd />
  </main>;
}
