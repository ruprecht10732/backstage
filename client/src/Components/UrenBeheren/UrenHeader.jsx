import React from "react";
import {
  Grid,
  makeStyles,
  List,
  ListItem,
  ButtonGroup,
  Button,
  Typography,
} from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { NavLink, useRouteMatch } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "#695ee8",
    color: "#fff",
  },
  Name: {
    paddingLeft: "0.3vw",
  },
  active: {
    background: "#fff",
    color: "black",
    "&:hover": {
      background: "#fff",
    },
  },
}));

function UrenHeader() {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      xs={12}
      classes={{
        root: classes.root,
      }}
      direction="column"
      alignItems="center"
    >
      <List>
        <ListItem>
          <Typography variant="h5">Uren registratie</Typography>
        </ListItem>
        <ListItem>Augustus</ListItem>
      </List>
    </Grid>
  );
}

export default UrenHeader;
