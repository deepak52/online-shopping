import { all } from 'redux-saga/effects';

import watchProducts  from './product.saga';
import watchCart from './cart.saga';
import watchUser from './user.saga';


export default function* rootSaga() {
  yield all([
    watchCart(),
    watchProducts(),
    watchUser(),
    
  ]);
}
