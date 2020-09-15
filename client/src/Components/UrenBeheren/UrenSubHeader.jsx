import React from "react";
import {
  Grid,
  makeStyles,
  List,
  Button,
  ListItem,
  ButtonGroup,
} from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SubjectIcon from "@material-ui/icons/Subject";
import { NavLink, useRouteMatch } from "react-router-dom";

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

function UrenSubHeader() {
  let { url } = useRouteMatch();
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
        <ListItem alignItems="center">
          <ButtonGroup variant="contained" color="primary">
            <Button
              component={NavLink}
              activeClassName={classes.active}
              to={`${url}`}
              startIcon={<PersonOutlineIcon />}
            >
              Verdiensten bewerken
            </Button>
            <Button
              component={NavLink}
              activeClassName={classes.active}
              to={`${url}/verdiensten-toevoegen`}
              startIcon={<SubjectIcon />}
            >
              Verdiensten toevoegen
            </Button>
          </ButtonGroup>
        </ListItem>
      </List>
    </Grid>
  );
}

export default UrenSubHeader;
