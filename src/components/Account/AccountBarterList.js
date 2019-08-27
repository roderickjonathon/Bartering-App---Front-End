import React, {Fragment} from 'react';
import withAuthorization from "../Session/withAuthorization";
import Carousel from "react-bootstrap/Carousel";
import AccountBarterItem from "./AccountBarterItem";

const AccountBarterList = (props) => {

    if (props.saleItems) {
        return (
            <Fragment>
                <Carousel className="component-list" >
                    {props.saleItems.map((saleItem, index) => {
                        return (
                            <Carousel.Item key={index} className="component-item">
                                <div className="saleItem">
                                    <AccountBarterItem saleItem={saleItem} user={props.user}/>
                                </div>
                            </Carousel.Item>
                        )
                    })
                    }
                </Carousel>
            </Fragment>
        )
    }
    };


const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountBarterList);


