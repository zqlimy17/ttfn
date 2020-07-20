import React, { FC, CSSProperties } from "react";
import { TextField, Container } from "@material-ui/core";

const styles: { [name: string]: CSSProperties } = {
    root: {},
    field: {},
    input: {
        fontSize: "3rem",
    },
};

interface SearchProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Search: FC<SearchProps> = ({
    searchQuery,
    setSearchQuery,
    handleSubmit,
}) => {
    const classes = styles;

    return (
        <Container maxWidth='md'>
            <form onSubmit={(event) => handleSubmit(event)}>
                <TextField
                    fullWidth
                    autoFocus
                    type={"string"}
                    placeholder='Start searching for images!'
                    style={classes.field}
                    inputProps={{
                        style: classes.input,
                    }}
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                />
            </form>
        </Container>
    );
};

export default Search;
