import React from "react";
import PropTypes from "prop-types";
import ResumeContentCardData from "./ResumeContentCardData";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles({
    root: {
        padding: "0.5rem",
    },
    container: {
        backgroundColor: "white",
    },
    header: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        alignItems: "baseline",
    },
    headerDetail: {
        display: "flex",
        textAlign: "right",
        paddingRight: "1em",
    },
});

// TODO: Add functionality for "Fade in when it comes on screen" (don't fade out after it goes off again)

export default function ResumeContentCard(props: { data: ResumeContentCardData }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grow in={true} timeout={1000}>
                <Card className={classes.container}>
                    <div className={classes.header}>
                        <CardHeader title={props.data.title} subheader={props.data.subtitle || ""}></CardHeader>
                        <Typography className={classes.headerDetail} variant="h6" color="primary">
                            {props.data.detailText || ""}
                        </Typography>
                    </div>
                    <CardContent>
                        <Typography variant="body2" color="textPrimary" component="p">
                            {props.data.content}
                        </Typography>
                    </CardContent>
                </Card>
            </Grow>
        </div>
    );
}

ResumeContentCard.propTypes = {
    data: PropTypes.instanceOf(ResumeContentCardData).isRequired,
};
