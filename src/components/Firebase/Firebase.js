import app from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCr8gBHm224pW9BbqKgT6KB1oOyt2SC6Hg",
    authDomain: "glasgowbarter.firebaseapp.com",
    databaseURL: "https://glasgowbarter.firebaseio.com",
    projectId: "glasgowbarter",
    storageBucket: "",
    messagingSenderId: "997563808186",
    appId: "1:997563808186:web:f266f0fccc2ee461"
};


class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig);

    }
}

export default Firebase;