/**
 * JSON-LD üreticileri.
 *
 * Kök layout `Dietitian` + `Person` + `WebSite` düğümlerini bir kez basar
 * (`app/layout.tsx`). Buradaki üreticiler sayfaya özgü düğümleri kurar ve
 * `@id` üzerinden o üç düğüme referans verir; böylece arama motorları ve
 * LLM'ler "site → işletme → kişi → sayfa → hizmet" grafiğini tek seferde çıkarır.
 *
 * Kök düğümlerin `@id` değerleri layout ile aynı olmak zorunda — burada
 * tek yerden tanımlanıyor.
 */

import { site, absoluteUrl, knowsAbout, LAST_REVIEWED } from "./site";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Node = Record<string, any>;

/** Kök layout'taki düğümlerin kimlikleri. Değiştirilirse layout da güncellenmeli. */
export const ID = {
  business: `${site.url}/#business`,
  person: `${site.url}/#alikosar`,
  website: `${site.url}/#website`,
} as const;

/** Person düğümünün `knowsAbout` listesi — layout tarafından kullanılır. */
export { knowsAbout };

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbNode(crumbs: Crumb[]): Node {
  return {
    "@type": "BreadcrumbList",
    "@id": absoluteUrl(crumbs[crumbs.length - 1]?.path ?? "/") + "#breadcrumb",
    itemListElement: [{ name: "Ana Sayfa", path: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export interface FaqItem {
  question: string;
  answer: string;
  /**
   * Bu sorunun yapısal veride "sahibi" olan sayfa.
   *
   * Aynı soru birden çok sayfada gösterilebilir (kullanıcı için faydalı),
   * ancak FAQPage işaretlemesi **yalnızca tek bir URL'de** yayınlanmalıdır.
   * Tekrarlanan FAQ işaretlemesi Google tarafından yok sayılabiliyor ve o soru
   * için hangi sayfanın sıralanacağını belirsizleştiriyor.
   *
   * Boş bırakılırsa soruyu gösteren sayfa sahibi kabul edilir.
   */
  canonical?: string;
}

/**
 * FAQPage düğümü — yalnızca bu sayfanın sahibi olduğu sorular işaretlenir.
 * Sahibi başka bir sayfa olan sorular sayfada görünmeye devam eder ama
 * yapısal veriye girmez.
 */
export function faqNode(items: FaqItem[], path: string): Node | undefined {
  const owned = items.filter((f) => !f.canonical || f.canonical === path);
  if (owned.length === 0) return undefined;
  return {
    "@type": "FAQPage",
    "@id": absoluteUrl(path) + "#faq",
    mainEntity: owned.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export interface PageNodeInput {
  path: string;
  name: string;
  description: string;
  /** Sağlık içeriği ise MedicalWebPage — `lastReviewed` + `reviewedBy` ile birlikte. */
  medical?: boolean;
  dateModified?: string;
  crumbs?: Crumb[];
  /** Sayfanın konusu olan varlık(lar) — GEO'da konu eşleşmesini güçlendirir. */
  about?: string[];
}

export function webPageNode(input: PageNodeInput): Node {
  const node: Node = {
    "@type": input.medical ? "MedicalWebPage" : "WebPage",
    "@id": absoluteUrl(input.path) + "#webpage",
    url: absoluteUrl(input.path),
    name: input.name,
    description: input.description,
    inLanguage: "tr-TR",
    isPartOf: { "@id": ID.website },
    dateModified: input.dateModified ?? LAST_REVIEWED,
    author: { "@id": ID.person },
    publisher: { "@id": ID.business },
    primaryImageOfPage: absoluteUrl("/images/ali-kosar-portre.jpg"),
  };

  node.about = input.about?.length
    ? [{ "@id": ID.person }, ...input.about.map((t) => ({ "@type": "Thing", name: t }))]
    : { "@id": ID.person };

  if (input.medical) {
    node.lastReviewed = input.dateModified ?? LAST_REVIEWED;
    node.reviewedBy = { "@id": ID.person };
    node.audience = {
      "@type": "Patient",
      geographicArea: { "@type": "City", name: "Antalya" },
    };
  }

  if (input.crumbs?.length) {
    node.breadcrumb = { "@id": absoluteUrl(input.path) + "#breadcrumb" };
  }

  return node;
}

export interface ServiceNodeInput {
  path: string;
  name: string;
  description: string;
  serviceType: string;
}

export function serviceNode(input: ServiceNodeInput): Node {
  return {
    "@type": "Service",
    "@id": absoluteUrl(input.path) + "#service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    provider: { "@id": ID.business },
    areaServed: { "@type": "City", name: site.address.city },
    availableChannel: [
      {
        "@type": "ServiceChannel",
        name: "Klinikte yüz yüze görüşme",
        servicePhone: site.phone,
        serviceLocation: { "@id": ID.business },
      },
      {
        "@type": "ServiceChannel",
        name: "Online danışmanlık",
        serviceUrl: absoluteUrl("/online-diyet"),
      },
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Antalya ve çevresindeki danışanlar",
    },
  };
}

export interface ArticleNodeInput {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  keywords?: string[];
  section?: string;
  wordCount?: number;
  image?: string;
}

export function articleNode(input: ArticleNodeInput): Node {
  return {
    "@type": ["Article", "MedicalWebPage"],
    "@id": absoluteUrl(input.path) + "#article",
    headline: input.headline.slice(0, 110),
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: "tr-TR",
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    lastReviewed: input.dateModified ?? input.datePublished,
    reviewedBy: { "@id": ID.person },
    author: { "@id": ID.person },
    publisher: { "@id": ID.business },
    isPartOf: { "@id": ID.website },
    mainEntityOfPage: absoluteUrl(input.path),
    articleSection: input.section,
    keywords: input.keywords?.join(", "),
    wordCount: input.wordCount,
    image: absoluteUrl(input.image ?? "/images/ali-kosar-portre.jpg"),
  };
}

/** Düğümleri tek bir `@graph` altında paketler; `undefined` girdiler atlanır. */
export function graph(...nodes: (Node | undefined)[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  });
}
