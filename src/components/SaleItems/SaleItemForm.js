import React from 'react';
import firebase from "firebase/app"

const SaleItemForm = (props) => {

    function handleSubmit(event){
        event.preventDefault();
        const saleItem = {
            "itemName": event.target.itemName.value,
            "location": event.target.location.value,
            "barter": event.target.barter.value,
            "user":    firebase.getCurrentUser
        };
        props.handleSaleItemPost(saleItem);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Item Name" name="itemName"/>
                <input type="text" placeholder="Location" name="location"/>
                <input type="text" placeholder="What would you like to barter for?" name="barter"/>
                Select image to upload:
                <input type="file" onChange={props.fileSelectedHandler} name="fileToUpload" id="fileToUpload"/>
                    <input onClick={props.fileUploadHandler} type="submit" value="img" name="img"/>

                <button type="submit">Save</button>
            </form>

        </div>
    )


};


export default SaleItemForm;