import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2)
  }
}));

export default function TabPanel(props) {
  const classes = useStyles();
  const { children, value, index, ...other } = props;
  return (
    <Typography
      className={classes.root}
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export const a11yProps = index => {
  return {
    id: `horizontal-tab-${index}`,
    "aria-controls": `horizontal-tabpanel-${index}`
  };
};
