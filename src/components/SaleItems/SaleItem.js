import React  from 'react';
import { Link } from 'react-router-dom';




const SaleItem = (props) => {

    if(!props.saleItem){
        return "Loading..."
    }

    const url = "/saleitems/" + props.saleItem.id;



    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    const newString =(str) =>{
        return str.replace("C:\\fakepath\\","")
    };


    // const picUrl = `/public/images/${newString(props.saleItem.img)}`;
    const picUrl = `/barter_img/${newString(props.saleItem.img)}`;



    return (
        <React.Fragment>
            <Link to={url} className='name'>{props.saleItem.itemName.capitalize()} in {props.saleItem.location.capitalize()} </Link>
            <p>Item: {props.saleItem.itemName.capitalize()}</p>
            <p>Pic:</p> <img src={picUrl.toString()} alt="pic_image"/>
            <p>Looking for: {props.saleItem.barter.capitalize()}</p>
            <p>Description: {props.saleItem.description}</p>
            <p>Email user for barter: {props.saleItem.userEmail}</p>
        </React.Fragment>
    )
};

export default SaleItem;