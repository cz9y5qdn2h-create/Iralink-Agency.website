"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-md border-b border-dark-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-white">Ira</span>
            <span className="text-gold-gradient">link</span>
          </span>
          <span className="text-xs text-text-muted font-medium border border-dark-border2 rounded px-1.5 py-0.5 group-hover:border-gold/30 transition-colors">
            DIP Pilot
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#comment-ca-marche"
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            Comment ça marche
          </a>
          <a
            href="#tarifs"
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            Tarifs
          </a>
          <a
            href="#pourquoi-nous"
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            Pourquoi nous
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#audit"
            className="btn-gold text-sm px-4 py-2 rounded-lg"
          >
            Audit gratuit
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-text-muted hover:text-text"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-surface border-b border-dark-border px-6 py-4 flex flex-col gap-4">
          <a
            href="#comment-ca-marche"
            className="text-sm text-text-muted hover:text-text"
            onClick={() => setMenuOpen(false)}
          >
            Comment ça marche
          </a>
          <a
            href="#tarifs"
            className="text-sm text-text-muted hover:text-text"
            onClick={() => setMenuOpen(false)}
          >
            Tarifs
          </a>
          <a
            href="#pourquoi-nous"
            className="text-sm text-text-muted hover:text-text"
            onClick={() => setMenuOpen(false)}
          >
            Pourquoi nous
          </a>
          <a
            href="#audit"
            className="btn-gold text-sm px-4 py-2 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Audit gratuit
          </a>
        </div>
      )}
    </header>
  );
}
