import React, { FC } from "react";
import classes from "*.module.css";

const styles: any = {
    root: {
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        left: "0",
        bottom: "0",
        right: "0",
        backgroundColor: "#d3d3d3",
        padding: "0 50px",
    },
    paragraph: {
        margin: "7px",
        color: "#878787",
        fontWeight: "bold",
    },
};
const Footer: FC = () => {
    const classes = styles;
    return (
        <div style={classes.root}>
            <p style={classes.paragraph}>Gallereasy POC web app</p>
            <p style={classes.paragraph}>2359 Media</p>
        </div>
    );
};

export default Footer;
