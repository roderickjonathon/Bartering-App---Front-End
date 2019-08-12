import React  from 'react';
import { Link } from 'react-router-dom';

const SaleItem = (props) => {

    if(!props.saleItem){
        return "Loading..."
    }

    const url = "/saleitems/" + props.saleItem.id;

    return (
        <React.Fragment>
            <Link to={url} className='name'>{props.saleItem.itemName} in {props.saleItem.location} </Link>
            <p>Item: {props.saleItem.itemName} </p>
            <p>Location: {props.saleItem.location}</p>
        </React.Fragment>
    )
};

export default SaleItem;