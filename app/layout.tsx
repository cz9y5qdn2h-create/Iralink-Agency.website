import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";
import CookieConsent from "@/components/CookieConsent";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "DIPpro — Conformité Doubin & outil de rédaction DIP pour avocats et franchiseurs",
  description:
    "DIPpro par Iralink Agency : l'outil de référence pour la conformité Doubin des réseaux de franchise, et l'outil de rédaction DIP utilisé par les avocats en droit de la franchise. Analyse IA, citations légales, audit trail. Audit gratuit.",
  keywords: [
    "conformité Doubin",
    "outil de rédaction avocat",
    "outil de rédaction DIP",
    "agence conformité DIP",
    "DIP franchise",
    "Document d'Information Précontractuelle",
    "loi Doubin",
    "article L.330-3",
    "conformité franchise",
    "audit DIP",
    "automatisation DIP",
    "réseau de franchise",
    "avocat droit de la franchise",
    "DIPpro",
    "Iralink Agency",
    "Théo Coutard",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DIPpro — Automatisation de la conformité DIP pour réseaux de franchise",
    description:
      "L'agence spécialisée en conformité DIP. Automatisation loi Doubin en continu pour réseaux de franchise. Audit gratuit.",
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "DIPpro — Iralink Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIPpro — Automatisation de la conformité DIP pour réseaux de franchise",
    description:
      "L'agence spécialisée en conformité DIP. Automatisation loi Doubin en continu pour réseaux de franchise.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#iralink`,
      name: "Iralink Agency",
      url: SITE_URL,
      logo: `${SITE_URL}/icon`,
      description:
        "Agence spécialisée dans l'automatisation de la conformité DIP (Document d'Information Précontractuelle) des réseaux de franchise en France, conformément à la loi Doubin.",
      slogan: "L'agence spécialisée conformité DIP",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressCountry: "FR",
      },
      areaServed: "FR",
      knowsAbout: [
        "Document d'Information Précontractuelle",
        "Loi Doubin",
        "Conformité franchise",
        "Droit de la franchise",
      ],
      founder: {
        "@id": `${SITE_URL}/#theo-coutard`,
      },
      sameAs: ["https://www.linkedin.com/in/th%C3%A9o-coutard"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "DIPpro",
      publisher: {
        "@id": `${SITE_URL}/#iralink`,
      },
      inLanguage: "fr-FR",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#theo-coutard`,
      name: "Théo Coutard",
      jobTitle: "Co-fondateur & CTO",
      email: "theo@iralink-agency.com",
      url: SITE_URL,
      worksFor: {
        "@id": `${SITE_URL}/#iralink`,
      },
      sameAs: ["https://www.linkedin.com/in/th%C3%A9o-coutard"],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#dippro`,
      name: "DIPpro",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Conformité juridique franchise",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        price: "850",
        priceCurrency: "EUR",
        description: "Abonnement mensuel. Installation initiale : 1 350 € (paiement unique).",
      },
      author: {
        "@id": `${SITE_URL}/#iralink`,
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
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700;800&display=swap"
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
        <CookieConsent />
      </body>
    </html>
  );
}
