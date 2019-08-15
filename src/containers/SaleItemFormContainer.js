import React, { Component} from 'react';
import Request from "../helpers/request";
import SaleItemForm from "../components/SaleItems/SaleItemForm";
import withAuthorization from "../components/Session/withAuthorization";

class SaleItemFormContainer extends Component {

    constructor(props){
        super(props);
        this.handleSaleItemPost = this.handleSaleItemPost.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.fileUploadHandler = this.fileUploadHandler.bind(this);
    }

    handleSaleItemPost = (saleItem) =>{
        const request = new Request();
        request.post('/saleItems', saleItem).then(() => {
            window.location = '/saleItems'
        })
    };

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    };

    fileUploadHandler = () => {
        const formData = new FormData();
        formData.append('img', this.state.selectedFile, this.state.selectedFile.name );
        const request = new Request();
        request.post('/saleItems', formData).then(() => {
            window.location = '/saleItems'
        })
    };

    render(){
        return <SaleItemForm handleSaleItemPost={this.handleSaleItemPost} fileUploadHandler={this.fileUploadHandler} fileSelectedHandler={this.fileSelectedHandler}/>
    }
}
const condition = authUser => !!authUser;


export default withAuthorization(condition)(SaleItemFormContainer);