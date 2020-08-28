import React, { useState, useEffect } from "react";
import { makeStyles, Grid, Typography, Snackbar } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import MyTextField from "../Form/MyTextField";
import MySelectField from "../Form/MySelectField";
import MyDatePicker from "../Form/MyDatePickers";
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
  naam: Yup.string()
    .required("Dit is een verplicht veld")
    .max(25, "Maximaal 25 karakters")
    .min(2, "Minimaal 2 karakters")
    .matches(
      "^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$",
      "Dit is geen geldige naam"
    ),
  achternaam: Yup.string()
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
  email: Yup.string()
    .required("Dit is een verplicht veld")
    .max(75, "Maximaal 75 karakters")
    .min(2, "Minimaal 2 karakters")
    .email("Dit is geen geldig email adres"),
  mobiel: Yup.string()
    .required("Dit is een verplicht veld")
    .matches(
      "^(((\\+31|0|0031)6){1}[1-9]{1}[0-9]{7})$",
      "Dit is geen geldig telefoonnummer"
    )
    .max(10, "Maximaal 10 cijfers")
    .min(10, "Minimaal 10 cijfers"),
  iban: Yup.string()
    .required("dit is een verplicht veld")
    .matches(
      "^[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}$",
      "Dit is geen geldig IBAN nummer"
    )
    .max(18, "Een geldig Nederlands IBAN nummer bestaat uit 18 tekens")
    .min(18, "Een geldig Nederlands IBAN nummer bestaat uit 18 tekens"),
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ProfielForm({ isEditable, setChecked }) {
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
          naam: response.data[0].Naam,
          achternaam: response.data[0].AchterNaam,
          geboortedatum: response.data[0].GeboorteDatum,
          nationaliteit: response.data[0].Nationaliteit,
          email: response.data[0].Email,
          mobiel: response.data[0].Mobiel,
          geslacht: response.data[0].Geslacht,
          iban: response.data[0].IBAN,
        });
        setLoad(true);
        setInitialized(true);
        console.log(response);
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
        setTimeout(() => {
          axios
            .put("http://localhost:5050/persoonlijk", repos)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          setSubmitting(false);
          setChecked();
          handleClick();
        }, 600);
      }}
      validationSchema={validationSchema}
    >
      {({ values, isSubmitting }) => (
        <Form className={classes.fieldContainer}>
          <Grid item xs={12}>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Jouw gewijzigde persoonlijke gegevens zijn opgeslagen!
              </Alert>
            </Snackbar>

            <MyTextField
              className={classes.generalInput}
              label="Naam"
              name="naam"
              disabled={isEditable ? false : true}
              variant={isEditable ? "outlined" : "standard"}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              className={classes.generalInput}
              label="Achternaam"
              name="achternaam"
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
              label="Geboortedatum"
              name="geboortedatum"
              defaultValue={repos.geboortedatum}
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
              name="email"
              disabled={isEditable ? false : true}
              variant={isEditable ? "outlined" : "standard"}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              className={classes.generalInput}
              label="Mobiel"
              name="mobiel"
              disabled={isEditable ? false : true}
              variant={isEditable ? "outlined" : "standard"}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            {isEditable ? (
              <MySelectField
                inputLabel="Geslacht"
                name="geslacht"
                disabled={isEditable ? false : true}
                variant={isEditable ? "outlined" : "standard"}
                autowidth={true}
              />
            ) : (
              <MyTextField
                className={classes.generalInput}
                label="Geslacht"
                name="geslacht"
                disabled={isEditable ? false : true}
                variant={isEditable ? "outlined" : "standard"}
                required={true}
              />
            )}
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              className={classes.generalInput}
              label="IBAN nummer"
              name="iban"
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
