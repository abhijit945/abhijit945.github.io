import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainPage from "./components/MainPage";
import BackToTop from "./components/BackToTop";
import theme from "./helpers/themeHelper";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <BackToTop />
        <CssBaseline />
        <MainPage />
      </React.Fragment>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
