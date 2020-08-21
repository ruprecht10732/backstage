import React, { Fragment } from "react";
import { Grid, Typography, FormControlLabel, Switch } from "@material-ui/core";
import ProfielForm from "./ProfielForm";
import Identiteit from "./Identiteit";
import Adres from "./Adres";
import NoodContact from "./NoodContact";
import BasisInformatie from "./BasisInformatie";
import Salaris from "./Salaris";
import Documenten from "./Documenten";
import Schema from "./Schema";

function ProfielSection({
  title,
  subTitle,
  icon,
  fontSize,
  color,
  formulier,
  aanpasbaar,
}) {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Fragment>
      <Grid item xs={6}>
        {icon}
        <Typography variant="h5">{title}</Typography>
        <Typography variant="paragraph">{subTitle}</Typography>
        {aanpasbaar === true ? (
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
        ) : (
          " "
        )}
      </Grid>
      <Grid item xs={6}>
        {(() => {
          switch (formulier) {
            case "ProfielForm":
              return <ProfielForm isEditable={checked} />;
            case "Identiteit":
              return <Identiteit isEditable={checked} />;
            case "Adres":
              return <Adres isEditable={checked} />;
            case "NoodContact":
              return <NoodContact isEditable={checked} />;
            case "BasisInformatie":
              return <BasisInformatie />;
            case "Salaris":
              return <Salaris />;
            case "Documenten":
              return <Documenten />;
            case "Schema":
              return <Schema isEditable={checked} />;
            default:
              return "";
          }
        })()}
      </Grid>
    </Fragment>
  );
}

export default ProfielSection;
