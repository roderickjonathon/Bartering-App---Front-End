import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import {withFirebase} from '../Firebase';


import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUpPage = () => (
    <div id="sign-in">
        <h1>Welcome to Glasgow Barter!</h1>
        <h2> Please sign up to use our App.</h2>
        <SignUpForm/>
    </div>
);

const INITIAL_STATE = {

    displayName: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    // isAdmin: null,
    error: null,
};

//this class will be responsible for implementing the signup form, will use firebase's default error messages
class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    //submit function to send for authentication
    onSubmit = event => {
        const {displayName, email, passwordOne, isAdmin} = this.state;
        const roles = {};
        //checking for admin privileges
        if (isAdmin) {
            roles[ROLES.ADMIN] = ROLES.ADMIN;
        }

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, displayName, passwordOne)
            .then(authUser => {
                //  if  doCreate function is successful, creates a user in the database
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        displayName,
                        email,
                        roles,
                    });
            })
            .then(() => {
                this.setState({...INITIAL_STATE});
                //user Router to redirect to homepage
                this.props.history.push(ROUTES.HOME)
            })
            .catch(error => {
                this.setState({error})

        });
        event.preventDefault();

    };
    //function to set state with inputted values
    onChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    onChangeCheckbox = event => {
        this.setState({[event.target.name]: event.target.checked});
    };

    render() {
        const {
            displayName,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        //guard to stop null values being submitted
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            displayName === '';

        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Control
                        name="displayName"
                        value={displayName}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Username"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Confirm Password"
                    />
                </Form.Group>
                <Button disabled={isInvalid} type="submit">Sign Up</Button>

                {error && <p>{error.message}</p>}

            </Form>
        );
    }
}


const SignUpLink = () => (
    <div id="sign-up-btn">
        <p> Don't have an account? </p>
        <div> </div>
        <Button href={ROUTES.SIGN_UP}>Sign Up</Button>
    </div>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default SignUpPage;
export {SignUpForm, SignUpLink};