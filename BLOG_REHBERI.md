# 📝 Blog Yazısı Ekleme Rehberi

## Yeni Blog Yazısı Nasıl Eklenir?

Blog yazılarını eklemek için sadece **bir dosyayı düzenlemeniz** yeterli:

```
website/lib/blog-data.ts
```

---

## Adım Adım Yeni Yazı Ekleme

### 1. `lib/blog-data.ts` dosyasını açın

### 2. `blogPosts` dizisine yeni bir obje ekleyin:

```typescript
{
  slug: "yazi-url-adresi",        // URL'de görünecek (örn: /blog/yazi-url-adresi)
  title: "Yazı Başlığı",          // Ana başlık
  excerpt: "Kısa açıklama...",    // Liste sayfasında görünür (1-2 cümle)
  category: "Beslenme İpuçları",  // Kategori
  tags: ["tag1", "tag2"],         // SEO etiketleri
  author: "Dyt. Ali Koşar",       // Yazar
  date: "15 Ocak 2026",           // Tarih (Türkçe format)
  readTime: "5 dk okuma",         // Okuma süresi
  emoji: "🥑",                    // Liste kartında görünecek emoji
  featured: true,                 // Öne çıkan yazı mı? (opsiyonel)
  content: `
    ## Başlık

    Paragraf metni...

    ### Alt Başlık

    - Liste öğesi 1
    - Liste öğesi 2

    > Alıntı metni

    **Kalın metin** ve *italik metin*

    [Link metni](/sayfa-adresi)
  `
}
```

### 3. Kaydedin ve build edin

```bash
npm run build
```

---

## İçerik Formatı (Markdown-benzeri)

| Format | Yazım | Sonuç |
|--------|-------|-------|
| Başlık 2 | `## Başlık` | Büyük başlık |
| Başlık 3 | `### Alt Başlık` | Orta başlık |
| Kalın | `**metin**` | **metin** |
| İtalik | `*metin*` | *metin* |
| Link | `[metin](url)` | Tıklanabilir link |
| Liste | `- öğe` | • öğe |
| Alıntı | `> metin` | Vurgulu kutu |

---

## Mevcut Kategoriler

- Beslenme İpuçları
- Sporcu Beslenmesi
- Klinik Beslenme
- Özel Beslenme
- Kilo Yönetimi

Yeni kategori eklemek için sadece `category` alanına yeni isim yazın.

---

## Örnek Yapı

```typescript
// lib/blog-data.ts içinde

export const blogPosts: BlogPost[] = [
  // ... mevcut yazılar ...

  // YENİ YAZI EKLEYİN ↓
  {
    slug: "yeni-yazim",
    title: "Yeni Yazımın Başlığı",
    excerpt: "Bu yazıda şunları anlatacağım...",
    category: "Beslenme İpuçları",
    tags: ["sağlık", "diyet", "ipucu"],
    author: "Dyt. Ali Koşar",
    date: "20 Ocak 2026",
    readTime: "4 dk okuma",
    emoji: "🍎",
    content: `
## Giriş

Hoş geldiniz! Bu yazıda...

## Ana Konu

Detaylı açıklama...

### Alt Başlık

- Madde 1
- Madde 2
- Madde 3

## Sonuç

Özet ve kapanış...
    `
  }
];
```

---

## Otomatik Özellikler

Yazı eklediğinizde otomatik olarak:

- ✅ SEO meta tagları oluşturulur
- ✅ Sitemap'e eklenir
- ✅ Blog listesinde görünür
- ✅ İlgili yazılar hesaplanır
- ✅ Paylaşım linkleri oluşturulur
