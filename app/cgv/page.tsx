import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import LegalContent from "@/components/LegalContent";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Conditions générales de vente — DIPpro | Iralink Agency",
  description: "Conditions générales de vente applicables à l'abonnement DIPpro.",
  alternates: { canonical: `${SITE_URL}/cgv` },
  robots: { index: false, follow: true },
};

export default function CGVPage() {
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
              Conditions générales de vente
            </h1>
          </div>
        </section>

        <section className="section-paper" style={{ padding: "60px 8vw clamp(100px,12vw,160px)" }}>
          <LegalContent>
            <p className="legal-note">
              Modèle de conditions générales préparé dans l&apos;attente de l&apos;immatriculation de la structure exploitant
              Iralink Agency et d&apos;une revue par un professionnel du droit. Ne pas considérer comme définitivement
              opposable tant que ces deux étapes ne sont pas finalisées.
            </p>

            <h2>Article 1 — Objet</h2>
            <p>
              Les présentes conditions générales régissent la souscription à DIPpro, service d&apos;automatisation de la
              conformité du Document d&apos;Information Précontractuelle, édité par{" "}
              <span className="legal-placeholder">raison sociale à compléter</span> (« le Prestataire »).
            </p>

            <h2>Article 2 — Client concerné</h2>
            <p>
              DIPpro est un service destiné aux professionnels (franchiseurs, têtes de réseau) agissant dans le cadre
              de leur activité. Les clients employant cinq salariés ou moins peuvent, selon les règles du Code de la
              consommation, bénéficier de certaines protections consuméristes lorsque le contrat est étranger à leur
              activité principale ; le Prestataire applique par précaution le droit de rétractation décrit à l&apos;article 6
              à l&apos;ensemble de ses clients.
            </p>

            <h2>Article 3 — Description du service</h2>
            <p>
              DIPpro surveille les obligations légales déclaratives du réseau du client, génère des propositions de
              mise à jour du DIP soumises à validation humaine, et archive un historique horodaté des versions. DIPpro
              est un outil d&apos;assistance à la conformité et ne constitue en aucun cas un conseil juridique personnalisé :
              le client demeure seul responsable de la conformité de son DIP et de ses obligations légales. Le
              Prestataire recommande au client de faire valider tout DIP par un avocat avant remise à un candidat
              franchisé.
            </p>

            <h2>Article 4 — Prix et modalités de paiement</h2>
            <p>
              L&apos;abonnement est facturé 850 € HT par mois, précédé d&apos;une installation initiale de 1 350 € HT facturée
              une seule fois. Les tarifs en vigueur sont ceux affichés sur le site au moment de la souscription. Le
              paiement s&apos;effectue selon les modalités communiquées lors de la souscription.
            </p>

            <h2>Article 5 — Durée et résiliation</h2>
            <p>
              L&apos;abonnement est conclu pour une durée indéterminée. Chaque partie peut y mettre fin à tout moment, sous
              réserve d&apos;un préavis de 30 jours notifié par écrit. Aucune pénalité de résiliation n&apos;est due. Les données
              du client lui sont restituées, sur demande, aux formats PDF et JSON.
            </p>

            <h2>Article 6 — Droit de rétractation</h2>
            <p>
              Conformément à l&apos;article L. 221-18 du Code de la consommation, le client dispose d&apos;un délai de 14 jours
              à compter de la souscription pour exercer son droit de rétractation, sauf s&apos;il a expressément demandé
              le démarrage immédiat du service et renoncé à ce droit. Pour exercer ce droit, le client contacte{" "}
              <a href="mailto:theo@iralink-agency.com">theo@iralink-agency.com</a>.
            </p>

            <h2>Article 7 — Responsabilité</h2>
            <p>
              Le Prestataire s&apos;engage à mettre en œuvre tous les moyens raisonnables pour assurer la fiabilité du
              service. Sa responsabilité ne saurait être engagée en cas de non-conformité du DIP résultant d&apos;une
              information erronée ou incomplète transmise par le client, ni au-delà des sommes effectivement versées
              par le client au titre des douze derniers mois, sauf faute lourde ou dol.
            </p>

            <h2>Article 8 — Données personnelles</h2>
            <p>
              Le traitement des données personnelles dans le cadre de l&apos;exécution du service est décrit dans notre{" "}
              <a href="/politique-de-confidentialite">politique de confidentialité</a>.
            </p>

            <h2>Article 9 — Droit applicable</h2>
            <p>
              Les présentes conditions sont soumises au droit français. Tout litige relève, à défaut de résolution
              amiable, des juridictions compétentes conformément aux règles de droit commun.
            </p>

            <h2>Article 10 — Modification des CGV</h2>
            <p>
              Le Prestataire peut modifier les présentes conditions à tout moment. Les conditions applicables sont
              celles en vigueur à la date de souscription ou de renouvellement du service.
            </p>
          </LegalContent>
        </section>
      </main>
      <Footer />
    </>
  );
}
