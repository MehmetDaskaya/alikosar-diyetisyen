import type { Metadata } from "next";
import Link from "next/link";
import Icon, { Stars, type IconName } from "../components/Icon";
import Photo from "../components/Photo";
import { getAllPosts, formatDate } from "../lib/blog-data";
import { credentials } from "../lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Home() {
  const blogPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGradient}></div>
          <div className={styles.heroPattern}></div>
        </div>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              <span className={styles.badgeIcon} aria-hidden="true">
                <Icon name="leaf" />
              </span>
              {credentials.affiliation.organization}{" "}
              {credentials.affiliation.role}
            </span>
            <h1 className={styles.heroTitle}>
              Lezzetten Ödün Vermeden
              <span className={styles.heroHighlight}> Sağlıklı Yaşam</span>
            </h1>
            <p className={styles.heroDescription}>
              Sürdürülebilir beslenme ile yaşam kalitenizi artırın. Kişiye özel diyet 
              programları ile hedeflerinize birlikte ulaşalım. Sadece liste değil, 
              bir yaşam biçimi.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/iletisim" className={styles.btnPrimary}>
                <span>Ücretsiz Danışmanlık</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/hizmetler" className={styles.btnSecondary}>
                Hizmetleri İncele
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{credentials.practiceSince}</span>
                <span className={styles.statLabel}>Yılından beri Antalya&apos;da</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>Antalyaspor</span>
                <span className={styles.statLabel}>Altyapı ve voleybol diyetisyeni</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>Online</span>
                <span className={styles.statLabel}>ve yüz yüze görüşme</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImageWrapper}>
              <Photo
                src="/images/ali-kosar-portre.jpg"
                alt="Diyetisyen Ali Koşar portre fotoğrafı"
                className={styles.heroPhoto}
                sizes="(min-width: 1024px) 480px, 90vw"
                priority
              />
              <div className={styles.floatingCard} style={{ top: "10%", right: "-20px" }}>
                <span className={styles.floatingIcon} aria-hidden="true">
                  <Icon name="bowl" />
                </span>
                <span>Kişiye Özel</span>
              </div>
              <div className={styles.floatingCard} style={{ bottom: "20%", left: "-30px" }}>
                <span className={styles.floatingIcon} aria-hidden="true">
                  <Icon name="dumbbell" />
                </span>
                <span>Sporcu Beslenmesi</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <span>Keşfet</span>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Hizmetlerimiz</span>
            <h2 className={styles.sectionTitle}>Uzmanlık Alanlarım</h2>
            <p className={styles.sectionDescription}>
              Her bireyin ihtiyacı farklıdır. Size özel, bilimsel temelli beslenme programları ile 
              hedeflerinize ulaşmanızı sağlıyorum.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <Link href={service.href} key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon} aria-hidden="true">
                  <Icon name={service.icon} />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <span className={styles.serviceLink}>
                  Detaylı Bilgi
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className={styles.servicesFooter}>
            <Link href="/hizmetler" className={styles.btnSecondary}>
              Tüm Hizmetleri Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            <div className={styles.whyContent}>
              <span className={styles.sectionTag}>Neden Ben?</span>
              <h2 className={styles.sectionTitle}>
                Sadece Liste Değil, <br />
                <span className={styles.heroHighlight}>Bir Yaşam Biçimi</span>
              </h2>
              <p className={styles.whyDescription}>
                Aşçılık ve spora olan tutkum, diyet listelerimi daha uygulanabilir ve lezzetli kılıyor. 
                Empati kurabilen, yasaklamadan zayıflatan bir yaklaşımla çalışıyorum.
              </p>
              <ul className={styles.whyList}>
                {whyChoose.map((item, index) => (
                  <li key={index} className={styles.whyItem}>
                    <span className={styles.whyCheck} aria-hidden="true">
                      <Icon name="check" size={13} strokeWidth={2.6} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/hakkimda" className={styles.btnPrimary}>
                Daha Fazla Bilgi
              </Link>
            </div>
            <div className={styles.whyVisual}>
              <div className={styles.whyImageWrapper}>
                <Photo
                  src="/images/danisma-seansi.jpg"
                  alt="Ali Koşar danışanıyla beslenme görüşmesi yaparken"
                  className={styles.whyPhoto}
                  sizes="(min-width: 1024px) 560px, 90vw"
                />
                <figure className={styles.whyQuote}>
                  <Icon name="quote" size={26} aria-hidden="true" />
                  <blockquote>Sağlıklı beslenme, yaşam boyu sürdürülebilir olmalı.</blockquote>
                  <figcaption>— Dyt. Ali Koşar</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Danışan Yorumları</span>
            <h2 className={styles.sectionTitle}>Başarı Hikayeleri</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <Stars className={styles.testimonialStars} />
                <p className={styles.testimonialText}>&quot;{testimonial.text}&quot;</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>{testimonial.initials}</div>
                  <div>
                    <span className={styles.authorName}>{testimonial.name}</span>
                    <span className={styles.authorDetail}>{testimonial.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.testimonialsCta}>
            <Link href="/basari-hikayeleri" className={styles.btnSecondary}>
              Tüm Hikayeleri Oku
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Sağlıklı Yaşama İlk Adımı Atın
            </h2>
            <p className={styles.ctaDescription}>
              Ücretsiz ön görüşme ile ihtiyaçlarınızı birlikte değerlendirelim. 
              Hedeflerinize ulaşmak için ilk adımı bugün atın.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/iletisim" className={styles.btnWhite}>
                <Icon name="phone" size={18} aria-hidden="true" />
                Hemen Ara
              </Link>
              <Link href="/iletisim" className={styles.btnOutline}>
                Online Randevu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className={styles.blogSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Blog</span>
            <h2 className={styles.sectionTitle}>Sağlıklı Yaşam İpuçları</h2>
          </div>
          <div className={styles.blogGrid}>
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.blogCard}>
                <Photo
                  src={post.image}
                  alt={post.title}
                  className={styles.blogImage}
                  sizes="(min-width: 1024px) 380px, 90vw"
                />
                <div className={styles.blogContent}>
                  <span className={styles.blogCategory}>{post.category}</span>
                  <h3 className={styles.blogTitle}>{post.title}</h3>
                  <time className={styles.blogDate} dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.blogFooter}>
            <Link href="/blog" className={styles.btnSecondary}>
              Tüm Yazıları Oku
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// Data
const services = [
  {
    icon: "scale" as IconName,
    title: "Kilo Yönetimi",
    description: "Sağlıklı ve kalıcı kilo verme/alma programları ile ideal kilonuza ulaşın.",
    href: "/hizmetler#kilo-yonetimi"
  },
  {
    icon: "dumbbell" as IconName,
    title: "Sporcu Beslenmesi",
    description: "Performansınızı artıracak, supplement destekli beslenme programları.",
    href: "/hizmetler#sporcu-beslenmesi"
  },
  {
    icon: "stethoscope" as IconName,
    title: "Klinik Beslenme",
    description: "Diyabet, tiroid, hipertansiyon gibi hastalıklarda özel beslenme.",
    href: "/hizmetler#klinik-beslenme"
  },
  {
    icon: "wheat" as IconName,
    title: "Özel Beslenme",
    description: "Çölyak, ketojenik diyet ve özel durumlar için beslenme planları.",
    href: "/hizmetler#ozel-beslenme"
  },
];

const whyChoose = [
  "Antalyaspor altyapı ve voleybol şubesi diyetisyeni",
  "İzmir Katip Çelebi Üniversitesi Beslenme ve Diyetetik mezunu",
  "Dr. Behçet Uz ve Çiğli Bölge Eğitim Hastanesi'nde klinik staj deneyimi",
  "Lezzetli ve uygulanabilir diyet programları",
  "Yasaklama yerine eğitim ve farkındalık odaklı yaklaşım",
  "Online ve yüz yüze danışmanlık seçenekleri",
];

const testimonials = [
  {
    text: "Ali Bey sayesinde 3 ayda 15 kilo verdim ve hiç aç kalmadım. Listeler hem lezzetli hem de pratik!",
    name: "Ayşe K.",
    initials: "AK",
    detail: "15 kg verdi"
  },
  {
    text: "Sporcu olarak performansım gözle görülür şekilde arttı. Supplement tavsiyelerinde çok bilgili.",
    name: "Mehmet Y.",
    initials: "MY",
    detail: "Profesyonel sporcu"
  },
  {
    text: "Diyabetim için verdiği beslenme programı sayesinde şeker değerlerim normale döndü.",
    name: "Fatma T.",
    initials: "FT",
    detail: "Tip 2 Diyabet"
  },
];
