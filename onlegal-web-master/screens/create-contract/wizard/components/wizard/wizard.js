import classNames from "classnames";
import cookieCutter from "cookie-cutter";
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Typography,
  LinearProgress,
  Button,
  Collapse,
} from "@material-ui/core";
import styles from "./wizard.module.scss";
import theme from "../../../../../shared/theme";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Questionnaire from "./questionnaire";
import { useForm, FormProvider } from "react-hook-form";
import {
  saveSection,
  createContract,
} from "../../../../../shared/services/contractService";
import Loading from "../../../../../shared/components/loading/loading";
import Alert from "@material-ui/lab/Alert";

const progressBarStyle = {
  backgroundColor: theme.palette.background.default,
  height: 6,
};

const Wizard = ({
  className,
  sectionTitle,
  sectionId,
  questionnaire,
  questionnaireIndex,
  showBack,
  isEditing,
  isLastSectionStep,
  progressPercentage,
  progressText,
  handleNext,
  handlePrev,
  contractInfoId,
  overallStep,
  initialData = {},
  initialDataError,
}) => {
  const router = useRouter();
  const methods = useForm({ mode: "onBlur" });
  const ref = React.useRef();
  const [showLoading, setShowLoading] = useState(false);

  const [showNextError, setShowNextError] = useState(false);

  React.useEffect(() => {
    ref.current.scrollTo(0, 0);
  }, [progressPercentage]);

  const [sectionValues, setSectionValues] = useState(
    initialData || { [sectionId]: {} }
  );

  const saveValues = async (values) => {
    try {
      const contractId = cookieCutter.get("onlegal_contractid");
      return await saveSection(contractId, sectionId, {
        attributes: values,
      });
    } catch (error) {
      throw error;
    }
  };

  const onSubmit = async (data) => {
    setShowLoading(true);
    let values = { [sectionId]: { ...sectionValues[sectionId], ...data } };

    const newSectionsValues = { ...sectionValues, ...values };
    setSectionValues(newSectionsValues);

    try {
      const contractId = cookieCutter.get("onlegal_contractid");
      if (!contractId) {
        if (overallStep === 0) {
          await createContract({
            contract_info_id: contractInfoId,
          });
        } else {
          // cookie expired, start again
          return router.reload();
        }
      }

      const response = await saveValues(newSectionsValues[sectionId]);
      if (response.success) {
        setShowLoading(false);
        handleNext();
      } else {
        Object.entries(response.errors).forEach(([key, value], index) => {
          methods.setError(key, {
            type: "manual",
            message: value.join("\r\n"),
            shouldFocus: index === 0,
          });
        });
      }
    } catch (error) {
      setShowNextError(true);
      setTimeout(() => {
        setShowNextError(false);
      }, 5000);
    } finally {
      setShowLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={classNames(className, styles.container)}
        noValidate
      >
        <Loading show={showLoading} />
        <Typography component="h3" variant="h6" className={styles.title}>
          <span className={styles.text}>{sectionTitle}</span>
          <span className={styles.progressText}>{progressText}</span>
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progressPercentage}
          style={progressBarStyle}
          className={styles.progressBar}
        />

        <Collapse in={showNextError}>
          <Alert severity="error">No pudimos guardar los cambios.</Alert>
        </Collapse>

        <Collapse in={initialDataError && isEditing}>
          <Alert severity="error">
            No pudimos cargar los datos que habías guardado. Por favor
            completalos nuevamente.
          </Alert>
        </Collapse>

        <div ref={ref} className={styles.formContainer}>
          <Typography component="h4" variant="h6" className={styles.formTitle}>
            {questionnaire.questionnaire_title}
          </Typography>
          <Questionnaire
            questionnaire={questionnaire}
            sectionId={sectionId}
            defaultValues={sectionValues[sectionId]}
          />
        </div>

        <div className={styles.navigation}>
          {showBack && (!isEditing || questionnaireIndex > 0) && (
            <Button
              color="primary"
              onClick={handlePrev}
              startIcon={<ArrowBackIcon />}
            >
              Atrás
            </Button>
          )}

          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={styles.continueButton}
          >
            {isEditing && isLastSectionStep
              ? "Guardar y continuar"
              : "Continuar"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Wizard;
