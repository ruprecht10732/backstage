import React from "react";
import { Grid } from "@material-ui/core";
import Taken from "./Taken/Taken";
import Verlof from "./Verlof/Verlof";
import Aanwezig from "./Aanwezig/Aanwezig";

function Dashboard() {
  return (
    //   Full width content container
    <Grid container direction="row" xs={12} spacing={5}>
      {/* Left side */}
      <Grid container item direction="row" spacing={5} xs={9} justify="stretch">
        <Grid item xs={12} lg={6}>
          <Aanwezig />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Verlof />
        </Grid>
      </Grid>

      {/* Right side */}
      <Grid container item direction="row" xs={3} alignItems="flex-start">
        <Grid item xs={12}>
          <Taken />
        </Grid>
      </Grid>
      {/* End Full width content container */}
    </Grid>
  );
}

export default Dashboard;
