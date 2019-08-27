import React, { Component } from 'react';
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
            <AccountBarterList saleItems={this.props.saleItems} user={this.props.user}/>

        </div>


        )

    }
}


export default AccountContainer;