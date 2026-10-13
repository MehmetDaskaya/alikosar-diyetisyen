import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { legalStyles as styles } from "../../components/LegalPage";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Diyetisyen Ali Koşar",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Diyetisyen Ali Koşar tarafından işlenen kişisel verilere ilişkin aydınlatma metni.",
  alternates: { canonical: "/kvkk-aydinlatma-metni" },
  openGraph: { url: "/kvkk-aydinlatma-metni", title: "KVKK Aydınlatma Metni" },
  robots: { index: true, follow: true },
};

const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.district}/${site.address.city}`;

export default function KvkkPage() {
  return (
    <LegalPage title="KVKK Aydınlatma Metni" updatedAt="2026-09-07">
      <p>
        Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu&apos;nun
        (&quot;KVKK&quot;) 10. maddesi ile Aydınlatma Yükümlülüğünün Yerine
        Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ kapsamında,
        veri sorumlusu sıfatıyla Dyt. Ali Koşar tarafından hazırlanmıştır.
      </p>

      <h2>1. Veri Sorumlusu</h2>
      <dl>
        <dt>Veri sorumlusu</dt>
        <dd>Ali Koşar (Diyetisyen)</dd>
        <dt>Adres</dt>
        <dd>{fullAddress}</dd>
        <dt>Telefon</dt>
        <dd>
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
        </dd>
        <dt>İnternet sitesi</dt>
        <dd>{site.url.replace("https://", "")}</dd>
      </dl>

      <h2>2. İşlenen Kişisel Veriler</h2>
      <p>Bu internet sitesi üzerinden aşağıdaki kişisel veriler işlenmektedir:</p>
      <ul>
        <li>
          <strong>Kimlik verisi:</strong> Randevu formuna yazdığınız ad ve soyad.
        </li>
        <li>
          <strong>İletişim verisi:</strong> Randevu formuna yazdığınız telefon
          numarası ve varsa e-posta adresi.
        </li>
        <li>
          <strong>Talep içeriği:</strong> Formda seçtiğiniz danışmanlık konusu ve
          mesaj metninde paylaştığınız bilgiler.
        </li>
      </ul>
      <p>
        Danışmanlık süreci başladığında, yüz yüze veya çevrimiçi görüşmelerde
        boy, kilo, laboratuvar sonuçları ve hastalık geçmişi gibi{" "}
        <strong>özel nitelikli kişisel veriler (sağlık verisi)</strong> işlenir.
        Bu veriler internet sitesi üzerinden toplanmaz; yalnızca danışmanlık
        ilişkisi kapsamında, açık rızanız alınarak işlenir.
      </p>

      <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
      <ul>
        <li>Randevu ve ön görüşme taleplerinizin karşılanması,</li>
        <li>Talebinize ilişkin sizinle iletişime geçilmesi,</li>
        <li>Beslenme ve diyet danışmanlığı hizmetinin sunulması,</li>
        <li>İlgili mevzuattan doğan yükümlülüklerin yerine getirilmesi.</li>
      </ul>

      <h2>4. Hukuki Sebep ve Toplama Yöntemi</h2>
      <p>
        Kişisel verileriniz, internet sitesindeki randevu formunu doldurup
        göndermeniz yoluyla, tamamen otomatik olmayan yöntemlerle elektronik
        ortamda toplanır. İşleme faaliyeti, KVKK m.5/2-(c) uyarınca{" "}
        <strong>bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya
        ilgili olması</strong> ve m.5/2-(f) uyarınca{" "}
        <strong>veri sorumlusunun meşru menfaati</strong> hukuki sebeplerine
        dayanır. Sağlık verileriniz ise KVKK m.6/3 uyarınca yalnızca{" "}
        <strong>açık rızanız</strong> ile işlenir.
      </p>

      <h2>5. Kişisel Verilerin Aktarılması</h2>
      <p>
        Randevu formu, doldurduğunuz bilgileri <strong>WhatsApp</strong>{" "}
        uygulaması üzerinden iletilmek üzere hazırlar. Mesajı gönderdiğinizde
        bilgileriniz, WhatsApp&apos;ı işleten <strong>WhatsApp Ireland
        Limited / Meta Platforms</strong> altyapısı üzerinden iletilir ve bu
        şirketin sunucuları yurt dışında bulunabilir. Formu göndererek bu
        aktarımı gerçekleştirmiş olursunuz; WhatsApp kullanmak istemiyorsanız
        bize doğrudan telefonla ulaşabilirsiniz.
      </p>
      <p>
        Bunun dışında kişisel verileriniz, yalnızca kanunen yetkili kamu kurum
        ve kuruluşlarına, ilgili mevzuatın öngördüğü hâllerde aktarılabilir.
        Verileriniz pazarlama amacıyla üçüncü kişilerle paylaşılmaz ve satılmaz.
      </p>

      <h2>6. Saklama Süresi</h2>
      <p>
        Randevu talepleri, talebin sonuçlanmasının ardından makul bir süre
        boyunca saklanır ve amacın ortadan kalkması hâlinde silinir. Danışmanlık
        ilişkisi kurulması hâlinde sağlık kayıtları, ilgili sağlık mevzuatının
        öngördüğü süreler boyunca saklanır.
      </p>

      <h2>7. İlgili Kişi Olarak Haklarınız</h2>
      <p>KVKK m.11 uyarınca veri sorumlusuna başvurarak;</p>
      <ul>
        <li>Kişisel verinizin işlenip işlenmediğini öğrenme,</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
        <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
        <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
        <li>Kanunda öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
        <li>
          Düzeltme, silme ve yok etme işlemlerinin verilerin aktarıldığı üçüncü
          kişilere bildirilmesini isteme,
        </li>
        <li>
          Münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir
          sonuç doğmasına itiraz etme,
        </li>
        <li>Kanuna aykırı işleme sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
      </ul>
      <p>haklarına sahipsiniz.</p>

      <h2>8. Başvuru Yöntemi</h2>
      <p>
        Haklarınıza ilişkin taleplerinizi, Veri Sorumlusuna Başvuru Usul ve
        Esasları Hakkında Tebliğ&apos;e uygun şekilde, kimliğinizi tevsik edici
        belgelerle birlikte yukarıda belirtilen adrese yazılı olarak
        iletebilirsiniz. Başvurunuz en geç <strong>30 gün</strong> içinde
        sonuçlandırılır.
      </p>

      <p className={styles.notice}>
        Bu metin genel bilgilendirme amaçlıdır. Danışmanlık faaliyetinin şahıs
        şirketi olarak yürütülmesi hâlinde ticaret unvanı, vergi dairesi ve
        varsa KEP adresi bilgilerinin metne eklenmesi, metnin yayına alınmadan
        önce bir hukuk danışmanınca gözden geçirilmesi önerilir.
      </p>

      <p>
        İlgili diğer metinler:{" "}
        <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link> ·{" "}
        <Link href="/kullanim-kosullari">Kullanım Koşulları</Link>
      </p>
    </LegalPage>
  );
}
