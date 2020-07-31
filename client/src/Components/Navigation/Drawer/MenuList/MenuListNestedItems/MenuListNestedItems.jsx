import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  List,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const MenuListNestedItems = ({ id, name, icon }) => {
  const [collapse, setCollapse] = React.useState(false);
  const handleCollapseClick = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <ListItem button key={id} onClick={handleCollapseClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
        {collapse ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={collapse} timeout="auto">
        <List component="nav" dense>
          <ListItem button key={id}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>Hallo</ListItemText>
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

MenuListNestedItems.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  icon: PropTypes.element,
};

export default MenuListNestedItems;
