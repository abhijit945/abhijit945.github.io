import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TabComponent from "./components/TabComponent";
import HideOnScroll from "./components/HideOnScroll";
import ContactContent from "./components/ContactContent";
import BackToTop from "./components/BackToTop";
import theme from "./helpers/themeHelper";

function App() {
  const [currentTheme, setCurrentTheme] = useState(theme);
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
        <BackToTop />
        <HideOnScroll>
          <ContactContent setCurrentTheme={setCurrentTheme}/>
        </HideOnScroll>
        <TabComponent />
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
