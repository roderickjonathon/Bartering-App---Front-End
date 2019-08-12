import React, { Fragment } from 'react';
import SaleItem from './SaleItem.js';


const SaleItemList = (props) => {
    // console.log(props.saleItems);

        if (props.saleItems) {
            return (
                <Fragment>
                    <ul className="component-list">
                        {console.log(props.saleItems)  }

                        {props.saleItems.map((saleItem, index) => {
                            return (
                                <li key={index} className="component-item">
                                    <div className="component">
                                        <p>Item:</p>
                                        <SaleItem saleItem={saleItem}/>
                                    </div>
                                </li>
                            )
                        })

                        }


                    </ul>
                </Fragment>
            )
        }

    };
export default SaleItemList;
