import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  InputStyled,
  InputLabelStyled,
} from "../../../../../shared/components/inputs/styled/inputStyled";
import styled from "styled-components";
import { ErrorMessageStyled } from "../../../../../shared/components/inputs/styled/errorStyled";

const InputBoxStyled = styled.div`
  padding: 10px 0;
`;

const InputField = memo((props) => {
  const {
    className,
    label,
    placeholder,
    defaultValue,
    type = "text",
    name,
    register,
    validationRules,
    errors,
  } = props;

  return (
    <InputBoxStyled className={className}>
      <InputLabelStyled htmlFor={name}>{label}</InputLabelStyled>
      <InputStyled
        defaultValue={defaultValue}
        id={name}
        type={type.toLowerCase()}
        inputRef={register(validationRules)}
        name={name}
        placeholder={placeholder}
        className={Boolean(errors[name]) ? "error" : ""}
      />
      {errors[name] && (
        <ErrorMessageStyled>{errors[name]?.message}</ErrorMessageStyled>
      )}
    </InputBoxStyled>
  );
});

InputField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  type: PropTypes.oneOf(["TEXT", "PASSWORD", "EMAIL", "NUMBER"]),
  name: PropTypes.string.isRequired,
  validationRules: PropTypes.object,
  placeholder: PropTypes.string,
};

export default InputField;
