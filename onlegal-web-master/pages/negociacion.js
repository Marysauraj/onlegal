import rateRenegotiationScreen from "../screens/rate-renegotiation/rateRenegotiationScreen";
import { getRateRenegotiation } from "../shared/services/rateRenegotiationService";
export default rateRenegotiationScreen;

export async function getStaticProps() {
  const country = "AR";

  const service = getRateRenegotiation(country);

  return { props: { service } };
}
