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
  straat: Yup.string()
    .required("Het adres veld is een verplicht veld")
    .max(75, "Maximaal 25 karakters")
    .min(2, "Minimaal 2 karakters"),
  huisNummer: Yup.string()
    .required("Dit is een verplicht veld")
    .min(1, "Dit veld moet minimaal 1 cijfer bevatten")
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
    .required("Dit is ook een verplicht veld")
    .max(75, "Maximaal 75 karakters")
    .min(2, "Minimaal 2 karakters"),
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Adres({ isEditable, setChecked }) {
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
          straat: response.data[0].Straat,
          huisNummer: response.data[0].Huisnummer,
          huisNummerToevoeging: response.data[0].Toevoeging,
          postCode: response.data[0].Postcode,
          woonPlaats: response.data[0].Woonplaats,
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
          .put("http://localhost:5050/adres", repos)
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
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Jouw adres wijzigingen zijn opgeslagen!
              </Alert>
            </Snackbar>
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
