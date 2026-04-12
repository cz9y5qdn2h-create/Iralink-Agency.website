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
    title: "DIP Pilot — Votre DIP toujours à jour",
    description:
      "Automatisez la conformité DIP de votre réseau. Surveillance continue, mises à jour automatiques, audit trail certifié.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIP Pilot — Conformité DIP automatisée",
    description:
      "Automatisez la conformité DIP de votre réseau de franchise. Zéro risque juridique.",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark text-text antialiased">{children}</body>
    </html>
  );
}
