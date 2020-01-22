import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import StarsRoundedIcon from "@material-ui/icons/StarsRounded";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 16,
    height: 16
  },
  card: {
    margin: theme.spacing(2),
    minWidth: 275
  },
  chipRoot: {
    marginRight: theme.spacing(1)
  }
}));

export default function ProjectLanguagesCardComponent(props) {
  const { name, lang } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <>
          {lang.map(l => (
            <Chip
              size="small"
              variant="outlined"
              className={classes.chipRoot}
              key={l.name}
              color="secondary"
              icon={
                <StarsRoundedIcon
                  className={classes.avatar}
                  style={{ fill: l.color }}
                />
              }
              component="div"
              label={l.name}
            />
          ))}
        </>
      </CardContent>
    </Card>
  );
}

ProjectLanguagesCardComponent.propTypes = {
  name: PropTypes.string.isRequired,
  lang: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
};
