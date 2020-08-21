import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  makeStyles,
  Divider,
  Grid,
  CardActions,
  Button,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

const useStyles = makeStyles((theme) => ({
  card: {
    borderTop: "2px red solid",
  },
  buttonCard: {
    border: "none",
    color: "red",
    "&:hover": {
      border: "none",
      color: "#EB8283",
    },
  },
}));

function Taken() {
  const classes = useStyles();

  return (
    <Card
      classes={{
        root: classes.card,
      }}
    >
      <Grid container spacing={1} direction="row">
        <Grid container item xs={12} justify="center">
          <CardHeader
            title={
              <Typography variant="subtitle2">Openstaande taken</Typography>
            }
          ></CardHeader>
        </Grid>
      </Grid>
      <Divider />
      <CardContent></CardContent>
      <CardActions>
        <Grid container spacing={1} direction="row">
          <Grid container item xs={12} justify="center">
            <Button
              size="small"
              className={classes.buttonCard}
              variant="outlined"
              color="primary"
              startIcon={<FormatListBulletedIcon />}
              endIcon={<ArrowRightAltIcon />}
            >
              Beheer taken
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default Taken;
