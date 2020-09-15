import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import UrenToevoegen from "./UrenToevoegen";
import UrenTabel from "./UrenTabel";

const useStyles = makeStyles((theme) => ({
  profielPaper: {
    width: "100%",
    padding: theme.spacing(3),
  },
}));

function UrenContent() {
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
          <UrenTabel />
        </Route>
        <Route path={`${path}/uren-beheren`}>
          <UrenTabel />
        </Route>
        <Route path={`${path}/verdiensten-toevoegen`}>
          <UrenToevoegen />
        </Route>
      </Switch>
    </Paper>
  );
}

export default UrenContent;
