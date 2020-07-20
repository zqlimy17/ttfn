import React, { FC, useState } from "react";
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
    like: {
        zIndex: 2,
        position: "absolute",
        bottom: 0,
        right: 0,
        color: "red",
        padding: "5px",
        fontSize: "48px",
    },
};

interface FavouriteImageProps {
    favourite: string;
}
const FavouriteImage: FC<FavouriteImageProps> = ({ favourite }) => {
    const classes = styles;
    const [hover, setHover] = useState<boolean>(false);

    return (
        <div
            style={classes.imageContainer}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img src={favourite} style={classes.image} />
            {hover ? (
                <FavoriteTwoToneIcon style={classes.like} />
            ) : (
                <FavoriteIcon style={classes.like} />
            )}
        </div>
    );
};

export default FavouriteImage;
