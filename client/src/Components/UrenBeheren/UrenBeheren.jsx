import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import UrenHeader from "./UrenHeader";
import UrenSubHeader from "./UrenSubHeader";
import UrenContent from "./UrenContent";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function UrenBeheren() {
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
      <UrenSubHeader />
      <UrenContent />
    </Grid>
  );
}

export default UrenBeheren;
