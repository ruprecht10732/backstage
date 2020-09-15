import React, { useEffect, useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import MyTextField from "../Form/MyTextField";
import MyDatePicker from "../Form/MyDatePickers";
import MuiAlert from "@material-ui/lab/Alert";
import Axios from "axios";

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
  startDatum: Yup.date().required("Dit is een verplicht veld"),
  eindDatum: Yup.date().required("Dit is een verplicht veld"),
  functie: Yup.string()
    .required("Dit is een verplicht veld")
    .min(2, "Dit veld moet minimaal 6 karakters bevatten")
    .max(75, "Dit veld mag maximaal 7 karakters bevatten"),
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function BasisInformatie({ isEditable }) {
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

    Axios.get(url)
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
