import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog — Conformité DIP & Franchise | DIPpro",
  description:
    "Ressources, analyses et guides pratiques sur la conformité DIP, la loi Doubin et la gestion juridique des réseaux de franchise. Par Théo Coutard, DIPpro.",
  keywords: [
    "blog DIP franchise",
    "conformité DIP",
    "loi Doubin",
    "Document Information Précontractuelle",
    "réseau franchise",
    "DIPpro",
  ],
  openGraph: {
    title: "Blog — Conformité DIP & Franchise | DIPpro",
    description:
      "Ressources, analyses et guides pratiques sur la conformité DIP et la gestion juridique des réseaux de franchise.",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://iralink-agency.com/blog",
  },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <Nav />
      <main>
        {/* ── Hero ── */}
        <section
          className="section page-hero"
          style={{
            borderBottom: "1px solid var(--border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="hero-grid-bg" />
          <div className="hero-glow" />

          <div className="section-inner" style={{ position: "relative" }}>
            <div className="section-tag reveal">
              <span className="line" />
              <span className="label">— Blog</span>
            </div>

            <h1
              className="t-h2 reveal reveal-delay-1"
              style={{ maxWidth: "720px", marginBottom: "24px" }}
            >
              Conformité DIP : les ressources<br />
              pour comprendre
            </h1>

            <p
              className="t-body reveal reveal-delay-2"
              style={{ maxWidth: "560px", marginBottom: "0" }}
            >
              Analyses, guides pratiques et décryptages sur la loi Doubin,
              le Document d&apos;Information Précontractuelle et la gestion
              juridique des réseaux de franchise.
            </p>
          </div>
        </section>

        {/* ── Article grid ── */}
        <section className="section">
          <div className="section-inner">
            <div className="blog-grid">
              {articles.map((article, i) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  style={{ textDecoration: "none", display: "block" }}
                  className={`reveal reveal-delay-${Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}`}
                >
                  <article
                    className="blog-card"
                    style={{
                      background: "var(--grey-light)",
                      padding: "40px 36px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "background 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    {/* Category */}
                    <span
                      className="t-mono-sm"
                      style={{ marginBottom: "20px", display: "block" }}
                    >
                      {article.category}
                    </span>

                    {/* Title */}
                    <h2
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(22px, 2.5vw, 28px)",
                        fontWeight: 300,
                        letterSpacing: "-0.01em",
                        lineHeight: 1.18,
                        color: "var(--white)",
                        marginBottom: "16px",
                        flex: "0 0 auto",
                      }}
                    >
                      {article.title}
                    </h2>

                    {/* Description */}
                    <p
                      className="t-body"
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.65,
                        marginBottom: "32px",
                        flex: "1 1 auto",
                      }}
                    >
                      {article.description}
                    </p>

                    {/* Meta row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTop: "1px solid var(--border)",
                        paddingTop: "20px",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "4px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "12px",
                            fontWeight: 400,
                            color: "var(--white)",
                          }}
                        >
                          {article.author}
                        </span>
                        <span
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "10px",
                            letterSpacing: "0.08em",
                            color: "var(--grey)",
                            textTransform: "uppercase",
                          }}
                        >
                          {formatDate(article.date)}
                        </span>
                      </div>

                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "10px",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--grey)",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                      >
                        {article.readTime}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2px;
        }
        .blog-card:hover { background: #1A1A1A !important; }
        @media (max-width: 640px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
