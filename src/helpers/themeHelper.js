import {
  amber,
  blue,
  deepPurple,
  grey,
  indigo,
  teal,
  yellow
} from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const fontTypography = {
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(",")
};

const getTheme = mode =>
  createMuiTheme({
    palette: {
      primary: {
        main: "#008fe0"
      },
      type: mode
    },
    typography: fontTypography
  });
const customThemeColors = [amber, blue, deepPurple, grey, indigo, teal, yellow];
const generateNewRandomTheme = mode => {
  const primaryColor =
    customThemeColors[Math.floor(Math.random() * customThemeColors.length)];
  return createMuiTheme({
    palette: {
      primary: primaryColor,
      type: mode
    },
    typography: fontTypography
  });
};

const toggleMode = currentMode => (currentMode === "dark" ? "light" : "dark");

export { getTheme as default, generateNewRandomTheme, toggleMode };
