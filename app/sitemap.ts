import type { MetadataRoute } from "next";
import { absoluteUrl, LAST_REVIEWED } from "../lib/site";
import { landingPages } from "../lib/pages";
import { ilceler } from "../lib/pages/ilceler";
import { getAllPosts } from "../lib/blog-data";

/**
 * Planlanmış blog yazıları tarihi geldiğinde elle deploy olmadan yayına
 * girsin diye sayfa 6 saatte bir yeniden üretiliyor.
 */
export const revalidate = 21600;


/**
 * Sitemap tek bir veri kaynağından üretilir; yeni bir landing sayfası veya
 * blog yazısı eklendiğinde burayı ayrıca güncellemek gerekmez.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const reviewed = new Date(LAST_REVIEWED);

  const core: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: reviewed, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/hizmetler"), lastModified: reviewed, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/hakkimda"), lastModified: reviewed, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/antalya-diyetisyen"), lastModified: reviewed, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/sik-sorulan-sorular"), lastModified: reviewed, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/basari-hikayeleri"), lastModified: reviewed, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/blog"), lastModified: reviewed, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/iletisim"), lastModified: reviewed, changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/gizlilik-politikasi"), lastModified: reviewed, changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/kvkk-aydinlatma-metni"), lastModified: reviewed, changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/kullanim-kosullari"), lastModified: reviewed, changeFrequency: "yearly", priority: 0.2 },
  ];

  const landings: MetadataRoute.Sitemap = landingPages.map((p) => ({
    url: absoluteUrl(p.slug),
    lastModified: new Date(p.dateModified ?? LAST_REVIEWED),
    changeFrequency: "monthly",
    // Pillar sayfalar (tek seviye derinlik) daha yüksek öncelikli
    priority: p.crumbs.length <= 2 ? 0.95 : 0.85,
  }));

  const districts: MetadataRoute.Sitemap = ilceler.map((i) => ({
    url: absoluteUrl(`/antalya-diyetisyen/${i.slug}`),
    lastModified: reviewed,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    priority: post.featured ? 0.8 : 0.6,
  }));

  return [...core, ...landings, ...districts, ...posts];
}
