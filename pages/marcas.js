import { getBrandRegistryInfo } from "../shared/services/brandRegistryService";
import brandRegistryScreen from "../screens/brand-registry/brandRegistryScreen";
export default brandRegistryScreen;

export async function getStaticProps() {
  const country = "AR";

  const service = await getBrandRegistryInfo(country);

  return {
    props: { service },
    revalidate: 3600,
  };
}
