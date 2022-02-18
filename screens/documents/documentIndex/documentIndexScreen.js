import { useState } from "react";
import Link from "next/link";
import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  FormControl,
  Select,
  MenuItem,
  Link as MUILink,
} from "@material-ui/core";
import classNames from "classnames";
import { NextSeo } from "next-seo";
import MainLayout from "../../../shared/layout/main/mainLayout";
import styles from "./documentIndexScreen.module.scss";
import ArrowIcon from "../../../shared/icons/arrowIcon";

const Content = ({ categories }) => {
  const [howItWorksDialogOpen, setHowItWorksDialogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]?.slug);

  const handleDialogClose = () => {
    setHowItWorksDialogOpen(false);
  };
  const handleDialogOpen = () => {
    setHowItWorksDialogOpen(true);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category.target ? category.target.value : category);
  };

  return (
    <>
      <NextSeo
        title={`Documentos legales personalizados`}
        description="
        Con OnLegal podés crear y guardar documentos legales personalizados online. Completá los campos, pagá online y listo para descargar y firmar!"
      />
      <div className={styles.hero}>
        <Typography component="h1" variant="h4" className={styles.title}>
          Encontrá tu documento
        </Typography>
        <Typography component="h2" variant="body1" className={styles.subtitle}>
          La forma más fácil de tener el documento que buscabas
        </Typography>
        <Typography
          component="h3"
          variant="subtitle2"
          onClick={handleDialogOpen}
          className={styles.howItWorks}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="9" r="9" fill="#322AAB" />
            <path d="M13 9L7 12.4641L7 5.5359L13 9Z" fill="white" />
          </svg>
          ¿Cómo funciona?
        </Typography>
        <Dialog
          open={howItWorksDialogOpen}
          onClose={handleDialogClose}
          aria-labelledby="how-it-works-title"
        >
          <DialogTitle id="how-it-works-title">
            {"¿Cómo funciona OnLegal?"}
          </DialogTitle>
          <DialogContent>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/gkhIwqji1wg?rel=0"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className={styles.content}>
        <div className={styles.categorySelector}>
          <Typography variant="h6" className={styles.title}>
            Elegí el area legal
          </Typography>
          <div className={styles.mobileSelector}>
            <FormControl variant="outlined" className={styles.formControl}>
              <Select value={activeCategory} onChange={handleCategoryChange}>
                {categories.map((category) => (
                  <MenuItem key={category.slug} value={category.slug}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <ul className={styles.desktopSelector}>
            {categories.map((category) => (
              <li
                key={category.slug}
                onClick={() => handleCategoryChange(category.slug)}
              >
                <Typography
                  variant="body1"
                  className={classNames(
                    activeCategory === category.slug
                      ? styles.active
                      : styles.nonActive,
                    styles.category
                  )}
                >
                  {category.name}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contractList}>
          {categories.map((category) => (
            <div
              key={category.slug}
              className={
                activeCategory === category.slug ? styles.show : styles.hide
              }
            >
              <Typography variant="h6" className={styles.title}>
                {category.name}
              </Typography>
              {/* <Typography variant="body1">{category.description}</Typography> */}

              <ul className={styles.contracts}>
                {category.contracts.map((contract) => (
                  <li key={contract.slug} className={styles.contractItem}>
                    <Link href={`/documentos/${contract.slug}`} passHref>
                      <MUILink color="inherit">
                        <Typography
                          variant="subtitle1"
                          className={styles.contractTitle}
                        >
                          {contract.name}
                        </Typography>
                      </MUILink>
                    </Link>
                    <Typography
                      variant="body1"
                      className={styles.contractDescription}
                    >
                      {contract.description}
                    </Typography>
                    <div className={styles.contractButtonContainer}>
                      <Link href={`/documentos/${contract.slug}`} passHref>
                        <Button
                          variant="contained"
                          color="primary"
                          className={styles.contractButton}
                        >
                          Acceder <ArrowIcon />
                        </Button>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
const DocumentIndexScreen = ({ categories }) => {
  return <MainLayout Content={<Content categories={categories} />} />;
};

export default DocumentIndexScreen;
