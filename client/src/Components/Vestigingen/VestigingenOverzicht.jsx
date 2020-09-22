import React from "react";
import { Paper, makeStyles, Grid } from "@material-ui/core";
import VestigingenTabel from "./VestigingenTabel";
import VestigingenSection from "./VestigingenSection";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import VestigingAanmakenFormulier from "./VestigingAanmakenFormulier/VestigingAanmakenFormulier";
import AddLocationIcon from "@material-ui/icons/AddLocation";

const useStyles = makeStyles((theme) => ({
  profielPaper: {
    padding: theme.spacing(3),
    width: "100%",
  },
}));

function VestigingenOverzicht() {
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
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <VestigingenSection
                title="Vestiging overzicht"
                subTitle="Hier vind je een overzicht van alle vestigingen van The Call Company"
                icon={<AddLocationIcon color="primary" />}
                aanpasbaar={false}
              />
            </Grid>
            <Grid item xs={12}>
              <VestigingenTabel />
            </Grid>
          </Grid>
        </Route>

        <Route path={`${path}/vestiging-aanmaken`}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <VestigingenSection
                title="Vestiging toevoegen"
                subTitle="Voeg een nieuwe vestiging toe, vul alle velden goed in. De nieuwe manager ontvangt een bevestiging zodra deze is aangemaakt."
                icon={<AddLocationIcon color="primary" />}
                aanpasbaar={false}
              />
            </Grid>
            <Grid item xs={12}>
              <VestigingAanmakenFormulier />
            </Grid>
          </Grid>
        </Route>
      </Switch>
    </Paper>
  );
}

export default VestigingenOverzicht;
