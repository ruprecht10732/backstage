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
import VerlofContent from "./VerlofContent/VerlofContent";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";

const useStyles = makeStyles((theme) => ({
  card: {
    borderTop: "2px green solid",
  },
  buttonCard: {
    border: "none",
    color: "green",
    "&:hover": {
      border: "none",
      color: "#90EE90",
    },
  },
}));

function Verlof() {
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
              <Typography variant="subtitle2">Komende verlofdagen</Typography>
            }
          ></CardHeader>
        </Grid>
      </Grid>
      <Divider />
      <CardContent>
        <VerlofContent />
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
              Bekijk wie er afwezig is
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default Verlof;
