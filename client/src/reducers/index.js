import { combineReducers } from 'redux';
import alert from './alerts';
import auth from './auth';
import city from './city';

export default combineReducers({
    alert , auth , city
});