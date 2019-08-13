import React, { Component } from 'react';
import './ChatApp.css';
import 'firebase/auth';
import 'firebase/database';
import withAuthorization from "../Session/withAuthorization";


class ChatApp extends Component {

}



const condition = authUser => !!authUser;

export default withAuthorization(condition)(ChatApp);