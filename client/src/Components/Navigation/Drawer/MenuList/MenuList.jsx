import React from "react";
//  Imports from List components material-ui
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
// Imports from icon components material-ui
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import MenuListItems from "./MenuListItems/MenuListItems";

const MenuList = ({ name, items }) => {
  const menu = items;

  return (
    <List
      dense
      subheader={
        <ListSubheader disableSticky id="nested-list-subheader">
          <Typography variant="subtitle2">{name}</Typography>
        </ListSubheader>
      }
    >
      <MenuListItems items={menu} />
    </List>
  );
};

MenuList.propTypes = {
  name: PropTypes.string,
  items: PropTypes.array,
};

export default MenuList;
