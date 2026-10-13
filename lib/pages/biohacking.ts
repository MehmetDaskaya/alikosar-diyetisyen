import type { LandingData } from "../landing-types";

/* ========================================================================
   PILLAR — /biohacking-ve-longevity-antalya
   ======================================================================== */

export const biohacking: LandingData = {
  slug: "/biohacking-ve-longevity-antalya",
  meta: {
    title: "Biohacking ve Longevity Beslenmesi | Antalya",
    description:
      "Ölçüme dayalı longevity: biyobelirteç takibi, metabolik esneklik, sürekli glukoz ölçümü, uyku ve sirkadiyen ritim. Biyokimya yüksek lisanslı diyetisyen.",
    keywords: [
      "biohacking antalya",
      "longevity beslenmesi",
      "sağlıklı yaşam süresi",
      "metabolik esneklik",
      "sürekli glukoz ölçümü",
      "sirkadiyen ritim beslenmesi",
      "biyobelirteç takibi",
      "anti-aging beslenme",
    ],
  },
  crumbs: [
    { name: "Hizmetler", path: "/hizmetler" },
    { name: "Biohacking ve Longevity", path: "/biohacking-ve-longevity-antalya" },
  ],
  eyebrow: "Ölçüme dayalı optimizasyon",
  h1: "Biohacking ve <em>Longevity</em> Beslenmesi — Ölçerek Optimize Etmek",
  answer:
    "Biohacking, pahalı takviye almak değil; **ölçülebilir biyobelirteçleri** hedef alan sistemli bir optimizasyon yaklaşımıdır. Sağlıklı yaşam süresini (healthspan) en güçlü öngören ölçütler kas kütlesi, VO2max, kan şekeri kararlılığı, ApoB ve uyku kalitesidir. Antalya'da Uzm. Dyt. Ali Koşar, tıbbi biyokimya yüksek lisansı temelinde bu verileri okuyup beslenme planına çevirir.",
  intro:
    "Bu alan iki uçtan zarar görüyor: bir yanda kanıtı olmayan ürünlerin pazarlaması, diğer yanda \"hepsi saçmalık\" diyen toptan reddiye. Gerçek ikisinin ortasında ve oldukça sıkıcı: uyku, kas, kardiyorespiratuar kapasite, kan şekeri kararlılığı ve lipid profili. Aşağıda hangi müdahalenin ne kadar kanıtı olduğunu ayırarak bulacaksınız.",
  medical: true,
  disclaimerTopic: "Biyobelirteç takibi ve takviye kullanımı",
  about: [
    "Biohacking",
    "Longevity",
    "Healthspan",
    "Metabolik esneklik",
    "Sürekli glukoz takibi",
    "Sirkadiyen ritim",
    "Biyobelirteçler",
  ],
  serviceType: "Biohacking ve longevity beslenme danışmanlığı",
  serviceName: "Biohacking ve Longevity Beslenme Programı",
  proof: [
    { value: "Biyokimya YL", label: "Tıbbi biyokimya yüksek lisansı (2021–2023)" },
    { value: "VO2max", label: "Tüm nedenli ölüm riskinin en güçlü öngörücülerinden" },
    { value: "%20–25", label: "Kas kütlesinin bazal metabolizmadaki payı" },
    { value: "7+ saat", label: "Metabolik sağlık için gereken minimum uyku" },
  ],
  sections: [
    {
      id: "nedir",
      heading: "Biohacking gerçekte ne demek?",
      tocLabel: "Tanım",
      body: [
        "Biohacking, vücudun ölçülebilir çıktılarını (kan değerleri, uyku, kan şekeri, vücut kompozisyonu, kondisyon) izleyerek beslenme, hareket ve yaşam düzenini bu verilere göre ayarlamaktır. Kısacası **tahminle değil, ölçümle yönetmektir.**",
        "Longevity ise ham yaşam süresini değil, **healthspan**'i — yani sağlıklı ve fonksiyonel geçirilen yılları — hedefler. Amaç 90 yaşına ulaşmak değil, 90 yaşında merdiven çıkabilmektir.",
        "Bu iki kavramın ortak noktası ölçümdür. Ölçmediğiniz bir şeyi optimize edemezsiniz; ölçtüğünüz her şeyin de optimize edilmeye değer olmadığını bilmek de işin bir parçasıdır.",
      ],
      quote: {
        text: "Biyokimya yüksek lisansı yaparken en çok öğrendiğim şey şuydu: bir değeri okumak kolay, o değerin o kişide ne anlama geldiğini bilmek zor.",
        cite: "Uzm. Dyt. Ali Koşar",
      },
    },
    {
      id: "kanit",
      heading: "Hangi müdahalenin gerçekten kanıtı var?",
      tocLabel: "Kanıt haritası",
      body: [
        "Bu alandaki en büyük sorun, güçlü kanıtlı sıkıcı müdahalelerle zayıf kanıtlı popüler ürünlerin aynı çerçevede sunulmasıdır. Aşağıdaki tablo bu ikisini ayırır.",
      ],
      table: {
        caption: "Longevity ve metabolik sağlık müdahaleleri — kanıt düzeyine göre",
        head: ["Müdahale", "Kanıt", "Neden önemli"],
        rows: [
          ["Kas kütlesini korumak / artırmak", "Güçlü", "Kas kütlesi ve kavrama gücü, yaşlanmada fonksiyonel bağımsızlık ve mortalite ile güçlü ilişkili"],
          ["Kardiyorespiratuar kapasiteyi (VO2max) artırmak", "Güçlü", "Tüm nedenli ölüm riskinin en güçlü öngörücülerinden biri"],
          ["Düzenli ve yeterli uyku (7–9 saat)", "Güçlü", "İnsülin duyarlılığı, iştah hormonları, bağışıklık ve bilişsel işlev"],
          ["Sigara ve aşırı alkolden kaçınmak", "Güçlü", "Etkisi diğer tüm müdahalelerin toplamından büyük"],
          ["ApoB / LDL kolesterolü hedefte tutmak", "Güçlü", "Ateroskleroz riskinin doğrudan belirleyicisi"],
          ["Yeterli protein (özellikle 50 yaş üstü)", "Güçlü", "Sarkopeni önlenmesi ve kemik sağlığı"],
          ["Lif ve bitkisel çeşitlilik", "Güçlü", "Bağırsak mikrobiyotası, kolesterol, kan şekeri kararlılığı"],
          ["Zaman kısıtlı beslenme (time-restricted eating)", "Orta", "Kalori eşitlendiğinde ek etkisi sınırlı; öğün düzenini kolaylaştırabilir"],
          ["Sauna / ısı maruziyeti", "Orta", "Gözlemsel çalışmalarda kardiyovasküler faydayla ilişkilendirilmiş"],
          ["Soğuk maruziyeti (buz banyosu)", "Zayıf–orta", "Toparlanma etkisi tartışmalı; antrenman sonrası hipertrofiyi baskılayabilir"],
          ["NMN / NR, resveratrol", "Zayıf", "İnsanda sağlıklı yaşam süresine etkisi gösterilmemiştir"],
          ["Detoks ve arındırma programları", "Yok", "Fizyolojik dayanağı yoktur"],
        ],
      },
      callout:
        "Listenin ilk yedi maddesi ücretsiz veya çok ucuzdur ve etkisi en yüksek olan gruptur. Alt sıradaki popüler ürünlere geçmeden önce üst sıradakilerin yerleşmiş olması gerekir.",
    },
    {
      id: "biyobelirtec",
      heading: "Hangi biyobelirteçler takip edilmeli?",
      tocLabel: "Takip edilecek değerler",
      body: [
        "Panel ne kadar geniş olursa o kadar iyi değildir; anlamı bilinmeyen bir değer, gereksiz kaygıdan başka bir şey üretmez. Aşağıdaki set, beslenme müdahalesiyle **fiilen değiştirilebilen** değerlerden oluşur.",
      ],
      table: {
        caption: "Beslenmeyle yönlendirilebilen temel biyobelirteçler",
        head: ["Değer", "Ne gösterir", "Beslenme tarafındaki kaldıraç"],
        rows: [
          ["Açlık insülini, HOMA-IR", "İnsülin direnci — çoğu metabolik sorunun erken habercisi", "Karbonhidrat kalitesi, öğün düzeni, kas kütlesi, hareket"],
          ["HbA1c", "3 aylık ortalama kan şekeri", "Lif, öğün bileşimi, öğün sonrası hareket"],
          ["ApoB veya LDL-K", "Ateroskleroz riski", "Doymuş yağ kaynağı, lif, ağırlık yönetimi"],
          ["Trigliserit / HDL oranı", "Metabolik sağlığın pratik göstergesi", "Rafine şeker, alkol, kilo, egzersiz"],
          ["hs-CRP", "Düşük dereceli sistemik iltihap", "Vücut yağ oranı, uyku, omega-3, bitkisel çeşitlilik"],
          ["Ferritin, hemogram", "Demir durumu — yorgunluğun sık gözden kaçan sebebi", "Demir kaynakları, C vitamini eşliği, çay-kahve zamanlaması"],
          ["25(OH)D vitamini", "D vitamini durumu", "Güneş, beslenme, gerekiyorsa hekim kontrolünde takviye"],
          ["B12, folat, homosistein", "Metilasyon ve sinir sistemi sağlığı", "Hayvansal kaynaklar, yeşil yapraklılar"],
          ["TSH, sT3, sT4", "Tiroid işlevi", "Yeterli enerji, iyot, selenyum"],
          ["Vücut kompozisyonu", "Yağsız kütle ve yağ oranı", "Protein, direnç antrenmanı, enerji dengesi"],
        ],
      },
      bullets: [
        {
          title: "Trend, tek ölçümden önemlidir",
          text: "Bir değerin referans aralığında olması yeterli değildir; 3–6 ayda bir tekrar edilen ölçümlerin yönü daha çok şey söyler.",
        },
        {
          title: "Tanı hekimin işidir",
          text: "Bu değerler beslenme planını yönlendirmek için okunur. Tanı koymak, ilaç başlamak veya kesmek hekim yetkisindedir.",
        },
      ],
    },
    {
      id: "glukoz",
      heading: "Sürekli glukoz ölçümü (CGM) kimin işine yarar?",
      tocLabel: "Sürekli glukoz takibi",
      body: [
        "CGM, cilde takılan bir sensörle kan şekerini gün boyu izleyen bir cihazdır. Diyabet yönetiminde tıbbi bir araçtır; sağlıklı kişilerde ise **öğrenme aracı** olarak değerlidir.",
        "En büyük faydası, kişisel yanıtı görünür kılmasıdır. Aynı öğün iki kişide çok farklı kan şekeri yanıtı yaratabilir; kimde hangi kombinasyonun daha kararlı bir eğri verdiğini tahminle bilmek mümkün değildir.",
      ],
      bullets: [
        { title: "Öğün sırası", text: "Aynı öğünde önce sebze ve protein, sonra karbonhidrat tüketmenin öğün sonrası şeker artışını azalttığı gösterilmiştir." },
        { title: "Öğün sonrası hareket", text: "Yemekten sonra 10–15 dakikalık yürüyüş, glukoz tepesini belirgin biçimde düşürür." },
        { title: "Uyku ve stres etkisi", text: "Kötü uyunmuş bir gecenin ardından aynı kahvaltıya verilen yanıt daha yüksektir; CGM bunu doğrudan gösterir." },
        { title: "Sınırları", text: "Sağlıklı kişide her dalgalanma sorun değildir. Veriyi yorumlamadan takip etmek gereksiz kısıtlamaya ve yeme kaygısına yol açabilir." },
      ],
    },
    {
      id: "sirkadiyen",
      heading: "Uyku ve sirkadiyen ritim beslenmeyi nasıl etkiler?",
      tocLabel: "Uyku ve sirkadiyen ritim",
      body: [
        "Vücudun insülin duyarlılığı gün içinde sabittir sanılır; değildir. Sabah saatlerinde aynı öğüne verilen glukoz yanıtı, gece geç saatlerde verilen yanıttan genellikle daha iyidir. Yani **ne yediğiniz kadar ne zaman yediğiniz de** metabolik sonucu etkiler.",
        "Uyku eksikliği ise iştah hormonlarını doğrudan bozar: tokluk sinyali zayıflar, açlık sinyali güçlenir ve enerji yoğun besinlere yönelim artar. Kronik olarak 7 saatin altında uyuyan bir kişide en iyi beslenme planı bile beklenen sonucu vermez.",
      ],
      steps: [
        { title: "Uyku saatini sabitleyin", text: "Yatış ve kalkış saatinin tutarlılığı, toplam süreden bazen daha belirleyicidir." },
        { title: "Sabah ışığı alın", text: "Uyanmadan sonraki ilk saat içinde dışarıda 10–20 dakika, sirkadiyen ritmi en güçlü ayarlayan sinyaldir. Antalya'nın güneş süresi bu konuda ciddi bir avantajdır." },
        { title: "Son öğünü öne çekin", text: "Yatmadan 3 saat önce yemeyi bitirmek hem uyku kalitesini hem de gece glukoz eğrisini iyileştirir." },
        { title: "Kafein kesme saati belirleyin", text: "Kafeinin yarılanma ömrü 5–6 saattir; öğleden sonra geç saatte alınan kahve derin uykuyu azaltabilir." },
        { title: "Alkolü uyku yardımcısı sanmayın", text: "Uykuya dalmayı kolaylaştırır ama uykunun ikinci yarısını ve toparlanmayı belirgin biçimde bozar." },
      ],
    },
    {
      id: "kimler",
      heading: "Bu program kimler için uygun?",
      tocLabel: "Kimler için uygun",
      body: [
        "Longevity programı hastalık tedavisi değildir; mevcut sağlık durumunu **veriyle iyileştirmek** isteyen kişiler içindir.",
      ],
      bullets: [
        { text: "Kan değerleri \"normal\" çıktığı halde yorgunluk, düşük enerji ve bilişsel bulanıklık yaşayanlar" },
        { text: "İnsülin direnci veya prediyabet sınırında olup ilaca gitmeden önce beslenmeyle müdahale etmek isteyenler" },
        { text: "40 yaş üstünde kas kütlesi ve fonksiyonel kapasitesini korumayı öncelik haline getirenler" },
        { text: "Ölçüm cihazı (akıllı saat, CGM, vücut analizi) kullanan ve verisini yorumlayacak birine ihtiyaç duyanlar" },
        { text: "Yoğun tempoda çalışan, uyku ve öğün düzeni bozulmuş profesyoneller" },
        { text: "Aile öyküsünde kalp-damar hastalığı veya tip 2 diyabet olan ve önleyici yaklaşım isteyenler" },
      ],
    },
  ],
  faq: [
    {
      question: "Biohacking bilimsel mi, yoksa pazarlama mı?",
      answer:
        "İkisi de var. Ölçülebilir biyobelirteçlere dayanan, uyku, kas kütlesi, kardiyorespiratuar kapasite ve kan şekeri kararlılığını hedef alan yaklaşımın güçlü bilimsel dayanağı vardır. Buna karşılık NMN, resveratrol gibi popüler moleküllerin insanda sağlıklı yaşam süresini uzattığı gösterilmemiştir. Ayrımı yapmak, hangi müdahalenin hangi kanıt düzeyinde olduğunu bilmekten geçer.",
    },
    {
      question: "Longevity için en önemli tek şey nedir?",
      answer:
        "Tek bir şey seçmek gerekirse kardiyorespiratuar kapasitedir (VO2max); tüm nedenli ölüm riskinin en güçlü öngörücülerinden biridir. Buna en yakın ikinci ölçüt kas kütlesi ve kavrama gücüdür. Beslenme bu iki değeri destekler ama tek başına yerini tutmaz — bu yüzden program her zaman beslenme ve hareketi birlikte kurar.",
    },
    {
      question: "Sürekli glukoz ölçüm cihazı (CGM) taktırmalı mıyım?",
      answer:
        "Diyabet veya insülin direnci varsa tıbbi olarak değerlidir. Sağlıklı kişilerde ise 2–4 haftalık bir öğrenme aracı olarak kullanılabilir: hangi öğünün, hangi öğün sırasının ve hangi uyku düzeninin kan şekerinizi nasıl etkilediğini doğrudan gösterir. Kalıcı kullanım çoğu sağlıklı kişide gerekli değildir ve yorumsuz takip gereksiz kısıtlamaya yol açabilir.",
    },
    {
      question: "Aralıklı oruç (intermittent fasting) gerçekten işe yarıyor mu?",
      answer:
        "Kalori alımı eşitlendiğinde aralıklı orucun klasik kalori kısıtlamasına belirgin bir üstünlüğü gösterilmemiştir. Faydası çoğunlukla dolaylıdır: öğün penceresini daraltmak birçok kişide toplam alımı azaltır ve gece atıştırmasını keser. Sporcularda, gebelerde, yeme bozukluğu öyküsü olanlarda ve bazı ilaç kullananlarda uygun değildir.",
    },
    {
      question: "Hangi takviyelerin longevity için kanıtı var?",
      answer:
        "Güçlü kanıtı olanlar oldukça kısıtlıdır: kanıtlanmış eksiklik durumunda D vitamini ve B12, yetersiz balık tüketiminde omega-3, kas kütlesi ve bilişsel işlev için kreatin monohidrat. NMN, NR ve resveratrol gibi moleküllerin insanda sağlıklı yaşam süresini uzattığı gösterilmemiştir. Takviye kararı, eksikliği gösteren bir ölçüme dayanmalıdır.",
    },
    {
      question: "Antalya'da biohacking danışmanlığı veren diyetisyen var mı?",
      answer:
        "Uzm. Dyt. Ali Koşar, Antalya Muratpaşa'daki kliniğinde ölçüme dayalı biohacking ve longevity programları yürütmektedir. Burdur Mehmet Akif Ersoy Üniversitesi'nde tamamladığı tıbbi biyokimya yüksek lisansı, laboratuvar değerlerinin yorumlanması ve beslenme planına çevrilmesi sürecinin temelini oluşturur.",
    },
  ],
  related: [
    { href: "/peptit-tedavileri-ve-beslenme", label: "Peptit uygulamaları ve beslenme", note: "Kanıt düzeyi, yasal durum ve beslenmenin bu süreçteki rolü." },
    { href: "/atletik-performans-beslenmesi", label: "Atletik performans beslenmesi", note: "Enerji uygunluğu, periyodizasyon ve toparlanma." },
    { href: "/zayiflama-ignesi-diyetisyeni-antalya", label: "GLP-1 süreç yönetimi", note: "Metabolik ilaç sürecinde beslenme tarafı." },
  ],
  asideCtaTitle: "Verinizi getirin, birlikte okuyalım",
  asideCtaText:
    "Kan tahlili, vücut kompozisyonu ve varsa akıllı cihaz verileriniz üzerinden kişiye özel bir optimizasyon planı kurulur.",
  ctaTitle: "Tahminle değil, ölçümle ilerleyin",
  ctaText:
    "Mevcut kan değerleriniz ve vücut kompozisyonunuz üzerinden başlayan, 3–6 aylık takip döngüsüne oturan bir program için randevu oluşturun.",
};

