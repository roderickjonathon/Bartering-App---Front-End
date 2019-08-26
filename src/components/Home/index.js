import React from 'react';

import {withAuthorization} from '../Session';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const HomePage = () => (
    <Jumbotron>
        <h1>Welcome to Glasgow Bartering!</h1>
        <h3> Where would you like to go? </h3>
        <Form.Group>
        <Button variant="primary" href="/saleitems"> Check out local items for barter</Button>
        </Form.Group>
        <Form.Group>
        <Button variant="primary" href="/new-item"> Barter your own items</Button>
        </Form.Group>
    </Jumbotron>
);

//sets authorization permissions to be passed to withAuth...
// only logged in users
const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
