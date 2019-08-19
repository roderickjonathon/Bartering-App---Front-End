import React, {Fragment} from 'react';
import SaleItem from './SaleItem.js';
import styles from './.SaleItemList.css'


const SaleItemList = (props) => {

    if (props.saleItems) {
        return (
            <Fragment>
                <ul className="component-list">

                    {props.saleItems.map((saleItem, index) => {
                        return (
                            <ul key={index} className="component-item">
                                <div className={styles.SaleItemList}>
                                    <SaleItem saleItem={saleItem} user={props.user}/>
                                </div>
                            </ul>
                        )
                    })

                    }


                </ul>
            </Fragment>
        )
    }

};
export default SaleItemList;
