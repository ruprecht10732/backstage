import Drawer from "@material-ui/core/Drawer";
import React from "react";
// Imports from Link and Breadcrumbs components from "@material-ui/"
import MenuList from "./MenuList/MenuList";
import DrawerHeader from "./DrawerHeader/DrawerHeader";

const DrawerLeft = () => {
  return (
    <div>
      <Drawer anchor="left" open variant="permanent">
        <DrawerHeader
          name="Robin Oost"
          size="medium"
          avatarVariant="circle"
          textVariant="h6"
        />
        <MenuList name="Persoonlijk" />
      </Drawer>
    </div>
  );
};

export default DrawerLeft;
