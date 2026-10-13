import LandingPage from "../../components/LandingPage";
import { landingMetadata } from "../../lib/metadata";
import { mounjaroProgram as data } from "../../lib/pages/glp1";

export const metadata = landingMetadata(data);

export default function Page() {
  return <LandingPage data={data} />;
}
