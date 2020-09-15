import React from "react";
import { Paper, makeStyles, Grid } from "@material-ui/core";
import VerdienstenTabel from "./VerdienstenTabel";
import VerdienstenSection from "./VerdienstenSection";
import ReceiptIcon from "@material-ui/icons/Receipt";

const useStyles = makeStyles((theme) => ({
  profielPaper: {
    width: "100%",
    padding: theme.spacing(3),
  },
  sectionHead: {
    margin: "3% 2% 0 1%",
  },
}));

function VerdienstenOverzicht() {
  const classes = useStyles();

  return (
    <Paper
      classes={{
        root: classes.profielPaper,
      }}
    >
      <Grid container xs={12} spacing={5}>
        <Grid item container xs={12}>
          <Grid container xs={12} spacing={10}>
            <Grid item xs={12} className={classes.sectionHead}>
              <VerdienstenSection
                title="Verdiensten"
                subTitle="Op deze pagina tref je een overzicht van jouw verdiensten, zodra beschikbaar, zie je ook jouw loonstrookje hier terug."
                icon={<ReceiptIcon color="primary" />}
                aanpasbaar={false}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <VerdienstenTabel />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default VerdienstenOverzicht;
