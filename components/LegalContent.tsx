export default function LegalContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="legal-prose">
      {children}
      <style>{`
        .legal-prose { max-width: 760px; margin: 0 auto; }
        .legal-prose h2 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: clamp(22px, 2.6vw, 30px);
          color: var(--ink);
          margin: 48px 0 16px;
        }
        .legal-prose h2:first-child { margin-top: 0; }
        .legal-prose h3 {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: var(--ink);
          margin: 28px 0 10px;
        }
        .legal-prose p {
          font-size: 14.5px;
          line-height: 1.75;
          color: var(--ink-muted);
          margin: 0 0 14px;
        }
        .legal-prose ul {
          margin: 0 0 14px;
          padding-left: 20px;
        }
        .legal-prose li {
          font-size: 14.5px;
          line-height: 1.7;
          color: var(--ink-muted);
          margin-bottom: 6px;
        }
        .legal-prose a { color: var(--gold); text-decoration: underline; }
        .legal-prose strong { color: var(--ink); font-weight: 700; }
        .legal-prose .legal-placeholder {
          background: rgba(176,141,62,0.12);
          color: #8a6a2e;
          padding: 1px 6px;
          border-radius: 2px;
          font-weight: 700;
          font-size: 13.5px;
        }
        .legal-prose .legal-note {
          font-size: 13px;
          font-style: italic;
          color: var(--ink-grey);
          border-left: 2px solid var(--gold);
          padding-left: 16px;
          margin: 24px 0;
        }
      `}</style>
    </div>
  );
}
