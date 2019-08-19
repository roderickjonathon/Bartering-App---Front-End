import React, {Component} from 'react';
import Request from "../helpers/request";
import firebase from "firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SaleItemFormContainer extends Component {

    constructor(props) {
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


    handleSaleItemPost = (saleItem) => {
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
            "userEmail": this.props.user.email,
            "description": event.target.description.value
        };
        this.handleSaleItemPost(saleItem);
        this.fileUploadHandler()
    };

    render() {
        return <div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control required type="text" placeholder="Item Name" name="itemName"/>
                </Form.Group>

                <Form.Group>
                <Form.Control required type="text" placeholder="Location" name="location"/>
                </Form.Group>

                <Form.Group>
                <Form.Control required as="textarea" rows="2" type="text" placeholder="A Short Description, condition of item etc.." name="description"/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control required as="textarea" rows="3" type="text" placeholder="What would you like to barter for?" name="barter"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label> Upload a picture      </Form.Label>
                <input  required type="file" onChange={this.fileSelectedHandler} value={this.selectedFile} name="img"/>

                </Form.Group>
                <Button disabled={this.state == null}  type="submit">Submit</Button>
            </Form>

        </div>

    }
}


export default SaleItemFormContainer;