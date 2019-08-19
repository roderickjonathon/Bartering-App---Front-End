import React from 'react';
import {Link} from 'react-router-dom';
import withAuthorization from "../Session/withAuthorization";
import SaleItemImage from './SaleItemImage';


const SaleItem = (props) => {

    if (!props.saleItem) {
        return "Loading..."
    }

    const url = "/saleitems/" + props.saleItem.id;

    // eslint-disable-next-line
    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    return (

        <React.Fragment>
            <div className="item">
                <Link to={url}
                      className='component'>{props.saleItem.itemName.capitalize()} in {props.saleItem.location.capitalize()} </Link>
                <SaleItemImage saleItem={props.saleItem}/>
                <p>Looking for: {props.saleItem.barter.capitalize()}</p>
                <p>Description: {props.saleItem.description}</p>
                <a href={"mailto:" + props.saleItem.userEmail}>Contact {}</a>
            </div>
        </React.Fragment>

    )
};
const condition = authUser => !!authUser;
export default withAuthorization(condition)(SaleItem);