import { Typography } from "@material-ui/core";
import styles from "./summaryItem.module.scss";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import { useRouter } from "next/router";

const SummaryItem = ({ title, editLink, data }) => {
  const router = useRouter();

  const handleEditClick = () => {
    router.push(editLink);
  };

  return (
    <div className={styles.container}>
      <Typography component="h3" variant="h6" className={styles.title}>
        {title}
      </Typography>
      <Button
        color="primary"
        startIcon={<CreateIcon />}
        className={styles.edit}
        onClick={handleEditClick}
      >
        Editar
      </Button>
      {data.map((item, index) => (
        <Typography component="h4" variant="subtitle1" key={index}>
          {item.label}: {item.value}
        </Typography>
      ))}
    </div>
  );
};

export default SummaryItem;
