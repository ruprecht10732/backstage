import React from "react";
import {
  Grid,
  makeStyles,
  List,
  ListItem,
  ButtonGroup,
  Button,
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

function MedewerkersHeader() {
  let { url } = useRouteMatch();
  const classes = useStyles();
  return (
    <Grid
      container
      classes={{
        root: classes.root,
      }}
      direction="column"
      alignItems="center"
    >
      <List>
        <ListItem alignItems="center">
          <ButtonGroup variant="contained" color="primary">
            <Button
              component={NavLink}
              activeClassName={classes.active}
              to={`${url}`}
              startIcon={<PersonOutlineIcon />}
            >
              Medewerkers
            </Button>
            <Button
              component={NavLink}
              activeClassName={classes.active}
              to={`${url}/medewerker-aanmaken`}
              startIcon={<AddCircleOutlineIcon />}
            >
              Nieuwe medewerker aanmaken
            </Button>
          </ButtonGroup>
        </ListItem>
      </List>
    </Grid>
  );
}

export default MedewerkersHeader;
