import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Iralink Agency — L'agence SaaS pour les franchiseurs",
  description:
    "Iralink Agency conçoit des outils SaaS qui automatisent les obligations permanentes des réseaux de franchise. DIPpro, notre premier produit, automatise la conformité DIP.",
  keywords: [
    "Iralink Agency",
    "SaaS franchise",
    "DIPpro",
    "DIP franchise",
    "Document Information Précontractuelle",
    "conformité franchise",
    "loi Doubin",
    "automatisation franchise",
    "réseau de franchise",
    "Théo Coutard",
  ],
  openGraph: {
    title: "Iralink Agency — L'agence SaaS pour les franchiseurs",
    description:
      "Outils SaaS pour automatiser les obligations permanentes des réseaux de franchise. DIPpro : conformité DIP automatisée.",
    type: "website",
    locale: "fr_FR",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://iralink-agency.com/#iralink",
      name: "Iralink Agency",
      url: "https://iralink-agency.com",
      description:
        "Agence SaaS spécialisée dans l'automatisation des obligations légales des réseaux de franchise.",
      founder: {
        "@id": "https://iralink-agency.com/#theo-coutard",
      },
    },
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
        "@id": "https://iralink-agency.com/#iralink",
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
