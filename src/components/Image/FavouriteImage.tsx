import React, { FC } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";

const styles: any = {
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

interface FavouriteImageProps {
    favourite: string;
}

const FavouriteImage: FC<FavouriteImageProps> = ({ favourite }) => {
    const classes = styles;

    return (
        <div style={classes.imageContainer}>
            <img src={favourite} style={classes.image} />
        </div>
    );
};

export default FavouriteImage;
