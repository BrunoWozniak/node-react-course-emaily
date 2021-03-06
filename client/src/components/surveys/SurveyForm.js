
import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
    renderFields() {
        return(
            <div>
                {_.map(formFields, ({ label, name }) => {
                    return <Field
                        key={name}
                        type="text"
                        name={name}
                        label={label}
                        component={SurveyField}
                    />;
                })}
            </div>
        );
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.props.handleSubmit(this.props.onNext)}
                >
                    {this.renderFields()}
                    <Link className="grey btn-flat white-text" to="/surveys">
                        Cancel
                    </Link>
                    <button type="submit" className="blue btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate (values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');
    
    _.each(formFields, ({ name, label }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${label}`
        }
    })

    return errors;
};

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);