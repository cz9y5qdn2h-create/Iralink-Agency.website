import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import { articles, getArticle, type ContentBlock } from "@/lib/articles";
import { SITE_URL } from "@/lib/seo";

/* ─── Static params ─── */
export function generateStaticParams(): { slug: string }[] {
  return articles.map((article) => ({ slug: article.slug }));
}

/* ─── Per-article metadata ─── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: "Article introuvable | DIPpro",
    };
  }

  return {
    title: `${article.title} | DIPpro`,
    description: article.description,
    keywords: [
      article.category,
      "DIP franchise",
      "conformité DIP",
      "loi Doubin",
      "DIPpro",
      "Théo Coutard",
    ],
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      locale: "fr_FR",
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: [article.author],
      tags: [article.category, "DIP franchise", "conformité DIP"],
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${article.slug}`,
    },
  };
}

/* ─── Content block renderer ─── */
function renderBlock(block: ContentBlock, index: number): React.ReactNode {
  switch (block.type) {
    case "p":
      return (
        <p
          key={index}
          className="t-body"
          style={{
            fontSize: "16px",
            lineHeight: 1.85,
            marginBottom: "28px",
            color: "var(--grey)",
          }}
        >
          {block.text}
        </p>
      );

    case "h2":
      return (
        <h2
          key={index}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(26px, 3vw, 36px)",
            fontWeight: 300,
            letterSpacing: "-0.015em",
            lineHeight: 1.15,
            color: "var(--white)",
            marginTop: "56px",
            marginBottom: "20px",
          }}
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3
          key={index}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(20px, 2.2vw, 26px)",
            fontWeight: 300,
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
            color: "var(--white)",
            marginTop: "40px",
            marginBottom: "16px",
          }}
        >
          {block.text}
        </h3>
      );

    case "ul":
      return (
        <ul
          key={index}
          className="bullet-list"
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol
          key={index}
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginBottom: "28px",
            counterReset: "ol-counter",
          }}
        >
          {block.items.map((item, j) => (
            <li
              key={j}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                color: "var(--grey)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  color: "var(--gold)",
                  flexShrink: 0,
                  marginTop: "3px",
                  minWidth: "20px",
                }}
              >
                {String(j + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );

    case "blockquote":
      return (
        <blockquote
          key={index}
          style={{
            borderLeft: "2px solid var(--gold)",
            paddingLeft: "28px",
            marginLeft: 0,
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(18px, 2vw, 22px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.55,
              color: "var(--white)",
              opacity: 0.85,
            }}
          >
            {block.text}
          </p>
        </blockquote>
      );

    default:
      return null;
  }
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/* ─── Page ─── */
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  /* JSON-LD Article + BreadcrumbList schema */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        dateModified: article.date,
        author: {
          "@type": "Person",
          name: article.author,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: "Iralink Agency",
          url: SITE_URL,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/blog/${article.slug}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_URL}/blog/${article.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* ── Article header ── */}
        <section
          className="section page-hero"
          style={{
            paddingBottom: "80px",
            borderBottom: "1px solid var(--border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="hero-grid-bg" />
          <div className="hero-glow" />

          <div className="section-inner" style={{ position: "relative" }}>
            {/* Back link */}
            <div style={{ marginBottom: "48px" }}>
              <Link
                href="/blog"
                className="btn-ghost"
                style={{ display: "inline-flex" }}
              >
                <span
                  style={{
                    display: "inline-block",
                    marginRight: "8px",
                    transition: "transform 0.3s ease",
                  }}
                >
                  ←
                </span>
                Retour au blog
              </Link>
            </div>

            {/* Category tag */}
            <div className="section-tag reveal">
              <span className="line" />
              <span className="label">{article.category}</span>
            </div>

            {/* Title */}
            <h1
              className="t-h2 reveal reveal-delay-1"
              style={{ maxWidth: "800px", marginBottom: "32px" }}
            >
              {article.title}
            </h1>

            {/* Description */}
            <p
              className="t-body reveal reveal-delay-2"
              style={{
                maxWidth: "620px",
                fontSize: "17px",
                lineHeight: 1.7,
                marginBottom: "48px",
              }}
            >
              {article.description}
            </p>

            {/* Meta */}
            <div
              className="reveal reveal-delay-3"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "32px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {/* Author avatar placeholder */}
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid var(--border)",
                    background: "var(--grey-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "var(--gold)",
                    }}
                  >
                    T
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "var(--white)",
                    }}
                  >
                    {article.author}
                  </span>
                  <span
                    className="t-mono-sm"
                    style={{ fontSize: "9px", letterSpacing: "0.12em" }}
                  >
                    DIPpro
                  </span>
                </div>
              </div>

              <div
                style={{
                  width: "1px",
                  height: "28px",
                  background: "var(--border)",
                }}
              />

              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--grey)",
                }}
              >
                {formatDate(article.date)}
              </span>

              <div
                style={{
                  width: "1px",
                  height: "28px",
                  background: "var(--border)",
                }}
              />

              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--grey)",
                }}
              >
                {article.readTime} de lecture
              </span>
            </div>
          </div>
        </section>

        {/* ── Article body ── */}
        <section
          className="section"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="section-inner article-grid">
            {/* Main content */}
            <div className="article-content">
              {article.content.map((block, i) => renderBlock(block, i))}
            </div>

            {/* Sidebar */}
            <aside className="article-sidebar">
              {/* CTA card */}
              <div
                style={{
                  background: "var(--grey-light)",
                  padding: "36px 32px",
                  border: "1px solid var(--border)",
                  position: "sticky",
                  top: "100px",
                }}
              >
                <span
                  className="t-mono-sm"
                  style={{ display: "block", marginBottom: "16px" }}
                >
                  DIPpro
                </span>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "22px",
                    fontWeight: 300,
                    lineHeight: 1.25,
                    color: "var(--white)",
                    marginBottom: "16px",
                  }}
                >
                  Automatisez votre conformité DIP
                </h3>
                <p
                  className="t-body"
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.7,
                    marginBottom: "28px",
                  }}
                >
                  Surveillance continue, mises à jour automatiques, audit trail
                  certifié. Zéro risque juridique.
                </p>
                <Link href="/contact" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Audit gratuit
                </Link>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    fontWeight: 300,
                    color: "var(--grey)",
                    letterSpacing: "0.06em",
                    textAlign: "center",
                    marginTop: "12px",
                  }}
                >
                  Sans engagement · Réponse sous 24h
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* ── Back to blog ── */}
        <section className="section" style={{ borderTop: "1px solid var(--border)", paddingTop: "60px", paddingBottom: "80px" }}>
          <div
            className="section-inner"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <Link href="/blog" className="btn-ghost">
              <span style={{ marginRight: "8px" }}>←</span>
              Tous les articles
            </Link>
            <Link href="/contact" className="btn-outline">
              Réserver un audit gratuit
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style>{``}</style>
    </>
  );
}
