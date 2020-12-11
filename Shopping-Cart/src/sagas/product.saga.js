import { put, takeLatest, all } from 'redux-saga/effects';
import { listProducts, placeOrder, listOrders } from '../api/product.api';
import { LIST_ALL_PRODUCTS, PLACE_ORDER, LIST_ALL_ORDERS } from '../actions/action-types/cart-actions'


function* getAllProducts_Saga() {
    try {
        let response = yield listProducts();
        console.log(response);
        if (response.status === 200) {
            
                yield put({
                    type: '@product/saga/list_products',
                    payload: { status: "success loading products", data: response.data.products }
                });
            

        } 
    } catch (e) {
        yield put({
            type: '@user/saga_action/message',
            payload: { status: "error", text: 'Error loading the products' }
        });
    }
}

function* placeOrder_Sage(data) {
    try {
        let response = yield placeOrder(data);
        console.log(response);
        if (response.status === 200) {
            
                yield put({
                    type: '@product/saga/place_order',
                    payload: { status: "success loading products", data: response.data.products }
                });
            

        } 
    } catch (e) {
        yield put({
            type: '@user/saga_action/message',
            payload: { status: "error", text: 'Error loading the products' }
        });
    }
}

function* listAllOrders_saga() {
    
    try {
        let response = yield listOrders();
        console.log(response);
        if (response.status === 200) {
            
                yield put({
                    type: '@product/saga/list_all_order',
                    payload: { status: "success loading orders", data: response.data }
                });
            

        } 
    } catch (e) {
        yield put({
            type: '@user/saga_action/message',
            payload: { status: "error", text: 'Error loading the orders' }
        });
    }
}




export default function* watchProducts() {
    yield all([
        takeLatest(LIST_ALL_PRODUCTS, getAllProducts_Saga),
        takeLatest(PLACE_ORDER, placeOrder_Sage),
        takeLatest(LIST_ALL_ORDERS, listAllOrders_saga,)

    ])
} 