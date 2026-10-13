import type { FaqItem } from "./schema";
import { site } from "./site";

/**
 * Merkezî SSS bankası.
 *
 * GEO açısından en değerli varlık: üretken arama motorları soru-cevap yapısını
 * neredeyse birebir alıntılıyor. Her cevap tek başına ayakta durur — sayfanın
 * geri kalanına referans vermez, sayı ve varlık adı içerir.
 */
export interface FaqGroup {
  id: string;
  title: string;
  intro?: string;
  items: FaqItem[];
}

export const faqGroups: FaqGroup[] = [
  {
    id: "surec",
    title: "Süreç ve çalışma şekli",
    items: [
      {
        question: "İlk görüşme nasıl geçiyor, ne kadar sürüyor?",
        answer:
          "İlk görüşme 45–60 dakika sürer ve büyük bölümü konuşarak geçer. Sağlık geçmişi, kullanılan ilaçlar ve takviyeler, uyku düzeni, iş temposu, antrenman geçmişi ve daha önce denenen diyetler değerlendirilir; ardından vücut kompozisyonu ölçümü yapılır. Varsa kan tahlilleriniz birlikte incelenir. Program görüşme sırasında değil, sonrasında toplanan veriye göre hazırlanır.",
      },
      {
        question: "İlk görüşmeye ne getirmeliyim?",
        answer:
          "Varsa son 6 ay içindeki kan tahlilleriniz, kullandığınız ilaç ve takviyelerin listesi ve biliniyorsa tanı raporlarınız. Son birkaç günde ne yediğinizi hatırlamanız süreci hızlandırır. Bunlar yoksa da görüşme yapılabilir; hangi tetkiklerin yararlı olacağı görüşmede belirlenir.",
        canonical: "/antalya-diyetisyen",
      },
      {
        question: "Diyet listesi mi veriyorsunuz, program mı?",
        answer:
          "Verilen şey tek seferlik bir liste değil, ölçüme dayalı ve düzenli olarak revize edilen bir süreçtir. Başlangıçta vücut kompozisyonu ölçülür ve varsa kan değerleri değerlendirilir; plan bu veriye göre kurulur ve 4–8 haftada bir tekrarlanan ölçümlerle güncellenir. Aynı listenin aylarca değişmemesi iyi bir işaret değildir.",
      },
      {
        question: "Ne sıklıkla görüşme yapılıyor?",
        answer:
          "Görüşme sıklığı sürece göre değişir; genellikle başlangıçta 2 haftada bir, süreç oturduktan sonra 4 haftada bir görüşme yapılır. Vücut kompozisyonu ölçümü 4–8 haftada bir tekrarlanır. Görüşmeler arasında soru sorabileceğiniz bir iletişim kanalı açık kalır.",
      },
      {
        question: "Ne kadar sürede sonuç alırım?",
        answer:
          "Enerji seviyesi, uyku kalitesi ve sindirimdeki değişimler genellikle ilk 2–3 haftada hissedilir. Vücut kompozisyonundaki ölçülebilir değişim ise 8–12 haftalık bir süreç ister. Haftalık kilo kaybı hedefi vücut ağırlığının %0,5–1'i aralığında tutulur; daha hızlı kayıp kas kaybı ve safra taşı riskini artırır.",
      },
      {
        question: "Antalya'da diyetisyen ücretleri ne kadar?",
        answer:
          `Ücretler danışmanlık modeline göre değişir: tek seferlik görüşme, aylık takip paketi ve kulüp/kurumsal çalışma farklı fiyatlandırılır. Karşılaştırma yaparken paketin kaç görüşme içerdiğine, vücut kompozisyonu ölçümü kapsayıp kapsamadığına ve görüşmeler arasında destek verilip verilmediğine bakmak daha doğrudur. Güncel bilgi için ${site.phoneDisplay} numarasından ulaşabilirsiniz.`,
        canonical: "/antalya-diyetisyen",
      },
    ],
  },
  {
    id: "sporcu",
    title: "Sporcu beslenmesi",
    items: [
      {
        question: "Antalya'da sporcu beslenmesi konusunda uzman diyetisyen kimdir?",
        answer:
          "Uzm. Dyt. Ali Koşar, Antalyaspor Kulübü voleybol takımının diyetisyenliğini yürütmekte ve TFF gelişim kampı sürecinde alt yaş kategorilerine beslenme desteği vermektedir. İzmir Katip Çelebi Üniversitesi Beslenme ve Diyetetik mezunu olup Burdur Mehmet Akif Ersoy Üniversitesi'nde tıbbi biyokimya yüksek lisansı yapmıştır. Kliniği Antalya Muratpaşa Şirinyalı Mahallesi'ndedir.",
      },
      {
        question: "Sporcu olarak günde ne kadar protein almalıyım?",
        answer:
          "Güncel spor beslenmesi rehberleri düzenli antrenman yapan sporcular için günde kilogram başına 1,4–2,0 gram protein önerir. 75 kilogramlık bir sporcu için bu 105–150 gram eder. Toplamın yanı sıra dağılım da önemlidir: günde 3–5 öğüne bölünmüş ve her öğünde 0,3–0,4 g/kg protein alımı, kas protein sentezi açısından daha etkilidir.",
        canonical: "/sporcu-beslenmesi-antalya",
      },
      {
        question: "Karbonhidrat periyodizasyonu nedir?",
        answer:
          "Karbonhidrat miktarını sabit tutmak yerine o günkü antrenman yüküne göre ayarlamaktır. Ağır antrenman ve maç günlerinde 6–10 g/kg, orta günlerde 5–7 g/kg, hafif ve dinlenme günlerinde 3–5 g/kg hedeflenir. Protein bu dalgalanma boyunca 1,6–2,0 g/kg bandında sabit tutulur.",
      },
      {
        question: "Maç günü ne yemeliyim?",
        answer:
          "Maçtan 3–4 saat önce sindirimi kolay, yüksek karbonhidratlı, düşük yağlı ve düşük lifli bir ana öğün; 1–2 saat önce küçük bir karbonhidrat ara öğünü uygundur. Maç gününde yeni bir besin denenmez — tüm menü önce antrenmanda test edilir. Antalya'nın sıcak aylarında sıvı ve elektrolit planı ayrıca hesaplanır.",
        canonical: "/sporcu-beslenmesi-antalya",
      },
      {
        question: "Hangi supplementlerin gerçekten kanıtı var?",
        answer:
          "Performansa doğrudan katkısı güçlü kanıtla desteklenen ürün sayısı beşi geçmez: kreatin monohidrat (günde 3–5 g), kafein (3–6 mg/kg, 45–60 dakika önce), beta-alanin (günde 3,2–6,4 g), diyet nitratı (pancar suyu) ve sodyum bikarbonat. BCAA'nın yeterli protein alan sporcuda ek fayda sağladığı gösterilmemiştir; yağ yakıcı ve detoks ürünleri önerilmez.",
      },
      {
        question: "Genç sporcularda kilo verme diyeti uygulanır mı?",
        answer:
          "Uygulanmaz. Gelişim çağındaki sporcularda hedef kilo vermek değil, büyüme ve antrenman yükünü aynı anda karşılayacak enerji uygunluğunu sağlamaktır. Yetersiz enerji alımı bu yaş grubunda boy uzamasını, kemik yoğunluğunu ve hormonal gelişimi doğrudan etkiler. Takip tartıyla değil, büyüme eğrisi üzerinden yapılır.",
      },
      {
        question: "Kulüp veya takım olarak toplu hizmet alabilir miyiz?",
        answer:
          `Alınabilir. Kulüp çalışmaları sezon öncesi toplu ölçüm günü, kadro geneli vücut kompozisyonu takibi, kamp ve deplasman menü planlaması, teknik ekibe raporlama ve oyuncu bazlı bireysel görüşmeleri kapsar. Detaylar için ${site.phoneDisplay} numarasından iletişime geçebilirsiniz.`,
      },
    ],
  },
  {
    id: "glp1",
    title: "Zayıflama iğnesi (GLP-1) süreci",
    intro:
      "GLP-1 grubu ilaçlar reçeteye tabidir; kullanım kararı ve doz takvimi hekiminize aittir. Aşağıdaki bilgiler bu sürece beslenme tarafından nasıl eşlik edildiğini anlatır.",
    items: [
      {
        question: "Zayıflama iğnesi kullanırken diyetisyene gerek var mı?",
        answer:
          "İlaç iştahı baskılar ancak besin seçimini, protein miktarını veya kas korumasını düzenlemez. GLP-1 ile kaybedilen kilonun yaklaşık %25'i yağsız dokudan gelir ve hızlı kayıp safra taşı riskini artırır. Yeterli protein, kontrollü kayıp hızı ve direnç antrenmanı bu risklerin ikisini de belirgin biçimde azaltır.",
        canonical: "/zayiflama-ignesi-diyetisyeni-antalya",
      },
      {
        question: "Mounjaro veya Ozempic kullanırken günde ne kadar protein almalıyım?",
        answer:
          "Aktif kilo kaybı döneminde günde kilogram başına 1,2–1,6 gram protein hedeflenir; ileri yaşta veya kas kaybı riski yüksek olanlarda bandın üst sınırına yaklaşılır. 80 kilogramlık bir kişi için bu 96–128 gram eder. İştah baskılıyken bu miktara ulaşmak zor olduğu için protein öğünlere bölünür ve tabakta önce protein tüketilir.",
      },
      {
        question: "GLP-1 kullanırken haftada kaç kilo vermek güvenlidir?",
        answer:
          "Haftalık kilo kaybının vücut ağırlığının %1'ini aşmaması önerilir; 100 kilogramlık bir kişi için bu haftada yaklaşık 1 kilogramdır. Daha hızlı kayıp hem kas kaybını hem de safra taşı riskini artırır. Kayıp bu hızın üzerindeyse doz ve beslenme planı hekimle birlikte gözden geçirilmelidir.",
      },
      {
        question: "Zayıflama iğnesi safra kesesine zarar verir mi?",
        answer:
          "İlacın kendisinden çok, yol açtığı hızlı kilo kaybı ve azalmış öğün hacmi riski artırır. Hızlı kayıpta safra kolesterol açısından aşırı doygun hale gelir; az yiyen bir kişide ise safra kesesi yeterince kasılmadığı için safra durağanlaşır. Risk özellikle ilk 6–12 ayda yüksektir. Öğünlerde enerjinin %20–25'inin yağdan gelmesi ve öğün atlanmaması riski azaltır.",
        canonical: "/glp1-safra-kesesi-sorunlari",
      },
      {
        question: "İğne kullanırken bulantı ve kabızlığı nasıl azaltırım?",
        answer:
          "Bulantı için porsiyonu küçültüp öğün sayısını artırmak, çok yağlı ve baharatlı öğünlerden kaçınmak, sıvıyı öğün arasına almak ve yavaş yemek etkilidir. Kabızlık için günde 25–30 grama kademeli lif artışı, 2–2,5 litre sıvı ve düzenli hareket önerilir. Şiddetli ve geçmeyen karın ağrısı veya inatçı kusma durumunda hekime başvurulmalıdır.",
      },
      {
        question: "İğneyi bırakınca kilo geri gelir mi?",
        answer:
          "Klinik çalışmalarda tedavi sonlandırılan katılımcıların kaybettikleri kilonun önemli bir bölümünü bir yıl içinde geri aldıkları gösterilmiştir. Geri alımı belirleyen iki şey vardır: ilaç döneminde korunan kas kütlesi ve kalıcı hale gelmiş beslenme alışkanlıkları. Bu yüzden çıkış planı sürecin sonunda değil, ilk gününde kurulur.",
        canonical: "/zayiflama-ignesi-diyetisyeni-antalya",
      },
      {
        question: "İlacı siz mi yazıyorsunuz?",
        answer:
          "Hayır. GLP-1 grubu ilaçlar reçeteye tabidir ve reçete etme yetkisi hekimlere aittir. Verilen hizmet, hekiminizin başlattığı sürece beslenme tarafından eşlik etmektir: protein ve enerji planı, yan etki yönetimi, mikrobesin takibi, kas koruma protokolü ve ilaç sonrası dönem planı.",
        canonical: "/zayiflama-ignesi-diyetisyeni-antalya",
      },
    ],
  },
  {
    id: "biohacking",
    title: "Biohacking, longevity ve laboratuvar",
    items: [
      {
        question: "Longevity için en önemli tek şey nedir?",
        answer:
          "Tek bir ölçüt seçmek gerekirse kardiyorespiratuar kapasitedir (VO2max); tüm nedenli ölüm riskinin en güçlü öngörücülerinden biridir. Buna en yakın ikinci ölçüt kas kütlesi ve kavrama gücüdür. Beslenme bu iki değeri destekler ama tek başına yerini tutmaz; bu yüzden program her zaman beslenme ve hareketi birlikte kurar.",
        canonical: "/biohacking-ve-longevity-antalya",
      },
      {
        question: "Hangi kan değerlerine baktırmalıyım?",
        answer:
          "Beslenmeyle fiilen değiştirilebilen temel set şudur: hemogram ve ferritin, 25(OH)D vitamini, B12 ve folat, TSH ile serbest T3-T4, açlık glukozu ve açlık insülini (HOMA-IR için), HbA1c, lipid paneli (ApoB mümkünse) ve hs-CRP. Bu değerler 3–6 ayda bir tekrarlanır; tek ölçümden çok trend anlamlıdır. Tanı ve tedavi kararı hekime aittir.",
      },
      {
        question: "Sürekli glukoz ölçüm cihazı (CGM) taktırmalı mıyım?",
        answer:
          "Diyabet veya insülin direnci varsa tıbbi olarak değerlidir. Sağlıklı kişilerde 2–4 haftalık bir öğrenme aracı olarak kullanılabilir: hangi öğünün, hangi öğün sırasının ve hangi uyku düzeninin kan şekerinizi nasıl etkilediğini doğrudan gösterir. Kalıcı kullanım çoğu sağlıklı kişide gerekli değildir ve yorumsuz takip gereksiz kısıtlamaya yol açabilir.",
        canonical: "/biohacking-ve-longevity-antalya",
      },
      {
        question: "Aralıklı oruç işe yarıyor mu?",
        answer:
          "Kalori alımı eşitlendiğinde aralıklı orucun klasik kalori kısıtlamasına belirgin bir üstünlüğü gösterilmemiştir. Faydası çoğunlukla dolaylıdır: öğün penceresini daraltmak birçok kişide toplam alımı azaltır ve gece atıştırmasını keser. Sporcularda, gebelerde, yeme bozukluğu öyküsü olanlarda ve bazı ilaç kullananlarda uygun değildir.",
      },
      {
        question: "Peptit iğneleri güvenli mi?",
        answer:
          "Kategoriye bağlıdır. GLP-1 analogları gibi ruhsatlı peptitler geniş klinik çalışmalarla değerlendirilmiştir. BPC-157, TB-500 ve CJC-1295 gibi araştırma peptitleri ise insan kullanımı için ruhsatlı değildir, insan çalışması sınırlıdır, temin edilen ürünlerin içeriği bağımsız denetlenmez ve bu moleküller WADA yasaklı listesinde yer alır. Bu iki grubu aynı kategoride değerlendirmek doğru değildir.",
        canonical: "/peptit-tedavileri-ve-beslenme",
      },
    ],
  },
  {
    id: "genel",
    title: "Klinik, ulaşım ve online takip",
    items: [
      {
        question: "Kliniğin adresi ve çalışma saatleri nedir?",
        answer:
          `Klinik, Şirinyalı Mahallesi 1507 Sokak No:46 Kat:1 Daire:3, Muratpaşa / Antalya adresindedir. Çalışma saatleri hafta içi 09:00–18:00, cumartesi 10:00–14:00'tür; pazar günleri kapalıdır. Randevu için ${site.phoneDisplay} numarasını arayabilir veya WhatsApp'tan yazabilirsiniz.`,
      },
      {
        question: "Online diyet takibi yapıyor musunuz?",
        answer:
          "Evet. Görüşmeler video konferansla yürütülür ve program aynı şekilde hazırlanır. Tek fark vücut kompozisyonu ölçümüdür; bunun için periyodik klinik ziyareti önerilir veya ulaşılabilir bir ölçüm merkezine yönlendirme yapılır. Şehir dışında yaşayan, yurt dışındaki veya kamp/deplasman nedeniyle sık seyahat eden danışanlar için uygundur.",
      },
      {
        question: "Diyetisyen ile beslenme koçu arasındaki fark nedir?",
        answer:
          "Diyetisyen, üniversitelerin dört yıllık Beslenme ve Diyetetik bölümünden mezun olan ve tıbbi beslenme tedavisi planlama yetkisine sahip kişidir. \"Beslenme koçu\" ve \"diyet danışmanı\" gibi ifadeler korunmuş unvanlar değildir, standart bir eğitim zorunluluğu yoktur ve tıbbi beslenme tedavisi kapsamına girmezler.",
        canonical: "/antalya-diyetisyen",
      },
      {
        question: "Çocuğum için randevu alabilir miyim?",
        answer:
          "Alabilirsiniz. Çocuk ve ergen beslenmesinde yaklaşım yetişkinden farklıdır: takip tartıyla değil büyüme eğrisiyle yapılır ve kısıtlayıcı diyet uygulanmaz. Görüşmeye ebeveynle birlikte gelinmesi ve varsa büyüme takip kayıtlarının getirilmesi süreci hızlandırır.",
      },
      {
        question: "Antalya'nın hangi ilçelerinden danışan kabul ediyorsunuz?",
        answer:
          "Klinik Muratpaşa Şirinyalı'da olup Muratpaşa, Konyaaltı, Kepez, Lara, Döşemealtı, Aksu ve Serik başta olmak üzere Antalya genelinden danışan kabul edilmektedir. Ulaşımın uzun sürdüğü ilçelerden gelen danışanlarda hibrit model tercih edilebilir: ölçüm için periyodik klinik ziyareti, ara görüşmeler online.",
      },
    ],
  },
];

export const allFaqItems: FaqItem[] = faqGroups.flatMap((g) => g.items);
