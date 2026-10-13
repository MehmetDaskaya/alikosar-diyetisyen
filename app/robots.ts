import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "../lib/site";

/**
 * AI tarayıcıları açıkça izinli.
 *
 * GEO açısından kritik: bazı sistemler belirsizliği kısıtlama olarak yorumluyor.
 * Özellikle `Google-Extended` engellenirse Gemini ve AI Overviews temellendirme
 * kapsamı dışında kalınır — yerel bir işletme için istenmeyen bir sonuç.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Googlebot",
  "Googlebot-Image",
  "Bingbot",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "meta-externalagent",
  "cohere-ai",
  "DuckAssistBot",
  "YandexBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/static/chunks/"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: site.url,
  };
}
