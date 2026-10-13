import type { BlogPost } from "./blog-types";

/**
 * 2026 içerik seti.
 *
 * Bu yazıların ortak özelliği, kopyalanamayan birinci elden deneyime dayanmaları:
 * kulüp ölçüm günü, kamp süreci, klinikte tekrarlayan vaka tabloları. E-E-A-T'nin
 * "Experience" ayağı, tek uzmanlı bir sitenin büyük portalları geçebildiği tek alan.
 *
 * Her yazı GEO disipliniyle yazılır:
 *   - `answer`: 40-60 kelimelik, bağlamsız kopyalandığında anlamlı cevap bloğu
 *   - H2'ler soru biçiminde; her sorunun altındaki ilk paragraf tam cevap
 *   - Spesifik sayı, tablo ve adımlı liste (modellerin en çok alıntıladığı yapılar)
 */
export const newPosts: BlogPost[] = [
  {
    slug: "voleybol-sezon-oncesi-olcum-gunu",
    title: "Voleybolda Sezon Öncesi Ölçüm Günü: Sahada Ne Yapılıyor?",
    excerpt:
      "Antalyaspor voleybol takımıyla her sezon öncesi yaptığımız ölçüm gününün içeriği: hangi veriler alınıyor, neden alınıyor ve o veriler sezon boyunca nasıl kullanılıyor.",
    answer:
      "Sezon öncesi ölçüm günü, bir takımın beslenme planının başladığı gündür: vücut kompozisyonu, yağsız kütle, sıçrama ağırlığı referansı ve kan değerleri alınır. Amaç kilo bakmak değil, sezon boyunca karşılaştırılacak bir başlangıç çizgisi kurmaktır. Antalyaspor voleybol takımıyla bu çalışma her sezon öncesi tekrarlanır.",
    category: "Sporcu Beslenmesi",
    tags: ["voleybol", "sporcu beslenmesi", "vücut kompozisyonu", "Antalyaspor", "sezon hazırlık", "takım diyetisyeni"],
    author: "Uzm. Dyt. Ali Koşar",
    publishedAt: "2026-08-20",
    updatedAt: "2026-09-04",
    readTime: "8 dk okuma",
    image: "/images/blog/voleybol-sezon-oncesi-olcum-gunu.jpg",
    featured: true,
    content: `
## Ölçüm günü neden sezonun en önemli günlerinden biri?

Çünkü o gün alınmayan bir veri, sezon boyunca hiçbir kararın dayanağı olamaz. Aralık ayında bir oyuncunun "kilo aldı mı, kas mı yaptı" sorusunu cevaplayabilmek için ağustostaki başlangıç çizgisine ihtiyaç var. Başlangıç çizgisi yoksa geriye tahmin kalıyor.

Antalyaspor voleybol takımıyla her sezon öncesi bu çalışmayı tekrarlıyoruz. Bir günde tüm kadro geçiyor; sonrasında veri kişi bazında raporlanıyor ve teknik ekiple paylaşılıyor.

## Ölçüm gününde hangi veriler alınıyor?

Dört başlıkta topluyorum:

### 1. Vücut kompozisyonu

Tartıdaki rakam tek başına neredeyse hiçbir şey söylemiyor. Aldığımız veriler:

- Toplam vücut ağırlığı
- **Yağsız kütle** — sezon boyunca asıl takip edilen değer
- Vücut yağ yüzdesi
- Bölgesel dağılım ve simetri (özellikle sakatlık geçmişi olan oyuncularda)
- Toplam vücut suyu

Voleybolda güç/ağırlık oranı doğrudan sıçrama yüksekliğine yansıyor. Bu yüzden hedef her zaman "hafif olmak" değil; **yağsız kütleyi korurken gereksiz ağırlıktan kurtulmak**.

### 2. Kan değerleri

Ölçüm gününden önce istenen panel, sezonun sessiz problemlerini baştan yakalıyor:

| Değer | Neden bakılıyor |
|-------|-----------------|
| Hemogram, ferritin | Demir eksikliği — açıklanamayan yorgunluğun en sık sebebi |
| 25(OH)D vitamini | Kapalı salon branşlarında yetersizlik çok yaygın |
| B12, folat | Enerji metabolizması ve toparlanma |
| TSH, sT3, sT4 | Tiroid işlevi |
| Açlık glukozu, insülin | Metabolik durum |
| Karaciğer, böbrek fonksiyonları | Supplement kullanımı öncesi güvenlik taraması |

Biyokimya yüksek lisansı yaparken en çok işime yarayan şey buydu: bir panelin sadece "normal/anormal" değil, **o sporcuda ne anlama geldiğini** okuyabilmek.

### 3. Beslenme ve yaşam düzeni

Ölçümün en az cihaz kadar önemli tarafı. Her oyuncuyla ayrı konuşuyoruz:

- Günlük öğün düzeni ve antrenman saatiyle ilişkisi
- Uyku süresi ve düzeni
- Mevcut supplement kullanımı (ve nereden temin edildiği)
- Sakatlık geçmişi
- Deplasman ve seyahat düzeninde beslenmenin nasıl bozulduğu
- Sevmediği ve tolere edemediği besinler

Son madde önemsiz görünüyor ama değil. Uygulanmayan bir plan, yazılmamış bir plandan farksız.

### 4. Hidrasyon durumu

Antalya'da ağustos ayında yapılan bir salon antrenmanında ter kaybı ciddi boyutta. Ter oranı, antrenman öncesi ve sonrası tartı farkı üzerinden hesaplanıyor ve her oyuncuya kişisel bir sıvı hedefi çıkıyor.

> Aynı antrenmanda iki oyuncunun ter kaybı 0,8 litre ile 2,1 litre arasında değişebiliyor. Herkese "günde 3 litre su iç" demek, bu farkı görmezden gelmek demek.

## Veri sezon boyunca nasıl kullanılıyor?

Ölçüm günü tek başına bir fotoğraf. Anlamlı olan, sonraki ölçümlerle karşılaştırılması.

1. **Sezon öncesi (ağustos)** — başlangıç çizgisi kurulur, hedefler belirlenir
2. **Sezon başı (ekim)** — hazırlık döneminin sonucu görülür
3. **Sezon ortası (ocak)** — yoğun maç takviminin yıpratma etkisi ölçülür
4. **Sezon sonu (nisan/mayıs)** — toplam değişim ve ara dönem planı

Aradaki değişim üç sorunun cevabını veriyor: Oyuncu yeterli enerji alıyor mu? Kas kütlesini koruyabiliyor mu? Sakatlık sonrası dönen oyuncu eski kompozisyonuna geri döndü mü?

## En sık gördüğüm üç sorun

**Enerji açığı.** Özellikle sezon içi yoğun dönemde, oyuncular farkında olmadan yetersiz yiyor. Bu tabloda ilk düşen performans değil, toparlanma hızı oluyor — sonra performans geliyor.

**Protein dağılımı.** Günlük toplam yeterli olsa bile büyük kısmı akşam yemeğinde toplanıyorsa, kas protein sentezi açısından bu ideal değil. Hedef, güne 4-5 öğüne bölünmüş ve her öğünde 25-35 gram.

**Deplasman düzeni.** En iyi kurulan plan bile otobüste ve otel yemekhanesinde çöküyorsa işe yaramıyor. Bu yüzden deplasman senaryosu ayrı yazılıyor: yolda ne alınacak, maç öncesi otel kahvaltısında tabak nasıl kurulacak, maç sonrası ilk saat ne olacak.

## Amatör sporcu için çıkarılacak ders

Kulüp altyapısı olmayan biri de bu mantığı uygulayabilir:

1. Sezon veya program başında bir **vücut kompozisyonu ölçümü** yaptırın, sadece tartıya bakmayın
2. Yılda en az bir kez **ferritin ve D vitamini** dâhil temel bir kan paneli baktırın
3. Ağır bir antrenman öncesi ve sonrası tartılıp **kendi ter oranınızı** hesaplayın
4. 8-12 haftada bir ölçümü tekrarlayın ve **yönü** izleyin

Ölçmediğiniz bir şeyi yönetemezsiniz. Bu cümle klişe ama sporcu beslenmesinde birebir doğru.
`,
  },

  {
    slug: "tff-gelisim-kampi-alt-yas-beslenmesi",
    title: "TFF Gelişim Kampında Alt Yaş Sporcuların Beslenmesi",
    excerpt:
      "Gelişim çağındaki futbolcularda kamp beslenmesi neden yetişkinden farklı planlanır? Enerji uygunluğu, büyüme eğrisi ve yemekhanede uygulanabilir kurallar.",
    answer:
      "Gelişim çağındaki sporcularda beslenme hedefi kilo vermek değil, büyüme ve antrenman yükünü aynı anda karşılayacak enerjiyi sağlamaktır. Kamp döneminde antrenman yükü en yüksek, yemek seçenekleri en sınırlıdır; bu ikisi birleştiğinde enerji açığı hızla oluşur. Takip tartıyla değil büyüme eğrisiyle yapılır.",
    category: "Sporcu Beslenmesi",
    tags: ["futbol", "alt yaş", "gelişim kampı", "TFF", "genç sporcu", "enerji uygunluğu", "sporcu beslenmesi"],
    author: "Uzm. Dyt. Ali Koşar",
    publishedAt: "2026-08-12",
    updatedAt: "2026-09-04",
    readTime: "7 dk okuma",
    image: "/images/blog/tff-gelisim-kampi-alt-yas-beslenmesi.jpg",
    featured: true,
    content: `
## Gelişim çağındaki sporcuda beslenme neden farklı?

Çünkü bu yaş grubunda vücut aynı anda iki işi yapıyor: **büyümek** ve **antrenmana adapte olmak.** Yetişkin bir sporcuda enerji sadece performans ve toparlanma için harcanırken, 14 yaşındaki bir futbolcuda aynı enerjinin bir kısmı boy uzamasına, kemik gelişimine ve hormonal olgunlaşmaya gidiyor.

Bu yüzden yetişkin sporcuda uygulanabilir olan hafif bir kalori açığı, gelişim çağındaki bir sporcuda kalıcı sonuçlar doğurabiliyor.

## Kamp dönemi neden en riskli dönem?

Üç şey aynı anda oluyor:

1. **Antrenman yükü tavan yapıyor** — günde çift antrenman, yüksek şiddet
2. **Dinlenme azalıyor** — yoğun program, farklı yatak, bozulan uyku düzeni
3. **Yemek seçenekleri sabit** — kamp yemekhanesi menüsü ne veriyorsa o

Bu üçlü, enerji açığının en hızlı oluştuğu ortamı yaratıyor. Kamp sonunda beklenen kazanım yerine yorgunluk kalıyorsa, sebep neredeyse her zaman burada.

## Enerji uygunluğu: en kritik kavram

Enerji uygunluğu, aldığınız enerjiden antrenmanda harcadığınızı çıkardıktan sonra vücudun temel işlevlerine kalan kısım. Yağsız kütle kilogramı başına günde **45 kcal** civarı ideal kabul ediliyor; **30 kcal/kg** eşiğinin altına inildiğinde hormonal ve metabolik bozulmalar başlıyor.

Gelişim çağında bu eşiğin altında kalmanın sonuçları yetişkinden daha ciddi:

- Boy uzamasında yavaşlama
- Kemik mineral yoğunluğunda yetersiz kazanım
- Ergenlik gelişiminde gecikme
- Kızlarda adet düzensizliği veya gecikmiş menarş
- Stres kırığı riskinde artış
- Tekrarlayan hastalık ve uzayan toparlanma

⚠️ Bu tablonun en sinsi tarafı, çoğu zaman "çalışkanlık" veya "formsuzluk" olarak yorumlanması.

## Kamp yemekhanesinde uygulanabilir kurallar

Genç sporcuya karmaşık bir liste vermenin karşılığı yok. Kampta işe yarayan şey, **tabak kurma kuralları**:

### Ana öğünlerde

1. **Tabağın yarısı karbonhidrat** — pilav, makarna, bulgur, patates, ekmek
2. **Bir el ayası kadar protein** — et, tavuk, balık, köfte, yumurta veya baklagil
3. **Bir porsiyon sebze veya salata** — zeytinyağıyla
4. **Bir bardak süt veya ayran**

### Antrenmanlar arasında

Çift antrenman gününde ara öğün tercih değil, zorunluluk:

| Zaman | Ne alınır |
|-------|-----------|
| Antrenman öncesi 1-2 saat | Meyve + bir avuç kuruyemiş veya sade sandviç |
| Antrenman hemen sonrası | Süt/ayran + meyve veya sandviç |
| İki antrenman arası ana öğün | Tam tabak, karbonhidrat ağırlıklı |
| Gece son ara öğün | Yoğurt veya süt |

### Sıvı

Kamp döneminde en çok ihmal edilen başlık. Antrenman öncesi, sırası ve sonrası için sabit bir rutin kurulmalı; matara antrenman alanına götürülmeli ve susama hissi beklenmemeli.

## Ailelere en sık söylediğim şey

Gelişim çağındaki bir sporcuda **kilo verdirmeye çalışmayın.** Çocuğun vücut kompozisyonu iyi görünmüyorsa, doğru yaklaşım kısıtlama değil; besin kalitesini artırmak, öğün düzenini kurmak ve boy uzamasının kompozisyonu kendiliğinden düzeltmesine izin vermek.

Takip aracı tartı değil, **büyüme eğrisi**. Bir çocuğun kendi eğrisinde ilerlemesi, ideal bir kiloya ulaşmasından çok daha anlamlı bir hedef.

> Kamp dönüşünde bir sporcunun 1 kilo vermesi başarı değil. Aynı sporcunun kampı yorgun bitirmemesi, sakatlanmaması ve okula döndüğünde antrenmana devam edebilecek durumda olması başarı.

## Supplement konusu

Gelişim çağındaki sporcularda takviye ihtiyacı, yeterli ve düzenli bir beslenme kurulduğunda büyük ölçüde ortadan kalkıyor. Bu yaş grubunda:

- **Öncelik her zaman besin** — takviye eksiği kapatır, temeli kurmaz
- **Kan değeriyle gösterilmiş eksiklik dışında** takviye başlanmaz (demir, D vitamini gibi)
- **Kanıtı olmayan performans ürünlerinden** uzak durulmalı
- **Kaynağı belirsiz ürünler** doping riski taşır ve genç sporcuda özellikle riskli

Takviye kararı, hekim ve diyetisyen değerlendirmesiyle verilir.
`,
  },

  {
    slug: "zayiflama-ignesi-birakinca-kilo-neden-geri-geliyor",
    title: "Zayıflama İğnesini Bırakınca Kilo Neden Geri Geliyor?",
    excerpt:
      "GLP-1 tedavisi sonlandırıldığında kilonun büyük bölümü genellikle geri alınıyor. Bunun iki sebebi var ve ikisi de ilaç döneminde alınacak kararlarla değiştirilebilir.",
    answer:
      "İlaç bırakıldığında iştah baskılanması ortadan kalkar ve klinik çalışmalarda kaybedilen kilonun önemli bölümü bir yıl içinde geri alınmıştır. Geri alımı belirleyen iki şey vardır: ilaç döneminde korunan kas kütlesi ve yerleşmiş beslenme alışkanlıkları. Bu yüzden çıkış planı ilacın son gününde değil, ilk gününde kurulur.",
    category: "Kilo Yönetimi",
    tags: ["zayıflama iğnesi", "GLP-1", "Mounjaro", "Ozempic", "kilo koruma", "kas kaybı", "metabolizma"],
    author: "Uzm. Dyt. Ali Koşar",
    publishedAt: "2026-07-28",
    updatedAt: "2026-09-04",
    readTime: "7 dk okuma",
    image: "/images/blog/zayiflama-ignesi-birakinca-kilo-neden-geri-geliyor.jpg",
    featured: true,
    content: `
## Önce net bir tespit

Bu ilaçlar işe yarıyor. GLP-1 ve GLP-1/GIP grubu moleküller, obezite tedavisinde son yirmi yılın en etkili farmakolojik araçları. Sorun ilacın etkisizliği değil.

Sorun şu: **ilaç bırakıldığında etki de bırakıyor.** Klinik çalışmalarda tedavi sonlandırılan katılımcıların kaybettikleri kilonun önemli bir bölümünü bir yıl içinde geri aldıkları gösterildi.

Bu kaçınılmaz değil ama otomatik de değil. Farkı iki şey yaratıyor.

## Sebep 1: Kaybedilen kas kütlesi

GLP-1 ile verilen kilonun yaklaşık **%25'i yağsız dokudan** geliyor. Tirzepatid ile yapılan SURMOUNT-1 alt çalışmasında bildirilen oran bu civarda.

Neden önemli? Çünkü kas, dinlenme halinde bile enerji harcayan bir doku. Kas kütlesi düştüğünde bazal metabolizma da düşüyor. Yani ilacı bıraktığınızda, sadece iştahınız geri gelmiyor — aynı zamanda **daha düşük bir metabolizmayla** karşı karşıya kalıyorsunuz.

Sonuç: ilaç öncesindeki beslenme düzenine dönmek bile artık kilo aldırıyor.

| | Kas korunmuş | Kas kaybedilmiş |
|--|--------------|-----------------|
| Bazal metabolizma | Büyük ölçüde korunur | Belirgin düşer |
| Aynı beslenmeyle sonuç | Kilo stabil | Kilo artar |
| Fiziksel kapasite | Korunur | Düşer |
| Geri alım riski | Düşük | Yüksek |

## Sebep 2: Kurulmamış alışkanlıklar

İkinci sebep daha basit ama daha yaygın: ilaç iştahı kapattığı için, kişi bu dönemde **hiçbir şey öğrenmeden** kilo veriyor.

İştah baskılıyken porsiyon kontrolü otomatik oluyor, akşam atıştırması kendiliğinden kesiliyor, tatlı isteği kayboluyor. Kişi bunları "başardığını" sanıyor; oysa bunları yapan ilaç.

İlaç bırakıldığında iştah geri geliyor ve karşısında hiçbir alışkanlık bulmuyor. Eski düzen olduğu gibi geri geliyor.

> Klinikte en sık duyduğum cümle: "İğneyi kullanırken hiç zorlanmadım, bırakınca her şey eskisi gibi oldu." Bu cümle bir başarısızlık değil — sadece süreç boyunca yeni bir şey kurulmadığının işareti.

## Peki ne yapmalı?

Çıkış planı ilacın son gününde değil, **ilk gününde** kurulur. Dört başlıkta:

### 1. Proteini baştan hedefe oturtun

Aktif kilo kaybı döneminde günde kilogram başına **1,2-1,6 gram** protein. Güne 3-5 öğüne bölünmüş, her öğünde 25-35 gram.

İştah baskılıyken bu miktara ulaşmak zor — bu yüzden tabakta **önce protein** tüketilir. Tabak bitmeyebilir; bitmediğinde geride kalan şey garnitür olmalı, protein değil.

### 2. Direnç antrenmanını sürecin parçası yapın

Haftada 2-3 gün, büyük kas gruplarını kapsayan, kademeli olarak zorlaşan bir program. Yürüyüş bu işi görmüyor — kasa "korunman gerekiyor" sinyalini gönderen şey yüklenme.

Yeterli protein + direnç antrenmanı birlikte uygulandığında yağsız kütle kaybı büyük ölçüde önlenebiliyor.

### 3. Kilo kaybı hızını sınırlayın

Haftalık kayıp vücut ağırlığının **%1'ini** aşmamalı. Daha hızlısı hem kas kaybını hem de safra taşı riskini artırıyor. Kayıp bu hızın üzerindeyse doz takvimi hekimle yeniden değerlendirilmeli.

Hızlı gitmek burada kazanç değil, borç.

### 4. Alışkanlıkları ilaç döneminde kurun

İlaç dönemi, alışkanlık kurmak için en kolay dönem — çünkü iştah size karşı çalışmıyor. Bu dönemde yerleşmesi gerekenler:

1. Öğün saatlerinin düzeni
2. Her öğünde protein bulunması
3. Sebze ve lif alışkanlığı
4. Düzenli antrenman rutini
5. Akşam yeme penceresinin kapanması
6. Yeterli uyku

Bunlar ilaç bırakıldığında kişiyi ayakta tutan şeyler.

## İlacı bırakırken

Çıkış hekimle birlikte, en az birkaç hafta önceden planlanır:

- **Enerjiyi kademeli artırın.** İştah geri dönerken alım birden serbest bırakılmaz; haftalık küçük artışlarla bakım düzeyine gelinir.
- **Protein ve antrenmanı sürdürün.** İlaç bittiğinde en son bırakılacak iki şey bunlar.
- **Ölçümü sürdürün.** İlk 6 ay boyunca vücut kompozisyonu takibi devam eder; geri alım varsa erken müdahale edilir.
- **Tartıyı değil trendi izleyin.** Günlük dalgalanma normal; haftalık ortalamanın yönü önemli.

## Sonuç

İğne bir araçtır, çözüm değil. Doğru kullanıldığında yıllardır çözülemeyen bir tabloyu açar; yanlış kullanıldığında kişiyi başladığı yerden daha düşük bir kas kütlesiyle geri bırakır.

Farkı yaratan şey ilacın kendisi değil, o dönemde ne yapıldığı.
`,
  },

  {
    slug: "longevity-icin-kaniti-en-guclu-yedi-aliskanlik",
    title: "Longevity İçin Kanıtı En Güçlü 7 Alışkanlık",
    excerpt:
      "Sağlıklı yaşam süresini uzatan müdahalelerin çoğu pahalı değil, sıkıcı. Kanıt düzeyi en yüksek yedi başlık ve popüler ama zayıf kanıtlı olanlardan nasıl ayrıldıkları.",
    answer:
      "Sağlıklı yaşam süresini (healthspan) en güçlü öngören ölçütler kardiyorespiratuar kapasite (VO2max), kas kütlesi, uyku düzeni, kan şekeri kararlılığı ve ApoB düzeyidir. Bu beş başlığı hedef alan müdahalelerin kanıtı, NMN veya resveratrol gibi popüler moleküllerin kanıtından belirgin biçimde güçlüdür.",
    category: "Biohacking ve Longevity",
    tags: ["longevity", "biohacking", "healthspan", "VO2max", "kas kütlesi", "uyku", "biyobelirteç"],
    author: "Uzm. Dyt. Ali Koşar",
    publishedAt: "2026-07-15",
    updatedAt: "2026-09-04",
    readTime: "9 dk okuma",
    image: "/images/blog/longevity-icin-kaniti-en-guclu-yedi-aliskanlik.jpg",
    content: `
## Bu alandaki asıl sorun

Longevity içeriklerinin çoğu iki uçtan birine düşüyor: ya kanıtı olmayan ürünleri pazarlıyor ya da tüm alanı toptan reddediyor.

Gerçek ikisinin ortasında ve açıkçası oldukça sıkıcı. Sağlıklı yaşam süresini en çok etkileyen şeylerin neredeyse tamamı ücretsiz veya çok ucuz. Aşağıdaki liste kanıt düzeyine göre sıralandı.

## 1. Kardiyorespiratuar kapasiteyi (VO2max) artırmak

Tüm nedenli ölüm riskinin en güçlü öngörücülerinden biri. Düşük kondisyon düzeyinden orta düzeye geçmenin risk üzerindeki etkisi, bilinen birçok risk faktörünü aşıyor.

**Nasıl:** Haftada 150-180 dakika orta şiddetli aerobik (konuşabildiğiniz ama şarkı söyleyemediğiniz tempo) + haftada 1-2 kez yüksek şiddetli aralıklı çalışma.

**Beslenme tarafı:** Aerobik kapasiteyi destekleyen şey yeterli enerji, demir ve D vitamini durumu. Ferritin düşükse antrenman ne kadar iyi olursa olsun kapasite yükselmiyor.

## 2. Kas kütlesini korumak ve artırmak

Kas kütlesi ve kavrama gücü, yaşlanmada fonksiyonel bağımsızlık ve mortalite ile güçlü ilişkili. 30 yaşından sonra müdahale edilmediğinde her on yılda kas kütlesi kaybı başlıyor ve bu kayıp ivmeleniyor.

**Nasıl:** Haftada 2-3 gün direnç antrenmanı, kademeli yüklenme ile.

**Beslenme tarafı:** Günde kilogram başına 1,2-1,6 gram protein (50 yaş üstünde üst banda yakın), öğün başına 25-35 gram. Kreatin monohidrat günde 3-5 gram — hem kas hem bilişsel işlev açısından en iyi belgelenmiş takviyelerden.

## 3. Düzenli ve yeterli uyku

Gece 7-9 saat ve **düzenli saatlerde**. Uyku eksikliği insülin duyarlılığını düşürüyor, iştah hormonlarını bozuyor, bağışıklığı zayıflatıyor ve bilişsel işlevi doğrudan etkiliyor.

Düzenlilik, toplam süreden bazen daha belirleyici. Her gün farklı saatte yatmak, kısa ama düzenli uykudan daha kötü metabolik sonuçlar veriyor.

**Pratik:** Yatış-kalkış saatini sabitleyin, uyandıktan sonraki ilk saatte 10-20 dakika dışarıda güneş ışığı alın, son öğünü yatmadan 3 saat önce bitirin, kafeini öğleden sonra kesin.

Antalya'nın güneş süresi, sabah ışığı alışkanlığı için ciddi bir avantaj.

## 4. Sigara ve aşırı alkolden kaçınmak

Bu maddenin etkisi, listedeki diğer tüm maddelerin toplamından büyük. Başka hiçbir müdahale, sigarayı bırakmanın sağladığı kazancı telafi etmiyor.

Alkolde ise "sağlıklı miktar" kavramı son yıllarda giderek zayıflıyor. Alkol ayrıca uykunun ikinci yarısını ve kas protein sentezini doğrudan bozuyor.

## 5. ApoB / LDL kolesterolü hedefte tutmak

Ateroskleroz riskinin doğrudan belirleyicisi. ApoB, LDL kolesterolden daha iyi bir risk göstergesi kabul ediliyor çünkü aterojenik partikül sayısını gösteriyor.

**Beslenme tarafı:** Doymuş yağ kaynaklarının azaltılması, çözünür lif artışı (yulaf, baklagil, elma), yeterli omega-3 ve vücut yağ oranının kontrolü.

**Not:** Hedef değer kişinin toplam risk profiline göre değişiyor ve bu değerlendirme hekim işi.

## 6. Yeterli protein ve lif

**Protein**, özellikle 50 yaş üstünde sarkopeni önlenmesinin temeli. Yaşla birlikte kas protein sentezine direnç arttığı için ihtiyaç azalmıyor, artıyor.

**Lif**, muhtemelen en hafife alınan başlık. Günde 25-30 gram lif; bağırsak mikrobiyotası, kolesterol, kan şekeri kararlılığı ve tokluk üzerinde aynı anda etkili. Çoğu kişi bunun yarısını alıyor.

**Pratik hedef:** Haftada 30 farklı bitkisel besin çeşidi. Baharatlar, kuruyemişler ve tohumlar da sayılıyor.

## 7. Kan şekeri kararlılığı

Sürekli yüksek ve dalgalı kan şekeri, uzun vadede damar sağlığından bilişsel işleve kadar geniş bir alanı etkiliyor.

**En etkili üç müdahale:**

1. **Öğün sırası** — aynı öğünde önce sebze ve protein, sonra karbonhidrat: öğün sonrası şeker artışını belirgin biçimde düşürüyor
2. **Öğün sonrası hareket** — yemekten sonra 10-15 dakikalık yürüyüş
3. **Lif** — öğünde lif bulunması glukoz eğrisini yumuşatıyor

## Peki popüler olanlar?

| Müdahale | Kanıt | Durum |
|----------|-------|-------|
| Zaman kısıtlı beslenme | Orta | Kalori eşitlendiğinde ek etkisi sınırlı; öğün düzenini kolaylaştırabilir |
| Sauna / ısı maruziyeti | Orta | Gözlemsel çalışmalarda kardiyovasküler faydayla ilişkilendirilmiş |
| Soğuk maruziyeti | Zayıf-orta | Toparlanma etkisi tartışmalı; antrenman sonrası hipertrofiyi baskılayabilir |
| NMN / NR | Zayıf | İnsanda sağlıklı yaşam süresine etkisi gösterilmemiş |
| Resveratrol | Zayıf | Erken dönem beklentiler insan çalışmalarında karşılanmadı |
| Detoks programları | Yok | Fizyolojik dayanağı yok |

Bu, "hiçbiri işe yaramaz" demek değil. "Yukarıdaki yedi maddeyi kurmadan bunlara geçmenin anlamı yok" demek.

## Nereden başlamalı?

Bir seferde hepsini değil. Sıra önerim:

1. **Uyku düzenini** sabitleyin — diğer her şeyi kolaylaştırıyor
2. **Direnç antrenmanını** haftalık rutine sokun
3. **Protein hedefini** tutturun
4. **Lifi** kademeli artırın
5. Temel bir **kan paneli** baktırın ve 3-6 ayda bir tekrarlayın
6. Aerobik kapasiteyi artırmaya başlayın
7. Gerisi bunların üzerine gelir

Ölçmediğiniz bir şeyi optimize edemezsiniz — ama ölçtüğünüz her şeyin de optimize edilmeye değer olmadığını bilmek işin diğer yarısı.
`,
  },

  {
    slug: "antalya-sicaginda-antrenman-sivi-elektrolit-rehberi",
    title: "Antalya Sıcağında Antrenman: Sıvı ve Elektrolit Rehberi",
    excerpt:
      "Antalya'da yaz aylarında ter kaybı iç bölgelere göre belirgin biçimde yüksek. Kendi ter oranınızı nasıl hesaplarsınız ve sıvı planınızı buna göre nasıl kurarsınız?",
    answer:
      "Vücut ağırlığının %2'sini aşan sıvı kaybı, dayanıklılıkta ve bilişsel performansta ölçülebilir düşüş yaratır; Antalya'nın yaz sıcağında bu eşiğe bir saatlik antrenmanda bile ulaşılabilir. Sıvı planı tahminle değil, antrenman öncesi-sonrası tartı farkından hesaplanan kişisel ter oranıyla kurulur.",
    category: "Sporcu Beslenmesi",
    tags: ["hidrasyon", "elektrolit", "sıcakta antrenman", "Antalya", "sporcu beslenmesi", "ter oranı"],
    author: "Uzm. Dyt. Ali Koşar",
    publishedAt: "2026-06-25",
    updatedAt: "2026-09-04",
    readTime: "6 dk okuma",
    image: "/images/blog/antalya-sicaginda-antrenman-sivi-elektrolit-rehberi.jpg",
    content: `
## Antalya'da sıcak neden ayrı bir problem?

Sıcaklık tek başına değil, **nemle birlikte** sorun oluyor. Yüksek nemde ter buharlaşamıyor; vücut serinleyemediği için daha çok terliyor. Sonuç: aynı antrenman, kuru bir iklime göre çok daha yüksek sıvı kaybı.

Yaz aylarında Antalya'da öğle saatlerinde yapılan bir açık hava antrenmanında, saatlik ter kaybı 2 litreyi aşabiliyor. Bu, "susadıkça su iç" yaklaşımının kesinlikle yetmediği bir seviye.

## Ne kadar kayıp sorun?

Vücut ağırlığının **%2'sini** aşan sıvı kaybı, dayanıklılık performansında ve bilişsel işlevde ölçülebilir düşüş yaratıyor. 70 kilogramlık biri için bu **1,4 kilogram** demek — yani 1,4 litre.

Sıcakta bir saatlik yoğun bir antrenmanda bu eşiğe ulaşmak zor değil.

Belirtiler sırayla geliyor: performans düşüşü ve algılanan zorlukta artış, konsantrasyon kaybı, baş ağrısı, kas krampları, bulantı.

## Kendi ter oranınızı nasıl hesaplarsınız?

Bu hesap 10 dakika sürüyor ve sıvı planınızı tahminden çıkarıyor.

1. Antrenmandan **hemen önce** çıplak tartılın (kg)
2. Antrenman boyunca içtiğiniz sıvıyı **kaydedin** (litre)
3. Antrenmandan **hemen sonra**, terinizi kuruladıktan sonra tekrar tartılın (kg)
4. Hesap: **Ter kaybı = (önce − sonra) + içilen sıvı**
5. Bunu antrenman süresine bölerek **saatlik ter oranınızı** bulun

**Örnek:** 74,0 kg başladınız, 72,8 kg bitirdiniz, 0,7 litre su içtiniz, antrenman 90 dakika sürdü.
Ter kaybı = (74,0 − 72,8) + 0,7 = **1,9 litre** → saatlik oran ≈ **1,27 litre/saat**

Bu hesabı farklı hava koşullarında 2-3 kez tekrarlayın; kişisel aralığınızı görürsünüz.

## Sıvı planı

### Antrenman öncesi (2-4 saat önce)

- Kilogram başına **5-7 ml** sıvı. 70 kg için 350-490 ml.
- İdrar renginin **açık saman sarısı** olması iyi bir pratik gösterge.
- Antrenmandan hemen önce büyük miktarda su içmeyin — mide rahatsızlığı yaratır ve zaten emilmeye vakit bulamaz.

### Antrenman sırasında

| Antrenman süresi | Öneri |
|------------------|-------|
| 60 dakikadan kısa | Sade su, ter oranına göre saatte 400-800 ml |
| 60-90 dakika | Sodyum içeren içecek; karbonhidrat eklenebilir |
| 90 dakikadan uzun | Sodyum + saatte 30-60 g karbonhidrat |
| Çok sıcakta, 2+ saat | Sodyum artırılır; karışık karbonhidrat kaynağıyla saatte 90 g'a kadar |

### Antrenman sonrası

- Kaybedilen her **1 kilogram** için **1,25-1,5 litre** sıvı.
- Sıvı **tuz içeren bir öğünle birlikte** alınmalı. Sadece su içmek, terle kaybedilen sodyumu yerine koymuyor ve idrarla hızla atılıyor.
- Süt ve ayran, hem sıvı hem sodyum hem protein sağladığı için toparlanma açısından iyi seçenekler.

## Elektrolitler

Terle kaybedilen ana mineral **sodyum**. Kişiden kişiye ter sodyum konsantrasyonu ciddi biçimde değişiyor — bazı sporcular "tuzlu terleyici" ve cildinde beyaz tuz izi bırakıyor.

⚠️ **Hiponatremi riski:** Uzun süreli eforlarda sadece sade su içerek aşırı hidrasyon yapmak, kan sodyumunu tehlikeli düzeyde düşürebiliyor. Bu tablo, dehidrasyondan daha tehlikeli olabiliyor. Uzun antrenmanlarda sodyum içeren içecek tercih edin.

**Pratik yaklaşım:**

- 60 dakikayı aşan antrenmanlarda sodyum içeren içecek
- Yoğun terleyenlerde antrenman sonrası öğünde tuz kısıtlamayın
- Potasyum, magnezyum ve kalsiyum genellikle normal beslenmeyle karşılanıyor
- Elektrolit tableti gerekli mi? Ter oranınız yüksekse ve antrenmanlarınız uzunsa evet; günde 45 dakika salon çalışması yapan biri için gereksiz

## Antalya'ya özel pratik notlar

1. **Saat seçimi en etkili müdahale.** Sabah erken veya akşam geç saatler, öğle antrenmanına göre ter kaybını ciddi biçimde düşürüyor.
2. **Isıya adaptasyon gerçek.** Sıcakta düzenli antrenman yapan bir vücut 10-14 gün içinde adapte oluyor: ter daha erken başlıyor ve terdeki sodyum konsantrasyonu düşüyor. Yaza hazırlığı kademeli yapın.
3. **Açık renk ve nefes alan kıyafet**, buharlaşmayı kolaylaştırıyor.
4. **Antrenman öncesi hidrasyon kontrolü:** Sabah ilk idrarın rengi, o günkü başlangıç durumunuz hakkında en pratik bilgi.
5. **Turistik dönemde deniz ve havuz** aktivitesi de sıvı kaybı yaratıyor — suyun içinde olmak terlemediğiniz anlamına gelmiyor.
`,
  },

  {
    slug: "kreatin-hakkinda-sekiz-yanlis-bilgi",
    title: "Kreatin Hakkında Bilinen 8 Yanlış",
    excerpt:
      "Kreatin, spor beslenmesinde en çok araştırılmış takviye. Buna rağmen hakkındaki yanlış bilgiler hâlâ dolaşımda. Sekiz yaygın iddia ve mevcut kanıtın söyledikleri.",
    answer:
      "Kreatin monohidrat, spor beslenmesinde en çok araştırılmış ve güvenliği en iyi belgelenmiş takviyedir. Sağlıklı bireylerde günde 3-5 gram kullanımının böbrek fonksiyonlarına zarar verdiğine dair kanıt yoktur, yükleme dönemi zorunlu değildir ve etkisi yalnızca güç sporlarıyla sınırlı değildir.",
    category: "Sporcu Beslenmesi",
    tags: ["kreatin", "supplement", "sporcu beslenmesi", "kas kütlesi", "ergojenik yardımcı"],
    author: "Uzm. Dyt. Ali Koşar",
    publishedAt: "2026-06-10",
    updatedAt: "2026-09-04",
    readTime: "6 dk okuma",
    image: "/images/blog/kreatin-hakkinda-sekiz-yanlis-bilgi.jpg",
    content: `
## "Kreatin böbreklere zarar verir"

**Yanlış.** Sağlıklı bireylerde günde 3-5 gram kreatin monohidrat kullanımının böbrek fonksiyonlarına zarar verdiğine dair kanıt bulunmuyor. Uzun süreli takip çalışmaları bu doz aralığında güvenlik sorunu göstermedi.

Karışıklığın kaynağı şu: kreatin kullanımı kan **kreatinin** değerini bir miktar yükseltebiliyor. Kreatinin, böbrek fonksiyonu tahmininde kullanılan bir belirteç olduğu için bu artış yanlış yorumlanabiliyor. Tahlil öncesi kreatin kullandığınızı hekiminize söylemeniz yeterli.

**Ancak:** Mevcut böbrek hastalığı olanlarda kullanım kararı hekime aittir.

## "Yükleme yapmak zorunlu"

**Yanlış.** Yükleme (5-7 gün boyunca günde 20 gram), kas kreatin depolarını daha **hızlı** doldurur ama daha **fazla** doldurmaz.

Günde 3-5 gram sabit kullanımla aynı doygunluğa yaklaşık 3-4 haftada ulaşılıyor. Yükleme, yakın bir müsabaka için hızlı sonuç gerekmedikçe zorunlu değil ve sindirim yakınmalarını artırma ihtimali daha yüksek.

## "Kreatin kilo aldırır, şişirir"

**Kısmen doğru ama yanlış anlaşılıyor.** İlk haftalarda 1-2 kilogramlık artış görülebilir; bu artış **kas içi su** artışıdır, yağ değildir.

Kreatin kas hücresine su çeker; bu deri altı bir şişkinlik değil, kas hücresinin içindedir. Görsel etkisi genellikle "daha dolgun kas" şeklindedir.

Kilo kategorili branşlarda tartı dönemi planlanırken bu artış hesaba katılmalı.

## "Sadece vücut geliştiriciler için"

**Yanlış.** Kreatinin en net faydası tekrarlı yüksek şiddetli eforlarda — yani sıçrama, sprint, yön değiştirme. Voleybol, basketbol, futbol ve dövüş sporlarında bu tam olarak oyunun kendisi.

Ayrıca bilişsel işlev, sakatlık döneminde kas kaybını sınırlama ve yaşla birlikte kas kütlesinin korunması alanlarında da araştırılıyor.

## "Kadınlar kullanmamalı"

**Yanlış.** Kreatinin etki mekanizması cinsiyete göre farklılık göstermiyor. Kadınlarda da güç, tekrarlı efor kapasitesi ve yağsız kütle üzerinde benzer faydalar bildiriliyor.

Kadınların başlangıçtaki kas kreatin depoları genellikle daha düşük olduğu için, bazı çalışmalarda yanıtın daha belirgin olduğu bile gözleniyor.

## "Ara vermek gerekir"

**Gerekmiyor.** Sürekli kullanımın vücudun kendi kreatin üretimini kalıcı olarak baskıladığına dair kanıt yok. Bırakıldığında depolar birkaç hafta içinde kullanım öncesi düzeye dönüyor, o kadar.

"Döngü" yaklaşımı, kreatinden ziyade hormonal maddeler için geliştirilmiş bir mantığın buraya yanlış taşınması.

## "Pahalı formlar daha etkili"

**Yanlış.** Kreatin hidroklorür, etil ester, buffered kreatin gibi formların **kreatin monohidrata üstün olduğu gösterilmedi.**

Monohidrat hem en çok araştırılmış hem de en ucuz form. Tercih edilmesi gereken bu. Mikronize monohidrat, çözünürlüğü biraz daha iyi olduğu için sindirim yakınması yaşayanlarda düşünülebilir.

## "Antrenmandan hemen önce alınmalı"

**Önemli değil.** Kreatin akut etkili bir madde değil; kas depolarını **doyurarak** çalışıyor. Depolar doluysa günün hangi saatinde aldığınızın pratik bir önemi yok.

Önemli olan **her gün** almak. Antrenman yapmadığınız günlerde de devam edilir.

---

## Özet

| Konu | Doğrusu |
|------|---------|
| Form | Kreatin monohidrat |
| Doz | Günde 3-5 gram, sürekli |
| Yükleme | Zorunlu değil |
| Zamanlama | Fark etmez, düzenlilik önemli |
| Ara verme | Gerekmez |
| Böbrek | Sağlıklı bireyde sorun gösterilmedi |
| Kadınlar | Kullanabilir |
| 18 yaş altı | Hekim değerlendirmesiyle |

**Not:** Lisanslı sporcularda, etiket dışı madde içerme riskine karşı bağımsız denetimli (Informed Sport benzeri) ürünler tercih edilmeli.
`,
  },

  {
    slug: "insulin-direnci-kan-degerlerini-nasil-okursunuz",
    title: "İnsülin Direnci: Kan Değerlerinizi Nasıl Okursunuz?",
    excerpt:
      "Açlık şekeri normalken insülin direnci olabilir mi? HOMA-IR, açlık insülini ve trigliserit/HDL oranı ne anlatıyor, beslenmeyle hangileri değişir?",
    answer:
      "Açlık kan şekeri normal çıksa bile insülin direnci bulunabilir; çünkü vücut şekeri normal tutmak için daha fazla insülin salgılar. Bu yüzden değerlendirmede açlık glukozu tek başına yetersizdir — açlık insülini, HOMA-IR ve trigliserit/HDL oranı birlikte okunmalıdır.",
    category: "Klinik Beslenme",
    tags: ["insülin direnci", "HOMA-IR", "kan değerleri", "metabolik sendrom", "biyokimya", "prediyabet"],
    author: "Uzm. Dyt. Ali Koşar",
    publishedAt: "2026-05-22",
    updatedAt: "2026-09-04",
    readTime: "7 dk okuma",
    image: "/images/blog/insulin-direnci-kan-degerlerini-nasil-okursunuz.jpg",
    content: `
## "Şekerim normal" neden yeterli bir cevap değil?

Çünkü kan şekeri, insülin direncinin **geç** göstergesi.

Süreç şöyle işliyor: hücreler insüline daha az yanıt vermeye başlıyor. Pankreas bunu telafi etmek için daha çok insülin salgılıyor. Bu telafi çalıştığı sürece **kan şekeri normal görünüyor.**

Yani açlık glukozunuz normalse bu, direnç olmadığı anlamına gelmiyor; sadece pankreasınızın hâlâ yetişebildiği anlamına geliyor. Şeker yükselmeye başladığında telafi mekanizması çoktan zorlanmış oluyor.

Bu yüzden erken tespit için insülinin kendisine bakmak gerekiyor.

## Hangi değerler birlikte okunur?

| Değer | Ne gösterir |
|-------|-------------|
| Açlık glukozu | Geç dönem gösterge; tek başına yetersiz |
| **Açlık insülini** | Telafi mekanizmasının ne kadar zorlandığı |
| **HOMA-IR** | Glukoz ve insülinden hesaplanan direnç indeksi |
| HbA1c | Son ~3 ayın ortalama kan şekeri |
| **Trigliserit / HDL oranı** | Metabolik sağlığın pratik göstergesi |
| ALT ve karaciğer görüntüleme | Yağlı karaciğer, dirençle sık birlikte görülür |
| Bel çevresi | Basit ama güçlü; visseral yağ göstergesi |

Kalın yazılanlar, çoğu rutin kontrolde istenmeyen ama insülin direncini en erken gösteren üç değer.

## HOMA-IR nedir, nasıl hesaplanır?

HOMA-IR, açlık glukozu ve açlık insülininden hesaplanan bir indeks:

**HOMA-IR = (Açlık glukozu [mg/dL] × Açlık insülini [µU/mL]) ÷ 405**

Yorumu laboratuvara ve referans popülasyona göre değişmekle birlikte, genel kabul gören yaklaşım şu yönde:

- **2,5 altı** — genellikle normal kabul edilir
- **2,5 – 3,5** — sınır bölge, yaşam tarzı müdahalesi için uygun dönem
- **3,5 üstü** — belirgin direnç düşündürür

⚠️ Bu değerler **tanı koydurmaz.** HOMA-IR bir tarama ve takip aracıdır; tanı ve tedavi kararı hekime aittir. Ayrıca ölçüm, en az 8-12 saatlik açlık sonrası ve düzenli bir dönemde yapılmalıdır — bir gece önce yapılan ağır bir antrenman veya alışılmadık bir öğün sonucu etkileyebilir.

## Trigliserit / HDL oranı

Hesaplaması kolay, klinik olarak bilgilendirici: trigliserit değerini HDL kolesterole bölün.

Oranın yüksek olması, insülin direnci ve aterojenik lipid profiliyle ilişkilendiriliyor. Bu iki değer zaten rutin lipid panelinde bulunduğu için ek maliyet yok — sadece bakmak gerekiyor.

## Beslenmeyle hangileri değiştirilebiliyor?

İyi haber: bu tablo, yaşam tarzı müdahalesine en iyi yanıt veren tablolardan biri. Etkili müdahaleler kanıt gücüne göre:

### 1. Kas kütlesini artırmak

En çok hafife alınan müdahale. Kas, vücuttaki en büyük glukoz deposu. Kas kütlesi arttıkça glukozun gidecek yeri artıyor ve insülin ihtiyacı düşüyor.

Haftada 2-3 gün direnç antrenmanı, bu tabloda tek başına ölçülebilir fark yaratıyor.

### 2. Visseral yağı azaltmak

Karın içi yağ dokusu, insülin direncinin doğrudan sürücülerinden. Toplam kilo kaybının **%5-10'u** bile bu değerlerde anlamlı iyileşme sağlayabiliyor.

Bel çevresindeki azalma, tartıdaki rakamdan daha bilgilendirici.

### 3. Öğün bileşimi ve sırası

- Aynı öğünde **önce sebze ve protein**, sonra karbonhidrat
- Her öğünde protein bulundurmak
- Rafine karbonhidratı tam tahılla değiştirmek
- Şekerli içecekleri kesmek — bu tek değişiklik bile ciddi fark yaratıyor

### 4. Öğün sonrası hareket

Yemekten sonra **10-15 dakikalık yürüyüş**, öğün sonrası glukoz tepesini belirgin biçimde düşürüyor. Uygulama maliyeti sıfır, etkisi ölçülebilir.

### 5. Lif

Günde 25-30 gram. Çözünür lif (yulaf, baklagil, elma, keten tohumu) glukoz eğrisini yumuşatıyor ve tokluğu uzatıyor.

### 6. Uyku

Tek bir kötü uyunmuş gece bile ertesi gün insülin duyarlılığını düşürüyor. Kronik uyku eksikliğinde en iyi beslenme planı bile beklenen sonucu vermiyor.

## Takip nasıl yapılır?

- Değerleri **3-6 ayda bir** tekrarlayın
- Tek ölçüme değil, **yöne** bakın
- Ölçümleri benzer koşullarda yapın (aynı laboratuvar, aynı açlık süresi, alışılmadık bir antrenman veya öğün sonrası değil)
- Vücut kompozisyonu ölçümüyle birlikte değerlendirin — kilo aynı kalırken yağsız kütle artıyorsa bu iyi bir işaret

## Ne zaman hekime?

- HbA1c prediyabet veya diyabet aralığındaysa
- Karaciğer enzimleri yüksekse
- Ailede erken yaşta tip 2 diyabet öyküsü varsa
- Kadınlarda adet düzensizliği ve PKOS şüphesi eşlik ediyorsa
- Değerler yaşam tarzı müdahalesine rağmen kötüleşiyorsa

Beslenme müdahalesi hekim takibinin yerine geçmez; onunla birlikte yürür.
`,
  },
];
