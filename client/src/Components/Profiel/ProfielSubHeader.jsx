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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "#695ee8",
    color: "#fff",
  },
  Name: {
    paddingLeft: "0.3vw",
  },
}));

function ProfielHeader() {
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
            <Button startIcon={<PersonOutlineIcon />}>
              Persoonlijke gegevens
            </Button>
            <Button startIcon={<SubjectIcon />}>Contract informatie</Button>
          </ButtonGroup>
        </ListItem>
      </List>
    </Grid>
  );
}

export default ProfielHeader;
