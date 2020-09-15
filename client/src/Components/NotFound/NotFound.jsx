import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(0),
    flex: 1,
  },
  subtitle: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(3),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NotFound() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              Foutmelding: 404 (Pagina niet gevonden)
            </Typography>
          </Toolbar>
        </AppBar>

        <List className={classes.subtitle}>
          <Typography variant="h5">
            De pagina die je zocht bestaat niet (meer). Keer terug naar een van
            de volgende pagina's:
          </Typography>
          <NavLink to="/profiel">
            <ListItemText primary="Home pagina" />
          </NavLink>
        </List>
      </Dialog>
    </div>
  );
}
