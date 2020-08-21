import React from "react";
import { Grid } from "@material-ui/core";
import Taken from "./Taken/Taken";
import Verlof from "./Verlof/Verlof";
import Welkom from "./Welkom/Welkom";
import Funnel from "./Funnel/Funnel";

function Dashboard() {
  return (
    //   Full width content container
    <Grid container direction="row" xs={12} spacing={2}>
      {/* Left side */}
      <Grid
        container
        item
        direction="row"
        spacing={2}
        xs={8}
        alignItems="flex-start"
      >
        <Grid item xs={12} lg={6}>
          <Welkom />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Verlof />
        </Grid>
      </Grid>

      {/* Right side */}
      <Grid container item direction="row" xs={4} alignItems="flex-start">
        <Grid item xs={12}>
          <Taken />
        </Grid>
      </Grid>
      {/* End Full width content container */}
    </Grid>
  );
}

export default Dashboard;
