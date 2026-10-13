/**
 * JSON-LD enjeksiyonu.
 *
 * `<head>` yerine gövde içinde render edilir; Google ve LLM tarayıcıları
 * her iki konumu da okur, App Router'da bu daha güvenilir çalışır.
 */
export default function JsonLd({ data }: { data: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
}
