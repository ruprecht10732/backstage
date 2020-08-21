import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { Grid, Button, FormControlLabel, Checkbox } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

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
  sliderTitle: {
    marginBottom: "13%",
  },
  dagen: {
    marginLeft: "-5%",
    width: "100%",
  },
  checkbox: {
    padding: 0,
  },
}));

function valuetext(value) {
  return `${value} uur per week`;
}

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 12,
    label: "12",
  },
  {
    value: 24,
    label: "24",
  },
  {
    value: 36,
    label: "36",
  },
  {
    value: 40,
    label: "40",
  },
];

export default function RangeSlider({ isEditable }) {
  const classes = useStyles();
  const [value, setValue] = React.useState([24, 40]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container xs={12} spacing={5} className={classes.fieldContainer}>
        <Grid item xs={12}>
          <Typography
            id="range-slider"
            gutterBotto
            className={classes.sliderTitle}
          >
            Uren beschikbaar per week
          </Typography>
          <Slider
            min={0}
            max={40}
            marks={marks}
            value={value}
            onChange={handleChange}
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            valueLabelDisplay="on"
            disabled={isEditable ? false : true}
          />
        </Grid>
        <Grid item xs={12} className={classes.dagen}>
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                size="small"
                color="primary"
                className={classes.checkbox}
              />
            }
            label="Ma"
            labelPlacement="top"
            disabled={isEditable ? false : true}
          />
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                size="small"
                color="primary"
                className={classes.checkbox}
              />
            }
            label="Di"
            labelPlacement="top"
            disabled={isEditable ? false : true}
          />
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                size="small"
                color="primary"
                className={classes.checkbox}
              />
            }
            label="Wo"
            labelPlacement="top"
            disabled={isEditable ? false : true}
          />
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                size="small"
                color="primary"
                className={classes.checkbox}
              />
            }
            label="Do"
            labelPlacement="top"
            disabled={isEditable ? false : true}
          />
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                size="small"
                color="primary"
                className={classes.checkbox}
              />
            }
            label="Vr"
            labelPlacement="top"
            disabled={isEditable ? false : true}
          />
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                size="small"
                color="primary"
                className={classes.checkbox}
              />
            }
            label="Za"
            labelPlacement="top"
            disabled={isEditable ? false : true}
          />
        </Grid>

        <Grid item xs={12}>
          {isEditable ? (
            <Button
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
      </Grid>
    </>
  );
}
