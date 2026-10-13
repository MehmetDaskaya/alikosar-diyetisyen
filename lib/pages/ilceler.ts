import type { LandingData } from "../landing-types";
import { site } from "../site";

/**
 * İlçe / semt sayfaları.
 *
 * Yerel SEO'da bu sayfalar işe yarar ama **ince içerikle** yapıldığında
 * doorway page sayılır ve cezalandırılır. Bu yüzden her sayfa o bölgeye
 * özgü gerçek bilgi taşır: ulaşım, semt referansları, o bölgedeki tipik
 * danışan profili ve bölgeye özgü bir beslenme sorunu.
 */

export interface Ilce {
  slug: string;
  name: string;
  /** Tamlama eki: "Konyaaltı'nda", "Kepez'de" */
  locative: string;
  ablative: string;
  mahalleler: string[];
  ulasim: string;
  profil: string;
  ozgun: { heading: string; body: string[] };
  soru: { question: string; answer: string };
}

export const ilceler: Ilce[] = [
  {
    slug: "muratpasa",
    name: "Muratpaşa",
    locative: "Muratpaşa'da",
    ablative: "Muratpaşa'dan",
    mahalleler: ["Şirinyalı", "Fener", "Meltem", "Bahçelievler", "Işıklar", "Kızıltoprak", "Yeşilbahçe", "Deniz Mahallesi"],
    ulasim:
      "Klinik zaten Muratpaşa sınırları içinde, Şirinyalı Mahallesi'nde. Fener, Meltem ve Yeşilbahçe'den yürüme veya birkaç dakikalık araç mesafesinde; Işıklar ve Kızıltoprak yönünden toplu taşımayla 10–15 dakika sürüyor.",
    profil:
      "Muratpaşa, Antalya'nın en yoğun ofis ve hizmet sektörü nüfusunu barındırıyor. Klinikte bu bölgeden gelen danışanlarda en sık karşılaşılan tablo, uzun masa başı saatleri + düzensiz öğün + akşam yüklenmesi üçlüsü.",
    ozgun: {
      heading: "Muratpaşa'da masa başı çalışanlarda en sık gördüğüm tablo",
      body: [
        "Sabah kahvaltı atlanıyor, öğle yemeği ofis civarında hızlı bir şeyle geçiştiriliyor ve günün kalorisinin büyük bölümü akşam 20:00'den sonra alınıyor. Bu düzen kilo aldırmakla kalmıyor; öğleden sonra enerji düşüşü, akşam kontrolsüz atıştırma ve uyku kalitesinde bozulma yaratıyor.",
        "Çözüm çoğu zaman kalori kısmak değil, **enerjiyi gün içine yeniden dağıtmak** oluyor. Kahvaltıda 20–30 gram proteine ulaşmak, öğleyi ofiste uygulanabilir bir yapıya oturtmak ve akşam öğününü öne çekmek — üçü birlikte, hiçbir yasak koymadan tabloyu değiştiriyor.",
        "Muratpaşa'nın bir avantajı da yürünebilir olması: öğle arasında 15 dakikalık bir yürüyüş, öğün sonrası kan şekeri tepesini belirgin biçimde düşürüyor.",
      ],
    },
    soru: {
      question: "Muratpaşa'da diyetisyen randevusu nasıl alınır?",
      answer:
        `Uzm. Dyt. Ali Koşar'ın kliniği Muratpaşa Şirinyalı Mahallesi'ndedir. Randevu için ${site.phoneDisplay} numarasından telefonla veya WhatsApp üzerinden ulaşabilir, ya da iletişim sayfasındaki randevu formunu doldurabilirsiniz. Hafta içi 09:00–18:00, cumartesi 10:00–14:00 saatleri arasında görüşme yapılmaktadır.`,
    },
  },
  {
    slug: "konyaalti",
    name: "Konyaaltı",
    locative: "Konyaaltı'nda",
    ablative: "Konyaaltı'ndan",
    mahalleler: ["Liman", "Arapsuyu", "Uncalı", "Hurma", "Sarısu", "Pınarbaşı", "Gürsu", "Molla Yusuf"],
    ulasim:
      "Konyaaltı'ndan Şirinyalı'daki kliniğe sahil yolu üzerinden ortalama 15–20 dakika sürüyor. Liman, Arapsuyu ve Uncalı'dan toplu taşıma bağlantısı da mevcut.",
    profil:
      "Konyaaltı, Antalya'nın en aktif spor nüfusuna sahip bölgelerinden biri. Sahil koşu ve bisiklet parkuru, salonlar ve açık hava antrenman alanları nedeniyle buradan gelen danışanların önemli bir bölümü düzenli antrenman yapıyor.",
    ozgun: {
      heading: "Konyaaltı'nda koşu ve bisiklet yapanlarda beslenme",
      body: [
        "Sahil parkurunda düzenli koşan veya bisiklet süren danışanlarda en sık gördüğüm hata, antrenmanı artırırken beslenmeyi aynı bırakmak. Haftada 40–50 kilometre koşan biri, sedanter bir kişinin beslenme planıyla ilerlediğinde enerji uygunluğu düşüyor: toparlanma yavaşlıyor, sakatlık riski artıyor ve performans platoya giriyor.",
        "Antalya'nın sıcak aylarında ikinci sorun hidrasyon. Sahilde saat 11:00'de yapılan bir koşuda ter kaybı, aynı mesafenin serin bir günde koşulmasına göre çok daha yüksek oluyor. Ter oranı ölçümü yapılmadan sıvı planı kurmak tahmine dayanıyor.",
        "Üçüncüsü demir. Özellikle kadın koşucularda ferritin düşüklüğü, \"formsuzluk\" diye yorumlanan performans düşüşünün en sık sebeplerinden biri ve basit bir kan tahliliyle görülebiliyor.",
      ],
    },
    soru: {
      question: "Konyaaltı'ndan Şirinyalı'daki kliniğe ulaşım ne kadar sürüyor?",
      answer:
        "Konyaaltı'ndan (Liman, Arapsuyu, Uncalı bölgeleri) Şirinyalı'daki kliniğe sahil yolu üzerinden ortalama 15–20 dakika sürer. Yoğun saatlerde bu süre uzayabilir. Ulaşımı zor bulan Konyaaltı danışanları için online takip seçeneği de mevcuttur.",
    },
  },
  {
    slug: "lara",
    name: "Lara",
    locative: "Lara'da",
    ablative: "Lara'dan",
    mahalleler: ["Güzeloba", "Şirinyalı", "Fener", "Çağlayan", "Kızılarık", "Güzelyalı"],
    ulasim:
      "Lara bölgesi kliniğe en yakın bölgelerden biri. Güzeloba, Çağlayan ve Fener'den Şirinyalı'daki kliniğe araçla 5–12 dakika sürüyor.",
    profil:
      "Lara'da iki ayrı danışan profili öne çıkıyor: otel ve turizm sektöründe vardiyalı çalışanlar ile bölgedeki spor salonlarında düzenli antrenman yapan grup.",
    ozgun: {
      heading: "Vardiyalı çalışanlarda beslenme neden farklı planlanır?",
      body: [
        "Turizm sektöründe çalışan danışanların büyük kısmı sabit bir öğün saatine sahip değil. Gece vardiyası, açık büfe erişimi ve düzensiz uyku bir araya geldiğinde standart bir \"üç ana öğün, iki ara öğün\" planı uygulanabilir olmuyor.",
        "Bu grupta plan, saatlere değil **vardiya düzenine** göre kuruluyor: uyanışa göre birinci öğün, vardiya ortasında ana öğün, vardiya sonunda hafif bir kapanış. Gece 03:00'te yenen ağır bir öğün hem uykuyu hem de ertesi günün kan şekeri yanıtını bozuyor.",
        "Açık büfe erişimi olan çalışanlarda ise mesele kısıtlama değil, **seçim stratejisi**. Tabak sırası, porsiyon büyüklüğü ve protein önceliği üzerine kurulan basit bir kural seti, yasak listesinden çok daha uygulanabilir oluyor.",
      ],
    },
    soru: {
      question: "Lara'da diyetisyen arıyorum, klinik nerede?",
      answer:
        `Klinik Muratpaşa Şirinyalı Mahallesi'nde, Lara bölgesine oldukça yakın konumdadır. Güzeloba, Çağlayan ve Fener'den araçla ortalama 5–12 dakika sürer. Randevu için ${site.phoneDisplay} numarasından ulaşabilirsiniz.`,
    },
  },
  {
    slug: "kepez",
    name: "Kepez",
    locative: "Kepez'de",
    ablative: "Kepez'den",
    mahalleler: ["Varsak", "Habipler", "Gündoğdu", "Santral", "Ahatlı", "Şafak", "Yeşilyurt", "Fabrikalar"],
    ulasim:
      "Kepez'den Şirinyalı'daki kliniğe araçla ortalama 20–25 dakika sürüyor. Antray hattı ve otobüs bağlantılarıyla toplu taşıma erişimi de mevcut.",
    profil:
      "Kepez, Antalya'nın en genç nüfuslu ilçelerinden. Buradan gelen danışanlarda okul çağı çocukları, genç sporcular ve aile bazlı beslenme düzenlemeleri ağırlıkta.",
    ozgun: {
      heading: "Aile olarak beslenme düzeni kurmak",
      body: [
        "Kepez'den gelen danışanlarda sık karşılaştığım durum, sorunun tek kişide değil evin düzeninde olması. Anne diyet yaparken evde ayrı yemek pişirmek uzun vadede sürdürülebilir olmuyor; çocuk için hazırlanan \"özel\" menü ise onu diğerlerinden ayırdığı için çoğu zaman geri tepiyor.",
        "Bu yüzden bu grupta plan çoğunlukla **tek mutfak, farklı porsiyon** mantığıyla kuruluyor: aynı yemek herkese, porsiyon ve garnitür kişiye göre. Bu yaklaşım hem uygulanabilir hem de çocukta yasak-ödül döngüsü kurmadığı için daha sağlıklı.",
        "Büyüme çağındaki çocuklarda ve genç sporcularda hedef asla kilo vermek değil. Takip, tartıyla değil **büyüme eğrisiyle** yapılıyor; amaç boy uzarken vücut kompozisyonunun kendiliğinden yerine oturması.",
      ],
    },
    soru: {
      question: "Kepez'den kliniğe gelmek zor, online takip mümkün mü?",
      answer:
        "Mümkün. Kepez'den Şirinyalı'daki kliniğe araçla ortalama 20–25 dakika sürer; ulaşımı zor bulan danışanlar için görüşmeler online yapılabilir. Bu durumda ilk görüşmede vücut kompozisyonu ölçümü için tek seferlik bir klinik ziyareti önerilir, takip görüşmeleri online sürdürülür.",
    },
  },
  {
    slug: "sirinyali",
    name: "Şirinyalı",
    locative: "Şirinyalı'da",
    ablative: "Şirinyalı'dan",
    mahalleler: ["Şirinyalı", "Fener", "Meltem", "Deniz Mahallesi", "Yeşilbahçe"],
    ulasim:
      "Klinik doğrudan Şirinyalı Mahallesi'nde, 1507 Sokak üzerinde. Mahalle içinden yürüme mesafesinde.",
    profil:
      "Şirinyalı, kliniğin bulunduğu mahalle. Buradan gelen danışanlarda profil oldukça çeşitli: sporcular, GLP-1 süreci yürütenler ve klinik beslenme takibi yapılan kişiler.",
    ozgun: {
      heading: "Şirinyalı'daki klinikte bir ilk görüşme nasıl geçiyor?",
      body: [
        "İlk görüşme yaklaşık 45–60 dakika sürüyor ve büyük bölümü konuşarak geçiyor. Sağlık geçmişi, kullanılan ilaçlar, uyku düzeni, iş temposu, antrenman geçmişi ve daha önce denenen diyetler çıkarılıyor — çünkü hangi planın uygulanabilir olacağını belirleyen şey bunlar.",
        "Ardından vücut kompozisyonu ölçümü yapılıyor. Referans alınan değer kilo değil, **yağsız kütle** ve yağ oranı. Elinizde kan tahlili varsa birlikte değerlendiriliyor; yoksa hangi değerlerin baktırılmasının yararlı olacağı belirleniyor.",
        "Program görüşmede değil, sonrasında hazırlanıyor. Sebebi basit: bir plan ancak toplanan verinin üzerine kurulduğunda uygulanabilir oluyor.",
      ],
    },
    soru: {
      question: "Şirinyalı'daki klinik tam olarak nerede?",
      answer:
        `Klinik, Muratpaşa ilçesi Şirinyalı Mahallesi 1507 Sokak No:46 Kat:1 Daire:3 adresindedir. Çalışma saatleri hafta içi 09:00–18:00, cumartesi 10:00–14:00'tür. Randevu için ${site.phoneDisplay} numarasını arayabilir veya WhatsApp'tan yazabilirsiniz.`,
    },
  },
  {
    slug: "dosemealti",
    name: "Döşemealtı",
    locative: "Döşemealtı'nda",
    ablative: "Döşemealtı'ndan",
    mahalleler: ["Yeniköy", "Altınkale", "Çığlık", "Kovanlık", "Bahçeyaka"],
    ulasim:
      "Döşemealtı'ndan Şirinyalı'daki kliniğe araçla ortalama 30–35 dakika sürüyor. Bu mesafe nedeniyle bölgeden gelen danışanların çoğu hibrit takip tercih ediyor: ölçüm için klinik ziyareti, ara görüşmeler için online.",
    profil:
      "Döşemealtı, spor tesisleri ve kamp alanlarıyla Antalya'nın antrenman altyapısı açısından öne çıkan bölgelerinden. Buradan gelen danışanlarda kamp dönemi beslenmesi ve kulüp sporcusu takibi daha sık gündeme geliyor.",
    ozgun: {
      heading: "Kamp döneminde beslenme nasıl yönetilir?",
      body: [
        "Kamp, beslenme açısından sezonun en kritik dönemlerinden biri: antrenman yükü en yüksek, dinlenme en az ve yemek seçenekleri en sınırlı. Bu üçü bir araya geldiğinde enerji açığı hızla oluşuyor ve kamp bitiminde beklenen kazanım yerine yorgunluk kalıyor.",
        "Kamp planı, kişisel bir listeden çok **yemekhane menüsü üzerinden kurulan bir seçim rehberi** oluyor: hangi öğünde tabağa ne konur, antrenman öncesi ve sonrası ne alınır, çift antrenman gününde ara öğün nasıl kurulur.",
        "TFF gelişim kampı sürecinde alt yaş kategorileriyle çalışırken en çok vurguladığım nokta şu: bu yaş grubunda amaç kilo vermek değil, büyüme ve antrenman yükünü aynı anda karşılayacak enerjiyi sağlamak. Kısıtlama, gelişim çağındaki bir sporcuda kalıcı hasar bırakabilir.",
      ],
    },
    soru: {
      question: "Döşemealtı'ndan takip nasıl yapılıyor?",
      answer:
        "Döşemealtı'ndan Şirinyalı'daki kliniğe araçla ortalama 30–35 dakika sürer. Bu nedenle bölgeden gelen danışanlarda genellikle hibrit model tercih edilir: vücut kompozisyonu ölçümü için 4–8 haftada bir klinik ziyareti, ara görüşmeler ise online yapılır. Kulüp ve kamp çalışmalarında yerinde ziyaret de planlanabilir.",
    },
  },
];

