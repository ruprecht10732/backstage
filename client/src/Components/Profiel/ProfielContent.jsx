import React, { useState } from "react";
import {
  Paper,
  Grid,
  makeStyles,
  Typography,
  FormControlLabel,
  Switch,
  Fab,
} from "@material-ui/core";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import ProfielForm from "./ProfielForm";
import ExploreIcon from "@material-ui/icons/Explore";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

const useStyles = makeStyles((theme) => ({
  profielPaper: {
    width: "100%",
    padding: theme.spacing(3),
  },
}));

function ProfielContent() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Paper
      classes={{
        root: classes.profielPaper,
      }}
    >
      <Grid container xs={12} spacing={10}>
        <Grid item xs={6}>
          <PermIdentityIcon fontSize="large" color="primary" />
          <Typography variant="h5">Persoonlijke gegevens</Typography>
          <Typography variant="paragraph">
            Vul je persoonlijke gegevens in
          </Typography>
          <div>
            <FormControlLabel
              control={
                <Switch
                  checked={checked}
                  onChange={toggleChecked}
                  color="primary"
                />
              }
              label="Aanpassen"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <ProfielForm isEditable={checked} />
        </Grid>
        <Grid item xs={6}>
          <FingerprintIcon fontSize="large" color="primary" />
          <Typography variant="h5">Identiteitskaart nummer</Typography>
          <Typography variant="paragraph">
            Vul het nummer van je identiteitskaart in
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <ExploreIcon fontSize="large" color="primary" />
          <Typography variant="h5">Adres</Typography>
          <Typography variant="paragraph">
            Vul hier je adres gegevens in
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <LocalHospitalIcon fontSize="large" color="primary" />
          <Typography variant="h5">Noodgeval contactpersoon</Typography>
          <Typography variant="paragraph">
            Vul hier wat gegevens over je noodgevallen contact persoon.
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Paper>
  );
}

export default ProfielContent;
