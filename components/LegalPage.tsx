import styles from "./LegalPage.module.css";

interface LegalPageProps {
  title: string;
  /** ISO tarih (YYYY-MM-DD): metnin son güncellendiği gün. */
  updatedAt: string;
  children: React.ReactNode;
}

/** Hukuki metin sayfaları için ortak düzen. */
export default function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  const formatted = new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(updatedAt));

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.meta}>
            Son güncelleme:{" "}
            <time dateTime={updatedAt}>{formatted}</time>
          </p>
        </div>
      </section>
      <section className={styles.body}>
        <div className={styles.container}>{children}</div>
      </section>
    </>
  );
}

export { styles as legalStyles };
