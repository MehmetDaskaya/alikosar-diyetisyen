import Link from "next/link";
import Image from "next/image";
import styles from "./LandingPage.module.css";
import {
  AnswerBlock, Breadcrumbs, FaqSection, MedicalDisclaimer, ProofStrip, ReviewLine,
} from "./Seo";
import JsonLd from "./JsonLd";
import type { LandingData } from "../lib/landing-types";
import {
  breadcrumbNode, faqNode, graph, serviceNode, webPageNode,
} from "../lib/schema";
import { site, whatsappUrl } from "../lib/site";

/**
 * İçerik verisi düz metin olarak tutuluyor (aynı metin llms.txt ve schema'da
 * yeniden kullanılabilsin diye); vurgu yalnızca görüntüleme katmanında uygulanıyor.
 *
 * Desteklenen iki işaret: gövde metninde `**kalın**`, başlıklarda `<em>vurgu</em>`.
 * dangerouslySetInnerHTML kullanılmıyor — içerik veri dosyalarından geliyor ve
 * bu iki kalıp dışına çıkmasına gerek yok.
 */
const MARKUP = /(\*\*[^*]+\*\*|<em>[\s\S]*?<\/em>)/g;

function rich(text: string, keyPrefix = ""): React.ReactNode[] {
  return text.split(MARKUP).map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("<em>") && part.endsWith("</em>")) {
      return <em key={key}>{part.slice(4, -5)}</em>;
    }
    return <span key={key}>{part}</span>;
  });
}

