import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { ErrorMessageStyled } from "../../../../../shared/components/inputs/styled/errorStyled";

const CheckBoxField = memo((props) => {
  const {
    register,
    validationRules,
    className,
    options,
    name,
    defaultValue = [],
    errors,
  } = props;

  const [selectedValues, setSelectedValues] = useState(defaultValue);

  const handleChange = (event) => {
    if (event.target.checked) {
      const newSelectedValues = [...selectedValues];
      newSelectedValues.push(event.target.value);
      setSelectedValues(newSelectedValues);
    } else {
      setSelectedValues(
        selectedValues.filter((item) => item !== event.target.value)
      );
    }
  };

  return (
    <>
      {options.map((item) => (
        <div key={item.value}>
          <FormControlLabel
            control={
              <Checkbox
                aria-label={item.label}
                color="primary"
                checked={selectedValues.includes(item.value)}
                className={className}
                name={name}
                onChange={handleChange}
                value={item.value}
                inputRef={register(validationRules)}
              />
            }
            label={item.label}
          />
        </div>
      ))}
      {errors[name] && (
        <ErrorMessageStyled>{errors[name]?.message}</ErrorMessageStyled>
      )}
    </>
  );
});

CheckBoxField.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.array,
  validationRules: PropTypes.object,
};

export default CheckBoxField;
