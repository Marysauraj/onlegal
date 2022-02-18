import { NextSeo } from "next-seo";
import Steps from "../../../shared/components/steps/steps";
import Wizard from "./components/wizard/wizard";
import Hints from "./components/hints/hints";
import HintsModal from "./components/hints/hintsModal";
import React, { useEffect, useState } from "react";
import WizardLayout from "../../../shared/layout/wizard/wizardLayout";
import { useRouter } from "next/router";
import ErrorPage from "../../../pages/_error";
import { useShowPrompt } from "../../../shared/utils/useShowPrompt";

const DocumentWizardScreen = ({
  initialOverallStep,
  activeStepIndex,
  contract,
  isEditing,
  totalQuestionnaires,
  steps,
  initialData,
  initialDataError,
  error,
}) => {
  if (error) return <ErrorPage />;

  const [overallStep, setOverallStep] = useState(initialOverallStep);
  const [activeSection, setActiveSection] = useState(
    contract.sections[activeStepIndex]
  );
  const [activeQuestionnaire, setActiveQuestionnaire] = useState(
    contract.sections[activeStepIndex].questionnaire[0]
  );
  const [stepIndexes, setStepIndexes] = useState({
    activeSetion: activeStepIndex,
    activeQuestionnaire: 0,
  });
  const [isLastSectionStep, setIsLastSectionStep] = useState(false);

  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const router = useRouter();

  // prompt the user if they try and leave with unsaved changes
  useShowPrompt(unsavedChanges);

  useEffect(() => {
    const selectedSection = contract.sections[stepIndexes.activeSetion];
    setActiveSection(selectedSection);
    setActiveQuestionnaire(
      selectedSection.questionnaire[stepIndexes.activeQuestionnaire]
    );
    setIsLastSectionStep(
      stepIndexes.activeQuestionnaire ===
        selectedSection.questionnaire.length - 1
    );
  }, [stepIndexes]);

  const handleNext = async () => {
    const currentSectionIndex = stepIndexes.activeSetion;
    const activeQuestionnaireIndex = stepIndexes.activeQuestionnaire;

    if (activeQuestionnaireIndex < activeSection.questionnaire.length - 1) {
      setUnsavedChanges(true);
      // more questionnaires in this section
      setStepIndexes({
        activeSetion: currentSectionIndex,
        activeQuestionnaire: activeQuestionnaireIndex + 1,
      });
      setOverallStep(overallStep + 1);
    } else {
      // no more questionnaires in this section
      if (currentSectionIndex < steps.length - 1 && !isEditing) {
        setUnsavedChanges(true);
        // move to the next section if there is any and we are not editing
        setStepIndexes({
          activeSetion: currentSectionIndex + 1,
          activeQuestionnaire: 0,
        });
        setOverallStep(overallStep + 1);
      } else if (isEditing) {
        setUnsavedChanges(false);
        router.push("/crear-contrato/resumen");
      } else {
        setUnsavedChanges(false);
        router.push("/crear-contrato/observaciones");
      }
    }
  };

  const handlePrev = () => {
    const currentSectionIndex = stepIndexes.activeSetion;
    const activeQuestionnaireIndex = stepIndexes.activeQuestionnaire;
    if (activeQuestionnaireIndex > 0) {
      setStepIndexes({
        activeSetion: currentSectionIndex,
        activeQuestionnaire: activeQuestionnaireIndex - 1,
      });
    } else {
      const prevSection = currentSectionIndex - 1;
      setStepIndexes({
        activeSetion: prevSection,
        activeQuestionnaire:
          contract.sections[prevSection].questionnaire.length - 1,
      });
    }
    setOverallStep(overallStep - 1);
  };

  return (
    <>
      <NextSeo
        noindex
        nofollow
        title={`Creá tu ${contract.title.toLowerCase()} en minutos`}
      />
      <WizardLayout
        LeftComponent={
          <Steps
            steps={steps}
            title={contract.title}
            activeStep={isEditing ? steps.length : stepIndexes.activeSetion}
          />
        }
        MiddleComponent={
          <Wizard
            sectionId={activeSection.section_id}
            sectionTitle={activeSection.section_title}
            questionnaire={activeQuestionnaire}
            questionnaireIndex={stepIndexes.activeQuestionnaire}
            showBack={overallStep > 0}
            isEditing={isEditing}
            isLastSectionStep={isLastSectionStep}
            progressPercentage={((overallStep + 1) / totalQuestionnaires) * 100}
            progressText={`Paso ${stepIndexes.activeSetion + 1} de ${
              steps.length
            }`}
            contractInfoId={contract.id}
            overallStep={overallStep}
            handleNext={handleNext}
            handlePrev={handlePrev}
            initialData={initialData}
            initialDataError={initialDataError}
          />
        }
        RightComponent={<Hints hints={activeQuestionnaire.hints} />}
        ExtraComponent={
          <>
            <HintsModal hints={activeQuestionnaire.hints} />
          </>
        }
      />
    </>
  );
};

export default DocumentWizardScreen;
