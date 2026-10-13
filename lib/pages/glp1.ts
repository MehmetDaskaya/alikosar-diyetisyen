import type { LandingData } from "../landing-types";

/* ========================================================================
   PILLAR — /zayiflama-ignesi-diyetisyeni-antalya
   Hedef sorgular: "zayıflama iğnesi diyetisyeni", "mounjaro diyetisyeni antalya",
   "ozempic beslenme programı", "glp-1 diyetisyen"
   ======================================================================== */

export const zayiflamaIgnesi: LandingData = {
  slug: "/zayiflama-ignesi-diyetisyeni-antalya",
  meta: {
    title: "Zayıflama İğnesi (GLP-1) Diyetisyeni | Antalya",
    description:
      "Mounjaro, Ozempic ve Saxenda kullanırken kas kaybını, safra sorunlarını ve yan etkileri yönetmek. Biyokimya yüksek lisanslı diyetisyen, Antalya.",
    keywords: [
      "zayıflama iğnesi diyetisyeni",
      "mounjaro diyetisyeni antalya",
      "ozempic beslenme programı",
      "glp-1 diyetisyen",
      "tirzepatid beslenme",
      "semaglutid diyet",
      "zayıflama iğnesi kas kaybı",
      "antalya obezite diyetisyeni",
    ],
  },
  crumbs: [
    { name: "Hizmetler", path: "/hizmetler" },
    { name: "Zayıflama İğnesi (GLP-1) Süreci", path: "/zayiflama-ignesi-diyetisyeni-antalya" },
  ],
  eyebrow: "Biyokimya yüksek lisansı · Hekim kontrolünde süreç",
  h1: "Zayıflama İğnesi (GLP-1) Kullanırken <em>Doğru Beslenme</em> — Antalya",
  answer:
    "GLP-1 grubu ilaçlarla (Mounjaro, Ozempic, Saxenda) verilen kilonun yaklaşık **%25'i kas ve yağsız dokudan** gelir; ayrıca hızlı kilo kaybı ilk 6–12 ayda **safra taşı riskini** artırır. Bu iki risk beslenmeyle büyük ölçüde yönetilebilir. Antalya'da Uzm. Dyt. Ali Koşar, tıbbi biyokimya yüksek lisansı temelinde hekim kontrolündeki GLP-1 süreçlerine beslenme tarafından eşlik eder.",
  intro:
    "Bu ilaçlar iştahı baskılar; ne yediğinizi düzenlemez. Aynı kilo kaybı iki kişide çok farklı vücut kompozisyonu sonucu verebilir — farkı yaratan, o dönemde ne yediğiniz ve nasıl hareket ettiğinizdir. Bu sayfa, sürecin beslenme tarafını baştan sona anlatıyor.",
  medical: true,
  disclaimerTopic: "GLP-1 reseptör agonisti (zayıflama iğnesi) kullanımı",
  about: [
    "GLP-1 reseptör agonistleri",
    "Tirzepatid",
    "Semaglutid",
    "Obezite tedavisi",
    "Sarkopenik obezite",
    "Safra taşı",
  ],
  serviceType: "GLP-1 (zayıflama iğnesi) süreci beslenme danışmanlığı",
  serviceName: "Zayıflama İğnesi (GLP-1) Süreci Beslenme Yönetimi",
  proof: [
    { value: "%25", label: "GLP-1'de kilo kaybının yağsız dokudan gelen tipik payı" },
    { value: "1,2–1,6 g/kg", label: "Aktif kilo kaybı döneminde protein hedefi" },
    { value: "6–12 ay", label: "Safra taşı riskinin en yüksek olduğu dönem" },
    { value: "Biyokimya YL", label: "Tıbbi biyokimya yüksek lisansı" },
  ],
  sections: [
    {
      id: "nedir",
      heading: "GLP-1 iğneleri nasıl çalışır ve diyetisyen neden gerekir?",
      tocLabel: "Nasıl çalışır",
      body: [
        "GLP-1 reseptör agonistleri, bağırsakta doğal olarak salgılanan bir hormonun etkisini taklit eder: mide boşalmasını yavaşlatır, tokluk sinyalini güçlendirir ve iştahı baskılar. Tirzepatid (Mounjaro) buna ek olarak GIP reseptörünü de etkilediği için **çift etkili** kabul edilir.",
        "İlacın yaptığı şey nettir: **daha az yemenizi sağlar.** Yapmadığı şey de nettir: neyi yiyeceğinizi seçmez. İştah %40 azaldığında, kalan %60'lık alanın nasıl doldurulduğu tüm sonucu belirler.",
        "Diyetisyen tam bu noktada devreye girer. Aynı 15 kiloyu veren iki kişiden biri kasını koruyup metabolik sağlığını iyileştirebilir; diğeri kas kaybedip, ilacı bıraktığında daha kötü bir metabolizmayla kalabilir. Fark, ilaçta değil süreçte.",
      ],
      table: {
        caption: "Türkiye'de yaygın kullanılan GLP-1 grubu moleküller",
        head: ["Molekül", "Ticari ad (örnek)", "Etki mekanizması", "Uygulama"],
        rows: [
          ["Semaglutid", "Ozempic, Wegovy", "GLP-1 reseptör agonisti", "Haftada 1 kez"],
          ["Tirzepatid", "Mounjaro", "GLP-1 + GIP çift agonisti", "Haftada 1 kez"],
          ["Liraglutid", "Saxenda, Victoza", "GLP-1 reseptör agonisti", "Günde 1 kez"],
          ["Dulaglutid", "Trulicity", "GLP-1 reseptör agonisti", "Haftada 1 kez"],
        ],
      },
      callout:
        "**Bu ilaçlar reçeteye tabidir ve kullanım kararı hekime aittir.** Bu sayfada verilen bilgiler ilaç önerisi değildir; hekiminizin başlattığı bir sürece beslenme tarafından nasıl eşlik edildiğini anlatır. Doz, artış takvimi ve ilacın sürdürülmesi tamamen hekiminizin kararıdır.",
    },
    {
      id: "riskler",
      heading: "Zayıflama iğnesi kullanırken en sık karşılaşılan üç sorun nedir?",
      tocLabel: "Üç ana risk",
      body: [
        "Klinikte gelen danışanlarda tablo neredeyse hep aynı üç başlıkta toplanıyor: kas kaybı, safra kesesi sorunları ve sindirim yan etkileri. Üçü de öngörülebilir ve üçü de beslenmeyle büyük ölçüde yönetilebilir.",
      ],
      steps: [
        {
          title: "Kas ve yağsız doku kaybı",
          text: "Klinik çalışmalarda GLP-1 ile kaybedilen ağırlığın yaklaşık dörtte biri yağsız dokudan gelmektedir; tirzepatid ile yapılan SURMOUNT-1 alt çalışmasında bu oran **%25 civarında** bildirilmiştir. Yetersiz protein ve direnç antrenmanının olmadığı durumlarda bu oran daha da yükselir.",
        },
        {
          title: "Safra kesesi ve safra taşı",
          text: "Hızlı kilo kaybı safra kolesterol doygunluğunu artırır; aynı zamanda az yemek safra kesesinin kasılma sıklığını azaltır. İkisi birlikte taş oluşumu için uygun zemin hazırlar. Risk özellikle **ilk 6–12 ayda** yüksektir.",
        },
        {
          title: "Sindirim yan etkileri",
          text: "Bulantı, kabızlık, reflü, şişkinlik ve erken doyma en sık bildirilen yakınmalardır. Bunların çoğu porsiyon büyüklüğü, öğün sıklığı, yağ oranı ve sıvı-lif dengesiyle belirgin biçimde azaltılabilir.",
        },
      ],
      quote: {
        text: "İğne iştahınızı kapatır. Kasınızı koruyacak olan iğne değil, o küçülen tabakta ne olduğu.",
        cite: "Uzm. Dyt. Ali Koşar",
      },
    },
    {
      id: "protokol",
      heading: "GLP-1 sürecinde beslenme protokolü nasıl kurulur?",
      tocLabel: "Beslenme protokolü",
      body: [
        "Protokol, doz artış takvimine paralel ilerler. Doz yükseldikçe iştah daha çok baskılanır; bu yüzden plan sabit kalmaz, her doz basamağında yeniden ayarlanır.",
      ],
      steps: [
        {
          title: "Başlangıç değerlendirmesi",
          text: "Vücut kompozisyonu ölçümü (yağsız kütle referans alınır), kan değerleri, safra kesesi öyküsü, mevcut ilaçlar ve beslenme alışkanlıkları çıkarılır. Başlangıç yağsız kütlesini bilmeden kas kaybını takip etmek mümkün değildir.",
        },
        {
          title: "Protein önceliği",
          text: "Aktif kilo kaybı döneminde protein hedefi **günde 1,2–1,6 g/kg**'dır ve her öğünde 25–35 gram olacak şekilde bölünür. İştah baskılıyken tabaktaki ilk şey protein olmalıdır — çünkü tabak bitmeyebilir.",
        },
        {
          title: "Yağı tamamen kısmamak",
          text: "Safra kesesinin kasılması için öğünlerde belirli miktarda yağ gerekir. Enerjinin yaklaşık **%20–25'inin** yağdan gelmesi, hem safra akışını hem de yağda çözünen vitamin emilimini destekler.",
        },
        {
          title: "Kilo kaybı hızını sınırlamak",
          text: "Haftalık kayıp vücut ağırlığının **%1'ini** aşmamalıdır. Daha hızlı kayıp hem kas kaybını hem de safra taşı riskini artırır. Bu, doz artışı konusunda hekimle yapılacak görüşmenin de temel verisidir.",
        },
        {
          title: "Direnç antrenmanı",
          text: "Haftada 2–3 gün direnç çalışması, kas kaybını sınırlamada beslenmeden sonraki en güçlü müdahaledir. Yeterli protein ve direnç antrenmanı birlikte uygulandığında yağsız kütle kaybı büyük ölçüde önlenebilir.",
        },
        {
          title: "Mikrobesin takibi",
          text: "Toplam alım ciddi biçimde azaldığı için demir, B12, D vitamini, kalsiyum ve folat açısından risk artar. Bu değerler periyodik olarak izlenir; eksiklik varsa hekimle birlikte tamamlanır.",
        },
        {
          title: "Çıkış planı",
          text: "İlaç bırakıldığında iştah geri gelir. Kilo korunmasını belirleyen şey, ilaç dönemi boyunca kurulan alışkanlıklar ve korunan kas kütlesidir. Çıkış planı ilacın son gününde değil, **ilk gününde** kurulur.",
        },
      ],
    },
    {
      id: "yan-etki",
      heading: "Bulantı, kabızlık ve reflüyü beslenmeyle nasıl azaltırım?",
      tocLabel: "Yan etki yönetimi",
      body: [
        "Bu yan etkilerin çoğu, mide boşalmasının yavaşlamasından kaynaklanır. Yani sorun çoğu zaman \"ne yediğiniz\" kadar \"ne kadar ve ne hızda yediğinizdir\".",
      ],
      table: {
        caption: "Sık görülen yan etkiler ve beslenme tarafındaki ilk müdahaleler",
        head: ["Yakınma", "Muhtemel sebep", "Beslenme müdahalesi"],
        rows: [
          ["Bulantı", "Yavaşlamış mide boşalması, büyük porsiyon", "Porsiyonu küçültüp öğün sayısını artırın; çok yağlı ve çok baharatlı öğünlerden kaçının; sıvıyı öğün arasına alın"],
          ["Kabızlık", "Düşük lif ve sıvı alımı, azalmış hacim", "Günde 25–30 g life kademeli çıkış, 2–2,5 L sıvı, kuru erik/keten tohumu, düzenli hareket"],
          ["Reflü, yanma", "Mide içeriğinin uzun süre kalması", "Son öğünü yatmadan 3 saat önce bitirin; porsiyonu küçültün; yatağın baş kısmını yükseltin"],
          ["Erken doyma", "Güçlü tokluk sinyali", "Tabağa önce proteini koyun; sıvı kaloriden değil, besin yoğun küçük öğünlerden yararlanın"],
          ["Şişkinlik, gaz", "Ani lif artışı, fermente edilebilir karbonhidratlar", "Lifi kademeli artırın; tetikleyici besinleri geçici olarak azaltın"],
          ["Saç dökülmesi", "Hızlı kilo kaybı, protein ve demir yetersizliği", "Protein hedefini tutturun; ferritin ve D vitaminini kontrol ettirin"],
        ],
      },
      callout:
        "Şiddetli ve geçmeyen karın ağrısı, inatçı kusma, sağ üst karın bölgesinde sırta vuran ağrı veya gözlerde sararma **acil hekim başvurusu** gerektirir. Bunlar beslenmeyle yönetilecek yakınmalar değildir.",
    },
    {
      id: "kimler",
      heading: "Bu destek kimler için uygun?",
      tocLabel: "Kimler için uygun",
      body: [
        "GLP-1 süreç yönetimi, ilacı hekim kontrolünde kullanan veya kullanmayı hekimiyle değerlendiren kişiler için tasarlanmıştır.",
      ],
      bullets: [
        { text: "Hekimi tarafından Mounjaro, Ozempic, Wegovy veya Saxenda başlanan ve süreci doğru yönetmek isteyenler" },
        { text: "İğne kullanırken **kas kaybettiğini**, halsizleştiğini veya gücünün düştüğünü fark edenler" },
        { text: "Safra kesesi taşı öyküsü olan veya süreç içinde safra şikâyeti gelişenler" },
        { text: "Bulantı, kabızlık ve reflü nedeniyle ilaca devam etmekte zorlananlar" },
        { text: "İlacı bırakmayı planlayan ve kilonun geri gelmesini istemeyenler" },
        { text: "Daha önce iğne kullanıp bırakmış, kilo geri almış ve bu kez süreci doğru kurmak isteyenler" },
        { text: "İnsülin direnci, tip 2 diyabet veya metabolik sendrom tanısı olup beslenmesini bu tabloya göre düzenlemek isteyenler" },
      ],
    },
  ],
  faq: [
    {
      question: "Zayıflama iğnesi kullanırken diyetisyene gerek var mı?",
      answer:
        "İlaç iştahı baskılar ancak besin seçimini, protein miktarını veya kas korumasını düzenlemez. GLP-1 ile kaybedilen kilonun yaklaşık %25'i yağsız dokudan gelir ve hızlı kayıp safra taşı riskini artırır. Yeterli protein, kontrollü kayıp hızı ve direnç antrenmanı bu risklerin ikisini de belirgin biçimde azaltır — bu üçünü kurmak diyetisyen işidir.",
    },
    {
      question: "Mounjaro kullanırken günde ne kadar protein almalıyım?",
      answer:
        "Aktif kilo kaybı döneminde günde kilogram başına 1,2–1,6 gram protein hedeflenir; kas kaybı riski yüksek olan veya ileri yaştaki kişilerde bu bandın üst sınırına yaklaşılır. 80 kilogramlık bir kişi için bu yaklaşık 96–128 gram eder. İştah baskılıyken bu miktara ulaşmak zor olduğu için protein öğünlere bölünür ve tabakta önce protein tüketilir.",
    },
    {
      question: "GLP-1 kullanırken kaç kilo vermek güvenlidir?",
      answer:
        "Haftalık kilo kaybının vücut ağırlığının %1'ini aşmaması önerilir; 100 kilogramlık bir kişi için bu haftada yaklaşık 1 kilogramdır. Daha hızlı kayıp hem kas kaybını hem de safra taşı riskini artırır. Kayıp bu hızın üzerine çıkıyorsa doz ve beslenme planı hekim ile birlikte gözden geçirilir.",
    },
    {
      question: "İğneyi bırakınca kilo geri gelir mi?",
      answer:
        "İlaç bırakıldığında iştah baskılanması ortadan kalkar ve klinik çalışmalarda katılımcıların kaybettikleri kilonun önemli bir bölümünü bir yıl içinde geri aldıkları gösterilmiştir. Geri alımı belirleyen iki şey vardır: ilaç döneminde korunan kas kütlesi ve kalıcı hale gelmiş beslenme alışkanlıkları. Bu yüzden çıkış planı sürecin sonunda değil başında kurulur.",
    },
    {
      question: "Zayıflama iğnesi safra kesesine zarar verir mi?",
      answer:
        "İlacın kendisinden çok, yol açtığı hızlı kilo kaybı ve azalmış öğün hacmi safra taşı riskini artırır. Risk özellikle ilk 6–12 ayda yüksektir. Kilo kaybı hızını haftada %1'in altında tutmak, öğünlerde yeterli yağ bırakmak (enerjinin yaklaşık %20–25'i) ve öğün atlamamak riski azaltır. Safra taşı öyküsü olanlarda süreç hekimle birlikte planlanmalıdır.",
    },
    {
      question: "İğne kullanırken spor yapmalı mıyım?",
      answer:
        "Evet, ve tercihen direnç antrenmanı. Haftada 2–3 gün yapılan direnç çalışması, yeterli protein alımıyla birleştiğinde yağsız kütle kaybını büyük ölçüde önleyebilir. Sadece yürüyüş veya kardiyo kas korumasında aynı etkiyi göstermez.",
    },
    {
      question: "İlacı siz mi yazıyorsunuz?",
      answer:
        "Hayır. GLP-1 grubu ilaçlar reçeteye tabidir ve reçete etme yetkisi hekimlere aittir. Verilen hizmet, hekiminizin başlattığı sürece beslenme tarafından eşlik etmektir: protein ve enerji planı, yan etki yönetimi, mikrobesin takibi, kas koruma protokolü ve ilaç sonrası dönem planı.",
    },
    {
      question: "Antalya'da GLP-1 sürecini yöneten diyetisyen kimdir?",
      answer:
        "Uzm. Dyt. Ali Koşar, Antalya Muratpaşa Şirinyalı'daki kliniğinde GLP-1 (Mounjaro, Ozempic, Saxenda) kullanan danışanların beslenme süreçlerini yürütmektedir. Burdur Mehmet Akif Ersoy Üniversitesi'nde tamamladığı tıbbi biyokimya yüksek lisansı, ilacın metabolik etkilerinin ve laboratuvar takibinin yorumlanmasında doğrudan kullanılmaktadır.",
    },
  ],
  related: [
    { href: "/glp1-kas-kaybi-onleme", label: "GLP-1'de kas kaybını önleme", note: "Protein hedefi, direnç antrenmanı ve ölçüm temelli takip protokolü." },
    { href: "/glp1-safra-kesesi-sorunlari", label: "GLP-1 ve safra kesesi", note: "Safra taşı riski neden artar, beslenmeyle nasıl azaltılır." },
    { href: "/mounjaro-beslenme-programi", label: "Mounjaro beslenme programı", note: "Doz basamaklarına göre haftalık beslenme planı." },
    { href: "/biohacking-ve-longevity-antalya", label: "Biohacking ve longevity", note: "Metabolik esneklik, uyku ve ölçüme dayalı sağlık optimizasyonu." },
  ],
  asideCtaTitle: "İğne sürecinizi doğru kurun",
  asideCtaText:
    "Vücut kompozisyonu ölçümü ve kan değeri değerlendirmesiyle başlayan, doz basamaklarınıza göre güncellenen bir plan.",
  ctaTitle: "Kilonuzu verirken kasınızı koruyun",
  ctaText:
    "GLP-1 süreci doğru yönetildiğinde kayıp ağırlıklı olarak yağdan gelir ve ilaç sonrası dönem çok daha kolay olur. İlk görüşme için randevu oluşturun.",
};

