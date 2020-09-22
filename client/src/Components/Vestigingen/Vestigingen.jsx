import React from "react";
import { Grid } from "@material-ui/core";
import VestigingenHeader from "./VestigingenHeader";
import VestigingenOverzicht from "./VestigingenOverzicht";

function Vestigingen() {
  return (
    <Grid container direction="row">
      <VestigingenHeader />
      <VestigingenOverzicht />
    </Grid>
  );
}

export default Vestigingen;
