import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Dialog, DialogContent } from "@material-ui/core";
import Hints from "./hints";
import styles from "./hintsModal.module.scss";
import { InformationIcon } from "../../../../../shared/icons/information";
import { Button } from "@material-ui/core";

const CustomButton = withStyles(() => ({
  root: {
    background: "white !important",
    position: "absolute !important",
    bottom: "100px",
    margin: "auto !important",
    left: "0",
    right: "0",
    textTransform: "none !important",
    border: "1px solid #e9ebee !important",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    width: "165px",
  },
}))(Button);

const HintsModal = ({ hints }) => {
  if (!hints || hints.length === 0) return null;

  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Dialog open={isOpen} onBackdropClick={closeModal}>
        <DialogContent>
          <Hints hints={hints} onCrossClick={closeModal} />
        </DialogContent>
      </Dialog>
      <CustomButton
        variant="outlined"
        startIcon={<InformationIcon />}
        className={styles.informationButton}
        onClick={openModal}
      >
        Información útil
      </CustomButton>
    </>
  );
};

HintsModal.propTypes = {
  hints: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default HintsModal;
