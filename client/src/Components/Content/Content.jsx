import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Profiel from "../Profiel/Profiel";
import { Switch, Route } from "react-router-dom";
import Medewerkers from "../Medewerkers/Medewerkers";
import UrenBeheren from "../UrenBeheren/UrenBeheren";

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
      <Route path="/beheer/medewerkers">
        <Medewerkers />
      </Route>
      <Route path="/beheer/uren-beheren">
        <UrenBeheren />
      </Route>
    </Switch>
  );
}

export default Content;
