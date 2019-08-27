import React from 'react';
import withAuthorization from "../Session/withAuthorization";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SaleItemImage from "../SaleItems/SaleItemImage";


const AccountBarterItem = (props) => {

    if (props.saleItem.userEmail === props.user.email) {

        console.log(props.user.email);

        return (

            <React.Fragment>

                <Row className="justify-content-md-center">
                    <Col>
                        <h2>
                            {props.saleItem.itemName} in {props.saleItem.location} </h2>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <SaleItemImage class="pic" saleItem={props.saleItem}/>
                    </Col>
                </Row>

                <Row>
                    <Col className="justify-content-md-center">
                        <p>{props.saleItem.description}</p>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col className="justify-content-md-center">
                        <p>{props.saleItem.barter}</p>
                    </Col>
                </Row>
            </React.Fragment>
        )

    } else {
        return <h2>  </h2>
    }
};
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountBarterItem);