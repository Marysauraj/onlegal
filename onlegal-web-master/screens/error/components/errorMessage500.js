import { Typography, Button } from "@material-ui/core";
import styles from "./errorMessage500.module.scss";
import PropTypes from "prop-types";
import { NextSeo } from "next-seo";

const ErrorMessage500 = ({ retryLink }) => {
  const handleRetryClick = () => {
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <NextSeo title="Algo no funciona" />
      <svg
        width="174"
        height="120"
        viewBox="0 0 174 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          opacity="0.2"
          cx="79.6148"
          cy="106.975"
          rx="54.4146"
          ry="6.10257"
          fill="#E2E2E2"
        />
        <path
          d="M78.1539 9.42754C78.7496 7.52606 81.4406 7.52607 82.0363 9.42755L110.219 99.3969C110.63 100.707 109.651 102.039 108.278 102.039H51.9119C50.539 102.039 49.5604 100.707 49.9708 99.3969L78.1539 9.42754Z"
          fill="#8595F9"
        />
        <rect
          x="42"
          y="98.4678"
          width="74.9992"
          height="9.52371"
          rx="4.76185"
          fill="#99A7FE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M65.9089 48.2945L71.821 29.4213H88.2293L94.1414 48.2945H65.9089ZM55.0942 82.8181L61.0063 63.9449H99.044L104.956 82.8181H55.0942Z"
          fill="url(#paint0_linear)"
        />
        <circle
          r="2.90769"
          transform="matrix(-1 0 0 1 32.6309 13.8923)"
          fill="#E2E2E2"
        />
        <path
          d="M4.95361 61.3846L9.66059 69.5374M3.23074 67.8145L11.3835 63.1075"
          stroke="#E2E2E2"
          strokeWidth="2.90769"
          strokeLinecap="round"
        />
        <circle
          r="2.90769"
          transform="matrix(-1 0 0 1 112.108 30.0461)"
          fill="#E2E2E2"
        />
        <path
          d="M158.738 10.9846L163.445 19.1373M157.015 17.4145L165.168 12.7075"
          stroke="#E2E2E2"
          strokeWidth="2.90769"
          strokeLinecap="round"
        />
        <path
          d="M145.169 85.2924L149.876 93.4451M143.446 91.7222L151.599 87.0152"
          stroke="#E2E2E2"
          strokeWidth="2.90769"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="80.0251"
            y1="29.4213"
            x2="69.6219"
            y2="90.5072"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F7FAFB" />
            <stop offset="1" stopColor="#DADBE5" />
          </linearGradient>
        </defs>
      </svg>

      <Typography component="h3" variant="h5" className={styles.title}>
        Algo no funciona
      </Typography>
      <Typography
        component="h4"
        variant="subtitle1"
        className={styles.subtitle}
      >
        ¡Lo sentimos! Parece que tenemos problemas técnicos.
      </Typography>
      <Typography component="h4" variant="subtitle1" className={styles.message}>
        Intentá nuevamente, por favor.
      </Typography>
      {retryLink ? (
        <Button
          variant="contained"
          color="primary"
          href={retryLink}
          className={styles.button}
        >
          Reintentar
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={handleRetryClick}
          className={styles.button}
        >
          Reintentar
        </Button>
      )}
    </div>
  );
};

ErrorMessage500.propTypes = {
  retryLink: PropTypes.string,
};

export default ErrorMessage500;
