import React, { FC, useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import { Container } from "@material-ui/core";

import "./App.css";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import Footer from "./components/Footer.tsx/Footer";
import Favourites from "./components/Favourties/Favourites";

// `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=`{searchQuery}`&limit=8&offset=0&rating=g&lang=en`
const KEY = process.env.REACT_APP_GIPHY_KEY;

const App: FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [favourites, setFavorites] = useState<object[]>([]);

    const fetchMore = (): void => {
        console.log(`fetching more`);
    };

    return (
        <Container className='App' maxWidth='xl'>
            <Router>
                <Switch>
                    <Nav />
                    <Route path='/favourites'>
                        <Favourites />
                    </Route>
                    <Route path='/search'>
                        <Search />
                        <Results />
                    </Route>
                    <Footer />
                </Switch>
            </Router>
        </Container>
    );
};

export default App;
