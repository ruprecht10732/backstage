import React from "react";
import {
  Grid,
  Avatar,
  Typography,
  makeStyles,
  List,
  ListItem,
} from "@material-ui/core";

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
          <Avatar>RO</Avatar>
          <Typography className={classes.Name} variant="h5">
            Robin Oost
          </Typography>
        </ListItem>
      </List>
    </Grid>
  );
}

export default ProfielHeader;
