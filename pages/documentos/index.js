import DocumentIndexScreen from "../../screens/documents/documentIndex/documentIndexScreen";
import { getCategories } from "../../shared/services/categoryService";

export default DocumentIndexScreen;

export async function getStaticProps() {
  const country = "AR";
  let categories;

  try {
    categories = await getCategories(country);
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      categories,
    },
    revalidate: 3600,
  };
}
