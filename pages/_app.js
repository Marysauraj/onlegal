import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import "../node_modules/reset.css";
import "../node_modules/nprogress/nprogress.css";
import "../shared/app.css";
import NProgress from "nprogress";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "styled-components";
import theme from "../shared/theme";
import getSEOConfig from "../shared/utils/seo.config";
import * as gtag from "../shared/utils/analyticsLib";
import LogRocket from "logrocket";

export default function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", (url) => {
    gtag.pageview(url);
    NProgress.configure({ showSpinner: false, parent: "body" });
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  React.useEffect(() => {
    // Remove the server-side injected CSS. Should be only one but there're two and the buttons are broken because o it
    // Original reference for this https://medium.com/javascript-in-plain-english/ssr-with-next-js-styled-components-and-material-ui-b1e88ac11dfa
    const jssStyles = document.querySelectorAll("#jss-server-side");
    if (jssStyles.length > 0) {
      jssStyles.forEach((elem) => elem.parentNode.removeChild(elem));
    }

    const logRocketId = process.env.NEXT_PUBLIC_LOG_ROCKET_APP_ID;
    if (logRocketId) {
      LogRocket.init(logRocketId);
    }
  }, []);

  const SEOConfig = getSEOConfig();

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <DefaultSeo {...SEOConfig} />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
