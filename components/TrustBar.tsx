const TRUST_ITEMS = [
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    label: "RGPD conforme",
    detail: "Hébergement EU",
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    label: "Claude API (Anthropic)",
    detail: "IA de confiance",
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    label: "Audit trail horodaté",
    detail: "Valeur probante",
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    label: "Données chiffrées",
    detail: "End-to-end",
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    label: "Opérationnel en 48h",
    detail: "Onboarding guidé",
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Support dédié",
    detail: "Email + Slack",
  },
];

export default function TrustBar() {
  return (
    <div
      style={{
        background: "var(--grey-light)",
        borderBottom: "1px solid var(--border-dim)",
        padding: "20px 60px",
        overflowX: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "40px",
          justifyContent: "space-between",
          minWidth: "max-content",
        }}
      >
        {TRUST_ITEMS.map((item) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "var(--gold)", flexShrink: 0 }}>{item.icon}</span>
            <div>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "var(--white)",
                  display: "block",
                  lineHeight: 1.2,
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--grey)",
                }}
              >
                {item.detail}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
