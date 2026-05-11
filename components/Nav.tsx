"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const APP_URL = "https://iralink-agency.dippro.business/login";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Comment ça marche", href: "#comment-ca-marche" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const navLinkStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "12px",
    fontWeight: 400,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "var(--grey)",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const mobileLinkStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "12px",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "var(--grey)",
    textDecoration: "none",
  };

  return (
    <header className={`nav-root ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <a href="#" className="logo" style={{ textDecoration: "none" }}>
        <span className="logo-i">I</span>
        <span className="logo-ralink">RALINK</span>
        <span className="logo-agency">agency</span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "9px",
            fontWeight: 400,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginLeft: "10px",
            opacity: 0.75,
            alignSelf: "center",
          }}
        >
          DIP Pilot
        </span>
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center" style={{ gap: "36px" }}>
        {links.map((link) =>
          link.href.startsWith("#") ? (
            <a
              key={link.href}
              href={link.href}
              style={navLinkStyle}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--white)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--grey)")}
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              style={navLinkStyle}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--white)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--grey)")}
            >
              {link.label}
            </Link>
          )
        )}

        {/* App login link */}
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={navLinkStyle}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--white)")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--grey)")}
        >
          Connexion
        </a>

        <Link href="/contact" className="btn-outline">
          Audit gratuit
        </Link>
      </nav>

      {/* Mobile burger */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        style={{ background: "none", border: "none", color: "var(--grey)", cursor: "pointer" }}
      >
        {menuOpen ? (
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0"
          style={{
            background: "rgba(8,8,8,0.96)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border-dim)",
            padding: "24px 28px 32px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {links.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={mobileLinkStyle}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={mobileLinkStyle}
              >
                {link.label}
              </Link>
            )
          )}

          {/* App login */}
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={mobileLinkStyle}
          >
            Connexion
          </a>

          <Link
            href="/contact"
            className="btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ alignSelf: "flex-start" }}
          >
            Audit gratuit
          </Link>
        </div>
      )}
    </header>
  );
}
