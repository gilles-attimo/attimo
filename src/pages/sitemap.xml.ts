import type { APIRoute } from "astro";
import { getAllPostMeta } from "@/lib/sanity";

const SITE = "https://attimo-oil.com";

const STATIC_URLS: { loc: string; changefreq: string; priority: string }[] = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/product/coratina", changefreq: "weekly", priority: "0.9" },
  { loc: "/product/nocellara", changefreq: "weekly", priority: "0.9" },
  { loc: "/product/picual", changefreq: "weekly", priority: "0.9" },
  { loc: "/blog", changefreq: "weekly", priority: "0.8" },
  { loc: "/quiz", changefreq: "weekly", priority: "0.6" },
  { loc: "/contact", changefreq: "weekly", priority: "0.5" },
  { loc: "/shipping", changefreq: "monthly", priority: "0.4" },
  { loc: "/privacy", changefreq: "yearly", priority: "0.3" },
  { loc: "/terms", changefreq: "yearly", priority: "0.3" },
];

export const GET: APIRoute = async () => {
  const posts = await getAllPostMeta();

  const staticEntries = STATIC_URLS.map(
    (u) =>
      `  <url>\n    <loc>${SITE}${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  ).join("\n");

  const postEntries = posts
    .map((p) => {
      const lastmod = (p.updatedAt || p.publishedAt).split("T")[0];
      return `  <url>\n    <loc>${SITE}/blog/${p.slug}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${staticEntries}\n${postEntries}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
