import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Avatar from "@material-ui/core/Avatar";

const collapsedSidebarWidth = 60;
const expandedSidebarWidth = 300;
const collpasedAvatarHeight = collapsedSidebarWidth;
const expandedAvatarHeight = expandedSidebarWidth;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            // float: "left",
        },
        avatarContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: collpasedAvatarHeight,
        },
        avatarContainerClosed: {
            height: collpasedAvatarHeight,
            transition: theme.transitions.create(["width", "height"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        avatarContainerOpen: {
            height: expandedAvatarHeight,
            transition: theme.transitions.create(["width", "height"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        avatar: {
            width: "75%",
            height: "75%",
        },
        sidebar: {
            backgroundColor: theme.palette.primary.main,
            width: expandedSidebarWidth,
            flexShrink: 0,
            whiteSpace: "nowrap",
        },
        sidebarExpanded: {
            backgroundColor: theme.palette.primary.main,
            width: expandedSidebarWidth,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        sidebarCollapsed: {
            backgroundColor: theme.palette.primary.main,
            width: collapsedSidebarWidth,
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
        },
    })
);

interface Props {
    menuItems: Array<SidebarMenuItem>;
    avatar?: string;
}

export class SidebarMenuItem {
    text: String;
    icon: JSX.Element;
    constructor(text: String, icon: JSX.Element) {
        this.text = text;
        this.icon = icon;
    }
}

export default function ExpandableSidebar(props: Props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);

    const handleSidebarExpand = () => {
        setExpanded(true);
    };

    const handleSidebarCollapse = () => {
        setExpanded(false);
    };

    const OptionalAvatar = (src?: string) => {
        if (src) {
            return (
                <React.Fragment>
                    <Divider />
                    <div
                        className={clsx(classes.avatarContainer, {
                            [classes.avatarContainerOpen]: expanded,
                            [classes.avatarContainerClosed]: !expanded,
                        })}
                    >
                        <Avatar className={classes.avatar} src={src} />
                    </div>
                    <Divider />
                </React.Fragment>
            );
        } else {
            return <Divider />;
        }
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={clsx(classes.sidebar, expanded ? classes.sidebarExpanded : classes.sidebarCollapsed)}
                classes={{ paper: clsx(expanded ? classes.sidebarExpanded : classes.sidebarCollapsed) }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={expanded ? handleSidebarCollapse : handleSidebarExpand}>
                        {expanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                {OptionalAvatar(props.avatar)}
                <List>
                    {props.menuItems.map((menuItem, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>{menuItem.icon}</ListItemIcon>
                            <ListItemText primary={menuItem.text} color="textPrimary" />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
