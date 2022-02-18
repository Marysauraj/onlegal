import MainLayout from "../../shared/layout/main/mainLayout";
import ErrorMessage404 from "./components/errorMessage404";

const error404Screen = () => {
  return <MainLayout Content={<ErrorMessage404 />} />;
};

error404Screen.propTypes = {};

export default error404Screen;
