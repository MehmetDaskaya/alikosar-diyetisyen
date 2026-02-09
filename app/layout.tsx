import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://diyetisyenalikosar.com"),
  title: {
    default: "Diyetisyen Ali Koşar | Antalya Beslenme ve Diyet Danışmanlığı",
    template: "%s | Diyetisyen Ali Koşar"
  },
  description: "Antalya'da profesyonel beslenme ve diyet danışmanlığı. Kilo yönetimi, sporcu beslenmesi, klinik beslenme ve kişiye özel diyet programları. Sağlıklı yaşam için lezzetten ödün vermeden beslenin.",
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
    "diyabet diyeti"
  ],
  authors: [{ name: "Diyetisyen Ali Koşar" }],
  creator: "Diyetisyen Ali Koşar",
  publisher: "Diyetisyen Ali Koşar",
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
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://diyetisyenalikosar.com",
    siteName: "Diyetisyen Ali Koşar",
    title: "Diyetisyen Ali Koşar | Antalya Beslenme ve Diyet Danışmanlığı",
    description: "Antalya'da profesyonel beslenme ve diyet danışmanlığı. Kişiye özel diyet programları ile sağlıklı yaşam.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Diyetisyen Ali Koşar - Antalya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diyetisyen Ali Koşar | Antalya",
    description: "Antalya'da profesyonel beslenme ve diyet danışmanlığı",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://diyetisyenalikosar.com",
  },
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dietitian",
  "@id": "https://diyetisyenalikosar.com",
  name: "Diyetisyen Ali Koşar",
  alternateName: "Ali Koşar Beslenme ve Diyet Danışmanlık Merkezi",
  description: "Antalya'da profesyonel beslenme ve diyet danışmanlığı hizmeti sunan uzman diyetisyen.",
  url: "https://diyetisyenalikosar.com",
  telephone: "+90-XXX-XXX-XXXX",
  email: "info@alikosar.com",
  image: "https://diyetisyenalikosar.com/ali-kosar.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Şirinyalı Mahallesi 1507 sokak, Şirinyalı, 2 Apartmanı no:46 Kat:1 Daire:3",
    addressLocality: "Muratpaşa",
    addressRegion: "Antalya",
    postalCode: "07230",
    addressCountry: "TR"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.8841,
    longitude: 30.7056
  },
  areaServed: {
    "@type": "City",
    name: "Antalya"
  },
  priceRange: "₺₺",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    }
  ],
  sameAs: [
    "https://www.instagram.com/dytalikosar/",
    "https://www.facebook.com/diyetisyenalikosar"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Beslenme ve Diyet Hizmetleri",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kilo Yönetimi"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sporcu Beslenmesi"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Klinik Beslenme"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
