import Link from "next/link";
import {
  Typography,
  Button,
  Breadcrumbs,
  Link as MUILink,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import DocumentIllustration from "./rateRenegotiationIllustration";
import MainLayout from "../../shared/layout/main/mainLayout";
import styles from "./rateRenegotiationScreen.module.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckIcon from "@material-ui/icons/Check";
import Error404Screen from "../error/errorScreen";
import ArrowIcon from "../../shared/icons/arrowIcon";

const Content = ({ service }) => {
  return (
    <>
      <NextSeo
        title="Negociación de tarifas"
        description="
        Con OnLegal podés pagar menos por tus servicios. Pedí tu renegociación online."
      />
      <div className={styles.hero}>
        <div className={styles.detail}>
          <Typography variant="h4" component="h1" className={styles.title}>
            {service.title}
          </Typography>
          <Typography
            variant="body1"
            component="h2"
            className={styles.description}
          >
            {service.description}
          </Typography>
          <Typography variant="body1" component="span">
            {service.note}
          </Typography>
          <div className={styles.price}>
            <Typography variant="body1" component="span" color="primary">
              {service.price.currency_code}
              {service.price.currency_symbol}
            </Typography>
            <Typography variant="h6" component="span" color="primary">
              {" " + service.price.amount}
            </Typography>
          </div>
          <Link
            href="https://api.whatsapp.com/send?phone=+5491123899865&text=%C2%A1Hola!%20Quiero%20conocer%20como%20funciona%20el%20producto%20de%20Negociaci%C3%B3n%20de%20Tarifas%20de%20Servicios"
            passHref
          >
            <Button
              variant="contained"
              color="primary"
              className={styles.button}
            >
              Iniciar asesoramiento gratuito <ArrowIcon />
            </Button>
          </Link>
        </div>
        <div className={styles.illustration}>
          <DocumentIllustration />
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <Typography
            variant="h5"
            component="span"
            color="primary"
            className={styles.title}
          >
            Obtené tu descuentos en 3 pasos
          </Typography>
          <span className={styles.steps}>
            <Typography
              variant="body2"
              component="span"
              className={styles.step}
            >
              1.{" "}
              <span className={styles.text}>
                Enviás el detalle de tu servicio
              </span>
            </Typography>

            <Typography
              variant="body2"
              component="span"
              className={styles.step}
            >
              2.{" "}
              <span className={styles.text}>
                Realizamos la negociacióncon tu proveedor de servicios
              </span>
            </Typography>
            <Typography
              variant="body2"
              component="span"
              className={styles.step}
            >
              3.{" "}
              <span className={styles.text}>
                Pagás solo si la negociación fue satisfactoria
              </span>
            </Typography>
          </span>
        </div>
        <div className={styles.content}>
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            className={styles.breadcrumbs}
          >
            <Link href="/" passHref>
              <MUILink color="inherit">Home</MUILink>
            </Link>
            <Typography color="textPrimary">Negociación de tarifas</Typography>
          </Breadcrumbs>
          <div className={styles.information}>
            <div className={styles.left}>
              <Typography variant="h5" component="h4" className={styles.title}>
                Lo que tenés que saber de Negociación de tarifas
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={styles.description}
              >
                {service.long_description}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={styles.description}
              >
                {service.long_description_2}
              </Typography>
              <div className={styles.faqs}>
                {service.faqs.map((faq, faqIndex) => (
                  <Accordion
                    className={styles.accordion}
                    key={`faq-${faqIndex}`}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      className={styles.accordionSummary}
                    >
                      <Typography>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles.accordionDetails}>
                      <Typography>{faq.answer}</Typography>
                      {faq.items && (
                        <ol className={styles.accordionItems}>
                          {faq.items.map((item, itemIndex) => (
                            <li key={`faq-item-${faqIndex}-${itemIndex}`}>
                              <Typography>{item}</Typography>
                            </li>
                          ))}
                        </ol>
                      )}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </div>
            <div className={styles.documentation}>
              <Typography variant="h5" component="h4" className={styles.title}>
                ¿Qué datos necesitás?
              </Typography>
              {service.documentation.map((group, groupIndex) => (
                <div className={styles.group} key={`group-${groupIndex}`}>
                  <Typography className={styles.groupTitle}>
                    {group.items_title}
                  </Typography>
                  {group.items.map((item, itemIndex) => (
                    <Typography key={`group-item-${groupIndex}-${itemIndex}`}>
                      <CheckIcon color="primary" />
                      {item}
                    </Typography>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cta}>
        <Typography className={styles.title} variant="h4" component="p">
          ¿Listo para pedir tu renegociación de tarifas?
        </Typography>
        <Link
          href="https://api.whatsapp.com/send?phone=+5491123899865&text=%C2%A1Hola!%20Quiero%20conocer%20como%20funciona%20el%20producto%20de%20Negociaci%C3%B3n%20de%20Tarifas%20de%20Servicios"
          passHref
        >
          <Button variant="contained" color="primary" className={styles.button}>
            Iniciar asesoramiento gratuito &rarr;
          </Button>
        </Link>
      </div>
    </>
  );
};
const rateRenegotiationScreen = ({ service }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Error404Screen />;
  }

  return <MainLayout Content={<Content service={service} />} />;
};

export default rateRenegotiationScreen;
