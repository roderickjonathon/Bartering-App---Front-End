import React, {Component} from 'react';
import './Message.css';
import withAuthorization from "../Session/withAuthorization";
import * as firebase from 'firebase/messaging'
// import * as firebase from 'firebase/app';

// const messaging = firebase.messaging();
// messaging.usePublicVapidKey("BNbfSHI-A-vWSRoKBk486cPIvLaF5UhlXgq6QapmyCEv9mUvm8YRcQ4hBFhD_ZWReKZ-TgdQR7rR659tg8qzj6k");
//
// Notification.requestPermission().then((permission) => {
//     if (permission === 'granted') {
//         console.log('Notification permission granted.');
//     }
// });


const Message = (props) => {
    {
        if (!props.message) {
            return "Loading..."
        } else {


            return (
                <div className="message">
                <span className="message__author">
                    {props.message.userName}:
                </span>
                    {props.message.message}
                </div>
            )
        }
    }

};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Message);