import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import MedewerkersTabel from "./MedewerkersTabel";

const useStyles = makeStyles((theme) => ({
  profielPaper: {
    width: "100%",
    padding: theme.spacing(3),
  },
}));

function MedewerkersContent() {
  const classes = useStyles();

  return (
    <Paper
      classes={{
        root: classes.profielPaper,
      }}
    >
      <MedewerkersTabel />
    </Paper>
  );
}

export default MedewerkersContent;
