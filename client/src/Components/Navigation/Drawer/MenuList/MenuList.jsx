import React from "react";
//  Imports from List components material-ui
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
// Imports from icon components material-ui
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import MenuListItems from "./MenuListItems/MenuListItems";

const MenuList = ({ name, items }) => {
  const menu = items;

  return (
    <>
      <List
        component="nav"
        dense
        subheader={
          <ListSubheader disableSticky id="nested-list-subheader">
            <Typography variant="subtitle2">{name}</Typography>
          </ListSubheader>
        }
      >
        <MenuListItems items={menu} />
      </List>
      <Divider />
    </>
  );
};

MenuList.propTypes = {
  name: PropTypes.string,
};

export default MenuList;