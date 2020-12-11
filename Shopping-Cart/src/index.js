import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combinedReducers from './reducers'
import rootSaga from './sagas';

let sagaMiddleware = createSagaMiddleware();
const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));