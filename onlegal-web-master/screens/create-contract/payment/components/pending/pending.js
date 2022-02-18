import PaymentWrapper from "../paymentWrapper/paymentWrapper";
import PendingIllustration from "./pendingIllustration";

const Pending = () => (
  <PaymentWrapper
    illustration={<PendingIllustration />}
    title="¡Muchas gracias!"
    subtitle="El pago está en proceso."
    text="En las 24 hs posteriores a la acreditación vas a recibir el contrato terminado en tu correo electrónico."
    link="/"
    linkText="Finalizar"
  />
);

export default Pending;
