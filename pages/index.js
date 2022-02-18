import { getPopularContractsByCountry } from "../shared/services/contractsInfoService";
import homeScreen from "../screens/home/homeScreen";
export default homeScreen;

export async function getStaticProps() {
  const country = "AR";

  let documents;
  try {
    documents = await getPopularContractsByCountry(country);
  } catch {
    documents = [];
  }

  return { props: { documents }, revalidate: 3600 };
}
