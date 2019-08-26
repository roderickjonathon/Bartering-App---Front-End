import React, {Fragment} from 'react';
import SaleItem from './SaleItem.js';
import Carousel from "react-bootstrap/Carousel";


const SaleItemList = (props) => {

    if (props.saleItems) {
        return (
            <Fragment>
                <Carousel className="component-list" >
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
export default SaleItemList;



