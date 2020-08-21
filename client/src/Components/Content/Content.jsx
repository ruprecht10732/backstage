import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Profiel from "../Profiel/Profiel";
import { Switch, Route } from "react-router-dom";

function Content(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/profiel">
        <Profiel />
      </Route>
    </Switch>
  );
}

export default Content;
