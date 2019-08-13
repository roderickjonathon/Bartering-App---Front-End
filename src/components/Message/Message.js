// import React, {Component} from 'react';
// import './Message.css';
// import withAuthorization from "../Session/withAuthorization";
//
// const Message = (props) => {
//     {
//         if (!props.message) {
//             return "Loading..."
//         } else {
//
//
//             return (
//                 <div className="message">
//                 <span className="message__author">
//                     {props.message.userName}:
//                 </span>
//                     {props.message.message}
//                 </div>
//             )
//         }
//     }
//
// };
//
// const condition = authUser => !!authUser;
//
// export default withAuthorization(condition)(Message);