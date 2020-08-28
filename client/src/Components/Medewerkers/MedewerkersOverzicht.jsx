import React from "react";
import { Paper, makeStyles, Grid } from "@material-ui/core";
import MedewerkersTabel from "./MedewerkersTabel";
import MedewerkersSection from "./MedewerkersSection";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import MedewerkerAanmakenFormulier from "./MedewerkerAanmakenFormulier/MedewerkerAanmakenFormulier";

const useStyles = makeStyles((theme) => ({
  profielPaper: {
    width: "100%",
    padding: theme.spacing(3),
  },
}));

function MedewerkersOverzicht() {
  const classes = useStyles();
  let { path } = useRouteMatch();

  return (
    <Paper
      classes={{
        root: classes.profielPaper,
      }}
    >
      <Grid container xs={12} spacing={5}>
        <Switch>
          <Route exact path={path}>
            <Grid item container xs={12}>
              <Grid item xs={12}>
                <MedewerkersSection
                  title="Medewerkers"
                  subTitle="Lijst van alle actieve medewerkers, je kan ze hier ook bewerken"
                  icon={<BubbleChartIcon color="primary" />}
                  aanpasbaar={false}
                />
              </Grid>
            </Grid>
            <Grid item container xs={12}>
              <Grid item xs={12}>
                <MedewerkersTabel />
              </Grid>
            </Grid>
          </Route>
          <Route exact path={`${path}/gegevens`}>
            <Grid item container xs={12}>
              <Grid item xs={12}>
                <MedewerkersSection
                  title="Medewerkers"
                  subTitle="Lijst van alle actieve medewerkers, je kan ze hier ook bewerken"
                  icon={<BubbleChartIcon color="primary" />}
                  aanpasbaar={false}
                />
              </Grid>
            </Grid>
            <Grid item container xs={12}>
              <Grid item xs={12}>
                <MedewerkersTabel />
              </Grid>
            </Grid>
          </Route>
          <Route path={`${path}/medewerker-aanmaken`}>
            <MedewerkerAanmakenFormulier />
          </Route>
        </Switch>
      </Grid>
    </Paper>
  );
}

export default MedewerkersOverzicht;
