import contactScreen from "../screens/contact/contactScreen";
export default contactScreen;

export async function getStaticProps() {
  const country = "AR";

  return { props: { country } };
}
