import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Register from './views/public/authentication/register/Register';
import Login from './views/public/authentication/login/Login';
import Home from './views/private/home/Home';


export default function MainRoutes(){
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/login"/>
            </Route>
            <Route exact path="/register">
                <Register/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/home">
                <Home/>
            </Route>
        </Switch>
    )
}