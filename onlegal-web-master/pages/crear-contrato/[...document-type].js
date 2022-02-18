import documentWizardScreen from "../../screens/create-contract/wizard/documentWizardScreen";
import {
  getContractInformationBySlugAndCountry,
  getContractStepIds,
  getContractStepsTitles,
} from "../../shared/services/contractsInfoService";
import {
  getSection,
  resetContractCookies,
} from "../../shared/services/contractService";
import { getCountry } from "../../shared/utils/countries";
import Cookies from "cookies";
export default documentWizardScreen;

export async function getServerSideProps({ req, res, query }) {
  let contract,
    steps,
    totalQuestionnaires,
    documentStep,
    activeStepIndex = 0,
    initialOverallStep = 0,
    initialData = null,
    error = false,
    initialDataError = false;
  const pathParts = query["document-type"];
  const isEditing = query["edit"] === "true";
  const country = getCountry(req.headers.host);
  const contractInfoSlug = pathParts[0];

  if (pathParts.length > 1 && isEditing) {
    // Direct access to a step is not allowed if the user is not editing
    documentStep = pathParts[1];
  }

  try {
    contract = await getContractInformationBySlugAndCountry(
      contractInfoSlug,
      country,
      ["questionnaire"]
    );
    steps = getContractStepsTitles(contract);

    // going to specific step
    if (documentStep) {
      activeStepIndex = getContractStepIds(contract).indexOf(documentStep);

      initialOverallStep = contract.sections.reduce(
        (accum, item, index) =>
          (accum += index < activeStepIndex ? item.questionnaire.length : 0),
        0
      );
    }

    totalQuestionnaires = contract.sections.reduce(
      (accum, item) => (accum += item.questionnaire.length),
      0
    );
  } catch (error) {
    console.error(error);
    res.statusCode = error.response ? error.response.status : 500;
    return {
      props: {
        error: true,
      },
    };
  }

  const cookies = new Cookies(req, res);
  let contractId = cookies.get("onlegal_contractid");
  let contractType = cookies.get("onlegal_contracttype");

  if (contractType !== contract.type) {
    resetContractCookies(cookies);
    contractId = null;
    contractType = null;
  }

  if (contractId && documentStep) {
    try {
      const sectionData = await getSection(contractId, documentStep);
      initialData = { [documentStep]: sectionData.attributes };
    } catch (error) {
      console.error(error);
      initialDataError = true;
    }
  }

  return {
    props: {
      contract,
      steps,
      totalQuestionnaires,
      initialOverallStep,
      activeStepIndex,
      isEditing,
      initialDataError,
      initialData,
      error,
    },
  };
}
