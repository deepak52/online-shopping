import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import {user, message, navigate} from './userReducer'

export default combineReducers({
    cartReducer,
    user,
    message,
    navigate,
});