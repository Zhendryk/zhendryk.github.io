import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, useTheme, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ResumeContentCard from "./ResumeContentCard";
import { resumeWorkExperienceData } from "../../data/ResumeData";

import Avatar from "@material-ui/core/Avatar";
import AvatarImg from "Assets/images/AvatarImg.png";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import BuildIcon from "@material-ui/icons/Build";
import CategoryIcon from "@material-ui/icons/Category";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import FingerprintIcon from "@material-ui/icons/Fingerprint";

const listItems = ["About", "Experience", "Education", "Projects", "Skills", "Awards", "Interests"];
const listItemIcons = [<AccountCircleIcon />, <WorkIcon />, <SchoolIcon />, <BuildIcon />, <CategoryIcon />, <EmojiEventsIcon />, <FingerprintIcon />];

const drawerWidth = 300;
const avatarContainerHeight = 50;
const avatarExpandedContainerHeight = 250;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        avatarContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        avatarContainerClosed: {
            height: avatarContainerHeight,
            transition: theme.transitions.create(["width", "height"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        avatarContainerOpen: {
            height: avatarExpandedContainerHeight,
            transition: theme.transitions.create(["width", "height"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        avatar: {},
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: "nowrap",
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9) + 1,
            },
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: "hidden",
        },
        toolbar: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    })
);

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>{open ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
                </div>
                <Divider />
                <div
                    className={clsx(classes.avatarContainer, {
                        [classes.avatarContainerOpen]: open,
                        [classes.avatarContainerClosed]: !open,
                    })}
                >
                    <Avatar className={classes.avatar} alt="Jonathan Bailey" src={AvatarImg} />
                </div>
                <Divider />
                <List>
                    {listItems.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{listItemIcons[index]}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                {resumeWorkExperienceData.map((data) => {
                    return <ResumeContentCard data={data} />;
                })}
            </main>
        </div>
    );
}
