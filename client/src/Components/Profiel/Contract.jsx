import React from "react";
import { Grid } from "@material-ui/core";

import ProfielSection from "./ProfielSection";

import MenuBookIcon from "@material-ui/icons/MenuBook";
import ScheduleIcon from "@material-ui/icons/Schedule";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AttachFileIcon from "@material-ui/icons/AttachFile";

function Contract() {
  return (
    <Grid container xs={12} spacing={10}>
      <ProfielSection
        title="Basis informatie"
        subTitle="Jouw basis informatie"
        icon={<MenuBookIcon color="primary" />}
        formulier="BasisInformatie"
        aanpasbaar={false}
      />
      <ProfielSection
        title="Werk schema"
        subTitle="Jouw standaard beschikbaarheid"
        icon={<ScheduleIcon color="primary" />}
        formulier="Schema"
        aanpasbaar={true}
      />
      <ProfielSection
        title="Uurloon"
        subTitle="Wat jouw basis uurloon is"
        icon={<AccountBalanceWalletIcon color="primary" />}
        formulier="Salaris"
        aanpasbaar={false}
      />
      <ProfielSection
        title="Documenten"
        subTitle=" Hier staan alle documenten gerelateerd aan jouw contract"
        icon={<AttachFileIcon color="primary" />}
        formulier="Documenten"
        aanpasbaar={false}
      />
    </Grid>
  );
}

export default Contract;
