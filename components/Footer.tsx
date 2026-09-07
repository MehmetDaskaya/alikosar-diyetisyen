import Link from "next/link";
import Icon, { type IconName } from "./Icon";
import { site, whatsappUrl } from "../lib/site";
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
    { href: site.social.instagram, label: "Instagram", icon: "instagram" as IconName },
    { href: whatsappUrl, label: "WhatsApp", icon: "whatsapp" as IconName },
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
                <span className={styles.logoIcon} aria-hidden="true">
                  <Icon name="leaf" />
                </span>
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
                    <Icon name={link.icon} size={20} />
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
                  <span className={styles.contactIcon} aria-hidden="true">
                    <Icon name="pin" size={18} />
                  </span>
                  <div>
                    <p>{site.address.street}</p>
                    <p>
                      {site.address.postalCode} {site.address.district}/{site.address.city}
                    </p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <Icon name="phone" size={18} />
                  </span>
                  <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <Icon name="clock" size={18} />
                  </span>
                  <div>
                    <p>Pzt - Cuma: 09:00 - 18:00</p>
                    <p>Cumartesi: 10:00 - 14:00</p>
                  </div>
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
              <span className={styles.divider}>|</span>
              <Link href="/kvkk-aydinlatma-metni" className={styles.bottomLink}>
                KVKK Aydınlatma Metni
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
