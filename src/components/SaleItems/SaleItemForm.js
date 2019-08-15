import React from 'react';

const SaleItemForm = (props) => {


    function handleSubmit(event){
        event.preventDefault();
        const saleItem = {
            "itemName": event.target.itemName.value,
            "location": event.target.location.value,
            "barter": event.target.barter.value,
            "img": event.target.img.value,
            "userEmail": props.user
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
                <input type="file" onChange={props.fileSelectedHandler} value={props.selectedFile} name="img"/>
                <button type="submit">Submit</button>
            </form>

        </div>
    )


};


export default SaleItemForm;