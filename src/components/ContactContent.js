import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import MyAvatar from "./Avatar";
import getAvatarList from "../helpers/avatarList";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  headerContactRoot: {
    display: "flex",
    flexDirection: "row"
  },
  contactAvatar: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: theme.palette.primary.default,
    backgroundColor: theme.palette.secondary.main
  }
}));

export default function ContactContent() {
  const classes = useStyles();
  return (
    <Box className={classes.root} p={1}>
      <MyAvatar />
      <Box p={1} className={classes.headerContactRoot}>
        {getAvatarList().map(m => (
          <Avatar
            className={classes.contactAvatar}
            key={m.label}
            color="secondary"
            component="a"
            clickable="true"
            target="_blank"
            href={m.link}
          >
            {m.icon}
          </Avatar>
        ))}
      </Box>
    </Box>
  );
}
