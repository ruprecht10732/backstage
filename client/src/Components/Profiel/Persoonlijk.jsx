import React from "react";
import { Grid } from "@material-ui/core";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import ExploreIcon from "@material-ui/icons/Explore";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import ProfielSection from "./ProfielSection";

function Persoonlijk() {
  return (
    <Grid container xs={12} spacing={10}>
      <ProfielSection
        title="Persoonlijke gegevens"
        subTitle="Vul je persoonlijke gegevens in"
        icon={<PermIdentityIcon color="primary" />}
        formulier="ProfielForm"
        aanpasbaar={true}
      />
      <ProfielSection
        title="Identiteitskaart nummer"
        subTitle="Vul het nummer van je identiteitskaart in"
        icon={<FingerprintIcon color="primary" />}
        formulier="Identiteit"
        aanpasbaar={true}
      />
      <ProfielSection
        title="Adres"
        subTitle="Vul hier je adres gegevens in"
        icon={<ExploreIcon color="primary" />}
        formulier="Adres"
        aanpasbaar={true}
      />
      <ProfielSection
        title="Noodgeval contactpersoon"
        subTitle=" Vul hier wat gegevens over je noodgevallen contact persoon"
        icon={<LocalHospitalIcon color="secondary" />}
        formulier="NoodContact"
        aanpasbaar={true}
      />
    </Grid>
  );
}

export default Persoonlijk;
