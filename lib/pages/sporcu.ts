import type { LandingData } from "../landing-types";
import { site } from "../site";
import { IMAGES } from "../images";

/* ========================================================================
   PILLAR — /sporcu-beslenmesi-antalya
   Hedef sorgular: "antalya sporcu diyetisyeni", "sporcu beslenmesi antalya",
   "profesyonel sporcu diyetisyeni", "takım diyetisyeni antalya"
   ======================================================================== */

export const sporcuBeslenmesi: LandingData = {
  slug: "/sporcu-beslenmesi-antalya",
  meta: {
    title: "Antalya Sporcu Beslenmesi ve Atletik Performans",
    description:
      "Antalyaspor voleybol takımının diyetisyeniyle sporcu beslenmesi: vücut kompozisyonu, sezon periyodizasyonu, maç günü ve supplement protokolleri.",
    keywords: [
      "antalya sporcu beslenmesi",
      "antalya sporcu diyetisyeni",
      "profesyonel sporcu diyetisyeni",
      "takım diyetisyeni antalya",
      "atletik performans beslenmesi",
      "voleybolcu beslenmesi",
      "futbolcu beslenme programı",
      "supplement danışmanlığı antalya",
    ],
  },
  crumbs: [
    { name: "Hizmetler", path: "/hizmetler" },
    { name: "Sporcu Beslenmesi", path: "/sporcu-beslenmesi-antalya" },
  ],
  eyebrow: "Saha tecrübesi · Profesyonel kulüp",
  h1: "Antalya'da Sporcu Beslenmesi ve <em>Atletik Performans</em> Diyetisyeni",
  answer:
    "Sporcu beslenmesi, kilo verdirmeye değil **performansa** göre kurulan bir beslenme planıdır: enerji dengesi, karbonhidrat periyodizasyonu ve toparlanma penceresi antrenman takvimine göre ayarlanır. Antalya'da Uzm. Dyt. Ali Koşar, **Antalyaspor Kulübü voleybol takımının diyetisyeni** olarak profesyonel sporcularla ve TFF gelişim kampı alt yaş kategorileriyle sahada çalışır.",
  intro:
    "Kulüp sahasında ölçüm günü yapmakla, klinikte tek seferlik liste vermek aynı iş değildir. Sezon boyu bir takımın vücut kompozisyonunu takip etmek; sakatlık dönemini, maç yoğunluğunu ve kamp sürecini beslenmeyle yönetmek ayrı bir tecrübe gerektirir. Bu sayfa, o sürecin nasıl işlediğini anlatıyor.",
  medical: true,
  disclaimerTopic: "Ergojenik yardımcı (supplement) ve ilaç kullanımı",
  about: [
    "Sporcu beslenmesi",
    "Atletik performans",
    "Karbonhidrat periyodizasyonu",
    "Vücut kompozisyonu analizi",
    "Ergojenik yardımcılar",
  ],
  serviceType: "Sporcu beslenmesi ve performans danışmanlığı",
  serviceName: "Sporcu Beslenmesi ve Atletik Performans Danışmanlığı",
  image: {
    ...IMAGES.danismaSeansi,
    caption: "Vücut kompozisyonu ölçümü ve değerlendirme görüşmesi",
  },
  proof: [
    { value: "Antalyaspor", label: "Voleybol takımı diyetisyeni" },
    { value: "TFF", label: "Gelişim kampı alt yaş beslenme desteği" },
    { value: "6+ yıl", label: "Saha ve klinik tecrübesi" },
    { value: "28", label: "Mezun ettiği stajyer diyetisyen" },
  ],
  sections: [
    {
      id: "fark",
      heading: "Sporcu beslenmesi normal diyetten neden farklıdır?",
      tocLabel: "Normal diyetten farkı",
      body: [
        "Fark, hedefin kendisindedir. Klasik bir kilo verme programı **enerji açığı** üzerine kurulur; sporcu beslenmesi ise **enerji uygunluğu (energy availability)** üzerine kurulur. Yani sorumuz \"kaç kalori kısarız\" değil, \"antrenmanın yükünü kaldırabilecek kadar yakıt var mı\" sorusudur.",
        "Bir sporcuda kalori açığı yanlış zamanda açılırsa ilk kaybedilen yağ değil; toparlanma hızı, kas gücü, hormon dengesi ve konsantrasyon olur. Kadın sporcularda adet düzensizliği, erkek sporcularda testosteron düşüşü ve her iki grupta kemik yoğunluğu kaybı bu tablonun (RED-S) parçasıdır.",
        "Bu yüzden sporcu programı üç eksende kurulur: **ne kadar** (enerji), **ne zaman** (zamanlama) ve **hangi antrenman için** (periyodizasyon).",
      ],
      table: {
        caption: "Klasik kilo verme programı ile sporcu beslenmesi programının karşılaştırması",
        head: ["", "Klasik diyet", "Sporcu beslenmesi"],
        rows: [
          ["Ana hedef", "Kilo kaybı", "Performans + vücut kompozisyonu"],
          ["Enerji yaklaşımı", "Sabit kalori açığı", "Antrenman gününe göre değişken enerji"],
          ["Karbonhidrat", "Genellikle kısıtlanır", "Yüke göre 3–10 g/kg arasında planlanır"],
          ["Protein", "1,0–1,2 g/kg", "1,4–2,0 g/kg, öğünlere bölünmüş"],
          ["Öğün zamanlaması", "İkincil", "Birincil (antrenman öncesi/sonrası pencere)"],
          ["Takip ölçütü", "Tartı", "Vücut kompozisyonu, yağsız kütle, performans testleri"],
        ],
      },
      callout:
        "Sporcuda **tartı tek başına yalan söyler.** 2 kilo veren bir oyuncunun bunun ne kadarını yağdan, ne kadarını kastan ve ne kadarını sıvıdan kaybettiğini bilmiyorsanız, o veriyle karar veremezsiniz. Bu yüzden takip vücut kompozisyonu ölçümüyle yapılır.",
    },
    {
      id: "saha",
      heading: "Antalya'da sporcu diyetisyeni ararken neye bakmalısınız?",
      tocLabel: "Doğru diyetisyeni seçmek",
      body: [
        "Kritik ölçüt **saha tecrübesidir.** Sporcu beslenmesi kitaptan öğrenilebilir ama sezon içinde uygulanabilirliği ancak takımla, kampta, maç gününde ve sakatlık döneminde çalışarak öğrenilir. Sorulacak soru şudur: bu diyetisyen daha önce profesyonel bir kulüpte, bir federasyon kampında veya bir takım kadrosuyla çalıştı mı?",
      ],
      bullets: [
        {
          title: "Profesyonel kulüp deneyimi",
          text: "Antalyaspor Kulübü voleybol takımının diyetisyeni olarak sezon öncesi ölçüm gününden sezon sonuna kadar tüm kadronun takibi yürütülüyor.",
        },
        {
          title: "Federasyon / alt yaş kampı deneyimi",
          text: "TFF gelişim kampı sürecinde alt yaş kategorilerindeki futbolcuların kamp dönemi beslenmesi — büyüme çağındaki sporcuda enerji uygunluğu ayrı bir uzmanlık alanıdır.",
        },
        {
          title: "Biyokimya altyapısı",
          text: "Tıbbi biyokimya yüksek lisansı (Burdur Mehmet Akif Ersoy Üniversitesi, 2021–2023). Kan değeri, hormon paneli ve metabolik yorumlama işin teorik değil, günlük tarafı.",
        },
        {
          title: "Ölçüm altyapısı",
          text: "Vücut kompozisyonu ölçümü olmadan sporcu takibi yapılamaz. Süreç, tahminle değil veriyle yönetilir.",
        },
        {
          title: "Şeffaf supplement yaklaşımı",
          text: "Satış değil, kanıt düzeyine göre öneri. Kanıtı zayıf ürünler programa girmez; doping riski taşıyan ürünler için sertifikalı marka koşulu aranır.",
        },
      ],
      quote: {
        text: "Bir sporcuya program yazmak kolay. Zor olan, o programın kamp yemekhanesinde, deplasman otobüsünde ve maçtan iki saat önce de uygulanabilir olması.",
        cite: "Uzm. Dyt. Ali Koşar",
      },
    },
    {
      id: "brans",
      heading: "Hangi branşlarla çalışıyorum?",
      tocLabel: "Çalışılan branşlar",
      body: [
        "Branş, planın şeklini belirler. Bir voleybolcunun sıçrama gücü ile bir maraton koşucusunun yakıt yönetimi aynı beslenme mantığıyla kurulamaz. Aşağıdaki gruplar, farklı enerji sistemlerine göre ayrılmıştır.",
      ],
      table: {
        caption: "Branş gruplarına göre öne çıkan beslenme öncelikleri",
        head: ["Branş grubu", "Baskın enerji sistemi", "Beslenme önceliği"],
        rows: [
          ["Voleybol, basketbol", "Fosfojen + glikolitik, tekrarlı sıçrama", "Yağsız kütleyi korurken güç/ağırlık oranı, kreatin, sıçrama sonrası toparlanma"],
          ["Futbol", "Aralıklı yüksek şiddet", "Maç günü karbonhidrat yükleme, sıvı-elektrolit, ikinci yarı yorgunluğu"],
          ["Dövüş sporları", "Karma + kilo kategorisi", "Kontrollü kilo düşme, hızlı rehidrasyon, tartı sonrası toparlanma"],
          ["Dayanıklılık (koşu, bisiklet, triatlon)", "Aerobik", "Saatte karbonhidrat alım hızı, bağırsak eğitimi, demir ve D vitamini"],
          ["Fitness / vücut geliştirme", "Anaerobik hipertrofi", "Protein dağılımı, hacim–definisyon dönem planı, kas koruyucu açık"],
          ["Alt yaş / gelişim çağı", "Karma, büyüme yükü altında", "Yeterli enerji uygunluğu, büyüme eğrisinin korunması, kısıtlamadan uzak yaklaşım"],
        ],
      },
    },
    {
      id: "surec",
      heading: "Sporcu beslenmesi süreci nasıl işliyor?",
      tocLabel: "Süreç adımları",
      body: [
        "Süreç beş adımdan oluşur ve ilk üçü tamamlanmadan program yazılmaz.",
      ],
      steps: [
        {
          title: "Değerlendirme ve ölçüm günü",
          text: "Antrenman takvimi, pozisyon, sakatlık geçmişi, uyku, seyahat düzeni ve mevcut supplement kullanımı çıkarılır. Vücut kompozisyonu ölçülür; kilo değil **yağsız kütle** referans alınır.",
        },
        {
          title: "Biyokimyasal değerlendirme",
          text: "Hemogram, ferritin, D vitamini, B12, tiroid ve gerekiyorsa hormon paneli değerlendirilir. Demir eksikliği ve D vitamini yetersizliği, performans düşüşünün en sık gözden kaçan iki sebebidir.",
        },
        {
          title: "Enerji ve makro planı",
          text: "Günlük enerji ihtiyacı antrenman yüküne göre değişken kurgulanır. Protein 1,4–2,0 g/kg aralığında ve güne 3–5 öğüne bölünür; karbonhidrat ağır gün 6–10 g/kg, hafif gün 3–5 g/kg olacak şekilde periyodize edilir.",
        },
        {
          title: "Zamanlama protokolleri",
          text: "Antrenman öncesi, sırası ve sonrası için ayrı protokol yazılır. Maç günü menüsü, deplasman senaryosu ve kamp yemekhanesi alternatifleri ayrıca hazırlanır.",
        },
        {
          title: "Takip ve revizyon",
          text: "Ölçümler periyodik tekrarlanır; performans ve vücut kompozisyonu verisine göre plan revize edilir. Sezon içinde plan sabit kalmaz — sezon değişir, plan da değişir.",
        },
      ],
    },
    {
      id: "periyodizasyon",
      heading: "Sezon içinde beslenme nasıl periyodize edilir?",
      tocLabel: "Sezon periyodizasyonu",
      body: [
        "Karbonhidrat periyodizasyonu, sporcu beslenmesinin en pratik ve en çok fark yaratan uygulamasıdır: karbonhidrat miktarı sabit kalmaz, o günkü antrenmanın enerji talebine göre değişir. Ağır gün yüksek, dinlenme günü düşük.",
      ],
      table: {
        caption: "Dönem ve gün tipine göre karbonhidrat / protein hedefleri (vücut ağırlığı kilogramı başına)",
        head: ["Dönem / gün tipi", "Karbonhidrat", "Protein", "Odak"],
        rows: [
          ["Sezon öncesi hazırlık", "5–7 g/kg", "1,6–2,0 g/kg", "Yağsız kütleyi artırmak, vücut kompozisyonunu düzeltmek"],
          ["Ağır antrenman günü", "6–10 g/kg", "1,6–1,8 g/kg", "Glikojeni doldurmak, yorgunluk birikimini önlemek"],
          ["Hafif / teknik gün", "3–5 g/kg", "1,6–2,0 g/kg", "Metabolik esneklik, gereksiz enerji fazlasından kaçınma"],
          ["Maç günü", "7–10 g/kg", "1,6 g/kg", "Depoyu tam doldurmak, sindirimi kolay besinler"],
          ["Maç sonrası ilk 4 saat", "1,0–1,2 g/kg/saat", "0,3 g/kg tek doz", "Glikojen geri dolumu ve kas onarımı"],
          ["Ara dönem / off", "3–5 g/kg", "1,6–2,0 g/kg", "Kütleyi korumak, formu tamamen bırakmamak"],
        ],
      },
      callout:
        "Bu değerler **başlangıç aralıklarıdır**, reçete değildir. Pozisyon, oynama süresi, sakatlık durumu ve bireysel sindirim toleransı bu sayıları ciddi biçimde değiştirir. Uygulama daima bireysel ölçüme göre yapılır.",
    },
    {
      id: "supplement",
      heading: "Hangi supplementlerin gerçekten kanıtı var?",
      tocLabel: "Supplement kanıt tablosu",
      body: [
        "Piyasadaki ürünlerin büyük çoğunluğunun performansa katkısı gösterilmemiştir. Uluslararası spor beslenmesi otoritelerinin (IOC, AIS, ISSN) kanıt sınıflandırmasına göre, performansa doğrudan katkısı güçlü kanıtla desteklenen ürün sayısı **beşi geçmez.**",
      ],
      table: {
        caption: "Ergojenik yardımcılar — kanıt düzeyi ve tipik kullanım aralıkları",
        head: ["Ürün", "Kanıt", "Tipik doz", "Ne için"],
        rows: [
          ["Kreatin monohidrat", "Güçlü", "Günde 3–5 g, sürekli", "Güç, tekrarlı sıçrama/sprint, yağsız kütle"],
          ["Kafein", "Güçlü", "3–6 mg/kg, 45–60 dk önce", "Algılanan zorluk, uyanıklık, dayanıklılık"],
          ["Beta-alanin", "Orta–güçlü", "Günde 3,2–6,4 g, 4–12 hafta", "1–4 dakikalık yüksek şiddetli efor"],
          ["Diyet nitratı (pancar suyu)", "Orta", "6–8 mmol, 2–3 saat önce", "Dayanıklılık ekonomisi"],
          ["Sodyum bikarbonat", "Orta", "0,2–0,3 g/kg, 60–150 dk önce", "Laktik asit toleransı — sindirim yan etkisi sık"],
          ["Whey / kazein protein", "Destekleyici", "Diyeti tamamlayacak kadar", "Protein hedefine ulaşmak; besin değil pratiklik aracı"],
          ["BCAA", "Zayıf", "—", "Yeterli protein alan sporcuda ek fayda gösterilmemiştir"],
          ["Yağ yakıcı / detoks ürünleri", "Yok", "—", "Önerilmez; doping ve karaciğer riski taşıyabilir"],
        ],
      },
      bullets: [
        {
          title: "Doping riski gerçektir",
          text: "Lisanslı sporcularda etiket dışı madde içeren takviyeler ciddi bir sorundur. Yarışan sporcularda yalnızca bağımsız denetimli (Informed Sport / Cologne List benzeri) ürünler önerilir.",
        },
        {
          title: "Önce diyet, sonra takviye",
          text: "Yeterli enerji ve protein alınmadan takviye eklemek para kaybıdır. Takviye eksiği kapatır, temeli kurmaz.",
        },
      ],
    },
    {
      id: "kimler",
      heading: "Bu hizmet kimler için uygun?",
      tocLabel: "Kimler için uygun",
      body: [
        "Profesyonel lisansa sahip olmak şart değil. Düzenli antrenman yapan ve performansını ölçülebilir biçimde artırmak isteyen herkes bu kapsamdadır.",
      ],
      bullets: [
        { text: "Kulüp sporcuları ve profesyonel takım oyuncuları (voleybol, futbol, basketbol)" },
        { text: "Alt yaş kategorisindeki ve gelişim kampına giden genç sporcular ve aileleri" },
        { text: "Kilo kategorili branşlarda tartı öncesi süreci sağlıklı yönetmek isteyen dövüş sporcuları" },
        { text: "Maraton, triatlon, bisiklet gibi dayanıklılık branşlarında yarışanlar" },
        { text: "Salon antrenmanında plato yaşayan, kas kazanamayan veya yağ oranını düşüremeyen kişiler" },
        { text: "Sakatlık sonrası dönüş sürecinde kas kaybını sınırlamak isteyen sporcular" },
      ],
    },
  ],
  faq: [
    {
      question: "Antalya'da sporcu diyetisyeni kimdir?",
      answer:
        "Uzm. Dyt. Ali Koşar, Antalya Muratpaşa'da çalışan ve Antalyaspor Kulübü voleybol takımının diyetisyenliğini yürüten uzman diyetisyendir. İzmir Katip Çelebi Üniversitesi Beslenme ve Diyetetik mezunu olup Burdur Mehmet Akif Ersoy Üniversitesi'nde tıbbi biyokimya yüksek lisansı yapmıştır. TFF gelişim kampı sürecinde alt yaş kategorilerine beslenme desteği vermektedir.",
    },
    {
      question: "Sporcu beslenmesi programı ne kadar sürede sonuç verir?",
      answer:
        "Toparlanma hızındaki ve antrenman içi enerji seviyesindeki değişim genellikle ilk 2–3 haftada hissedilir. Vücut kompozisyonundaki ölçülebilir değişim (yağsız kütle artışı veya yağ oranı düşüşü) 8–12 haftalık bir süreç ister. Sezon içinde hedef değişim değil, çoğu zaman kazanılanı korumaktır.",
    },
    {
      question: "Sporcu olarak günde ne kadar protein almalıyım?",
      answer:
        "Güncel spor beslenmesi rehberleri düzenli antrenman yapan sporcular için günde kilogram başına 1,4–2,0 gram protein önerir. 75 kilogramlık bir sporcu için bu 105–150 gram arasıdır. Önemli olan toplamın yanı sıra dağılımdır: günde 3–5 öğüne bölünmüş, her öğünde 0,3–0,4 g/kg protein alımı kas protein sentezi için daha etkilidir.",
    },
    {
      question: "Kreatin kullanmalı mıyım, zararlı mı?",
      answer:
        "Kreatin monohidrat, spor beslenmesinde en çok araştırılmış ve güvenliği en iyi belgelenmiş takviyedir. Sağlıklı bireylerde günde 3–5 gram kullanımının böbrek fonksiyonlarına zarar verdiğine dair kanıt yoktur. Yine de mevcut böbrek hastalığı olanlarda ve 18 yaş altı sporcularda kullanım kararı hekim değerlendirmesiyle verilmelidir.",
    },
    {
      question: "Maç günü ne yemeliyim?",
      answer:
        "Maçtan 3–4 saat önce sindirimi kolay, yüksek karbonhidratlı, düşük yağlı ve düşük lifli bir ana öğün; 1–2 saat önce küçük bir karbonhidrat ara öğünü uygundur. Yeni bir besin maç gününde denenmez — tüm menü önce antrenmanda test edilir. Sıvı ve elektrolit planı, özellikle Antalya'nın sıcak aylarında ayrıca hesaplanır.",
    },
    {
      question: "Genç sporcularda diyet uygulanır mı?",
      answer:
        "Gelişim çağındaki sporcularda kısıtlayıcı diyet uygulanmaz. Amaç kilo vermek değil, büyüme ve antrenman yükünü aynı anda karşılayacak enerji uygunluğunu sağlamaktır. Yetersiz enerji alımı bu yaş grubunda boy uzamasını, kemik yoğunluğunu ve hormon gelişimini doğrudan etkiler; bu yüzden takip büyüme eğrisi üzerinden yapılır.",
    },
    {
      question: "Online sporcu danışmanlığı veriyor musunuz?",
      answer:
        "Evet. Antalya dışındaki veya deplasman/kamp nedeniyle şehirde olmayan sporcular için online takip yapılmaktadır. Yüz yüze görüşmede yapılan vücut kompozisyonu ölçümü online süreçte ulaşılabilir bir ölçüm merkezine yönlendirilerek veya periyodik klinik ziyaretleriyle tamamlanır.",
    },
    {
      question: "Takım veya kulüp olarak toplu hizmet alabilir miyiz?",
      answer:
        `Alınabilir. Kulüp çalışmaları sezon öncesi toplu ölçüm günü, kadro geneli vücut kompozisyonu takibi, kamp ve deplasman menü planlaması, teknik ekibe raporlama ve oyuncu bazlı bireysel görüşmeleri kapsar. Detaylar için ${site.phoneDisplay} numarasından iletişime geçebilirsiniz.`,
    },
  ],
  related: [
    {
      href: "/atletik-performans-beslenmesi",
      label: "Atletik performans beslenmesi",
      note: "Güç, dayanıklılık ve toparlanmayı ölçülebilir biçimde artıran protokoller.",
    },
    {
      href: "/sporcu-sakatligi-beslenmesi",
      label: "Sporcu sakatlığı ve iyileşme beslenmesi",
      note: "İmmobilizasyon döneminde kas kaybını sınırlamak ve dönüşü hızlandırmak.",
    },
    {
      href: "/biohacking-ve-longevity-antalya",
      label: "Biohacking ve longevity",
      note: "Uyku, sirkadiyen ritim, metabolik esneklik ve ölçüme dayalı optimizasyon.",
    },
    {
      href: "/hakkimda",
      label: "Uzm. Dyt. Ali Koşar hakkında",
      note: "Eğitim, biyokimya yüksek lisansı, kulüp görevi ve saha geçmişi.",
    },
  ],
  asideCtaTitle: "Sezon öncesi ölçüm günü",
  asideCtaText:
    "Bireysel sporcu veya kulüp kadrosu için vücut kompozisyonu ölçümü ve beslenme planlaması randevusu oluşturun.",
  ctaTitle: "Performansınızı tahminle değil, ölçümle yönetin",
  ctaText:
    "İlk görüşmede antrenman takviminiz, sakatlık geçmişiniz ve vücut kompozisyonunuz birlikte değerlendirilir; program bu verinin üzerine kurulur.",
};

