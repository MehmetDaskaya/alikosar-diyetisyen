# Görseller

Bu klasördeki dosya adları koda sabitlenmiştir. Görseli aşağıdaki adla buraya
kopyalaman yeterli — kod değişikliği gerekmez. Dosya yoksa sitede o alanda nötr
bir yer tutucu ve beklenen dosya yolu görünür.

## Genel

| Dosya | Nerede | Ne olmalı | Önerilen ölçü |
|---|---|---|---|
| `ali-kosar-portre.jpg` | Ana sayfa hero | Ali Koşar'ın dikey profesyonel portresi, sade/açık arka plan | 1000×1250 (4:5) |
| `ali-kosar-hakkimda.jpg` | Hakkımda hero | Danışmanlık merkezinde çekilmiş dikey kare/portre | 1000×1250 (4:5) |
| `ali-kosar-avatar.jpg` | Blog yazısı yazar rozeti | Yüz odaklı yakın plan (daire içinde kırpılır) | 200×200 (1:1) |
| `danisma-seansi.jpg` | Ana sayfa "Neden Ben?" | Danışan görüşmesi / ölçüm anı; alt kısmı alıntı ile kapanır | 1200×1200 (1:1) |

## Blog kapakları — `public/images/blog/`

Dosya adı yazının slug'ı ile aynı olmalı. Oran 16:10, önerilen 1200×750.

| Dosya | Konu |
|---|---|
| `antalya-saglikli-beslenme-rehberi.jpg` |    |
| `sporcu-beslenmesinde-supplement-kullanimi.jpg` | Antrenman sonrası shaker, protein tozu, spor salonu |
| `glutensiz-yasam-colyak-tarifleri.jpg` | Glutensiz ekmek / un çeşitleri |
| `diyabet-beslenmesi-temel-ilkeler.jpg` | Kan şekeri ölçümü + tam tahıllı tabak |
| `kilo-verme-platosu-nasil-asilinir.jpg` | Tartı / ölçü mezürü, sade natürmort |
| `yaz-icin-detoks-diyeti-mitleri.jpg` | Yaz meyveleri, detoks suyu |

Yeni yazı eklerken `lib/blog-data.ts` içindeki `image` alanına
`/images/blog/<slug>.jpg` yaz ve dosyayı buraya koy.

## Notlar

- Fotoğraflar gerçek olmalı; stok fotoğraf kullanılacaksa Antalya/Akdeniz
  tonlarına yakın, sıcak ve doğal ışıklı kareler seçilmeli.
- Portreler için arka plan sade tutulmalı; sitedeki krem/adaçayı yeşili paletiyle
  çakışan çok doygun renklerden kaçının.
- Dosyaları koymadan önce ~200 KB altına sıkıştırın (WebP de kullanılabilir;
  o durumda kodda uzantıyı `.webp` olarak güncelleyin).
