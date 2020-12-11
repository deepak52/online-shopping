
import { 
    ADD_TO_CART, 
    REMOVE_ITEM, 
    SUB_QUANTITY, 
    ADD_QUANTITY, 
    ADD_SHIPPING, 
    SUB_SHIPPING,
    LIST_ALL_PRODUCTS,
    PLACE_ORDER,
    LIST_ALL_ORDERS,
    EMPTY_CART,

} from './action-types/cart-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

//add qt action
export const addShipping=(id)=>{
    return{
        type: ADD_SHIPPING,
        id
    }
}

//add qt action
export const subShipping=(id)=>{
    return{
        type: SUB_SHIPPING,
        id
    }
}

export const showProducts=()=>{
    return{
        type: LIST_ALL_PRODUCTS,
    }
}

export const placeAnOrder=(data)=> {
    return {
        type: PLACE_ORDER,
        data
    }
}

export const listAllOrders=() => {
    return {
        type: LIST_ALL_ORDERS,
    }
}
export const emptyCart = () => {
    return {
    type: EMPTY_CART,
    }
    }
