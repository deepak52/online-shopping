import { put, takeLatest, call, all } from 'redux-saga/effects';
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,SUB_SHIPPING,EMPTY_CART} from '../actions/action-types/cart-actions'

/** fetch cart item */
function* addToCart_saga(data) {
    try {
        yield put({
            type: '@cart/saga/add_to_cart',
            id: data.id
        });
    } catch (e) {
        console.log(e);
        yield put({
            type: '@cart/saga/getCartItem_failed',
        });
    }
}

/** remove cart item */
function* removeFromCart_saga(data) {
    try {
        yield put({
            type: '@cart/saga/remove_from_cart',
            id: data.id
        });
    } catch (e) {
        console.log(e);
    }
}

/** subtract quantity of cart item */
function* subtractFromCart_saga(data) {
    try {
        yield put({
            type: '@cart/saga/subtract_from_cart',
            id: data.id
        });
    } catch (e) {
        console.log(e);
    }
}


/** add quantity of cart item */
function* addNewCartItem_saga(data) {
    try {
        yield put({
            type: '@cart/saga/add_new_quanttity_cart',
            id: data.id
        });
    } catch (e) {
        console.log(e);
        
    }
}

/** add quantity of cart item */
function* add_shipping_saga() {
    try {
        yield put({
            type: '@cart/saga/add_shipping_cart',
        });
    } catch (e) {
        console.log(e);
        
    }
}


/** remove quantity of cart item */
function* remove_shipping_saga() {
    try {
        yield put({
            type: '@cart/saga/remove_shipping_cart',
        });
    } catch (e) {
        console.log(e);
        
    }
}

/** remove quantity of cart item */
function* empty_cart_saga() {
    try {
    yield put({
    type: '@cart/saga/empty_cart',
    });
    } catch (e) {
    console.log(e);
    }
    }
    
export default function* watchCart() {

    yield all([
        takeLatest(ADD_TO_CART, addToCart_saga),
        takeLatest(REMOVE_ITEM, removeFromCart_saga),
        takeLatest(SUB_QUANTITY, subtractFromCart_saga),
        takeLatest(ADD_QUANTITY, addNewCartItem_saga),
        takeLatest(ADD_SHIPPING, add_shipping_saga),
        takeLatest(SUB_SHIPPING, remove_shipping_saga),
        takeLatest(EMPTY_CART, empty_cart_saga),
    ])
} 