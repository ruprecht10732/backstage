import React from "react";
import { Paper, makeStyles, Grid } from "@material-ui/core";
import MedewerkersTabel from "./MedewerkersTabel";
import MedewerkersSection from "./MedewerkersSection";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import MedewerkerAanmakenFormulier from "./MedewerkerAanmakenFormulier/MedewerkerAanmakenFormulier";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const useStyles = makeStyles((theme) => ({
  profielPaper: {
    padding: theme.spacing(3),
    minHeight: (window.innerHeight / 100) * 80,
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

        <Route path={`${path}/medewerker-aanmaken`}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <MedewerkersSection
                title="Medewerker uitnodigen"
                subTitle="Nodig een nieuwe medewerker uit doormiddel van een email adres, de medewerker ontvangt dan een eenmalig wachtwoord en moet dan zijn gegevens aanvullen. Tegelijkertijd dient hij ook de benodigde documenten te ondertekenen alvorens hij gebruik kan maken van het platform."
                icon={<PersonAddIcon color="primary" />}
                aanpasbaar={false}
              />
            </Grid>
            <Grid item xs={12}>
              <MedewerkerAanmakenFormulier />
            </Grid>
          </Grid>
        </Route>
      </Switch>
    </Paper>
  );
}

export default MedewerkersOverzicht;
