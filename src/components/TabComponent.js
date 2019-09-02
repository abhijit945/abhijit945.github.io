import React, { useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import TabPanel, { a11yProps } from "./TabPanel";
import getContents from "../helpers/contentList";

const getIndex = (location, routeList) => {
  if (!location) {
    return 0;
  }
  return routeList.map(m => m.route).indexOf(location);
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: "100vw",
    marginTop: theme.spacing(11)
  },
  tab: {
    textTransform: "none"
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      maxWidth: theme.spacing(15),
      width: "100%",
      backgroundColor: theme.palette.secondary.main
    }
  },
  tabLabel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  tabDisplay: {
    paddingLeft: theme.spacing(1)
  }
}));

export default function TabComponent() {
  const classes = useStyles();
  const [value, setValue] = useState("/");

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BrowserRouter>
      <Route
        path="/"
        render={() => (
          <Box className={classes.root}>
            <Tabs
              TabIndicatorProps={{ children: <div /> }}
              value={value}
              classes={{ indicator: classes.indicator }}
              onChange={handleChange}
              variant="fullWidth"
              centered
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="Site options lists"
            >
              {getContents().map((t, i) => (
                <Tab
                  value={t.route}
                  component={Link}
                  to={t.route}
                  className={classes.tab}
                  key={t.display}
                  label={
                    <Box className={classes.tabLabel}>
                      <t.icon viewBox="0 0 24 24" />
                      <Box className={classes.tabDisplay}>{t.display}</Box>
                    </Box>
                  }
                  {...a11yProps(i)}
                />
              ))}
            </Tabs>
            <Switch>
              {getContents().map(t => (
                <Route
                  key={t.display}
                  path={t.route}
                  render={({ location }) => (
                    <TabPanel
                      value={location.pathname}
                      key={location.pathname}
                      index={location.pathname}
                    >
                      {getContents()[
                        getIndex(location.pathname, getContents())
                      ].content()}
                    </TabPanel>
                  )}
                />
              ))}
            </Switch>
          </Box>
        )}
      />
    </BrowserRouter>
  );
}
