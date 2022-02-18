import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./item.module.scss";

const Item = ({ title, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Typography component="h2" variant="subtitle2">
          {title}
        </Typography>
      </div>
      <div className={styles.text}>
        <Typography component="h3" variant="body2">
          {text}
        </Typography>
      </div>
    </div>
  );
};

export default Item;
