import React from "react";
import { Grid, Typography } from "@material-ui/core";

function VestigingenSection({ title, subTitle, icon }) {
  return (
    <Grid item xs={12}>
      {icon}
      <Typography variant="h5">{title}</Typography>
      <Typography variant="paragraph">{subTitle}</Typography>
    </Grid>
  );
}

export default VestigingenSection;
