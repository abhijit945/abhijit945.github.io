import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import getAvatarList from "../helpers/avatarList";
import MyAvatar from "./Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignContent: "center",
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

export default function Headers() {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.root}>
        <MyAvatar />
        <Box p={2} className={classes.headerContactRoot}>
          {getAvatarList().map(m => (
            <Avatar
              className={classes.contactAvatar}
              key={m.label}
              color="secondary"
              component="a"
              clickable="true"
              href={m.link}
            >
              {m.icon}
            </Avatar>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
