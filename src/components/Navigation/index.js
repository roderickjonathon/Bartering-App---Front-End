import React from 'react';

import * as ROUTES from '../../constants/routes';
import SignOutButton from "../SignOut";
// import * as ROLES from "../../constants/roles";

// this import will allow the component to use React's context to consume the authenticated user
import {AuthUserContext} from '../Session';
import Dropdown from "react-bootstrap/Dropdown";


//this function will decide on what navbar to show the user, depending on the level of authentication
// if user has authorisation then show correct navigation links, else show basic controls incl sign in button

const Navigation = () => (
    <AuthUserContext.Consumer>
        {authUser =>
            authUser ? (
                <NavigationAuth authUser={authUser}/>
            ) : (
                <NavigationNonAuth/>
            )
        }
    </AuthUserContext.Consumer>
);

// routes to show if user is logged in
const NavigationAuth = ({authUser}) => (
    <div className="nav">
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Menu
            </Dropdown.Toggle>
                <Dropdown.Menu>

                    <Dropdown.Item href={ROUTES.HOME}>Home</Dropdown.Item>


                    <Dropdown.Item href={ROUTES.ACCOUNT}>Account</Dropdown.Item>


                    <Dropdown.Item href={ROUTES.SALEITEMS}>List of Local Barters</Dropdown.Item>


                    <Dropdown.Item href={ROUTES.CHAT}>Chat(Coming soon!)</Dropdown.Item>


                    <Dropdown.Item href={ROUTES.NEWITEM}>Add New Item for Barter</Dropdown.Item>


                    <Dropdown.Item> <SignOutButton/> </Dropdown.Item>

        </Dropdown.Menu>
        </Dropdown>
    </div>
);


// routes to show if no login
const NavigationNonAuth = () => (
    <div className="nav">
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Menu
        </Dropdown.Toggle>
            <Dropdown.Menu>

                    <Dropdown.Item href={ROUTES.SIGN_IN}>Sign In</Dropdown.Item>

                    <Dropdown.Item href={ROUTES.LANDING}>Landing</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
);

export default Navigation;