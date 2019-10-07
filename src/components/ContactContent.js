import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import ColorLensRoundedIcon from "@material-ui/icons/ColorLensRounded";
import MyAvatar from "./Avatar";
import { generateNewRandomTheme } from "../helpers/themeHelper";
import getAvatarList from "../helpers/avatarList";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main
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

export default function ContactContent({ setCurrentTheme }) {
  const classes = useStyles();
  function handleThemeChange() {
    setCurrentTheme(generateNewRandomTheme());
  }

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
        <Avatar
          className={classes.contactAvatar}
          key="mystery"
          color="secondary"
          clickable="true"
          onClick={handleThemeChange}
        >
          <Tooltip title="Spooky mystery button!!">
            <IconButton color="inherit" aria-label="Mystery">
              <ColorLensRoundedIcon />
            </IconButton>
          </Tooltip>
        </Avatar>
      </Box>
    </Box>
  );
}

ContactContent.propTypes = {
  setCurrentTheme: PropTypes.func.isRequired
};
