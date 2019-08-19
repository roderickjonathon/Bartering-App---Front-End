import React from 'react';
import withAuthorization from "../Session/withAuthorization";
import SaleItemImage from './SaleItemImage';
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const SaleItem = (props) => {

    if (!props.saleItem) {
        return "Loading..."
    }

    // eslint-disable-next-line
    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    return (
        <React.Fragment>
            <Jumbotron className="item" fluid>
                {/*<Form >*/}

                    <Row className="justify-content-md-center">
                        <Col>
                <h2>
                    {props.saleItem.itemName.capitalize()} in {props.saleItem.location.capitalize()} </h2>
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
                        <p>{props.saleItem.barter.capitalize()}</p>
                    </Col>
                </Row>

                    <Row>
                        <Col className="justify-content-md-center">
                <a href={"mailto:" + props.saleItem.userEmail}>Click here to contact for more info!</a>
                        </Col>
                    </Row>
                {/*</Form>*/}
            </Jumbotron>
        </React.Fragment>

    )
};
const condition = authUser => !!authUser;
export default withAuthorization(condition)(SaleItem);