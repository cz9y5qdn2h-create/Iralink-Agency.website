export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-dark-surface" id="audit">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl border border-gold/25 bg-dark overflow-hidden p-8 md:p-16 text-center">
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(201,168,76,0.06),transparent)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gold/40 to-transparent" />

          <div className="relative">
            {/* Label */}
            <div className="inline-flex items-center gap-2 border border-gold-border bg-gold-muted rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-xs text-gold font-medium tracking-wide">
                Audit de conformité — 100% gratuit
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-6 max-w-3xl mx-auto">
              Votre DIP est-il{" "}
              <span className="text-gold-shimmer">vraiment à jour</span>{" "}
              aujourd&apos;hui ?
            </h2>

            <p className="text-text-muted text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              En 30 minutes, on analyse votre DIP actuel, on identifie les sections à risque,
              et on vous montre exactement comment DIP Pilot les maintient à jour automatiquement.
              Aucun engagement, aucun frais.
            </p>

            {/* What you get */}
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
              {[
                "Analyse section par section",
                "Rapport des risques détectés",
                "Démo live de l'outil",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 justify-center text-sm text-text-muted"
                >
                  <svg
                    className="text-gold flex-shrink-0"
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:theo@iralink-agency.com?subject=Demande d'audit DIP gratuit&body=Bonjour Théo,%0A%0AJe souhaite obtenir un audit gratuit de mon DIP.%0A%0ANom du réseau : %0ANombre de franchisés : %0A%0ACordialement"
                className="btn-gold text-base px-10 py-4 rounded-xl font-bold inline-flex items-center gap-2 justify-center"
              >
                Réserver mon audit gratuit
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            <p className="text-text-faint text-xs mt-6">
              Ou appelez directement : réponse sous 24h garantie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
