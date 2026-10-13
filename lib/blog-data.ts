import type { BlogPost } from "./blog-types";
import { newPosts } from "./blog-posts-new";
import { ekimPosts } from "./blog-posts-ekim";

export type { BlogPost };

// ========================================
// BLOG YAZILARI - YENİ YAZI EKLEMEK İÇİN
// Bu diziye yeni obje ekleyerek blog yazısı ekleyebilirsiniz
// ========================================

/** 2026 öncesi yazılan ilk içerik seti. */
const legacyPosts: BlogPost[] = [
  {
    slug: "antalya-saglikli-beslenme-rehberi",
    title: "Antalya'da Sağlıklı Beslenme Rehberi",
    excerpt: "Antalya'nın yerel lezzetlerini sağlıklı beslenme ile nasıl birleştirebileceğinizi keşfedin. Akdeniz diyetinin faydaları ve pratik öneriler.",
    category: "Beslenme İpuçları",
    tags: ["Antalya", "Akdeniz diyeti", "yerel lezzetler", "sağlıklı beslenme"],
    author: "Dyt. Ali Koşar",
    publishedAt: "2026-01-10",
    updatedAt: "2026-09-22",
    answer:
      "Antalya'da Akdeniz diyetini uygulamak, ürünlere erişim kolaylığı sayesinde başka şehirlere göre çok daha pratiktir. Temel yapı şudur: birincil yağ kaynağı zeytinyağı, haftada 2-3 kez balık, günde en az 5 porsiyon sebze-meyve, tam tahıl ve günlük bir avuç kuruyemiş. Mevsimsel ürün tercih etmek hem maliyeti hem besin değerini iyileştirir.",
    readTime: "5 dk okuma",
    image: "/images/blog/antalya-saglikli-beslenme-rehberi.jpg",
    featured: true,
    content: `
## Akdeniz Diyeti Nedir?

Akdeniz diyeti, dünya genelinde en çok araştırılan ve sağlık açısından en faydalı bulunan beslenme modellerinden biridir. Antalya'da yaşamanın en büyük avantajlarından biri, bu diyetin temel besin kaynaklarına kolayca erişebilmektir.

### Akdeniz Diyetinin Temel Özellikleri

1. **Bol sebze ve meyve tüketimi** - Günde en az 5 porsiyon
2. **Zeytinyağı kullanımı** - Birincil yağ kaynağı olarak
3. **Tam tahıllar** - Beyaz un yerine tam buğday
4. **Balık ve deniz ürünleri** - Haftada en az 2-3 kez
5. **Kuruyemişler** - Günlük olarak bir avuç

## Antalya'da Sağlıklı Besin Kaynakları

### Yerel Pazarlar

Antalya'nın yerel pazarları, taze ve organik ürünler için harika kaynaklardır:

- **Cumartesi Pazarı** - Muratpaşa
- **Çarşamba Pazarı** - Konyaaltı
- **Perşembe Pazarı** - Lara

### Mevsimsel Ürünler

Her mevsim farklı besinlerden faydalanabilirsiniz:

| Mevsim | Önerilen Ürünler |
|--------|------------------|
| İlkbahar | Enginar, bakla, taze soğan |
| Yaz | Domates, biber, patlıcan, kavun |
| Sonbahar | Nar, ayva, kabak |
| Kış | Portakal, mandalina, lahana |

## Pratik Öneriler

1. **Kahvaltıda**: Zeytinyağlı serpme kahvaltı tercih edin
2. **Öğle yemeğinde**: Izgara balık ve bol salata
3. **Akşam yemeğinde**: Sebze ağırlıklı, hafif porsiyonlar

> **İpucu**: Antalya'nın ünlü portakallarından taze sıkılmış portakal suyu, güne başlamak için mükemmel bir C vitamini kaynağıdır.

## Sonuç

Antalya'da sağlıklı beslenmek, coğrafi avantajlarımızı kullanmak demektir. Yerel ve mevsimsel ürünleri tercih ederek hem sağlığınızı koruyabilir hem de bölge ekonomisine katkıda bulunabilirsiniz.

---

*Kişiselleştirilmiş beslenme programı için [randevu alabilirsiniz](/iletisim).*
    `
  },
  {
    slug: "sporcu-beslenmesinde-supplement-kullanimi",
    title: "Sporcu Beslenmesinde Supplement Kullanımı",
    excerpt: "Protein tozu, kreatin, BCAA... Hangi takviyeyi ne zaman kullanmalısınız? Kanıt düzeyine göre sınıflandırılmış, bilimsel temelli supplement rehberi.",
    category: "Sporcu Beslenmesi",
    tags: ["supplement", "protein", "kreatin", "BCAA", "sporcu beslenmesi"],
    author: "Dyt. Ali Koşar",
    publishedAt: "2026-01-05",
    updatedAt: "2026-09-22",
    answer:
      "Sporcu takviyelerinde performansa katkısı güçlü kanıtla desteklenen ürün sayısı beşi geçmez: kreatin monohidrat (günde 3-5 g), kafein (3-6 mg/kg), beta-alanin (günde 3,2-6,4 g), diyet nitratı ve sodyum bikarbonat. Yeterli enerji ve protein alınmadan takviye eklemek sonucu değiştirmez; takviye eksiği kapatır, temeli kurmaz.",
    readTime: "7 dk okuma",
    image: "/images/blog/sporcu-beslenmesinde-supplement-kullanimi.jpg",
    featured: true,
    content: `
## Supplement Nedir ve Neden Gerekli?

Supplement (takviye), normal beslenme ile karşılanamayan besin ihtiyaçlarını desteklemek için kullanılan ürünlerdir. Ancak unutulmamalıdır ki, supplementler asla sağlıklı beslenmenin yerini alamaz.

### Ne Zaman Supplement Kullanmalı?

- Yoğun antrenman dönemlerinde
- Besin alımının yetersiz kaldığı durumlarda
- Spesifik performans hedeflerinde
- Uzman diyetisyen önerisiyle

## Popüler Supplementler ve Kullanım Alanları

### 1. Protein Tozu

**Whey Protein (Peynir Altı Suyu Proteini)**
- **Ne zaman**: Antrenman sonrası 30 dakika içinde
- **Miktar**: 20-30 gram
- **Fayda**: Hızlı emilim, kas onarımı

**Kazein Protein**
- **Ne zaman**: Gece yatmadan önce
- **Miktar**: 25-30 gram
- **Fayda**: Yavaş emilim, gece boyunca amino asit salınımı

### 2. Kreatin

Kreatin, en çok araştırılan ve güvenliği kanıtlanmış supplementlerden biridir.

- **Yükleme fazı**: 20g/gün (4x5g) - 5-7 gün
- **İdame fazı**: 3-5g/gün
- **Fayda**: Güç artışı, kas kütlesi, toparlanma

> **Önemli**: Kreatin kullanırken günde en az 3 litre su tüketmelisiniz.

### 3. BCAA (Dallı Zincirli Amino Asitler)

- **İçerik**: Lösin, izolösin, valin
- **Oran**: 2:1:1 (lösin ağırlıklı)
- **Ne zaman**: Antrenman öncesi/sırası/sonrası
- **Fayda**: Kas yıkımını önleme, toparlanma

### 4. Kafein

- **Miktar**: 3-6 mg/kg vücut ağırlığı
- **Ne zaman**: Antrenman 30-60 dakika önce
- **Fayda**: Enerji, odaklanma, performans artışı

## Dikkat Edilmesi Gerekenler

**Uyarılar**
- Kaliteli markalar tercih edin (3. parti test sertifikalı)
- Dozajı aşmayın
- Sağlık durumunuzu göz önünde bulundurun
- Uzman kontrolünde kullanın

## Sonuç

Supplementler, doğru kullanıldığında performansınızı artırabilir. Ancak temel her zaman sağlıklı ve dengeli beslenmedir. Kişisel ihtiyaçlarınıza göre supplement programı oluşturmak için bir diyetisyene danışmanızı öneririm.

---

*Kişiselleştirilmiş sporcu beslenmesi programı için [iletişime geçin](/iletisim).*
    `
  },
  {
    slug: "glutensiz-yasam-colyak-tarifleri",
    title: "Glutensiz Yaşam: Çölyak Hastaları İçin Pratik Tarifler",
    excerpt: "Çölyak hastalığıyla yaşarken lezzetli yemeklerden vazgeçmek zorunda değilsiniz. Gizli gluten kaynakları, çapraz bulaşma ve pratik glutensiz tarifler.",
    category: "Özel Beslenme",
    tags: ["çölyak", "glutensiz", "tarifler", "özel beslenme"],
    author: "Dyt. Ali Koşar",
    publishedAt: "2026-01-01",
    updatedAt: "2026-09-22",
    answer:
      "Çölyak hastalığında tek tedavi ömür boyu glutensiz beslenmedir: buğday, arpa, çavdar ve bunların türevleri tamamen çıkarılır. Zorluk yasak listesinde değil, gizli gluten kaynakları ve çapraz bulaşma riskindedir. Doğru kurulduğunda glutensiz mutfak kısıtlı değil, sadece farklı bir tahıl setine dayanır.",
    readTime: "6 dk okuma",
    image: "/images/blog/glutensiz-yasam-colyak-tarifleri.jpg",
    content: `
## Çölyak Hastalığı Nedir?

Çölyak hastalığı, glutene karşı gelişen otoimmün bir bağırsak hastalığıdır. Gluten; buğday, arpa ve çavdarda bulunan bir proteindir. Çölyak hastalarında gluten tüketimi bağırsak mukozasına zarar verir.

### Gluten İçeren Besinler

- Buğday ve buğday ürünleri
- Arpa
- Çavdar
- Triticale
- Bazı yulaf ürünleri (kontaminasyon riski)

### Güvenli Alternatifler

- Pirinç
- Mısır
- Kinoa
- Karabuğday
- Amarant
- Teff

## Pratik Glutensiz Tarifler

### 1. Glutensiz Kahvaltı Pandekeki

**Malzemeler:**
- 1 su bardağı pirinç unu
- 1 adet yumurta
- 1 su bardağı süt (veya badem sütü)
- 1 yemek kaşığı bal
- 1 çay kaşığı kabartma tozu

**Yapılışı:**
1. Tüm malzemeleri karıştırın
2. Yapışmaz tavada pişirin
3. Meyve ve bal ile servis edin

### 2. Kinoa Salatası

**Malzemeler:**
- 1 su bardağı kinoa
- 1 adet salatalık
- 1 adet domates
- Zeytinyağı, limon, tuz

**Yapılışı:**
1. Kinoayı haşlayın ve soğutun
2. Sebzeleri küp küp doğrayın
3. Hepsini karıştırıp zeytinyağı-limon sosu ekleyin

### 3. Mısır Unlu Balık

**Malzemeler:**
- 2 adet balık fileto
- 1 su bardağı mısır unu
- Tuz, karabiber
- Zeytinyağı

**Yapılışı:**
1. Balıkları baharatlayın
2. Mısır ununa bulayın
3. Zeytinyağında kızartın

## Dışarıda Yemek Yerken Dikkat!

- Menüyü önceden inceleyin
- Şef veya personele çölyak olduğunuzu belirtin
- Çapraz kontaminasyon riskini sorun
- Şüphe durumunda tüketmeyin

## Sonuç

Glutensiz yaşam başlangıçta zor görünebilir, ancak doğru bilgi ve planlama ile hem sağlıklı hem de lezzetli bir beslenme mümkündür.

---

*Çölyak hastalarına özel beslenme programı için [randevu alın](/iletisim).*
    `
  },
  {
    slug: "diyabet-beslenmesi-temel-ilkeler",
    title: "Diyabet Beslenmesi: Temel İlkeler ve Pratik Öneriler",
    excerpt: "Tip 2 diyabette beslenme yönetimi nasıl olmalı? Glisemik indeks, öğün sırası, öğün sonrası hareket ve kan şekeri dalgalanmasını azaltan pratik adımlar.",
    category: "Klinik Beslenme",
    tags: ["diyabet", "şeker hastalığı", "glisemik indeks", "klinik beslenme"],
    author: "Dyt. Ali Koşar",
    publishedAt: "2025-12-28",
    updatedAt: "2026-09-22",
    answer:
      "Tip 2 diyabette beslenmenin amacı şekeri yasaklamak değil, kan şekeri dalgalanmasını azaltmaktır. En etkili üç müdahale: her öğünde protein ve lif bulundurmak, aynı öğünde önce sebze-protein sonra karbonhidrat tüketmek ve yemekten sonra 10-15 dakika yürümek. İlaç ve insülin dozları hekim tarafından düzenlenir.",
    readTime: "8 dk okuma",
    image: "/images/blog/diyabet-beslenmesi-temel-ilkeler.jpg",
    content: `
## Diyabet ve Beslenme

Tip 2 diyabet, dünyada en yaygın görülen metabolik hastalıklardan biridir. Doğru beslenme, kan şekeri kontrolünün temel taşıdır ve ilaç tedavisinin etkinliğini artırır.

### Diyabet Beslenmesinin Hedefleri

1. Kan şekeri seviyelerini stabil tutmak
2. İlaç ihtiyacını azaltmak
3. Komplikasyonları önlemek
4. Sağlıklı kilo korumak

## Glisemik İndeks (Gİ) Nedir?

Glisemik indeks, besinlerin kan şekerini yükseltme hızını ölçen bir skaladır.

| Gİ Değeri | Sınıflandırma | Örnekler |
|-----------|---------------|----------|
| 0-55 | Düşük | Sebzeler, kurubaklagiller |
| 56-69 | Orta | Tam tahıllar, bazı meyveler |
| 70+ | Yüksek | Beyaz ekmek, patates |

### Düşük Gİ'li Besinleri Tercih Edin

- Yeşil yapraklı sebzeler
- Mercimek, nohut, fasulye
- Yulaf
- Elmak, armut, çilek
- Tam tahıllı ekmek

### Yüksek Gİ'li Besinlerden Kaçının

- Beyaz ekmek, pirinç
- Şekerli içecekler
- Patates kızartması
- Şekerlemeler, pastalar

## Öğün Planlama İpuçları

### Tabak Yöntemi

Yemek tabağınızı şöyle düzenleyin:

- **Yarısı**: Sebzeler (brokoli, salata, kabak)
- **Çeyreği**: Protein (tavuk, balık, et)
- **Çeyreği**: Karbonhidrat (bulgur, tam tahıl)

### Ara Öğün Önerileri

1. 1 avuç badem + 1 elma
2. Yoğurt + ceviz
3. Havuç + humus
4. Peynir + tam buğday kraker

## Pratik Öneriler

1. **Düzenli öğün yiyin** - 3 ana, 2-3 ara öğün
2. **Porsiyon kontrolü yapın** - Küçük tabak kullanın
3. **Su için** - Günde 8-10 bardak
4. **Lif tüketimini artırın** - Günde 25-30 gram
5. **Şekerli içeceklerden kaçının**

## Sonuç

Diyabet yönetiminde beslenme, ilaç tedavisi kadar önemlidir. Doğru besin seçimleri ve porsiyon kontrolü ile kan şekerinizi stabil tutabilir, sağlıklı bir yaşam sürdürebilirsiniz.

---

*Diyabete özel beslenme programı için [iletişime geçin](/iletisim).*
    `
  },
  {
    slug: "kilo-verme-platosu-nasil-asilinir",
    title: "Kilo Verme Platosu Nasıl Aşılır?",
    excerpt: "Diyet yaparken kilolarınız takılı mı kaldı? Platonun gerçek sebepleri ve protein, direnç antrenmanı ile günlük hareket üzerinden aşma yöntemleri.",
    category: "Kilo Yönetimi",
    tags: ["kilo verme", "plato", "metabolizma", "diyet"],
    author: "Dyt. Ali Koşar",
    publishedAt: "2025-12-20",
    updatedAt: "2026-09-22",
    answer:
      "Kilo verme platosunun en sık sebebi metabolizmanın durması değil, alım ile harcamanın farkında olmadan eşitlenmesidir: porsiyonlar büyür, günlük hareket azalır ve kaybedilen kütleyle birlikte enerji ihtiyacı düşer. Çözüm daha sert kısıtlama değil; protein hedefini yükseltmek, direnç antrenmanı eklemek ve günlük adım sayısını artırmaktır.",
    readTime: "5 dk okuma",
    image: "/images/blog/kilo-verme-platosu-nasil-asilinir.jpg",
    content: `
## Kilo Verme Platosu Nedir?

Kilo verme platosu, diyet ve egzersiz yaparken kilonun bir süre sabit kalması durumudur. Bu, hemen herkesin yaşadığı normal bir süreçtir ve aşılabilir.

### Plato Neden Oluşur?

1. **Metabolizma adaptasyonu** - Vücut düşük kaloriye uyum sağlar
2. **Kas kaybı** - Kas kütlesi azalırsa metabolizma yavaşlar
3. **Porsiyon kayması** - Zamanla porsiyonlar farkında olmadan büyür
4. **Rutin monotonluğu** - Vücut aynı egzersize alışır

## Platoyu Aşmak İçin 7 Strateji

### 1. Kalori Döngüsü Uygulayın

Her gün aynı kaloriyi almak yerine, zigzag yapın:

| Gün | Kalori |
|-----|--------|
| Pazartesi | 1400 |
| Salı | 1600 |
| Çarşamba | 1200 |
| Perşembe | 1500 |
| Cuma | 1300 |

### 2. Protein Alımını Artırın

- Protein, metabolizmayı hızlandırır
- Kas kütlesini korur
- Tokluk hissi sağlar
- **Hedef**: Günde 1.2-1.6 g/kg protein

### 3. Egzersiz Rutinini Değiştirin

- **HIIT** ekleyin (Yüksek yoğunluklu interval antrenman)
- Ağırlık antrenmanı yapın
- Farklı aktiviteler deneyin (yüzme, bisiklet)

### 4. Uyku Düzeninizi İyileştirin

- 7-9 saat uyku hedefleyin
- Düzenli saatlerde yatın/kalkın
- Uyku apnesi varsa tedavi ettirin

### 5. Stres Yönetimi

Stres, kortizol seviyelerini artırarak kilo vermayı zorlaştırır:

- Meditasyon
- Nefes egzersizleri
- Hobiler

### 6. Öğün Saatlerini Değiştirin

Aralıklı oruç (intermittent fasting) deneyebilirsiniz:
- 16:8 yöntemi (16 saat açlık, 8 saat yeme penceresi)

### 7. Su Tüketimini Artırın

- Günde en az 2.5-3 litre
- Yemeklerden 30 dakika önce 1-2 bardak

## Ne Zaman Endişelenmeli?

Şu durumlarda uzmana danışın:
- 4 haftadan uzun süreli plato
- Enerji düşüklüğü
- Saç dökülmesi
- Adet düzensizliği

## Sonuç

Plato dönemi, vücudunuzun sizi test ettiği bir süreçtir. Sabırlı olun, stratejilerinizi çeşitlendirin ve motivasyonunuzu kaybetmeyin. Unutmayın, bu geçici bir durumdur!

---

*Kişiselleştirilmiş kilo yönetimi programı için [randevu alın](/iletisim).*
    `
  },
  {
    slug: "yaz-icin-detoks-diyeti-mitleri",
    title: "Yaz İçin Detoks Diyeti: Mitler ve Gerçekler",
    excerpt: "Detoks diyetleri gerçekten işe yarıyor mu? Karaciğer ve böbreklerin doğal temizleme mekanizması ile hızlı kilo kaybının arkasındaki gerçek.",
    category: "Beslenme İpuçları",
    tags: ["detoks", "mit", "gerçek", "sağlıklı beslenme"],
    author: "Dyt. Ali Koşar",
    publishedAt: "2025-12-15",
    updatedAt: "2026-09-22",
    answer:
      "Detoks diyetlerinin vücuttan toksin attığına dair bilimsel kanıt yoktur; bu işi karaciğer ve böbrekler zaten sürekli yapar. Detoks programlarında görülen hızlı kilo kaybı ağırlıklı olarak su ve glikojen kaybıdır ve program bittiğinde geri gelir. Kalıcı sonuç veren şey, lif, protein ve düzenli öğün üzerine kurulu sürdürülebilir bir düzendir.",
    readTime: "4 dk okuma",
    image: "/images/blog/yaz-icin-detoks-diyeti-mitleri.jpg",
    content: `
## Detoks Diyeti Nedir?

Detoks diyetleri, vücudu "toksinlerden arındırdığını" iddia eden beslenme programlarıdır. Genellikle aşırı kısıtlayıcı ve kısa süreli bu diyetler, her yaz popüler hale gelir.

## Yaygın Detoks Mitleri

### Mit 1: "Vücudumuz toksinlerle dolu"

**Gerçek**: Sağlıklı bir insanın karaciğeri ve böbrekleri, toksinleri sürekli olarak filtreler ve atar. Vücudunuz kendi kendine "detoks" yapabilir.

### Mit 2: "Sadece meyve suyu içmek toksinleri atar"

**Gerçek**: Meyve suyu diyetleri genellikle:
- Protein eksikliğine
- Kas kaybına
- Kan şekeri dalgalanmalarına neden olur

### Mit 3: "Detoks zayıflatır"

**Gerçek**: Kaybedilen kilo çoğunlukla su ve kas kütlesidir. Normal beslenmeye dönüldüğünde kilo geri alınır.

### Mit 4: "Detoks daha fazla enerji verir"

**Gerçek**: Aşırı kalori kısıtlaması genellikle yorgunluk, baş ağrısı ve halsizlik yapar.

## Vücudunuzun Doğal Detoks Sistemi

### Karaciğer
- Toksinleri filtreler ve dönüştürür
- Safra üretir

### Böbrekler
- Atıkları idrarla atar
- Elektrolit dengesini korur

### Bağırsaklar
- Sindirilmemiş maddeleri atar
- Probiyotiklerle bağışıklığı destekler

### Akciğerler
- Karbondioksiti atar
- Oksijen alır

### Deri
- Ter yoluyla bazı atıkları atar

## Gerçek "Detoks": Sağlıklı Beslenme

### Yapmanız Gerekenler

- **Bol su için** - Günde 2-3 litre
- **Lifli besinler tüketin** - Sebze, meyve, tam tahıl
- **Şeker ve işlenmiş gıdaları azaltın**
- **Alkol tüketimini sınırlayın**
- **Düzenli egzersiz yapın**
- **Yeterli uyuyun**

### Kaçınmanız Gerekenler

- Aşırı kısıtlayıcı diyetler
- "Mucize" ürünler
- Uzun süreli açlık
- Sadece sıvı tüketmek

## Sonuç

Pahalı detoks paketleri yerine, sürdürülebilir sağlıklı beslenme alışkanlıkları edinin. Vücudunuz zaten mükemmel bir detoks sistemine sahip - ona ihtiyacı olan besinleri verin yeter!

---

*Sağlıklı beslenme planı için [iletişime geçin](/iletisim).*
    `
  }
];

