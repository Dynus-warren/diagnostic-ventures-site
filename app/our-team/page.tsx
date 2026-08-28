import type { Metadata } from "next";
import { PageHero, SectionHeading, SiteEnd } from "../site-components";

export const metadata: Metadata = { title: "Our Team", description: "Meet the clinical, scientific, and commercial leaders behind Diagnostic Ventures." };

const people = [
  { name: "Brian Bentley", role: "Co-Founder & CEO", group: "Leadership", image: "/media/team-brian.jpeg", bio: "Brian brings over 30 years of leadership and innovation to modern healthcare, spanning senior sales and business development roles, healthcare SaaS, angel investing, and multiple diagnostic patent applications." },
  { name: "Devin Connor", role: "Co-Founder & COO", group: "Leadership", image: "/media/team-devin.jpg", bio: "Devin brings over 18 years of commercial and operational leadership, including large-scale go-to-market strategy, healthcare SaaS entrepreneurship, and senior advisory experience." },
  { name: "Anthony Shimkin", role: "President", group: "Leadership", image: "/media/team-anthony.jpg", bio: "Anthony is a MedTech executive and global market strategist whose career spans major revenue expansion, two IPOs, eight strategic acquisitions, and leadership roles at Qualcomm, Quidel, and Cardinal Health." },
  { name: "Christina Ansted, CCMEP", role: "Advisor — Commercialization", group: "Advisors", image: "/media/team-christina.jpg", bio: "Christina is a biotechnology executive with over 25 years of experience advancing commercialization, launch readiness, and market access for clinical-stage companies." },
  { name: "Leesa Gentry", role: "Advisor — Clinical Strategy", group: "Advisors", image: "/media/team-leesa.png", bio: "Leesa brings decades of clinical leadership across global trials and business strategy, with experience at RenovoRx, Evotec, Otsuka, IQVIA, PPD, and Omnicare." },
  { name: "Mark & Norma November", role: "Advisors — Investors & Capital", group: "Advisors", image: "/media/team-november.jpeg", bio: "Mark and Norma are mission-driven entrepreneurs and investors. As founders of Venture Starters, they have mentored and hosted more than 4,500 founder pitches focused on global challenges." },
  { name: "Russell Kerbel, MD", role: "Advisor — Clinical", group: "Advisors", image: "/media/team-russell.avif", bio: "Dr. Kerbel brings deep experience in hospital medicine, sepsis care, and clinical informatics as a UCLA Health medical director, physician informaticist, hospitalist, and clinical professor." },
  { name: "William Pitt, PhD", role: "Advisor — Chemical Engineering", group: "Advisors", image: "/media/team-william.jpg", bio: "Dr. Pitt is a BYU Professor of Chemical Engineering and microfluidics expert with more than 235 publications and eight patents. His NIH-funded work underpins the company’s centrifugal micro-disc technology." },
  { name: "Jonathon Hill, PhD", role: "Advisor — Genetics", group: "Advisors", image: "/media/team-jonathon.jpg", bio: "Dr. Hill is a BYU Associate Professor specializing in molecular genetics, high-throughput sequencing, bioinformatics, liquid biopsy, and cell-free DNA analysis." },
];

function PersonCard({ person }: { person: typeof people[number] }) {
  return <article className="person-card"><div className="person-image"><img src={person.image} alt={person.name} /></div><div className="person-copy"><h3>{person.name}</h3><p className="person-role">{person.role}</p><p>{person.bio}</p></div></article>;
}

export default function TeamPage() {
  const hero = "/media/about-lab.jpg";
  return <main>
    <PageHero eyebrow="Meet our team" title="Over 225 years of clinical, scientific, and commercial experience." image={hero} />
    <section className="section-pad"><div className="shell"><SectionHeading eyebrow="Diagnostic Ventures" title="Leadership" center /><div className="people-grid leadership">{people.filter(p => p.group === "Leadership").map(p => <PersonCard key={p.name} person={p} />)}</div></div></section>
    <section className="section-pad advisor-section"><div className="shell"><SectionHeading title="Advisors" center /><div className="people-grid">{people.filter(p => p.group === "Advisors").map(p => <PersonCard key={p.name} person={p} />)}</div></div></section>
    <SiteEnd />
  </main>;
}
