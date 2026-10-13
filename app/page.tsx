import type { Metadata } from "next";
import Link from "next/link";
import Icon, { Stars, type IconName } from "../components/Icon";
import Photo from "../components/Photo";
import { getAllPosts, formatDate } from "../lib/blog-data";
import { credentials, site } from "../lib/site";
import { AnswerBlock, FaqSection, ReviewLine } from "../components/Seo";
import JsonLd from "../components/JsonLd";
import { graph, webPageNode } from "../lib/schema";
import { ilceler } from "../lib/pages/ilceler";
import styles from "./page.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Home() {
  const blogPosts = getAllPosts().slice(0, 3);

  // FAQPage işaretlemesi bilerek burada yok: bu sorular /sik-sorulan-sorular
  // sayfasına ait. Aynı soruyu iki URL'de işaretlemek Google tarafından
  // yok sayılabiliyor. Sorular kullanıcı için aşağıda görünmeye devam ediyor.
  const jsonLd = graph(
    webPageNode({
      path: "/",
      name: "Diyetisyen Ali Koşar | Antalya Sporcu Beslenmesi",
      description:
        "Antalyaspor altyapı ve voleybol şubesi diyetisyeni. Sporcu beslenmesi, atletik performans ve hekim kontrolünde GLP-1 süreç yönetimi.",
      medical: true,
      about: ["Sporcu beslenmesi", "GLP-1 süreç yönetimi", "Antalya diyetisyen"],
    }),
  );

  return (
    <>
      <JsonLd data={jsonLd} />
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
            <AnswerBlock>
              Dyt. Ali Koşar, Antalya Muratpaşa&apos;da çalışan{" "}
              <strong>Antalyaspor altyapı ve voleybol şubesi diyetisyenidir.</strong>{" "}
              Tıbbi biyokimya yüksek lisansı temelinde sporcu beslenmesi, atletik
              performans, sakatlık dönemi beslenmesi ve hekim kontrolündeki{" "}
              <strong>GLP-1 (zayıflama iğnesi)</strong> süreçlerinin beslenme yönetimini
              yürütür. Randevu: <strong>{site.phoneDisplay}</strong>
            </AnswerBlock>
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

      {/* Yerel bölgeler — ilçe sayfalarına iç link akışı */}
      <section className={styles.localSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Antalya</span>
            <h2 className={styles.sectionTitle}>Hangi Bölgeden Geliyorsunuz?</h2>
            <p className={styles.sectionDescription}>
              Klinik Muratpaşa Şirinyalı&apos;da. Aşağıdaki sayfalarda ulaşım süreleri
              ve bölgeye özgü beslenme başlıkları yer alıyor.
            </p>
          </div>
          <div className={styles.localGrid}>
            {ilceler.map((i) => (
              <Link key={i.slug} href={`/antalya-diyetisyen/${i.slug}`} className={styles.localCard}>
                {i.name}
              </Link>
            ))}
            <Link href="/online-diyet" className={styles.localCard}>
              Online danışmanlık
            </Link>
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
      <FaqSection
        items={homeFaq}
        intro="Klinikte en sık sorulan sorular ve kısa cevapları."
        moreHref="/sik-sorulan-sorular"
        moreLabel="30 sorunun tamamını görün"
      />

      <div className={styles.container}>
        <ReviewLine />
      </div>
    </>
  );
}

