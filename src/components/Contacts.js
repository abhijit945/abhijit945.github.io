import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LanguageIcon from '@material-ui/icons/Language';
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
    margin: theme.spacing(1),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const getChip = (classes, avatar, link, label) => {
  return (
    <Chip
      className={classes.chipRoot}
      color="secondary"
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
        <Typography
          variant="h5"
          component="h2"
          color="textSecondary"
          gutterBottom
        >
          Contact
        </Typography>
        {getChip(
          classes,
          <AlternateEmailIcon />,
          "mailto:abhijit945@gmail.com",
          "abhijit945@gmail.com"
        )}
        {getChip(
          classes,
          <LanguageIcon />,
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