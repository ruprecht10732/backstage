import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  FormControlLabel,
  Switch,
  Fab,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import { Formik, Form, useField } from "formik";
import MyTextField from "../Form/MyTextField";
import MySelectField from "../Form/MySelectField";
import MyDatePicker from "../Form/MyDatePickers";

const useStyles = makeStyles((theme) => ({
  generalForm: {
    root: {
      marginTop: "2vh",
    },
  },
  generalInput: {
    marginBottom: "5%",
    minWidth: "100%",
  },
  notAllowed: {
    cursor: "not-allowed",
  },
  formMargin: {
    marginTop: "10%",
  },
}));

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("Dit is een verplicht veld")
    .max(25, "Maximaal 25 karakters")
    .min(2, "Minimaal 2 karakters")
    .matches(
      "^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$",
      "Dit is geen geldige naam"
    ),
  lastName: Yup.string()
    .required("Dit is een verplicht veld")
    .max(25, "Maximaal 25 karakters")
    .min(2, "Minimaal 2 karakters")
    .matches(
      "^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$",
      "Dit is geen geldige naam"
    ),
  nationaliteit: Yup.string()
    .required("Dit is een verplicht veld")
    .max(25, "Maximaal 25 karakters")
    .min(2, "Minimaal 2 karakters")
    .matches(
      "^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$",
      "Dit is geen geldige naam"
    ),
  telefoonNummer: Yup.string()
    .required("Dit is een verplicht veld")
    .matches("^[0-9]*$", "Alleen cijfers")
    .max(10, "Maximaal 10 cijfers")
    .min(10, "Minimaal 10 cijfers"),
});

function ProfielForm({ isEditable }) {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        firstName: "Robin",
        lastName: "Oost",
        nationaliteit: "Nederlandse",
        woonplaats: "",
        geboorteDatum: "",
        geslacht: "",
        bankRekeningNummer: "",
        telefoonNummer: "",
      }}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        console.log(data);
        setSubmitting(false);
      }}
      validationSchema={validationSchema}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <Grid item xs={12} className={classes.formMargin}>
            <MyTextField
              className={classes.generalInput}
              label="Naam"
              name="firstName"
              disabled={isEditable ? false : true}
              variant={isEditable ? "outlined" : "standard"}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              className={classes.generalInput}
              label="Achternaam"
              name="lastName"
              disabled={isEditable ? false : true}
              variant={isEditable ? "outlined" : "standard"}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <MyDatePicker
              disabled={isEditable ? false : true}
              variant={isEditable ? "outlined" : "standard"}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              className={classes.generalInput}
              label="Nationaliteit"
              name="nationaliteit"
              disabled={isEditable ? false : true}
              variant={isEditable ? "outlined" : "standard"}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              className={classes.generalInput}
              label="Telefoonnummer"
              name="telefoonNummer"
              disabled={isEditable ? false : true}
              variant={isEditable ? "outlined" : "standard"}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              className={classes.generalInput}
              label="IBAN nummer"
              name="bankRekeningNummer"
              disabled={isEditable ? false : true}
              variant={isEditable ? "outlined" : "standard"}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <MySelectField
              inputLabel="Geslacht"
              name="geslacht"
              disabled={isEditable ? false : true}
              variant={isEditable ? "filled" : "standard"}
              autowidth={true}
            />
          </Grid>

          <Grid item xs={12}>
            {isEditable ? (
              <Button
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                type="submit"
              >
                Opslaan
              </Button>
            ) : (
              <Button
                disabled
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                type="submit"
              >
                Opslaan
              </Button>
            )}
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default ProfielForm;
