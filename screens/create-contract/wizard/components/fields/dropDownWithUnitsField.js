import React, { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DropDownField from "./dropdDownField";
import {
  InputStyled,
  InputLabelStyled,
} from "../../../../../shared/components/inputs/styled/inputStyled";
import { getValidationRules } from "./validationRules";
import { ErrorMessageStyled } from "../../../../../shared/components/inputs/styled/errorStyled";

const Root = styled.div`
  padding: 10px 0;
`;

const ContainerStyled = styled.div`
  display: flex;
`;

const DropDownFieldStyled = styled(DropDownField)`
  width: fit-content;

  input {
    color: #9aa4af;
    text-align: center;
  }

  div.dropdown-text-field {
    background: #e9ebee;
    min-width: 130px;

    > div {
      border-top-left-radius: 0;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 0;
    }
  }
`;

const InputBoxStyled = styled.div`
  input {
    width: 100%;

    border-top-left-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 4px;
  }
`;

const ErrorMessage = styled(ErrorMessageStyled)`
  padding: 0;
`;

const DropDownWithUnitsField = memo((props) => {
  const {
    className,
    subTypes,
    control,
    register,
    setValue,
    errors,
    defaultValue,
  } = props;

  const inputData = subTypes[0];
  const dropDownData = subTypes[1];

  const inputValidations = getValidationRules(inputData.approvals? inputData.approvals.rules : [], inputData.required);

  const modifiedLabel =
    inputData.label && inputData.required
      ? `${inputData.label} *`
      : inputData.label;

  return (
    <Root className={className}>
      <>
        <InputBoxStyled>
          <InputLabelStyled htmlFor={inputData.key}>
            {modifiedLabel}
          </InputLabelStyled>
          <ContainerStyled>
            <InputStyled
              defaultValue={defaultValue && defaultValue[0]}
              id={inputData.key}
              type={inputData.type.toLowerCase()}
              inputRef={register(inputValidations)}
              name={inputData.key}
              placeholder={inputData.placeholder}
              className={Boolean(errors[inputData.key]) ? "error" : ""}
            />
            <DropDownFieldStyled
              options={dropDownData.options}
              name={dropDownData.key}
              defaultValue={defaultValue && defaultValue[1]}
              constrol={control}
              setValue={setValue}
            />
          </ContainerStyled>

          {errors[inputData.key] && (
            <ErrorMessage>{errors[inputData.key]?.message}</ErrorMessage>
          )}
        </InputBoxStyled>
      </>
    </Root>
  );
});

DropDownWithUnitsField.propTypes = {
  className: PropTypes.string,
  subTypes: PropTypes.arrayOf(Object),
};

export default DropDownWithUnitsField;
