import InputField from "./inputField";
import DateField from "./dateField";
import RadioButtonField from "./radioButtonField";
import RadioButtonBoxField from "./radioButtonBoxField";
import CheckBoxField from "./checkBoxField";
import * as React from "react";
import DropDownField from "./dropdDownField";
import TextAreaField from "./textAreaField";
import { useFormContext } from "react-hook-form";
import CombinedField from "./combinedField";
import DropDownWithUnitsField from "./dropDownWithUnitsField";
import { getValidationRules } from "./validationRules";
import TimeField from "./timeField";

const Field = (props) => {
  const { type, approvals, name, required, label } = props;
  const methods = useFormContext();

  let Component = null;
  switch (type) {
    case "TEXT":
      Component = InputField;
      break;
    case "NUMBER":
      Component = InputField;
      break;
    case "EMAIL":
      Component = InputField;
      break;
    case "DATE":
      Component = DateField;
      break;
    case "RADIO_BUTTON":
      Component = RadioButtonField;
      break;
    case "RADIO_BUTTON_BOX":
      Component = RadioButtonBoxField;
      break;
    case "CHECK_BOX":
      Component = CheckBoxField;
      break;
    case "DROP_DOWN":
      Component = DropDownField;
      break;
    case "TEXT_AREA":
      Component = TextAreaField;
      break;
    case "COMBINED_DROP_DOWN_WITH_INPUT":
      Component = CombinedField;
      break;
    case "DROP_DOWN_WITH_UNITS":
      Component = DropDownWithUnitsField;
      break;
    case "TIME":
      Component = TimeField;
      break;
    default:
      Component = InputField;
      break;
  }
  if (!Component) {
    console.warn(`Unkown field type: ${type}`);
    return null;
  }

  const validationRules = getValidationRules(approvals? approvals.rules : [], required);
  const modifiedLabel = label && required ? `${label} *` : label;

  return (
    <Component
      {...props}
      label={modifiedLabel}
      name={name}
      {...methods}
      validationRules={validationRules}
    />
  );
};

export default Field;
