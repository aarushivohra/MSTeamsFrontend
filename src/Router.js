import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Register from './components/authentication/register/Register';
import Login from './components/authentication/login/Login';

export default function MainRoutes(){
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/register"/>
            </Route>
            <Route exact path="/register">
                <Register/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
        </Switch>
    )
}