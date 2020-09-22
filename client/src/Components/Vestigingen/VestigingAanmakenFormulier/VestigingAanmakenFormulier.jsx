import React, { useState } from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import Axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const validationSchema = Yup.object({
  stad: Yup.string()
    .required("Dit is een verplicht veld")
    .max(75, "Maximaal 75 karakters")
    .min(2, "Minimaal 2 karakters"),
  straat: Yup.string()
    .required("Dit is een verplicht veld")
    .max(75, "Maximaal 75 karakters")
    .min(2, "Minimaal 2 karakters"),
  huisnummer: Yup.string()
    .required("Dit is een verplicht veld")
    .max(75, "Maximaal 75 karakters")
    .min(1, "Minimaal 1 karakter"),
  toevoeging: Yup.string().max(75, "Maximaal 75 karakters"),
  postcode: Yup.string()
    .required("Dit is een verplicht veld")
    .min(6, "Dit veld moet minimaal 6 karakters bevatten")
    .max(7, "Dit veld mag maximaal 7 karakters bevatten"),
});

function VestigingAanmakenFormulier({ setOpenDialog, handleDepartmentAdded }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [initialValues, setInitialValues] = useState({
    naam: "",
    straat: "",
    huisnummer: "",
    toevoeging: "",
    postcode: "",
    stad: "",
  });

  const handleOnSubmit = (values, actions) => {
    Axios({
      method: "POST",
      url: "http://localhost:5050/api/department",
      data: {
        naam: `TCC ${values.stad}`,
        straat: values.straat,
        huisnummer: values.huisnummer,
        toevoeging: values.toevoeging,
        postcode: values.postcode,
        stad: values.stad,
      },
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        setOpen(true);
        setOpenDialog(false);
        handleDepartmentAdded(true);
      })
      .catch((error) => {
        actions.setSubmitting(false);
        console.log(error);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {isSubmitting && <LinearProgress color="primary" />}
            </Grid>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Vestiging succesvol aangemaakt
              </Alert>
            </Snackbar>
            <Grid item xs={12}>
              <Field
                component={TextField}
                autoFocus={true}
                name="stad"
                label="Stad"
                fullWidth={true}
                required
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                name="straat"
                label="Straatnaam"
                fullWidth={true}
                autoComplete="off"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                name="huisnummer"
                label="Huisnummer"
                fullWidth={true}
                autoComplete="off"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                name="toevoeging"
                label="Toevoeging"
                fullWidth={true}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                name="postcode"
                label="Postcode"
                fullWidth={true}
                autoComplete="off"
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
                startIcon={<AddCircleIcon />}
              >
                Vestiging aanmaken
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default VestigingAanmakenFormulier;
