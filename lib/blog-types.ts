// Blog Post Type Definition
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  /** ISO 8601 yayın tarihi (YYYY-MM-DD). Görüntülenen tarih bundan üretilir. */
  publishedAt: string;
  /** ISO 8601 son güncelleme tarihi. Yoksa publishedAt kullanılır. */
  updatedAt?: string;
  readTime: string;
  /** Kapak görseli: /public/images/blog/<slug>.jpg — her yazıda zorunlu. */
  image: string;
  featured?: boolean;
  /**
   * Yazının en üstünde duran 40-60 kelimelik GEO cevap bloğu.
   * Bağlamsız kopyalandığında bile anlamlı olmalı — üretken arama
   * motorlarının en çok alıntıladığı yapı budur.
   */
  answer?: string;
}
