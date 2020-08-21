import React from "react";
import {
  makeStyles,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import DescriptionIcon from "@material-ui/icons/Description";
import PaymentIcon from "@material-ui/icons/Payment";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

const useStyles = makeStyles((theme) => ({
  fieldContainer: {
    background: "#F2F4F5",
    padding: "8%",
  },
}));

function BasisInformatie({ isEditable }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.fieldContainer}>
      <List>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <DescriptionIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Contract" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <GetAppIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <DescriptionIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Loonheffingsformulier" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <GetAppIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <DescriptionIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Geheimhouding-/integriteit overeenkomst" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <GetAppIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <PaymentIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Kopie bankpas" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <GetAppIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <AssignmentIndIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Kopie ID" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <GetAppIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Grid>
  );
}

export default BasisInformatie;
