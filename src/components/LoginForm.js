import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index';

class LoginForm extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="form-wrapper">
                <form name="login-form">
                    <label htmlFor="login-form">Email</label>
                    <input type="email" />
                    <br />
                    <label htmlFor="login-form"> Password </label>
                    <input type="password" />
                    <button type="submit">Login </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        isLoginError: state.isLoginError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(email,password)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);