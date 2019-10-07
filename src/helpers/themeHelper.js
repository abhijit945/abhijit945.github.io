import { createMuiTheme } from "@material-ui/core/styles";
import {
  red,
  blue,
  amber,
  blueGrey,
  deepOrange,
  deepPurple,
  green,
  indigo,
  grey,
  lightBlue,
  lightGreen,
  orange,
  pink,
  purple,
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
        main: "#f44336"
      },
      type: mode
    }
  });
const customThemeColors = [
  amber,
  red,
  blue,
  blueGrey,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  orange,
  pink,
  purple,
  teal,
  yellow
];
const generateNewRandomTheme = mode => {
  const primaryColor =
    customThemeColors[Math.floor(Math.random() * customThemeColors.length)];
  const secondaryColor =
    customThemeColors[Math.floor(Math.random() * customThemeColors.length)];

  return createMuiTheme({
    palette: {
      primary: primaryColor,
      secondary: secondaryColor,
      type: mode
    }
  });
};

const toggleMode = currentMode => (currentMode === "dark" ? "light" : "dark");

export { getTheme as default, generateNewRandomTheme, toggleMode };
