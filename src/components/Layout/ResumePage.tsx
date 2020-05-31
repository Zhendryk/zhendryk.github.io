import React from "react";

// MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";

// LAYOUT
import ResumeSection from "Components/Layout/ResumeSection";
import ExpandableSidebar, { SidebarMenuItem } from "Components/Layout/ExpandableSidebar";

// ICONS
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import BuildIcon from "@material-ui/icons/Build";
import CategoryIcon from "@material-ui/icons/Category";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import FingerprintIcon from "@material-ui/icons/Fingerprint";

// ASSETS
import AvatarImg from "Assets/images/avatarMe.png";

// DATA
import { aboutBlurb, resumeWorkExperienceData, resumeEducationData } from "../../data/ResumeData";

const useStyles = makeStyles({
    root: {
        display: "flex",
    },
    content: {
        flexGrow: 1,
        padding: "1rem",
    },
});

const sidebarItems = [
    new SidebarMenuItem("About", <AccountCircleIcon />),
    new SidebarMenuItem("Experience", <WorkIcon />),
    new SidebarMenuItem("Education", <SchoolIcon />),
    new SidebarMenuItem("Projects", <BuildIcon />),
    new SidebarMenuItem("Skills", <CategoryIcon />),
    new SidebarMenuItem("Awards", <EmojiEventsIcon />),
    new SidebarMenuItem("Interests", <FingerprintIcon />),
];

export default function ResumePage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ExpandableSidebar menuItems={sidebarItems} avatar={AvatarImg} />
            <main className={classes.content}>
                <ResumeSection title="Jonathan Bailey" cards={[aboutBlurb]} />
                <ResumeSection title="Experience" cards={resumeWorkExperienceData} />
                <ResumeSection title="Education" cards={resumeEducationData} />
            </main>
        </div>
    );
}
