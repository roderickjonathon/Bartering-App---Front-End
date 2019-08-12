import React from 'react';

import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";

const withAuthentication = Component => {
    class WithAuthentication extends React.Component {

        // this class will bring in all the logic that deals with the auth user from App
        // this is to make our components cleaner and concise

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
            this.listener = this.props.firebase.onAuthUserListener(
                authUser => {
                    this.setState({ authUser });
                },
                () => {
                    this.setState({ authUser: null });
                },
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            );
        }
    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;