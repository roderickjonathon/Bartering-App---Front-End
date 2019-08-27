import React, {Fragment} from 'react';
import withAuthorization from "../Session/withAuthorization";
import Carousel from "react-bootstrap/Carousel";
import SaleItem from "../SaleItems/SaleItem";

const AccountBarterList = (props) => {

    if(props.saleItems) {

        return (
            <Fragment>
                <Carousel className="component-list-account" >
                    {props.saleItems.map((saleItem, index) => {
                        return (
                            <Carousel.Item key={index} className="component-item">
                                <div className="saleItem">
                                    <SaleItem saleItem={saleItem} user={props.user}/>
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


export default withAuthorization(AccountBarterList);


