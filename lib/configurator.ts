export interface OptionalModule {
  id: string;
  name: string;
  description: string;
  pricingLabel: string;
}

export const SOCLE = {
  id: "socle",
  name: "Socle DIPpro",
  tagline: "Inclus dans toute configuration",
  description:
    "Monitoring automatique des sources, mises à jour du DIP assistées par IA, disponibilité de la plateforme.",
  monthlyPrice: 850,
  installPrice: 1400,
};

export const OPTIONAL_MODULES: OptionalModule[] = [
  {
    id: "support-prioritaire",
    name: "Support prioritaire",
    description: "Délai de réponse garanti, ligne dédiée.",
    pricingLabel: "Sur devis / mois",
  },
  {
    id: "revue-juridique",
    name: "Revue juridique trimestrielle",
    description: "Relecture du DIP par un avocat partenaire.",
    pricingLabel: "Sur devis / trimestre",
  },
  {
    id: "cession-reprise",
    name: "Cession / reprise d'unité",
    description: "DIP dédié à chaque transfert d'unité franchisée.",
    pricingLabel: "Sur devis / dossier",
  },
  {
    id: "multi-territoires",
    name: "Multi-territoires",
    description: "Suivi renforcé pour les réseaux en expansion ou à l'international.",
    pricingLabel: "Sur devis / mois",
  },
];

export function fmtEUR(n: number): string {
  return new Intl.NumberFormat("fr-FR").format(n) + " €";
}

export function selectedModules(ids: string[]): OptionalModule[] {
  return OPTIONAL_MODULES.filter((m) => ids.includes(m.id));
}

export interface ConfiguratorContact {
  nom: string;
  reseau: string;
  email: string;
  telephone: string;
  pointsDeVente: string;
}

export const EMPTY_CONTACT: ConfiguratorContact = {
  nom: "",
  reseau: "",
  email: "",
  telephone: "",
  pointsDeVente: "",
};
