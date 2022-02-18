import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import styles from "./emptyLayout.module.scss";

const EmptyLayout = ({ Content }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" passHref>
          <a className={styles.logo}>
            <Image
              src="/logo.png"
              alt="OnLegal logo"
              width="421"
              height="109"
              loading="eager"
              priority={true}
            />
          </a>
        </Link>
      </header>
      {Content}
    </>
  );
};

EmptyLayout.propTypes = {
  Content: PropTypes.element.isRequired,
};

export default EmptyLayout;
