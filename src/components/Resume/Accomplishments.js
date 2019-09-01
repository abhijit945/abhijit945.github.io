import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  }
});

export default function Accomplishments() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          color="textSecondary"
          gutterBottom
        >
          Accomplishments
        </Typography>
        <Typography variant="body1" component="ul">
          <li>
            Awarded 4 times for performing Above and Beyond at <i>Cerner</i>
          </li>
          <li>
            Presented at a DevCon developer conference at <i>Cerner</i> , Kansas
            City
          </li>
          <li> Placed first in ShipIT Hackathon at Cerner in 2018 </li>
          <li>
            Written blogs for <i>Cerner</i> advertising about open source
            project I created
          </li>
          <li>
            Open sourced visualization library that <i>Cerner</i> widely uses
          </li>
        </Typography>
      </CardContent>
    </Card>
  );
}
