import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import { Formik, Form } from "formik";
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
  emailAdres: Yup.string()
    .required("Dit is een verplicht veld")
    .max(75, "Maximaal 75 karakters")
    .min(2, "Minimaal 2 karakters")
    .email("Dit is geen geldig email adres"),
  telefoonNummer: Yup.string()
    .required("Dit is een verplicht veld")
    .matches(
      "^(((\\+31|0|0031)6){1}[1-9]{1}[0-9]{7})$",
      "Dit is geen geldig telefoonnummer"
    )
    .max(10, "Maximaal 10 cijfers")
    .min(10, "Minimaal 10 cijfers"),
  bankRekeningNummer: Yup.string()
    .required("dit is een verplicht veld")
    .matches(
      "^[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}$",
      "Dit is geen geldig IBAN nummer"
    )
    .max(18, "Een geldig Nederlands IBAN nummer bestaat uit 18 tekens")
    .min(18, "Een geldig Nederlands IBAN nummer bestaat uit 18 tekens"),
});

function ProfielForm({ isEditable }) {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        nationaliteit: "",
        woonplaats: "",
        emailAdres: "",
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
              label="Email"
              name="emailAdres"
              disabled={isEditable ? false : true}
              variant={isEditable ? "outlined" : "standard"}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              className={classes.generalInput}
              label="Mobiel"
              name="telefoonNummer"
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
            <MyTextField
              className={classes.generalInput}
              label="IBAN nummer"
              name="bankRekeningNummer"
              disabled={isEditable ? false : true}
              variant={isEditable ? "outlined" : "standard"}
              required={true}
            />
            <Grid className={classes.generalInput} item xs={12}>
              {isEditable ? (
                <Typography color="textSecondary" variant="subtitle">
                  Geef een geldig Nederlands IBAN nummer op. Let op! Door dit
                  veld in te vullen verklaar je dat dit rekeningnummer op jouw
                  naam staat.
                </Typography>
              ) : (
                ""
              )}
            </Grid>
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
              " "
            )}
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default ProfielForm;
