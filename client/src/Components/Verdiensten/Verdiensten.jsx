import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import VerdienstenHeader from "./VerdienstenHeader";
import VerdienstenOverzicht from "./VerdienstenOverzicht";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function Verdiensten() {
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
      <VerdienstenHeader />
      <VerdienstenOverzicht />
    </Grid>
  );
}

export default Verdiensten;
