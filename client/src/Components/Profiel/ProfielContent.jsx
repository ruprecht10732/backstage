import React from "react";
import { Paper, Grid, makeStyles } from "@material-ui/core";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import ExploreIcon from "@material-ui/icons/Explore";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import ProfielSection from "./ProfielSection";

const useStyles = makeStyles((theme) => ({
  profielPaper: {
    width: "100%",
    padding: theme.spacing(3),
  },
}));

function ProfielContent() {
  const classes = useStyles();

  return (
    <Paper
      classes={{
        root: classes.profielPaper,
      }}
    >
      <Grid container xs={12} spacing={10}>
        <ProfielSection
          title="Persoonlijke gegevens"
          subTitle="Vul je persoonlijke gegevens in"
          icon={<PermIdentityIcon color="primary" />}
          formulier="ProfielForm"
        />
        <ProfielSection
          title="Identiteitskaart nummer"
          subTitle="Vul het nummer van je identiteitskaart in"
          icon={<FingerprintIcon color="primary" />}
          formulier="Identiteit"
        />
        <ProfielSection
          title="Adres"
          subTitle="Vul hier je adres gegevens in"
          icon={<ExploreIcon color="primary" />}
          formulier="Adres"
        />
        <ProfielSection
          title="Noodgeval contactpersoon"
          subTitle=" Vul hier wat gegevens over je noodgevallen contact persoon"
          icon={<LocalHospitalIcon color="secondary" />}
          formulier="NoodContact"
        />
      </Grid>
    </Paper>
  );
}

export default ProfielContent;
