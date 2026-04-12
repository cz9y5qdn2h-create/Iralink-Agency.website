export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-surface py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">
                <span className="text-white">Ira</span>
                <span className="text-gold-gradient">link</span>
              </span>
              <span className="text-xs text-text-muted border border-dark-border2 rounded px-1.5 py-0.5">
                DIP Pilot
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              On automatise la conformité DIP des réseaux de franchise.
              Votre DIP est toujours à jour. Votre risque juridique est à zéro.
            </p>
            <p className="text-text-faint text-xs mt-4">
              Fondé par Théo Coutard — Paris, France
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Produit</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Comment ça marche", href: "#comment-ca-marche" },
                { label: "Fonctionnalités", href: "#fonctionnalites" },
                { label: "Tarifs", href: "#tarifs" },
                { label: "Audit gratuit", href: "#audit" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-muted text-sm hover:text-text transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Contact</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:theo@iralink-agency.com"
                  className="text-text-muted text-sm hover:text-text transition-colors"
                >
                  theo@iralink-agency.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-sm hover:text-text transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
            <p className="text-white font-semibold text-sm mt-6 mb-4">Ressources</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <span className="text-text-muted text-sm">
                  Art. L.330-3 Code de commerce
                </span>
              </li>
              <li>
                <span className="text-text-muted text-sm">
                  Loi Doubin (31 déc. 1989)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text-faint">
          <p>© {new Date().getFullYear()} Iralink — Tous droits réservés</p>
          <div className="flex gap-6">
            <span>Mentions légales</span>
            <span>CGU</span>
            <span>Politique de confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
