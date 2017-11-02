import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onBack, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return(
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        )
    })
    return(
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <div style={{height: '20px'}}></div>
            <button className="grey white-text btn-flat" onClick={onBack}>
                Back
                <i className="material-icons right">arrow_back</i>
            </button>
            <button
                className="blue white-text btn-flat right"
                onClick={() => submitSurvey(formValues, history)}
            >
                Send Survey
            <i className="material-icons right">email</i>
            </button>
        </div>
    )
};

function mapStateToProps (state) {
    return {
        formValues: state.form.surveyForm.values
    }
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));