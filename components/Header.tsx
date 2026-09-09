"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { site, whatsappUrl } from "../lib/site";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/basari-hikayeleri", label: "Başarı Hikayeleri" },
  { href: "/blog", label: "Blog" },
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
              <li key={link.href} className={styles.navItem}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
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
