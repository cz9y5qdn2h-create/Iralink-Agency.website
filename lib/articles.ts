export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "blockquote"; text: string };

export interface Article {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: string;
  content: ContentBlock[];
}

export const articles: Article[] = [
  {
    slug: "dip-franchise-obligations-legales",
    category: "Conformité DIP",
    title: "DIP franchise : ce que la loi Doubin impose vraiment",
    description:
      "Un décryptage complet des obligations légales du Document d'Information Précontractuelle, des délais à respecter aux mentions obligatoires souvent oubliées.",
    date: "2025-04-10",
    readTime: "7 min",
    author: "Théo Coutard",
    content: [
      {
        type: "p",
        text: "Le Document d'Information Précontractuelle (DIP) est au cœur de la relation franchiseur-franchisé depuis la loi Doubin du 31 décembre 1989, codifiée à l'article L.330-3 du Code de commerce. Pourtant, de nombreux réseaux continuent de sous-estimer la portée réelle de ces obligations.",
      },
      {
        type: "h2",
        text: "Le délai des 20 jours : une règle non négociable",
      },
      {
        type: "p",
        text: "La loi impose la remise du DIP au moins 20 jours avant la signature du contrat de franchise ou le versement de tout droit d'entrée. Ce délai est impératif et sa violation peut entraîner la nullité du contrat. La preuve de la remise — et de sa date — est entièrement à la charge du franchiseur.",
      },
      {
        type: "h2",
        text: "Les mentions obligatoires du DIP",
      },
      {
        type: "ul",
        items: [
          "Présentation du franchiseur et de ses dirigeants",
          "Historique du réseau et expérience dans le secteur",
          "État général et local du marché",
          "Réseau : nombre de franchisés, évolution sur 5 ans, contrats non renouvelés",
          "Comptes annuels des deux derniers exercices",
          "Présentation du marché local et de l'implantation envisagée",
        ],
      },
      {
        type: "h2",
        text: "Les erreurs les plus fréquentes",
      },
      {
        type: "p",
        text: "L'audit de conformité révèle systématiquement les mêmes failles : données financières non mises à jour en début d'exercice, état du réseau figé sur l'année précédente, clauses de territorialité imprécises. Ces lacunes exposent le franchiseur à des recours qui peuvent aller jusqu'à l'annulation du contrat.",
      },
      {
        type: "blockquote",
        text: "Un DIP non conforme ne protège pas seulement le franchisé — il expose le franchiseur à une insécurité juridique totale sur l'ensemble de ses contrats en cours.",
      },
      {
        type: "h3",
        text: "L'impact des données financières périmées",
      },
      {
        type: "p",
        text: "Chaque début d'exercice, les comptes annuels doivent être remplacés. Les réseaux qui négligent cette mise à jour se retrouvent avec un DIP techniquement non conforme pour toute la période de transition, ce qui peut concerner plusieurs dizaines de contrats signés pendant cette fenêtre.",
      },
      {
        type: "h2",
        text: "Vers une conformité continue",
      },
      {
        type: "p",
        text: "La conformité DIP n'est pas un événement ponctuel mais un processus continu. Les données du réseau évoluent en permanence — fermetures, ouvertures, renouvellements, résiliations — et le DIP doit refléter cette réalité au moment de chaque remise. C'est précisément ce que DIPpro automatise.",
      },
    ],
  },
  {
    slug: "audit-dip-reseau-franchise",
    category: "Audit & Risques",
    title: "Comment auditer le DIP de votre réseau en 5 étapes",
    description:
      "Méthodologie pratique pour identifier les zones de risque dans votre Document d'Information Précontractuelle avant qu'elles ne deviennent des contentieux.",
    date: "2025-03-28",
    readTime: "5 min",
    author: "Théo Coutard",
    content: [
      {
        type: "p",
        text: "Auditer son DIP ne devrait pas être un exercice annuel mais un réflexe permanent. Voici la méthodologie que nous appliquons chez Iralink Agency pour identifier les zones de risque rapidement.",
      },
      {
        type: "h2",
        text: "Étape 1 — Vérifier la date des données financières",
      },
      {
        type: "p",
        text: "Commencez par la section comptable. Les comptes présentés correspondent-ils bien aux deux derniers exercices clos ? Si votre exercice se clôture en décembre, dès janvier vos données sont potentiellement obsolètes. Notez la date d'arrêté des comptes et comparez-la à la date de remise prévue.",
      },
      {
        type: "h2",
        text: "Étape 2 — Auditer l'état du réseau",
      },
      {
        type: "p",
        text: "La liste des franchisés, des établissements ouverts, des contrats non renouvelés et résiliés doit être précise à la date de remise. C'est la section la plus dynamique du DIP et souvent la moins bien maintenue.",
      },
      {
        type: "ol",
        items: [
          "Compter le nombre actuel de franchisés actifs",
          "Lister les fermetures des 12 derniers mois",
          "Lister les non-renouvellements des 12 derniers mois",
          "Vérifier la cohérence avec les données présentées sur 5 ans",
        ],
      },
      {
        type: "h2",
        text: "Étape 3 — Contrôler la présentation du marché local",
      },
      {
        type: "p",
        text: "Cette section varie selon l'implantation envisagée et nécessite une actualisation par candidat. Vérifiez que les données de marché citées (études, sources, dates) sont récentes et cohérentes avec la zone de chalandise présentée.",
      },
      {
        type: "h2",
        text: "Étape 4 — Vérifier les dirigeants et parcours",
      },
      {
        type: "p",
        text: "Les condamnations des dirigeants sur les 5 dernières années doivent être déclarées. C'est une mention souvent survolée mais dont l'omission volontaire est sanctionnée sévèrement.",
      },
      {
        type: "h2",
        text: "Étape 5 — Dater et archiver la preuve de remise",
      },
      {
        type: "p",
        text: "L'existence du DIP ne suffit pas. La preuve de sa remise à la bonne date — accusé de réception, signature du franchisé — est indispensable. Constituez un dossier par candidat avec horodatage.",
      },
      {
        type: "blockquote",
        text: "La question n'est pas 'avons-nous un DIP ?' mais 'pouvons-nous prouver que le bon DIP a été remis au bon moment à chaque candidat ?'",
      },
    ],
  },
  {
    slug: "automatisation-conformite-dip",
    category: "Technologie",
    title: "Pourquoi l'automatisation est la seule solution viable pour la conformité DIP",
    description:
      "Les réseaux de franchise qui tentent de gérer la conformité DIP manuellement accumulent du risque sans le savoir. Analyse des limites du processus humain et des gains de l'automatisation.",
    date: "2025-03-14",
    readTime: "6 min",
    author: "Théo Coutard",
    content: [
      {
        type: "p",
        text: "La plupart des équipes juridiques de réseaux de franchise gèrent la conformité DIP via des tableurs, des rappels calendaires et des échanges d'emails. Cette approche présente des failles structurelles que nous observons systématiquement lors de nos audits.",
      },
      {
        type: "h2",
        text: "Le problème de la latence humaine",
      },
      {
        type: "p",
        text: "Entre le moment où une information change (fermeture d'un franchisé, clôture des comptes, modification du réseau) et le moment où cette information est reflétée dans le DIP actif, il s'écoule en moyenne 6 à 12 semaines dans un processus manuel bien géré. Pendant cette fenêtre, chaque remise de DIP est non conforme.",
      },
      {
        type: "h2",
        text: "La scalabilité comme problème central",
      },
      {
        type: "p",
        text: "Un réseau de 50 franchisés avec 15 candidatures actives par trimestre représente des dizaines de DIP à maintenir en permanence. La charge administrative croît linéairement avec le réseau, créant un goulot d'étranglement précisément au moment où la croissance doit s'accélérer.",
      },
      {
        type: "ul",
        items: [
          "50 franchisés = ~15 événements réseau à intégrer par mois",
          "Chaque événement nécessite une mise à jour DIP dans les 48h",
          "Un juriste mobilisé 4 à 6 heures par mise à jour",
          "Risque de non-conformité multiplié par le nombre de remises pendant la période de latence",
        ],
      },
      {
        type: "h2",
        text: "Ce que l'automatisation change réellement",
      },
      {
        type: "p",
        text: "DIPpro surveille en continu les données qui alimentent votre DIP. Dès qu'un événement déclencheur est détecté, le système met à jour la section concernée et génère une alerte pour validation humaine. Le temps de latence passe de plusieurs semaines à moins de 24 heures.",
      },
      {
        type: "blockquote",
        text: "L'automatisation ne remplace pas le juriste — elle l'émancipe des tâches de surveillance pour le concentrer sur la valeur ajoutée réelle.",
      },
      {
        type: "h3",
        text: "L'audit trail comme bénéfice secondaire",
      },
      {
        type: "p",
        text: "Au-delà de la conformité courante, l'automatisation génère un audit trail complet : quelle version du DIP a été remise, à qui, à quelle date, avec quel contenu. En cas de contentieux, cette traçabilité est souvent la différence entre une situation défendable et une exposition totale.",
      },
      {
        type: "h2",
        text: "La question du ROI",
      },
      {
        type: "p",
        text: "Un seul contentieux DIP représente en moyenne 15 000 à 80 000 euros de frais juridiques et d'aléa judiciaire, sans compter l'impact réputationnel. Pour un réseau de 20 franchisés, le risque statistique annuel justifie largement l'investissement dans une solution d'automatisation.",
      },
    ],
  },
  {
    slug: "dip-pilot-fonctionnalites",
    category: "Produit",
    title: "DIPpro : comment fonctionne la surveillance continue de votre conformité",
    description:
      "Tour d'horizon des fonctionnalités de DIPpro : surveillance des données, mise à jour automatique, génération de DIP, audit trail et alertes temps réel.",
    date: "2025-02-27",
    readTime: "4 min",
    author: "Théo Coutard",
    content: [
      {
        type: "p",
        text: "DIPpro est conçu pour résoudre un problème précis : maintenir en permanence la conformité du Document d'Information Précontractuelle d'un réseau de franchise, sans mobiliser de ressources humaines pour les tâches de surveillance.",
      },
      {
        type: "h2",
        text: "La surveillance continue des sources",
      },
      {
        type: "p",
        text: "Le système connecte les sources de données qui alimentent votre DIP — registres, données comptables, base de données franchisés — et détecte en temps réel tout changement nécessitant une mise à jour.",
      },
      {
        type: "h2",
        text: "La mise à jour assistée",
      },
      {
        type: "p",
        text: "Lorsqu'un changement est détecté, DIP Pilot génère une proposition de mise à jour de la section concernée. Le juriste n'a plus qu'à valider, modifier si nécessaire, et approuver. La version précédente est archivée avec horodatage.",
      },
      {
        type: "h2",
        text: "La génération du DIP",
      },
      {
        type: "p",
        text: "À partir des données validées, DIP Pilot génère le DIP complet au format PDF, prêt pour la remise au candidat. Le document est automatiquement versionné et associé au dossier candidat.",
      },
      {
        type: "h2",
        text: "L'audit trail certifié",
      },
      {
        type: "ul",
        items: [
          "Historique complet de chaque version du DIP",
          "Traçabilité des remises par candidat",
          "Horodatage de chaque modification",
          "Export pour dossier contentieux",
        ],
      },
      {
        type: "blockquote",
        text: "DIP Pilot ne gère pas seulement la conformité courante — il construit en permanence le dossier de preuve qui vous protégera en cas de litige.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
