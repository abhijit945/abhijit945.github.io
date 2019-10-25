import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MarkdownComponent from "../components/MarkdownComponent";
import AboutDoc from "./docs/About.md";
import HighlightsDoc from "./docs/Highlights.md";

const useStyles = makeStyles(theme => ({
  footerRoot: {
    display: "flex",
    color: theme.palette.text.secondary
  }
}));

export default function HomePage() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Abhijit Rao \u2022 Home";
  });
  return (
    <>
      <MarkdownComponent title="About me" markdownContent={AboutDoc} />
      <MarkdownComponent title="Highlights" markdownContent={HighlightsDoc} />
      <footer className={classes.footerRoot}>
        <p>
          This website is built entirely using <i>React</i>, <i>React DOM</i>,{" "}
          <i>React Router</i> and <i>Material-UI</i>. It is designed to be
          minimal and concise.
        </p>
      </footer>
    </>
  );
}
