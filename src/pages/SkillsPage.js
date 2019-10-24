import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import SKILLS from "../helpers/skillsHelper";
import SkillStepper from "../components/StepperComponent";

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
    marginBottom: theme.spacing(2)
  },
  childCard: {
    margin: theme.spacing(2)
  },
  cardRoot: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
}));
export default function SkillsPage() {
  const classes = useStyles();
  useEffect(() => {
    document.title = "Abhijit Rao \u2022 Skills";
  });
  return (
    <>
      {SKILLS.map(s => (
        <Card key={s.display} className={classes.card}>
          <CardHeader title={s.display} />
          <CardContent className={classes.cardRoot}>
            {s.children.map(c => {
              return (
                <Card className={classes.childCard} key={c.display}>
                  <CardHeader title={c.display} />
                  <CardContent>
                    {SkillStepper({
                      activeStep: c.rating
                    })}
                  </CardContent>
                </Card>
              );
            })}
          </CardContent>
        </Card>
      ))}
    </>
  );
}
