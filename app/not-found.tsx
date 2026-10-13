import Link from "next/link";
import styles from "./not-found.module.css";
import { site, whatsappUrl } from "../lib/site";

export const metadata = {
  title: "Sayfa Bulunamadı (404)",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/sporcu-beslenmesi-antalya", label: "Sporcu Beslenmesi" },
  { href: "/zayiflama-ignesi-diyetisyeni-antalya", label: "Zayıflama İğnesi (GLP-1)" },
  { href: "/biohacking-ve-longevity-antalya", label: "Biohacking ve Longevity" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/blog", label: "Blog" },
  { href: "/sik-sorulan-sorular", label: "Sık Sorulan Sorular" },
  { href: "/iletisim", label: "İletişim" },
];

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.code}>404</span>
          <h1 className={styles.title}>Aradığınız sayfa bulunamadı</h1>
          <p className={styles.text}>
            Bağlantı taşınmış veya adres yanlış yazılmış olabilir. Aşağıdaki sayfalardan
            devam edebilir ya da doğrudan bize yazabilirsiniz.
          </p>
          <nav className={styles.links} aria-label="Öne çıkan sayfalar">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>
                {l.label}
              </Link>
            ))}
          </nav>
          <a href={whatsappUrl} className={styles.cta} target="_blank" rel="noopener noreferrer">
            WhatsApp: {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
