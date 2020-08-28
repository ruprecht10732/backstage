import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import UrenHeader from "./UrenHeader";
import UrenOverzicht from "./UrenOverzicht";

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
      <UrenHeader />
      <UrenOverzicht />
    </Grid>
  );
}

export default Medewerkers;