/* ========================================================================
   SPOKE — /glp1-kas-kaybi-onleme
   ======================================================================== */

export const glp1KasKaybi: LandingData = {
  slug: "/glp1-kas-kaybi-onleme",
  meta: {
    title: "Zayıflama İğnesinde Kas Kaybı Nasıl Önlenir?",
    description:
      "GLP-1 ile verilen kilonun yaklaşık %25'i kastan gelir. Protein hedefi, direnç antrenmanı ve ölçüm temelli takiple kas kaybını önleme protokolü.",
    keywords: [
      "zayıflama iğnesi kas kaybı",
      "mounjaro kas kaybı",
      "ozempic kas erimesi",
      "glp-1 protein miktarı",
      "sarkopenik obezite",
      "yağsız kütle koruma",
    ],
  },
  crumbs: [
    { name: "Zayıflama İğnesi (GLP-1) Süreci", path: "/zayiflama-ignesi-diyetisyeni-antalya" },
    { name: "Kas Kaybını Önleme", path: "/glp1-kas-kaybi-onleme" },
  ],
  eyebrow: "GLP-1 süreç yönetimi",
  h1: "Zayıflama İğnesinde <em>Kas Kaybı</em> Nasıl Önlenir?",
  answer:
    "GLP-1 ile verilen kilonun yaklaşık **%25'i yağsız dokudan** gelir. Bunu önlemenin üç bileşeni vardır: günde **1,2–1,6 g/kg protein**, haftada **2–3 gün direnç antrenmanı** ve haftalık kaybın vücut ağırlığının **%1'ini aşmaması**. Bu üçü birlikte uygulandığında yağsız kütle büyük ölçüde korunabilir; hatta bazı vakalarda artabilir.",
  intro:
    "Kas kaybı, zayıflama iğnesi sürecinin en sinsi tarafıdır: tartıda görünmez, aynada geç fark edilir ve ilacı bıraktığınızda faturası çıkar. Bu sayfada kaybın neden olduğunu ve nasıl engellendiğini adım adım bulacaksınız.",
  medical: true,
  disclaimerTopic: "GLP-1 kullanımı ve kas kütlesi",
  about: ["Kas kaybı", "Yağsız kütle", "Sarkopenik obezite", "Direnç antrenmanı", "Protein alımı"],
  serviceType: "GLP-1 sürecinde kas koruma programı",
  sections: [
    {
      id: "neden",
      heading: "Zayıflama iğnesi neden kas kaybettirir?",
      tocLabel: "Kaybın sebebi",
      body: [
        "İlacın kasa doğrudan zararlı bir etkisi yoktur. Kayıp, **hızlı ve büyük bir enerji açığının** doğal sonucudur. Vücut enerji açığında sadece yağ değil, aynı zamanda daha az kullanılan kas dokusunu da yakıt olarak değerlendirir.",
        "Buna üç faktör eşlik eder. Birincisi, iştah baskılandığı için **protein alımı ciddi biçimde düşer** — çoğu danışan farkında olmadan günde 50–60 grama iner. İkincisi, kayıp hızlıdır; yavaş kilo kaybında vücut kas dokusunu daha iyi korur. Üçüncüsü, çoğu kişi bu dönemde direnç antrenmanı yapmaz; kasa \"sana ihtiyacım var\" sinyali gitmez.",
        "Sonuç, literatürde **sarkopenik obezite** olarak tanımlanan tabloya yaklaşmaktır: kilo düşer ama yağsız kütle de düştüğü için bazal metabolizma yavaşlar, güç azalır ve ilaç bırakıldığında geri alım daha kolay olur.",
      ],
      table: {
        caption: "Aynı 15 kilo kaybının iki farklı bileşimi",
        head: ["", "Desteksiz süreç", "Protein + direnç antrenmanı"],
        rows: [
          ["Toplam kayıp", "15 kg", "15 kg"],
          ["Yağdan gelen", "yaklaşık 11 kg", "yaklaşık 14 kg"],
          ["Yağsız dokudan gelen", "yaklaşık 4 kg", "1 kg veya daha az"],
          ["Bazal metabolizma", "Belirgin düşüş", "Büyük ölçüde korunur"],
          ["İlaç sonrası geri alım riski", "Yüksek", "Belirgin biçimde düşük"],
          ["Görünüm", "Sarkma, yorgun ifade", "Daha sıkı, oranlı"],
        ],
      },
      callout:
        "Tablodaki değerler, klinik çalışmalarda bildirilen tipik oranlardan yola çıkılarak hazırlanmış **örnek bir karşılaştırmadır**; kişisel sonuç yaş, başlangıç kas kütlesi, doz ve uygulama düzenine göre değişir.",
    },
    {
      id: "protein",
      heading: "Günde ne kadar protein almalıyım?",
      tocLabel: "Protein hedefi",
      body: [
        "Aktif kilo kaybı döneminde hedef **günde kilogram başına 1,2–1,6 gram**dır. Kas kaybı riski yüksek olan gruplarda (65 yaş üstü, başlangıçta düşük kas kütlesi, çok hızlı kayıp) üst sınıra yaklaşılır.",
        "Toplam kadar önemli olan dağılımdır. Kas protein sentezi, öğün başına yaklaşık **25–35 gram** protein eşiğiyle uyarılır. Günlük 100 gramı tek öğünde almak, dört öğüne bölmekten daha az etkilidir.",
      ],
      table: {
        caption: "Vücut ağırlığına göre günlük protein hedefi ve öğün dağılımı",
        head: ["Vücut ağırlığı", "Günlük protein", "Öğün başına (4 öğün)"],
        rows: [
          ["60 kg", "72–96 g", "18–24 g"],
          ["70 kg", "84–112 g", "21–28 g"],
          ["80 kg", "96–128 g", "24–32 g"],
          ["90 kg", "108–144 g", "27–36 g"],
          ["100 kg", "120–160 g", "30–40 g"],
        ],
      },
      bullets: [
        { title: "Tabakta önce protein", text: "İştah baskılıyken tabak bitmeyebilir. İlk bitirilen şey protein olmalı; garnitür ve karbonhidrat sonra gelir." },
        { title: "Sıvı protein bir çözüm olabilir", text: "Bulantı nedeniyle katı gıda zorlanıyorsa süt, ayran, kefir veya protein tozuyla hazırlanmış içecekler hedefe ulaşmayı kolaylaştırır." },
        { title: "Her öğüne bir protein kaynağı", text: "Yumurta, yoğurt, peynir, tavuk, balık, kırmızı et, baklagil ve süt ürünleri gün içine dağıtılır." },
        { title: "Böbrek hastalığı varsa farklıdır", text: "Kronik böbrek hastalığı olan kişilerde protein hedefi hekim ve diyetisyen tarafından ayrıca belirlenir; yukarıdaki değerler bu grup için geçerli değildir." },
      ],
    },
    {
      id: "antrenman",
      heading: "Hangi egzersiz kası korur?",
      tocLabel: "Egzersiz protokolü",
      body: [
        "Kas koruması için gereken uyaran **direnç antrenmanıdır**; yürüyüş ve kardiyo bu işi görmez. Yürüyüş kalp sağlığı ve toplam enerji harcaması için değerlidir ancak kasa \"korunman gerekiyor\" sinyalini gönderen şey yüklenmedir.",
      ],
      steps: [
        { title: "Haftada 2–3 gün", text: "Tüm vücudu kapsayan direnç çalışması. Başlangıç için 20–30 dakikalık seanslar yeterlidir." },
        { title: "Büyük kas gruplarına öncelik", text: "Bacak, kalça, sırt ve göğüs. Çok eklemli hareketler (squat, kalça köprüsü, itme, çekme) küçük izolasyon hareketlerinden daha verimlidir." },
        { title: "Kademeli yüklenme", text: "Her hafta ya bir tekrar ya da az bir ağırlık ekleyin. Sabit kalan yük, bir süre sonra koruyucu etkisini kaybeder." },
        { title: "Antrenman sonrası protein", text: "Çalışmadan sonraki öğünde 25–35 gram protein almak, sınırlı enerji alımı olan dönemde kas sentezi yanıtını destekler." },
        { title: "Günlük adım", text: "Direnç antrenmanına ek olarak günde 7.000–10.000 adım, toplam enerji harcamasını ve insülin duyarlılığını destekler." },
      ],
      callout:
        "Ekipmanınız yoksa vücut ağırlığıyla yapılan bir program da işe yarar. Önemli olan salon değil, **düzenli ve giderek zorlaşan** bir yüklenme olmasıdır.",
    },
    {
      id: "takip",
      heading: "Kas kaybettiğimi nasıl anlarım?",
      tocLabel: "Nasıl takip edilir",
      body: [
        "Tartıdan anlaşılmaz. Tartı sadece toplam ağırlığı gösterir; o ağırlığın neyden oluştuğunu söylemez. Bu yüzden takip **vücut kompozisyonu ölçümüyle** yapılır ve referans olarak kilo değil **yağsız kütle** izlenir.",
      ],
      bullets: [
        { title: "Ölçüm sıklığı", text: "Süreç boyunca 4–8 haftada bir vücut kompozisyonu ölçümü. Ölçümler aynı koşullarda (aynı saat, aç karnına, benzer hidrasyon) tekrarlanır." },
        { title: "Fonksiyonel işaretler", text: "El kavrama gücü, merdiven çıkarken zorlanma, daha önce kaldırdığınız ağırlığı kaldıramamak — bunlar kas kaybının erken uyarılarıdır." },
        { title: "Laboratuvar", text: "Hemogram, ferritin, D vitamini, B12 ve albümin takibi. Yetersiz alımda bu değerler önce bozulur." },
        { title: "Uyarı işaretleri", text: "Sürekli halsizlik, saç dökülmesinde artış, üşüme, adet düzensizliği ve toparlanamama — bu tabloda plan ve doz hekimle birlikte gözden geçirilir." },
      ],
    },
  ],
  faq: [
    {
      question: "Ozempic veya Mounjaro kullanırken kas kaybı kaçınılmaz mı?",
      answer:
        "Hayır. Yeterli protein (günde 1,2–1,6 g/kg), haftada 2–3 gün direnç antrenmanı ve haftalık kaybın vücut ağırlığının %1'ini aşmaması sağlandığında yağsız kütle büyük ölçüde korunabilir. Bu üç koşul sağlanmadığında kaybın yaklaşık dörtte biri yağsız dokudan gelir.",
    },
    {
      question: "İğne kullanırken protein tozu içebilir miyim?",
      answer:
        "İçebilirsiniz. İştah baskılıyken katı gıdayla günlük protein hedefine ulaşmak zorlaşır; bu durumda protein tozu pratik bir çözümdür. Böbrek hastalığı olanlarda ve gebelikte kullanım kararı hekimle birlikte verilmelidir.",
    },
    {
      question: "Kas kaybını tartıdan anlayabilir miyim?",
      answer:
        "Anlayamazsınız. Tartı yalnızca toplam ağırlığı gösterir, o ağırlığın ne kadarının yağ ne kadarının kas olduğunu söylemez. Takip için 4–8 haftada bir vücut kompozisyonu ölçümü gerekir; referans değer kilo değil, yağsız kütledir.",
    },
    {
      question: "Sadece yürüyüş yapmak kası korumaya yeter mi?",
      answer:
        "Yetmez. Yürüyüş kalp-damar sağlığı ve toplam enerji harcaması için değerlidir ancak kasa yeterli yüklenme sinyali göndermez. Kas korumasında gerekli olan uyaran direnç antrenmanıdır; haftada 2–3 gün, büyük kas gruplarını kapsayan ve kademeli olarak zorlaşan bir program önerilir.",
    },
    {
      question: "Yaşım 60'ın üzerinde, protein hedefim değişir mi?",
      answer:
        "Değişir. İleri yaşta kas protein sentezine direnç arttığı için protein hedefi bandın üst sınırına (1,5–1,6 g/kg) yaklaştırılır ve öğün başına miktar 30–35 grama çıkarılır. Kilo kaybı hızının da daha yavaş tutulması önerilir. Böbrek fonksiyonları normal değilse bu değerler hekim değerlendirmesiyle ayarlanır.",
    },
  ],
  related: [
    { href: "/zayiflama-ignesi-diyetisyeni-antalya", label: "Zayıflama iğnesi süreci (ana sayfa)", note: "Protokol, yan etki yönetimi ve çıkış planı." },
    { href: "/glp1-safra-kesesi-sorunlari", label: "GLP-1 ve safra kesesi", note: "Taş riski neden artar, beslenmeyle nasıl azaltılır." },
    { href: "/sporcu-sakatligi-beslenmesi", label: "Sakatlıkta kas kaybını önleme", note: "İmmobilizasyon döneminde benzer mekanizmalar işler." },
  ],
  ctaTitle: "Kasınızı ölçerek koruyun",
  ctaText:
    "Vücut kompozisyonu ölçümüyle başlayan, protein hedefi ve direnç antrenmanı planını birlikte kuran bir süreç için randevu oluşturun.",
};

