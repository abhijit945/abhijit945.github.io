import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import getAvatarList from "../helpers/avatarList";

const useStyles = makeStyles(theme => ({
  cardRoot: {
    display: "flex",
    flexDirection: "column",
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
      target="_blank"
      label={label}
    />
  ) : (
    <Avatar
      className={classes.chipAvatar}
      key={label}
      color="secondary"
      component="a"
      clickable="true"
      target="_blank"
      href={link}
    >
      {avatar}
    </Avatar>
  );
};

export default function Contacts() {
  const classes = useStyles();
  return (
    <Box>
      {getAvatarList().map(m => getChip(classes, m.icon, m.link, m.label))}
    </Box>
  );
}
