import type { Metadata } from "next";
import { site, absoluteUrl } from "./site";
import type { LandingData } from "./landing-types";

interface PageMetaInput {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

/**
 * Her sayfanın metadata'sı buradan üretilir.
 *
 * Kritik nokta `alternates.canonical`: kök layout bilerek canonical tanımlamıyor
 * (tanımlasaydı tüm alt sayfalar ana sayfayı işaret ederdi), bu yüzden her
 * sayfanın kendi mutlak canonical değerini vermesi zorunlu.
 *
 * `title` burada olduğu gibi kullanılır — kök layout'un `%s | Diyetisyen Ali Koşar`
 * şablonu devrede olduğundan başlıklar 40 karakteri aşmamalı ki şablonla
 * birlikte 60 karakterin altında kalsın.
 */
export function pageMetadata(input: PageMetaInput): Metadata {
  const url = absoluteUrl(input.path);
  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical: url },
    robots: input.noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: input.type ?? "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title: input.title,
      description: input.description,
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
      ...(input.modifiedTime ? { modifiedTime: input.modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
  };
}

/** Landing sayfası verisinden doğrudan metadata üretir. */
export function landingMetadata(data: LandingData): Metadata {
  return pageMetadata({
    path: data.slug,
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
    modifiedTime: data.dateModified,
  });
}
