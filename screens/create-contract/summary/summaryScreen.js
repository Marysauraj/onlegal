import Steps from "../../../shared/components/steps/steps";
import React from "react";
import ErrorPage from "../../../pages/_error";
import WizardLayout from "../../../shared/layout/wizard/wizardLayout";
import Summary from "./components/summary";
import SummaryPrice from "./components/summaryPrice";

const SummaryScreen = ({ contractSummary, steps, mercadopagoPreferenceId }) => {
  if (!contractSummary || !mercadopagoPreferenceId) {
    return <ErrorPage />;
  }

  const priceText = `${contractSummary.price.currency_symbol} ${contractSummary.price.amount}`;

  const observationsData = [
    {
      label: "Comentarios",
      value: contractSummary.comments || "sin comentarios",
    },
  ];

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
        <Summary
          observationsData={observationsData}
          sections={contractSummary.sections}
          documentId={contractSummary.slug}
          documentTitle={contractSummary.title}
          priceComponent={
            <SummaryPrice
              title={contractSummary.title}
              price={priceText}
              mercadopagoPreferenceId={mercadopagoPreferenceId}
              mercadopagoFormId="mercadopago-form-mobile"
            />
          }
        />
      }
      RightComponent={
        <SummaryPrice
          title={contractSummary.title}
          price={priceText}
          mercadopagoPreferenceId={mercadopagoPreferenceId}
          mercadopagoFormId="mercadopago-form-desktop"
        />
      }
    />
  );
};

export default SummaryScreen;
