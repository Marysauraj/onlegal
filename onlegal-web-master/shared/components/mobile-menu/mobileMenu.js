import React, { useState } from "react";
import Image from "next/image";
import Drawer from "@material-ui/core/Drawer";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link as MUILink } from "@material-ui/core";
import Link from "next/link";
import styles from "./mobileMenu.module.scss";

const MobileMenu = () => {
  const [isDrawerOpen, setDraweOpen] = useState(false);
  const openDrawer = () => setDraweOpen(true);
  const closeDrawer = () => setDraweOpen(false);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link passHref href="/">
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
        <IconButton
          aria-label="open menu"
          onClick={openDrawer}
          className={styles.button}
        >
          <MenuIcon />
        </IconButton>
      </header>
      <Drawer
        open={isDrawerOpen}
        anchor="top"
        onClose={() => setDraweOpen(false)}
      >
        <div className={styles.drawer}>
          <div className={styles.header}>
            <span className={styles.logo}>
              <Image
                src="/logo-inverted.png"
                alt="OnLegal logo"
                width="421"
                height="108"
              />
            </span>
            <IconButton
              aria-label="close menu"
              onClick={closeDrawer}
              className={styles.button}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <ul className={styles.container}>
            <li className={styles.item}>
              <Link passHref href="/documentos">
                <MUILink variant="body1" color="inherit">
                  Documentos
                </MUILink>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/marcas" passHref>
                <MUILink variant="body1" color="inherit">
                  Registro de Marcas
                </MUILink>
              </Link>
            </li>
            <li className={styles.item}>
              <Link passHref href="/negociacion">
                <MUILink variant="body1" color="inherit">
                  Negociación de Tarifas
                </MUILink>
              </Link>
            </li>
            <li className={styles.item}>
              <Link passHref href="/acerca">
                <MUILink variant="body1" color="inherit">
                  Acerca de
                </MUILink>
              </Link>
            </li>
            <li className={styles.item}>
              <Link passHref href="/contacto">
                <MUILink variant="body1" color="inherit">
                  Contacto
                </MUILink>
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
