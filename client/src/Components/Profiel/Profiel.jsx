import React from "react";
import ProfielHeader from "./ProfielHeader";
import ProfielSubHeader from "./ProfielSubHeader";
import { Grid, makeStyles } from "@material-ui/core";
import ProfielContent from "./ProfielContent";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function Profiel() {
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
      <ProfielHeader />
      <ProfielSubHeader />
      <ProfielContent />
    </Grid>
  );
}

export default Profiel;
