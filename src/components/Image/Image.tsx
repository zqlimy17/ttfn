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

interface ImageProps {
    result: any;
    favourites: string[];
    setFavourites: React.Dispatch<React.SetStateAction<string[]>>;
}

const Image: FC<ImageProps> = ({ result, favourites, setFavourites }) => {
    const classes = styles;

    return (
        <div
            style={classes.imageContainer}
            onClick={() =>
                setFavourites((favourites) => [
                    ...favourites,
                    result.images.original_still.url,
                ])
            }
        >
            <img src={result.images.original_still.url} style={classes.image} />
        </div>
    );
};

export default Image;
