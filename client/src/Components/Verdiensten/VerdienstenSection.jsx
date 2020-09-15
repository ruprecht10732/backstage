import React, { Fragment } from "react";
import { Grid, Typography, FormControlLabel, Switch } from "@material-ui/core";

function VerdienstenSection({
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
      <Grid item xs={6}></Grid>
    </Fragment>
  );
}

export default VerdienstenSection;
