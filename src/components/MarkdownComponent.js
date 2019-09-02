import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import marked from "marked";
import DOMPurify from "dompurify";

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    minWidth: 275
  }
}));

export default function MarkdownComponent(props) {
  const { title, markdownContent } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: marked(DOMPurify.sanitize(markdownContent))
          }}
        ></Typography>
      </CardContent>
    </Card>
  );
}

MarkdownComponent.propTypes = {
  title: PropTypes.string.isRequired,
  markdownContent: PropTypes.string.isRequired
};
