import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    footerMenu: {
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        height: 50,
        backgroundColor: "#333",
        color: "#fff",
        position: "fixed",
        bottom: 0,
    },
    menuItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    menuSpan: {
        fontSize: 20,
    },
});

export default function FooterMenu(props: any) {
    const classes = useStyles();
    return (
        <div className={classes.footerMenu}>
            {props.menuItems.map((item: any, i: number) => {
                return (
                    <div className={classes.menuItem} key={i}>
                        <span className={classes.menuSpan}>{item.text}</span>
                    </div>
                );
            })}
        </div>
    );
}
