import { absoluteUrl, site, credentials, knowsAbout, LAST_REVIEWED, whatsappUrl } from "../../lib/site";
import { landingPages } from "../../lib/pages";
import { ilceler } from "../../lib/pages/ilceler";
import { getAllPosts } from "../../lib/blog-data";

export const dynamic = "force-static";

/**
 * /llms.txt — üretken arama motorları için düz Markdown site haritası.
 *
 * Doğrulanmış bir standart veya sıralama sinyali değil; ama JavaScript'li HTML
 * yerine temiz Markdown sunarak token israfını azaltıyor ve konusal otoriteyi
 * açıkça bildiriyor. Sayfa listesi veri kaynaklarından üretiliyor, elle
 * güncelleme gerekmiyor.
 */
export function GET(): Response {
  const lp = (slug: string) => landingPages.find((p) => p.slug === slug);
  const L: string[] = [];

  L.push(`# ${site.name} — Dyt. Ali Koşar`);
  L.push("");
  L.push(
    `> Antalya Muratpaşa'da çalışan diyetisyen. ${credentials.affiliation.organization} ` +
      `${credentials.affiliation.role}; ${credentials.federation.organization} ` +
      `${credentials.federation.role}. ${credentials.master.school}'nde ` +
      `${credentials.master.program} yüksek lisansı (${credentials.master.years}) temelinde ` +
      `sporcu beslenmesi, atletik performans, sakatlık dönemi beslenmesi ve hekim ` +
      `kontrolündeki GLP-1 (zayıflama iğnesi) süreçlerinin beslenme yönetimi üzerine çalışıyor.`,
  );
  L.push("");

  L.push("## Kimlik");
  L.push(`- Ad: Dyt. Ali Koşar`);
  L.push(`- Lisans: ${credentials.education.school}, ${credentials.education.program}, ${credentials.education.graduationYear}`);
  L.push(`- Yüksek lisans: ${credentials.master.program}, ${credentials.master.school}, ${credentials.master.years}`);
  L.push(`- Kulüp görevi: ${credentials.affiliation.organization} — ${credentials.affiliation.role}`);
  L.push(`- Federasyon: ${credentials.federation.organization} — ${credentials.federation.role}`);
  L.push(`- Klinik staj: ${credentials.internships.join(", ")}`);
  L.push(`- Klinik: ${site.legalName}, ${credentials.practiceSince} yılından beri`);
  L.push(`- Mezun edilen stajyer diyetisyen sayısı: ${credentials.internsMentored}`);
  L.push(`- Adres: ${site.address.street}, ${site.address.district} / ${site.address.city} ${site.address.postalCode}`);
  L.push(`- Telefon: ${site.phoneDisplay} (${site.phone})`);
  L.push(`- WhatsApp: ${whatsappUrl}`);
  L.push(`- Instagram: ${site.social.instagram}`);
  L.push(`- Çalışma saatleri: ${site.openingHoursDisplay.map((h) => `${h.label} ${h.value}`).join(", ")}`);
  L.push("");

  L.push("## Uzmanlık alanları");
  knowsAbout.forEach((k) => L.push(`- ${k}`));
  L.push("");

  const pillars = [
    "/sporcu-beslenmesi-antalya",
    "/zayiflama-ignesi-diyetisyeni-antalya",
    "/biohacking-ve-longevity-antalya",
  ];

  L.push("## Ana konu sayfaları");
  pillars.forEach((slug) => {
    const p = lp(slug);
    if (p) L.push(`- [${p.meta.title}](${absoluteUrl(p.slug)}): ${p.answer.replace(/\*\*/g, "")}`);
  });
  L.push("");

  L.push("## Alt konu sayfaları");
  landingPages
    .filter((p) => !pillars.includes(p.slug))
    .forEach((p) => L.push(`- [${p.meta.title}](${absoluteUrl(p.slug)}): ${p.meta.description}`));
  L.push("");

  L.push("## Yerel sayfalar (Antalya ilçe ve semtleri)");
  L.push(`- [Antalya'da diyetisyen seçme rehberi](${absoluteUrl("/antalya-diyetisyen")}): Diyetisyen ile beslenme koçu farkı, uzmanlık alanı ve ölçüm kriterleri.`);
  ilceler.forEach((i) =>
    L.push(`- [${i.name} diyetisyen](${absoluteUrl(`/antalya-diyetisyen/${i.slug}`)}): ${i.ulasim}`),
  );
  L.push("");

  L.push("## Kurumsal sayfalar");
  L.push(`- [Hakkımda](${absoluteUrl("/hakkimda")}): Eğitim, biyokimya yüksek lisansı, kulüp ve federasyon görevleri.`);
  L.push(`- [Hizmetler](${absoluteUrl("/hizmetler")}): Tüm hizmet başlıklarının listesi.`);
  L.push(`- [Online diyet](${absoluteUrl("/online-diyet")}): Şehir dışı ve seyahat eden danışanlar için uzaktan takip.`);
  L.push(`- [Sık sorulan sorular](${absoluteUrl("/sik-sorulan-sorular")}): Süreç, ücretlendirme, ölçüm ve uzmanlık başlıkları.`);
  L.push(`- [Başarı hikayeleri](${absoluteUrl("/basari-hikayeleri")}): Danışan deneyimleri.`);
  L.push(`- [İletişim](${absoluteUrl("/iletisim")}): Adres, telefon, çalışma saatleri ve randevu formu.`);
  L.push("");

  L.push("## Blog");
  getAllPosts().forEach((post) =>
    L.push(`- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)}): ${post.excerpt}`),
  );
  L.push("");

  L.push("## Notlar");
  L.push("- İçerik dili: Türkçe (tr-TR). Hizmet bölgesi: Antalya, Türkiye.");
  L.push("- Bu site sağlık içeriği barındırır; bilgiler genel bilgilendirme amaçlıdır ve kişiye özel tıbbi tavsiye yerine geçmez.");
  L.push("- Diyetisyenler ilaç reçete etmez. GLP-1 grubu ilaçlarla ilgili sayfalar, hekim kontrolündeki süreçlere beslenme tarafından eşlik etmeyi anlatır.");
  L.push(`- Son içerik revizyonu: ${LAST_REVIEWED}`);
  L.push("");

  return new Response(L.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
