import { notFound } from "next/navigation";
import LandingPage from "../../../components/LandingPage";
import { landingMetadata } from "../../../lib/metadata";
import { ilceler, ilceBySlug, ilceLanding } from "../../../lib/pages/ilceler";

interface Props {
  params: Promise<{ ilce: string }>;
}

export function generateStaticParams() {
  return ilceler.map((i) => ({ ilce: i.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { ilce } = await params;
  const found = ilceBySlug(ilce);
  if (!found) return { title: "Sayfa bulunamadı" };
  return landingMetadata(ilceLanding(found));
}

export default async function Page({ params }: Props) {
  const { ilce } = await params;
  const found = ilceBySlug(ilce);
  if (!found) notFound();
  return <LandingPage data={ilceLanding(found)} />;
}
