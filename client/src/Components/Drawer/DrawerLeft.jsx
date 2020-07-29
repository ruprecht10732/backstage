import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import CssBaseline from "@material-ui/core/CssBaseline";
import React, { Component, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
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
import DateRangeIcon from "@material-ui/icons/DateRange";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import DescriptionIcon from "@material-ui/icons/Description";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import SettingsIcon from "@material-ui/icons/Settings";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import FaceIcon from "@material-ui/icons/Face";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PageviewIcon from "@material-ui/icons/Pageview";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import TimerIcon from "@material-ui/icons/Timer";
import SchoolIcon from "@material-ui/icons/School";
// Imports from Link and Breadcrumbs components from "@material-ui/"
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import MenuList from "../MenuList/MenuList";

const menu1 = [
	{
		id: "1",
		name: "Dashboard",
		icon: <DashboardIcon />,
	},
	{
		id: "2",
		name: "Clock in",
		icon: <TimerIcon />,
	},
	{
		id: "3",
		name: "Profiel",
		icon: <FaceIcon />,
	},
	{ id: "4", name: "Verlof", icon: <HourglassEmptyIcon /> },
];

const menu2 = [
	{
		id: "1",
		name: "Dashboard",
		icon: <DashboardIcon />,
	},
	{
		id: "2",
		name: "Clock in",
		icon: <TimerIcon />,
	},
	{
		id: "3",
		name: "Profiel",
		icon: <FaceIcon />,
	},
	{ id: "4", name: "Verlof", icon: <HourglassEmptyIcon /> },
];
const DrawerLeft = (props) => {
	const [open, setOpen] = React.useState(false);
	const [collapse, setCollapse] = React.useState(false);
	useEffect(() => {
		console.log('Hoi')
	}, []);
	const handleDrawerClick = () => {
		setOpen(!open);
	};

	const handleCollapseClick = () => {
		setCollapse(!collapse);
	};

	return (
		<div>
			<CssBaseline />
			<AppBar position="fixed">
				<Toolbar>
					<IconButton
						color="inherit"
						size="medium"
						aria-label="Open menu"
						edge="start"
						onClick={handleDrawerClick}>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer anchor="left" open={open} variant="persistent">
				<IconButton edge="end" size="small" onClick={handleDrawerClick}>
					<ChevronLeftIcon />
				</IconButton>
				<Divider />
				<List
					component="nav"
					dense
					subheader={
						<ListSubheader component="div" id="nested-list-subheader">
							Je bent nu hier:
						</ListSubheader>
					}>
					<ListItem>
						<Breadcrumbs aria-label="breadcrumb" separator="›">
							<Link color="inherit" href="/">
								Jij
							</Link>

							<Link color="inherit" href="/getting-started/installation/">
								Financiën
							</Link>
							<Typography color="textPrimary">Jaaropgave</Typography>
						</Breadcrumbs>
					</ListItem>
					<Divider />
				</List>
				<MenuList items={menu1} name="Jij" />
				<MenuList items={menu2} name="Ik" />
			</Drawer>
		</div>
	);
};

export default DrawerLeft;
