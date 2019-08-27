import React, {Fragment} from 'react';
import withAuthorization from "../Session/withAuthorization";
import AccountBarterItem from "./AccountBarterItem";

const AccountBarterList = (props) => {

    if (props.saleItems) {
        return (
            <Fragment>
                <h1> My Barters </h1>
                    {props.saleItems.map((saleItem, index) => {
                        return (
                                <div className="saleItem">
                                    <AccountBarterItem saleItem={saleItem} user={props.user}/>
                                </div>
                        )
                    })
                    }
            </Fragment>
        )
    }
    };


const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountBarterList);


