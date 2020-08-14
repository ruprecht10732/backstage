import React, { useState } from "react";
import {
  CardHeader,
  Card,
  CardContent,
  Collapse,
  IconButton,
  Typography,
  makeStyles,
  Divider,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import VerlofLijst from "./VerlofLijst/VerlofLijst";

const useStyles = makeStyles((theme) => ({
  card: {
    borderTop: "2px green solid",
  },
}));

function Verlof() {
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
        disableTypography
        title={<Typography variant="subtitle2">Komende verlofdagen</Typography>}
        action={
          <IconButton onClick={handleExpandClick} aria-label="settings">
            {expand ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        }
      ></CardHeader>
      <Divider />
      <CardContent>
        <Collapse in={expand} timeout="auto">
          <VerlofLijst />
        </Collapse>
      </CardContent>
    </Card>
  );
}

export default Verlof;
