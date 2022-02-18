import { NextSeo } from "next-seo";
import { Typography } from "@material-ui/core";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import AboutIllustration from "./aboutIllustration";
import MainLayout from "../../shared/layout/main/mainLayout";
import styles from "./aboutScreen.module.scss";

const About = () => {
  return (
    <>
      <NextSeo title="Acerca de OnLegal" />
      <div className={styles.hero}>
        <div className={styles.text}>
          <Typography component="h1" variant="body1" color="primary">
            Quiénes somos
          </Typography>
          <Typography component="h2" variant="h3" className={styles.title}>
            La nueva era de servicios legales
          </Typography>
          <Typography component="p" variant="body2" className={styles.content}>
            En OnLegal tenemos una misión, cambiar la forma en la que accedemos
            a los servicios legales, diseñando un servicio claro, simple, rápido
            y accesible. OnLegal ayuda a las personas permitiéndoles crear
            documentos legales a medida, registrar sociedades, marcas y realizar
            consultas particulares con abogados de una forma ágil.
          </Typography>
          <Typography component="p" variant="body2" className={styles.content}>
            Creemos que para lograr esto, debemos acompañar el proceso de
            digitalización de los profesionales del derecho. Brindándoles
            herramientas que permitan mejores experiencias, servicios y mayor
            escala para conseguir mejores oportunidades laborales.
          </Typography>
        </div>
        <div className={styles.illustration}>
          <AboutIllustration />
        </div>
      </div>
      <div className={styles.quote}>
        <FormatQuoteIcon />
        <Typography component="h3" variant="h5" className={styles.text}>
          En OnLegal utilizamos la tecnología para democratizar el acceso a tus
          derechos, a la justicia y para que nunca tengas obstáculos a la hora
          de querer alcanzar tu objetivo.
        </Typography>
        <Typography component="p" variant="body2">
          IJ International Legal Group
        </Typography>
      </div>
      <div className={styles.values}>
        <div className={styles.value}>
          <Typography component="p" variant="body1" color="primary">
            Accesibilidad
          </Typography>
          <Typography component="p" variant="body2" className={styles.text}>
            Estamos comprometidos con una cultura de diversidad e inclusión y
            creemos que todas las personas deben poder acceder a los servicios
            legales.
          </Typography>
        </div>
        <div className={styles.value}>
          <Typography component="p" variant="body1" color="primary">
            Claridad
          </Typography>
          <Typography component="p" variant="body2" className={styles.text}>
            Mejoramos el contenido, simplificando el lenguaje jurídico y
            añadiendo información relevante para su fácil aprendizaje.
          </Typography>
        </div>
        <div className={styles.value}>
          <Typography component="p" variant="body1" color="primary">
            Confianza
          </Typography>
          <Typography component="p" variant="body2" className={styles.text}>
            No hay trampas, clausulas escondidas, ni honorarios no contemplados.
            Nuestro único objetivo es acompañarte y ser tu aliado en los
            procesos legales.
          </Typography>
        </div>
      </div>
    </>
  );
};

const AboutScreen = () => {
  return <MainLayout Content={<About />} />;
};

export default AboutScreen;
