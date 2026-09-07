import type { MetadataRoute } from "next";
import { getAllPosts } from "../lib/blog-data";
import { site } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/hizmetler`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/hakkimda`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/basari-hikayeleri`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/iletisim`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/gizlilik-politikasi`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/kullanim-kosullari`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/kvkk-aydinlatma-metni`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  // Blog yazıları otomatik eklenir; yeni yazı eklediğinizde burayı elle
  // güncellemeniz gerekmez.
  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
