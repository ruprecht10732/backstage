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
import SubjectIcon from "@material-ui/icons/Subject";
import { NavLink, useRouteMatch } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

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

function ProfielHeader() {
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
              to={`${url}/gegevens`}
              startIcon={<PersonOutlineIcon />}
            >
              Persoonlijke gegevens
            </Button>
            <Button
              component={NavLink}
              activeClassName={classes.active}
              to={`${url}/contract-informatie`}
              startIcon={<SubjectIcon />}
              disabled
            >
              Contract informatie
            </Button>
          </ButtonGroup>
        </ListItem>
      </List>
    </Grid>
  );
}

export default ProfielHeader;
