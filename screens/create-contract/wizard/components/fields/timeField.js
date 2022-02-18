import React, { useState, memo, useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";
import { Controller } from "react-hook-form";
import { ErrorMessageStyled } from "../../../../../shared/components/inputs/styled/errorStyled";
import { Schedule } from "@material-ui/icons";
import { DateTime } from "luxon";
import theme from "../../../../../shared/theme";

const KeyboardTimePickerStyled = styled(KeyboardTimePicker)`
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

const TimeField = memo((props) => {
  const {
    control,
    className,
    label,
    name,
    placeholder,
    setValue,
    defaultValue,
    errors,
    validationRules,
  } = props;

  const initValue = defaultValue 
  ? DateTime.fromISO(defaultValue)
  : new Date();

  const [selectedTime, setSelectedTime] = useState(initValue);

  useEffect(() => {
    const value = defaultValue
      ? defaultValue
      : DateTime.fromJSDate(new Date()).toFormat('HH:mm');
    setValue(name, value);
  }, []);

  return (
    <>
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <InputLabelStyled htmlFor={name}>{label}</InputLabelStyled>
        <Controller
          render={({ onChange, ...props }) => (
            <KeyboardTimePickerStyled
                clearable={true}
                ampm={false}
                value={selectedTime}
                onChange={(time) => {
                    setValue(name, time && time.toFormat('HH:mm'), { shouldValidate: true });
                    setSelectedTime(time);
                }}
                variant="inline"
                inputVariant="outlined"
                size="small"
                invalidDateMessage="Hora inválida"
                keyboardIcon={<Schedule />}
                haserror={Boolean(errors[name])? "true": undefined}
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

TimeField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default TimeField;
