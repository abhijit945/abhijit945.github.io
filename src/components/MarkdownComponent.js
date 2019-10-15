import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import marked from "marked";
import Paper from "@material-ui/core/Paper";
import DOMPurify from "dompurify";

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
    <>
      <Paper className={classes.titleHeader}>
        <Typography variant="h6" color="primary">
          {title}
        </Typography>
      </Paper>
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
