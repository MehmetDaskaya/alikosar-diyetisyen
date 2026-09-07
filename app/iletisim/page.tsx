"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Icon from "../../components/Icon";
import { site, whatsappUrl } from "../../lib/site";
import styles from "./page.module.css";

// Haritada tam nokta için adres metni yerine koordinat kullanılıyor.
const mapCoords = `${site.address.latitude},${site.address.longitude}`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapCoords}`;

const subjectLabels: Record<string, string> = {
  "kilo-yonetimi": "Kilo Yönetimi",
  "sporcu-beslenmesi": "Sporcu Beslenmesi",
  "klinik-beslenme": "Klinik Beslenme",
  "ozel-beslenme": "Özel Beslenme",
  genel: "Genel Bilgi",
};

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form şimdilik sunucuya gitmiyor; doldurulan bilgiler WhatsApp mesajına
  // dönüştürülüp danışmanlık merkezinin numarasına yönlendiriliyor.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const lines = [
      "Merhaba, siteden randevu talebi:",
      "",
      `Ad Soyad: ${formData.name}`,
      formData.email ? `E-posta: ${formData.email}` : null,
      formData.phone ? `Telefon: ${formData.phone}` : null,
      `Konu: ${subjectLabels[formData.subject] ?? formData.subject}`,
      "",
      formData.message,
    ].filter((line) => line !== null);

    window.open(`${whatsappUrl}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
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
                  Formu doldurun, bilgileriniz WhatsApp üzerinden bize iletilsin.
                  En kısa sürede size dönüş yapalım.
                </p>
                
                {isSubmitted ? (
                  <div className={styles.successMessage}>
                    <span className={styles.successIcon} aria-hidden="true">
                      <Icon name="check" size={26} strokeWidth={2.4} />
                    </span>
                    <h3>Teşekkürler!</h3>
                    <p>
                      WhatsApp uygulamanızda hazırlanan mesajı göndermeniz yeterli.
                      Pencere açılmadıysa{" "}
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        buradan yazabilirsiniz
                      </a>
                      .
                    </p>
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
                        <label htmlFor="email" className={styles.label}>E-posta</label>
                        <input
                          type="email"
                          id="email"
                          className={styles.input}
                          placeholder="ornek@email.com"
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
                      <Icon name="whatsapp" size={20} />
                      WhatsApp ile Gönder
                    </button>

                    <p className={styles.formConsent}>
                      Formu göndererek bilgilerinizin WhatsApp üzerinden bize
                      iletilmesini kabul etmiş olursunuz.{" "}
                      <Link href="/kvkk-aydinlatma-metni">KVKK Aydınlatma Metni</Link>
                    </p>
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
                  <a href={`tel:${site.phone}`} className={styles.infoItem}>
                    <span className={styles.infoIcon} aria-hidden="true">
                      <Icon name="phone" size={20} />
                    </span>
                    <div>
                      <span className={styles.infoLabel}>Telefon</span>
                      <span className={styles.infoValue}>{site.phoneDisplay}</span>
                    </div>
                  </a>
                  <a href={whatsappUrl} className={styles.infoItem}>
                    <span className={styles.infoIcon} aria-hidden="true">
                      <Icon name="whatsapp" size={20} />
                    </span>
                    <div>
                      <span className={styles.infoLabel}>WhatsApp</span>
                      <span className={styles.infoValue}>Hemen Yazın</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Adres</h3>
                <div className={styles.addressContent}>
                  <span className={styles.infoIcon} aria-hidden="true">
                      <Icon name="pin" size={20} />
                    </span>
                  <address className={styles.address}>
                    <p>{site.address.street}</p>
                    <p>
                      {site.address.postalCode} {site.address.district}/{site.address.city}
                    </p>
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
                  <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <Icon name="instagram" size={18} />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <div className={styles.mapCard}>
            <iframe
              className={styles.map}
              title="Diyetisyen Ali Koşar danışmanlık merkezi konumu"
              src={`https://maps.google.com/maps?q=${mapCoords}&z=17&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className={styles.mapFooter}>
              <span className={styles.mapIcon} aria-hidden="true">
                <Icon name="pin" size={20} />
              </span>
              <p>
                {site.address.street}, {site.address.postalCode} {site.address.district}/
                {site.address.city}
              </p>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapButton}
              >
                Yol Tarifi Al
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
