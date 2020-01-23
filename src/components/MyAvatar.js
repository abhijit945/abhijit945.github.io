import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  avatar: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: 64,
    height: 64
  }
}));

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
