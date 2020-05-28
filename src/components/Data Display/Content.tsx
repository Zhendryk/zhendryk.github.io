import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    contentContainer: {
        padding: "60 20 70 20",
    },
    postContainer: {
        marginBottom: 40,
    },
    header: {
        marginBottom: 0,
    },
    paragraph: {},
});

export default function Content(props: any) {
    const classes = useStyles();
    const title = "Here's a blog post title";
    const summary =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const posts = new Array(20).fill(0);

    return (
        <div className={classes.contentContainer}>
            {posts.map((post: object[], index: number) => {
                return (
                    <div className={classes.postContainer} key={index}>
                        <h2 className={classes.header}>{title}</h2>
                        <p className={classes.paragraph}>{summary}</p>
                    </div>
                );
            })}
        </div>
    );
}
