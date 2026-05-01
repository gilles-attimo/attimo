import { useEffect } from "react";
import { useLocation } from "@/lib/router-stub";

/**
 * Sets site-wide <meta name="robots"> and <link rel="canonical"> in <head>.
 * Canonical is derived from the current pathname so it works on every page.
 * Individual pages can still override these (e.g. BlogPostPage sets noindex).
 */
export const GlobalHead = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // --- robots ---
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "index, follow");

    // --- canonical ---
    const canonicalHref = "https://attimo-oil.com" + pathname;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalHref;
  }, [pathname]);

  return null;
};
