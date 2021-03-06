import React, { Component } from 'react';
import AccountPage from "../components/Account";
import AccountBarterList from "../components/Account/AccountBarterList";


class AccountContainer extends Component {


    render() {
        return (
            <div className="accountBarterList">
                <AccountBarterList saleItems={this.props.saleItems} user={this.props.user}/>
                <AccountPage/>
            </div>
        )
    }
}


export default AccountContainer;