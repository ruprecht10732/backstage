import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

function VerlofLijst() {
  return (
    <List
      dense
      disablePadding
      component="nav"
      aria-label="main mailbox folders"
    >
      <ListItem>
        <ListItemIcon>
          <CheckBoxIcon />
        </ListItemIcon>
        <ListItemText primary="10 September 2020" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckBoxIcon />
        </ListItemIcon>
        <ListItemText primary="10 September 2020" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckBoxIcon />
        </ListItemIcon>
        <ListItemText primary="10 September 2020" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckBoxIcon />
        </ListItemIcon>
        <ListItemText primary="10 September 2020" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckBoxIcon />
        </ListItemIcon>
        <ListItemText primary="10 September 2020" />
      </ListItem>
    </List>
  );
}

export default VerlofLijst;
