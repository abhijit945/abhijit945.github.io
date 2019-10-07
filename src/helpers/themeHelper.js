import { createMuiTheme } from "@material-ui/core/styles";
import {
  red,
  blue,
  amber,
  blueGrey,
  common,
  deepOrange,
  deepPurple,
  green,
  indigo,
  grey,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  teal,
  yellow
} from "@material-ui/core/colors";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#1769aa"
    },
    secondary: {
      main: "#f44336"
    }
  }
});

const customThemeColors = [
  amber,
  red,
  blue,
  blueGrey,
  common,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  teal,
  yellow
];

export const generateNewRandomTheme = () => {
  const primaryColor =
    customThemeColors[Math.floor(Math.random() * customThemeColors.length)];
  const secondaryColor =
    customThemeColors[Math.floor(Math.random() * customThemeColors.length)];

  return createMuiTheme({
    palette: {
      primary: primaryColor,
      secondary: secondaryColor
    }
  });
};
