import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Başarı Hikayeleri",
  description: "Diyetisyen Ali Koşar ile hedeflerine ulaşan danışanların başarı hikayeleri. Gerçek sonuçlar, gerçek insanlar.",
  keywords: ["başarı hikayeleri", "diyet sonuçları", "kilo verme başarı", "danışan yorumları"],
};

const successStories = [
  {
    id: 1,
    name: "Ayşe K.",
    initials: "AK",
    age: 34,
    result: "15 kg verdi",
    duration: "3 ay",
    quote: "Ali Bey sayesinde 3 ayda 15 kilo verdim ve hiç aç kalmadım. Listeler hem lezzetli hem de pratik! Artık sağlıklı beslenme bir yaşam biçimim haline geldi.",
    category: "Kilo Verme"
  },
  {
    id: 2,
    name: "Mehmet Y.",
    initials: "MY",
    age: 28,
    result: "Performans artışı",
    duration: "6 ay",
    quote: "Profesyonel sporcu olarak performansım gözle görülür şekilde arttı. Supplement tavsiyelerinde çok bilgili. Yarışmalarda artık çok daha iyi sonuçlar alıyorum.",
    category: "Sporcu Beslenmesi"
  },
  {
    id: 3,
    name: "Fatma T.",
    initials: "FT",
    age: 52,
    result: "Şeker düzenlendi",
    duration: "4 ay",
    quote: "Diyabetim için verdiği beslenme programı sayesinde şeker değerlerim normale döndü. Doktorum bile çok şaşırdı!",
    category: "Klinik Beslenme"
  },
  {
    id: 4,
    name: "Ali R.",
    initials: "AR",
    age: 41,
    result: "20 kg verdi",
    duration: "5 ay",
    quote: "Yıllardır denediğim onlarca diyet başarısız olmuştu. Ali Bey'in yaklaşımı tamamen farklı. Yasaklar yerine eğitim, motivasyon ve destek aldım.",
    category: "Kilo Verme"
  },
  {
    id: 5,
    name: "Zeynep H.",
    initials: "ZH",
    age: 29,
    result: "Kas kütlesi arttı",
    duration: "4 ay",
    quote: "Fitness yaparken kas kütlemi artırmak istiyordum ama yağ oranım düşmüyordu. Özel program sayesinde hedefime ulaştım.",
    category: "Sporcu Beslenmesi"
  },
  {
    id: 6,
    name: "Mustafa B.",
    initials: "MB",
    age: 45,
    result: "Kolesterol normale döndü",
    duration: "3 ay",
    quote: "Yüksek kolesterol ve hipertansiyon sorunumla birlikte geldim. Şu an ilaçlarımı bile azalttım. Doktorlarım çok memnun.",
    category: "Klinik Beslenme"
  }
];

const stats = [
  { number: "1000+", label: "Mutlu Danışan" },
  { number: "15.000+", label: "Kilogram Verildi" },
  { number: "%98", label: "Memnuniyet Oranı" },
  { number: "5+", label: "Yıl Deneyim" }
];

export default function BasariHikayeleriPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Gerçek Sonuçlar</span>
            <h1 className={styles.heroTitle}>
              Başarı <span className={styles.highlight}>Hikayeleri</span>
            </h1>
            <p className={styles.heroDescription}>
              Danışanlarımın sağlıklı yaşam yolculuklarındaki başarılarını keşfedin. 
              Her hikaye, kararlılık ve doğru rehberliğin sonucudur.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className={styles.storiesSection}>
        <div className={styles.container}>
          <div className={styles.storiesGrid}>
            {successStories.map((story, index) => (
              <div 
                key={story.id} 
                className={styles.storyCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.storyHeader}>
                  <div className={styles.avatar}>{story.initials}</div>
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{story.name}</span>
                    <span className={styles.authorAge}>{story.age} yaşında</span>
                  </div>
                  <span className={styles.categoryBadge}>{story.category}</span>
                </div>
                <div className={styles.storyResult}>
                  <span className={styles.resultLabel}>Sonuç:</span>
                  <span className={styles.resultValue}>{story.result}</span>
                  <span className={styles.resultDuration}>({story.duration})</span>
                </div>
                <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                <p className={styles.storyQuote}>&quot;{story.quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Sıradaki Başarı Hikayesi Sizinki Olsun</h2>
            <p className={styles.ctaDescription}>
              Sağlıklı yaşam hedeflerinize ulaşmak için ilk adımı bugün atın.
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