/** Yayındaki tüm yazılar — yeni içerikler önce gelir. */
export const blogPosts: BlogPost[] = [...ekimPosts, ...newPosts, ...legacyPosts];

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Yayın tarihi gelmiş yazılar, yeniden eskiye.
 *
 * İleri tarihli yazılar listelerde, sitemap'te ve llms.txt'te görünmez.
 * Böylece yazılar tek seferde yazılıp commit edilse bile yayına haftaya
 * yayılarak çıkar: ani yayın sıçraması Google'ın "scaled content abuse"
 * tespit sinyallerinden biri ve düşük otoriteli bir alan adında bir günde
 * onlarca URL'in indekslenmesi zaten beklenmiyor.
 *
 * Sayfalar ISR ile düzenli yeniden üretildiği için (bkz. `revalidate`),
 * tarihi gelen yazı elle müdahale olmadan yayına giriyor.
 */
export function getAllPosts(): BlogPost[] {
  const now = Date.now();
  return blogPosts
    .filter((post) => new Date(post.publishedAt).getTime() <= now)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/** Henüz yayına girmemiş, planlanmış yazılar — yalnızca iç kullanım. */
export function getScheduledPosts(): BlogPost[] {
  const now = Date.now();
  return blogPosts
    .filter((post) => new Date(post.publishedAt).getTime() > now)
    .sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
}

/** ISO tarihi "10 Ocak 2026" biçiminde gösterir. */
export function formatDate(isoDate: string): string {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(isoDate));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return undefined;
  // Planlanmış yazı tarihi gelmeden erişilebilir olmasın.
  return new Date(post.publishedAt).getTime() <= Date.now() ? post : undefined;
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter(post => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(post => post.category === category);
}

export function getAllCategories(): { name: string; count: number }[] {
  const published = getAllPosts();
  const categories = published.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return [
    { name: "Tümü", count: published.length },
    ...Object.entries(categories).map(([name, count]) => ({ name, count }))
  ];
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const published = getAllPosts();
  const sameCategory = published.filter(
    post => post.slug !== currentSlug && post.category === currentPost.category
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  // Kategori yetmiyorsa etiket örtüşmesine göre tamamla — her yazının
  // en az 3 iç bağlantı alması iç link yapısı için önemli.
  const chosen = new Set(sameCategory.map(p => p.slug));
  const byTagOverlap = published
    .filter(post => post.slug !== currentSlug && !chosen.has(post.slug))
    .map(post => ({
      post,
      score: post.tags.filter(t => currentPost.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .map(x => x.post);

  return [...sameCategory, ...byTagOverlap].slice(0, limit);
}
