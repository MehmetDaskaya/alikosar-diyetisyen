import LandingPage from "../../components/LandingPage";
import { landingMetadata } from "../../lib/metadata";
import { peptitler as data } from "../../lib/pages/biohacking";

export const metadata = landingMetadata(data);

export default function Page() {
  return <LandingPage data={data} />;
}
