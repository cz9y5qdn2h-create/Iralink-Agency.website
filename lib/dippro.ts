export const DIPPRO_BASE_URL = "https://iralink-agency.dippro.business";

export function getDipproUrl(
  utmMedium: string,
  extraParams?: Record<string, string>
): string {
  const params = new URLSearchParams({
    utm_source: "iralink-agency.com",
    utm_medium: utmMedium,
    ...extraParams,
  });
  return `${DIPPRO_BASE_URL}?${params.toString()}`;
}
