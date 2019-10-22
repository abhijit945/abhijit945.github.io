import { createMuiTheme } from "@material-ui/core/styles";
import {
  blue,
  amber,
  deepPurple,
  indigo,
  grey,
  teal,
  yellow
} from "@material-ui/core/colors";

const getTheme = mode =>
  createMuiTheme({
    palette: {
      primary: {
        main: "#1769aa"
      },
      secondary: {
        main: "#00a152"
      },
      type: mode,
      typography: {
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ].join(",")
      }
    }
  });
const customThemeColors = [
  amber,
  blue,
  deepPurple,
  grey,
  indigo,
  teal,
  yellow
];
const generateNewRandomTheme = mode => {
  const primaryColor =
    customThemeColors[Math.floor(Math.random() * customThemeColors.length)];

  return createMuiTheme({
    palette: {
      primary: primaryColor,
      type: mode
    }
  });
};

const toggleMode = currentMode => (currentMode === "dark" ? "light" : "dark");

export { getTheme as default, generateNewRandomTheme, toggleMode };
