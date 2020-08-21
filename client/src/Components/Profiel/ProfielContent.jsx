import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import Persoonlijk from "./Persoonlijk";
import Contract from "./Contract";

const useStyles = makeStyles((theme) => ({
  profielPaper: {
    width: "100%",
    padding: theme.spacing(3),
  },
}));

function ProfielContent() {
  const classes = useStyles();
  let { path } = useRouteMatch();

  return (
    <Paper
      classes={{
        root: classes.profielPaper,
      }}
    >
      <Switch>
        <Route exact path={path}>
          <Persoonlijk />
        </Route>
        <Route path={`${path}/gegevens`}>
          <Persoonlijk />
        </Route>
        <Route path={`${path}/contract-informatie`}>
          <Contract />
        </Route>
      </Switch>
    </Paper>
  );
}

export default ProfielContent;
