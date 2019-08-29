import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Blog from "./components/MainPage";
import BackToTop from "./components/Header";
import Avatar from "./components/Avatar";

function App() {
  return (
    <Button variant="contained" color="secondary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<Avatar />, document.querySelector("#root"));
