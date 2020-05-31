import React from "react";
import ResumeContentCard from "Components/Layout/ResumeContentCard";
import ResumeContentCardData from "Components/Layout/ResumeContentCardData";
import { Paper, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#c0c0c0",
        marginTop: "1rem",
        marginBottom: "1rem",
    },
    title: {
        padding: "0.2em",
    },
});

interface Props {
    title: string;
    cards: Array<ResumeContentCardData>;
}

export default function ResumeSection(props: Props) {
    const classes = useStyles();
    return (
        <Paper className={classes.root} elevation={3}>
            <Typography className={classes.title} variant="h3" color="textPrimary">
                {props.title}
            </Typography>
            <Divider />
            {props.cards.map((data, index) => {
                return <ResumeContentCard data={data} key={index} />;
            })}
        </Paper>
    );
}

ResumeSection.defaultProps = {
    cards: [],
};
