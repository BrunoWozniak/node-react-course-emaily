// SurveyNew shows SurveyForm and SurveyFormReview components

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    constructor(props) {
        super(props);
        this.state = { showFormReview: false };
    }

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview onBack={() => this.setState({ showFormReview: false })} />
        }

        return <SurveyForm onNext={() => this.setState({ showFormReview: true })} />
    }

    render() {
        return (
            <div>
                { this.renderContent() }
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);