import React from "react";
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

function VestigingCard({ data }) {
  const classes = useStyles();

  return (
    <Grid key={data.id} item xs={4}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            The Call Company
          </Typography>
          <Typography variant="h6" component="h2">
            {data.naam}
          </Typography>
          <Typography variant="body2" component="p">
            {`${data.location.straat}  ${data.location.huisnummer}${data.location.toevoeging}`}
          </Typography>
          <Typography variant="body2" component="p">
            {`${data.location.postcode}  ${data.location.stad}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            startIcon={<EditIcon />}
            color="primary"
            size="small"
            variant="outlined"
          >
            Bewerken
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            color="primary"
            size="small"
            variant="outlined"
          >
            Verwijderen
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default VestigingCard;
