import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "./Avatar";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center"
  }
}));

export default function Headers() {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.root}>
        <Avatar />
      </Toolbar>
    </AppBar>
  );
}
