import React from "react";
import {
  makeStyles,
  Card,
  Typography,
  CardContent,
  Divider,
  List,
  ListItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardBackground: {
    background: "linear-gradient(-60deg,#695ee8,#47a7ff)",
  },
  cardText: {
    color: "#FFFFFF",
  },
}));

function Welkom() {
  const classes = useStyles();
  return (
    <Card
      classes={{
        root: classes.cardBackground,
      }}
    >
      <CardContent className={classes.cardText}>
        <Typography variant="subtitle2">Welkom terug Robin!</Typography>
        <Typography variant="paragraph">
          Hieronder een kort overzicht
        </Typography>
        <Divider />
      </CardContent>
    </Card>
  );
}

export default Welkom;
