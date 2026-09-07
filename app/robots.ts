import type { MetadataRoute } from "next";
import { site } from "../lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // NOT: /_next/ engellenmez — Google sayfayı doğru render edebilmek için
        // CSS ve JS dosyalarına erişmek zorundadır.
        disallow: ["/api/"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
