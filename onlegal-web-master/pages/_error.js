import ErrorMessage500 from "../screens/error/components/errorMessage500";
import MainLayout from "../shared/layout/main/mainLayout";

function Error({ statusCode }) {
  return <MainLayout Content={<ErrorMessage500 />} />;
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
