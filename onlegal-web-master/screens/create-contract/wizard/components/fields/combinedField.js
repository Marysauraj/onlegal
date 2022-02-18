import React, { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DropDownField from "./dropdDownField";
import { getValidationRules } from "./validationRules";
import {
  InputLabelStyled,
  InputStyled,
} from "../../../../../shared/components/inputs/styled/inputStyled";
import { ErrorMessageStyled } from "../../../../../shared/components/inputs/styled/errorStyled";

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  width: 100%;
  padding: 10px 0;
`;

const InputBoxStyled = styled.div`
  flex: 2;

  input {
    width: 100%;
  }

  @media screen and (max-width: 464px) {
    > label { 
      margin-top: 20px;
    }
  }
`;

const DropDownFieldStyled = styled(DropDownField)`
  width: fit-content;
  padding: 0 25px 0 0;
`;

const CombinedField = memo((props) => {
  const {
    className,
    subTypes,
    control,
    register,
    setValue,
    errors,
    defaultValue,
  } = props;

  const dropDownData = subTypes[0];
  const inputData = subTypes[1];

  const inputValidations = getValidationRules(
    inputData.approvals ? inputData.approvals.rules : [],
    inputData.required
  );

  const modifiedLabel =
    inputData.label && inputData.required
      ? `${inputData.label} *`
      : inputData.label;

  return (
    <Root className={className}>
      <DropDownFieldStyled
        options={dropDownData.options}
        name={dropDownData.key}
        defaultValue={defaultValue && defaultValue[0]}
        label={dropDownData.label}
        constrol={control}
        setValue={setValue}
      />
      <>
        <InputBoxStyled>
          <InputLabelStyled htmlFor={inputData.key}>
            {modifiedLabel}
          </InputLabelStyled>
          <InputStyled
            defaultValue={defaultValue && defaultValue[1]}
            id={inputData.key}
            type={inputData.type.toLowerCase()}
            inputRef={register(inputValidations)}
            name={inputData.key}
            className={Boolean(errors[inputData.key]) ? "error" : ""}
            placeholder={inputData.placeholder}
          />
          {errors[inputData.key] && (
            <ErrorMessageStyled>
              {errors[inputData.key]?.message}
            </ErrorMessageStyled>
          )}
        </InputBoxStyled>
      </>
    </Root>
  );
});

CombinedField.propTypes = {
  className: PropTypes.string,
  subTypes: PropTypes.arrayOf(Object),
};

export default CombinedField;
