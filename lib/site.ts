/**
 * Site geneli tek doğruluk kaynağı.
 * Adres/telefon (NAP) bilgisi yerel SEO için her yerde birebir aynı olmalı;
 * bu yüzden metinler, JSON-LD ve meta etiketleri buradan besleniyor.
 */
export const site = {
  name: "Diyetisyen Ali Koşar",
  legalName: "Ali Koşar Beslenme ve Diyet Danışmanlık Merkezi",
  url: "https://diyetisyenalikosar.com",
  description:
    "Antalya'da profesyonel beslenme ve diyet danışmanlığı. Kilo yönetimi, sporcu beslenmesi, klinik beslenme ve kişiye özel diyet programları.",
  locale: "tr_TR",

  // E.164 biçimi (Google bu formatı bekler).
  phone: "+905353905172",
  phoneDisplay: "+90 535 390 51 72",

  address: {
    street: "Şirinyalı Mahallesi 1507 Sokak, 2 Apartmanı No:46 Kat:1 Daire:3",
    district: "Muratpaşa",
    city: "Antalya",
    postalCode: "07230",
    country: "TR",
    latitude: 36.85762555054829,
    longitude: 30.74338057231052,
  },

  social: {
    instagram: "https://www.instagram.com/dytalikosar/",
  },

  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { days: ["Saturday"], opens: "10:00", closes: "14:00" },
  ],

  /** Görüntülenen çalışma saatleri — openingHours ile aynı bilgi, insan okunur. */
  openingHoursDisplay: [
    { label: "Pazartesi – Cuma", value: "09:00 – 18:00" },
    { label: "Cumartesi", value: "10:00 – 14:00" },
    { label: "Pazar", value: "Kapalı" },
  ],

  /** Yerel SEO için hizmet verilen ilçe/semtler. */
  serviceAreas: [
    "Muratpaşa", "Konyaaltı", "Kepez", "Lara", "Şirinyalı", "Döşemealtı", "Aksu", "Serik",
  ],
} as const;

/**
 * Person.knowsAbout kaynağı.
 * Üretken arama motorlarına "bu kişi neyin otoritesi" bilgisini veren alan;
 * yeni bir uzmanlık sayfası eklerken burası da güncellenir.
 */
export const knowsAbout: string[] = [
  "Sporcu beslenmesi",
  "Atletik performans beslenmesi",
  "Sporcu sakatlığı ve iyileşme dönemi beslenmesi",
  "Futbolcu beslenmesi",
  "Voleybolcu beslenmesi",
  "GLP-1 reseptör agonistleri (semaglutid, tirzepatid) ve beslenme",
  "Zayıflama iğnesi sürecinde kas kaybını önleme",
  "GLP-1 kullanımında safra kesesi ve safra taşı riski",
  "Biyokimya ve metabolizma",
  "Biohacking",
  "Longevity (sağlıklı yaşam süresi) beslenmesi",
  "Peptit uygulamaları ve beslenme etkileşimi",
  "Vücut kompozisyonu analizi",
  "İnsülin direnci ve metabolik sendrom",
  "Obezite ve kilo yönetimi",
  "Ketojenik diyet",
  "Nutrigenetik ve genetik test temelli beslenme",
  "Çölyak ve glutensiz beslenme",
  "Diyabet beslenmesi",
  "Supplement (ergojenik yardımcı) danışmanlığı",
];

/** Sitedeki son geniş içerik revizyonu — `dateModified` ve "son güncelleme" satırı. */
export const LAST_REVIEWED = "2026-09-22";

export function formatTrDate(iso: string): string {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  }).format(new Date(iso));
}

/** WhatsApp bağlantısı için numaranın yalnızca rakamları. */
export const whatsappUrl = `https://wa.me/${site.phone.replace(/\D/g, "")}`;

/** Göreli yolu mutlak URL'ye çevirir (JSON-LD mutlak URL ister). */
export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}

/**
 * Doğrulanabilir mesleki bilgiler.
 * Buradaki her madde dışarıdan teyit edilebilir olmalı; pazarlama iddiası
 * (memnuniyet oranı, danışan sayısı vb.) buraya girmez.
 */
export const credentials = {
  /** Kurumsal görev — sitedeki en güçlü güven sinyali. */
  affiliation: {
    organization: "Antalyaspor",
    role: "Altyapı ve Voleybol Şubesi Diyetisyeni",
    url: "https://www.antalyaspor.org.tr",
  },

  education: {
    school: "İzmir Katip Çelebi Üniversitesi",
    program: "Beslenme ve Diyetetik Bölümü",
    graduationYear: 2019,
  },

  /** Klinik staj deneyimi. */
  internships: [
    "Dr. Behçet Uz Çocuk Hastalıkları ve Cerrahisi Eğitim ve Araştırma Hastanesi",
    "Çiğli Bölge Eğitim Hastanesi",
  ],

  /**
   * Tıbbi biyokimya yüksek lisansı.
   * GLP-1 ve metabolik süreç sayfalarındaki uzmanlık iddiasının dayanağı.
   */
  master: {
    school: "Burdur Mehmet Akif Ersoy Üniversitesi",
    program: "Tıbbi Biyokimya",
    years: "2021 – 2023",
  },

  /** Federasyon düzeyinde saha görevi. */
  federation: {
    organization: "Türkiye Futbol Federasyonu",
    role: "Gelişim Kampı — alt yaş kategorileri beslenme desteği",
  },

  /** Klinikte mezun edilen stajyer diyetisyen sayısı. */
  internsMentored: 28,

  /** Danışmanlık merkezinin kuruluş yılı. */
  practiceSince: 2019,

  /**
   * Sertifikalar. Her biri için sertifikanın tam adı, veren kurum ve yıl
   * gerekir — üçü de olmayan bir kayıt eklenmemeli, doğrulanamaz olur.
   * Dizi boşken sitedeki "Sertifikalar" bölümü görünmez.
   */
  certificates: [] as { name: string; issuer: string; year: number }[],

  /**
   * Kongre sunumları. Sunum başlığı, kongrenin tam adı ve yıl gerekir.
   * Dizi boşken sitedeki "Kongre Sunumları" bölümü görünmez.
   */
  presentations: [] as {
    title: string;
    event: string;
    year: number;
    /** "Sözlü Sunum" | "Poster Sunumu" gibi. */
    type: string;
  }[],
} as const;
