// The apex domain's TLS certificate has no SAN for the bare domain (cert is
// issued for www only) — always use the www subdomain until that's fixed
// in Vercel's domain settings for this project.
export const SITE_URL = "https://www.iralink-agency.com";
export const SITE_NAME = "DIPpro";
