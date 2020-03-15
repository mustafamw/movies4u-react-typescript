import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../views/home-page/HomePage";
import MoviePage from "../views/movie-page/MoviePage";
import { Configs } from "../config/Config";

class Routers extends React.Component {
    render() {
        return (
            <Switch>
                <Redirect exact from="/" to={`/${Configs.query}`} />
                <Route exact path="/:query">
                    <HomePage />
                </Route>
                <Route path="/movie/:id">
                    <MoviePage />
                </Route>
                <Redirect from='*' to='/' />
            </Switch>
        );
    }
}

export default Routers;
