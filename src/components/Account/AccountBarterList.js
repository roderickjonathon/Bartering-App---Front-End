import React, {Fragment} from 'react';
import withAuthorization from "../Session/withAuthorization";
import Carousel from "react-bootstrap/Carousel";
import AccountBarterItem from "./AccountBarterItem";

const AccountBarterList = (props) => {

    if (props.saleItems) {
        return (
            <Fragment>
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


