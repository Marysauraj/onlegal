import Steps from "../../../shared/components/steps/steps";
import React, { useState } from "react";
import WizardLayout from "../../../shared/layout/wizard/wizardLayout";
import Observations from "./components/observations";
import { useShowPrompt } from "../../../shared/utils/useShowPrompt";

const DocumentContactScreen = ({ steps, contractSummary }) => {
  const [unsavedChanges, setUnsavedChanges] = useState(true);

  // prompt the user if they try and leave with unsaved changes
  useShowPrompt(unsavedChanges);

  return (
    <WizardLayout
      LeftComponent={
        <Steps
          steps={steps}
          title={contractSummary.title}
          activeStep={steps.length}
        />
      }
      MiddleComponent={
        <Observations
          defaultComments={contractSummary.comments}
          onContinueClick={() => setUnsavedChanges(false)}
        />
      }
      RightComponent={<></>}
    />
  );
};

export default DocumentContactScreen;
