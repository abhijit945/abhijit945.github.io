import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import getContents from "../helpers/contentList";
import TabPanel, { a11yProps } from "./TabPanel";

const getIndex = (location, routeList) => {
  if (!location) {
    return 0;
  }
  return routeList.map(m => m.route).indexOf(location);
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: "100vw"
  },
  tab: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
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

  return (
    <HashRouter>
      <Route
        path="/"
        render={({ location }) => (
          <>
            <AppBar position="sticky" key="appbar" className={classes.root}>
              <Tabs
                value={location.pathname}
                centered
                indicatorColor="secondary"
                textColor="inherit"
                aria-label="Site options lists"
              >
                {getContents().map((t, i) => (
                  <Tab
                    value={t.route}
                    component={Link}
                    to={t.route}
                    className={classes.tab}
                    key={t.display}
                    wrapped
                    icon={<t.icon />}
                    label={t.display}
                    {...a11yProps(i)}
                  />
                ))}
              </Tabs>
            </AppBar>
            <Switch>
              {getContents().map(t => (
                <Route
                  key={t.display}
                  path={t.route}
                  render={hash => (
                    <TabPanel
                      value={hash.location.pathname}
                      key={hash.location.pathname}
                      index={hash.location.pathname}
                    >
                      {getContents()[
                        getIndex(hash.location.pathname, getContents())
                      ].content()}
                    </TabPanel>
                  )}
                />
              ))}
            </Switch>
          </>
        )}
      />
    </HashRouter>
  );
}
