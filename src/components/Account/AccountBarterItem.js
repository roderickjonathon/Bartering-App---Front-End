import React from 'react';
import withAuthorization from "../Session/withAuthorization";
import SaleItem from "../SaleItems/SaleItem";


const AccountBarterItem = (props) => {

    if (props.saleItem.userEmail === props.user.email) {

        console.log(props.user.email);

        return (
            <SaleItem saleItem={props.saleItem} user={props.user}/>
        )

    } else {
        return <h2> You have no barters! </h2>
    }
};
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountBarterItem);