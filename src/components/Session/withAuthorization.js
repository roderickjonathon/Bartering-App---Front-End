import React from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import AuthUserContext from "./context";
import {withFirebase} from "../Firebase";
import * as ROUTES from '../../constants/routes';

//takes in a component as an input and returns it as output
const withAuthorization = condition => Component => {
    class WithAuthorization extends React.Component {

        // this method uses the firebase listener to trigger a callback function every time the authenticated user changes
        // if it authorization fails, the user is redirected to sign-in page.
        // if it passes, it does nothing and continues to render the chosen component
        componentDidMount() {
            this.listener = this.props.firebase.onAuthUserListener(
                authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push(ROUTES.SIGN_IN);
                    }
                },
                () => this.props.history.push(ROUTES.SIGN_IN),
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        // Render method protected if no user is authorized, will not show without auth
        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser =>
                        condition(authUser) ? <Component {...this.props} /> : null
                    }
                </AuthUserContext.Consumer>
            )
        }
    }

    return compose(
        withRouter,
        withFirebase,
    )(WithAuthorization);
};

export default withAuthorization;