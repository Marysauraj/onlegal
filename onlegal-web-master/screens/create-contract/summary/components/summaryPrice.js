import { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import Image from "next/image";
import styles from "./summaryPrice.module.scss";
import theme from "../../../../shared/theme";

const SummaryPrice = ({
  title,
  price,
  mercadopagoPreferenceId,
  mercadopagoFormId,
}) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.setAttribute("data-preference-id", mercadopagoPreferenceId);
    script.setAttribute("data-elements-color", theme.palette.primary.main);
    script.setAttribute("data-button-label", "Continuar con el pago");

    document.getElementById(mercadopagoFormId).appendChild(script);

    return () => {
      document.getElementById(mercadopagoFormId).removeChild(script);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Typography variant="subtitle1" component="p" className={styles.title}>
        El documento te llegará en 24 horas a tu correo electrónico.
      </Typography>

      <div className={styles.priceContainer}>
        <Typography variant="subtitle1" component="p" className={styles.title}>
          Detalle de compra:
        </Typography>
        <div className={styles.detail}>
          <Typography
            variant="subtitle2"
            component="span"
            className={styles.text}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="span"
            className={styles.price}
          >
            {price}
          </Typography>
        </div>
      </div>
      <form
        method="POST"
        id={mercadopagoFormId}
        className={styles.mercadopagoForm}
      ></form>
      <div className={styles.mercadopagoLogo}>
        <Image
          src="/logo-mercadopago.png"
          alt="Logo de MercadoPago"
          width="121"
          height="32"
          loading="eager"
          priority={true}
        />
      </div>
    </div>
  );
};

export default SummaryPrice;
