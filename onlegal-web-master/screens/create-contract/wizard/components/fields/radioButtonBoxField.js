import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import { Radio, Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styles from "./radioButtonBoxField.module.scss";

const RadioButtonBoxField = memo((props) => {
  const { className, options, name, defaultValue, register } = props;

  const [selectedValue, setSelectedValue] = useState(
    defaultValue ? defaultValue : options[0].value
  );

  useEffect(() => {
    if (props.onChange) {
      props.onChange(name, selectedValue);
    }
  }, [selectedValue]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      {options.map((item) => (
        <div key={item.value} className={styles.container}>
          <FormControlLabel
            control={
              <Radio
                aria-label={item.label}
                checked={selectedValue === item.value}
                color="primary"
                className={className}
                name={name}
                onChange={handleChange}
                value={item.value}
                inputRef={register}
              />
            }
            label={
              <div className={styles.box}>
                <Typography
                  component="h3"
                  variant="subtitle1"
                  className={styles.title}
                >
                  {item.label}
                </Typography>
                {item.description && (
                  <Typography
                    component="p"
                    variant="subtitle2"
                    className={styles.description}
                  >
                    {item.description}
                  </Typography>
                )}
              </div>
            }
          />
        </div>
      ))}
    </>
  );
});

RadioButtonBoxField.propTypes = {
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

export default RadioButtonBoxField;
