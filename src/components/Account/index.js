import React from 'react';

import {PasswordForgetForm} from '../PasswordForget';
// import PasswordChangeForm from '../PasswordChange';

import {AuthUserContext, withAuthorization} from '../Session';

const AccountPage = () => (
// Account page protected by authorization
    <AuthUserContext.Consumer>
        {authUser => (
            <div className="passWordReset" id="passWordReset">
                <h1>Password Reset </h1>
                <PasswordForgetForm/>
                <hr/>
            </div>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);