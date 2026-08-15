import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import LegalContent from "@/components/LegalContent";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Iralink Agency",
  description: "Comment Iralink Agency collecte, utilise et protège vos données personnelles.",
  alternates: { canonical: `${SITE_URL}/politique-de-confidentialite` },
};

export default function PrivacyPage() {
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
              Politique de confidentialité
            </h1>
          </div>
        </section>

        <section className="section-paper" style={{ padding: "60px 8vw clamp(100px,12vw,160px)" }}>
          <LegalContent>
            <p className="legal-note">
              Cette page décrit nos pratiques actuelles de traitement des données. Elle sera mise à jour au fil de
              l&apos;évolution de nos sous-traitants et de notre infrastructure. Pour toute question, contactez{" "}
              <a href="mailto:theo@iralink-agency.com">theo@iralink-agency.com</a>.
            </p>

            <h2>Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données collectées sur ce site est Théo Coutard, pour le compte de la
              structure exploitant Iralink Agency (<span className="legal-placeholder">raison sociale à compléter</span>).
            </p>

            <h2>Données que nous collectons</h2>
            <p>Nous collectons des données personnelles uniquement lorsque vous les fournissez volontairement, via :</p>
            <ul>
              <li><strong>Formulaire de liste d&apos;attente</strong> : nom, email, nom du réseau, nombre de franchisés, rôle.</li>
              <li><strong>Formulaire de contact / demande d&apos;audit</strong> : nom, email, nom du réseau, nombre de franchisés.</li>
              <li><strong>Assistant conversationnel (chat)</strong> : le contenu des messages que vous envoyez à l&apos;assistant.</li>
              <li><strong>Prise de rendez-vous</strong> : les informations transmises via notre outil de planification Cal.com,
                soumis à la politique de confidentialité de Cal.com.</li>
              <li><strong>Navigation</strong> : données d&apos;usage anonymisées ou pseudonymisées via notre outil de mesure d&apos;audience.</li>
            </ul>

            <h2>Finalités et base légale</h2>
            <ul>
              <li>Répondre à vos demandes de contact ou d&apos;audit — <strong>exécution de mesures précontractuelles</strong> à votre demande.</li>
              <li>Vous tenir informé de l&apos;ouverture de DIPpro (liste d&apos;attente) — <strong>consentement</strong>.</li>
              <li>Faire fonctionner l&apos;assistant conversationnel — <strong>intérêt légitime</strong> à vous fournir une réponse immédiate.</li>
              <li>Mesurer la fréquentation du site — <strong>intérêt légitime</strong>, dans les limites autorisées sans consentement préalable, ou <strong>consentement</strong> lorsque celui-ci est requis.</li>
            </ul>

            <h2>Destinataires de vos données</h2>
            <p>Vos données peuvent être transmises aux sous-traitants suivants, dans la stricte limite nécessaire au service rendu :</p>
            <ul>
              <li><strong>Resend</strong> — envoi des emails générés par le formulaire de contact.</li>
              <li><strong>Supabase</strong> — hébergement de la base de données de la liste d&apos;attente.</li>
              <li><strong>Anthropic</strong> — traitement des messages envoyés à l&apos;assistant conversationnel (API Claude).</li>
              <li><strong>Cal.com</strong> — gestion de la prise de rendez-vous.</li>
              <li><strong>Vercel</strong> — hébergement technique du site.</li>
            </ul>
            <p>
              Certains de ces sous-traitants sont établis hors de l&apos;Union européenne, notamment aux États-Unis. Le cas
              échéant, ces transferts s&apos;appuient sur les garanties prévues par le RGPD (clauses contractuelles types ou
              mécanisme équivalent). Nous n&apos;utilisons pas vos données pour entraîner des modèles d&apos;intelligence artificielle.
            </p>

            <h2>Durée de conservation</h2>
            <p>
              Les données issues des formulaires de contact et d&apos;audit sont conservées le temps nécessaire au traitement
              de votre demande, puis archivées ou supprimées. Les inscriptions à la liste d&apos;attente sont conservées
              jusqu&apos;à l&apos;ouverture de DIPpro ou jusqu&apos;à votre demande de suppression.
            </p>

            <h2>Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation,
              d&apos;opposition et de portabilité sur vos données. Vous pouvez exercer ces droits à tout moment en écrivant à{" "}
              <a href="mailto:theo@iralink-agency.com">theo@iralink-agency.com</a>. Vous disposez également du droit
              d&apos;introduire une réclamation auprès de la{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">CNIL</a>.
            </p>

            <h2>Cookies et traceurs</h2>
            <p>
              Ce site utilise un outil de mesure d&apos;audience et charge des polices depuis les serveurs de Google Fonts.
              Le traceur de mesure d&apos;audience n&apos;est activé qu&apos;après votre consentement, recueilli via le bandeau affiché
              lors de votre première visite. Vous pouvez modifier votre choix à tout moment en effaçant les cookies de
              votre navigateur pour ce site.
            </p>

            <h2>Sécurité</h2>
            <p>
              Nous mettons en œuvre les mesures techniques et organisationnelles raisonnables pour protéger vos données
              contre l&apos;accès non autorisé, la perte ou l&apos;altération.
            </p>
          </LegalContent>
        </section>
      </main>
      <Footer />
    </>
  );
}
