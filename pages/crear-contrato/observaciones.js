import Cookies from "cookies";
import documentContactScreen from "../../screens/create-contract/observations/documentObservationsScreen";
import {
  getContractSummary,
  getContractStepsFromSummary,
} from "../../shared/services/contractService";

export default documentContactScreen;

export async function getServerSideProps({ req, res, query }) {
  const cookies = new Cookies(req, res);
  const redirectToHome = {
    destination: "/",
    permanent: false,
  };

  const contractId = cookies.get("onlegal_contractid");
  if (!contractId) {
    return {
      redirect: redirectToHome,
    };
  }

  let contractSummary;
  try {
    contractSummary = await getContractSummary(contractId);
  } catch {
    return {
      redirect: redirectToHome,
    };
  }

  const steps = getContractStepsFromSummary(contractSummary);

  return {
    props: {
      steps,
      contractSummary,
    },
  };
}