export function ilceBySlug(slug: string): Ilce | undefined {
  return ilceler.find((i) => i.slug === slug);
}

/** İlçe verisinden tam bir landing sayfası üretir. */
export function ilceLanding(ilce: Ilce): LandingData {
  const otherIlceler = ilceler.filter((i) => i.slug !== ilce.slug).slice(0, 3);

  return {
    slug: `/antalya-diyetisyen/${ilce.slug}`,
    meta: {
      title: `${ilce.name} Diyetisyen | Dyt. Ali Koşar`,
      description: `${ilce.locative} diyetisyen arıyorsanız: sporcu beslenmesi, GLP-1 süreç takibi ve kilo yönetimi. Klinik Muratpaşa Şirinyalı'da, ${ilce.ablative} ${ilce.ulasim.match(/\d+–\d+ dakika/)?.[0] ?? "kısa sürede"}.`,
      keywords: [
        `${ilce.name.toLocaleLowerCase("tr")} diyetisyen`,
        `diyetisyen ${ilce.name.toLocaleLowerCase("tr")}`,
        `${ilce.name.toLocaleLowerCase("tr")} beslenme uzmanı`,
        "antalya diyetisyen",
        "sporcu beslenmesi antalya",
        "zayıflama iğnesi diyetisyeni",
      ],
    },
    crumbs: [
      { name: "Antalya Diyetisyen", path: "/antalya-diyetisyen" },
      { name: ilce.name, path: `/antalya-diyetisyen/${ilce.slug}` },
    ],
    eyebrow: `Antalya · ${ilce.name}`,
    h1: `${ilce.name} Diyetisyen — <em>Uzm. Dyt. Ali Koşar</em>`,
    answer: `${ilce.locative} diyetisyen arayanlar için: Uzm. Dyt. Ali Koşar'ın kliniği Muratpaşa **Şirinyalı Mahallesi**'nde bulunuyor. Uzmanlık alanları sporcu beslenmesi ve atletik performans, hekim kontrolündeki **GLP-1 (zayıflama iğnesi)** süreçleri ve biyokimya temelli metabolik takip. Randevu: **${site.phoneDisplay}**.`,
    intro: ilce.profil,
    about: ["Diyetisyen", ilce.name, "Antalya", "Beslenme danışmanlığı"],
    serviceType: "Beslenme ve diyet danışmanlığı",
    serviceName: `${ilce.name} beslenme ve diyet danışmanlığı`,
    sections: [
      {
        id: "ulasim",
        heading: `${ilce.ablative} kliniğe nasıl gelinir?`,
        tocLabel: "Ulaşım",
        body: [
          ilce.ulasim,
          `Klinik adresi: **Şirinyalı Mahallesi 1507 Sokak No:46 Kat:1 Daire:3, Muratpaşa / Antalya.** Çalışma saatleri hafta içi 09:00–18:00, cumartesi 10:00–14:00.`,
          `${ilce.name} bölgesinde yaygın olarak hizmet verilen mahalleler: ${ilce.mahalleler.join(", ")}.`,
        ],
      },
      {
        id: "ozgun",
        heading: ilce.ozgun.heading,
        tocLabel: "Bölgeye özgü",
        body: ilce.ozgun.body,
      },
      {
        id: "hizmetler",
        heading: `${ilce.locative} hangi konularda destek alabilirsiniz?`,
        tocLabel: "Hizmet başlıkları",
        body: [
          "Klinikte öne çıkan başlıklar aşağıdaki gibi. Her biri için ayrıntılı sayfaya geçebilirsiniz.",
        ],
        bullets: [
          { title: "Sporcu beslenmesi ve atletik performans", text: "Antalyaspor Kulübü voleybol takımı diyetisyenliği ve TFF gelişim kampı deneyimiyle; vücut kompozisyonu ölçümü, sezon periyodizasyonu ve supplement danışmanlığı." },
          { title: "Zayıflama iğnesi (GLP-1) süreç yönetimi", text: "Mounjaro, Ozempic ve Saxenda kullanan danışanlarda kas kaybını, safra sorunlarını ve sindirim yan etkilerini yönetmek." },
          { title: "Kilo yönetimi ve insülin direnci", text: "Yasak listesi yerine sürdürülebilir öğün düzeni; vücut kompozisyonu ve kan değerleri üzerinden takip." },
          { title: "Klinik beslenme", text: "Diyabet, tiroid, hiperlipidemi, çölyak ve gastrointestinal hastalıklarda tıbbi beslenme tedavisi." },
          { title: "Biohacking ve longevity", text: "Biyobelirteç takibi, metabolik esneklik, uyku ve sirkadiyen ritim optimizasyonu." },
        ],
      },
    ],
    faq: [
      ilce.soru,
      {
        question: `${ilce.locative} online diyet takibi yapılıyor mu?`,
        answer:
          "Yapılıyor. Görüşmeler video konferansla yürütülür, program ve takip aynı şekilde devam eder. Vücut kompozisyonu ölçümünün doğru yapılabilmesi için ilk görüşmede veya periyodik olarak klinik ziyareti önerilir; bu mümkün değilse ulaşılabilir bir ölçüm merkezine yönlendirme yapılır.",
      },
      // Genel süreç ve uzmanlık soruları bilinçli olarak burada tekrarlanmıyor:
      // altı ilçe sayfasında aynı soruyu işaretlemek FAQPage verisini
      // değersizleştiriyordu. Onlar /sik-sorulan-sorular sayfasına ait.
    ],
    faqHeading: `${ilce.name} bölgesinden sık sorulanlar`,
    faqMoreHref: "/sik-sorulan-sorular",
    faqMoreLabel: "Süreç, ücretler ve uzmanlık başlıklarındaki 30 soru",
    related: [
      { href: "/sporcu-beslenmesi-antalya", label: "Sporcu beslenmesi", note: "Profesyonel kulüp tecrübesiyle performans odaklı beslenme." },
      { href: "/zayiflama-ignesi-diyetisyeni-antalya", label: "Zayıflama iğnesi süreci", note: "GLP-1 kullanırken kas kaybı ve safra yönetimi." },
      ...otherIlceler.map((o) => ({
        href: `/antalya-diyetisyen/${o.slug}`,
        label: `${o.name} diyetisyen`,
        note: `${o.locative} beslenme danışmanlığı ve ulaşım bilgileri.`,
      })),
    ],
    asideCtaTitle: `${ilce.name} için randevu`,
    asideCtaText: `${ilce.ablative} gelen danışanlar için hafta içi ve cumartesi randevu saatleri mevcut. Online takip de yapılabiliyor.`,
    ctaTitle: `${ilce.locative} sağlıklı bir başlangıç yapın`,
    ctaText:
      "İlk görüşmede hedefinizi, sağlık geçmişinizi ve mevcut düzeninizi birlikte değerlendiriyoruz. Program bu verinin üzerine kuruluyor.",
  };
}
