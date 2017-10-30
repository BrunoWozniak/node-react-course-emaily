import { combineReducers } from 'redux';
import authReducer from './authReducer';

// Dev only, axios helper...
import axios from 'axios';
window.axios = axios;


export default combineReducers({
    auth: authReducer
});