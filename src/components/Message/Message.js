import React, {Component} from 'react';
import './Message.css';
import withAuthorization from "../Session/withAuthorization";

class Message extends Component {
    render() {
        return (
            <div className="message">
                <span className="message__author">
                    {this.props.message.userName}:
                </span>
                {this.props.message.message}
            </div>
        )
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Message);