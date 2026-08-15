"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Qu'est-ce que le DIP et pourquoi est-il obligatoire ?",
    a: "Le Document d'Information Précontractuelle (DIP) est imposé par la loi Doubin (art. L.330-3 du Code de commerce). Tout franchiseur doit le remettre à chaque candidat franchisé au moins 20 jours avant la signature d'un contrat. Il doit contenir des informations précises et actualisées sur le réseau, le marché et le franchiseur. Une inexactitude peut, si le franchisé prouve qu'elle a vicié son consentement, entraîner la nullité du contrat et l'obligation de rembourser les redevances perçues.",
  },
  {
    q: "Mon DIP actuel est-il vraiment non conforme ?",
    a: "Probablement. 80 % des franchiseurs mettent leur DIP à jour une seule fois par an. Or la loi exige une mise à jour à chaque changement significatif : nouveau franchisé, litige, fermeture d'un point de vente, changement de dirigeant, évolution du marché... La jurisprudence est constante sur ce point : un DIP mal tenu à jour fragilise fortement la position du franchiseur en cas de contentieux.",
  },
  {
    q: "Que fait DIPpro concrètement ?",
    a: "DIPpro surveille chaque semaine les obligations légales de votre réseau. Dès qu'un écart est détecté, l'IA génère la mise à jour nécessaire et vous la soumet pour validation. Une fois approuvée, elle est distribuée automatiquement à tous vos franchisés par email certifié et consignée dans un audit trail horodaté. Vous disposez en permanence d'un tableau de bord de conformité temps réel.",
  },
  {
    q: "Combien ça coûte et quel est le ROI ?",
    a: "L'installation est de 1 350 € (configuration, paramétrage, import de votre DIP existant, onboarding). L'abonnement est de 850 €/mois. Comparez : le coût moyen d'un litige DIP est de 50 000 € (honoraires, remboursements, préjudice de réputation). Avec 20 franchisés et une mise à jour annuelle, votre risque annuel attendu dépasse 100 000 €. DIPpro : 10 200 €/an. Le calcul est simple.",
  },
  {
    q: "Combien de temps pour être opérationnel ?",
    a: "48 heures. Nous importons votre DIP existant, configurons votre compte, paramétrons les surveillances et vous formons à l'interface. À J+2, votre premier rapport de conformité est disponible dans votre tableau de bord.",
  },
  {
    q: "Comment l'IA de DIPpro analyse-t-elle mes documents ?",
    a: "DIPpro utilise l'API Claude d'Anthropic — le même modèle d'IA utilisé par des entreprises du Fortune 500. L'IA analyse vos documents juridiques, les compare aux exigences légales en vigueur et à la jurisprudence récente, détecte les écarts, et génère des propositions de mise à jour en langage juridique. Chaque modification est soumise à votre validation avant d'être finalisée. Vous gardez le contrôle.",
  },
  {
    q: "DIPpro est-il conforme au RGPD ?",
    a: "Oui. Les données de votre réseau sont hébergées en Europe, chiffrées au repos et en transit. Nous n'utilisons jamais vos données pour entraîner des modèles IA. Un DPA (Data Processing Agreement) est disponible sur demande. Notre sous-traitant IA (Anthropic) dispose de certifications SOC 2 Type II.",
  },
  {
    q: "Puis-je arrêter à tout moment ?",
    a: "Oui. L'abonnement est résiliable avec un préavis de 30 jours. Vos données vous appartiennent intégralement et vous sont restituées en format PDF et JSON exportables. Aucune pénalité de résiliation.",
  },
  {
    q: "DIPpro gère-t-il plusieurs réseaux ou plusieurs langues ?",
    a: "La version actuelle est optimisée pour les réseaux de franchise français opérant sous la loi Doubin. La gestion multi-réseaux est en cours de développement pour les groupes franchiseurs disposant de plusieurs enseignes. Contactez-nous pour un devis sur mesure.",
  },
  {
    q: "Que se passe-t-il si mon réseau évolue après l'installation ?",
    a: "C'est précisément pour ça que DIPpro existe. Chaque ajout de franchisé, chaque modification de réseau déclenche automatiquement une vérification de conformité. DIPpro vous alerte et propose les mises à jour DIP correspondantes. Votre conformité est maintenue en continu, sans effort de votre part.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section" id="faq" style={{ background: "var(--grey-light)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="section-inner">
        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">FAQ</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            alignItems: "start",
            marginBottom: "52px",
          }}
          className="responsive-2col"
        >
          <h2 className="t-h2 reveal reveal-delay-1">
            Toutes vos questions.<br />
            Des réponses directes.
          </h2>
          <p
            className="t-body reveal reveal-delay-2"
            style={{ fontSize: "14px", paddingTop: "8px", maxWidth: "380px" }}
          >
            Chaque question est une objection levée. Si vous n&apos;y trouvez
            pas votre réponse, l&apos;assistant IA est disponible en bas à droite.
          </p>
        </div>

        <div
          className="reveal"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                borderTop: i === 0 ? "1px solid var(--border-dim)" : "none",
                borderBottom: "1px solid var(--border-dim)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "24px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "19px",
                    fontWeight: 300,
                    color: open === i ? "var(--white)" : "var(--white)",
                    lineHeight: 1.3,
                    flex: 1,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    color: "var(--gold)",
                    flexShrink: 0,
                    transition: "transform 0.3s ease",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </button>

              {open === i && (
                <div style={{ paddingBottom: "24px", paddingRight: "40px" }}>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "#787878",
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="reveal"
          style={{
            marginTop: "48px",
            padding: "32px 40px",
            background: "var(--black)",
            borderLeft: "2px solid var(--gold)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "20px",
                fontWeight: 300,
                color: "var(--white)",
                marginBottom: "4px",
              }}
            >
              Vous avez encore des questions ?
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 300,
                color: "var(--grey)",
              }}
            >
              L&apos;assistant Iralink est disponible 24h/24, ou écrivez directement à Théo.
            </p>
          </div>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="mailto:theo@iralink-agency.com"
              className="btn-outline"
            >
              theo@iralink-agency.com
            </a>
            <a
              href="#liste-attente"
              className="btn-primary"
            >
              Rejoindre la liste →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
