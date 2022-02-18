import React from "react";
import classNames from "classnames";
import Item from "./item";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import styles from "./hints.module.scss";
import { InformationIcon } from "../../../../../shared/icons/information";
import CloseIcon from "@material-ui/icons/Close";

const Hints = ({ className, hints, onCrossClick }) => {
  return (
    <div className={classNames(className, styles.container)}>
      {hints?.length > 0 && (
        <>
          <Typography component="h3" variant="h6" className={styles.title}>
            <InformationIcon className={styles.icon} />
            <span className={styles.text}>Información útil</span>
            {onCrossClick && (
              <CloseIcon className={styles.closeIcon} onClick={onCrossClick} />
            )}
          </Typography>
          {hints.map((item) => {
            return (
              <Item key={item.title} title={item.title} text={item.text} />
            );
          })}
        </>
      )}
    </div>
  );
};

Hints.propTypes = {
  hints: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  onCrossClick: PropTypes.func,
};

export default Hints;
