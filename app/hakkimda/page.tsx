import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Hakkımda",
  description: "Diyetisyen Ali Koşar hakkında. İzmir Katip Çelebi Üniversitesi mezunu, Antalya'da 5+ yıl deneyimli beslenme ve diyet uzmanı.",
  keywords: ["Ali Koşar", "diyetisyen", "beslenme uzmanı", "Antalya", "İzmir Katip Çelebi Üniversitesi"],
};

export default function HakkimdaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroImage}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.placeholderEmoji}>👨‍⚕️</span>
                <span className={styles.placeholderText}>Dyt. Ali Koşar</span>
              </div>
            </div>
            <div className={styles.heroContent}>
              <span className={styles.badge}>Hakkımda</span>
              <h1 className={styles.heroTitle}>
                Diyetisyen <span className={styles.highlight}>Ali Koşar</span>
              </h1>
              <p className={styles.heroQuote}>
                &quot;Lezzetten ödün vermeden sağlıklı yaşam, sürdürülebilir beslenme ile mümkün.&quot;
              </p>
              <p className={styles.heroDescription}>
                2019 yılından beri Antalya&apos;da kendi adımı taşıyan danışmanlık merkezimde, 
                binlerce danışana sağlıklı yaşam yolculuklarında rehberlik ediyorum.
              </p>
              <div className={styles.quickStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>1000+</span>
                  <span className={styles.statLabel}>Mutlu Danışan</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>5+</span>
                  <span className={styles.statLabel}>Yıl Deneyim</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>%98</span>
                  <span className={styles.statLabel}>Memnuniyet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <span className={styles.badge}>Hikayem</span>
              <h2 className={styles.sectionTitle}>Beslenme Tutkum</h2>
              <p className={styles.storyText}>
                Sağlıklı beslenmeye olan ilgim, aşçılık ve spora olan tutkumla birleşince, 
                bu alanı kariyer olarak seçmem kaçınılmaz oldu. İzmir Katip Çelebi Üniversitesi 
                Beslenme ve Diyetetik Bölümü&apos;nden 2019 yılında mezun oldum.
              </p>
              <p className={styles.storyText}>
                Staj dönemimde Dr. Behçet Uz Çocuk Hastalıkları Hastanesi ve Çiğli Bölge 
                Eğitim Hastanesi&apos;nde klinik deneyim kazandım. Bu deneyimler, teorik 
                bilgilerimi pratiğe dökme fırsatı verdi.
              </p>
              <p className={styles.storyText}>
                Mezuniyetimin ardından Antalya&apos;da kendi danışmanlık merkezimi kurdum. 
                Amacım, lezzetli ve uygulanabilir diyet programları ile danışanlarımın 
                sağlıklı yaşam hedeflerine ulaşmalarına yardımcı olmak.
              </p>
            </div>
            <div className={styles.storyVisual}>
              <div className={styles.timelineCard}>
                <h3>📚 Eğitim Yolculuğum</h3>
                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <span className={styles.year}>2019</span>
                    <span className={styles.event}>İzmir Katip Çelebi Üniversitesi Mezuniyeti</span>
                  </div>
                  <div className={styles.timelineItem}>
                    <span className={styles.year}>2018-2019</span>
                    <span className={styles.event}>Klinik Staj Deneyimi</span>
                  </div>
                  <div className={styles.timelineItem}>
                    <span className={styles.year}>2019</span>
                    <span className={styles.event}>Ali Koşar Danışmanlık Merkezi Kuruluşu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className={styles.expertiseSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>Uzmanlık Alanlarım</span>
            <h2 className={styles.sectionTitle}>Ne Konuda Yardımcı Olabilirim?</h2>
          </div>
          <div className={styles.expertiseGrid}>
            {expertiseAreas.map((area, index) => (
              <div key={index} className={styles.expertiseCard}>
                <span className={styles.expertiseIcon}>{area.icon}</span>
                <h3 className={styles.expertiseTitle}>{area.title}</h3>
                <p className={styles.expertiseDescription}>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className={styles.approachSection}>
        <div className={styles.container}>
          <div className={styles.approachGrid}>
            <div className={styles.approachContent}>
              <span className={styles.badge}>Yaklaşımım</span>
              <h2 className={styles.sectionTitle}>
                Sadece Liste Değil, <br />
                <span className={styles.highlight}>Bir Yaşam Biçimi</span>
              </h2>
              <p className={styles.approachText}>
                Diyet demek sadece yiyecek listesi vermek değildir. Beslenme alışkanlıklarınızı 
                anlamak, yaşam tarzınıza uygun çözümler üretmek ve sizi bu yolculukta desteklemektir.
              </p>
              <ul className={styles.approachList}>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Yasaklama yerine eğitim ve farkındalık</span>
                </li>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Lezzetli ve pratik tarif önerileri</span>
                </li>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Psikolojik destek ve motivasyon</span>
                </li>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Bilimsel temelli, güncel bilgi</span>
                </li>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Sürdürülebilir sonuçlar</span>
                </li>
              </ul>
            </div>
            <div className={styles.approachVisual}>
              <div className={styles.quoteCard}>
                <p className={styles.quote}>
                  &quot;Her danışanım benzersizdir. Kişiselleştirilmiş yaklaşımımla, 
                  sizin için en uygun beslenme planını birlikte oluşturuyoruz.&quot;
                </p>
                <span className={styles.quoteAuthor}>— Dyt. Ali Koşar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships Section */}
      <section className={styles.membershipsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>Üyelikler & Sertifikalar</span>
            <h2 className={styles.sectionTitle}>Profesyonel Bağlantılarım</h2>
          </div>
          <div className={styles.membershipsGrid}>
            <div className={styles.membershipCard}>
              <span className={styles.membershipIcon}>🏅</span>
              <h3>Türkiye Diyetisyenler Derneği</h3>
              <p>Aktif Üye</p>
            </div>
            <div className={styles.membershipCard}>
              <span className={styles.membershipIcon}>🎓</span>
              <h3>Beslenme ve Diyetetik Lisansı</h3>
              <p>İzmir Katip Çelebi Üniversitesi</p>
            </div>
            <div className={styles.membershipCard}>
              <span className={styles.membershipIcon}>💼</span>
              <h3>Klinik Deneyim</h3>
              <p>5+ Yıl Profesyonel Uygulama</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Birlikte Çalışalım</h2>
            <p className={styles.ctaDescription}>
              Sağlıklı yaşam hedefinize ulaşmak için ilk adımı atın.
            </p>
            <Link href="/iletisim" className={styles.ctaButton}>
              Randevu Al
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const expertiseAreas = [
  {
    icon: "⚖️",
    title: "Kilo Yönetimi",
    description: "Obezite tedavisi, sağlıklı kilo verme ve alma programları"
  },
  {
    icon: "💪",
    title: "Sporcu Beslenmesi",
    description: "Performans artırıcı beslenme ve supplement danışmanlığı"
  },
  {
    icon: "🩺",
    title: "Klinik Beslenme",
    description: "Diyabet, hipertansiyon, tiroid ve gut hastalıklarında beslenme"
  },
  {
    icon: "🌾",
    title: "Özel Durumlar",
    description: "Çölyak, ketojenik diyet ve gastrointestinal hastalıklar"
  },
  {
    icon: "🧠",
    title: "Yeme Bozuklukları",
    description: "Anoreksiya ve bulimia hastalarında beslenme tedavisi"
  },
  {
    icon: "🧬",
    title: "Genetik Beslenme",
    description: "DNA testlerine dayalı kişiselleştirilmiş beslenme programları"
  }
];
