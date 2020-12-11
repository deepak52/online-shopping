import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css';

class Navbar extends Component{
     
    
    render() { 
        return(
                <nav className="nav-wrapper">
                    <div className="container">
                        <Link to="/" className="brand-logo">Shopping</Link>
                        <ul className="right">
                            <li><Link to="/orders">My Orders</Link></li>
                            <li><Link to="/cart"><i className="material-icons">shopping_cart</i><sup>{this.props.items.length}</sup></Link></li>
                            <li><Link to="/login">{this.props.user? `Welcome ${this.props.user}`: 'Login'}</Link></li>
                        </ul>
                    </div>
                </nav>
            )
        }
    }
    const mapStateToProps = (state)=>{ 
        return {
            user: state.user.firstName,
            items: state.cartReducer.addedItems,
        }
      }
    
    export default connect(mapStateToProps,null)(Navbar)