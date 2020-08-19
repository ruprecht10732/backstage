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
  straat: Yup.string()
    .required("Dit is een verplicht veld")
    .max(75, "Maximaal 25 karakters")
    .min(2, "Minimaal 2 karakters"),
  huisNummer: Yup.string()
    .required("Dit is een verplicht veld")
    .min(2, "Dit veld moet minimaal 1 cijfer bevatten")
    .max(25, "Dit veld mag niet meer dan 25 karakters bevatten"),
  postCode: Yup.string()
    .required("Dit is een verplicht veld")
    .min(6, "Dit veld moet minimaal 6 karakters bevatten")
    .max(7, "Dit veld mag maximaal 7 karakters bevatten"),
  huisNummerToevoeging: Yup.string().min(
    1,
    "Dit veld moet minimaal 1 teken bevatten"
  ),
  woonPlaats: Yup.string()
    .required("Dit is een verplicht veld")
    .max(75, "Maximaal 75 karakters")
    .min(2, "Minimaal 2 karakters"),
});

function Adres({ isEditable }) {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        straat: "",
        huisNummer: "",
        huisNummerToevoeging: "",
        postCode: "",
        woonPlaats: "",
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
              label="Straat"
              name="straat"
              disabled={isEditable ? false : true}
              variant={isEditable ? "outlined" : "standard"}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              className={classes.generalInput}
              label="Huisnummer"
              name="huisNummer"
              disabled={isEditable ? false : true}
              variant={isEditable ? "outlined" : "standard"}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              className={classes.generalInput}
              label="Toevoeging"
              name="huisNummerToevoeging"
              disabled={isEditable ? false : true}
              variant={isEditable ? "outlined" : "standard"}
              required={false}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              className={classes.generalInput}
              label="Postcode"
              name="postCode"
              disabled={isEditable ? false : true}
              variant={isEditable ? "outlined" : "standard"}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              className={classes.generalInput}
              label="Woonplaats"
              name="woonPlaats"
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

export default Adres;
