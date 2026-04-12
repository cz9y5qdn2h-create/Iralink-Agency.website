import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIP Pilot — Conformité DIP automatisée pour les réseaux de franchise",
  description:
    "DIP Pilot surveille vos données en continu et met à jour votre Document d'Information Précontractuelle automatiquement. Zéro risque juridique, zéro oubli.",
  keywords: [
    "DIP franchise",
    "Document Information Précontractuelle",
    "conformité franchise",
    "loi Doubin",
    "automatisation DIP",
    "réseau de franchise",
  ],
  openGraph: {
    title: "DIP Pilot — Votre DIP toujours conforme",
    description:
      "Automatisez la conformité DIP de votre réseau. Surveillance continue, mises à jour automatiques, audit trail certifié.",
    type: "website",
    locale: "fr_FR",
  },
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
