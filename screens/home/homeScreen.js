import { Typography, Link as MUILink } from "@material-ui/core";
import Link from "next/link";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import MainLayout from "../../shared/layout/main/mainLayout";
import HomeIllustration from "./homeIllustration";
import SearchIcon from "./icons/searchIcon";
import FormIcon from "./icons/formIcon";
import DocumentIcon from "./icons/documentIcon";
import ProfessionalsIcons from "./icons/professionalsIcon";
import HandshakeIcon from "./icons/handshakeIcon";
import FlexIcon from "./icons/flexIcon";
import SupportIcon from "./icons/supportIcon";
import PaymentIcon from "./icons/paymentIcon";
import ClockIcon from "./icons/clockIcon";
import CategoryIcon from "./icons/categoryIcon/categoryIcon";
import styles from "./homeScreen.module.scss";

const Home = ({ documents }) => {
  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.hero}>
          <div className={styles.left}>
            <Typography variant="h3" component="h1" className={styles.title}>
              Documentos legales a un click de distancia
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              color="primary"
              className={styles.subtitle}
            >
              La forma más sencilla de tener el documento que buscabas
            </Typography>
          </div>
          <div className={styles.illustration}>
            <HomeIllustration />
          </div>
        </div>
        <div className={styles.howitworks}>
          <Typography variant="h4" component="h2" className={styles.title}>
            ¿Cómo funciona?
          </Typography>

          <div className={styles.steps}>
            <div className={styles.step}>
              <SearchIcon />
              <Typography variant="body1" component="p" color="primary">
                Elegí el documento
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={styles.subtitle}
              >
                de nuestra selección
              </Typography>
            </div>
            <div className={styles.step}>
              <FormIcon />
              <Typography variant="body1" component="p" color="primary">
                Completá el formulario
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={styles.subtitle}
              >
                en pocos pasos
              </Typography>
            </div>
            <div className={styles.step}>
              <DocumentIcon />
              <Typography variant="body1" component="p" color="primary">
                Pagás y en 24 hs lo tenés
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={styles.subtitle}
              >
                así de sencillo
              </Typography>
            </div>
          </div>
        </div>
        {documents.length > 0 && (
          <div className={styles.documents}>
            <Typography variant="h4" component="h2" className={styles.title}>
              Documentos más populares
            </Typography>
            <Link href="/documentos" passHref>
              <MUILink variant="body1" color="primary">
                Ver todos los documentos
              </MUILink>
            </Link>
            <div className={styles.container}>
              {documents.map((document) => (
                <Link
                  key={document.slug}
                  href={`/documentos/${document.slug}`}
                  passHref
                >
                  <MUILink className={styles.document}>
                    <CategoryIcon category={document.category?.slug} />
                    <span className={styles.text}>
                      <Typography variant="body1" component="span">
                        {document.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="span"
                        className={styles.category}
                      >
                        {document.category?.name}
                      </Typography>
                    </span>
                  </MUILink>
                </Link>
              ))}
            </div>
          </div>
        )}
        <div className={styles.whyonlegal}>
          <Typography
            variant="h4"
            component="h2"
            color="primary"
            className={styles.maintitle}
          >
            ¿Por qué OnLegal?
          </Typography>
          <Typography variant="body1" component="p" className={styles.text}>
            En Onlegal buscamos la forma de ayudar a todos aquellos que dejan de
            lado sus asuntos legales por los precios altos y el poco tiempo que
            tienen. Es por eso que decidimos innovar en los servicios legales,
            incorporando la tecnología para hacer esta visión realidad.
          </Typography>
          <div className={styles.reasons}>
            <div className={styles.reason}>
              <ProfessionalsIcons />
              <Typography
                variant="body1"
                component="p"
                className={styles.title}
              >
                Profesionales
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={styles.subtitle}
              >
                100% calificados
              </Typography>
            </div>
            <div className={styles.reason}>
              <HandshakeIcon />
              <Typography
                variant="body1"
                component="p"
                className={styles.title}
              >
                Garantía
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={styles.subtitle}
              >
                en nuestros servicios
              </Typography>
            </div>
            <div className={styles.reason}>
              <FlexIcon />
              <Typography
                variant="body1"
                component="p"
                className={styles.title}
              >
                Flexibilidad
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={styles.subtitle}
              >
                en tus contratos
              </Typography>
            </div>
            <div className={styles.reason}>
              <SupportIcon />
              <Typography
                variant="body1"
                component="p"
                className={styles.title}
              >
                Soporte
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={styles.subtitle}
              >
                y asistencia online
              </Typography>
            </div>
            <div className={styles.reason}>
              <PaymentIcon />
              <Typography
                variant="body1"
                component="p"
                className={styles.title}
              >
                Facilidad de pago
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={styles.subtitle}
              >
                en cuotas
              </Typography>
            </div>
            <div className={styles.reason}>
              <ClockIcon />
              <Typography
                variant="body1"
                component="p"
                className={styles.title}
              >
                Rapidez
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={styles.subtitle}
              >
                en 24 horas lo tenés
              </Typography>
            </div>
          </div>
        </div>
        <div className={styles.opinions}>
          <div className={styles.opinion}>
            <FormatQuoteIcon />
            <Typography variant="body1" component="p">
              Muy innovador
            </Typography>
            <Typography variant="body1" component="p" className={styles.text}>
              Completas muy rápidamente los formularios, pagas y te llega el
              contrato. Nos sirvió para alquilar nuestro departamento en Airbnb
            </Typography>
            <Typography variant="body1" component="p" color="primary">
              Nicolás Iturri
            </Typography>
          </div>
          <div className={styles.opinion}>
            <FormatQuoteIcon />
            <Typography variant="body1" component="p">
              Excelente servicio
            </Typography>
            <Typography variant="body1" component="p" className={styles.text}>
              Necesitaba el contrato para vender mi moto, el proceso fue simple
              y entendible para mí que no tengo conocimiento legales
            </Typography>
            <Typography variant="body1" component="p" color="primary">
              Giancarlo Cabrera
            </Typography>
          </div>
          <div className={styles.opinion}>
            <FormatQuoteIcon />
            <Typography variant="body1" component="p">
              ¡Gran ayuda!
            </Typography>
            <Typography variant="body1" component="p" className={styles.text}>
              Lo utilizamos para nuestro emprendimiento, con el contrato de
              confidencialidad pudimos empezar a proteger nuestra información
              antes de contratar servicios
            </Typography>
            <Typography variant="body1" component="p" color="primary">
              Nicolás Ghisalberti
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.counters}>
        <div className={styles.counter}>
          <Typography variant="h6" component="p" className={styles.number}>
            +200
          </Typography>
          <Typography variant="body2" component="p" className={styles.text}>
            personas usaron OnLegal
          </Typography>
        </div>
        <div className={styles.counter}>
          <Typography variant="h6" component="p" className={styles.number}>
            +230
          </Typography>
          <Typography variant="body2" component="p" className={styles.text}>
            documentos creados
          </Typography>
        </div>
      </div>
    </>
  );
};
const HomeScreen = ({ documents }) => {
  return <MainLayout Content={<Home documents={documents} />} />;
};

export default HomeScreen;
