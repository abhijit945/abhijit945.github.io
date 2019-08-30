import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 32,
    height: 32
  }
});

export default function MyAvatar() {
  const classes = useStyles();

  return (
    <Avatar
        alt="Abhijit Rao"
        src="https://github.com/abhijit945.png?size=512"
        className={classes.avatar}
      />
  );
}
