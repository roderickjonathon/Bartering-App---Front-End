import React, { Fragment } from 'react';
import SaleItem from './SaleItem.js';
import styles from './.SaleItemList.css'


const SaleItemList = (props) => {

        if (props.saleItems) {
            return (
                <Fragment >
                    <ul className="component-list">

                        {props.saleItems.map((saleItem, index) => {
                            return (
                                <li key={index} className="component-item">
                                    <div className={styles.SaleItemList}>
                                        <h3>Item:</h3>
                                        <SaleItem  saleItem={saleItem} user={props.user}/>
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
