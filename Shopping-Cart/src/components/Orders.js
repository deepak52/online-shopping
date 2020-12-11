import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllOrders } from '../actions/cartActions';

class Orders extends Component{
    componentDidMount() {
        this.props.listAllOrders()
        }
        
        componentDidUpdate() {
        this.props.listAllOrders()
        }
    
    render(){
           debugger   
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.product.id}>
                                    <div className="item-img"> 
                                        <img src={`http://localhost:8001/${item.product.productImage}`} alt={item.product.productImage} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.product.title}</span>
                                        <p>{item.product.description}</p>
                                        <p><b>Price: {item.product.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <p>
                                            <b>Total: {item.quantity * item.product.price}</b> 
                                        </p>
                                       
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                 
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    debugger
    return{
        items: state.cartReducer.items,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        listAllOrders: (id)=>{dispatch(listAllOrders())},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Orders)