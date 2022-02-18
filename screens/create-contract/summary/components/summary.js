import { Typography } from "@material-ui/core";
import SummaryItem from "./summaryItem";
import styles from "./summary.module.scss";

const Summary = ({
  observationsData,
  sections,
  documentId,
  documentTitle,
  priceComponent,
}) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <Typography variant="h5" component="h2">
        ¡Ya casi tenés listo tu {documentTitle.toLowerCase()}!
      </Typography>
      <Typography
        variant="subtitle1"
        component="h3"
        className={styles.subtitle}
      >
        Revisá los datos para confirmar que sean correctos y continuá con el
        pago.
      </Typography>
    </div>
    <SummaryItem
      title="Observaciones"
      data={observationsData}
      editLink={`/crear-contrato/observaciones?edit=true`}
    />
    {sections.map((item) => (
      <SummaryItem
        title={item.title}
        data={item.data}
        key={item.title}
        editLink={`/crear-contrato/${documentId}/${item.section_id}?edit=true`}
      />
    ))}
    <div className={styles.priceContainer}>{priceComponent}</div>
  </div>
);

export default Summary;
