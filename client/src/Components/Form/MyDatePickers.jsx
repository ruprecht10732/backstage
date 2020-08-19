import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
    marginBottom: "5%",
  },
}));

export default function DatePickers({
  required,
  variant,
  autoWidth,
  inputLabel,
  disabled,
  error,
  className,
  ...props
}) {
  const classes = useStyles();

  return (
    <TextField
      disabled={disabled}
      variant={variant}
      requires={required}
      name="geboorteDatum"
      id="geboorteDatum"
      label="Geboortedatum"
      type="date"
      defaultValue="2017-05-24"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}
