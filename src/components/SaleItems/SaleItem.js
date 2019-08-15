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

    return (
        <React.Fragment>
            <Link to={url} className='name'>{props.saleItem.itemName.capitalize()} in {props.saleItem.location.capitalize()} </Link>
            <p>Item: {props.saleItem.itemName.capitalize()}</p>
            <p>Pic: <img src={props.saleItem.img} alt="pic_image"/> </p>
            <p>Barter for: {props.saleItem.barter.capitalize()}</p>
            <p>Email user for barter: {props.saleItem.userEmail}</p>
        </React.Fragment>
    )
};

export default SaleItem;