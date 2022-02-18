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
import { DateTime } from "luxon";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import DocumentIllustration from "./documentIllustration";
import MainLayout from "../../../shared/layout/main/mainLayout";
import styles from "./documentDetailScreen.module.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccessTime from "@material-ui/icons/AccessTime";
import DescriptionIcon from "@material-ui/icons/Description";
import CheckIcon from "@material-ui/icons/Check";
import Error404Screen from "../../error/errorScreen";
import ArrowIcon from "../../../shared/icons/arrowIcon";

const Content = ({ contract }) => {
  return (
    <>
      <NextSeo
        title={`Creá tu ${contract.title.toLowerCase()} en minutos`}
        description="
        Con OnLegal podés crear y guardar documentos legales personalizados online. Completá los campos, pagá online y listo para descargar y firmar!"
      />
      <div className={styles.hero}>
        <div className={styles.detail}>
          <Typography variant="h4" component="h1" className={styles.title}>
            {contract.title}
          </Typography>
          <Typography
            variant="body1"
            component="h2"
            className={styles.description}
          >
            {contract.description}
          </Typography>
          <div className={styles.additionalData}>
            <Typography
              variant="body2"
              component="span"
              className={styles.updated}
            >
              <AccessTime />
              <span>Última actualización</span> en{" "}
              {DateTime.fromISO(contract.updated_at).toFormat("LLLL yyyy", {
                locale: "es",
              })}
            </Typography>
            <Typography
              variant="body2"
              component="span"
              className={styles.size}
            >
              <DescriptionIcon />
              <span>Tamaño: </span>
              {contract.sheets_number}
            </Typography>
          </div>
          {contract.price.list_amount && (
            <Typography
              variant="body2"
              component="div"
              className={styles.listPrice}
            >
              {contract.price.currency_code}
              {contract.price.currency_symbol}
              {" " + contract.price.list_amount}
            </Typography>
          )}
          <div className={styles.price}>
            <Typography variant="body1" component="span" color="primary">
              {contract.price.currency_code}
              {contract.price.currency_symbol}
            </Typography>
            <Typography variant="h6" component="span" color="primary">
              {" " + contract.price.amount}
            </Typography>
          </div>
          <Link href={`/crear-contrato/${contract.slug}`} passHref>
            <Button
              variant="contained"
              color="primary"
              className={styles.button}
            >
              Crear documento <ArrowIcon />
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
            Creá el contrato en 3 pasos
          </Typography>
          <span className={styles.steps}>
            <Typography
              variant="body2"
              component="span"
              className={styles.step}
            >
              1. <span className={styles.text}>Elegí el documento</span>
            </Typography>

            <Typography
              variant="body2"
              component="span"
              className={styles.step}
            >
              2. <span className={styles.text}>Completá el formulario</span>
            </Typography>
            <Typography
              variant="body2"
              component="span"
              className={styles.step}
            >
              3.{" "}
              <span className={styles.text}>Pagás y en 24 horas lo tenés</span>
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
            <Link href="/documentos" passHref>
              <MUILink color="inherit">Documentos</MUILink>
            </Link>
            <Typography color="textPrimary">{contract.title}</Typography>
          </Breadcrumbs>
          <div className={styles.information}>
            <div className={styles.left}>
              <Typography variant="h5" component="h4" className={styles.title}>
                Lo que tenés que saber del {contract.title}
              </Typography>
              <Typography variant="body1" component="p">
                {contract.long_description}
              </Typography>
              <div className={styles.faqs}>
                {contract.faqs.map((faq, faqIndex) => (
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
              {contract.documentation.map((group, groupIndex) => (
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
          ¿Listo para crear tu {contract.title}?
        </Typography>
        <Link href={`/crear-contrato/${contract.slug}`} passHref>
          <Button variant="contained" color="primary" className={styles.button}>
            Empezar <ArrowIcon />
          </Button>
        </Link>
      </div>
    </>
  );
};
const DocumentDetailScreen = ({ contract }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Error404Screen />;
  }

  return <MainLayout Content={<Content contract={contract} />} />;
};

export default DocumentDetailScreen;
