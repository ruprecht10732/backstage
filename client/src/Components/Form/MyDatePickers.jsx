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
  value,
  name,
  id,
  label,
  required,
  variant,
  autoWidth,
  inputLabel,
  disabled,
  error,
  className,
}) {
  const classes = useStyles();

  return (
    <TextField
      disabled={disabled}
      variant={variant}
      required={required}
      name={name}
      id={id}
      label={label}
      type="date"
      value={value}
      format="dd/MM/yyyy"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}
