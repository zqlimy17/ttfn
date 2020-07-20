import React, { FC, CSSProperties } from "react";
import { NavLink } from "react-router-dom";

const styles: { [name: string]: CSSProperties } = {
    root: {
        backgroundColor: "white",
        color: "black",
        display: "inline-flex",
        margin: "5px 20px",
    },
    menu: {
        fontSize: "1.5rem",
        color: "#878787",
        textDecoration: "none",
        margin: "10px 20px",
    },
    active: {
        fontWeight: "bold",
        color: "#444444",
    },
};
const Nav: FC = () => {
    const classes = styles;
    return (
        <div>
            <div style={classes.root}>
                <NavLink to='/search' style={classes.menu}>
                    Galler
                    <span style={classes.active}>easy</span>
                </NavLink>
                <div style={classes.menu}>|</div>
                <NavLink
                    to='/search'
                    activeStyle={classes.active}
                    style={classes.menu}
                >
                    Search
                </NavLink>
                <NavLink
                    to='/favourites'
                    activeStyle={classes.active}
                    style={classes.menu}
                >
                    Favourites
                </NavLink>
            </div>
            <hr />
        </div>
    );
};

export default Nav;
