import React, { useEffect, useState } from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import MenuItem from "@material-ui/core/MenuItem";
import * as Yup from "yup";
import Axios from "axios";
import SendIcon from "@material-ui/icons/Send";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import MedewerkerDialog from "../MedewerkerDialog";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Dit is een verplicht veld")
    .max(75, "Maximaal 75 karakters")
    .min(2, "Minimaal 2 karakters")
    .email("Dit is geen geldig email adres"),
  department: Yup.mixed().required("Dit is een verplicht veld"),
});

function MedewerkerAanmakenFormulier() {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [departmentAdded, setDepartmentAdded] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setDepartmentAdded(false);
    setOpen(false);
  };

  const handleDialog = () => {
    setOpenDialog(false);
  };

  const handleDepartmentAdded = () => {
    setDepartmentAdded(true);
  };

  const [initialValues, setInitialValues] = useState({
    email: "",
    department: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios("http://localhost:5050/api/department");
      setData(result.data[0]);
      setInitialValues({ email: "", department: "" });
      if (result.data[0].length > 0) {
        setOpenDialog(false);
      } else {
        setOpenDialog(true);
      }
    };

    fetchData();
  }, [openDialog]);

  const handleOnSubmit = (values, actions) => {
    Axios({
      method: "POST",
      url: "http://localhost:5050/api/invite",
      data: values,
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        setOpen(true);
      })
      .catch((error) => {
        actions.setSubmitting(false);
        console.log(error);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Grid container spacing={3}>
            {openDialog && (
              <MedewerkerDialog
                setOpenDialog={handleDialog}
                handleDepartmentAdded={handleDepartmentAdded}
              />
            )}
            <Grid item xs={12}>
              {isSubmitting && <LinearProgress color="primary" />}
            </Grid>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Medewerker succesvol uitgenodigd
              </Alert>
            </Snackbar>
            <Snackbar
              open={departmentAdded}
              autoHideDuration={4000}
              onClose={handleClose}
            >
              <Alert onClose={handleClose} severity="success">
                Vestiging succesvol aangemaakt
              </Alert>
            </Snackbar>
            <Grid item xs={12}>
              <Field
                component={TextField}
                autoComplete="email"
                name="email"
                type="email"
                label="Email adres nieuwe medewerker"
                fullWidth={true}
                required
                disabled={data.length === 0 ? true : false}
                autoFocus={true}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                label="Selecteer een vestiging"
                required
                select={true}
                disabled={data.length === 0 ? true : false}
                fullWidth={true}
                name="department"
                inputProps={{
                  id: "department-lijst",
                }}
              >
                {data.map((department) => (
                  <MenuItem key={department.id} value={department.id}>
                    {department.naam}
                  </MenuItem>
                ))}
              </Field>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                disabled={data.length === 0 ? true : isSubmitting}
                onClick={submitForm}
                endIcon={<SendIcon />}
              >
                uitnodiging verzenden
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default MedewerkerAanmakenFormulier;