/* ========================================================================
   SPOKE — /glp1-safra-kesesi-sorunlari
   ======================================================================== */

export const glp1Safra: LandingData = {
  slug: "/glp1-safra-kesesi-sorunlari",
  meta: {
    title: "Zayıflama İğnesi ve Safra Kesesi | Taş Riski",
    description:
      "GLP-1 kullanırken safra taşı riski neden artar? Kilo kaybı hızı, öğünlerdeki yağ oranı ve öğün düzeniyle riski azaltma protokolü. Antalya.",
    keywords: [
      "zayıflama iğnesi safra taşı",
      "mounjaro safra kesesi",
      "ozempic safra sorunu",
      "hızlı kilo verme safra taşı",
      "safra kesesi beslenmesi",
      "safra kesesi ameliyatı sonrası diyet",
    ],
  },
  crumbs: [
    { name: "Zayıflama İğnesi (GLP-1) Süreci", path: "/zayiflama-ignesi-diyetisyeni-antalya" },
    { name: "Safra Kesesi Sorunları", path: "/glp1-safra-kesesi-sorunlari" },
  ],
  eyebrow: "GLP-1 süreç yönetimi",
  h1: "Zayıflama İğnesi ve <em>Safra Kesesi</em>: Risk Neden Artar, Nasıl Azaltılır?",
  answer:
    "GLP-1 kullanımında safra taşı riski, ilacın kendisinden çok **hızlı kilo kaybı** ve **azalmış öğün hacminden** kaynaklanır: karaciğer safraya daha fazla kolesterol boşaltırken, az yiyen bir kişide safra kesesi yeterince kasılmaz ve safra durağanlaşır. Risk ilk **6–12 ayda** en yüksektir; kayıp hızını sınırlamak ve öğünlerde yeterli yağ bırakmak riski azaltır.",
  intro:
    "\"İğneye başladım, sağ üst karnımda ağrı var\" cümlesi klinikte sık duyuluyor. Bu sayfada mekanizmanın ne olduğunu, hangi belirtilerin acil olduğunu ve beslenme tarafında nelerin yapılabileceğini bulacaksınız.",
  medical: true,
  disclaimerTopic: "Safra kesesi hastalıkları ve GLP-1 kullanımı",
  about: ["Safra taşı", "Safra kesesi", "Kolelitiazis", "Hızlı kilo kaybı", "GLP-1 yan etkileri"],
  serviceType: "Safra kesesi ve GLP-1 süreci beslenme danışmanlığı",
  sections: [
    {
      id: "mekanizma",
      heading: "Hızlı kilo kaybı safra taşını neden tetikler?",
      tocLabel: "Mekanizma",
      body: [
        "İki mekanizma aynı anda işler.",
        "**Birincisi, safranın bileşimi değişir.** Hızlı kilo kaybında yağ dokusundan salınan kolesterol karaciğere gelir ve karaciğer bunun bir kısmını safraya boşaltır. Safra kolesterol açısından aşırı doygun hale gelir; kolesterol kristalleri çökmeye başlar.",
        "**İkincisi, safra kesesi yeterince boşalmaz.** Safra kesesinin kasılma uyaranı, ince bağırsağa gelen yağdır (kolesistokinin salınımı). GLP-1 kullanırken öğünler küçülür, öğün sayısı azalır ve çoğu kişi yağı da kısar. Kese uzun süre kasılmaz, safra içeride bekler ve kristaller birleşerek taş oluşturur.",
        "Bu iki mekanizma birbirini besler. Bu yüzden risk, kilo kaybının en hızlı olduğu **ilk 6–12 ayda** zirve yapar.",
      ],
      table: {
        caption: "Riski artıran ve azaltan faktörler",
        head: ["Riski artıran", "Riski azaltan"],
        rows: [
          ["Haftada %1'i aşan kilo kaybı", "Haftada %0,5–1 aralığında kontrollü kayıp"],
          ["Çok düşük yağlı beslenme", "Enerjinin %20–25'ini yağdan almak"],
          ["Öğün atlama, uzun açlık", "Günde 3 ana öğünü düzenli sürdürmek"],
          ["Kadın cinsiyet, 40 yaş üstü, ailede taş öyküsü", "Düzenli fiziksel aktivite"],
          ["Daha önce geçirilmiş safra taşı atağı", "Yeterli lif ve sıvı alımı"],
          ["Gebelik, östrojen içeren ilaç kullanımı", "Hekimin uygun gördüğü durumlarda koruyucu tedavi"],
        ],
      },
    },
    {
      id: "belirti",
      heading: "Hangi belirtiler safra kesesini işaret eder?",
      tocLabel: "Belirtiler",
      body: [
        "Safra kesesi kaynaklı ağrı tipik olarak **sağ üst karın bölgesinde**, yağlı bir öğünden 30 dakika–2 saat sonra başlar, sırta veya sağ omuza vurabilir ve dakikalar–saatler sürebilir.",
        "GLP-1 kullanırken bulantı ve karın rahatsızlığı zaten sık görüldüğü için bu tablo kolayca \"ilacın yan etkisi\" sanılabilir. Ayırt edici olan ağrının yeri, şiddeti ve yağlı öğünle ilişkisidir.",
      ],
      callout:
        "**Acil hekim başvurusu gerektiren durumlar:** birkaç saatten uzun süren şiddetli sağ üst karın ağrısı, ateş ve titreme, inatçı kusma, gözlerde ve ciltte sararma, koyu renkli idrarla birlikte açık renkli dışkı. Bu tablo taşın kanalı tıkadığını gösterebilir ve beslenmeyle yönetilmez.",
      bullets: [
        { title: "Sessiz taş da olabilir", text: "Safra taşlarının önemli bir bölümü belirti vermez ve başka bir sebeple yapılan ultrasonda tesadüfen bulunur." },
        { title: "Şişkinlik ve hazımsızlık", text: "Özellikle yağlı öğünlerden sonra gelen dolgunluk ve geğirme, erken dönem işaret olabilir." },
        { title: "Ultrason tanı koydurur", text: "Şüphe durumunda hekiminizin isteyeceği batın ultrasonu, taş varlığını gösteren temel incelemedir." },
      ],
    },
    {
      id: "beslenme",
      heading: "GLP-1 kullanırken safra sağlığı için nasıl beslenmeliyim?",
      tocLabel: "Beslenme protokolü",
      body: [
        "Amaç, safra kesesinin **düzenli kasılmasını** sürdürmek ve kilo kaybını safranın taşıyabileceği hızda tutmaktır.",
      ],
      steps: [
        {
          title: "Yağı sıfırlamayın",
          text: "Günlük enerjinin yaklaşık %20–25'i yağdan gelmelidir. Her ana öğünde bir miktar sağlıklı yağ (zeytinyağı, avokado, ceviz, badem, yumurta sarısı) bulunması, kesenin kasılmasını uyarır. \"Yağsız beslenmek keseyi korur\" yaygın ama yanlış bir inanıştır.",
        },
        {
          title: "Öğün atlamayın",
          text: "İştah olmasa bile günde en az üç ana öğün sürdürülür. Uzun açlık dönemleri safranın kesede beklemesine yol açar. İştahsızlıkta porsiyon küçültülür, öğün sayısı korunur.",
        },
        {
          title: "Kilo kaybı hızını sınırlayın",
          text: "Haftalık kayıp vücut ağırlığının %1'ini aşmamalıdır. Kayıp bunun üzerindeyse doz artışının hızı hekiminizle yeniden değerlendirilir.",
        },
        {
          title: "Lifi artırın",
          text: "Günde 25–30 gram lif hedeflenir. Lif, safra asitlerinin bağırsakta yeniden emilimini etkileyerek destek sağlar ve GLP-1 kaynaklı kabızlığı da azaltır. Artış kademeli yapılır.",
        },
        {
          title: "Sıvıyı ihmal etmeyin",
          text: "Günde 2–2,5 litre sıvı hem safra akışkanlığı hem de kabızlık yönetimi için gereklidir.",
        },
        {
          title: "Aşırı doymuş yağ ve rafine şekerden kaçının",
          text: "Yağı korumak, kızartma ve işlenmiş ürünleri artırmak anlamına gelmez. Kaynak kalitesi yağın miktarı kadar önemlidir.",
        },
      ],
    },
    {
      id: "ameliyat",
      heading: "Safra kesesi alındıysa beslenme nasıl değişir?",
      tocLabel: "Kese alındıysa",
      body: [
        "Safra kesesi alındığında (kolesistektomi) karaciğer safra üretmeye devam eder, ancak artık depolanmadan doğrudan bağırsağa akar. Bu nedenle **tek seferde yüksek miktarda yağ** sindirimi zorlaşır ve yağlı öğünlerden sonra ishal, şişkinlik veya kramp görülebilir.",
        "Uyum süreci genellikle birkaç hafta–birkaç ay sürer. Bu dönemde strateji, yağı yasaklamak değil **güne yaymaktır**.",
      ],
      bullets: [
        { title: "Öğünleri küçültün, sayısını artırın", text: "Günde 4–6 küçük öğün, tek seferde gelen yağ yükünü azaltır." },
        { title: "Yağı kademeli artırın", text: "Ameliyat sonrası ilk haftalarda düşük yağla başlanır, tolerans arttıkça kademeli olarak normale dönülür." },
        { title: "Kızartmalardan uzak durun", text: "Yüksek ısıda kızartma, tolere edilmesi en zor yağ formudur. Fırın, ızgara ve haşlama tercih edilir." },
        { title: "Çözünür lifi artırın", text: "Yulaf, elma, havuç ve baklagiller, ameliyat sonrası ishali azaltmaya yardımcı olur." },
        { title: "Yağda çözünen vitaminleri izleyin", text: "A, D, E ve K vitaminleri açısından uzun vadede takip yararlıdır." },
      ],
      callout:
        "GLP-1 kullanan ve safra kesesi alınmış kişilerde iki tablo üst üste biner: hem yağ sindirimi zorlaşmıştır hem de mide boşalması yavaşlamıştır. Bu grupta öğün planı ayrıca bireyselleştirilir.",
    },
  ],
  faq: [
    {
      question: "Zayıflama iğnesi safra taşı yapar mı?",
      answer:
        "Doğrudan ilaca bağlı bir taş oluşumu mekanizmasından çok, ilacın yol açtığı hızlı kilo kaybı ve azalmış öğün hacmi riski artırır. Hızlı kilo kaybında safra kolesterol açısından aşırı doygun hale gelir ve az yiyen bir kişide safra kesesi yeterince kasılmadığı için safra durağanlaşır. Risk özellikle ilk 6–12 ayda yüksektir.",
    },
    {
      question: "Safra taşı riskini azaltmak için yağsız mı beslenmeliyim?",
      answer:
        "Hayır, bu yaygın ama yanlış bir inanıştır. Safra kesesinin kasılma uyaranı bağırsağa gelen yağdır; yağı tamamen kesmek keseyi boşaltmayı bırakır ve safranın durağanlaşmasına yol açar. Günlük enerjinin yaklaşık %20–25'inin yağdan gelmesi ve her ana öğünde bir miktar sağlıklı yağ bulunması önerilir.",
    },
    {
      question: "Safra taşım varken zayıflama iğnesi kullanabilir miyim?",
      answer:
        "Bu karar hekiminize aittir. Mevcut safra taşı öyküsü, ilacın kullanımı ve doz artış hızı açısından değerlendirilmesi gereken bir faktördür. Beslenme tarafında yapılabilecekler bellidir: kilo kaybı hızını haftada %1'in altında tutmak, öğün atlamamak ve öğünlerde yeterli yağ bırakmak.",
    },
    {
      question: "Safra kesesi ameliyatından sonra ne yiyebilirim?",
      answer:
        "İlk haftalarda düşük yağlı, küçük ve sık öğünlerle başlanır; tolerans arttıkça yağ kademeli olarak normale döndürülür. Kızartma ve çok yağlı öğünler tek seferde tolere edilmesi en zor gruptur. Yulaf, elma ve havuç gibi çözünür lif kaynakları ameliyat sonrası sık görülen ishali azaltmaya yardımcı olur.",
    },
    {
      question: "Sağ üst karın ağrım var, ne yapmalıyım?",
      answer:
        "Birkaç saatten uzun süren şiddetli sağ üst karın ağrısı, ateş, inatçı kusma veya gözlerde sararma varsa vakit kaybetmeden hekime başvurun. Bu tablo safra taşının kanalı tıkadığını gösterebilir ve beslenme değişikliğiyle yönetilmez. Hafif ve yağlı öğünle ilişkili rahatsızlıkta ise hekiminizin isteyeceği batın ultrasonu ilk adımdır.",
    },
  ],
  related: [
    { href: "/zayiflama-ignesi-diyetisyeni-antalya", label: "Zayıflama iğnesi süreci (ana sayfa)", note: "Protokol, yan etki yönetimi ve çıkış planı." },
    { href: "/glp1-kas-kaybi-onleme", label: "GLP-1'de kas kaybını önleme", note: "Protein hedefi ve direnç antrenmanı protokolü." },
    { href: "/mounjaro-beslenme-programi", label: "Mounjaro beslenme programı", note: "Doz basamaklarına göre haftalık plan." },
  ],
  ctaTitle: "Safra sağlığınızı riske atmadan kilo verin",
  ctaText:
    "Kayıp hızı, öğün düzeni ve yağ dengesi doğru kurulduğunda süreç hem daha güvenli hem de daha konforlu ilerler.",
};

