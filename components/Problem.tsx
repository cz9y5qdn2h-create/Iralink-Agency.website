const problems = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Une obligation légale sous-estimée",
    description:
      "La loi Doubin (art. L.330-3 du Code de commerce) oblige tout franchiseur à remettre un DIP complet et à jour au candidat franchisé au moins 20 jours avant la signature. Ce n'est pas une formalité — c'est une condition de validité du contrat.",
    highlight: "20 jours minimum avant signature.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Mis à jour trop rarement, trop tard",
    description:
      "En pratique, 80% des franchiseurs mettent leur DIP à jour une fois par an — quand ils n'oublient pas. Pourtant, chaque nouveau franchisé, chaque litige, chaque changement de dirigeant, chaque évolution financière exige une mise à jour immédiate.",
    highlight: "1 fois/an en moyenne. La loi exige : à chaque changement.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Le coût d'un DIP non conforme",
    description:
      "Un DIP incomplet ou non actualisé peut entraîner la nullité du contrat de franchise, engager la responsabilité du franchiseur et donner lieu à des demandes de remboursement de l'ensemble des redevances versées. Les tribunaux l'ont confirmé à plusieurs reprises.",
    highlight: "Nullité du contrat + remboursement des redevances.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 md:py-32" id="probleme">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs text-gold uppercase tracking-widest font-semibold mb-4">
            Le problème
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-6">
            Un DIP non conforme,
            <br />
            <span className="text-gold-gradient">c&apos;est votre contrat annulé.</span>
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            La plupart des franchiseurs savent que le DIP est obligatoire.
            Peu savent qu&apos;il doit être mis à jour dès qu&apos;une information change.
            C&apos;est là que naît le risque.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <div key={i} className="card-hover rounded-2xl bg-dark-surface p-6 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-dark-surface2 border border-dark-border2 flex items-center justify-center text-gold">
                {problem.icon}
              </div>
              <h3 className="text-white font-bold text-base leading-snug">
                {problem.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed flex-1">
                {problem.description}
              </p>
              <div className="pt-2 border-t border-dark-border">
                <p className="text-xs font-semibold text-gold">{problem.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Alert box */}
        <div className="mt-10 rounded-2xl border border-gold-border bg-gold-muted p-6 flex gap-4 items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 border border-gold-border flex items-center justify-center text-gold">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
            </svg>
          </div>
          <div>
            <p className="text-gold font-semibold text-sm mb-1">
              La loi ne fait pas de distinction entre oubli et négligence.
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Que le DIP n&apos;ait pas été mis à jour par manque de temps, de process,
              ou simplement parce que personne n&apos;a pensé à le faire — le risque juridique est identique.
              DIP Pilot supprime ce risque à sa source.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
