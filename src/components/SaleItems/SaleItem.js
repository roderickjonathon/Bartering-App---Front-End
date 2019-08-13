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
            {/*<p>Location: {props.saleItem.location.capitalize()}</p>*/}
            <p>Barter for: {props.saleItem.barter.capitalize()}</p>
        </React.Fragment>
    )
};

export default SaleItem;