import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Navigation from "../Navigation/Navigation";
import Content from "../Content/Content";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(4),
    backgroundColor: "#F2F4F5",
    height: "100%",
  },
}));

function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navigation />
      <main className={classes.content}>
        <Content />
      </main>
    </div>
  );
}

export default Layout;
