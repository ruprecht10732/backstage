import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

const MyTextField = ({
  variant,
  disabled,
  error,
  className,
  label,
  required,
  ...props
}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const errorState = meta.error && meta.touched ? true : false;

  return (
    <TextField
      className={className}
      label={label}
      {...field}
      helperText={errorText}
      error={errorState}
      fullwidth
      disabled={disabled}
      variant={variant}
      required={required}
    />
  );
};

export default MyTextField;
