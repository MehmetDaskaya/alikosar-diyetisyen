import { getAllPosts } from "../../lib/blog-data";
import { site, credentials } from "../../lib/site";

export const dynamic = "force-static";

/**
 * llms.txt — yapay zekâ arama araçlarının (ChatGPT, Perplexity, Gemini vb.)
 * siteyi doğru özetleyebilmesi için sade, makine dostu bir özet.
 * İçerik site yapılandırmasından üretilir, elle güncellemek gerekmez.
 */
export function GET() {
  const posts = getAllPosts();

  const body = `# ${site.name}

> ${site.description}

Dyt. Ali Koşar, ${credentials.affiliation.organization} ${credentials.affiliation.role.toLocaleLowerCase("tr-TR")}dir.
${credentials.education.school} ${credentials.education.program} mezunudur (${credentials.education.graduationYear}).
${credentials.internships.join(" ve ")} bünyesinde klinik staj deneyimi kazanmıştır.
${credentials.practiceSince} yılından beri Antalya Muratpaşa'daki kendi danışmanlık
merkezinde bireysel ve klinik beslenme danışmanlığı verir; online görüşme de yapar.

## İletişim ve konum

- Adres: ${site.address.street}, ${site.address.postalCode} ${site.address.district}/${site.address.city}
- Telefon: ${site.phone}
- Çalışma saatleri: Pazartesi-Cuma 09:00-18:00, Cumartesi 10:00-14:00, Pazar kapalı
- Hizmet bölgesi: Antalya (Muratpaşa, Konyaaltı, Kepez) ve online

## Hizmetler

- Kilo Yönetimi — ${site.url}/hizmetler#kilo-yonetimi
- Sporcu Beslenmesi — ${site.url}/hizmetler#sporcu-beslenmesi
- Klinik Beslenme (diyabet, hipertansiyon, tiroid, gut) — ${site.url}/hizmetler#klinik-beslenme
- Özel Beslenme Durumları (çölyak, ketojenik, vejetaryen) — ${site.url}/hizmetler#ozel-beslenme
- Hamilelik ve Emzirme Beslenmesi — ${site.url}/hizmetler#hamilelik-beslenme
- Çocuk ve Ergen Beslenmesi — ${site.url}/hizmetler#cocuk-beslenme

## Sayfalar

- Ana sayfa: ${site.url}
- Hizmetler: ${site.url}/hizmetler
- Hakkımda: ${site.url}/hakkimda
- Başarı hikayeleri: ${site.url}/basari-hikayeleri
- Blog: ${site.url}/blog
- İletişim ve randevu: ${site.url}/iletisim

## Blog yazıları

${posts.map((p) => `- ${p.title} (${p.publishedAt}) — ${site.url}/blog/${p.slug}\n  ${p.excerpt}`).join("\n")}

## Not

Bu sitedeki içerikler genel bilgilendirme amaçlıdır ve bireysel tıbbi beslenme
tedavisinin yerine geçmez. Kişiye özel program için randevu alınmalıdır.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