/* ========================================================================
   SPOKE — /peptit-tedavileri-ve-beslenme
   ======================================================================== */

export const peptitler: LandingData = {
  slug: "/peptit-tedavileri-ve-beslenme",
  meta: {
    title: "Peptit Uygulamaları ve Beslenme | Kanıt ve Risk",
    description:
      "Hangi peptitlerin ruhsatı var, hangilerinin insan kanıtı yok? Doping riski, güvenlik ve beslenmenin bu süreçteki gerçek rolü. Antalya.",
    keywords: [
      "peptit iğnesi",
      "peptit tedavisi",
      "bpc-157",
      "peptit ve beslenme",
      "büyüme hormonu peptitleri",
      "peptit doping",
    ],
  },
  crumbs: [
    { name: "Biohacking ve Longevity", path: "/biohacking-ve-longevity-antalya" },
    { name: "Peptit Uygulamaları", path: "/peptit-tedavileri-ve-beslenme" },
  ],
  eyebrow: "Dürüst değerlendirme",
  h1: "Peptit Uygulamaları ve Beslenme: <em>Kanıt, Yasal Durum ve Riskler</em>",
  answer:
    "Peptitler tek bir grup değildir. **Onaylı ve ruhsatlı** olanlar (GLP-1 analogları, insülin, bazı hormon analogları) ile **onaysız, ruhsatsız ve internetten temin edilen** araştırma peptitleri (BPC-157, CJC-1295, TB-500 gibi) tamamen farklı kategorilerdir. İkinci gruptaki moleküllerin insan çalışması sınırlıdır ve çoğu **WADA yasaklı listesindedir**. Bu sayfa taraf tutmaz; kanıtı ve riski olduğu gibi anlatır.",
  intro:
    "Bu konuda internette iki tür içerik var: ürün satan siteler ve konuyu tamamen reddeden yazılar. Danışanların ihtiyacı olan üçüncü bir şey: hangi molekülün nerede durduğunu gösteren, abartmayan ve korkutmayan bir çerçeve.",
  medical: true,
  disclaimerTopic: "Peptit ve hormon analogu kullanımı",
  about: ["Peptit tedavisi", "BPC-157", "Büyüme hormonu peptitleri", "Doping", "İlaç güvenliği"],
  serviceType: "Peptit süreci beslenme danışmanlığı",
  sections: [
    {
      id: "kategori",
      heading: "Peptitler hangi kategorilere ayrılır?",
      tocLabel: "Kategoriler",
      body: [
        "Peptit, aminoasitlerden oluşan kısa bir zincirdir. Bu tanım hem ruhsatlı bir ilacı hem de hiçbir insan çalışması olmayan bir molekülü kapsar. Bu yüzden \"peptit kullanıyorum\" cümlesi tek başına hiçbir şey ifade etmez; hangi peptit olduğu belirleyicidir.",
      ],
      table: {
        caption: "Peptit kategorileri ve durumları",
        head: ["Kategori", "Örnek", "Ruhsat durumu", "Kanıt"],
        rows: [
          ["Onaylı metabolik ilaçlar", "Semaglutid, tirzepatid, liraglutid", "Ruhsatlı, reçeteli", "Geniş faz III çalışmaları"],
          ["Onaylı hormon tedavileri", "İnsülin, tıbbi endikasyonlu büyüme hormonu", "Ruhsatlı, reçeteli", "Yerleşik klinik kullanım"],
          ["Onaylı diğer endikasyonlar", "Teriparatid, desmopressin", "Ruhsatlı, reçeteli", "Endikasyona özgü kanıt"],
          ["Araştırma peptitleri", "BPC-157, TB-500, CJC-1295, ipamorelin", "İnsan kullanımı için ruhsatlı değil", "İnsan çalışması sınırlı; çoğu hayvan verisi"],
          ["Kozmetik peptitler", "Bakır peptitleri, argireline", "Kozmetik ürün", "Topikal, sınırlı etki"],
        ],
      },
      callout:
        "**Ayrım kritik:** GLP-1 analogları bir peptittir ve geniş klinik kanıta sahiptir. Bu, \"tüm peptitler kanıtlı\" anlamına gelmez. Aynı şekilde BPC-157'nin insan verisinin sınırlı olması da tüm peptitleri geçersiz kılmaz.",
    },
    {
      id: "arastirma",
      heading: "BPC-157 gibi araştırma peptitlerinin durumu nedir?",
      tocLabel: "Araştırma peptitleri",
      body: [
        "Sporcular ve biohacking ilgilileri arasında en çok konuşulan grup budur. Dürüst tablo şudur: bu moleküllerin **insanda etkinliğini gösteren yayınlanmış klinik çalışma sayısı çok azdır.** Var olan verilerin büyük bölümü hayvan modellerinden gelir.",
        "İkinci sorun tedarik zinciridir. İnsan kullanımı için ruhsatlı olmadıklarından, temin edilen ürünlerin içeriği, saflığı ve dozu bağımsız olarak denetlenmez. Etikette yazan molekülün gerçekten o miktarda bulunup bulunmadığı bilinemez.",
        "Üçüncü sorun sporcular içindir: BPC-157, CJC-1295 ve benzeri moleküller **WADA yasaklı listesinde** yer alır. Lisanslı bir sporcuda kullanım, doping ihlali anlamına gelir.",
        "Dördüncüsü, anjiyojenik veya büyüme uyarıcı mekanizmaya sahip moleküllerde kişisel ya da ailesel kanser öyküsü ayrıca değerlendirilmesi gereken bir faktördür.",
      ],
      bullets: [
        { title: "Kanıt sınırlı demek, \"işe yaramaz\" demek değildir", text: "Ama \"güvenli ve etkili\" demek de değildir. Bilinmeyeni bilmek, bu alanda en dürüst konumdur." },
        { title: "İnternetten temin ciddi bir risktir", text: "İçerik doğrulaması olmayan bir enjeksiyon ürününü kullanmak, molekülün kendisinden bağımsız bir risktir." },
        { title: "Lisanslı sporcuda kesinlikle uygun değildir", text: "WADA yasaklı listesinde yer alan moleküller kariyer sonlandırıcı sonuçlar doğurabilir." },
        { title: "Karar hekimindir", text: "Bu sayfa peptit önermez, yönlendirmez veya temin etmez. Amaç, danışanın bilgiyle karar vermesini sağlamaktır." },
      ],
    },
    {
      id: "beslenme",
      heading: "Peptit kullanan birinde beslenmenin rolü nedir?",
      tocLabel: "Beslenmenin rolü",
      body: [
        "Beslenme burada iki iş yapar. Birincisi, moleküllerin hedeflediği sonuçların (doku iyileşmesi, kas kütlesi, metabolik iyileşme) **zaten kanıtlanmış** beslenme kaldıraçlarını devreye sokmak. İkincisi, sürecin güvenliğini izlemek.",
        "Pratikte bu, çoğu zaman şu gerçeği ortaya çıkarır: kişinin aradığı sonucun büyük bölümü, protein hedefi, enerji dengesi, uyku ve direnç antrenmanı düzeltilerek zaten elde edilebilir durumdadır.",
      ],
      bullets: [
        { title: "Doku iyileşmesi hedefleniyorsa", text: "Yeterli enerji, 2,0–2,5 g/kg protein, egzersiz öncesi kollajen + C vitamini ve yeterli uyku — bunların kanıtı araştırma peptitlerinden güçlüdür." },
        { title: "Kas kütlesi hedefleniyorsa", text: "Protein dağılımı, kademeli yüklenme ve kreatin monohidrat, bu alandaki en iyi belgelenmiş üçlüdür." },
        { title: "Metabolik iyileşme hedefleniyorsa", text: "Lif, öğün düzeni, vücut yağ oranı ve hareket, laboratuvar değerlerinde ölçülebilir değişim yaratır." },
        { title: "Güvenlik takibi", text: "Karaciğer ve böbrek fonksiyonları, hemogram, açlık glukozu ve HbA1c periyodik izlenir. Beklenmedik değişimde hekime yönlendirme yapılır." },
      ],
      quote: {
        text: "Danışanların çoğu bir molekül arıyor. Ölçüme baktığımızda genellikle eksik olan şey protein, uyku ve düzenli yüklenme oluyor.",
        cite: "Uzm. Dyt. Ali Koşar",
      },
    },
  ],
  faq: [
    {
      question: "Peptit iğneleri güvenli mi?",
      answer:
        "Kategoriye bağlıdır. GLP-1 analogları gibi ruhsatlı peptitler geniş klinik çalışmalarla değerlendirilmiş ve hekim kontrolünde kullanıldığında güvenlik profilleri bilinmektedir. BPC-157, TB-500 ve CJC-1295 gibi araştırma peptitleri ise insan kullanımı için ruhsatlı değildir, insan çalışması sınırlıdır ve temin edilen ürünlerin içeriği bağımsız olarak denetlenmez. Bu iki grubu aynı cümlede değerlendirmek doğru değildir.",
    },
    {
      question: "BPC-157 sakatlık iyileşmesini hızlandırır mı?",
      answer:
        "Hayvan çalışmalarında doku iyileşmesine yönelik bulgular bildirilmiştir, ancak insanda etkinliğini gösteren yayınlanmış klinik çalışma sayısı çok azdır. Bu nedenle etkinliği kanıtlanmış kabul edilemez. Buna karşılık yeterli enerji, kilogram başına 2,0–2,5 gram protein, egzersiz öncesi kollajen + C vitamini ve yeterli uyku için insan verisi daha güçlüdür.",
    },
    {
      question: "Lisanslı sporcuyum, peptit kullanabilir miyim?",
      answer:
        "BPC-157, CJC-1295 ve benzer moleküller WADA yasaklı listesinde yer alır; lisanslı bir sporcuda kullanımı doping ihlali anlamına gelir. Tedavi amaçlı bir gereklilik varsa süreç, hekiminiz ve federasyonunuz üzerinden tedavi amaçlı kullanım izni (TUE) prosedürüyle yürütülmelidir.",
    },
    {
      question: "Peptit reçete ediyor musunuz?",
      answer:
        "Hayır. Diyetisyenler ilaç veya enjeksiyon reçete etmez, temin etmez ve uygulamaz. Verilen hizmet beslenme tarafındadır: sürecin beslenme planı, güvenlik açısından izlenecek laboratuvar değerleri ve kanıtı daha güçlü olan alternatiflerin değerlendirilmesi.",
    },
    {
      question: "Peptit yerine ne öneriyorsunuz?",
      answer:
        "Aranan sonuca göre değişir, ancak çoğu vakada aynı üç başlık öne çıkar: günlük protein hedefine gerçekten ulaşmak, haftada 2–3 gün kademeli olarak zorlaşan direnç antrenmanı yapmak ve gece 7 saatin üzerinde düzenli uyumak. Bu üçü tam kurulmadan hiçbir molekül beklenen farkı yaratmaz.",
    },
  ],
  related: [
    { href: "/biohacking-ve-longevity-antalya", label: "Biohacking ve longevity", note: "Kanıt haritası, biyobelirteçler ve ölçüme dayalı optimizasyon." },
    { href: "/sporcu-sakatligi-beslenmesi", label: "Sakatlık ve iyileşme beslenmesi", note: "Doku iyileşmesinde kanıtı güçlü beslenme müdahaleleri." },
    { href: "/zayiflama-ignesi-diyetisyeni-antalya", label: "GLP-1 süreç yönetimi", note: "Ruhsatlı peptit grubunda beslenme yönetimi." },
  ],
  ctaTitle: "Molekülden önce temeli kurun",
  ctaText:
    "Mevcut kan değerleriniz, vücut kompozisyonunuz ve antrenman düzeniniz değerlendirilerek hangi müdahalenin gerçekten gerekli olduğu birlikte belirlenir.",
};
