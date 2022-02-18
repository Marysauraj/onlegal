import React, { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./steps.module.scss";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { Typography } from "@material-ui/core";
import { ExitIcon } from "../../icons/exit";
import { useRouter } from "next/router";

const Steps = (props) => {
  const { title, steps, activeStep, className } = props;

  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className={classNames(className, styles.container)}>
      <div className={styles.logo}>
        <Image
          src="/logo.png"
          alt="OnLegal logo"
          width="421"
          height="109"
          loading="eager"
          priority={true}
        />
      </div>
      <div className={styles.content}>
        <Typography component="h2" variant="h5" className={styles.title}>
          {title}
        </Typography>
        <ul className={styles.list}>
          {steps.map((item, index) => (
            <li
              className={classNames(styles.item, {
                [styles.active]: index === activeStep,
                [styles.completed]: index < activeStep,
                [styles.inactive]: index > activeStep,
              })}
              key={index}
            >
              <Typography component="h3" variant="subtitle1">
                {item}
              </Typography>
              <CheckCircleOutlineIcon />
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.border} />
      <a onClick={handleClick} className={styles.exit}>
        <ExitIcon className={styles.icon} />
        <Typography
          component="span"
          variant="subtitle2"
          className={styles.text}
        >
          Salir
        </Typography>
      </a>
    </div>
  );
};

Steps.propTypes = {
  title: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default Steps;
