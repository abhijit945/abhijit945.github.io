import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DOMPurify from "dompurify";
import marked from "marked";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(theme => ({
  titleHeader: {
    display: "flex",
    padding: theme.spacing(1.5)
  },
  card: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(3),
    minWidth: 275
  }
}));

export default function MarkdownComponent(props) {
  const { title, markdownContent } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader title={title} />
      <CardContent>
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: marked(DOMPurify.sanitize(markdownContent))
          }}
        />
      </CardContent>
    </Card>
  );
}

MarkdownComponent.propTypes = {
  title: PropTypes.string.isRequired,
  markdownContent: PropTypes.string.isRequired
};
