import type { BlogPost } from "./blog-types";

/**
 * Ekim 2026 içerik dalgası — 5 yazı.
 *
 * Yayın tarihleri haftada iki olacak şekilde aralıklı verildi; `getAllPosts()`
 * tarihi gelmemiş yazıları gizliyor, sayfalar ISR ile yenilendiği için yazı
 * elle müdahale olmadan yayına giriyor.
 *
 * Konular bilinçli olarak birbirinden farklı açı ve veri setine dayanıyor:
 * tekrarlanan şablon, "scaled content abuse" tespitinin asıl tetikleyicisi.
 * Her yazı ayrı bir pillar sayfasına iç link akıtıyor.
 */
export const ekimPosts: BlogPost[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "kadin-sporcularda-demir-eksikligi",
    title: "Kadın Sporcularda Demir Eksikliği: Formsuzluk Sanılan Tablo",
    excerpt:
      "Performans düşüyorsa akla ilk gelmesi gereken değerlerden biri ferritin. Kadın sporcularda demir eksikliği neden bu kadar yaygın ve nasıl okunur?",
    answer:
      "Kadın sporcularda demir eksikliği, branşa ve antrenman yüküne göre %25–60 aralığında bildirilen yaygın bir tablodur. Hemoglobin normalken bile ferritin düşük olabilir; bu dönemde ilk kaybedilen şey dayanıklılık ve toparlanma hızıdır. Sporcularda ferritin için yaygın kabul gören eşik 30 µg/L, yoğun antrenman dönemlerinde 40–50 µg/L'dir.",
    category: "Sporcu Beslenmesi",
    tags: ["kadın sporcu", "demir eksikliği", "ferritin", "RED-S", "sporcu beslenmesi", "kan değerleri"],
    author: "Dyt. Ali Koşar",
    publishedAt: "2026-10-13",
    readTime: "8 dk okuma",
    image: "/images/blog/kadin-sporcularda-demir-eksikligi.jpg",
    featured: true,
    content: `
## Neden ilk akla gelen değer ferritin olmalı?

Çünkü demir eksikliği, performans düşüşünün en sık gözden kaçan sebebi ve kadın sporcularda erkeklere göre belirgin biçimde daha yaygın. Literatürde bildirilen oranlar branşa, antrenman yüküne ve adet durumuna göre **%25 ile %60 arasında** değişiyor.

Gözden kaçmasının teknik bir sebebi var: **hemoglobin en son düşen değer.** Vücut demir depolarını önce tüketir, kana son anda dokunur. Yani "kansızlığım yok" demek, demir deponuzun dolu olduğu anlamına gelmiyor.

Bu ara dönemin adı **latent demir eksikliği** ve sporcu için en sinsi dönem bu. Hemogram temiz çıkar, kişi "bir şeyim yok" der, ama antrenmanda hissedilen şey şudur:

- Aynı tempoda nabzın daha yüksek seyretmesi
- Set aralarında toparlanamama
- Antrenman sonrası alışılmadık yorgunluk
- Soğuğa karşı artan hassasiyet
- Konsantrasyon dağınıklığı
- Tekrarlayan üst solunum yolu enfeksiyonları

Bunların hepsi "formsuzluk" veya "ağır dönem" diye yorumlanabiliyor. Oysa basit bir kan tahlili cevabı veriyor.

## Ferritin kaç olmalı?

Burada net bir uyarı gerekiyor: **eşikler kaynaktan kaynağa değişiyor** ve genel popülasyon için kullanılan değerler sporcuya uymuyor.

| Kaynak / durum | Eşik |
|---|---|
| DSÖ, genel sağlıklı birey | 15 µg/L altı eksiklik |
| Sporcularda yaygın kabul | **30 µg/L altı eksiklik** |
| Yoğun antrenman dönemi | **40–50 µg/L altı yetersiz** |
| Sporcu için "ideal" düzey | Resmî olarak tanımlanmamış |

Son satır önemli: sporcular için hedeflenmesi gereken bir ferritin değeri **resmî olarak belirlenmiş değil.** İnternette dolaşan "100 ng/mL olmalı" iddiası klinik gözleme dayanıyor, kılavuza değil. Bu yüzden takip, tek bir hedef sayıya değil, kişinin kendi değerinin yönüne ve semptomlarına göre yapılıyor.

⚠️ **Ferritin tek başına okunamaz.** Ferritin aynı zamanda bir *akut faz proteini*: iltihap, enfeksiyon, karaciğer sorunu, gebelik ve **yoğun bir antrenmanın hemen ardından** yükselir. Yani ağır bir maçtan sonraki sabah bakılan ferritin, gerçek deponuzdan yüksek çıkabilir ve eksikliği gizleyebilir.

Bu yüzden ferritin daima şunlarla birlikte değerlendirilir:

- Hemogram (hemoglobin, hematokrit, MCV)
- **CRP veya benzeri bir iltihap belirteci** — ferritini yukarı çeken durumu görmek için
- Transferrin satürasyonu ve serum demiri
- Mümkünse ölçümün dinlenik bir günde, sabah ve aç karnına yapılması

## Kadın sporcularda neden daha yaygın?

Dört mekanizma üst üste biniyor:

1. **Adet kanaması.** En büyük tek etken. Yoğun kanaması olan sporcular en yüksek risk grubunda.
2. **Yetersiz alım.** Premenopozal kadınlar için günlük demir önerisi **18 mg**; dayanıklılık sporcularında ihtiyaç daha da yüksek olabiliyor. Kırmızı eti sınırlayan veya vejetaryen beslenen sporcularda bu hedefe ulaşmak zor.
3. **Egzersize bağlı kayıplar.** Terle kayıp, ayak tabanı darbesiyle oluşan hemoliz (özellikle koşucularda), gastrointestinal mikro kanamalar ve egzersiz sonrası yükselen hepsidin hormonunun demir emilimini geçici olarak baskılaması.
4. **Düşük enerji uygunluğu.** Yetersiz enerji alan sporcuda toplam besin alımı düştüğü için demir alımı da düşüyor.

## RED-S ile bağlantısı

Son madde bizi daha geniş bir tabloya götürüyor: **RED-S (Sporda Göreli Enerji Eksikliği).** Demir durumu, enerji uygunluğu spektrumuyla doğrudan ilişkili.

Enerji uygunluğu, antrenmanda harcananı çıkardıktan sonra vücudun temel işlevlerine kalan enerji. Yağsız kütle kilogramı başına günde **30 kcal** eşiğinin altına inildiğinde hormonal ve metabolik bozulmalar başlıyor.

Kadın sporcuda bu tablonun en görünür işareti **adet düzensizliği veya adetin tamamen kesilmesi.** Bu, "antrenman yoğun, normaldir" diye geçiştirilecek bir bulgu değil; kemik mineral yoğunluğu kaybı, stres kırığı riski ve uzun vadeli üreme sağlığı sorunlarıyla ilişkili.

> Sahada en sık söylediğim cümle şu: adetin kesilmesi formda olmanın göstergesi değil, enerji açığının göstergesi.

RED-S'in diğer işaretleri: tekrarlayan hastalıklar, stres kırıkları, uyku bozukluğu, performansta açıklanamayan gerileme ve toparlanamama.

## Beslenmeyle ne yapılabilir?

### 1. Hem demiri hem emilimi hedefleyin

Demirin iki formu var ve emilimleri çok farklı:

- **Hem demir** (kırmızı et, karaciğer, balık, tavuk budu): emilimi yüksek, yaklaşık %15–35
- **Hem olmayan demir** (baklagil, kuru meyve, koyu yeşil yapraklılar, pekmez, tahin): emilimi düşük, yaklaşık %2–20 ve yanındakilere çok duyarlı

### 2. Emilimi artıran ve engelleyen şeyleri ayırın

| Artıranlar | Engelleyenler |
|---|---|
| C vitamini (biber, maydanoz, limon, narenciye) | Çay ve kahve (tanen) |
| Hem demirle aynı öğünde bitkisel demir | Süt ve süt ürünleri (kalsiyum) |
| Fermente ve maya kullanılmış tahıllar | Tam tahıl ve baklagildeki fitat |
|  | Kalsiyum takviyesi |

Pratik karşılığı basit: **çayı öğünle birlikte değil, öğünden en az bir saat sonra için.** Mercimek yemeğinin yanına limon sıkın. Demir takviyesini sütle almayın.

### 3. Takviye kararı hekime ait

Burada sınırı net çizmek gerekiyor: **demir takviyesi kan değeri görülmeden başlanmaz.** Gereksiz demir yüklemesi zararlı ve hemokromatoz gibi tablolarda tehlikeli.

Hekiminiz takviye başlarsa bilmeniz yararlı iki nokta var:

- Ağızdan demir tedavisi ferritini ve performansı en çok **başlangıç ferritini 30 µg/L ve altında olanlarda** iyileştiriyor.
- Günlük ve **gün aşırı** kullanım benzer etkinlik gösteriyor ama tolere edilebilirlikleri farklı. Mide şikâyeti yaşayanlarda gün aşırı şema hekimle konuşulabilir.

### 4. Takip aralığı

Kadın sporcularda **6 ayda bir** hematolojik kontrol makul bir sıklık. Semptom varsa beklemeye gerek yok.

## Ne zaman hekime?

- Hemoglobin düşükse (anemi varsa, bu beslenmeyle çözülecek bir tablo değil)
- Adet kanaması olağandışı yoğunsa
- Adet 3 aydan uzun süredir yoksa
- Demir takviyesine rağmen ferritin yükselmiyorsa — emilim sorunu veya devam eden kayıp araştırılmalı
- Çölyak, gastrit veya bağırsak hastalığı şüphesi varsa

---

Bu yazı genel bilgilendirme amaçlıdır. Demir takviyesi dâhil hiçbir tedavi, kan değerleri görülmeden ve hekim değerlendirmesi yapılmadan başlanmamalıdır.
`,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "antalyada-d-vitamini-eksikligi",
    title: "Antalya'da Yaşıyorsunuz: D Vitamininiz Neden Yine de Düşük?",
    excerpt:
      "Türkiye'nin en güneşli şehirlerinden birinde yaşamak D vitamini eksikliğinden korumuyor. Araştırmalar bunun sebebinin enlem değil, davranış olduğunu gösteriyor.",
    answer:
      "Güneşli bir şehirde yaşamak D vitamini eksikliğini önlemiyor: Türkiye'de Ege bölgesinde yapılan bir çalışmada eksiklik oranı %74,9 bulunmuş, en yüksek oran ise ülkenin en güneşli illerinden Diyarbakır'da (%78,7) ölçülmüştür. Belirleyici olan enlem değil; kapalı giyim, gün içinde kapalı mekânda kalmak, güneş kremi, obezite ve mevsimdir.",
    category: "Klinik Beslenme",
    tags: ["D vitamini", "Antalya", "kan değerleri", "güneş", "takviye", "biyokimya"],
    author: "Dyt. Ali Koşar",
    publishedAt: "2026-10-16",
    readTime: "7 dk okuma",
    image: "/images/blog/antalyada-d-vitamini-eksikligi.jpg",
    content: `
## Klinikte en sık duyduğum itiraz

"Hocam ben Antalya'da yaşıyorum, bende D vitamini eksikliği olamaz."

Olabiliyor. Üstelik sanılandan çok daha sık.

Türkiye'de yapılan çalışmalar bu sezgiyi tersine çeviriyor. Ege bölgesinde yürütülen bir araştırmada eksiklik oranı **%74,9**, yetersizlik oranı **%13,8** bulunmuş; araştırmacılar bunu "bol güneş alan bir bölge için oldukça yüksek" diye not düşmüş.

Daha çarpıcı bir veri: Türkiye genelinde kadınlarla yapılan çok merkezli bir çalışmada **en yüksek eksiklik oranı Diyarbakır'da (%78,7)**, en düşük oran ise İstanbul'da (%50,5) ölçülmüş.

Bu tek başına meseleyi çözüyor. **Diyarbakır, İstanbul'dan çok daha fazla güneş alıyor.** Eğer belirleyici faktör güneş ışığı olsaydı sıralama tam tersi olurdu.

## Peki sebep ne?

Güneş var ama cilde ulaşmıyor. Araştırmaların işaret ettiği sebepler sırayla:

### 1. Kapalı giyim ve güneşten kaçınma
Ege çalışmasında katılımcıların **%67,6'sı** güneş ışığına maruziyeti kısıtlayan giysiler giyiyordu ve bu oran kadınlarda erkeklerden yüksekti. D vitamini sentezi için gereken şey kolların ve bacakların doğrudan ışık alması.

### 2. Gün içinde kapalı mekânda olmak
D vitamini sentezi için en verimli saatler **10:00–15:00** arası. Çoğu insan tam o saatlerde ofiste, okulda veya evde. Antalya'nın güneşi sabah 8'de işe giderken ve akşam 7'de çıkarken pek işe yaramıyor — gün ortasının UVB'si gerekiyor.

### 3. Güneş kremi
Koruma faktörü cilt kanseri açısından doğru bir alışkanlık ama aynı mekanizma D vitamini sentezini de azaltıyor. Çalışmalar bunu sebepler arasında sayıyor; ancak katkısının ne kadar olduğu giyim ve kapalı mekânda geçen süreden ayrıştırılabilmiş değil.

### 4. Vücut yağ oranı
D vitamini yağda çözünen bir vitamin; yağ dokusunda depolanıp dolaşıma daha az çıkıyor. Tokat'ta yapılan toplum temelli bir çalışmada obez katılımcılarda eksiklik olasılığı **%76'ya varan oranda** daha yüksek bulunmuş.

### 5. Mevsim
Kış aylarında güneşin geliş açısı değiştiği için UVB'nin atmosferden geçişi azalıyor. Bu, ekim–nisan arası dönemde Antalya'da bile sentezin belirgin şekilde düştüğü anlamına geliyor.

### 6. Hava kirliliği
Şehir merkezlerindeki troposferik ozon, ciltteki D vitamini sentezini azaltan etkenler arasında sayılıyor.

> Özetle: D vitamini eksikliği bir coğrafya sorunu değil, bir **yaşam tarzı** sorunu. Antalya'da yaşamak tek başına koruyucu değil.

## Eksikliğin belirtileri neler?

Sinsi ilerliyor ve çoğu belirti başka şeylere yorulabiliyor:

- Kronik yorgunluk ve halsizlik
- Kas güçsüzlüğü, özellikle kalça ve uyluk bölgesinde
- Kemik ve eklem ağrıları, sırt ağrısı
- Sık hastalanma
- Saç dökülmesi
- Duygu durumunda düşüklük, özellikle kış aylarında
- Yaraların geç iyileşmesi

Sporcularda ek olarak: toparlanmada yavaşlama, kas gücünde açıklanamayan düşüş ve stres kırığı riskinde artış.

## Sporcular için ayrı bir not

Kapalı salon branşlarında (voleybol, basketbol, salon futbolu) eksiklik özellikle yaygın; antrenman saatleri de genellikle güneşin dışında kalıyor.

Burada ölçülebilir bir karşılığı var: 267 dayanıklılık sporcusuyla yapılan bir gözlem çalışmasında, D vitamini düzeyi düşük olanlarda üst solunum yolu enfeksiyonu geçirme oranı, düzeyi uygun olanlara göre anlamlı biçimde yüksek bulunmuş.

Geniş bir meta-analizde D vitamini takviyesinin solunum yolu enfeksiyonlarına karşı koruyucu etkisi bildiriliyor; etki **başlangıçta eksikliği olanlarda belirgin olarak daha güçlü.** Ayrıca günlük veya haftalık düzenli dozlar, seyrek verilen yüksek "yükleme" dozlarından daha etkili bulunmuş.

## Ne yapmalı?

### Önce ölçün
Tahminle hareket edilmeyecek bir konu. İstenecek tetkik: **25(OH) D vitamini.** Değerlendirmede kullanılan eşikler laboratuvara göre değişiyor; yaygın olarak 20 ng/mL altı eksiklik kabul ediliyor.

### Güneşi doğru saatte kullanın
Mümkünse **gün ortasında, kol ve bacaklar açıkta, 15–30 dakika.** Cam arkasından alınan güneş işe yaramıyor — cam UVB'yi geçirmiyor. Antalya'nın avantajı burada devreye giriyor: yılın büyük bölümünde bu mümkün.

Cilt kanseri riski açısından denge önemli: kızarıklık oluşturacak kadar uzun kalmak gerekmiyor, zaten fayda o noktadan önce doyuma ulaşıyor.

### Besinlerden beklentiyi doğru kurun
D vitamini besinlerden yeterince alınabilen bir vitamin değil. Yine de kaynaklar:

| Kaynak | Not |
|---|---|
| Yağlı balıklar (somon, uskumru, sardalya, hamsi) | En iyi doğal kaynak |
| Yumurta sarısı | Katkısı mütevazı |
| D vitamini eklenmiş süt ve ürünleri | Etikette belirtilmişse |
| Mantar (UV'ye maruz bırakılmış) | Bitkisel tek anlamlı kaynak |

Haftada 2–3 kez yağlı balık iyi bir alışkanlık ama tek başına eksikliği kapatmıyor.

### Takviye kararı hekime ait
D vitamini yağda çözünen bir vitamin; vücutta birikebiliyor ve aşırı alımı zararlı. Doz, **mevcut kan düzeyine göre** belirlenmeli. "Herkese şu kadar" yaklaşımı doğru değil.

Takviye başlandıysa, **kontrol tahlili** genellikle 8–12 hafta sonra isteniyor.

⚠️ Böbrek taşı öyküsü, sarkoidoz, hiperkalsemi veya kalp ilacı kullanımı varsa doz kararı ayrıca değerlendirilmeli.

---

Bu yazı genel bilgilendirme amaçlıdır. D vitamini takviyesi, kan düzeyi görülmeden ve hekim değerlendirmesi yapılmadan başlanmamalıdır.
`,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "zayiflama-ignesi-oncesi-degerlendirme",
    title: "Zayıflama İğnesine Başlamadan Önce Neler Değerlendirilmeli?",
    excerpt:
      "GLP-1 tedavisine başlamadan önce hekimin sorduğu sorular ve bakılan değerler. Hangileri mutlak engel, hangileri sadece dikkat gerektiriyor ve bunların beslenme planına etkisi ne?",
    answer:
      "GLP-1 tedavisi öncesi en kritik adım bir kan tahlili değil, **öykü sorgusudur**: ailede veya kişide medüller tiroid kanseri (MTC) ya da MEN2 sendromu varlığı mutlak engeldir. Pankreatit öyküsü, aktif safra kesesi hastalığı ve gebelik de engeller arasındadır. Laboratuvar tarafında ise HbA1c, böbrek-karaciğer fonksiyonları ve lipid paneli yaygın başlangıç değerlendirmesidir.",
    category: "Kilo Yönetimi",
    tags: ["zayıflama iğnesi", "GLP-1", "Mounjaro", "Ozempic", "tahlil", "kontrendikasyon"],
    author: "Dyt. Ali Koşar",
    publishedAt: "2026-10-20",
    readTime: "8 dk okuma",
    image: "/images/blog/zayiflama-ignesi-oncesi-degerlendirme.jpg",
    featured: true,
    content: `
## Önce sınırı çizelim

Bu yazı bir reçete rehberi değil. **GLP-1 grubu ilaçlar reçeteye tabidir ve başlama kararı hekime aittir.** Diyetisyenler ilaç yazmaz, tahlil istemez, doz belirlemez.

Peki neden bu yazı?

Çünkü klinikte gelen danışanların önemli bir kısmı iğneye çoktan başlamış oluyor ve elimizde hiçbir başlangıç verisi olmuyor. Oysa sürecin beslenme tarafı tam olarak o verilerin üzerine kuruluyor. Bu yazı, **hekiminizle yapacağınız görüşmeye hazırlıklı gitmeniz** ve o değerlerin beslenme planı açısından ne anlama geldiğini bilmeniz için.

## En önemli adım bir tahlil değil: öykü

Bu sürpriz oluyor ama en kritik tarama laboratuvarda değil, muayenehanede konuşarak yapılıyor.

### Mutlak engeller

| Durum | Neden |
|---|---|
| Kişide veya ailede **medüller tiroid kanseri (MTC)** | Kutulu uyarı; kemirgen çalışmalarında tiroid C hücre tümörü gözlenmiş |
| **MEN2** (Multipl Endokrin Neoplazi tip 2) sendromu | Aynı gerekçe |
| **Gebelik** | Gebelikte kullanım kontrendike |

MTC ve MEN2 için yapılması gereken şey basit bir soru: ailenizde tiroid kanseri öyküsü var mı? Bu sorunun yerini tutacak rutin bir kan testi **yok** — ve önemli bir yanlış anlama burada:

> **TSH, MTC taraması değildir.** TSH tiroidin çalışıp çalışmadığını gösterir; kutulu uyarının konusu olan kanseri taramaz. Rutin kalsitonin taraması da önerilmiyor.

Tiroidinizde bilinen bir nodül varsa, hekiminiz başlamadan önce ultrason ve ek değerlendirme isteyebilir.

### Dikkat gerektiren durumlar

- **Pankreatit öyküsü.** Geçirilmiş pankreatit, GLP-1 için genellikle uygun olmayan bir zemin kabul ediliyor.
- **Aktif safra kesesi hastalığı veya safra taşı öyküsü.** İlacın yol açtığı hızlı kilo kaybı zaten safra taşı riskini artırıyor; mevcut öykü bu riski birleştiriyor. [GLP-1 ve safra kesesi ilişkisini ayrıntılı anlattığım sayfa burada.](/glp1-safra-kesesi-sorunlari)
- **İleri böbrek yetmezliği.** Doz ve uygunluk ayrıca değerlendiriliyor.
- **Ciddi mide-bağırsak hastalığı, gastroparezi.** İlaç zaten mide boşalmasını yavaşlatıyor.
- **Yeme bozukluğu öyküsü.** İştah baskılayan bir ilacın bu tabloda kullanımı ayrı bir değerlendirme gerektiriyor.

## Yaygın olarak bakılan başlangıç değerleri

Dürüst bir not: **ilaç prospektüsleri herkese zorunlu bir başlangıç paneli şart koşmuyor.** Aşağıdakiler klinik pratikte yaygın olarak istenen tetkikler; hekimden hekime değişebiliyor.

| Tetkik | Ne için bakılıyor | Beslenme planına etkisi |
|---|---|---|
| HbA1c, açlık glukozu | Metabolik durum, diyabet varlığı | Karbonhidrat planının kurgusu |
| Böbrek fonksiyonları (üre, kreatinin, eGFR) | İlaç uygunluğu | **Protein hedefinin üst sınırı** |
| Karaciğer fonksiyonları (ALT, AST) | Yağlı karaciğer, güvenlik | Takip parametresi |
| Lipid paneli | Kardiyovasküler risk | Yağ kaynağı seçimi |
| Hemogram, ferritin | Demir durumu | Alım düşerken eksiklik riski |
| B12, D vitamini | Mikrobesin durumu | **Süreçte en sık düşen değerler** |
| TSH | Tiroid işlevi | Metabolik yorumlama |
| Lipaz / amilaz | Sonradan karın ağrısı olursa karşılaştırma zemini | — |
| **Vücut kompozisyonu** | Başlangıç yağsız kütlesi | Kas kaybı takibinin tek referansı |

Son satır benim en çok ısrar ettiğim madde ve çoğu zaman hiç yapılmıyor. **Başlangıçtaki yağsız kütlenizi bilmiyorsanız, kas kaybedip kaybetmediğinizi sonradan ölçemezsiniz.** Tartı bunu göstermiyor. [Bu konuyu ayrıntılı yazdığım sayfa burada.](/glp1-kas-kaybi-onleme)

## Hekiminize söylemeniz gerekenler

Öykü sorgusu çift yönlü; sizin de söylemeniz gerekenler var:

1. **Kullandığınız tüm ilaçlar ve takviyeler.** Liste hâlinde, dozlarıyla.
2. **Doğum kontrol yöntemi.** Tirzepatid kullananlarda önemli bir detay var: ilaç mide boşalmasını yavaşlattığı için ağızdan alınan doğum kontrol haplarının emilimini etkileyebiliyor. **Başlangıçtan ve her doz artışından sonraki 4 hafta boyunca** yedek veya ağızdan olmayan bir yöntem öneriliyor.
3. **Planlanmış ameliyat, endoskopi veya anestezi.** Bu kritik: güncel prospektüslerde mide boşalmasının yavaşlamasına bağlı **akciğere kaçma (aspirasyon)** uyarısı var. Ameliyat olacaksanız anestezi ekibinin GLP-1 kullandığınızı bilmesi gerekiyor.
4. **Daha önce iğne kullandıysanız** hangi molekül, hangi doz, ne kadar süre ve neden bıraktığınız.

## Başlamadan önce beslenme tarafında ne kurulmalı?

İlaç başladıktan sonra iştah baskılanıyor ve alışkanlık kurmak zorlaşıyor. Bu yüzden şu üçünü **başlamadan önce** oturtmak büyük fark yaratıyor:

1. **Protein alışkanlığı.** Her öğünde bir protein kaynağı bulundurma refleksi, iştah kapandığında hayat kurtarıyor. Hedef, aktif kilo kaybı döneminde günde kilogram başına 1,2–1,6 gram.
2. **Direnç antrenmanı rutini.** Haftada 2–3 gün. İlaç başladıktan sonra başlamak, hem motivasyon hem de kas koruması açısından daha zor.
3. **Öğün düzeni.** Öğün atlamamak, safra kesesi riski açısından da önemli.

> Klinikte gözlemim şu: iğneye başlamadan önce bu üçünü kurmuş olan danışanlarda süreç belirgin biçimde daha konforlu geçiyor ve ilaç sonrası dönemde geri alım çok daha az oluyor.

## Hangi belirtide hemen hekime?

Süreç boyunca şu belirtiler beklemeden değerlendirilmeli:

- Şiddetli ve geçmeyen karın ağrısı, özellikle **sırta vuruyorsa**
- İnatçı kusma, sıvı alamama
- Sağ üst karında ağrı, ateş, gözlerde sararma
- Belirgin halsizlik, bayılma hissi, idrar azalması

---

Bu yazı genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. GLP-1 grubu ilaçlara başlama, doz değiştirme ve bırakma kararları yalnızca hekiminiz tarafından verilir. [Sürecin beslenme tarafını anlattığım ana sayfa burada.](/zayiflama-ignesi-diyetisyeni-antalya)
`,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "sporcuda-bagisiklik-ve-beslenme",
    title: "Sezon İçi Hastalanmamak: Sporcuda Bağışıklık ve Beslenme",
    excerpt:
      "Yoğun antrenman dönemi ile hastalanma sıklığı arasındaki ilişki sanıldığı kadar net değil. Kanıtı güçlü olan müdahaleler hangileri, hangileri sadece pazarlama?",
    answer:
      "Sporcuda bağışıklığı korumanın kanıtı en güçlü üç müdahalesi şudur: uzun antrenmanlarda **saatte en az 30 gram karbonhidrat** almak, **D vitamini eksikliğini gidermek** ve glikojeni tükenmiş halde ağır çalışmaktan kaçınmak. Çinko, hastalığı önlemede değil, belirtiler başladıktan sonraki **ilk 24 saatte** süreyi kısaltmada işe yarıyor.",
    category: "Sporcu Beslenmesi",
    tags: ["bağışıklık", "sporcu beslenmesi", "D vitamini", "çinko", "karbonhidrat", "sezon"],
    author: "Dyt. Ali Koşar",
    publishedAt: "2026-10-23",
    readTime: "8 dk okuma",
    image: "/images/blog/sporcuda-bagisiklik-ve-beslenme.jpg",
    content: `
## Ekim, sezonun en kritik ayı

Hazırlık dönemi bitti, maç takvimi başladı, havalar değişti. Bu üçü üst üste geldiğinde kadroda dolaşan üst solunum yolu enfeksiyonu kaçınılmaz görünüyor.

Kaçınılmaz değil ama tamamen de önlenemiyor. Önce konunun bilimsel durumunu dürüstçe koyalım, sonra pratiğe geçelim.

## "Ağır antrenman bağışıklığı düşürür" ne kadar doğru?

Bu fikrin adı **J eğrisi.** 1994'te Nieman tarafından öne sürülen model şunu söylüyor: orta şiddetli egzersiz enfeksiyon riskini düşürür, aşırı yoğun ve uzun egzersiz ise yükseltir.

Modele eşlik eden kavram **"açık pencere"**: ağır bir efordan sonra bağışıklığın geçici olarak baskılandığı, yaklaşık **3–72 saat** süren dönem.

Ama burada dürüst olmak gerekiyor: **bu model tartışmalı.** Bazı derlemeler, objektif verilerin egzersiz ile bağışıklık arasında net bir J şeklinde doz-yanıt ilişkisi göstermediği sonucuna varıyor. Enfeksiyon verilerinin önemli kısmı epidemiyolojik; en yüksek hacimli koşucularda risk hafif yüksek görünüyor ama bu da ancak çeşitli karıştırıcı faktörler kontrol edildiğinde ortaya çıkıyor.

> Pratik çıkarım: "ağır antrenman beni hasta eder" demek abartı. Ama ağır dönemde yetersiz enerji, yetersiz uyku ve seyahat stresi üst üste binerse risk gerçekten artıyor.

## Kanıtı en güçlü müdahale: karbonhidrat

Bu alanda en sağlam mekanistik veri karbonhidratta.

2023 tarihli bir sistematik derleme, uzun süreli egzersizde **saatte en az 30 gram karbonhidrat** alımının çalışmaların çoğunda kortizol artışını azalttığını; adrenalin düzeylerinin ise tüm çalışmalarda plaseboya göre belirgin biçimde düşük kaldığını bildiriyor.

Daha önceki derlemeler de benzer sonucu veriyor: egzersiz sırasında karbonhidratlı içecek alanlarda kortizol, büyüme hormonu ve adrenalin yanıtı baskılanıyor, kan bağışıklık hücresi sayılarındaki dalgalanma azalıyor ve sitokin yanıtı yumuşuyor.

Tersi de doğru: **glikojeni tükenmiş halde yapılan egzersiz, bağışıklık üzerindeki olumsuz etkileri büyütüyor.**

Önemli bir ayrım: aynı derlemelerde **glutaminin** bu etkiyi göstermediği belirtiliyor. Karbonhidrat işe yarıyor, glutamin yaramıyor.

### Pratiğe çevirisi

| Antrenman süresi | Öneri |
|---|---|
| 60 dakikanın altı | Ek karbonhidrata gerek yok, su yeterli |
| 60–90 dakika | Saatte 30 g civarı karbonhidrat |
| 90 dakika üstü | Saatte 30–60 g, sodyumla birlikte |
| Çift antrenman günü | Aradaki öğünde glikojen doldurma önceliği |

Ve sezon içinde en sık yaptığım uyarı: **ağır bir haftada karbonhidratı kısmak, hastalanma riskini artırmanın en kolay yolu.**

## İkinci sırada: D vitamini

Sporcularda enfeksiyon açısından doğrudan verisi en iyi olan mikrobesin.

267 dayanıklılık sporcusuyla yapılan bir gözlem çalışmasında D vitamini düzeyi düşük olanlarda üst solunum yolu enfeksiyonu geçirme oranı anlamlı biçimde yüksek bulunmuş.

Geniş bir meta-analizde D vitamini takviyesinin solunum yolu enfeksiyonu riskini azalttığı bildiriliyor (olasılık oranı 0,88); etki **başlangıçta eksikliği olanlarda çok daha belirgin** (0,30). Ayrıca günlük veya haftalık düzenli dozlar, seyrek yüksek "yükleme" dozlarından daha etkili.

Kapalı salon branşlarında (voleybol, basketbol) ve kış aylarında eksiklik yaygın. [Antalya'da bile D vitamini eksikliğinin neden bu kadar sık görüldüğünü ayrı bir yazıda ele aldım.](/blog/antalyada-d-vitamini-eksikligi)

⚠️ Takviye kararı kan düzeyi görülmeden verilmemeli; D vitamini yağda çözünen bir vitamin ve birikebiliyor.

## Çinko: zamanlama her şey

Çinkoda yaygın bir yanlış kullanım var.

2017 tarihli bir meta-analiz, günde **75 mg elementel çinko** sağlayan pastillerin soğuk algınlığı süresini yaklaşık **%33 kısaltabildiğini** gösteriyor. Ama kritik koşul şu: **belirtilerin başlamasından sonraki ilk 24 saat içinde** başlanması gerekiyor.

Buna karşılık düzenli yüksek doz çinko takviyesinin enfeksiyonu **önlediğine** dair destek yok.

> Yani çinko bir kalkan değil, bir müdahale. Boğazınız yanmaya başladığı gün işe yarıyor; her gün almak koruma sağlamıyor.

## Kanıt haritası

| Müdahale | Kanıt | Not |
|---|---|---|
| Yeterli enerji ve karbonhidrat | Güçlü | Saatte ≥30 g; glikojen tükenmişliğinden kaçın |
| D vitamini eksikliğini gidermek | Orta–güçlü | Etki özellikle eksikliği olanlarda |
| Uyku (7+ saat) | Güçlü | Hiçbir takviye yetersiz uykuyu telafi etmiyor |
| Çinko pastil | Orta | Yalnızca ilk 24 saatte, tedavi amaçlı |
| Beta-glukan | Zayıf–orta | Bir çalışmada %19 şiddet azalması |
| Probiyotikler | Belirsiz | Sporcuda net sonuç yok |
| Yüksek doz antioksidan vitaminler | Yok | Egzersize bağlı baskılanmayı önlediğine dair kanıt yok |
| Glutamin | Yok | Karbonhidratın etkisini göstermiyor |

Son iki satır önemli: **yüksek doz C vitamini ve antioksidan yüklemesi** bu alanda en çok satılan ama kanıtı en zayıf grup.

## Sezon içi pratik protokol

1. **Enerjiyi kısmayın.** Maç haftasında kilo vermeye çalışmak, hastalanmanın en kolay yolu.
2. **Uzun antrenmanlarda karbonhidrat alın.** Saatte 30 g'dan başlayın.
3. **D vitamini durumunuzu bilin.** Sezon öncesi panelde zaten bakılıyorsa takip edin.
4. **Uykuyu antrenman kadar ciddiye alın.** 7 saatin altı pazarlık konusu değil.
5. **Seyahat ve deplasmanda hijyen.** El yıkama, ortak şişe kullanmama, uçak/otobüs sonrası dinlenme.
6. **Belirti başlarsa çinko pastili ilk 24 saatte** — ve antrenman şiddetini düşürün.
7. **Sistemik belirti varsa (ateş, kas ağrısı, halsizlik) antrenman ve müsabakadan uzak durun.** Bu, kardiyak komplikasyon riski açısından da önemli.

Son madde en çok ihlal edileni. Boyundan yukarı hafif belirtiler (burun akıntısı, hafif boğaz ağrısı) genellikle hafif antrenmana engel değil; ama **ateş varsa sahaya çıkılmaz.**

---

Bu yazı genel bilgilendirme amaçlıdır. Takviye kullanımı ve hastalık döneminde antrenmana devam kararı hekiminizle birlikte verilmelidir.
`,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "gunluk-protein-ihtiyaci-hesaplama",
    title: "Günde Kaç Gram Protein? Gruplara Göre Hesaplama Rehberi",
    excerpt:
      "Sedanter biri, sporcu, zayıflama iğnesi kullanan biri ve sakatlık dönemindeki bir sporcu aynı protein hedefini paylaşmıyor. Kendi hedefinizi hesaplamak için tablo ve örnekler.",
    answer:
      "Protein ihtiyacı tek bir sayı değil, duruma göre değişir: hareketsiz bir yetişkinde kilogram başına günde 0,8–1,0 gram, düzenli antrenman yapan sporcuda 1,4–2,0 gram, GLP-1 ile kilo verirken 1,2–1,6 gram, sakatlık ve immobilizasyon döneminde 2,0–2,5 gramdır. Toplam kadar önemli olan dağılımdır: öğün başına 0,3–0,4 g/kg.",
    category: "Beslenme İpuçları",
    tags: ["protein", "hesaplama", "sporcu beslenmesi", "kas kaybı", "yaşlanma", "öğün planı"],
    author: "Dyt. Ali Koşar",
    publishedAt: "2026-10-27",
    readTime: "7 dk okuma",
    image: "/images/blog/gunluk-protein-ihtiyaci-hesaplama.jpg",
    content: `
## "Günde kaç gram protein almalıyım?"

Klinikte en sık sorulan soru bu ve tek bir cevabı yok. Çünkü protein ihtiyacını belirleyen şey sadece kilo değil; ne yaptığınız, hangi dönemde olduğunuz ve hedefiniz.

Aşağıdaki tablo başlangıç noktanızı veriyor. Hesap basit: **kilonuzu aralıktaki sayılarla çarpın.**

## Gruplara göre hedefler

| Durum | Günlük protein (kg başına) | 70 kg için |
|---|---|---|
| Hareketsiz yetişkin | 0,8 – 1,0 g | 56 – 70 g |
| Düzenli hareket eden (haftada 2–3 gün) | 1,2 – 1,4 g | 84 – 98 g |
| **Düzenli antrenman yapan sporcu** | **1,4 – 2,0 g** | 98 – 140 g |
| Kas kazanma dönemi | 1,6 – 2,2 g | 112 – 154 g |
| **Kilo verme dönemi (kas koruma)** | **1,6 – 2,4 g** | 112 – 168 g |
| **GLP-1 / zayıflama iğnesi süreci** | **1,2 – 1,6 g** | 84 – 112 g |
| **Sakatlık ve immobilizasyon** | **2,0 – 2,5 g** | 140 – 175 g |
| 65 yaş üstü | 1,2 – 1,5 g | 84 – 105 g |
| Gebelik (2. ve 3. trimester) | 1,1 – 1,5 g | 77 – 105 g |

Üç satır özellikle dikkat çekici ve sık yanlış biliniyor:

### Kilo verirken protein *artar*, azalmaz
Enerji açığında vücut kas dokusunu da yakıt olarak değerlendiriyor. Proteini yükseltmek, kaybın yağdan gelmesini sağlayan ana kaldıraç.

### Sakatlıkta en yüksek seviyede
Antrenman durduğu için ihtiyaç düşüyor sanılıyor; tam tersi. Hareketsiz kalan kasta **protein sentezine direnç** gelişiyor — aynı miktar protein eskisi kadar iyi kullanılamıyor. Bu yüzden sinyali güçlendirmek gerekiyor. [Sakatlık dönemi beslenmesini ayrıntılı anlattığım sayfa burada.](/sporcu-sakatligi-beslenmesi)

### Yaş ilerledikçe ihtiyaç artar
65 yaş üstünde de aynı direnç mekanizması devreye giriyor. "Yaşlandım, az yemeliyim" yaklaşımı sarkopeniye giden yol.

## Toplam kadar önemli: dağılım

En sık yapılan hata, günlük hedefi tutturup hepsini akşam yemeğinde toplamak.

Kas protein sentezi, öğün başına belirli bir eşik aşıldığında uyarılıyor. Pratik hedef **öğün başına 0,3–0,4 g/kg** — 70 kiloluk biri için yaklaşık **21–28 gram.**

| Dağılım | 70 kg · günde 112 g protein |
|---|---|
| ❌ Kötü | Kahvaltı 10 g · Öğle 20 g · Akşam 82 g |
| ✅ İyi | Kahvaltı 28 g · Öğle 30 g · Ara 22 g · Akşam 32 g |

İkisinin günlük toplamı aynı; kas üzerindeki etkisi aynı değil.

## 25–30 gram protein neye denk geliyor?

| Besin | Miktar | Protein |
|---|---|---|
| Tavuk göğsü (pişmiş) | 100 g | ~30 g |
| Kırmızı et (pişmiş) | 100 g | ~28 g |
| Somon / uskumru | 120 g | ~26 g |
| Yumurta | 4 adet | ~25 g |
| Süzme peynir / lor | 150 g | ~25 g |
| Yoğurt (süzme) | 250 g | ~25 g |
| Mercimek (pişmiş) | 2,5 su bardağı | ~25 g |
| Nohut (pişmiş) | 2,5 su bardağı | ~25 g |
| Kefir | 500 ml | ~17 g |
| Whey protein tozu | 1 ölçek | ~24 g |

Baklagil satırlarındaki miktarlar dikkat çekici: bitkisel kaynaklarla aynı proteine ulaşmak **belirgin biçimde daha fazla hacim** gerektiriyor. Vejetaryen ve vegan beslenenlerde günlük hedefi tutturmak bu yüzden daha fazla planlama istiyor.

## Sık sorulan üç soru

### "Fazla protein böbreğe zarar verir mi?"
Böbrek fonksiyonları normal olan sağlıklı bireylerde yüksek protein alımının böbrek hasarına yol açtığına dair kanıt yok. **Ancak mevcut böbrek hastalığı olanlarda durum tamamen farklı:** bu grupta protein miktarı hekim ve diyetisyen tarafından ayrıca belirlenir ve yukarıdaki tablodaki değerler geçerli değildir.

### "Protein tozu şart mı?"
Hayır. Protein tozu bir besin değil, pratiklik aracı. Hedefe yemekle ulaşabiliyorsanız gerek yok. İştahın baskılı olduğu GLP-1 sürecinde veya öğün hazırlamanın mümkün olmadığı durumlarda işe yarıyor. [GLP-1 sürecinde kas korumayı ayrıntılı anlattığım sayfa burada.](/glp1-kas-kaybi-onleme)

### "Antrenmandan hemen sonra almazsam kaybeder miyim?"
Hayır. "30 dakikalık anabolik pencere" abartılmış bir kavram; günlük toplam ve dağılım daha belirleyici. Ancak günde iki antrenman yapıyorsanız veya 24 saatten kısa sürede tekrar sahaya çıkacaksanız zamanlama gerçekten önem kazanıyor. [Toparlanma protokollerini burada ayrıntılandırdım.](/atletik-performans-beslenmesi)

## Kendi hedefinizi belirlerken

1. Tablodan **durumunuza uyan satırı** seçin
2. Kilonuzla çarpın, günlük hedefinizi bulun
3. **Öğün sayısına bölün** — her öğünde 25–35 g hedefleyin
4. Bir hafta boyunca ne aldığınızı kabaca takip edin; çoğu kişi tahmin ettiğinden az alıyor
5. 4–8 haftada bir **vücut kompozisyonu ölçümüyle** sonucu kontrol edin

Son madde kritik: tartı, aldığınız proteinin işe yarayıp yaramadığını göstermiyor. Yağsız kütlenizin yönünü görmek gerekiyor.

---

Bu yazı genel bilgilendirme amaçlıdır. Böbrek hastalığı, karaciğer hastalığı veya gebelik durumunda protein hedefi mutlaka hekim ve diyetisyen değerlendirmesiyle belirlenmelidir.
`,
  },
];
