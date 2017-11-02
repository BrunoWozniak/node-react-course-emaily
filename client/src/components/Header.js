import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return(
                    <li><a href="/auth/google">Login with Google</a></li>
                );
            default:
                const creditWord = this.props.auth.credits > 1 ? 'credits' : 'credit';
                return(
                    [
                        <li key="1"><Payments /></li>,
                        <li key="2" style={{ margin: '0 10px' }}>
                            {this.props.auth.credits} {creditWord}
                        </li>,
                        <li key="3"><a href="/api/logout">Logout</a></li>
                    ]
                ); 
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper blue-grey darken-1">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                    >
                        Emaily
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
};

const mapStateToProps = ({ auth }) => {
    return { auth };
}

export default connect(mapStateToProps)(Header);