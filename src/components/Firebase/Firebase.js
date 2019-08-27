import app from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';
// import * as ROLES from '../../constants/roles';

const firebaseConfig = {
    apiKey: "AIzaSyCr8gBHm224pW9BbqKgT6KB1oOyt2SC6Hg",
    authDomain: "glasgowbarter.firebaseapp.com",
    databaseURL: "https://glasgowbarter.firebaseio.com",
    projectId: "glasgowbarter",
    storageBucket: "gs://glasgowbarter.appspot.com/",
    messagingSenderId: "997563808186",
    appId: "1:997563808186:web:f266f0fccc2ee461"
};


//This is the authentication interface for the React components that will connect to the Firebase API.
// this class defines the required authentication methods provided by Firease
class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.db = app.database();

    }


    //create user function - uses Firebase API to authenticate
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    //Sign in with email and PW
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    //sign out function
    doSignOut = () => this.auth.signOut();

    //password reset
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    //password change
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    //get current user
    getCurrentUser = () =>
        this.auth.getCurrentUser();



    //onAuthStateChanged receives a function as a prameter that has acess to the authenticated user.
    // the passed function is called every time something changes for the user.
    // becomes null upon signing out
    onAuthUserListener = (next, fallback) =>
        this.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                this.user(authUser.uid)
                    .once('value')
                    .then(snapshot => {
                        const dbUser = snapshot.val();

                        // default empty roles
                        if (!dbUser.roles) {
                            dbUser.roles = {};
                        }

                        // merge auth and db user
                        authUser = {
                            uid: authUser.uid,
                            displayName: authUser.displayName,
                            email: authUser.email,
                            ...dbUser,
                        };

                        next(authUser);
                    });
            } else {
                fallback();
            }
        });


    // the paths in the ref() method match the location where users will be stored in Firebase API which follows REST philosophy
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');



}

export default Firebase;