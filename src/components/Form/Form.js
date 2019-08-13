// import React, { Component } from 'react';
// import './Form.css';
// import Message from '../Message/Message';
// import firebase from 'firebase/app';
// import withAuthorization from "../Session/withAuthorization";
//
// class Form extends Component {
//     constructor(props){
//         super(props);
//
//         this.state = {
//             userName: 'Jonny',
//             message: '',
//             list: [],
//         };
//
//         this.messageRef = firebase.database().ref().child('messages');
//         this.listenMessages();
//     }
//     UNSAFE_componentWillReceiveProps(nextProps) {
//         if(nextProps.user) {
//             this.setState({'userName': nextProps.user.displayName});
//         }
//     }
//
//     // componentWillMount(nextProps) {
//     //     this.setState({
//     //         userName: nextProps.user.displayName
//     //     });
//     // }
//
//     handleChange(event) {
//         this.setState({message: event.target.value});
//     }
//     handleSend() {
//         if (this.state.message) {
//             const newItem = {
//                 userName: this.state.userName,
//                 message: this.state.message,
//             }
//             this.messageRef.push(newItem);
//             this.setState({ message: '' });
//         }
//     }
//     handleKeyPress(event) {
//         if (event.key !== 'Enter') return;
//         this.handleSend();
//     }
//     listenMessages() {
//         this.messageRef
//             .limitToLast(10)
//             .on('value', message => {
//                 console.log(Object.values)
//                 this.setState({
//                     list: Object.values(message.val()),
//                 });
//             });
//     }
//     render() {
//         return (
//             <div className="form">
//                 <div className="form__message">
//                     { console.log("@@@@: ", this.state)}
//                     { this.state.list.map((item, index) =>
//                         <Message key={index} message={item} />
//                     )}
//                 </div>
//                 <div className="form__row">
//                     <input
//                         className="form__input"
//                         type="text"
//                         placeholder="Type message"
//                         value={this.state.message}
//                         onChange={this.handleChange.bind(this)}
//                         onKeyPress={this.handleKeyPress.bind(this)}
//                     />
//                     <button
//                         className="form__button"
//                         onClick={this.handleSend.bind(this)}
//                     >
//                         send
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// }
//
// const condition = authUser => !!authUser;
//
// export default withAuthorization(condition)(Form);