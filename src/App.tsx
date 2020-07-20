import React, { FC, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

// `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${searchQuery}&limit=8&offset=0&rating=g&lang=en`
const KEY = process.env.REACT_APP_GIPHY_KEY;

const theme = createMuiTheme({
    palette: {
        primary: grey,
        secondary: red,
    },
});

const App: FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [results, setResults] = useState<object[]>([]);
    const [favourites, setFavourites] = useState<string[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [fetched, setFetched] = useState<boolean>(false);

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();
        try {
            setFetched(false);
            setResults([]);
            setOffset(0);
            let response = await axios({
                // Calling the Mangools API to get the search volume for keywords[i].
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
            setSearchQuery("");
            console.log(response.data.data);
        } catch (error) {
            alert(error.message);
        } finally {
            setFetched(true);
            console.log(results);
        }
    };

    const fetchMore = (): void => {
        console.log(`fetching more`);
    };

    return (
        <Container className='App' maxWidth='xl'>
            <ThemeProvider theme={theme}>
                <Router>
                    <Nav />
                    <Switch>
                        <Route path='/favourites'>
                            <Favourites favourites={favourites} />
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
                                />
                            ) : (
                                ""
                            )}
                        </Route>
                        <Footer />
                    </Switch>
                </Router>
            </ThemeProvider>
        </Container>
    );
};

export default App;
