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
  documentNummer: Yup.string()
    .required("Dit is een verplicht veld")
    .max(9, "Maximaal 9 karakters")
    .min(9, "Minimaal 9 karakters")
    .matches("^[A-NP-Za-np-z]{2}[0-9A-NP-Za-np-z]{6}[0-9]{1}$", {
      message: "Dit is geen geldig documentnummer",
      excludeEmptyString: true,
    }),
});

function Identiteit({ isEditable }) {
  const classes = useStyles();

  return (
    <Formik
      autoComplete={false}
      initialValues={{
        documentNummer: "",
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
              label="Documentnummer"
              name="documentNummer"
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

export default Identiteit;
