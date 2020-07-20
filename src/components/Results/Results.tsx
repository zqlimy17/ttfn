import React, { FC, useEffect } from "react";
import { Container } from "@material-ui/core";

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

interface ResultsProps {
    results: any[];
    favourites: string[];
    setFavourites: React.Dispatch<React.SetStateAction<string[]>>;
}

const Results: FC<ResultsProps> = ({ results, setFavourites }) => {
    const classes = styles;
    useEffect(() => {
        console.log(results);
    }, [results]);
    return (
        <Container style={classes.root} maxWidth={"xl"}>
            {results.map((result, index) => (
                <div style={classes.flex} key={index}>
                    <div
                        style={classes.imageContainer}
                        onClick={() =>
                            setFavourites((favourites) => [
                                ...favourites,
                                result.images.original_still.url,
                            ])
                        }
                    >
                        <img
                            src={result.images.original_still.url}
                            style={classes.image}
                        />
                    </div>
                </div>
            ))}
        </Container>
    );
};

export default Results;
