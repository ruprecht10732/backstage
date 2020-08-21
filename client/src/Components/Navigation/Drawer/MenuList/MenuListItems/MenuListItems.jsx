import React from "react";
import PropTypes from "prop-types";
import { ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import MenuListNestedItems from "../MenuListNestedItems/MenuListNestedItems";
import { NavLink, useRouteMatch } from "react-router-dom";

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
          <ListItem component={NavLink} button key={item.id} to={item.url}>
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
