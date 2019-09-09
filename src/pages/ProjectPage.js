import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import {
  getGitHubUserData,
  graphQLQuery,
  parsePinnedRepos,
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
  cardRoot: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
}));

export default function ProjectPage() {
  const classes = useStyles();
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
    <Box p={3}>
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
      <Box hidden={isHidden}>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Project Highlights
        </Typography>
        <Box className={classes.cardRoot}>
          {parsePinnedRepos(userData).map(p => (
            <PinnedProjectCardComponent
              name={p.node.name}
              key={p.node.name}
              description={p.node.description}
              url={p.node.url}
              lang={p.node.languages.nodes}
            />
          ))}
        </Box>
      </Box>
      <Divider hidden={isHidden} />
      <Box p={2} hidden={isHidden}>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Languages Used
        </Typography>
        <Box className={classes.cardRoot}>
          {parseRepoLanguages(userData).map(p => (
            <ProjectLanguagesCardComponent
              name={p.node.name}
              key={p.node.name}
              lang={p.node.languages.nodes}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
