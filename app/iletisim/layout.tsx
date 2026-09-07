import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Diyetisyen Ali Koşar ile iletişime geçin. Antalya Muratpaşa'da profesyonel beslenme danışmanlığı için randevu alın.",
  keywords: ["iletişim", "randevu", "Antalya diyetisyen", "Muratpaşa", "beslenme danışmanlığı"],
  alternates: { canonical: "/iletisim" },
  openGraph: {
    type: "website",
    url: "/iletisim",
    title: "İletişim | Diyetisyen Ali Koşar",
    description: "Antalya Muratpaşa'daki danışmanlık merkezi için randevu alın. Telefon, WhatsApp ve adres bilgileri.",
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
