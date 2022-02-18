import Link from "next/link";
import Image from "next/image";
import { Link as MUILink, Typography } from "@material-ui/core";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.upperSection}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <a>
              <Image
                src="/logo-inverted.png"
                alt="OnLegal logo"
                width="421"
                height="108"
              />
            </a>
          </Link>
        </div>
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
          <Link href="/terminos-y-condiciones" passHref>
            <MUILink className={styles.link} variant="body2" color="inherit">
              Términos y condiciones
            </MUILink>
          </Link>
          <Link href="/politica-de-privacidad" passHref>
            <MUILink className={styles.link} variant="body2" color="inherit">
              Política de privacidad
            </MUILink>
          </Link>
        </div>
        <div className={styles.social}>
          <MUILink
            className={styles.link}
            href="https://www.facebook.com/OnLegal.com.ar/"
            rel="noopener"
            target="_blank"
          >
            f
          </MUILink>
          <MUILink
            className={styles.link}
            href="https://www.linkedin.com/company/onlegal-com-ar/about/"
            rel="noopener"
            target="_blank"
          >
            in
          </MUILink>
          <MUILink
            className={styles.link}
            href="https://www.instagram.com/onlegal/"
            rel="noopener"
            target="_blank"
          >
            i
          </MUILink>
  
        </div>
      </div>
      <div className={styles.copyright}>
        <Typography variant="body2">OnLegal &copy; Copyright 2021</Typography>
      </div>
      <div> Powered by</div>
    </footer>
  );
};

export default Footer;
