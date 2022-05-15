import HomeIcon from "@mui/icons-material/Home";

import GroupIcon from "@mui/icons-material/Group";

import NotificationsIcon from "@mui/icons-material/Notifications";

import MenuIcon from "@mui/icons-material/Menu";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Home from "../components/Home/Home";
import Friends from "../components/Friends/Friends";
import Profile from "../components/Profile/Profile";
import Notifications from "../components/Notifications/Notifications";
import Menu from "../components/Menu/Menu";

export const routes = [
  {
    id: "nav-01",
    path: "",
    label: "Home",
    title: "facebook",
    titleColor: "primary",
    icon: <HomeIcon />,
    component: <Home />,
  },
  {
    id: "nav-02",
    path: "friends",
    label: "Friends",
    title: "Friends",
    icon: <GroupIcon />,
    component: <Friends />,
  },
  {
    id: "nav-03",
    path: "profile",
    label: "Profile",
    title: "Profile",
    icon: <AccountCircleIcon />,
    component: <Profile />,
  },
  {
    id: "nav-04",
    path: "notifications",
    label: "Notifications",
    title: "Notifications",
    icon: <NotificationsIcon />,
    component: <Notifications />,
  },
  {
    id: "nav-05",
    path: "menu",
    label: "Menu",
    title: "Menu",
    icon: <MenuIcon />,
    component: <Menu />,
  },
];
