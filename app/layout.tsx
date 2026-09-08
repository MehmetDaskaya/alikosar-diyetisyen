import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppWidget from "../components/WhatsAppWidget";
import { Analytics } from "@vercel/analytics/next";
import { site, absoluteUrl, credentials } from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Diyetisyen Ali Koşar | Antalya Beslenme ve Diyet Danışmanlığı",
    template: "%s | Diyetisyen Ali Koşar",
  },
  description:
    "Antalya'da profesyonel beslenme ve diyet danışmanlığı. Kilo yönetimi, sporcu beslenmesi, klinik beslenme ve kişiye özel diyet programları. Sağlıklı yaşam için lezzetten ödün vermeden beslenin.",
  keywords: [
    "Antalya diyetisyen",
    "Muratpaşa beslenme danışmanlığı",
    "diyet uzmanı Antalya",
    "kilo verme programı",
    "sporcu beslenmesi",
    "online diyet",
    "Ali Koşar",
    "sağlıklı beslenme",
    "obezite tedavisi",
    "diyabet diyeti",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // NOT: canonical bilerek burada tanımlanmıyor. Kök layout'ta tanımlanırsa
  // bütün alt sayfalar ana sayfayı canonical gösterir ve dizinden düşer.
  // Her sayfa kendi `alternates.canonical` değerini verir.
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "Diyetisyen Ali Koşar | Antalya Beslenme ve Diyet Danışmanlığı",
    description:
      "Antalya'da profesyonel beslenme ve diyet danışmanlığı. Kişiye özel diyet programları ile sağlıklı yaşam.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diyetisyen Ali Koşar | Antalya",
    description: "Antalya'da profesyonel beslenme ve diyet danışmanlığı",
  },
  // Google Search Console doğrulama kodu
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      "_MAaFENZpO-hgHMulUNadi98X6gIMeHfqdQRjZ6q5C0",
  },
};

const businessId = `${site.url}/#business`;
const personId = `${site.url}/#alikosar`;

// Yerel işletme (LocalBusiness/Dietitian) yapılandırılmış verisi
const businessSchema = {
  "@type": "Dietitian",
  "@id": businessId,
  name: site.name,
  alternateName: site.legalName,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  image: absoluteUrl("/images/ali-kosar-portre.jpg"),
  logo: absoluteUrl("/images/ali-kosar-portre.jpg"),
  founder: { "@id": personId },
  employee: { "@id": personId },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.district,
    addressRegion: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.address.latitude,
    longitude: site.address.longitude,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${site.address.latitude},${site.address.longitude}`,
  areaServed: [
    { "@type": "City", name: "Antalya" },
    { "@type": "AdministrativeArea", name: "Muratpaşa" },
    { "@type": "AdministrativeArea", name: "Konyaaltı" },
    { "@type": "AdministrativeArea", name: "Kepez" },
  ],
  availableLanguage: { "@type": "Language", name: "Turkish" },
  priceRange: "₺₺",
  currenciesAccepted: "TRY",
  openingHoursSpecification: site.openingHours.map((slot) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [...slot.days],
    opens: slot.opens,
    closes: slot.closes,
  })),
  sameAs: [site.social.instagram],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Beslenme ve Diyet Hizmetleri",
    itemListElement: [
      "Kilo Yönetimi",
      "Sporcu Beslenmesi",
      "Klinik Beslenme",
      "Özel Beslenme Durumları",
      "Hamilelik ve Emzirme Beslenmesi",
      "Çocuk ve Ergen Beslenmesi",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, provider: { "@id": businessId } },
    })),
  },
};

// Uzmanın kendisi: arama motorlarının ve yapay zekâ araçlarının
// "Ali Koşar kimdir" sorusunu doğru varlığa bağlaması için.
const personSchema = {
  "@type": "Person",
  "@id": personId,
  name: "Ali Koşar",
  givenName: "Ali",
  familyName: "Koşar",
  honorificPrefix: "Dyt.",
  jobTitle: "Diyetisyen",
  description:
    "İzmir Katip Çelebi Üniversitesi Beslenme ve Diyetetik mezunu, Antalya'da bireysel ve klinik beslenme danışmanlığı veren diyetisyen.",
  image: absoluteUrl("/images/ali-kosar-portre.jpg"),
  url: absoluteUrl("/hakkimda"),
  worksFor: { "@id": businessId },
  affiliation: {
    "@type": "SportsOrganization",
    name: credentials.affiliation.organization,
    url: credentials.affiliation.url,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: credentials.education.school,
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: `${credentials.education.program} Lisans Diploması`,
      educationalLevel: "Lisans",
      recognizedBy: {
        "@type": "CollegeOrUniversity",
        name: credentials.education.school,
      },
      dateCreated: String(credentials.education.graduationYear),
    },
    ...credentials.certificates.map((item) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: item.name,
      recognizedBy: { "@type": "Organization", name: item.issuer },
      dateCreated: String(item.year),
    })),
  ],
  knowsAbout: [
    "Beslenme ve diyetetik",
    "Kilo yönetimi",
    "Sporcu beslenmesi",
    "Klinik beslenme",
    "Diyabet beslenmesi",
    "Çölyak ve glutensiz beslenme",
  ],
  sameAs: [site.social.instagram],
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  inLanguage: "tr-TR",
  publisher: { "@id": businessId },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [businessSchema, personSchema, websiteSchema],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
        <Analytics />
      </body>
    </html>
  );
}
