import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request.js'
import SaleItemList from '../components/SaleItems/SaleItemList';
import withAuthorization from "../components/Session/withAuthorization";
import SaleItemFormContainer from "./SaleItemFormContainer.js";
// import * as firebase from "firebase/";


class MainContainer extends Component {



    constructor(props){
        super(props);
            this.state = {
                user:"",
                saleItems:[],
                selectedFile: "",
                storage: null
            };
            this.findSaleItemById = this.findSaleItemById.bind(this);
        }


        componentDidMount() {
        const request = new Request();

            const promise2 = request.get('/saleItems');

            const promises = [promise2];

            Promise.all(promises).then(data => {
                ;
                this.setState({

                    user: this.props.firebase.auth.currentUser.email,

                    saleItems: data[0]._embedded.saleItems,

                    selectedFile: null
                });

            })
        }

        findSaleItemById(id){
        const saleItem = this.state.saleItems.find((saleItem) => {
            return saleItem.id === parseInt(id)
        });
            return saleItem;
        }


        render(){
        return(

            <div>
                <Router>
                    <React.Fragment>
                        <Switch>
                            <Route exact path="/saleitems" render={ (props) => {
                            return <SaleItemList imgRef={this.state.imgRef} saleItems={this.state.saleItems} user={this.state.user}/>
                            }}/>

                            <Route exact path="/new-item" render={ (props) => {
                                return <SaleItemFormContainer saleItems={this.state.saleItems} user={this.state.user} selectedFile={this.state.selectedFile}/>
                            }}/>
                        </Switch>
                    </React.Fragment>

                </Router>
            </div>

        )
        }


}

const condition = authUser => !!authUser;


export default withAuthorization(condition)(MainContainer);