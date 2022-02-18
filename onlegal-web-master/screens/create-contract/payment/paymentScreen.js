import EmptyLayout from "../../../shared/layout/empty/emptyLayout";
import PaymentError from "./components/error/error";
import PaymentPending from "./components/pending/pending";
import PaymentSuccess from "./components/success/success";
import styles from "./paymentScreen.module.scss";

const PaymentScreen = ({ email, status }) => {
  let Component = null;
  switch (status) {
    case "error":
      Component = PaymentError;
      break;
    case "pending":
      Component = PaymentPending;
      break;
    default:
      Component = PaymentSuccess;
      break;
  }

  return (
    <EmptyLayout
      Content={
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <Component email={email} />
          </div>
        </div>
      }
    />
  );
};

export default PaymentScreen;
