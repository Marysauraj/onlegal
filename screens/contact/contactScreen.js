import { useState } from "react";
import { Typography, Link, Button, Collapse } from "@material-ui/core";
import MainLayout from "../../shared/layout/main/mainLayout";
import { NextSeo } from "next-seo";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";

import ContactFormSent from "./components/contactFormSent";
import {
  InputStyled,
  InputLabelStyled,
} from "../../shared/components/inputs/styled/inputStyled";
import { ErrorMessageStyled } from "../../shared/components/inputs/styled/errorStyled";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

import styles from "./contactScreen.module.scss";
import { useForm } from "react-hook-form";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { sendMessage } from "../../shared/services/communicationService";
import Alert from "@material-ui/lab/Alert";

const Contact = ({ country }) => {
  const [formSent, setFormSent] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [showFormError, setShowFormError] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      full_name: "",
      subject: "",
      email: "",
      message: "",
      country,
    },
  });

  const onSubmit = async (data) => {
    try {
      setShowFormError(false);

      if (!executeRecaptcha) {
        return;
      }
      const captcha = await executeRecaptcha("dynamicAction");
      data.re_captcha_token = captcha;

      const response = await sendMessage(data);
      if (response.success) {
        setFormSent(true);
      }
    } catch (error) {
      setShowFormError(true);
    }
  };

  return (
    <div>
      <NextSeo title="Contacto" />
      <div className={styles.hero}>
        <Typography variant="h3" component="h1" className={styles.title}>
          Estamos para ayudarte
        </Typography>
      </div>
      <div className={styles.content}>
        <div className={styles.links}>
          <Link href="mailto:info@onlegal.com.ar" className={styles.link}>
            <MailOutlineIcon />
            <Typography
              component="span"
              variant="body1"
              color="primary"
              className={styles.text}
            >
              info@onlegal.com.ar
            </Typography>
          </Link>
          <Link href="tel:1123984603" className={styles.link}>
            <PhoneInTalkOutlinedIcon />
            <Typography
              component="span"
              variant="body1"
              color="primary"
              className={styles.text}
            >
              11 2398 4603
            </Typography>
          </Link>
          <Link href="https://wa.me/message/NWEZLOATCCVSE1" className={styles.link}>
            <ChatOutlinedIcon />
            <Typography
              component="span"
              variant="body1"
              color="primary"
              className={styles.text}
            >
              Whatsapp
            </Typography>
          </Link>
        </div>
        <div className={styles.formContainer}>
          <Typography variant="h4" className={styles.title}>
            ¿Alguna consulta?
          </Typography>
          {formSent ? (
            <ContactFormSent />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className={styles.inputGroup}>
                <InputLabelStyled htmlFor="full_name">
                  Nombre completo
                </InputLabelStyled>
                <InputStyled
                  type="text"
                  name="full_name"
                  inputRef={register({
                    required: "Este campo es requerido",
                    maxLength: {
                      value: 100,
                      message: "La longitud máxima es de 100 caracteres",
                    },
                  })}
                  className={Boolean(errors.full_name) ? "error" : ""}
                />
                {errors.full_name && (
                  <ErrorMessageStyled>
                    {errors.full_name.message}
                  </ErrorMessageStyled>
                )}
              </div>
              <div className={styles.inputGroup}>
                <InputLabelStyled htmlFor="phone">Teléfono</InputLabelStyled>
                <InputStyled
                  type="number"
                  name="phone"
                  inputRef={register({
                    required: "Este campo es requerido",
                    maxLength: {
                      value: 15,
                      message: "La longitud máxima es de 15 caracteres",
                    },
                  })}
                  className={Boolean(errors.phone) ? "error" : ""}
                />
                {errors.phone && (
                  <ErrorMessageStyled>
                    {errors.phone.message}
                  </ErrorMessageStyled>
                )}
              </div>
              <div className={styles.inputGroup}>
                <InputLabelStyled htmlFor="email">Email</InputLabelStyled>
                <InputStyled
                  type="email"
                  name="email"
                  inputRef={register({
                    required: "Este campo es requerido",
                    maxLength: {
                      value: 100,
                      message: "La longitud máxima es de 100 caracteres",
                    },
                    pattern: {
                      value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                      message: "Formato de email inválido",
                    },
                  })}
                  className={Boolean(errors.email) ? "error" : ""}
                />
                {errors.email && (
                  <ErrorMessageStyled>
                    {errors.email.message}
                  </ErrorMessageStyled>
                )}
              </div>
              <div className={styles.inputGroup}>
                <InputLabelStyled htmlFor="subject">
                  ¿En qué te podemos ayudar?
                </InputLabelStyled>
                <InputStyled
                  type="text"
                  name="subject"
                  inputRef={register({
                    required: "Este campo es requerido",
                    maxLength: {
                      value: 100,
                      message: "La longitud máxima es de 100 caracteres",
                    },
                  })}
                  className={Boolean(errors.subject) ? "error" : ""}
                />
                {errors.subject && (
                  <ErrorMessageStyled>
                    {errors.subject.message}
                  </ErrorMessageStyled>
                )}
              </div>
              <div className={styles.inputGroup}>
                <InputLabelStyled htmlFor="message">Mensaje</InputLabelStyled>
                <InputStyled
                  type="text"
                  name="message"
                  multiline
                  rows={4}
                  inputRef={register({
                    required: "Este campo es requerido",
                    maxLength: {
                      value: 1000,
                      message: "La longitud máxima es de 1000 caracteres",
                    },
                  })}
                  className={Boolean(errors.message) ? "error" : ""}
                />
                {errors.message && (
                  <ErrorMessageStyled>
                    {errors.message.message}
                  </ErrorMessageStyled>
                )}
              </div>

              <input type="hidden" ref={register} name="country" />

              <Collapse in={showFormError}>
                <div className={styles.formError}>
                  <Alert severity="error">
                    El formulario no pudo ser enviado. <br /> Por favor, intenta
                    de nuevo o prueba con otro medio de contacto.
                  </Alert>
                </div>
              </Collapse>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                endIcon={<ArrowRightAltIcon />}
              >
                Enviar mensaje
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const ContactScreen = ({ country }) => {
  return (
    <MainLayout
      Content={
        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
          language="es-419"
        >
          <Contact country={country} />
        </GoogleReCaptchaProvider>
      }
    />
  );
};

export default ContactScreen;
