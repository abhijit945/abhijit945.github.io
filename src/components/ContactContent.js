import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";
import Brightness7RoundedIcon from "@material-ui/icons/Brightness7Rounded";
import ColorLensRoundedIcon from "@material-ui/icons/ColorLensRounded";
import PropTypes from "prop-types";
import React, { useState } from "react";
import getAvatarList from "../helpers/avatarList";
import getTheme, {
  generateNewRandomTheme,
  toggleMode
} from "../helpers/themeHelper";
import MyAvatar from "./Avatar";

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

export default function ContactContent({
  setCurrentTheme,
  currentMode,
  setCurrentMode
}) {
  const classes = useStyles();
  const [mode, setMode] = useState(currentMode);
  function handleThemeChange() {
    setCurrentTheme(generateNewRandomTheme("light"));
  }

  function handleModeChange() {
    const toggledMode = toggleMode(currentMode);
    setCurrentMode(toggledMode);
    setCurrentTheme(getTheme(toggledMode));
    setMode(toggledMode);
  }

  return (
    <Box className={classes.root} p={1}>
      <MyAvatar />
      <Typography variant="h5" color="textPrimary" align="center">
        Software Engineer, Fullstack Developer, Frontend Developer
      </Typography>
      <Box p={2} className={classes.headerContactRoot}>
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
        <Avatar
          className={classes.contactAvatar}
          key="mode"
          color="secondary"
          clickable="true"
          onClick={handleModeChange}
        >
          <Tooltip title="Toggle light/dark theme">
            <IconButton color="inherit" aria-label="mode">
              {mode === "dark" ? (
                <Brightness7RoundedIcon />
              ) : (
                <Brightness4RoundedIcon />
              )}
            </IconButton>
          </Tooltip>
        </Avatar>
      </Box>
    </Box>
  );
}

ContactContent.propTypes = {
  setCurrentTheme: PropTypes.func.isRequired,
  currentMode: PropTypes.string.isRequired,
  setCurrentMode: PropTypes.func.isRequired
};
