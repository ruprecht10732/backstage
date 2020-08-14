import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  IconButton,
  makeStyles,
  Collapse,
  Divider,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import TakenLijst from "./TakenLijst/TakenLijst";

const useStyles = makeStyles((theme) => ({
  card: {
    borderTop: "2px red solid",
  },
}));

function Taken() {
  const classes = useStyles();

  const [expand, setExpand] = useState(true);
  const handleExpandClick = () => {
    setExpand(!expand);
  };

  return (
    <Card
      classes={{
        root: classes.card,
      }}
    >
      <CardHeader
        title={<Typography variant="subtitle2">Openstaande taken</Typography>}
        action={
          <IconButton onClick={handleExpandClick} aria-label="settings">
            {expand ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        }
      ></CardHeader>
      <Divider />
      <CardContent>
        <Collapse in={expand} timeout="auto">
          <TakenLijst />
        </Collapse>
      </CardContent>
    </Card>
  );
}

export default Taken;
