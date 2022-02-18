import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import styles from "./whatsappBubble.module.scss";
import WhatsappIcon from "./whatsappIcon";

const WhatsappBubble = () => {
  return (
    <div className={styles.wrapper}>
      <Tooltip
        title="Escribinos por Whatsapp"
        placement="left"
        arrow
        disableFocusListener
      >
        <a
          rel="noopener"
          target="_blank"
          href="https://wa.me/message/NWEZLOATCCVSE1"
          className={styles.link}
        >
          <WhatsappIcon />
        </a>
      </Tooltip>
    </div>
  );
};

export default WhatsappBubble;
