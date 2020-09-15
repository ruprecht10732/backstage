import React from "react";
import Profiel from "../Profiel/Profiel";
import { Switch, Route, Redirect } from "react-router-dom";
import Medewerkers from "../Medewerkers/Medewerkers";
import UrenBeheren from "../UrenBeheren/UrenBeheren";
import Verdiensten from "../Verdiensten/Verdiensten";
import NotFound from "../NotFound/NotFound";

function Content() {
  return (
    <Switch>
      <Route path="/profiel">
        <Profiel />
      </Route>
      <Route path="/verdiensten">
        <Verdiensten />
      </Route>
      <Route path="/beheer/medewerkers">
        <Medewerkers />
      </Route>
      <Route path="/beheer/uren-beheren">
        <UrenBeheren />
      </Route>
      <Route exact path="/404">
        <NotFound />
      </Route>
      <Redirect to="/404" />
    </Switch>
  );
}

export default Content;
