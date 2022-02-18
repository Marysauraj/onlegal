import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import { Radio } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styled from "styled-components";

const RadioContainerStyled = styled.div`
  ${({ inline, theme }) =>
    inline ? `display: inline-block; margin-right: ${theme.spacing(4)}px;` : ""}
`;

const RadioButtonField = memo((props) => {
  const { className, options, name, defaultValue, register } = props;

  const [selectedValue, setSelectedValue] = useState(
    defaultValue ? defaultValue : options[0].value
  );

  useEffect(() => {
    if (props.onChange) {
      props.onChange(name, selectedValue);
    }
  }, [selectedValue]);

  const handleChangeRadio = (event) => {
    setSelectedValue(event.target.value);
  };

  const inlineOptions = options.length < 3;
  return (
    <>
      {options.map((item) => (
        <RadioContainerStyled key={item.value} inline={inlineOptions}>
          <FormControlLabel
            control={
              <Radio
                aria-label={item.label}
                checked={selectedValue === item.value}
                color="primary"
                className={className}
                name={name}
                onChange={handleChangeRadio}
                value={item.value}
                inputRef={register}
              />
            }
            label={item.label}
          />
        </RadioContainerStyled>
      ))}
    </>
  );
});

RadioButtonField.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
};

export default RadioButtonField;
