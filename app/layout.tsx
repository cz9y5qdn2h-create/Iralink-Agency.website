import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title:
    "DIP Pilot by Théo Coutard — Conformité DIP automatisée pour les franchiseurs",
  description:
    "DIP Pilot, créé par Théo Coutard (Iralink Agency), surveille vos données en continu et met à jour votre Document d'Information Précontractuelle automatiquement. Zéro risque juridique, zéro oubli.",
  keywords: [
    "Théo Coutard",
    "Iralink",
    "Iralink Agency",
    "DIP Pilot",
    "DIP franchise",
    "Document Information Précontractuelle",
    "conformité franchise",
    "loi Doubin",
    "automatisation DIP",
    "réseau de franchise",
  ],
  openGraph: {
    title: "DIP Pilot by Théo Coutard — Votre DIP toujours conforme",
    description:
      "Automatisez la conformité DIP de votre réseau. Surveillance continue, mises à jour automatiques, audit trail certifié. Par Théo Coutard, Iralink Agency.",
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
      worksFor: {
        "@id": "https://iralink-agency.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://iralink-agency.com/#organization",
      name: "Iralink Agency",
      url: "https://iralink-agency.com",
      founder: {
        "@id": "https://iralink-agency.com/#theo-coutard",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "theo@iralink-agency.com",
        contactType: "customer support",
        availableLanguage: "fr",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "FR",
        addressLocality: "Paris",
      },
      description:
        "Iralink Agency automatise la conformité DIP des réseaux de franchise avec DIP Pilot, fondée par Théo Coutard.",
    },
    {
      "@type": "SoftwareApplication",
      name: "DIP Pilot",
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
