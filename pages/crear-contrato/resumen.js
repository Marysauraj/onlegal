import summaryScreen from "../../screens/create-contract/summary/summaryScreen";
import Cookies from "cookies";
import {
  getContractSummary,
  getContractStepsFromSummary,
} from "../../shared/services/contractService";
import { searchMerchantOrders } from "../../shared/services/mercadoPagoService";
import { createPreference } from "../../shared/services/mercadoPagoService";

export async function getServerSideProps({ req, res, query }) {
  const cookies = new Cookies(req, res);

  const redirectToHome = {
    destination: "/",
    permanent: false,
  };

  const contractId = cookies.get("onlegal_contractid") || query.contract;
  if (!contractId) {
    return {
      redirect: redirectToHome,
    };
  }

  // check if it's already payed or pending
  try {
    const { elements: orders } = await searchMerchantOrders(contractId);
    let status;

    if (orders?.length > 0) {
      if (orders.some((order) => order.order_status === "paid")) {
        status = "success";
      } else if (
        orders.some((order) => order.order_status === "payment_in_process")
      ) {
        status = "pending";
      }

      if (orders.length > 0 && status) {
        return {
          redirect: {
            destination: `/crear-contrato/pago?mpstatus=${status}`,
            permanent: false,
          },
        };
      }
    }
  } catch (e) {
    console.error(e);
  }

  let contractSummary = null;
  try {
    contractSummary = await getContractSummary(contractId);
    res.setHeader("Set-Cookie", [
      `onlegal_contractid=${contractId}; Path=/; Max-Age=86400`,
      `onlegal_contracttype=${contractSummary.type}; Path=/; Max-Age=86400`,
    ]);
  } catch (e) {
    // Error handled in the screen
    console.error(e);
  }

  const steps = contractSummary
    ? getContractStepsFromSummary(contractSummary)
    : null;

  let mercadopagoPreference = { id: null };
  if (contractSummary) {
    try {
      mercadopagoPreference = await createPreference(
        contractSummary.title,
        contractSummary.price.currency_code,
        contractSummary.price.amount,
        contractSummary.recipient_email,
        contractId
      );
    } catch (e) {
      // Error handled in the screen
      console.error(e);
    }
  }

  return {
    props: {
      steps,
      contractSummary,
      mercadopagoPreferenceId: mercadopagoPreference.id,
    },
  };
}

export default summaryScreen;
