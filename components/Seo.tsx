import Link from "next/link";
import styles from "./Seo.module.css";
import type { Crumb, FaqItem } from "../lib/schema";
import { formatTrDate, LAST_REVIEWED } from "../lib/site";

/* ---------- Breadcrumbs ---------- */

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const all = [{ name: "Ana Sayfa", path: "/" }, ...crumbs];
  return (
    <nav className={styles.breadcrumbs} aria-label="Site içi konum">
      <ol className={styles.crumbList}>
        {all.map((c, i) => {
          const isLast = i === all.length - 1;
          return (
            <li key={c.path} className={styles.crumbItem}>
              {isLast ? (
                <span className={styles.crumbCurrent} aria-current="page">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link href={c.path} className={styles.crumbLink}>
                    {c.name}
                  </Link>
                  <span className={styles.crumbSep} aria-hidden="true">
                    ›
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/* ---------- GEO cevap bloğu ---------- */

/**
 * H1'in hemen altında duran 40-60 kelimelik, bağlamsız kopyalandığında bile
 * anlamlı kalan cevap paragrafı. Üretken arama motorlarının en çok alıntıladığı
 * yapı budur; bu yüzden her sayfada tam olarak bir tane bulunur.
 */
export function AnswerBlock({
  label = "Kısa cevap",
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.answer}>
      <span className={styles.answerLabel}>
        <span aria-hidden="true">◆</span> {label}
      </span>
      <p className={styles.answerText}>{children}</p>
    </div>
  );
}

/* ---------- Kanıt şeridi ---------- */

export function ProofStrip({
  items,
}: {
  items: readonly { value: string; label: string }[];
}) {
  return (
    <div className={styles.proofStrip}>
      {items.map((item) => (
        <div key={item.label} className={styles.proofCard}>
          <span className={styles.proofValue}>{item.value}</span>
          <span className={styles.proofLabel}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- SSS ---------- */

/**
 * Cevaplar `<details>` içinde ama DOM'da her zaman mevcut — FAQPage schema'sının
 * kuralı, işaretlenen cevabın sayfada görünür olmasıdır.
 */
export function FaqSection({
  items,
  heading = "Sık Sorulan Sorular",
  intro,
  currentPath,
  moreHref,
  moreLabel,
}: {
  items: FaqItem[];
  heading?: string;
  intro?: string;
  /** Sahibi başka sayfa olan sorularda "detaylı cevap" bağlantısı göstermek için. */
  currentPath?: string;
  moreHref?: string;
  moreLabel?: string;
}) {
  return (
    <section className={styles.faqSection} id="sss">
      <div className="container">
        <div className={styles.faqInner}>
          <h2 className={styles.faqHeading}>{heading}</h2>
          {intro && <p className={styles.faqIntro}>{intro}</p>}
          {items.map((f) => {
            const elsewhere = f.canonical && f.canonical !== currentPath;
            return (
              <details key={f.question} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  <span>{f.question}</span>
                  <span className={styles.faqMarker} aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className={styles.faqAnswer}>
                  {f.answer}
                  {elsewhere && (
                    <Link href={f.canonical!} className={styles.faqMore}>
                      Bu konunun ayrıntılı sayfası →
                    </Link>
                  )}
                </div>
              </details>
            );
          })}

          {moreHref && (
            <Link href={moreHref} className={styles.faqAllLink}>
              {moreLabel ?? "Tüm soruları görün"} →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Tazelik satırı ---------- */

export function ReviewLine({ date = LAST_REVIEWED }: { date?: string }) {
  return (
    <p className={styles.reviewLine}>
      <span className={styles.reviewDot} aria-hidden="true" />
      Son güncelleme: <time dateTime={date}>{formatTrDate(date)}</time>
      <span className={styles.reviewDot} aria-hidden="true" />
      İçerik Dyt. Ali Koşar tarafından hazırlandı ve gözden geçirildi
    </p>
  );
}

/* ---------- Tıbbi sorumluluk reddi ---------- */

export function MedicalDisclaimer({ topic }: { topic?: string }) {
  return (
    <aside className={styles.disclaimer}>
      <strong>Tıbbi uyarı.</strong> Bu sayfadaki bilgiler genel bilgilendirme
      amaçlıdır ve kişiye özel tıbbi tavsiye, teşhis veya tedavi yerine geçmez.
      {topic ? ` ${topic} ` : " İlaç ve takviye kullanımı "}
      konusundaki kararlar mutlaka hekiminizle birlikte alınmalıdır. Beslenme
      programı, kişisel sağlık geçmişiniz ve güncel laboratuvar değerleriniz
      değerlendirilmeden hazırlanamaz.
    </aside>
  );
}
