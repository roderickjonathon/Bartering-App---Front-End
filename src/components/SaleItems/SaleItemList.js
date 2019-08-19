import React, {Fragment} from 'react';
import SaleItem from './SaleItem.js';
import styles from './.SaleItemList.css'
import Carousel from "react-bootstrap/Carousel";


const SaleItemList = (props) => {

    if (props.saleItems) {
        return (
            <Fragment>
                <Carousel className="component-list" >
                    {props.saleItems.map((saleItem, index) => {
                        return (
                            <Carousel.Item key={index} className="component-item">
                            <div className={styles.SaleItemList}>
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



