import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2),
    minWidth: 275
  },
  chipRoot: {
    marginRight: theme.spacing(1)
  }
}));

export default function PinnedProjectCardComponent(props) {
  const { name, description, url, lang } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Link
          variant="h5"
          to={url}
          href={url}
          target="_blank"
          rel="noreferrer"
          color="primary"
          component="a"
        >
          {name}
        </Link>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
        <Box p={2}>
          {lang.map(l => (
            <Chip
              size="small"
              variant="outlined"
              className={classes.chipRoot}
              key={l.name}
              color="secondary"
              component="div"
              label={l.name}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

PinnedProjectCardComponent.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  lang: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  description: PropTypes.string.isRequired
};
