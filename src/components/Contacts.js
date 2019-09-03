import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import getAvatarList from "../helpers/avatarList";

const useStyles = makeStyles(theme => ({
  boxRoot: {
    display: "flex",
    justifyContent: "center"
  },
  cardRoot: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    minWidth: 275,
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column"
    },
    alignItems: "start",
    justifyContent: "center"
  },
  chipRoot: {
    margin: theme.spacing(1),
    fontWeight: theme.typography.fontWeightRegular
  },
  chipAvatar: {
    margin: theme.spacing(1),
    color: theme.palette.primary.default,
    backgroundColor: theme.palette.secondary.main
  }
}));

const getChip = (classes, avatar, link, label) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return matches ? (
    <Chip
      className={classes.chipRoot}
      key={label}
      color="secondary"
      icon={avatar}
      component="a"
      clickable
      href={link}
      label={label}
    />
  ) : (
    <Avatar
      className={classes.chipAvatar}
      key={label}
      color="secondary"
      component="a"
      clickable="true"
      href={link}
    >
      {avatar}
    </Avatar>
  );
};

export default function Contacts() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box className={classes.boxRoot}>
      <Card>
        <CardContent className={classes.cardRoot}>
          <Typography
            variant="h5"
            component="h2"
            hidden={!matches}
            color="textSecondary"
            gutterBottom
          >
            Contact
          </Typography>
          {getAvatarList().map(m => getChip(classes, m.icon, m.link, m.label))}
        </CardContent>
      </Card>
    </Box>
  );
}
