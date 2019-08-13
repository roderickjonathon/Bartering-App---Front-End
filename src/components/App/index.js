import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import MainContainer from '../../containers/MainContainer';

import * as ROUTES from '../../constants/routes';
import  { withAuthentication } from '../Session';

import './App.css';

import Form from '../Form/Form.js';
import firebase from 'firebase';
import firebaseConfig from '../Firebase';

// firebase.initializeApp(firebaseConfig);

const App = () => (
    <Router>
        <div>
            <Navigation />


            <hr />

            <div>
            </div>

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage} />
                <Route path={ROUTES.SALEITEMS} component ={MainContainer}/>
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>

    </Router>


);

export default withAuthentication(App);