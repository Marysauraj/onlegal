import PaymentWrapper from "../paymentWrapper/paymentWrapper";
import SuccessIllustration from "./successIllustration";

const Success = ({ email = "" }) => (
  <PaymentWrapper
    illustration={<SuccessIllustration />}
    title="¡Muchas gracias!"
    subtitle="El contrato está en proceso."
    text={
      <>
        En las próximas 24 hs revisá tu correo{email ? <b> {email}</b> : ""},
        vas a recibir el contrato terminado.
      </>
    }
    link="/"
    linkText="Finalizar"
  />
);

export default Success;
