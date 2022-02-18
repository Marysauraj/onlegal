import React, { memo } from "react";
import { TextField, InputLabel } from "@material-ui/core";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../../../../../shared/theme";
import { ErrorMessageStyled } from "../../../../../shared/components/inputs/styled/errorStyled";

const TextFieldStyled = styled(TextField)`
  background-color: #f7f7fb;
  width: 100%;

  &.error {
    input {
      border: 1px solid ${theme.palette.error.main};

      &:focus {
        border-color: ${theme.palette.error.main};
      }
    }
  }
`;

const InputLabelStyled = styled(InputLabel)`
  color: ${theme.palette.secondary.main};
  font-size: 0.875rem;
  margin-bottom: 8px;
`;

const TextAreaField = memo((props) => {
  const {
    name,
    label,
    placeholder,
    className,
    register,
    validationRules,
    errors,
    defaultValue,
  } = props;

  return (
    <>
      <InputLabelStyled htmlFor={name}>{label}</InputLabelStyled>
      <TextFieldStyled
        id={name}
        name={name}
        className={className}
        multiline
        rows={4}
        placeholder={placeholder}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        inputRef={register(validationRules)}
        defaultValue={defaultValue}
        className={Boolean(errors[name]) ? "error" : ""}
      />
      {errors[name] && (
        <ErrorMessageStyled>{errors[name]?.message}</ErrorMessageStyled>
      )}
    </>
  );
});

TextAreaField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  validationRules: PropTypes.object,
  defaultValue: PropTypes.string,
};

export default TextAreaField;
