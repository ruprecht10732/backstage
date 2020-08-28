import React from "react";
import { Paper, makeStyles, Grid } from "@material-ui/core";
import UrenTabel from "./UrenTabel";

const useStyles = makeStyles((theme) => ({
  profielPaper: {
    width: "100%",
    padding: theme.spacing(3),
  },
}));

function UrenOverzicht() {
  const classes = useStyles();

  return (
    <Paper
      classes={{
        root: classes.profielPaper,
      }}
    >
      <Grid container xs={12} spacing={5}>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <h2>Filter op: </h2>
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <UrenTabel />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default UrenOverzicht;
