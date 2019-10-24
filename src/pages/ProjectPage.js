import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import {
  getGitHubUserData,
  graphQLQuery,
  parsePinnedRepositories,
  parseRepoLanguages
} from "../helpers/graphQLHelper";
import PinnedProjectCardComponent from "../components/PinnedProjectCardComponent";
import ProjectLanguagesCardComponent from "../components/ProjectLanguagesCardComponent";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  progress: {
    margin: theme.spacing(2)
  },
  card: {
    background: theme.palette.background.default,
    minWidth: 275,
    marginBottom: theme.spacing(2)
  },
  cardRoot: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"
  }
}));

function Highlights({ classes, isHidden, userData }) {
  return (
    <Card className={classes.card} hidden={isHidden}>
      <CardHeader title="Project Highlights" />
      <CardContent className={classes.cardRoot}>
        {parsePinnedRepositories(userData).map(p => (
          <PinnedProjectCardComponent
            name={p.node.name}
            key={p.node.name}
            description={p.node.description}
            url={p.node.url}
            lang={p.node.languages.nodes}
          />
        ))}
      </CardContent>
    </Card>
  );
}
Highlights.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  isHidden: PropTypes.bool.isRequired,
  userData: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.objectOf(PropTypes.any)
  ]).isRequired
};

function Languages({ classes, isHidden, userData }) {
  return (
    <Card className={classes.card} hidden={isHidden}>
      <CardHeader title="Languages Used" />
      <CardContent className={classes.cardRoot}>
        {parseRepoLanguages(userData).map(p => (
          <ProjectLanguagesCardComponent
            name={p.node.name}
            key={p.node.name}
            lang={p.node.languages.nodes}
          />
        ))}
      </CardContent>
    </Card>
  );
}
Languages.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  isHidden: PropTypes.bool.isRequired,
  userData: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.objectOf(PropTypes.any)
  ]).isRequired
};

export default function ProjectPage() {
  const classes = useStyles();
  useEffect(() => {
    document.title = "Abhijit Rao \u2022 Projects";
  });
  const [isLoading, setIsLoading] = React.useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getGitHubUserData(graphQLQuery).then(result => {
      setUserData(result.data);
      setIsLoading(false);
      setIsHidden(false);
    });
  }, []);

  return (
    <>
      <Container className={classes.root}>
        <Fade
          in={isLoading}
          style={{
            display: isLoading ? "block" : "none"
          }}
          unmountOnExit
        >
          <CircularProgress
            size={50}
            className={classes.progress}
            color="secondary"
          />
        </Fade>
      </Container>
      <Box>
        <Highlights classes={classes} isHidden={isHidden} userData={userData} />
        <Languages classes={classes} isHidden={isHidden} userData={userData} />
      </Box>
    </>
  );
}
