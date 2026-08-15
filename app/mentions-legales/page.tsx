import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import LegalContent from "@/components/LegalContent";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mentions légales — Iralink Agency",
  description: "Mentions légales du site iralink-agency.com.",
  alternates: { canonical: `${SITE_URL}/mentions-legales` },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <Nav />
      <main>
        <section className="section-dark page-hero" style={{ padding: "clamp(120px,14vw,160px) 8vw 60px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", color: "var(--gold-light)" }}>LÉGAL</span>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(30px,4vw,46px)", margin: "16px 0 0", color: "var(--white)" }}>
              Mentions légales
            </h1>
          </div>
        </section>

        <section className="section-paper" style={{ padding: "60px 8vw clamp(100px,12vw,160px)" }}>
          <LegalContent>
            <p className="legal-note">
              Document en cours de finalisation en attendant l&apos;immatriculation de la structure exploitant le site.
              Les informations marquées <span className="legal-placeholder">à compléter</span> seront mises à jour dès l&apos;immatriculation effective.
            </p>

            <h2>Éditeur du site</h2>
            <p>
              Le site iralink-agency.com est édité par : <span className="legal-placeholder">raison sociale à compléter</span>,
              <span className="legal-placeholder"> forme juridique à compléter</span>
              {" "}(en cours de constitution), dont le siège social est situé <span className="legal-placeholder">adresse à compléter</span>,
              immatriculée sous le numéro SIRET <span className="legal-placeholder">à compléter</span>.
            </p>
            <p>
              Numéro de TVA intracommunautaire : <span className="legal-placeholder">à compléter</span>.
            </p>
            <p>
              Directeur de la publication : Théo Coutard — <a href="mailto:theo@iralink-agency.com">theo@iralink-agency.com</a>.
            </p>

            <h2>Hébergement</h2>
            <p>
              Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
              (<a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>).
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, visuels, logo, structure) est protégé par le droit
              de la propriété intellectuelle. Toute reproduction ou représentation, totale ou partielle, sans autorisation
              préalable est interdite.
            </p>

            <h2>Données personnelles</h2>
            <p>
              Le traitement des données personnelles collectées via ce site est détaillé dans notre{" "}
              <a href="/politique-de-confidentialite">politique de confidentialité</a>.
            </p>

            <h2>Contact</h2>
            <p>
              Pour toute question relative au site : <a href="mailto:theo@iralink-agency.com">theo@iralink-agency.com</a>.
            </p>
          </LegalContent>
        </section>
      </main>
      <Footer />
    </>
  );
}