/* ========================================================================
   SPOKE — /atletik-performans-beslenmesi
   ======================================================================== */

export const atletikPerformans: LandingData = {
  slug: "/atletik-performans-beslenmesi",
  meta: {
    title: "Atletik Performans Beslenmesi Rehberi",
    description:
      "Performansı artıran üç kaldıraç: enerji uygunluğu, karbonhidrat periyodizasyonu ve toparlanma penceresi. Sıcakta sıvı planı dâhil. Antalya.",
    keywords: [
      "atletik performans beslenmesi",
      "performans diyeti",
      "toparlanma beslenmesi",
      "karbonhidrat periyodizasyonu",
      "sporcu enerji uygunluğu",
      "RED-S",
    ],
  },
  crumbs: [
    { name: "Sporcu Beslenmesi", path: "/sporcu-beslenmesi-antalya" },
    { name: "Atletik Performans", path: "/atletik-performans-beslenmesi" },
  ],
  eyebrow: "Performans protokolleri",
  h1: "Atletik Performans Beslenmesi: <em>Güç, Dayanıklılık ve Toparlanma</em>",
  answer:
    "Atletik performans beslenmesinde üç kaldıraç vardır: **yeterli enerji uygunluğu**, antrenman yüküne göre **karbonhidrat periyodizasyonu** ve antrenman sonrası **toparlanma penceresi**. Bu üçü kurulmadan takviye eklemek sonuç değiştirmez. Antalya'da Uzm. Dyt. Ali Koşar bu protokolleri vücut kompozisyonu ve kan değeri verisiyle bireyselleştirir.",
  intro:
    "Performans, tek bir besinden değil; enerjinin miktarı, zamanlaması ve toparlanma kalitesinin toplamından gelir. Aşağıda bu üç kaldıracın nasıl kurulduğunu ve en sık yapılan hataları bulacaksınız.",
  medical: true,
  disclaimerTopic: "Performans amaçlı takviye kullanımı",
  about: ["Atletik performans", "Enerji uygunluğu", "Toparlanma", "RED-S", "Hidrasyon"],
  serviceType: "Atletik performans beslenmesi danışmanlığı",
  sections: [
    {
      id: "enerji",
      heading: "Enerji uygunluğu nedir ve neden performansın temelidir?",
      tocLabel: "Enerji uygunluğu",
      body: [
        "Enerji uygunluğu, aldığınız enerjiden antrenmanda harcadığınızı çıkardıktan sonra vücudun **temel işlevlerine** kalan enerjidir. Yağsız kütle kilogramı başına günde 45 kcal civarı optimal kabul edilir; **30 kcal/kg yağsız kütle** eşiğinin altına inildiğinde hormonal ve metabolik bozulmalar başlar.",
        "Bu tablo literatürde **RED-S (Sporda Göreli Enerji Eksikliği)** olarak adlandırılır. Belirtileri çoğu zaman \"formsuzluk\" sanılır: sürekli yorgunluk, tekrarlayan hastalıklar, stres kırıkları, adet düzensizliği veya kaybı, libido ve testosteron düşüşü, uyku bozukluğu, sinirlilik ve antrenman sonrası toparlanamama.",
        "Uzun süre düşük enerjiyle çalışan bir sporcuda ilk kaybedilen yağ değil, **kas ve kemik** olur. Bu yüzden performans programında ilk kontrol edilen şey kalori açığı değil, enerjinin yeterliliğidir.",
      ],
      callout:
        "Kilo vermek isteyen bir sporcuda açık, sezon içinde değil **hazırlık döneminde** ve haftada vücut ağırlığının en fazla %0,5–1'i hızında açılır. Daha hızlısı, kaybın önemli bölümünün kas dokusundan gelmesi anlamına gelir.",
    },
    {
      id: "karbonhidrat",
      heading: "Karbonhidrat periyodizasyonu nasıl uygulanır?",
      tocLabel: "Karbonhidrat periyodizasyonu",
      body: [
        "Periyodizasyon, karbonhidratı sabit tutmak yerine günün antrenman yüküne göre ayarlamaktır. Mantık basittir: **yakıtı ihtiyacın olduğu güne koy.** Ağır antrenman ve maç günlerinde depolar dolu; hafif ve dinlenme günlerinde daha düşük tutulur.",
        "Bu yaklaşım hem performansı korur hem de gereksiz enerji fazlasını engelleyerek vücut kompozisyonunun sezon boyunca kontrol altında kalmasını sağlar.",
      ],
      steps: [
        {
          title: "Günü sınıflandır",
          text: "Her günü ağır, orta, hafif veya dinlenme olarak etiketleyin. Maç günü ayrı bir kategoridir.",
        },
        {
          title: "Karbonhidratı güne göre ölçeklendir",
          text: "Ağır gün 6–10 g/kg, orta gün 5–7 g/kg, hafif ve dinlenme günü 3–5 g/kg. Maç günü depoyu tam doldurmak için üst banttan planlanır.",
        },
        {
          title: "Proteini sabit tut",
          text: "Karbonhidrat dalgalanırken protein 1,6–2,0 g/kg bandında sabit kalır ve öğünlere eşit dağıtılır. Kas koruması buradan gelir.",
        },
        {
          title: "Yağı esnek bırak",
          text: "Yağ, kalan enerjiyi doldurur ancak antrenmandan hemen önceki öğünde mide boşalmasını yavaşlattığı için düşük tutulur.",
        },
        {
          title: "Antrenman içi alımı ekle",
          text: "60–90 dakikayı aşan yüksek şiddetli çalışmalarda saatte 30–60 gram karbonhidrat; 2,5 saati aşan dayanıklılık eforlarında karışık kaynakla saatte 90 grama kadar çıkılabilir. Bu miktar önce antrenmanda denenerek bağırsak toleransı geliştirilir.",
        },
      ],
    },
    {
      id: "toparlanma",
      heading: "Antrenman sonrası toparlanma penceresi gerçek mi?",
      tocLabel: "Toparlanma penceresi",
      body: [
        "Kısmen. \"30 dakikalık anabolik pencere\" abartılmış bir kavramdır; günlük toplam protein ve karbonhidrat daha belirleyicidir. Ancak **günde iki antrenman yapan** veya **24 saatten kısa sürede tekrar sahaya çıkacak** bir sporcuda zamanlama gerçekten kritik hale gelir.",
      ],
      table: {
        caption: "Toparlanma protokolü — bir sonraki efora kalan süreye göre",
        head: ["Sonraki efora kalan süre", "Karbonhidrat", "Protein", "Not"],
        rows: [
          ["8 saatten az", "İlk 4 saat boyunca saatte 1,0–1,2 g/kg", "0,3 g/kg hemen ardından", "Hızlı sindirilen kaynaklar tercih edilir"],
          ["8–24 saat", "Gün içine yayılmış 6–10 g/kg", "0,3 g/kg × 4 öğün", "Zamanlama esnekliği artar"],
          ["24 saatten fazla", "Normal günlük plan", "1,6–2,0 g/kg gün geneli", "Standart periyodizasyon yeterli"],
        ],
      },
      bullets: [
        {
          title: "Uyku, en güçlü toparlanma aracıdır",
          text: "Gece 7 saatin altına inen uyku; kas protein sentezini, insülin duyarlılığını ve sakatlanma riskini olumsuz etkiler. Hiçbir takviye yetersiz uykuyu telafi etmez.",
        },
        {
          title: "Sıvı geri alımı",
          text: "Antrenmanda kaybedilen her 1 kilogram için 1,25–1,5 litre sıvı, sodyumla birlikte geri alınır. Sadece su içmek, terle kaybedilen sodyumu yerine koymaz.",
        },
      ],
    },
    {
      id: "sicak",
      heading: "Antalya'nın sıcağında antrenman yaparken sıvı planı nasıl kurulur?",
      tocLabel: "Sıcakta hidrasyon",
      body: [
        "Antalya'da yaz aylarında nem ve sıcaklık birlikte yüksektir; ter kaybı iç bölgelere göre belirgin biçimde artar. Bu şartlarda hidrasyon planı tahminle değil, **ter oranı ölçümüyle** kurulur: antrenman öncesi ve sonrası çıplak tartı farkı, alınan sıvı eklenerek hesaplanır.",
        "Vücut ağırlığının %2'sini aşan sıvı kaybı, dayanıklılıkta ve bilişsel performansta ölçülebilir düşüş yaratır. Sıcakta bu eşiğe bir saatlik bir antrenmanda bile ulaşılabilir.",
      ],
      bullets: [
        { title: "Antrenman öncesi", text: "2–4 saat önce 5–7 ml/kg sıvı; idrar rengi açık saman sarısı olmalı." },
        { title: "Antrenman sırasında", text: "Ter oranına göre saatte 400–800 ml; 60 dakikayı aşan çalışmalarda sodyum içeren içecek." },
        { title: "Antrenman sonrası", text: "Kaybedilen kilogram başına 1,25–1,5 litre, tuz içeren bir öğünle birlikte." },
        { title: "Aşırı su tüketiminden kaçının", text: "Uzun süreli eforlarda sadece sade su ile aşırı hidrasyon, hiponatremi riski taşır." },
      ],
    },
    {
      id: "hatalar",
      heading: "Performansı en çok düşüren beş beslenme hatası",
      tocLabel: "Sık yapılan hatalar",
      body: ["Sahada en sık karşılaşılan ve en kolay düzeltilebilen hatalar şunlardır:"],
      steps: [
        { title: "Karbonhidrattan korkmak", text: "Yağ oranını düşürmek için karbonhidratı kesmek, ilk olarak antrenman kalitesini düşürür. Sonuç: daha az yük, daha az adaptasyon, daha çok kas kaybı." },
        { title: "Kahvaltıyı atlayıp akşam yüklenmek", text: "Enerjinin gün içine dağılmaması, gün boyu düşük enerji uygunluğu ve akşam aşırı yeme döngüsü yaratır." },
        { title: "Proteini tek öğünde toplamak", text: "Günde 150 gram proteinin 120 gramını akşam yemeğinde almak, kas protein sentezi açısından bölünmüş alımdan daha az etkilidir." },
        { title: "Demir ve D vitaminini kontrol etmemek", text: "Özellikle kadın sporcularda demir eksikliği ve kapalı salon branşlarında D vitamini yetersizliği, açıklanamayan performans düşüşünün en sık sebeplerindendir." },
        { title: "Yarış günü yeni bir şey denemek", text: "Yeni jel, yeni içecek, yeni kahvaltı — hepsi önce antrenmanda test edilir. Maç günü deney günü değildir." },
      ],
    },
  ],
  faq: [
    {
      question: "Performansımı artırmak için önce ne yapmalıyım?",
      answer:
        "Takviyeden önce üç şeyi kontrol edin: günlük toplam enerji alımınız antrenman yükünüzü karşılıyor mu, protein günde kilogram başına 1,4–2,0 grama ulaşıyor mu ve uykunuz düzenli olarak 7 saatin üzerinde mi. Bu üçü tamam değilse hiçbir ergojenik yardımcı anlamlı fark yaratmaz.",
    },
    {
      question: "RED-S (göreli enerji eksikliği) belirtileri nelerdir?",
      answer:
        "Sürekli yorgunluk, antrenman sonrası toparlanamama, tekrarlayan üst solunum yolu enfeksiyonları, stres kırıkları, kadınlarda adet düzensizliği veya kaybı, erkeklerde libido ve testosteron düşüşü, uyku bozukluğu ve performansta açıklanamayan gerileme. Bu tablo, yağsız kütle kilogramı başına günlük 30 kcal eşiğinin altına inildiğinde ortaya çıkar.",
    },
    {
      question: "Aç karnına antrenman yapmak yağ yakımını artırır mı?",
      answer:
        "Aç karnına antrenman, o seans içinde yağ kullanım oranını artırır ancak 24 saatlik toplam yağ kaybını artırdığı gösterilmemiştir. Buna karşılık yüksek şiddetli çalışmalarda performansı düşürür ve kas kaybı riskini artırır. Düşük şiddetli aerobik seanslarda uygulanabilir; güç ve hız çalışmalarında önerilmez.",
    },
    {
      question: "Antrenman sonrası mutlaka protein tozu içmeli miyim?",
      answer:
        "Hayır. Protein tozu bir besin değil, pratiklik aracıdır. Antrenman sonrası 25–40 gram proteini yumurta, süt, yoğurt, tavuk veya balıktan almak da aynı işi görür. Protein tozu yalnızca öğün hazırlamanın mümkün olmadığı durumlarda ve günlük hedefe ulaşmak zorlaştığında tercih edilir.",
    },
    {
      question: "Sıcak havada antrenman öncesi ne kadar su içmeliyim?",
      answer:
        "Antrenmandan 2–4 saat önce kilogram başına 5–7 ml sıvı önerilir; 70 kilogramlık bir sporcu için bu 350–490 ml eder. İdrar renginin açık saman sarısı olması iyi bir pratik göstergedir. Antrenman sırasında ter oranına göre saatte 400–800 ml, 60 dakikayı aşan çalışmalarda sodyum içeren içecekle sürdürülür.",
    },
  ],
  related: [
    { href: "/sporcu-beslenmesi-antalya", label: "Sporcu beslenmesi (ana sayfa)", note: "Süreç, branşlar, sezon periyodizasyonu ve supplement kanıt tablosu." },
    { href: "/sporcu-sakatligi-beslenmesi", label: "Sakatlık dönemi beslenmesi", note: "İmmobilizasyonda kas kaybını sınırlamak ve dönüşü hızlandırmak." },
    { href: "/biohacking-ve-longevity-antalya", label: "Biohacking ve longevity", note: "Uyku, sirkadiyen ritim ve metabolik esneklik optimizasyonu." },
  ],
  ctaTitle: "Performans planınızı verinin üzerine kurun",
  ctaText:
    "Vücut kompozisyonu ölçümü, kan değeri yorumu ve antrenman takviminize göre periyodize edilmiş bir plan için randevu oluşturun.",
};

