import React  from 'react';
import { Link } from 'react-router-dom';
import withAuthorization from "../Session/withAuthorization";
import SaleItemImage from './SaleItemImage';



const SaleItem = (props) => {

    if(!props.saleItem){
        return "Loading..."
    }

    const url = "/saleitems/" + props.saleItem.id;



    // eslint-disable-next-line
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    return (
        <React.Fragment>
            <Link to={url} className='component'>{props.saleItem.itemName.capitalize()} in {props.saleItem.location.capitalize()} </Link>
            <p>Item: {props.saleItem.itemName.capitalize()}</p>
            <p>Pic:</p><SaleItemImage saleItem={props.saleItem}/>
            <p>Looking for: {props.saleItem.barter.capitalize()}</p>
            <p>Description: {props.saleItem.description}</p>
            <p>Email user for barter: {props.saleItem.userEmail}</p>
        </React.Fragment>
    )
};
const condition = authUser => !!authUser;
export default withAuthorization(condition)(SaleItem);