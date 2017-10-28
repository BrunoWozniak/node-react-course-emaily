import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h2>Emaily</h2>
                Collect feedback from your customers
            </div>
        );
    }
};

export default connect()(Landing);