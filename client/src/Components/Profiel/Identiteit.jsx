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
  documentnummer: Yup.string()
    .required("Dit is een verplicht veld")
    .max(9, "Maximaal 9 karakters")
    .min(9, "Minimaal 9 karakters")
    .matches("^[A-NP-Za-np-z]{2}[0-9A-NP-Za-np-z]{6}[0-9]{1}$", {
      message: "Dit is geen geldig documentnummer",
      excludeEmptyString: true,
    }),
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Identiteit({ isEditable, setChecked }) {
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
          documentnummer: response.data[0].DocumentNummer,
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
          .put("http://localhost:5050/document", repos)
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
              label="Documentnummer"
              name="documentnummer"
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
