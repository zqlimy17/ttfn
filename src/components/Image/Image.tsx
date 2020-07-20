import React, { FC, useState, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";

const styles: any = {
    imageContainer: {
        position: "relative",
        paddingBottom: "67%",
    },
    image: {
        cursor: "pointer",
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

interface ImageProps {
    result: any;
    favourites: string[];
    setFavourites: React.Dispatch<React.SetStateAction<string[]>>;
}

const Image: FC<ImageProps> = ({ result, favourites, setFavourites }) => {
    const classes = styles;
    const [hover, setHover] = useState<boolean>(false);
    const [liked, setLiked] = useState<boolean>(false);

    useEffect(() => {
        try {
            if (favourites.includes(result.images.original_still.url)) {
                setLiked(true);
            }
        } catch (error) {
            alert(error.message);
        }
    }, [favourites]);

    const handleRemove = (): void => {
        setLiked(false);
        let tempArray = favourites;
        tempArray.splice(
            favourites.indexOf(result.images.original_still.url),
            1
        );
        setFavourites(tempArray);
    };
    return (
        <div
            style={classes.imageContainer}
            onClick={() => {
                liked
                    ? handleRemove()
                    : setFavourites((favourites) => [
                          ...favourites,
                          result.images.original_still.url,
                      ]);
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img src={result.images.original_still.url} style={classes.image} />
            {hover ? <FavoriteTwoToneIcon style={classes.like} /> : ""}
            {liked ? <FavoriteIcon style={classes.like} /> : ""}
        </div>
    );
};

export default Image;
