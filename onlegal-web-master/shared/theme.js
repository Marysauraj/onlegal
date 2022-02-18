import { createMuiTheme } from "@material-ui/core/styles";

const base = "#e9ebee";
const blue = "#322aab";
const darkBlue = "#060028";
const grey = "#9aa4af";
const red = "#df4854";

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"],
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: blue,
    },
    secondary: {
      main: grey,
    },
    error: {
      main: red,
    },
    background: {
      default: base,
    },
  },
});

export default theme;
