"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDipproUrl } from "@/lib/dippro";
import { magnetMove, magnetLeave } from "@/lib/motion3d";

const DIPPRO_URL = getDipproUrl("nav");

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const resolve = (href: string) =>
    href.startsWith("#") && pathname !== "/" ? `/${href}` : href;

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 860);
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Étude de cas", href: "/etude-de-cas" },
    { label: "Services", href: "/services" },
    { label: "Tarifs", href: resolve("#tarifs") },
    { label: "Blog", href: "/blog" },
  ];

  const renderLink = (href: string) =>
    href.startsWith("#") || href.startsWith("/#");

  return (
    <header className="nav-root">
      <Link
        href="/"
        className="nav-invert"
        style={{ textDecoration: "none", display: "inline-flex", alignItems: "baseline" }}
        onClick={() => setMenuOpen(false)}
      >
        <span className="logo">
          <span className="logo-i">IRALINK</span>
          <span className="logo-agency">agency</span>
        </span>
      </Link>

      {!isMobile && (
        <nav className="nav-invert" style={{ display: "flex", alignItems: "center", gap: "clamp(18px,3vw,40px)" }}>
          {links.map((link) =>
            renderLink(link.href) ? (
              <a
                key={link.label}
                href={link.href}
                style={{ cursor: "pointer", fontSize: "14px", fontWeight: 600, letterSpacing: "0.02em", textDecoration: "none", color: "inherit" }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                style={{ cursor: "pointer", fontSize: "14px", fontWeight: 600, letterSpacing: "0.02em", textDecoration: "none", color: "inherit" }}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            style={{ cursor: "pointer", fontSize: "14px", fontWeight: 600, letterSpacing: "0.02em", textDecoration: "none", color: "inherit" }}
          >
            Prendre RDV
          </Link>
          <a
            href={DIPPRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ cursor: "pointer", fontSize: "12px", fontWeight: 500, letterSpacing: "0.02em", textDecoration: "none", color: "inherit", opacity: 0.65 }}
          >
            DIPpro ↗
          </a>
          <Link
            href="/configurateur"
            onMouseMove={magnetMove}
            onMouseLeave={magnetLeave}
            className="btn-primary"
            style={{ transition: "transform .15s ease, background .2s ease" }}
          >
            Configurer mon offre
          </Link>
        </nav>
      )}

      {isMobile && (
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          className="nav-invert"
          style={{ background: "none", border: "1px solid currentColor", borderRadius: "2px", width: "40px", height: "40px", fontSize: "18px", cursor: "pointer" }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      )}

      {isMobile && menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 49,
            background: "var(--black)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "32px",
            gap: "26px",
          }}
        >
          {links.map((link) =>
            renderLink(link.href) ? (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "32px", fontWeight: 600, color: "var(--white)", textDecoration: "none" }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "32px", fontWeight: 600, color: "var(--white)", textDecoration: "none" }}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "32px", fontWeight: 600, color: "var(--white)", textDecoration: "none" }}
          >
            Contact
          </Link>
          <a
            href={DIPPRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold-light)", textDecoration: "none" }}
          >
            Accéder à DIPpro →
          </a>
          <Link
            href="/configurateur"
            onClick={() => setMenuOpen(false)}
            className="btn-primary"
            style={{ marginTop: "14px", alignSelf: "flex-start" }}
          >
            Configurer mon offre
          </Link>
        </div>
      )}
    </header>
  );
}
