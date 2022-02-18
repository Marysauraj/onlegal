import { Typography } from "@material-ui/core";
import Link from "next/link";
import styles from "./paymentWrapper.module.scss";

const PaymentWrapper = ({
  illustration,
  title,
  subtitle,
  text,
  link,
  linkText,
}) => {
  return (
    <div className={styles.wrapper}>
      {illustration}
      <Typography className={styles.title} variant="h4">
        {title}
      </Typography>
      <Typography className={styles.subtitle} variant="h5">
        {subtitle}
      </Typography>
      <Typography className={styles.text} variant="body1">
        {text}
      </Typography>
      <Link href={link}>
        <a className={styles.button}>{linkText}</a>
      </Link>
    </div>
  );
};

export default PaymentWrapper;
