import Drawer from "@material-ui/core/Drawer";
import React from "react";
// Imports from Link and Breadcrumbs components from "@material-ui/"
import MenuList from "./MenuList/MenuList";
import MenuItems from "../../../static/json/menu.js";

const DrawerLeft = () => {
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
    <div>
      <Drawer anchor="left" open variant="permanent">
        {typeof persoonlijkMenu !== "undefined" || persoonlijkMenu !== null ? (
          <MenuList name="Persoonlijk" items={persoonlijkMenu} />
        ) : null}

        {typeof beheerMenu !== "undefined" || beheerMenu !== null ? (
          <MenuList name="Jouw bedrijf" items={beheerMenu} />
        ) : null}
      </Drawer>
    </div>
  );
};

export default DrawerLeft;
