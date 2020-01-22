import Box from "@material-ui/core/Box";
import Step from "@material-ui/core/Step";
import StepConnector from "@material-ui/core/StepConnector";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Check from "@material-ui/icons/Check";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

const QontoConnector = withStyles(theme => ({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)"
  },
  active: {
    "& $line": {
      borderColor: theme.palette.primary.main
    }
  },
  completed: {
    "& $line": {
      borderColor: theme.palette.primary.main
    }
  },
  line: {
    borderTopWidth: 3,
    borderRadius: 3
  }
}))(StepConnector);

const useQontoStepIconStyles = makeStyles(theme => ({
  root: {
    color: "#bdbdbd",
    display: "flex",
    height: 22,
    alignItems: "center"
  },
  active: {
    color: theme.palette.secondary.main
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    backgroundColor: "currentColor"
  },
  completed: {
    color: theme.palette.primary.main,
    zIndex: 1,
    fontSize: 18
  }
}));

const getSteps = () => [
  "Novice",
  "Advanced Beginner",
  "Competent",
  "Proficient",
  "Expert"
];

const QontoStepIcon = props => {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
};

QontoStepIcon.propTypes = {
  active: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired
};

const useStyles = makeStyles({
  root: {
    padding: 0,
    flexWrap: "wrap"
  }
});

export default function SkillStepper({ activeStep }) {
  const classes = useStyles();
  const steps = getSteps();
  return (
    <Box>
      <Stepper
        className={classes.root}
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

SkillStepper.propTypes = {
  activeStep: PropTypes.number.isRequired
};
