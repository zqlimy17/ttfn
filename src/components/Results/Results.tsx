import React, { FC, useEffect } from "react";
import Image from "../Image/Image";
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
    more: {
        fontWeight: "bold",
        display: "block",
        margin: "auto",
        padding: "10px 20px",
        backgroundColor: "grey",
        color: "white",
        border: "1px solid grey",
        fontSize: "1.5rem",
        borderRadius: "10px",
    },
};

interface ResultsProps {
    results: any[];
    favourites: string[];
    setFavourites: React.Dispatch<React.SetStateAction<string[]>>;
    fetchMore: () => Promise<void>;
}

const Results: FC<ResultsProps> = ({
    results,
    favourites,
    setFavourites,
    fetchMore,
}) => {
    const classes = styles;

    return (
        <Container maxWidth={"xl"}>
            <div style={classes.root}>
                {results.map((result, index) => (
                    <div style={classes.flex} key={index}>
                        <Image
                            result={result}
                            favourites={favourites}
                            setFavourites={setFavourites}
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={() => fetchMore()}
                style={classes.more}
                className='fetch-more'
            >
                Fetch More
            </button>
        </Container>
    );
};

export default Results;
