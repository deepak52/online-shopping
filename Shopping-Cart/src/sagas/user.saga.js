import { put, takeLatest, call, all } from 'redux-saga/effects';
import { login, signup } from '../api/user.api'

function* login_Saga(data) {
    debugger
    console.log("login saga being hit 2")
    try {
        let response = yield login(data.payload);
        if (response.status === 200) {
            debugger
            let user = response.data;
            if (user && Object.keys(user).length > 0) {
                localStorage.setItem('token', JSON.stringify(response.data.token));
                yield put({
                    type: '@user/saga_action/message',
                    payload: { status: "message", text: "" }
                });
                yield put({
                    type: '@user/saga_action/load_user',
                    payload: response.data
                });
                yield put({
                    type: '@user/saga_action/redirect_user',
                    payload: {redirect: "redirect_to_home"}
                });
            } else {
                yield put({
                    type: '@user/saga_action/message',
                    payload: { status: "message", text: response.data.message }
                });
            }

        } 
    } catch (e) {
        yield put({
            type: '@user/saga_action/message',
            payload: { status: "error", text: 'Invalid Credentials' }
        });
    }
}

function* signup_Saga(data) { 
    try {
        let response = yield signup(data.payload);
        if (response.status === 201) {
            yield put({
                type: '@user/saga_action/load_user',
                payload: response.data.user
            });
        } else if (response.status === 200) {
            yield put({
                type: '@user/saga_action/message',
                payload: { status: "message", text: response.data.message }
            });
        }
        yield put({
            type: '@user/saga_action/redirect_user',
            payload: {redirect: "redirect_to_home"}
        });
    } catch (e) {
        yield put({
            type: '@user/saga_action/load_user',
            payload: {}
        });
    }
}

function* getAllProducts_Saga(data) {
    debugger
    console.log("saga 1")
    yield put({
        type: '@user/saga_action/load_user',
        payload: data
    });
}

export default function* watchUser() {
    yield all([
        takeLatest('@user/component/login', login_Saga),
        takeLatest('@user/component/register', signup_Saga),
        //takeLatest('LIST_ALL_PRODUCTS', getAllProducts_Saga)

    ])
} 