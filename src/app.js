import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TabComponent from "./components/TabComponent";
import HideOnScroll from "./components/HideOnScroll";
import ContactContent from "./components/ContactContent";
import BackToTop from "./components/BackToTop";
import getTheme from "./helpers/themeHelper";

function App() {
  const [currentMode, setCurrentMode] = useState("light");
  const [currentTheme, setCurrentTheme] = useState(getTheme(currentMode));

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <BackToTop />
      <HideOnScroll>
        <ContactContent
          setCurrentTheme={setCurrentTheme}
          currentMode={currentMode}
          setCurrentMode={setCurrentMode}
        />
      </HideOnScroll>
      <TabComponent />
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
