import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import HomeIcon from "@material-ui/icons/Home";
import ComputerIcon from "@material-ui/icons/Computer";
import DescriptionIcon from "@material-ui/icons/Description";
import InfoIcon from "@material-ui/icons/Info";
import Tab from "@material-ui/core/Tab";
import TabPanel, { a11yProps } from "./TabPanel";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: "100vw",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function MainPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="Site options lists"
        className={classes.tabs}
      >
        <Tab icon={<HomeIcon />} label="Home" {...a11yProps(0)} />
        <Tab icon={<ComputerIcon />} label="Projects" {...a11yProps(1)} />
        <Tab icon={<DescriptionIcon />} label="Resume" {...a11yProps(2)} />
        <Tab icon={<InfoIcon />} label="Contact" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Home
      </TabPanel>
      <TabPanel value={value} index={1}>
        Projects
      </TabPanel>
      <TabPanel value={value} index={2}>
        Resume
      </TabPanel>
      <TabPanel value={value} index={3}>
        Contact
      </TabPanel>
    </div>
  );
}
