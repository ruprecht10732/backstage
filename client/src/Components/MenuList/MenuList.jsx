import React, { Component } from "react";
//  Imports from List components material-ui
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// Imports from icon components material-ui
import ContactsIcon from "@material-ui/icons/Contacts";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";

const MenuList = ({ items, name }) => {
	const [collapse, setCollapse] = React.useState(false);
	const handleCollapseClick = () => {
		setCollapse(!collapse);
	};

	return (
		<>
			<List
				component="nav"
				dense
				subheader={
					<ListSubheader
						disableSticky
						component="li"
						id="nested-list-subheader">
						<ListItem button onClick={handleCollapseClick}>
							{name}
							<ListItemIcon>
								{collapse ? <ExpandLess /> : <ExpandMore />}
							</ListItemIcon>
						</ListItem>
					</ListSubheader>
				}>
				<Collapse in={collapse} timeout="auto" unmountOnExit>
					{items.map((item) => (
						<ListItem button key={item.id}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.name} />
						</ListItem>
					))}
					;
				</Collapse>
			</List>
			<Divider />
		</>
	);
};

MenuList.propTypes = {
	items: PropTypes.array,
	name: PropTypes.string,
};

export default MenuList;
