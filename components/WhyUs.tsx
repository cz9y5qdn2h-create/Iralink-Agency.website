const advantages = [
  {
    number: "01",
    title: "Personne ne fait ça.",
    description:
      "Aucun outil automatisé de gestion et mise à jour du DIP n'existe sur le marché français. Vous n'adoptez pas une nouvelle technologie — vous êtes les premiers à en avoir une.",
  },
  {
    number: "02",
    title: "Ce n'est pas optionnel.",
    description:
      "Le DIP n'est pas une best practice. C'est la loi. Chaque franchiseur doit le maintenir à jour tant que son réseau existe. C'est un abonnement à vie justifié par une obligation permanente.",
  },
  {
    number: "03",
    title: "Le ROI est immédiat.",
    description:
      "Un litige sur DIP non conforme coûte en moyenne 15 000€ à 50 000€ en honoraires d'avocat, avant même le jugement. L'abonnement annuel DIP Pilot coûte 6 000€ à 12 000€. Le calcul est simple.",
  },
  {
    number: "04",
    title: "Stack éprouvé.",
    description:
      "DIP Pilot est construit sur des technologies robustes et testées en production : n8n, Make, Claude API. Pas de prototype — un outil opérationnel qui a fait ses preuves sur d'autres automatisations métier.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 md:py-32" id="pourquoi-nous">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="text-xs text-gold uppercase tracking-widest font-semibold mb-4">
              Pourquoi nous
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              L&apos;avantage{" "}
              <span className="text-gold-gradient">concurrentiel</span>
              <br />
              qui ne disparaît pas.
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Iralink est spécialisé sur un seul sujet : l&apos;automatisation de la conformité DIP
              pour les réseaux de franchise. Pas d&apos;agence généraliste, pas de promesses vagues.
              Un produit, un problème résolu.
            </p>

            {/* Market stat */}
            <div className="rounded-2xl border border-dark-border bg-dark-surface p-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-black text-gold-gradient">2 035</span>
                <span className="text-text-muted text-sm">réseaux en France</span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                C&apos;est le marché total. Tous légalement obligés d&apos;avoir un DIP à jour.
                Aucun n&apos;a d&apos;outil pour l&apos;automatiser.
                <span className="text-text font-medium"> C&apos;est maintenant que ça change.</span>
              </p>
            </div>
          </div>

          {/* Right — advantages */}
          <div className="flex flex-col gap-5">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className="card-hover rounded-2xl bg-dark-surface p-5 flex gap-4"
              >
                <div className="step-number flex-shrink-0">{adv.number}</div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-1.5">{adv.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{adv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-16" />

        {/* About Théo */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs text-gold uppercase tracking-widest font-semibold mb-4">
            Qui sommes-nous
          </p>
          <h3 className="text-xl font-bold text-white mb-4">
            Théo Coutard — Fondateur Iralink
          </h3>
          <p className="text-text-muted text-sm leading-relaxed mb-6">
            Spécialiste en automatisation IA pour les entreprises, Théo a co-conçu
            DIP Pilot après avoir constaté que les franchiseurs font face à une obligation
            légale permanente sans aucun outil pour la tenir. Iralink apporte la réponse
            technique et juridique à ce problème structurel.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold text-sm px-5 py-2.5 rounded-xl flex items-center gap-2"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Suivre sur LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
