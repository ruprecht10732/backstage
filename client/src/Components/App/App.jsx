import React from "react";
import Layout from "../Layout/Layout";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";

function App() {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/registreren">
        <SignUp />
      </Route>
      <Route path="/">
        <Layout />
      </Route>
      <Route path="/">
        <Redirect to="/profiel" />
      </Route>
      <Route exact path="/404" component={<NotFound />} />
      <Redirect to="/404" />
    </Switch>
  );
}

export default App;
