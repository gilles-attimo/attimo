// Country-based free shipping threshold tiers
const CORE: string[] = ["BE", "DE", "LU", "NL"];
const TIER_1: string[] = [
  "AT", "BG", "HR", "CZ", "DK", "FR", "HU", "LI", "MT", "PL", "SK", "SI",
];
const TIER_2: string[] = [
  "EE", "IE", "IT", "LV", "LT", "ES", "SE",
];
const TIER_3: string[] = ["FI", "GR", "PT", "RO"];

const SUPPORTED_COUNTRIES = [...CORE, ...TIER_1, ...TIER_2, ...TIER_3];

const DEFAULT_THRESHOLD = 3;

export function getFreeShippingThreshold(countryCode: string | null): number {
  if (!countryCode) return DEFAULT_THRESHOLD;
  const code = countryCode.toUpperCase();
  if (CORE.includes(code)) return 2;
  if (TIER_1.includes(code)) return 2;
  if (TIER_2.includes(code)) return 3;
  if (TIER_3.includes(code)) return 4;
  return DEFAULT_THRESHOLD;
}

export function isCountrySupported(countryCode: string | null): boolean | null {
  if (!countryCode) return null; // undetected — no opinion
  return SUPPORTED_COUNTRIES.includes(countryCode.toUpperCase());
}

export interface GeoResult {
  countryCode: string | null;
  countryName: string | null;
}

export async function detectCountry(): Promise<GeoResult> {
  try {
    const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) });
    if (!res.ok) return { countryCode: null, countryName: null };
    const data = await res.json();
    return {
      countryCode: data.country_code ?? null,
      countryName: data.country_name ?? null,
    };
  } catch {
    return { countryCode: null, countryName: null };
  }
}

// Keep backward-compat alias
export async function detectCountryCode(): Promise<string | null> {
  const { countryCode } = await detectCountry();
  return countryCode;
}
