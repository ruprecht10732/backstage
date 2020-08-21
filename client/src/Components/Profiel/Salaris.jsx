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
  fieldContainer: {
    background: "#F2F4F5",
    padding: "8%",
  },
}));

const validationSchema = Yup.object({
  uurLoon: Yup.number()
    .required("Dit is een verplicht veld")
    .min(1, "Dit moet minimaal 1 euro zijn")
    .max(75, "Dit mag maximaal 75 euro zijn"),
});

function BasisInformatie({ isEditable }) {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        uurLoon: "",
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
            <MyTextField
              className={classes.generalInput}
              label="Uurloon"
              name="uurLoon"
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
