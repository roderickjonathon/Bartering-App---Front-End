import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import SignOutButton from "../SignOut";

// this import will allow the component to use React's context to consume the authenticated user
import { AuthUserContext } from '../Session';


//this function will decide on what navbar to show the user, depending on the level of authentication
// if user has authorisation then show correct navigation links, else show basic controls incl sign in button

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            { authUser =>
            authUser ? <NavigationAuth /> : <NavigationNonAuth />
                }
                </AuthUserContext.Consumer>
    </div>
);


// routes to show if user is logged in
const NavigationAuth = () => (
    <div>
        <ul>
            <li>
                <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
            <li>
                <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
            <li>
                <SignOutButton/>
            </li>
        </ul>
    </div>
);
// routes to show if no login
const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
    </ul>
);

export default Navigation;