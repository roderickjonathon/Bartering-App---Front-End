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

import * as ROUTES from '../../constants/routes';
import { withFirebase } from "../Firebase";

import { AuthUserContext } from '../session';

class App extends Component {
    constructor(props) {
        super(props);

        //set authUser to null to allow all child components to keep track of authenticated user so they can adjust
        // their behaviour depending on user.
        this.state = {
            authUser: null,
        };
    }

    //use firebase's listener function to get authenticated user from firebase
    // helper function onAuthStateChanged() takes in a function that has access to the auth user.
    // this function is called everytime something changes for the authenticated user(sign in, sign out etc)
    // once singed out, authUser is set to null which is assigned at global level in the state, therefore passing down
    // property to child components via props.
    componentDidMount() {
       this.listener =  this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser
            ? this.setState({ authUser })
            : this.setState({authUser: null});
        });
    }
    // added to avoid memory leaks, removes listener if component unmounts.
    componentWillUnmount() {
        this.listener();
    }

    render() {
        return (
            //user authentication being passed in
            <AuthUserContext.Provider value={this.state.authUser}>
    <Router>
        <div>
        <Navigation authUser={this.state.authUser} />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage}/>
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
    </Router>
            </AuthUserContext.Provider>
     );
    }
}

export default withFirebase(App);
