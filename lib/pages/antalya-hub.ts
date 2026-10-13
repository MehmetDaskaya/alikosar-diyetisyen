import type { LandingData } from "../landing-types";
import { site } from "../site";
import { ilceler } from "./ilceler";

/**
 * /antalya-diyetisyen — ilçe sayfalarının üst düğümü.
 *
 * Ana sayfayla kelime yamyamlığına düşmemek için niyet farklılaştırıldı:
 * ana sayfa marka + hizmet, bu sayfa "Antalya'da diyetisyen nasıl seçilir"
 * karşılaştırma/rehber niyetini hedefler.
 */
export const antalyaHub: LandingData = {
  slug: "/antalya-diyetisyen",
  meta: {
    title: "Antalya'da Diyetisyen Nasıl Seçilir?",
    description:
      "Diyetisyen ile beslenme koçu farkı, uzmanlık alanı, ölçüm altyapısı ve ücret karşılaştırması. İlçelere göre erişim bilgileriyle birlikte.",
    keywords: [
      "antalya diyetisyen",
      "antalya en iyi diyetisyen",
      "diyetisyen seçimi",
      "antalya beslenme uzmanı",
      "muratpaşa diyetisyen",
      "konyaaltı diyetisyen",
      "diyetisyen fiyatları antalya",
    ],
  },
  crumbs: [{ name: "Antalya Diyetisyen", path: "/antalya-diyetisyen" }],
  eyebrow: "Rehber",
  h1: "Antalya'da Diyetisyen Seçerken <em>Nelere Bakmalısınız?</em>",
  answer:
    "Antalya'da diyetisyen seçerken sırasıyla dört şeye bakın: kişinin **lisanslı diyetisyen** olup olmadığı (\"beslenme koçu\" korumalı bir unvan değildir), sizin sorununuzda **özel uzmanlığı** bulunup bulunmadığı, takibin **ölçüme** dayanıp dayanmadığı ve programın gerçekten **uygulanabilir** olup olmadığı. Bu dördü sağlanmayan bir süreç, kısa vadede kilo verdirse de kalıcı olmuyor.",
  intro:
    "Bu sayfa bir reklam sayfası değil, seçim rehberi. Aşağıdaki kriterleri hangi diyetisyeni seçerseniz seçin kullanabilirsiniz; sayfanın sonunda ilçelere göre erişim bilgilerini bulacaksınız.",
  about: ["Diyetisyen seçimi", "Antalya", "Beslenme danışmanlığı"],
  sections: [
    {
      id: "unvan",
      heading: "Diyetisyen, beslenme uzmanı ve beslenme koçu arasındaki fark nedir?",
      tocLabel: "Unvan farkları",
      body: [
        "Türkiye'de **diyetisyen**, üniversitelerin dört yıllık Beslenme ve Diyetetik bölümünden mezun olan ve bu unvanı yasal olarak kullanabilen kişidir. Tıbbi beslenme tedavisi planlama yetkisi bu mezuniyete bağlıdır.",
        "**Beslenme koçu**, **diyet danışmanı** veya **kilo danışmanı** gibi ifadeler ise korunmuş unvanlar değildir. Kısa süreli bir sertifika programıyla da kullanılabilirler ve tıbbi beslenme tedavisi kapsamına girmezler.",
        "Pratik kontrol yolu basit: kişinin mezun olduğu üniversite ve bölümü sorun. Bir diyetisyen bunu söylemekten çekinmez.",
      ],
      table: {
        caption: "Unvanlar ve yetkinlik kapsamı",
        head: ["Unvan", "Eğitim", "Tıbbi beslenme tedavisi"],
        rows: [
          ["Diyetisyen", "4 yıllık Beslenme ve Diyetetik lisansı", "Evet"],
          ["Uzman diyetisyen", "Lisans + ilgili alanda yüksek lisans/doktora", "Evet"],
          ["Beslenme koçu / diyet danışmanı", "Standart bir zorunluluk yok", "Hayır"],
          ["Fitness eğitmeni", "Spor bilimleri veya sertifika", "Hayır — beslenme programı yazma yetkisi yok"],
        ],
      },
    },
    {
      id: "uzmanlik",
      heading: "Uzmanlık alanı neden önemli?",
      tocLabel: "Uzmanlık alanı",
      body: [
        "Her diyetisyen her konuda aynı derinlikte değildir. Sporcu beslenmesi, GLP-1 süreç yönetimi, çölyak, böbrek hastalığı ve gebelik beslenmesi birbirinden ayrı bilgi ve deneyim gerektirir.",
        "Kendi sorununuza en yakın deneyime sahip kişiyi aramak, sonuç açısından en belirleyici tercihtir. Örneğin lisanslı bir sporcuysanız, aradığınız kişinin daha önce takım, kulüp veya federasyon düzeyinde çalışmış olması genel bir kilo verme deneyiminden çok daha değerlidir.",
      ],
      bullets: [
        { title: "Sporcuysanız", text: "Profesyonel kulüp, federasyon veya takım deneyimi olan birini arayın. Vücut kompozisyonu ölçümü ve sezon periyodizasyonu bilgisi şart." },
        { title: "Zayıflama iğnesi kullanıyorsanız", text: "GLP-1 sürecinde kas kaybı, safra kesesi riski ve mikrobesin takibi konularında çalışmış birini tercih edin." },
        { title: "Kronik hastalığınız varsa", text: "Diyabet, tiroid, böbrek veya çölyak gibi tablolarda tıbbi beslenme tedavisi deneyimi arayın; süreç hekiminizle koordineli yürümeli." },
        { title: "Çocuğunuz için arıyorsanız", text: "Çocuk ve ergen beslenmesi ayrı bir alan. Büyüme eğrisi üzerinden takip yapmayan bir yaklaşımdan uzak durun." },
      ],
    },
    {
      id: "olcum",
      heading: "İyi bir diyetisyen takibini neye göre yapar?",
      tocLabel: "Ölçüm ve takip",
      body: [
        "Sadece tartıya bakan bir takip eksiktir. Tartı toplam ağırlığı gösterir; o ağırlığın ne kadarının yağ, ne kadarının kas ve ne kadarının su olduğunu söylemez.",
        "İyi bir takipte şunlar bulunur: **vücut kompozisyonu ölçümü**, mümkünse kan değerlerinin değerlendirilmesi, program dışı yaşam faktörlerinin (uyku, iş temposu, hareket) izlenmesi ve düzenli revizyon.",
      ],
      bullets: [
        { title: "Ölçüm sıklığı", text: "4–8 haftada bir vücut kompozisyonu ölçümü; her seferinde aynı koşullarda tekrarlanmalı." },
        { title: "Kan değerleri", text: "Ferritin, D vitamini, B12, tiroid ve açlık insülini gibi değerler beslenme planını doğrudan etkiler." },
        { title: "Program revizyonu", text: "Aynı listenin aylarca değişmemesi iyi bir işaret değildir. Vücut değiştikçe plan da değişmelidir." },
        { title: "İletişim kanalı", text: "Görüşmeler arasında soru sorabileceğiniz bir kanal olması, sürecin sürdürülebilirliğini belirgin biçimde artırır." },
      ],
    },
    {
      id: "uyari",
      heading: "Hangi yaklaşımlardan uzak durmalısınız?",
      tocLabel: "Uyarı işaretleri",
      body: ["Aşağıdakiler, danışan açısından risk taşıyan yaygın uygulamalardır:"],
      bullets: [
        { text: "**Herkese aynı listeyi** veren, kişisel değerlendirme yapmayan yaklaşımlar" },
        { text: "\"Haftada 5 kilo\" gibi **gerçekçi olmayan hız vaatleri** — hızlı kayıp kas kaybı ve safra taşı riski demektir" },
        { text: "Danışanın kendi ürünlerini almasını **koşul haline getiren** satış odaklı modeller" },
        { text: "Kanıtı olmayan **detoks, arındırma ve mucize** programları" },
        { text: "Hekim kontrolü gerektiren ilaçları **önerme veya yönlendirme** girişimleri" },
        { text: "Ölçüm yapmadan, sadece tartı üzerinden yürütülen takipler" },
      ],
      callout:
        "Fiyat tek başına kalite göstergesi değildir. Belirleyici olan, sürecin ne kadar sürdüğü, kaç görüşme içerdiği, ölçüm yapılıp yapılmadığı ve görüşmeler arasında destek alıp alamayacağınızdır. Bunları en baştan netleştirmenizde fayda var.",
    },
    {
      id: "ilceler",
      heading: "Antalya'da hangi ilçeden hizmet alabilirsiniz?",
      tocLabel: "İlçelere göre",
      body: [
        "Klinik Muratpaşa Şirinyalı Mahallesi'nde bulunuyor. Aşağıdaki ilçe sayfalarında ulaşım süreleri, o bölgeye özgü beslenme başlıkları ve sık sorulan sorular yer alıyor.",
      ],
      bullets: ilceler.map((i) => ({
        title: `${i.name} diyetisyen`,
        text: `${i.ulasim} Kapsanan mahalleler: ${i.mahalleler.slice(0, 5).join(", ")}.`,
      })),
    },
  ],
  faq: [
    {
      question: "Antalya'da diyetisyen ücretleri ne kadar?",
      answer:
        `Ücretler danışmanlık modeline göre değişir: tek seferlik görüşme, aylık takip paketi veya kulüp/kurumsal çalışma farklı fiyatlandırılır. Karşılaştırma yaparken sadece rakama değil, paketin kaç görüşme içerdiğine, vücut kompozisyonu ölçümü kapsayıp kapsamadığına ve görüşmeler arasında destek verilip verilmediğine bakmanız daha doğru olur. Güncel bilgi için ${site.phoneDisplay} numarasından ulaşabilirsiniz.`,
    },
    {
      question: "Antalya'da online diyetisyen desteği alınabilir mi?",
      answer:
        "Alınabilir. Görüşmeler video konferansla yürütülür ve program aynı şekilde hazırlanır. Tek fark vücut kompozisyonu ölçümüdür; bunun için periyodik klinik ziyareti veya ulaşılabilir bir ölçüm merkezine yönlendirme yapılır. Şehir dışında yaşayan veya deplasman/kamp nedeniyle sık seyahat eden danışanlar için uygundur.",
    },
    {
      question: "Diyetisyen ile beslenme koçu arasındaki fark nedir?",
      answer:
        "Diyetisyen, üniversitelerin dört yıllık Beslenme ve Diyetetik bölümünden mezun olan ve tıbbi beslenme tedavisi planlama yetkisine sahip kişidir. \"Beslenme koçu\", \"diyet danışmanı\" gibi ifadeler ise korunmuş unvanlar değildir, standart bir eğitim zorunluluğu yoktur ve tıbbi beslenme tedavisi kapsamına girmezler.",
    },
    {
      question: "Antalya'da sporcu beslenmesi konusunda uzman diyetisyen var mı?",
      answer:
        "Uzm. Dyt. Ali Koşar, Antalyaspor Kulübü voleybol takımının diyetisyenliğini yürütmekte ve TFF gelişim kampı sürecinde alt yaş kategorilerine beslenme desteği vermektedir. Burdur Mehmet Akif Ersoy Üniversitesi'nde tamamladığı tıbbi biyokimya yüksek lisansı ile laboratuvar ve metabolik değerlendirme tarafını da yürütmektedir.",
    },
    {
      question: "İlk görüşmeye ne getirmeliyim?",
      answer:
        "Varsa son 6 ay içindeki kan tahlilleriniz, kullandığınız ilaç ve takviyelerin listesi ve biliniyorsa tanı raporlarınız. Ayrıca son birkaç günde ne yediğinizi hatırlamanız süreci hızlandırır. Bunlar yoksa da görüşme yapılabilir; hangi tetkiklerin yararlı olacağı görüşmede belirlenir.",
    },
  ],
  related: [
    { href: "/sporcu-beslenmesi-antalya", label: "Sporcu beslenmesi", note: "Profesyonel kulüp tecrübesiyle performans odaklı beslenme." },
    { href: "/zayiflama-ignesi-diyetisyeni-antalya", label: "Zayıflama iğnesi süreci", note: "GLP-1 kullanırken kas kaybı ve safra yönetimi." },
    { href: "/biohacking-ve-longevity-antalya", label: "Biohacking ve longevity", note: "Ölçüme dayalı metabolik optimizasyon." },
    { href: "/hakkimda", label: "Uzm. Dyt. Ali Koşar", note: "Eğitim, biyokimya yüksek lisansı ve saha geçmişi." },
  ],
  ctaTitle: "Doğru soruları sordunuz, şimdi başlayalım",
  ctaText:
    "İlk görüşmede hedefinizi, sağlık geçmişinizi ve mevcut düzeninizi birlikte değerlendiriyoruz. Karar vermeden önce sürecin nasıl işlediğini konuşabilirsiniz.",
};
