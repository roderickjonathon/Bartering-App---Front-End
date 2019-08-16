import React from 'react';

const SaleItemForm = (props) => {


    function handleSubmit(event){
        event.preventDefault();
        const saleItem = {
            "itemName": event.target.itemName.value,
            "location": event.target.location.value,
            "barter": event.target.barter.value,
            "img": event.target.img.value,
            "userEmail": props.user,
            "description": event.target.description.value
        };
        props.handleSaleItemPost(saleItem);


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input required type="text" placeholder="Item Name" name="itemName"/>
                <input required type="text" placeholder="Location" name="location"/>
                <input required type="text" placeholder="A Short Description" name="description"/>
                <input required type="text" placeholder="What would you like to barter for?" name="barter"/>
                Select image to upload:
                <input required type="file" onChange={props.fileSelectedHandler} value={props.selectedFile} name="img"/>
                <button type="submit">Submit</button>
            </form>

        </div>
    )


};


export default SaleItemForm;