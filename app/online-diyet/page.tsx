import LandingPage from "../../components/LandingPage";
import { landingMetadata } from "../../lib/metadata";
import { onlineDiyet as data } from "../../lib/pages/online-diyet";

export const metadata = landingMetadata(data);

export default function Page() {
  return <LandingPage data={data} />;
}
