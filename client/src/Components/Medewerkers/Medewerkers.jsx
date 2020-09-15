import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import MedewerkersHeader from "./MedewerkersHeader";
import MedewerkersOverzicht from "./MedewerkersOverzicht";

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
      spacing={1}
    >
      <MedewerkersHeader />
      <MedewerkersOverzicht />
    </Grid>
  );
}

export default Medewerkers;
