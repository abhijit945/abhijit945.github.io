import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  avatar: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: 128,
    height: 128
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
