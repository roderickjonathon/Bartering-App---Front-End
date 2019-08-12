import React from 'react';
import SaleItem from './SaleItem.js';


const SaleItemList = (props) => {

    console.log(props.saleItems);

        if (props.saleItems) {
            return (
                <React.Fragment>
                    <ul className="component-list">

                        {props.saleItems.map((saleItem, index) => {
                            return (
                                <li key={index} className="component-item">
                                    <div className="component">

                                        <SaleItem saleitem={saleItem}/>
                                    </div>
                                </li>
                            )
                        })

                        }


                    </ul>
                </React.Fragment>
            )
        }





    };
export default SaleItemList;
