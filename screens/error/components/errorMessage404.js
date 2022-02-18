import Link from "next/link";
import { Typography, Button } from "@material-ui/core";
import styles from "./errorMessage404.module.scss";
import PropTypes from "prop-types";
import { NextSeo } from "next-seo";

const ErrorMessage404 = ({ showHomeButton = true, title, message }) => {
  return (
    <div className={styles.container}>
      <NextSeo title="Página no encontrada" />
      <svg
        width="174"
        height="120"
        viewBox="0 0 174 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          opacity="0.2"
          cx="80.7028"
          cy="107.585"
          rx="78.0231"
          ry="8.72308"
          fill="#E2E2E2"
        />
        <circle
          r="2.90769"
          transform="matrix(-1 0 0 1 146.126 19.3846)"
          fill="#E2E2E2"
        />
        <circle
          r="2.90769"
          transform="matrix(-1 0 0 1 25.9409 6.78465)"
          fill="#E2E2E2"
        />
        <path
          d="M3.66162 39.7384L8.3686 47.8911M1.93875 46.1683L10.0915 41.4613"
          stroke="#E2E2E2"
          strokeWidth="2.90769"
          strokeLinecap="round"
        />
        <path
          d="M92.8301 1.93848L97.5371 10.0912M91.1072 8.36833L99.2599 3.66135"
          stroke="#E2E2E2"
          strokeWidth="2.90769"
          strokeLinecap="round"
        />
        <path
          d="M160.449 58.1539L165.156 66.3067M158.726 64.5838L166.879 59.8768"
          stroke="#E2E2E2"
          strokeWidth="2.90769"
          strokeLinecap="round"
        />
        <path
          d="M39.4262 69.2977H128.347C133.683 69.2977 138.009 65.0431 138.009 59.7946V35.503C138.009 30.2545 133.683 26 128.347 26H39.4262C34.0901 26 29.7646 30.2545 29.7646 35.503V59.7946C29.7646 65.0431 34.0901 69.2977 39.4262 69.2977Z"
          fill="#8595F9"
        />
        <path
          opacity="0.5"
          d="M134.328 106.934L33.6384 107.183C31.6012 107.188 29.9466 105.554 29.9415 103.533L29.7647 36.6191C29.7596 34.6045 31.3967 32.9656 33.4276 32.9519L63 32.7652C64.1842 32.7577 65.3006 33.314 66.0006 34.2622L69.1643 38.5491C69.8605 39.4923 70.9707 40.0498 72.1499 40.0461L134.153 39.8894C136.19 39.8844 137.844 41.5183 137.849 43.5391L138.009 103.267C138.013 105.288 136.365 106.929 134.328 106.934Z"
          fill="#C7C7C7"
        />
        <path
          d="M134.313 111.242H33.4587C31.4182 111.242 29.7646 109.603 29.7646 107.58V40.6047C29.7646 38.5882 31.4094 36.9515 33.4436 36.9428L61.5296 36.8245C62.7157 36.8195 63.8327 37.38 64.5313 38.3303L67.6901 42.6287C68.3849 43.5753 69.4957 44.1345 70.6768 44.1345H134.315C136.355 44.1345 138.009 45.7736 138.009 47.7964V107.579C138.008 109.602 136.353 111.242 134.313 111.242Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M113.121 102.223L110.399 104.766L95.9443 89.6409L98.6664 87.0978L113.121 102.223Z"
          fill="#322AAB"
        />
        <path
          opacity="0.6"
          d="M85.7743 93.3123C95.2259 93.3123 102.888 85.6503 102.888 76.1986C102.888 66.747 95.2259 59.085 85.7743 59.085C76.3227 59.085 68.6606 66.747 68.6606 76.1986C68.6606 85.6503 76.3227 93.3123 85.7743 93.3123Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M75.4829 74.9605C75.8087 77.3389 75.0397 79.4082 73.7657 79.5825C72.4916 79.7569 71.1947 77.9703 70.8692 75.5923C70.5434 73.2142 71.3124 71.1446 72.5864 70.9702C73.8604 70.7959 75.1571 72.5821 75.4829 74.9605Z"
          fill="white"
        />
        <path
          d="M103.811 76.1933C103.811 81.0213 101.891 85.8371 98.0939 89.3852C90.8226 96.1774 79.3811 95.7885 72.5888 88.5178C69.2987 84.9954 67.5769 80.3988 67.7401 75.5857C67.9036 70.7686 69.9336 66.3036 73.4556 63.0129C76.9779 59.7223 81.5702 58.0004 86.3876 58.1645C91.2051 58.3281 95.6701 60.358 98.9607 63.8797C102.205 67.3531 103.811 71.7785 103.811 76.1933ZM69.5923 76.2128C69.5923 80.3263 71.128 84.2253 73.9502 87.2462C80.041 93.7666 90.3017 94.1153 96.8221 88.0238C103.342 81.933 103.69 71.6717 97.5997 65.1519C94.649 61.9932 90.6445 60.1728 86.3248 60.026C82.005 59.8793 77.8862 61.4236 74.7278 64.3743C71.569 67.3253 69.7487 71.3295 69.6019 75.6492C69.5954 75.8375 69.5923 76.0252 69.5923 76.2128Z"
          fill="#322AAB"
        />
        <path
          d="M118.233 110.51C116.8 111.849 114.553 111.772 113.214 110.339L102.669 99.0525C101.331 97.6196 101.407 95.3725 102.84 94.0338C104.273 92.695 106.52 92.7715 107.859 94.2044L118.404 105.491C119.742 106.924 119.666 109.171 118.233 110.51Z"
          fill="#322AAB"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="83.8867"
            y1="36.8245"
            x2="74.4219"
            y2="123.393"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F7F7FB" />
            <stop offset="1" stopColor="#DADBE5" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="69.0595"
            y1="71.381"
            x2="99.2949"
            y2="80.0956"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C9F7FF" />
            <stop offset="1" stopColor="#A9D5DE" />
          </linearGradient>
        </defs>
      </svg>

      {title || (
        <Typography component="h3" variant="h5" className={styles.title}>
          Página no encontrada
        </Typography>
      )}
      {message || (
        <Typography
          component="h4"
          variant="subtitle1"
          className={styles.subtitle}
        >
          ¡Lo sentimos! Parece que no podemos encontrar lo que estás buscando
        </Typography>
      )}
      {showHomeButton && (
        <Link href="/" passhref>
          <Button
            variant="contained"
            color="primary"
            style={{ borderRadius: "0" }}
          >
            Ir al inicio
          </Button>
        </Link>
      )}
    </div>
  );
};

ErrorMessage404.propTypes = {
  showHomeButton: PropTypes.bool,
  title: PropTypes.element,
  message: PropTypes.element,
};

export default ErrorMessage404;
