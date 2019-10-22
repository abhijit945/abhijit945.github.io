import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import ColorLensRoundedIcon from "@material-ui/icons/ColorLensRounded";
import InvertColorsRoundedIcon from "@material-ui/icons/InvertColorsRounded";
import Paper from "@material-ui/core/Paper";
import MyAvatar from "./Avatar";
import getTheme, {
  generateNewRandomTheme,
  toggleMode
} from "../helpers/themeHelper";
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

export default function ContactContent({
  setCurrentTheme,
  currentMode,
  setCurrentMode
}) {
  const classes = useStyles();

  function handleThemeChange() {
    setCurrentTheme(generateNewRandomTheme("light"));
  }

  function handleModeChange() {
    const toggledMode = toggleMode(currentMode);
    setCurrentMode(toggledMode);
    setCurrentTheme(getTheme(toggledMode));
  }

  return (
    <Paper className={classes.root} p={1}>
      <MyAvatar />
      <Typography variant="h5" color="textSecondary" gutterBottom>
        Software engineer, fullstack developer, frontend developer
      </Typography>
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
        <Avatar
          className={classes.contactAvatar}
          key="mode"
          color="secondary"
          clickable="true"
          onClick={handleModeChange}
        >
          <Tooltip title="Change mode">
            <IconButton color="inherit" aria-label="mode">
              <InvertColorsRoundedIcon />
            </IconButton>
          </Tooltip>
        </Avatar>
      </Box>
    </Paper>
  );
}

ContactContent.propTypes = {
  setCurrentTheme: PropTypes.func.isRequired,
  currentMode: PropTypes.string.isRequired,
  setCurrentMode: PropTypes.func.isRequired
};
