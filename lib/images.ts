/**
 * Site görselleri — tek kayıt yeri.
 *
 * Boyutlar `public/images/` altındaki gerçek dosyalardan alındı. Bir görsel
 * değiştirildiğinde `width`/`height` de güncellenmeli, aksi halde `next/image`
 * yanlış en-boy oranı ayırır ve sayfada kayma (CLS) oluşur.
 *
 * `alt` metinleri betimleyici tutuluyor: hem erişilebilirlik hem görsel arama
 * için işlev görüyor.
 */
export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const IMAGES = {
  /** Dikey portre — hero ve hakkımda için. */
  portre: {
    src: "/images/ali-kosar-portre.jpg",
    alt: "Dyt. Ali Koşar, Antalya Muratpaşa'daki beslenme ve diyet danışmanlık merkezinde",
    width: 1000,
    height: 1250,
  },
  /** Hakkımda sayfasının görseli. */
  hakkimda: {
    src: "/images/ali-kosar-hakkimda.jpg",
    alt: "Dyt. Ali Koşar danışmanlık merkezinde çalışırken",
    width: 1000,
    height: 1250,
  },
  /** Danışan görüşmesi — süreç anlatan bölümler için. */
  danismaSeansi: {
    src: "/images/danisma-seansi.jpg",
    alt: "Beslenme danışmanlığı görüşmesi: sağlık geçmişi ve hedef değerlendirmesi",
    width: 1200,
    height: 1200,
  },
  /** Küçük avatar — yazar kutusu ve yorum kartları. */
  avatar: {
    src: "/images/ali-kosar-avatar.jpg",
    alt: "Dyt. Ali Koşar",
    width: 300,
    height: 300,
  },
} as const satisfies Record<string, SiteImage>;

/** Blog kapak görseli yolu. Dosya yoksa bileşen degrade arka plana düşer. */
export function blogImage(slug: string): string {
  return `/images/blog/${slug}.jpg`;
}
