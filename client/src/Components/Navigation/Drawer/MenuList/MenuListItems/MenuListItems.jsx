import React from "react";
import PropTypes from "prop-types";
import { ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import MenuListNestedItems from "../MenuListNestedItems/MenuListNestedItems";

const MenuListItems = ({ items }) => {
  return (
    <>
      {items.map((item) =>
        item.nested === true ? (
          <MenuListNestedItems
            key={item.id}
            id={item.id}
            icon={item.icon}
            name={item.text}
          />
        ) : (
          <ListItem button key={item.id}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        )
      )}
    </>
  );
};

MenuListItems.propTypes = {
  items: PropTypes.array,
};

export default MenuListItems;
