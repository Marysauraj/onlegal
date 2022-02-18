import DocumentDetailScreen from "../../screens/documents/documentDetail/documentDetailScreen";
import {
  getContractInformationBySlugAndCountry,
  getContractInformationByCountry,
} from "../../shared/services/contractsInfoService";

export default DocumentDetailScreen;

export async function getStaticPaths() {
  const country = "AR";

  // Not catching the error. An error thrown in getStaticPaths will stop the build and exit.
  let documents = await getContractInformationByCountry(country);

  const paths = documents.map((document) => ({
    params: { "document-type": document.slug },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const contractInfoSlug = params["document-type"];
  const country = "AR";

  let notFound = false;
  let contract = null;
  try {
    contract = await getContractInformationBySlugAndCountry(
      contractInfoSlug,
      country,
      ["faqs, documentation"]
    );
  } catch {
    notFound = true;
  }

  return {
    props: { contract },
    notFound,
    revalidate: 3600,
  };
}
