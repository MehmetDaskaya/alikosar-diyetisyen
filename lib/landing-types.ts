import type { Crumb, FaqItem } from "./schema";

export interface LandingSection {
  /** Verildiğinde sayfa içi içindekiler listesinde ve anchor olarak kullanılır. */
  id?: string;
  /** H2 — kullanıcıların gerçekten arattığı soru biçiminde yazılır. */
  heading: string;
  tocLabel?: string;
  /** İlk paragraf, başlıktaki sorunun tam cevabı olmalıdır. */
  body: string[];
  bullets?: { title?: string; text: string }[];
  steps?: { title: string; text: string }[];
  table?: { caption?: string; head: string[]; rows: string[][] };
  callout?: string;
  quote?: { text: string; cite?: string };
}

export interface LandingData {
  slug: string;
  meta: { title: string; description: string; keywords: string[] };
  crumbs: Crumb[];
  eyebrow: string;
  h1: string;
  /** GEO cevap bloğu: 40-60 kelime, bağlamsız kopyalandığında bile anlamlı. */
  answer: string;
  intro?: string;
  /** Sağlık içeriği → MedicalWebPage + tıbbi uyarı. */
  medical?: boolean;
  disclaimerTopic?: string;
  dateModified?: string;
  /** Schema.org `about` — sayfanın konusu olan varlıklar. */
  about: string[];
  serviceType?: string;
  serviceName?: string;
  proof?: readonly { value: string; label: string }[];
  /** Hero'da gösterilecek kanıt görseli (opsiyonel). */
  image?: { src: string; alt: string; width: number; height: number; caption?: string };
  sections: LandingSection[];
  faq: FaqItem[];
  faqHeading?: string;
  faqIntro?: string;
  /** SSS bölümünün altında gösterilecek "tümünü gör" bağlantısı. */
  faqMoreHref?: string;
  faqMoreLabel?: string;
  related: { href: string; label: string; note: string }[];
  asideCtaTitle?: string;
  asideCtaText?: string;
  ctaTitle: string;
  ctaText: string;
}
