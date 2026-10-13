import type { LandingData } from "../landing-types";

export const onlineDiyet: LandingData = {
  slug: "/online-diyet",
  meta: {
    title: "Online Diyet ve Uzaktan Beslenme Takibi",
    description:
      "Şehir dışı, kamp ve deplasman danışanları için online beslenme takibi: süreç, ölçüm, görüşme sıklığı ve klinik takiple farkları. Türkiye geneli.",
    keywords: [
      "online diyet",
      "online diyetisyen",
      "uzaktan beslenme takibi",
      "online sporcu beslenmesi",
      "video görüşme diyetisyen",
      "türkiye geneli online diyet",
    ],
  },
  crumbs: [
    { name: "Hizmetler", path: "/hizmetler" },
    { name: "Online Diyet", path: "/online-diyet" },
  ],
  eyebrow: "Uzaktan takip",
  h1: "Online Diyet ve <em>Uzaktan Beslenme Takibi</em>",
  answer:
    "Online takipte program içeriği ve görüşme sıklığı klinik süreçle **aynıdır**; tek fark vücut kompozisyonu ölçümünün nasıl yapıldığıdır. Görüşmeler video konferansla yürütülür, plan aynı veriye göre kurulur ve 4–8 haftada bir revize edilir. Kamp, deplasman veya şehir dışı nedeniyle düzenli klinik ziyareti yapamayan danışanlar için uygundur.",
  intro:
    "Online danışmanlık, \"e-postayla liste göndermek\" değil. Aşağıda sürecin nasıl işlediğini, hangi durumlarda önerildiğini ve klinik takipten hangi noktalarda ayrıldığını bulacaksınız.",
  about: ["Online diyet", "Uzaktan beslenme takibi", "Telesağlık"],
  serviceType: "Online beslenme danışmanlığı",
  serviceName: "Online Beslenme ve Diyet Danışmanlığı",
  sections: [
    {
      id: "kimler",
      heading: "Online takip kimler için uygun?",
      tocLabel: "Kimler için uygun",
      body: [
        "Online model, klinik ziyaretini düzenli olarak yapamayan ama sürecin sürekliliğine ihtiyaç duyan danışanlar için tasarlanmıştır.",
      ],
      bullets: [
        { title: "Kamp ve deplasman dönemindeki sporcular", text: "Sezon içinde şehir dışında geçen haftalar boyunca takibin kesilmemesi kritik." },
        { title: "Antalya dışında yaşayanlar", text: "Türkiye'nin herhangi bir şehrinden takip yapılabilir." },
        { title: "Yurt dışındaki danışanlar", text: "Saat farkı gözetilerek görüşme planlanabilir." },
        { title: "İş temposu yoğun olanlar", text: "Klinik ziyareti için zaman ayıramayan ancak süreci sürdürmek isteyenler." },
        { title: "İlçelerden gelmesi zor olanlar", text: "Döşemealtı, Serik veya Kepez gibi ulaşımın uzun sürdüğü bölgelerde hibrit model tercih edilebilir." },
      ],
    },
    {
      id: "surec",
      heading: "Online süreç nasıl işliyor?",
      tocLabel: "Süreç adımları",
      body: ["Süreç dört adımdan oluşuyor ve klinik süreçle aynı yapıyı izliyor."],
      steps: [
        {
          title: "Ön form ve hazırlık",
          text: "Görüşme öncesi sağlık geçmişi, kullanılan ilaç ve takviyeler, antrenman düzeni ve varsa son kan tahlilleri paylaşılır.",
        },
        {
          title: "İlk görüşme (45–60 dakika)",
          text: "Video konferansla yapılır. Hedef, alışkanlıklar, uyku düzeni ve daha önce denenen diyetler değerlendirilir; hangi tetkiklerin yararlı olacağı belirlenir.",
        },
        {
          title: "Ölçüm",
          text: "Mümkünse bir kez klinik ziyaretiyle vücut kompozisyonu ölçülür. Bu mümkün değilse ulaşılabilir bir ölçüm merkezine yönlendirme yapılır; ayrıca çevre ölçüleri ve fotoğraf takibi standart hale getirilir.",
        },
        {
          title: "Plan ve düzenli takip",
          text: "Program görüşmeden sonra hazırlanır. Takip görüşmeleri belirlenen aralıkla sürdürülür; arada soru sorabileceğiniz bir iletişim kanalı açık kalır.",
        },
      ],
    },
    {
      id: "fark",
      heading: "Online takip ile klinik takip arasındaki fark nedir?",
      tocLabel: "Klinikle farkı",
      body: [
        "İçerik ve takip disiplini aynıdır. Fark, ölçümün nasıl yapıldığında toplanır.",
      ],
      table: {
        caption: "Online ve klinik takip karşılaştırması",
        head: ["", "Klinik takip", "Online takip"],
        rows: [
          ["Görüşme", "Yüz yüze", "Video konferans"],
          ["Program içeriği", "Aynı", "Aynı"],
          ["Görüşme sıklığı", "Aynı", "Aynı"],
          ["Vücut kompozisyonu", "Klinikte ölçülür", "Periyodik klinik ziyareti veya ölçüm merkezi yönlendirmesi"],
          ["Çevre ölçüleri", "Diyetisyen alır", "Standart talimatla danışan alır"],
          ["Kan değerleri", "Birlikte değerlendirilir", "Birlikte değerlendirilir"],
          ["Görüşme arası destek", "Var", "Var"],
        ],
      },
      callout:
        "Vücut kompozisyonu verisi olmadan yürütülen bir takip, kilo kaybının ne kadarının yağdan ne kadarının kastan geldiğini gösteremez. Bu yüzden online süreçte de ölçüm, opsiyonel değil sürecin parçası olarak planlanır.",
    },
    {
      id: "sporcu",
      heading: "Sporcular için online takip nasıl kurgulanıyor?",
      tocLabel: "Sporcularda online",
      body: [
        "Sporcularda online takip çoğu zaman zorunluluk: sezon içinde deplasman ve kamp dönemleri klinik ziyaretini imkânsız kılıyor.",
        "Bu durumda plan, sabit bir liste yerine **senaryo bazlı** kurgulanıyor: kamp yemekhanesinde tabak nasıl kurulacak, otobüste ne alınacak, maç günü otel kahvaltısında ne tercih edilecek, çift antrenman gününde ara öğün nasıl yerleşecek.",
      ],
      bullets: [
        { text: "Antrenman takvimine göre haftalık enerji ve karbonhidrat planı" },
        { text: "Deplasman ve kamp için ayrı senaryo dokümanları" },
        { text: "Maç günü zamanlama protokolü" },
        { text: "Ölçümlerin sezon takvimine göre planlanması" },
        { text: "Gerektiğinde teknik ekip veya kulüp sağlık ekibiyle koordinasyon" },
      ],
    },
  ],
  faq: [
    {
      question: "Online diyet gerçekten işe yarıyor mu?",
      answer:
        "Sürecin belirleyici unsurları — doğru değerlendirme, uygulanabilir plan, düzenli takip ve revizyon — online ortamda da eksiksiz yürütülebilir. Kritik nokta ölçümdür: vücut kompozisyonu verisi olmadan yapılan takip, kaybın ne kadarının yağdan ne kadarının kastan geldiğini gösteremez. Bu yüzden online süreçte de ölçüm planlanır.",
    },
    {
      question: "Vücut kompozisyonu ölçümünü nasıl yaptırırım?",
      answer:
        "Üç seçenek var: periyodik olarak Antalya'daki kliniğe gelmek, bulunduğunuz şehirde ulaşılabilir bir ölçüm merkezine yönlendirilmek veya standart talimatlarla çevre ölçüleri ve fotoğraf takibi yapmak. İlk iki seçenek daha güvenilir veri sağlar; üçüncüsü diğerleri mümkün olmadığında tamamlayıcı olarak kullanılır.",
    },
    {
      question: "Görüşmeler hangi platform üzerinden yapılıyor?",
      answer:
        "Görüşmeler video konferans üzerinden yapılır; kullanılan platform danışanın erişimine göre belirlenir. Görüşmeler arasında soru sormak için WhatsApp üzerinden iletişim kanalı açık kalır.",
    },
    {
      question: "Yurt dışından takip alabilir miyim?",
      answer:
        "Alabilirsiniz. Saat farkı gözetilerek görüşme planlanır. Bulunduğunuz ülkedeki besin erişimi ve alışveriş alışkanlıkları dikkate alınarak plan hazırlanır; hazır ürünler yerine yerel olarak bulabileceğiniz besinler üzerinden kurgulanır.",
    },
    {
      question: "Online ve klinik takibi birlikte kullanabilir miyim?",
      answer:
        "Evet, hibrit model birçok danışan için en pratik seçenek. Vücut kompozisyonu ölçümü için 4–8 haftada bir klinik ziyareti yapılır, ara görüşmeler online sürdürülür. Özellikle Antalya'nın uzak ilçelerinden gelen danışanlarda bu model tercih ediliyor.",
    },
  ],
  related: [
    { href: "/sporcu-beslenmesi-antalya", label: "Sporcu beslenmesi", note: "Kamp ve deplasman senaryoları dâhil performans planlaması." },
    { href: "/zayiflama-ignesi-diyetisyeni-antalya", label: "Zayıflama iğnesi süreci", note: "GLP-1 kullanırken uzaktan takip nasıl yürütülür." },
    { href: "/antalya-diyetisyen", label: "Antalya'da diyetisyen seçme rehberi", note: "Uzmanlık, ölçüm ve takip kriterleri." },
  ],
  asideCtaTitle: "Neredeyseniz oradan başlayın",
  asideCtaText:
    "Antalya dışında, kampta veya yurt dışında olmanız süreci ertelemenizi gerektirmiyor. İlk görüşme online yapılabilir.",
  ctaTitle: "Uzaktan da olsa süreci doğru kuralım",
  ctaText:
    "İlk görüşme için WhatsApp üzerinden yazabilir veya randevu formunu doldurabilirsiniz. Görüşme öncesi hazırlık formu tarafımızdan iletilir.",
};
