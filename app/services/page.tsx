import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Services — Le SaaS, de l'idée au déploiement réseau | Iralink Agency",
  description:
    "Iralink Agency conçoit et développe des SaaS sur-mesure pour les franchiseurs : conformité & juridique, pilotage de réseau, audit & scan terrain. Sprint découverte, développement sur-mesure, partenariat & scale.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "Services — Iralink Agency",
    description: "Une agence unique, spécialisée dans un seul secteur : la franchise.",
    type: "website",
    locale: "fr_FR",
  },
};

const SERVICE_GROUPS = [
  {
    title: "Conformité & juridique",
    items: ["Audit et vérification du DIP", "Suivi des délais légaux", "Générateurs de contrats conformes"],
  },
  {
    title: "Pilotage de réseau",
    items: ["Tableaux de bord multi-unités", "Reporting franchisés / siège", "Outils d'onboarding franchisé"],
  },
  {
    title: "Audit & scan terrain",
    items: ["Applications de scan point de vente", "Contrôle qualité & merchandising", "Alertes de non-conformité opérationnelle"],
  },
];

const OFFERS = [
  { title: "Sprint découverte", body: "Cadrage rapide du besoin, faisabilité et premières maquettes.", price: "Sur devis", featured: false },
  { title: "Développement sur-mesure", body: "Conception et développement complet de votre SaaS, du design au déploiement.", price: "Sur devis", featured: true },
  { title: "Partenariat & scale", body: "Évolution continue du produit à mesure que votre réseau grandit.", price: "Sur devis", featured: false },
];

export default function ServicesPage() {
  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <Nav />

      <main>
        {/* Header */}
        <section className="section-dark page-hero" style={{ padding: "clamp(120px,14vw,160px) 8vw 70px" }}>
          <div className="reveal" style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", color: "var(--gold-light)" }}>SERVICES</span>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(34px,4.8vw,58px)", margin: "16px 0 20px", color: "var(--white)" }}>
              Le SaaS, de l&apos;idée au déploiement réseau.
            </h1>
            <p style={{ fontSize: "clamp(15px,1.5vw,18px)", lineHeight: 1.6, color: "var(--grey)", maxWidth: "600px", margin: 0 }}>
              Une agence unique, spécialisée dans un seul secteur&nbsp;: la franchise.
            </p>
          </div>
        </section>

        {/* Service pillars */}
        <section className="section-dark" style={{ padding: "0 8vw 100px" }}>
          <div className="services-grid" style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", borderTop: "1px solid rgba(236,233,226,0.16)" }}>
            {SERVICE_GROUPS.map((g, i) => (
              <div
                key={g.title}
                className={`reveal reveal-delay-${i + 1}`}
                style={{ padding: "36px 32px", borderRight: i < SERVICE_GROUPS.length - 1 ? "1px solid rgba(236,233,226,0.16)" : "none" }}
              >
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "23px", fontWeight: 600, margin: "0 0 16px", color: "var(--white)" }}>{g.title}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {g.items.map((item) => (
                    <span key={item} style={{ fontSize: "13.5px", color: "var(--grey)" }}>— {item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Offers */}
        <section className="section-paper" style={{ padding: "100px 8vw" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <h2 className="reveal" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(26px,3vw,38px)", margin: "0 0 40px", color: "var(--ink)" }}>
              Nos offres
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "2px", background: "var(--ink-border)" }}>
              {OFFERS.map((o, i) => (
                <div
                  key={o.title}
                  className={`reveal reveal-delay-${i + 1}`}
                  style={{
                    padding: "32px",
                    background: o.featured ? "var(--ink)" : "var(--paper)",
                    color: o.featured ? "var(--white)" : "var(--ink)",
                  }}
                >
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 600, margin: "0 0 10px" }}>{o.title}</h4>
                  <p style={{ fontSize: "13.5px", lineHeight: 1.6, color: o.featured ? "var(--grey)" : "var(--ink-muted)", margin: "0 0 20px" }}>{o.body}</p>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: o.featured ? "var(--gold-light)" : "#8a6a2e" }}>{o.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-paper" style={{ padding: "0 8vw clamp(100px,12vw,160px)" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <h2 className="reveal" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(26px,3vw,38px)", margin: "0 0 40px", color: "var(--ink)" }}>
              L&apos;équipe
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "24px" }}>
              <div className="reveal" style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    margin: "0 auto 18px",
                    borderRadius: "50%",
                    background: "var(--ink)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 600, color: "var(--gold-light)" }}>T</span>
                </div>
                <h4 style={{ fontSize: "15.5px", fontWeight: 700, margin: "0 0 4px", color: "var(--ink)" }}>Théo Coutard</h4>
                <span style={{ fontSize: "12.5px", color: "var(--ink-grey)" }}>Fondation &amp; Produit</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 640px) {
          .services-grid > div { border-right: none !important; border-bottom: 1px solid rgba(236,233,226,0.16); }
        }
      `}</style>
    </>
  );
}
