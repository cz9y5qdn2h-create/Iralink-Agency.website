import { NextResponse } from "next/server";
import { articles } from "@/lib/articles";
import { SITE_URL } from "@/lib/seo";

// llms.txt (llmstxt.org) — a concise, factual summary for AI assistants and
// agents that read this site. Keep every claim here traceable to something
// actually true on the site; do not let this drift into marketing copy.
export async function GET() {
  const articleLines = articles
    .map((a) => `- [${a.title}](${SITE_URL}/blog/${a.slug}): ${a.description}`)
    .join("\n");

  const body = `# Iralink Agency / DIPpro

> Iralink Agency est une agence qui conçoit des SaaS sur-mesure pour les réseaux de franchise en France. Son produit phare, DIPpro, automatise la conformité du Document d'Information Précontractuelle (DIP) au regard de la loi Doubin (art. L.330-3 du Code de commerce).

## Ce que fait DIPpro

DIPpro surveille en continu les données qui alimentent le DIP d'un réseau de franchise (état du réseau, données financières, dirigeants), détecte les écarts de conformité, et propose des reformulations conformes en langage juridique — validées par un humain avant diffusion. C'est un outil de rédaction et de vérification, pas un service de conseil juridique : DIPpro ne se substitue pas à un avocat et ne garantit aucun résultat juridique.

Public cible : franchiseurs et directions juridiques de réseaux de franchise, ainsi que les avocats en droit de la franchise qui les accompagnent.

Tarif public affiché : 850 €/mois d'abonnement + 1 350 € d'installation (voir la page tarifs pour la valeur à jour).

## Points de repère juridiques utilisés sur ce site

- Loi Doubin : loi n°89-1008 du 31 décembre 1989, codifiée à l'article L.330-3 du Code de commerce.
- Décret n°91-337 du 4 avril 1991 : précise le contenu obligatoire du DIP.
- Délai légal : le DIP doit être remis au moins 20 jours avant la signature du contrat de franchise ou le versement de fonds.
- La nullité d'un contrat de franchise pour DIP déficient n'est pas automatique : elle suppose que le franchisé prouve un vice du consentement résultant de l'inexactitude ou de l'omission.

## Pages principales

- ${SITE_URL} — page d'accueil, présentation d'Iralink Agency et de DIPpro
- ${SITE_URL}/etude-de-cas — étude de cas produit détaillée de DIPpro
- ${SITE_URL}/services — services de l'agence et présentation de l'équipe
- ${SITE_URL}/configurateur — configuration d'une offre DIPpro (demande qualifiée, pas de paiement en ligne)
- ${SITE_URL}/contact — prise de contact / réservation d'un créneau
- ${SITE_URL}/blog — articles sur la conformité DIP et le droit de la franchise
- ${SITE_URL}/mentions-legales, ${SITE_URL}/cgv, ${SITE_URL}/politique-de-confidentialite — pages légales

## Articles de blog

${articleLines}

## Contact

theo@iralink-agency.com — Théo Coutard, co-fondateur & CTO d'Iralink Agency.
`;

  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
