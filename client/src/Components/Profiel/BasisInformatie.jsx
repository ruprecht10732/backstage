import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import MyTextField from "../Form/MyTextField";
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
  fieldContainer: {
    background: "#F2F4F5",
    padding: "8%",
  },
}));

const validationSchema = Yup.object({
  startDatum: Yup.date().required("Dit is een verplicht veld"),
  eindDatum: Yup.date().required("Dit is een verplicht veld"),
  functie: Yup.string()
    .required("Dit is een verplicht veld")
    .min(2, "Dit veld moet minimaal 6 karakters bevatten")
    .max(75, "Dit veld mag maximaal 7 karakters bevatten"),
});

function BasisInformatie({ isEditable }) {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        startDatum: "",
        eindDatum: "",
        functie: "",
      }}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        console.log(data);
        setSubmitting(false);
      }}
      validationSchema={validationSchema}
    >
      {({ values, isSubmitting }) => (
        <Form className={classes.fieldContainer}>
          <Grid item xs={12}>
            <MyDatePicker
              className={classes.generalInput}
              label="Start datum"
              name="startDatum"
              disabled={true}
              variant="standard"
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <MyDatePicker
              className={classes.generalInput}
              label="Eind datum"
              name="eindDatum"
              disabled={true}
              variant="standard"
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              className={classes.generalInput}
              label="Functie"
              name="functie"
              disabled={true}
              variant="standard"
              required={false}
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

export default BasisInformatie;
