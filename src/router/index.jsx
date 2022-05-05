import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Login from "../views/login/login";
import Sanbox from "../views/sandbox/sanbox";
export default function IndexRouter() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/" component={Sanbox}></Route>
            </Switch>
        </HashRouter>
    );
}
