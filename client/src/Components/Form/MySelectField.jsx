import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  makeStyles,
} from "@material-ui/core";
import { useField } from "formik";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "100%",
    marginBottom: "5%",
  },
}));

const MySelectField = ({
  variant,
  autoWidth,
  inputLabel,
  disabled,
  error,
  className,
  ...props
}) => {
  const classes = useStyles();
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const errorState = meta.error && meta.touched ? true : false;

  return (
    <FormControl
      className={classes.formControl}
      variant={variant}
      required
      autoWidth={autoWidth}
      disabled={disabled}
    >
      <InputLabel>{inputLabel}</InputLabel>
      <Select value="10" {...field} error={errorState}>
        <MenuItem value={"man"}>man</MenuItem>
        <MenuItem value={"vrouw"}>vrouw</MenuItem>
      </Select>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};

export default MySelectField;
