import React from "react";

// Imports from icon components material-ui
import DescriptionIcon from "@material-ui/icons/Description";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import FaceIcon from "@material-ui/icons/Face";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import TimerIcon from "@material-ui/icons/Timer";
import TodayIcon from "@material-ui/icons/Today";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import CalendarViewDayOutlinedIcon from "@material-ui/icons/CalendarViewDayOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import UpdateOutlinedIcon from "@material-ui/icons/UpdateOutlined";

const menu = [
  {
    id: 1,
    order: 1,
    menuType: "Persoonlijk",
    text: "Dashboard",
    icon: <DashboardIcon />,
    url: "/Dashboard",
    beta: false,
    public: true,
    new: false,
    visibility: "everyone",
  },
  {
    id: 2,
    order: 3,
    menuType: "Persoonlijk",
    text: "Clock in",
    icon: <TimerIcon />,
    url: "/clock-in",
    beta: false,
    public: true,
    new: false,
    visibility: "everyone",
  },
  {
    id: 3,
    order: 2,
    text: "Profiel",
    menuType: "Persoonlijk",
    icon: <FaceIcon />,
    url: "/profiel",
    beta: false,
    public: true,
    new: false,
    visibility: "everyone",
  },
  {
    id: 4,
    order: 5,
    text: "Verlof",
    menuType: "Persoonlijk",
    icon: <HourglassEmptyIcon />,
    url: "/verlof",
    beta: false,
    public: true,
    new: false,
    visibility: "everyone",
  },
  {
    id: 5,
    order: 6,
    text: "Mijn documenten",
    menuType: "Persoonlijk",
    icon: <DescriptionIcon />,
    url: "/mijn-documenten",
    beta: false,
    public: true,
    new: false,
    visibility: "everyone",
  },
  {
    id: 6,
    order: 4,
    text: "Taken",
    menuType: "Persoonlijk",
    icon: <FormatListBulletedIcon />,
    url: "/mijn-taken",
    beta: false,
    public: true,
    new: false,
    visibility: "everyone",
    nested: false,
  },
  {
    id: 7,
    order: 1,
    text: "Medewerkers",
    menuType: "Beheer",
    icon: <SupervisedUserCircleOutlinedIcon />,
    url: "",
    beta: false,
    public: true,
    new: false,
    visibility: "administrator, manager",
  },
  {
    id: 8,
    order: 2,
    text: "Agenda",
    menuType: "Beheer",
    icon: <TodayIcon />,
    url: "",
    beta: false,
    public: true,
    new: false,
    visibility: "administrator, manager",
  },
  {
    id: 9,
    order: 3,
    text: "Uren beheren",
    menuType: "Beheer",
    icon: <CalendarViewDayOutlinedIcon />,
    url: "",
    beta: false,
    public: true,
    new: false,
    visibility: "administrator, manager",
  },
  {
    id: 10,
    order: 4,
    text: "Shifts",
    menuType: "Beheer",
    icon: <UpdateOutlinedIcon />,
    url: "",
    beta: false,
    public: true,
    new: false,
    visibility: "administrator, manager",
  },
  {
    id: 11,
    order: 5,
    text: "Documenten",
    menuType: "Beheer",
    icon: <InsertDriveFileOutlinedIcon />,
    url: "",
    beta: false,
    public: true,
    new: false,
    visibility: "administrator, manager",
  },

  {
    id: 11,
    order: 100,
    text: "Instellingen",
    menuType: "Beheer",
    icon: <SettingsOutlinedIcon />,
    url: "",
    beta: false,
    public: true,
    new: false,
    visibility: "administrator, manager",
  },
];

export default menu;
