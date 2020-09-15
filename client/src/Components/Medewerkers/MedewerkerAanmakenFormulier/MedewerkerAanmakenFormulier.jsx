import React, { useState } from "react";
import { Grid, Typography, FormHelperText } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import MenuItem from "@material-ui/core/MenuItem";
import * as Yup from "yup";
import { Select } from "formik-material-ui";
import axios from "axios";

const validationSchema = Yup.object({
  naam: Yup.string()
    .required("Dit is een verplicht veld")
    .max(75, "Maximaal 25 karakters")
    .min(2, "Minimaal 2 karakters"),
  email: Yup.string()
    .required("Dit is een verplicht veld")
    .max(75, "Maximaal 75 karakters")
    .min(2, "Minimaal 2 karakters")
    .email("Dit is geen geldig email adres"),
  vestiging: Yup.string()
    .required("Dit is een verplicht veld")
    .min(6, "Dit veld moet minimaal 6 karakters bevatten")
    .max(7, "Dit veld mag maximaal 7 karakters bevatten"),
});

function MedewerkerAanmakenFormulier() {
  const [initialValues, setInitialValues] = useState({
    naam: "",
    email: "",
    vestiging: "Alkmaar",
  });

  return (
    <Grid item container xs={12}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(repos, { setSubmitting }) => {
          setTimeout(() => {
            axios
              .put("#", initialValues)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            setSubmitting(false);
          }, 600);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Grid item container spacing={2}>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  label="Naam"
                  name="naam"
                  required
                  fullwdith="true"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  label="Email"
                  name="email"
                  type="email"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={Select}
                  name="vestiging"
                  inputProps={{ "aria-label": "Vestiging" }}
                  displayEmpty
                  autoWidth
                >
                  <MenuItem value="">
                    <em>Kies een vestiging</em>
                  </MenuItem>
                  <MenuItem value="Alkmaar">Alkmaar</MenuItem>
                  <MenuItem value="Leiden">Leiden</MenuItem>
                  <MenuItem value="Leeuwarden">Leeuwarden</MenuItem>
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  Uitnodiging verzenden
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}

export default MedewerkerAanmakenFormulier;
