export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid opacity-60" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(201,168,76,0.08),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-gold-border bg-gold-muted rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-xs text-gold font-medium tracking-wide uppercase">
              Pour les réseaux de franchise — Loi Doubin, art. L.330-3
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            <span className="text-white">Votre DIP toujours</span>
            <br />
            <span className="text-gold-shimmer">en conformité.</span>
          </h1>

          {/* Subline */}
          <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto mb-10">
            DIP Pilot surveille vos données en continu, détecte chaque changement,
            et met à jour votre Document d&apos;Information Précontractuelle automatiquement.{" "}
            <span className="text-text font-medium">Zéro oubli. Zéro risque juridique.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#audit"
              className="btn-gold w-full sm:w-auto text-base px-8 py-3.5 rounded-xl font-bold"
            >
              Obtenir mon audit gratuit
            </a>
            <a
              href="#comment-ca-marche"
              className="btn-outline-gold w-full sm:w-auto text-base px-8 py-3.5 rounded-xl font-medium flex items-center justify-center gap-2"
            >
              Voir comment ça marche
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-text-muted">
            <span className="flex items-center gap-2">
              <svg className="text-gold" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
              Audit gratuit 30 min
            </span>
            <span className="flex items-center gap-2">
              <svg className="text-gold" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              Données hébergées en France
            </span>
            <span className="flex items-center gap-2">
              <svg className="text-gold" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Opérationnel en 48h
            </span>
            <span className="flex items-center gap-2">
              <svg className="text-gold" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Audit trail certifié
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
