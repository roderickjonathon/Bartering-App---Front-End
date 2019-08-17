import React, { Component} from 'react';
import Request from "../helpers/request";
import firebase from "firebase";




class SaleItemFormContainer extends Component {

    constructor(props){
        super(props);
        this.handleSaleItemPost = this.handleSaleItemPost.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.fileUploadHandler = this.fileUploadHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


     fileUploadHandler = () => {
         const storage = firebase.storage();
         const storageRef = storage.ref("images");
         const imagesRef = storageRef.child(this.state.selectedFile.name);
         imagesRef.put(this.state.selectedFile)
    };



    handleSaleItemPost = (saleItem) =>{
        const request = new Request();
        request.post('/saleItems', saleItem).then(() => {
            window.location = '/saleItems'
        });
    };

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        const saleItem = {
            "itemName": event.target.itemName.value,
            "location": event.target.location.value,
            "barter": event.target.barter.value,
            "img": event.target.img.value,
            "userEmail": this.props.user,
            "description": event.target.description.value
        };
        this.handleSaleItemPost(saleItem);
    };

    render(){
        return <div>
            <form onSubmit={this.handleSubmit}>
            <input required type="text" placeholder="Item Name" name="itemName"/>
            <input required type="text" placeholder="Location" name="location"/>
            <input required type="text" placeholder="A Short Description" name="description"/>
            <input required type="text" placeholder="What would you like to barter for?" name="barter"/>
            Select image to upload:
            <input required type="file" onChange={this.fileSelectedHandler} value={this.selectedFile} name="img"/>
            <input required type='button' onClick={this.fileUploadHandler} value="Upload pic"/>

            <button type="submit">Submit</button>
    </form>

    </div>

    }
}


export default SaleItemFormContainer;