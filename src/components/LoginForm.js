import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index';
import {bindActionCreators} from 'redux';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
        this.changedEmail = this.changedEmail.bind(this);
        this.changedPassword = this.changedPassword.bind(this);
        this.submit = this.submit.bind(this);
    }

    changedEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    changedPassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    submit(event) {
        event.preventDefault();

        let {email, password} = this.state;

        this.props.login(email, password);
        this.setState({
            password: '',
            email: ''
        })
        console.log("after submit" , this.props)
    }
    render() {
        let {email, password} = this.state;
        let {isLoginSuccess} = this.props;
        console.log("PROPS*****" + this.props.isLoginPending);
        return (
            <div className="form-wrapper" >
                <form onSubmit={this.submit} name="login-form">
                    <label htmlFor="login-form">Email</label>
                    <input onChange={this.changedEmail} type="email" />
                    <br />
                    <label htmlFor="login-form"> Password </label>
                    <input onChange={this.changedPassword} type="password" />
                    <button type="submit">Login </button>
                    {isLoginSuccess && <div>hi</div>}
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       isLoginPending: state.isLoginPending,
       isLoginSuccess: state.isLoginSuccess,
       isloginError: state.isloginError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email ,password))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);