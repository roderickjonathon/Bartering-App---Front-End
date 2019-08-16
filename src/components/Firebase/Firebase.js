import app from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';
// import * as ROLES from '../../constants/roles';

const firebaseConfig = {
    apiKey: "AIzaSyCr8gBHm224pW9BbqKgT6KB1oOyt2SC6Hg",
    authDomain: "glasgowbarter.firebaseapp.com",
    databaseURL: "https://glasgowbarter.firebaseio.com",
    projectId: "glasgowbarter",
    storageBucket: "gs://glasgowbarter.appspot.com/barter_img",
    messagingSenderId: "997563808186",
    appId: "1:997563808186:web:f266f0fccc2ee461"
};



//This is the authentication interface for the React components that will connect to the Firebase API.
//defines authentication methods
class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.db = app.database();
        // this.storage = app.app.storage("gs://glasgowbarter.appspot.com/barter_img");
        // this.storageRef = this.storage.ref();
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
        this.auth.getCurrentUser;


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



export default Firebase ;