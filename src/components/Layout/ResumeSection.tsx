import React from "react";
import PropTypes from "prop-types";
import ResumeContentCard from "Components/Layout/ResumeContentCard";
import ResumeContentCardData from "Components/Layout/ResumeContentCardData";
import { Paper, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#c0c0c0",
    },
    title: {
        padding: "0.25em",
    },
});

export default function ResumeSection(props: { title: string; cards: ResumeContentCardData[] }) {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Typography className={classes.title} variant="h2">
                {props.title}
            </Typography>
            {/* <Divider /> */}
            {props.cards.map((data) => {
                return <ResumeContentCard data={data} />;
            })}
        </Paper>
    );
}

ResumeSection.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.instanceOf(ResumeContentCardData)).isRequired,
};