/* ========================================================================
   SPOKE — /sporcu-sakatligi-beslenmesi
   ======================================================================== */

export const sporcuSakatligi: LandingData = {
  slug: "/sporcu-sakatligi-beslenmesi",
  meta: {
    title: "Sporcu Sakatlığında Beslenme ve İyileşme",
    description:
      "İmmobilizasyon döneminde kas kaybını sınırlayan ve sahaya dönüşü hızlandıran protokoller: protein hedefi, iyileşmeyi destekleyen besinler. Antalya.",
    keywords: [
      "sporcu sakatlığı beslenmesi",
      "sakatlık sonrası beslenme",
      "kas kaybını önleme",
      "ameliyat sonrası sporcu beslenmesi",
      "kollajen ve tendon iyileşmesi",
      "rehabilitasyon beslenmesi",
    ],
  },
  crumbs: [
    { name: "Sporcu Beslenmesi", path: "/sporcu-beslenmesi-antalya" },
    { name: "Sakatlık ve İyileşme", path: "/sporcu-sakatligi-beslenmesi" },
  ],
  eyebrow: "Sakatlık ve rehabilitasyon",
  h1: "Sporcu Sakatlığında Beslenme: <em>Kas Kaybını Sınırlamak ve Dönüşü Hızlandırmak</em>",
  answer:
    "Sakatlık döneminde en sık yapılan hata, antrenman durduğu için kaloriyi sertçe kısmaktır. Oysa iyileşme dönemi **enerji talebi artan** bir dönemdir. Doğru yaklaşım, enerjiyi ılımlı azaltıp proteini **2,0–2,5 g/kg**'a çıkarmak ve immobilize olan bölgede kas kaybını yavaşlatmaktır. Antalya'da Uzm. Dyt. Ali Koşar bu süreci sahadan tanıdığı protokollerle yürütür.",
  intro:
    "Bir sakatlık, sadece bir doku hasarı değil; kas kütlesi, insülin duyarlılığı ve psikolojik motivasyonun aynı anda risk altına girdiği bir dönemdir. Beslenme bu dönemde iyileştirici değildir ama iyileşmenin hızını ve dönüş kalitesini belirgin biçimde etkiler.",
  medical: true,
  disclaimerTopic: "Sakatlık, ameliyat ve rehabilitasyon süreci",
  about: ["Sporcu sakatlığı", "İmmobilizasyon", "Kas atrofisi", "Tendon ve bağ iyileşmesi", "Rehabilitasyon"],
  serviceType: "Sakatlık ve rehabilitasyon dönemi beslenme danışmanlığı",
  sections: [
    {
      id: "ilk-hafta",
      heading: "Sakatlığın ilk haftasında kas kaybı neden bu kadar hızlıdır?",
      tocLabel: "İlk haftada ne olur",
      body: [
        "Çünkü kas dokusu, yüklenme sinyali kesildiğinde hızla küçülür. Tam immobilizasyonda **kas protein sentezine direnç** gelişir: aynı miktar protein alınsa bile kas onu eskisi kadar iyi kullanamaz. Bu nedenle kayıp ilk 1–2 haftada en hızlıdır ve sonra yavaşlar.",
        "Buna eşlik eden ikinci sorun, bölgesel insülin direncinin artmasıdır. Hareketsiz kalan bacakta glikoz kullanımı düşer; bu da hem yağlanmayı hem de iltihabi yükü artırır.",
        "Üçüncüsü, iyileşen dokunun kendisi enerji ister. Ameliyat sonrası veya kırık iyileşmesinde bazal metabolizma **%15–20 oranında artabilir.** Yani hareket azalırken enerji ihtiyacı beklenildiği kadar düşmez.",
      ],
      callout:
        "Bu üç mekanizma birlikte düşünüldüğünde sonuç net: sakatlık döneminde **agresif kalori kısıtlaması, kas kaybını hızlandırır ve iyileşmeyi geciktirir.** Amaç yağlanmayı sınırlamak olmalı, açlık yaratmak değil.",
    },
    {
      id: "protein",
      heading: "Sakatlık döneminde protein ne kadar ve nasıl alınmalı?",
      tocLabel: "Protein hedefi",
      body: [
        "İmmobilizasyon döneminde protein hedefi normal antrenman dönemine göre **yükseltilir**: günde kilogram başına 2,0–2,5 gram. Sebep, kasın protein kullanımındaki direnci aşmaktır — daha az kullanılan bir kasa daha güçlü bir sinyal göndermek gerekir.",
        "Toplam kadar önemli olan dağılımdır: protein güne 4–5 öğüne bölünür, her öğünde **0,3–0,4 g/kg** (yaklaşık 25–35 gram) hedeflenir ve her öğün lösin açısından zengin bir kaynak içerir.",
      ],
      table: {
        caption: "Dönemlere göre protein ve enerji yaklaşımı",
        head: ["Dönem", "Protein", "Enerji", "Öncelik"],
        rows: [
          ["Ameliyat / akut dönem (0–7 gün)", "2,0–2,5 g/kg", "Bakım düzeyinin hafif altı", "Doku onarımı, iltihap yönetimi, kas kaybını yavaşlatma"],
          ["İmmobilizasyon (1–6 hafta)", "2,0–2,5 g/kg", "Bakım − %10 civarı", "Atrofiyi sınırlamak, yağlanmayı önlemek"],
          ["Yüklenmeye geçiş / rehab", "1,8–2,2 g/kg", "Bakım düzeyi", "Kas kütlesini geri kazanmak"],
          ["Sahaya dönüş", "1,6–2,0 g/kg", "Antrenman yüküne göre", "Performansı ve vücut kompozisyonunu toparlamak"],
        ],
      },
    },
    {
      id: "besinler",
      heading: "İyileşmeyi destekleyen besinler ve takviyeler hangileri?",
      tocLabel: "İyileşmeyi destekleyenler",
      body: [
        "Hiçbir besin bir bağı veya tendonu tek başına iyileştirmez. Ancak bazı besin öğelerinin yetersizliği iyileşmeyi **yavaşlatır** — bu yüzden odak, eksik bırakmamaktır.",
      ],
      bullets: [
        {
          title: "Kollajen + C vitamini",
          text: "Rehabilitasyon egzersizinden yaklaşık 60 dakika önce alınan 15 gram jelatin/kollajen ile birlikte C vitamini, tendon ve bağ dokusunda kollajen sentezini destekleyen çalışmalarla ilişkilendirilmiştir. Egzersizle birlikte kullanıldığında anlamlıdır, tek başına değil.",
        },
        {
          title: "Kreatin monohidrat",
          text: "İmmobilizasyon döneminde kas kaybını sınırlamada ve yeniden yüklenme döneminde kütleyi geri kazanmada destekleyicidir. Günde 3–5 gram.",
        },
        {
          title: "Omega-3 (EPA/DHA)",
          text: "İltihabi yanıtın dengelenmesi ve kas protein sentezine duyarlılık açısından incelenmektedir. Balık tüketimi yetersizse takviye değerlendirilir.",
        },
        {
          title: "D vitamini ve kalsiyum",
          text: "Kemik iyileşmesi ve kas fonksiyonu için temel. Kan düzeyi ölçülmeden doz belirlenmez.",
        },
        {
          title: "Çinko, C vitamini, A vitamini",
          text: "Yara iyileşmesi ve bağışıklık için gereklidir. Yetersizlik iyileşmeyi geciktirir; ancak yeterli düzeyin üzerine çıkmak ek fayda sağlamaz.",
        },
        {
          title: "Yeterli enerji",
          text: "Listenin en önemli maddesi. Enerji yetersizken diğer hiçbir başlık beklenen etkiyi göstermez.",
        },
      ],
      quote: {
        text: "Sakatlıkta kaybedilen kası geri kazanmak, hiç kaybetmemekten çok daha uzun sürer. Bu yüzden ilk günden müdahale ediyoruz.",
        cite: "Uzm. Dyt. Ali Koşar",
      },
    },
    {
      id: "alkol",
      heading: "İyileşmeyi geciktiren nelerden kaçınılmalı?",
      tocLabel: "Kaçınılması gerekenler",
      body: ["Bazı alışkanlıklar iyileşmeyi doğrudan yavaşlatır ve sakatlık dönemi bunların en maliyetli olduğu dönemdir."],
      bullets: [
        { title: "Alkol", text: "Kas protein sentezini baskılar, uykuyu bozar ve doku onarımını geciktirir. Sakatlık döneminde kesilmesi önerilir." },
        { title: "Aşırı kalori kısıtlaması", text: "Kayıp yağdan değil, ağırlıklı olarak kastan gelir ve iyileşme süresi uzar." },
        { title: "Uyku bozukluğu", text: "Doku onarımının büyük kısmı derin uykuda gerçekleşir. Ağrı nedeniyle bozulan uyku, hekimle birlikte yönetilmelidir." },
        { title: "Kontrolsüz anti-inflamatuar kullanımı", text: "İltihap iyileşmenin bir parçasıdır; kontrolsüz baskılanması adaptasyonu bozabilir. Kullanım kararı hekime aittir." },
        { title: "Sigara", text: "Doku kanlanmasını azaltır; kemik ve yumuşak doku iyileşmesini belirgin biçimde geciktirir." },
      ],
    },
    {
      id: "donus",
      heading: "Sahaya dönüş döneminde beslenme nasıl ayarlanır?",
      tocLabel: "Sahaya dönüş",
      body: [
        "Yüklenme geri geldiğinde enerji ve karbonhidrat kademeli olarak artırılır. Bu dönemde iki risk vardır: sakatlık dönemindeki düşük enerji alışkanlığını sürdürmek (toparlanma yetersiz kalır) veya sakatlık dönemindeki hareketsizlik alışkanlıklarını korurken enerjiyi hızla artırmak (yağlanma).",
        "Doğru yol, vücut kompozisyonu ölçümüyle ilerlemeyi izlemek ve enerjiyi antrenman yüküyle **eş zamanlı** artırmaktır. Tartıdaki artışın ne kadarının kas, ne kadarının yağ olduğunu bilmeden bu geçiş yönetilemez.",
      ],
    },
  ],
  faq: [
    {
      question: "Sakatlıkken kilo almamak için diyet yapmalı mıyım?",
      answer:
        "Sert bir diyet önerilmez. İyileşme dönemi enerji talebinin arttığı bir dönemdir ve agresif kısıtlama kas kaybını hızlandırıp iyileşmeyi geciktirir. Doğru yaklaşım enerjiyi bakım düzeyinin yaklaşık %10 altına çekmek, proteini kilogram başına 2,0–2,5 grama yükseltmek ve besin kalitesini artırmaktır.",
    },
    {
      question: "Ameliyat sonrası kas kaybını nasıl sınırlarım?",
      answer:
        "Üç ana müdahale vardır: proteini kilogram başına 2,0–2,5 grama çıkarmak ve güne 4–5 öğüne bölmek, enerjiyi aşırı kısmamak ve fizyoterapistin izin verdiği ölçüde erken dönemde izometrik veya kan akımı kısıtlamalı çalışmalara başlamak. Kreatin monohidrat da bu dönemde destekleyici olarak değerlendirilir.",
    },
    {
      question: "Kollajen takviyesi tendon iyileşmesine gerçekten yardımcı olur mu?",
      answer:
        "Mevcut çalışmalar, rehabilitasyon egzersizinden yaklaşık 60 dakika önce alınan 15 gram jelatin veya hidrolize kollajen ile C vitamini kombinasyonunun kollajen sentez belirteçlerini artırdığını göstermektedir. Etkinin egzersizle birlikte ortaya çıktığını unutmamak gerekir; takviye tek başına alındığında aynı sonuç beklenmez.",
    },
    {
      question: "Sakatlık döneminde alkol tüketebilir miyim?",
      answer:
        "Önerilmez. Alkol kas protein sentezini baskılar, uyku kalitesini bozar ve doku onarımını geciktirir. Kas kaybının zaten hızlandığı bir dönemde bu etkiler birikerek sahaya dönüş süresini uzatır.",
    },
    {
      question: "Kaybettiğim kası ne kadar sürede geri kazanırım?",
      answer:
        "Kas kaybı, kas kazanımından çok daha hızlıdır. İki haftalık tam immobilizasyonda kaybedilen kütleyi geri kazanmak, yeniden yüklenmeyle birlikte genellikle 6–12 haftalık düzenli bir süreç ister. Bu yüzden asıl strateji kaybı en baştan sınırlamaktır.",
    },
  ],
  related: [
    { href: "/sporcu-beslenmesi-antalya", label: "Sporcu beslenmesi (ana sayfa)", note: "Branşlar, sezon periyodizasyonu ve supplement kanıt tablosu." },
    { href: "/atletik-performans-beslenmesi", label: "Atletik performans beslenmesi", note: "Enerji uygunluğu, karbonhidrat periyodizasyonu ve toparlanma." },
    { href: "/glp1-kas-kaybi-onleme", label: "GLP-1'de kas kaybını önleme", note: "Zayıflama iğnesi sürecinde yağsız kütleyi koruma protokolü." },
  ],
  ctaTitle: "Sakatlık dönemini kayıpsız atlatın",
  ctaText:
    "Ameliyat öncesi hazırlık, immobilizasyon dönemi ve sahaya dönüş için üç ayrı plan hazırlanır. Süreci hekiminiz ve fizyoterapistinizle uyumlu biçimde yürütüyoruz.",
};
