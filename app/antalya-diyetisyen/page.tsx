import LandingPage from "../../components/LandingPage";
import { landingMetadata } from "../../lib/metadata";
import { antalyaHub as data } from "../../lib/pages/antalya-hub";

export const metadata = landingMetadata(data);

export default function Page() {
  return <LandingPage data={data} />;
}