export default function LandingPage({ data }: { data: LandingData }) {
  const toc = data.sections.filter((s) => s.id);

  // Organization / Person / WebSite düğümleri root layout'ta bir kez veriliyor;
  // burada sadece sayfaya özgü düğümler eklenir.
  const jsonLd = graph(
    webPageNode({
      path: data.slug,
      name: data.meta.title,
      description: data.meta.description,
      medical: data.medical,
      crumbs: data.crumbs,
      about: data.about,
    }),
    breadcrumbNode(data.crumbs),
    data.serviceType
      ? serviceNode({
          path: data.slug,
          name: data.serviceName ?? data.h1,
          description: data.answer,
          serviceType: data.serviceType,
        })
      : undefined,
    data.faq.length ? faqNode(data.faq, data.slug) : undefined,
  );

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className={`${styles.hero} ${data.image ? styles.heroWithImage : ""}`}>
        <div className="container">
          <Breadcrumbs crumbs={data.crumbs} />
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>{data.eyebrow}</span>
            <h1 className={styles.h1}>{rich(data.h1, "h1")}</h1>

            <AnswerBlock>{rich(data.answer, "ans")}</AnswerBlock>

            {data.intro && <p className={styles.intro}>{rich(data.intro, "intro")}</p>}

            <div className={styles.heroActions}>
              <Link href="/iletisim" className={styles.primaryBtn}>
                Randevu Al
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a href={whatsappUrl} className={styles.ghostBtn} target="_blank" rel="noopener noreferrer">
                WhatsApp&apos;tan yaz
              </a>
            </div>

            <ReviewLine date={data.dateModified} />
          </div>

          {data.image && (
            <figure className={styles.heroFigure}>
              <Image
                src={data.image.src}
                alt={data.image.alt}
                width={data.image.width}
                height={data.image.height}
                className={styles.heroImage}
                sizes="(max-width: 900px) 92vw, 380px"
                priority
              />
              {data.image.caption && (
                <figcaption className={styles.heroFigCaption}>{data.image.caption}</figcaption>
              )}
            </figure>
          )}
        </div>
      </section>

      <section className={styles.body}>
        <div className="container">
          <div className={styles.bodyGrid}>
            <article className={styles.article}>
              {data.proof && <ProofStrip items={data.proof} />}

              {data.sections.map((section, si) => (
                <section key={section.heading} id={section.id} className={styles.section}>
                  <h2 className={styles.h2}>{section.heading}</h2>

                  {section.body.map((para, pi) => (
                    <p key={pi} className={styles.p}>
                      {rich(para, `s${si}p${pi}`)}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className={styles.bullets}>
                      {section.bullets.map((b, bi) => (
                        <li key={bi} className={styles.bullet}>
                          {b.title && <span className={styles.bulletTitle}>{b.title}</span>}
                          {rich(b.text, `s${si}b${bi}`)}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.steps && (
                    <ol className={styles.steps}>
                      {section.steps.map((st, sti) => (
                        <li key={sti} className={styles.step}>
                          <span className={styles.stepTitle}>{st.title}</span>
                          <span className={styles.stepText}>{rich(st.text, `s${si}st${sti}`)}</span>
                        </li>
                      ))}
                    </ol>
                  )}

                  {section.table && (
                    <div className={styles.tableWrap}>
                      <table className={styles.table}>
                        {section.table.caption && <caption>{section.table.caption}</caption>}
                        <thead>
                          <tr>
                            {section.table.head.map((h) => (
                              <th key={h} scope="col">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, ri) => (
                            <tr key={ri}>
                              {row.map((cell, ci) => (
                                <td key={ci}>{rich(cell, `s${si}r${ri}c${ci}`)}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {section.callout && (
                    <div className={styles.callout}>{rich(section.callout, `s${si}co`)}</div>
                  )}

                  {section.quote && (
                    <blockquote className={styles.quote}>
                      <p className={styles.quoteText}>&ldquo;{section.quote.text}&rdquo;</p>
                      {section.quote.cite && (
                        <cite className={styles.quoteCite}>— {section.quote.cite}</cite>
                      )}
                    </blockquote>
                  )}
                </section>
              ))}

              {data.medical && <MedicalDisclaimer topic={data.disclaimerTopic} />}
            </article>

            <aside className={styles.aside}>
              {toc.length > 1 && (
                <nav className={styles.tocCard} aria-label="Sayfa içeriği">
                  <p className={styles.asideTitle}>Bu sayfada</p>
                  <ul className={styles.tocList}>
                    {toc.map((s) => (
                      <li key={s.id}>
                        <a href={`#${s.id}`} className={styles.tocLink}>
                          {s.tocLabel ?? s.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              <div className={styles.ctaCard}>
                <p className={styles.ctaCardTitle}>{data.asideCtaTitle ?? "Süreci birlikte kuralım"}</p>
                <p className={styles.ctaCardText}>
                  {data.asideCtaText ??
                    "İlk görüşmede hedefinizi, sağlık geçmişinizi ve mevcut antrenman düzeninizi birlikte değerlendiriyoruz."}
                </p>
                <a href={whatsappUrl} className={`${styles.ctaCardBtn} ${styles.ctaCardBtnMain}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {site.phoneDisplay}
                </a>
                <Link href="/iletisim" className={`${styles.ctaCardBtn} ${styles.ctaCardBtnAlt}`}>
                  Randevu formu
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {data.faq.length > 0 && (
        <FaqSection
          items={data.faq}
          heading={data.faqHeading ?? "Sık Sorulan Sorular"}
          intro={data.faqIntro}
          currentPath={data.slug}
          moreHref={data.faqMoreHref}
          moreLabel={data.faqMoreLabel}
        />
      )}

      {data.related.length > 0 && (
        <section className={styles.related}>
          <div className="container">
            <h2 className={styles.relatedHeading}>İlgili sayfalar</h2>
            <div className={styles.relatedGrid}>
              {data.related.map((r) => (
                <Link key={r.href} href={r.href} className={styles.relatedCard}>
                  <span className={styles.relatedLabel}>{r.label}</span>
                  <span className={styles.relatedNote}>{r.note}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.finalCta}>
        <div className="container">
          <h2 className={styles.finalCtaTitle}>{data.ctaTitle}</h2>
          <p className={styles.finalCtaText}>{data.ctaText}</p>
          <div className={styles.finalCtaActions}>
            <a href={`tel:${site.phone}`} className={styles.finalCtaBtn}>
              {site.phoneDisplay}
            </a>
            <Link href="/iletisim" className={`${styles.finalCtaBtn} ${styles.finalCtaBtnAlt}`}>
              Online randevu talebi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
