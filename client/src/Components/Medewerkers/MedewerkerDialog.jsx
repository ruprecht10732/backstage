import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import VestigingAanmakenFormulier from "../Vestigingen/VestigingAanmakenFormulier/VestigingAanmakenFormulier";
import BusinessIcon from "@material-ui/icons/Business";

export default function MedewerkerDialog({
  setOpenDialog,
  handleDepartmentAdded,
}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <BusinessIcon /> Vestiging aanmaken
        </DialogTitle>
        <DialogContent color="error">
          <DialogContentText color="error">
            Er is nog geen vestiging aangemaakt. Om een nieuwe medewerker te
            kunnen uitnodigen moet je eerst een vestiging aanmaken.
          </DialogContentText>
          <VestigingAanmakenFormulier
            setOpenDialog={setOpenDialog}
            handleDepartmentAdded={handleDepartmentAdded}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuleren
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
