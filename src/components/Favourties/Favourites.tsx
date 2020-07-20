import React, { FC } from "react";
import FavouriteImage from "../Image/FavouriteImage";
import { Container } from "@material-ui/core";

interface FavouritesProps {
    favourites: string[];
}

const styles: any = {
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    flex: {
        flexGrow: "1",
        flexBasis: "22%",
        minWidth: "200px",
        maxWidth: "400px",
        margin: "0.5em",
    },
    imageContainer: {
        position: "relative",
        paddingBottom: "67%",
    },
    image: {
        objectFit: "cover",
        width: "100%",
        height: "100%",
        position: "absolute",
    },
};

const Favourites: FC<FavouritesProps> = ({ favourites }) => {
    const classes = styles;

    return (
        <Container style={classes.root} maxWidth={"xl"}>
            {favourites.map((favourite: string, index: number) => (
                <div style={classes.flex} key={index}>
                    <FavouriteImage favourite={favourite} />
                </div>
            ))}
        </Container>
    );
};

export default Favourites;
