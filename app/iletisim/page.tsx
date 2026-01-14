"use client";

import { useState, FormEvent } from "react";
import styles from "./page.module.css";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>İletişim</span>
            <h1 className={styles.heroTitle}>
              Bizimle <span className={styles.highlight}>İletişime Geçin</span>
            </h1>
            <p className={styles.heroDescription}>
              Sağlıklı yaşam yolculuğunuza başlamak için ilk adımı atın. 
              Ücretsiz ön görüşme için hemen randevu alın.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div className={styles.formWrapper}>
              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Randevu Formu</h2>
                <p className={styles.formDescription}>
                  Formu doldurarak en kısa sürede size dönüş yapalım.
                </p>
                
                {isSubmitted ? (
                  <div className={styles.successMessage}>
                    <span className={styles.successIcon}>✓</span>
                    <h3>Teşekkürler!</h3>
                    <p>Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</p>
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>Ad Soyad *</label>
                      <input
                        type="text"
                        id="name"
                        className={styles.input}
                        placeholder="Adınız ve soyadınız"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>E-posta *</label>
                        <input
                          type="email"
                          id="email"
                          className={styles.input}
                          placeholder="ornek@email.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.label}>Telefon</label>
                        <input
                          type="tel"
                          id="phone"
                          className={styles.input}
                          placeholder="0532 XXX XX XX"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="subject" className={styles.label}>Konu *</label>
                      <select
                        id="subject"
                        className={styles.select}
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      >
                        <option value="">Seçiniz...</option>
                        <option value="kilo-yonetimi">Kilo Yönetimi</option>
                        <option value="sporcu-beslenmesi">Sporcu Beslenmesi</option>
                        <option value="klinik-beslenme">Klinik Beslenme</option>
                        <option value="ozel-beslenme">Özel Beslenme</option>
                        <option value="genel">Genel Bilgi</option>
                      </select>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.label}>Mesajınız *</label>
                      <textarea
                        id="message"
                        className={styles.textarea}
                        placeholder="Mesajınızı buraya yazın..."
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>
                    
                    <button type="submit" className={styles.submitButton}>
                      Gönder
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className={styles.contactInfo}>
              {/* Quick Contact */}
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Hızlı İletişim</h3>
                <div className={styles.infoList}>
                  <a href="tel:+90XXXXXXXXXX" className={styles.infoItem}>
                    <span className={styles.infoIcon}>📞</span>
                    <div>
                      <span className={styles.infoLabel}>Telefon</span>
                      <span className={styles.infoValue}>+90 (XXX) XXX XX XX</span>
                    </div>
                  </a>
                  <a href="https://wa.me/90XXXXXXXXXX" className={styles.infoItem}>
                    <span className={styles.infoIcon}>💬</span>
                    <div>
                      <span className={styles.infoLabel}>WhatsApp</span>
                      <span className={styles.infoValue}>Hemen Yazın</span>
                    </div>
                  </a>
                  <a href="mailto:info@alikosar.com" className={styles.infoItem}>
                    <span className={styles.infoIcon}>✉️</span>
                    <div>
                      <span className={styles.infoLabel}>E-posta</span>
                      <span className={styles.infoValue}>info@alikosar.com</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Adres</h3>
                <div className={styles.addressContent}>
                  <span className={styles.infoIcon}>📍</span>
                  <address className={styles.address}>
                    <p>Şirinyalı Mahallesi 1507 sokak</p>
                    <p>Şirinyalı, 2 Apartmanı no:46 Kat:1 Daire:3</p>
                    <p>07230 Muratpaşa/Antalya</p>
                  </address>
                </div>
              </div>

              {/* Working Hours */}
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Çalışma Saatleri</h3>
                <div className={styles.hoursGrid}>
                  <div className={styles.hourItem}>
                    <span>Pazartesi - Cuma</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className={styles.hourItem}>
                    <span>Cumartesi</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className={`${styles.hourItem} ${styles.closed}`}>
                    <span>Pazar</span>
                    <span>Kapalı</span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className={styles.socialCard}>
                <h3 className={styles.infoTitle}>Sosyal Medya</h3>
                <div className={styles.socialLinks}>
                  <a href="https://instagram.com/diyetisyenalikosar" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    📸 Instagram
                  </a>
                  <a href="https://facebook.com/diyetisyenalikosar" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    👤 Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapPlaceholder}>
          <span className={styles.mapIcon}>🗺️</span>
          <h3>Harita</h3>
          <p>Şirinyalı Mahallesi 1507 sokak, Şirinyalı, 2 Apartmanı no:46 Kat:1 Daire:3, 07230 Muratpaşa/Antalya</p>
          <a 
            href="https://maps.google.com/?q=Şirinyalı+Mahallesi+1507+sokak+Muratpaşa+Antalya" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.mapButton}
          >
            Google Maps&apos;te Aç
          </a>
        </div>
      </section>
    </>
  );
}
