import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { legalStyles as styles } from "../../components/LegalPage";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Diyetisyen Ali Koşar",
  description:
    "Diyetisyen Ali Koşar internet sitesinde hangi verilerin toplandığı, nasıl kullanıldığı ve çerez kullanımına ilişkin gizlilik politikası.",
  alternates: { canonical: "/gizlilik-politikasi" },
  openGraph: { url: "/gizlilik-politikasi", title: "Gizlilik Politikası" },
};

const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.district}/${site.address.city}`;

export default function GizlilikPage() {
  return (
    <LegalPage title="Gizlilik Politikası" updatedAt="2026-09-07">
      <p>
        Bu politika, {site.url.replace("https://", "")} adresindeki internet
        sitesini ziyaret ettiğinizde hangi bilgilerin toplandığını, bu
        bilgilerin ne amaçla kullanıldığını ve haklarınızı açıklar. Siteyi
        kullanarak bu politikayı okuduğunuzu kabul etmiş olursunuz.
      </p>

      <h2>1. Kimiz?</h2>
      <p>
        Site, Antalya Muratpaşa&apos;da beslenme ve diyet danışmanlığı hizmeti
        veren Dyt. Ali Koşar tarafından işletilmektedir.
      </p>
      <p>
        Adres: {fullAddress}
        <br />
        Telefon: <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
      </p>

      <h2>2. Topladığımız Bilgiler</h2>
      <h3>2.1. Sizin verdiğiniz bilgiler</h3>
      <p>
        İletişim sayfasındaki randevu formunu doldurduğunuzda ad-soyad, telefon,
        varsa e-posta adresi, danışmanlık konusu ve mesajınız işlenir. Bu form
        bilgileri bir veri tabanına kaydetmez; doldurduğunuz alanları bir
        WhatsApp mesajına dönüştürerek uygulamayı açar. Mesajı göndermediğiniz
        sürece bize hiçbir bilgi ulaşmaz.
      </p>

      <h3>2.2. Otomatik toplanan bilgiler</h3>
      <p>
        Site, Vercel altyapısında barındırılmaktadır. Barındırma sağlayıcısı,
        hizmetin sunulması ve güvenliği için istek kayıtları (IP adresi, tarayıcı
        bilgisi, ziyaret edilen sayfa, zaman damgası) tutabilir. Bu kayıtlara
        tarafımızca kişisel amaçla erişilmez.
      </p>

      <h2>3. Çerezler</h2>
      <p>
        Bu sitede reklam, takip veya profilleme amaçlı çerez{" "}
        <strong>kullanılmamaktadır</strong>. Site, çalışması için gerekli olan
        teknik çerezler dışında tarayıcınıza çerez yerleştirmez ve üçüncü taraf
        analitik aracı çalıştırmaz.
      </p>
      <p>
        İletişim sayfasındaki harita, Google Maps üzerinden gömülü olarak
        sunulur. Haritanın yüklenmesi sırasında Google, kendi politikaları
        çerçevesinde çerez yerleştirebilir ve IP adresinizi işleyebilir. Bu
        işleme Google&apos;ın{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          gizlilik politikasına
        </a>{" "}
        tabidir.
      </p>

      <h2>4. Bilgilerin Paylaşımı</h2>
      <p>
        Kişisel bilgileriniz satılmaz, kiralanmaz ve pazarlama amacıyla üçüncü
        kişilerle paylaşılmaz. Randevu formunu gönderdiğinizde bilgileriniz,
        mesajın iletilmesi için WhatsApp (Meta) altyapısı üzerinden geçer.
        Bunun dışındaki paylaşımlar yalnızca kanunen yetkili kamu kurumlarının
        mevzuata dayalı talepleriyle sınırlıdır.
      </p>

      <h2>5. Güvenlik</h2>
      <p>
        Site HTTPS üzerinden sunulur; tarayıcınız ile site arasındaki trafik
        şifrelenir. Bununla birlikte internet üzerinden yapılan hiçbir aktarım
        %100 güvenli değildir. Hassas sağlık bilgilerinizi ilk temas mesajında
        değil, danışmanlık görüşmesi sırasında paylaşmanızı öneririz.
      </p>

      <h2>6. Çocukların Gizliliği</h2>
      <p>
        Site 18 yaşın altındaki kişilere yönelik değildir. Çocuk ve ergen
        beslenmesi danışmanlığı için başvuru, veli veya vasi tarafından
        yapılmalıdır.
      </p>

      <h2>7. Haklarınız</h2>
      <p>
        6698 sayılı Kanun kapsamındaki haklarınız ve bu haklara nasıl
        başvurabileceğiniz{" "}
        <Link href="/kvkk-aydinlatma-metni">KVKK Aydınlatma Metni</Link>{" "}
        sayfasında ayrıntılı olarak açıklanmıştır.
      </p>

      <h2>8. Değişiklikler</h2>
      <p>
        Bu politika zaman zaman güncellenebilir. Güncel sürüm her zaman bu
        sayfada yayımlanır; sayfanın başındaki &quot;son güncelleme&quot; tarihi
        değişikliğin ne zaman yapıldığını gösterir.
      </p>

      <p className={styles.notice}>
        Siteye ileride analitik aracı (Google Analytics, Vercel Analytics vb.),
        reklam pikseli veya bülten kaydı eklenirse bu politikanın 2. ve 3.
        bölümleri güncellenmeli, gerekiyorsa bir çerez onay bildirimi
        eklenmelidir.
      </p>
    </LegalPage>
  );
}
