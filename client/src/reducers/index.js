import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

// Dev only, axios helper...
import axios from 'axios';
window.axios = axios;


export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer
});