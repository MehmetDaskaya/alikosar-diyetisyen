import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../../components/LegalPage";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Kullanım Koşulları | Diyetisyen Ali Koşar",
  description:
    "Bu web sitesinin kullanım koşulları: içeriklerin niteliği, tıbbi sorumluluk reddi, sonuçlara ilişkin açıklama, fikri mülkiyet ve dış bağlantılar.",
  alternates: { canonical: "/kullanim-kosullari" },
  openGraph: { url: "/kullanim-kosullari", title: "Kullanım Koşulları" },
};

export default function KullanimKosullariPage() {
  return (
    <LegalPage title="Kullanım Koşulları" updatedAt="2026-09-07">
      <p>
        {site.url.replace("https://", "")} adresindeki internet sitesini
        kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. Koşulları kabul
        etmiyorsanız siteyi kullanmamanızı rica ederiz.
      </p>

      <h2>1. Sağlık Bilgisi Uyarısı</h2>
      <p>
        <strong>
          Bu sitedeki içerikler genel bilgilendirme amaçlıdır ve kişiye özel
          tıbbi beslenme tedavisinin yerine geçmez.
        </strong>{" "}
        Blog yazıları, hizmet açıklamaları ve diğer içerikler; teşhis koymak,
        tedavi önermek veya hekiminizin ya da diyetisyeninizin tavsiyelerini
        değiştirmek amacıyla kullanılamaz.
      </p>
      <p>
        Mevcut bir hastalığınız varsa, düzenli ilaç kullanıyorsanız, hamileyseniz
        veya emziriyorsanız, sitedeki önerileri uygulamadan önce mutlaka bir
        sağlık profesyoneline danışın. Sitede okuduğunuz bir bilgiye dayanarak
        tıbbi tavsiye almayı geciktirmeyin.
      </p>

      <h2>2. Randevu Talepleri Sözleşme Kurmaz</h2>
      <p>
        İletişim sayfasındaki formu doldurmanız veya WhatsApp üzerinden mesaj
        göndermeniz tek başına bir danışmanlık sözleşmesi kurmaz; yalnızca
        randevu talebi niteliğindedir. Danışmanlık ilişkisi, karşılıklı olarak
        randevunun teyit edilmesiyle başlar.
      </p>

      <h2>3. Sonuçlara İlişkin Açıklama</h2>
      <p>
        Beslenme programlarının sonuçları kişiden kişiye değişir; yaş, cinsiyet,
        metabolizma, sağlık durumu, uyum düzeyi ve yaşam tarzı gibi etkenlere
        bağlıdır. Sitede yer alan danışan deneyimleri, ilgili kişilerin bireysel
        sonuçlarını yansıtır ve <strong>her danışan için aynı sonucun elde
        edileceği taahhüdü değildir</strong>.
      </p>

      <h2>4. Fikri Mülkiyet</h2>
      <p>
        Sitede yer alan yazılar, görseller, tasarım ve logo dâhil tüm içerik
        Dyt. Ali Koşar&apos;a aittir ve 5846 sayılı Fikir ve Sanat Eserleri
        Kanunu kapsamında korunur. İçerikler, kaynak gösterilmeden kopyalanamaz,
        çoğaltılamaz veya ticari amaçla kullanılamaz. Kısa alıntılar, yazının
        bağlantısı verilmek şartıyla yapılabilir.
      </p>

      <h2>5. Dış Bağlantılar</h2>
      <p>
        Site, üçüncü taraf sitelere (sosyal medya hesapları, harita servisi vb.)
        bağlantı içerebilir. Bu sitelerin içeriğinden ve gizlilik
        uygulamalarından sorumlu değiliz.
      </p>

      <h2>6. Sitenin Erişilebilirliği</h2>
      <p>
        Sitenin kesintisiz ve hatasız çalışacağı garanti edilmez. Bakım,
        güncelleme veya teknik nedenlerle erişim geçici olarak durabilir.
        İçerikler önceden bildirim yapılmaksızın değiştirilebilir.
      </p>

      <h2>7. Sorumluluğun Sınırı</h2>
      <p>
        Sitedeki bilgilerin kullanılmasından doğabilecek doğrudan veya dolaylı
        zararlardan, yürürlükteki mevzuatın izin verdiği ölçüde sorumluluk kabul
        edilmez. Bu hüküm, sağlık hizmetinin bizzat sunulmasından doğan yasal
        sorumluluğu ortadan kaldırmaz.
      </p>

      <h2>8. Uygulanacak Hukuk</h2>
      <p>
        Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Doğabilecek
        uyuşmazlıklarda Antalya mahkemeleri ve icra daireleri yetkilidir.
      </p>

      <h2>9. İletişim</h2>
      <p>
        Koşullara ilişkin sorularınız için{" "}
        <Link href="/iletisim">iletişim sayfasından</Link> bize
        ulaşabilirsiniz. Kişisel verilerinize ilişkin bilgi için{" "}
        <Link href="/kvkk-aydinlatma-metni">KVKK Aydınlatma Metni</Link> ve{" "}
        <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>{" "}
        sayfalarına bakabilirsiniz.
      </p>
    </LegalPage>
  );
}
