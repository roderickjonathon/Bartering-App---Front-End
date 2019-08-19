import React, {Component} from 'react';
import {compose} from 'recompose';

import {withFirebase} from '../Firebase';
import {withAuthorization} from '../Session';
import * as ROLES from '../../constants/roles';

class AdminPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            users: [],
        };
    }

    componentDidMount() {
        this.setState({loading: true});

        // fetches users from database
        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();

            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));
            this.setState({
                users: usersList,
                loading: false,
            });
        });
    }

    // removes .on listener to prevent memory leaks using the reference
    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {

        const {loading, users} = this.state;

        return (
            <div>
                <p> This adming page is accessible by admins only</p>
                {loading && <div>Loading...</div>}
                <UserList users={users}/>;
            </div>
        );
    }
}

const UserList = ({users}) => (
    <ul>
        {users.map(user => (
            <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
                <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
                <span>
          <strong>Username:</strong> {user.username}
        </span>
            </li>
        ))}
    </ul>
);

const condition = authUser =>
    authUser && authUser.roles.includes(ROLES.ADMIN);

export default compose(
    withAuthorization(condition),
    withFirebase,
)(AdminPage);