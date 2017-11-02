import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys()
    }

    renderSurveys() {
        return this.props.surveys.reverse().map( survey => {
            return (
                <div className="card darken-1" key={survey.id} >
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                        <p>{survey.body}</p>
                        <p className="right">
                            Sent on: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action">
                        <a className="blue-text">Yes: {survey.yes}</a>
                        <a className="blue-text">No: {survey.no}</a>
                        <a className="blue-text">(Last response: {
                            survey.yes < 1 && survey.no < 1 ? 'No response' : new Date(survey.lastResponded).toLocaleDateString()
                        })</a>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { surveys: state.surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);