/* ========================================================================
   SPOKE — /mounjaro-beslenme-programi
   ======================================================================== */

export const mounjaroProgram: LandingData = {
  slug: "/mounjaro-beslenme-programi",
  meta: {
    title: "Mounjaro (Tirzepatid) Beslenme Programı Rehberi",
    description:
      "Doz basamaklarına göre değişen beslenme planı: protein hedefi, öğün düzeni, yan etki yönetimi ve ilaç sonrası dönem stratejisi. Antalya.",
    keywords: [
      "mounjaro beslenme programı",
      "tirzepatid diyet",
      "mounjaro ne yemeli",
      "mounjaro doz artışı beslenme",
      "mounjaro yan etki",
      "mounjaro sonrası kilo",
    ],
  },
  crumbs: [
    { name: "Zayıflama İğnesi (GLP-1) Süreci", path: "/zayiflama-ignesi-diyetisyeni-antalya" },
    { name: "Mounjaro Beslenme Programı", path: "/mounjaro-beslenme-programi" },
  ],
  eyebrow: "Doz basamaklı plan",
  h1: "Mounjaro (Tirzepatid) Kullanırken <em>Beslenme Programı</em>",
  answer:
    "Mounjaro kullanırken beslenme planı sabit kalmaz; **doz basamaklarıyla birlikte değişir.** Düşük dozda öncelik yan etki toleransını kurmak, orta dozda protein hedefini korumak, yüksek dozda ise kas kaybını ve mikrobesin eksikliklerini önlemektir. Antalya'da Uzm. Dyt. Ali Koşar bu geçişleri vücut kompozisyonu ölçümü ve kan değerleriyle takip eder.",
  intro:
    "Tirzepatid, GLP-1 ve GIP reseptörlerini birlikte etkilediği için iştah baskılanması genellikle daha belirgindir. Bu, hızlı sonuç anlamına geldiği kadar hızlı kas kaybı ve mikrobesin açığı riski anlamına da gelir. Plan, bu iki tarafı dengelemek üzere kurulur.",
  medical: true,
  disclaimerTopic: "Tirzepatid (Mounjaro) kullanımı",
  about: ["Tirzepatid", "Mounjaro", "GLP-1 GIP çift agonisti", "Obezite tedavisi", "Doz titrasyonu"],
  serviceType: "Tirzepatid (Mounjaro) süreci beslenme programı",
  sections: [
    {
      id: "basamaklar",
      heading: "Doz basamaklarına göre beslenme planı nasıl değişir?",
      tocLabel: "Doz basamakları",
      body: [
        "Tirzepatid dozu kademeli artırılır ve her basamakta iştah, sindirim ve kilo kaybı hızı değişir. Bu yüzden tek bir liste tüm süreç boyunca geçerli olmaz.",
        "Aşağıdaki tablo, doz aralıklarına göre beslenme tarafındaki **öncelik değişimini** özetler. Doz kararı ve artış takvimi tamamen hekiminize aittir.",
      ],
      table: {
        caption: "Doz dönemine göre beslenme öncelikleri",
        head: ["Dönem", "Tipik tablo", "Beslenme önceliği"],
        rows: [
          ["Başlangıç dönemi", "Hafif bulantı, erken doyma", "Porsiyonu küçültmek, öğün sayısını korumak, çok yağlı ve baharatlı öğünlerden kaçınmak"],
          ["İştahın belirgin düştüğü dönem", "Alım ciddi biçimde azalır", "Protein hedefini (1,2–1,6 g/kg) korumak, tabakta önce protein, sıvı protein desteği"],
          ["Kilo kaybının hızlandığı dönem", "Haftalık kayıp artar", "Kayıp hızını %1'in altında tutmak, direnç antrenmanı, safra için öğünlerde yağ bırakmak"],
          ["Yüksek doz / idame", "Alım kalıcı olarak düşük", "Mikrobesin takibi (demir, B12, D vitamini, kalsiyum, folat), vücut kompozisyonu ölçümü"],
          ["İlaç sonrası dönem", "İştah geri döner", "Kademeli enerji artışı, alışkanlıkların kalıcılaştırılması, kilo koruma protokolü"],
        ],
      },
      callout:
        "Tablodaki dönemler **doz miligramlarına göre değil, klinik tabloya göre** tanımlanmıştır. Aynı dozda iki kişide iştah baskılanması çok farklı olabilir; plan her zaman kişinin o anki alımına göre kurulur.",
    },
    {
      id: "gunluk",
      heading: "Mounjaro kullanırken bir gün nasıl planlanır?",
      tocLabel: "Örnek gün yapısı",
      body: [
        "Aşağıdaki yapı bir **şablondur**, kişiye özel bir liste değildir. Amaç, sınırlı bir iştahla günlük protein ve mikrobesin hedeflerine ulaşmanın mantığını göstermektir.",
      ],
      table: {
        caption: "Sınırlı iştahla protein hedefine ulaşmak için öğün yapısı şablonu",
        head: ["Öğün", "Öncelik", "Örnek yapı"],
        rows: [
          ["Kahvaltı", "20–30 g protein", "Yumurta + peynir + tam tahıllı ekmek + bir miktar zeytin"],
          ["Ara öğün", "Protein + lif", "Yoğurt veya kefir + bir avuç ceviz/badem"],
          ["Öğle", "25–35 g protein", "Izgara tavuk/balık/köfte + bulgur veya baklagil + salata (zeytinyağlı)"],
          ["Ara öğün", "Sıvı protein (gerekirse)", "Süt veya protein içeceği — katı gıda zorlanıyorsa"],
          ["Akşam", "25–35 g protein", "Etli sebze yemeği veya baklagil + yoğurt + salata"],
        ],
      },
      bullets: [
        { title: "Tabakta önce protein", text: "Erken doyma nedeniyle tabak bitmeyebilir; ilk tüketilen bileşen protein olmalıdır." },
        { title: "Sıvıyı öğün arasına alın", text: "Öğünle birlikte içilen büyük miktarda sıvı, erken doymayı ve bulantıyı artırır." },
        { title: "Yavaş yiyin", text: "Mide boşalması zaten yavaşlamıştır; hızlı yemek bulantı ve reflüyü belirgin biçimde artırır." },
        { title: "Her öğünde bir miktar yağ", text: "Safra kesesinin düzenli kasılması ve yağda çözünen vitamin emilimi için gereklidir." },
      ],
    },
    {
      id: "sonrasi",
      heading: "Mounjaro bırakıldığında kilo geri gelir mi?",
      tocLabel: "İlaç sonrası dönem",
      body: [
        "İlaç bırakıldığında iştah baskılanması ortadan kalkar. Klinik çalışmalarda katılımcıların kaybettikleri kilonun önemli bir bölümünü bir yıl içinde geri aldıkları gösterilmiştir. Ancak bu sonuç kaçınılmaz değildir — geri alımın hızını iki şey belirler.",
        "**Birincisi korunan kas kütlesidir.** Yağsız kütlesini koruyan kişide bazal metabolizma büyük ölçüde korunur; kaybettiği kişide metabolizma düşer ve aynı beslenmeyle bile kilo alması kolaylaşır.",
        "**İkincisi kurulan alışkanlıklardır.** İlaç döneminde öğün düzeni, protein alışkanlığı ve düzenli antrenman yerleşmişse, iştah geri geldiğinde kişi hazırlıklıdır. Yerleşmemişse ilaç bırakıldığı gün eski düzene dönülür.",
      ],
      steps: [
        { title: "Çıkışı önceden planlayın", text: "Bırakma kararı hekimle birlikte, en az birkaç hafta önceden planlanır. Ani kesme yerine kontrollü bir geçiş tercih edilir." },
        { title: "Enerjiyi kademeli artırın", text: "İştah geri dönerken alım birden serbest bırakılmaz; enerji haftalık küçük artışlarla bakım düzeyine getirilir." },
        { title: "Protein ve antrenmanı sürdürün", text: "İlaç bittiğinde en son bırakılacak iki şey bunlardır. Kas kütlesi, kilo korumasının en güçlü sigortasıdır." },
        { title: "Ölçümü sürdürün", text: "İlaç sonrası ilk 6 ay boyunca vücut kompozisyonu takibi devam eder; geri alım varsa erken müdahale edilir." },
      ],
    },
  ],
  faq: [
    {
      question: "Mounjaro kullanırken ne yemeliyim?",
      answer:
        "Öncelik proteindir: günde kilogram başına 1,2–1,6 gram, güne 3–5 öğüne bölünmüş şekilde. Her öğünde bir miktar sağlıklı yağ (safra kesesinin kasılması için) ve yeterli lif (kabızlık için) bulunmalıdır. Erken doyma nedeniyle tabakta önce protein tüketilir; sıvılar öğün arasına alınır.",
    },
    {
      question: "Mounjaro ile Ozempic arasındaki fark nedir?",
      answer:
        "Ozempic'in etken maddesi semaglutid olup yalnızca GLP-1 reseptörünü etkiler. Mounjaro'nun etken maddesi tirzepatid olup GLP-1 ve GIP reseptörlerini birlikte etkiler; bu nedenle çift etkili olarak tanımlanır. Klinik çalışmalarda tirzepatid genellikle daha yüksek kilo kaybı sağlamıştır. Hangisinin uygun olduğu kararı hekiminize aittir.",
    },
    {
      question: "Mounjaro kullanırken kaç öğün yemeliyim?",
      answer:
        "Günde en az üç ana öğün korunur, iştah çok düşükse porsiyonlar küçültülüp 4–6 küçük öğüne bölünür. Öğün atlamak iki soruna yol açar: günlük protein hedefine ulaşılamaz ve safra kesesi yeterince kasılmadığı için taş riski artar.",
    },
    {
      question: "Doz artışında yan etkiler artarsa ne yapmalıyım?",
      answer:
        "Doz artışını izleyen ilk günlerde porsiyonu küçültmek, yağlı ve baharatlı öğünlerden geçici olarak kaçınmak, sıvıyı öğün arasına almak ve yavaş yemek çoğu zaman yeterli olur. Yakınmalar sürüyor, kusma ekleniyor veya günlük alım ciddi biçimde düşüyorsa doz takvimi hekiminizle yeniden değerlendirilmelidir.",
    },
    {
      question: "Mounjaro'yu bıraktıktan sonra kilomu nasıl korurum?",
      answer:
        "İki faktör belirleyicidir: ilaç döneminde korunan kas kütlesi ve yerleşmiş beslenme alışkanlıkları. Çıkış hekimle birlikte kademeli planlanır, enerji haftalık küçük artışlarla bakım düzeyine getirilir, protein hedefi ve direnç antrenmanı sürdürülür ve ilk 6 ay boyunca vücut kompozisyonu takibi devam eder.",
    },
  ],
  related: [
    { href: "/zayiflama-ignesi-diyetisyeni-antalya", label: "Zayıflama iğnesi süreci (ana sayfa)", note: "Tüm GLP-1 molekülleri için genel protokol." },
    { href: "/glp1-kas-kaybi-onleme", label: "GLP-1'de kas kaybını önleme", note: "Protein hedefi ve direnç antrenmanı protokolü." },
    { href: "/glp1-safra-kesesi-sorunlari", label: "GLP-1 ve safra kesesi", note: "Taş riski ve öğünlerde yağ dengesi." },
  ],
  ctaTitle: "Mounjaro sürecinizi doğru basamaklandırın",
  ctaText:
    "Her doz basamağında planınız güncellenir; kas kütleniz ve kan değerleriniz düzenli izlenir. İlk görüşme için randevu oluşturun.",
};
