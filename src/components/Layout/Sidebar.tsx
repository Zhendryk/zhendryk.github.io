import React from 'react'

// Material-UI
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

// Icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle' // About Me
import WorkIcon from '@material-ui/icons/Work' // Experience
import SchoolIcon from '@material-ui/icons/School' // Education
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks' // Publications
import BuildIcon from '@material-ui/icons/Build' // Projects
import CategoryIcon from '@material-ui/icons/Category' // Skills
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents' // Awards
import FingerprintIcon from '@material-ui/icons/FingerPrint' // Interests

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            float: "left",
            maxWidth: "20%",
            // border: "1px solid black"
        },
        avatar: {
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1em",
            marginBottom: "1em",
            width: theme.spacing(25),
            height: theme.spacing(25)
        },
        list: {
            marginTop: "1em",
            marginBottom: "1em"
        },
        listItem: {

        },
    }));

export default function Sidebar(props: any) {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Avatar className={classes.avatar} alt="Jonathan Bailey" src="/static/images/avatar.png" />
            <Divider />
            <List className={classes.list} component="nav" aria-label="Resume Anchors">
                <ListItem button className={classes.listItem}>
                    <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                    <ListItemText primary="About Me"></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><WorkIcon /></ListItemIcon>
                    <ListItemText primary="Experience"></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><SchoolIcon /></ListItemIcon>
                    <ListItemText primary="Education"></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
                    <ListItemText primary="Publications"></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><BuildIcon /></ListItemIcon>
                    <ListItemText primary="Projects"></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><CategoryIcon /></ListItemIcon>
                    <ListItemText primary="Skills"></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><EmojiEventsIcon /></ListItemIcon>
                    <ListItemText primary="Awards"></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><FingerprintIcon /></ListItemIcon>
                    <ListItemText primary="Interests"></ListItemText>
                </ListItem>
            </List>
        </Container>
    )
}