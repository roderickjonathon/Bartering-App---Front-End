import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request.js'
// import UserList from '../components/users/UserList'
import SaleItemList from '../components/SaleItems/SaleItemList';
// import Firebase, {withFirebase} from "../components/Firebase";
import withAuthorization from "../components/Session/withAuthorization";
// import NavBar from "../NavBar";



class MainContainer extends Component {

    constructor(props){
        super(props);
            this.state = {
                users:[],
                saleItems:[]
            };
            this.findSaleItemById = this.findSaleItemById.bind(this);
            this.findUserById = this.findUserById.bind(this);
        }

        componentDidMount() {
        const request = new Request();

            const promise1 = request.get('/users');
            const promise2 = request.get('/saleItems');

            const promises = [promise1, promise2];

            // console.log(promise1);
            // console.log(promise2)
            Promise.all(promises).then(data => {
                // console.log(data);
                this.setState({

                    users: data[0]._embedded.users,

                    saleItems: data[1]._embedded.saleItems
                });

            })
        }

        findSaleItemById(id){
        const saleItem = this.state.saleItems.find((saleItem) => {
            return saleItem.id === parseInt(id)
        });
            return saleItem;
        }

        findUserById(id){

        }


        render(){
        return(

            <div>
                <Router>
                    <React.Fragment>
                        <Switch>
                            <Route exact path="/saleitems" render={ (props) => {
                            return <SaleItemList saleItems={this.state.saleItems}/>
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