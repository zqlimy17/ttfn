import React, { FC, useState } from "react";
import FavouriteImage from "../Image/FavouriteImage";
import { Container } from "@material-ui/core";

interface FavouritesProps {
    favourites: string[];
    setFavourites: React.Dispatch<React.SetStateAction<string[]>>;
}

const styles: any = {
    root: {
        display: "flex",
        flexWrap: "wrap",
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

const Favourites: FC<FavouritesProps> = ({ favourites, setFavourites }) => {
    const [update, setUpdate] = useState<boolean>(false);
    const classes = styles;
    const handleRemove = (favourite: string): void => {
        console.log("removed");
        let tempArray = favourites;
        tempArray.splice(favourites.indexOf(favourite), 1);
        setFavourites(tempArray);
        setUpdate(!update);
    };
    return (
        <Container style={classes.root} maxWidth={"xl"}>
            {favourites.map((favourite: string, index: number) => (
                <div
                    style={classes.flex}
                    key={index}
                    onClick={() => {
                        handleRemove(favourite);
                    }}
                >
                    <FavouriteImage favourite={favourite} />
                </div>
            ))}
        </Container>
    );
};

export default Favourites;
