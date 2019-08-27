import React, { Component } from 'react';
import Request from "../helpers/request";
import firebase from "firebase";
import Button from "react-bootstrap/Button";
import AccountPage from "../components/Account";
import AccountBarterList from "../components/Account/AccountBarterList";


class AccountContainer extends Component {

    constructor(props) {
        super(props);

    }

    fileDeleteHandler = () => {

    };

    render () {
        return (
        <div className="accountBarterList">
            <p> ACCOUNT CONTAINER</p>
            <AccountPage/>
            <AccountBarterList/>

        </div>


        )

    }
}


export default AccountContainer;