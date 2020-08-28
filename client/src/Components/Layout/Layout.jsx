import React from "react";
import { CssBaseline, makeStyles, Grid } from "@material-ui/core";
import Navigation from "../Navigation/Navigation";
import Content from "../Content/Content";
import { BrowserRouter as Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#F2F4F5",
    height: "100%",
  },
  content: {
    padding: theme.spacing(5),
  },
}));

function Layout() {
  const classes = useStyles();

  return (
    <Router>
      <Grid container xs={12}>
        <CssBaseline />
        <Grid item container xs={12}>
          <Grid item container xs={2}>
            <Navigation />
          </Grid>
          <Grid item container xs={10} className={classes.content}>
            <Content />
          </Grid>
        </Grid>
      </Grid>
    </Router>
  );
}

export default Layout;
