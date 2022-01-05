import {createStore, combineReducers} from 'redux';
import authReducer from './authReducer.js';

const rootReducer = combineReducers({
    auth: authReducer
}) 

export default createStore(rootReducer)