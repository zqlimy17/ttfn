import React, { FC, useEffect } from "react";

interface ResultsProps {
    results: any[];
}

const Results: FC<ResultsProps> = ({ results }) => {
    useEffect(() => {
        console.log(results);
    }, [results]);
    return (
        <div>
            {results.map((result, index) => (
                // <div key={index}>{index}</div>
                <img src={result.images.original_still.url} />
            ))}
        </div>
    );
};

export default Results;
