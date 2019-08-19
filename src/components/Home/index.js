import React from 'react';

import {withAuthorization} from '../Session';


const HomePage = () => (
    <div>
        <h1>Home Page</h1>
        <h1> Hi there </h1>
    </div>
);

//sets authorization permissions to be passed to withAuth...
// only logged in users
const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
