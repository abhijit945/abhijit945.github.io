import React, { useState } from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import Contacts from "../components/Contacts";
import ContactContent from "../components/ContactContent";

const useStyles = makeStyles(theme => ({
  boxRoot: {
    display: "flex",
    justifyContent: "center"
  },
  cardRoot: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    minWidth: 275,
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column"
    },
    alignItems: "start",
    justifyContent: "center"
  }
}));

export default function HomePage() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Box p={3}>
      <Card>
        <ContactContent />
        <CardContent className={classes.cardRoot}>
          <Typography
            variant="h5"
            component="h2"
            color="textSecondary"
            gutterBottom
          >
            About
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Hi! I am Abhijit Rao. Software engineer, Full-stack developer,
            Front-end/Web developer by profession.
            <br />
            <br />I did my study in Computer Science from University of Texas at
            Dallas. I like to research new framework and apply/improve design
            into my current projects. This website is built entirely using
            React, React DOM, React Router and Material-UI. It is designed to be
            minimal and concise. <br />I like to do week-end projects involving
            React, D3, cool JavaScript libraries. When I am not coding, you can
            usually find me playing video games such as CS:GO or reading any
            cool fiction novel.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            size="small"
          >
            Learn More
          </Button>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body1" component="p" gutterBottom>
              You can reach me using any of the following links:
            </Typography>
            <Contacts />
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}
