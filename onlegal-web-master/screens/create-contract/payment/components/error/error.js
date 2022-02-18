import PaymentWrapper from "../paymentWrapper/paymentWrapper";
import ErrorIllustration from "./errorIllustration";

const Error = ({ slug }) => (
  <PaymentWrapper
    illustration={<ErrorIllustration />}
    title="¡El pago falló!"
    subtitle="Lamentablemente el pago no fue realizado."
    text="¡Por favor vuelve a intentarlo!"
    link="/crear-contrato/resumen"
    linkText="Volver a intentar"
  />
);

export default Error;
