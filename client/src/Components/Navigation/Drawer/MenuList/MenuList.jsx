import React from "react";
//  Imports from List components material-ui
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
// Imports from icon components material-ui
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import MenuListItems from "./MenuListItems/MenuListItems";
// Imports from icon components material-ui
import DescriptionIcon from "@material-ui/icons/Description";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import FaceIcon from "@material-ui/icons/Face";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import TimerIcon from "@material-ui/icons/Timer";

const menu1 = [
  {
    id: 1,
    name: "Dashboard",
    icon: <DashboardIcon />,
    url: "/Dashboard",
    beta: true,
  },
  {
    id: 2,
    name: "Clock in",
    icon: <TimerIcon />,
    url: "/clock-in",
    beta: true,
  },
  {
    id: 3,
    name: "Ik",
    icon: <FaceIcon />,
    url: "/profiel",
    beta: true,
  },
  {
    id: 4,
    name: "Verlof",
    icon: <HourglassEmptyIcon />,
    url: "/verlof",
    beta: true,
  },
  {
    id: 5,
    name: "Mijn documenten",
    icon: <DescriptionIcon />,
    url: "mijn-documenten",
    beta: true,
  },
  {
    id: 6,
    name: "Mijn taken",
    icon: <FormatListBulletedIcon />,
    url: "mijn-taken",
    beta: true,
  },
];

const MenuList = ({ name }) => {
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
        <MenuListItems items={menu1} />
      </List>
      <Divider />
    </>
  );
};

MenuList.propTypes = {
  name: PropTypes.string,
};

export default MenuList;
