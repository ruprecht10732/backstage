import React, { useState, useEffect } from "react";
import { makeStyles, Grid, Snackbar } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import MyTextField from "../Form/MyTextField";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";

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
  rootAlert: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function NoodContact({ isEditable, setChecked }) {
  const classes = useStyles();
  const [repos, setRepos] = React.useState({});
  const [initialized, setInitialized] = useState(false);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const [id, setId] = useState(1);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const url = `http://localhost:5050/medewerkers/${id}`;

    axios
      .get(url)
      .then((response) => {
        setRepos({
          medewerkerID: response.data[0].medewerker_ID,
          noodNaam: response.data[0].NoodGevalNaam,
          noodNummer: response.data[0].NoodGevalNummer,
        });
        setLoad(true);
        setInitialized(true);
      })
      .catch((err) => {
        setError(err);
        setLoad(true);
        setInitialized(false);
      });
  }, [id]);

  return (
    <Formik
      enableReinitialize
      initialValues={repos}
      onSubmit={(repos, { setSubmitting }) => {
        axios
          .put("http://localhost:5050/noodcontact", repos)
          .then(function (response) {
            console.log(response);
            setSubmitting(false);
          })
          .catch(function (error) {
            console.log(error);
          });
        setChecked();
        handleClick();
      }}
      validationSchema={validationSchema}
    >
      {({ values, isSubmitting }) => (
        <Form className={classes.fieldContainer}>
          <Grid item xs={12}>
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
