import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import marked from "marked";
import DOMPurify from "dompurify";


const useStyles = makeStyles({
  card: {
    minWidth: 275,
  }
});

export default function Accomplishments() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h3" component="h2" color="textSecondary" gutterBottom>
          Accomplishments
        </Typography>
        <Typography variant="body2">
        </Typography>
      </CardContent>
    </Card>
  );
}
