import React, { useState, useEffect, memo } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";
import { DateTime } from "luxon";
import { Controller } from "react-hook-form";
import { ErrorMessageStyled } from "../../../../../shared/components/inputs/styled/errorStyled";
import theme from "../../../../../shared/theme";

const KeyboardDatePickerStyled = styled(KeyboardDatePicker)`
  > div {
    background-color: #f7f7fb;
    max-width: 200px;
  }

  .MuiFormHelperText-root.Mui-error{
    color: ${theme.palette.error.main};
    margin: 0;
    font-family: Inter;
    font-size: 0.815rem;
    line-height: 1.25rem;
    padding: 5px 0 0;
    white-space: break-spaces;
  }
  

${props => props.haserror? `
  > div {
      border: 1px solid ${theme.palette.error.main};

      .MuiOutlinedInput-notchedOutline {
        border: 0;
      }

      &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
        border: 1px solid ${theme.palette.error.main};
      }
      
      &:focus {
        outline-color: ${theme.palette.error.main};
        
        input{
          border-color: ${theme.palette.error.main};
          outline-color: ${theme.palette.error.main};
        }
      }
    }
  }`: ''}};
`;

const InputLabelStyled = styled(InputLabel)`
  font-size: 0.875rem;
  margin-bottom: 8px;
  && {
    padding-top: 10px;
  }
`;

const DateField = memo((props) => {
  const {
    control,
    className,
    label,
    name,
    placeholder,
    setValue,
    defaultValue,
    errors,
    approvals,
    validationRules,
  } = props;
  const dateAPIFormat = "yyyy-MM-dd";
  const dateDisplayFormat = "dd/MM/yyyy";

  const initValue = defaultValue
    ? DateTime.fromFormat(defaultValue, dateAPIFormat)
    : new Date();

  const [selectedDate, setSelectedDate] = useState(initValue);

  useEffect(() => {
    const value = defaultValue
      ? defaultValue
      : DateTime.fromJSDate(new Date()).toFormat(dateAPIFormat);
    setValue(name, value);
  }, []);

  let maxDate = new Date('2100-01-01');  
  let minDate = new Date('1900-01-01');
  if(approvals && approvals.rules){
    approvals.rules.forEach(item => {
      switch (item.rule){
        case 'MIN_DATE':
            minDate = new Date();
            minDate.setDate(minDate.getDate() - Number(item.value));
          break;
        case 'MAX_DATE':
          maxDate = new Date();
          maxDate.setDate(maxDate.getDate() + Number(item.value));  
          break;
        }
      });
  }
  
  return (
    <>
      <MuiPickersUtilsProvider utils={LuxonUtils} locale="es">
        <InputLabelStyled htmlFor={name}>{label}</InputLabelStyled>
        <Controller
          render={({ onChange, ...props }) => (
            <KeyboardDatePickerStyled
              onChange={(date) => {
                setValue(name, date && date.toFormat(dateAPIFormat), { shouldValidate: true });
                setSelectedDate(date);
              }}
              autoOk
              disableToolbar
              variant="inline"
              inputVariant="outlined"
              format={dateDisplayFormat}
              InputAdornmentProps={{ position: "end" }}
              size="small"
              value={selectedDate}
              invalidDateMessage="Fecha inválida"
              maxDate={maxDate}
              maxDateMessage=""
              minDate={minDate}
              minDateMessage=""
              haserror={Boolean(errors[name])? "true": undefined}
              data-testid="date-field"
            />
          )}
          className={className}
          control={control}
          name={name}
          placeholder={placeholder}
          defaultValue={initValue}
          rules={validationRules}
        />
      </MuiPickersUtilsProvider>
      {errors[name] && (
        <ErrorMessageStyled>{errors[name]?.message}</ErrorMessageStyled>
      )}
    </>
  );
});

DateField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default DateField;
