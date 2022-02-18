import { useState } from "react";
import { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";
import { Typography, Button, Collapse } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import {
  InputStyled,
  InputLabelStyled,
} from "../../../../shared/components/inputs/styled/inputStyled";
import { saveRecipient } from "../../../../shared/services/contractService";
import Loading from "../../../../shared/components/loading/loading";
import styles from "./observations.module.scss";

const Observations = ({ defaultComments, onContinueClick }) => {
  const router = useRouter();
  const [showLoading, setShowLoading] = useState(false);

  const [comments, setComments] = useState(defaultComments);
  const [showAPIError, setShowAPIError] = useState(false);

  const handleChangeComment = (event) => {
    setComments(event.target.value);
  };

  const handleOnClickContinue = () => {
    onContinueClick();

    const contractId = cookieCutter.get("onlegal_contractid");
    setShowLoading(true);
    saveRecipient(contractId, comments)
      .then(() => {
        setShowLoading(false);
        setShowAPIError(false);
        router.push("/crear-contrato/resumen");
      })
      .catch((error) => {
        setShowLoading(false);
        setShowAPIError(true);
      });
  };

  return (
    <div className={styles.container}>
      <Loading show={showLoading} />
      <Collapse in={showAPIError} className={styles.errorWrapper}>
        <Alert severity="error">No pudimos guardar los cambios.</Alert>
      </Collapse>
      <div className={styles.formWrapper}>
        <div className={styles.header}>
          <Typography variant="h5" component="h2">
            ¿Querés agregar alguna observación?{" "}
          </Typography>
        </div>
        <div>
          <InputLabelStyled htmlFor="comment">Observaciones</InputLabelStyled>
          <InputStyled
            type="text"
            name="comment"
            id="comment"
            multiline
            rows={6}
            onChange={handleChangeComment}
            defaultValue={defaultComments}
          />
        </div>
      </div>
      <div className={styles.navigation}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={styles.continueButton}
          onClick={handleOnClickContinue}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default Observations;
