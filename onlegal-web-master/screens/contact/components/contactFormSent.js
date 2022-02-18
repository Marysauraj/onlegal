import ContactSentIcon from "./contactSentIcon";
import styles from "./contactFormSent.module.scss";
import { Typography } from "@material-ui/core";

const ContactFormSent = () => {
  return (
    <div className={styles.container}>
      <ContactSentIcon />
      <Typography variant="h4" className={styles.title} color="primary">
        ¡Tu mensaje fue enviado!
      </Typography>
      <Typography variant="h6" className={styles.subtitle}>
        Te responderemos a la brevedad.
      </Typography>
    </div>
  );
};

export default ContactFormSent;
