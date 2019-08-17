import React from 'react';


const SaleItemForm = (props) => {





    return (
        <div>
            <form onSubmit={props.handleSubmit}>
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