import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCr8gBHm224pW9BbqKgT6KB1oOyt2SC6Hg",
    authDomain: "glasgowbarter.firebaseapp.com",
    databaseURL: "https://glasgowbarter.firebaseio.com",
    projectId: "glasgowbarter",
    storageBucket: "",
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
    doPassWordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // the paths in the ref() method match the location where users will be stored in Firebase API which follows REST philosophy
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
}

export default Firebase;