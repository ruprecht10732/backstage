import React from "react";
import {
  Grid,
  Typography,
  Avatar,
  makeStyles,
  Tooltip,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    backgroundColor: "#F2F4F5",
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: "2px",
    marginTop: "8%",
    background: "white",
    color: "#D7DADC",
  },
}));

function VerlofContent() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      className={classes.gridContainer}
    >
      <Grid container item xs={4} justify="center">
        <Typography variant="subtitle">Vandaag</Typography>
        <Grid container item xs={12} justify="center">
          <Tooltip title="Robin Oost">
            <Avatar className={classes.small}>RO</Avatar>
          </Tooltip>
          <Tooltip title="Robin Oost">
            <Avatar className={classes.small}>RO</Avatar>
          </Tooltip>
          <Tooltip title="Robin Oost">
            <Avatar className={classes.small}>RO</Avatar>
          </Tooltip>
          <Tooltip title="Robin Oost">
            <Avatar className={classes.small}>RO</Avatar>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container item xs={4} justify="center">
        <Typography variant="subtitle">Morgen</Typography>
        <Grid container item xs={12} justify="center">
          <Tooltip title="Robin Oost">
            <Avatar className={classes.small}>RO</Avatar>
          </Tooltip>
          <Tooltip title="Robin Oost">
            <Avatar className={classes.small}>RO</Avatar>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container item xs={4} justify="center">
        <Typography variant="subtitle">7 dagen</Typography>
        <Grid container item xs={12} justify="center">
          <Tooltip title="Ilias Derawi">
            <Avatar className={classes.small}>ID</Avatar>
          </Tooltip>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default VerlofContent;
