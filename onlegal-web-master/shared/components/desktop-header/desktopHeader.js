import Link from "next/link";
import Image from "next/image";
import { Link as MUILink } from "@material-ui/core";
import styles from "./desktopHeader.module.scss";

const DesktopHeader = () => {
  return (
    <header className={styles.wrapper}>
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
      <div className={styles.links}>
        <Link href="/documentos" passHref>
          <MUILink className={styles.link} variant="body2" color="inherit">
            Documentos
          </MUILink>
        </Link>
        <Link href="/marcas" passHref>
          <MUILink className={styles.link} variant="body2" color="inherit">
            Registro de Marcas
          </MUILink>
        </Link>
        <Link href="/negociacion" passHref>
          <MUILink className={styles.link} variant="body2" color="inherit">
            Negociación de Tarifas
          </MUILink>
        </Link>
        <Link href="/acerca" passHref>
          <MUILink className={styles.link} variant="body2" color="inherit">
            Acerca de
          </MUILink>
        </Link>
        <Link href="/contacto" passHref>
          <MUILink className={styles.link} variant="body2" color="inherit">
            Contacto
          </MUILink>
        </Link>
      </div>
    </header>
  );
};

export default DesktopHeader;
