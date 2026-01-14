import Link from "next/link";
import styles from "./Footer.module.css";

const footerLinks = {
  hizmetler: [
    { href: "/hizmetler#kilo-yonetimi", label: "Kilo Yönetimi" },
    { href: "/hizmetler#sporcu-beslenmesi", label: "Sporcu Beslenmesi" },
    { href: "/hizmetler#klinik-beslenme", label: "Klinik Beslenme" },
    { href: "/hizmetler#ozel-beslenme", label: "Özel Beslenme" },
  ],
  hizli: [
    { href: "/hakkimda", label: "Hakkımda" },
    { href: "/basari-hikayeleri", label: "Başarı Hikayeleri" },
    { href: "/blog", label: "Blog" },
    { href: "/iletisim", label: "İletişim" },
  ],
  sosyal: [
    { href: "https://instagram.com/diyetisyenalikosar", label: "Instagram", icon: "📸" },
    { href: "https://facebook.com/diyetisyenalikosar", label: "Facebook", icon: "👤" },
    { href: "https://wa.me/90XXXXXXXXXX", label: "WhatsApp", icon: "💬" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Brand Column */}
            <div className={styles.brandColumn}>
              <Link href="/" className={styles.logo}>
                <span className={styles.logoIcon}>🌿</span>
                <div className={styles.logoText}>
                  <span className={styles.logoName}>Ali Koşar</span>
                  <span className={styles.logoTitle}>Diyetisyen</span>
                </div>
              </Link>
              <p className={styles.brandDescription}>
                Lezzetten ödün vermeden sağlıklı yaşam. Kişiye özel beslenme programları ile 
                hedeflerinize birlikte ulaşalım.
              </p>
              <div className={styles.socialLinks}>
                {footerLinks.sosyal.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Hizmetler</h4>
              <ul className={styles.linkList}>
                {footerLinks.hizmetler.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Hızlı Erişim</h4>
              <ul className={styles.linkList}>
                {footerLinks.hizli.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className={styles.contactColumn}>
              <h4 className={styles.columnTitle}>İletişim</h4>
              <address className={styles.address}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <div>
                    <p>Şirinyalı Mahallesi 1507 sokak</p>
                    <p>Şirinyalı, 2 Apartmanı no:46 Kat:1 Daire:3</p>
                    <p>07230 Muratpaşa/Antalya</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <a href="tel:+90XXXXXXXXXX">+90 (XXX) XXX XX XX</a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>✉️</span>
                  <a href="mailto:info@alikosar.com">info@alikosar.com</a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>🕐</span>
                  <p>Pzt - Cuma: 09:00 - 18:00</p>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} Diyetisyen Ali Koşar. Tüm hakları saklıdır.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/gizlilik-politikasi" className={styles.bottomLink}>
                Gizlilik Politikası
              </Link>
              <span className={styles.divider}>|</span>
              <Link href="/kullanim-kosullari" className={styles.bottomLink}>
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
