import Link from "next/link";
import styles from "./page.module.css";
import { AnswerBlock, Breadcrumbs, MedicalDisclaimer, ReviewLine } from "../../components/Seo";
import JsonLd from "../../components/JsonLd";
import { breadcrumbNode, faqNode, graph, webPageNode } from "../../lib/schema";
import { pageMetadata } from "../../lib/metadata";
import { allFaqItems, faqGroups } from "../../lib/faq-data";
import { site, whatsappUrl } from "../../lib/site";

export const metadata = pageMetadata({
  path: "/sik-sorulan-sorular",
  title: "Sık Sorulan Sorular | Diyetisyen Ali Koşar",
  description:
    "Sporcu beslenmesi, zayıflama iğnesi (GLP-1) süreci, biohacking, klinik takip, online danışmanlık ve ücretlendirme hakkında en sık sorulan sorular ve kısa cevapları.",
  keywords: [
    "diyetisyen sık sorulan sorular",
    "sporcu beslenmesi soruları",
    "zayıflama iğnesi soruları",
    "antalya diyetisyen ücret",
    "online diyet nasıl",
  ],
});

const crumbs = [{ name: "Sık Sorulan Sorular", path: "/sik-sorulan-sorular" }];

export default function SssPage() {
  const jsonLd = graph(
    webPageNode({
      path: "/sik-sorulan-sorular",
      name: "Sık Sorulan Sorular",
      description:
        "Sporcu beslenmesi, GLP-1 süreci, biohacking, klinik takip ve online danışmanlık hakkında sık sorulan sorular.",
      medical: true,
      crumbs,
      about: faqGroups.map((g) => g.title),
    }),
    breadcrumbNode(crumbs),
    faqNode(allFaqItems, "/sik-sorulan-sorular"),
  );

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          <span className={styles.eyebrow}>Sık Sorulan Sorular</span>
          <h1 className={styles.h1}>
            En Çok Sorulan <em>{allFaqItems.length} Soru</em> ve Kısa Cevapları
          </h1>
          <AnswerBlock>
            Bu sayfa, klinikte ve sahada en sık sorulan soruların kısa ve doğrudan
            cevaplarını bir arada tutar: süreç ve ücretlendirme, sporcu beslenmesi,
            hekim kontrolündeki <strong>GLP-1 (zayıflama iğnesi)</strong> süreci,
            biohacking ve laboratuvar takibi ile klinik ulaşım ve online danışmanlık.
            Aradığınızı bulamazsanız <strong>{site.phoneDisplay}</strong> numarasından
            sorabilirsiniz.
          </AnswerBlock>
          <ReviewLine />
        </div>
      </section>

      <section className={styles.body}>
        <div className="container">
          <div className={styles.layout}>
            <nav className={styles.toc} aria-label="Soru grupları">
              <p className={styles.tocTitle}>Başlıklar</p>
              <ul className={styles.tocList}>
                {faqGroups.map((g) => (
                  <li key={g.id}>
                    <a href={`#${g.id}`} className={styles.tocLink}>
                      {g.title}
                      <span className={styles.tocCount}>{g.items.length}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.groups}>
              {faqGroups.map((group) => (
                <section key={group.id} id={group.id} className={styles.group}>
                  <h2 className={styles.groupTitle}>{group.title}</h2>
                  {group.intro && <p className={styles.groupIntro}>{group.intro}</p>}
                  {group.items.map((item) => (
                    <details key={item.question} className={styles.item}>
                      <summary className={styles.question}>
                        <span>{item.question}</span>
                        <span className={styles.marker} aria-hidden="true">+</span>
                      </summary>
                      <div className={styles.answer}>
                        {item.answer}
                        {/* Sorunun yapısal veri sahibi başka bir sayfaysa oraya
                            bağlan: hem kullanıcıya derinlik verir hem de o
                            sayfaya iç link akıtır. */}
                        {item.canonical && (
                          <Link href={item.canonical} className={styles.answerMore}>
                            Bu konunun ayrıntılı sayfası →
                          </Link>
                        )}
                      </div>
                    </details>
                  ))}
                </section>
              ))}

              <MedicalDisclaimer />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Cevabını bulamadığınız bir soru mu var?</h2>
          <p className={styles.ctaText}>
            WhatsApp&apos;tan yazabilir veya doğrudan arayabilirsiniz. Randevu öncesi
            süreci konuşmak için kısa bir görüşme her zaman mümkün.
          </p>
          <div className={styles.ctaActions}>
            <a href={whatsappUrl} className={styles.ctaBtn} target="_blank" rel="noopener noreferrer">
              WhatsApp: {site.phoneDisplay}
            </a>
            <Link href="/iletisim" className={`${styles.ctaBtn} ${styles.ctaBtnAlt}`}>
              Randevu Formu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
