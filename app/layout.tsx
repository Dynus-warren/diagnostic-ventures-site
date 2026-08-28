import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://diagnosticventures.net"),
  title: {
    default: "Diagnostic Ventures — Advancing Rapid Sepsis Detection",
    template: "%s — Diagnostic Ventures",
  },
  description:
    "Rapid pathogen identification technology designed to transform the timeline of sepsis care.",
  openGraph: {
    type: "website",
    title: "Rapid testing saves lives. — Diagnostic Ventures",
    description: "Rapid pathogen identification technology designed to transform the timeline of sepsis care.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Diagnostic Ventures — Rapid testing saves lives." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rapid testing saves lives. — Diagnostic Ventures",
    description: "Rapid pathogen identification technology designed to transform the timeline of sepsis care.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/media/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
