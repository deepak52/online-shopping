import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, Redirect } from "react-router";

import { addShipping, subShipping, placeAnOrder, emptyCart } from '../actions/cartActions'
class Recipe extends Component{
    constructor(props) {
        super(props);
        this.state = {
            naviagateToOrders: false,
        }
    }
    
    componentWillUnmount() {
        // if(this.refs.shipping.checked)
             // this.props.substractShipping()
    }

    handleChecked = (e)=>{
        debugger
        if(e.target.checked){
            this.props.substractShipping();
        }
        // else {
        //     this.props.substractShipping();
        // }
    }

    handleCheckout = () => {
        this.props.placeAnOrder(this.props.addedItems);
        this.props.emptyCart();
        this.setState({
            naviagateToOrders: true
        })
    }

    render(){
        if(this.state.naviagateToOrders) {
            return(
                <Redirect to={{
                    pathname: '/orders'
                  }}/>
            )
        }
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="checkout">
                        <button onClick={this.handleCheckout} className="waves-effect waves-light btn">Checkout</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{ 
    return{
        addedItems: state.cartReducer.addedItems,
        total: state.cartReducer.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        // addShipping: ()=>{dispatch(addShipping())}
        substractShipping: ()=>{dispatch(subShipping())},
        placeAnOrder: (data) =>{dispatch(placeAnOrder(data))}, 
        emptyCart:() =>{dispatch(emptyCart())},
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recipe));
