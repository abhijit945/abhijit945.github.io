import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import HttpIcon from "@material-ui/icons/Http";
import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";

const useStyles = makeStyles(theme => ({
  cardRoot: {
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center"
  },
  chipRoot: {
    margin: theme.spacing(1)
  }
}));

const getChip = (classes, avatar, link, label) => {
  return (
    <Chip
      className={classes.chipRoot}
      color="primary"
      icon={avatar}
      variant="outlined"
      component="a"
      clickable
      href={link}
      label={label}
    />
  );
};
export default function Contacts() {
  const classes = useStyles();
  return (
    <Card>
      <CardContent className={classes.cardRoot}>
        {getChip(
          classes,
          <AlternateEmailIcon />,
          "mailto:abhijit945@gmail.com",
          "abhijit945@gmail.com"
        )}
        {getChip(
          classes,
          <HttpIcon />,
          "https://abhijit945.github.io",
          "https://abhijit945.github.io"
        )}
        {getChip(
          classes,
          <GitHubIcon />,
          "https://github.com/abhijit945",
          "https://github.com/abhijit945"
        )}
        {getChip(
          classes,
          <LinkedInIcon />,
          "https://www.linkedin.com/in/raoabhijit",
          "https://www.linkedin.com/in/raoabhijit"
        )}
      </CardContent>
    </Card>
  );
}
