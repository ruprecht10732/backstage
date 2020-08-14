import Drawer from "@material-ui/core/Drawer";
import React from "react";
// Imports from Link and Breadcrumbs components from "@material-ui/"
import MenuList from "./MenuList/MenuList";
import MenuItems from "../../../static/menu/menu.js";
import { makeStyles } from "@material-ui/core";

const drawerWidth = 200;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    background: "#F2F4F5",
    border: "none",
    width: drawerWidth,
  },
});

const DrawerLeft = () => {
  const classes = useStyles();

  const persoonlijkMenu = [...MenuItems]
    .filter(
      (menu) =>
        menu.menuType === "Persoonlijk" &&
        menu.public === true &&
        menu.visibility === "everyone"
    )
    .sort((a, b) => a.order - b.order);

  const beheerMenu = [...MenuItems]
    .filter((menu) => menu.menuType === "Beheer" && menu.public === true)
    .sort((a, b) => a.order - b.order);

  return (
    <Drawer
      className={classes.drawer}
      open
      variant="persistent"
      classes={{
        paperAnchorLeft: classes.drawerPaper,
      }}
    >
      {typeof persoonlijkMenu !== "undefined" || persoonlijkMenu !== null ? (
        <MenuList name="Persoonlijk" items={persoonlijkMenu} />
      ) : null}

      {typeof beheerMenu !== "undefined" || beheerMenu !== null ? (
        <MenuList name="Jouw bedrijf" items={beheerMenu} />
      ) : null}
    </Drawer>
  );
};

export default DrawerLeft;
