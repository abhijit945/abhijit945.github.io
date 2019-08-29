import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 128,
    height: 128
  }
});

export default function MyAvatar() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar
        alt="Abhijit Rao"
        src="https://github.com/abhijit945.png?size=512"
        className={classes.avatar}
      />
    </Grid>
  );
}