// Data
const services = [
  {
    icon: "dumbbell" as IconName,
    title: "Sporcu Beslenmesi",
    description: "Vücut kompozisyonu ölçümü, sezon periyodizasyonu ve maç günü protokolleri.",
    href: "/sporcu-beslenmesi-antalya",
  },
  {
    icon: "scale" as IconName,
    title: "Zayıflama İğnesi (GLP-1)",
    description: "Mounjaro ve Ozempic sürecinde kas kaybını, safra riskini ve yan etkileri yönetmek.",
    href: "/zayiflama-ignesi-diyetisyeni-antalya",
  },
  {
    icon: "stethoscope" as IconName,
    title: "Biohacking ve Longevity",
    description: "Biyobelirteç takibi, metabolik esneklik ve uyku üzerinden ölçüme dayalı optimizasyon.",
    href: "/biohacking-ve-longevity-antalya",
  },
  {
    icon: "wheat" as IconName,
    title: "Klinik Beslenme",
    description: "Diyabet, tiroid, insülin direnci, çölyak ve gastrointestinal hastalıklarda beslenme.",
    href: "/hizmetler",
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

/**
 * Ana sayfada gösterilen sorular.
 * Yapısal verisi /sik-sorulan-sorular sayfasına ait olduğundan burada
 * FAQPage işaretlemesi yapılmıyor — aynı soruyu iki URL'de işaretlemek
 * Google tarafından yok sayılabiliyor.
 */
const homeFaq = [
  {
    question: "Antalya'da sporcu beslenmesi konusunda uzman diyetisyen kimdir?",
    answer:
      "Dyt. Ali Koşar, Antalyaspor altyapı ve voleybol şubesinin diyetisyenliğini yürütmekte ve TFF gelişim kampı sürecinde alt yaş kategorilerine beslenme desteği vermektedir. İzmir Katip Çelebi Üniversitesi Beslenme ve Diyetetik mezunu olup Burdur Mehmet Akif Ersoy Üniversitesi'nde tıbbi biyokimya yüksek lisansı yapmıştır. Kliniği Antalya Muratpaşa Şirinyalı Mahallesi'ndedir.",
    canonical: "/sik-sorulan-sorular",
  },
  {
    question: "Zayıflama iğnesi kullanırken diyetisyen desteği gerekir mi?",
    answer:
      "GLP-1 grubu ilaçlar iştahı baskılar ancak besin seçimini veya kas korumasını düzenlemez. Bu ilaçlarla kaybedilen kilonun yaklaşık %25'i yağsız dokudan gelir ve hızlı kayıp safra taşı riskini artırır. Günde kilogram başına 1,2–1,6 gram protein, haftada 2–3 gün direnç antrenmanı ve haftalık kaybın %1'i aşmaması bu risklerin ikisini de belirgin biçimde azaltır.",
    canonical: "/zayiflama-ignesi-diyetisyeni-antalya",
  },
  {
    question: "İlk görüşme nasıl geçiyor ve ne kadar sürüyor?",
    answer:
      "İlk görüşme 45–60 dakika sürer. Sağlık geçmişi, kullanılan ilaçlar, uyku ve iş düzeni, antrenman geçmişi ve daha önce denenen diyetler değerlendirilir; ardından vücut kompozisyonu ölçümü yapılır. Varsa kan tahlilleriniz birlikte incelenir. Program görüşmeden sonra, toplanan veriye göre hazırlanır.",
    canonical: "/sik-sorulan-sorular",
  },
  {
    question: "Online diyet takibi yapıyor musunuz?",
    answer:
      "Evet. Görüşmeler video konferansla yürütülür ve program aynı şekilde hazırlanır. Vücut kompozisyonu ölçümü için periyodik klinik ziyareti önerilir; bu mümkün değilse ulaşılabilir bir ölçüm merkezine yönlendirme yapılır. Şehir dışında yaşayan veya kamp/deplasman nedeniyle sık seyahat eden danışanlar için uygundur.",
    canonical: "/online-diyet",
  },
  {
    question: "Diyet listesi mi veriyorsunuz, program mı?",
    answer:
      "Verilen şey tek seferlik bir liste değil, ölçüme dayalı ve düzenli olarak revize edilen bir süreçtir. Başlangıçta vücut kompozisyonu ölçülür ve varsa kan değerleri değerlendirilir; plan bu veriye göre kurulur ve 4–8 haftada bir tekrarlanan ölçümlerle güncellenir. Aynı listenin aylarca değişmemesi iyi bir işaret değildir.",
    canonical: "/sik-sorulan-sorular",
  },
];
