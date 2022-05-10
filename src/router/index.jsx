import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../views/login/login";
import Sanbox from "../views/sandbox/sanbox";
export default function IndexRouter() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}></Route>
                {/* <Route path="/" component={Sanbox}></Route> */}
                {/* 这里做了理由拦截 */}
                <Route
                    path="/"
                    render={() => {
                       return localStorage.getItem("token") ? (
                            <Sanbox></Sanbox>
                        ) : (
                            <Redirect to="/login"></Redirect>
                        );
                    }}
                ></Route>
            </Switch>
        </HashRouter>
    );
}
