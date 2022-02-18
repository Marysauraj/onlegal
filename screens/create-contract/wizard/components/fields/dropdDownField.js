import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputLabel from "@material-ui/core/InputLabel";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import { Controller } from "react-hook-form";

const Root = styled.div`
  padding: 10px 0;
`;

const TextFieldStyled = styled(TextField)`
  background-color: #f7f7fb;
`;

const InputLabelStyled = styled(InputLabel)`
  font-size: 0.875rem;
  margin-bottom: 8px;
  color: #9aa4af;
`;

const DropDownField = memo((props) => {
  const {
    name,
    options,
    label,
    className,
    control,
    defaultValue,
    setValue,
  } = props;

  const initValue = defaultValue
    ? options.find((item) => item.value === defaultValue)
    : options[0];

  useEffect(() => {
    setValue(name, initValue.value);
  }, []);

  return (
    <Root className={className}>
      {label && <InputLabelStyled htmlFor={name}>{label}</InputLabelStyled>}
      <Controller
        render={({ onChange, ...props }) => (
          <Autocomplete
            disableClearable
            options={options}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextFieldStyled
                {...params}
                variant="outlined"
                size="small"
                className="dropdown-text-field"
              />
            )}
            onChange={(event, selected) => {
              setValue(name, selected.value, { shouldDirty: true });
              if (props.onChange && selected) {
                props.onChange(name, selected.value);
              }
            }}
            defaultValue={initValue}
          />
        )}
        name={name}
        control={control}
        defaultValue={initValue}
      />
    </Root>
  );
});

DropDownField.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default DropDownField;
