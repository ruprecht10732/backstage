import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import MyTextField from "../Form/MyTextField";

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
  noodNaam: Yup.string()
    .required("Dit is een verplicht veld")
    .max(75, "Maximaal 75 karakters")
    .min(2, "Minimaal 2 karakters")
    .matches(
      "^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$",
      "Dit is geen geldige naam"
    ),
  noodNummer: Yup.string()
    .required("Dit is een verplicht veld")
    .matches(
      "^(((\\+31|0|0031)6){1}[1-9]{1}[0-9]{7})$",
      "Dit is geen geldig telefoonnummer"
    )
    .max(10, "Maximaal 10 cijfers")
    .min(10, "Minimaal 10 cijfers"),
});

function NoodContact({ isEditable }) {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        noodNaam: "",
        noodNummer: "",
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
              label="Volledige naam"
              name="noodNaam"
              disabled={isEditable ? false : true}
              variant={isEditable ? "outlined" : "standard"}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              className={classes.generalInput}
              label="Telefoonnummer"
              name="noodNummer"
              disabled={isEditable ? false : true}
              variant={isEditable ? "outlined" : "standard"}
              required={true}
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
              " "
            )}
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default NoodContact;
