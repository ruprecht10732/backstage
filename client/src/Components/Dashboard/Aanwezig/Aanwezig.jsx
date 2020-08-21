import React from "react";
import {
  CardHeader,
  Card,
  CardContent,
  Typography,
  makeStyles,
  Divider,
  CardActions,
  Button,
  Grid,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import AanwezigContent from "./AanwezigContent/AanwezigContent";

const useStyles = makeStyles((theme) => ({
  card: {
    borderTop: "2px blue solid",
  },
  buttonCard: {
    border: "none",
    color: "blue",
    "&:hover": {
      border: "none",
      color: "#88B5E0",
    },
  },
}));

function Aanwezig() {
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
            disableTypography
            title={
              <Typography variant="subtitle2">Vandaag aanwezig</Typography>
            }
          ></CardHeader>
        </Grid>
      </Grid>
      <Divider />
      <CardContent>
        <AanwezigContent />
      </CardContent>
      <CardActions>
        <Grid container spacing={1} direction="row">
          <Grid container item xs={12} justify="center">
            <Button
              size="small"
              className={classes.buttonCard}
              variant="outlined"
              color="primary"
              startIcon={<HourglassEmptyIcon />}
              endIcon={<ArrowRightAltIcon />}
            >
              Bekijk wie er aanwezig is
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default Aanwezig;
