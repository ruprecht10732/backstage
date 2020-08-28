import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import MedewerkersHeader from "./MedewerkersHeader";
import MedewerkersOverzicht from "./MedewerkersOverzicht";
import MedewerkerAanmakenFormulier from "./MedewerkerAanmakenFormulier/MedewerkerAanmakenFormulier";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function Medewerkers() {
  const classes = useStyles();
  return (
    <Grid
      classes={{
        root: classes.root,
      }}
      container
      xs={12}
      direction="column"
      spacing={1}
      alignItems="center"
    >
      <MedewerkersHeader />
      <MedewerkersOverzicht />
    </Grid>
  );
}

export default Medewerkers;
