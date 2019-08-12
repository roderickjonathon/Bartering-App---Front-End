import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
// import { compose } from 'recompose';


import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    isAdmin: null,
    error: null,
};

//this class will be responsible for implementing the signup form, will use firebase's default error messages
class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE };
    }

    //submit function to send for authentication
    onSubmit = event => {
        const { username, email, passwordOne, isAdmin} = this.state;
        const roles = {};
        //checking for admin privalges
        if (isAdmin) {
        roles[ROLES.ADMIN] = ROLES.ADMIN;
        }

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                    //  if  doCreate function is successful, creates a user in the database
                    return this.props.firebase
                        .user(authUser.user.uid)
                        .set({
                            username,
                            email,
                            roles,
                        });
                })
            .then(() => {
                this.setState({ ...INITIAL_STATE});
                //user Router to redirect to homepage
                this.props.history.push(ROUTES.HOME)
            });
            // .catch(error => {
            //     this.setState({ error })
            // });
        event.preventDefault();
    };
    //function to set state with inputted values
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    onChangeCheckbox = event => {
        this.setState({[event.target.name]: event.target.checked });
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            isAdmin,
            error,
        } = this.state;

        //guard to stop null values being submitted
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <label>
                    Admin:
                </label>
                    <input
                        name="isAdmin"
                        type="checkbox"
                        checked={isAdmin}
                        onChange={this.onChangeCheckbox}
                    />


                <button disabled={isInvalid} type="submit">Sign Up</button>

                {error && <p>{error.message}</p>}

            </form>
        );
    }
}

// const SignUpLink = () => (
// //     <p>
// //         Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
// //     </p>
// // );
// // //gives the component access too all the properties of router using recompose
// // //recompose organizes higher order components
// // const SignUpForm = compose(
// //     withRouter,
// //     withFirebase,
// // )(SignUpFormBase);
// //
// // export default SignUpPage;
// //
// // export { SignUpForm, SignUpLink };

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default SignUpPage;
export { SignUpForm, SignUpLink };
