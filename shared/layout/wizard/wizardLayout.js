import styles from "./wizardLayout.module.scss";
import PropTypes from "prop-types";
import MobileMenu from "../../components/mobile-menu/mobileMenu";

const WizardLayout = ({
  LeftComponent,
  MiddleComponent,
  RightComponent,
  ExtraComponent,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>{LeftComponent}</div>
        <div className={styles.section}>
          <MobileMenu />
          {MiddleComponent}
        </div>
        <div className={styles.right}>{RightComponent}</div>
        {ExtraComponent && <div className={styles.extra}>{ExtraComponent}</div>}
      </div>
    </>
  );
};

WizardLayout.propTypes = {
  LeftComponent: PropTypes.element.isRequired,
  MiddleComponent: PropTypes.element.isRequired,
  RightComponent: PropTypes.element.isRequired,
  ExtraComponent: PropTypes.element,
};

export default WizardLayout;
