"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { site, whatsappUrl } from "../lib/site";
import styles from "./Header.module.css";

interface NavLink {
  href: string;
  label: string;
  /** Masaüstünde açılır menü, mobilde girintili alt liste olarak gösterilir. */
  children?: { href: string; label: string; note?: string }[];
}

/**
 * Navigasyon aynı zamanda site geneli iç link yapısıdır: pillar sayfalar her
 * sayfadan bağlantı alır, alt konu sayfalarına açılır menüden erişilir.
 */
const navLinks: NavLink[] = [
  {
    href: "/hizmetler",
    label: "Hizmetler",
    children: [
      { href: "/sporcu-beslenmesi-antalya", label: "Sporcu Beslenmesi", note: "Kulüp ve federasyon tecrübesiyle" },
      { href: "/atletik-performans-beslenmesi", label: "Atletik Performans", note: "Güç, dayanıklılık, toparlanma" },
      { href: "/sporcu-sakatligi-beslenmesi", label: "Sakatlık ve İyileşme", note: "Kas kaybını sınırlamak" },
      { href: "/zayiflama-ignesi-diyetisyeni-antalya", label: "Zayıflama İğnesi (GLP-1)", note: "Mounjaro, Ozempic süreç yönetimi" },
      { href: "/biohacking-ve-longevity-antalya", label: "Biohacking & Longevity", note: "Ölçüme dayalı optimizasyon" },
      { href: "/online-diyet", label: "Online Diyet", note: "Şehir dışı ve kamp takibi" },
      { href: "/hizmetler", label: "Tüm hizmetler" },
    ],
  },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/antalya-diyetisyen", label: "Antalya" },
  { href: "/blog", label: "Blog" },
  { href: "/sik-sorulan-sorular", label: "S.S.S." },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobil menü açıkken arka plandaki sayfanın kaymasını engelle
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
          <span className={styles.logoIcon} aria-hidden="true">
            <Icon name="leaf" />
          </span>
          <div className={styles.logoText}>
            <span className={styles.logoName}>Ali Koşar</span>
            <span className={styles.logoTitle}>Diyetisyen</span>
          </div>
        </Link>

        {/* Masaüstü Navigasyon */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={`${styles.navItem} ${link.children ? styles.hasDropdown : ""}`}
              >
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                  {link.children && (
                    <svg className={styles.caret} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </Link>

                {link.children && (
                  <div className={styles.dropdown}>
                    <ul className={styles.dropdownList}>
                      {link.children.map((child) => (
                        <li key={child.href + child.label}>
                          <Link href={child.href} className={styles.dropdownLink}>
                            <span className={styles.dropdownLabel}>{child.label}</span>
                            {child.note && <span className={styles.dropdownNote}>{child.note}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Masaüstü CTA */}
        <Link href="/iletisim" className={styles.ctaButton}>
          Randevu Al
        </Link>

        {/* Mobil Hamburger Butonu */}
        <button
          className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.active : ""}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.hamburger}></span>
        </button>
      </div>

      {/* Mobil Menü Drawer / Overlay */}
      <div 
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className={styles.mobileMenuBackdrop} onClick={closeMobileMenu} />
        
        <div className={styles.mobileMenuSheet}>
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {navLinks.map((link) => (
                <li key={link.href} className={styles.mobileNavItem}>
                  <Link 
                    href={link.href} 
                    className={styles.mobileNavLink}
                    onClick={closeMobileMenu}
                  >
                    <span>{link.label}</span>
                    <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                  {link.children && (
                    <ul className={styles.mobileSubList}>
                      {link.children.slice(0, -1).map((child) => (
                        <li key={child.href + child.label}>
                          <Link href={child.href} className={styles.mobileSubLink} onClick={closeMobileMenu}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className={styles.mobileActions}>
              <Link 
                href="/iletisim" 
                className={styles.mobileCtaPrimary}
                onClick={closeMobileMenu}
              >
                Randevu Al
              </Link>
              
              <div className={styles.mobileQuickContact}>
                <a 
                  href={`tel:${site.phone}`} 
                  className={styles.quickContactBtn}
                  aria-label="Telefonla ara"
                >
                  <Icon name="phone" size={18} />
                  <span>{site.phoneDisplay}</span>
                </a>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.quickContactWhatsapp}
                  aria-label="WhatsApp'tan yaz"
                >
                  <Icon name="whatsapp" size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
