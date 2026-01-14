import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Hizmetler",
  description: "Diyetisyen Ali Koşar'ın sunduğu beslenme ve diyet hizmetleri: Kilo yönetimi, sporcu beslenmesi, klinik beslenme, özel beslenme programları. Antalya'da profesyonel diyet danışmanlığı.",
  keywords: ["diyet hizmetleri", "kilo verme", "sporcu beslenmesi", "diyabet diyeti", "Antalya diyetisyen"],
};

const services = [
  {
    id: "kilo-yonetimi",
    icon: "⚖️",
    title: "Kilo Yönetimi",
    subtitle: "Sağlıklı ve Kalıcı Sonuçlar",
    description: "Kişiye özel metabolizma analizi ile hazırlanan beslenme programları. Açlık hissi yaşamadan, sürdürülebilir kilo kontrolü.",
    features: [
      "Detaylı metabolizma değerlendirmesi",
      "Kişiselleştirilmiş kalori hesaplama",
      "Haftalık takip ve program güncelleme",
      "Psikolojik destek ve motivasyon",
      "Porsiyon kontrolü eğitimi"
    ],
    color: "green"
  },
  {
    id: "sporcu-beslenmesi",
    icon: "💪",
    title: "Sporcu Beslenmesi",
    subtitle: "Performansınızı Maksimize Edin",
    description: "Profesyonel ve amatör sporcular için özel beslenme programları. Supplement danışmanlığı ve yarışma/maç öncesi beslenme stratejileri.",
    features: [
      "Performans odaklı beslenme planı",
      "Supplement ve takviye danışmanlığı",
      "Yarışma öncesi/sonrası beslenme",
      "Kas geliştirme programları",
      "Toparlanma stratejileri"
    ],
    color: "blue"
  },
  {
    id: "klinik-beslenme",
    icon: "🩺",
    title: "Klinik Beslenme",
    subtitle: "Hastalıklarda Tıbbi Beslenme Tedavisi",
    description: "Diyabet, hipertansiyon, tiroid, gut ve diğer metabolik hastalıklarda bilimsel temelli beslenme programları.",
    features: [
      "Diyabet (Tip 1 & Tip 2) beslenmesi",
      "Hipertansiyon diyeti",
      "Tiroid hastalıklarında beslenme",
      "Hiperlipidemi (kolesterol) diyeti",
      "Gut hastalığı beslenmesi"
    ],
    color: "purple"
  },
  {
    id: "ozel-beslenme",
    icon: "🌾",
    title: "Özel Beslenme Durumları",
    subtitle: "Bireysel İhtiyaçlara Özel Çözümler",
    description: "Çölyak, laktoz intoleransı, yeme bozuklukları ve diğer özel durumlar için uyarlanmış beslenme planları.",
    features: [
      "Çölyak - Glutensiz beslenme",
      "Laktoz intoleransı diyeti",
      "Ketojenik diyet programları",
      "Vejetaryen/Vegan beslenme",
      "Yeme bozuklukları tedavisi"
    ],
    color: "orange"
  },
  {
    id: "hamilelik-beslenme",
    icon: "🤰",
    title: "Hamilelik ve Emzirme",
    subtitle: "Anne ve Bebek Sağlığı",
    description: "Gebelik öncesi, hamilelik dönemi ve emzirme sürecinde anne ve bebek sağlığını destekleyen beslenme programları.",
    features: [
      "Gebelik öncesi hazırlık",
      "Trimester bazlı beslenme planı",
      "Gebelik diyabeti yönetimi",
      "Emzirme dönemi beslenmesi",
      "Bebeğe geçiş döneminde anne diyeti"
    ],
    color: "pink"
  },
  {
    id: "cocuk-beslenme",
    icon: "👶",
    title: "Çocuk ve Ergen Beslenmesi",
    subtitle: "Sağlıklı Büyüme İçin Doğru Beslenme",
    description: "Büyüme çağındaki çocuklar ve ergenler için yaş grubuna uygun, sağlıklı beslenme alışkanlıkları kazandıran programlar.",
    features: [
      "Büyüme-gelişme odaklı beslenme",
      "Okul çağı çocukları için menü planı",
      "Ergenlik dönemi beslenmesi",
      "Çocukluk çağı obezitesi tedavisi",
      "Yeme alışkanlıkları eğitimi"
    ],
    color: "teal"
  }
];

export default function HizmetlerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Profesyonel Hizmetler</span>
            <h1 className={styles.heroTitle}>
              Uzmanlık <span className={styles.highlight}>Alanlarım</span>
            </h1>
            <p className={styles.heroDescription}>
              Her bireyin ihtiyacı farklıdır. Bilimsel temelli, kişiye özel beslenme programları ile 
              sağlıklı yaşam hedefinize ulaşmanızı sağlıyorum.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`${styles.serviceCard} ${styles[service.color]}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.serviceHeader}>
                  <span className={styles.serviceIcon}>{service.icon}</span>
                  <div>
                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                    <span className={styles.serviceSubtitle}>{service.subtitle}</span>
                  </div>
                </div>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.featureList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <span className={styles.checkIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/iletisim" className={styles.serviceButton}>
                  Randevu Al
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>Çalışma Yöntemim</span>
            <h2 className={styles.sectionTitle}>Nasıl Çalışıyoruz?</h2>
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.processCard}>
                <span className={styles.processNumber}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Hemen Başlayalım</h2>
            <p className={styles.ctaDescription}>
              Ücretsiz ön görüşme ile ihtiyaçlarınızı birlikte değerlendirelim.
            </p>
            <Link href="/iletisim" className={styles.ctaButton}>
              Ücretsiz Danışmanlık Al
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const processSteps = [
  {
    title: "İlk Görüşme",
    description: "Sağlık geçmişinizi, yaşam tarzınızı ve hedeflerinizi detaylı olarak değerlendiriyoruz."
  },
  {
    title: "Analiz ve Planlama",
    description: "Metabolizma analiziniz ve kan değerlerinize göre kişiselleştirilmiş beslenme planı hazırlıyoruz."
  },
  {
    title: "Uygulama",
    description: "Size özel hazırlanan beslenme programını, pratik tariflerle birlikte uygulamaya başlıyorsunuz."
  },
  {
    title: "Takip ve Güncelleme",
    description: "Düzenli takip görüşmeleri ile ilerlemenizi izliyor, programınızı ihtiyaca göre güncelliyoruz."
  }
];
