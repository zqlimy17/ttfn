import React, { FC, useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import axios from "axios";
import { Container } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { grey, red } from "@material-ui/core/colors";

import "./App.css";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import Footer from "./components/Footer.tsx/Footer";
import Favourites from "./components/Favourties/Favourites";

const KEY = process.env.REACT_APP_GIPHY_KEY;

const theme = createMuiTheme({
    palette: {
        primary: grey,
        secondary: red,
    },
});

const styles: any = {
    root: {
        paddingBottom: "50px",
    },
};

const App: FC = () => {
    const classes = styles;
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [results, setResults] = useState<object[]>([]);
    const [favourites, setFavourites] = useState<string[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [fetched, setFetched] = useState<boolean>(false);
    const [update, setUpdate] = useState<boolean>(false);

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();
        try {
            setFetched(false);
            setResults([]);
            setOffset(0);
            let response = await axios({
                method: "get",
                url: `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${searchQuery}&limit=8&offset=${offset}&rating=g&lang=en`,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers":
                        "Content-Type, Authorization",
                },
            });
            setOffset((offset) => offset + 8);
            setResults((results) => results.concat(response.data.data));
        } catch (error) {
            alert(error.message);
        } finally {
            setFetched(true);
        }
    };

    const fetchMore = async (): Promise<void> => {
        try {
            let response = await axios({
                method: "get",
                url: `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${searchQuery}&limit=8&offset=${offset}&rating=g&lang=en`,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers":
                        "Content-Type, Authorization",
                },
            });
            setOffset((offset) => offset + 8);
            setResults((results) => results.concat(response.data.data));
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Container className='App' maxWidth='xl' style={classes.root}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Redirect to='/search' />
                    <Nav num={favourites.length} />
                    <Switch>
                        <Route path='/favourites'>
                            <Favourites
                                favourites={favourites}
                                setFavourites={setFavourites}
                                update={update}
                                setUpdate={setUpdate}
                            />
                        </Route>
                        <Route path='/search'>
                            <Search
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                                handleSubmit={handleSubmit}
                            />
                            {fetched ? (
                                <Results
                                    results={results}
                                    favourites={favourites}
                                    setFavourites={setFavourites}
                                    fetchMore={fetchMore}
                                />
                            ) : (
                                ""
                            )}
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </ThemeProvider>
        </Container>
    );
};

export default App;
