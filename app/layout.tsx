import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "DIPpro — Conformité DIP automatisée pour les franchiseurs",
  description:
    "DIPpro surveille votre réseau et met à jour votre Document d'Information Précontractuelle automatiquement. Zéro risque juridique, zéro oubli.",
  keywords: [
    "DIPpro",
    "DIP franchise",
    "Document Information Précontractuelle",
    "conformité franchise",
    "loi Doubin",
    "automatisation DIP",
    "réseau de franchise",
    "Théo Coutard",
  ],
  openGraph: {
    title: "DIPpro — Votre DIP toujours conforme",
    description:
      "Automatisez la conformité DIP de votre réseau. Surveillance continue, mises à jour automatiques, audit trail certifié.",
    type: "website",
    locale: "fr_FR",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://iralink-agency.com/#theo-coutard",
      name: "Théo Coutard",
      jobTitle: "Fondateur",
      email: "theo@iralink-agency.com",
      url: "https://iralink-agency.com",
      sameAs: ["https://www.linkedin.com/in/th%C3%A9o-coutard"],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://iralink-agency.com/#dippro",
      name: "DIPpro",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "EUR",
      },
      author: {
        "@id": "https://iralink-agency.com/#theo-coutard",
      },
      description:
        "Solution d'automatisation du Document d'Information Précontractuelle (DIP) pour les réseaux de franchise. Conformité loi Doubin en continu.",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <ChatWidget />
        <Script
          src="https://taap.it/scripts/tracker.js"
          data-project="pk_f636d7ac7232d2f7a5e64df3b44b9e5d"
          data-track-outbound="true"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
