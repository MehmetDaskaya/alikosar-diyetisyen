import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Diyetisyen Ali Koşar ile iletişime geçin. Antalya Muratpaşa'da profesyonel beslenme danışmanlığı için randevu alın.",
  keywords: ["iletişim", "randevu", "Antalya diyetisyen", "Muratpaşa", "beslenme danışmanlığı"],
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
