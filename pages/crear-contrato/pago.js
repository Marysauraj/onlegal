import paymentScreen from "../../screens/create-contract/payment/paymentScreen";
import Cookies from "cookies";
import {
  getContract,
  resetContractCookies,
} from "../../shared/services/contractService";

export async function getServerSideProps({ req, res, query }) {
  const cookies = new Cookies(req, res);
  const contractId = cookies.get("onlegal_contractid");
  const status = query.mpstatus || "";

  if (status !== "error") {
    resetContractCookies(cookies);
  }

  const props = { props: { email: null, status } };

  if (contractId) {
    try {
      const contract = await getContract(contractId);
      props.props.email = contract.recipient_email || "";
    } catch {}
  }

  return props;
}

export default paymentScreen;
