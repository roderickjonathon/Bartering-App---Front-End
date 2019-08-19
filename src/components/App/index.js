import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from '../Navigation';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import MainContainer from '../../containers/MainContainer';

import * as ROUTES from '../../constants/routes';
import {withAuthentication} from '../Session';

import styles from './.App.css';
import Button from "react-bootstrap/Button";

const App = () => (
    <Router>
        <div className={styles.app}>
            <Navigation/>
            <hr/>
            <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
            <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
            <Route path={ROUTES.SALEITEMS} component={MainContainer}/>
            <Route path={ROUTES.NEWITEM} component={MainContainer}/>
            <Route exact path={ROUTES.HOME} component={HomePage}/>
            <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
            <Route path={ROUTES.ADMIN} component={AdminPage}/>
        </div>

    </Router>


);

export default withAuthentication(App);