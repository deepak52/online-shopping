import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart, showProducts } from '../actions/cartActions';

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
    
    componentDidMount() {
        this.props.showProducts();
    }

    render(){
            
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={`http://localhost:8001/${item.image}`} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.description}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{ 
    return {
      items: state.cartReducer.items
    }
  }
const mapDispatchToProps= (dispatch)=>{ 
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        showProducts: () => {dispatch(showProducts())},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)