import { DateTime } from "luxon";

const ErrorMessages = {
  required: "Este campo es requerido",
};

const getDateRules = (dateValidations) => {
  let rules = {};
  dateValidations.forEach(item => {
    if(item.rule === "MIN_DATE"){
      const minDate = new Date();
      minDate.setDate(minDate.getDate() - Number(item.value));
      rules.validate = { 
        ...rules.validate,
          minDate: value => value >= DateTime.fromJSDate(minDate).toFormat("yyyy-MM-dd") || item.error_message,
        }
      
    } else {
      const maxDate = new Date();
      maxDate.setDate(maxDate.getDate() + Number(item.value)); 
      rules.validate = { 
        ...rules.validate,
          maxDate: value => value <= DateTime.fromJSDate(maxDate).toFormat("yyyy-MM-dd") || item.error_message,
        }
      
    }
  });
  return rules;
}

export const getValidationRules = (validations, isRequired) => {
  let rules = [];

  if (validations) {
    rules = validations.map((item) => {
      switch (item.rule) {
        case "MIN_VALUE":
          return { min: { value: parseFloat(item.value), message: item.error_message } };
        case "MAX_VALUE":
          return { max: { value: parseFloat(item.value), message: item.error_message } };
        case "REGEX":
          return {
            pattern: {
              value: new RegExp(item.value),
              message: item.error_message,
            },
          };
        case "MIN_LENGTH":
          return { minLength: { value: parseInt(item.value), message: item.error_message } };
        case "MAX_LENGTH":
          return { maxLength: { value: parseInt(item.value), message: item.error_message } };
        default:
          return;
      }
    });

    const dateValidations = validations.filter(val => val.rule === "MIN_DATE" || val.rule === "MAX_DATE");
    const dateRules = dateValidations.length > 0 ? getDateRules(dateValidations) : undefined;
    if(dateRules){
      rules.push(dateRules);
    }
  }

  if (isRequired) {
    rules.push({ required: ErrorMessages.required });
  }

  return Object.assign({}, ...rules);
};
