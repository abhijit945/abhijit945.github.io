import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import marked from "marked";
import AppBar from "@material-ui/core/AppBar";
import DOMPurify from "dompurify";

const useStyles = makeStyles(theme => ({
  appBarHeader: {
    top: theme.spacing(7),
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(0.5)
  },
  card: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    minWidth: 275
  }
}));

export default function MarkdownComponent(props) {
  const { title, markdownContent } = props;
  const classes = useStyles();
  return (
    <>
      <AppBar
        className={classes.appBarHeader}
        key="header"
        position="sticky"
        color="inherit"
      >
        <Typography variant="h6" color="textSecondary">
          {title}
        </Typography>
      </AppBar>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: marked(DOMPurify.sanitize(markdownContent))
            }}
          />
        </CardContent>
      </Card>
    </>
  );
}

MarkdownComponent.propTypes = {
  title: PropTypes.string.isRequired,
  markdownContent: PropTypes.string.isRequired
};
