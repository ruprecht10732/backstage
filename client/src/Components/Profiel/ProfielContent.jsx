import React from "react";
import { Paper, Grid, makeStyles, Typography } from "@material-ui/core";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

const useStyles = makeStyles((theme) => ({
  profielPaper: {
    width: "100%",
    padding: theme.spacing(3),
  },
}));

function ProfielContent() {
  const classes = useStyles();
  return (
    <Paper
      classes={{
        root: classes.profielPaper,
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <PermIdentityIcon fontSize="large" />
          <Typography variant="h5">Persoonlijke gegevens</Typography>
          <Typography variant="paragraph">
            Vul je persoonlijke gegevens in
          </Typography>
        </Grid>
        <Grid item xs={6}>
          Hallo
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProfielContent;
