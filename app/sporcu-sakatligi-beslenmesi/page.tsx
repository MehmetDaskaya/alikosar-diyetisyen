import LandingPage from "../../components/LandingPage";
import { landingMetadata } from "../../lib/metadata";
import { sporcuSakatligi as data } from "../../lib/pages/sporcu";

export const metadata = landingMetadata(data);

export default function Page() {
  return <LandingPage data={data} />;
}
