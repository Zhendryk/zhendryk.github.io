import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    topbar: {
        position: "fixed",
        top: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 40,
        backgroundColor: "white",
        borderBottom: "1px solid black",
        fontWeight: "bold",
        padding: "0px 20px",
        boxSizing: "border-box",
    },
});

export default function TopBar(props: any) {
    const classes = useStyles();
    return (
        <div className={classes.topbar}>
            <span>Hello</span>
            App
            <span>World!</span>
        </div>
    );
}
